/** Batch 2: continue enriching the thinnest bio topics with AP-level depth. */
export const ENRICHMENTS = {
  'bio/bio-prep-hs/P2.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能解释酶降低活化能而不改变 ΔG 的催化机制。',
      '能用活性位点与诱导契合说明酶的特异性。',
      '能分析温度、pH、底物浓度与抑制剂对酶促速率的影响。'
    ],
    essentialKnowledge: [
      '酶是生物催化剂，绝大多数是蛋白质，少数是 RNA 核酶。',
      '酶与底物在活性位点特异性结合，降低活化能 \\(E_a\\)，不改变 \\(\\Delta G\\) 与平衡常数。',
      '反应前后酶不被消耗，可重复使用；速率受温度、pH、底物浓度与抑制剂调节。',
      '高温或极端 pH 使酶变性，活性位点构象破坏；低温只是降低活性，不一定变性。',
      '竞争性抑制剂增大表观 \\(K_m\\)、不改变 \\(V_{\\max}\\)；非竞争性抑制剂降低 \\(V_{\\max}\\)。'
    ],
    definition: '酶是生物催化剂，绝大多数为蛋白质（少数为 RNA 核酶）。酶与底物在活性位点特异性结合，降低反应活化能 \\(E_a\\)，从而加快反应速率；酶不改变反应的 \\(\\Delta G\\) 与平衡点，反应前后自身不被消耗。',
    intuition: '酶像把底物摆到正确姿势的“模具”，让反应更容易翻过能量山坡，但不改变山坡两侧的高度差。',
    intuitionDetailed: '诱导契合模型：底物靠近时活性位点发生构象微调，形成酶–底物复合物；产物释放后酶恢复原状，可重复使用。',
    formulas: [
      { latex: 'E+S\\rightleftharpoons ES\\rightarrow E+P', note: '酶促反应的简化路径。' },
      { latex: 'v=\\dfrac{V_{\\max}[S]}{K_m+[S]}', note: '米氏方程（定性理解：低 \\([S]\\) 近似一级，高 \\([S]\\) 饱和）。' },
    ],
    conditions: ['适宜温度与 pH；过酸、过碱或高温可使酶变性', '底物浓度足够时速率趋于 \\(V_{\\max}\\)', '酶具有特异性，一种酶通常只催化一类反应'],
    keyPoints: ['降低 \\(E_a\\)，不改变 \\(\\Delta G\\)', '活性位点决定特异性', '可重复使用，微量高效', '温度、pH、抑制剂与辅因子调节活性'],
    misconceptions: [
      '认为酶提供能量或改变平衡常数',
      '认为酶在反应中被消耗',
      '认为温度越高越好（高温变性）',
      '混淆竞争性抑制剂（影响 \\(K_m\\)）与非竞争性抑制剂（影响 \\(V_{\\max}\\)）',
    ],
    examples: [
      {
        title: '例 1 · 反应坐标',
        prompt: '画出有酶与无酶时的反应坐标图，说明 \\(E_a\\) 与 \\(\\Delta G\\) 的变化。',
        steps: ['两条曲线起点、终点相同，故 \\(\\Delta G\\) 相同。', '有酶曲线的峰值更低，即 \\(E_a\\) 更小。'],
        solution: '酶只降低 \\(E_a\\)，不改变 \\(\\Delta G\\) 与平衡。',
      },
      {
        title: '例 2 · 温度',
        prompt: '为何人体酶的最适温度约为 \\(37^\\circ\\mathrm{C}\\)，而高温会使酶失活？',
        steps: ['温度升高增加分子碰撞，速率上升。', '超过最适温度后，氢键与疏水作用被破坏，蛋白质变性，活性位点构象改变。'],
        solution: '最适约 \\(37^\\circ\\mathrm{C}\\)；高温变性导致不可逆失活。',
      },
      {
        title: '例 3 · 抑制',
        prompt: '竞争性抑制剂如何影响 \\(K_m\\) 与 \\(V_{\\max}\\)？',
        steps: ['抑制剂与底物竞争活性位点，表观亲和力下降，\\(K_m\\) 增大。', '提高底物浓度可挤掉抑制剂，\\(V_{\\max}\\) 不变。'],
        solution: '\\(K_m\\uparrow\\)，\\(V_{\\max}\\) 不变。',
      },
    ],
    examTips: [
      'CED Unit 3：酶的结构、催化与调节',
      '实验题：温度、pH、底物浓度曲线；注意区分“变性”与“抑制”',
      'FRQ 用“结构 → 功能 → 证据”链条作答',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.6', title: '酶结构与功能', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.1', title: '酶催化', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.2', title: '环境影响酶', relation: '应用' },
    ],
    development: ['催化剂与活化能', '活性位点与诱导契合', '温度、pH、浓度的影响', '抑制剂与调节'],
    checks: ['酶改变 \\(E_a\\) 还是 \\(\\Delta G\\)？', '高温与低温对酶活性的影响有何不同？'],
    summary: '酶通过降低活化能加速反应，具有特异性、可重复使用且受环境调节。',
  },

  'bio/bio-u4/4.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分负反馈与正反馈并各举生物实例。',
      '能画出反馈回路的感受器、控制中心与效应器。',
      '能解释反馈延迟为何可能引起振荡。'
    ],
    essentialKnowledge: [
      '反馈是输出反过来影响输入的调节回路，包含感受器、控制中心与效应器。',
      '负反馈抵消偏差、维持稳态；正反馈放大偏差、推动过程完成。',
      '负反馈需要设定点与可检测的偏差，回路延迟可能引起振荡。',
      '正反馈必须由外部事件终止；分娩与血液凝固是经典正反馈。',
      '反馈调节的是系统变量，不等同于单条反射弧。'
    ],
    definition: '反馈是系统输出反过来影响自身输入或过程的调节回路。负反馈在输出偏离设定点时启动反应抵消偏差，维持稳态；正反馈则放大偏差，使过程迅速推进直至被外部事件终止。',
    intuition: '负反馈像恒温器：房间变冷就加热，变热就停；正反馈像扩音器的啸叫：声音稍大就被放大得更大。',
    intuitionDetailed: '生物反馈回路通常包含感受器（检测变量）、控制中心（比较设定点并发出信号）和效应器（产生反应）。神经与内分泌信号把三者连接起来。',
    formulas: [
      { latex: '\\text{刺激}\\to\\text{感受器}\\to\\text{控制中心}\\to\\text{效应器}\\to\\text{反应}', note: '反馈回路的基本组成。' },
    ],
    conditions: ['负反馈需要明确的设定点与可检测的偏差', '回路有延迟时可能出现振荡（如体温调节的寒战与出汗交替）', '正反馈必须由外部事件终止，否则会失控'],
    keyPoints: ['负反馈维持稳态，正反馈放大过程', '感受器、控制中心、效应器缺一不可', '血糖、体温、渗透压是经典负反馈', '分娩与血液凝固是经典正反馈'],
    misconceptions: [
      '把“负反馈”理解为“有害的反馈”',
      '认为正反馈总是坏事（分娩、凝血需要正反馈）',
      '把反射弧与反馈回路混为一谈',
      '忽略感受器与效应器之间的控制中心',
    ],
    examples: [
      {
        title: '例 1 · 血糖',
        prompt: '进食后血糖升高，人体如何通过负反馈恢复？',
        steps: ['胰岛 β 细胞检测到血糖升高，分泌胰岛素。', '胰岛素促进细胞摄取葡萄糖、促进肝糖原合成。', '血糖下降后胰岛素分泌减少，回路关闭。'],
        solution: '胰岛素–血糖负反馈；血糖降低时胰高血糖素反向调节。',
      },
      {
        title: '例 2 · 体温',
        prompt: '寒冷环境中，体温调节的效应器有哪些反应？',
        steps: ['下丘脑作为控制中心检测体温下降。', '效应器包括骨骼肌战栗产热、皮肤血管收缩减少散热、汗腺分泌减少。'],
        solution: '产热增加、散热减少，体温回升。',
      },
      {
        title: '例 3 · 正反馈',
        prompt: '分娩时催产素的作用为何属于正反馈？',
        steps: ['子宫收缩刺激催产素释放。', '催产素增强子宫收缩，进一步刺激释放。', '胎儿娩出后刺激消失，回路终止。'],
        solution: '输出放大输入，直到分娩完成。',
      },
    ],
    examTips: [
      'CED Unit 4：细胞通讯与反馈',
      'FRQ 常要求画出回路并标出感受器、控制中心、效应器',
      '读图题：先判断变量偏离方向，再判断反应是抵消还是放大',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.1', title: '细胞通讯', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.3', title: '信号转导', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.7', title: '渗透与水势', relation: '应用' },
    ],
    development: ['反馈回路组成', '负反馈与稳态', '正反馈与过程放大', '神经与内分泌整合'],
    checks: ['负反馈与正反馈的核心区别是什么？', '为什么正反馈需要外部终止事件？'],
    summary: '负反馈抵消偏差维持稳态，正反馈放大偏差推动过程完成。',
  },

  'bio/bio-u6/6.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能描述核糖体、tRNA 与 mRNA 在翻译中的分工。',
      '能按 5′→3′ 方向写出密码子与反密码子的配对关系。',
      '能区分起始、终止密码子与阅读框的作用。'
    ],
    essentialKnowledge: [
      '核糖体按 mRNA 上密码子的顺序，把 tRNA 携带的氨基酸连成多肽。',
      'mRNA 沿 \\(5\'\\to3\'\\) 方向读取，多肽从 N 端向 C 端延伸。',
      'tRNA 反密码子与密码子反向平行配对；AUG 兼作起始密码子并编码甲硫氨酸。',
      '核糖体有 A、P、E 三个位点；多聚核糖体可同时翻译同一条 mRNA。',
      '遗传密码按三联体、无重叠方式读取，阅读框决定下游全部密码子。'
    ],
    definition: '翻译是核糖体按 mRNA 上密码子的顺序，把 tRNA 携带的氨基酸连接成多肽的过程。mRNA 按 \\(5\\to 3\\) 方向读取，多肽从 N 端向 C 端延伸；tRNA 的反密码子与密码子反向平行配对。',
    intuition: 'mRNA 是一串三字母密码，tRNA 是搬运工，核糖体是装配线：每读一个密码子，就装上对应的氨基酸。',
    intuitionDetailed: '起始阶段小亚基与起始 tRNA 结合到起始密码子 AUG；延伸阶段核糖体沿 mRNA 移动，A 位接受氨酰-tRNA，P 位形成肽键，E 位释放空 tRNA；终止密码子招募释放因子，多肽与核糖体分离。',
    formulas: [
      { latex: '\\text{AUG}\\;\\text{起始} \\qquad \\text{UAA/UAG/UGA}\\;\\text{终止}', note: '常见起始与终止密码子。' },
      { latex: '5\\text{-mRNA-}3\\;\\Rightarrow\\;\\text{N-多肽-C}', note: '方向关系。' },
    ],
    conditions: ['需要 mRNA、核糖体、tRNA、氨基酸、GTP/ATP 与多种翻译因子', '密码子按三联体读取，阅读框一旦确定不可随意移动', '遗传密码具有简并性：多个密码子可编码同一氨基酸'],
    keyPoints: ['起始密码子 AUG 同时编码甲硫氨酸', 'tRNA 反密码子与密码子反向平行配对', '核糖体有 A、P、E 三个位点', '多肽链从 N 端向 C 端延伸', '一个 mRNA 可同时被多个核糖体翻译（多聚核糖体）'],
    misconceptions: [
      '把模板链与 mRNA 混淆（翻译直接读 mRNA）',
      '认为 tRNA 携带的是密码子而不是氨基酸',
      '把核糖体移动方向写成 \\(3\\to 5\\)',
      '认为一个密码子可以编码多个氨基酸',
      '忽略移码突变会改变整个下游阅读框',
    ],
    examples: [
      {
        title: '例 1 · 读码',
        prompt: 'mRNA 片段为 \\(5\\text{-AUG GCU UAA-}3\\)，写出翻译产物。',
        steps: ['AUG → 甲硫氨酸（起始）。', 'GCU → 丙氨酸。', 'UAA 为终止密码子，不编码氨基酸。'],
        solution: '二肽：甲硫氨酸–丙氨酸。',
        solutionLatex: '\\text{Met-Ala}',
      },
      {
        title: '例 2 · 移码',
        prompt: '若在起始密码子后插入一个碱基，翻译结果会怎样？',
        steps: ['插入使阅读框整体移动一位。', '下游所有密码子重新分组，氨基酸序列大面积改变。', '通常会提前遇到终止密码子，产生截短蛋白。'],
        solution: '移码突变，下游序列改变并常导致提前终止。',
      },
      {
        title: '例 3 · 简并性',
        prompt: '为何同义突变可能不改变蛋白质序列？',
        steps: ['遗传密码具有简并性，多个密码子对应同一氨基酸。', '若碱基替换后仍编码同一氨基酸，则为同义（沉默）突变。'],
        solution: '密码子改变但氨基酸不变。',
      },
    ],
    examTips: [
      'CED Unit 6：基因表达与调控',
      '使用密码子表时先确认 \\(5\\to 3\\) 方向与阅读框',
      'FRQ 常考：给出 DNA/mRNA 序列，写出多肽或判断突变类型',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.1', title: 'DNA 与 RNA 结构', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.3', title: '转录与 RNA 加工', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.5', title: '基因表达调控', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.7', title: '突变', relation: '应用' },
    ],
    development: ['遗传密码与阅读框', '起始、延伸、终止', 'tRNA 与核糖体位点', '多聚核糖体与突变影响'],
    checks: ['翻译直接读取哪条链？方向如何？', '起始密码子与终止密码子分别是什么？'],
    summary: '核糖体按 mRNA 密码子顺序、借助 tRNA 将氨基酸连接成 N→C 方向的多肽。',
  },

  'bio/bio-u2/2.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用流动镶嵌模型解释膜的结构与流动性。',
      '能说明磷脂、膜蛋白、胆固醇与糖类各自的功能。',
      '能由膜结构推断物质的选择透过性。'
    ],
    essentialKnowledge: [
      '质膜以磷脂双分子层为骨架，镶嵌蛋白质、胆固醇与糖类。',
      '流动镶嵌模型强调膜的流动性、不对称性与动态更新。',
      '选择透过性由脂质双层与膜蛋白共同决定。',
      '整合蛋白贯穿膜，外周蛋白附着于膜表面；糖蛋白/糖脂参与识别与黏附。',
      '胆固醇在动物细胞膜中调节流动性：低温防僵硬，高温限制磷脂过度运动。'
    ],
    definition: '质膜是以磷脂双分子层为骨架、镶嵌蛋白质、胆固醇与糖类的选择性通透膜。流动镶嵌模型认为：磷脂与蛋白质可在膜内横向移动，膜是不对称且动态的。',
    intuition: '质膜像一层油膜，里面漂着许多功能蛋白；疏水尾部朝内、亲水头部朝外，形成一道“有门卫的墙”。',
    intuitionDetailed: '非极性小分子（O₂、CO₂）可自由扩散；水主要经水通道蛋白；离子与极性大分子需要通道/载体蛋白或囊泡运输。糖蛋白与糖脂参与细胞识别。',
    formulas: [
      { latex: '\\text{净扩散}\\propto\\dfrac{\\Delta C\\cdot A}{d}', note: '浓度差、面积越大、膜越薄，扩散越快（定性）。' },
    ],
    conditions: ['流动镶嵌模型适用于细胞质膜与多数细胞器膜', '胆固醇调节动物细胞膜的流动性', '膜蛋白的分布具有不对称性'],
    keyPoints: ['磷脂双分子层是骨架', '整合蛋白贯穿膜，外周蛋白附着表面', '选择透过性由脂质与膜蛋白共同决定', '糖蛋白/糖脂参与识别与黏附'],
    misconceptions: [
      '把质膜看成静态的刚性结构',
      '认为所有小分子都能自由通过（带电离子不易）',
      '认为胆固醇只起“堵塞”作用（它调节流动性）',
      '忽略膜蛋白在运输与信号转导中的作用',
    ],
    examples: [
      {
        title: '例 1 · 运输方式',
        prompt: 'O₂、葡萄糖、Na⁺ 分别主要通过什么方式跨膜？',
        steps: ['O₂ 非极性小分子 → 简单扩散。', '葡萄糖 → 载体蛋白协助扩散（或主动运输，视细胞而定）。', 'Na⁺ 带电 → 通道蛋白或泵。'],
        solution: '简单扩散 / 协助扩散 / 通道或主动运输。',
      },
      {
        title: '例 2 · 温度',
        prompt: '温度升高对膜流动性有何影响？胆固醇如何调节？',
        steps: ['温度升高使磷脂运动加快，流动性增大。', '胆固醇在高温下限制磷脂运动，在低温下阻止紧密排列。'],
        solution: '胆固醇起缓冲作用，维持膜流动性相对稳定。',
      },
      {
        title: '例 3 · 识别',
        prompt: '为何血型不同的人红细胞膜表面不同？',
        steps: ['红细胞膜上有糖蛋白/糖脂。', '糖链结构由基因决定，形成不同抗原。'],
        solution: '膜表面糖链决定血型抗原。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞结构与功能',
      'FRQ 常要求根据分子性质判断运输方式',
      '画膜结构时标出磷脂头部/尾部、整合蛋白、糖蛋白',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.4', title: '膜通透性', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.5', title: '膜运输', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.7', title: '渗透与水势', relation: '应用' },
    ],
    development: ['磷脂双分子层', '膜蛋白与不对称性', '流动性与胆固醇', '选择透过性'],
    checks: ['为什么带电离子不能自由扩散？', '胆固醇在高温和低温下分别起什么作用？'],
    summary: '质膜是动态的磷脂双分子层，借助膜蛋白实现选择透过、识别与信号转导。',
  },

  'bio/bio-u6/6.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分替换、插入、缺失与染色体变异。 · Distinguish substitutions, insertions, deletions, and chromosomal mutations.',
      '能判断沉默、错义、无义与移码突变的后果。 · Predict the consequences of silent, missense, nonsense, and frameshift mutations.',
      '能解释突变随机性及其与自然选择的关系。 · Explain the randomness of mutation and its relationship to natural selection.'
    ],
    essentialKnowledge: [
      '突变是 DNA 序列的可遗传改变，包括碱基替换、插入、缺失与染色体变异。 · A mutation is a heritable change in DNA sequence, including base substitutions, insertions, deletions, and chromosomal mutations.',
      '沉默突变不改变氨基酸；错义突变改变一个氨基酸；无义突变产生提前终止。 · Silent mutations do not change the amino acid; missense mutations change one amino acid; nonsense mutations create a premature stop.',
      '插入或缺失非 3 倍数碱基通常造成移码，影响下游全部密码子。 · Insertions or deletions of a number of bases not divisible by 3 usually cause a frameshift that affects every downstream codon.',
      '突变随机发生，不因需求而定向；诱变剂可提高突变率。 · Mutations occur randomly rather than being directed by need; mutagens can increase the mutation rate.',
      '生殖细胞突变可遗传，体细胞突变通常不传给后代。 · Germline mutations are heritable, whereas somatic mutations are usually not passed to offspring.'
    ],
    definition: '突变是 DNA 序列的可遗传改变。点突变包括碱基替换、插入与缺失；染色体突变包括结构变异与数目变异。按对蛋白质的影响，点突变可分为沉默、错义、无义与移码突变。 · A mutation is a heritable change in DNA sequence. Point mutations include base substitutions, insertions, and deletions; chromosomal mutations include structural and numerical changes. By their effect on protein, point mutations are classified as silent, missense, nonsense, and frameshift.',
    intuition: '突变像抄写时写错字母：换一个字母可能无影响，也可能让整句话读不通；多写或少写一个字母，后面的读法会全部错位。 · Mutation is like a typo while copying text: changing one letter may have no effect or may make the whole sentence unreadable, while adding or losing a letter shifts how everything after it is read.',
    intuitionDetailed: '替换若发生在密码子第三位，常因简并性成为沉默突变；插入或缺失不是 3 的倍数时会造成移码，下游氨基酸序列大面积改变并常提前终止。 · A substitution at the third codon position is often silent because of degeneracy; an insertion or deletion that is not a multiple of three causes a frameshift, broadly changing the downstream amino acid sequence and often producing a premature stop.',
    formulas: [
      { latex: '\\text{替换}\\;\\text{/}\\;\\text{插入}\\;\\text{/}\\;\\text{缺失}', note: '三类点突变。 · The three classes of point mutation.' },
    ],
    conditions: ['生殖细胞突变可遗传给后代；体细胞突变一般不遗传 · Germline mutations can be inherited by offspring; somatic mutations are generally not inherited', '表型效应取决于突变位置、密码子与蛋白质功能 · The phenotypic effect depends on the mutation site, the codon involved, and protein function', '突变是随机的，不因需求而定向发生 · Mutations are random and do not occur in a direction dictated by need'],
    keyPoints: ['突变是遗传变异的根本来源 · Mutation is the ultimate source of genetic variation', '沉默突变不改变氨基酸序列 · Silent mutations do not change the amino acid sequence', '错义突变改变一个氨基酸；无义突变产生提前终止 · Missense mutations change one amino acid; nonsense mutations create a premature stop', '移码突变通常影响最大 · Frameshift mutations usually have the largest impact', '突变可自发，也可由诱变剂诱发 · Mutations can arise spontaneously or be induced by mutagens'],
    misconceptions: [
      '认为突变总是有害或总是导致疾病 · Assuming mutations are always harmful or always cause disease',
      '认为生物“为了适应”而主动突变 · Assuming organisms mutate on purpose “in order to adapt”',
      '把体细胞突变与可遗传突变混淆 · Confusing somatic mutations with heritable mutations',
      '认为所有替换都会改变氨基酸 · Assuming every substitution changes the amino acid',
    ],
    examples: [
      {
        title: '例 1 · 镰状细胞 · Example 1 · Sickle Cell',
        prompt: 'HbS 的 β 珠蛋白基因发生哪种突变？ · What type of mutation occurs in the β-globin gene of HbS?',
        steps: ['DNA 编码链上编码第 6 位谷氨酸的三联体由 GAG 变为 GTG；对应的 mRNA 密码子由 GAG 变为 GUG。 · On the DNA coding strand, the triplet encoding the sixth amino acid glutamate changes from GAG to GTG; the corresponding mRNA codon changes from GAG to GUG.', '替换导致谷氨酸 → 缬氨酸（错义突变）。 · The substitution changes glutamate to valine (a missense mutation).'],
        solution: '单碱基替换引起的错义突变。 · A missense mutation caused by a single-base substitution.',
      },
      {
        title: '例 2 · 移码 · Example 2 · Frameshift',
        prompt: '在编码区插入一个碱基，为什么后果通常比替换严重？ · Why is inserting one base in a coding region usually more serious than a substitution?',
        steps: ['插入使阅读框移动一位。 · The insertion shifts the reading frame by one base.', '下游密码子全部重新分组，氨基酸序列大面积改变。 · All downstream codons are regrouped, broadly changing the amino acid sequence.', '常提前遇到终止密码子，产生截短蛋白。 · A stop codon is often encountered prematurely, producing a truncated protein.'],
        solution: '移码改变下游整个阅读框。 · The frameshift changes the entire downstream reading frame.',
      },
      {
        title: '例 3 · 沉默 · Example 3 · Silent Mutation',
        prompt: '为什么同义突变不改变蛋白质？ · Why does a synonymous mutation not change the protein?',
        steps: ['遗传密码具有简并性，多个密码子编码同一氨基酸。 · The genetic code is degenerate, so several codons can encode the same amino acid.', '替换后仍编码同一氨基酸。 · After the substitution, the codon still encodes the same amino acid.'],
        solution: '密码子改变但氨基酸不变。 · The codon changes, but the amino acid does not.',
      },
    ],
    examTips: [
      'CED Unit 6：基因表达与调控 · CED Unit 6: Gene expression and regulation',
      '给出 DNA/mRNA 序列时先确定阅读框，再判断突变类型 · When given a DNA or mRNA sequence, establish the reading frame first, then classify the mutation.',
      'FRQ 常考：解释突变如何产生新等位基因与表型变异 · FRQs often ask you to explain how mutation creates new alleles and phenotypic variation.',
    ],
    connections: [
      '先修：6.2 DNA 复制与 6.4 翻译，理解突变如何在复制与蛋白合成中产生后果。 · Prerequisite: DNA replication in 6.2 and translation in 6.4 explain how mutations produce consequences during replication and protein synthesis.',
      '后续：7.2 自然选择与 7.4 群体遗传，把突变提供的新等位基因转化为种群频率变化。 · Follow-up: natural selection in 7.2 and population genetics in 7.4 turn new alleles from mutation into changes in population frequency.',
      '相关：6.8 生物技术中，诱变剂用于诱发突变，测序用于检测突变；镰状细胞病与致癌突变是直接相关的医学例子。 · Related: in 6.8 biotechnology, mutagens induce mutations while sequencing detects them; sickle cell disease and cancer-causing mutations are direct medical examples.',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.6', title: '基因表达与细胞特化 · Gene Expression and Cell Specialization', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.2', title: '复制 · DNA Replication', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.4', title: '翻译 · Translation', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.8', title: '生物技术 · Biotechnology', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.1', title: '自然选择导论 · Introduction to Natural Selection', relation: '应用 · Application' },
    ],
    development: ['点突变类型 · Types of point mutation', '移码与阅读框 · Frameshifts and reading frames', '染色体变异 · Chromosomal mutations', '突变与变异来源 · Mutation as a source of variation'],
    checks: ['替换、插入、缺失分别可能造成哪些后果？ · What consequences can substitutions, insertions, and deletions each produce?', '为什么突变是随机的，而不是定向的？ · Why are mutations random rather than directed?'],
    summary: '突变是随机的 DNA 序列改变，为进化提供遗传变异；其表型效应取决于类型与位置。 · Mutation is a random change in DNA sequence that supplies genetic variation for evolution; its phenotypic effect depends on type and location.',
  },

  'bio/bio-u7/7.11': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分背景灭绝与大规模灭绝。 · Distinguish background extinction from mass extinction.',
      '能说明灭绝率、局域消失与全球灭绝的含义。 · Explain extinction rate, local extirpation, and global extinction.',
      '能用化石与分子证据评价灭绝事件。 · Evaluate extinction events using fossil and molecular evidence.'
    ],
    essentialKnowledge: [
      '灭绝是物种全部个体消失且不再留下可繁殖后代。 · Extinction is the loss of all individuals of a species with no remaining reproductively viable descendants.',
      '背景灭绝是常态低速率；大规模灭绝是在较短地质时间内大量物种消失。 · Background extinction is the normal low rate; mass extinction is the loss of many species within a short geological interval.',
      '灭绝率可用单位时间灭绝物种数除以物种总数粗略衡量。 · Extinction rate can be roughly measured as the number of species lost per unit time divided by the total number of species.',
      '局域消失不等于全球灭绝；物种一旦全球灭绝不可逆。 · Local extirpation is not the same as global extinction; once a species is globally extinct, the loss is irreversible.',
      '化石记录与分子数据各有偏差，需交叉验证灭绝时间与速率。 · Fossil records and molecular data each have biases, so extinction timing and rates need cross-validation.'
    ],
    definition: '灭绝是一个物种的全部个体消失、不再留下可繁殖后代的过程。背景灭绝是常态下的低速率消失；大规模灭绝是在较短地质时间内大量物种消失的事件。 · Extinction is the loss of all individuals of a species, leaving no reproductively viable descendants. Background extinction is the normal low-rate loss; mass extinction is the disappearance of many species within a short geological interval.',
    intuition: '物种像一家公司：经营不善会慢慢倒闭（背景灭绝），而金融危机可能让大量公司同时倒闭（大规模灭绝）。 · A species is like a company: poor performance can lead to slow failure (background extinction), while a financial crisis can bring down many companies at once (mass extinction).',
    intuitionDetailed: '灭绝可由栖息地丧失、外来物种、过度捕猎、污染、气候变化等因素驱动。灭绝释放生态位，常随后出现适应辐射。 · Extinction can be driven by habitat loss, invasive species, overhunting, pollution, and climate change. Extinction frees ecological niches and is often followed by adaptive radiation.',
    formulas: [
      { latex: '\\text{灭绝率}=\\dfrac{\\text{单位时间灭绝物种数}}{\\text{物种总数}}', note: '比较背景灭绝与大规模灭绝的粗略指标。 · A rough metric for comparing background and mass extinction.' },
    ],
    conditions: ['物种灭绝是不可逆的（在当前时间尺度上） · Species extinction is irreversible on current time scales', '局域消失不等于全球灭绝 · Local extirpation is not global extinction', '化石记录与分子数据各有偏差 · Fossil records and molecular data each have biases'],
    keyPoints: ['背景灭绝 vs 大规模灭绝 · Background extinction vs mass extinction', '五次大灭绝，K–Pg 最著名 · Five major mass extinctions, with the K–Pg event the most famous', '人类活动正在提高灭绝速率 · Human activity is raising extinction rates', '灭绝与适应辐射常交替出现 · Extinction and adaptive radiation often alternate'],
    misconceptions: [
      '把个体死亡或局域消失当作物种灭绝 · Treating the death of an individual or local extirpation as species extinction',
      '认为灭绝总是“进化失败” · Assuming extinction always represents “evolutionary failure”',
      '认为所有灭绝都由灾难造成 · Assuming all extinctions are caused by catastrophes',
      '忽略人类活动导致的第六次灭绝风险 · Ignoring the risk of a sixth extinction driven by human activity',
    ],
    examples: [
      {
        title: '例 1 · K–Pg · Example 1 · K–Pg',
        prompt: '白垩纪–古近纪大灭绝的常见解释是什么？ · What is the common explanation for the Cretaceous–Paleogene mass extinction?',
        steps: ['小行星撞击形成全球尘埃与气候剧变。 · An asteroid impact created global dust and abrupt climate change.', '食物链崩溃，非鸟恐龙与大量海洋物种灭绝。 · Food chains collapsed, and non-avian dinosaurs and many marine species went extinct.', '哺乳动物随后适应辐射。 · Mammals then underwent adaptive radiation.'],
        solution: '小行星撞击 + 环境连锁效应；随后适应辐射。 · Asteroid impact plus cascading environmental effects, followed by adaptive radiation.',
      },
      {
        title: '例 2 · 背景 vs 大规模 · Example 2 · Background vs Mass Extinction',
        prompt: '如何区分背景灭绝与大规模灭绝？ · How can background extinction and mass extinction be distinguished?',
        steps: ['背景灭绝速率低、持续存在。 · Background extinction is low and continuous.', '大规模灭绝在短时间窗内速率显著升高，影响多个类群。 · Mass extinction shows a marked rise in rate within a short window and affects many groups.'],
        solution: '看灭绝速率与时间尺度、受影响类群范围。 · Compare the extinction rate, time scale, and range of affected groups.',
      },
      {
        title: '例 3 · 保护 · Example 3 · Conservation',
        prompt: '为什么保护栖息地对降低灭绝风险关键？ · Why is habitat protection crucial for reducing extinction risk?',
        steps: ['栖息地丧失是主要威胁之一。 · Habitat loss is one of the main threats.', '保护栖息地维持种群规模与遗传多样性。 · Protecting habitat maintains population size and genetic diversity.', '小种群更易受随机事件与近交衰退影响。 · Small populations are more vulnerable to random events and inbreeding depression.'],
        solution: '栖息地保护直接降低主要灭绝驱动因素。 · Habitat protection directly reduces a major driver of extinction.',
      },
    ],
    examTips: [
      'CED Unit 7：自然选择与进化 · CED Unit 7: Natural selection and evolution',
      '读图：物种多样性曲线、灭绝速率峰 · Read graphs of species diversity curves and extinction-rate peaks.',
      'FRQ 常要求区分背景灭绝/大规模灭绝并解释证据 · FRQs often ask you to distinguish background from mass extinction and explain the evidence.',
    ],
    connections: [
      '先修：7.9 系统发生与 7.10 物种形成，帮助确定灭绝事件的类群与时间。 · Prerequisite: phylogeny in 7.9 and speciation in 7.10 help place extinction events in the right lineages and time frames.',
      '后续：8.6 生物多样性把灭绝速率与物种丰富度、生态系统服务联系起来。 · Follow-up: biodiversity in 8.6 connects extinction rates to species richness and ecosystem services.',
      '应用：保护生物学用灭绝风险、种群大小与栖息地质量制定保护优先级。 · Application: conservation biology uses extinction risk, population size, and habitat quality to set protection priorities.',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.9', title: '系统发生 · Phylogeny', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.10', title: '物种形成 · Speciation', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.12', title: '种群变异 · Variations in Populations', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.6', title: '生物多样性 · Biodiversity', relation: '应用 · Application' },
    ],
    development: ['灭绝定义 · Defining extinction', '背景与大规模灭绝 · Background and mass extinction', '驱动因素 · Drivers', '灭绝后的适应辐射 · Adaptive radiation after extinction'],
    checks: ['局域消失与全球灭绝有何区别？ · What is the difference between local extirpation and global extinction?', '为什么小种群更容易灭绝？ · Why are small populations more likely to go extinct?'],
    summary: '灭绝是物种的永久消失；背景灭绝与大规模灭绝共同塑造生物多样性，人类活动正在加速这一过程。 · Extinction is the permanent loss of a species; background and mass extinction together shape biodiversity, and human activity is accelerating the process.',
  },

  'bio/bio-u1/1.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能比较 DNA 与 RNA 的组成、结构与功能。',
      '能写出碱基互补配对与反向平行的方向关系。',
      '能解释磷酸二酯键与氢键在核酸结构中的作用。'
    ],
    essentialKnowledge: [
      '核苷酸由磷酸、五碳糖与含氮碱基组成，是核酸的单体。',
      'DNA 为双链反向平行，A 与 T、G 与 C 互补配对；RNA 通常单链并以 U 代替 T。',
      '磷酸二酯键连接一个核苷酸的 5′ 磷酸与另一个的 3′ 羟基。',
      'DNA 储存遗传信息；mRNA、tRNA、rRNA 分别参与携带、翻译与核糖体组成。',
      '高温或强碱可破坏氢键使 DNA 变性，但共价骨架仍然存在。'
    ],
    definition: '核酸是由核苷酸聚合成的生物大分子。每个核苷酸由磷酸、五碳糖和含氮碱基组成；DNA 为双链反向平行，碱基 A–T、G–C 配对；RNA 通常为单链，以 U 代替 T。DNA 储存遗传信息，RNA 参与表达与催化。',
    intuition: '核酸像一本用四种字母写成的说明书：DNA 是长期存档，RNA 是抄出来用于施工的副本。',
    intuitionDetailed: '核苷酸之间通过磷酸二酯键连接，形成 5′→3′ 方向的骨架。两条 DNA 链反向平行，A 与 T 形成两个氢键，G 与 C 形成三个氢键，因此 GC 含量高的 DNA 更稳定。',
    formulas: [
      { latex: '\\text{DNA}:\\;A=T,\\;G\\equiv C', note: '碱基互补配对（DNA）。' },
      { latex: '5\\text{-}\\ldots\\text{-}3\\;\\parallel\\;3\\text{-}\\ldots\\text{-}5', note: '双链反向平行。' },
    ],
    conditions: ['DNA 双螺旋在生理条件下稳定；高温或强碱可使其变性', 'RNA 可形成局部双链或复杂二级结构', '碱基配对具有方向性与互补性'],
    keyPoints: ['核苷酸 = 磷酸 + 五碳糖 + 碱基', 'DNA 用脱氧核糖与 T；RNA 用核糖与 U', '磷酸二酯键连接 5′ 磷酸与 3′ 羟基', 'mRNA、tRNA、rRNA 功能不同'],
    misconceptions: [
      '认为 DNA 是单链、RNA 是双链（通常相反）',
      '在 DNA 中写 A–U 配对',
      '混淆脱氧核糖与核糖',
      '认为两条 DNA 链同向平行',
    ],
    examples: [
      {
        title: '例 1 · 互补链',
        prompt: '一条 DNA 链为 \\(5\\text{-ATGC-}3\\)，写出互补链。',
        steps: ['按 A–T、T–A、G–C、C–G 配对。', '互补链方向相反，写作 \\(3\\text{-TACG-}5\\)。'],
        solution: '\\(3\\text{-TACG-}5\\)。',
        solutionLatex: '3\\text{-TACG-}5',
      },
      {
        title: '例 2 · DNA vs RNA',
        prompt: '列出 DNA 与 RNA 的三点结构差异。',
        steps: ['五碳糖：脱氧核糖 vs 核糖。', '碱基：T vs U。', '链数：通常双链 vs 单链。'],
        solution: '糖、碱基、链数不同。',
      },
      {
        title: '例 3 · GC 含量',
        prompt: '为什么 GC 含量高的 DNA 解链温度更高？',
        steps: ['G–C 之间有三个氢键，A–T 只有两个。', '破坏更多氢键需要更高能量。'],
        solution: 'GC 含量越高，双链越稳定，解链温度越高。',
      },
    ],
    examTips: [
      'CED Unit 1 / Unit 6：核酸结构与功能',
      '画核苷酸时标出磷酸、糖、碱基与 5′/3′ 端',
      'FRQ 常考：根据一条链写互补链、判断方向与氢键数',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.3', title: '生物大分子导论', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.1', title: 'DNA 与 RNA 结构', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.2', title: '复制', relation: '应用' },
    ],
    development: ['核苷酸组成', '磷酸二酯键与方向性', '碱基配对与双螺旋', 'DNA/RNA 分工'],
    checks: ['DNA 与 RNA 在糖和碱基上有何不同？', '为什么两条 DNA 链必须反向平行？'],
    summary: '核酸以核苷酸为单体，通过互补碱基配对与方向性骨架储存和传递遗传信息。',
  },

  'bio/bio-u2/2.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能比较简单扩散、协助扩散、主动运输与胞吞胞吐。',
      '能判断给定分子与条件下最可能的运输方式。',
      '能解释浓度梯度、电化学梯度与 ATP 在运输中的作用。'
    ],
    essentialKnowledge: [
      '被动运输顺浓度或电化学梯度，不直接消耗 ATP，包括简单扩散、协助扩散与渗透。',
      '主动运输逆梯度，需要载体蛋白与能量，可建立并维持浓度差。',
      '通道蛋白形成孔道，载体蛋白通过构象变化搬运分子；两者都具有特异性。',
      '渗透是水通过膜向水势较低一侧移动；水通道蛋白加速该过程。',
      '大分子与颗粒通过胞吞/胞吐运输，依赖膜融合而非跨膜通道。'
    ],
    definition: '膜运输是物质跨膜移动的过程。被动运输顺浓度梯度、不直接消耗 ATP，包括简单扩散、协助扩散与渗透；主动运输逆浓度梯度、需要载体蛋白与能量；大分子和颗粒通过胞吞/胞吐进出细胞。',
    intuition: '被动运输像水往低处流；主动运输像用泵把水抽到高处，需要付电费（ATP）。',
    intuitionDetailed: '通道蛋白形成亲水孔道，载体蛋白通过构象变化搬运特定分子。Na⁺/K⁺ 泵每消耗 1 个 ATP，把 3 个 Na⁺ 泵出、2 个 K⁺ 泵入，维持膜电位与渗透平衡。',
    formulas: [
      { latex: '\\text{被动运输}:\\;\\Delta G<0,\\;\\text{不耗 ATP}', note: '顺浓度梯度。' },
      { latex: '\\text{主动运输}:\\;\\Delta G>0,\\;\\text{需 ATP}', note: '逆浓度梯度。' },
    ],
    conditions: ['被动运输依赖浓度梯度或电化学梯度', '主动运输需要能量与特异性载体', '膜的选择透过性决定哪些分子走哪条路径'],
    keyPoints: ['简单扩散 vs 协助扩散 vs 主动运输', '通道蛋白与载体蛋白机制不同', '渗透是水的扩散', 'Na⁺/K⁺ 泵建立电化学梯度', '胞吞/胞吐运输大分子'],
    misconceptions: [
      '认为协助扩散需要 ATP（不需要）',
      '把渗透与溶质扩散混为一谈',
      '认为主动运输只能逆浓度梯度（也可维持梯度）',
      '忽略泵与通道的选择性',
    ],
    examples: [
      {
        title: '例 1 · 分类',
        prompt: 'O₂、葡萄糖（经 GLUT）、K⁺（经泵）分别属于哪种运输？',
        steps: ['O₂ 非极性小分子 → 简单扩散。', '葡萄糖经 GLUT 顺梯度 → 协助扩散。', 'K⁺ 逆梯度经泵 → 主动运输。'],
        solution: '简单扩散 / 协助扩散 / 主动运输。',
      },
      {
        title: '例 2 · 饱和曲线',
        prompt: '为什么协助扩散速率在高浓度下会饱和？',
        steps: ['载体蛋白数量有限。', '所有载体都被占用后，速率不再随浓度增加。'],
        solution: '载体饱和。',
      },
      {
        title: '例 3 · 渗透',
        prompt: '红细胞放入高渗溶液会怎样？',
        steps: ['外界溶质浓度高，水势低。', '水从细胞内向外出走。', '细胞皱缩（crenation）。'],
        solution: '失水皱缩。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞膜与运输',
      '读图：饱和曲线说明载体参与；直线说明简单扩散',
      'FRQ 常考：判断运输方式并说明能量/蛋白需求',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.3', title: '质膜', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.4', title: '膜通透性', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.7', title: '渗透与水势', relation: '应用' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.8', title: '主动运输', relation: '后续' },
    ],
    development: ['被动运输', '通道与载体', '主动运输与泵', '渗透与胞吞胞吐'],
    checks: ['协助扩散与主动运输的关键区别是什么？', '为什么 Na⁺/K⁺ 泵对维持膜电位重要？'],
    summary: '膜运输按是否耗能与是否顺梯度分类；蛋白介导的运输具有特异性和饱和性。',
  },

  'bio/bio-u3/3.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出光合作用总反应并指出 O₂ 的来源。',
      '能说明光反应与 Calvin 循环的产物与耦合关系。',
      '能比较 C3、C4 与 CAM 植物适应环境的策略。'
    ],
    essentialKnowledge: [
      '光合作用把光能转化为有机物中的化学能，总反应消耗 CO₂ 与水并释放 O₂。',
      '光反应在类囊体膜上进行，水的光解产生 O₂，同时生成 ATP 与 NADPH。',
      'Calvin 循环在叶绿体基质中固定 CO₂，利用 ATP 与 NADPH 合成糖。',
      'Rubisco 是 CO₂ 固定的关键酶，其羧化与加氧活性受 CO₂/O₂ 比例影响。',
      'C4 与 CAM 通过空间或时间分隔 CO₂ 固定，适应高温干旱环境。'
    ],
    definition: '光合作用利用光能，把 CO₂ 与 H₂O 转化为有机物并释放 O₂。光反应在类囊体膜上进行，产生 ATP 与 NADPH；Calvin 循环在叶绿体基质中固定 CO₂，合成糖。',
    intuition: '光反应像太阳能电站，把光能转成 ATP/NADPH 两种“电池”；Calvin 循环像工厂，用电池把 CO₂ 装成糖。',
    intuitionDetailed: '光系统 II 吸收光能、氧化水释放 O₂，电子经电子传递链流向光系统 I，建立质子梯度驱动 ATP 合成；光系统 I 还原 NADP⁺。Calvin 循环中 rubisco 固定 CO₂，生成 3-PGA，再还原为 G3P 并再生 RuBP。',
    formulas: [
      { latex: '6CO_2+6H_2O\\xrightarrow{\\text{light}}C_6H_{12}O_6+6O_2', note: '总反应式。' },
      { latex: '\\text{光反应}:\\;H_2O\\to O_2+ATP+NADPH', note: '类囊体膜。' },
      { latex: '\\text{Calvin}:\\;CO_2\\to\\text{糖}', note: '基质，需 ATP/NADPH。' },
    ],
    conditions: ['需要光、CO₂、水与适宜温度', '光反应与 Calvin 循环通过 ATP/NADPH 与 ADP/NADP⁺ 耦合', 'Rubisco 的羧化与加氧活性受 CO₂/O₂ 比例影响'],
    keyPoints: ['O₂ 来自水的光解', '光反应产生 ATP 与 NADPH', 'Calvin 循环不直接需要光，但依赖光反应产物', 'rubisco 是 CO₂ 固定的关键酶', 'C4/CAM 是适应高温干旱的机制'],
    misconceptions: [
      '认为 O₂ 来自 CO₂',
      '认为暗反应完全不需要光（需要光反应提供的 ATP/NADPH）',
      '认为 Calvin 循环直接生成葡萄糖（先得 G3P）',
      '忽略光呼吸与 C4/CAM 的适应意义',
    ],
    examples: [
      {
        title: '例 1 · 位置',
        prompt: '光反应与 Calvin 循环分别发生在哪里？',
        steps: ['光反应：类囊体膜。', 'Calvin 循环：叶绿体基质。'],
        solution: '类囊体膜 / 基质。',
      },
      {
        title: '例 2 · 限制因素',
        prompt: '光照强度增加时，光合速率一定一直增加吗？',
        steps: ['初期随光强增加而上升。', '达到光饱和点后，受 CO₂、温度或酶活性限制。'],
        solution: '不会；存在光饱和点。',
      },
      {
        title: '例 3 · C4',
        prompt: 'C4 植物为何在高温强光下效率更高？',
        steps: ['先在叶肉细胞固定 CO₂ 为四碳酸。', '在维管束鞘细胞释放 CO₂，提高 rubisco 周围 CO₂ 浓度。', '减少光呼吸。'],
        solution: '浓缩 CO₂，降低光呼吸损耗。',
      },
    ],
    examTips: [
      'CED Unit 3：细胞能量与光合作用',
      '画图：类囊体膜上的 PSII/PSI、ATP 合酶、Calvin 循环',
      'FRQ 常考：O₂ 来源、ATP/NADPH 去向、限制因素曲线',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u3', code: '3.3', title: '细胞能量', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.5', title: '细胞呼吸', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.6', title: '适应与能量', relation: '应用' },
    ],
    development: ['光反应', '电子传递与化学渗透', 'Calvin 循环', '限制因素与 C4/CAM'],
    checks: ['光合作用释放的 O₂ 来自哪里？', 'Calvin 循环为什么依赖光反应？'],
    summary: '光反应把光能转为 ATP/NADPH，Calvin 循环用其固定 CO₂ 合成糖；O₂ 来自水的光解。',
  },

  'bio/bio-u3/3.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能概述糖酵解、柠檬酸循环与氧化磷酸化的位置与产物。',
      '能计算有氧呼吸中 ATP 与电子载体的主要来源。',
      '能解释发酵为何不能大量产生 ATP。'
    ],
    essentialKnowledge: [
      '细胞呼吸把有机物氧化分解，释放的能量用于合成 ATP。',
      '糖酵解在细胞质基质进行，净产 2 ATP 与 2 NADH，不需要 O₂。',
      '丙酮酸氧化与柠檬酸循环产生 CO₂ 与电子载体 NADH/FADH₂。',
      '电子传递链把电子交给 O₂ 生成水，并建立质子梯度驱动 ATP 合酶。',
      '发酵只再生 NAD⁺ 以维持糖酵解，不能大量产生 ATP。'
    ],
    definition: '细胞呼吸是细胞把有机物（主要是葡萄糖）氧化分解、释放能量并合成 ATP 的过程。有氧呼吸包括糖酵解、丙酮酸氧化与柠檬酸循环、氧化磷酸化；无氧条件下则进行发酵。',
    intuition: '细胞呼吸像把一张大额钞票（葡萄糖）逐步拆成零钱（ATP），每一步都有人看管，避免一次性烧掉。',
    intuitionDetailed: '糖酵解在细胞质基质进行，净产 2 ATP 与 2 NADH；丙酮酸进入线粒体后氧化脱羧，柠檬酸循环产生 NADH、FADH₂ 与少量 ATP；电子传递链把 NADH/FADH₂ 的电子交给 O₂，建立质子梯度驱动 ATP 合酶。',
    formulas: [
      { latex: 'C_6H_{12}O_6+6O_2\\to6CO_2+6H_2O+\\text{ATP}', note: '有氧呼吸总反应。' },
      { latex: 'ADP+P_i\\to\\text{ATP}', note: '氧化磷酸化的净结果。' },
    ],
    conditions: ['有氧呼吸需要 O₂ 作为电子传递链的最终电子受体', '糖酵解不需要 O₂，在细胞质基质进行', '发酵只能再生 NAD⁺，不能大量产 ATP'],
    keyPoints: ['糖酵解净产 2 ATP、2 NADH', '柠檬酸循环产生 CO₂ 与电子载体', 'O₂ 在电子传递链末端被还原为水', 'ATP 合酶利用质子梯度合成 ATP', '发酵再生 NAD⁺ 以维持糖酵解'],
    misconceptions: [
      '认为 O₂ 直接参与柠檬酸循环（它参与电子传递链）',
      '认为 CO₂ 在糖酵解中产生（不产生）',
      '把发酵当作高效产 ATP 途径',
      '死记 36/38 ATP 而不理解实际产率约 30–32',
    ],
    examples: [
      {
        title: '例 1 · 定位',
        prompt: '糖酵解、柠檬酸循环、电子传递链分别发生在哪里？',
        steps: ['糖酵解：细胞质基质。', '柠檬酸循环：线粒体基质。', '电子传递链：线粒体内膜。'],
        solution: '细胞质基质 / 线粒体基质 / 线粒体内膜。',
      },
      {
        title: '例 2 · 缺氧',
        prompt: '剧烈运动时肌肉细胞如何维持糖酵解？',
        steps: ['O₂ 不足，电子传递链受限。', '细胞进行乳酸发酵，把丙酮酸还原为乳酸。', '该过程再生 NAD⁺，使糖酵解继续。'],
        solution: '乳酸发酵再生 NAD⁺。',
      },
      {
        title: '例 3 · 抑制剂',
        prompt: '氰化物抑制电子传递链后，ATP 产量如何变化？',
        steps: ['电子无法传给 O₂，质子梯度无法维持。', '氧化磷酸化停止，细胞只能依赖糖酵解产 ATP。'],
        solution: 'ATP 产量大幅下降。',
      },
    ],
    examTips: [
      'CED Unit 3：细胞能量',
      '用碳原子与电子载体（NADH/FADH₂）追踪反应',
      'FRQ 常考：比较有氧呼吸与发酵、解释 O₂ 的作用',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u3', code: '3.3', title: '细胞能量', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.4', title: '光合作用', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.6', title: '适应与能量', relation: '应用' },
    ],
    development: ['糖酵解', '丙酮酸氧化与柠檬酸循环', '电子传递与化学渗透', '发酵'],
    checks: ['有氧呼吸中 O₂ 的最终去向是什么？', '发酵为什么不能大量产生 ATP？'],
    summary: '细胞呼吸分阶段氧化葡萄糖，把电子交给 O₂ 并合成 ATP；缺氧时发酵再生 NAD⁺。',
  },

  'bio/bio-u4/4.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能按顺序描述有丝分裂各阶段的关键事件。',
      '能区分姐妹染色单体分离与同源染色体分离。',
      '能解释检查点如何保证染色体分配的准确性。'
    ],
    essentialKnowledge: [
      '有丝分裂是体细胞分裂产生两个遗传上相同子细胞的过程。',
      '分裂前 DNA 已复制；后期姐妹染色单体分离，染色体数暂时加倍。',
      '有丝分裂保持染色体数不变，不分离同源染色体。',
      '纺锤体牵引染色体，检查点监控 DNA 损伤与纺锤体连接。',
      '有丝分裂用于生长、修复与无性繁殖；胞质分裂机制在动物与植物中不同。'
    ],
    definition: '有丝分裂是体细胞分裂产生两个遗传上相同子细胞的过程。它包括前期、前中期、中期、后期、末期与胞质分裂；DNA 在分裂前已复制，姐妹染色单体在后期分离。',
    intuition: '有丝分裂像把一份已经复印好的文件平均装进两个文件夹：每个子细胞都拿到完整的一套染色体。',
    intuitionDetailed: '前期染色质凝缩、纺锤体形成；前中期核膜解体、染色体与纺锤丝连接；中期染色体排列在赤道板；后期姐妹染色单体分离并被拉向两极；末期核膜重建、染色体解凝缩；胞质分裂把细胞一分为二。',
    formulas: [
      { latex: '2n\\xrightarrow{\\text{DNA 复制}}2n\\xrightarrow{\\text{有丝分裂}}2\\times2n', note: '染色体数保持不变。' },
    ],
    conditions: ['需要 DNA 复制、纺锤体与细胞周期检查点', '姐妹染色单体分离发生在后期', '胞质分裂机制在动物与植物中不同'],
    keyPoints: ['有丝分裂保持染色体数不变', '姐妹染色单体分离，不是同源染色体分离', '中期赤道板排列是识别标志', '检查点监控 DNA 损伤与纺锤体连接', '有丝分裂用于生长、修复与无性繁殖'],
    misconceptions: [
      '认为有丝分裂产生 4 个细胞（产生 2 个）',
      '认为同源染色体在有丝分裂中配对（不减数分裂）',
      '把姐妹染色单体分离与同源染色体分离混淆',
      '认为所有细胞的胞质分裂方式相同',
    ],
    examples: [
      {
        title: '例 1 · 分期',
        prompt: '染色体排列在赤道板、姐妹染色单体尚未分离，属于哪个时期？',
        steps: ['染色体已凝缩并排列在赤道板。', '姐妹染色单体仍由着丝粒连接。'],
        solution: '中期（metaphase）。',
      },
      {
        title: '例 2 · 染色体数',
        prompt: '人类体细胞 \\(2n=46\\)，有丝分裂后期细胞中有多少条染色体？',
        steps: ['后期姐妹染色单体分离，每条成为独立染色体。', '46 条染色体的姐妹染色单体分离 → 92 条染色体。'],
        solution: '92 条（暂时加倍）。',
      },
      {
        title: '例 3 · 与减数分裂',
        prompt: '有丝分裂与减数分裂最关键的区别是什么？',
        steps: ['有丝分裂：一次分裂，子细胞与母细胞染色体数相同。', '减数分裂：两次分裂，子细胞染色体数减半，并发生同源染色体配对与交换。'],
        solution: '是否减数、是否发生同源染色体配对/交换。',
      },
    ],
    examTips: [
      'CED Unit 4：细胞周期',
      '看图判断时期：染色质凝缩、赤道板、姐妹染色单体分离、核膜重建',
      'FRQ 常考：比较有丝分裂与减数分裂',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.5', title: '细胞周期', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.6', title: '细胞周期调控', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.1', title: '减数分裂', relation: '对比' },
    ],
    development: ['前期到末期', '纺锤体与赤道板', '姐妹染色单体分离', '胞质分裂与检查点'],
    checks: ['有丝分裂后期染色体数为什么暂时加倍？', '有丝分裂与减数分裂的产物有何不同？'],
    summary: '有丝分裂通过一次分裂把复制后的染色体均分给两个遗传相同的子细胞。',
  },

  'bio/bio-u7/7.10': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分异域、邻域与同域物种形成。',
      '能区分合子前隔离与合子后隔离并举例。',
      '能解释基因流、选择与漂变在物种形成中的作用。'
    ],
    essentialKnowledge: [
      '物种形成是种群分化为生殖隔离新物种的过程。',
      '异域物种形成由地理隔离开始，最常见；邻域与同域物种形成不要求完全地理隔离。',
      '生殖隔离分合子前隔离与合子后隔离，是生物学物种概念的核心标准。',
      '基因流中断或显著减少是遗传分化的前提；选择与漂变推动分化。',
      '多倍化可在少数世代内形成新物种，常见于植物。'
    ],
    definition: '物种形成是一个种群分化为生殖隔离的新物种的过程。常见模式包括异域物种形成（地理隔离）、邻域物种形成与同域物种形成；生殖隔离可分为合子前隔离与合子后隔离。',
    intuition: '一条河把种群分成两岸，两边各自积累突变与漂变，久而久之即使再相遇也不能产生可育后代。',
    intuitionDetailed: '地理隔离阻断基因流，种群在遗传漂变、自然选择与突变作用下分化；若差异积累到生殖隔离，就形成新物种。同域物种形成可在同一地区通过多倍化、寄主转移或行为隔离发生。',
    formulas: [
      { latex: '\\text{地理隔离}\\to\\text{遗传分化}\\to\\text{生殖隔离}', note: '异域物种形成的简化链条。' },
    ],
    conditions: ['需要基因流中断或显著减少', '生殖隔离是生物学物种概念的核心标准', '物种形成需要足够时间与选择/漂变压力'],
    keyPoints: ['异域物种形成最常见', '生殖隔离分合子前与合子后', '多倍化可瞬时形成新物种', '物种形成不等于单个突变', '杂交带可检验隔离程度'],
    misconceptions: [
      '认为一个突变就能产生新物种',
      '认为地理隔离一定导致物种形成',
      '认为所有杂种都不育（视情况而定）',
      '把物种形成与微进化混为一谈',
    ],
    examples: [
      {
        title: '例 1 · 异域',
        prompt: '河流改道把蜥蜴种群分成两岸，可能如何形成新物种？',
        steps: ['基因流中断。', '两岸选择压力与漂变不同，遗传差异积累。', '若产生生殖隔离，则形成新物种。'],
        solution: '地理隔离 → 遗传分化 → 生殖隔离。',
      },
      {
        title: '例 2 · 多倍化',
        prompt: '植物多倍化为何能快速物种形成？',
        steps: ['染色体数目加倍，形成多倍体。', '多倍体与亲本杂交常产生不育后代，构成合子后隔离。'],
        solution: '多倍化直接造成生殖隔离。',
      },
      {
        title: '例 3 · 隔离类型',
        prompt: '交配时间不同属于哪种隔离？',
        steps: ['发生在合子形成之前。', '属于合子前隔离（时间隔离）。'],
        solution: '合子前隔离。',
      },
    ],
    examTips: [
      'CED Unit 7：进化',
      'FRQ 常要求解释异域物种形成并区分合子前/后隔离',
      '用基因流、漂变、选择解释分化过程',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.9', title: '系统发生', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.11', title: '灭绝', relation: '对比' },
    ],
    development: ['异域物种形成', '邻域与同域', '生殖隔离机制', '基因流与分化'],
    checks: ['异域物种形成的关键步骤是什么？', '合子前隔离与合子后隔离有何区别？'],
    summary: '物种形成是基因流中断后遗传分化积累到生殖隔离的过程；异域模式最常见。',
  },

  'bio/bio-u2/2.9': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明膜性细胞器如何分隔生化反应。',
      '能举例说明区隔化对 pH、离子浓度与酶组合的局部控制。',
      '能解释区隔化与内膜系统、运输蛋白的关系。'
    ],
    essentialKnowledge: [
      '区隔化是真核细胞用膜把不同生化反应分隔在不同细胞器或膜系统中的策略。',
      '区隔化让互不相容的反应同时进行，并在局部维持特定 pH、离子浓度与酶组合。',
      '不同细胞器具有不同的酶与膜运输蛋白，膜的选择透过性维持区室身份。',
      '区隔化提高反应效率与调控精度，但也需要运输系统连接各区间。',
      '原核细胞缺少膜性细胞器，仍可通过蛋白微区室与质膜折叠组织反应。'
    ],
    definition: '区隔化是真核细胞用膜把不同生化反应分隔在不同细胞器或膜系统中的结构策略。它让互不相容的反应同时进行，并在局部维持特定的 pH、离子浓度与酶组合。',
    intuition: '细胞像一座工厂：不同车间用墙隔开，各自保持自己的温度、原料和工具，避免互相干扰。',
    intuitionDetailed: '核膜把转录与翻译在空间上分开；线粒体内膜维持质子梯度；溶酶体保持酸性 pH 以激活水解酶；叶绿体在类囊体膜与基质间分配光反应和 Calvin 循环。',
    formulas: [
      { latex: '\\text{膜区隔}\\Rightarrow\\text{局部环境}+\\text{反应特异性}', note: '区隔化的两个核心收益。' },
    ],
    conditions: ['真核细胞普遍具有膜性细胞器', '区隔化依赖选择透过性膜与运输蛋白', '原核细胞缺少膜性细胞器，但仍可通过蛋白微区室组织反应'],
    keyPoints: ['区隔化提高反应效率与特异性', '不同细胞器有不同 pH、酶与底物', '膜运输连接各区室', '区隔化与内膜系统、内共生起源相关'],
    misconceptions: [
      '认为区隔化只存在于真核细胞',
      '认为所有细胞器膜成分完全相同',
      '忽略区隔化需要运输系统连接',
      '把区隔化等同于“细胞器越多越好”',
    ],
    examples: [
      {
        title: '例 1 · 溶酶体',
        prompt: '溶酶体为什么需要保持酸性？',
        steps: ['酸性环境激活水解酶。', '质子泵把 H⁺ 泵入溶酶体，维持低 pH。'],
        solution: '酸性 pH 是水解酶发挥活性所需。',
      },
      {
        title: '例 2 · 线粒体',
        prompt: '线粒体内膜如何体现区隔化？',
        steps: ['电子传递链把 H⁺ 泵到膜间隙。', '形成质子梯度，驱动 ATP 合酶。'],
        solution: '膜两侧的质子梯度是区隔化的能量形式。',
      },
      {
        title: '例 3 · 原核',
        prompt: '原核细胞没有线粒体，如何组织呼吸反应？',
        steps: ['电子传递链位于细胞膜。', '细胞膜两侧形成质子梯度。'],
        solution: '利用细胞膜而非膜性细胞器完成区隔化。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞结构与功能',
      'FRQ 常考：解释区隔化如何提高效率',
      '比较真核与原核的区隔化策略',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.1', title: '细胞器与区隔化', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.3', title: '质膜', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.10', title: '细胞区隔起源', relation: '后续' },
    ],
    development: ['膜性区室', '局部环境', '运输连接', '真核/原核比较'],
    checks: ['区隔化如何让互不相容的反应同时进行？', '原核细胞如何在没有细胞器的情况下组织反应？'],
    summary: '区隔化用膜划分反应空间，维持局部环境并提高代谢效率。',
  },

  'bio/bio-u8/8.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分 GPP、NPP 与呼吸消耗。',
      '能计算营养级间的能量传递效率。',
      '能解释能量单向流动与物质循环的差别。'
    ],
    essentialKnowledge: [
      '能量流是能量沿食物链单向传递、逐级递减的过程。',
      '生产者固定太阳能，是生态系统能量的入口；NPP = GPP − R。',
      '每一营养级只有约 10% 的能量传递到下一级，能量金字塔不会倒置。',
      '分解者回收有机物中的物质（养分），能量最终以热的形式散失。',
      '物质可循环，能量不能循环；传递效率因生态系统与营养级而异。'
    ],
    definition: '能量流是能量在生态系统中沿食物链单向传递、逐级递减的过程。生产者固定太阳能，消费者通过摄食获得能量，分解者回收有机物；每一营养级只有约 10% 的能量传递到下一级。',
    intuition: '能量像水从高处流下，每经过一级就漏掉一部分；物质可以循环，能量最终以热的形式散失。',
    intuitionDetailed: '总初级生产力（GPP）是生产者固定的总能量，净初级生产力（NPP）= GPP − 呼吸消耗。能量在呼吸、排泄与未利用部分中损失，因此食物链通常只有 4–5 级。',
    formulas: [
      { latex: '\\text{NPP}=\\text{GPP}-R', note: '净初级生产力。' },
      { latex: '\\text{传递效率}=\\dfrac{\\text{下一级同化量}}{\\text{上一级同化量}}\\times100\\%', note: '通常约 10%。' },
    ],
    conditions: ['能量流动是单向的，不能循环', '物质（碳、氮、水）可循环', '传递效率因生态系统与营养级而异，10% 是粗略经验值'],
    keyPoints: ['生产者是能量入口', '能量逐级递减，营养级越高可用能量越少', '分解者释放有机物中的能量', '能量金字塔不会倒置', 'NPP 决定生态系统可支持的生物量'],
    misconceptions: [
      '认为能量可以像物质一样循环',
      '把 10% 当作精确常数',
      '认为顶级捕食者获得最多能量',
      '认为数量金字塔与能量金字塔形状总是一致',
    ],
    examples: [
      {
        title: '例 1 · 计算',
        prompt: '草固定 10,000 kJ 能量，按 10% 传递，狐狸（第三营养级）可获得多少？',
        steps: ['草 → 兔：10% × 10,000 = 1,000 kJ。', '兔 → 狐狸：10% × 1,000 = 100 kJ。'],
        solution: '约 100 kJ。',
      },
      {
        title: '例 2 · 食物链长度',
        prompt: '为什么食物链通常不超过 4–5 级？',
        steps: ['每级传递损失约 90% 能量。', '更高营养级可用能量不足以维持可繁殖种群。'],
        solution: '能量逐级递减限制了食物链长度。',
      },
      {
        title: '例 3 · 分解者',
        prompt: '分解者在能量流中起什么作用？',
        steps: ['分解动植物遗体与排泄物。', '释放有机物中的能量，并把养分归还环境。'],
        solution: '回收物质，但能量以热散失，不能循环。',
      },
    ],
    examTips: [
      'CED Unit 8：生态学',
      '读能量金字塔：柱宽为示意（按 log10 能量缩放），具体能量值看标注；不是个体数 · Read an energy pyramid: bar width is schematic (scaled by log10 energy); use the labels for energy values, not the widths',
      'FRQ 常考：计算传递效率、解释食物链长度限制',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u8', code: '8.1', title: '环境响应', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.3', title: '种群生态', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.5', title: '群落生态', relation: '后续' },
    ],
    development: ['GPP 与 NPP', '营养级传递', '10% 规则', '分解者与物质循环'],
    checks: ['能量为什么不能循环？', '能量金字塔为什么不会倒置？'],
    summary: '能量沿食物链单向流动并逐级递减；物质循环，能量最终以热散失。',
  },

  'bio/bio-u6/6.8': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能概述重组 DNA、PCR、凝胶电泳与测序的用途。',
      '能说明 CRISPR-Cas9 的向导 RNA 与切割机制。',
      '能评价基因编辑的脱靶效应与伦理问题。'
    ],
    essentialKnowledge: [
      '生物技术利用生物体、细胞或生物分子制造产品或解决问题。',
      '限制酶切割 DNA，DNA 连接酶连接片段，载体把外源 DNA 导入宿主。',
      'PCR 通过变性、退火、延伸循环指数扩增 DNA，需要引物、dNTP 与耐热聚合酶。',
      '凝胶电泳按片段大小分离 DNA；测序与 CRISPR 分别用于读取与编辑序列。',
      '基因编辑需评估脱靶效应、生态影响与伦理规范。'
    ],
    definition: '生物技术是利用生物体、细胞或生物分子制造产品或解决问题的技术。核心工具包括重组 DNA、PCR、凝胶电泳、DNA 测序与 CRISPR-Cas9 基因编辑。',
    intuition: '生物技术像“分子剪刀 + 胶水 + 复印机”：剪出目标基因、粘进载体、再大量复制或修改。',
    intuitionDetailed: '限制酶在特定位点切割 DNA，DNA 连接酶把片段接上；质粒载体把目的基因带入细菌；PCR 通过变性、退火、延伸循环扩增 DNA；凝胶电泳按片段大小分离 DNA；CRISPR 用向导 RNA 把 Cas9 带到目标序列。',
    formulas: [
      { latex: '\\text{PCR}:\\;\\text{变性}\\to\\text{退火}\\to\\text{延伸}', note: '每轮约使目标 DNA 加倍。' },
    ],
    conditions: ['需要特异性工具酶、载体与宿主细胞', 'PCR 需要引物、dNTP、耐热 DNA 聚合酶与模板', '基因编辑需考虑脱靶效应与伦理/安全规范'],
    keyPoints: ['限制酶切割、连接酶连接', 'PCR 指数扩增 DNA', '凝胶电泳按大小分离片段', 'CRISPR 用向导 RNA 定位', '转基因生物需检测与监管'],
    misconceptions: [
      '把 PCR 当成克隆整个生物体',
      '认为凝胶电泳只按大小分离（也受电荷/构象影响）',
      '认为 CRISPR 直接修改蛋白质（它修改 DNA）',
      '认为限制酶只切 RNA（主要切 DNA）',
    ],
    examples: [
      {
        title: '例 1 · 胰岛素',
        prompt: '如何用细菌生产人胰岛素？',
        steps: ['用限制酶切出人胰岛素基因。', '插入质粒载体并导入细菌。', '筛选成功转化的细菌并大量培养。', '提取、纯化胰岛素。'],
        solution: '重组 DNA 技术 + 细菌表达系统。',
      },
      {
        title: '例 2 · PCR',
        prompt: 'PCR 三个温度步骤分别做什么？',
        steps: ['高温变性：双链 DNA 解开。', '低温退火：引物结合模板。', '中温延伸：聚合酶合成新链。'],
        solution: '变性 → 退火 → 延伸。',
      },
      {
        title: '例 3 · 电泳',
        prompt: '凝胶电泳中 DNA 片段如何移动？',
        steps: ['DNA 带负电，向正极移动。', '小片段移动快，大片段移动慢。'],
        solution: '按片段大小分离，小片段跑得更远。',
      },
    ],
    examTips: [
      'CED Unit 6：基因表达与调控',
      '读凝胶图：比较条带位置判断片段大小',
      'FRQ 常考：PCR 步骤、重组 DNA 流程、CRISPR 原理',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.2', title: '复制', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.4', title: '翻译', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.7', title: '突变', relation: '应用' },
    ],
    development: ['重组 DNA', 'PCR', '凝胶电泳', 'CRISPR 与测序'],
    checks: ['PCR 与生物体克隆有何区别？', '凝胶电泳为什么能按大小分离 DNA？'],
    summary: '生物技术用分子工具剪切、复制、编辑和检测 DNA，服务于医学、农业与研究。',
  },

  'bio/bio-u7/7.9': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能读树并识别节点、分支与最近共同祖先。',
      '能判断单系群、并系群与多系群。',
      '能解释树的拓扑、生根与分支长度的含义。'
    ],
    essentialKnowledge: [
      '系统发生树用分支表示谱系分化，用节点表示最近共同祖先。',
      '树的拓扑结构反映亲缘关系；节点旋转不改变拓扑，类群左右顺序无意义。',
      '单系群包含最近共同祖先及其全部后代；共享派生特征支持分支。',
      '外类群用于生根；分支长度含义取决于建树方法（时间或遗传距离）。',
      '树是基于数据与模型推断的假说；不同基因可能给出不同树。'
    ],
    definition: '系统发生是研究物种或类群之间进化关系的方法。系统发生树用分支表示谱系分化，用节点表示最近共同祖先；树的拓扑结构反映亲缘关系，而不是类群排列的左右顺序。',
    intuition: '系统发生树像家谱：两个物种的亲疏取决于它们共享的最近共同祖先有多近，而不是在图上离得多远。',
    intuitionDetailed: '共享派生特征（synapomorphy）支持单系群；外类群用于确定根的极性；分子序列差异可用于推断分化时间与关系。分支长度可表示时间或遗传改变量，取决于树的类型。',
    formulas: [
      { latex: '\\text{共同祖先越近}\\Rightarrow\\text{亲缘关系越近}', note: '读树的核心规则。' },
    ],
    conditions: ['树是基于数据与模型推断的假说，不是绝对事实', '不同基因可能给出不同树（不完全谱系分选、水平基因转移）', '树的节点可以旋转而不改变拓扑关系'],
    keyPoints: ['节点 = 最近共同祖先', '单系群包含祖先及其全部后代', '共享派生特征支持分支', '外类群帮助生根', '分支长度含义取决于建树方法'],
    misconceptions: [
      '认为图上相邻的类群一定亲缘最近',
      '把节点当作“某个现存物种”',
      '认为进化是向“更高级”方向爬梯子',
      '认为一棵树永远不需要修正',
    ],
    examples: [
      {
        title: '例 1 · 读树',
        prompt: '两个物种在树上的最近共同祖先越靠近树根，说明什么？',
        steps: ['靠近树根意味着分化时间更早。', '二者共享的最近共同祖先更古老，亲缘关系相对较远。'],
        solution: '分化更早，亲缘关系相对较远。',
      },
      {
        title: '例 2 · 单系群',
        prompt: '如何判断一个类群是否为单系群？',
        steps: ['找到该类群的最近共同祖先。', '检查是否包含该祖先的全部后代。'],
        solution: '包含祖先及其全部后代才是单系群。',
      },
      {
        title: '例 3 · 分子数据',
        prompt: '为什么用 DNA 序列建树比只看形态更可靠？',
        steps: ['DNA 提供大量可量化字符。', '可区分趋同演化与真正同源。'],
        solution: '更多独立字符，减少形态趋同的干扰。',
      },
    ],
    examTips: [
      'CED Unit 7：进化',
      '读树题先找最近共同祖先，不要看左右位置',
      'FRQ 常考：解释单系群、外类群与分子数据的作用',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.7', title: '共同祖先', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.8', title: '延续与变化', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.10', title: '物种形成', relation: '应用' },
    ],
    development: ['树的结构', '共同祖先与单系群', '外类群与生根', '分子数据与假说'],
    checks: ['为什么树的左右顺序不重要？', '单系群与并系群有何区别？'],
    summary: '系统发生树用共同祖先与分支表示亲缘关系；读树看拓扑，不看左右距离。',
  },

  'bio/bio-u2/2.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算并比较不同大小细胞的 SA/V。',
      '能解释 SA/V 下降对跨膜交换的限制。',
      '能举例说明细胞形状与多细胞结构如何弥补交换限制。'
    ],
    essentialKnowledge: [
      '细胞大小受表面积与体积之比限制：SA ∝ L²，V ∝ L³，SA/V ∝ 1/L。',
      '小细胞 SA/V 大，跨膜交换效率高；体积增大时相对膜面积下降。',
      '细胞形状影响 SA/V，扁平、分枝或膜折叠可提高交换效率。',
      '大细胞常通过多核、液泡或特殊运输系统弥补交换限制。',
      '多细胞生物可用循环与呼吸系统在整体水平上克服扩散限制。'
    ],
    definition: '细胞大小受表面积与体积之比（SA/V）限制。体积增大时，表面积按平方增长、体积按立方增长，SA/V 下降，物质交换与废物排出效率降低。',
    intuition: '小房间窗户相对多，通风快；仓库越大，同样一扇门越难满足整栋楼的换气。',
    intuitionDetailed: '扩散时间随距离增加而显著变长，因此大细胞难以靠简单扩散满足代谢需求。细胞通过保持小体积、扁平/细长形状、微绒毛、分支或大液泡等适应方式提高交换效率。',
    formulas: [
      { latex: '\\text{SA}\\propto L^{2},\\quad V\\propto L^{3}', note: '长度增加时 SA/V 下降。' },
      { latex: '\\dfrac{\\text{SA}}{V}\\propto\\dfrac{1}{L}', note: '细胞越大，相对表面积越小。' },
    ],
    conditions: ['适用于依赖跨膜扩散进行物质交换的细胞', '形状影响 SA/V，不只是体积', '多细胞生物可用循环/呼吸系统弥补交换限制'],
    keyPoints: ['小细胞 SA/V 大，交换效率高', '细胞大小有物理上限', '形状适应可提高 SA/V', '大细胞常有多核或特殊运输系统'],
    misconceptions: [
      '认为细胞越大代谢越快',
      '认为 SA/V 随体积增大而增大',
      '忽略形状对 SA/V 的影响',
      '认为所有细胞都必须很小（卵细胞、神经元是例外）',
    ],
    examples: [
      {
        title: '例 1 · 立方体',
        prompt: '边长 1 cm 与 2 cm 的立方体，SA/V 分别是多少？',
        steps: ['1 cm：SA=6，V=1，SA/V=6。', '2 cm：SA=24，V=8，SA/V=3。'],
        solution: 'SA/V 从 6 降到 3。',
      },
      {
        title: '例 2 · 微绒毛',
        prompt: '小肠上皮细胞为什么有微绒毛？',
        steps: ['微绒毛增加 apical 表面积。', '提高营养吸收与酶的作用面积。'],
        solution: '在不显著增加体积的情况下提高 SA/V。',
      },
      {
        title: '例 3 · 大细胞',
        prompt: '为什么大型卵细胞不靠简单扩散满足全部需求？',
        steps: ['体积大、SA/V 小，扩散距离长。', '常依赖储存物质、胞质流动或辅助细胞。'],
        solution: '扩散限制迫使其采用特殊适应。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞结构与功能',
      '计算题：比较不同大小/形状的 SA/V',
      'FRQ 常考：解释细胞大小上限与适应',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.1', title: '细胞器与区隔化', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.3', title: '质膜', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.5', title: '膜运输', relation: '应用' },
    ],
    development: ['SA/V 关系', '扩散限制', '形状适应', '大细胞的例外'],
    checks: ['为什么 SA/V 随细胞增大而下降？', '微绒毛如何提高交换效率？'],
    summary: '细胞大小受 SA/V 与扩散距离限制；小体积和形状适应提高交换效率。',
  },

  'bio/bio-u2/2.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能根据分子大小、极性与电荷预测膜通透性。',
      '能说明膜蛋白与胆固醇对通透性和流动性的影响。',
      '能区分通道、载体与囊泡运输的适用对象。'
    ],
    essentialKnowledge: [
      '膜通透性描述物质穿过膜的难易程度，取决于分子大小、极性、电荷与膜组成。',
      '小分子、非极性、疏水分子较易通过磷脂双分子层。',
      '带电离子与极性分子通常需要通道蛋白、载体蛋白或囊泡运输。',
      '水通道蛋白加速水运输；膜蛋白的数量与类型决定选择性。',
      '温度、胆固醇与脂肪酸饱和度改变膜流动性，从而影响通透性。'
    ],
    definition: '膜通透性描述物质穿过膜的难易程度。磷脂双分子层允许小分子、非极性分子较快通过；极性分子、带电离子和大分子通常需要通道蛋白、载体蛋白或囊泡运输。',
    intuition: '质膜像一道选择性筛子：油溶性小分子能直接穿过，带电和大分子得走专用门。',
    intuitionDetailed: 'O₂、CO₂、N₂ 与类固醇可较快扩散；水虽极性小，但主要经水通道蛋白快速通过；Na⁺、K⁺、Cl⁻ 等带电离子几乎不能直接穿过疏水核心；葡萄糖等极性分子需转运蛋白。',
    formulas: [
      { latex: '\\text{通透性}\\;\\propto\\;\\dfrac{\\text{疏水性}}{\\text{大小}\\cdot\\text{电荷}}', note: '定性规律，不是精确公式。' },
    ],
    conditions: ['通透性取决于分子大小、极性、电荷与膜组成', '温度、胆固醇与脂肪酸饱和度影响膜流动性', '膜蛋白数量与类型决定特定分子的通透性'],
    keyPoints: ['小、非极性、疏水分子易通过', '带电离子难直接通过', '水通道蛋白加速水运输', '膜蛋白决定选择性', '通透性不是固定不变的'],
    misconceptions: [
      '认为所有小分子都能自由通过',
      '认为水是非极性分子',
      '忽略电荷对通透性的影响',
      '认为膜通透性对所有物质相同',
    ],
    examples: [
      {
        title: '例 1 · 排序',
        prompt: 'O₂、葡萄糖、Na⁺ 的通透性从高到低如何排？',
        steps: ['O₂ 小且非极性 → 最易。', '葡萄糖极性较大 → 需载体。', 'Na⁺ 带电 → 几乎不能直接通过。'],
        solution: 'O₂ > 葡萄糖 > Na⁺。',
      },
      {
        title: '例 2 · 水',
        prompt: '水是极性分子，为什么能较快跨膜？',
        steps: ['水分子很小。', '细胞膜上有水通道蛋白（aquaporins）。'],
        solution: '小尺寸 + 水通道蛋白。',
      },
      {
        title: '例 3 · 温度',
        prompt: '温度升高对膜通透性有何影响？',
        steps: ['膜流动性增加。', '过高温度破坏膜结构，通透性失控。'],
        solution: '适度升高增加通透性，过高则破坏膜完整性。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞膜',
      '根据分子性质预测运输方式',
      'FRQ 常考：解释选择性通透与膜蛋白作用',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.3', title: '质膜', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.5', title: '膜运输', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.6', title: '促进扩散', relation: '应用' },
    ],
    development: ['脂双层屏障', '分子性质', '水通道', '温度与膜组成'],
    checks: ['为什么带电离子难以直接穿过脂双层？', '水通道蛋白的作用是什么？'],
    summary: '膜通透性由分子性质与膜组成共同决定；小非极性分子易通过，带电/大分子需蛋白。',
  },

  'bio/bio-u2/2.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明促进扩散顺梯度、不直接耗能的特征。',
      '能区分通道蛋白与载体蛋白的工作方式。',
      '能解释促进扩散的特异性、饱和性与米氏型曲线。'
    ],
    essentialKnowledge: [
      '促进扩散是极性或带电分子在膜蛋白帮助下顺浓度梯度跨膜，不直接消耗 ATP。',
      '通道蛋白形成孔道，载体蛋白通过构象变化搬运分子。',
      '该过程具有特异性与饱和性，可用米氏型曲线描述。',
      '与主动运输的区别在方向与能量：促进扩散顺梯度、不直接耗能。',
      '促进扩散仍依赖膜蛋白，蛋白数量与亲和力限制最大速率。'
    ],
    definition: '促进扩散是极性或带电分子在膜蛋白帮助下顺浓度梯度跨膜的过程，不直接消耗 ATP。通道蛋白形成孔道，载体蛋白通过构象变化搬运分子；该过程具有特异性与饱和性。',
    intuition: '促进扩散像走专用闸机：不用付电费（ATP），但必须走对应的门，而且门一次只能过一个人。',
    intuitionDetailed: '葡萄糖经 GLUT 载体顺梯度进入细胞；离子经通道蛋白快速通过；水经水通道蛋白。载体数量有限，因此速率随浓度升高而趋于饱和，这一点与简单扩散不同。',
    formulas: [
      { latex: 'v=\\dfrac{V_{\\max}[S]}{K_m+[S]}', note: '载体介导运输的饱和动力学（定性）。' },
    ],
    conditions: ['顺浓度或电化学梯度', '需要特异性膜蛋白', '不直接消耗 ATP（但可偶联其他梯度）'],
    keyPoints: ['通道 vs 载体', '特异性与饱和性', '不耗能但依赖蛋白', '与主动运输的区别是方向与能量'],
    misconceptions: [
      '认为促进扩散需要 ATP',
      '认为所有分子共用同一通道',
      '认为速率会随浓度无限增加',
      '把通道与载体机制混为一谈',
    ],
    examples: [
      {
        title: '例 1 · 葡萄糖',
        prompt: '葡萄糖进入红细胞属于哪种运输？',
        steps: ['顺浓度梯度。', '经 GLUT 载体蛋白。', '不消耗 ATP。'],
        solution: '促进扩散。',
      },
      {
        title: '例 2 · 饱和',
        prompt: '为什么促进扩散速率在高浓度下趋于平台？',
        steps: ['膜上载体数量有限。', '载体全部被占用后无法继续加速。'],
        solution: '载体饱和。',
      },
      {
        title: '例 3 · 通道',
        prompt: '离子通道与载体蛋白有何不同？',
        steps: ['通道形成亲水孔道，开放时离子快速通过。', '载体需结合底物并发生构象变化，速率较慢。'],
        solution: '通道快、载体慢且具饱和性。',
      },
    ],
    examTips: [
      'CED Unit 2：膜运输',
      '看饱和曲线判断是否由蛋白介导',
      'FRQ 常考：比较简单扩散、促进扩散、主动运输',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.4', title: '膜通透性', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.5', title: '膜运输', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.8', title: '主动运输', relation: '对比' },
    ],
    development: ['通道与载体', '饱和动力学', '特异性', '与主动运输对比'],
    checks: ['促进扩散为什么不耗 ATP？', '饱和曲线说明什么？'],
    summary: '促进扩散借助膜蛋白顺梯度运输，不耗能，具有特异性与饱和性。',
  },

  'bio/bio-u3/3.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明 ATP 作为能量货币的循环方式。',
      '能判断反应自发性并解释 ΔG 的含义。',
      '能说明 NAD⁺/FAD 在氧化还原反应中的电子传递作用。'
    ],
    essentialKnowledge: [
      'ATP 是细胞通用能量货币，通过水解与合成在放能/吸能反应间转移能量。',
      '放能反应与吸能反应通过偶联匹配；酶降低活化能但不改变 ΔG。',
      'NAD⁺/FAD 在氧化还原反应中传递电子，连接分解代谢与电子传递链。',
      '代谢分分解代谢与合成代谢，二者通过共同中间产物与能量载体连接。',
      '\\(\\Delta G=\\Delta H-T\\Delta S\\) 用于判断反应自发性；\\(\\Delta G<0\\) 表示自发。'
    ],
    definition: '细胞能量代谢通过 ATP 的合成与水解来转移能量。ATP 是通用能量货币；放能反应与吸能反应通过偶联完成，酶降低活化能，电子载体（NAD⁺/FAD）在氧化还原反应中传递电子。',
    intuition: 'ATP 像可充电电池：放能反应给它充电，吸能反应用它做功，用完变回 ADP 再充。',
    intuitionDetailed: 'ATP 水解为 ADP + Pi 释放自由能，可驱动主动运输、肌肉收缩与合成反应；细胞呼吸与光合作用通过电子传递链建立质子梯度，再由 ATP 合酶把 ADP 磷酸化。',
    formulas: [
      { latex: '\\text{ATP}+H_2O\\to\\text{ADP}+P_i+\\text{能量}', note: 'ATP 水解。' },
      { latex: '\\Delta G=\\Delta H-T\\Delta S', note: '判断反应自发性的热力学关系。' },
    ],
    conditions: ['ATP 水解与吸能反应偶联', '酶不改变 ΔG，只降低活化能', '氧化还原反应需要电子载体'],
    keyPoints: ['ATP 是能量货币，不是长期储能分子', '放能/吸能反应通过偶联匹配', 'NAD⁺/FAD 传递电子', '酶降低活化能', '代谢分分解代谢与合成代谢'],
    misconceptions: [
      '认为 ATP 储存大量长期能量',
      '认为酶提供能量',
      '把 ΔG 与活化能混为一谈',
      '认为所有反应都自发',
    ],
    examples: [
      {
        title: '例 1 · 偶联',
        prompt: '为什么 ATP 水解能驱动主动运输？',
        steps: ['ATP 水解为放能反应。', '释放的自由能偶联到载体蛋白构象变化。', '逆梯度运输得以进行。'],
        solution: '放能水解偶联吸能运输。',
      },
      {
        title: '例 2 · 酶',
        prompt: '酶如何影响反应的 ΔG 与速率？',
        steps: ['酶降低活化能，加快速率。', '不改变反应物与产物自由能，故 ΔG 不变。'],
        solution: '速率变，ΔG 不变。',
      },
      {
        title: '例 3 · 电子载体',
        prompt: 'NADH 在细胞呼吸中的作用是什么？',
        steps: ['携带高能电子。', '把电子交给电子传递链，驱动质子泵与 ATP 合成。'],
        solution: '传递电子到 ETC。',
      },
    ],
    examTips: [
      'CED Unit 3：细胞能量',
      '区分 ΔG、活化能与 ATP 的角色',
      'FRQ 常考：解释偶联反应与电子载体',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u3', code: '3.1', title: '酶催化', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.4', title: '光合作用', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.5', title: '细胞呼吸', relation: '相关' },
    ],
    development: ['ATP 结构与水解', '偶联反应', '电子载体', '代谢类型'],
    checks: ['ATP 与葡萄糖哪个更适合长期储能？', '酶改变 ΔG 吗？'],
    summary: 'ATP 通过水解与合成偶联放能/吸能反应，电子载体连接氧化还原与 ATP 生产。',
  },

  'bio/bio-u4/4.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分自分泌、旁分泌、突触与内分泌信号。',
      '能解释受体特异性如何决定细胞响应。',
      '能说明信号放大与信号终止的机制。'
    ],
    essentialKnowledge: [
      '细胞通讯是信号分子与受体结合，把信息转化为细胞内反应的过程。',
      '按距离分为自分泌、旁分泌、突触与内分泌信号。',
      '受体具有特异性；受体分布决定哪些细胞能响应信号。',
      '信号转导常放大，同一信号在不同细胞可产生不同反应。',
      '信号终止与信号产生同样重要，可通过降解、回收或抑制实现。'
    ],
    definition: '细胞通讯是细胞通过信号分子与受体相互作用，把外界或邻近细胞的信息转化为细胞内反应的过程。按距离可分为自分泌、旁分泌、突触与内分泌信号。',
    intuition: '细胞通讯像寄信：信号分子是信，受体是收件地址，只有地址匹配的细胞才会拆信并行动。',
    intuitionDetailed: '配体与受体结合具有特异性；受体类型包括 G 蛋白偶联受体、受体酪氨酸激酶、离子通道型受体与胞内受体。结合后触发信号转导级联，最终改变基因表达、代谢或细胞行为。',
    formulas: [
      { latex: '\\text{配体}+\\text{受体}\\rightleftharpoons\\text{复合物}\\to\\text{细胞反应}', note: '通讯的基本步骤。' },
    ],
    conditions: ['需要信号分子、受体与下游转导通路', '受体分布决定哪些细胞能响应', '信号可被降解、回收或抑制'],
    keyPoints: ['自分泌/旁分泌/突触/内分泌', '受体具有特异性', '信号转导常放大', '同一信号在不同细胞可产生不同反应', '信号终止同样重要'],
    misconceptions: [
      '认为信号分子只能作用于邻近细胞',
      '认为所有细胞对同一信号反应相同',
      '忽略受体特异性',
      '认为信号一旦启动不会停止',
    ],
    examples: [
      {
        title: '例 1 · 类型',
        prompt: '胰岛素通过血液作用于全身细胞，属于哪种信号？',
        steps: ['信号经血液长距离运输。', '作用于远处靶细胞。'],
        solution: '内分泌信号。',
      },
      {
        title: '例 2 · 突触',
        prompt: '神经元释放神经递质属于哪种通讯？',
        steps: ['信号跨越突触间隙。', '作用于突触后膜受体。'],
        solution: '突触信号（局部、快速）。',
      },
      {
        title: '例 3 · 特异性',
        prompt: '为什么肾上腺素只对某些细胞产生反应？',
        steps: ['靶细胞表达相应受体。', '无受体的细胞不响应。'],
        solution: '受体表达决定靶细胞特异性。',
      },
    ],
    examTips: [
      'CED Unit 4：细胞通讯',
      '区分四种信号距离类型',
      'FRQ 常考：配体-受体特异性与信号放大',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.2', title: '信号转导导论', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.3', title: '信号转导', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.4', title: '反馈', relation: '应用' },
    ],
    development: ['信号类型', '受体类型', '信号转导', '信号终止'],
    checks: ['四种细胞通讯类型如何区分？', '为什么同一信号对不同细胞效果不同？'],
    summary: '细胞通讯依赖配体-受体特异性结合，按距离分为自分泌、旁分泌、突触与内分泌。',
  },

  'bio/bio-u4/4.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能按接收、转导、响应三阶段描述信号通路。',
      '能解释磷酸化级联与第二信使的放大作用。',
      '能说明负反馈与降解如何终止信号。'
    ],
    essentialKnowledge: [
      '信号转导把配体-受体结合事件转化为特定细胞反应，包括接收、转导与响应。',
      '磷酸化级联与第二信使可放大信号并整合多路输入。',
      '通路之间可交叉对话，同一受体可激活多条效应器通路。',
      '负反馈、磷酸酶与配体降解负责终止信号。',
      '不同细胞对同一信号的响应取决于受体类型与下游效应器。'
    ],
    definition: '信号转导是细胞把配体-受体结合事件转化为特定细胞反应的过程，通常包括接收、转导与响应三个环节。通路可放大信号、整合多路输入，并通过负反馈或降解终止。',
    intuition: '信号转导像接力赛：受体接到信号后，把接力棒传给一串蛋白，最后交给效应器执行。',
    intuitionDetailed: '常见机制包括蛋白磷酸化级联、第二信使（cAMP、Ca²⁺）、GTP 酶开关与支架蛋白组装。GPCR 激活 G 蛋白，RTK 自磷酸化后招募接头蛋白，胞内受体则直接调节基因表达。',
    formulas: [
      { latex: '\\text{信号}\\to\\text{受体}\\to\\text{转导级联}\\to\\text{效应器}\\to\\text{反应}', note: '信号转导的基本框架。' },
    ],
    conditions: ['需要特异性受体与下游通路', '信号可被放大，也可被终止', '不同细胞对同一信号的响应取决于受体与效应器'],
    keyPoints: ['接收—转导—响应三步', '磷酸化级联可放大信号', '第二信使扩散放大', '负反馈与降解终止信号', '通路之间可交叉对话'],
    misconceptions: [
      '认为信号转导只有一步',
      '认为信号放大等于信号无限持续',
      '忽略信号终止机制',
      '认为同一配体在所有细胞中产生同一反应',
    ],
    examples: [
      {
        title: '例 1 · 肾上腺素',
        prompt: '肾上腺素如何促使肝细胞分解糖原？',
        steps: ['肾上腺素结合膜受体。', '激活 G 蛋白 → 腺苷酸环化酶 → cAMP 升高。', '激活 PKA，促进糖原分解。'],
        solution: 'GPCR–cAMP–PKA 级联。',
      },
      {
        title: '例 2 · 放大',
        prompt: '为什么少量激素能产生显著反应？',
        steps: ['每个受体可激活多个 G 蛋白。', '每个酶产生许多 cAMP 分子。', '级联逐级放大。'],
        solution: '酶促级联与第二信使放大信号。',
      },
      {
        title: '例 3 · 终止',
        prompt: '信号为什么必须被终止？',
        steps: ['持续信号会导致过度反应。', '受体脱敏、磷酸二酯酶降解 cAMP、蛋白磷酸酶去磷酸化。'],
        solution: '避免失控，恢复静息状态。',
      },
    ],
    examTips: [
      'CED Unit 4：信号转导',
      'FRQ 常考：描述级联顺序与放大机制',
      '区分膜受体与胞内受体',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.1', title: '细胞通讯', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.2', title: '信号转导导论', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.4', title: '反馈', relation: '应用' },
    ],
    development: ['接收与受体', '转导级联', '第二信使与放大', '终止与整合'],
    checks: ['信号转导的三个环节是什么？', '为什么信号放大需要终止机制？'],
    summary: '信号转导把配体结合转化为细胞反应，通过级联放大并受负反馈与降解调控。',
  },

  'bio/bio-u4/4.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能按 G1、S、G2、M 描述细胞周期。',
      '能解释 cyclin–CDK 与检查点的调控作用。',
      '能分析检查点失败与癌症的关系。'
    ],
    essentialKnowledge: [
      '细胞周期是细胞从一次分裂结束到下一次分裂结束的有序过程。',
      '间期包括 G1、S、G2；S 期复制 DNA，M 期完成分裂。',
      'cyclin–CDK 复合物驱动周期进程，检查点监控 DNA 损伤与纺锤体连接。',
      '检查点失败可导致突变积累与癌症；终末分化细胞可退出周期进入 G0。',
      '不同细胞类型周期长度差异很大，受生长信号与营养状态影响。'
    ],
    definition: '细胞周期是细胞从一次分裂结束到下一次分裂结束的有序过程，包括间期（G1、S、G2）与分裂期（M）。周期受检查点与 cyclin–CDK 复合物调控。',
    intuition: '细胞周期像工厂排班：G1 备料、S 复制 DNA、G2 质检、M 分装，每个关口都有检查员。',
    intuitionDetailed: 'G1/S 检查点评估营养、DNA 损伤与生长信号；G2/M 检查点确认 DNA 复制完成且无损伤；纺锤体检查点确保染色体正确附着。cyclin 浓度周期性变化，与 CDK 结合后磷酸化靶蛋白，推动周期前进。',
    formulas: [
      { latex: '\\text{G1}\\to\\text{S}\\to\\text{G2}\\to\\text{M}', note: '细胞周期顺序。' },
    ],
    conditions: ['需要生长信号、营养与 DNA 完整性', '检查点失败可导致突变积累与癌症', '不同细胞类型周期长度差异很大'],
    keyPoints: ['间期占大部分时间', 'S 期复制 DNA', 'cyclin–CDK 驱动周期', '检查点监控损伤与纺锤体', '终末分化细胞可退出周期（G0）'],
    misconceptions: [
      '认为 M 期最长（间期更长）',
      '认为 DNA 复制发生在 G1',
      '认为所有细胞都不断分裂',
      '忽略检查点与癌症的关系',
    ],
    examples: [
      {
        title: '例 1 · 分期',
        prompt: 'DNA 复制发生在哪个阶段？',
        steps: ['S 期（synthesis）。', '复制后每条染色体含两条姐妹染色单体。'],
        solution: 'S 期。',
      },
      {
        title: '例 2 · 检查点',
        prompt: 'G1/S 检查点主要检查什么？',
        steps: ['细胞大小、营养、DNA 损伤。', '若条件不足，进入 G0 或修复。'],
        solution: '生长条件与 DNA 完整性。',
      },
      {
        title: '例 3 · 癌症',
        prompt: '为什么 p53 失活会增加癌症风险？',
        steps: ['p53 在 DNA 损伤时阻止周期或诱导凋亡。', '失活后损伤细胞继续分裂，突变积累。'],
        solution: '检查点失效导致基因组不稳定。',
      },
    ],
    examTips: [
      'CED Unit 4：细胞周期',
      '读图：cyclin 浓度与 CDK 活性',
      'FRQ 常考：检查点功能与癌症',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.6', title: '细胞周期调控', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.7', title: '有丝分裂', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.1', title: '减数分裂', relation: '对比' },
    ],
    development: ['间期', 'M 期', 'cyclin–CDK', '检查点与 G0'],
    checks: ['S 期发生了什么？', '检查点失效为什么会导致癌症？'],
    summary: '细胞周期按 G1→S→G2→M 推进，由 cyclin–CDK 与检查点精确调控。',
  },

  'bio/bio-u7/7.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明自然选择的三个必要条件。',
      '能区分方向性、稳定化与分裂性选择。',
      '能解释选择为何改变种群而非个体。'
    ],
    essentialKnowledge: [
      '自然选择是具可遗传变异的个体因差异生存与繁殖，使有利等位基因频率逐代升高。',
      '选择作用于表型，改变种群基因频率，不改变个体基因。',
      '自然选择不产生新变异，只筛选已有变异；突变与基因流提供新变异。',
      '方向性、稳定化与分裂性选择对应不同的表型分布变化。',
      '适应是相对的、情境依赖的；性选择也是自然选择的一种形式。'
    ],
    definition: '自然选择是种群中具有可遗传变异的个体因差异生存与繁殖，使有利等位基因频率逐代升高的过程。它作用于表型，改变种群而非个体，且不预设目标或终点。',
    intuition: '自然选择像环境设置的过滤器：适应当前环境的变异更容易留下后代，不适应者被筛掉。',
    intuitionDetailed: '自然选择需要变异、遗传与差异繁殖成功率。选择压力可来自捕食、疾病、气候、配偶选择等。方向性选择、稳定化选择与分裂性选择是三种常见模式。',
    formulas: [
      { latex: '\\text{适应度}\\;w=\\dfrac{\\text{个体相对繁殖贡献}}{\\text{参考基因型}}', note: '适应度的相对定义。' },
    ],
    conditions: ['种群内存在可遗传变异', '变异影响生存或繁殖', '环境选择压力持续存在'],
    keyPoints: ['作用于表型，改变种群基因频率', '不产生新变异，只筛选已有变异', '方向性/稳定化/分裂性选择', '性选择也是自然选择的一种', '适应是相对的、情境依赖的'],
    misconceptions: [
      '认为生物为了适应而主动突变',
      '认为自然选择作用于个体以获得进化',
      '认为进化总是向更复杂方向',
      '把自然选择与人工选择混为一谈',
    ],
    examples: [
      {
        title: '例 1 · 抗生素',
        prompt: '为什么抗生素滥用会加速耐药菌出现？',
        steps: ['细菌种群中存在随机耐药变异。', '抗生素杀死敏感菌，耐药菌存活繁殖。', '耐药等位基因频率升高。'],
        solution: '抗生素作为选择压力筛选耐药变异。',
      },
      {
        title: '例 2 · 工业黑化',
        prompt: '工业革命时期桦尺蛾深色型为何增多？',
        steps: ['树皮被煤烟熏黑。', '深色蛾更不易被鸟发现。', '深色型繁殖成功率更高。'],
        solution: '方向性选择使深色等位基因频率上升。',
      },
      {
        title: '例 3 · 稳定化',
        prompt: '人类出生体重为什么集中在中间范围？',
        steps: ['过轻或过重的新生儿存活率较低。', '中间体重个体存活与繁殖更好。'],
        solution: '稳定化选择。',
      },
    ],
    examTips: [
      'CED Unit 7：自然选择',
      'FRQ 常考：用变异—选择—遗传解释种群变化',
      '区分方向性、稳定化、分裂性选择',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.1', title: '自然选择导论', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.3', title: '人工选择', relation: '对比' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传', relation: '后续' },
    ],
    development: ['变异与遗传', '差异繁殖', '选择模式', '适应与证据'],
    checks: ['自然选择为什么不是定向突变？', '三种选择模式有何区别？'],
    summary: '自然选择通过差异繁殖筛选可遗传变异，改变种群基因频率；适应是相对且情境依赖的。',
  },

  'bio/bio-u7/7.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能比较人工选择与自然选择的选择压力。',
      '能解释目标性状可遗传性与选择响应的关系。',
      '能分析人工选择对遗传多样性的影响。'
    ],
    essentialKnowledge: [
      '人工选择是人类按需求选择并繁殖具有特定性状的个体。',
      '选择压力来自人类偏好而非自然环境，机制与自然选择相同。',
      '目标性状必须可遗传；多代选择可使性状逐代增强。',
      '强选择会降低遗传多样性，并可能带来有害副作用。',
      '选择强度、种群大小与性状遗传力影响响应速度。'
    ],
    definition: '人工选择是人类按自身需求选择并繁殖具有特定性状的个体，使目标性状在种群中逐代增强的过程。它是选择的一种形式，但选择压力来自人类偏好而非自然环境。',
    intuition: '人工选择像人类当“裁判”：谁留下后代由人决定，而不是由自然环境决定。',
    intuitionDetailed: '农作物与家畜的育种、宠物品种培育都是人工选择。长期选择会改变等位基因频率，也可能带来遗传多样性下降、近交衰退与不期望的连锁性状。',
    formulas: [
      { latex: '\\text{目标性状}\\uparrow\\;\\Rightarrow\\;\\text{被选个体繁殖}\\uparrow', note: '人工选择的方向由人设定。' },
    ],
    conditions: ['目标性状必须可遗传', '需要多代选择与繁殖', '选择强度与种群大小影响响应速度'],
    keyPoints: ['人类偏好是选择压力', '可快速改变表型', '可能降低遗传多样性', '与自然选择的机制相同、标准不同'],
    misconceptions: [
      '认为人工选择不是进化',
      '认为选择能直接产生新变异',
      '忽略近交与遗传多样性下降的风险',
      '认为所有性状都能被无限改良',
    ],
    examples: [
      {
        title: '例 1 · 作物',
        prompt: '野生甘蓝如何被培育出西兰花、卷心菜与羽衣甘蓝？',
        steps: ['人类选择不同器官（花、叶、茎）的变异。', '多代繁殖后性状固定。'],
        solution: '对同一祖先的不同性状进行人工选择。',
      },
      {
        title: '例 2 · 狗',
        prompt: '狗品种差异为何如此大？',
        steps: ['长期按体型、毛色、行为等性状选育。', '不同品种间累积不同等位基因。'],
        solution: '多代人工选择 + 品种形成（仍属同一物种，可杂交）。',
      },
      {
        title: '例 3 · 风险',
        prompt: '为什么纯种犬容易出现遗传病？',
        steps: ['群体遗传多样性低。', '有害隐性等位基因更容易纯合表达。'],
        solution: '近交导致隐性遗传病风险上升。',
      },
    ],
    examTips: [
      'CED Unit 7：选择与进化',
      '区分人工选择与自然选择的选择压力',
      'FRQ 常考：用等位基因频率解释育种效果',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择', relation: '对比' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.5', title: '哈代–温伯格', relation: '应用' },
    ],
    development: ['人工选择定义', '作物与家畜案例', '遗传多样性风险', '与自然选择对比'],
    checks: ['人工选择与自然选择的选择压力有何不同？', '为什么纯种育种可能增加遗传病？'],
    summary: '人工选择由人类偏好驱动，能快速改变可遗传性状，但可能牺牲遗传多样性。',
  },

  'bio/bio-u7/7.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算等位基因频率与基因型频率。',
      '能列出哈代–温伯格的五个假设并判断偏离。',
      '能解释突变、选择、漂变与基因流对频率的影响。'
    ],
    essentialKnowledge: [
      '群体遗传研究种群中等位基因与基因型频率的分布及变化。',
      '哈代–温伯格平衡是零模型：无突变、无选择、无漂变、无基因流、随机交配。',
      '四种改变等位基因频率的力量：突变、自然选择、遗传漂变与基因流；非随机交配只改变基因型频率，不直接改变等位基因频率（偏离哈代–温伯格假设）。',
      '小种群中遗传漂变更强；瓶颈与奠基者效应随机改变频率。',
      '基因流降低种群间分化；真实种群通常不完全满足哈代–温伯格假设。'
    ],
    definition: '群体遗传研究种群中等位基因与基因型频率的分布及变化，分析突变、自然选择、遗传漂变与基因流如何改变等位基因频率，以及非随机交配如何改变基因型频率。',
    intuition: '群体遗传像统计一个池塘里不同颜色鱼的比例，并追踪哪些力量会让比例发生变化。',
    intuitionDetailed: '哈代–温伯格平衡描述无进化力量时的理想状态：\\(p^2+2pq+q^2=1\\)。遗传漂变在小种群中更强，瓶颈效应与奠基者效应会随机改变等位基因频率；基因流则使种群间更相似。',
    formulas: [
      { latex: 'p+q=1', note: '一对等位基因的频率。' },
      { latex: 'p^{2}+2pq+q^{2}=1', note: '哈代–温伯格基因型频率。' },
    ],
    conditions: ['哈代–温伯格假设：无突变、无选择、无漂变、无基因流、随机交配', '真实种群通常不完全满足这些假设', '种群大小影响漂变强度'],
    keyPoints: ['等位基因频率 vs 基因型频率', '四种力量改变等位基因频率', '非随机交配改变基因型频率（HWE 偏离）', '小种群漂变更强', '基因流降低分化', '哈代–温伯格是零模型'],
    misconceptions: [
      '认为显性等位基因一定更常见',
      '认为哈代–温伯格适用于所有真实种群',
      '忽略遗传漂变的随机性',
      '把基因流与基因漂变混淆',
    ],
    examples: [
      {
        title: '例 1 · 频率',
        prompt: '某种群 16% 个体表现隐性性状，求隐性等位基因频率 \\(q\\)。',
        steps: ['隐性纯合频率 \\(q^2=0.16\\)。', '\\(q=\\sqrt{0.16}=0.4\\)。'],
        solution: '\\(q=0.4\\)。',
      },
      {
        title: '例 2 · 瓶颈',
        prompt: '瓶颈效应为什么会让遗传多样性下降？',
        steps: ['种群骤减，仅少数个体繁殖。', '等位基因频率随机改变，部分等位基因丢失。'],
        solution: '小种群随机抽样导致多样性下降。',
      },
      {
        title: '例 3 · 基因流',
        prompt: '两个种群之间持续迁移会怎样？',
        steps: ['等位基因在种群间交换。', '频率趋同，遗传分化降低。'],
        solution: '基因流使种群更相似。',
      },
    ],
    examTips: [
      'CED Unit 7：群体遗传',
      '计算题：由表型频率反推等位基因频率',
      'FRQ 常考：判断哪种力量导致频率变化',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.5', title: '哈代–温伯格', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.9', title: '系统发生', relation: '相关' },
    ],
    development: ['等位基因频率', '四种改变等位基因频率的力量', '非随机交配与基因型频率', '哈代–温伯格', '瓶颈与奠基者'],
    checks: ['哈代–温伯格的五个假设是什么？', '为什么小种群漂变更明显？'],
    summary: '群体遗传用频率描述种群，并分析选择、漂变、突变、基因流如何改变频率。',
  },

  'bio/bio-u7/7.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能列举支持共同祖先的分子、解剖、化石与地理证据。',
      '能区分同源结构与趋同结构。',
      '能解释通用遗传密码与保守序列的意义。'
    ],
    essentialKnowledge: [
      '共同祖先指所有现存与已灭绝生物共享祖先种群。',
      '证据包括通用遗传密码、DNA/RNA、核糖体、ATP 等分子共性。',
      '同源结构、化石记录与生物地理分布支持共同起源。',
      '趋同演化产生功能相似但来源不同的结构，不反映近亲关系。',
      '水平基因转移可使部分基因树与物种树不一致。'
    ],
    definition: '共同祖先指所有现存与已灭绝生物共享祖先种群的观点。证据包括通用遗传密码、DNA/RNA、核糖体、ATP 等分子共性，以及同源结构、化石记录与生物地理分布。',
    intuition: '共同祖先像一棵巨大的家谱树：所有生物都是同一根系上的分支，亲缘远近取决于分化时间。',
    intuitionDetailed: '保守基因（如 rRNA、细胞色素 c）在不同物种间高度相似，差异大小可推断亲缘关系；同源器官（如脊椎动物前肢）显示共同起源，而趋同结构（如鸟翼与昆虫翅）不是同源。',
    formulas: [
      { latex: '\\text{序列差异}\\uparrow\\;\\Rightarrow\\;\\text{分化时间}\\uparrow', note: '分子钟的简化逻辑。' },
    ],
    conditions: ['共同祖先是一个科学推论，依赖多类证据', '同源 vs 趋同需要发育与结构证据', '水平基因转移会使部分基因树与物种树不一致'],
    keyPoints: ['所有生物共享共同祖先', '通用遗传密码是强证据', '同源结构支持共同起源', '趋同演化不反映近亲', 'LUCA 是现存生命的最近共同祖先'],
    misconceptions: [
      '认为人类由现代猴子进化而来（共享祖先，不是直系）',
      '把趋同结构当作同源',
      '认为进化是向人类方向前进的阶梯',
      '认为共同祖先等于最早的生命',
    ],
    examples: [
      {
        title: '例 1 · 分子证据',
        prompt: '为什么核糖体 RNA 序列可用于推断亲缘关系？',
        steps: ['rRNA 在所有生物中都有。', '保守区域变化慢，差异可反映分化时间。'],
        solution: '通用且保守，适合跨物种比较。',
      },
      {
        title: '例 2 · 同源',
        prompt: '人类手臂、鲸鳍与蝙蝠翼为何是同源结构？',
        steps: ['骨骼排列相似。', '来自共同祖先的前肢。'],
        solution: '结构同源，功能不同。',
      },
      {
        title: '例 3 · 趋同',
        prompt: '鸟翼与昆虫翅为何不是同源？',
        steps: ['胚胎来源与结构不同。', '功能相似但独立演化。'],
        solution: '趋同演化，不是共同祖先的直接证据。',
      },
    ],
    examTips: [
      'CED Unit 7：进化证据',
      '区分同源、趋同与痕迹结构',
      'FRQ 常考：用分子/化石/解剖证据支持共同祖先',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.6', title: '进化证据', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.8', title: '延续与变化', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.9', title: '系统发生', relation: '后续' },
    ],
    development: ['共同祖先概念', '分子证据', '同源与趋同', '生命之树'],
    checks: ['为什么通用遗传密码支持共同祖先？', '同源结构与趋同结构如何区分？'],
    summary: '共同祖先由分子、解剖、化石与地理证据共同支持；同源反映血缘，趋同反映相似选择压力。',
  },

  'em/em-u13/13.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用电感定义计算自感系数与磁链。',
      '能判断感应电动势方向并解释负号。',
      '能计算电感储能与螺线管电感。'
    ],
    essentialKnowledge: [
      '自感系数定义为磁链与电流之比：\\(L=\\dfrac{N\\Phi_B}{I}\\)。',
      '线性电感的感应电动势 \\(\\varepsilon_L=-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}\\)，负号表示反抗电流变化。',
      '电感反抗电流的变化，不反抗稳定电流；稳态直流下理想电感电压为零。',
      '磁场能 \\(U_L=\\dfrac12LI^{2}\\)；电流加倍，储能变为四倍。',
      '长直螺线管 \\(L=\\mu_0n^{2}Al\\)，电感与匝数平方成正比。'
    ],
    definition: '电感是回路对电流变化产生感应电动势的性质。自感系数定义为磁链与电流之比 \\(L=\\dfrac{N\\Phi_B}{I}\\)；对线性电感，感应电动势 \\(\\varepsilon_L=-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}\\)。单位亨利 \\(\\mathrm{H}=\\mathrm{V\\,s\\,A^{-1}}=\\mathrm{Wb\\,A^{-1}}\\)。',
    intuition: '电感像电流的惯性：电流想突然增大或减小时，电感用感应电动势反抗这个变化；电流稳定后，理想电感相当于一段导线。',
    intuitionDetailed: '电流增大时，线圈建立磁场，电源要克服感应电动势做功，能量储存在磁场中；电流减小时，磁场释放能量，感应电动势试图维持原电流。能量储存在磁场里，不是“储存在电流里”。',
    formulas: [
      { latex: 'L=\\dfrac{N\\Phi_B}{I}', note: '自感系数（磁链定义）。' },
      { latex: '\\varepsilon_L=-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}', note: '自感电动势；负号表示反抗电流变化。' },
      { latex: 'U_L=\\dfrac{1}{2}LI^{2}', note: '电感储存的磁场能。' },
      { latex: 'L=\\dfrac{\\mu_0N^{2}A}{l}=\\mu_0n^{2}Al', note: '长直螺线管（\\(n=\\dfrac{N}{l}\\)，无磁芯）。' },
    ],
    derivationNotes: [
      { from: '磁链定义', to: '自感系数', note: '把每匝磁通相加得 \\(N\\Phi_B\\)，再除以电流。' },
      { from: '法拉第定律', to: '自感电动势', note: '线性电感中 \\(\\Phi_B\\propto I\\)，故 \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=L\\,\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}\\)。' },
      { from: '电源功率', to: '磁场能', note: '克服反电动势的功率为 \\(LI\\,\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}\\)，积分得 \\(\\dfrac12LI^{2}\\)。' },
    ],
    conditions: ['线性电感：\\(L\\) 为常数，磁介质未饱和', '理想电感无电阻；实际线圈要同时考虑电阻', '感应电动势方向由楞次定律判断，始终反抗电流的变化', '长直螺线管公式要求长度远大于直径、忽略端部效应'],
    keyPoints: ['电感反抗电流的变化，不反抗稳定的电流', '稳态直流下理想电感两端电压为零', '\\(L\\) 由几何形状与磁介质决定，线性范围内与电流无关', '磁场能 \\(U_L=\\dfrac12LI^{2}\\)，电流加倍则能量变为四倍', '螺线管 \\(L\\propto N^{2}\\)：匝数加倍，电感变为四倍'],
    misconceptions: [
      '认为电感“储存电流”或“阻止电流流动”',
      '认为稳态时理想电感两端仍有电压',
      '把定义式 \\(L=\\dfrac{N\\Phi_B}{I}\\) 误读为 \\(L\\) 与电流成正比',
      '忽略实际线圈的电阻，把真实线圈当成理想电感',
      '把感应电动势的方向直接等同于电流方向，而不判断电流是增大还是减小',
    ],
    examples: [
      {
        title: '例 1 · 螺线管电感',
        prompt: '长 \\(0.20\\,\\mathrm{m}\\)、截面积 \\(1.0\\times10^{-4}\\,\\mathrm{m}^{2}\\) 的螺线管有 \\(1000\\) 匝。求其电感（无磁芯）。',
        steps: [
          '用 \\(L=\\dfrac{\\mu_0N^{2}A}{l}\\)。',
          '\\(L=\\dfrac{(4\\pi\\times10^{-7})(1000)^{2}(1.0\\times10^{-4})}{0.20}\\)。',
          '\\(L\\approx6.3\\times10^{-4}\\,\\mathrm{H}=0.63\\,\\mathrm{mH}\\)。',
        ],
        solution: '\\(L\\approx6.3\\times10^{-4}\\,\\mathrm{H}\\)。',
        solutionLatex: 'L\\approx6.3\\times10^{-4}\\,\\mathrm{H}',
      },
      {
        title: '例 2 · 电流线性上升',
        prompt: '\\(L=0.20\\,\\mathrm{H}\\) 的电感中，电流在 \\(0.10\\,\\mathrm{s}\\) 内由 \\(0\\) 均匀增至 \\(2.0\\,\\mathrm{A}\\)。求感应电动势大小，并说明方向。',
        steps: [
          '\\(\\left|\\varepsilon_L\\right|=L\\dfrac{\\Delta I}{\\Delta t}=0.20\\cdot\\dfrac{2.0}{0.10}=4.0\\,\\mathrm{V}\\)。',
          '电流在增大，感应电动势反抗增大，方向与电流方向相反（相当于“反电动势”）。',
        ],
        solution: '\\(4.0\\,\\mathrm{V}\\)，与电流方向相反。',
        solutionLatex: '\\left|\\varepsilon_L\\right|=4.0\\,\\mathrm{V}',
      },
      {
        title: '例 3 · 磁场能',
        prompt: '\\(L=0.50\\,\\mathrm{H}\\) 的电感通有 \\(2.0\\,\\mathrm{A}\\) 电流。求储存的磁场能；若电流加倍，能量变为多少？',
        steps: [
          '\\(U_L=\\dfrac12LI^{2}=\\dfrac12(0.50)(2.0)^{2}=1.0\\,\\mathrm{J}\\)。',
          '电流加倍时 \\(U_L\\propto I^{2}\\)，能量变为原来的四倍，即 \\(4.0\\,\\mathrm{J}\\)。',
        ],
        solution: '\\(1.0\\,\\mathrm{J}\\)；电流加倍后为 \\(4.0\\,\\mathrm{J}\\)。',
        solutionLatex: 'U_L=1.0\\,\\mathrm{J}\\;\\to\\;4.0\\,\\mathrm{J}',
      },
    ],
    examTips: [
      'CED Unit 13：自感、电感、LR 与 LC 电路',
      '先判断电流在增大还是减小，再用楞次定律定感应电动势方向',
      '单位换算：\\(1\\,\\mathrm{H}=1\\,\\mathrm{Wb\\,A^{-1}}=1\\,\\mathrm{V\\,s\\,A^{-1}}\\)',
      '注意 \\(N\\) 匝与磁链 \\(N\\Phi_B\\) 的区别，别把单匝磁通当成总磁链',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u13', code: '13.1', title: '磁通量', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.2', title: '电磁感应', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.5', title: 'LR 电路', relation: '后续' },
      { subject: 'em', chapterId: 'em-u10', code: '10.3', title: '电容器', relation: '类比' },
    ],
    development: ['磁链与自感定义', '法拉第定律给出 \\(\\varepsilon_L=-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}\\)', '磁场能与功率', '螺线管电感的几何依赖', '进入 LR 暂态'],
    checks: ['稳态直流下理想电感两端电压是多少？', '电流减小时感应电动势方向如何？', '\\(L\\) 会随电流线性增大吗？'],
    summary: '电感用电感系数 \\(L\\) 描述回路对电流变化的“惯性”，感应电动势反抗电流变化，磁场能 \\(U_L=\\dfrac12LI^{2}\\)。',
  },


  'mech/mech-u3/3.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算平均功率与瞬时功率。',
      '能判断功率的正负并解释其物理意义。',
      '能计算转动功率与机械效率。'
    ],
    essentialKnowledge: [
      '平均功率 \\(P_{\\mathrm{avg}}=\\dfrac{\\Delta W}{\\Delta t}\\)，瞬时功率 \\(P=\\mathbf F\\cdot\\mathbf v=Fv\\cos\\theta\\)。',
      '功率是标量，可正可负；力与速度夹角大于 \\(90^\\circ\\) 时功率为负。',
      '恒定功率下 \\(F\\) 与 \\(v\\) 成反比。',
      '转动功率 \\(P=\\tau\\omega\\)；效率 \\(\\eta=\\dfrac{P_{\\mathrm{useful}}}{P_{\\mathrm{in}}}\\)。',
      '\\(1\\,\\mathrm{W}=1\\,\\mathrm{J\\,s^{-1}}\\)，\\(1\\,\\mathrm{kW\\,h}=3.6\\times10^{6}\\,\\mathrm{J}\\)。'
    ],
    definition: '功率是做功或传递能量的速率：平均功率 \\(P_{\\mathrm{avg}}=\\dfrac{\\Delta W}{\\Delta t}\\)，瞬时功率 \\(P=\\dfrac{\\mathrm{d}W}{\\mathrm{d}t}=\\mathbf F\\cdot\\mathbf v\\)。单位瓦特 \\(\\mathrm{W}=\\mathrm{J\\,s^{-1}}\\)。转动情形 \\(P=\\tau\\omega\\)。',
    intuition: '同样的功，做得越快功率越大；功率描述的是能量流动的快慢，而不是能量总量。',
    intuitionDetailed: '汽车发动机以恒定功率输出时，牵引力与速度成反比：\\(F=\\dfrac{P}{v}\\)。所以爬坡或起步需要大牵引力时，速度必须降低；高速巡航时牵引力较小。',
    formulas: [
      { latex: 'P_{\\mathrm{avg}}=\\dfrac{\\Delta W}{\\Delta t}', note: '平均功率。' },
      { latex: 'P=\\mathbf F\\cdot\\mathbf v=Fv\\cos\\theta', note: '瞬时功率；\\(\\theta\\) 为力与速度夹角。' },
      { latex: 'P=\\tau\\omega', note: '转动功率。' },
      { latex: '\\eta=\\dfrac{P_{\\mathrm{useful}}}{P_{\\mathrm{in}}}', note: '效率，\\(0<\\eta\\le1\\)。' },
    ],
    derivationNotes: [
      { from: '功的定义', to: '瞬时功率', note: '\\(\\mathrm{d}W=\\mathbf F\\cdot\\mathrm{d}\\mathbf r\\)，两边除以 \\(\\mathrm{d}t\\) 得 \\(P=\\mathbf F\\cdot\\mathbf v\\)。' },
      { from: '转动功', to: '转动功率', note: '\\(\\mathrm{d}W=\\tau\\,\\mathrm{d}\\theta\\)，除以 \\(\\mathrm{d}t\\) 得 \\(P=\\tau\\omega\\)。' },
      { from: '能量守恒', to: '效率', note: '有用输出功率总小于输入功率，差额为损耗。' },
    ],
    conditions: ['瞬时功率必须用同一时刻的力与速度', '功率是标量，可正可负：力与速度夹角大于 \\(90^\\circ\\) 时为负', '额定功率是最大持续输出，不保证任何时刻都达到', '效率计算要明确“有用输出”和“总输入”'],
    keyPoints: ['\\(1\\,\\mathrm{W}=1\\,\\mathrm{J\\,s^{-1}}\\)；\\(1\\,\\mathrm{kW\\,h}=3.6\\times10^{6}\\,\\mathrm{J}\\)', '恒定功率下 \\(F\\) 与 \\(v\\) 成反比', '阻力做负功时功率为负', '串联与并联电路中功率分配不同，不能只凭电阻大小判断', '转动功率 \\(P=\\tau\\omega\\) 与平动 \\(P=Fv\\) 对应'],
    misconceptions: [
      '把功率与功混为一谈：功率大不等于做功多，还要看时间',
      '认为额定功率下牵引力恒定（实际 \\(F=\\dfrac{P}{v}\\) 随速度变化）',
      '认为功率大就一定快（还要看阻力与效率）',
      '用斜线写分式导致歧义，应写 \\(\\dfrac{P}{v}\\)',
    ],
    examples: [
      {
        title: '例 1 · 起重机',
        prompt: '起重机以 \\(0.50\\,\\mathrm{m\\,s^{-1}}\\) 匀速吊起 \\(20\\,\\mathrm{kg}\\) 物体。求有用功率。',
        steps: [
          '匀速时拉力等于重力：\\(F=mg=20\\times9.8=196\\,\\mathrm{N}\\)。',
          '\\(P=Fv=196\\times0.50=98\\,\\mathrm{W}\\)。',
        ],
        solution: '\\(P\\approx98\\,\\mathrm{W}\\)。',
        solutionLatex: 'P\\approx98\\,\\mathrm{W}',
      },
      {
        title: '例 2 · 恒定功率',
        prompt: '汽车发动机输出 \\(40\\,\\mathrm{kW}\\)。在 \\(20\\,\\mathrm{m\\,s^{-1}}\\) 时牵引力多大？若速度降为 \\(10\\,\\mathrm{m\\,s^{-1}}\\)，牵引力多大？',
        steps: [
          '\\(F=\\dfrac{P}{v}=\\dfrac{4.0\\times10^{4}}{20}=2.0\\times10^{3}\\,\\mathrm{N}\\)。',
          '速度减半时，若功率不变，\\(F\\) 加倍，即 \\(4.0\\times10^{3}\\,\\mathrm{N}\\)。',
        ],
        solution: '\\(2.0\\times10^{3}\\,\\mathrm{N}\\)；降速后为 \\(4.0\\times10^{3}\\,\\mathrm{N}\\)。',
        solutionLatex: 'F=2.0\\times10^{3}\\,\\mathrm{N}\\;\\to\\;4.0\\times10^{3}\\,\\mathrm{N}',
      },
      {
        title: '例 3 · 瞬时功率',
        prompt: '某物体受力 \\(F_x=3t\\,\\mathrm{N}\\)，速度 \\(v_x=2t\\,\\mathrm{m\\,s^{-1}}\\)。求 \\(t=2.0\\,\\mathrm{s}\\) 时的功率。',
        steps: [
          '\\(P=F_xv_x=(3t)(2t)=6t^{2}\\)。',
          '代入 \\(t=2.0\\,\\mathrm{s}\\)：\\(P=6(4)=24\\,\\mathrm{W}\\)。',
        ],
        solution: '\\(24\\,\\mathrm{W}\\)。',
        solutionLatex: 'P=24\\,\\mathrm{W}',
      },
    ],
    examTips: [
      'CED Unit 3：功、能量与功率',
      '区分平均功率与瞬时功率：平均用 \\(\\dfrac{\\Delta W}{\\Delta t}\\)，瞬时用 \\(Fv\\)',
      '恒功率问题的核心是 \\(F=\\dfrac{P}{v}\\)，不要假设牵引力恒定',
      '效率题先写“有用输出与总输入”，再代入能量或功率',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u3', code: '3.1', title: '动能定理', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.3', title: '机械能守恒', relation: '相关' },
      { subject: 'mech', chapterId: 'mech-u5', code: '5.3', title: '转动动力学', relation: '相关' },
      { subject: 'mech', chapterId: 'mech-u6', code: '6.1', title: '转动动能', relation: '相关' },
    ],
    development: ['平均功率', '瞬时功率 \\(Fv\\)', '恒功率下力与速度的关系', '转动功率', '效率与能量损耗'],
    checks: ['功率大是否一定做功多？', '恒定功率下速度加倍，牵引力如何变？', '力与速度垂直时功率是多少？'],
    summary: '功率是能量转化的速率：平动 \\(P=\\mathbf F\\cdot\\mathbf v\\)，转动 \\(P=\\tau\\omega\\)，恒功率时力与速度成反比。',
  },

  'mech/mech-u6/6.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能应用无滑动滚动条件 \\(v=\\omega R\\)。',
      '能计算滚动动能与斜面下滚加速度。',
      '能判断静摩擦方向并解释其不做功。'
    ],
    essentialKnowledge: [
      '无滑动滚动时接触点瞬时静止，\\(v_{\\mathrm{cm}}=\\omega R\\)，\\(a_{\\mathrm{cm}}=\\alpha R\\)。',
      '滚动动能包含平动与绕质心转动：\\(K=\\dfrac12Mv_{\\mathrm{cm}}^{2}+\\dfrac12I_{\\mathrm{cm}}\\omega^{2}\\)。',
      '沿斜面下滚时 \\(a_{\\mathrm{cm}}=\\dfrac{g\\sin\\theta}{1+\\frac{I_{\\mathrm{cm}}}{MR^{2}}}\\)。',
      '所需静摩擦 \\(f_s=\\dfrac{I_{\\mathrm{cm}}a_{\\mathrm{cm}}}{R^{2}}\\)，方向沿斜面向上。',
      '无滑动时静摩擦不做功，机械能守恒；打滑时 \\(v_{\\mathrm{cm}}\\ne\\omega R\\)。'
    ],
    definition: '无滑动滚动时，接触点瞬时静止，质心速度与角速度满足 \\(v_{\\mathrm{cm}}=\\omega R\\)，加速度满足 \\(a_{\\mathrm{cm}}=\\alpha R\\)。滚动动能等于平动动能与绕质心转动动能之和：\\(K=\\dfrac12Mv_{\\mathrm{cm}}^{2}+\\dfrac12I_{\\mathrm{cm}}\\omega^{2}\\)。',
    intuition: '车轮一面平动一面转动；接触点像“粘”在地面上，所以质心前进一圈，轮子正好转一圈。',
    intuitionDetailed: '无滑动时，静摩擦提供转动所需的力矩，但接触点没有相对位移，静摩擦不做功（理想刚体、固定表面）。若打滑，动摩擦做负功并产生热量，机械能不守恒。',
    formulas: [
      { latex: 'v_{\\mathrm{cm}}=\\omega R,\\qquad a_{\\mathrm{cm}}=\\alpha R', note: '无滑动滚动的运动学约束。' },
      { latex: 'K=\\dfrac12Mv_{\\mathrm{cm}}^{2}+\\dfrac12I_{\\mathrm{cm}}\\omega^{2}', note: '滚动动能。' },
      { latex: 'a_{\\mathrm{cm}}=\\dfrac{g\\sin\\theta}{1+\\dfrac{I_{\\mathrm{cm}}}{MR^{2}}}', note: '沿斜面下滚的质心加速度。' },
      { latex: 'f_s=\\dfrac{I_{\\mathrm{cm}}a_{\\mathrm{cm}}}{R^{2}}', note: '沿斜面下滚时所需静摩擦力（沿斜面向上）。' },
    ],
    derivationNotes: [
      { from: '无滑动条件', to: '速度与加速度约束', note: '接触点速度为零：\\(v_{\\mathrm{cm}}-\\omega R=0\\)，求导得加速度关系。' },
      { from: '动能分解', to: '滚动动能', note: '刚体动能 = 质心平动动能 + 绕质心转动动能（König 定理）。' },
      { from: '牛顿第二定律 + 转动定律', to: '斜面加速度', note: '\\(Mg\\sin\\theta-f=Ma\\)，\\(fR=I\\alpha\\)，联立消去 \\(f\\)。' },
    ],
    conditions: ['无滑动：静摩擦足够大，接触面无相对滑动', '刚体与固定表面；轮子质量分布给定', '斜面滚动时静摩擦通常沿斜面向上（下滚加速情形）', '若有其他阻力或打滑，机械能不守恒'],
    keyPoints: ['无滑动滚动中静摩擦不做功，机械能守恒（无其他损耗）', '滚动动能包含平动与转动两部分', '同样外形下 \\(\\dfrac{I}{MR^{2}}\\) 越小，滚得越快', '实心球 \\(I=\\dfrac25MR^{2}\\)，实心圆柱 \\(I=\\dfrac12MR^{2}\\)，薄圆环 \\(I=MR^{2}\\)', '打滑时 \\(v_{\\mathrm{cm}}\\ne\\omega R\\)，需分别用牛顿定律与转动定律'],
    misconceptions: [
      '认为滚动摩擦一定做负功（无滑动时静摩擦不做功）',
      '认为所有滚动物体沿斜面下滑的加速度相同',
      '把 \\(v=\\omega R\\) 用于打滑情形',
      '认为静摩擦方向总沿斜面向上（取决于运动状态与驱动力矩）',
      '把滚动动能只写成 \\(\\dfrac12Mv^{2}\\)，漏掉转动部分',
    ],
    examples: [
      {
        title: '例 1 · 谁滚得快',
        prompt: '薄圆环与实心圆柱从同一斜面同一高度由静止无滑动滚下。谁先到达底部？',
        steps: [
          '沿斜面加速度 \\(a=\\dfrac{g\\sin\\theta}{1+\\dfrac{I}{MR^{2}}}\\)。',
          '圆环 \\(I=MR^{2}\\)，\\(a_{\\mathrm{ring}}=\\dfrac12g\\sin\\theta\\)；圆柱 \\(I=\\dfrac12MR^{2}\\)，\\(a_{\\mathrm{cyl}}=\\dfrac23g\\sin\\theta\\)。',
          '\\(a_{\\mathrm{cyl}}>a_{\\mathrm{ring}}\\)，实心圆柱先到。',
        ],
        solution: '实心圆柱先到；转动惯量越小，平动加速度越大。',
      },
      {
        title: '例 2 · 滚动动能',
        prompt: '质量 \\(1.0\\,\\mathrm{kg}\\)、半径 \\(0.10\\,\\mathrm{m}\\) 的实心球以 \\(2.0\\,\\mathrm{m\\,s^{-1}}\\) 无滑动滚动。求总动能。',
        steps: [
          '\\(\\omega=\\dfrac{v}{R}=\\dfrac{2.0}{0.10}=20\\,\\mathrm{rad\\,s^{-1}}\\)。',
          '实心球 \\(I=\\dfrac25mR^{2}\\)，故 \\(\\dfrac12I\\omega^{2}=\\dfrac12\\cdot\\dfrac25mR^{2}\\cdot\\dfrac{v^{2}}{R^{2}}=\\dfrac15mv^{2}\\)。',
          '\\(K=\\dfrac12mv^{2}+\\dfrac15mv^{2}=0.70mv^{2}=0.70(1.0)(4.0)=2.8\\,\\mathrm{J}\\)。',
        ],
        solution: '\\(K=2.8\\,\\mathrm{J}\\)。',
        solutionLatex: 'K=2.8\\,\\mathrm{J}',
      },
      {
        title: '例 3 · 斜面静摩擦',
        prompt: '质量 \\(1.0\\,\\mathrm{kg}\\) 的实心圆柱沿 \\(30^\\circ\\) 斜面无滑动下滚。求加速度与静摩擦大小。',
        steps: [
          '\\(a=\\dfrac{g\\sin30^\\circ}{1+\\dfrac12}=\\dfrac{9.8\\times0.50}{1.5}=3.27\\,\\mathrm{m\\,s^{-2}}\\)。',
          '\\(f=\\dfrac{Ia}{R^{2}}=\\dfrac{\\dfrac12MR^{2}a}{R^{2}}=\\dfrac12Ma=0.50(1.0)(3.27)=1.63\\,\\mathrm{N}\\)。',
          '方向沿斜面向上。',
        ],
        solution: '\\(a\\approx3.3\\,\\mathrm{m\\,s^{-2}}\\)，\\(f_s\\approx1.6\\,\\mathrm{N}\\) 沿斜面向上。',
        solutionLatex: 'a\\approx3.3\\,\\mathrm{m\\,s^{-2}},\\;f_s\\approx1.6\\,\\mathrm{N}',
      },
    ],
    examTips: [
      'CED Unit 6：转动能量与角动量；滚动是平动与转动的组合',
      '先判断是否“无滑动”，再决定能否用 \\(v=\\omega R\\)',
      '能量法与“牛顿第二定律 + 转动定律”都可解，注意静摩擦不做功',
      '比较滚快慢时看 \\(\\dfrac{I}{MR^{2}}\\)，不要只看质量或半径',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u6', code: '6.1', title: '转动动能', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u5', code: '5.3', title: '转动动力学', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u6', code: '6.2', title: '角动量', relation: '相关' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.3', title: '机械能守恒', relation: '相关' },
    ],
    development: ['无滑动条件', '滚动动能分解', '斜面加速度与静摩擦', '转动惯量对滚快慢的影响', '打滑情形的修正'],
    checks: ['无滑动滚动时静摩擦做功吗？', '为什么实心圆柱比薄圆环滚得快？', '打滑时 \\(v=\\omega R\\) 还成立吗？'],
    summary: '无滑动滚动满足 \\(v_{\\mathrm{cm}}=\\omega R\\)，动能由平动与转动两部分组成；静摩擦提供力矩但不做功。',
  },


  'mech/mech-u7/7.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能推导小角度单摆的简谐运动方程。',
      '能计算周期、角频率与最低点张力。',
      '能说明小角度近似的适用范围与大角度修正。'
    ],
    essentialKnowledge: [
      '小角度下 \\(\\sin\\theta\\approx\\theta\\)，运动方程 \\(\\ddot\\theta=-\\dfrac{g}{L}\\theta\\)。',
      '解为 \\(\\theta(t)=\\theta_0\\cos(\\omega t+\\phi)\\)，\\(\\omega=\\sqrt{\\dfrac{g}{L}}\\)，\\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\)。',
      '周期与摆球质量无关；小振幅下与振幅无关。',
      '最低点张力 \\(T_{\\mathrm{bottom}}=mg+\\dfrac{mv^{2}}{L}\\)，最高点张力最小。',
      '大角度时周期随振幅增大，需用椭圆积分修正。'
    ],
    definition: '单摆由不可伸长的轻绳与质点摆球组成。小角度近似 \\(\\sin\\theta\\approx\\theta\\) 下，切向运动方程为 \\(\\ddot\\theta=-\\dfrac{g}{L}\\theta\\)，故 \\(\\theta(t)=\\theta_0\\cos(\\omega t+\\phi)\\)，周期 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\)，与摆球质量和振幅（小振幅）无关。',
    intuition: '摆球被拉离平衡位置后，重力沿圆弧的切向分量总指向平衡位置，充当回复力；角度越小，这个分量越接近与位移成正比。',
    intuitionDetailed: '切向方程是 \\(mL\\ddot\\theta=-mg\\sin\\theta\\)。小角时 \\(\\sin\\theta\\approx\\theta\\)，得到简谐振动；大角度时周期随振幅增大而变长，不能用 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\) 精确描述。',
    formulas: [
      { latex: '\\ddot\\theta=-\\dfrac{g}{L}\\theta', note: '小角度近似下的运动方程。' },
      { latex: 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', note: '单摆周期（小角度）。' },
      { latex: '\\omega=\\sqrt{\\dfrac{g}{L}}', note: '角频率。' },
      { latex: 'T_{\\mathrm{bottom}}=mg+\\dfrac{mv^{2}}{L}', note: '最低点绳张力。' },
    ],
    derivationNotes: [
      { from: '切向牛顿第二定律', to: '简谐方程', note: '\\(mL\\ddot\\theta=-mg\\sin\\theta\\)，小角时 \\(\\sin\\theta\\approx\\theta\\)。' },
      { from: '简谐方程', to: '周期公式', note: '与 \\(\\ddot x=-\\omega^{2}x\\) 对比得 \\(\\omega^{2}=\\dfrac{g}{L}\\)。' },
      { from: '能量守恒', to: '速度与张力', note: '\\(mgh=\\dfrac12mv^{2}\\)，再在最低点写径向牛顿第二定律。' },
    ],
    conditions: ['轻绳不可伸长，摆球视为质点', '小角度（通常 \\(\\theta_0\\lesssim10^\\circ\\)）才能视为简谐', '无空气阻力，悬点固定', '大角度时周期随振幅增大，需用椭圆积分修正'],
    keyPoints: ['周期与摆球质量无关', '周期随 \\(L\\) 增大而增大，随 \\(g\\) 增大而减小', '小角度近似是得到简谐运动的关键', '能量在重力势能与动能之间转换', '最低点张力最大，最高点张力最小'],
    misconceptions: [
      '认为质量越大周期越长',
      '认为大角度时 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\) 仍精确成立',
      '认为回复力就是重力本身（实际是重力的切向分量）',
      '认为最高点速度为零所以加速度也为零（加速度最大）',
      '把周期公式中的 \\(L\\) 当成摆球到地面的高度',
    ],
    examples: [
      {
        title: '例 1 · 周期',
        prompt: '摆长 \\(L=1.0\\,\\mathrm{m}\\)，取 \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\)，小角度摆动。求周期。',
        steps: [
          '\\(T=2\\pi\\sqrt{\\dfrac{L}{g}}=2\\pi\\sqrt{\\dfrac{1.0}{9.8}}\\)。',
          '\\(T\\approx2.0\\,\\mathrm{s}\\)。',
        ],
        solution: '\\(T\\approx2.0\\,\\mathrm{s}\\)。',
        solutionLatex: 'T\\approx2.0\\,\\mathrm{s}',
      },
      {
        title: '例 2 · 测重力加速度',
        prompt: '某单摆 \\(L=0.64\\,\\mathrm{m}\\)，测得周期 \\(T=1.60\\,\\mathrm{s}\\)。求当地 \\(g\\)。',
        steps: [
          '由 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\) 得 \\(g=\\dfrac{4\\pi^{2}L}{T^{2}}\\)。',
          '\\(g=\\dfrac{4\\pi^{2}(0.64)}{(1.60)^{2}}\\approx9.9\\,\\mathrm{m\\,s^{-2}}\\)。',
        ],
        solution: '\\(g\\approx9.9\\,\\mathrm{m\\,s^{-2}}\\)。',
        solutionLatex: 'g\\approx9.9\\,\\mathrm{m\\,s^{-2}}',
      },
      {
        title: '例 3 · 能量与张力',
        prompt: '\\(L=1.0\\,\\mathrm{m}\\)、\\(m=0.20\\,\\mathrm{kg}\\) 的单摆从 \\(\\theta_0=0.10\\,\\mathrm{rad}\\) 由静止释放。求最低点速度与绳张力。',
        steps: [
          '高度差 \\(h=L(1-\\cos\\theta_0)\\approx1.0(1-0.9950)=5.0\\times10^{-3}\\,\\mathrm{m}\\)。',
          '\\(v=\\sqrt{2gh}=\\sqrt{2(9.8)(5.0\\times10^{-3})}\\approx0.31\\,\\mathrm{m\\,s^{-1}}\\)。',
          '\\(T=mg+\\dfrac{mv^{2}}{L}=0.20(9.8)+\\dfrac{0.20(0.31)^{2}}{1.0}\\approx2.0\\,\\mathrm{N}\\)。',
        ],
        solution: '\\(v\\approx0.31\\,\\mathrm{m\\,s^{-1}}\\)，\\(T\\approx2.0\\,\\mathrm{N}\\)。',
        solutionLatex: 'v\\approx0.31\\,\\mathrm{m\\,s^{-1}},\\;T\\approx2.0\\,\\mathrm{N}',
      },
    ],
    examTips: [
      'CED Unit 7：周期运动；单摆是简谐运动的原型',
      '先确认小角度，再使用 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\)',
      '测 \\(g\\) 时作 \\(T^{2}\\) 对 \\(L\\) 的图，斜率 \\(=\\dfrac{4\\pi^{2}}{g}\\)',
      '最低点用径向牛顿第二定律求张力，不要漏掉向心项',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u7', code: '7.1', title: '周期运动', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u7', code: '7.3', title: '复摆', relation: '后续' },
      { subject: 'mech', chapterId: 'mech-u2', code: '2.4', title: '圆周运动', relation: '相关' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.3', title: '机械能守恒', relation: '相关' },
    ],
    development: ['回复力与切向方程', '小角度近似', '周期与角频率', '能量转换', '最低点张力'],
    checks: ['单摆周期与摆球质量有关吗？', '为什么大角度时周期会变长？', '最低点绳张力为什么大于重力？'],
    summary: '小角度单摆做简谐运动，周期 \\(T=2\\pi\\sqrt{\\dfrac{L}{g}}\\)，只由摆长与重力加速度决定。',
  },

  'math/math-prep-geo/P2.10': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能识别平移、旋转、反射与位似变换。 · Identify translations, rotations, reflections, and dilations.",
      "能写出变换的坐标表达式并判断保距性。 · Write coordinate rules for transformations and determine whether they preserve distance.",
      "能分析复合变换的顺序与面积缩放。 · Analyze the order of composite transformations and the scaling of area."
    ],
    essentialKnowledge: [
      "平移、旋转、反射保持长度与角度，是保距变换，得到全等图形。 · Translations, rotations, and reflections preserve lengths and angles, are distance-preserving transformations, and produce congruent figures.",
      "位似以某点为中心按比例 \\(k\\) 缩放，保持角度、把长度按 \\(|k|\\) 缩放，得到相似图形。 · A dilation centered at a point scales by a factor \\(k\\); it preserves angles and scales lengths by \\(|k|\\), producing similar figures.",
      "反射改变手性；旋转与平移不改变手性。 · Reflections reverse orientation; rotations and translations do not.",
      "变换复合按“先做 \\(T_1\\) 再做 \\(T_2\\)”记为 \\(T_2\\circ T_1\\)，一般不可交换。 · For a composition, “do \\(T_1\\) first, then \\(T_2\\)” is written \\(T_2\\circ T_1\\); compositions generally do not commute.",
      "位似把面积按 \\(k^{2}\\) 缩放。 · A dilation scales area by \\(k^{2}\\)."
    ],
    definition: "平面变换把平面上的点按规则映射到新的点。平移、旋转、反射保持长度与角度，称为保距变换，得到全等图形；位似（以某点为中心按比例 \\(k\\) 缩放）保持角度、把长度按 \\(|k|\\) 缩放，得到相似图形。变换可以复合：先做 \\(T_1\\) 再做 \\(T_2\\)，记作 \\(T_2\\circ T_1\\)。 · A plane transformation maps points of the plane to new points according to a rule. Translations, rotations, and reflections preserve lengths and angles, are called distance-preserving transformations, and produce congruent figures; a dilation centered at a point scales by a factor \\(k\\), preserves angles, and scales lengths by \\(|k|\\), producing similar figures. Transformations can be composed: doing \\(T_1\\) first and then \\(T_2\\) is written \\(T_2\\circ T_1\\).",
    intuition: "平移是滑动，旋转是转动，反射是翻面，位似是放大或缩小。前三种不改变图形的大小和形状，位似只改变大小、不改变形状。 · A translation slides, a rotation turns, a reflection flips, and a dilation enlarges or shrinks. The first three do not change size or shape; a dilation changes only size, not shape.",
    intuitionDetailed: "坐标规则：平移 \\((x,y)\\mapsto(x+a,y+b)\\)；关于 \\(x\\) 轴反射 \\((x,y)\\mapsto(x,-y)\\)；关于 \\(y\\) 轴反射 \\((-x,y)\\)；关于原点 \\((-x,-y)\\)；以原点为中心、比例 \\(k\\) 的位似 \\((x,y)\\mapsto(kx,ky)\\)；逆时针旋转 \\(90^\\circ\\)：\\((-y,x)\\)。 · Coordinate rules: translation \\((x,y)\\mapsto(x+a,y+b)\\); reflection across the \\(x\\)-axis \\((x,y)\\mapsto(x,-y)\\); reflection across the \\(y\\)-axis \\((-x,y)\\); reflection across the origin \\((-x,-y)\\); dilation centered at the origin with factor \\(k\\), \\((x,y)\\mapsto(kx,ky)\\); counterclockwise rotation by \\(90^\\circ\\), \\((-y,x)\\).",
    formulas: [
      {
        latex: "(x,y)\\mapsto(x+a,\\,y+b)",
        note: "平移 \\((a,b)\\)。 · Translation by \\((a,b)\\)."
      },
      {
        latex: "(x,y)\\mapsto(-y,\\,x)",
        note: "绕原点逆时针旋转 \\(90^\\circ\\)。 · Counterclockwise rotation by \\(90^\\circ\\) about the origin."
      },
      {
        latex: "(x,y)\\mapsto(x,\\,-y)",
        note: "关于 \\(x\\) 轴反射。 · Reflection across the \\(x\\)-axis."
      },
      {
        latex: "(x,y)\\mapsto(kx,\\,ky)",
        note: "以原点为中心的位似，比例 \\(k\\)。 · Dilation centered at the origin with factor \\(k\\)."
      }
    ],
    derivationNotes: [
      {
        from: "坐标定义 · Coordinate definitions",
        to: "平移、反射、旋转规则 · Rules for translation, reflection, and rotation",
        note: "把每个点的坐标按几何方向改写。 · Rewrite the coordinates of each point according to the geometric direction."
      },
      {
        from: "保距变换 · Distance-preserving transformations",
        to: "全等 · Congruence",
        note: "长度与角度不变，因此对应边、对应角相等。 · Lengths and angles do not change, so corresponding sides and angles are equal."
      },
      {
        from: "保距 + 位似 · Distance preservation + dilation",
        to: "相似 · Similarity",
        note: "角度不变、边长按同一比例缩放。 · Angles stay the same and all side lengths scale by the same factor."
      }
    ],
    conditions: [
      "保距变换保持长度与角度；反射会反转定向 · Distance-preserving transformations preserve lengths and angles; reflections reverse orientation.",
      "位似比例 \\(k\\neq0\\)；\\(k>0\\) 同向，\\(k<0\\) 反向，\\(|k|=1\\) 时保距 · A dilation factor satisfies \\(k\\neq0\\); \\(k>0\\) keeps orientation, \\(k<0\\) reverses it, and \\(|k|=1\\) preserves distance.",
      "复合变换一般不可交换，顺序不同结果可能不同 · Composite transformations generally do not commute; a different order may give a different result.",
      "旋转要明确旋转中心、方向与角度 · A rotation must specify its center, direction, and angle."
    ],
    keyPoints: [
      "平移、旋转、反射是保距变换；位似不是保距 · Translations, rotations, and reflections preserve distance; dilations do not.",
      "全等 = 保距变换；相似 = 保距 + 位似 · Congruence comes from distance-preserving transformations; similarity comes from distance preservation plus dilation.",
      "反射改变手性，旋转与平移不改变 · Reflections reverse orientation; rotations and translations do not.",
      "复合变换按“先做…后做…”的顺序进行 · Compose transformations in the order “first… then…”.",
      "位似把面积按 \\(k^{2}\\) 缩放 · A dilation scales area by \\(k^{2}\\)."
    ],
    misconceptions: [
      "认为位似保持长度不变 · Assuming a dilation preserves length.",
      "认为所有变换都可以交换顺序 · Assuming all transformations can be applied in any order.",
      "把旋转方向（顺时针与逆时针）弄反 · Reversing clockwise and counterclockwise rotations.",
      "认为反射后图形与原图形定向相同（实际相反） · Assuming a reflection gives the same orientation as the original (it is opposite).",
      "把位似的面积比当成 \\(k\\) 而不是 \\(k^{2}\\) · Using \\(k\\) rather than \\(k^{2}\\) for the area ratio of a dilation."
    ],
    examples: [
      {
        title: "例 1 · 平移 · Translation",
        prompt: "把点 \\(A(2,-1)\\) 按向量 \\((-3,4)\\) 平移，求像点坐标。 · Translate \\(A(2,-1)\\) by the vector \\((-3,4)\\) and find the image coordinates.",
        steps: [
          "平移规则：\\((x,y)\\mapsto(x+a,y+b)\\)。 · Translation rule: \\((x,y)\\mapsto(x+a,y+b)\\).",
          "\\(A(2,-1)\\mapsto(2-3,\\,-1+4)=(-1,3)\\)。 · Apply the rule: \\(A(2,-1)\\mapsto(2-3,\\,-1+4)=(-1,3)\\)."
        ],
        solution: "\\(A'(-1,3)\\)。 · The image is \\(A'(-1,3)\\).",
        solutionLatex: "A'(-1,3)"
      },
      {
        title: "例 2 · 反射 · Reflection",
        prompt: "求点 \\((3,2)\\) 关于 \\(x\\) 轴、\\(y\\) 轴、原点的对称点。 · Find the images of \\((3,2)\\) under reflection across the \\(x\\)-axis, the \\(y\\)-axis, and the origin.",
        steps: [
          "关于 \\(x\\) 轴：\\((x,y)\\mapsto(x,-y)\\)，得 \\((3,-2)\\)。 · Across the \\(x\\)-axis: \\((x,y)\\mapsto(x,-y)\\), giving \\((3,-2)\\).",
          "关于 \\(y\\) 轴：\\((x,y)\\mapsto(-x,y)\\)，得 \\((-3,2)\\)。 · Across the \\(y\\)-axis: \\((x,y)\\mapsto(-x,y)\\), giving \\((-3,2)\\).",
          "关于原点：\\((x,y)\\mapsto(-x,-y)\\)，得 \\((-3,-2)\\)。 · Across the origin: \\((x,y)\\mapsto(-x,-y)\\), giving \\((-3,-2)\\)."
        ],
        solution: "\\((3,-2)\\)、\\((-3,2)\\)、\\((-3,-2)\\)。 · The images are \\((3,-2)\\), \\((-3,2)\\), and \\((-3,-2)\\)."
      },
      {
        title: "例 3 · 旋转与位似 · Rotation and Dilation",
        prompt: "把点 \\((1,0)\\) 绕原点逆时针旋转 \\(90^\\circ\\)，再以原点为中心、比例 \\(k=2\\) 位似。求最终坐标。 · Rotate \\((1,0)\\) counterclockwise by \\(90^\\circ\\) about the origin, then dilate by a factor \\(k=2\\) centered at the origin. Find the final coordinates.",
        steps: [
          "逆时针 \\(90^\\circ\\)：\\((x,y)\\mapsto(-y,x)\\)，\\((1,0)\\mapsto(0,1)\\)。 · Counterclockwise \\(90^\\circ\\): \\((x,y)\\mapsto(-y,x)\\), so \\((1,0)\\mapsto(0,1)\\).",
          "位似：\\((x,y)\\mapsto(2x,2y)\\)，\\((0,1)\\mapsto(0,2)\\)。 · Dilation: \\((x,y)\\mapsto(2x,2y)\\), so \\((0,1)\\mapsto(0,2)\\)."
        ],
        solution: "最终为 \\((0,2)\\)。 · The final point is \\((0,2)\\).",
        solutionLatex: "(0,2)"
      }
    ],
    examTips: [
      "先把坐标规则写出来，再代入数值 · Write the coordinate rule first, then substitute the numbers.",
      "判断全等还是相似，看变换是否保距 · To decide between congruence and similarity, check whether the transformation preserves distance.",
      "复合变换画图检查顺序；先旋转后平移与先平移后旋转通常不同 · For composite transformations, sketch the order; rotating then translating is usually different from translating then rotating.",
      "位似的面积比是比例因子的平方 · The area ratio of a dilation is the square of the scale factor."
    ],
    related: [
      {
        subject: "math",
        chapterId: "math-prep-geo",
        code: "P2.2",
        title: "平行与三角形全等 · Parallel Lines and Triangle Congruence",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "math-prep-geo",
        code: "P2.3",
        title: "相似三角形 · Similar Triangles",
        relation: "相关 · Related"
      },
      {
        subject: "math",
        chapterId: "math-prep-geo",
        code: "P2.9",
        title: "坐标几何 · Coordinate Geometry",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "math-prep-precalc",
        code: "P4.8",
        title: "矩阵与变换 · Matrices and Transformations",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "平移的坐标规则 · Coordinate rule for translation",
      "反射与旋转 · Reflections and rotations",
      "保距与全等 · Distance preservation and congruence",
      "位似与相似 · Dilations and similarity",
      "复合变换与矩阵表示 · Composite transformations and matrix representations"
    ],
    checks: [
      "平移、旋转、反射中哪些保持定向？ · Which of translations, rotations, and reflections preserve orientation?",
      "位似比例为 \\(-2\\) 时图形如何变化？ · What happens to a figure under a dilation factor of \\(-2\\)?",
      "复合变换的顺序会影响结果吗？ · Does the order of composite transformations affect the result?"
    ],
    summary: "变换用坐标规则描述图形的位置与形状变化；保距变换给全等，位似给相似，复合要注意顺序。 · Transformations describe changes in position and shape with coordinate rules; distance-preserving transformations give congruence, dilations give similarity, and composition order matters."
  },
  'em/em-u12/12.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算运动电荷与电流元所受磁力。',
      '能判断磁力方向并说明其不做功。',
      '能解释磁感线闭合与无磁单极子。'
    ],
    essentialKnowledge: [
      '磁场由运动电荷、电流或磁体产生，用磁感应强度 \\(\\mathbf B\\) 描述，单位特斯拉。',
      '运动电荷受力 \\(\\mathbf F=q\\mathbf v\\times\\mathbf B\\)，大小 \\(F=qvB\\sin\\theta\\)。',
      '电流元受力 \\(\\mathrm{d}\\mathbf F=I\\,\\mathrm{d}\\boldsymbol\\ell\\times\\mathbf B\\)。',
      '磁场力垂直于速度，不做功，不改变电荷速率。',
      '磁感线闭合，不存在磁单极子；\\(\\mathbf B\\) 的方向定义为小磁针 N 极指向。'
    ],
    definition: '磁场由运动电荷、电流或磁体产生，用磁感应强度 \\(\\mathbf B\\) 描述，单位特斯拉 \\(\\mathrm{T}=\\mathrm{N\\,A^{-1}\\,m^{-1}}\\)。磁场对运动电荷的力为 \\(\\mathbf F=q\\mathbf v\\times\\mathbf B\\)，对电流元为 \\(\\mathrm{d}\\mathbf F=I\\,\\mathrm{d}\\boldsymbol\\ell\\times\\mathbf B\\)。磁感线闭合，不存在磁单极子。',
    intuition: '磁场是“速度相关”的场：静止电荷感觉不到它，只有运动电荷才受到侧向的磁力。',
    intuitionDetailed: '右手定则：四指从 \\(\\mathbf v\\) 转向 \\(\\mathbf B\\)，拇指指向正电荷受力方向；负电荷受力相反。磁场力始终垂直于速度，因此不做功，只改变运动方向，不改变速率。',
    formulas: [
      { latex: '\\mathbf F=q\\mathbf v\\times\\mathbf B', note: '洛伦兹力（磁场部分）。' },
      { latex: 'F=qvB\\sin\\theta', note: '力的大小；\\(\\theta\\) 为 \\(\\mathbf v\\) 与 \\(\\mathbf B\\) 的夹角。' },
      { latex: '\\mathbf F=I\\mathbf L\\times\\mathbf B', note: '直导线所受磁力。' },
      { latex: '1\\,\\mathrm{T}=1\\,\\mathrm{N\\,A^{-1}\\,m^{-1}}=1\\,\\mathrm{Wb\\,m^{-2}}', note: '单位关系。' },
    ],
    derivationNotes: [
      { from: '实验事实', to: '洛伦兹力', note: '力的大小与 \\(q\\)、\\(v\\)、\\(B\\) 及夹角的正弦成正比，方向垂直于 \\(\\mathbf v\\) 与 \\(\\mathbf B\\)。' },
      { from: '电荷受力', to: '电流受力', note: '把 \\(q\\mathbf v\\) 换成 \\(I\\,\\mathrm{d}\\boldsymbol\\ell\\)，对导线积分。' },
      { from: '磁感线闭合', to: '无磁单极', note: '穿过任意闭合曲面的净磁通为零，磁感线没有起点和终点。' },
    ],
    conditions: ['洛伦兹力只作用于运动电荷；静止电荷不受磁力', '力垂直于 \\(\\mathbf v\\) 与 \\(\\mathbf B\\)，大小 \\(qvB\\sin\\theta\\)', '磁场由电流、磁体或变化的电场产生', '\\(\\mathbf B\\) 的方向定义为小磁针 N 极的指向'],
    keyPoints: ['磁场是矢量场，单位特斯拉', '磁感线闭合，无磁单极子', '磁场力不做功，不改变电荷速率', '电荷沿 \\(\\mathbf B\\) 方向运动时不受磁力', '负电荷受力方向与正电荷相反', '\\(1\\,\\mathrm{T}=1\\,\\mathrm{Wb\\,m^{-2}}\\)'],
    misconceptions: [
      '认为磁场对静止电荷有力的作用',
      '认为磁感线从 N 极出发、到 S 极终止（外部看似如此，内部闭合）',
      '认为磁场力会改变电荷的速率或动能',
      '把 \\(\\mathbf B\\) 的方向与磁场力的方向混淆',
      '认为磁场力总是与速度同向或反向',
    ],
    examples: [
      {
        title: '例 1 · 电子',
        prompt: '电子以 \\(2.0\\times10^{6}\\,\\mathrm{m\\,s^{-1}}\\) 垂直射入 \\(B=0.50\\,\\mathrm{T}\\) 的匀强磁场。求磁力大小，并说明方向如何确定。',
        steps: [
          '\\(F=qvB\\sin90^\\circ=(1.6\\times10^{-19})(2.0\\times10^{6})(0.50)\\)。',
          '\\(F=1.6\\times10^{-13}\\,\\mathrm{N}\\)。',
          '先按正电荷用右手定则，再取反方向（电子带负电）。',
        ],
        solution: '\\(F=1.6\\times10^{-13}\\,\\mathrm{N}\\)，方向与正电荷受力相反。',
        solutionLatex: 'F=1.6\\times10^{-13}\\,\\mathrm{N}',
      },
      {
        title: '例 2 · 通电导线',
        prompt: '长 \\(0.20\\,\\mathrm{m}\\) 的直导线通有 \\(3.0\\,\\mathrm{A}\\) 电流，垂直放入 \\(B=0.40\\,\\mathrm{T}\\) 的磁场。求磁力。',
        steps: [
          '\\(F=ILB\\sin90^\\circ=(3.0)(0.20)(0.40)\\)。',
          '\\(F=0.24\\,\\mathrm{N}\\)。',
          '方向由 \\(\\mathbf L\\times\\mathbf B\\) 的右手定则确定。',
        ],
        solution: '\\(F=0.24\\,\\mathrm{N}\\)。',
        solutionLatex: 'F=0.24\\,\\mathrm{N}',
      },
      {
        title: '例 3 · 平行运动',
        prompt: '质子沿磁场方向运动，受磁力多大？',
        steps: [
          '\\(\\mathbf v\\parallel\\mathbf B\\)，夹角 \\(\\theta=0\\) 或 \\(180^\\circ\\)。',
          '\\(\\sin\\theta=0\\)，故 \\(F=0\\)。',
        ],
        solution: '磁力为零，质子做匀速直线运动。',
      },
    ],
    examTips: [
      'CED Unit 12：磁场与磁力',
      '右手定则先判断正电荷，负电荷再反向',
      '磁力不做功，因此不能改变电荷速率，只能改变方向',
      '区分 \\(\\mathbf B\\) 的方向、\\(\\mathbf v\\) 的方向与力 \\(\\mathbf F\\) 的方向',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u8', code: '8.2', title: '电场', relation: '对比' },
      { subject: 'em', chapterId: 'em-u12', code: '12.2', title: '运动电荷与磁场', relation: '后续' },
      { subject: 'em', chapterId: 'em-u12', code: '12.3', title: '毕奥–萨伐尔定律', relation: '后续' },
      { subject: 'em', chapterId: 'em-u12', code: '12.4', title: '安培定律', relation: '后续' },
      { subject: 'em', chapterId: 'em-u12', code: '12.5', title: '磁偶极与磁性材料', relation: '后续' },
      { subject: 'em', chapterId: 'em-u12', code: '12.6', title: '磁导率与材料响应', relation: '后续' },
    ],
    development: ['磁场与磁感线', '洛伦兹力与右手定则', '电流受力', '圆周运动与回旋半径', '进入毕奥–萨伐尔与安培定律'],
    checks: ['静止电荷在磁场中受力吗？', '磁场力为什么不做功？', '电子与质子在相同磁场中受力方向相同吗？'],
    summary: '磁场用 \\(\\mathbf B\\) 描述，对运动电荷施力 \\(\\mathbf F=q\\mathbf v\\times\\mathbf B\\)；磁力垂直于速度，不做功。',
  },

  'em/em-u8/8.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用电场定义计算场强与受力。',
      '能计算点电荷场并应用矢量叠加。',
      '能解释场线、导体静电平衡与单位等价。'
    ],
    essentialKnowledge: [
      '电场定义为单位正试探电荷所受的力：\\(\\mathbf E=\\dfrac{\\mathbf F}{q_0}\\)。',
      '点电荷场 \\(E=k\\dfrac{|q|}{r^{2}}\\)，方向沿径向：正电荷向外、负电荷向内。',
      '电场是矢量，叠加用矢量和；场线不相交，密度大处场强大。',
      '电场强度与试探电荷无关；导体内部静电平衡时 \\(\\mathbf E=0\\)。',
      '\\(\\mathrm{N\\,C^{-1}}\\) 与 \\(\\mathrm{V\\,m^{-1}}\\) 是等价的场强单位。'
    ],
    definition: '电场是电荷周围空间的矢量场，定义为单位正试探电荷所受的力：\\(\\mathbf E=\\dfrac{\\mathbf F}{q_0}\\)。点电荷场 \\(E=k\\dfrac{|q|}{r^{2}}\\)，方向沿径向，正电荷向外、负电荷向内。场强单位 \\(\\mathrm{N\\,C^{-1}}=\\mathrm{V\\,m^{-1}}\\)。',
    intuition: '电场是“力的地图”：把试探电荷放到某点，它受到的力除以电荷量，就是该点的场强。',
    intuitionDetailed: '电场由源电荷产生，与试探电荷无关；多个源电荷的场按矢量叠加。电场线从正电荷出发、到负电荷终止，线的密度表示强弱，切线表示方向；电场线不相交。',
    formulas: [
      { latex: '\\mathbf E=\\dfrac{\\mathbf F}{q_0}', note: '电场定义。' },
      { latex: 'E=k\\dfrac{|q|}{r^{2}}=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}', note: '点电荷场强。' },
      { latex: '\\mathbf E_{\\mathrm{total}}=\\sum\\mathbf E_i', note: '场强叠加原理。' },
      { latex: '\\mathbf F=q\\mathbf E', note: '电荷在电场中受力。' },
    ],
    derivationNotes: [
      { from: '库仑定律', to: '点电荷场强', note: '把 \\(F=k\\dfrac{|q||q_0|}{r^{2}}\\) 除以 \\(|q_0|\\)。' },
      { from: '电场定义', to: '叠加原理', note: '力是矢量，逐个源电荷求场后矢量相加。' },
      { from: '电场线', to: '场强方向', note: '电场线切线方向即 \\(\\mathbf E\\) 方向，密度表示大小。' },
    ],
    conditions: ['试探电荷足够小，不扰动源电荷分布', '点电荷公式要求电荷尺度远小于距离 \\(r\\)', '叠加原理在线性介质中成立', '电场方向定义为正电荷受力方向'],
    keyPoints: ['电场是矢量，方向为正电荷受力方向', '电场强度与试探电荷无关', '场线不相交；密度大处场强大', '导体内部静电平衡时 \\(\\mathbf E=0\\)', '\\(\\mathrm{N\\,C^{-1}}\\) 与 \\(\\mathrm{V\\,m^{-1}}\\) 等价'],
    misconceptions: [
      '认为电场方向是负电荷受力方向',
      '认为电场强度与试探电荷电量有关',
      '把电场与电场力混为一谈',
      '认为电场线就是电荷的运动轨迹',
      '认为场强为零处电势一定为零（或反之）',
    ],
    examples: [
      {
        title: '例 1 · 点电荷场强',
        prompt: '点电荷 \\(q=2.0\\,\\mu\\mathrm{C}\\)，求距其 \\(0.30\\,\\mathrm{m}\\) 处的场强。',
        steps: [
          '\\(E=k\\dfrac{|q|}{r^{2}}=(9.0\\times10^{9})\\dfrac{2.0\\times10^{-6}}{(0.30)^{2}}\\)。',
          '\\(E=2.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)，方向背离正电荷。',
        ],
        solution: '\\(E=2.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}\\)。',
        solutionLatex: 'E=2.0\\times10^{5}\\,\\mathrm{N\\,C^{-1}}',
      },
      {
        title: '例 2 · 等量同号电荷',
        prompt: '两个等量正电荷相距 \\(2a\\)，求连线中点处的电场。',
        steps: [
          '每个电荷在中点产生的场大小相等，方向相反。',
          '矢量和为零：\\(\\mathbf E=0\\)。',
          '但电势不为零（两个正电势相加）。',
        ],
        solution: '\\(E=0\\)，电势不为零。',
      },
      {
        title: '例 3 · 电子加速',
        prompt: '电子置于 \\(E=1.0\\times10^{4}\\,\\mathrm{N\\,C^{-1}}\\) 的匀强电场中。求电场力与加速度。',
        steps: [
          '\\(F=eE=(1.6\\times10^{-19})(1.0\\times10^{4})=1.6\\times10^{-15}\\,\\mathrm{N}\\)。',
          '方向与电场相反（电子带负电）。',
          '\\(a=\\dfrac{F}{m_e}=\\dfrac{1.6\\times10^{-15}}{9.11\\times10^{-31}}\\approx1.8\\times10^{15}\\,\\mathrm{m\\,s^{-2}}\\)。',
        ],
        solution: '\\(F=1.6\\times10^{-15}\\,\\mathrm{N}\\)，\\(a\\approx1.8\\times10^{15}\\,\\mathrm{m\\,s^{-2}}\\)。',
        solutionLatex: 'F=1.6\\times10^{-15}\\,\\mathrm{N},\\;a\\approx1.8\\times10^{15}\\,\\mathrm{m\\,s^{-2}}',
      },
    ],
    examTips: [
      'CED Unit 8：电荷与电场',
      '先判方向再算大小；负电荷受力与电场反向',
      '多个电荷叠加时先分解再合成',
      '电场线图题：看方向、疏密、是否相交',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u8', code: '8.1', title: '电荷与力', relation: '先修' },
      { subject: 'em', chapterId: 'em-u8', code: '8.3', title: '电场叠加', relation: '后续' },
      { subject: 'em', chapterId: 'em-u8', code: '8.4', title: '电通量', relation: '后续' },
      { subject: 'em', chapterId: 'em-u9', code: '9.2', title: '电势', relation: '相关' },
    ],
    development: ['电场定义', '点电荷场强', '场强叠加', '电场线与导体平衡', '进入电通量与高斯定律'],
    checks: ['电场方向由正电荷还是负电荷受力定义？', '电场强度与试探电荷有关吗？', '场强为零处电势一定为零吗？'],
    summary: '电场是单位正电荷所受的力，点电荷场按平方反比分布，多个场按矢量叠加。',
  },

  'em/em-u9/9.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算点电荷电势与电势差。',
      '能说明电势是标量并应用代数叠加。',
      '能由电势梯度求电场或由电场求电势差。'
    ],
    essentialKnowledge: [
      '电势是单位电荷的电势能：\\(V=\\dfrac{U}{q}\\)，是标量。',
      '点电荷电势 \\(V=k\\dfrac{q}{r}\\)，通常取无穷远为零；叠加用代数和。',
      '正电荷沿电场方向电势降低；等势面上移动电荷电场力不做功。',
      '电场是电势的负梯度：\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)。',
      '电势差与路径无关，只与始末位置有关；零势点可任选。'
    ],
    definition: '电势是单位电荷的电势能：\\(V=\\dfrac{U}{q}\\)，也可由 \\(V=-\\int_{\\infty}^{r}\\mathbf E\\cdot\\mathrm{d}\\mathbf r\\) 定义（取无穷远为零）。点电荷电势 \\(V=k\\dfrac{q}{r}\\)，是标量，可代数相加。单位伏特 \\(\\mathrm{V}=\\mathrm{J\\,C^{-1}}\\)。',
    intuition: '电势像“高度”：正电荷自然从高电势滑向低电势，负电荷相反；真正可测量的是两点间的电势差。',
    intuitionDetailed: '电势是标量，叠加时直接带符号相加，比电场矢量叠加简单。电场指向电势降低最快的方向，等势面与电场线垂直；沿等势面移动电荷不做功。',
    formulas: [
      { latex: 'V=\\dfrac{U}{q}', note: '电势定义。' },
      { latex: 'V=k\\dfrac{q}{r}', note: '点电荷电势（无穷远为零）。' },
      { latex: 'V_{\\mathrm{total}}=\\sum V_i', note: '标量叠加。' },
      { latex: 'E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}', note: '电场是电势的负梯度（一维）。' },
    ],
    derivationNotes: [
      { from: '电势能定义', to: '电势', note: '把 \\(U\\) 除以电荷 \\(q\\)，消去对试探电荷的依赖。' },
      { from: '点电荷电势能', to: '点电荷电势', note: '\\(U=k\\dfrac{q_1q_2}{r}\\) 除以 \\(q_2\\) 得 \\(V=k\\dfrac{q_1}{r}\\)。' },
      { from: '电场做功', to: '电势差', note: '\\(W_{\\mathrm{field}}=-\\Delta U=-q\\Delta V\\)。' },
    ],
    conditions: ['零势点可任选；点电荷通常取无穷远为零', '电势是标量，叠加不带方向', '电场与电势的梯度关系要求静电场（无旋场）', '电势差与路径无关，只与始末位置有关'],
    keyPoints: ['电势是标量，电势能是电荷乘电势', '正电荷沿电场方向电势降低', '等势面上移动电荷电场力不做功', '导体静电平衡时整体等势', '\\(1\\,\\mathrm{V\\,m^{-1}}=1\\,\\mathrm{N\\,C^{-1}}\\)'],
    misconceptions: [
      '把电势与电势能混淆（后者依赖电荷）',
      '认为电势是矢量，需要分解',
      '认为电势为零处电场也为零（如偶极子中点）',
      '认为负电荷在高电势处电势能高（实际低）',
      '忘记零势点的选择，导致电势绝对值无意义',
    ],
    examples: [
      {
        title: '例 1 · 点电荷电势',
        prompt: '点电荷 \\(q=+3.0\\,\\mu\\mathrm{C}\\)，求距其 \\(0.50\\,\\mathrm{m}\\) 处的电势。',
        steps: [
          '\\(V=k\\dfrac{q}{r}=(9.0\\times10^{9})\\dfrac{3.0\\times10^{-6}}{0.50}\\)。',
          '\\(V=5.4\\times10^{4}\\,\\mathrm{V}\\)。',
        ],
        solution: '\\(V=5.4\\times10^{4}\\,\\mathrm{V}\\)。',
        solutionLatex: 'V=5.4\\times10^{4}\\,\\mathrm{V}',
      },
      {
        title: '例 2 · 偶极子中点',
        prompt: '两个等量异号电荷 \\(+q\\) 与 \\(-q\\) 相距 \\(2a\\)。求连线中点的电势与电场。',
        steps: [
          '电势是标量：\\(V=k\\dfrac{q}{a}+k\\dfrac{-q}{a}=0\\)。',
          '电场是矢量：两个场方向相同（都指向负电荷），\\(E=2k\\dfrac{q}{a^{2}}\\ne0\\)。',
        ],
        solution: '\\(V=0\\)，但 \\(E\\ne0\\)。',
      },
      {
        title: '例 3 · 电势差做功',
        prompt: '电子从电势 \\(0\\,\\mathrm{V}\\) 处移动到 \\(+100\\,\\mathrm{V}\\) 处。求电势能变化与动能变化。',
        steps: [
          '\\(\\Delta U=q\\Delta V=(-1.6\\times10^{-19})(100)=-1.6\\times10^{-17}\\,\\mathrm{J}\\)。',
          '电场力做正功，电势能减少，动能增加 \\(1.6\\times10^{-17}\\,\\mathrm{J}=100\\,\\mathrm{eV}\\)。',
        ],
        solution: '\\(\\Delta U=-1.6\\times10^{-17}\\,\\mathrm{J}\\)，动能增加 \\(100\\,\\mathrm{eV}\\)。',
        solutionLatex: '\\Delta U=-1.6\\times10^{-17}\\,\\mathrm{J}',
      },
    ],
    examTips: [
      'CED Unit 9：电势',
      '先选定零势点，再谈电势的数值',
      '电势是标量，直接代数相加；电场才是矢量',
      '电势差与功：\\(W=q\\Delta V\\)，注意电荷的符号',
      '等势面与电场线垂直，沿等势面移动不做功',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u9', code: '9.1', title: '电势能', relation: '先修' },
      { subject: 'em', chapterId: 'em-u9', code: '9.3', title: '电势与场', relation: '后续' },
      { subject: 'em', chapterId: 'em-u9', code: '9.4', title: '电势差与功', relation: '后续' },
      { subject: 'em', chapterId: 'em-u8', code: '8.2', title: '电场', relation: '相关' },
    ],
    development: ['电势定义', '点电荷电势', '标量叠加', '等势面与电场', '电势差与功'],
    checks: ['电势为零的地方电场一定为零吗？', '负电荷从低电势移到高电势，电势能如何变？', '为什么电势可以标量相加？'],
    summary: '电势是单位电荷的电势能，点电荷电势 \\(V=k\\dfrac{q}{r}\\)，标量叠加；电场指向电势降低最快的方向。',
  },



  'em/em-u10/10.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明电介质极化与束缚电荷的产生。',
      '能计算介质中的场强、电容与储能。',
      '能分析接电源与断电源两种情形的变化。'
    ],
    essentialKnowledge: [
      '电介质是绝缘体，外电场使其分子极化并产生束缚电荷。',
      '线性均匀介质内部 \\(E=\\dfrac{E_0}{\\kappa}\\)，电容 \\(C=\\kappa C_0\\)。',
      '断开电源时 \\(Q\\) 不变、\\(V\\) 减小；接电源时 \\(V\\) 不变、\\(Q\\) 增大。',
      '电容储能 \\(U=\\dfrac12CV^{2}=\\dfrac{Q^{2}}{2C}\\)；介质中能量密度 \\(u=\\dfrac12\\kappa\\varepsilon_0E^{2}\\)。',
      '介质强度限制最大场强；超过击穿场强会发生放电。'
    ],
    definition: '电介质是绝缘体，外电场使其分子极化，产生束缚电荷。以自由电荷产生的场 \\(E_0\\) 为基准，线性均匀介质内部场强 \\(E=\\dfrac{E_0}{\\kappa}\\)，电容 \\(C=\\kappa C_0\\)，其中 \\(\\kappa\\) 为相对介电常数（\\(\\kappa\\ge1\\)）。',
    intuition: '介质像一群被电场拉偏的小偶极子，它们的反向场抵消了一部分外场，所以介质内部电场变弱。',
    intuitionDetailed: '插入介质后有两种典型情形：若电容器与电源断开（\\(Q\\) 不变），电压降为 \\(\\dfrac{V_0}{\\kappa}\\)，电容增大，储能 \\(U=\\dfrac{Q^{2}}{2C}\\) 减小；若始终接电源（\\(V\\) 不变），电荷增为 \\(\\kappa Q_0\\)，电容增大，储能 \\(U=\\dfrac12CV^{2}\\) 增大。',
    formulas: [
      { latex: 'E=\\dfrac{E_0}{\\kappa}', note: '介质内部场强。' },
      { latex: 'C=\\kappa C_0=\\dfrac{\\kappa\\varepsilon_0A}{d}', note: '平行板电容器填满介质。' },
      { latex: 'U=\\dfrac12CV^{2}=\\dfrac{Q^{2}}{2C}', note: '电容储能。' },
      { latex: 'u=\\dfrac12\\kappa\\varepsilon_0E^{2}', note: '介质中的电场能量密度。' },
    ],
    derivationNotes: [
      { from: '极化机制', to: '场强削弱', note: '束缚电荷产生的反向场叠加到外场上，使净场减小。' },
      { from: '电容定义', to: '介质电容', note: '\\(C=\\dfrac{Q}{V}\\)；\\(Q\\) 不变时 \\(V\\) 降为原来的 \\(\\dfrac{1}{\\kappa}\\)，故 \\(C\\) 增为 \\(\\kappa\\) 倍。' },
      { from: '能量密度', to: '总能量', note: '对体积积分 \\(\\dfrac12\\kappa\\varepsilon_0E^{2}\\)。' },
    ],
    conditions: ['线性、均匀、各向同性介质', '介质未击穿；\\(\\kappa\\) 与温度、频率有关', '电池连接与否决定 \\(Q\\) 或 \\(V\\) 不变', '接电源时 \\(E\\) 由 \\(\\dfrac{V}{d}\\) 决定，\\(\\kappa\\) 增大主要体现为自由电荷与电容增大', '若介质只部分填充电容器，需按串联与并联模型处理'],
    keyPoints: ['介质削弱 \\(E\\)，增大 \\(C\\)', '\\(\\kappa\\) 无量纲，真空 \\(\\kappa=1\\)', '断开电源时 \\(Q\\) 不变、\\(V\\) 减小；接电源时 \\(V\\) 不变、\\(Q\\) 增大', '介质中能量密度为 \\(\\dfrac12\\kappa\\varepsilon_0E^{2}\\)', '介质强度限制最大场强，超过会击穿'],
    misconceptions: [
      '认为介质会增强电场',
      '认为插入介质总是使储能增加（取决于是否接电源）',
      '把 \\(\\kappa\\) 与击穿场强混淆',
      '认为介质中有自由电荷（实际是束缚电荷极化）',
      '在部分填充时直接把电容乘以 \\(\\kappa\\)',
    ],
    examples: [
      {
        title: '例 1 · 电容增大',
        prompt: '平行板电容器原来 \\(C_0=2.0\\,\\mu\\mathrm{F}\\)，填满 \\(\\kappa=3.0\\) 的介质。求新电容。',
        steps: [
          '\\(C=\\kappa C_0\\)。',
          '\\(C=3.0(2.0\\,\\mu\\mathrm{F})=6.0\\,\\mu\\mathrm{F}\\)。',
        ],
        solution: '\\(C=6.0\\,\\mu\\mathrm{F}\\)。',
        solutionLatex: 'C=6.0\\,\\mu\\mathrm{F}',
      },
      {
        title: '例 2 · 断开电源',
        prompt: '电容器充电到 \\(12\\,\\mathrm{V}\\) 后断开电源，再插入 \\(\\kappa=2.0\\) 的介质。求电压与储能变化。',
        steps: [
          '\\(Q\\) 不变，\\(V=\\dfrac{Q}{C}=\\dfrac{V_0}{\\kappa}=\\dfrac{12}{2.0}=6.0\\,\\mathrm{V}\\)。',
          '\\(U=\\dfrac{Q^{2}}{2C}\\)，\\(C\\) 变为 \\(2\\) 倍，故储能变为原来的一半。',
        ],
        solution: '\\(V=6.0\\,\\mathrm{V}\\)，储能减半。',
        solutionLatex: 'V=6.0\\,\\mathrm{V}',
      },
      {
        title: '例 3 · 接电源',
        prompt: '电容 \\(C_0=2.0\\,\\mu\\mathrm{F}\\) 始终接在 \\(12\\,\\mathrm{V}\\) 电源上，插入 \\(\\kappa=2.0\\) 的介质。求电荷与储能。',
        steps: [
          '\\(C=\\kappa C_0=4.0\\,\\mu\\mathrm{F}\\)。',
          '\\(Q=CV=(4.0\\times10^{-6})(12)=4.8\\times10^{-5}\\,\\mathrm{C}\\)。',
          '\\(U=\\dfrac12CV^{2}=\\dfrac12(4.0\\times10^{-6})(144)=2.9\\times10^{-4}\\,\\mathrm{J}\\)。',
        ],
        solution: '\\(Q=48\\,\\mu\\mathrm{C}\\)，\\(U\\approx2.9\\times10^{-4}\\,\\mathrm{J}\\)。',
        solutionLatex: 'Q=4.8\\times10^{-5}\\,\\mathrm{C},\\;U\\approx2.9\\times10^{-4}\\,\\mathrm{J}',
      },
    ],
    examTips: [
      'CED Unit 10：导体、电容器与电介质',
      '先判断“断开电源”还是“接电源”，再决定 \\(Q\\) 或 \\(V\\) 不变',
      '介质使 \\(C\\) 增大、\\(E\\) 减小；能量变化要看具体情形',
      '注意介质击穿条件 \\(E>E_{\\mathrm{breakdown}}\\)',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u10', code: '10.3', title: '电容器', relation: '先修' },
      { subject: 'em', chapterId: 'em-u9', code: '9.2', title: '电势', relation: '相关' },
      { subject: 'em', chapterId: 'em-u8', code: '8.2', title: '电场', relation: '相关' },
    ],
    development: ['极化与束缚电荷', '介质中的场强', '电容与介电常数', '能量变化', '击穿与部分填充'],
    checks: ['介质为什么使电场减弱？', '断开电源插入介质，储能如何变？', '接电源插入介质，电荷如何变？'],
    summary: '电介质极化削弱内部电场，使电容增大为 \\(\\kappa C_0\\)；能量变化取决于 \\(Q\\) 还是 \\(V\\) 不变。',
  },

  'em/em-u11/11.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算纯电阻元件的电功率。',
      '能区分串联与并联的功率分配。',
      '能区分额定功率、实际功率与电能。'
    ],
    essentialKnowledge: [
      '电功率是电能转化速率：\\(P=IV\\)。',
      '纯电阻元件 \\(P=I^{2}R=\\dfrac{V^{2}}{R}\\)；非纯电阻不能用 \\(\\dfrac{V^{2}}{R}\\) 求总功率。',
      '串联时 \\(I\\) 相同，\\(P=I^{2}R\\) 大电阻功率大；并联时 \\(V\\) 相同，小电阻功率大。',
      '电池内部消耗 \\(P_r=I^{2}r\\)；电能表测能量，不测功率。',
      '\\(1\\,\\mathrm{kW\\,h}=3.6\\times10^{6}\\,\\mathrm{J}\\) 是能量单位。'
    ],
    definition: '电功率是电能转化为其他形式能量的速率。对元件 \\(P=IV\\)；对纯电阻 \\(P=I^{2}R=\\dfrac{V^{2}}{R}\\)。单位瓦特 \\(\\mathrm{W}=\\mathrm{J\\,s^{-1}}\\)。电能 \\(E=\\int P\\,\\mathrm{d}t\\)，常用千瓦时 \\(\\mathrm{kW\\,h}\\)。',
    intuition: '电压是“每库仑电荷的能量”，电流是“每秒流过多少库仑”，两者相乘就是每秒转化的能量。',
    intuitionDetailed: '电阻中电能不可逆地转化为内能；电动机把大部分电能转化为机械能，电池把化学能转化为电能。效率 \\(\\eta=\\dfrac{P_{\\mathrm{useful}}}{P_{\\mathrm{in}}}\\)，实际器件总有损耗。',
    formulas: [
      { latex: 'P=IV', note: '电功率的一般式。' },
      { latex: 'P=I^{2}R=\\dfrac{V^{2}}{R}', note: '纯电阻元件的等价式。' },
      { latex: 'E=Pt', note: '恒定功率下的电能。' },
      { latex: '1\\,\\mathrm{kW\\,h}=3.6\\times10^{6}\\,\\mathrm{J}', note: '常用电能单位。' },
    ],
    derivationNotes: [
      { from: '电压与电流定义', to: '电功率', note: '单位时间通过的电荷 \\(I\\) 乘以每单位电荷的能量 \\(V\\)，得 \\(P=IV\\)。' },
      { from: '欧姆定律', to: '纯电阻功率', note: '把 \\(V=IR\\) 代入 \\(P=IV\\) 得 \\(P=I^{2}R\\)，或把 \\(I=\\dfrac{V}{R}\\) 代入得 \\(P=\\dfrac{V^{2}}{R}\\)。' },
      { from: '能量守恒', to: '效率', note: '有用输出功率小于总输入功率，差额为热损耗。' },
    ],
    conditions: ['\\(P=I^{2}R=\\dfrac{V^{2}}{R}\\) 只适用于纯电阻', '电动机等非纯电阻元件不能用 \\(\\dfrac{V^{2}}{R}\\) 求总功率；要区分输入功率、有用输出与损耗', '额定功率在额定电压下成立，实际功率随电压变化', '交流电路需区分瞬时功率与平均功率'],
    keyPoints: ['串联时 \\(I\\) 相同，\\(P=I^{2}R\\) 大电阻功率大', '并联时 \\(V\\) 相同，\\(P=\\dfrac{V^{2}}{R}\\) 小电阻功率大', '电池内部消耗 \\(P_r=I^{2}r\\)', '电能表测能量，不测功率', '\\(1\\,\\mathrm{kW\\,h}\\) 是能量单位，不是功率单位'],
    misconceptions: [
      '认为大电阻功率一定大（取决于串联还是并联）',
      '对电动机用 \\(\\dfrac{V^{2}}{R}\\) 计算（不适用）',
      '把 \\(\\mathrm{kW}\\) 与 \\(\\mathrm{kW\\,h}\\) 混淆',
      '认为额定功率一定等于实际功率',
      '忽略电池内阻消耗的功率',
    ],
    examples: [
      {
        title: '例 1 · 灯泡',
        prompt: '额定 \\(60\\,\\mathrm{W}\\) 的灯泡接在 \\(120\\,\\mathrm{V}\\) 电源上。求电流与电阻。',
        steps: [
          '\\(I=\\dfrac{P}{V}=\\dfrac{60}{120}=0.50\\,\\mathrm{A}\\)。',
          '\\(R=\\dfrac{V^{2}}{P}=\\dfrac{(120)^{2}}{60}=240\\,\\Omega\\)。',
        ],
        solution: '\\(I=0.50\\,\\mathrm{A}\\)，\\(R=240\\,\\Omega\\)。',
        solutionLatex: 'I=0.50\\,\\mathrm{A},\\;R=240\\,\\Omega',
      },
      {
        title: '例 2 · 电阻功率',
        prompt: '\\(10\\,\\Omega\\) 电阻通过 \\(2.0\\,\\mathrm{A}\\) 电流。求功率。',
        steps: [
          '\\(P=I^{2}R=(2.0)^{2}(10)=40\\,\\mathrm{W}\\)。',
          '也可先求 \\(V=IR=20\\,\\mathrm{V}\\)，再算 \\(P=VI=40\\,\\mathrm{W}\\)。',
        ],
        solution: '\\(P=40\\,\\mathrm{W}\\)。',
        solutionLatex: 'P=40\\,\\mathrm{W}',
      },
      {
        title: '例 3 · 含内阻的电池',
        prompt: '电池 \\(\\varepsilon=12\\,\\mathrm{V}\\)，内阻 \\(r=0.50\\,\\Omega\\)，外接 \\(R=5.5\\,\\Omega\\)。求外电阻功率、内阻损耗与效率。',
        steps: [
          '\\(I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{12}{6.0}=2.0\\,\\mathrm{A}\\)。',
          '\\(P_R=I^{2}R=(2.0)^{2}(5.5)=22\\,\\mathrm{W}\\)；\\(P_r=I^{2}r=(2.0)^{2}(0.50)=2.0\\,\\mathrm{W}\\)。',
          '\\(\\eta=\\dfrac{P_R}{P_R+P_r}=\\dfrac{22}{24}\\approx0.917\\)。',
        ],
        solution: '\\(P_R=22\\,\\mathrm{W}\\)，\\(P_r=2.0\\,\\mathrm{W}\\)，效率约 \\(92\\%\\)。',
        solutionLatex: 'P_R=22\\,\\mathrm{W},\\;\\eta\\approx0.92',
      },
    ],
    examTips: [
      'CED Unit 11：电路与电功率',
      '先判断串联还是并联，再选择 \\(I^{2}R\\) 或 \\(\\dfrac{V^{2}}{R}\\)',
      '纯电阻三式通用；电动机等非纯电阻元件要区分输入、输出与损耗',
      '含内阻时先求电流，再分别算外电路与内阻功率',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u11', code: '11.1', title: '电流', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.2', title: '简单电路', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.3', title: '电阻与欧姆定律', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.8', title: 'RC 电路', relation: '相关' },
    ],
    development: ['电功率定义', '纯电阻三式', '串并联功率分配', '内阻与效率', '电能与电费计算'],
    checks: ['串联电路中哪个电阻功率大？', '电动机能用 \\(\\dfrac{V^{2}}{R}\\) 吗？', '\\(1\\,\\mathrm{kW\\,h}\\) 等于多少焦耳？'],
    summary: '电功率 \\(P=IV\\)，纯电阻可用 \\(I^{2}R\\) 或 \\(\\dfrac{V^{2}}{R}\\)；串并联的功率分配不同，含内阻时要注意效率。',
  },

  'em/em-u13/13.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算匀强场中平面的磁通量。',
      '能判断磁通量变化对感应电动势的影响。',
      '能解释闭合曲面净磁通为零。'
    ],
    essentialKnowledge: [
      '磁通量 \\(\\Phi_B=\\int\\mathbf B\\cdot\\mathrm{d}\\mathbf A\\)；匀强场、平面时 \\(\\Phi_B=BA\\cos\\theta\\)。',
      '\\(\\theta\\) 是 \\(\\mathbf B\\) 与面法线的夹角，不是与面的夹角。',
      '单位韦伯：\\(1\\,\\mathrm{Wb}=1\\,\\mathrm{T\\,m^{2}}\\)。',
      '改变 \\(B\\)、\\(A\\) 或 \\(\\theta\\) 都可改变磁通量；感应电动势取决于变化率。',
      '闭合曲面净磁通为零，因为不存在磁单极子。'
    ],
    definition: '磁通量是磁感应强度穿过曲面的通量：\\(\\Phi_B=\\int\\mathbf B\\cdot\\mathrm{d}\\mathbf A=BA\\cos\\theta\\)（匀强场、平面），其中 \\(\\theta\\) 是 \\(\\mathbf B\\) 与面法线的夹角。单位韦伯 \\(\\mathrm{Wb}=\\mathrm{T\\,m^{2}}\\)。',
    intuition: '磁通量数“穿过面的磁感线根数”：面正对磁场时最大，平行于磁场时为零。',
    intuitionDetailed: '面积矢量的方向可任选一侧，但一旦选定，整个回路的取向要一致。磁通量变化（\\(B\\)、\\(A\\) 或 \\(\\theta\\) 改变）会产生感应电动势；法拉第定律关心的是变化率，而不是通量本身的大小。',
    formulas: [
      { latex: '\\Phi_B=BA\\cos\\theta', note: '匀强磁场、平面面积。' },
      { latex: '\\Phi_B=\\int\\mathbf B\\cdot\\mathrm{d}\\mathbf A', note: '一般定义。' },
      { latex: '1\\,\\mathrm{Wb}=1\\,\\mathrm{T\\,m^{2}}', note: '单位关系。' },
      { latex: '\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}', note: '法拉第定律（预告）。' },
    ],
    derivationNotes: [
      { from: '通量定义', to: '匀强场公式', note: '\\(\\mathbf B\\) 与 \\(\\mathrm{d}\\mathbf A\\) 的夹角固定，积分得 \\(BA\\cos\\theta\\)。' },
      { from: '面积矢量', to: '符号约定', note: '面积矢量与边界回路的绕行方向满足右手定则。' },
      { from: '磁感线闭合', to: '闭合曲面净通量', note: '穿入与穿出的磁感线数目相等，净磁通为零。' },
    ],
    conditions: ['匀强场 + 平面时用 \\(BA\\cos\\theta\\)；一般情形用积分', '闭合曲面的净磁通为零（无磁单极）', '面积矢量方向与回路方向满足右手定则', '磁通量是标量，但有正负，取决于面积矢量取向'],
    keyPoints: ['改变 \\(B\\)、\\(A\\) 或 \\(\\theta\\) 都可改变磁通量', '磁通量大不代表感应电动势大，还要看变化率', '磁感线闭合，穿过闭合曲面的净磁通为零', '磁通量单位韦伯', '\\(\\theta\\) 是 \\(\\mathbf B\\) 与法线的夹角，不是与面的夹角'],
    misconceptions: [
      '认为磁通量大感应电动势就大',
      '认为 \\(B\\) 大磁通量一定大（还要看面积与角度）',
      '把磁通量与磁场强度混淆',
      '认为闭合曲面磁通量等于包围的“磁荷”',
      '把 \\(\\theta\\) 当成 \\(\\mathbf B\\) 与面的夹角（应为法线夹角）',
    ],
    examples: [
      {
        title: '例 1 · 角度',
        prompt: '\\(B=0.50\\,\\mathrm{T}\\)，面积 \\(A=0.20\\,\\mathrm{m^{2}}\\)。求 \\(\\theta=0^\\circ,60^\\circ,90^\\circ\\) 时的磁通量。',
        steps: [
          '\\(\\theta=0^\\circ\\)：\\(\\Phi=BA=(0.50)(0.20)=0.10\\,\\mathrm{Wb}\\)。',
          '\\(\\theta=60^\\circ\\)：\\(\\Phi=0.10\\cos60^\\circ=0.050\\,\\mathrm{Wb}\\)。',
          '\\(\\theta=90^\\circ\\)：\\(\\cos90^\\circ=0\\)，\\(\\Phi=0\\)。',
        ],
        solution: '\\(0.10\\,\\mathrm{Wb}\\)、\\(0.050\\,\\mathrm{Wb}\\)、\\(0\\)。',
        solutionLatex: '\\Phi_B=0.10,\\,0.050,\\,0\\,\\mathrm{Wb}',
      },
      {
        title: '例 2 · 面积变化',
        prompt: '回路面积在 \\(0.20\\,\\mathrm{s}\\) 内由 \\(0.10\\,\\mathrm{m^{2}}\\) 减到 \\(0.040\\,\\mathrm{m^{2}}\\)，磁场 \\(B=0.30\\,\\mathrm{T}\\) 垂直回路。求平均感应电动势。',
        steps: [
          '\\(\\Delta\\Phi=B\\Delta A=0.30(0.040-0.10)=-0.018\\,\\mathrm{Wb}\\)。',
          '\\(\\left|\\varepsilon\\right|=\\dfrac{\\left|\\Delta\\Phi\\right|}{\\Delta t}=\\dfrac{0.018}{0.20}=0.090\\,\\mathrm{V}\\)。',
        ],
        solution: '\\(\\left|\\varepsilon\\right|=0.090\\,\\mathrm{V}\\)。',
        solutionLatex: '\\left|\\varepsilon\\right|=0.090\\,\\mathrm{V}',
      },
      {
        title: '例 3 · 旋转线圈',
        prompt: '线圈在匀强磁场中匀速旋转，磁通量如何变化？感应电动势何时最大？',
        steps: [
          '\\(\\Phi_B=BA\\cos\\theta\\)，\\(\\theta=\\omega t\\)，故 \\(\\Phi_B=BA\\cos\\omega t\\)。',
          '感应电动势 \\(\\varepsilon=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}=BA\\omega\\sin\\omega t\\)。',
          '当 \\(\\Phi_B=0\\)（线圈平面平行于磁场）时，\\(\\left|\\varepsilon\\right|\\) 最大。',
        ],
        solution: '磁通量按余弦变化；电动势在磁通量为零时最大。',
        solutionLatex: '\\varepsilon=BA\\omega\\sin\\omega t',
      },
    ],
    examTips: [
      'CED Unit 13：电磁感应',
      '先定面积矢量方向，再判断磁通量正负',
      '分清 \\(\\Phi_B\\) 与 \\(\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)',
      '旋转线圈用 \\(\\cos\\) 与 \\(\\sin\\) 关系，注意最大值位置',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u12', code: '12.1', title: '磁场', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.2', title: '电磁感应', relation: '后续' },
      { subject: 'em', chapterId: 'em-u8', code: '8.4', title: '电通量', relation: '对比' },
      { subject: 'em', chapterId: 'em-u13', code: '13.4', title: '电感', relation: '相关' },
    ],
    development: ['通量定义', '角度与面积的影响', '闭合曲面净磁通', '磁通量变化率', '进入法拉第定律'],
    checks: ['磁通量大感应电动势一定大吗？', '\\(\\theta\\) 是磁场与什么的夹角？', '穿过闭合曲面的净磁通是多少？'],
    summary: '磁通量 \\(\\Phi_B=BA\\cos\\theta\\) 描述磁场穿过曲面的多少；其变化率决定感应电动势。',
  },

  'em/em-u8/8.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算匀强场中平面的电通量。',
      '能应用高斯定律求对称电荷分布的电场。',
      '能解释闭合曲面净通量与内部电荷的关系。'
    ],
    essentialKnowledge: [
      '电通量 \\(\\Phi_E=\\int\\mathbf E\\cdot\\mathrm{d}\\mathbf A\\)；匀强场、平面时 \\(\\Phi_E=EA\\cos\\theta\\)。',
      '对闭合曲面取外法线；净通量只由内部电荷决定：\\(\\Phi_E=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)。',
      '外部电荷对闭合曲面净通量的贡献为零。',
      '电场线从正电荷发出、终止于负电荷。',
      '高斯定律对任意闭合曲面成立；对称性用于求电场。'
    ],
    definition: '电通量是电场穿过曲面的通量：\\(\\Phi_E=\\int\\mathbf E\\cdot\\mathrm{d}\\mathbf A\\)。匀强场中平面 \\(\\Phi_E=EA\\cos\\theta\\)（\\(\\theta\\) 为 \\(\\mathbf E\\) 与面法线的夹角），单位 \\(\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。对闭合曲面，面积矢量取外法线。',
    intuition: '电通量数“穿出曲面的电场线净根数”：穿出为正，穿入为负。',
    intuitionDetailed: '闭合曲面的净电通量只由内部净电荷决定：\\(\\Phi_E=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}\\)（高斯定律）。曲面形状和外部电荷都不影响净通量；但外部电荷会影响曲面上各点的局部场强。',
    formulas: [
      { latex: '\\Phi_E=\\int\\mathbf E\\cdot\\mathrm{d}\\mathbf A', note: '电通量定义。' },
      { latex: '\\Phi_E=EA\\cos\\theta', note: '匀强场、平面。' },
      { latex: '\\Phi_E=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}', note: '高斯定律（闭合曲面）。' },
      { latex: '\\varepsilon_0=8.85\\times10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}', note: '真空介电常数。' },
    ],
    derivationNotes: [
      { from: '通量定义', to: '匀强场公式', note: '\\(\\mathbf E\\) 与 \\(\\mathrm{d}\\mathbf A\\) 夹角固定，积分得 \\(EA\\cos\\theta\\)。' },
      { from: '库仑定律 + 立体角', to: '高斯定律', note: '点电荷的场线均匀分布在球面上，通量与半径无关，只与包围电荷成正比。' },
      { from: '叠加原理', to: '外部电荷净贡献为零', note: '外部电荷的场线穿入又穿出闭合曲面，净通量为零。' },
    ],
    conditions: ['闭合曲面取外法线方向', '高斯定律对任意闭合曲面成立；对称性用于求 \\(E\\)', '电通量是标量，可正可负', '真空或线性介质中 \\(\\varepsilon_0\\) 换成 \\(\\varepsilon\\)'],
    keyPoints: ['通量看“穿过”，与面的大小、倾角有关', '闭合曲面净通量只由内部电荷决定', '外部电荷对净通量贡献为零', '电场线从正电荷发出、终止于负电荷', '高斯定律是麦克斯韦方程组之一'],
    misconceptions: [
      '认为闭合曲面通量与外电荷有关',
      '认为 \\(E=0\\) 时通量一定为零（可能净通量为零但局部不为零）',
      '把电通量与电场强度混淆',
      '忘记外法线方向导致符号错误',
      '认为高斯定律只能用于球对称问题（它普遍成立，只是求 \\(E\\) 时常用对称性）',
    ],
    examples: [
      {
        title: '例 1 · 平面通量',
        prompt: '\\(E=200\\,\\mathrm{N\\,C^{-1}}\\)，面积 \\(A=0.50\\,\\mathrm{m^{2}}\\)。求面法线与电场成 \\(0^\\circ\\) 和 \\(60^\\circ\\) 时的电通量。',
        steps: [
          '垂直时 \\(\\theta=0\\)：\\(\\Phi_E=EA=200(0.50)=100\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。',
          '成 \\(60^\\circ\\) 时 \\(\\Phi_E=100\\cos60^\\circ=50\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。',
        ],
        solution: '\\(100\\) 与 \\(50\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。',
        solutionLatex: '\\Phi_E=100,\\,50\\,\\mathrm{N\\,m^{2}\\,C^{-1}}',
      },
      {
        title: '例 2 · 球面通量',
        prompt: '点电荷 \\(q=+2.0\\,\\mu\\mathrm{C}\\) 位于球心，球半径 \\(0.30\\,\\mathrm{m}\\)。求穿过球面的电通量。',
        steps: [
          '由高斯定律：\\(\\Phi_E=\\dfrac{q}{\\varepsilon_0}\\)。',
          '\\(\\Phi_E=\\dfrac{2.0\\times10^{-6}}{8.85\\times10^{-12}}\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。',
          '也可用 \\(E\\cdot4\\pi r^{2}\\) 验证。',
        ],
        solution: '\\(\\Phi_E\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}\\)。',
        solutionLatex: '\\Phi_E\\approx2.3\\times10^{5}\\,\\mathrm{N\\,m^{2}\\,C^{-1}}',
      },
      {
        title: '例 3 · 匀强场中的立方体',
        prompt: '立方体置于匀强电场中，求穿过其表面的净电通量。',
        steps: [
          '电场线从一面穿入、从对面穿出。',
          '穿入为负、穿出为正，大小相等。',
          '净通量为零；立方体内部无净电荷。',
        ],
        solution: '净电通量为零。',
      },
    ],
    examTips: [
      'CED Unit 8：电通量与高斯定律',
      '先定法线方向，再判断正负',
      '闭合曲面用高斯定律；求 \\(E\\) 时优先找对称性',
      '外部电荷对净通量无贡献，但会改变局部场',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u8', code: '8.2', title: '电场', relation: '先修' },
      { subject: 'em', chapterId: 'em-u8', code: '8.5', title: '高斯定律', relation: '后续' },
      { subject: 'em', chapterId: 'em-u8', code: '8.3', title: '电场叠加', relation: '相关' },
      { subject: 'em', chapterId: 'em-u13', code: '13.1', title: '磁通量', relation: '对比' },
    ],
    development: ['通量定义', '平面通量与角度', '闭合曲面与外法线', '高斯定律', '对称性求场'],
    checks: ['闭合曲面的净通量由什么决定？', '外部电荷会影响净通量吗？', '电场为零处电通量一定为零吗？'],
    summary: '电通量描述电场穿过曲面；闭合曲面的净通量只由内部净电荷决定，这就是高斯定律。',
  },


  'em/em-u9/9.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算两点电荷与电荷在电势中的电势能。',
      '能由电场力做功判断电势能变化。',
      '能说明电势能的符号与零势点选择。'
    ],
    essentialKnowledge: [
      '两点电荷 \\(U=k\\dfrac{q_1q_2}{r}\\)，通常取无穷远为零；电荷在电势中 \\(U=qV\\)。',
      '同号电荷 \\(U>0\\)，异号电荷 \\(U<0\\)。',
      '电场力做正功，电势能减少：\\(W_{\\mathrm{field}}=-\\Delta U\\)。',
      '电势能是标量，可代数叠加；它属于电荷与电场的系统。',
      '\\(1\\,\\mathrm{eV}=1.6\\times10^{-19}\\,\\mathrm{J}\\) 是能量单位，不是电压。'
    ],
    definition: '电势能是电荷与电场组成的系统因相对位置而具有的能量。两点电荷 \\(U=k\\dfrac{q_1q_2}{r}\\)（无穷远为零）；电荷 \\(q\\) 在电势 \\(V\\) 处 \\(U=qV\\)。电场力做功 \\(W_{\\mathrm{field}}=-\\Delta U\\)。单位焦耳，微观常用电子伏 \\(\\mathrm{eV}=1.6\\times10^{-19}\\,\\mathrm{J}\\)。',
    intuition: '电势能像重力势能：同号电荷越近越“高”，异号电荷越近越“低”。',
    intuitionDetailed: '外力缓慢移动电荷时 \\(W_{\\mathrm{ext}}=\\Delta U=q\\Delta V\\)；释放后电场力做正功，电势能减少、动能增加。电势能属于电荷与电场组成的系统，不属于单个电荷。',
    formulas: [
      { latex: 'U=k\\dfrac{q_1q_2}{r}', note: '两点电荷电势能（无穷远为零）。' },
      { latex: 'U=qV', note: '电荷在电势中的电势能。' },
      { latex: 'W_{\\mathrm{field}}=-\\Delta U', note: '电场力做功与电势能变化。' },
      { latex: '1\\,\\mathrm{eV}=1.6\\times10^{-19}\\,\\mathrm{J}', note: '电子伏。' },
    ],
    derivationNotes: [
      { from: '库仑定律', to: '两点电荷电势能', note: '把电荷从无穷远缓慢移到距离 \\(r\\)，克服电场力做功 \\(k\\dfrac{q_1q_2}{r}\\)。' },
      { from: '电势定义', to: '电势能', note: '\\(V=\\dfrac{U}{q}\\)，故 \\(U=qV\\)。' },
      { from: '功能关系', to: '电场力做功', note: '电场力做正功时电势能减少，\\(W=-\\Delta U\\)。' },
    ],
    conditions: ['点电荷或球对称分布；\\(r\\) 为球心距离', '零势能点通常取无穷远', '电势能是系统量，符号由电荷正负决定', '非均匀场中 \\(U=qV\\) 仍是逐点成立'],
    keyPoints: ['同号电荷 \\(U>0\\)，异号 \\(U<0\\)', '电场力做正功，电势能减少', '\\(U\\) 是标量，可代数叠加', '\\(\\mathrm{eV}\\) 是能量单位，不是电压', '电势能属于系统，不属于单个电荷'],
    misconceptions: [
      '认为电势能属于单个电荷',
      '认为异号电荷靠近时电势能增大',
      '把电势能与电势混淆',
      '认为电场力做正功电势能增加',
      '把 \\(\\mathrm{eV}\\) 当成电压单位',
    ],
    examples: [
      {
        title: '例 1 · 两质子',
        prompt: '两个质子相距 \\(1.0\\times10^{-15}\\,\\mathrm{m}\\)。求电势能（以 \\(\\mathrm{MeV}\\) 表示）。',
        steps: [
          '\\(U=k\\dfrac{q^{2}}{r}=\\dfrac{(9.0\\times10^{9})(1.6\\times10^{-19})^{2}}{1.0\\times10^{-15}}\\)。',
          '\\(U\\approx2.3\\times10^{-13}\\,\\mathrm{J}\\)。',
          '\\(U=\\dfrac{2.3\\times10^{-13}}{1.6\\times10^{-13}}\\,\\mathrm{MeV}\\approx1.4\\,\\mathrm{MeV}\\)。',
        ],
        solution: '\\(U\\approx2.3\\times10^{-13}\\,\\mathrm{J}\\approx1.4\\,\\mathrm{MeV}\\)。',
        solutionLatex: 'U\\approx2.3\\times10^{-13}\\,\\mathrm{J}\\approx1.4\\,\\mathrm{MeV}',
      },
      {
        title: '例 2 · 电势能变化',
        prompt: '电子从 \\(0\\,\\mathrm{V}\\) 移到 \\(+100\\,\\mathrm{V}\\)。求电势能变化。',
        steps: [
          '\\(\\Delta U=q\\Delta V=(-1.6\\times10^{-19})(100)\\)。',
          '\\(\\Delta U=-1.6\\times10^{-17}\\,\\mathrm{J}\\)。',
          '电势能减少，动能增加 \\(100\\,\\mathrm{eV}\\)。',
        ],
        solution: '\\(\\Delta U=-1.6\\times10^{-17}\\,\\mathrm{J}\\)。',
        solutionLatex: '\\Delta U=-1.6\\times10^{-17}\\,\\mathrm{J}',
      },
      {
        title: '例 3 · 电势能',
        prompt: '把 \\(q=+2.0\\,\\mu\\mathrm{C}\\) 放在电势 \\(V=500\\,\\mathrm{V}\\) 处。求电势能。',
        steps: [
          '\\(U=qV=(2.0\\times10^{-6})(500)\\)。',
          '\\(U=1.0\\times10^{-3}\\,\\mathrm{J}\\)。',
        ],
        solution: '\\(U=1.0\\times10^{-3}\\,\\mathrm{J}\\)。',
        solutionLatex: 'U=1.0\\times10^{-3}\\,\\mathrm{J}',
      },
    ],
    examTips: [
      'CED Unit 9：电势能',
      '先定零势能点，再写 \\(U\\)',
      '符号由电荷正负决定，不要漏掉负号',
      '功能关系 \\(W_{\\mathrm{field}}=-\\Delta U\\) 是解题主线',
      '微观能量用 \\(\\mathrm{eV}\\) 更方便',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u9', code: '9.2', title: '电势', relation: '后续' },
      { subject: 'em', chapterId: 'em-u9', code: '9.4', title: '电势差与功', relation: '相关' },
      { subject: 'em', chapterId: 'em-u8', code: '8.1', title: '电荷与力', relation: '先修' },
      { subject: 'em', chapterId: 'em-u8', code: '8.2', title: '电场', relation: '相关' },
    ],
    development: ['电势能概念', '两点电荷公式', '电势与电势能', '功能关系', '电子伏与微观能量'],
    checks: ['异号电荷靠近时电势能如何变？', '电场力做正功时电势能如何变？', '\\(1\\,\\mathrm{eV}\\) 等于多少焦耳？'],
    summary: '电势能 \\(U=qV\\)，点电荷间 \\(U=k\\dfrac{q_1q_2}{r}\\)；电场力做正功时电势能减少。',
  },

  'em/em-u11/11.8': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出 RC 充放电的电荷与电流函数。',
      '能计算时间常数并判断充放电快慢。',
      '能解释稳态与电容电压连续的意义。'
    ],
    essentialKnowledge: [
      'RC 电路时间常数 \\(\\tau=RC\\)，单位秒。',
      '充电 \\(q(t)=C\\varepsilon\\left(1-e^{-\\frac{t}{\\tau}}\\right)\\)，\\(I(t)=\\dfrac{\\varepsilon}{R}e^{-\\frac{t}{\\tau}}\\)。',
      '放电 \\(q(t)=Q_0e^{-\\frac{t}{\\tau}}\\)，电流随时间指数衰减。',
      '\\(t=\\tau\\) 时充电至 \\(63.2\\%\\)，放电剩 \\(36.8\\%\\)；约 \\(5\\tau\\) 后基本达到稳态。',
      '稳态时电容相当于断路，\\(I=0\\)；电容电压连续，电流可以突变。'
    ],
    definition: 'RC 电路由电阻 \\(R\\) 与电容 \\(C\\) 串联组成。充电时（接恒定电源 \\(\\varepsilon\\)）：\\(q(t)=C\\varepsilon\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right)\\)，\\(I(t)=\\dfrac{\\varepsilon}{R}\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)；放电时 \\(q(t)=Q_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)，\\(I(t)=-\\dfrac{Q_0}{RC}\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\)。时间常数 \\(\\tau=RC\\)。',
    intuition: '电容像水池，电阻像细管：管子越细（\\(R\\) 大）或池越大（\\(C\\) 大），充放越慢。',
    intuitionDetailed: '初始时刻电容电压不能突变：未充电电容相当于短路（电压为零），充满后相当于断路（电流为零）。对充电回路写基尔霍夫环路方程 \\(\\varepsilon-IR-\\dfrac{q}{C}=0\\)，结合 \\(I=\\dfrac{\\mathrm{d}q}{\\mathrm{d}t}\\) 可得指数解。',
    formulas: [
      { latex: '\\tau=RC', note: '时间常数，单位秒。' },
      { latex: 'q_{\\mathrm{charge}}(t)=C\\varepsilon\\left(1-\\exp\\left(-\\dfrac{t}{\\tau}\\right)\\right)', note: '充电电荷。' },
      { latex: 'I_{\\mathrm{charge}}(t)=\\dfrac{\\varepsilon}{R}\\exp\\left(-\\dfrac{t}{\\tau}\\right)', note: '充电电流。' },
      { latex: 'q_{\\mathrm{discharge}}(t)=Q_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)', note: '放电电荷。' },
    ],
    derivationNotes: [
      { from: '基尔霍夫环路方程', to: '一阶微分方程', note: '\\(\\varepsilon-IR-\\dfrac{q}{C}=0\\)，用 \\(I=\\dfrac{\\mathrm{d}q}{\\mathrm{d}t}\\) 得 \\(RC\\,\\dfrac{\\mathrm{d}q}{\\mathrm{d}t}+q=C\\varepsilon\\)。' },
      { from: '微分方程', to: '指数解', note: '分离变量积分，代入初值 \\(q(0)=0\\)。' },
      { from: '时间常数', to: '特征时间', note: '\\(t=\\tau\\) 时充电到 \\(63\\%\\)，放电剩 \\(37\\%\\)。' },
    ],
    conditions: ['恒定 \\(R\\)、\\(C\\)；电源内阻可并入 \\(R\\)', '充电初始 \\(q(0)=0\\)；放电初始 \\(q(0)=Q_0\\)', '时间常数单位秒；\\(t=\\tau\\) 时充电至 \\(63.2\\%\\)', '约 \\(5\\tau\\) 后基本充满或放完'],
    keyPoints: ['电容电压连续，电流可以突变', '\\(t=\\tau\\)：充电 \\(63.2\\%\\)，放电剩 \\(36.8\\%\\)', '约 \\(5\\tau\\) 后达到稳态', '稳态时电容相当于断路，\\(I=0\\)', '时间常数由 \\(R\\) 与 \\(C\\) 的乘积决定', '半衰期 \\(=\\tau\\ln2\\approx0.693\\tau\\)'],
    misconceptions: [
      '认为电容瞬间充满',
      '认为稳态时电容仍有电流',
      '把 \\(\\tau\\) 与半衰期混淆',
      '认为 \\(R\\) 越大充电越快（实际越慢）',
      '忽略初始时刻电容电压为零（相当于短路）',
    ],
    examples: [
      {
        title: '例 1 · 时间常数',
        prompt: '\\(R=10\\,\\mathrm{k\\Omega}\\)，\\(C=100\\,\\mu\\mathrm{F}\\)。求 \\(\\tau\\)，并说明 \\(t=\\tau\\) 时充了多少。',
        steps: [
          '\\(\\tau=RC=(1.0\\times10^{4})(100\\times10^{-6})=1.0\\,\\mathrm{s}\\)。',
          '\\(t=\\tau\\) 时 \\(q=C\\varepsilon(1-e^{-1})\\approx0.632C\\varepsilon\\)，即充到 \\(63.2\\%\\)。',
        ],
        solution: '\\(\\tau=1.0\\,\\mathrm{s}\\)，充到约 \\(63\\%\\)。',
        solutionLatex: '\\tau=1.0\\,\\mathrm{s}',
      },
      {
        title: '例 2 · 充电电流',
        prompt: '\\(R=2.0\\,\\mathrm{k\\Omega}\\)，\\(C=5.0\\,\\mu\\mathrm{F}\\)，\\(\\varepsilon=12\\,\\mathrm{V}\\)。求 \\(\\tau\\)、初始电流与最大电荷。',
        steps: [
          '\\(\\tau=RC=(2.0\\times10^{3})(5.0\\times10^{-6})=1.0\\times10^{-2}\\,\\mathrm{s}\\)。',
          '初始电流 \\(I_0=\\dfrac{\\varepsilon}{R}=\\dfrac{12}{2.0\\times10^{3}}=6.0\\times10^{-3}\\,\\mathrm{A}\\)。',
          '最大电荷 \\(Q_{\\max}=C\\varepsilon=(5.0\\times10^{-6})(12)=6.0\\times10^{-5}\\,\\mathrm{C}\\)。',
        ],
        solution: '\\(\\tau=0.010\\,\\mathrm{s}\\)，\\(I_0=6.0\\,\\mathrm{mA}\\)，\\(Q_{\\max}=60\\,\\mu\\mathrm{C}\\)。',
        solutionLatex: '\\tau=0.010\\,\\mathrm{s},\\;I_0=6.0\\,\\mathrm{mA},\\;Q_{\\max}=60\\,\\mu\\mathrm{C}',
      },
      {
        title: '例 3 · 放电',
        prompt: '\\(Q_0=50\\,\\mu\\mathrm{C}\\)，\\(\\tau=0.20\\,\\mathrm{s}\\)。求 \\(t=0.40\\,\\mathrm{s}\\) 时的电荷。',
        steps: [
          '\\(q=Q_0\\exp\\left(-\\dfrac{t}{\\tau}\\right)=50e^{-2}\\,\\mu\\mathrm{C}\\)。',
          '\\(q=50e^{-2}\\approx6.8\\,\\mu\\mathrm{C}\\)。',
        ],
        solution: '\\(q\\approx6.8\\,\\mu\\mathrm{C}\\)。',
        solutionLatex: 'q\\approx6.8\\,\\mu\\mathrm{C}',
      },
    ],
    examTips: [
      'CED Unit 11：RC 电路',
      '先判断充电还是放电，再选公式',
      '用初末条件检查：\\(t=0\\) 与 \\(t\\to\\infty\\)',
      '\\(\\tau=RC\\)；\\(5\\tau\\) 后可视为稳态',
      '电容电压不能突变，电流可以突变',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u11', code: '11.2', title: '简单电路', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.3', title: '电阻与欧姆定律', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.5', title: '复合直流电路', relation: '相关' },
      { subject: 'em', chapterId: 'em-u10', code: '10.3', title: '电容器', relation: '先修' },
    ],
    development: ['电容与电阻的串联', '基尔霍夫方程', '充电与放电解', '时间常数', '稳态与瞬态'],
    checks: ['\\(t=0\\) 时未充电电容相当于什么？', '\\(t=\\tau\\) 时充电到多少？', '为什么稳态时 RC 电路没有电流？'],
    summary: 'RC 电路按指数规律充放电，时间常数 \\(\\tau=RC\\)；电容电压连续，稳态时相当于断路。',
  },


  'math/calc-u7/7.2': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能由微分方程画出斜率场草图。 · Sketch a slope field from a differential equation.",
      "能利用等斜线判断平衡解与稳定性。 · Use isoclines to identify equilibrium solutions and their stability.",
      "能沿斜率场勾画特解曲线。 · Sketch particular solution curves along a slope field."
    ],
    essentialKnowledge: [
      "斜率场在网格每点画斜率 \\(f(x,y)\\) 的小线段，解曲线处处与线段相切。 · A slope field draws a short segment of slope \\(f(x,y)\\) at each grid point, and solution curves are tangent to the segments everywhere.",
      "线段斜率等于该点的 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)；水平线段处斜率为零。 · The segment slope equals \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) at that point; segments are horizontal where the slope is zero.",
      "解曲线在唯一性成立时不相交；每条解曲线对应一个初始点。 · Solution curves do not intersect when uniqueness holds; each solution curve corresponds to one initial point.",
      "等斜线 \\(f(x,y)=c\\) 上所有点斜率相同，可用于勾画场。 · All points on an isocline \\(f(x,y)=c\\) have the same slope, which helps sketch the field.",
      "线段只表示局部斜率，不是解曲线本身；网格越密草图越准确。 · Segments show only local slopes, not solution curves themselves; a denser grid gives a more accurate sketch."
    ],
    definition: "一阶微分方程 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f(x,y)\\) 的斜率场：在平面网格的每一点 \\((x,y)\\) 画一小段斜率为 \\(f(x,y)\\) 的线段。解曲线在每一点与线段相切；斜率场用图形定性展示所有解的行为。 · For the first-order differential equation \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f(x,y)\\), the slope field draws a short segment of slope \\(f(x,y)\\) at each point \\((x,y)\\) of a grid in the plane. A solution curve is tangent to the segment at every point; the slope field displays the qualitative behavior of all solutions graphically.",
    intuition: "斜率场是“方向地图”：每一点告诉你解曲线该往哪个方向走，沿着小线段走就得到解曲线。 · A slope field is a direction map: each point tells you which way the solution curve should go, and following the short segments traces out a solution curve.",
    intuitionDetailed: "等斜线 \\(f(x,y)=c\\) 上所有线段平行，先画等斜线有助于草图。平衡解满足 \\(f(x,y)=0\\)，其解曲线为水平线；解曲线一般不相交（存在唯一性成立时）。 · On an isocline \\(f(x,y)=c\\), all segments are parallel; sketching isoclines first helps draw the field. Equilibrium solutions satisfy \\(f(x,y)=0\\), and their solution curves are horizontal lines; solution curves generally do not intersect when existence and uniqueness hold.",
    formulas: [
      {
        latex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f(x,y)",
        note: "一阶微分方程。 · First-order differential equation."
      },
      {
        latex: "f(x,y)=c",
        note: "等斜线：斜率相同的点集。 · Isocline: the set of points with the same slope."
      },
      {
        latex: "f(x,y)=0",
        note: "平衡解（水平线段）。 · Equilibrium solutions (horizontal segments)."
      },
      {
        latex: "y_{n+1}=y_n+f(x_n,y_n)\\Delta x",
        note: "欧拉法（预告）。 · Euler’s method (preview)."
      }
    ],
    derivationNotes: [
      {
        from: "导数定义 · Definition of the derivative",
        to: "斜率场 · Slope field",
        note: "把每点的导数值画成短线段，斜率即 \\(f(x,y)\\)。 · Draw the derivative at each point as a short segment whose slope is \\(f(x,y)\\)."
      },
      {
        from: "等斜线 · Isoclines",
        to: "草图 · Sketch",
        note: "先画 \\(f(x,y)=c\\) 的曲线，再在曲线上画平行短线段。 · First draw the curves \\(f(x,y)=c\\), then draw parallel short segments on them."
      },
      {
        from: "斜率场 · Slope field",
        to: "解曲线 · Solution curves",
        note: "从初始点出发，沿线段方向积分即得解曲线。 · Starting from an initial point, integrate along the segment directions to obtain a solution curve."
      }
    ],
    conditions: [
      "\\(f\\) 在区域内连续，通常还满足利普希茨条件以保证唯一性 · \\(f\\) is continuous on the region and usually satisfies a Lipschitz condition to guarantee uniqueness.",
      "斜率场不依赖初始条件；每条解曲线对应一个初始点 · The slope field does not depend on an initial condition; each solution curve corresponds to one initial point.",
      "网格越密，草图越准确 · A denser grid gives a more accurate sketch.",
      "线段只表示局部斜率，不是解曲线本身 · Segments show only local slopes, not the solution curve itself."
    ],
    keyPoints: [
      "线段斜率等于该点的 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Segment slope equals \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) at that point.",
      "解曲线不相交（唯一性成立时） · Solution curves do not intersect when uniqueness holds.",
      "水平线段处 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0\\) · Where segments are horizontal, \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0\\).",
      "\\(|f|\\) 很大时线段接近竖直 · When \\(|f|\\) is large, segments are nearly vertical.",
      "可据场判断长期行为与平衡稳定性 · The field can reveal long-term behavior and equilibrium stability."
    ],
    misconceptions: [
      "把线段当成解曲线本身 · Treating the segments as the solution curves themselves.",
      "认为斜率场给出唯一解（还需要初始条件） · Assuming the slope field determines a unique solution (an initial condition is still needed).",
      "在 \\(f\\) 无定义处仍画斜率 · Drawing slopes where \\(f\\) is undefined.",
      "把 \\(x\\)、\\(y\\) 的自变量与因变量角色弄反 · Swapping the roles of the independent and dependent variables.",
      "认为所有平衡解都稳定 · Assuming every equilibrium solution is stable."
    ],
    examples: [
      {
        title: "例 1 · 斜率为 x · Slope Equal to x",
        prompt: "描述斜率场，并写出通解。 · Describe the slope field and write the general solution.",
        steps: [
          "斜率只依赖 \\(x\\)：\\(x=0\\) 处水平，\\(x>0\\) 处为正，\\(x<0\\) 处为负。 · The slope depends only on \\(x\\): horizontal at \\(x=0\\), positive for \\(x>0\\), and negative for \\(x<0\\).",
          "等斜线是竖直线 \\(x=c\\)。 · The isoclines are vertical lines \\(x=c\\).",
          "积分得 \\(y=\\dfrac{x^{2}}{2}+C\\)。 · Integrating gives \\(y=\\dfrac{x^{2}}{2}+C\\)."
        ],
        solution: "解为开口向上的抛物线族 \\(y=\\dfrac{x^{2}}{2}+C\\)。 · The solutions form the upward-opening parabola family \\(y=\\dfrac{x^{2}}{2}+C\\).",
        solutionLatex: "y=\\dfrac{x^{2}}{2}+C"
      },
      {
        title: "例 2 · 斜率为 y · Slope Equal to y",
        prompt: "描述斜率场与平衡解的稳定性。 · Describe the slope field and the stability of the equilibrium solution.",
        steps: [
          "\\(y=0\\) 处斜率为零，是平衡解。 · The slope is zero at \\(y=0\\), which is an equilibrium solution.",
          "\\(y>0\\) 时斜率为正，解随 \\(x\\) 增大而增大；\\(y<0\\) 时斜率为负，解远离 \\(0\\)。 · For \\(y>0\\), the slope is positive and solutions increase with \\(x\\); for \\(y<0\\), the slope is negative and solutions move away from \\(0\\).",
          "通解 \\(y=Ce^{x}\\)，故 \\(y=0\\) 不稳定。 · The general solution is \\(y=Ce^{x}\\), so \\(y=0\\) is unstable."
        ],
        solution: "\\(y=0\\) 是不稳定平衡；非零解为 \\(y=Ce^{x}\\)。 · \\(y=0\\) is an unstable equilibrium; nonzero solutions are \\(y=Ce^{x}\\).",
        solutionLatex: "y=Ce^{x}"
      },
      {
        title: "例 3 · 匹配斜率场 · Matching a Slope Field",
        prompt: "斜率场在 \\(y=0\\) 处水平，且 \\(y>0\\) 时斜率为负、\\(y<0\\) 时斜率为正。写出一个可能的方程。 · A slope field is horizontal at \\(y=0\\), negative for \\(y>0\\), and positive for \\(y<0\\). Write a possible differential equation.",
        steps: [
          "斜率符号与 \\(y\\) 相反，可令 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-y\\)。 · The sign of the slope is opposite to the sign of \\(y\\), so take \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-y\\).",
          "\\(y=0\\) 时斜率为零，符合。 · At \\(y=0\\), the slope is zero, as required.",
          "通解 \\(y=Ce^{-x}\\)，所有解趋向 \\(0\\)，平衡稳定。 · The general solution \\(y=Ce^{-x}\\) approaches \\(0\\), so the equilibrium is stable."
        ],
        solution: "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-y\\)。 · A possible equation is \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-y\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-y"
      }
    ],
    examTips: [
      "AP Calculus BC Unit 7：微分方程与斜率场 · AP Calculus BC Unit 7: Differential equations and slope fields",
      "先画等斜线，再在网格上画短线段 · Draw isoclines first, then draw short segments on the grid.",
      "解曲线与线段相切，不要穿过线段 · Solution curves are tangent to the segments; they do not cross them.",
      "选择题常考“场与方程匹配”和“平衡稳定性” · Multiple-choice questions often test matching a field to an equation and equilibrium stability."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.1",
        title: "微分方程建模 · Modeling with Differential Equations",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.3",
        title: "斜率场草图 · Sketching Slope Fields",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.4",
        title: "斜率场推理 · Reasoning with Slope Fields",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.6",
        title: "可分离变量 · Separable Equations",
        relation: "相关 · Related"
      }
    ],
    development: [
      "微分方程与斜率 · Differential equations and slope",
      "斜率场绘制 · Drawing slope fields",
      "等斜线 · Isoclines",
      "解曲线与平衡解 · Solution curves and equilibrium solutions",
      "稳定性判断 · Determining stability"
    ],
    checks: [
      "斜率场中的线段代表什么？ · What do the segments in a slope field represent?",
      "为什么解曲线一般不相交？ · Why do solution curves generally not intersect?",
      "如何从斜率场判断平衡解的稳定性？ · How can equilibrium stability be read from a slope field?"
    ],
    summary: "斜率场把微分方程变成方向地图；解曲线沿线段的切线方向延伸，等斜线与平衡解帮助快速草图。 · A slope field turns a differential equation into a direction map; solution curves follow the tangent directions of the segments, and isoclines and equilibrium solutions help sketch the field quickly."
  },
  'math/calc-u7/7.9': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能识别 Logistic 方程与参数含义。 · Recognize the logistic equation and the meaning of its parameters.",
      "能求平衡解、拐点与最大增长速率。 · Find equilibrium solutions, the inflection point, and the maximum growth rate.",
      "能分析初始值对解曲线的影响。 · Analyze how the initial value affects the solution curve."
    ],
    essentialKnowledge: [
      "Logistic 方程 \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)\\)，\\(L\\) 为环境容纳量。 · The logistic equation is \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)\\), where \\(L\\) is the carrying capacity.",
      "解 \\(P(t)=\\dfrac{L}{1+Ae^{-kt}}\\)，\\(A=\\dfrac{L-P_0}{P_0}\\)。 · The solution is \\(P(t)=\\dfrac{L}{1+Ae^{-kt}}\\), with \\(A=\\dfrac{L-P_0}{P_0}\\).",
      "平衡解 \\(P=0\\)（不稳定）与 \\(P=L\\)（稳定）；拐点在 \\(P=\\dfrac{L}{2}\\)。 · The equilibrium solutions are \\(P=0\\) (unstable) and \\(P=L\\) (stable); the inflection point is at \\(P=\\dfrac{L}{2}\\).",
      "最大增长速率 \\(\\left.\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{\\max}=\\dfrac{kL}{4}\\)。 · The maximum growth rate is \\(\\left.\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{\\max}=\\dfrac{kL}{4}\\).",
      "\\(P\\ll L\\) 时近似指数增长；\\(P\\to L\\) 时增长趋零，曲线呈 S 形。 · For \\(P\\ll L\\), growth is approximately exponential; as \\(P\\to L\\), growth approaches zero and the curve becomes S-shaped."
    ],
    definition: "Logistic 微分方程 \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)\\)，其中 \\(L\\) 为环境容纳量。解为 \\(P(t)=\\dfrac{L}{1+Ae^{-kt}}\\)，\\(A=\\dfrac{L-P_0}{P_0}\\)。当 \\(P\\ll L\\) 时近似指数增长；\\(P\\to L\\) 时增长趋零。 · The logistic differential equation is \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)\\), where \\(L\\) is the carrying capacity. Its solution is \\(P(t)=\\dfrac{L}{1+Ae^{-kt}}\\), with \\(A=\\dfrac{L-P_0}{P_0}\\). When \\(P\\ll L\\), growth is approximately exponential; as \\(P\\to L\\), growth approaches zero.",
    intuition: "开始时资源充足，种群近似指数增长；接近容纳量时资源紧张，增长放缓并趋于平台。 · At first resources are plentiful, so the population grows nearly exponentially; near the carrying capacity resources become limiting, growth slows, and the population levels off.",
    intuitionDetailed: "增长率 \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\) 是开口向下的抛物线，在 \\(P=\\dfrac{L}{2}\\) 处最大；解曲线在 \\(P=\\dfrac{L}{2}\\) 处有拐点（由加速转为减速）。 · The growth rate \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\) is a downward-opening parabola in \\(P\\), with its maximum at \\(P=\\dfrac{L}{2}\\); the solution curve has an inflection point at \\(P=\\dfrac{L}{2}\\), where growth changes from accelerating to decelerating.",
    formulas: [
      {
        latex: "\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)",
        note: "Logistic 方程。 · Logistic equation."
      },
      {
        latex: "P(t)=\\dfrac{L}{1+Ae^{-kt}}",
        note: "解；\\(A=\\dfrac{L-P_0}{P_0}\\)。 · Solution; \\(A=\\dfrac{L-P_0}{P_0}\\)."
      },
      {
        latex: "\\left.\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{\\max}=\\dfrac{kL}{4}",
        note: "最大增长速率，出现在 \\(P=\\dfrac{L}{2}\\)。 · Maximum growth rate, attained at \\(P=\\dfrac{L}{2}\\)."
      },
      {
        latex: "P=\\dfrac{L}{2}",
        note: "拐点位置。 · Inflection point."
      }
    ],
    derivationNotes: [
      {
        from: "Logistic 方程 · Logistic equation",
        to: "分离变量 · Separation of variables",
        note: "\\(\\dfrac{\\mathrm{d}P}{P\\left(1-\\dfrac{P}{L}\\right)}=k\\,\\mathrm{d}t\\)。 · Separate the variables: \\(\\dfrac{\\mathrm{d}P}{P\\left(1-\\dfrac{P}{L}\\right)}=k\\,\\mathrm{d}t\\)."
      },
      {
        from: "部分分式 · Partial fractions",
        to: "积分 · Integration",
        note: "\\(\\dfrac{1}{P}+\\dfrac{1}{L-P}\\) 积分得 \\(\\ln\\dfrac{P}{L-P}=kt+C\\)。 · Integrating \\(\\dfrac{1}{P}+\\dfrac{1}{L-P}\\) gives \\(\\ln\\dfrac{P}{L-P}=kt+C\\)."
      },
      {
        from: "初值 · Initial value",
        to: "特解 · Particular solution",
        note: "代入 \\(P(0)=P_0\\) 得 \\(A=\\dfrac{L-P_0}{P_0}\\)。 · Substituting \\(P(0)=P_0\\) gives \\(A=\\dfrac{L-P_0}{P_0}\\)."
      }
    ],
    conditions: [
      "环境容纳量 \\(L\\) 恒定，\\(k>0\\) · The carrying capacity \\(L\\) is constant and \\(k>0\\).",
      "种群封闭、无时滞、无 Allee 效应 · The population is closed, with no time lag and no Allee effect.",
      "适用于资源受限的单种群 · The model applies to a single population limited by resources.",
      "\\(P_0>0\\)；若 \\(P_0=0\\) 则种群始终为零 · \\(P_0>0\\); if \\(P_0=0\\), the population remains zero forever."
    ],
    keyPoints: [
      "两个平衡解：\\(P=0\\)（不稳定）与 \\(P=L\\)（稳定） · Two equilibrium solutions: \\(P=0\\) (unstable) and \\(P=L\\) (stable).",
      "拐点在 \\(P=\\dfrac{L}{2}\\) · The inflection point is at \\(P=\\dfrac{L}{2}\\).",
      "初始增长近似指数 · Initial growth is approximately exponential.",
      "解曲线呈 S 形（sigmoid） · The solution curve is S-shaped (sigmoid).",
      "\\(k\\) 控制接近 \\(L\\) 的快慢 · \\(k\\) controls how quickly the population approaches \\(L\\).",
      "\\(P\\) 不会超过 \\(L\\)（理想模型） · \\(P\\) does not exceed \\(L\\) in the ideal model."
    ],
    misconceptions: [
      "认为 logistic 一直指数增长 · Assuming logistic growth remains exponential forever.",
      "认为 \\(P\\) 会超过 \\(L\\) · Assuming \\(P\\) can exceed \\(L\\).",
      "把 \\(L\\) 当作初始值 · Treating \\(L\\) as the initial value.",
      "认为增长率在 \\(P=L\\) 最大（实际为零） · Assuming the growth rate is largest at \\(P=L\\) (it is zero there).",
      "把 \\(k\\) 与 \\(r\\) 混为一谈而不看模型定义 · Confusing \\(k\\) with another growth parameter without checking the model definition."
    ],
    examples: [
      {
        title: "例 1 · 求特解 · Particular Solution",
        prompt: "\\(L=1000\\)，\\(k=0.50\\)，\\(P_0=100\\)。写出 \\(P(t)\\) 并求 \\(P(10)\\)。 · Let \\(L=1000\\), \\(k=0.50\\), and \\(P_0=100\\). Write \\(P(t)\\) and find \\(P(10)\\).",
        steps: [
          "\\(A=\\dfrac{L-P_0}{P_0}=\\dfrac{900}{100}=9\\)。 · Find the constant: \\(A=\\dfrac{L-P_0}{P_0}=\\dfrac{900}{100}=9\\).",
          "\\(P(t)=\\dfrac{1000}{1+9e^{-0.50t}}\\)。 · Write the solution: \\(P(t)=\\dfrac{1000}{1+9e^{-0.50t}}\\).",
          "\\(P(10)=\\dfrac{1000}{1+9e^{-5}}\\approx943\\)。 · Evaluate: \\(P(10)=\\dfrac{1000}{1+9e^{-5}}\\approx943\\)."
        ],
        solution: "\\(P(t)=\\dfrac{1000}{1+9e^{-0.50t}}\\)，\\(P(10)\\approx943\\)。 · \\(P(t)=\\dfrac{1000}{1+9e^{-0.50t}}\\), and \\(P(10)\\approx943\\).",
        solutionLatex: "P(t)=\\dfrac{1000}{1+9e^{-0.50t}},\\;P(10)\\approx943"
      },
      {
        title: "例 2 · 最大增长速率 · Maximum Growth Rate",
        prompt: "\\(L=1000\\)，\\(k=0.50\\)。求最大增长速率及对应种群大小。 · Let \\(L=1000\\) and \\(k=0.50\\). Find the maximum growth rate and the corresponding population size.",
        steps: [
          "最大增长出现在 \\(P=\\dfrac{L}{2}=500\\)。 · Maximum growth occurs at \\(P=\\dfrac{L}{2}=500\\).",
          "\\(\\left.\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{\\max}=\\dfrac{kL}{4}=\\dfrac{0.50(1000)}{4}=125\\)。 · The maximum rate is \\(\\left.\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{\\max}=\\dfrac{kL}{4}=\\dfrac{0.50(1000)}{4}=125\\)."
        ],
        solution: "\\(P=500\\) 时增长最快，速率为 \\(125\\) 个每单位时间。 · Growth is fastest at \\(P=500\\), with a rate of \\(125\\) individuals per unit time.",
        solutionLatex: "P=500,\\;\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=125"
      },
      {
        title: "例 3 · 从数据估 L · Estimating L from Data",
        prompt: "某种群数量最终稳定在 \\(800\\) 左右。若初期每单位时间增长约 \\(12\\%\\)，写出近似 logistic 方程。 · A population eventually levels off near \\(800\\). If its early growth is about \\(12\\%\\) per unit time, write an approximate logistic equation.",
        steps: [
          "稳定值即 \\(L\\approx800\\)。 · The stable value is \\(L\\approx800\\).",
          "初期 \\(P\\ll L\\)，\\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\approx kP\\)，故 \\(k\\approx0.12\\)。 · Initially \\(P\\ll L\\), so \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\approx kP\\), giving \\(k\\approx0.12\\).",
          "方程为 \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.12P\\left(1-\\dfrac{P}{800}\\right)\\)。 · The equation is \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.12P\\left(1-\\dfrac{P}{800}\\right)\\)."
        ],
        solution: "\\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.12P\\left(1-\\dfrac{P}{800}\\right)\\)。 · The approximate equation is \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.12P\\left(1-\\dfrac{P}{800}\\right)\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=0.12P\\left(1-\\dfrac{P}{800}\\right)"
      }
    ],
    examTips: [
      "AP Calculus BC Unit 7：Logistic 模型 · AP Calculus BC Unit 7: Logistic models",
      "记住解的形式与 \\(A=\\dfrac{L-P_0}{P_0}\\) · Remember the solution form and \\(A=\\dfrac{L-P_0}{P_0}\\).",
      "拐点在 \\(\\dfrac{L}{2}\\)，最大增长率 \\(\\dfrac{kL}{4}\\) · The inflection point is at \\(\\dfrac{L}{2}\\), and the maximum growth rate is \\(\\dfrac{kL}{4}\\).",
      "与指数模型对比：logistic 有上限、呈 S 形 · Compare with the exponential model: logistic growth has a ceiling and is S-shaped."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.8",
        title: "指数模型 · Exponential Models",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.6",
        title: "可分离变量 · Separable Equations",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.7",
        title: "特解 · Particular Solutions",
        relation: "相关 · Related"
      },
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.6",
        title: "凹性与拐点 · Concavity and Inflection Points",
        relation: "相关 · Related"
      }
    ],
    development: [
      "指数模型的局限 · Limits of the exponential model",
      "Logistic 方程 · The logistic equation",
      "分离变量求解 · Solving by separation of variables",
      "拐点与最大增长 · Inflection point and maximum growth",
      "与生态学的联系 · Connections to ecology"
    ],
    checks: [
      "Logistic 解的拐点在哪里？ · Where is the inflection point of a logistic solution?",
      "为什么 \\(P=L\\) 是稳定平衡？ · Why is \\(P=L\\) a stable equilibrium?",
      "\\(k\\) 与 \\(L\\) 分别控制什么？ · What do \\(k\\) and \\(L\\) each control?"
    ],
    summary: "Logistic 模型描述资源受限的增长：\\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)\\)，解呈 S 形，拐点在 \\(\\dfrac{L}{2}\\)。 · The logistic model describes resource-limited growth: \\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\left(1-\\dfrac{P}{L}\\right)\\); the solution is S-shaped with an inflection point at \\(\\dfrac{L}{2}\\)."
  },
  'bio/bio-u8/8.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分指数增长与 Logistic 增长的假设。',
      '能计算增长率、倍增时间与容纳量。',
      '能用标记重捕法估计种群大小。'
    ],
    essentialKnowledge: [
      '种群是同一物种在同一区域内的个体集合，研究大小、密度、分布、年龄结构与增长率。',
      '指数增长 \\(\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN\\)，解 \\(N(t)=N_0e^{rt}\\)，资源无限时成立。',
      'Logistic 增长 \\(\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN\\left(\\dfrac{K-N}{K}\\right)\\)，\\(K\\) 为环境容纳量。',
      '标记重捕估计 \\(N=\\dfrac{MC}{R}\\)，要求种群封闭、标记不丢失、个体等概率捕获。',
      '\\(r\\) 策略者高繁殖低存活，\\(K\\) 策略者低繁殖高存活；密度制约使增长趋于稳定。'
    ],
    definition: '种群是同一物种在同一区域内的个体集合。种群生态研究种群大小、密度、分布、年龄结构与增长率。指数增长 \\(\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN\\)；资源有限时用 logistic 增长 \\(\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN\\left(\\dfrac{K-N}{K}\\right)\\)，\\(K\\) 为环境容纳量。',
    intuition: '没有限制时，种群像复利一样增长；资源见底时，增长减速并稳定在容纳量附近。',
    intuitionDetailed: '指数增长解为 \\(N(t)=N_0e^{rt}\\)，\\(r\\) 为内禀增长率；logistic 增长在 \\(N=\\dfrac{K}{2}\\) 时增长最快。密度制约因素（食物、疾病、空间）随密度增强；气候、灾害等非密度制约因素与密度关系较弱。',
    formulas: [
      { latex: '\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN', note: '指数增长。' },
      { latex: 'N(t)=N_0e^{rt}', note: '指数增长解；倍增时间 \\(t_d=\\dfrac{\\ln2}{r}\\)。' },
      { latex: '\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN\\left(\\dfrac{K-N}{K}\\right)', note: 'Logistic 增长。' },
      { latex: 'N=\\dfrac{MC}{R}', note: '标记重捕法估计种群大小。' },
    ],
    derivationNotes: [
      { from: '单位个体增长率', to: '指数增长', note: '每个个体贡献 \\(r\\) 个新个体每单位时间，故 \\(\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=rN\\)。' },
      { from: '资源限制', to: 'Logistic 增长', note: '把人均增长率写成 \\(r\\left(1-\\dfrac{N}{K}\\right)\\)，随 \\(N\\) 增大而下降。' },
      { from: '标记重捕', to: '种群估计', note: '假设标记个体均匀混合，标记比例等于重捕比例。' },
    ],
    conditions: ['指数模型：资源无限、无迁入迁出、无年龄结构影响', 'Logistic：\\(K\\) 恒定、密度制约即时生效', '\\(r\\) 与 \\(K\\) 是种群与环境特征，不是普适常数', '标记重捕要求种群封闭、标记不丢失、个体等概率捕获'],
    keyPoints: ['\\(r\\) 策略者：高繁殖、低存活、早熟（昆虫、杂草）', '\\(K\\) 策略者：低繁殖、高存活、晚熟（大型哺乳动物）', '密度制约使增长趋于稳定', '年龄结构影响未来增长', '存活曲线分 I、II、III 型', '种群分布有随机、均匀、集群三种'],
    misconceptions: [
      '认为 \\(r\\) 是固定不变的常数（环境可变）',
      '认为 \\(K\\) 是种群永远达不到的上限',
      '把种群密度与种群大小混淆',
      '认为密度制约因素总是坏事',
      '认为指数增长可以无限持续',
    ],
    examples: [
      {
        title: '例 1 · 指数增长',
        prompt: '\\(N_0=100\\)，\\(r=0.20\\,\\mathrm{yr^{-1}}\\)。求 \\(5\\) 年后的种群大小（指数模型）。',
        steps: [
          '\\(N(t)=N_0e^{rt}=100e^{0.20(5)}\\)。',
          '\\(N(5)=100e^{1}\\approx272\\)。',
        ],
        solution: '\\(N(5)\\approx272\\)。',
        solutionLatex: 'N(5)\\approx272',
      },
      {
        title: '例 2 · Logistic 增长',
        prompt: '\\(K=500\\)，\\(r=0.30\\,\\mathrm{yr^{-1}}\\)，\\(N_0=50\\)。求 \\(10\\) 年后的种群大小。',
        steps: [
          '\\(A=\\dfrac{K-N_0}{N_0}=\\dfrac{450}{50}=9\\)。',
          '\\(N(t)=\\dfrac{500}{1+9e^{-0.30t}}\\)。',
          '\\(N(10)=\\dfrac{500}{1+9e^{-3}}\\approx345\\)。',
        ],
        solution: '\\(N(10)\\approx345\\)。',
        solutionLatex: 'N(10)\\approx345',
      },
      {
        title: '例 3 · 最大增长',
        prompt: '上题中种群在什么大小增长最快？最大增长速率是多少？',
        steps: [
          'Logistic 增长在 \\(N=\\dfrac{K}{2}=250\\) 时最快。',
          '\\(\\left.\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}\\right|_{\\max}=\\dfrac{rK}{4}=\\dfrac{0.30(500)}{4}=37.5\\)。',
        ],
        solution: '\\(N=250\\) 时增长最快，速率 \\(37.5\\) 个每年。',
        solutionLatex: 'N=250,\\;\\dfrac{\\mathrm{d}N}{\\mathrm{d}t}=37.5',
      },
    ],
    examTips: [
      'CED Unit 8.3：种群生态',
      '区分指数增长与 logistic 增长的条件',
      '读图时先找 \\(K\\) 与拐点 \\(\\dfrac{K}{2}\\)',
      'r 策略与 K 策略对比常与生活史特征一起考',
      '标记重捕注意假设与标记丢失',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u8', code: '8.4', title: '密度效应', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.2', title: '能量流', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.5', title: '群落生态', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择', relation: '相关' },
    ],
    development: ['种群特征', '指数增长', '资源限制与 logistic', '密度制约', '生活史策略与年龄结构'],
    checks: ['指数增长与 logistic 增长的关键区别是什么？', '为什么 \\(N=\\dfrac{K}{2}\\) 时增长最快？', '密度制约因素如何影响种群？'],
    summary: '种群在无限资源下指数增长，在有限资源下按 logistic 增长并趋于 \\(K\\)；密度制约与生活史策略决定增长模式。',
  },

  'bio/bio-u8/8.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分竞争、捕食、互利与寄生。',
      '能解释生态位分化与竞争排斥。',
      '能计算 Shannon 多样性指数并解释演替。'
    ],
    essentialKnowledge: [
      '群落是一定区域内所有种群的集合，研究物种组成、丰富度、生态位与种间相互作用。',
      '竞争、捕食、植食、互利、偏利与寄生是基本相互作用。',
      '竞争可导致生态位分化或竞争排斥；生态位重叠过大时不能长期共存。',
      'Shannon 多样性指数 \\(H\'=-\\sum p_i\\ln p_i\\)；丰富度是物种数。',
      '初生演替从无土壤开始，次生演替保留土壤与种子库；关键种需通过移除实验确认。'
    ],
    definition: '群落是一定区域内所有种群的集合。群落生态研究物种组成、丰富度、生态位与种间相互作用：竞争、捕食、植食、共生（互利、偏利、寄生）。竞争可导致生态位分化或竞争排斥。',
    intuition: '群落不是物种的简单清单，而是“谁吃谁、谁和谁争”的关系网。',
    intuitionDetailed: '基础生态位是理论上可利用的资源范围，实际生态位受竞争限制。关键种对群落结构的影响远超其生物量；移除后可能引发营养级联。演替分初生（裸岩）与次生（火灾后），最终趋于相对稳定的群落。',
    formulas: [
      { latex: 'H\'=-\\sum p_i\\ln p_i', note: 'Shannon 多样性指数；\\(p_i\\) 为第 \\(i\\) 种个体比例。' },
      { latex: '\\text{丰富度}=\\text{物种数}', note: '最简单的多样性度量。' },
      { latex: '\\text{竞争排斥：生态位重叠过大}\\Rightarrow\\text{不能长期共存}', note: '竞争排斥原理。' },
    ],
    derivationNotes: [
      { from: '生态位概念', to: '竞争排斥', note: '两个物种若生态位完全重叠，竞争会使一方被排除。' },
      { from: '种间相互作用', to: '群落结构', note: '捕食、竞争、共生改变物种多度与分布。' },
      { from: '干扰', to: '演替', note: '初生演替从无土壤开始；次生演替保留土壤与种子库。' },
    ],
    conditions: ['群落边界与尺度人为定义', '相互作用方向可随环境改变（如互利变竞争）', '演替方向受干扰、气候与土壤影响', '关键种的作用需通过移除实验或对比观察确认'],
    keyPoints: ['竞争、捕食、互利、寄生是基本相互作用', '生态位分化减少竞争', '关键种与营养级联', '初生演替从无土壤开始，次生演替保留土壤与种子库', '物种多样性提高群落稳定性（有例外）', '优势种与关键种不是同一概念'],
    misconceptions: [
      '认为竞争总是导致一方灭绝（可分化共存）',
      '认为关键种一定是数量最多的物种',
      '把初生演替与次生演替混淆',
      '认为演替一定有固定终点',
      '把共生都当成互利（还有偏利与寄生）',
    ],
    examples: [
      {
        title: '例 1 · 关键种',
        prompt: '海獭消失后，海胆数量激增，海藻林衰退。说明海獭的角色。',
        steps: [
          '海獭捕食海胆，控制海胆数量。',
          '海獭消失后海胆过度啃食海藻。',
          '海獭的生物量不大，却显著改变群落结构，属于关键种。',
        ],
        solution: '海獭是关键种，引发营养级联。',
      },
      {
        title: '例 2 · 竞争排斥',
        prompt: '两种藤壶在潮间带竞争，一种占据全部区域，另一种只在移除前者后扩展。说明原因。',
        steps: [
          '第一种竞争能力强，把第二种排除出重叠生态位。',
          '移除第一种后，第二种扩展到其基础生态位。',
          '这是竞争排斥与生态位分化的经典证据。',
        ],
        solution: '竞争排斥；实际生态位受竞争限制。',
      },
      {
        title: '例 3 · 演替类型',
        prompt: '火山熔岩冷却后与森林火灾后，分别属于哪种演替？',
        steps: [
          '熔岩上没有土壤与种子库，需先由地衣等先锋物种改造环境，属初生演替。',
          '火灾后土壤与种子库仍在，属次生演替。',
        ],
        solution: '前者初生演替，后者次生演替。',
      },
    ],
    examTips: [
      'CED Unit 8.5：群落生态',
      '区分竞争、捕食、互利、偏利、寄生',
      '关键种看影响，不只看数量',
      '初生 vs 次生演替看是否有土壤与种子库',
      '营养级联常考“移除顶级捕食者”的连锁效应',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u8', code: '8.3', title: '种群生态', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.6', title: '生物多样性 · Biodiversity', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.7', title: '生态系统扰动', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.2', title: '能量流', relation: '相关' },
    ],
    development: ['群落组成与生态位', '种间相互作用', '竞争排斥与关键种', '演替', '多样性与稳定性'],
    checks: ['关键种与优势种有何区别？', '竞争一定会导致灭绝吗？', '初生演替与次生演替的起点有何不同？'],
    summary: '群落由物种相互作用构成；竞争、捕食、共生与关键种塑造结构，演替则描述群落随时间的变化。',
  },

  'em/em-u11/11.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能计算含内阻电路的电流与端电压。',
      '能求串联与并联等效电阻。',
      '能应用基尔霍夫定律分析简单电路。'
    ],
    essentialKnowledge: [
      '电源电动势 \\(\\varepsilon\\) 是单位电荷获得的能量；端电压 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)。',
      '闭合电路 \\(\\varepsilon=I(R+r)\\)；内阻使端电压随电流增大而下降。',
      '串联 \\(R_{\\mathrm{eq}}=\\sum R_i\\)；并联 \\(\\dfrac{1}{R_{\\mathrm{eq}}}=\\sum\\dfrac{1}{R_i}\\)。',
      '串联电流相同、电压按电阻分配；并联电压相同、电流按电导分配。',
      '电流表串联、电压表并联；基尔霍夫定律分别对应电荷守恒与能量守恒。'
    ],
    definition: '简单电路由电源、导线与电阻组成。电源电动势 \\(\\varepsilon\\) 是单位电荷获得的能量；端电压 \\(V_{\\mathrm{term}}=\\varepsilon-Ir\\)，\\(r\\) 为内阻。串联等效电阻 \\(R_{\\mathrm{eq}}=\\sum R_i\\)；并联 \\(\\dfrac{1}{R_{\\mathrm{eq}}}=\\sum\\dfrac{1}{R_i}\\)。',
    intuition: '串联像一条单行道，电流处处相同、电压分配；并联像多条支路，电压相同、电流分配。',
    intuitionDetailed: '理想导线电阻为零；理想电压表内阻无穷大、电流表内阻为零。基尔霍夫定律是能量守恒（环路）与电荷守恒（结点）的体现，串并联公式都是它的特例。',
    formulas: [
      { latex: '\\varepsilon=I(R+r)', note: '含内阻的闭合电路。' },
      { latex: 'V_{\\mathrm{term}}=\\varepsilon-Ir', note: '端电压。' },
      { latex: 'R_{\\mathrm{series}}=R_1+R_2+\\cdots', note: '串联等效电阻。' },
      { latex: '\\dfrac{1}{R_{\\mathrm{parallel}}}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2}+\\cdots', note: '并联等效电阻。' },
    ],
    derivationNotes: [
      { from: '能量守恒', to: '电动势与内阻', note: '电源提供的能量 \\(\\varepsilon I\\) 等于外电路 \\(I^{2}R\\) 与内阻 \\(I^{2}r\\) 消耗之和。' },
      { from: '串联电流相同', to: '串联电阻', note: '\\(V=\\sum V_i=I\\sum R_i\\)。' },
      { from: '并联电压相同', to: '并联电阻', note: '\\(I=\\sum I_i=V\\sum\\dfrac{1}{R_i}\\)。' },
    ],
    conditions: ['稳恒直流、集中参数电路', '理想导线与电表；实际电表有内阻', '电源内阻不可忽略时端电压随电流下降', '电流表串联、电压表并联'],
    keyPoints: ['串联电流相同，电压按电阻分配', '并联电压相同，电流按电导分配', '等效电阻：串联增大，并联减小（小于任一支路）', '端电压小于电动势（放电时）', '电流表串联、电压表并联', '基尔霍夫：结点电荷守恒、环路能量守恒'],
    misconceptions: [
      '认为并联总电阻大于任一支路',
      '认为电压表应串联测电压',
      '认为端电压总等于电动势',
      '忽略电池内阻',
      '认为电流总是从正极出发“用完”在电阻处（电荷守恒，电流连续）',
    ],
    examples: [
      {
        title: '例 1 · 串联',
        prompt: '\\(R_1=4.0\\,\\Omega\\)，\\(R_2=6.0\\,\\Omega\\) 串联接 \\(10\\,\\mathrm{V}\\) 理想电源。求电流与各电阻电压。',
        steps: [
          '\\(R_{\\mathrm{eq}}=4.0+6.0=10\\,\\Omega\\)。',
          '\\(I=\\dfrac{10}{10}=1.0\\,\\mathrm{A}\\)。',
          '\\(V_1=IR_1=4.0\\,\\mathrm{V}\\)，\\(V_2=IR_2=6.0\\,\\mathrm{V}\\)。',
        ],
        solution: '\\(I=1.0\\,\\mathrm{A}\\)，\\(V_1=4.0\\,\\mathrm{V}\\)，\\(V_2=6.0\\,\\mathrm{V}\\)。',
        solutionLatex: 'I=1.0\\,\\mathrm{A},\\;V_1=4.0\\,\\mathrm{V},\\;V_2=6.0\\,\\mathrm{V}',
      },
      {
        title: '例 2 · 并联',
        prompt: '同样的两电阻并联接 \\(10\\,\\mathrm{V}\\) 电源。求等效电阻、总电流与各支路电流。',
        steps: [
          '\\(\\dfrac{1}{R_{\\mathrm{eq}}}=\\dfrac14+\\dfrac16=\\dfrac{5}{12}\\)，故 \\(R_{\\mathrm{eq}}=2.4\\,\\Omega\\)。',
          '\\(I_{\\mathrm{total}}=\\dfrac{10}{2.4}\\approx4.2\\,\\mathrm{A}\\)。',
          '\\(I_1=\\dfrac{10}{4}=2.5\\,\\mathrm{A}\\)，\\(I_2=\\dfrac{10}{6}\\approx1.7\\,\\mathrm{A}\\)。',
        ],
        solution: '\\(R_{\\mathrm{eq}}=2.4\\,\\Omega\\)，\\(I_{\\mathrm{total}}\\approx4.2\\,\\mathrm{A}\\)。',
        solutionLatex: 'R_{\\mathrm{eq}}=2.4\\,\\Omega,\\;I_{\\mathrm{total}}\\approx4.2\\,\\mathrm{A}',
      },
      {
        title: '例 3 · 内阻',
        prompt: '电池 \\(\\varepsilon=9.0\\,\\mathrm{V}\\)，内阻 \\(r=1.0\\,\\Omega\\)，外接 \\(R=8.0\\,\\Omega\\)。求电流、端电压与外电阻功率。',
        steps: [
          '\\(I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{9.0}{9.0}=1.0\\,\\mathrm{A}\\)。',
          '\\(V_{\\mathrm{term}}=\\varepsilon-Ir=9.0-1.0(1.0)=8.0\\,\\mathrm{V}\\)。',
          '\\(P_R=I^{2}R=(1.0)^{2}(8.0)=8.0\\,\\mathrm{W}\\)。',
        ],
        solution: '\\(I=1.0\\,\\mathrm{A}\\)，\\(V_{\\mathrm{term}}=8.0\\,\\mathrm{V}\\)，\\(P_R=8.0\\,\\mathrm{W}\\)。',
        solutionLatex: 'I=1.0\\,\\mathrm{A},\\;V_{\\mathrm{term}}=8.0\\,\\mathrm{V},\\;P_R=8.0\\,\\mathrm{W}',
      },
    ],
    examTips: [
      'CED Unit 11：电路',
      '先化简串并联，再求总电流',
      '含内阻先写 \\(\\varepsilon=I(R+r)\\)，端电压再减 \\(Ir\\)',
      '电流表串联、电压表并联；实际电表内阻会改变电路',
      '多回路用基尔霍夫定律，注意电流方向假设',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u11', code: '11.1', title: '电流', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.3', title: '电阻与欧姆定律', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.4', title: '电功率', relation: '后续' },
      { subject: 'em', chapterId: 'em-u11', code: '11.5', title: '复合直流电路', relation: '后续' },
    ],
    development: ['电动势与内阻', '串联与并联', '等效电阻', '基尔霍夫定律', '电表接法与复杂电路'],
    checks: ['并联总电阻为什么小于任一支路？', '端电压为什么小于电动势？', '电流表与电压表应如何接入电路？'],
    summary: '简单电路用串并联化简与 \\(\\varepsilon=I(R+r)\\) 分析；端电压受内阻影响，基尔霍夫定律处理复杂连接。',
  },






  'mech/mech-u3/3.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      "能陈述「机械能守恒」的核心定义与适用条件。",
      "能用机械能与动能分析并解决基础问题。",
      "能识别“认为只要有摩擦就完全不能用能量法（可用 \\(W_{\\mathrm{nc}}=\\Delta E\\)）”等常见误用并纠正。"
    ],
    essentialKnowledge: [
      "能量是标量，只需初末状态",
      "保守力做功对应势能变化，非保守力做功改变总机械能",
      "摩擦生热 \\(Q=|W_f|\\)（相对滑动时）",
      "机械能守恒是条件式，不是普遍定律",
      "复杂轨道优先用能量法，避免求中间加速度"
    ],
    connections: [
      "先修：3.1 动能定理",
      "先修：3.2 力与势能",
      "应用：7.2 单摆"
    ],
    definition: '机械能 \\(E=K+U\\) 是动能与势能之和。若系统内只有保守力做功，机械能守恒；若存在非保守力（摩擦、空气阻力、外力），则非保守力做功等于机械能变化：\\(W_{\\mathrm{nc}}=\\Delta E\\)。',
    intuition: '没有摩擦时，动能与势能此消彼长、总量不变；有摩擦时，机械能“漏”成热能，漏掉的数量正好等于摩擦力做功的大小。',
    intuitionDetailed: '先选系统：把地球和弹簧纳入系统，重力与弹力就是内力，其势能可写入 \\(U\\)；若把它们当外力，则用动能定理。能量方程只涉及初末状态，不关心中间路径，因此比牛顿定律更适合轨道、摆和弹簧问题。',
    formulas: [
      { latex: 'E=K+U,\\quad K=\\dfrac{1}{2}mv^{2}', note: '机械能与动能。' },
      { latex: 'K_i+U_i+W_{\\mathrm{nc}}=K_f+U_f', note: '含非保守力做功的能量方程。' },
      { latex: 'W_{\\mathrm{nc}}=\\Delta E=\\Delta K+\\Delta U', note: '非保守力做功等于机械能变化。' },
      { latex: '\\dfrac{1}{2}mv_i^{2}+mgh_i=\\dfrac{1}{2}mv_f^{2}+mgh_f', note: '只有重力做功时的常用形式。' },
    ],
    conditions: ['先明确系统边界；重力/弹力是内力还是外力取决于系统选择', '机械能守恒要求 \\(W_{\\mathrm{nc}}=0\\)', '摩擦力做功通常为负，转化为内能', '势能零点在同一问题中保持一致', '绳突然绷紧、完全非弹性碰撞等过程机械能不守恒'],
    keyPoints: ['能量是标量，只需初末状态', '保守力做功对应势能变化，非保守力做功改变总机械能', '摩擦生热 \\(Q=|W_f|\\)（相对滑动时）', '机械能守恒是条件式，不是普遍定律', '复杂轨道优先用能量法，避免求中间加速度'],
    misconceptions: [
      '认为只要有摩擦就完全不能用能量法（可用 \\(W_{\\mathrm{nc}}=\\Delta E\\)）',
      '把摩擦力做功与“摩擦生热”混为一谈（相对位移与对地位移不同）',
      '在完全非弹性碰撞中仍用机械能守恒',
      '系统选择改变后仍沿用原来的势能项',
      '忘记弹簧势能或重力势能中的某一项',
    ],
    examples: [
      {
        title: '例 1 · 无摩擦滑梯',
        prompt: '质量 \\(m\\) 的滑块从高 \\(20\\,\\mathrm{m}\\) 的平滑滑梯顶端由静止下滑。求底端速率（\\(g=9.8\\,\\mathrm{m/s^{2}}\\)）。',
        steps: ['只有重力做功，机械能守恒：\\(mgh=\\dfrac{1}{2}mv^{2}\\)。', '\\(v=\\sqrt{2gh}=\\sqrt{2(9.8)(20)}=19.8\\,\\mathrm{m/s}\\)。'],
        solution: '\\(v\\approx 20\\,\\mathrm{m/s}\\)。',
        solutionLatex: 'v\\approx 20\\,\\mathrm{m/s}',
      },
      {
        title: '例 2 · 斜面摩擦',
        prompt: '滑块从高 \\(2.5\\,\\mathrm{m}\\) 的 \\(30^\\circ\\) 斜面顶端由静止下滑，斜面长 \\(5.0\\,\\mathrm{m}\\)，动摩擦因数 \\(0.20\\)。求底端速率。',
        steps: ['摩擦做功 \\(W_f=-\\mu mg\\cos30^\\circ\\,d=-0.20m(9.8)(0.866)(5.0)=-8.49m\\,\\mathrm{J}\\)。', '能量方程：\\(mgh+W_f=\\dfrac{1}{2}mv^{2}\\)，约去 \\(m\\)：\\(24.5-8.49=\\dfrac{1}{2}v^{2}\\)。', '\\(v=\\sqrt{2(16.0)}=5.66\\,\\mathrm{m/s}\\)。'],
        solution: '\\(v\\approx 5.7\\,\\mathrm{m/s}\\)。',
        solutionLatex: 'v\\approx 5.7\\,\\mathrm{m/s}',
      },
      {
        title: '例 3 · 单摆',
        prompt: '长 \\(L\\) 的单摆从与竖直方向成 \\(\\theta\\) 处由静止释放。求最低点速率。',
        steps: ['高度差 \\(\\Delta h=L(1-\\cos\\theta)\\)。', '机械能守恒：\\(mgL(1-\\cos\\theta)=\\dfrac{1}{2}mv^{2}\\)。'],
        solution: '\\(v=\\sqrt{2gL(1-\\cos\\theta)}\\)。',
        solutionLatex: 'v=\\sqrt{2gL(1-\\cos\\theta)}',
      },
    ],
    examTips: [
      'CED Unit 3：能量守恒',
      '先写系统边界与势能零点，再列初末能量',
      '有摩擦时用 \\(W_{\\mathrm{nc}}=\\Delta E\\)，不要直接令 \\(E_i=E_f\\)',
      '碰撞、绳绷紧等瞬时过程先判断机械能是否守恒',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u3', code: '3.1', title: '动能定理', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.2', title: '力与势能', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u7', code: '7.2', title: '单摆', relation: '应用' },
    ],
    development: ['系统与能量项', '机械能守恒', '非保守力做功', '摩擦生热', '轨道与摆的能量法'],
    checks: ['机械能守恒的条件是什么？', '摩擦力做功如何进入能量方程？', '为什么完全非弹性碰撞不能用机械能守恒？'],
    summary: '机械能是动能加势能；只有保守力做功时守恒，有非保守力时用 \\(W_{\\mathrm{nc}}=\\Delta E\\) 记账。',
  },

  'mech/mech-u4/4.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      "能陈述「冲量与动量」的核心定义与适用条件。",
      "能用动量的定义分析并解决基础问题。",
      "能识别“把冲量与功混为一谈”等常见误用并纠正。"
    ],
    essentialKnowledge: [
      "动量是矢量，动能是标量",
      "冲量是力对时间的累积，功是力对空间的累积",
      "\\(F\\text{-}t\\) 图面积 = 冲量 = 动量变化",
      "延长作用时间可减小平均力",
      "\\(K=\\dfrac{p^{2}}{2m}\\) 联系动量与动能"
    ],
    connections: [
      "后续：4.2 动量守恒与碰撞",
      "先修：2.3 牛顿第一与第二定律",
      "对比：3.1 动能定理"
    ],
    definition: '动量 \\(\\vec p=m\\vec v\\) 是描述物体运动“惯性量”的矢量。力对时间的累积效应叫冲量 \\(\\vec J=\\int_{t_i}^{t_f}\\vec F\\,\\mathrm{d}t\\)，冲量—动量定理为 \\(\\vec J=\\Delta\\vec p\\)。恒力时 \\(\\vec J=\\vec F\\Delta t\\)，平均力 \\(\\vec F_{\\mathrm{avg}}=\\dfrac{\\Delta\\vec p}{\\Delta t}\\)。',
    intuition: '同样的动量变化，作用时间越长，所需力越小；安全气囊、缓冲垫就是“延长 \\(\\Delta t\\)、减小 \\(F\\)”。',
    intuitionDetailed: '\\(F\\text{-}t\\) 图下的面积就是冲量；即使力随时间变化，面积仍等于动量变化。动量与动能不同：动量是矢量，动能是标量；两个物体动量相同，质量大的动能小。',
    formulas: [
      { latex: '\\vec p=m\\vec v', note: '动量的定义。' },
      { latex: '\\vec J=\\int_{t_i}^{t_f}\\vec F\\,\\mathrm{d}t=\\Delta\\vec p', note: '冲量—动量定理。' },
      { latex: '\\vec F_{\\mathrm{avg}}=\\dfrac{\\Delta\\vec p}{\\Delta t}', note: '平均力。' },
      { latex: 'K=\\dfrac{p^{2}}{2m}', note: '动量与动能的关系。' },
    ],
    conditions: ['冲量是矢量，必须按方向分解', '\\(\\vec J=\\Delta\\vec p\\) 中的力是合外力', '碰撞时间很短时，可忽略重力等有限外力的冲量', '质量恒定；变质量系统需用更一般的动量方程', '面积法适用于任意 \\(F(t)\\)，不要求恒力'],
    keyPoints: ['动量是矢量，动能是标量', '冲量是力对时间的累积，功是力对空间的累积', '\\(F\\text{-}t\\) 图面积 = 冲量 = 动量变化', '延长作用时间可减小平均力', '\\(K=\\dfrac{p^{2}}{2m}\\) 联系动量与动能'],
    misconceptions: [
      '把冲量与功混为一谈',
      '认为动量相同则动能相同',
      '在反弹问题中漏掉速度方向（\\(\\Delta p\\) 不是 \\(m(v_f-v_i)\\) 的标量差）',
      '认为作用时间短就不需要冲量',
      '忽略重力在长过程（如火箭飞行）中的冲量',
    ],
    examples: [
      {
        title: '例 1 · 反弹',
        prompt: '\\(0.15\\,\\mathrm{kg}\\) 的球以 \\(20\\,\\mathrm{m/s}\\) 垂直撞墙，以 \\(15\\,\\mathrm{m/s}\\) 反向弹回，接触时间 \\(0.020\\,\\mathrm{s}\\)。求动量变化与平均力。',
        steps: ['取离墙方向为正：\\(v_i=-20\\,\\mathrm{m/s}\\)，\\(v_f=+15\\,\\mathrm{m/s}\\)。', '\\(\\Delta p=m(v_f-v_i)=0.15(15+20)=5.25\\,\\mathrm{kg\\,m/s}\\)。', '\\(F_{\\mathrm{avg}}=\\dfrac{\\Delta p}{\\Delta t}=\\dfrac{5.25}{0.020}=262.5\\,\\mathrm{N}\\)。'],
        solution: '\\(\\Delta p=5.25\\,\\mathrm{kg\\,m/s}\\)（离墙），\\(F_{\\mathrm{avg}}\\approx 2.6\\times10^{2}\\,\\mathrm{N}\\)。',
        solutionLatex: '\\Delta p=5.25\\,\\mathrm{kg\\,m/s},\\;F_{\\mathrm{avg}}\\approx 2.6\\times10^{2}\\,\\mathrm{N}',
      },
      {
        title: '例 2 · 力—时间图',
        prompt: '某物体受的力从 0 线性增至 \\(10\\,\\mathrm{N}\\)（历时 \\(2.0\\,\\mathrm{s}\\)），再线性降为 0（历时 \\(2.0\\,\\mathrm{s}\\)）。求总冲量。',
        steps: ['\\(F\\text{-}t\\) 图是一个三角形，底 \\(4.0\\,\\mathrm{s}\\)、高 \\(10\\,\\mathrm{N}\\)。', '\\(J=\\dfrac{1}{2}(4.0)(10)=20\\,\\mathrm{N\\,s}\\)。'],
        solution: '\\(J=20\\,\\mathrm{N\\,s}\\)。',
        solutionLatex: 'J=20\\,\\mathrm{N\\,s}',
      },
      {
        title: '例 3 · 安全气囊',
        prompt: '乘客动量变化相同，为什么安全气囊能减小受伤风险？',
        steps: ['\\(\\Delta p\\) 由碰撞前后的速度决定，基本相同。', '气囊延长接触时间 \\(\\Delta t\\)。', '由 \\(F_{\\mathrm{avg}}=\\dfrac{\\Delta p}{\\Delta t}\\)，时间越长平均力越小。'],
        solution: '延长作用时间以减小平均力，冲量不变。',
      },
    ],
    examTips: [
      'CED Unit 4：线性动量',
      '先规定正方向，反弹问题尤其注意符号',
      '\\(F\\text{-}t\\) 图求面积，不要只代峰值力',
      '区分“冲量相同”与“力相同”',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u4', code: '4.2', title: '动量守恒与碰撞', relation: '后续' },
      { subject: 'mech', chapterId: 'mech-u2', code: '2.3', title: '牛顿第一与第二定律', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.1', title: '动能定理', relation: '对比' },
    ],
    development: ['动量定义', '冲量与动量定理', '平均力', '\\(F\\text{-}t\\) 图面积', '缓冲与安全设计'],
    checks: ['冲量与功的区别是什么？', '反弹问题中为什么不能直接用速率相减？', '为什么安全气囊能减小平均力？'],
    summary: '动量是矢量，冲量是力对时间的累积；\\(J=\\Delta p\\) 把碰撞前后的速度与平均力联系起来。',
  },

  'mech/mech-u4/4.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      "能陈述「动量守恒与碰撞」的核心定义与适用条件。",
      "能用一维动量守恒分析并解决基础问题。",
      "能识别“认为有摩擦力就绝对不能守恒（要看外力冲量是否可忽略）”等常见误用并纠正。"
    ],
    essentialKnowledge: [
      "动量守恒看“外力冲量”，不是看“有没有力”",
      "弹性碰撞动能守恒，非弹性不守恒",
      "完全非弹性碰撞共同速度由动量守恒决定",
      "等质量弹性碰撞交换速度",
      "二维碰撞分方向守恒"
    ],
    connections: [
      "先修：4.1 冲量与动量",
      "先修：2.2 系统",
      "对比：3.3 机械能守恒"
    ],
    definition: '若系统所受合外力的冲量为零（或可忽略），系统总动量守恒：\\(\\sum\\vec p_i=\\sum\\vec p_f\\)。碰撞按动能是否守恒分为弹性碰撞与非弹性碰撞；完全非弹性碰撞后两物体粘在一起。恢复系数 \\(e=\\dfrac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}\\) 描述弹性程度。',
    intuition: '碰撞时内力远大于外力，动量在极短时间内“内部转账”，总量不变；动能则可能变成热、声和形变能。',
    intuitionDetailed: '一维弹性碰撞同时满足动量守恒与动能守恒，联立可得速度交换公式。完全非弹性碰撞只满足动量守恒，动能损失最大。二维碰撞要按 \\(x\\)、\\(y\\) 方向分别写动量守恒。',
    formulas: [
      { latex: 'm_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}', note: '一维动量守恒。' },
      { latex: 'v_{1f}=\\dfrac{m_1-m_2}{m_1+m_2}v_{1i}+\\dfrac{2m_2}{m_1+m_2}v_{2i}', note: '一维弹性碰撞。' },
      { latex: 'v_f=\\dfrac{m_1v_{1i}+m_2v_{2i}}{m_1+m_2}', note: '完全非弹性碰撞的共同速度。' },
      { latex: 'e=\\dfrac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}', note: '恢复系数；\\(e=1\\) 弹性，\\(e=0\\) 完全非弹性。' },
    ],
    conditions: ['合外力冲量为零或远小于内力冲量', '按方向分别守恒；二维问题写两个分量方程', '弹性碰撞要求动能也守恒；完全非弹性碰撞动能损失最大', '碰撞时间极短，忽略重力等有限外力的冲量', '相对速度沿同一直线时才可用一维公式'],
    keyPoints: ['动量守恒看“外力冲量”，不是看“有没有力”', '弹性碰撞动能守恒，非弹性不守恒', '完全非弹性碰撞共同速度由动量守恒决定', '等质量弹性碰撞交换速度', '二维碰撞分方向守恒'],
    misconceptions: [
      '认为有摩擦力就绝对不能守恒（要看外力冲量是否可忽略）',
      '在完全非弹性碰撞中仍用动能守恒',
      '把动量守恒写成标量方程而忽略方向',
      '认为弹性碰撞“没有能量损失”所以速度不变',
      '二维碰撞只写一个方向的方程',
    ],
    examples: [
      {
        title: '例 1 · 完全非弹性碰撞',
        prompt: '\\(2.0\\,\\mathrm{kg}\\) 的物块以 \\(3.0\\,\\mathrm{m/s}\\) 撞上静止的 \\(1.0\\,\\mathrm{kg}\\) 物块并粘在一起。求共同速度与动能损失。',
        steps: ['动量守恒：\\(2.0(3.0)=(2.0+1.0)v_f\\Rightarrow v_f=2.0\\,\\mathrm{m/s}\\)。', '\\(K_i=\\dfrac{1}{2}(2.0)(3.0)^{2}=9.0\\,\\mathrm{J}\\)，\\(K_f=\\dfrac{1}{2}(3.0)(2.0)^{2}=6.0\\,\\mathrm{J}\\)。'],
        solution: '\\(v_f=2.0\\,\\mathrm{m/s}\\)，动能损失 \\(3.0\\,\\mathrm{J}\\)。',
        solutionLatex: 'v_f=2.0\\,\\mathrm{m/s},\\;\\Delta K=-3.0\\,\\mathrm{J}',
      },
      {
        title: '例 2 · 等质量弹性碰撞',
        prompt: '两个质量相等的小球，一个以 \\(v\\) 运动，另一个静止，发生一维弹性碰撞。求碰后速度。',
        steps: ['动量：\\(mv=mv_1+mv_2\\Rightarrow v=v_1+v_2\\)。', '动能：\\(v^{2}=v_1^{2}+v_2^{2}\\)。', '联立得 \\(v_1=0\\)，\\(v_2=v\\)。'],
        solution: '两球交换速度：入射球停下，静止球以 \\(v\\) 前进。',
        solutionLatex: 'v_1=0,\\;v_2=v',
      },
      {
        title: '例 3 · 弹道摆',
        prompt: '\\(0.020\\,\\mathrm{kg}\\) 的子弹以 \\(300\\,\\mathrm{m/s}\\) 射入 \\(2.0\\,\\mathrm{kg}\\) 的静止木块并嵌入。求木块摆起的最大高度（\\(g=9.8\\,\\mathrm{m/s^{2}}\\)）。',
        steps: ['碰撞瞬间动量守恒：\\(0.020(300)=(2.02)v\\Rightarrow v=2.97\\,\\mathrm{m/s}\\)。', '碰后机械能守恒：\\(\\dfrac{1}{2}v^{2}=gh\\Rightarrow h=\\dfrac{(2.97)^{2}}{2(9.8)}=0.450\\,\\mathrm{m}\\)。'],
        solution: '\\(h\\approx 0.45\\,\\mathrm{m}\\)。',
        solutionLatex: 'h\\approx 0.45\\,\\mathrm{m}',
      },
    ],
    examTips: [
      'CED Unit 4：动量守恒与碰撞',
      '先判断碰撞类型，再决定是否加动能方程',
      '二维碰撞分别写 \\(x\\)、\\(y\\) 动量守恒',
      '弹道摆分两段：碰撞用动量，摆起用能量',
    ],
    related: [
      { subject: 'mech', chapterId: 'mech-u4', code: '4.1', title: '冲量与动量', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u2', code: '2.2', title: '系统', relation: '先修' },
      { subject: 'mech', chapterId: 'mech-u3', code: '3.3', title: '机械能守恒', relation: '对比' },
    ],
    development: ['动量守恒条件', '弹性与非弹性碰撞', '完全非弹性碰撞', '恢复系数', '二维碰撞与弹道摆'],
    checks: ['动量守恒的条件是什么？', '为什么完全非弹性碰撞动能损失最大？', '弹道摆为什么要分两段处理？'],
    summary: '碰撞中合外力冲量可忽略时动量守恒；弹性碰撞另加动能守恒，完全非弹性碰撞只保留动量守恒。',
  },






  'math/calc-u2/2.8': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能写出积法则与商法则，并说明各自适用的条件。 · State the product and quotient rules and explain when each applies.",
      "能用积法则与商法则求多项式、指数、三角与有理函数的导数。 · Use the product and quotient rules to differentiate polynomial, exponential, trigonometric, and rational functions.",
      "能识别并纠正 ((uv)'=u'v') 等常见误用。 · Identify and correct common errors such as writing ((uv)'=u'v')."
    ],
    essentialKnowledge: [
      "积法则两项都含一个原函数 · Both terms in the product rule contain one original factor.",
      "商法则分母平方、分子交叉相减 · The quotient rule has a squared denominator and a cross-subtracted numerator.",
      "常数倍可以提到导数外面 · Constant multiples can be pulled outside the derivative.",
      "有理函数求导后常需通分与约分 · Derivatives of rational functions often need a common denominator and simplification.",
      "复杂乘积可先取对数再求导 · For complicated products, logarithmic differentiation can help."
    ],
    connections: [
      "先修：2.5 幂函数导数 · Prerequisite: 2.5 Derivatives of power functions.",
      "先修：2.6 常数倍与和差 · Prerequisite: 2.6 Constant multiples and sums/differences.",
      "后续：2.9 商法则 · Follow-up: 2.9 The Quotient Rule.",
      "后续：3.1 链式法则 · Follow-up: 3.1 The chain rule."
    ],
    definition: "积法则把两个可导函数乘积的导数写成 \\((uv)'=u'v+uv'\\)；商法则把商的导数写成 \\(\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}\\)（\\(v\\neq0\\)）。两者都可由导数定义或对数求导推出，是多项式、指数、三角与有理函数求导的基本工具。 · The product rule writes the derivative of a product of two differentiable functions as ((uv)'=u'v+uv'); the quotient rule writes the derivative of a quotient as \\(\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}\\) for \\(v\\neq0\\). Both follow from the limit definition or logarithmic differentiation and are basic tools for differentiating polynomial, exponential, trigonometric, and rational functions.",
    intuition: "乘积的导数不是“导数乘导数”：第一项变、第二项不变，加上第一项不变、第二项变；商的导数还要除以分母的平方。 · The derivative of a product is not the product of the derivatives: let the first factor change while the second stays fixed, then add the first fixed and the second changing; the quotient derivative also divides by the square of the denominator.",
    intuitionDetailed: "积法则可理解为“两个变化来源之和”：\\(u\\) 变化贡献 \\(u'v\\)，\\(v\\) 变化贡献 \\(uv'\\)。商法则可由积法则与链式法则推出：把 \\(\\dfrac{u}{v}\\) 写成 \\(u\\cdot v^{-1}\\)。求导后先保留因式，再代数化简，能减少错误。 · The product rule can be read as the sum of two sources of change: a change in \\(u\\) contributes \\(u'v\\), and a change in \\(v\\) contributes \\(uv'\\). The quotient rule follows from the product rule and the chain rule by writing \\(\\dfrac{u}{v}\\) as \\(u\\cdot v^{-1}\\). Keep the factors in place before simplifying algebraically; this reduces errors.",
    formulas: [
      {
        latex: "(uv)'=u'v+uv'",
        note: "积法则。 · Product rule."
      },
      {
        latex: "\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^{2}}",
        note: "商法则；分子顺序不能反。 · Quotient rule; the order in the numerator cannot be reversed."
      },
      {
        latex: "(cu)'=cu'",
        note: "常数倍法则，可由积法则令 \\(u\\) 为常数得到。 · Constant-multiple rule, obtained from the product rule by taking \\(u\\) constant."
      }
    ],
    conditions: [
      "\\(u,v\\) 在讨论点可导 · \\(u\\) and \\(v\\) are differentiable at the point in question.",
      "商法则要求 \\(v\\neq0\\) · The quotient rule requires \\(v\\neq0\\).",
      "商法则分子是“分母乘分子导数 − 分子乘分母导数” · The quotient numerator is “denominator times derivative of numerator minus numerator times derivative of denominator.”",
      "求导后先保留结构再化简，避免展开错误 · Keep the structure before simplifying to avoid expansion errors."
    ],
    keyPoints: [
      "积法则两项都含一个原函数 · Both terms in the product rule contain one original factor.",
      "商法则分母平方、分子交叉相减 · The quotient rule has a squared denominator and cross-subtracted numerator.",
      "常数倍可以提到导数外面 · Constant multiples can be pulled outside the derivative.",
      "有理函数求导后常需通分与约分 · Rational derivatives often need a common denominator and simplification.",
      "复杂乘积可先取对数再求导 · Logarithmic differentiation can help with complicated products."
    ],
    misconceptions: [
      "写成 \\((uv)'=u'v' · Writing ((uv)'=u'v').",
      "商法则分子写成 \\(u'v+uv'\\) 或把顺序颠倒 · Writing the quotient numerator as \\(u'v+uv'\\) or reversing the order.",
      "忘记分母平方 · Forgetting to square the denominator.",
      "把 \\(\\dfrac{u'}{v'}\\) 当作商的导数 · Treating \\(\\dfrac{u'}{v'}\\) as the derivative of the quotient.",
      "求导后不化简，导致符号或因式错误 · Not simplifying after differentiating, leading to sign or factor errors."
    ],
    examples: [
      {
        title: "例 1 · 积法则 · Product Rule",
        prompt: "求 \\(f(x)=x^{2}e^{x}\\) 的导数。 · Find the derivative of \\(f(x)=x^{2}e^{x}\\).",
        steps: [
          "取 \\(u=x^{2}\\)，\\(v=e^{x}\\)。 · Let \\(u=x^{2}\\) and \\(v=e^{x}\\).",
          "\\(f'=2xe^{x}+x^{2}e^{x}\\)。 · Apply the product rule: \\(f'=2xe^{x}+x^{2}e^{x}\\).",
          "提取公因式：\\(f'=e^{x}(x^{2}+2x)\\)。 · Factor: \\(f'=e^{x}(x^{2}+2x)\\)."
        ],
        solution: "\\(f'(x)=e^{x}(x^{2}+2x)\\)。 · Thus \\(f'(x)=e^{x}(x^{2}+2x)\\).",
        solutionLatex: "f'(x)=e^{x}(x^{2}+2x)"
      },
      {
        title: "例 2 · 商法则 · Quotient Rule",
        prompt: "求 \\(f(x)=\\dfrac{x^{2}+1}{x-1}\\) 的导数。 · Find the derivative of \\(f(x)=\\dfrac{x^{2}+1}{x-1}\\).",
        steps: [
          "\\(u=x^{2}+1\\)，\\(u'=2x\\)；\\(v=x-1\\)，\\(v'=1\\)。 · Let \\(u=x^{2}+1\\), so \\(u'=2x\\); let \\(v=x-1\\), so \\(v'=1\\).",
          "\\(f'=\\dfrac{2x(x-1)-(x^{2}+1)}{(x-1)^{2}}\\)。 · Apply the quotient rule: \\(f'=\\dfrac{2x(x-1)-(x^{2}+1)}{(x-1)^{2}}\\).",
          "化简分子：\\(2x^{2}-2x-x^{2}-1=x^{2}-2x-1\\)。 · Simplify the numerator: \\(2x^{2}-2x-x^{2}-1=x^{2}-2x-1\\)."
        ],
        solution: "\\(f'(x)=\\dfrac{x^{2}-2x-1}{(x-1)^{2}}\\)。 · Thus \\(f'(x)=\\dfrac{x^{2}-2x-1}{(x-1)^{2}}\\).",
        solutionLatex: "f'(x)=\\dfrac{x^{2}-2x-1}{(x-1)^{2}}"
      },
      {
        title: "例 3 · 三角乘积 · Trigonometric Product",
        prompt: "设 \\(f(x)=x\\sin x\\)，求 \\(f'\\left(\\dfrac{\\pi}{2}\\right)\\)。 · Let \\(f(x)=x\\sin x\\). Find \\(f'\\left(\\dfrac{\\pi}{2}\\right)\\).",
        steps: [
          "\\(f'=\\sin x+x\\cos x\\)。 · Differentiate the product: \\(f'=\\sin x+x\\cos x\\).",
          "代入 \\(x=\\dfrac{\\pi}{2}\\)：\\(\\sin\\dfrac{\\pi}{2}+\\dfrac{\\pi}{2}\\cos\\dfrac{\\pi}{2}=1+0\\)。 · Substitute \\(x=\\dfrac{\\pi}{2}\\): \\(\\sin\\dfrac{\\pi}{2}+\\dfrac{\\pi}{2}\\cos\\dfrac{\\pi}{2}=1+0\\)."
        ],
        solution: "\\(f'\\left(\\dfrac{\\pi}{2}\\right)=1\\)。 · Therefore \\(f'\\left(\\dfrac{\\pi}{2}\\right)=1\\).",
        solutionLatex: "f'\\left(\\dfrac{\\pi}{2}\\right)=1"
      }
    ],
    examTips: [
      "CED Unit 2：导数法则 · CED Unit 2: Derivative rules",
      "先识别“乘积/商”结构，再套法则 · First identify the product or quotient structure, then apply the rule.",
      "商法则分子顺序用口诀“下乘上导 − 上乘下导” · For the quotient numerator, use “low d-high minus high d-low.”",
      "求导后检查能否因式分解或约分 · After differentiating, check whether the result factors or simplifies."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u2",
        code: "2.5",
        title: "幂函数导数 · Derivatives of Power Functions",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u2",
        code: "2.6",
        title: "常数倍与和差 · Constant Multiples and Sums/Differences",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u2",
        code: "2.9",
        title: "商法则 · The Quotient Rule",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u3",
        code: "3.1",
        title: "链式法则 · The Chain Rule",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "积法则的直观 · Intuition for the product rule",
      "商法则的推导 · Deriving the quotient rule",
      "常数倍与和差 · Constant multiples and sums/differences",
      "有理函数求导 · Differentiating rational functions",
      "与其他法则组合 · Combining with other rules"
    ],
    checks: [
      "为什么 \\((uv)'\\neq u'v'\\)，而要用积法则 \\((uv)'=u'v+uv'\\)？ · Why is \\((uv)'\\neq u'v'\\), and why must we use the product rule \\((uv)'=u'v+uv'\\)?",
      "商法则的分母为什么是平方？ · Why is the denominator in the quotient rule squared?",
      "如何用积法则推出商法则？ · How can the quotient rule be derived from the product rule?"
    ],
    summary: "积法则两项相加，商法则分母平方、分子交叉相减；先识别结构再求导，最后化简。 · The product rule adds two terms, while the quotient rule has a squared denominator and a cross-subtracted numerator; identify the structure first, differentiate, then simplify."
  },
  'math/calc-u3/3.2': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能对隐式方程逐项求导，并把 \\(y\\) 看作 \\(x\\) 的函数。 · Differentiate an implicit equation term by term while treating \\(y\\) as a function of \\(x\\).",
      "能解出 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)，并求隐曲线在给定点的切线。 · Solve for \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) and find the tangent line to an implicit curve at a given point.",
      "能识别把 \\(y\\) 当常数等常见误用并纠正。 · Identify and correct common errors such as treating \\(y\\) as a constant."
    ],
    essentialKnowledge: [
      "\\(y\\) 是 \\(x\\) 的函数，不是常数 · \\(y\\) is a function of \\(x\\), not a constant.",
      "每一项都要对 \\(x\\) 求导 · Differentiate every term with respect to \\(x\\).",
      "把 \\(y'\\) 当作未知量解方程 · Treat \\(y'\\) as an unknown and solve the resulting equation.",
      "圆/椭圆/双曲线的切线常用隐函数求导 · Tangents to circles, ellipses, and hyperbolas are often found by implicit differentiation.",
      "竖直切线对应 \\(F_y=0\\) · A vertical tangent corresponds to \\(F_y=0\\)."
    ],
    connections: [
      "先修：3.1 链式法则 · Prerequisite: 3.1 The chain rule.",
      "相关：3.3 反函数导数 · Related: 3.3 Derivatives of inverse functions.",
      "应用：4.4 相关变化率 · Application: 4.4 Related rates."
    ],
    definition: "隐函数求导用于方程 \\(F(x,y)=0\\) 没有显式解出 \\(y\\) 的情形。把 \\(y\\) 看作 \\(x\\) 的可导函数，对方程两边关于 \\(x\\) 求导（遇到 \\(y\\) 时用链式法则乘 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)），再解出 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。若 \\(F_y\\neq0\\)，也可写 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\dfrac{F_x}{F_y}\\)。 · Implicit differentiation applies when an equation \\(F(x,y)=0\\) does not explicitly solve for \\(y\\). Treat \\(y\\) as a differentiable function of \\(x\\), differentiate both sides with respect to \\(x\\) (multiplying by \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) whenever a \\(y\\) term is differentiated), then solve for \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\). If \\(F_y\\neq0\\), one may also write \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\dfrac{F_x}{F_y}\\).",
    intuition: "隐函数求导不要求先解出 \\(y\\)：把 \\(y\\) 当作 \\(x\\) 的函数，边求导边记录 \\(y'\\)，最后把 \\(y'\\) 解出来。 · Implicit differentiation does not require solving for \\(y\\) first: treat \\(y\\) as a function of \\(x\\), differentiate while recording \\(y'\\), then solve for \\(y'\\).",
    intuitionDetailed: "圆 \\(x^{2}+y^{2}=25\\) 的切线斜率随点变化：\\(y'=-\\dfrac{x}{y}\\)。在 \\((3,4)\\) 处斜率为 \\(-\\dfrac{3}{4}\\)，在 \\((3,-4)\\) 处为 \\(+\\dfrac{3}{4}\\)。求导后要把点的坐标代入，而不是先代入再求导。 · The tangent slope of the circle \\(x^{2}+y^{2}=25\\) varies from point to point: \\(y'=-\\dfrac{x}{y}\\). At \\((3,4)\\) the slope is \\(-\\dfrac{3}{4}\\), and at \\((3,-4)\\) it is \\(+\\dfrac{3}{4}\\). Substitute the point coordinates after differentiating, not before.",
    formulas: [
      {
        latex: "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[y^{n}\\right]=ny^{n-1}\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}",
        note: "对 \\(y\\) 的幂用链式法则。 · Use the chain rule for powers of \\(y\\)."
      },
      {
        latex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\dfrac{F_x}{F_y}",
        note: "隐函数定理形式（\\(F_y\\neq0\\)）。 · Implicit-function theorem form (\\(F_y\\neq0\\))."
      },
      {
        latex: "y-y_0=y'(x_0)(x-x_0)",
        note: "隐曲线在点 \\((x_0,y_0)\\) 的切线。 · Tangent to an implicit curve at \\((x_0,y_0)\\)."
      }
    ],
    conditions: [
      "\\(y\\) 在讨论点附近是 \\(x\\) 的可导函数 · \\(y\\) is a differentiable function of \\(x\\) near the point in question.",
      "方程两边对同一变量求导，遇到 \\(y\\) 要乘 \\(y'\\) · Differentiate both sides with respect to the same variable; each \\(y\\) term produces a factor of \\(y'\\).",
      "隐函数定理形式要求 \\(F_y\\neq0\\) · The implicit-function theorem form requires \\(F_y\\neq0\\).",
      "先求导再代入点的坐标 · Differentiate first, then substitute the point coordinates.",
      "切线斜率可能不存在（竖直切线，\\(F_y=0\\)） · The tangent slope may fail to exist (vertical tangent, \\(F_y=0\\))."
    ],
    keyPoints: [
      "\\(y\\) 是 \\(x\\) 的函数，不是常数 · \\(y\\) is a function of \\(x\\), not a constant.",
      "每一项都要对 \\(x\\) 求导 · Differentiate every term with respect to \\(x\\).",
      "把 \\(y'\\) 当作未知量解方程 · Treat \\(y'\\) as an unknown and solve the equation.",
      "圆/椭圆/双曲线的切线常用隐函数求导 · Tangents to circles, ellipses, and hyperbolas are often found by implicit differentiation.",
      "竖直切线对应 \\(F_y=0\\) · A vertical tangent corresponds to \\(F_y=0\\)."
    ],
    misconceptions: [
      "把 \\(y\\) 当常数，导致 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y^{2})=0\\) · Treating \\(y\\) as a constant, so that \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y^{2})=0\\).",
      "漏掉 \\(y\\) 项后面的 \\(y'\\) · Omitting the factor \\(y'\\) after differentiating a \\(y\\) term.",
      "先代入点坐标再求导（应先求导） · Substituting the point coordinates before differentiating (differentiate first).",
      "解 \\(y'\\) 时符号或代数出错 · Making a sign or algebra error when solving for \\(y'\\).",
      "在 \\(F_y=0\\) 处仍强行写 \\(y'=-\\dfrac{F_x}{F_y}\\) · Forcing \\(y'=-\\dfrac{F_x}{F_y}\\) at a point where \\(F_y=0\\)."
    ],
    examples: [
      {
        title: "例 1 · 圆 · Circle",
        prompt: "曲线 \\(x^{2}+y^{2}=25\\)。求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 及在 \\((3,4)\\) 处的切线方程。 · For the curve \\(x^{2}+y^{2}=25\\), find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) and the tangent line at \\((3,4)\\).",
        steps: [
          "两边对 \\(x\\) 求导：\\(2x+2yy'=0\\)。 · Differentiate both sides with respect to \\(x\\): \\(2x+2yy'=0\\).",
          "\\(y'=-\\dfrac{x}{y}\\)；在 \\((3,4)\\) 处 \\(y'=-\\dfrac{3}{4}\\)。 · \\(y'=-\\dfrac{x}{y}\\); at \\((3,4)\\), \\(y'=-\\dfrac{3}{4}\\).",
          "切线：\\(y-4=-\\dfrac{3}{4}(x-3)\\)。 · Tangent: \\(y-4=-\\dfrac{3}{4}(x-3)\\)."
        ],
        solution: "\\(y'=-\\dfrac{x}{y}\\)；切线 \\(y-4=-\\dfrac{3}{4}(x-3)\\)。 · \\(y'=-\\dfrac{x}{y}\\); the tangent is \\(y-4=-\\dfrac{3}{4}(x-3)\\).",
        solutionLatex: "y'=-\\dfrac{x}{y}"
      },
      {
        title: "例 2 · 三次曲线 · Cubic Curve",
        prompt: "曲线 \\(x^{3}+y^{3}=6xy\\)。求在 \\((3,3)\\) 处的 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。 · For the curve \\(x^{3}+y^{3}=6xy\\), find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) at \\((3,3)\\).",
        steps: [
          "求导：\\(3x^{2}+3y^{2}y'=6y+6xy\\)。 · Differentiate: \\(3x^{2}+3y^{2}y'=6y+6xy'\\).",
          "整理：\\((3y^{2}-6x)y'=6y-3x^{2}\\)。 · Rearrange: \\((3y^{2}-6x)y'=6y-3x^{2}\\).",
          "代入 \\((3,3)\\)：\\((27-18)y'=18-27\\Rightarrow y'=-1\\)。 · Substitute \\((3,3)\\): \\((27-18)y'=18-27\\), so \\(y'=-1\\)."
        ],
        solution: "\\(y'=-1\\)。 · The slope is \\(y'=-1\\).",
        solutionLatex: "y'=-1"
      },
      {
        title: "例 3 · 混合项 · Mixed Term",
        prompt: "曲线 \\(x^{2}+xy+y^{2}=7\\)。求在 \\((1,2)\\) 处的切线斜率。 · For the curve \\(x^{2}+xy+y^{2}=7\\), find the tangent slope at \\((1,2)\\).",
        steps: [
          "求导：\\(2x+y+xy'+2yy'=0\\)。 · Differentiate: \\(2x+y+xy'+2yy'=0\\).",
          "\\(y'=-\\dfrac{2x+y}{x+2y}\\)。 · Solve for the slope: \\(y'=-\\dfrac{2x+y}{x+2y}\\).",
          "代入 \\((1,2)\\)：\\(y'=-\\dfrac{4}{5}\\)。 · Substitute \\((1,2)\\): \\(y'=-\\dfrac{4}{5}\\)."
        ],
        solution: "\\(y'=-\\dfrac{4}{5}\\)。 · The tangent slope is \\(y'=-\\dfrac{4}{5}\\).",
        solutionLatex: "y'=-\\dfrac{4}{5}"
      }
    ],
    examTips: [
      "CED Unit 3：复合、隐函数与反函数 · CED Unit 3: Composite, implicit, and inverse functions",
      "每一项都写 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\)，遇到 \\(y\\) 补 \\(y'\\) · Apply \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\) to every term and add a factor of \\(y'\\) whenever a \\(y\\) is differentiated.",
      "先求导，再代入点；最后解出 \\(y'\\) · Differentiate first, then substitute the point; finally solve for \\(y'\\).",
      "切线题用点斜式，斜率由隐函数求导给出 · For tangent-line problems, use point-slope form with the slope from implicit differentiation."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u3",
        code: "3.1",
        title: "链式法则 · The Chain Rule",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u3",
        code: "3.3",
        title: "反函数导数 · Derivatives of Inverse Functions",
        relation: "相关 · Related"
      },
      {
        subject: "math",
        chapterId: "calc-u4",
        code: "4.4",
        title: "相关变化率 · Related Rates",
        relation: "应用 · Application"
      }
    ],
    development: [
      "把 \\(y\\) 看作函数 · Treating \\(y\\) as a function",
      "逐项求导 · Differentiating term by term",
      "解出 \\(y'\\) · Solving for \\(y'\\)",
      "切线方程 · Tangent-line equations",
      "隐函数定理形式 · Implicit-function theorem form"
    ],
    checks: [
      "为什么 \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y^{2})=2yy'\\)？ · Why is \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y^{2})=2yy'\\)?",
      "隐函数求导为什么要先求导再代点？ · Why differentiate before substituting the point in implicit differentiation?",
      "竖直切线对应什么条件？ · What condition corresponds to a vertical tangent?"
    ],
    summary: "隐函数求导把 \\(y\\) 当作 \\(x\\) 的函数，逐项求导后解出 \\(y'\\)；切线斜率与 \\(-\\dfrac{F_x}{F_y}\\) 等价。 · Implicit differentiation treats \\(y\\) as a function of \\(x\\), differentiates term by term, and solves for \\(y'\\); the tangent slope is equivalent to \\(-\\dfrac{F_x}{F_y}\\)."
  },
  'math/calc-u4/4.4': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能建立两个或多个随时间变化的量之间的关系，并对时间求导。 · Set up relationships among two or more quantities that change with time and differentiate with respect to time.",
      "能用链式法则求解膨胀圆、滑梯与注水容器等模型。 · Use the chain rule to solve models such as an expanding circle, a sliding ladder, and a filling tank.",
      "能识别“先代入瞬时值再求导”等常见误用并纠正。 · Identify and correct common errors such as substituting instantaneous values before differentiating."
    ],
    essentialKnowledge: [
      "先写关系式，再对 \\(t\\) 求导 · Write the relationship first, then differentiate with respect to \\(t\\).",
      "不要把瞬时值先代入 · Do not substitute instantaneous values first.",
      "负变化率表示减小，不是错误 · A negative rate means the quantity is decreasing, not that the answer is wrong.",
      "注水问题常先消去半径，写成 \\(V(h)\\) · In filling problems, eliminate the radius first and write \\(V(h)\\).",
      "答案要带单位并说明方向 · Include units in the answer and state the direction of change."
    ],
    connections: [
      "先修：4.3 变化率与单位 · Prerequisite: 4.3 Rates of change and units.",
      "后续：4.5 相关变化率求解 · Follow-up: 4.5 Solving related-rate problems.",
      "先修：3.1 链式法则 · Prerequisite: 3.1 The chain rule."
    ],
    definition: "相关变化率研究两个或多个随时间变化的量之间的变化率关系。先用几何/物理关系把量联系起来，再对时间 \\(t\\) 求导（链式法则），最后代入某一瞬间的数值。典型模型：膨胀圆、滑梯、注水锥、气球、影子。 · Related rates study how the rates of change of two or more quantities that vary with time are related. First relate the quantities with a geometric or physical equation, then differentiate with respect to time \\(t\\) using the chain rule, and finally substitute the instantaneous values. Typical models include an expanding circle, a sliding ladder, a filling cone, a balloon, and a shadow.",
    intuition: "量之间的关系是“静态”的，变化率之间的关系是“动态”的；对时间求导把两者连接起来。 · The relationship among the quantities is static, while the relationship among their rates is dynamic; differentiating with respect to time connects the two.",
    intuitionDetailed: "关键是“先关系、后求导、再代值”：如果先代入瞬时数值再求导，所有导数都会变成零。变化率可正可负，负号表示该量在减小；单位要跟随变量（如 \\(\\mathrm{cm^{2}/s}\\)）。 · The key order is “relationship, then derivative, then values”: if instantaneous values are substituted before differentiating, every derivative becomes zero. A rate may be positive or negative; a negative sign means the quantity is decreasing. Units must follow the variables (for example, \\(\\mathrm{cm^{2}/s}\\)).",
    formulas: [
      {
        latex: "\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
        note: "圆面积与半径的变化率。 · Related rates for the area and radius of a circle."
      },
      {
        latex: "\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}=4\\pi r^{2}\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}",
        note: "球体积与半径的变化率。 · Related rates for the volume and radius of a sphere."
      },
      {
        latex: "x^{2}+y^{2}=L^{2}\\Rightarrow x\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}+y\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0",
        note: "滑梯模型（\\(L\\) 恒定）。 · Sliding-ladder model (\\(L\\) constant)."
      },
      {
        latex: "\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}=\\dfrac{\\mathrm{d}V}{\\mathrm{d}h}\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}",
        note: "注水容器：先写 \\(V(h)\\)，再对时间求导。 · Filling a container: write \\(V(h)\\) first, then differentiate with respect to time."
      }
    ],
    conditions: [
      "几何/物理关系在讨论瞬间成立 · The geometric or physical relationship holds at the instant in question.",
      "先对时间求导，再代入瞬时数值 · Differentiate with respect to time before substituting instantaneous values.",
      "所有长度、面积、体积单位一致 · All length, area, and volume units must be consistent.",
      "变化率的正负号要结合“增大/减小”解释 · Interpret the sign of a rate in terms of increasing or decreasing.",
      "相似三角形或体积公式中的比例关系要先化简 · Simplify proportional relationships from similar triangles or volume formulas first."
    ],
    keyPoints: [
      "先写关系式，再对 \\(t\\) 求导 · Write the relationship first, then differentiate with respect to \\(t\\).",
      "不要把瞬时值先代入 · Do not substitute instantaneous values first.",
      "负变化率表示减小，不是错误 · A negative rate means the quantity is decreasing, not that the answer is wrong.",
      "注水问题常先消去半径，写成 \\(V(h)\\) · In filling problems, eliminate the radius first and write \\(V(h)\\).",
      "答案要带单位并说明方向 · Include units in the answer and state the direction of change."
    ],
    misconceptions: [
      "先代入瞬时半径再求导，得到零 · Substituting the instantaneous radius before differentiating, which gives zero.",
      "漏掉链式法则中的 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}\\) · Omitting the chain-rule factor \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}\\).",
      "把“半径增加”与“面积增加”混为一谈 · Confusing an increasing radius with an increasing area.",
      "注水锥问题不消去半径，导致两个未知变化率 · Not eliminating the radius in a filling-cone problem, leaving two unknown rates.",
      "忽略负号或单位 · Ignoring negative signs or units."
    ],
    examples: [
      {
        title: "例 1 · 膨胀圆 · Expanding Circle",
        prompt: "圆的半径以 \\(2.0\\,\\mathrm{cm/s}\\) 增大。当 \\(r=5.0\\,\\mathrm{cm}\\) 时，面积变化率是多少？ · The radius of a circle increases at \\(2.0\\,\\mathrm{cm/s}\\). At what rate is the area changing when \\(r=5.0\\,\\mathrm{cm}\\)?",
        steps: [
          "\\(A=\\pi r^{2}\\)。 · The area of a circle is \\(A=\\pi r^{2}\\).",
          "对 \\(t\\) 求导：\\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}\\)。 · Differentiate with respect to \\(t\\): \\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=2\\pi r\\dfrac{\\mathrm{d}r}{\\mathrm{d}t}\\).",
          "代入：\\(2\\pi(5.0)(2.0)=20\\pi\\,\\mathrm{cm^{2}/s}\\)。 · Substitute: \\(2\\pi(5.0)(2.0)=20\\pi\\,\\mathrm{cm^{2}/s}\\)."
        ],
        solution: "\\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=20\\pi\\approx 62.8\\,\\mathrm{cm^{2}/s}\\)。 · The area is increasing at \\(\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=20\\pi\\approx62.8\\,\\mathrm{cm^{2}/s}\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=20\\pi\\,\\mathrm{cm^{2}/s}"
      },
      {
        title: "例 2 · 滑梯 · Sliding Ladder",
        prompt: "\\(10\\,\\mathrm{ft}\\) 长的梯子靠在竖直墙上，底端以 \\(1.0\\,\\mathrm{ft/s}\\) 离墙滑动。当底端距墙 \\(6.0\\,\\mathrm{ft}\\) 时，顶端下滑多快？ · A \\(10\\,\\mathrm{ft}\\) ladder leans against a vertical wall, and its base slides away from the wall at \\(1.0\\,\\mathrm{ft/s}\\). How fast is the top sliding down when the base is \\(6.0\\,\\mathrm{ft}\\) from the wall?",
        steps: [
          "\\(x^{2}+y^{2}=100\\)。 · By the Pythagorean theorem, \\(x^{2}+y^{2}=100\\).",
          "当 \\(x=6\\) 时 \\(y=8\\)；求导：\\(2x\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}+2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\)。 · When \\(x=6\\), \\(y=8\\); differentiate: \\(2x\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}+2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\).",
          "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=-\\dfrac{x}{y}\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=-\\dfrac{6}{8}(1.0)=-0.75\\,\\mathrm{ft/s}\\)。 · Substitute and solve: \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=-\\dfrac{x}{y}\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=-\\dfrac{6}{8}(1.0)=-0.75\\,\\mathrm{ft/s}\\)."
        ],
        solution: "顶端以 \\(0.75\\,\\mathrm{ft/s}\\) 下滑（负号表示 \\(y\\) 减小）。 · The top slides down at \\(0.75\\,\\mathrm{ft/s}\\) (the negative sign means \\(y\\) is decreasing).",
        solutionLatex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=-0.75\\,\\mathrm{ft/s}"
      },
      {
        title: "例 3 · 注水锥 · Filling Cone",
        prompt: "倒置圆锥形容器顶部半径 \\(4.0\\,\\mathrm{m}\\)、高 \\(8.0\\,\\mathrm{m}\\)，以 \\(2.0\\,\\mathrm{m^{3}/min}\\) 注水。当水深 \\(3.0\\,\\mathrm{m}\\) 时，水面上升多快？ · An inverted conical tank has top radius \\(4.0\\,\\mathrm{m}\\) and height \\(8.0\\,\\mathrm{m}\\), and water enters at \\(2.0\\,\\mathrm{m^{3}/min}\\). How fast is the water level rising when the depth is \\(3.0\\,\\mathrm{m}\\)?",
        steps: [
          "相似三角形：\\(\\dfrac{r}{h}=\\dfrac{4}{8}=\\dfrac{1}{2}\\Rightarrow r=\\dfrac{h}{2}\\)。 · Similar triangles: \\(\\dfrac{r}{h}=\\dfrac{4}{8}=\\dfrac{1}{2}\\), so \\(r=\\dfrac{h}{2}\\).",
          "\\(V=\\dfrac{1}{3}\\pi r^{2}h=\\dfrac{\\pi h^{3}}{12}\\)。 · Express the volume in terms of \\(h\\): \\(V=\\dfrac{1}{3}\\pi r^{2}h=\\dfrac{\\pi h^{3}}{12}\\).",
          "\\(\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}=\\dfrac{\\pi h^{2}}{4}\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}\\Rightarrow 2.0=\\dfrac{9\\pi}{4}\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}\\)。 · Differentiate: \\(\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}=\\dfrac{\\pi h^{2}}{4}\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}\\), so \\(2.0=\\dfrac{9\\pi}{4}\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}\\)."
        ],
        solution: "\\(\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=\\dfrac{8}{9\\pi}\\approx 0.283\\,\\mathrm{m/min}\\)。 · The water level rises at \\(\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=\\dfrac{8}{9\\pi}\\approx0.283\\,\\mathrm{m/min}\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=\\dfrac{8}{9\\pi}\\,\\mathrm{m/min}"
      }
    ],
    examTips: [
      "CED Unit 4：情境应用 · CED Unit 4: Contextual applications",
      "先画图并标出变量，写关系式 · Draw a diagram, label the variables, and write the relationship first.",
      "对时间求导后再代入瞬时值 · Differentiate with respect to time before substituting instantaneous values.",
      "注水/气球问题先消去多余变量 · For filling or balloon problems, eliminate extra variables first.",
      "答案写单位，并解释负号 · Include units and explain the meaning of any negative sign."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u4",
        code: "4.3",
        title: "变化率与单位 · Rates of Change and Units",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u4",
        code: "4.5",
        title: "相关变化率求解 · Solving Related-Rate Problems",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u3",
        code: "3.1",
        title: "链式法则 · The Chain Rule",
        relation: "先修 · Prerequisite"
      }
    ],
    development: [
      "变量与关系式 · Variables and relationships",
      "对时间求导 · Differentiating with respect to time",
      "代入瞬时值 · Substituting instantaneous values",
      "相似三角形模型 · Similar-triangle models",
      "注水与气球模型 · Filling and balloon models"
    ],
    checks: [
      "为什么不能先代入瞬时值再求导？ · Why can you not substitute instantaneous values before differentiating?",
      "滑梯问题中负号代表什么？ · What does the negative sign mean in the sliding-ladder problem?",
      "注水锥问题如何消去半径？ · How is the radius eliminated in the filling-cone problem?"
    ],
    summary: "相关变化率先写静态关系，再对时间求导，最后代入瞬时值；负号表示减小，单位要跟随变量。 · Related rates first write a static relationship, then differentiate with respect to time, and finally substitute instantaneous values; a negative sign means decrease, and units follow the variables."
  },
  'math/calc-u4/4.7': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能判断极限是否为洛必达法则适用的未定式。 · Determine whether a limit is an indeterminate form to which L’Hôpital’s rule applies.",
      "能对 \\(\\dfrac{0}{0}\\) 或 \\(\\dfrac{\\infty}{\\infty}\\) 型使用洛必达法则并化简。 · Apply L’Hôpital’s rule to \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\) forms and simplify.",
      "能识别并纠正对非未定式使用洛必达等常见误用。 · Identify and correct common errors such as applying L’Hôpital’s rule to a non-indeterminate form."
    ],
    essentialKnowledge: [
      "先代入判断型，再决定是否用 · Substitute first to identify the form, then decide whether to use the rule.",
      "不是所有极限都能用洛必达 · Not every limit can be solved by L’Hôpital’s rule.",
      "\\(0\\cdot\\infty\\) 可改写为 \\(\\dfrac{0}{\\infty^{-1}}\\) · Rewrite a \\(0\\cdot\\infty\\) product as a quotient so the rule can apply.",
      "幂指型取对数 · For power-exponential forms, take logarithms.",
      "分母趋于 0 而分子不趋于 0 时不是未定式 · If the denominator approaches 0 while the numerator does not, the limit is not an indeterminate form."
    ],
    connections: [
      "先修：1.2 极限定义与记号 · Prerequisite: 1.2 Limit definition and notation.",
      "先修：2.2 导数定义 · Prerequisite: 2.2 Definition of the derivative.",
      "相关：5.1 中值定理 · Related: 5.1 Mean value theorem."
    ],
    definition: "洛必达法则处理 \\(\\dfrac{0}{0}\\) 或 \\(\\dfrac{\\infty}{\\infty}\\) 型未定式：若 \\(f,g\\) 在 \\(a\\) 附近可导、\\(g'(x)\\neq0\\)，且 \\(\\lim\\dfrac{f'}{g'}\\) 存在（或为 \\(\\pm\\infty\\)），则 \\(\\lim_{x\\to a}\\dfrac{f(x)}{g(x)}=\\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}\\)。其他未定式（\\(0\\cdot\\infty\\)、\\(\\infty-\\infty\\)、\\(1^{\\infty}\\)、\\(0^{0}\\)、\\(\\infty^{0}\\)）要先变形或取对数。 · L’Hôpital’s rule handles indeterminate forms \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\): if \\(f\\) and \\(g\\) are differentiable near \\(a\\), \\(g'(x)\\neq0\\), and \\(\\lim\\dfrac{f'}{g'}\\) exists (or is \\(\\pm\\infty\\)), then \\(\\lim_{x\\to a}\\dfrac{f(x)}{g(x)}=\\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}\\). Other indeterminate forms (\\(0\\cdot\\infty\\), \\(\\infty-\\infty\\), \\(1^{\\infty}\\), \\(0^{0}\\), \\(\\infty^{0}\\)) must first be rewritten or logged.",
    intuition: "在未定式里，分子分母都趋向 0 或无穷，比较它们的“变化速度”就能决定比值；洛必达法则比较的正是导数。 · In an indeterminate form, both numerator and denominator approach 0 or infinity; comparing their rates of change determines the ratio, and L’Hôpital’s rule compares derivatives.",
    intuitionDetailed: "每次使用前都要重新检查是否为 \\(\\dfrac{0}{0}\\) 或 \\(\\dfrac{\\infty}{\\infty}\\)。若 \\(\\dfrac{f'}{g'}\\) 的极限不存在但振荡（如 \\(\\dfrac{x+\\sin x}{x}\\) 当 \\(x\\to\\infty\\)），不能反推原极限不存在，只能换方法。 · Recheck whether the form is \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\) before each use. If the limit of \\(\\dfrac{f'}{g'}\\) does not exist because it oscillates (for example, \\(\\dfrac{x+\\sin x}{x}\\) as \\(x\\to\\infty\\)), you cannot conclude that the original limit does not exist; use another method.",
    formulas: [
      {
        latex: "\\lim_{x\\to a}\\dfrac{f(x)}{g(x)}=\\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}",
        note: "仅适用于 \\(\\dfrac{0}{0}\\) 或 \\(\\dfrac{\\infty}{\\infty}\\)。 · Only applies to \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\)."
      },
      {
        latex: "\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1",
        note: "经典应用。 · Classic application."
      },
      {
        latex: "\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}=0",
        note: "对数增长慢于幂函数。 · Logarithmic growth is slower than power growth."
      }
    ],
    conditions: [
      "原极限必须是 \\(\\dfrac{0}{0}\\) 或 \\(\\dfrac{\\infty}{\\infty}\\) 型 · The original limit must be of the form \\(\\dfrac{0}{0}\\) or \\(\\dfrac{\\infty}{\\infty}\\).",
      "\\(f,g\\) 在去心邻域可导，且 \\(g'(x)\\neq0\\) · \\(f\\) and \\(g\\) are differentiable on a punctured neighborhood, and \\(g'(x)\\neq0\\).",
      "\\(\\lim\\dfrac{f'}{g'}\\) 存在或为 \\(\\pm\\infty\\)。 · \\(\\lim\\dfrac{f'}{g'}\\) exists or is \\(\\pm\\infty\\).",
      "每用一次都要重新检查型 · Recheck the form after each application.",
      "其他未定式先改写为分数或取对数 · Rewrite other indeterminate forms as quotients or take logarithms first."
    ],
    keyPoints: [
      "先代入判断型，再决定是否用 · Substitute first to identify the form, then decide whether to use the rule.",
      "不是所有极限都能用洛必达 · Not every limit can be solved by L’Hôpital’s rule.",
      "\\(0\\cdot\\infty\\) 可改写为 \\(\\dfrac{0}{\\infty^{-1}}\\) · A \\(0\\cdot\\infty\\) product can be rewritten as a quotient.",
      "幂指型取对数 · For power-exponential forms, take logarithms.",
      "分母趋于 0 而分子不趋于 0 时不是未定式 · If the denominator approaches 0 while the numerator does not, the limit is not indeterminate."
    ],
    misconceptions: [
      "对 \\(\\dfrac{2}{0}\\) 或 \\(\\dfrac{1}{0}\\) 使用洛必达 · Applying L’Hôpital’s rule to \\(\\dfrac{2}{0}\\) or \\(\\dfrac{1}{0}\\).",
      "忘记每次使用前重新检查型 · Forgetting to recheck the form before each use.",
      "把 \\(\\lim\\dfrac{f'}{g'}\\) 不存在直接当作原极限不存在 · Treating a nonexistent \\(\\lim\\dfrac{f'}{g'}\\) as proof that the original limit does not exist.",
      "对 \\(0\\cdot\\infty\\) 直接求导 · Differentiating a \\(0\\cdot\\infty\\) product directly.",
      "幂指型不取对数就套用 · Applying the rule to a power-exponential form without taking logarithms."
    ],
    examples: [
      {
        title: "例 1 · 基本型 · Basic Form",
        prompt: "求 \\(\\lim_{x\\to0}\\dfrac{\\sin x}{x}\\)。 · Find \\(\\lim_{x\\to0}\\dfrac{\\sin x}{x}\\).",
        steps: [
          "代入得 \\(\\dfrac{0}{0}\\)，可用洛必达。 · Substitution gives \\(\\dfrac{0}{0}\\), so L’Hôpital’s rule applies.",
          "\\(\\lim\\dfrac{\\cos x}{1}=\\cos0=1\\)。 · Differentiate numerator and denominator: \\(\\lim\\dfrac{\\cos x}{1}=\\cos0=1\\)."
        ],
        solution: "极限为 \\(1\\)。 · The limit is \\(1\\).",
        solutionLatex: "\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1"
      },
      {
        title: "例 2 · 无穷比无穷 · Infinity over Infinity",
        prompt: "求 \\(\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}\\)。 · Find \\(\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}\\).",
        steps: [
          "代入得 \\(\\dfrac{\\infty}{\\infty}\\)。 · Substitution gives \\(\\dfrac{\\infty}{\\infty}\\).",
          "求导：\\(\\dfrac{\\dfrac{1}{x}}{1}=\\dfrac{1}{x}\\)。 · Differentiate: \\(\\dfrac{\\dfrac{1}{x}}{1}=\\dfrac{1}{x}\\).",
          "\\(x\\to\\infty\\) 时 \\(\\dfrac{1}{x}\\to0\\)。 · As \\(x\\to\\infty\\), \\(\\dfrac{1}{x}\\to0\\)."
        ],
        solution: "极限为 \\(0\\)。 · The limit is \\(0\\).",
        solutionLatex: "\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}=0"
      },
      {
        title: "例 3 · 乘积转商 · Product to Quotient",
        prompt: "求 \\(\\lim_{x\\to0^{+}}x\\ln x\\)。 · Find \\(\\lim_{x\\to0^{+}}x\\ln x\\).",
        steps: [
          "这是 \\(0\\cdot(-\\infty)\\) 型，改写为 \\(\\dfrac{\\ln x}{\\dfrac{1}{x}}\\)。 · This is a \\(0\\cdot(-\\infty)\\) form; rewrite it as \\(\\dfrac{\\ln x}{\\dfrac{1}{x}}\\).",
          "现为 \\(\\dfrac{-\\infty}{\\infty}\\)，求导：\\(\\dfrac{\\dfrac{1}{x}}{-\\dfrac{1}{x^{2}}}=-x\\)。 · Now it is \\(\\dfrac{-\\infty}{\\infty}\\); differentiate: \\(\\dfrac{\\dfrac{1}{x}}{-\\dfrac{1}{x^{2}}}=-x\\).",
          "\\(x\\to0^{+}\\) 时 \\(-x\\to0\\)。 · As \\(x\\to0^{+}\\), \\(-x\\to0\\)."
        ],
        solution: "极限为 \\(0\\)。 · The limit is \\(0\\).",
        solutionLatex: "\\lim_{x\\to0^{+}}x\\ln x=0"
      }
    ],
    examTips: [
      "CED Unit 4：洛必达法则 · CED Unit 4: L’Hôpital’s rule",
      "先代入判断型，再决定是否使用 · Substitute first to identify the form, then decide whether to use the rule.",
      "每步都检查是否仍为未定式 · Check after every step whether the form is still indeterminate.",
      "幂指型先取对数，再求极限 · For power-exponential forms, take logarithms first, then find the limit.",
      "分母为 0、分子非 0 时直接判断无穷极限 · When the denominator is 0 and the numerator is not, determine the infinite limit directly."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u1",
        code: "1.2",
        title: "极限定义与记号 · Limit Definition and Notation",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u2",
        code: "2.2",
        title: "导数定义 · Definition of the Derivative",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.1",
        title: "中值定理 · Mean Value Theorem",
        relation: "相关 · Related"
      }
    ],
    development: [
      "未定式的类型 · Types of indeterminate forms",
      "洛必达法则的条件 · Conditions for L’Hôpital’s rule",
      "重复使用 · Repeated use",
      "乘积/差/幂指型变形 · Rewriting products, differences, and power-exponential forms",
      "失效情形 · When the rule fails"
    ],
    checks: [
      "洛必达法则适用于哪些型？ · Which indeterminate forms does L’Hôpital’s rule apply to?",
      "为什么每步都要重新检查型？ · Why recheck the form after every step?",
      "\\(0\\cdot\\infty\\) 如何改写？ · 如何改写 \\(0\\cdot\\infty\\) 型？ · How can a \\(0\\cdot\\infty\\) form be rewritten?"
    ],
    summary: "洛必达法则只处理 \\(\\dfrac{0}{0}\\) 与 \\(\\dfrac{\\infty}{\\infty}\\)，通过比较导数极限求比值；其他未定式先变形。 · L’Hôpital’s rule applies only to \\(\\dfrac{0}{0}\\) and \\(\\dfrac{\\infty}{\\infty}\\), comparing derivative limits to find the ratio; rewrite other indeterminate forms first."
  },
  'math/calc-u5/5.1': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能写出罗尔定理与中值定理，并说明各自的条件。 · State Rolle’s theorem and the mean value theorem and explain their conditions.",
      "能验证定理条件并求出满足结论的 \\(c\\)。 · Verify the hypotheses and find the value(s) of \\(c\\) guaranteed by the conclusion.",
      "能识别忽略连续性或可导性等常见误用并纠正。 · Identify and correct common errors such as ignoring continuity or differentiability."
    ],
    essentialKnowledge: [
      "中值定理的几何意义：割线斜率 = 某点切线斜率 · Geometric meaning of the mean value theorem: the secant slope equals the tangent slope at some point.",
      "罗尔定理是中值定理的特例 · Rolle’s theorem is a special case of the mean value theorem.",
      "存在性定理，\\(c\\) 可能不唯一 · It is an existence theorem; \\(c\\) need not be unique.",
      "可导性在开区间、连续性在闭区间 · Differentiability on the open interval and continuity on the closed interval.",
      "常用于证明不等式与函数单调性 · Often used to prove inequalities and monotonicity."
    ],
    connections: [
      "相关：5.2 极值定理 · Related: 5.2 Extreme value theorem.",
      "后续：5.3 增减性 · Follow-up: 5.3 Increasing and decreasing behavior.",
      "后续：5.4 一阶导数检验 · Follow-up: 5.4 First-derivative test."
    ],
    definition: "罗尔定理：若 \\(f\\) 在 \\([a,b]\\) 连续、在 \\((a,b)\\) 可导，且 \\(f(a)=f(b)\\)，则存在 \\(c\\in(a,b)\\) 使 \\(f'(c)=0\\)。中值定理（MVT）：在连续与可导条件下，存在 \\(c\\in(a,b)\\) 使 \\(f'(c)=\\dfrac{f(b)-f(a)}{b-a}\\)，即某点切线平行于割线。 · Rolle’s theorem: if \\(f\\) is continuous on \\([a,b]\\), differentiable on \\((a,b)\\), and \\(f(a)=f(b)\\), then there exists \\(c\\in(a,b)\\) such that \\(f'(c)=0\\). Mean value theorem (MVT): under continuity and differentiability conditions, there exists \\(c\\in(a,b)\\) such that \\(f'(c)=\\dfrac{f(b)-f(a)}{b-a}\\), meaning the tangent at some point is parallel to the secant line.",
    intuition: "中值定理说：一段路程的平均速度，必然在某个瞬间被瞬时速度精确复现。 · The mean value theorem says that the average speed over a trip is exactly reproduced by the instantaneous speed at some moment.",
    intuitionDetailed: "罗尔定理是中值定理的特例（割线水平）。中值定理是“存在性”定理，不给出 \\(c\\) 的公式；它可用来证明 \\(f'>0\\Rightarrow f\\) 递增、\\(f'=0\\Rightarrow f\\) 为常数，以及比较函数值。 · Rolle’s theorem is the special case of the mean value theorem with a horizontal secant. The mean value theorem is an existence theorem and does not give a formula for \\(c\\); it can prove that \\(f'>0\\) implies \\(f\\) is increasing, that \\(f'=0\\) implies \\(f\\) is constant, and can compare function values.",
    formulas: [
      {
        latex: "f'(c)=\\dfrac{f(b)-f(a)}{b-a}",
        note: "中值定理。 · Mean value theorem."
      },
      {
        latex: "f(a)=f(b)\\Rightarrow \\exists c,\\;f'(c)=0",
        note: "罗尔定理。 · Rolle’s theorem."
      },
      {
        latex: "f'(x)>0\\text{ on }I\\Rightarrow f\\text{ 在 }I\\text{ 上递增}",
        note: "中值定理的推论。 · Corollary of the mean value theorem."
      }
    ],
    conditions: [
      "\\(f\\) 在闭区间 \\([a,b]\\) 连续 · \\(f\\) is continuous on the closed interval \\([a,b]\\).",
      "\\(f\\) 在开区间 \\((a,b)\\) 可导 · \\(f\\) is differentiable on the open interval \\((a,b)\\).",
      "\\(c\\) 严格位于 \\((a,b)\\) 内 · \\(c\\) lies strictly inside \\((a,b)\\).",
      "罗尔定理还需 \\(f(a)=f(b)\\) · Rolle’s theorem also requires \\(f(a)=f(b)\\).",
      "中值定理只保证存在，不保证唯一 · The mean value theorem guarantees existence, not uniqueness."
    ],
    keyPoints: [
      "中值定理的几何意义：割线斜率 = 某点切线斜率 · Geometric meaning: the secant slope equals the tangent slope at some point.",
      "罗尔定理是中值定理的特例 · Rolle’s theorem is a special case of the mean value theorem.",
      "存在性定理，\\(c\\) 可能不唯一 · It is an existence theorem; \\(c\\) may not be unique.",
      "可导性在开区间、连续性在闭区间 · Differentiability on the open interval, continuity on the closed interval.",
      "常用于证明不等式与函数单调性 · Often used to prove inequalities and monotonicity."
    ],
    misconceptions: [
      "把中值定理当作“平均速度等于瞬时速度”的恒等式（只保证存在某个 \\(c\\)） · Treating the mean value theorem as the identity “average speed equals instantaneous speed” (it only guarantees some \\(c\\)).",
      "忽略闭区间连续、开区间可导的条件 · Ignoring the conditions of continuity on the closed interval and differentiability on the open interval.",
      "认为 \\(c\\) 一定在端点 · Assuming \\(c\\) must be at an endpoint.",
      "把罗尔定理用于 \\(f(a)\\neq f(b)\\) · Applying Rolle’s theorem when \\(f(a)\\neq f(b)\\).",
      "认为 \\(c\\) 唯一 · Assuming \\(c\\) is unique."
    ],
    examples: [
      {
        title: "例 1 · 抛物线 · Parabola",
        prompt: "对 \\(f(x)=x^{2}\\) 在 \\([1,3]\\) 上验证中值定理，求 \\(c\\)。 · Verify the mean value theorem for \\(f(x)=x^{2}\\) on \\([1,3]\\) and find \\(c\\).",
        steps: [
          "\\(f\\) 连续且可导。 · \\(f\\) is continuous and differentiable.",
          "割线斜率：\\(\\dfrac{9-1}{3-1}=4\\)。 · Secant slope: \\(\\dfrac{9-1}{3-1}=4\\).",
          "\\(f'(c)=2c=4\\Rightarrow c=2\\)，在 \\((1,3)\\) 内。 · \\(f'(c)=2c=4\\), so \\(c=2\\), which lies in \\((1,3)\\)."
        ],
        solution: "\\(c=2\\)。 · Thus \\(c=2\\).",
        solutionLatex: "c=2"
      },
      {
        title: "例 2 · 罗尔定理 · Rolle’s Theorem",
        prompt: "对 \\(f(x)=x^{3}-x\\) 在 \\([-1,1]\\) 上验证罗尔定理，求 \\(c\\)。 · Verify Rolle’s theorem for \\(f(x)=x^{3}-x\\) on \\([-1,1]\\) and find \\(c\\).",
        steps: [
          "\\(f(-1)=f(1)=0\\)，连续且可导。 · \\(f(-1)=f(1)=0\\), and \\(f\\) is continuous and differentiable.",
          "\\(f'(x)=3x^{2}-1=0\\Rightarrow x=\\pm\\dfrac{1}{\\sqrt3}\\)。 · \\(f'(x)=3x^{2}-1=0\\), so \\(x=\\pm\\dfrac{1}{\\sqrt3}\\).",
          "两个值都在 \\((-1,1)\\) 内。 · Both values lie in \\((-1,1)\\)."
        ],
        solution: "\\(c=\\pm\\dfrac{1}{\\sqrt3}\\)。 · The values are \\(c=\\pm\\dfrac{1}{\\sqrt3}\\).",
        solutionLatex: "c=\\pm\\dfrac{1}{\\sqrt3}"
      },
      {
        title: "例 3 · 有理函数 · Rational Function",
        prompt: "对 \\(f(x)=\\dfrac{1}{x}\\) 在 \\([1,4]\\) 上求中值定理中的 \\(c\\)。 · Find the value of \\(c\\) from the mean value theorem for \\(f(x)=\\dfrac{1}{x}\\) on \\([1,4]\\).",
        steps: [
          "割线斜率：\\(\\dfrac{\\dfrac{1}{4}-1}{4-1}=-\\dfrac{1}{4}\\)。 · Secant slope: \\(\\dfrac{\\dfrac{1}{4}-1}{4-1}=-\\dfrac{1}{4}\\).",
          "\\(f'(x)=-\\dfrac{1}{x^{2}}=-\\dfrac{1}{4}\\Rightarrow x=2\\)。 · \\(f'(x)=-\\dfrac{1}{x^{2}}=-\\dfrac{1}{4}\\), so \\(x=2\\).",
          "\\(c=2\\in(1,4)\\)。 · Thus \\(c=2\\), which lies in \\((1,4)\\)."
        ],
        solution: "\\(c=2\\)。 · Thus \\(c=2\\).",
        solutionLatex: "c=2"
      }
    ],
    examTips: [
      "CED Unit 5：解析应用 · CED Unit 5: Analytical applications",
      "先检查连续与可导条件，再写方程 · Check continuity and differentiability first, then write the equation.",
      "中值定理题常要求解出 \\(c\\) 并验证在区间内 · Mean value theorem problems often ask you to solve for \\(c\\) and verify that it lies in the interval.",
      "证明题用“存在 \\(c\\)”而不是“对任意 \\(x\\)” · In proofs, use “there exists \\(c\\)” rather than “for all \\(x\\).”"
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.2",
        title: "极值定理 · Extreme Value Theorem",
        relation: "相关 · Related"
      },
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.3",
        title: "增减性 · Increasing and Decreasing Behavior",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.4",
        title: "一阶导数检验 · First-Derivative Test",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "罗尔定理 · Rolle’s theorem",
      "中值定理 · Mean value theorem",
      "几何意义 · Geometric meaning",
      "存在性与唯一性 · Existence and uniqueness",
      "单调性推论 · Monotonicity corollaries"
    ],
    checks: [
      "中值定理需要哪些条件？ · What conditions does the mean value theorem require?",
      "罗尔定理与中值定理的关系是什么？ · How is Rolle’s theorem related to the mean value theorem?",
      "为什么中值定理不保证 \\(c\\) 唯一？ · Why does the mean value theorem not guarantee a unique \\(c\\)?"
    ],
    summary: "中值定理把平均变化率与某点瞬时变化率相等起来；罗尔定理是其水平割线特例，二者都是存在性定理。 · The mean value theorem equates the average rate of change with the instantaneous rate at some point; Rolle’s theorem is its horizontal-secant special case, and both are existence theorems."
  },
  'math/calc-u5/5.11': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能建立带约束的优化模型，写出目标函数并消元。 · Build a constrained optimization model, write the objective function, and eliminate extra variables.",
      "能用临界点与端点求闭区间上的全局极值。 · Use critical points and endpoints to find global extrema on a closed interval.",
      "能识别只令导数为零而忽略端点等常见误用并纠正。 · Identify and correct common errors such as setting the derivative to zero while ignoring endpoints."
    ],
    essentialKnowledge: [
      "先写目标函数，再消元 · Write the objective function first, then eliminate variables.",
      "定义域由实际约束决定 · The domain is determined by the practical constraints.",
      "候选点 = 临界点 + 端点 · Candidates are critical points plus endpoints.",
      "二阶导数可判断凹凸与极值类型 · The second derivative can classify concavity and extrema.",
      "最后要回答题目问的量，并带单位 · Answer the quantity the problem asks for and include units."
    ],
    connections: [
      "先修：5.10 优化导论 · Prerequisite: 5.10 Introduction to optimization.",
      "先修：5.5 候选绝对极值 · Prerequisite: 5.5 Candidates for absolute extrema.",
      "相关：4.7 洛必达法则 · Related: 4.7 L’Hôpital’s rule."
    ],
    definition: "优化问题要在约束条件下最大化或最小化目标量。步骤：写出目标函数与约束，消去多余变量得到单变量函数，确定定义域，求临界点（\\(f'=0\\) 或不存在），再用一阶/二阶导数检验或比较端点与临界点，最后回答原问题。 · Optimization problems maximize or minimize an objective quantity under constraints. The steps are: write the objective function and constraint, eliminate extra variables to obtain a one-variable function, determine the domain, find critical points (\\(f'=0\\) or nonexistent), use the first- or second-derivative test or compare endpoints and critical points, and finally answer the original question.",
    intuition: "优化就是“在允许的范围内找最高点或最低点”：先写函数，再看导数在哪里变号。 · Optimization means finding the highest or lowest point within the allowed range: write the function first, then see where its derivative changes sign.",
    intuitionDetailed: "闭区间上连续函数必有全局最大/最小值（极值定理），候选点包括临界点与端点。开区间或实际情境要检查边界行为；若只有一个临界点且二阶导数恒正/恒负，可直接判定全局极值。 · A continuous function on a closed interval attains a global maximum and minimum (extreme value theorem); candidates include critical points and endpoints. For open intervals or practical settings, check boundary behavior. If there is only one critical point and the second derivative is always positive or always negative, it can be classified as a global extremum directly.",
    formulas: [
      {
        latex: "f'(x)=0\\;\\text{或不存在}\\Rightarrow x\\text{ 为临界点}",
        note: "候选点。 · Candidates for extrema."
      },
      {
        latex: "f''(x)>0\\Rightarrow\\text{局部最小};\\quad f''(x)<0\\Rightarrow\\text{局部最大}",
        note: "二阶导数检验。 · Second-derivative test."
      },
      {
        latex: "\\text{闭区间最值}=\\max\\{f(\\text{临界点}),f(\\text{端点})\\}",
        note: "候选点法。 · Candidate-point method for a closed interval."
      }
    ],
    conditions: [
      "目标函数在定义域内连续 · The objective function is continuous on its domain.",
      "约束条件必须显式使用 · The constraint must be used explicitly.",
      "闭区间用极值定理；开区间检查端点/无穷远行为 · Use the extreme value theorem on closed intervals; check endpoint and infinity behavior on open intervals.",
      "临界点包括导数不存在点 · Critical points include points where the derivative does not exist.",
      "实际量（长度、面积）必须非负 · Practical quantities such as length and area must be nonnegative."
    ],
    keyPoints: [
      "先写目标函数，再消元 · Write the objective function first, then eliminate variables.",
      "定义域由实际约束决定 · The domain is determined by the practical constraints.",
      "候选点 = 临界点 + 端点 · Candidates are critical points plus endpoints.",
      "二阶导数可判断凹凸与极值类型 · The second derivative can classify concavity and extrema.",
      "最后要回答题目问的量，并带单位 · Answer the quantity the problem asks for and include units."
    ],
    misconceptions: [
      "只令导数为零，不检查端点 · Setting the derivative to zero without checking endpoints.",
      "忘记约束条件，保留两个变量 · Forgetting the constraint and keeping two variables.",
      "把局部极值当作全局极值 · Treating a local extremum as a global extremum.",
      "忽略实际定义域（如长度必须为正） · Ignoring the practical domain (for example, lengths must be positive).",
      "求出 \\(x\\) 后忘记求目标量 · Finding \\(x\\) but forgetting to compute the requested quantity."
    ],
    examples: [
      {
        title: "例 1 · 围栏 · Fence",
        prompt: "用 \\(100\\,\\mathrm{m}\\) 的围栏靠墙围一个矩形，墙边不需要围栏。求最大面积。 · A rectangular pen is built against a wall using \\(100\\,\\mathrm{m}\\) of fencing; no fence is needed along the wall. Find the maximum area.",
        steps: [
          "设垂直于墙的边长为 \\(x\\)，平行墙的边长为 \\(100-2x\\)。 · Let the side perpendicular to the wall be \\(x\\), so the side parallel to the wall is \\(100-2x\\).",
          "\\(A=x(100-2x)=100x-2x^{2}\\)，\\(0<x<50\\)。 · \\(A=x(100-2x)=100x-2x^{2}\\), with \\(0<x<50\\).",
          "\\(A'=100-4x=0\\Rightarrow x=25\\)；\\(A''=-4<0\\)，为最大。 · \\(A'=100-4x=0\\), so \\(x=25\\); \\(A''=-4<0\\), so this is a maximum.",
          "另一边 \\(100-50=50\\,\\mathrm{m}\\)。 · The other side is \\(100-50=50\\,\\mathrm{m}\\)."
        ],
        solution: "尺寸 \\(25\\,\\mathrm{m}\\times50\\,\\mathrm{m}\\)，最大面积 \\(1250\\,\\mathrm{m^{2}}\\)。 · The dimensions are \\(25\\,\\mathrm{m}\\times50\\,\\mathrm{m}\\), and the maximum area is \\(1250\\,\\mathrm{m^{2}}\\).",
        solutionLatex: "A_{\\max}=1250\\,\\mathrm{m^{2}}"
      },
      {
        title: "例 2 · 开口盒 · Open-Top Box",
        prompt: "一个无盖方底盒子体积为 \\(32\\,\\mathrm{cm^{3}}\\)。求使表面积最小的底面边长与高。 · An open-top box with a square base has volume \\(32\\,\\mathrm{cm^{3}}\\). Find the base side length and height that minimize the surface area.",
        steps: [
          "设底面边长 \\(x\\)，高 \\(h\\)，则 \\(x^{2}h=32\\Rightarrow h=\\dfrac{32}{x^{2}}\\)。 · Let the base side length be \\(x\\) and the height be \\(h\\); then \\(x^{2}h=32\\), so \\(h=\\dfrac{32}{x^{2}}\\).",
          "\\(S=x^{2}+4xh=x^{2}+\\dfrac{128}{x}\\)。 · The surface area is \\(S=x^{2}+4xh=x^{2}+\\dfrac{128}{x}\\).",
          "\\(S'=2x-\\dfrac{128}{x^{2}}=0\\Rightarrow x^{3}=64\\Rightarrow x=4\\)，\\(h=2\\)。 · \\(S'=2x-\\dfrac{128}{x^{2}}=0\\), so \\(x^{3}=64\\), \\(x=4\\), and \\(h=2\\)."
        ],
        solution: "\\(x=4\\,\\mathrm{cm}\\)，\\(h=2\\,\\mathrm{cm}\\)，最小表面积 \\(48\\,\\mathrm{cm^{2}}\\)。 · \\(x=4\\,\\mathrm{cm}\\), \\(h=2\\,\\mathrm{cm}\\), and the minimum surface area is \\(48\\,\\mathrm{cm^{2}}\\).",
        solutionLatex: "x=4\\,\\mathrm{cm},\\;h=2\\,\\mathrm{cm}"
      },
      {
        title: "例 3 · 最近点 · Closest Point",
        prompt: "求曲线 \\(y=\\sqrt{x}\\) 上到点 \\((3,0)\\) 最近的点。 · Find the point on the curve \\(y=\\sqrt{x}\\) closest to \\((3,0)\\).",
        steps: [
          "距离平方 \\(D^{2}=(x-3)^{2}+x\\)，\\(x\\ge0\\)。 · The squared distance is \\(D^{2}=(x-3)^{2}+x\\), with \\(x\\ge0\\).",
          "\\(\\dfrac{\\mathrm{d}(D^{2})}{\\mathrm{d}x}=2(x-3)+1=2x-5=0\\Rightarrow x=2.5\\)。 · \\(\\dfrac{\\mathrm{d}(D^{2})}{\\mathrm{d}x}=2(x-3)+1=2x-5=0\\), so \\(x=2.5\\).",
          "\\(y=\\sqrt{2.5}\\)；\\(D=\\sqrt{0.25+2.5}=\\sqrt{2.75}\\)。 · Then \\(y=\\sqrt{2.5}\\), and \\(D=\\sqrt{0.25+2.5}=\\sqrt{2.75}\\)."
        ],
        solution: "最近点 \\(\\left(2.5,\\sqrt{2.5}\\right)\\)，距离约 \\(1.66\\)。 · The closest point is \\(\\left(2.5,\\sqrt{2.5}\\right)\\), at a distance of about \\(1.66\\).",
        solutionLatex: "D\\approx1.66"
      }
    ],
    examTips: [
      "CED Unit 5：优化 · CED Unit 5: Optimization",
      "先写目标函数与约束，再消元 · Write the objective function and constraint first, then eliminate variables.",
      "列出定义域，检查端点 · State the domain and check endpoints.",
      "用二阶导数或一阶导数变号证明极值类型 · Use the second derivative or a sign change in the first derivative to classify the extremum.",
      "最后回答题目所问，不要停在 \\(x\\) · Answer the question asked; do not stop at the value of \\(x\\)."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.10",
        title: "优化导论 · Introduction to Optimization",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u5",
        code: "5.5",
        title: "候选绝对极值 · Candidates for Absolute Extrema",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u4",
        code: "4.7",
        title: "洛必达法则 · L’Hôpital’s Rule",
        relation: "相关 · Related"
      }
    ],
    development: [
      "目标函数与约束 · Objective functions and constraints",
      "消元与定义域 · Elimination and domain",
      "临界点与端点 · Critical points and endpoints",
      "极值检验 · Extremum tests",
      "实际情境建模 · Modeling practical situations"
    ],
    checks: [
      "优化问题为什么要检查端点？ · Why must optimization problems check endpoints?",
      "如何判断临界点是最大还是最小？ · How can you tell whether a critical point is a maximum or a minimum?",
      "实际定义域如何限制解？ · How does the practical domain restrict the solution?"
    ],
    summary: "优化先建模消元，再找临界点与端点，用导数检验极值，最后回答原问题的量。 · Optimization first builds a model and eliminates variables, then finds critical points and endpoints, uses derivatives to classify extrema, and finally answers the original question with units."
  },
  'math/calc-u6/6.9': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能识别换元积分中的里层函数及其导数。 · Identify the inner function and its derivative in integration by substitution.",
      "能对不定积分换元并回代，对定积分同步更换上下限。 · Substitute and back-substitute for indefinite integrals, and change the limits for definite integrals.",
      "能识别换元后仍保留 \\(x\\) 等常见误用并纠正。 · Identify and correct common errors such as leaving \\(x\\) in the integrand after substitution."
    ],
    essentialKnowledge: [
      "\\(u\\) 选里层函数 · Choose the inner function as \\(u\\).",
      "\\(\\mathrm{d}u=g'(x)\\mathrm{d}x\\) 要完整替换 · Replace \\(\\mathrm{d}u=g'(x)\\mathrm{d}x\\) completely.",
      "定积分换元后直接用新上下限 · For a definite integral, use the new limits after substitution.",
      "常数倍可以提到积分号外 · Constant multiples can be pulled outside the integral.",
      "最后检查是否还能化简 · Check whether the result can be simplified further."
    ],
    connections: [
      "先修：6.7 定积分求值 · Prerequisite: 6.7 Evaluating definite integrals.",
      "先修：6.8 求原函数 · Prerequisite: 6.8 Finding antiderivatives.",
      "后续：6.10 分部积分 · Follow-up: 6.10 Integration by parts."
    ],
    definition: "换元积分法（u-代换）是链式法则的逆运算：若被积函数含 \\(g(x)\\) 与 \\(g'(x)\\)，令 \\(u=g(x)\\)，则 \\(\\mathrm{d}u=g'(x)\\,\\mathrm{d}x\\)，积分化为 \\(\\int f(u)\\,\\mathrm{d}u\\)。定积分换元时必须同时把上下限换成 \\(u\\) 的值。 · Integration by substitution (u-substitution) is the reverse of the chain rule: if the integrand contains \\(g(x)\\) and \\(g'(x)\\), let \\(u=g(x)\\), so \\(\\mathrm{d}u=g'(x)\\,\\mathrm{d}x\\), and the integral becomes \\(\\int f(u)\\,\\mathrm{d}u\\). For a definite integral, change the limits to the corresponding values of \\(u\\) at the same time.",
    intuition: "换元就是“把复杂的里层整体打包成一个新变量”，让积分回到熟悉的基本形式。 · Substitution packages the complicated inner expression into a new variable, returning the integral to a familiar basic form.",
    intuitionDetailed: "选择 \\(u\\) 的常见线索：根号内、分母、指数、括号内的线性式。定积分换元后不必回代，直接用新上下限计算；不定积分则要回代 \\(u=g(x)\\)。若 \\(\\mathrm{d}u\\) 只差一个常数倍，可在积分号外补因子。 · Common clues for choosing \\(u\\): inside a radical, in a denominator, in an exponent, or inside parentheses. After substituting in a definite integral, do not back-substitute; evaluate directly with the new limits. For an indefinite integral, back-substitute \\(u=g(x)\\). If \\(\\mathrm{d}u\\) differs by a constant multiple, adjust the factor outside the integral.",
    formulas: [
      {
        latex: "\\int f(g(x))g'(x)\\,\\mathrm{d}x=\\int f(u)\\,\\mathrm{d}u",
        note: "不定积分换元。 · Indefinite integral by substitution."
      },
      {
        latex: "\\int_{a}^{b}f(g(x))g'(x)\\,\\mathrm{d}x=\\int_{g(a)}^{g(b)}f(u)\\,\\mathrm{d}u",
        note: "定积分换元，上下限同步改变。 · Definite integral by substitution; change the limits together."
      },
      {
        latex: "\\int \\dfrac{g'(x)}{g(x)}\\,\\mathrm{d}x=\\ln|g(x)|+C",
        note: "常见对数型换元。 · Common logarithmic substitution."
      }
    ],
    conditions: [
      "\\(g\\) 在积分区间可导，且 \\(g'\\) 连续 · \\(g\\) is differentiable on the interval of integration, and \\(g'\\) is continuous.",
      "被积函数中要能识别出 \\(g'(x)\\)（可差常数倍） · A factor \\(g'(x)\\) must be identifiable in the integrand (up to a constant multiple).",
      "定积分换元必须换上下限 · A definite integral by substitution must change its limits.",
      "不定积分最后回代原变量 · Back-substitute to the original variable for an indefinite integral.",
      "代换在区间上最好一一对应 · The substitution should preferably be one-to-one on the interval."
    ],
    keyPoints: [
      "\\(u\\) 选里层函数 · Choose the inner function as \\(u\\).",
      "\\(\\mathrm{d}u=g'(x)\\mathrm{d}x\\) 要完整替换 · Replace \\(\\mathrm{d}u=g'(x)\\mathrm{d}x\\) completely.",
      "定积分换元后直接用新上下限 · For a definite integral, use the new limits after substitution.",
      "常数倍可以提到积分号外 · Constant multiples can be pulled outside the integral.",
      "最后检查是否还能化简 · Check whether the result can be simplified further."
    ],
    misconceptions: [
      "换元后仍保留 \\(x\\) 与 \\(\\mathrm{d}x\\) · Leaving both \\(x\\) and \\(\\mathrm{d}x\\) after substituting.",
      "定积分换元忘记换上下限 · Forgetting to change the limits in a definite integral.",
      "把 \\(\\mathrm{d}u\\) 写成 \\(\\mathrm{d}x\\) · Writing \\(\\mathrm{d}u\\) as \\(\\mathrm{d}x\\).",
      "不定积分忘记回代 · Forgetting to back-substitute in an indefinite integral.",
      "选 \\(u\\) 后没有检查 \\(\\mathrm{d}u\\) 是否存在 · Choosing \\(u\\) without checking that \\(\\mathrm{d}u\\) is present."
    ],
    examples: [
      {
        title: "例 1 · 多项式 · Polynomial",
        prompt: "求 \\(\\displaystyle\\int 2x(x^{2}+1)^{3}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int 2x(x^{2}+1)^{3}\\,\\mathrm{d}x\\).",
        steps: [
          "令 \\(u=x^{2}+1\\)，则 \\(\\mathrm{d}u=2x\\,\\mathrm{d}x\\)。 · Let \\(u=x^{2}+1\\); then \\(\\mathrm{d}u=2x\\,\\mathrm{d}x\\).",
          "\\(\\int u^{3}\\,\\mathrm{d}u=\\dfrac{u^{4}}{4}+C\\)。 · Integrate: \\(\\int u^{3}\\,\\mathrm{d}u=\\dfrac{u^{4}}{4}+C\\).",
          "回代：\\(\\dfrac{(x^{2}+1)^{4}}{4}+C\\)。 · Back-substitute: \\(\\dfrac{(x^{2}+1)^{4}}{4}+C\\)."
        ],
        solution: "\\(\\dfrac{(x^{2}+1)^{4}}{4}+C\\)。 · The antiderivative is \\(\\dfrac{(x^{2}+1)^{4}}{4}+C\\).",
        solutionLatex: "\\dfrac{(x^{2}+1)^{4}}{4}+C"
      },
      {
        title: "例 2 · 定积分 · Definite Integral",
        prompt: "求 \\(\\displaystyle\\int_{0}^{2}xe^{x^{2}}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int_{0}^{2}xe^{x^{2}}\\,\\mathrm{d}x\\).",
        steps: [
          "令 \\(u=x^{2}\\)，\\(\\mathrm{d}u=2x\\,\\mathrm{d}x\\)。 · Let \\(u=x^{2}\\); then \\(\\mathrm{d}u=2x\\,\\mathrm{d}x\\).",
          "上下限：\\(x=0\\Rightarrow u=0\\)；\\(x=2\\Rightarrow u=4\\)。 · Limits: when \\(x=0\\), \\(u=0\\); when \\(x=2\\), \\(u=4\\).",
          "\\(\\dfrac{1}{2}\\int_{0}^{4}e^{u}\\,\\mathrm{d}u=\\dfrac{1}{2}(e^{4}-1)\\)。 · Evaluate: \\(\\dfrac{1}{2}\\int_{0}^{4}e^{u}\\,\\mathrm{d}u=\\dfrac{1}{2}(e^{4}-1)\\)."
        ],
        solution: "\\(\\dfrac{e^{4}-1}{2}\\)。 · The value is \\(\\dfrac{e^{4}-1}{2}\\).",
        solutionLatex: "\\dfrac{e^{4}-1}{2}"
      },
      {
        title: "例 3 · 三角 · Trigonometric",
        prompt: "求 \\(\\displaystyle\\int \\sin^{3}x\\cos x\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int \\sin^{3}x\\cos x\\,\\mathrm{d}x\\).",
        steps: [
          "令 \\(u=\\sin x\\)，\\(\\mathrm{d}u=\\cos x\\,\\mathrm{d}x\\)。 · Let \\(u=\\sin x\\); then \\(\\mathrm{d}u=\\cos x\\,\\mathrm{d}x\\).",
          "\\(\\int u^{3}\\,\\mathrm{d}u=\\dfrac{u^{4}}{4}+C\\)。 · Integrate: \\(\\int u^{3}\\,\\mathrm{d}u=\\dfrac{u^{4}}{4}+C\\).",
          "回代：\\(\\dfrac{\\sin^{4}x}{4}+C\\)。 · Back-substitute: \\(\\dfrac{\\sin^{4}x}{4}+C\\)."
        ],
        solution: "\\(\\dfrac{\\sin^{4}x}{4}+C\\)。 · The antiderivative is \\(\\dfrac{\\sin^{4}x}{4}+C\\).",
        solutionLatex: "\\dfrac{\\sin^{4}x}{4}+C"
      }
    ],
    examTips: [
      "CED Unit 6：积分技巧 · CED Unit 6: Integration techniques",
      "先找“里层函数 + 它的导数” · Look first for “inner function + its derivative.”",
      "定积分换元三件事：换 \\(u\\)、换 \\(\\mathrm{d}u\\)、换上下限 · For a definite integral by substitution, change three things: \\(u\\), \\(\\mathrm{d}u\\), and the limits.",
      "算完求导验证结果 · Differentiate the result to verify it."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.7",
        title: "定积分求值 · Evaluating Definite Integrals",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.8",
        title: "求原函数 · Finding Antiderivatives",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.10",
        title: "分部积分 · Integration by Parts",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "链式法则的逆 · Reverse of the chain rule",
      "选择 \\(u\\) · Choosing \\(u\\)",
      "不定积分回代 · Back-substitution for indefinite integrals",
      "定积分换限 · Changing limits for definite integrals",
      "常见换元类型 · Common substitution types"
    ],
    checks: [
      "换元后为什么不能同时保留 \\(x\\) 和 \\(u\\)？ · Why can you not keep both \\(x\\) and \\(u\\) after substitution?",
      "定积分换元为什么要换上下限？ · Why must the limits be changed for a definite integral by substitution?",
      "如何验证换元积分的结果？ · How can you verify the result of integration by substitution?"
    ],
    summary: "换元积分把里层函数打包成 \\(u\\)，用 \\(\\mathrm{d}u=g'(x)\\mathrm{d}x\\) 化简；定积分记得换上下限。 · Integration by substitution packages the inner function as \\(u\\) and simplifies using \\(\\mathrm{d}u=g'(x)\\mathrm{d}x\\); remember to change the limits for a definite integral."
  },
  'math/calc-u6/6.10': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能写出分部积分公式，并说明它的适用条件。 · State the integration-by-parts formula and explain when it applies.",
      "能用 LIATE 选择 \\(u\\) 与 \\(\\mathrm{d}v\\)，把积分转化为更简单的形式。 · Use LIATE to choose \\(u\\) and \\(\\mathrm{d}v\\), transforming the integral into a simpler form.",
      "能识别并纠正 \\(u\\) 与 \\(\\mathrm{d}v\\) 选反等常见误用。 · Identify and correct common errors such as choosing \\(u\\) and \\(\\mathrm{d}v\\) in the wrong order."
    ],
    essentialKnowledge: [
      "LIATE 帮助选 \\(u\\) · LIATE helps choose \\(u\\).",
      "\\(\\mathrm{d}v\\) 要容易积分 · \\(\\mathrm{d}v\\) should be easy to integrate.",
      "分部积分可以多次使用 · Integration by parts can be used more than once.",
      "出现循环时移项解出原积分 · When the original integral reappears, solve for it by rearranging.",
      "\\(\\ln x\\) 与反三角常选为 \\(u\\) · \\(\\ln x\\) and inverse trigonometric functions are often chosen as \\(u\\)."
    ],
    connections: [
      "先修：6.9 换元积分法 · Prerequisite: 6.9 Integration by substitution.",
      "后续：6.11 部分分式 · Follow-up: 6.11 Partial fractions.",
      "后续：6.13 积分技巧选择 · Follow-up: 6.13 Choosing integration techniques."
    ],
    definition: "分部积分由乘积求导法则推出：\\(\\displaystyle\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u\\)。它把难以直接积分的乘积转化为另一个积分，常用于多项式乘指数/三角/对数、反三角函数的积分。选择 \\(u\\) 的常用优先级为 LIATE（对数、反三角、代数、三角、指数）。 · Integration by parts follows from the product rule: \\(\\displaystyle\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u\\). It turns a product that is hard to integrate directly into another integral and is often used for polynomials multiplied by exponentials, trigonometric functions, or logarithms, and for inverse trigonometric functions. The usual priority for choosing \\(u\\) is LIATE (logarithmic, inverse trigonometric, algebraic, trigonometric, exponential).",
    intuition: "分部积分是“把乘积的导数移项”：一个因子求导、另一个因子积分，把问题换成更容易的形式。 · Integration by parts rearranges the derivative of a product: differentiate one factor and integrate the other, turning the problem into an easier form.",
    intuitionDetailed: "若 \\(u\\) 求导后变简单（如 \\(\\ln x\\)、\\(x^{n}\\)），就选它为 \\(u\\)；剩下的部分要能积分成 \\(v\\)。有时需要连续两次分部积分，或出现原积分后移项求解。定积分版本要同时代入上下限。 · If differentiating \\(u\\) makes it simpler (for example, \\(\\ln x\\) or \\(x^{n}\\)), choose it as \\(u\\); the remaining part must integrate to \\(v\\). Sometimes two applications are needed, or the original integral reappears and must be solved by rearranging. For a definite integral, substitute the limits at the end.",
    formulas: [
      {
        latex: "\\int u\\,\\mathrm{d}v=uv-\\int v\\,\\mathrm{d}u",
        note: "不定积分分部积分。 · Indefinite integration by parts."
      },
      {
        latex: "\\int_{a}^{b}u\\,\\mathrm{d}v=\\left[uv\\right]_{a}^{b}-\\int_{a}^{b}v\\,\\mathrm{d}u",
        note: "定积分分部积分。 · Definite integration by parts."
      },
      {
        latex: "\\int \\ln x\\,\\mathrm{d}x=x\\ln x-x+C",
        note: "经典结果。 · Classic result."
      }
    ],
    conditions: [
      "\\(u,v\\) 可导，且 \\(\\mathrm{d}u,\\mathrm{d}v\\) 存在 · \\(u\\) and \\(v\\) are differentiable, and \\(\\mathrm{d}u\\) and \\(\\mathrm{d}v\\) exist.",
      "\\(u\\) 的导数应比 \\(u\\) 简单 · The derivative of \\(u\\) should be simpler than \\(u\\).",
      "剩余积分 \\(\\int v\\,\\mathrm{d}u\\) 要比原积分容易 · The remaining integral \\(\\int v\\,\\mathrm{d}u\\) should be easier than the original.",
      "可能需要多次分部积分或移项 · Several applications or a rearrangement may be needed.",
      "定积分记得代入上下限 · For a definite integral, remember to substitute the limits."
    ],
    keyPoints: [
      "LIATE 帮助选 \\(u\\) · LIATE helps choose \\(u\\).",
      "\\(\\mathrm{d}v\\) 要容易积分 · \\(\\mathrm{d}v\\) should be easy to integrate.",
      "分部积分可以多次使用 · Integration by parts can be used more than once.",
      "出现循环时移项解出原积分 · When the original integral reappears, solve for it by rearranging.",
      "\\(\\ln x\\) 与反三角常选为 \\(u\\) · \\(\\ln x\\) and inverse trigonometric functions are often chosen as \\(u\\)."
    ],
    misconceptions: [
      "把 \\(u\\) 与 \\(\\mathrm{d}v\\) 选反，导致积分更复杂 · Choosing \\(u\\) and \\(\\mathrm{d}v\\) in the wrong order, making the integral more complicated.",
      "忘记 \\(-\\int v\\,\\mathrm{d}u\\) 的负号 · Forgetting the minus sign in \\(-\\int v\\,\\mathrm{d}u\\).",
      "定积分忘记代入上下限 · Forgetting to substitute the limits in a definite integral.",
      "循环积分时不会移项 · Not rearranging when the original integral reappears.",
      "把 \\(\\int u\\,\\mathrm{d}v\\) 写成 \\(uv+\\int v\\,\\mathrm{d}u\\) · Writing \\(\\int u\\,\\mathrm{d}v\\) as \\(uv+\\int v\\,\\mathrm{d}u\\)."
    ],
    examples: [
      {
        title: "例 1 · 多项式乘指数 · Polynomial Times Exponential",
        prompt: "求 \\(\\displaystyle\\int xe^{x}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int xe^{x}\\,\\mathrm{d}x\\).",
        steps: [
          "取 \\(u=x\\)，\\(\\mathrm{d}v=e^{x}\\mathrm{d}x\\)，则 \\(\\mathrm{d}u=\\mathrm{d}x\\)，\\(v=e^{x}\\)。 · Take \\(u=x\\) and \\(\\mathrm{d}v=e^{x}\\mathrm{d}x\\), so \\(\\mathrm{d}u=\\mathrm{d}x\\) and \\(v=e^{x}\\).",
          "\\(\\int xe^{x}\\mathrm{d}x=xe^{x}-\\int e^{x}\\mathrm{d}x\\)。 · Apply the formula: \\(\\int xe^{x}\\mathrm{d}x=xe^{x}-\\int e^{x}\\mathrm{d}x\\).",
          "结果：\\(e^{x}(x-1)+C\\)。 · Result: \\(e^{x}(x-1)+C\\)."
        ],
        solution: "\\(e^{x}(x-1)+C\\)。 · Thus the antiderivative is \\(e^{x}(x-1)+C\\).",
        solutionLatex: "e^{x}(x-1)+C"
      },
      {
        title: "例 2 · 对数 · Logarithm",
        prompt: "求 \\(\\displaystyle\\int \\ln x\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int \\ln x\\,\\mathrm{d}x\\).",
        steps: [
          "取 \\(u=\\ln x\\)，\\(\\mathrm{d}v=\\mathrm{d}x\\)，则 \\(\\mathrm{d}u=\\dfrac{1}{x}\\mathrm{d}x\\)，\\(v=x\\)。 · Take \\(u=\\ln x\\) and \\(\\mathrm{d}v=\\mathrm{d}x\\), so \\(\\mathrm{d}u=\\dfrac{1}{x}\\mathrm{d}x\\) and \\(v=x\\).",
          "\\(\\int\\ln x\\,\\mathrm{d}x=x\\ln x-\\int x\\cdot\\dfrac{1}{x}\\,\\mathrm{d}x\\)。 · Apply the formula: \\(\\int\\ln x\\,\\mathrm{d}x=x\\ln x-\\int x\\cdot\\dfrac{1}{x}\\,\\mathrm{d}x\\).",
          "\\(=x\\ln x-x+C\\)。 · So the result is \\(x\\ln x-x+C\\)."
        ],
        solution: "\\(x\\ln x-x+C\\)。 · Thus the antiderivative is \\(x\\ln x-x+C\\).",
        solutionLatex: "x\\ln x-x+C"
      },
      {
        title: "例 3 · 定积分 · Definite Integral",
        prompt: "求 \\(\\displaystyle\\int_{0}^{\\pi}x\\sin x\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int_{0}^{\\pi}x\\sin x\\,\\mathrm{d}x\\).",
        steps: [
          "取 \\(u=x\\)，\\(\\mathrm{d}v=\\sin x\\,\\mathrm{d}x\\)，则 \\(v=-\\cos x\\)。 · Take \\(u=x\\) and \\(\\mathrm{d}v=\\sin x\\,\\mathrm{d}x\\), so \\(v=-\\cos x\\).",
          "\\(\\left[-x\\cos x\\right]_{0}^{\\pi}+\\int_{0}^{\\pi}\\cos x\\,\\mathrm{d}x\\)。 · Apply the limits and the remaining integral: \\(\\left[-x\\cos x\\right]_{0}^{\\pi}+\\int_{0}^{\\pi}\\cos x\\,\\mathrm{d}x\\).",
          "\\(=\\pi+\\left[\\sin x\\right]_{0}^{\\pi}=\\pi\\)。 · So the value is \\(\\pi+\\left[\\sin x\\right]_{0}^{\\pi}=\\pi\\)."
        ],
        solution: "\\(\\pi\\)。 · The value is \\(\\pi\\).",
        solutionLatex: "\\pi"
      }
    ],
    examTips: [
      "CED Unit 6：分部积分 · CED Unit 6: Integration by parts",
      "按 LIATE 选 \\(u\\)，剩下的作 \\(\\mathrm{d}v\\) · Choose \\(u\\) by LIATE and let the rest be \\(\\mathrm{d}v\\).",
      "写清 \\(\\mathrm{d}u\\) 与 \\(v\\)，再代入公式 · Write \\(\\mathrm{d}u\\) and \\(v\\) explicitly before substituting into the formula.",
      "循环积分两次后移项 · For a repeating integral, apply the rule twice and rearrange.",
      "定积分先求原函数，再代上下限 · For a definite integral, find the antiderivative first, then substitute the limits."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.9",
        title: "换元积分法 · Integration by Substitution",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.11",
        title: "部分分式 · Partial Fractions",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.13",
        title: "积分技巧选择 · Choosing Integration Techniques",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "乘积求导的逆 · Reverse of the product rule",
      "LIATE 选 \\(u\\) · Choosing \\(u\\) with LIATE",
      "一次分部积分 · One application of integration by parts",
      "循环与多次 · Repeating and cyclic integrals",
      "定积分版本 · Definite-integral version"
    ],
    checks: [
      "如何选择 \\(u\\) 与 \\(\\mathrm{d}v\\)？ · How should \\(u\\) and \\(\\mathrm{d}v\\) be chosen?",
      "分部积分公式的负号从哪里来？ · Where does the minus sign in the integration-by-parts formula come from?",
      "循环积分如何求解？ · How is a cyclic integral solved?"
    ],
    summary: "分部积分把 \\(\\int u\\,\\mathrm{d}v\\) 换成 \\(uv-\\int v\\,\\mathrm{d}u\\)；选 \\(u\\) 让导数更简单，必要时多次或移项。 · Integration by parts replaces \\(\\int u\\,\\mathrm{d}v\\) with \\(uv-\\int v\\,\\mathrm{d}u\\); choose \\(u\\) so its derivative is simpler, and repeat or rearrange when necessary."
  },
  'math/calc-u7/7.6': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能识别可分离变量微分方程，并把变量分到两边。 · Identify separable differential equations and separate the variables.",
      "能两边积分并用初始条件确定常数。 · Integrate both sides and use the initial condition to determine the constant.",
      "能识别并纠正忽略平衡解等常见误用。 · Identify and correct common errors such as omitting equilibrium solutions."
    ],
    essentialKnowledge: [
      "分离变量后两边积分 · After separating variables, integrate both sides.",
      "初始条件定 \\(C\\) · The initial condition determines \\(C\\).",
      "平衡解可能丢失 · Equilibrium solutions may be lost during division.",
      "指数模型 \\(y=Ce^{kt}\\) · Exponential model: \\(y=Ce^{kt}\\).",
      "逻辑斯蒂模型用部分分式分离 · The logistic model is separated using partial fractions."
    ],
    connections: [
      "相关：7.5 欧拉法 · Related: 7.5 Euler’s method.",
      "后续：7.7 特解 · Follow-up: 7.7 Particular solutions.",
      "后续：7.8 指数模型 · Follow-up: 7.8 Exponential models."
    ],
    definition: "可分离变量微分方程形如 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f(x)g(y)\\)。把含 \\(y\\) 的项移到一边、含 \\(x\\) 的项移到另一边：\\(\\dfrac{\\mathrm{d}y}{g(y)}=f(x)\\,\\mathrm{d}x\\)，两边积分，再由初始条件定常数。若 \\(g(y_0)=0\\)，则 \\(y=y_0\\) 是常数解，可能不在通解中。 · A separable differential equation has the form \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f(x)g(y)\\). Move the \\(y\\)-terms to one side and the \\(x\\)-terms to the other: \\(\\dfrac{\\mathrm{d}y}{g(y)}=f(x)\\,\\mathrm{d}x\\), integrate both sides, and use the initial condition to determine the constant. If \\(g(y_0)=0\\), then \\(y=y_0\\) is a constant solution that may not appear in the general solution.",
    intuition: "把 \\(x\\) 和 \\(y\\) “各回各家”，两边分别积分；初始条件决定积分常数。 · Send \\(x\\) and \\(y\\) to their own sides and integrate each side; the initial condition determines the constant of integration.",
    intuitionDetailed: "分离变量后得到隐式解，能显式解出 \\(y\\) 时就写成 \\(y=\\dots\\)。指数增长/衰减 \\(y'=ky\\) 与逻辑斯蒂方程都可由分离变量求解。注意积分常数与定义域；\\(\\ln|y|\\) 的去绝对值由初始条件符号决定。 · Separation gives an implicit solution; if \\(y\\) can be solved for explicitly, write it as \\(y=\\dots\\). Exponential growth and decay \\(y'=ky\\) and the logistic equation can both be solved by separation. Pay attention to the constant of integration and the domain; the sign of the initial condition determines how the absolute value in \\(\\ln|y|\\) is removed.",
    formulas: [
      {
        latex: "\\dfrac{\\mathrm{d}y}{g(y)}=f(x)\\,\\mathrm{d}x",
        note: "分离变量形式。 · Separated form."
      },
      {
        latex: "\\int\\dfrac{\\mathrm{d}y}{g(y)}=\\int f(x)\\,\\mathrm{d}x",
        note: "两边积分。 · Integrate both sides."
      },
      {
        latex: "y'=ky\\Rightarrow y=Ce^{kt}",
        note: "指数模型。 · Exponential model."
      }
    ],
    conditions: [
      "\\(g(y)\\neq0\\) 才能除以 \\(g(y)\\) · Divide by \\(g(y)\\) only when \\(g(y)\\neq0\\).",
      "常数解 \\(g(y)=0\\) 要单独检查 · Check the constant solutions \\(g(y)=0\\) separately.",
      "初始条件用于确定常数 · Use the initial condition to determine the constant.",
      "积分后注意绝对值与定义域 · Watch absolute values and the domain after integration.",
      "解曲线不能跨越 \\(g(y)=0\\) 的平衡解 · A solution curve cannot cross an equilibrium solution where \\(g(y)=0\\)."
    ],
    keyPoints: [
      "分离变量后两边积分 · After separating variables, integrate both sides.",
      "初始条件定 \\(C\\) · The initial condition determines \\(C\\).",
      "平衡解可能丢失 · Equilibrium solutions may be lost.",
      "指数模型 \\(y=Ce^{kt}\\) · Exponential model: \\(y=Ce^{kt}\\).",
      "逻辑斯蒂模型用部分分式分离 · The logistic model is separated using partial fractions."
    ],
    misconceptions: [
      "把 \\(\\mathrm{d}y\\) 与 \\(\\mathrm{d}x\\) 当作普通代数约分 · Treating \\(\\mathrm{d}y\\) and \\(\\mathrm{d}x\\) as ordinary algebraic quantities that can be canceled.",
      "忘记检查 \\(g(y)=0\\) 的常数解 · Forgetting to check the constant solutions \\(g(y)=0\\).",
      "积分后漏写常数 \\(C\\) · Omitting the constant \\(C\\) after integration.",
      "初始条件代入太早或太晚 · Substituting the initial condition too early or too late.",
      "去绝对值时忽略初始符号 · Ignoring the sign of the initial condition when removing absolute values."
    ],
    examples: [
      {
        title: "例 1 · 指数型 · Exponential Type",
        prompt: "解 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=xy\\)。 · Solve \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=xy\\).",
        steps: [
          "分离：\\(\\dfrac{\\mathrm{d}y}{y}=x\\,\\mathrm{d}x\\)（\\(y\\neq0\\)）。 · Separate: \\(\\dfrac{\\mathrm{d}y}{y}=x\\,\\mathrm{d}x\\) for \\(y\\neq0\\).",
          "积分：\\(\\ln|y|=\\dfrac{x^{2}}{2}+C\\)。 · Integrate: \\(\\ln|y|=\\dfrac{x^{2}}{2}+C\\).",
          "取指数：\\(y=Ce^{\\frac{x^{2}}{2}}\\)。 · Exponentiate: \\(y=Ce^{\\frac{x^{2}}{2}}\\)."
        ],
        solution: "\\(y=Ce^{\\frac{x^{2}}{2}}\\)，另有常数解 \\(y=0\\)。 · \\(y=Ce^{\\frac{x^{2}}{2}}\\), with the additional constant solution \\(y=0\\).",
        solutionLatex: "y=Ce^{\\frac{x^{2}}{2}}"
      },
      {
        title: "例 2 · 初值问题 · Initial-Value Problem",
        prompt: "解 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{2x}{y}\\)，且 \\(y(0)=3\\)。 · Solve \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{2x}{y}\\) with \\(y(0)=3\\).",
        steps: [
          "分离：\\(y\\,\\mathrm{d}y=2x\\,\\mathrm{d}x\\)。 · Separate: \\(y\\,\\mathrm{d}y=2x\\,\\mathrm{d}x\\).",
          "积分：\\(\\dfrac{y^{2}}{2}=x^{2}+C\\Rightarrow y^{2}=2x^{2}+C_1\\)。 · Integrate: \\(\\dfrac{y^{2}}{2}=x^{2}+C\\), so \\(y^{2}=2x^{2}+C_1\\).",
          "代入 \\(y(0)=3\\)：\\(9=C_1\\)，故 \\(y=\\sqrt{2x^{2}+9}\\)（取正支）。 · Use \\(y(0)=3\\): \\(9=C_1\\), so \\(y=\\sqrt{2x^{2}+9}\\) (the positive branch)."
        ],
        solution: "\\(y=\\sqrt{2x^{2}+9}\\)。 · Thus \\(y=\\sqrt{2x^{2}+9}\\).",
        solutionLatex: "y=\\sqrt{2x^{2}+9}"
      },
      {
        title: "例 3 · 牛顿冷却 · Newton Cooling",
        prompt: "物体温度 \\(T(t)\\) 满足 \\(\\dfrac{\\mathrm{d}T}{\\mathrm{d}t}=-k(T-20)\\)，初始温度 \\(T(0)=T_0\\)。求 \\(T(t)\\)。 · An object’s temperature \\(T(t)\\) satisfies \\(\\dfrac{\\mathrm{d}T}{\\mathrm{d}t}=-k(T-20)\\), with initial temperature \\(T(0)=T_0\\). Find \\(T(t)\\).",
        steps: [
          "令 \\(u=T-20\\)，则 \\(\\dfrac{\\mathrm{d}u}{\\mathrm{d}t}=-ku\\)。 · Let \\(u=T-20\\); then \\(\\dfrac{\\mathrm{d}u}{\\mathrm{d}t}=-ku\\).",
          "分离积分：\\(u=Ce^{-kt}\\)。 · Separate and integrate: \\(u=Ce^{-kt}\\).",
          "初始条件：\\(C=T_0-20\\)。 · Apply the initial condition: \\(C=T_0-20\\)."
        ],
        solution: "\\(T(t)=20+(T_0-20)e^{-kt}\\)。 · Thus \\(T(t)=20+(T_0-20)e^{-kt}\\).",
        solutionLatex: "T(t)=20+(T_0-20)e^{-kt}"
      }
    ],
    examTips: [
      "CED Unit 7：微分方程 · CED Unit 7: Differential equations",
      "先分离，再积分，最后代初值 · Separate first, integrate second, and substitute the initial value last.",
      "别漏平衡解 · Do not omit equilibrium solutions.",
      "解出 \\(y\\) 时注意正负支与定义域 · When solving for \\(y\\), pay attention to the positive and negative branches and the domain.",
      "用 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 验证解 · Verify the solution by differentiating it."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.5",
        title: "欧拉法 · Euler’s Method",
        relation: "相关 · Related"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.7",
        title: "特解 · Particular Solutions",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u7",
        code: "7.8",
        title: "指数模型 · Exponential Models",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "分离变量 · Separating variables",
      "两边积分 · Integrating both sides",
      "初始条件 · Initial conditions",
      "平衡解 · Equilibrium solutions",
      "指数与逻辑斯蒂模型 · Exponential and logistic models"
    ],
    checks: [
      "分离变量时为什么要单独检查 \\(g(y)=0\\)？ · Why check \\(g(y)=0\\) separately when separating variables?",
      "初始条件在哪一步使用？ · At which step is the initial condition used?",
      "如何验证微分方程的解？ · How can a solution of a differential equation be verified?"
    ],
    summary: "可分离变量方程把 \\(x\\) 与 \\(y\\) 分到两边积分，初始条件定常数；注意平衡解与定义域。 · A separable equation puts \\(x\\) and \\(y\\) on opposite sides, integrates both sides, and uses the initial condition to determine the constant; watch for equilibrium solutions and the domain."
  },
  'math/calc-u8/8.4': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能建立两曲线间面积的定积分，并正确判断上下曲线。 · Set up a definite integral for the area between two curves and identify the upper and lower curves correctly.",
      "能在曲线交叉时分段积分，或改用对 \\(y\\) 积分。 · Split the integral where curves cross, or switch to integrating with respect to \\(y\\).",
      "能识别并纠正上下写反、交点求错等常见误用。 · Identify and correct common errors such as reversing upper and lower curves or finding intersections incorrectly."
    ],
    essentialKnowledge: [
      "面积 = 上减下 · Area equals upper minus lower.",
      "先求交点 · Find the intersection points first.",
      "对 \\(y\\) 积分可简化某些区域 · Integrating with respect to \\(y\\) can simplify some regions.",
      "分段处理交叉 · Split the interval where the curves cross.",
      "面积结果应为正 · The area must be positive."
    ],
    connections: [
      "先修：6.7 定积分求值 · Prerequisite: 6.7 Evaluating definite integrals.",
      "后续：8.5 曲线间面积 y · Follow-up: 8.5 Area between curves as functions of \\(y\\).",
      "后续：8.7 截面法：正方形与矩形 · Follow-up: 8.7 Volumes with Cross Sections: Squares and Rectangles."
    ],
    definition: "两曲线之间的面积等于上曲线减下曲线在区间上的定积分：\\(A=\\displaystyle\\int_{a}^{b}\\left[f(x)-g(x)\\right]\\mathrm{d}x\\)（要求 \\(f\\ge g\\)）。若上下关系改变，要分段积分或加绝对值。也可对 \\(y\\) 积分：\\(A=\\displaystyle\\int_{c}^{d}\\left[x_{\\mathrm{right}}(y)-x_{\\mathrm{left}}(y)\\right]\\mathrm{d}y\\)。 · The area between two curves equals the definite integral of the upper curve minus the lower curve over the interval: \\(A=\\displaystyle\\int_{a}^{b}\\left[f(x)-g(x)\\right]\\mathrm{d}x\\), provided \\(f\\ge g\\). If the upper-lower relationship changes, split the integral or use absolute value. One may also integrate with respect to \\(y\\): \\(A=\\displaystyle\\int_{c}^{d}\\left[x_{\\mathrm{right}}(y)-x_{\\mathrm{left}}(y)\\right]\\mathrm{d}y\\).",
    intuition: "把区域切成竖条，每一条的高度是“上减下”，宽度是 \\(\\mathrm{d}x\\)；积分就是把这些竖条面积加起来。 · Slice the region into vertical strips whose height is “upper minus lower” and whose width is \\(\\mathrm{d}x\\); the integral adds the areas of these strips.",
    intuitionDetailed: "先求交点确定积分限，再判断哪条曲线在上。若两曲线多次相交，要在每个子区间分别写“上减下”。对 \\(y\\) 积分时，右曲线减左曲线，适合 \\(x\\) 是 \\(y\\) 的函数更简单的情形。 · First find the intersection points to determine the limits, then decide which curve is on top. If the curves cross several times, write “upper minus lower” separately on each subinterval. When integrating with respect to \\(y\\), subtract the left curve from the right curve; this is convenient when \\(x\\) is a simpler function of \\(y\\).",
    formulas: [
      {
        latex: "A=\\int_{a}^{b}\\left[f(x)-g(x)\\right]\\mathrm{d}x",
        note: "\\(f\\) 在上、\\(g\\) 在下。 · \\(f\\) is above and \\(g\\) is below."
      },
      {
        latex: "A=\\int_{c}^{d}\\left[x_{\\mathrm{right}}(y)-x_{\\mathrm{left}}(y)\\right]\\mathrm{d}y",
        note: "对 \\(y\\) 积分。 · Integrating with respect to \\(y\\)."
      },
      {
        latex: "A=\\int_{a}^{b}\\left|f(x)-g(x)\\right|\\mathrm{d}x",
        note: "上下关系变化时的统一写法。 · Unified form when the upper-lower relationship changes."
      }
    ],
    conditions: [
      "曲线在区间上连续 · The curves are continuous on the interval.",
      "积分限由交点或题目给定 · The limits come from intersection points or are given in the problem.",
      "必须先判断上下（或左右）关系 · Determine which curve is upper or lower (or left or right) first.",
      "上下关系改变时分段 · Split the interval where the relationship changes.",
      "面积非负，定积分可能为负（表示有向面积） · Area is nonnegative, but a definite integral can be negative (signed area)."
    ],
    keyPoints: [
      "面积 = 上减下 · Area equals upper minus lower.",
      "先求交点 · Find the intersection points first.",
      "对 \\(y\\) 积分可简化某些区域 · Integrating with respect to \\(y\\) can simplify some regions.",
      "分段处理交叉 · Split the integral where the curves cross.",
      "面积结果应为正 · The area result should be positive."
    ],
    misconceptions: [
      "不判断上下就直接相减，得到负面积 · Subtracting without checking which curve is on top, which can give a negative area.",
      "交点求错导致积分限错误 · Finding intersections incorrectly, leading to wrong limits.",
      "两曲线多次相交仍用一个积分 · Using one integral when the curves cross several times.",
      "对 \\(y\\) 积分时把左右弄反 · Reversing left and right when integrating with respect to \\(y\\).",
      "把定积分的有向面积当作几何面积 · Treating the signed area of a definite integral as geometric area."
    ],
    examples: [
      {
        title: "例 1 · 抛物线与直线 · Parabola and Line",
        prompt: "求 \\(y=x\\) 与 \\(y=x^{2}\\) 在 \\([0,1]\\) 之间围成的面积。 · Find the area enclosed by \\(y=x\\) and \\(y=x^{2}\\) on \\([0,1]\\).",
        steps: [
          "在 \\((0,1)\\) 上 \\(x\\ge x^{2}\\)。 · On \\((0,1)\\), \\(x\\ge x^{2}\\).",
          "\\(A=\\int_{0}^{1}(x-x^{2})\\,\\mathrm{d}x\\)。 · Set up the integral: \\(A=\\int_{0}^{1}(x-x^{2})\\,\\mathrm{d}x\\).",
          "\\(=\\left[\\dfrac{x^{2}}{2}-\\dfrac{x^{3}}{3}\\right]_{0}^{1}=\\dfrac{1}{2}-\\dfrac{1}{3}=\\dfrac{1}{6}\\)。 · Evaluate: \\(\\left[\\dfrac{x^{2}}{2}-\\dfrac{x^{3}}{3}\\right]_{0}^{1}=\\dfrac{1}{2}-\\dfrac{1}{3}=\\dfrac{1}{6}\\)."
        ],
        solution: "\\(A=\\dfrac{1}{6}\\)。 · Thus \\(A=\\dfrac{1}{6}\\).",
        solutionLatex: "A=\\dfrac{1}{6}"
      },
      {
        title: "例 2 · 曲线与 x 轴 · Curve and the x-Axis",
        prompt: "求 \\(y=x^{2}-4\\) 与 \\(x\\) 轴围成的面积。 · Find the area enclosed by \\(y=x^{2}-4\\) and the \\(x\\)-axis.",
        steps: [
          "交点 \\(x=\\pm2\\)；在区间内曲线在 \\(x\\) 轴下方。 · The intersections are at \\(x=\\pm2\\); the curve lies below the \\(x\\)-axis on this interval.",
          "\\(A=\\int_{-2}^{2}\\left[0-(x^{2}-4)\\right]\\mathrm{d}x=\\int_{-2}^{2}(4-x^{2})\\,\\mathrm{d}x\\)。 · Set up the integral: \\(A=\\int_{-2}^{2}\\left[0-(x^{2}-4)\\right]\\mathrm{d}x=\\int_{-2}^{2}(4-x^{2})\\,\\mathrm{d}x\\).",
          "\\(=\\left[4x-\\dfrac{x^{3}}{3}\\right]_{-2}^{2}=\\dfrac{32}{3}\\)。 · Evaluate: \\(\\left[4x-\\dfrac{x^{3}}{3}\\right]_{-2}^{2}=\\dfrac{32}{3}\\)."
        ],
        solution: "\\(A=\\dfrac{32}{3}\\)。 · Thus \\(A=\\dfrac{32}{3}\\).",
        solutionLatex: "A=\\dfrac{32}{3}"
      },
      {
        title: "例 3 · 对 y 积分 · Integrating with Respect to y",
        prompt: "求 \\(x=y^{2}\\) 与 \\(x=y+2\\) 围成的面积。 · Find the area enclosed by \\(x=y^{2}\\) and \\(x=y+2\\).",
        steps: [
          "交点：\\(y^{2}=y+2\\Rightarrow y=-1,2\\)。 · Intersections: \\(y^{2}=y+2\\), so \\(y=-1,2\\).",
          "右曲线 \\(x=y+2\\)，左曲线 \\(x=y^{2}\\)。 · The right curve is \\(x=y+2\\), and the left curve is \\(x=y^{2}\\).",
          "\\(A=\\int_{-1}^{2}(y+2-y^{2})\\,\\mathrm{d}y=\\dfrac{9}{2}\\)。 · Evaluate the integral: \\(A=\\int_{-1}^{2}(y+2-y^{2})\\,\\mathrm{d}y=\\dfrac{9}{2}\\)."
        ],
        solution: "\\(A=\\dfrac{9}{2}\\)。 · Thus \\(A=\\dfrac{9}{2}\\).",
        solutionLatex: "A=\\dfrac{9}{2}"
      }
    ],
    examTips: [
      "CED Unit 8：积分应用 · CED Unit 8: Applications of integration",
      "先求交点，再画草图判断上下 · Find the intersections first, then sketch to decide which curve is on top.",
      "对 \\(y\\) 积分时用“右减左” · When integrating with respect to \\(y\\), use “right minus left.”",
      "交叉区域要分段 · Split the region where the curves cross.",
      "答案应为正；负值说明上下写反 · The answer should be positive; a negative value means the order was reversed."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.7",
        title: "定积分求值 · Evaluating Definite Integrals",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u8",
        code: "8.5",
        title: "曲线间面积 y · Area Between Curves as Functions of y",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u8",
        code: "8.7",
        title: "截面法：正方形与矩形 · Volumes with Cross Sections: Squares and Rectangles",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "竖条模型 · Vertical-strip model",
      "交点与积分限 · Intersections and limits",
      "上下关系 · Upper-lower relationships",
      "对 \\(y\\) 积分 · Integrating with respect to \\(y\\)",
      "分段面积 · Piecewise areas"
    ],
    checks: [
      "为什么面积要用“上减下”？ · Why is area computed as “upper minus lower”?",
      "两曲线交叉时如何处理？ · What should be done when the curves cross?",
      "什么时候对 \\(y\\) 积分更方便？ · When is integrating with respect to \\(y\\) more convenient?"
    ],
    summary: "两曲线间面积用上减下（或右减左）积分；先求交点，交叉时分段，结果应为正。 · The area between two curves is the integral of upper minus lower (or right minus left); find the intersections first, split where the curves cross, and expect a positive result."
  },
  'math/calc-u9/9.1': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能由参数方程求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 与 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)。 · Find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) and \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) from parametric equations.",
      "能用参数导数求切线、水平切线与竖直切线。 · Use parametric derivatives to find tangent lines, horizontal tangents, and vertical tangents.",
      "能识别并纠正把二阶导数直接相除等常见误用。 · Identify and correct common errors such as dividing second derivatives directly."
    ],
    essentialKnowledge: [
      "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 是两变化率之比 · \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) is the ratio of two rates of change.",
      "二阶导数不是二阶导数之比 · The second derivative is not the ratio of second derivatives.",
      "水平切线：\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\) · Horizontal tangent: \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\).",
      "竖直切线：\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\) · Vertical tangent: \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\).",
      "速率用勾股定理合成 · Speed is found from the Pythagorean combination of velocity components."
    ],
    connections: [
      "后续：9.2 参数二阶导数 · Follow-up: 9.2 Second derivatives of parametric equations.",
      "后续：9.3 参数弧长 · Follow-up: 9.3 Arc length of parametric curves.",
      "先修：2.2 导数定义 · Prerequisite: 2.2 Definition of the derivative."
    ],
    definition: "参数曲线由 \\(x=x(t)\\)、\\(y=y(t)\\) 给出。若 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\neq0\\)，则 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}t}}{\\frac{\\mathrm{d}x}{\\mathrm{d}t}}\\)。速度矢量为 \\(\\langle x'(t),y'(t)\\rangle\\)，速率为 \\(\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\)。 · A parametric curve is given by \\(x=x(t)\\), \\(y=y(t)\\). If \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\neq0\\), then \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}t}}{\\frac{\\mathrm{d}x}{\\mathrm{d}t}}\\). The velocity vector is \\(\\langle x'(t),y'(t)\\rangle\\), and speed is \\(\\sqrt{[x'(t)]^{2}+[y'(t)]^{2}}\\).",
    intuition: "参数 \\(t\\) 像时间：\\(x\\) 与 \\(y\\) 各自随时间变化，\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 是两者变化率之比，也就是轨迹斜率。 · The parameter \\(t\\) is like time: \\(x\\) and \\(y\\) each change with time, and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) is the ratio of their rates, which is the slope of the path.",
    intuitionDetailed: "求二阶导数时不能把 \\(\\dfrac{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}}{\\frac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}}\\) 当作答案；正确做法是先求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)，再对 \\(t\\) 求导，最后除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)。水平切线对应 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\) 且 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\neq0\\)；竖直切线对应 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\)。 · Do not compute the second derivative as \\(\\dfrac{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}}{\\frac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}}\\). Instead, first find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\), differentiate it with respect to \\(t\\), and then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\). A horizontal tangent corresponds to \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\) with \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\neq0\\); a vertical tangent corresponds to \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\).",
    formulas: [
      {
        latex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}t}}{\\frac{\\mathrm{d}x}{\\mathrm{d}t}}",
        note: "参数曲线斜率。 · Slope of a parametric curve."
      },
      {
        latex: "\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{\\frac{\\mathrm{d}x}{\\mathrm{d}t}}",
        note: "参数曲线二阶导数。 · Second derivative of a parametric curve."
      },
      {
        latex: "\\vec v(t)=\\langle x'(t),y'(t)\\rangle,\\quad |\\vec v|=\\sqrt{[x']^{2}+[y']^{2}}",
        note: "速度矢量与速率。 · Velocity vector and speed."
      }
    ],
    conditions: [
      "\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\neq0\\) 才能用斜率公式 · \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\neq0\\) is required for the slope formula.",
      "参数区间明确 · The parameter interval must be specified.",
      "二阶导数要先对 \\(t\\) 求导再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) · For the second derivative, differentiate with respect to \\(t\\) first, then divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\).",
      "水平/竖直切线分别看 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\) 与 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) · Horizontal and vertical tangents use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\), respectively.",
      "速率是标量，速度是矢量 · Speed is a scalar; velocity is a vector."
    ],
    keyPoints: [
      "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 是两变化率之比 · \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) is the ratio of two rates of change.",
      "二阶导数不是二阶导数之比 · The second derivative is not the ratio of second derivatives.",
      "水平切线：\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\) · Horizontal tangent: \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=0\\).",
      "竖直切线：\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\) · Vertical tangent: \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\).",
      "速率用勾股定理合成 · Speed is found from the Pythagorean combination of velocity components."
    ],
    misconceptions: [
      "把 \\(\\dfrac{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}}{\\frac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}}\\) 当作 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\) · Treating \\(\\dfrac{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}}{\\frac{\\mathrm{d}^{2}x}{\\mathrm{d}t^{2}}}\\) as \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\).",
      "忘记除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) · Forgetting to divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\).",
      "在 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\) 处仍用斜率公式 · Using the slope formula when \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0\\).",
      "把速度矢量与速率混为一谈 · Confusing the velocity vector with speed.",
      "求切线时忘记代回 \\(t\\) 对应的点 · Forgetting to substitute the parameter value when finding a tangent point."
    ],
    examples: [
      {
        title: "例 1 · 斜率 · Slope",
        prompt: "曲线 \\(x=t^{2}\\)，\\(y=t^{3}\\)。求 \\(t=1\\) 处的 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。 · For the curve \\(x=t^{2}\\), \\(y=t^{3}\\), find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) at \\(t=1\\).",
        steps: [
          "\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=2t\\)，\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=3t^{2}\\)。 · Differentiate each coordinate: \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=2t\\), \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=3t^{2}\\).",
          "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3t^{2}}{2t}=\\dfrac{3t}{2}\\)。 · Divide the derivatives: \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3t^{2}}{2t}=\\dfrac{3t}{2}\\).",
          "代入 \\(t=1\\)：\\(\\dfrac{3}{2}\\)。 · At \\(t=1\\): \\(\\dfrac{3}{2}\\)."
        ],
        solution: "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3}{2}\\)。 · Thus \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3}{2}\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3}{2}"
      },
      {
        title: "例 2 · 圆 · Circle",
        prompt: "曲线 \\(x=\\cos t\\)，\\(y=\\sin t\\)。求 \\(t=\\dfrac{\\pi}{4}\\) 处的切线斜率。 · For the curve \\(x=\\cos t\\), \\(y=\\sin t\\), find the tangent slope at \\(t=\\dfrac{\\pi}{4}\\).",
        steps: [
          "\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=-\\sin t\\)，\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=\\cos t\\)。 · Differentiate each coordinate: \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=-\\sin t\\), \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=\\cos t\\).",
          "\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\cot t\\)。 · Divide the derivatives: \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\cot t\\).",
          "代入 \\(t=\\dfrac{\\pi}{4}\\)：\\(-1\\)。 · At \\(t=\\dfrac{\\pi}{4}\\): \\(-1\\)."
        ],
        solution: "斜率为 \\(-1\\)。 · The slope is \\(-1\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-1"
      },
      {
        title: "例 3 · 二阶导数 · Second Derivative",
        prompt: "对 \\(x=t^{2}\\)，\\(y=t^{3}\\) 求 \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\)。 · For \\(x=t^{2}\\), \\(y=t^{3}\\), find \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\).",
        steps: [
          "已求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3t}{2}\\)。 · We already found \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3t}{2}\\).",
          "对 \\(t\\) 求导：\\(\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\dfrac{3t}{2}\\right)=\\dfrac{3}{2}\\)。 · Differentiate with respect to \\(t\\): \\(\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\dfrac{3t}{2}\\right)=\\dfrac{3}{2}\\).",
          "除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=2t\\)：\\(\\dfrac{3}{4t}\\)。 · Divide by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=2t\\): \\(\\dfrac{3}{4t}\\)."
        ],
        solution: "\\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{3}{4t}\\)。 · Thus \\(\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{3}{4t}\\).",
        solutionLatex: "\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{3}{4t}"
      }
    ],
    examTips: [
      "CED Unit 9：参数、极坐标与向量 · CED Unit 9: Parametric, polar, and vector-valued functions",
      "先分别求 \\(x'(t)\\)、\\(y'(t)\\)，再写比值 · Find \\(x'(t)\\) and \\(y'(t)\\) separately, then write their ratio.",
      "二阶导数按“先对 \\(t\\) 求导，再除以 \\(x'(t)\\)” · For the second derivative, differentiate with respect to \\(t\\) first, then divide by \\(x'(t)\\).",
      "切线题先求 \\(t\\) 对应的点 · For tangent-line problems, find the point corresponding to the parameter value first.",
      "水平/竖直切线分别令 \\(y'=0\\)、\\(x'=0\\) · Horizontal and vertical tangents use \\(y'=0\\) and \\(x'=0\\), respectively."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u9",
        code: "9.2",
        title: "参数二阶导数 · Second Derivatives of Parametric Equations",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u9",
        code: "9.3",
        title: "参数弧长 · Arc Length of Parametric Curves",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u2",
        code: "2.2",
        title: "导数定义 · Definition of the Derivative",
        relation: "先修 · Prerequisite"
      }
    ],
    development: [
      "参数曲线 · Parametric curves",
      "斜率公式 · Slope formula",
      "速度与速率 · Velocity and speed",
      "二阶导数 · Second derivative",
      "水平/竖直切线 · Horizontal and vertical tangents"
    ],
    checks: [
      "参数曲线斜率为什么是比值？ · Why is the slope of a parametric curve a ratio?",
      "二阶导数为什么不能直接相除？ · Why can the second derivative not be computed by direct division?",
      "水平切线与竖直切线的条件各是什么？ · What are the conditions for horizontal and vertical tangents?"
    ],
    summary: "参数曲线斜率是 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\) 与 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\) 之比；二阶导数要先对 \\(t\\) 求导再除以 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)。 · The slope of a parametric curve is the ratio of \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\) to \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\); the second derivative requires differentiating with respect to \\(t\\) first, then dividing by \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\)."
  },
  'math/calc-u10/10.11': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能写出函数在 \\(x=a\\) 处的 \\(n\\) 次泰勒多项式，并说明系数 \\(\\dfrac{f^{(k)}(a)}{k!}\\) 的来源。 · Write the \\(n\\)th-degree Taylor polynomial of a function at \\(x=a\\) and explain the origin of the coefficients \\(\\dfrac{f^{(k)}(a)}{k!}\\).",
      "能用常见麦克劳林展开近似函数值，并判断展开点与阶数。 · Use common Maclaurin expansions to approximate function values and choose the expansion point and degree.",
      "能用拉格朗日余项或下一项估计近似误差。 · Estimate approximation error using the Lagrange remainder or the next term."
    ],
    essentialKnowledge: [
      "泰勒多项式的系数为 \\(\\dfrac{f^{(k)}(a)}{k!}\\)；它在 \\(a\\) 处匹配函数值与直到 \\(n\\) 阶的导数。 · The coefficients of a Taylor polynomial are \\(\\dfrac{f^{(k)}(a)}{k!}\\); it matches the function value and derivatives up to order \\(n\\) at \\(a\\).",
      "麦克劳林多项式是 \\(a=0\\) 的特例；常见展开包括 \\(e^{x}\\)、\\(\\sin x\\)、\\(\\cos x\\) 与 \\(\\dfrac{1}{1-x}\\)。 · A Maclaurin polynomial is the special case \\(a=0\\); common expansions include \\(e^{x}\\), \\(\\sin x\\), \\(\\cos x\\), and \\(\\dfrac{1}{1-x}\\).",
      "泰勒多项式是局部近似；离展开点越远，误差通常越大。 · A Taylor polynomial is a local approximation; error usually grows farther from the expansion point.",
      "误差可用拉格朗日余项 \\(\\dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}\\) 估计。 · Error can be estimated with the Lagrange remainder \\(\\dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}\\).",
      "无穷级数展开有收敛半径；泰勒多项式本身只在有限阶近似。 · Infinite series expansions have radii of convergence; a Taylor polynomial itself is only a finite-order approximation."
    ],
    derivationNotes: [
      {
        from: "泰勒系数 · Taylor coefficients",
        to: "匹配导数 · Matching derivatives",
        note: "系数 \\(\\dfrac{f^{(k)}(a)}{k!}\\) 使 \\(P_n\\) 在 \\(a\\) 处匹配各阶导数。 · The coefficient \\(\\dfrac{f^{(k)}(a)}{k!}\\) makes \\(P_n\\) match the derivatives up to order \\(n\\) at \\(a\\)."
      },
      {
        from: "麦克劳林 · Maclaurin",
        to: "\\(a=0\\) 特例 · Special case \\(a=0\\)",
        note: "常见展开用于局部近似。 · Common expansions are used for local approximation."
      },
      {
        from: "余项 · Remainder",
        to: "误差估计 · Error estimate",
        note: "拉格朗日余项或下一项给出误差上界。 · The Lagrange remainder or the next term gives an error bound."
      }
    ],
    connections: [
      "先修：10.10 交替级数误差。 · Prerequisite: 10.10 Alternating-series error.",
      "后续：10.12 拉格朗日误差界与 10.13 收敛半径。 · Follow-up: 10.12 Lagrange error bounds and 10.13 radius of convergence.",
      "应用：计算器/物理中的小角近似与数值估算。 · Application: small-angle approximations and numerical estimates in calculators and physics."
    ],
    definition: "函数 \\(f\\) 在 \\(x=a\\) 处的 \\(n\\) 次泰勒多项式为 \\(P_n(x)=\\displaystyle\\sum_{k=0}^{n}\\dfrac{f^{(k)}(a)}{k!}(x-a)^{k}\\)，它匹配 \\(f\\) 在 \\(a\\) 处的函数值与直到 \\(n\\) 阶的导数。\\(a=0\\) 时称为麦克劳林多项式。泰勒多项式用于局部近似、估计函数值与分析误差。 · The \\(n\\)th-degree Taylor polynomial of \\(f\\) at \\(x=a\\) is \\(P_n(x)=\\displaystyle\\sum_{k=0}^{n}\\dfrac{f^{(k)}(a)}{k!}(x-a)^{k}\\), and it matches the function value and derivatives up to order \\(n\\) at \\(a\\). When \\(a=0\\), it is called a Maclaurin polynomial. Taylor polynomials are used for local approximation, estimating function values, and analyzing error.",
    intuition: "泰勒多项式是“用多项式模仿函数在一点附近的行为”：常数项对齐函数值，一次项对齐斜率，二次项对齐弯曲程度，依此类推。 · A Taylor polynomial imitates a function near a point using a polynomial: the constant term matches the function value, the linear term matches the slope, the quadratic term matches the curvature, and so on.",
    intuitionDetailed: "常见展开：\\(e^{x}=1+x+\\dfrac{x^{2}}{2!}+\\dfrac{x^{3}}{3!}+\\cdots\\)，\\(\\sin x=x-\\dfrac{x^{3}}{3!}+\\dfrac{x^{5}}{5!}-\\cdots\\)，\\(\\cos x=1-\\dfrac{x^{2}}{2!}+\\dfrac{x^{4}}{4!}-\\cdots\\)，\\(\\dfrac{1}{1-x}=1+x+x^{2}+\\cdots\\)（\\(|x|<1\\)）。多项式次数越高，通常在展开点附近越精确，但远离展开点可能迅速变差。 · Common expansions: \\(e^{x}=1+x+\\dfrac{x^{2}}{2!}+\\dfrac{x^{3}}{3!}+\\cdots\\), \\(\\sin x=x-\\dfrac{x^{3}}{3!}+\\dfrac{x^{5}}{5!}-\\cdots\\), \\(\\cos x=1-\\dfrac{x^{2}}{2!}+\\dfrac{x^{4}}{4!}-\\cdots\\), and \\(\\dfrac{1}{1-x}=1+x+x^{2}+\\cdots\\) for \\(|x|<1\\). Higher-degree polynomials are usually more accurate near the expansion point but may deteriorate rapidly far from it.",
    formulas: [
      {
        latex: "P_n(x)=\\sum_{k=0}^{n}\\dfrac{f^{(k)}(a)}{k!}(x-a)^{k}",
        note: "泰勒多项式。 · Taylor polynomial."
      },
      {
        latex: "e^{x}\\approx1+x+\\dfrac{x^{2}}{2!}+\\dfrac{x^{3}}{3!}",
        note: "指数函数的三次麦克劳林多项式。 · Cubic Maclaurin polynomial for the exponential function."
      },
      {
        latex: "\\sin x\\approx x-\\dfrac{x^{3}}{3!}+\\dfrac{x^{5}}{5!}",
        note: "正弦函数的五次麦克劳林多项式。 · Fifth-degree Maclaurin polynomial for sine."
      },
      {
        latex: "R_n(x)=\\dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}",
        note: "拉格朗日余项（\\(c\\) 在 \\(a\\) 与 \\(x\\) 之间）。 · Lagrange remainder (\\(c\\) lies between \\(a\\) and \\(x\\))."
      }
    ],
    conditions: [
      "\\(f\\) 在 \\(a\\) 处有直到 \\(n\\) 阶的导数 · \\(f\\) has derivatives up to order \\(n\\) at \\(a\\).",
      "泰勒多项式是局部近似，离 \\(a\\) 越远误差通常越大 · A Taylor polynomial is a local approximation; error usually grows farther from \\(a\\).",
      "余项/误差界需要额外估计 · The remainder or an error bound requires an additional estimate.",
      "无穷级数展开有收敛半径 · Infinite series expansions have a radius of convergence.",
      "阶乘与符号不要漏 · Do not omit factorials or signs."
    ],
    keyPoints: [
      "系数是 \\(\\dfrac{f^{(k)}(a)}{k!}\\) · The coefficients are \\(\\dfrac{f^{(k)}(a)}{k!}\\).",
      "多项式在 \\(a\\) 处匹配函数值与各阶导数 · The polynomial matches the function value and derivatives at \\(a\\).",
      "麦克劳林是 \\(a=0\\) 的特例 · Maclaurin is the special case \\(a=0\\).",
      "阶乘增长使高阶项可能很小 · Factorial growth can make higher-order terms very small.",
      "近似精度用余项估计 · Approximation accuracy is estimated with the remainder."
    ],
    misconceptions: [
      "忘记除以 \\(k!\\) · Forgetting to divide by \\(k!\\).",
      "把 \\(\\sin x\\) 的展开符号写错（正负交替） · Writing the signs in the expansion of \\(\\sin x\\) incorrectly (they alternate).",
      "认为泰勒多项式在整个定义域都精确 · Assuming a Taylor polynomial is exact on the entire domain.",
      "把 \\(P_n\\) 当作无穷级数 · Treating \\(P_n\\) as an infinite series.",
      "在 \\(a\\) 处没有 \\(n\\) 阶导数仍写 \\(P_n\\) · Writing \\(P_n\\) when the required derivatives at \\(a\\) do not exist."
    ],
    examples: [
      {
        title: "例 1 · 指数函数 · Exponential Function",
        prompt: "写出 \\(e^{x}\\) 在 \\(a=0\\) 处的三次泰勒多项式。 · Write the cubic Taylor polynomial of \\(e^{x}\\) at \\(a=0\\).",
        steps: [
          "\\(f^{(k)}(0)=1\\) 对所有 \\(k\\)。 · \\(f^{(k)}(0)=1\\) for every \\(k\\).",
          "\\(P_3(x)=1+x+\\dfrac{x^{2}}{2!}+\\dfrac{x^{3}}{3!}\\)。 · Write the polynomial: \\(P_3(x)=1+x+\\dfrac{x^{2}}{2!}+\\dfrac{x^{3}}{3!}\\)."
        ],
        solution: "\\(P_3(x)=1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}\\)。 · Thus \\(P_3(x)=1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}\\).",
        solutionLatex: "P_3(x)=1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}"
      },
      {
        title: "例 2 · 正弦函数 · Sine Function",
        prompt: "写出 \\(\\sin x\\) 在 \\(a=0\\) 处的五次泰勒多项式。 · Write the fifth-degree Taylor polynomial of \\(\\sin x\\) at \\(a=0\\).",
        steps: [
          "\\(\\sin0=0\\)，\\(\\cos0=1\\)，\\(-\\sin0=0\\)，\\(-\\cos0=-1\\)。 · \\(\\sin0=0\\), \\(\\cos0=1\\), \\(-\\sin0=0\\), and \\(-\\cos0=-1\\).",
          "只保留奇次项：\\(x-\\dfrac{x^{3}}{3!}+\\dfrac{x^{5}}{5!}\\)。 · Keep only the odd-degree terms: \\(x-\\dfrac{x^{3}}{3!}+\\dfrac{x^{5}}{5!}\\)."
        ],
        solution: "\\(P_5(x)=x-\\dfrac{x^{3}}{6}+\\dfrac{x^{5}}{120}\\)。 · Thus \\(P_5(x)=x-\\dfrac{x^{3}}{6}+\\dfrac{x^{5}}{120}\\).",
        solutionLatex: "P_5(x)=x-\\dfrac{x^{3}}{6}+\\dfrac{x^{5}}{120}"
      },
      {
        title: "例 3 · 近似 · Approximation",
        prompt: "用 \\(\\sqrt{1+x}\\approx1+\\dfrac{x}{2}-\\dfrac{x^{2}}{8}\\) 近似 \\(\\sqrt{1.1}\\)，并说明误差量级。 · Use \\(\\sqrt{1+x}\\approx1+\\dfrac{x}{2}-\\dfrac{x^{2}}{8}\\) to approximate \\(\\sqrt{1.1}\\), and describe the order of magnitude of the error.",
        steps: [
          "代入 \\(x=0.1\\)：\\(1+0.05-0.00125=1.04875\\)。 · Substitute \\(x=0.1\\): \\(1+0.05-0.00125=1.04875\\).",
          "真实值 \\(\\sqrt{1.1}\\approx1.04881\\)。 · The true value is \\(\\sqrt{1.1}\\approx1.04881\\).",
          "误差约 \\(6\\times10^{-5}\\)，下一项为 \\(\\dfrac{x^{3}}{16}\\approx6.25\\times10^{-5}\\)。 · The error is about \\(6\\times10^{-5}\\); the next term is \\(\\dfrac{x^{3}}{16}\\approx6.25\\times10^{-5}\\)."
        ],
        solution: "近似值 \\(1.04875\\)，与真值相差约 \\(6\\times10^{-5}\\)。 · The approximation is \\(1.04875\\), differing from the true value by about \\(6\\times10^{-5}\\).",
        solutionLatex: "\\sqrt{1.1}\\approx1.04875"
      }
    ],
    examTips: [
      "CED Unit 10：级数 · CED Unit 10: Series",
      "先列导数表，再代 \\(a\\) 与阶乘 · List the derivatives first, then substitute \\(a\\) and the factorials.",
      "常见展开背熟 \\(e^{x}\\)、\\(\\sin x\\)、\\(\\cos x\\)、\\(\\dfrac{1}{1-x}\\) · Memorize the common expansions for \\(e^{x}\\), \\(\\sin x\\), \\(\\cos x\\), and \\(\\dfrac{1}{1-x}\\).",
      "近似题写清展开点与阶数 · For approximation problems, state the expansion point and degree clearly.",
      "误差题用拉格朗日余项或下一项估计 · For error problems, use the Lagrange remainder or the next term."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.10",
        title: "交替级数误差 · Alternating-Series Error",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.12",
        title: "拉格朗日误差界 · Lagrange Error Bound",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.13",
        title: "半径与区间 · Radius and Interval of Convergence",
        relation: "后续 · Follow-up"
      }
    ],
    development: [
      "泰勒系数 · Taylor coefficients",
      "麦克劳林多项式 · Maclaurin polynomials",
      "常见展开 · Common expansions",
      "近似与误差 · Approximation and error",
      "收敛半径 · Radius of convergence"
    ],
    checks: [
      "泰勒系数为什么要除以 \\(k!\\)？ · Why are Taylor coefficients divided by \\(k!\\)?",
      "麦克劳林多项式与泰勒多项式的关系是什么？ · How is a Maclaurin polynomial related to a Taylor polynomial?",
      "为什么泰勒多项式只在展开点附近可靠？ · Why is a Taylor polynomial reliable only near the expansion point?"
    ],
    summary: "泰勒多项式用 \\(\\dfrac{f^{(k)}(a)}{k!}\\) 作系数，在 \\(a\\) 处匹配函数与各阶导数；用于局部近似与误差估计。 · Taylor polynomials use \\(\\dfrac{f^{(k)}(a)}{k!}\\) as coefficients and match the function and its derivatives at \\(a\\); they are used for local approximation and error estimation."
  },
  'bio/bio-u1/1.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分糖类、脂质、蛋白质与核酸的单体、聚合物与官能团。',
      '能解释脱水缩合与水解的方向，并计算连接数或水分子数。',
      '能用单体种类、连接方式与序列解释生物大分子的结构—功能关系。',
    ],
    essentialKnowledge: [
      '糖类、蛋白质与核酸由重复单体经脱水缩合连接；脂质通常不是由单一重复单体构成的聚合物。',
      '每形成一个共价连接通常脱去一分子水；完全水解时消耗等量水。',
      '单体的官能团决定溶解性、反应性与相互作用，序列决定蛋白质与核酸的信息。',
      '多糖可储能或提供结构支持，蛋白质承担催化与运输，核酸储存遗传信息，脂质构成膜并参与信号。',
      '不能用“大分子”三个字代替结构—功能分析，必须指出单体、连接方式与序列。',
    ],
    derivationNotes: [
      { from: '单体与官能团', to: '聚合物', note: '脱水缩合形成共价键并释放水；连接方式决定聚合物骨架。' },
      { from: '连接方式与序列', to: '结构—功能', note: '单体排列与分支决定溶解性、识别与储能/结构功能。' },
      { from: '聚合物', to: '水解', note: '加水断裂连接，释放单体供细胞利用。' },
    ],
    connections: [
      '先修：1.2 的元素组成与官能团决定单体性质。',
      '后续：1.4 蛋白质与 1.5 核酸把单体序列提升为信息与催化功能。',
      '应用：消化与细胞呼吸都依赖水解把聚合物拆成可吸收单体。',
    ],
    definition: '生物大分子主要有四类：碳水化合物、脂质、蛋白质和核酸。碳水化合物、蛋白质和核酸由较小的单体通过脱水缩合连成聚合物，聚合物又可通过水解拆回单体；脂质通常不是由单一重复单体构成的聚合物，而由甘油、脂肪酸等前体组装（类固醇等不属于聚合物）。四类分子都以碳骨架为基础，但元素组成与官能团不同：碳水与脂质主要含 C、H、O，蛋白质还含 N（部分含 S），核酸含 C、H、O、N、P。',
    intuition: '生物大分子像用不同积木搭成的结构：单体的种类和连接顺序决定最终形状，形状再决定功能。',
    intuitionDetailed: '脱水缩合每形成一个键就脱去一分子水；水解则消耗水把键断开。碳水化合物是主要能源与结构材料（淀粉、纤维素、糖原）；脂质疏水，适合储能、隔膜与信号；蛋白质由氨基酸序列决定折叠与功能；核酸由核苷酸序列储存和传递遗传信息。',
    formulas: [
      { latex: 'n\\,\\text{单体}\\xrightarrow{\\text{脱水缩合}}\\text{聚合物}+(n-1)\\,\\mathrm{H_2O}', note: '线性聚合物的合成方向；n 个单体形成 n-1 个连接。' },
      { latex: '\\text{聚合物}+(n-1)\\,\\mathrm{H_2O}\\xrightarrow{\\text{水解}}n\\,\\text{单体}', note: '完全水解是脱水缩合的逆过程。' },
      { latex: '(\\mathrm{C_6H_{10}O_5})_n', note: '淀粉/纤维素等多糖的简化式。' },
    ],
    conditions: ['脱水缩合需要单体具有可反应的官能团（如 —OH、—NH₂、—COOH）', '水解需要水与相应酶', '蛋白质功能依赖正确折叠，折叠由一级结构与环境决定', '脂质并非都由同一类单体聚合，部分脂质不是严格意义上的聚合物', '核酸的遗传信息由碱基序列而非糖—磷酸骨架决定'],
    keyPoints: ['四类大分子的单体与聚合物对应关系', '脱水缩合形成共价键并释放水', '水解是消化的化学基础', '结构决定功能：序列 → 折叠 → 活性', '碳骨架与官能团决定化学性质'],
    misconceptions: [
      '认为所有脂质都是聚合物（类固醇等并非由单体重复连接）',
      '把脱水缩合与水解的方向弄反',
      '认为蛋白质的功能只由氨基酸种类决定，忽略顺序与折叠',
      '把核酸的遗传信息归因于磷酸基团',
      '认为碳水化合物只供能，忽略纤维素等结构功能',
    ],
    examples: [
      {
        title: '例 1 · 脱水缩合',
        prompt: '两个氨基酸形成二肽时，脱去多少分子水？形成什么键？',
        steps: ['一个氨基酸的 —COOH 与另一个的 —NH₂ 反应。', '每形成一个肽键脱去一分子水。'],
        solution: '脱去 1 分子水，形成 1 个肽键。',
      },
      {
        title: '例 2 · 水解',
        prompt: '淀粉在消化道中如何被分解？',
        steps: ['淀粉酶催化淀粉的水解。', '水分子参与，把糖苷键断开。', '最终产物为葡萄糖。'],
        solution: '水解为葡萄糖，供细胞呼吸使用。',
      },
      {
        title: '例 3 · 结构决定功能',
        prompt: '为什么改变一个氨基酸可能使酶失活？',
        steps: ['氨基酸序列决定蛋白质折叠。', '活性位点的形状由折叠决定。', '替换关键氨基酸可能改变活性位点构象。'],
        solution: '一级结构改变 → 折叠改变 → 活性位点无法结合底物。',
      },
    ],
    examTips: [
      'CED Unit 1：生命化学',
      '用“单体—聚合物—键—功能”链条回答',
      '脱水缩合 vs 水解的方向要写清',
      '蛋白质题强调序列、折叠与活性位点',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.2', title: '元素与大分子', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.4', title: '蛋白质性质', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.5', title: '核酸', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.6', title: '酶结构与功能', relation: '应用' },
    ],
    development: ['四类大分子', '单体与聚合物', '脱水缩合与水解', '官能团与性质', '结构决定功能'],
    checks: ['四类大分子的单体分别是什么？', '脱水缩合与水解的方向有何不同？', '为什么蛋白质的氨基酸序列重要？'],
    summary: '四类生物大分子由不同单体经脱水缩合形成，水解可拆回单体；序列与官能团决定结构，结构决定功能。',
  },

  'bio/bio-u1/1.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能解释酶如何降低活化能而不改变 ΔG 与平衡。',
      '能读米氏曲线并说明 \\(V_{\\max}\\) 与 \\(K_m\\) 的含义。',
      '能预测竞争性、非竞争性抑制剂对 \\(K_m\\) 与 \\(V_{\\max}\\) 的影响。',
    ],
    essentialKnowledge: [
      '酶与底物在活性位点特异性结合，稳定过渡态并降低 \\(E_a\\)；反应前后酶不被消耗。',
      '酶不改变 \\(\\Delta G\\)、平衡常数或最终平衡位置，只加快达到平衡的速率。',
      '\\(V_{\\max}\\) 随酶浓度增大；\\(K_m\\) 是速率为 \\(\\dfrac{V_{\\max}}{2}\\) 时的底物浓度。',
      '竞争性抑制剂增大表观 \\(K_m\\)、不改变 \\(V_{\\max}\\)；非竞争性抑制剂降低 \\(V_{\\max}\\)、通常不改变 \\(K_m\\)。',
      '温度、pH、辅因子、辅酶与别构调节都会改变酶活性；高温或极端 pH 可导致变性。',
    ],
    derivationNotes: [
      { from: '过渡态', to: '降低 \\(E_a\\)', note: '活性位点稳定过渡态，降低活化能但不改变 \\(\\Delta G\\)。' },
      { from: '底物浓度', to: '米氏方程', note: '低 \\([S]\\) 近似一级，高 \\([S]\\) 饱和趋于 \\(V_{\\max}\\)。' },
      { from: '抑制剂', to: '动力学变化', note: '竞争性增大 \\(K_m\\)，非竞争性降低 \\(V_{\\max}\\)。' },
    ],
    connections: [
      '先修：1.4 的蛋白质结构决定活性位点形状。',
      '后续：3.1 与 3.2 展开酶催化与环境保护。',
      '应用：3.5 细胞呼吸的每一步都由酶催化。',
    ],
    definition: '酶是生物催化剂，绝大多数是球状蛋白质（少数为 RNA 核酶）。酶通过活性位点与底物特异性结合，形成酶—底物复合物，降低反应活化能 \\(E_a\\)，加快反应速率；酶不改变反应的 \\(\\Delta G\\) 与平衡点，反应前后自身不被消耗。酶的结构由一级序列决定，可被温度、pH、抑制剂与辅因子调节。',
    intuition: '酶像一把为底物定制的“模具”：底物只有摆进正确的凹槽，反应才容易发生；模具变形，底物就放不进去。',
    intuitionDetailed: '诱导契合模型：底物接近时活性位点发生构象微调，结合更紧密。竞争性抑制剂占据活性位点，非竞争性抑制剂结合别处改变构象，别构调节则通过效应物改变活性。辅因子（金属离子）与辅酶（如 NAD⁺）帮助催化。',
    formulas: [
      { latex: 'E+S\\rightleftharpoons ES\\rightarrow E+P', note: '酶促反应的简化路径。' },
      { latex: 'v=\\dfrac{V_{\\max}[S]}{K_m+[S]}', note: '米氏方程；低 \\([S]\\) 近似一级，高 \\([S]\\) 饱和。' },
      { latex: '\\Delta G^{\\circ\\prime}=-RT\\ln K_{\\mathrm{eq}}', note: '酶不改变 \\(\\Delta G^{\\circ\\prime}\\) 或 \\(K_{\\mathrm{eq}}\\)。' },
    ],
    conditions: ['酶具有特异性，活性位点形状与化学性质决定底物选择', '适宜温度与 pH；高温、过酸、过碱可使其变性', '底物浓度足够高时速率趋于 \\(V_{\\max}\\)', '许多酶需要金属离子或辅酶', '别构酶不服从简单米氏动力学'],
    keyPoints: ['降低 \\(E_a\\)，不改变 \\(\\Delta G\\)', '活性位点决定特异性', '酶可重复使用、微量高效', '温度、pH、抑制剂、辅因子调节活性', '一级结构决定折叠与活性位点'],
    misconceptions: [
      '认为酶提供能量或改变平衡常数',
      '认为酶在反应中被消耗',
      '认为温度越高越好（高温变性）',
      '把竞争性抑制剂（影响 \\(K_m\\)）与非竞争性抑制剂（影响 \\(V_{\\max}\\)）混淆',
      '认为所有酶都是蛋白质（忽略核酶）',
    ],
    examples: [
      {
        title: '例 1 · 活化能',
        prompt: '有酶与无酶时，反应坐标图的起点、终点与峰值如何变化？',
        steps: ['起点与终点相同，故 \\(\\Delta G\\) 相同。', '有酶时峰值降低，即 \\(E_a\\) 减小。'],
        solution: '酶只降低 \\(E_a\\)，不改变 \\(\\Delta G\\) 与平衡。',
      },
      {
        title: '例 2 · 变性',
        prompt: '为什么高温使酶失活，而低温通常只是降低活性？',
        steps: ['高温破坏氢键、疏水作用等非共价键，蛋白质变性。', '低温降低分子运动与碰撞频率，但结构通常可恢复。'],
        solution: '高温变性不可逆；低温抑制但常可逆。',
      },
      {
        title: '例 3 · 抑制',
        prompt: '竞争性抑制剂如何影响 \\(K_m\\) 与 \\(V_{\\max}\\)？',
        steps: ['抑制剂与底物竞争活性位点，表观亲和力下降，\\(K_m\\) 增大。', '提高底物浓度可挤掉抑制剂，\\(V_{\\max}\\) 不变。'],
        solution: '\\(K_m\\uparrow\\)，\\(V_{\\max}\\) 不变。',
      },
    ],
    examTips: [
      'CED Unit 1 / Unit 3：酶结构与催化',
      '实验题：温度、pH、底物浓度曲线；区分“变性”与“抑制”',
      'FRQ 用“结构 → 功能 → 证据”链条作答',
      '抑制剂题写清 \\(K_m\\) 与 \\(V_{\\max}\\) 的变化',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-prep-hs', code: 'P2.5', title: '酶', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.1', title: '酶催化', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.2', title: '环境影响酶', relation: '后续' },
    ],
    development: ['酶的定义与分类', '活性位点与诱导契合', '活化能与反应坐标', '温度、pH 与浓度', '抑制剂与辅因子'],
    checks: ['酶改变 \\(E_a\\) 还是 \\(\\Delta G\\)？', '高温与低温对酶活性的影响有何不同？', '竞争性抑制剂如何影响 \\(K_m\\) 与 \\(V_{\\max}\\)？'],
    summary: '酶通过活性位点降低活化能、加速反应，具有特异性且可重复使用；结构受温度、pH、抑制剂与辅因子调节。',
  },

  'bio/bio-u2/2.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用水势公式计算溶质势与总水势。',
      '能根据两侧水势判断水的净移动方向。',
      '能解释植物膨压、质壁分离与动物细胞渗透反应。',
    ],
    essentialKnowledge: [
      '\\(\\Psi=\\Psi_s+\\Psi_p\\)；纯水在标准大气压下水势为 0。',
      '\\(\\Psi_s=-iCRT\\)，溶质使水势降低，因此溶液 \\(\\Psi_s\\) 为负值。',
      '植物细胞吸水后细胞壁产生正膨压；动物细胞没有细胞壁，低渗时可能胀破。',
      '水从高水势向低水势移动；等渗溶液不一定等水势，还要考虑压力势。',
      '水通道蛋白加快水移动，但不改变水势差决定的方向。',
    ],
    derivationNotes: [
      { from: '溶质浓度', to: '溶质势', note: '\\(\\Psi_s=-iCRT\\)，溶质越多越负。' },
      { from: '细胞壁反压', to: '压力势', note: '植物细胞吸水产生正膨压，抬高总水势。' },
      { from: '两侧水势', to: '水移动方向', note: '水从高水势流向低水势，直到 \\(\\Psi\\) 相等。' },
    ],
    connections: [
      '先修：2.4/2.5 的膜通透性与运输方式。',
      '后续：2.8 主动运输用能量维持梯度。',
      '应用：植物灌溉、动物细胞保存液与质壁分离实验。',
    ],
    definition: '渗透是水分子通过选择透过性膜从水势高的一侧向水势低的一侧扩散。水势 \\(\\psi=\\psi_s+\\psi_p\\)，其中溶质势 \\(\\psi_s=-iCRT\\)，压力势 \\(\\psi_p\\) 反映流体静压或细胞壁反压。水总是从 \\(\\psi\\) 较高处流向 \\(\\psi\\) 较低处。',
    intuition: '水势是“水的自由能高度”：纯水最高，溶质越多水势越低；水往低处流，直到两侧水势相等。',
    intuitionDetailed: '植物细胞吸水后原生质体膨胀，细胞壁产生正的 \\(\\psi_p\\)，使水势回升，最终与外界平衡，形成膨压。外界溶液水势过低时，细胞失水发生质壁分离。动物细胞没有细胞壁，低渗时可能吸水胀破，高渗时皱缩。水通道蛋白（aquaporin）加快水跨膜。',
    formulas: [
      { latex: '\\psi=\\psi_s+\\psi_p', note: '水势 = 溶质势 + 压力势。' },
      { latex: '\\psi_s=-iCRT', note: '溶质势；\\(i\\) 为范特霍夫因子，\\(T\\) 用 K。' },
      { latex: '\\text{水从 }\\psi\\text{ 高}\\rightarrow\\psi\\text{ 低}', note: '渗透方向判据。' },
    ],
    conditions: ['膜对水可透、对溶质选择透过', '\\(T\\) 必须用开尔文温度', '开放容器中 \\(\\psi_p=0\\)；植物细胞膨压使 \\(\\psi_p>0\\)', '\\(i\\) 反映溶质解离的粒子数（NaCl 约 2，葡萄糖约 1）', '水势是相对值，需指定参考状态'],
    keyPoints: ['纯水水势为 0（标准压力下）', '溶质降低水势，故 \\(\\psi_s\\le0\\)', '压力势可正可负（动物细胞可为负）', '水从高水势流向低水势', '植物细胞靠膨压维持直立'],
    misconceptions: [
      '认为水从溶质浓度高的一侧流向低的一侧（应看水势，不是单一浓度）',
      '忽略压力势，只算溶质势',
      '温度用摄氏度代入 \\(\\psi_s=-iCRT\\)',
      '认为动物细胞在纯水中也会像植物细胞一样产生膨压',
      '把质壁分离与细胞凋亡混为一谈',
    ],
    examples: [
      {
        title: '例 1 · 溶质势',
        prompt: '求 \\(0.10\\,\\mathrm{mol/L}\\) NaCl 溶液在 \\(27^\\circ\\mathrm{C}\\) 的溶质势（\\(R=0.0831\\,\\mathrm{L\\,bar\\,mol^{-1}\\,K^{-1}}\\)）。',
        steps: ['\\(i=2\\)，\\(T=300\\,\\mathrm{K}\\)。', '\\(\\psi_s=-iCRT=-2(0.10)(0.0831)(300)\\)。', '\\(\\psi_s\\approx-4.99\\,\\mathrm{bar}\\approx-0.50\\,\\mathrm{MPa}\\)。'],
        solution: '\\(\\psi_s\\approx-0.50\\,\\mathrm{MPa}\\)。',
        solutionLatex: '\\psi_s\\approx-0.50\\,\\mathrm{MPa}',
      },
      {
        title: '例 2 · 植物细胞',
        prompt: '某植物细胞 \\(\\psi_s=-0.60\\,\\mathrm{MPa}\\)，\\(\\psi_p=0.20\\,\\mathrm{MPa}\\)。把它放入纯水，水往哪边走？最终如何平衡？',
        steps: ['细胞内 \\(\\psi=-0.60+0.20=-0.40\\,\\mathrm{MPa}\\)；纯水 \\(\\psi=0\\)。', '水从高水势（纯水）进入细胞。', '细胞膨胀使 \\(\\psi_p\\) 升高，直到 \\(\\psi=0\\)，此时 \\(\\psi_p=0.60\\,\\mathrm{MPa}\\)。'],
        solution: '水进入细胞，最终膨压升至 \\(0.60\\,\\mathrm{MPa}\\)。',
        solutionLatex: '\\psi_p=0.60\\,\\mathrm{MPa}',
      },
      {
        title: '例 3 · 动物细胞',
        prompt: '动物细胞放入高渗溶液会发生什么？',
        steps: ['外界溶质势很低，水势低于细胞内。', '水从细胞流出。', '细胞失水皱缩，严重时功能受损。'],
        solution: '细胞失水皱缩（crenation）。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞膜与运输',
      '先算两侧水势，再判断水流方向',
      '\\(\\psi_s=-iCRT\\) 中温度用 K，\\(i\\) 别漏',
      '植物细胞记得加压力势；动物细胞通常 \\(\\psi_p=0\\)',
      '实验题常用质壁分离判断外界溶液浓度',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.4', title: '膜通透性', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.5', title: '膜运输', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.8', title: '主动运输', relation: '后续' },
    ],
    development: ['渗透与扩散', '水势组成', '溶质势计算', '膨压与质壁分离', '动物细胞渗透行为'],
    checks: ['水势由哪两部分组成？', '为什么植物细胞吸水后水势会回升？', '\\(\\psi_s=-iCRT\\) 中 \\(i\\) 与 \\(T\\) 如何取值？'],
    summary: '水从高水势流向低水势；水势 = 溶质势 + 压力势，植物细胞靠膨压平衡，动物细胞无壁则易胀破或皱缩。',
  },

  'bio/bio-u2/2.8': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分原发性与继发性主动运输的能量来源。',
      '能说明 Na⁺/K⁺ 泵的化学计量与生电效应。',
      '能计算逆浓度梯度运输所需的最小自由能并与 ATP 供能比较。',
    ],
    essentialKnowledge: [
      '原发性主动运输直接水解 ATP；继发性主动运输利用已建立的离子梯度。',
      'Na⁺/K⁺ ATPase 每水解 1 个 ATP，泵出 3 个 Na⁺、泵入 2 个 K⁺，净移出 1 个正电荷。',
      '主动运输逆电化学梯度进行，需要转运蛋白，具有饱和性。',
      '继发性主动运输依赖原发性泵维持的 Na⁺ 梯度，如小肠葡萄糖同向转运。',
      'ATP 供应、温度和转运蛋白数量都会影响主动运输速率。',
    ],
    derivationNotes: [
      { from: 'ATP 水解', to: '原发性主动运输', note: '泵蛋白直接利用 ATP 逆梯度移动离子。' },
      { from: '离子梯度', to: '继发性主动运输', note: 'Na⁺ 顺梯度回流驱动葡萄糖等逆梯度吸收。' },
      { from: '3 Na⁺/2 K⁺ 化学计量', to: '生电泵', note: '每循环净移出 1 个正电荷，维持膜电位。' },
    ],
    connections: [
      '先修：2.7 的水势与电化学梯度。',
      '后续：2.9 区隔化与 3.5 细胞呼吸中的质子梯度。',
      '应用：小肠吸收葡萄糖、肾脏重吸收与神经静息电位。',
    ],
    definition: '主动运输是细胞逆浓度梯度或电化学梯度移动物质的过程，需要载体蛋白并消耗能量。原发性主动运输直接水解 ATP 供能（如 Na⁺/K⁺ 泵、质子泵）；继发性主动运输利用已建立的离子梯度驱动其他分子（如 Na⁺—葡萄糖协同运输）。主动运输具有特异性、饱和性与方向性。',
    intuition: '主动运输像“逆流而上”：物质本应顺梯度扩散，但细胞用 ATP 或现成离子梯度把它硬推上去。',
    intuitionDetailed: 'Na⁺/K⁺ 泵每水解 1 个 ATP，把 3 个 Na⁺ 泵出、2 个 K⁺ 泵入，维持膜电位与渗透平衡。继发性主动运输不直接水解 ATP，而是借 Na⁺ 顺梯度进入细胞的能量，把葡萄糖等逆梯度带入。主动运输使细胞维持与外界不同的离子组成。',
    formulas: [
      { latex: '\\text{ATP}+\\mathrm{H_2O}\\rightarrow\\text{ADP}+\\mathrm{P_i}+\\text{能量}', note: '原发性主动运输的直接能源。' },
      { latex: '3\\,\\mathrm{Na^+}_{\\mathrm{in}}+2\\,\\mathrm{K^+}_{\\mathrm{out}}+\\mathrm{ATP}\\rightarrow3\\,\\mathrm{Na^+}_{\\mathrm{out}}+2\\,\\mathrm{K^+}_{\\mathrm{in}}+\\mathrm{ADP}+\\mathrm{P_i}', note: 'Na⁺/K⁺ 泵的化学计量：3 个 Na⁺ 出、2 个 K⁺ 入。' },
      { latex: '\\Delta G=RT\\ln\\dfrac{C_2}{C_1}+zF\\Delta V', note: '逆电化学梯度运输的自由能代价。' },
    ],
    conditions: ['需要载体蛋白（泵或协同转运体）', '需要能量：直接 ATP 或现成离子梯度', '运输方向逆浓度/电化学梯度', '载体具有特异性，可被饱和', '膜必须保持完整性；ATP 供应不足时泵停止'],
    keyPoints: ['原发性主动运输直接消耗 ATP', '继发性主动运输利用离子梯度', 'Na⁺/K⁺ 泵维持膜电位与渗透平衡', '主动运输可建立并维持浓度差', '与 facilitated diffusion 的区别是“是否耗能、是否逆梯度”'],
    misconceptions: [
      '认为主动运输不需要载体',
      '把继发性主动运输当作不耗能（它间接依赖 ATP）',
      '认为 Na⁺/K⁺ 泵 1:1 交换（实际 3:2）',
      '把主动运输与胞吞胞吐混为一谈',
      '认为主动运输可以无限加速（载体会饱和）',
    ],
    examples: [
      {
        title: '例 1 · 钠钾泵',
        prompt: 'Na⁺/K⁺ 泵每水解 1 个 ATP 运输多少离子？方向如何？',
        steps: ['3 个 Na⁺ 泵出细胞。', '2 个 K⁺ 泵入细胞。'],
        solution: '3 Na⁺ 出、2 K⁺ 入，净移出 1 个正电荷，具生电性。',
      },
      {
        title: '例 2 · 继发性主动运输',
        prompt: '小肠上皮细胞如何吸收葡萄糖？',
        steps: ['基底侧 Na⁺/K⁺ 泵把 Na⁺ 泵出，维持低胞内 Na⁺。', 'Na⁺ 顺梯度经协同转运体进入细胞，同时把葡萄糖逆梯度带入。', '葡萄糖再经 facilitated diffusion 进入血液。'],
        solution: 'Na⁺ 梯度驱动葡萄糖的继发性主动运输。',
      },
      {
        title: '例 3 · 对比',
        prompt: 'facilitated diffusion 与主动运输有何不同？',
        steps: ['前者顺梯度、不耗能；后者逆梯度、耗能。', '两者都需要膜蛋白，且都可饱和。'],
        solution: '方向与能量需求不同；共同点是特异性与饱和性。',
      },
    ],
    examTips: [
      'CED Unit 2：膜运输',
      '先判断顺/逆梯度，再判断是否耗能',
      '继发性主动运输要指出“利用什么梯度”',
      'Na⁺/K⁺ 泵的 3:2 化学计量常考',
      '缺氧会间接抑制主动运输',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.5', title: '膜运输', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.6', title: '促进扩散', relation: '对比' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.7', title: '渗透与水势', relation: '相关' },
    ],
    development: ['浓度梯度与电化学梯度', '原发性主动运输', '继发性主动运输', '钠钾泵', '与被动运输对比'],
    checks: ['原发性与继发性主动运输的区别是什么？', 'Na⁺/K⁺ 泵为什么具生电性？', '缺氧为什么会抑制主动运输？'],
    summary: '主动运输逆梯度、需载体与能量；原发性直接耗 ATP，继发性借离子梯度，Na⁺/K⁺ 泵是经典例子。',
  },


  'bio/bio-u4/4.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能按“接收—转导—响应”描述一条信号通路。',
      '能比较 G 蛋白偶联受体、受体酪氨酸激酶与细胞内受体。',
      '能解释级联放大与信号终止为何同等重要。',
    ],
    essentialKnowledge: [
      '配体与受体特异性结合引起受体构象改变，启动细胞内信号传递。',
      'G 蛋白偶联受体激活腺苷酸环化酶，把 ATP 转化为 cAMP，激活蛋白激酶 A。',
      '受体酪氨酸激酶通过二聚化与自磷酸化招募下游蛋白，启动 RAS/MAPK 等通路。',
      '第二信使（cAMP、Ca²⁺、IP₃、DAG）与磷酸化级联可把信号放大数千倍。',
      '磷酸酶、GTP 水解与受体内吞负责终止信号；同一信号在不同细胞中可产生不同响应。',
    ],
    derivationNotes: [
      { from: '配体结合', to: '受体构象改变', note: '膜受体或胞内受体把信号跨膜/跨区室传递。' },
      { from: 'G 蛋白与腺苷酸环化酶', to: 'cAMP', note: '第二信使把小信号放大为大规模激酶激活。' },
      { from: '磷酸化级联', to: '响应', note: '转录、代谢或细胞运动改变；磷酸酶负责终止。' },
    ],
    connections: [
      '先修：4.1 细胞通讯的类型与距离。',
      '后续：4.3 信号转导细节与 4.4 反馈调节。',
      '应用：肾上腺素升血糖、胰岛素降血糖与药物靶点。',
    ],
    definition: '信号转导（signal transduction）把细胞外信号转换为细胞内的响应。基本过程为：配体与受体结合（接收）→ 细胞内信号分子依次传递并放大（转导）→ 效应器产生响应（如基因表达、代谢改变、细胞运动）。受体包括 G 蛋白偶联受体、受体酪氨酸激酶、离子通道型受体和胞内受体。',
    intuition: '信号像“接力赛”：配体只敲一下门，门内的人把消息一层层传下去，最后很多人一起行动。',
    intuitionDetailed: '第二信使（cAMP、Ca²⁺、IP₃、DAG）把小信号放大；磷酸化级联由激酶与磷酸酶共同控制，既能放大也能关闭。信号的特异性来自“配体—受体”配对，终止机制包括配体降解、受体脱敏、磷酸酶水解等。',
    formulas: [
      { latex: '\\text{配体}\\to\\text{受体}\\to\\text{转导}\\to\\text{响应}', note: '信号通路的基本顺序。' },
      { latex: '\\text{1 个配体}\\to\\text{多个第二信使}\\to\\text{放大响应}', note: '级联放大的定性关系。' },
    ],
    conditions: ['受体与配体具有特异性', '信号可局部作用（旁分泌/自分泌）或经血液长距离作用（内分泌）', '通路需要放大与终止机制', '同一信号在不同细胞可产生不同响应', '受体数量与敏感性可被调节'],
    keyPoints: ['接收—转导—响应三步', '第二信使放大信号', '磷酸化级联可放大也可整合', '信号必须能终止', '同一配体在不同细胞响应不同'],
    misconceptions: [
      '认为配体进入细胞才能起作用（多数亲水配体不进入）',
      '把信号转导与信号接收混为一谈',
      '认为放大等于失控（需要终止机制）',
      '认为一种信号只产生一种响应',
      '忽略受体在膜上还是胞内',
    ],
    examples: [
      {
        title: '例 1 · 肾上腺素',
        prompt: '肾上腺素如何使肝细胞释放葡萄糖？',
        steps: ['肾上腺素与肝细胞膜上的受体结合。', '激活 G 蛋白 → 腺苷酸环化酶 → cAMP 升高。', '激活蛋白激酶 A，促进糖原分解，抑制糖原合成。'],
        solution: '通过 cAMP 级联促进糖原分解、升高血糖。',
      },
      {
        title: '例 2 · 胰岛素',
        prompt: '胰岛素信号与胰高血糖素有何相反作用？',
        steps: ['胰岛素与受体酪氨酸激酶结合。', '促进葡萄糖摄取、糖原合成与脂肪合成。'],
        solution: '胰岛素降低血糖，与胰高血糖素/肾上腺素相反。',
      },
      {
        title: '例 3 · 特异性',
        prompt: '为什么同一信号在不同细胞中响应不同？',
        steps: ['不同细胞表达的受体与下游蛋白不同。', '基因表达程序不同。'],
        solution: '受体与下游通路的组合决定响应。',
      },
    ],
    examTips: [
      'CED Unit 4：细胞通讯',
      '用“配体—受体—第二信使—效应器—响应”链条作答',
      '区分亲水配体（膜受体）与疏水配体（胞内受体）',
      '说明放大与终止，避免只写“信号传递”',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.1', title: '细胞通讯', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.3', title: '信号转导', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u4', code: '4.4', title: '反馈', relation: '相关' },
    ],
    development: ['配体与受体', '接收—转导—响应', '第二信使与级联', '放大与终止', '细胞类型特异性'],
    checks: ['信号通路的三个基本步骤是什么？', '第二信使的作用是什么？', '为什么同一信号在不同细胞响应不同？'],
    summary: '信号转导通过配体—受体结合、第二信使与磷酸化级联把外部信号放大并转化为细胞响应，且必须可终止。',
  },

  'bio/bio-u5/5.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用分离定律与自由组合定律计算单基因、双基因杂交概率。',
      '能用测交判断显性个体的基因型。',
      '能用卡方检验判断观察值是否符合孟德尔比例。',
    ],
    essentialKnowledge: [
      '分离定律：同源染色体上的等位基因在减数第一次分裂分离，各自进入不同配子。',
      '自由组合定律只适用于非同源染色体上的基因；连锁基因需考虑重组。',
      '完全显性时 \\(Aa\\times Aa\\) 表型比为 \\(3:1\\)，\\(AaBb\\times AaBb\\) 为 \\(9:3:3:1\\)。',
      '测交用隐性纯合子：子代全显性提示亲本纯合，\\(1:1\\) 提示杂合。',
      '卡方检验用 \\(\\chi^2=\\sum\\dfrac{(O-E)^2}{E}\\)，\\(df=n-1\\)，\\(p>0.05\\) 时不拒绝期望模型。',
    ],
    derivationNotes: [
      { from: '减数第一次分裂', to: '分离定律', note: '同源染色体分离，等位基因进入不同配子。' },
      { from: '非同源染色体', to: '自由组合', note: '两对基因独立分配，产生 \\(9:3:3:1\\)。' },
      { from: '观察值与期望值', to: '卡方检验', note: '\\(\\chi^2\\) 小则符合期望，\\(p>0.05\\) 不拒绝。' },
    ],
    connections: [
      '先修：5.1/5.2 减数分裂与遗传多样性。',
      '后续：5.4 非孟德尔遗传与 5.6 染色体遗传。',
      '应用：家系分析、遗传咨询与作物育种。',
    ],
    definition: '孟德尔遗传以等位基因、分离定律与自由组合定律为基础。二倍体生物每个基因有两个等位基因；减数分裂时同源染色体分离，等位基因随之分离；非同源染色体上的基因自由组合。单基因杂交 \\(Aa\\times Aa\\) 的表型比约为 \\(3:1\\)，双基因杂交 \\(AaBb\\times AaBb\\) 约为 \\(9:3:3:1\\)（完全显性、无连锁时）。',
    intuition: '每个亲本把一半等位基因放进配子；受精时配子随机组合，概率用乘法与加法计算。',
    intuitionDetailed: '棋盘格（Punnett square）把雌雄配子所有组合列出；概率法更快：独立事件相乘，互斥事件相加。测交用隐性纯合子判断显性个体的基因型。自由组合只适用于非同源染色体上的基因；连锁基因的比会偏离 \\(9:3:3:1\\)。',
    formulas: [
      { latex: 'Aa\\times Aa\\Rightarrow\\dfrac{3}{4}A\\!-:\\dfrac{1}{4}aa', note: '完全显性单基因杂交。' },
      { latex: 'AaBb\\times AaBb\\Rightarrow9:3:3:1', note: '两对独立基因、完全显性。' },
      { latex: 'P(A\\text{ 且 }B)=P(A)P(B)', note: '独立事件乘法规则。' },
    ],
    conditions: ['二倍体、有性生殖', '减数分裂正常，同源染色体分离', '受精随机且样本足够大', '完全显性时表型比才为 3:1/9:3:3:1', '自由组合要求基因位于非同源染色体上（或距离足够远）'],
    keyPoints: ['分离定律：等位基因进入不同配子', '自由组合：非同源基因独立分配', '3:1 与 9:3:3:1 是理想比', '测交判断显性个体基因型', '概率用乘法和加法'],
    misconceptions: [
      '认为显性等位基因一定更常见',
      '把基因型比与表型比混淆',
      '认为 3:1 在所有杂交中都成立',
      '忽略连锁对 9:3:3:1 的影响',
      '认为测交需要知道显性个体的基因型',
    ],
    examples: [
      {
        title: '例 1 · 单基因',
        prompt: '\\(Aa\\times Aa\\)，子代表型比与 \\(aa\\) 概率是多少？',
        steps: ['配子各为 \\(A\\)、\\(a\\)，概率各 \\(\\dfrac{1}{2}\\)。', '\\(aa\\) 概率 \\(\\dfrac{1}{2}\\times\\dfrac{1}{2}=\\dfrac{1}{4}\\)。', '显性表型 \\(1-\\dfrac{1}{4}=\\dfrac{3}{4}\\)。'],
        solution: '\\(3:1\\)，\\(aa\\) 概率 \\(\\dfrac{1}{4}\\)。',
        solutionLatex: 'P(aa)=\\dfrac{1}{4}',
      },
      {
        title: '例 2 · 双基因',
        prompt: '\\(AaBb\\times AaBb\\)，子代 \\(A\\!-\\!B\\!-\\) 的概率是多少？',
        steps: ['两对基因独立。', '\\(P(A\\!-)=\\dfrac{3}{4}\\)，\\(P(B\\!-)=\\dfrac{3}{4}\\)。', '\\(P(A\\!-\\!B\\!-)=\\dfrac{3}{4}\\times\\dfrac{3}{4}=\\dfrac{9}{16}\\)。'],
        solution: '\\(\\dfrac{9}{16}\\)，对应 \\(9:3:3:1\\) 中的 9。',
        solutionLatex: 'P(A\\!-\\!B\\!-)=\\dfrac{9}{16}',
      },
      {
        title: '例 3 · 测交',
        prompt: '如何判断一株高茎豌豆是 \\(AA\\) 还是 \\(Aa\\)？',
        steps: ['与矮茎 \\(aa\\) 测交。', '若后代全为高茎，亲本可能为 \\(AA\\)；若出现矮茎，则为 \\(Aa\\)。'],
        solution: '测交后看是否出现隐性表型。',
      },
    ],
    examTips: [
      'CED Unit 5：遗传',
      '先写亲本基因型，再列配子，最后算概率',
      '区分基因型比与表型比',
      '自由组合题先判断基因是否连锁',
      '测交用于判断显性个体基因型',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u5', code: '5.1', title: '减数分裂', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.2', title: '减数分裂与遗传多样性', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.4', title: '非孟德尔遗传', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.6', title: '染色体遗传', relation: '后续' },
    ],
    development: ['等位基因与基因型', '分离定律', '自由组合定律', '棋盘格与概率法', '测交与连锁'],
    checks: ['分离定律的细胞学基础是什么？', '3:1 与 9:3:3:1 的条件是什么？', '测交如何判断显性个体基因型？'],
    summary: '孟德尔遗传由分离与自由组合定律支配；3:1 与 9:3:3:1 是理想比，概率法比棋盘格更快。',
  },

  'bio/bio-u5/5.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分不完全显性、共显性与完全显性。',
      '能解 ABO 血型与伴 X 隐性遗传的概率题。',
      '能解释多效性、上位效应、多基因遗传与母系遗传。',
    ],
    essentialKnowledge: [
      '不完全显性时杂合子表型居中，基因型比等于表型比；共显性时两个等位基因同时表达。',
      'ABO 血型由 \\(I^A\\)、\\(I^B\\)、\\(i\\) 三个复等位基因决定，\\(I^A\\) 与 \\(I^B\\) 共显性。',
      '伴 X 隐性性状在男性中更常见，因为男性只有一条 X 染色体。',
      '多效性指一个基因影响多个性状；上位效应指一个基因掩盖另一个基因的表型。',
      '多基因性状呈连续变异并受环境影响；线粒体与叶绿体基因随母系传递。',
    ],
    derivationNotes: [
      { from: '杂合子表型', to: '不完全/共显性', note: '居中型与同时表达型的区别。' },
      { from: '复等位基因', to: 'ABO 血型', note: '\\(I^A\\)、\\(I^B\\) 共显性，\\(i\\) 隐性。' },
      { from: '性染色体', to: '伴性遗传', note: '男性只有一条 X，隐性性状更易表现。' },
    ],
    connections: [
      '先修：5.3 的分离与自由组合。',
      '后续：5.5 环境对表型的影响与 5.6 染色体遗传。',
      '应用：血型鉴定、色盲家系分析与线粒体病遗传咨询。',
    ],
    definition: '非孟德尔遗传指不符合简单完全显性、单基因分离比的遗传现象，包括不完全显性、共显性、复等位基因、多效性、上位效应、多基因遗传、伴性遗传、细胞质遗传与基因组印记。这些现象仍遵循染色体与减数分裂的基本规律，只是表型与基因型的关系更复杂。',
    intuition: '孟德尔只描述了“一个基因、两个等位、完全显性”的最简情形；真实生物里，基因之间会互相影响，表型也可能介于两者之间。',
    intuitionDetailed: '不完全显性时杂合子表型居中（红花×白花→粉花）；共显性时两个等位基因都表达（AB 血型）。复等位基因（ABO 的 \\(I^A,I^B,i\\)）在群体中存在多个版本。上位效应是一个基因掩盖另一个基因的表型；多基因遗传由多个基因累加决定连续性状。伴性基因位于性染色体上，细胞质基因随母系传递。',
    formulas: [
      { latex: '\\text{ABO}:\\;I^A,\\;I^B,\\;i', note: '复等位基因；\\(I^A\\) 与 \\(I^B\\) 共显性，\\(i\\) 隐性。' },
      { latex: '\\text{不完全显性}:\\;AA\\times aa\\Rightarrow Aa\\text{ 中间表型}', note: '杂合子表型居中。' },
    ],
    conditions: ['不完全显性/共显性改变的是表型表现，不是分离定律', '复等位基因在群体中可有多个版本，但每个二倍体个体最多两个', '上位效应涉及两个或更多基因的相互作用', '多基因性状通常连续分布并受环境影响', '伴性遗传的比在两性间不同'],
    keyPoints: ['不完全显性：杂合子居中', '共显性：两个等位基因同时表达', '复等位基因：群体多版本、个体两个', '上位效应：一个基因掩盖另一个', '多基因遗传：连续性状、环境也起作用'],
    misconceptions: [
      '认为非孟德尔遗传违反分离定律',
      '把不完全显性与共显性混为一谈',
      '认为复等位基因意味着一个个体有很多个等位基因',
      '把多基因遗传与多效性混淆（前者多基因一性状，后者一基因多性状）',
      '认为伴性遗传只影响男性',
    ],
    examples: [
      {
        title: '例 1 · 不完全显性',
        prompt: '红花 \\(RR\\) 与白花 \\(rr\\) 杂交，\\(F_1\\) 与 \\(F_2\\) 表型如何？',
        steps: ['\\(F_1\\) 全为 \\(Rr\\)，表型为粉色。', '\\(F_2\\) 基因型 \\(1RR:2Rr:1rr\\)，表型 \\(1\\) 红：\\(2\\) 粉：\\(1\\) 白。'],
        solution: '\\(F_1\\) 粉色；\\(F_2\\) 为 \\(1:2:1\\)。',
      },
      {
        title: '例 2 · 共显性',
        prompt: '\\(I^A I^B\\) 个体的血型是什么？',
        steps: ['\\(I^A\\) 与 \\(I^B\\) 都表达。', '红细胞表面同时有 A 与 B 抗原。'],
        solution: 'AB 型，共显性。',
      },
      {
        title: '例 3 · 伴性遗传',
        prompt: '为什么红绿色盲在男性中更常见？',
        steps: ['基因位于 X 染色体上，隐性。', '男性只有一条 X，携带即表现；女性需两条 X 都携带。'],
        solution: '男性是半合子，隐性基因更容易表现。',
      },
    ],
    examTips: [
      'CED Unit 5：非孟德尔遗传',
      '先判断是显性关系、基因互作还是染色体位置',
      '不完全显性与共显性的区别用“混合 vs 同时表达”',
      '伴性遗传写清性别与基因型',
      '多基因性状强调连续分布与环境',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u5', code: '5.3', title: '孟德尔遗传', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.5', title: '环境影响表型', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.6', title: '染色体遗传', relation: '后续' },
    ],
    development: ['不完全显性', '共显性', '复等位基因', '上位与多效', '多基因与伴性遗传'],
    checks: ['不完全显性与共显性有何不同？', '复等位基因与多基因遗传有什么区别？', '为什么伴性隐性性状在男性中更常见？'],
    summary: '非孟德尔遗传包括不完全显性、共显性、复等位、上位、多基因、伴性与细胞质遗传；它们仍以染色体分离为基础。',
  },

  'bio/bio-u6/6.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能比较 DNA 与 RNA 的糖、碱基、链数与方向性。',
      '能写出互补链并应用 A–T、G–C、A–U 配对规则。',
      '能用查加夫规则计算双链 DNA 的碱基组成。',
    ],
    essentialKnowledge: [
      '核苷酸由五碳糖、磷酸与含氮碱基组成；DNA 含脱氧核糖与 T，RNA 含核糖与 U。',
      'DNA 双链反向平行，一条链为 5′→3′，另一条为 3′→5′。',
      'A 与 T 之间 2 个氢键，G 与 C 之间 3 个氢键；GC 含量越高，DNA 越稳定。',
      '双链 DNA 中 \\(\\%A=\\%T\\)、\\(\\%G=\\%C\\)，且 \\(\\dfrac{A+G}{T+C}=1\\)。',
      '磷酸二酯键连接同一链的核苷酸；氢键维持两条链之间的配对。',
    ],
    derivationNotes: [
      { from: '核苷酸', to: '磷酸二酯键', note: '同一链的 3′-OH 与 5′-磷酸连接。' },
      { from: '碱基配对', to: '双螺旋', note: 'A–T 两个氢键，G–C 三个氢键，两条链反向平行。' },
      { from: '查加夫规则', to: '碱基组成计算', note: '双链 DNA 中 \\(\\%A=\\%T\\)、\\(\\%G=\\%C\\)。' },
    ],
    connections: [
      '先修：1.5 核酸的组成与功能。',
      '后续：6.2 复制与 6.3 转录。',
      '应用：PCR、DNA 测序与 GC 含量分析。',
    ],
    definition: 'DNA 与 RNA 都是核酸，由核苷酸组成；每个核苷酸含磷酸、五碳糖和含氮碱基。DNA 是双链双螺旋，两条链反向平行，碱基 A 与 T、G 与 C 通过氢键互补配对，骨架由磷酸二酯键连接。RNA 通常单链，含核糖和尿嘧啶（U），在转录、翻译与调控中发挥作用。',
    intuition: 'DNA 像双螺旋拉链：两条链方向相反，碱基像齿一样互补；RNA 像从拉链上抄下来的一条单链副本。',
    intuitionDetailed: 'DNA 的 5\' 端有游离磷酸，3\' 端有游离羟基；新链只能从 5\'→3\' 延伸。A–T 之间 2 个氢键，G–C 之间 3 个氢键，因此 GC 含量高的 DNA 更稳定。查加夫规则：\\(A=T\\)，\\(G=C\\)，故 \\(A+G=T+C\\)。RNA 中 U 替代 T，核糖比脱氧核糖多一个 2\'-OH。',
    formulas: [
      { latex: 'A=T,\\quad G=C', note: 'DNA 双链的碱基互补关系。' },
      { latex: 'A+G=T+C', note: '查加夫规则（嘌呤 = 嘧啶）。' },
      { latex: '\\text{DNA}:\\;5\'\\to3\'\\text{ 新链沿模板 }3\'\\to5\'\\text{ 读取}', note: '方向性。' },
    ],
    conditions: ['DNA 双链反向平行', '碱基配对具有特异性：A–T、G–C（RNA 中 A–U）', '氢键维持配对，磷酸二酯键维持骨架', 'RNA 通常单链，但可形成局部二级结构', 'GC 含量影响热稳定性'],
    keyPoints: ['核苷酸 = 磷酸 + 糖 + 碱基', 'DNA 双链反向平行', 'A–T、G–C 互补配对', 'RNA 含核糖与 U，通常单链', '5\'→3\' 方向性决定复制与转录方向'],
    misconceptions: [
      '认为 A 与 G 配对（应按嘌呤—嘧啶互补）',
      '认为 DNA 两条链方向相同',
      '把 RNA 的 U 与 DNA 的 T 混淆',
      '认为氢键是共价键（氢键较弱，可解链）',
      '认为 GC 含量与生物复杂度直接成正比',
    ],
    examples: [
      {
        title: '例 1 · 互补链',
        prompt: 'DNA 一条链为 \\(5\'-\\mathrm{ATGC}-3\'\\)，写出互补链（按 \\(5\'\\to3\'\\) 方向）。',
        steps: ['配对：A–T、T–A、G–C、C–G。', '模板 \\(5\'-ATGC-3\'\\) 的互补链为 \\(3\'-TACG-5\'\\)。', '按 \\(5\'\\to3\'\\) 写为 \\(5\'-GCAT-3\'\\)。'],
        solution: '\\(5\'-\\mathrm{GCAT}-3\'\\)。',
      },
      {
        title: '例 2 · 碱基比例',
        prompt: '某 DNA 中 A 占 30%，求 T、G、C 的比例。',
        steps: ['\\(A=T=30\\%\\)。', '剩下 \\(40\\%\\) 由 G 与 C 平分：各 \\(20\\%\\)。'],
        solution: '\\(T=30\\%\\)，\\(G=C=20\\%\\)。',
      },
      {
        title: '例 3 · RNA',
        prompt: 'RNA 与 DNA 在糖、碱基与链数上有何不同？',
        steps: ['RNA 含核糖，DNA 含脱氧核糖。', 'RNA 用 U，DNA 用 T。', 'RNA 通常单链，DNA 双链。'],
        solution: '核糖/脱氧核糖、U/T、单链/双链三处不同。',
      },
    ],
    examTips: [
      'CED Unit 6：基因表达与调控',
      '写核酸序列必须标 \\(5\'\\to3\'\\) 方向',
      'A–T、G–C 配对与氢键数目常考',
      'RNA 用 U，DNA 用 T',
      '查加夫规则用于碱基比例计算',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.5', title: '核酸', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.2', title: '复制', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.3', title: '转录与 RNA 加工', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.4', title: '翻译', relation: '后续' },
    ],
    development: ['核苷酸结构', 'DNA 双螺旋', '碱基配对与氢键', 'RNA 结构', '方向性与碱基比例'],
    checks: ['DNA 两条链的方向关系是什么？', 'A–T 与 G–C 各有几个氢键？', 'RNA 与 DNA 的三处主要区别是什么？'],
    summary: '核酸由核苷酸组成；DNA 双链反向平行、A–T/G–C 互补，RNA 单链含核糖与 U；方向性与碱基比例是解题基础。',
  },

  'bio/bio-u6/6.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能由模板链或编码链写出转录产物并标明方向。',
      '能描述真核 pre-mRNA 的加帽、加尾与剪接。',
      '能解释可变剪接如何增加蛋白质多样性。',
    ],
    essentialKnowledge: [
      'RNA 聚合酶沿模板链 3′→5′ 读取，合成 RNA 5′→3′。',
      'RNA 与编码链序列相同（T 换成 U），与模板链互补。',
      '真核 pre-mRNA 需加 5′ 帽、加 poly-A 尾并剪接去除内含子。',
      '外显子保留在成熟 mRNA 中，内含子被移除；可变剪接可跳过或保留不同外显子。',
      '启动子调控转录起始，起始密码子 AUG 用于翻译起始，二者不能混淆。',
    ],
    derivationNotes: [
      { from: '启动子', to: '转录起始', note: 'RNA 聚合酶与转录因子结合，解开双链。' },
      { from: '模板链 3′→5′', to: 'RNA 5′→3′', note: 'RNA 与模板链互补，与编码链相同（T→U）。' },
      { from: 'pre-mRNA', to: '成熟 mRNA', note: '加 5′ 帽、poly-A 尾并剪接去除内含子。' },
    ],
    connections: [
      '先修：6.1 的碱基配对与方向性。',
      '后续：6.4 翻译与 6.5 基因表达调控。',
      '应用：可变剪接、mRNA 疫苗与基因表达分析。',
    ],
    definition: '转录是以 DNA 为模板合成 RNA 的过程。RNA 聚合酶识别启动子，沿模板链 \\(3\'\\to5\'\\) 方向读取，合成 RNA \\(5\'\\to3\'\\)。原核生物转录与翻译可同时进行；真核生物先在细胞核内生成前体 mRNA，再经 5\' 加帽、3\' 加 poly-A 尾和剪接去除内含子，成熟 mRNA 才出核翻译。',
    intuition: '转录像“抄书”：只抄需要的那一段基因，抄本用 RNA 字母，抄完还要剪掉不翻译的段落。',
    intuitionDetailed: '模板链与编码链互补；RNA 序列与编码链相同（U 替代 T）。剪接由剪接体完成，可变剪接使同一基因产生多种 mRNA。5\' 帽与 poly-A 尾保护 mRNA、帮助核糖体识别。原核 mRNA 常无内含子，转录与翻译偶联。',
    formulas: [
      { latex: '\\text{DNA 模板 }3\'\\to5\'\\;\\Rightarrow\\;\\text{RNA }5\'\\to3\'', note: '转录方向。' },
      { latex: '\\text{前体 mRNA}\\to\\text{加帽}+\\text{加尾}+\\text{剪接}\\to\\text{成熟 mRNA}', note: '真核 RNA 加工。' },
    ],
    conditions: ['需要 RNA 聚合酶、启动子与核糖核苷三磷酸', '模板链决定 RNA 序列', '真核转录在细胞核，翻译在细胞质', '剪接要求识别外显子—内含子边界', '可变剪接可产生多种成熟 mRNA'],
    keyPoints: ['RNA 聚合酶读模板 \\(3\'\\to5\'\\)、合成 \\(5\'\\to3\'\\)', 'RNA 与编码链相同（U 替 T）', '真核前体 mRNA 需加帽、加尾、剪接', '内含子不编码，外显子保留在成熟 mRNA', '可变剪接增加蛋白质多样性'],
    misconceptions: [
      '认为 RNA 聚合酶直接读取编码链',
      '把模板链与编码链混淆',
      '认为转录后立即翻译（真核需要加工与出核）',
      '把内含子当作“无用 DNA”（它们可调控与可变剪接）',
      '认为所有基因都只产生一种 mRNA',
    ],
    examples: [
      {
        title: '例 1 · RNA 序列',
        prompt: 'DNA 模板链为 \\(3\'-\\mathrm{TACG}-5\'\\)，写出转录出的 RNA（\\(5\'\\to3\'\\)）。',
        steps: ['按互补配对：T→A、A→U、C→G、G→C。', '沿模板 \\(3\'\\to5\'\\) 读取，RNA 为 \\(5\'-AUGC-3\'\\)。'],
        solution: '\\(5\'-\\mathrm{AUGC}-3\'\\)。',
      },
      {
        title: '例 2 · 加工',
        prompt: '真核前体 mRNA 经历哪三步主要加工？',
        steps: ['5\' 端加帽。', '3\' 端加 poly-A 尾。', '剪接去除内含子、连接外显子。'],
        solution: '加帽、加尾、剪接。',
      },
      {
        title: '例 3 · 可变剪接',
        prompt: '同一基因如何产生多种蛋白质？',
        steps: ['前体 mRNA 的外显子可按不同组合剪接。', '不同成熟 mRNA 翻译出不同氨基酸序列。'],
        solution: '可变剪接产生多种 mRNA 与蛋白质异构体。',
      },
    ],
    examTips: [
      'CED Unit 6：基因表达',
      '写 RNA 序列时标 \\(5\'\\to3\'\\)，用 U 替 T',
      '区分模板链、编码链与 mRNA',
      '真核加工三件事：帽、尾、剪接',
      '可变剪接解释“基因数少于蛋白质种类”',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.1', title: 'DNA 与 RNA 结构', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.4', title: '翻译', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.5', title: '基因表达调控', relation: '相关' },
    ],
    development: ['转录的模板与方向', 'RNA 聚合酶与启动子', '真核 RNA 加工', '剪接与可变剪接', '转录与翻译的时空关系'],
    checks: ['RNA 聚合酶读取哪条链、沿什么方向？', '真核 mRNA 为什么要加工？', '可变剪接如何增加蛋白质多样性？'],
    summary: '转录以 DNA 模板链为模板、按 \\(3\'\\to5\'\\) 读取合成 \\(5\'\\to3\'\\) RNA；真核前体 mRNA 经加帽、加尾、剪接后出核翻译。',
  },

  'bio/bio-u6/6.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能比较原核操纵子与真核转录调控的层次。',
      '能解释 lac 操纵子在乳糖与葡萄糖变化下的表达逻辑。',
      '能说明染色质修饰、增强子与可变剪接对基因表达的影响。',
    ],
    essentialKnowledge: [
      '原核生物用操纵子组织功能相关的基因，阻遏蛋白与激活蛋白响应小分子。',
      'lac 操纵子受乳糖（诱导）与葡萄糖（分解代谢阻遏）双重控制。',
      'trp 操纵子通过辅阻遏蛋白在色氨酸充足时抑制转录。',
      '真核生物通过转录因子、增强子、染色质重塑、组蛋白修饰与 DNA 甲基化调控转录。',
      'RNA 加工、可变剪接、翻译调控与翻译后修饰提供额外的表达控制层。',
    ],
    derivationNotes: [
      { from: '操纵子', to: '原核调控', note: '阻遏蛋白/激活蛋白响应小分子控制转录。' },
      { from: 'lac 操纵子', to: '双重控制', note: '乳糖诱导，葡萄糖充足时分解代谢阻遏。' },
      { from: '染色质与转录因子', to: '真核调控', note: '增强子、组蛋白修饰与 DNA 甲基化改变可及性。' },
    ],
    connections: [
      '先修：6.3 转录与 6.4 翻译。',
      '后续：6.6 细胞分化与 6.7 突变。',
      '应用：干细胞分化、癌症表观遗传与药物开发。',
    ],
    definition: '基因表达调控决定哪些基因在何时、何地、以何种强度表达。原核生物主要通过操纵子（operon）组织相关基因：阻遏蛋白与激活蛋白响应小分子，控制 RNA 聚合酶的招募。真核生物通过转录因子、增强子、染色质重塑、组蛋白修饰、DNA 甲基化，以及 RNA 加工、翻译和翻译后修饰等多层机制调控。',
    intuition: '基因像一套完整的菜谱，细胞只翻开需要的几页；调控就是决定“翻哪页、读多大声、读多久”。',
    intuitionDetailed: 'lac 操纵子：葡萄糖缺乏且乳糖存在时，CAP–cAMP 激活、阻遏蛋白离开，转录开启；葡萄糖充足时 cAMP 低，转录弱。trp 操纵子：色氨酸充足时作为辅阻遏物关闭合成通路。真核增强子可远距离作用，染色质开放程度决定可及性；X 染色体失活与印记是表观遗传例子。',
    formulas: [
      { latex: '\\text{lac operon}:\\;\\text{乳糖存在}+\\text{葡萄糖低}\\Rightarrow\\text{转录 ON}', note: '双因素控制。' },
      { latex: '\\text{trp operon}:\\;\\text{色氨酸充足}\\Rightarrow\\text{转录 OFF}', note: '负反馈式阻遏。' },
    ],
    conditions: ['原核操纵子中相关基因共转录', '阻遏/激活蛋白需与小分子或 DNA 序列结合', '真核调控涉及染色质结构与远距离增强子', '表观修饰可遗传但不改变 DNA 序列', '调控发生在转录、加工、翻译等多个层次'],
    keyPoints: ['原核：操纵子、阻遏蛋白、激活蛋白', 'lac 受乳糖与葡萄糖双重控制', 'trp 是辅阻遏调控', '真核：转录因子、增强子、染色质、甲基化', '表达调控是细胞分化的基础'],
    misconceptions: [
      '认为 lac 操纵子只受乳糖控制（还受葡萄糖/cAMP 影响）',
      '把阻遏蛋白与激活蛋白的作用混淆',
      '认为 DNA 甲基化改变碱基序列',
      '认为所有调控都发生在转录水平',
      '认为管家基因与组织特异基因调控方式相同',
    ],
    examples: [
      {
        title: '例 1 · lac 操纵子',
        prompt: '乳糖存在、葡萄糖缺乏时，lac 操纵子为何高水平表达？',
        steps: ['乳糖使阻遏蛋白离开操纵基因。', '葡萄糖低 → cAMP 高 → CAP–cAMP 激活转录。'],
        solution: '阻遏解除 + CAP 激活，转录高水平。',
      },
      {
        title: '例 2 · trp 操纵子',
        prompt: '色氨酸充足时，trp 操纵子如何关闭？',
        steps: ['色氨酸作为辅阻遏物与阻遏蛋白结合。', '阻遏蛋白结合操纵基因，阻止 RNA 聚合酶前进。'],
        solution: '辅阻遏 → 转录关闭，避免浪费。',
      },
      {
        title: '例 3 · 真核调控',
        prompt: '为什么同一基因组的不同细胞形态功能不同？',
        steps: ['不同细胞表达不同转录因子。', '染色质开放区域不同，增强子可及性不同。', '选择性剪接与翻译调控进一步分化。'],
        solution: '差异基因表达，而非 DNA 序列不同。',
      },
    ],
    examTips: [
      'CED Unit 6：基因表达调控',
      'lac 题写清乳糖与葡萄糖两个条件',
      '区分阻遏（repression）与激活（activation）',
      '真核调控答“转录因子 + 染色质 + 增强子”',
      '表观遗传不改变 DNA 序列',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.3', title: '转录与 RNA 加工', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.4', title: '翻译', relation: '相关' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.6', title: '基因表达与细胞特化 · Gene Expression and Cell Specialization', relation: '相关' },
    ],
    development: ['原核操纵子', 'lac 与 trp', '真核转录因子', '染色质与表观遗传', '多层级调控'],
    checks: ['lac 操纵子为什么受葡萄糖影响？', 'trp 操纵子属于哪种调控？', '表观遗传与基因突变的区别是什么？'],
    summary: '基因表达受多层调控：原核以操纵子响应小分子，真核以转录因子、增强子与染色质状态决定表达；差异表达导致细胞分化。',
  },

  'bio/bio-u7/7.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用 \\(p+q=1\\) 与 \\(p^{2}+2pq+q^{2}=1\\) 计算等位基因与基因型频率。',
      '能由隐性表型频率估算 \\(q\\)、\\(p\\) 与携带者频率。',
      '能把哈代–温伯格作为检测进化力量的零模型。',
    ],
    essentialKnowledge: [
      '\\(p\\) 与 \\(q\\) 是等位基因频率；\\(p^{2}\\)、\\(2pq\\)、\\(q^{2}\\) 是基因型频率。',
      '隐性纯合子频率等于 \\(q^{2}\\)；显性表型频率为 \\(p^{2}+2pq\\)。',
      '携带者频率为 \\(2pq\\)，不是 \\(2q\\)。',
      '平衡条件：无突变、无迁移、无选择、随机交配、种群足够大。',
      '偏离哈代–温伯格预期提示选择、漂变、突变、基因流或非随机交配。',
    ],
    derivationNotes: [
      { from: '等位基因频率', to: '基因型频率', note: '\\(p+q=1\\) 且 \\(p^{2}+2pq+q^{2}=1\\)。' },
      { from: '隐性表型', to: 'q²', note: '由 \\(q^{2}\\) 开平方求 \\(q\\)，再求 \\(p\\) 与 \\(2pq\\)。' },
      { from: '平衡条件', to: '零模型', note: '偏离预期提示选择、漂变、突变、基因流或非随机交配。' },
    ],
    connections: [
      '先修：7.4 群体遗传与等位基因频率。',
      '后续：7.6 进化证据与 7.8 延续与变化。',
      '应用：隐性遗传病携带者筛查与保护遗传学。',
    ],
    definition: '哈代–温伯格平衡描述理想种群中等位基因频率与基因型频率保持不变的状态。设一对等位基因频率为 \\(p\\)（显性）与 \\(q\\)（隐性），则 \\(p+q=1\\)，基因型频率为 \\(p^{2}\\)（\\(AA\\)）、\\(2pq\\)（\\(Aa\\)）、\\(q^{2}\\)（\\(aa\\)），且 \\(p^{2}+2pq+q^{2}=1\\)。它是检测进化是否发生的零模型。',
    intuition: '哈代–温伯格像“不搅动的池塘”：没有突变、选择、漂变、迁移且随机交配时，等位基因比例一代代保持不变。',
    intuitionDetailed: '若实际基因型频率偏离预期，说明有进化力量在作用。已知隐性纯合表型频率可反推 \\(q=\\sqrt{q^{2}}\\)，再由 \\(p=1-q\\) 求显性等位基因频率与杂合子频率。小种群漂变、选择、突变、基因流与非随机交配都会破坏平衡。',
    formulas: [
      { latex: 'p+q=1', note: '一对等位基因的频率之和。' },
      { latex: 'p^{2}+2pq+q^{2}=1', note: '哈代–温伯格基因型频率。' },
      { latex: 'q=\\sqrt{q^{2}},\\quad p=1-q', note: '由隐性纯合频率反推等位基因频率。' },
    ],
    conditions: ['种群足够大（漂变可忽略）', '随机交配', '无突变', '无自然选择', '无基因流（迁移）', '这些条件在真实种群中通常不完全满足'],
    keyPoints: ['\\(p+q=1\\) 与 \\(p^{2}+2pq+q^{2}=1\\)', '\\(q^{2}\\) 是隐性纯合频率', '偏离预期说明进化力量在作用', '哈代–温伯格是零模型，不是“真实种群定律”', '小种群漂变更强'],
    misconceptions: [
      '认为显性等位基因频率一定高于隐性',
      '认为哈代–温伯格适用于所有真实种群',
      '把基因型频率与等位基因频率混为一谈',
      '忘记开平方就由 \\(q^{2}\\) 得 \\(q\\)',
      '认为平衡意味着没有突变（而是突变与选择等相互抵消或可忽略）',
    ],
    examples: [
      {
        title: '例 1 · 求 q',
        prompt: '某种群中 16% 个体表现隐性性状，求 \\(q\\)、\\(p\\) 与杂合子频率。',
        steps: ['\\(q^{2}=0.16\\Rightarrow q=0.40\\)。', '\\(p=1-0.40=0.60\\)。', '\\(2pq=2(0.60)(0.40)=0.48\\)。'],
        solution: '\\(q=0.40\\)，\\(p=0.60\\)，杂合子 \\(48\\%\\)。',
        solutionLatex: 'q=0.40,\\;2pq=0.48',
      },
      {
        title: '例 2 · 预期值',
        prompt: '某种群 \\(p=0.7\\)，哈代–温伯格预期各基因型频率是多少？',
        steps: ['\\(q=0.3\\)。', '\\(AA: p^{2}=0.49\\)；\\(Aa: 2pq=0.42\\)；\\(aa: q^{2}=0.09\\)。'],
        solution: '\\(49\\%\\)、\\(42\\%\\)、\\(9\\%\\)。',
        solutionLatex: 'p^{2}=0.49,\\;2pq=0.42,\\;q^{2}=0.09',
      },
      {
        title: '例 3 · 偏离',
        prompt: '若实际杂合子频率远低于 \\(2pq\\)，可能说明什么？',
        steps: ['可能发生近交或群体分层。', '也可能有选择、漂变或非随机交配。'],
        solution: '偏离零模型提示某种进化力量或非随机交配。',
      },
    ],
    examTips: [
      'CED Unit 7：群体遗传',
      '先判断给出的是表型频率还是基因型频率',
      '隐性纯合频率 = \\(q^{2}\\)，开平方得 \\(q\\)',
      '写清五个假设，再判断偏离原因',
      '计算题保留两位小数并检查 \\(p+q=1\\)',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.6', title: '进化证据', relation: '相关' },
    ],
    development: ['等位基因频率', '基因型频率', '哈代–温伯格方程', '五个假设', '偏离与进化力量'],
    checks: ['哈代–温伯格的五个假设是什么？', '如何由隐性表型频率求 \\(q\\)？', '偏离平衡说明什么？'],
    summary: '哈代–温伯格用 \\(p+q=1\\) 与 \\(p^{2}+2pq+q^{2}=1\\) 描述理想种群；偏离预期提示选择、漂变、突变、基因流或非随机交配。',
  },

  'bio/bio-u1/1.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出氨基酸通式并说明肽键的形成位置与方向。',
      '能区分蛋白质的一级、二级、三级与四级结构及其稳定作用。',
      '能解释变性为何破坏高级结构却不一定破坏一级结构。',
    ],
    essentialKnowledge: [
      '20 种标准氨基酸的 R 基团决定侧链性质；肽键由氨基与羧基脱水形成。',
      '多肽序列按 N 端到 C 端书写；肽键数等于氨基酸数减去肽链数。',
      '二级结构（α 螺旋、β 折叠）由主链氢键稳定；三级结构由 R 基团间的疏水作用、氢键、离子键与二硫键稳定。',
      '四级结构是多个多肽亚基的组装，并非所有蛋白质都有四级结构。',
      '变性通常破坏非共价相互作用与二硫键，但不破坏肽键；水解才断裂肽键。',
    ],
    derivationNotes: [
      { from: '氨基酸序列', to: '一级结构', note: '基因决定 R 基团排列，序列按 N→C 书写。' },
      { from: '主链氢键', to: '二级结构', note: 'α 螺旋与 β 折叠由主链氢键稳定。' },
      { from: 'R 基团相互作用', to: '三级/四级结构', note: '疏水作用、氢键、离子键与二硫键稳定三维构象。' },
    ],
    connections: [
      '先修：1.3 的脱水缩合解释肽键形成。',
      '后续：1.6 酶的活性位点由蛋白质三维结构决定。',
      '应用：3.2 的温度/pH 通过破坏高级结构影响酶活性。',
    ],
    definition: '蛋白质是由氨基酸通过肽键连接而成的多肽链，通常折叠成特定三维构象。20 种标准氨基酸的 R 基团决定其化学性质；蛋白质结构分为一级、二级、三级和四级结构。氢键、离子键、疏水相互作用和二硫键维持高级结构，高温、极端 pH 或化学试剂可使其变性。',
    intuition: '氨基酸像一串珠子，R 基团是每颗珠子不同的“性格”；链上的局部吸引与排斥让整串珠子自动折成特定形状，形状决定功能。',
    intuitionDetailed: '肽键由一个氨基酸的羧基与下一个氨基酸的氨基脱水形成，因此多肽有 N 端与 C 端，序列按 N→C 书写。二级结构主要是 α 螺旋与 β 折叠，由主链之间的氢键稳定；三级结构由 R 基团之间的疏水作用、氢键、离子键和二硫键稳定；四级结构是多个多肽亚基的组装。变性破坏的是这些非共价相互作用（以及二硫键），但通常不破坏肽键，所以一级结构仍在。',
    formulas: [
      { latex: '\\mathrm{H_2N-CH(R)-COOH}', note: 'α-氨基酸的通式；R 基团决定侧链性质。' },
      { latex: '\\text{氨基酸}_1+\\text{氨基酸}_2\\rightarrow\\text{二肽}+\\mathrm{H_2O}', note: '肽键形成是脱水缩合。' },
      { latex: '\\text{N 端}\\rightarrow\\text{C 端}', note: '多肽序列的书写与合成方向。' },
      { latex: '\\text{一级}\\to\\text{二级}\\to\\text{三级}\\to\\text{四级}', note: '蛋白质结构的层次；并非所有蛋白质都有四级结构。' },
    ],
    conditions: ['肽键由氨基与羧基脱水形成，不涉及 R 基团', '二级结构靠主链氢键，三级结构靠 R 基团相互作用', '变性通常破坏非共价键，不破坏肽键', '序列由基因决定，环境可影响折叠与活性', '并非所有蛋白质都有四级结构'],
    keyPoints: ['20 种标准氨基酸，R 基团决定性质', '肽键连接氨基酸，序列按 N→C 方向', '一级结构是氨基酸序列，二级是局部折叠，三级是整体三维构象，四级是多亚基组装', '疏水作用常是三级结构的主要驱动力', '二硫键是共价键，可稳定三级与四级结构', '变性 ≠ 水解'],
    misconceptions: [
      '认为肽键连接的是 R 基团而不是氨基与羧基',
      '把变性当成肽键断裂（变性通常只破坏高级结构）',
      '认为所有蛋白质都必须有四级结构',
      '把 α 螺旋与 β 折叠说成三级结构（它们是二级结构）',
      '认为蛋白质一旦变性就一定可以完全恢复',
    ],
    examples: [
      {
        title: '例 1 · 肽键计数',
        prompt: '一条由 120 个氨基酸组成的单链多肽有多少个肽键？形成时脱去多少分子水？',
        steps: ['单链中肽键数 = 氨基酸数 - 1。', '\\(120-1=119\\)，每形成一个肽键脱去一分子水。'],
        solution: '119 个肽键，脱去 119 分子水。',
        solutionLatex: '120-1=119',
      },
      {
        title: '例 2 · 多亚基蛋白',
        prompt: '一个由 2 条肽链组成、共 150 个氨基酸的蛋白质有多少个肽键？',
        steps: ['每条链的肽键数等于该链氨基酸数减一。', '两条链合计：\\(150-2=148\\)。'],
        solution: '148 个肽键。多链蛋白不能直接用氨基酸总数减一。',
        solutionLatex: '150-2=148',
      },
      {
        title: '例 3 · 变性',
        prompt: '把酶加热到 80°C 后活性丧失。肽键是否断裂？一级结构是否改变？',
        steps: ['高温主要破坏氢键、疏水作用等维持高级结构的相互作用。', '肽键是共价键，通常需要蛋白酶或强酸强碱水解才断裂。', '因此一级结构通常不变，但三维构象改变，活性位点无法正常工作。'],
        solution: '肽键通常不断裂，一级结构基本不变；高级结构被破坏导致变性失活。',
      },
    ],
    examTips: [
      'CED Unit 1：蛋白质结构与功能；常考四级结构层次与变性机制',
      'FRQ 解释“结构决定功能”时，按一级→二级→三级→四级逐层说明',
      '计算肽键数先看有几条链：肽键数 = 氨基酸总数 - 肽链数',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.3', title: '生物大分子导论', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.5', title: '核酸', relation: '对比' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.6', title: '酶结构与功能', relation: '应用' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.2', title: '环境影响酶', relation: '应用' },
    ],
    development: ['氨基酸与 R 基团', '肽键与多肽方向', '二级结构', '三级结构与稳定作用', '四级结构与变性'],
    checks: ['肽键由哪两个基团形成？', '变性破坏了哪些键，通常不破坏哪些键？', '两条链共 150 个氨基酸的蛋白质有多少个肽键？'],
    summary: '蛋白质的功能由氨基酸序列和三维构象决定；肽键连接单体，高级结构靠多种相互作用维持，变性会破坏构象但通常不破坏一级结构。',
  },

  'bio/bio-u2/2.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能把主要细胞器与其功能、膜结构和所在细胞类型对应起来。',
      '能解释区隔化如何提高反应效率并隔离不相容的反应。',
      '能用表面积与体积之比解释细胞大小对运输的限制。',
    ],
    essentialKnowledge: [
      '真核细胞有膜包围的细胞核与多种膜性细胞器；原核细胞没有核膜与线粒体等膜性细胞器，但有核糖体。',
      '内膜系统包括核膜、内质网、高尔基体、溶酶体与液泡，通过囊泡运输相互联系。',
      '粗面内质网合成分泌蛋白与膜蛋白，光面内质网合成脂质并解毒，高尔基体修饰、分选与包装蛋白质。',
      '线粒体与叶绿体有双层膜和自身 DNA，内共生学说解释其起源。',
      '球形细胞的 SA:V 与半径成反比；细胞越大，单位体积可用的膜面积越少。',
    ],
    derivationNotes: [
      { from: '膜包围', to: '区隔化', note: '不同 pH、酶与底物被限制在特定空间。' },
      { from: '内膜系统', to: '囊泡运输', note: '内质网→高尔基体→细胞膜/溶酶体的分选路径。' },
      { from: 'SA:V 与半径成反比', to: '细胞大小限制', note: '半径越大，单位体积膜面积越小。' },
    ],
    connections: [
      '先修：2.2 细胞大小与 SA:V 决定交换效率。',
      '后续：2.3 质膜与 2.9 区隔化展开膜结构与功能。',
      '应用：2.10 内共生学说解释线粒体与叶绿体起源。',
    ],
    definition: '真核细胞通过膜包围的细胞器实现区隔化，使不同的酶与反应在特定空间内进行。主要细胞器包括细胞核、核糖体、内质网、高尔基体、溶酶体、液泡、线粒体和叶绿体；细胞骨架维持形态并参与运输。原核细胞没有膜包围的细胞核与其他膜性细胞器，但仍有核糖体。',
    intuition: '细胞像一座工厂：细胞核是总部，核糖体是装配线，内质网与高尔基体是加工与物流系统，线粒体是发电站，溶酶体是回收站。',
    intuitionDetailed: '内膜系统包括核膜、内质网、高尔基体、溶酶体与液泡，它们通过囊泡运输相互联系。粗面内质网附着核糖体，合成分泌蛋白与膜蛋白；光面内质网合成脂质并解毒。高尔基体对蛋白质进行修饰、分选与包装。线粒体与叶绿体有双层膜和自身 DNA，内共生学说认为它们起源于被吞噬的细菌。区隔化既提高反应效率，也让互不相容的反应同时进行。',
    formulas: [
      { latex: '\\dfrac{\\text{表面积}}{\\text{体积}}=\\dfrac{4\\pi r^{2}}{\\dfrac{4}{3}\\pi r^{3}}=\\dfrac{3}{r}', note: '球形细胞的表面积与体积之比；半径越大，比值越小。' },
      { latex: '\\text{SA:V}\\propto\\dfrac{1}{r}', note: '细胞越大，单位体积可用的膜面积越少，运输效率越受限。' },
      { latex: '\\text{膜面积}\\uparrow\\;\\Rightarrow\\;\\text{运输与反应容量}\\uparrow', note: '区隔化与膜折叠增加有效工作面积。' },
    ],
    conditions: ['真核细胞才有膜包围的细胞核与多数膜性细胞器', '原核细胞有核糖体，但没有核膜与线粒体等膜性细胞器', '细胞器功能依赖其膜上的蛋白质与内部 pH/离子环境', '区隔化不改变总反应的热力学，只改变局部条件与速率'],
    keyPoints: ['细胞核储存遗传信息并控制基因表达', '核糖体是蛋白质合成场所，无膜', '粗面内质网合成分泌蛋白与膜蛋白，光面内质网合成脂质', '高尔基体修饰、分选与包装蛋白质', '溶酶体含水解酶，负责细胞内消化', '线粒体进行有氧呼吸，叶绿体进行光合作用', '细胞骨架维持形态、参与运输与分裂', '内共生学说解释线粒体与叶绿体的起源'],
    misconceptions: [
      '认为核糖体是膜性细胞器（核糖体无膜）',
      '认为原核细胞没有任何细胞器（它们有核糖体）',
      '把光滑内质网说成蛋白质合成的主要场所',
      '认为高尔基体只“运输”而不修饰蛋白质',
      '认为线粒体与叶绿体只有一层膜',
      '把细胞壁当作动物细胞结构',
    ],
    examples: [
      {
        title: '例 1 · 表面积与体积',
        prompt: '两个球形细胞半径分别为 \\(10\\,\\mathrm{\\mu m}\\) 与 \\(20\\,\\mathrm{\\mu m}\\)。分别求 SA:V，并说明哪个更有利于物质交换。',
        steps: ['用 \\(\\dfrac{3}{r}\\)：半径 \\(10\\,\\mathrm{\\mu m}\\) 时 SA:V \\(=0.30\\,\\mathrm{\\mu m^{-1}}\\)。', '半径 \\(20\\,\\mathrm{\\mu m}\\) 时 SA:V \\(=0.15\\,\\mathrm{\\mu m^{-1}}\\)。', '小细胞的 SA:V 更大，单位体积有更多膜面积。'],
        solution: 'SA:V 分别为 \\(0.30\\) 与 \\(0.15\\,\\mathrm{\\mu m^{-1}}\\)；小细胞更有利于交换。',
        solutionLatex: '\\dfrac{3}{10}=0.30,\\quad\\dfrac{3}{20}=0.15\\;\\mathrm{\\mu m^{-1}}',
      },
      {
        title: '例 2 · 细胞器匹配',
        prompt: '某细胞分泌大量消化酶。哪些细胞器最发达？说明理由。',
        steps: ['分泌蛋白在粗面内质网上的核糖体合成。', '进入内质网腔初步加工，再经高尔基体修饰、分选与包装。', '囊泡把酶运到细胞膜分泌；线粒体提供 ATP。'],
        solution: '粗面内质网、高尔基体与线粒体发达。',
      },
      {
        title: '例 3 · 区隔化',
        prompt: '为什么溶酶体的水解酶不会把细胞自身消化掉？',
        steps: ['水解酶被包在溶酶体膜内，与细胞质隔离。', '溶酶体内部维持酸性 pH，酶在此条件下有活性。', '膜阻止酶泄漏；即使少量泄漏，细胞质的中性 pH 也降低其活性。'],
        solution: '膜区隔化与 pH 差异共同保护细胞质。',
      },
    ],
    examTips: [
      'CED Unit 2：细胞结构与功能；常考细胞器—功能匹配',
      'FRQ 解释区隔化优势时，写“局部浓缩酶、隔离不相容反应、增加膜面积”',
      'SA:V 计算题注意单位与半径/直径的区别',
      '内共生学说的证据：双层膜、自身 DNA、细菌型核糖体',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.2', title: '细胞大小', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.3', title: '质膜', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.9', title: '区隔化', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.10', title: '细胞区隔起源', relation: '应用' },
    ],
    development: ['细胞器与功能', '内膜系统与囊泡运输', '线粒体与叶绿体', '细胞骨架', '表面积与体积', '内共生学说'],
    checks: ['核糖体为什么不算膜性细胞器？', '粗面内质网与光面内质网的分工是什么？', '半径加倍时 SA:V 如何变化？'],
    summary: '真核细胞用膜性细胞器区隔化不同反应；细胞器分工、膜面积与运输系统共同支持高效代谢与分泌。',
  },

  'bio/bio-u7/7.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能列出自然选择的三个必要条件并解释其作用。',
      '能区分方向性、稳定性与分裂性选择。',
      '能用抗生素耐药案例说明选择作用于已有变异。',
    ],
    essentialKnowledge: [
      '自然选择需要可遗传的变异、差异存活或繁殖成功以及选择压力。',
      '选择作用于表型，进化表现为种群中等位基因频率的改变。',
      '方向性选择使表型向一个极端移动；稳定性选择偏好中间型；分裂性选择偏好两个极端。',
      '适应是相对的，环境改变后原有优势可能消失。',
      '抗生素耐药突变通常在用药前已存在，抗生素只是提供选择压力。',
    ],
    derivationNotes: [
      { from: '可遗传变异', to: '选择材料', note: '没有可遗传差异，选择不能改变种群。' },
      { from: '差异繁殖', to: '等位基因频率改变', note: '适应度高的个体留下更多后代。' },
      { from: '环境选择压', to: '适应', note: '适应是相对的，环境变化会重新定义优势。' },
    ],
    connections: [
      '先修：5.3 孟德尔遗传与变异来源。',
      '后续：7.2 自然选择机制、7.4 群体遗传与 7.5 哈代–温伯格。',
      '应用：抗生素耐药、害虫抗药性与保护生物学。',
    ],
    definition: '自然选择是不同个体因可遗传的性状差异而具有不同存活与繁殖成功率，导致这些性状在种群中频率变化的过程。自然选择作用于表型，但只有可遗传的变异才能产生进化；它需要变异、可遗传性、差异繁殖成功与选择压力，结果适应环境而非“追求完美”。',
    intuition: '自然选择像一位不设目标的设计师：环境中现成的变异被“筛”出更适应的个体，它们的基因在后代中变多；没有变异或没有遗传，筛选就不会留下变化。',
    intuitionDetailed: '自然选择的方向由环境决定：方向性选择使表型向一个极端移动；稳定性选择偏好中间型；分裂性选择偏好两个极端。性选择通过交配成功率起作用，可能产生看似不利于生存的性状。人工选择是人类按目标性状选育，机制与自然选择相同但选择压力来自人。抗生素耐药、杀虫剂抗性与工业黑化都是可观察的选择例子。',
    formulas: [
      { latex: 'w=\\dfrac{\\text{相对繁殖成功}}{\\text{参考基因型的繁殖成功}}', note: '相对适合度；最高适合度通常设为 1。' },
      { latex: '\\Delta p=p^{\\prime}-p', note: '等位基因频率的变化；\\(\\Delta p\\neq0\\) 表示进化发生。' },
      { latex: '\\bar{w}=p^{2}w_{AA}+2pqw_{Aa}+q^{2}w_{aa}', note: '种群平均适合度；选择后频率与平均适合度有关。' },
      { latex: '\\text{变异}+\\text{可遗传}+\\text{差异繁殖}=\\text{可选择的基础}', note: '自然选择的三个必要条件。' },
    ],
    conditions: ['种群内存在可遗传的表型变异', '不同表型具有不同的存活或繁殖成功率', '选择压力来自环境、捕食者、病原体或配偶选择', '没有可遗传变异时，选择不能产生进化', '适应是相对的：环境改变后原有优势可能消失'],
    keyPoints: ['自然选择作用于表型，进化改变的是等位基因频率', '变异必须可遗传才有进化意义', '方向性、稳定性与分裂性选择改变不同表型分布', '适应不是“完美”，而是对当前环境的相对优势', '性选择与人工选择也是选择形式', '抗生素耐药是自然选择的直接证据'],
    misconceptions: [
      '认为个体为了适应环境而“主动变异”',
      '认为自然选择让物种“越来越完美”',
      '认为获得性性状可以直接遗传（拉马克式误解）',
      '认为选择直接改变基因型而不经过繁殖',
      '认为进化一定需要很多代（强选择下可很快）',
      '把自然选择与人工选择完全割裂（机制相同，压力来源不同）',
    ],
    examples: [
      {
        title: '例 1 · 抗生素耐药',
        prompt: '某细菌种群中 \\(\\dfrac{1}{10^{6}}\\) 个体携带耐药突变。使用抗生素后，耐药个体比例迅速上升。如何用自然选择解释？',
        steps: ['抗生素杀死敏感个体，耐药个体存活并繁殖。', '耐药突变可遗传，后代携带该突变。', '选择压力使耐药等位基因频率升高。'],
        solution: '抗生素提供了选择压力；耐药突变在用药前已存在，并非用药诱导产生。',
        solutionLatex: '\\text{敏感个体死亡}\\;\\Rightarrow\\;\\text{耐药等位基因频率}\\uparrow',
      },
      {
        title: '例 2 · 工业黑化',
        prompt: '工业污染使树干变黑，浅色蛾比深色蛾更容易被鸟捕食。若干代后深色蛾比例从 5% 升到 95%，这属于哪种选择？',
        steps: ['环境选择压向深色表型。', '深色个体存活与繁殖成功率更高。', '表型分布向一个极端移动。'],
        solution: '方向性选择，等位基因频率向深色表型相关等位基因移动。',
        solutionLatex: '5\\%\\rightarrow95\\%',
      },
      {
        title: '例 3 · 稳定性选择',
        prompt: '人类出生体重过轻或过重的新生儿存活率都较低，中间体重存活率最高。这属于哪种选择？',
        steps: ['两个极端表型的适合度较低。', '中间表型的适合度较高。', '选择维持中间表型，减少极端变异。'],
        solution: '稳定性选择。',
      },
    ],
    examTips: [
      'CED Unit 7：自然选择；FRQ 常要求区分“个体适应”与“种群进化”',
      '写自然选择时按“变异→可遗传→差异繁殖→频率改变”链条作答',
      '抗生素耐药题要强调突变先于用药存在，抗生素只是选择',
      '区分方向性、稳定性、分裂性选择的表型分布变化',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.3', title: '人工选择', relation: '对比' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.5', title: '哈代–温伯格', relation: '应用' },
    ],
    development: ['变异与可遗传性', '差异繁殖成功', '选择压力', '方向性/稳定性/分裂性选择', '性选择与人工选择', '抗生素耐药案例'],
    checks: ['自然选择的三个必要条件是什么？', '为什么获得性性状不能直接导致进化？', '方向性选择与稳定性选择有什么区别？'],
    summary: '自然选择由可遗传变异与差异繁殖成功驱动，改变种群中等位基因频率；适应是相对的，环境变化会重新定义优势。',
  },

  'bio/bio-u8/8.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分密度制约与非密度制约因素。',
      '能用指数与逻辑斯谛模型计算种群增长率。',
      '能解释环境容纳量与最大增长速率出现的位置。',
    ],
    essentialKnowledge: [
      '密度制约因素（竞争、捕食、疾病）随密度升高而增强；非密度制约因素（火灾、风暴）与密度无关。',
      '指数增长 \\(\\dfrac{dN}{dt}=rN\\) 假设资源无限。',
      '逻辑斯谛增长 \\(\\dfrac{dN}{dt}=rN\\left(1-\\dfrac{N}{K}\\right)\\) 在 \\(N=K\\) 时停止增长。',
      '最大增长速率出现在 \\(N=\\dfrac{K}{2}\\)，不是 \\(N=K\\)。',
      'r 策略者繁殖快、后代多；K 策略者寿命长、竞争能力强，二者代表生活史权衡。',
    ],
    derivationNotes: [
      { from: '资源无限', to: '指数增长', note: '\\(\\dfrac{dN}{dt}=rN\\)，per capita 增长率恒定。' },
      { from: '密度制约', to: '逻辑斯谛增长', note: '\\(\\dfrac{dN}{dt}=rN\\left(1-\\dfrac{N}{K}\\right)\\)，\\(N=K\\) 时增长停止。' },
      { from: '\\(N=\\dfrac{K}{2}\\)', to: '最大增长速率', note: '此时 \\(\\dfrac{dN}{dt}\\) 最大，不是种群数量最大。' },
    ],
    connections: [
      '先修：8.3 种群生态与种群统计。',
      '后续：8.5 群落生态与 8.7 生态系统扰动。',
      '应用：渔业配额、入侵物种管理与保护生物学。',
    ],
    definition: '种群密度效应指种群增长与死亡受密度影响的程度。密度制约因素（竞争、捕食、疾病、废物积累）随密度升高而增强，使人均增长率下降；非密度制约因素（火灾、风暴、极端温度）按比例影响个体，与密度无关。逻辑斯谛增长用环境容纳量 \\(K\\) 描述密度制约下的增长放缓。',
    intuition: '密度制约像房间越挤越容易吵架、传染病越快；非密度制约像一场暴雨，不管房间里住多少人都会淋到。',
    intuitionDetailed: '指数增长 \\(\\dfrac{dN}{dt}=rN\\) 假设资源无限，种群按固定人均速率增长；逻辑斯谛增长 \\(\\dfrac{dN}{dt}=rN\\left(1-\\dfrac{N}{K}\\right)\\) 加入密度制约，当 \\(N\\) 接近 \\(K\\) 时人均增长率趋近 0。逻辑斯谛曲线呈 S 形，最大增长速率出现在 \\(N=\\dfrac{K}{2}\\)。r 策略者寿命短、繁殖快、后代多但存活率低；K 策略者寿命长、后代少、竞争能力强。密度制约与非密度制约可同时作用，区分关键是“影响强度是否随密度变化”。',
    formulas: [
      { latex: '\\dfrac{dN}{dt}=rN', note: '指数增长；资源无限时的最大增长。' },
      { latex: '\\dfrac{dN}{dt}=rN\\left(1-\\dfrac{N}{K}\\right)', note: '逻辑斯谛增长；\\(K\\) 为环境容纳量。' },
      { latex: 'N(t)=\\dfrac{K}{1+\\dfrac{K-N_0}{N_0}e^{-rt}}', note: '逻辑斯谛增长的解；\\(N_0\\) 为初始种群大小。' },
      { latex: '\\dfrac{1}{N}\\dfrac{dN}{dt}=r\\left(1-\\dfrac{N}{K}\\right)', note: '人均增长率随 \\(N\\) 增大而线性下降。' },
    ],
    conditions: ['指数增长要求资源无限、无密度制约', '逻辑斯谛增长假设 \\(r\\) 与 \\(K\\) 恒定、密度效应立即生效', '封闭种群，忽略迁入与迁出', '\\(K\\) 随环境变化，不是永久固定的常数', '实际种群可能出现 overshoot、振荡或 Allee 效应'],
    keyPoints: ['密度制约因素的影响随密度升高而增强', '非密度制约因素与密度无关', '逻辑斯谛增长呈 S 形', '最大增长速率在 \\(N=\\dfrac{K}{2}\\)', '当 \\(N=K\\) 时 \\(\\dfrac{dN}{dt}=0\\)', 'r 策略者与 K 策略者代表不同的生活史权衡', '环境容纳量 \\(K\\) 由资源与环境决定'],
    misconceptions: [
      '认为 \\(K\\) 是种群永远达不到的最大值（实际可暂时超过）',
      '认为逻辑斯谛增长会无限持续',
      '把密度制约因素与非密度制约因素按“生物/非生物”粗暴分类',
      '认为指数增长的 per capita 增长率不断增大（它恒定，\\(\\dfrac{dN}{dt}\\) 增大）',
      '认为 \\(N=\\dfrac{K}{2}\\) 时种群数量最大（此时增长速率最大）',
      '忽略 Allee 效应：密度过低也可能不利于繁殖',
    ],
    examples: [
      {
        title: '例 1 · 指数增长',
        prompt: '某种群 \\(N=100\\)，\\(r=0.5\\,\\text{年}^{-1}\\)。资源无限时 \\(\\dfrac{dN}{dt}\\) 是多少？',
        steps: ['指数增长：\\(\\dfrac{dN}{dt}=rN\\)。', '\\(\\dfrac{dN}{dt}=0.5\\times100=50\\,\\text{个体}\\cdot\\text{年}^{-1}\\)。'],
        solution: '\\(50\\,\\text{个体}\\cdot\\text{年}^{-1}\\)。',
        solutionLatex: '\\dfrac{dN}{dt}=0.5\\times100=50',
      },
      {
        title: '例 2 · 逻辑斯谛增长',
        prompt: '\\(K=1000\\)，\\(r=0.5\\,\\text{年}^{-1}\\)。分别求 \\(N=100\\)、\\(N=500\\)、\\(N=1000\\) 时的 \\(\\dfrac{dN}{dt}\\)。',
        steps: ['\\(N=100\\)：\\(\\dfrac{dN}{dt}=0.5\\times100\\times\\left(1-\\dfrac{100}{1000}\\right)=45\\)。', '\\(N=500\\)：\\(0.5\\times500\\times0.5=125\\)。', '\\(N=1000\\)：\\(0.5\\times1000\\times0=0\\)。'],
        solution: '分别为 45、125、0 个体每年；最大增长速率在 \\(N=500\\)。',
        solutionLatex: '45,\\quad125,\\quad0',
      },
      {
        title: '例 3 · 逻辑斯谛解',
        prompt: '\\(K=1000\\)，\\(N_0=50\\)，\\(r=0.5\\,\\text{年}^{-1}\\)。求 10 年后的种群大小（取 \\(e^{-5}\\approx0.00674\\)）。',
        steps: ['\\(N(10)=\\dfrac{1000}{1+\\dfrac{1000-50}{50}e^{-5}}\\)。', '\\(\\dfrac{950}{50}=19\\)，\\(19\\times0.00674=0.12806\\)。', '\\(N(10)=\\dfrac{1000}{1.12806}\\approx886\\)。'],
        solution: '\\(N(10)\\approx886\\)。',
        solutionLatex: 'N(10)=\\dfrac{1000}{1+19e^{-5}}\\approx886',
      },
    ],
    examTips: [
      'CED Unit 8：种群生态；常考指数/逻辑斯谛增长与密度因素判断',
      '先判断题目是否给 \\(K\\)：有 \\(K\\) 用逻辑斯谛，无 \\(K\\) 且资源无限用指数',
      '最大增长速率在 \\(N=\\dfrac{K}{2}\\)，不是 \\(N=K\\)',
      '区分“影响大小随密度变化”（密度制约）与“与密度无关”（非密度制约）',
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u8', code: '8.2', title: '能量流', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.3', title: '种群生态', relation: '先修' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.5', title: '群落生态', relation: '后续' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.7', title: '生态系统扰动', relation: '应用' },
    ],
    development: ['种群增长模型', '密度制约因素', '非密度制约因素', '环境容纳量', 'r/K 策略', '逻辑斯谛增长计算'],
    checks: ['密度制约与非密度制约因素的区别是什么？', '逻辑斯谛增长的最大速率出现在什么种群大小？', '\\(N=K\\) 时 \\(\\dfrac{dN}{dt}\\) 等于多少？'],
    summary: '密度制约因素使人均增长率随种群密度下降，逻辑斯谛增长用 \\(K\\) 描述这种放缓；非密度制约因素则与密度无关。',
  },

  'math/calc-u3/3.1': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能识别复合函数的外层与内层并正确应用链式法则。 · Identify the outer and inner functions of a composite function and apply the chain rule correctly.",
      "能用莱布尼茨记号处理多层复合函数。 · Use Leibniz notation to handle compositions with several layers.",
      "能在隐函数求导与相关变化率中识别链式法则。 · Recognize the chain rule inside implicit differentiation and related rates."
    ],
    essentialKnowledge: [
      "链式法则：\\(\\dfrac{d}{dx}f(g(x))=f^{\\prime}(g(x))g^{\\prime}(x)\\)。 · The chain rule states that the derivative of \\(f(g(x))\\) is \\(f^{\\prime}(g(x))g^{\\prime}(x)\\).",
      "莱布尼茨形式：\\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}\\)。 · Leibniz form: \\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}\\).",
      "多层复合要逐层相乘，不能漏掉最内层导数。 · For several layers, multiply layer by layer and never omit the innermost derivative.",
      "链式法则要求外层在内层取值处可导、内层在 \\(x\\) 处可导。 · The chain rule requires the outer function to be differentiable at the inner value and the inner function to be differentiable at \\(x\\).",
      "链式法则不是乘积法则；相乘的函数要用乘积法则。 · The chain rule is not the product rule; functions being multiplied require the product rule."
    ],
    derivationNotes: [
      {
        from: "复合结构 · Composite structure",
        to: "外层导数 · Outer derivative",
        note: "先对外层求导，保留内层不变。 · Differentiate the outer function first, keeping the inner function unchanged."
      },
      {
        from: "内层变化率 · Inner rate of change",
        to: "链式乘积 · Chain product",
        note: "再乘内层导数，多层逐层相乘。 · Then multiply by the inner derivative; for several layers, multiply layer by layer."
      },
      {
        from: "莱布尼茨记号 · Leibniz notation",
        to: "隐函数/相关变化率 · Implicit differentiation and related rates",
        note: "\\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}\\) 把变化率串联。 · \\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}\\) links the rates of change."
      }
    ],
    connections: [
      "先修：2.8 乘积法则与基本导数公式。 · Prerequisite: 2.8 The Product Rule and basic derivative formulas.",
      "后续：3.2 隐函数求导与 4.4 相关变化率。 · Follow-up: 3.2 implicit differentiation and 4.4 related rates.",
      "应用：6.9 换元积分是链式法则的逆过程。 · Application: 6.9 integration by substitution is the reverse of the chain rule."
    ],
    definition: "链式法则用于求复合函数的导数：若 \\(y=f(u)\\) 且 \\(u=g(x)\\)，则 \\(\\dfrac{dy}{dx}=f^{\\prime}(g(x))g^{\\prime}(x)\\)。用莱布尼茨记号写作 \\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}\\)。它把“外层函数的导数”与“内层函数的导数”相乘，是隐函数求导、相关变化率与换元积分的基础。 · The chain rule differentiates composite functions: if \\(y=f(u)\\) and \\(u=g(x)\\), then \\(\\dfrac{dy}{dx}=f^{\\prime}(g(x))g^{\\prime}(x)\\). In Leibniz notation, \\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}\\). It multiplies the derivative of the outer function by the derivative of the inner function and underpins implicit differentiation, related rates, and integration by substitution.",
    intuition: "链式法则像齿轮传动：\\(x\\) 转动内层齿轮 \\(u\\)，\\(u\\) 再转动外层齿轮 \\(y\\)。总传动比等于两级传动比之积。 · The chain rule is like a gear train: \\(x\\) turns the inner gear \\(u\\), and \\(u\\) turns the outer gear \\(y\\). The overall ratio is the product of the two gear ratios.",
    intuitionDetailed: "复合函数的变化率是“外层对中间变量的敏感度”乘以“中间变量对自变量的变化率”。例如 \\(y=(3x^2+1)^5\\)，外层是五次方，内层是 \\(3x^2+1\\)；先对外层求导得 \\(5(3x^2+1)^4\\)，再乘内层导数 \\(6x\\)。多层复合时逐层相乘，不能漏掉最内层。链式法则要求外层在内层取值处可导、内层在 \\(x\\) 处可导；否则需退回定义或分段讨论。 · The rate of change of a composite function is the sensitivity of the outer function to the intermediate variable multiplied by the rate at which the intermediate variable changes with the independent variable. For example, for \\(y=(3x^2+1)^5\\), the outer function is the fifth power and the inner function is \\(3x^2+1\\); differentiating the outer function gives \\(5(3x^2+1)^4\\), then multiply by the inner derivative \\(6x\\). For several layers, multiply layer by layer and do not omit the innermost derivative. The chain rule requires the outer function to be differentiable at the inner value and the inner function to be differentiable at \\(x\\); otherwise return to the definition or split the domain.",
    formulas: [
      {
        latex: "\\dfrac{d}{dx}f(g(x))=f^{\\prime}(g(x))g^{\\prime}(x)",
        note: "链式法则的基本形式。 · Basic form of the chain rule."
      },
      {
        latex: "\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\dfrac{du}{dx}",
        note: "莱布尼茨形式；\\(u=g(x)\\)。 · Leibniz form; \\(u=g(x)\\)."
      },
      {
        latex: "\\dfrac{d}{dx}(u^{n})=nu^{n-1}\\dfrac{du}{dx}",
        note: "幂函数与链式法则结合。 · Power functions combined with the chain rule."
      },
      {
        latex: "\\dfrac{d}{dx}e^{u}=e^{u}\\dfrac{du}{dx},\\quad\\dfrac{d}{dx}\\sin u=\\cos u\\,\\dfrac{du}{dx}",
        note: "指数与三角函数的链式法则。 · Chain rule for exponential and trigonometric functions."
      }
    ],
    conditions: [
      "外层函数在内层取值处可导 · The outer function is differentiable at the inner value.",
      "内层函数在 \\(x\\) 处可导 · The inner function is differentiable at \\(x\\).",
      "多层复合要逐层相乘，不能只求最外层 · For several layers, multiply layer by layer; do not differentiate only the outermost function.",
      "分式与根式先改写为幂或商的形式再求导 · Rewrite fractions and radicals as powers or quotients before differentiating.",
      "链式法则不适用于“函数相乘”；相乘要用乘积法则 · The chain rule does not apply to a product of functions; use the product rule for products."
    ],
    keyPoints: [
      "先识别外层与内层 · Identify the outer and inner functions first.",
      "外层求导后保留内层不变，再乘内层导数 · Differentiate the outer function, keep the inner function unchanged, then multiply by the inner derivative.",
      "多层复合逐层相乘 · For several layers, multiply layer by layer.",
      "链式法则是隐函数求导与相关变化率的核心工具 · The chain rule is the core tool for implicit differentiation and related rates.",
      "换元积分是链式法则的逆过程 · Integration by substitution reverses the chain rule.",
      "不要与乘积法则混用 · Do not confuse it with the product rule."
    ],
    misconceptions: [
      "忘记乘内层导数（最常见错误） · Forgetting to multiply by the inner derivative (the most common error).",
      "把 \\(f(g(x))\\) 的导数写成 \\(f^{\\prime}(g^{\\prime}(x))\\) · Writing the derivative of \\(f(g(x))\\) as \\(f^{\\prime}(g^{\\prime}(x))\\) instead of \\(f^{\\prime}(g(x))g^{\\prime}(x)\\).",
      "对 \\(\\sin(2x)\\) 只写 \\(\\cos(2x)\\)，漏掉因子 2 · Writing only \\(\\cos(2x)\\) for the derivative of \\(\\sin(2x)\\) and omitting the factor 2.",
      "把乘积法则与链式法则混用 · Mixing up the product rule and the chain rule.",
      "多层复合只乘一层 · Multiplying only one layer of a several-layer composition.",
      "在不可导点机械套用公式 · Applying the formula mechanically at a point where the function is not differentiable."
    ],
    examples: [
      {
        title: "例 1 · 幂函数复合 · Power-Function Composition",
        prompt: "求 \\(y=(3x^{2}+1)^{5}\\) 的导数，并求 \\(x=1\\) 处的导数值。 · Find the derivative of \\(y=(3x^{2}+1)^{5}\\) and evaluate it at \\(x=1\\).",
        steps: [
          "外层 \\(u^{5}\\) 的导数为 \\(5u^{4}\\)，内层 \\(u=3x^{2}+1\\) 的导数为 \\(6x\\)。 · The outer derivative of \\(u^{5}\\) is \\(5u^{4}\\); the inner derivative of \\(u=3x^{2}+1\\) is \\(6x\\).",
          "\\(\\dfrac{dy}{dx}=5(3x^{2}+1)^{4}\\cdot6x=30x(3x^{2}+1)^{4}\\)。 · Multiply the outer and inner derivatives: \\(\\dfrac{dy}{dx}=5(3x^{2}+1)^{4}\\cdot6x=30x(3x^{2}+1)^{4}\\).",
          "\\(x=1\\) 时：\\(30\\times1\\times(4)^{4}=30\\times256=7680\\)。 · At \\(x=1\\): \\(30\\times1\\times(4)^{4}=30\\times256=7680\\)."
        ],
        solution: "\\(\\dfrac{dy}{dx}=30x(3x^{2}+1)^{4}\\)，\\(x=1\\) 时为 7680。 · \\(\\dfrac{dy}{dx}=30x(3x^{2}+1)^{4}\\), which equals 7680 at \\(x=1\\).",
        solutionLatex: "\\dfrac{dy}{dx}=30x(3x^{2}+1)^{4},\\quad\\left.\\dfrac{dy}{dx}\\right|_{x=1}=7680"
      },
      {
        title: "例 2 · 三角函数复合 · Trigonometric Composition",
        prompt: "求 \\(y=\\sin(2x)\\) 的导数，并求 \\(x=0\\) 处的导数值。 · Find the derivative of \\(y=\\sin(2x)\\) and evaluate it at \\(x=0\\).",
        steps: [
          "外层 \\(\\sin u\\) 的导数为 \\(\\cos u\\)，内层 \\(u=2x\\) 的导数为 2。 · The outer derivative of \\(\\sin u\\) is \\(\\cos u\\); the inner derivative of \\(u=2x\\) is 2.",
          "\\(\\dfrac{dy}{dx}=2\\cos(2x)\\)。 · Multiply by the inner derivative: \\(\\dfrac{dy}{dx}=2\\cos(2x)\\).",
          "\\(x=0\\) 时：\\(2\\cos0=2\\)。 · At \\(x=0\\): \\(2\\cos0=2\\)."
        ],
        solution: "\\(\\dfrac{dy}{dx}=2\\cos(2x)\\)，\\(x=0\\) 时为 2。 · \\(\\dfrac{dy}{dx}=2\\cos(2x)\\), which equals 2 at \\(x=0\\).",
        solutionLatex: "\\dfrac{dy}{dx}=2\\cos(2x),\\quad\\left.\\dfrac{dy}{dx}\\right|_{x=0}=2"
      },
      {
        title: "例 3 · 指数函数复合 · Exponential Composition",
        prompt: "求 \\(y=e^{x^{2}}\\) 的导数，并求 \\(x=1\\) 处的导数值。 · Find the derivative of \\(y=e^{x^{2}}\\) and evaluate it at \\(x=1\\).",
        steps: [
          "外层 \\(e^{u}\\) 的导数为 \\(e^{u}\\)，内层 \\(u=x^{2}\\) 的导数为 \\(2x\\)。 · The outer derivative of \\(e^{u}\\) is \\(e^{u}\\); the inner derivative of \\(u=x^{2}\\) is \\(2x\\).",
          "\\(\\dfrac{dy}{dx}=e^{x^{2}}\\cdot2x=2xe^{x^{2}}\\)。 · Multiply by the inner derivative: \\(\\dfrac{dy}{dx}=e^{x^{2}}\\cdot2x=2xe^{x^{2}}\\).",
          "\\(x=1\\) 时：\\(2e\\approx5.436\\)。 · At \\(x=1\\): \\(2e\\approx5.436\\)."
        ],
        solution: "\\(\\dfrac{dy}{dx}=2xe^{x^{2}}\\)，\\(x=1\\) 时约为 5.436。 · \\(\\dfrac{dy}{dx}=2xe^{x^{2}}\\), which is about 5.436 at \\(x=1\\).",
        solutionLatex: "\\dfrac{dy}{dx}=2xe^{x^{2}},\\quad\\left.\\dfrac{dy}{dx}\\right|_{x=1}=2e\\approx5.436"
      }
    ],
    examTips: [
      "CED Unit 3：复合函数、隐函数与反函数求导 · CED Unit 3: Derivatives of composite, implicit, and inverse functions",
      "先圈出内层函数，再写“外层导数 × 内层导数” · Circle the inner function first, then write “outer derivative × inner derivative.”",
      "多层复合从外到内逐层乘，最后检查是否漏掉常数因子 · For several layers, multiply from outside in and check for missing constant factors.",
      "隐函数求导时对 \\(y\\) 求导会产生 \\(\\dfrac{dy}{dx}\\)，本质仍是链式法则 · When differentiating implicitly, differentiating \\(y\\) produces \\(\\dfrac{dy}{dx}\\); this is still the chain rule."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u3",
        code: "3.2",
        title: "隐函数求导 · Implicit Differentiation",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u2",
        code: "2.8",
        title: "乘积法则 · The Product Rule",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.9",
        title: "换元积分法 · Integration by Substitution",
        relation: "应用 · Application"
      },
      {
        subject: "math",
        chapterId: "calc-u4",
        code: "4.4",
        title: "相关变化率 · Related Rates",
        relation: "应用 · Application"
      }
    ],
    development: [
      "复合函数结构 · Structure of composite functions",
      "链式法则 · The chain rule",
      "多层复合 · Compositions with several layers",
      "隐函数求导中的应用 · Use in implicit differentiation",
      "换元积分中的逆用 · Reverse use in integration by substitution"
    ],
    checks: [
      "链式法则为什么要乘内层导数？ · Why does the chain rule multiply by the inner derivative?",
      "\\(\\sin(2x)\\) 的导数是什么？ · What is the derivative of \\(\\sin(2x)\\)?",
      "链式法则与乘积法则的区别是什么？ · What is the difference between the chain rule and the product rule?"
    ],
    summary: "链式法则把复合函数的变化率分解为外层导数与内层导数之积，是求导与积分换元的核心工具。 · The chain rule decomposes the rate of change of a composite function into the product of the outer and inner derivatives; it is a core tool for differentiation and integration by substitution."
  },
  'math/calc-u8/8.9': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能画出旋转体并确定截面半径。 · Sketch a solid of revolution and determine the cross-sectional radius.",
      "能根据旋转轴选择 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\) 并建立圆盘法积分。 · Choose \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\) according to the axis of rotation and set up the disk-method integral.",
      "能判断何时需要改用垫圈法。 · Decide when the washer method is required."
    ],
    essentialKnowledge: [
      "圆盘法把旋转体切成薄圆盘，体积微元为 \\(\\mathrm{d}V=\\pi R^{2}\\mathrm{d}x\\)。 · The disk method slices a solid of revolution into thin disks, with volume element \\(\\mathrm{d}V=\\pi R^{2}\\,\\mathrm{d}x\\).",
      "绕 \\(x\\) 轴：\\(V=\\pi\\int_{a}^{b}[R(x)]^{2}\\mathrm{d}x\\)。 · About the \\(x\\)-axis: \\(V=\\pi\\int_{a}^{b}[R(x)]^{2}\\,\\mathrm{d}x\\).",
      "绕 \\(y\\) 轴：把曲线解成 \\(x=R(y)\\)，\\(V=\\pi\\int_{c}^{d}[R(y)]^{2}\\mathrm{d}y\\)。 · About the \\(y\\)-axis: solve the curve for \\(x=R(y)\\), then \\(V=\\pi\\int_{c}^{d}[R(y)]^{2}\\,\\mathrm{d}y\\).",
      "半径是曲线到旋转轴的垂直距离，必须平方。 · The radius is the perpendicular distance from the curve to the axis of rotation and must be squared.",
      "区域与旋转轴之间有空洞时用垫圈法，不能直接用圆盘法。 · If there is a hole between the region and the axis, use the washer method instead of the disk method."
    ],
    derivationNotes: [
      {
        from: "旋转体 · Solid of revolution",
        to: "薄圆盘 · Thin disk",
        note: "垂直旋转轴切片，截面为圆盘。 · Slice perpendicular to the axis of rotation; each cross section is a disk."
      },
      {
        from: "圆盘面积 · Disk area",
        to: "体积微元 · Volume element",
        note: "\\(\\mathrm{d}V=\\pi R^{2}\\mathrm{d}x\\)。 · The volume element is \\(\\mathrm{d}V=\\pi R^{2}\\,\\mathrm{d}x\\)."
      },
      {
        from: "旋转轴 · Axis of rotation",
        to: "积分变量 · Integration variable",
        note: "绕 \\(x\\) 轴用 \\(\\mathrm{d}x\\)，绕 \\(y\\) 轴用 \\(\\mathrm{d}y\\) 并解出 \\(x=R(y)\\)。 · About the \\(x\\)-axis use \\(\\mathrm{d}x\\); about the \\(y\\)-axis use \\(\\mathrm{d}y\\) and solve for \\(x=R(y)\\)."
      }
    ],
    connections: [
      "先修：8.8 已知截面体积。 · Prerequisite: 8.8 Volumes with known cross sections.",
      "后续：8.10 其他轴与 8.11 垫圈法。 · Follow-up: 8.10 Other axes and 8.11 the washer method.",
      "应用：工程中的旋转体体积与 3D 打印估算。 · Application: volumes of revolution in engineering and estimates for 3D printing."
    ],
    definition: "圆盘法用垂直于旋转轴的截面把旋转体切成薄圆盘，对圆盘面积 \\(\\pi R^{2}\\) 沿轴积分求体积。绕 \\(x\\) 轴旋转时 \\(V=\\pi\\int_{a}^{b}[R(x)]^{2}\\,\\mathrm{d}x\\)；绕 \\(y\\) 轴旋转时 \\(V=\\pi\\int_{c}^{d}[R(y)]^{2}\\,\\mathrm{d}y\\)。若旋转体中间有空洞，应改用垫圈法。 · The disk method slices a solid of revolution into thin disks perpendicular to the axis of rotation and integrates the disk area \\(\\pi R^{2}\\) along the axis. About the \\(x\\)-axis, \\(V=\\pi\\int_{a}^{b}[R(x)]^{2}\\,\\mathrm{d}x\\); about the \\(y\\)-axis, \\(V=\\pi\\int_{c}^{d}[R(y)]^{2}\\,\\mathrm{d}y\\). If the solid has a hole in the middle, use the washer method instead.",
    intuition: "把旋转体想成一摞硬币：每枚硬币是一个薄圆盘，半径由曲线到旋转轴的距离决定；把所有圆盘体积加起来就是积分。 · Think of the solid as a stack of coins: each coin is a thin disk whose radius is the distance from the curve to the axis of rotation; adding the disk volumes gives the integral.",
    intuitionDetailed: "圆盘法的关键是“半径方向垂直于旋转轴”。绕 \\(x\\) 轴旋转时，截面是半径为 \\(R(x)=f(x)\\) 的圆盘，厚度为 \\(\\mathrm{d}x\\)，体积微元 \\(\\mathrm{d}V=\\pi[f(x)]^{2}\\,\\mathrm{d}x\\)。绕 \\(y\\) 轴旋转时，把曲线写成 \\(x=R(y)\\)，厚度为 \\(\\mathrm{d}y\\)。若区域不紧贴旋转轴，截面是圆环而不是圆盘，需用垫圈法 \\(V=\\pi\\int(R_{\\text{外}}^{2}-R_{\\text{内}}^{2})\\,\\mathrm{d}x\\)。 · The key to the disk method is that the radius is perpendicular to the axis of rotation. About the \\(x\\)-axis, the cross section is a disk of radius \\(R(x)=f(x)\\) and thickness \\(\\mathrm{d}x\\), so the volume element is \\(\\mathrm{d}V=\\pi[f(x)]^{2}\\,\\mathrm{d}x\\). About the \\(y\\)-axis, write the curve as \\(x=R(y)\\) and use thickness \\(\\mathrm{d}y\\). If the region does not touch the axis, the cross section is an annulus rather than a disk, so use the washer method \\(V=\\pi\\int(R_{\\text{outer}}^{2}-R_{\\text{inner}}^{2})\\,\\mathrm{d}x\\).",
    formulas: [
      {
        latex: "V=\\pi\\int_{a}^{b}[R(x)]^{2}\\,\\mathrm{d}x",
        note: "绕 \\(x\\) 轴旋转的圆盘法。 · Disk method about the \\(x\\)-axis."
      },
      {
        latex: "V=\\pi\\int_{c}^{d}[R(y)]^{2}\\,\\mathrm{d}y",
        note: "绕 \\(y\\) 轴旋转的圆盘法。 · Disk method about the \\(y\\)-axis."
      },
      {
        latex: "V=\\pi\\int_{a}^{b}\\left([R_{\\text{外}}(x)]^{2}-[R_{\\text{内}}(x)]^{2}\\right)\\,\\mathrm{d}x",
        note: "有空洞时用垫圈法。 · Washer method when there is a hole."
      },
      {
        latex: "\\mathrm{d}V=\\pi R^{2}\\,\\mathrm{d}x",
        note: "薄圆盘的体积微元。 · Volume element of a thin disk."
      }
    ],
    conditions: [
      "旋转轴与积分变量对应：绕 \\(x\\) 轴用 \\(\\mathrm{d}x\\)，绕 \\(y\\) 轴用 \\(\\mathrm{d}y\\) · The axis of rotation determines the integration variable: use \\(\\mathrm{d}x\\) about the \\(x\\)-axis and \\(\\mathrm{d}y\\) about the \\(y\\)-axis.",
      "半径是曲线到旋转轴的垂直距离 · The radius is the perpendicular distance from the curve to the axis of rotation.",
      "截面为实心圆盘；有空洞时改用垫圈法 · The cross section must be a solid disk; use the washer method if there is a hole.",
      "积分上下限是旋转体沿轴方向的起止范围 · The limits are the start and end of the solid along the axis.",
      "曲线在区间内不自交，半径非负 · The curve does not cross itself and the radius is nonnegative on the interval."
    ],
    keyPoints: [
      "圆盘法本质是“截面面积积分” · The disk method is integration of cross-sectional area.",
      "面积因子是 \\(\\pi R^{2}\\)，不要漏掉 \\(\\pi\\) · The area factor is \\(\\pi R^{2}\\); do not omit \\(\\pi\\).",
      "半径要平方 · The radius must be squared.",
      "绕 \\(y\\) 轴时把曲线解成 \\(x=R(y)\\) · About the \\(y\\)-axis, solve the curve as \\(x=R(y)\\).",
      "有空洞时用外半径平方减内半径平方 · With a hole, subtract the inner radius squared from the outer radius squared.",
      "旋转轴不同，半径表达式不同 · Different axes require different radius expressions."
    ],
    misconceptions: [
      "忘记乘 \\(\\pi\\) · Forgetting the factor \\(\\pi\\).",
      "把半径写成直径，或忘记平方 · Using the diameter as the radius, or forgetting to square the radius.",
      "绕 \\(y\\) 轴仍对 \\(x\\) 积分却没有换元 · Integrating with respect to \\(x\\) about the \\(y\\)-axis without changing variables.",
      "有空洞仍用圆盘法 · Using the disk method when there is a hole.",
      "把“曲线到原点的距离”当作半径，而不是到旋转轴的垂直距离 · Using the distance to the origin rather than the perpendicular distance to the axis as the radius.",
      "上下限写成 \\(y\\) 的范围却对 \\(x\\) 积分 · Using limits in \\(y\\) while integrating with respect to \\(x\\)."
    ],
    examples: [
      {
        title: "例 1 · 绕 x 轴 · About the x-Axis",
        prompt: "曲线 \\(y=\\sqrt{x}\\) 在 \\(0\\le x\\le4\\) 与 \\(x\\) 轴围成的区域绕 \\(x\\) 轴旋转。求体积。 · The region bounded by \\(y=\\sqrt{x}\\) and the \\(x\\)-axis on \\(0\\le x\\le4\\) is rotated about the \\(x\\)-axis. Find the volume.",
        steps: [
          "半径 \\(R(x)=\\sqrt{x}\\)。 · The radius is \\(R(x)=\\sqrt{x}\\).",
          "\\(V=\\pi\\int_{0}^{4}(\\sqrt{x})^{2}\\,\\mathrm{d}x=\\pi\\int_{0}^{4}x\\,\\mathrm{d}x\\)。 · Set up the integral: \\(V=\\pi\\int_{0}^{4}(\\sqrt{x})^{2}\\,\\mathrm{d}x=\\pi\\int_{0}^{4}x\\,\\mathrm{d}x\\).",
          "\\(\\int_{0}^{4}x\\,\\mathrm{d}x=\\dfrac{1}{2}(4)^{2}=8\\)，故 \\(V=8\\pi\\approx25.13\\)。 · \\(\\int_{0}^{4}x\\,\\mathrm{d}x=\\dfrac{1}{2}(4)^{2}=8\\), so \\(V=8\\pi\\approx25.13\\)."
        ],
        solution: "\\(V=8\\pi\\approx25.13\\)。 · Thus \\(V=8\\pi\\approx25.13\\).",
        solutionLatex: "V=\\pi\\int_{0}^{4}x\\,\\mathrm{d}x=8\\pi\\approx25.13"
      },
      {
        title: "例 2 · 直线旋转 · Rotating a Line",
        prompt: "曲线 \\(y=x\\) 在 \\(0\\le x\\le2\\) 与 \\(x\\) 轴围成的区域绕 \\(x\\) 轴旋转。求体积。 · The region bounded by \\(y=x\\) and the \\(x\\)-axis on \\(0\\le x\\le2\\) is rotated about the \\(x\\)-axis. Find the volume.",
        steps: [
          "半径 \\(R(x)=x\\)。 · The radius is \\(R(x)=x\\).",
          "\\(V=\\pi\\int_{0}^{2}x^{2}\\,\\mathrm{d}x\\)。 · Set up the integral: \\(V=\\pi\\int_{0}^{2}x^{2}\\,\\mathrm{d}x\\).",
          "\\(\\int_{0}^{2}x^{2}\\,\\mathrm{d}x=\\dfrac{8}{3}\\)，故 \\(V=\\dfrac{8\\pi}{3}\\approx8.38\\)。 · \\(\\int_{0}^{2}x^{2}\\,\\mathrm{d}x=\\dfrac{8}{3}\\), so \\(V=\\dfrac{8\\pi}{3}\\approx8.38\\)."
        ],
        solution: "\\(V=\\dfrac{8\\pi}{3}\\approx8.38\\)。 · Thus \\(V=\\dfrac{8\\pi}{3}\\approx8.38\\).",
        solutionLatex: "V=\\pi\\int_{0}^{2}x^{2}\\,\\mathrm{d}x=\\dfrac{8\\pi}{3}\\approx8.38"
      },
      {
        title: "例 3 · 绕 y 轴 · About the y-Axis",
        prompt: "曲线 \\(y=x^{2}\\) 在 \\(0\\le x\\le1\\) 与 \\(y\\) 轴围成的区域绕 \\(y\\) 轴旋转。求体积。 · The region bounded by \\(y=x^{2}\\) and the \\(y\\)-axis on \\(0\\le x\\le1\\) is rotated about the \\(y\\)-axis. Find the volume.",
        steps: [
          "把曲线解成 \\(x=\\sqrt{y}\\)，\\(0\\le y\\le1\\)。 · Solve the curve as \\(x=\\sqrt{y}\\), with \\(0\\le y\\le1\\).",
          "半径 \\(R(y)=\\sqrt{y}\\)。 · The radius is \\(R(y)=\\sqrt{y}\\).",
          "\\(V=\\pi\\int_{0}^{1}y\\,\\mathrm{d}y=\\dfrac{\\pi}{2}\\approx1.571\\)。 · Evaluate the integral: \\(V=\\pi\\int_{0}^{1}y\\,\\mathrm{d}y=\\dfrac{\\pi}{2}\\approx1.571\\)."
        ],
        solution: "\\(V=\\dfrac{\\pi}{2}\\approx1.571\\)。 · Thus \\(V=\\dfrac{\\pi}{2}\\approx1.571\\).",
        solutionLatex: "V=\\pi\\int_{0}^{1}y\\,\\mathrm{d}y=\\dfrac{\\pi}{2}\\approx1.571"
      }
    ],
    examTips: [
      "CED Unit 8：旋转体体积；先画图确定旋转轴与半径 · CED Unit 8: Volumes of revolution; sketch first to determine the axis and radius.",
      "绕 \\(x\\) 轴用 \\(R(x)\\) 与 \\(\\mathrm{d}x\\)，绕 \\(y\\) 轴用 \\(R(y)\\) 与 \\(\\mathrm{d}y\\) · About the \\(x\\)-axis use \\(R(x)\\) and \\(\\mathrm{d}x\\); about the \\(y\\)-axis use \\(R(y)\\) and \\(\\mathrm{d}y\\).",
      "看到区域与轴之间有间隙，立即想到垫圈法 · If there is a gap between the region and the axis, think of the washer method immediately.",
      "答案保留 \\(\\pi\\) 或按题目要求取近似值 · Keep the answer in terms of \\(\\pi\\) or give a decimal approximation as requested."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u8",
        code: "8.8",
        title: "已知截面体积 · Volumes with Known Cross Sections",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u8",
        code: "8.10",
        title: "圆盘法其他轴 · Disk Method About Other Axes",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u8",
        code: "8.11",
        title: "垫圈法 · The Washer Method",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u6",
        code: "6.7",
        title: "定积分求值 · Evaluating Definite Integrals",
        relation: "应用 · Application"
      }
    ],
    development: [
      "旋转体与截面 · Solids of revolution and cross sections",
      "圆盘体积微元 · Disk volume element",
      "绕 \\(x\\) 轴与 \\(y\\) 轴 · About the \\(x\\)- and \\(y\\)-axes",
      "半径与积分变量 · Radius and integration variable",
      "垫圈法的引入 · Introducing the washer method"
    ],
    checks: [
      "圆盘法为什么要有 \\(\\pi R^{2}\\)？ · Why does the disk method use \\(\\pi R^{2}\\)?",
      "绕 \\(y\\) 轴时为什么要把曲线解成 \\(x=R(y)\\)？ · Why solve the curve as \\(x=R(y)\\) about the \\(y\\)-axis?",
      "什么情况下必须改用垫圈法？ · When must the washer method be used?"
    ],
    summary: "圆盘法把旋转体切成薄圆盘并积分 \\(\\pi R^{2}\\)；正确选择旋转轴、半径与积分变量是解题关键。 · The disk method slices a solid of revolution into thin disks and integrates \\(\\pi R^{2}\\); choosing the axis, radius, and integration variable correctly is the key."
  },
  'math/calc-u10/10.12': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能写出拉格朗日余项并说明各因子的含义。 · Write the Lagrange remainder and explain the meaning of each factor.",
      "能在给定区间上估计第 \\(n+1\\) 阶导数的上界 \\(M\\)。 · Estimate an upper bound \\(M\\) for the \\((n+1)\\)st derivative on a given interval.",
      "能用误差界判断近似精度或反推所需阶数。 · Use an error bound to judge approximation accuracy or to determine the required degree."
    ],
    essentialKnowledge: [
      "余项 \\(R_n(x)=f(x)-P_n(x)\\) 表示泰勒多项式与函数之差。 · The remainder \\(R_n(x)=f(x)-P_n(x)\\) is the difference between the function and the Taylor polynomial.",
      "若 \\(\\left|f^{(n+1)}(t)\\right|\\le M\\)，则 \\(\\left|R_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\)。 · If \\(\\left|f^{(n+1)}(t)\\right|\\le M\\), then \\(\\left|R_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\).",
      "\\(M\\) 是第 \\(n+1\\) 阶导数在 \\(a\\) 与 \\(x\\) 之间区间上的最大绝对值。 · \\(M\\) is the maximum absolute value of the \\((n+1)\\)st derivative on the interval between \\(a\\) and \\(x\\).",
      "误差界是最坏情况上界，不是实际误差。 · An error bound is a worst-case upper bound, not the actual error.",
      "阶乘与 \\(\\left|x-a\\right|^{n+1}\\) 共同决定误差随阶数增加而减小的速度。 · Factorials and \\(\\left|x-a\\right|^{n+1}\\) together determine how quickly the error decreases as the degree increases."
    ],
    derivationNotes: [
      {
        from: "第 n+1 阶导数 · The (n+1)st derivative",
        to: "M（第 \\(n+1\\) 阶导数的上界） · M (upper bound on the \\((n+1)\\)st derivative)",
        note: "在 \\(a\\) 与 \\(x\\) 之间取最大绝对值。 · Take the maximum absolute value on the interval between \\(a\\) and \\(x\\)."
      },
      {
        from: "M 与阶乘 · M and the factorial",
        to: "误差界 · Error bound",
        note: "\\(\\left|R_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\)。 · The bound is \\(\\left|R_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\)."
      },
      {
        from: "误差界 · Error bound",
        to: "阶数选择 · Choosing the degree",
        note: "反解 \\(n\\) 或缩小 \\(\\left|x-a\\right|\\) 满足精度要求。 · Solve for \\(n\\) or reduce \\(\\left|x-a\\right|\\) to meet the accuracy requirement."
      }
    ],
    connections: [
      "先修：10.11 泰勒多项式。 · Prerequisite: 10.11 Taylor polynomials.",
      "后续：10.13 收敛半径与 10.14 幂级数表示。 · Follow-up: 10.13 Radius of convergence and 10.14 Power-series representations.",
      "应用：数值近似、误差控制与科学计算。 · Application: numerical approximation, error control, and scientific computing."
    ],
    definition: "拉格朗日误差界给出泰勒多项式近似函数时的误差上界：若 \\(f\\) 在包含 \\(a\\) 与 \\(x\\) 的区间上有 \\(n+1\\) 阶导数，且 \\(\\left|f^{(n+1)}(t)\\right|\\le M\\)，则 \\(\\left|R_n(x)\\right|=\\left|f(x)-P_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\)。它把“近似有多准”转化为求导数的上界。 · The Lagrange error bound gives an upper bound on the error when a Taylor polynomial approximates a function: if \\(f\\) has \\(n+1\\) derivatives on an interval containing \\(a\\) and \\(x\\), and \\(\\left|f^{(n+1)}(t)\\right|\\le M\\), then \\(\\left|R_n(x)\\right|=\\left|f(x)-P_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\). It turns “how accurate is the approximation?” into a bound on a derivative.",
    intuition: "泰勒多项式在展开点附近模仿函数；拉格朗日余项说：下一项被“最大可能的第 \\(n+1\\) 阶导数”控制，离展开点越远、阶数越低，误差越大。 · A Taylor polynomial imitates a function near the expansion point; the Lagrange remainder says the next term is controlled by the largest possible \\((n+1)\\)st derivative, and the error grows with distance from the expansion point and shrinks with higher degree.",
    intuitionDetailed: "误差界不是误差的精确值，而是最坏情况的上界。解题时先确定展开点 \\(a\\)、阶数 \\(n\\) 与目标点 \\(x\\)，再找区间上 \\(\\left|f^{(n+1)}(t)\\right|\\) 的最大值 \\(M\\)。常见估计：\\(e^{t}\\) 在 \\(t\\le0.1\\) 时小于 \\(e^{0.1}\\)；\\(\\left|\\sin t\\right|\\le1\\)、\\(\\left|\\cos t\\right|\\le1\\)；\\(\\ln(1+t)\\) 的导数在正区间上递减，可用端点值估计。若题目只要求“误差小于某值”，可反解 \\(n\\) 或缩小 \\(\\left|x-a\\right|\\)。 · An error bound is not the exact error but a worst-case upper bound. To solve a problem, first identify the expansion point \\(a\\), the degree \\(n\\), and the target point \\(x\\), then find the maximum \\(M\\) of \\(\\left|f^{(n+1)}(t)\\right|\\) on the interval. Common estimates: \\(e^{t}\\) on \\(t\\le0.1\\) is below \\(e^{0.1}\\); \\(\\left|\\sin t\\right|\\le1\\) and \\(\\left|\\cos t\\right|\\le1\\); derivatives of \\(\\ln(1+t)\\) decrease on a positive interval, so an endpoint value gives an estimate. If the problem asks for an error below a given value, solve for \\(n\\) or reduce \\(\\left|x-a\\right|\\).",
    formulas: [
      {
        latex: "R_n(x)=f(x)-P_n(x)",
        note: "余项定义。 · Definition of the remainder."
      },
      {
        latex: "\\left|R_n(x)\\right|\\le\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}",
        note: "拉格朗日误差界；\\(\\left|f^{(n+1)}(t)\\right|\\le M\\)。 · Lagrange error bound; \\(\\left|f^{(n+1)}(t)\\right|\\le M\\)."
      },
      {
        latex: "M=\\max_{t\\in I}\\left|f^{(n+1)}(t)\\right|",
        note: "\\(I\\) 是 \\(a\\) 与 \\(x\\) 之间的区间。 · \\(I\\) is the interval between \\(a\\) and \\(x\\)."
      },
      {
        latex: "\\left|R_n(x)\\right|\\le\\dfrac{M\\left|x-a\\right|^{n+1}}{(n+1)!}",
        note: "等价写法，便于计算。 · Equivalent form that is convenient for computation."
      }
    ],
    conditions: [
      "\\(f\\) 在包含 \\(a\\) 与 \\(x\\) 的区间上有直到 \\(n+1\\) 阶的导数 · \\(f\\) has derivatives up to order \\(n+1\\) on an interval containing \\(a\\) and \\(x\\).",
      "要能估计 \\(\\left|f^{(n+1)}(t)\\right|\\) 在区间上的上界 \\(M\\) · An upper bound \\(M\\) for \\(\\left|f^{(n+1)}(t)\\right|\\) on the interval must be estimable.",
      "\\(x\\) 必须在展开点与估计点之间的区间内 · \\(x\\) must lie in the interval between the expansion point and the estimation point.",
      "误差界是最坏情况上界，不是实际误差 · An error bound is a worst-case upper bound, not the actual error.",
      "交替级数误差估计适用于满足交替级数条件的级数，不能与拉格朗日界混用 · Alternating-series error estimation applies only to series satisfying the alternating-series conditions and must not be confused with the Lagrange bound."
    ],
    keyPoints: [
      "先确定 \\(a\\)、\\(n\\)、\\(x\\) · Determine \\(a\\), \\(n\\), and \\(x\\) first.",
      "找第 \\(n+1\\) 阶导数的最大绝对值 \\(M\\) · Find the maximum absolute value \\(M\\) of the \\((n+1)\\)st derivative.",
      "代入 \\(\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\) · Substitute into \\(\\dfrac{M}{(n+1)!}\\left|x-a\\right|^{n+1}\\).",
      "阶乘增长使高阶误差迅速减小 · Factorial growth makes higher-order errors shrink rapidly.",
      "离展开点越远，误差界通常越大 · The error bound usually grows farther from the expansion point.",
      "误差界可用于反推所需阶数 · An error bound can be used to determine the required degree."
    ],
    misconceptions: [
      "把 \\(M\\) 取成第 \\(n\\) 阶导数的上界（应为第 \\(n+1\\) 阶） · Using the bound on the \\(n\\)th derivative for \\(M\\) instead of the \\((n+1)\\)st derivative.",
      "忘记除以 \\((n+1)!\\) · Forgetting to divide by \\((n+1)!\\).",
      "把 \\(\\left|x-a\\right|\\) 写成 \\(x\\)（展开点不为 0 时） · Writing \\(\\left|x-a\\right|\\) as \\(x\\) when the expansion point is not zero.",
      "把误差界当作实际误差 · Treating an error bound as the actual error.",
      "在区间端点外使用 \\(M\\) · Using \\(M\\) outside the relevant interval.",
      "交替级数题误用拉格朗日界而不检查条件 · Using the Lagrange bound for an alternating-series problem without checking its conditions."
    ],
    examples: [
      {
        title: "例 1 · 指数函数 · Exponential Function",
        prompt: "用 \\(e^{x}\\) 在 \\(a=0\\) 处的三次泰勒多项式近似 \\(e^{0.1}\\)，估计误差上界。 · Use the cubic Taylor polynomial of \\(e^{x}\\) at \\(a=0\\) to approximate \\(e^{0.1}\\), and estimate an upper bound for the error.",
        steps: [
          "\\(n=3\\)，\\(\\left|x-a\\right|=0.1\\)。 · Here \\(n=3\\) and \\(\\left|x-a\\right|=0.1\\).",
          "第 4 阶导数仍为 \\(e^{t}\\)，在 \\([0,0.1]\\) 上 \\(M=e^{0.1}<1.11\\)。 · The fourth derivative is still \\(e^{t}\\), and on \\([0,0.1]\\), \\(M=e^{0.1}<1.11\\).",
          "误差界 \\(\\le\\dfrac{1.11}{4!}(0.1)^{4}=\\dfrac{1.11\\times10^{-4}}{24}\\approx4.63\\times10^{-6}\\)。 · Error bound \\(\\le\\dfrac{1.11}{4!}(0.1)^{4}=\\dfrac{1.11\\times10^{-4}}{24}\\approx4.63\\times10^{-6}\\)."
        ],
        solution: "误差上界约 \\(4.63\\times10^{-6}\\)。 · The error bound is about \\(4.63\\times10^{-6}\\).",
        solutionLatex: "\\left|R_3(0.1)\\right|\\le\\dfrac{1.11}{24}(0.1)^{4}\\approx4.63\\times10^{-6}"
      },
      {
        title: "例 2 · 正弦函数 · Sine Function",
        prompt: "用 \\(\\sin x\\) 在 \\(a=0\\) 处的三次泰勒多项式近似 \\(\\sin0.2\\)，估计误差上界。 · Use the cubic Taylor polynomial of \\(\\sin x\\) at \\(a=0\\) to approximate \\(\\sin0.2\\), and estimate an upper bound for the error.",
        steps: [
          "\\(n=3\\)，\\(\\left|x-a\\right|=0.2\\)。 · Here \\(n=3\\) and \\(\\left|x-a\\right|=0.2\\).",
          "第 4 阶导数为 \\(\\sin t\\)，故 \\(M\\le1\\)。 · The fourth derivative is \\(\\sin t\\), so \\(M\\le1\\).",
          "误差界 \\(\\le\\dfrac{1}{4!}(0.2)^{4}=\\dfrac{0.0016}{24}\\approx6.67\\times10^{-5}\\)。 · Error bound \\(\\le\\dfrac{1}{4!}(0.2)^{4}=\\dfrac{0.0016}{24}\\approx6.67\\times10^{-5}\\)."
        ],
        solution: "误差上界约 \\(6.67\\times10^{-5}\\)。 · The error bound is about \\(6.67\\times10^{-5}\\).",
        solutionLatex: "\\left|R_3(0.2)\\right|\\le\\dfrac{1}{24}(0.2)^{4}\\approx6.67\\times10^{-5}"
      },
      {
        title: "例 3 · 对数函数 · Logarithmic Function",
        prompt: "用 \\(\\ln(1+x)\\) 在 \\(a=0\\) 处的二次泰勒多项式近似 \\(\\ln1.1\\)，估计误差上界。 · Use the quadratic Taylor polynomial of \\(\\ln(1+x)\\) at \\(a=0\\) to approximate \\(\\ln1.1\\), and estimate an upper bound for the error.",
        steps: [
          "\\(n=2\\)，\\(\\left|x-a\\right|=0.1\\)。 · Here \\(n=2\\) and \\(\\left|x-a\\right|=0.1\\).",
          "\\(f^{\\prime\\prime\\prime}(t)=\\dfrac{2}{(1+t)^{3}}\\)，在 \\([0,0.1]\\) 上最大值为 2。 · \\(f^{\\prime\\prime\\prime}(t)=\\dfrac{2}{(1+t)^{3}}\\), whose maximum on \\([0,0.1]\\) is 2.",
          "误差界 \\(\\le\\dfrac{2}{3!}(0.1)^{3}=\\dfrac{2\\times0.001}{6}\\approx3.33\\times10^{-4}\\)。 · Error bound \\(\\le\\dfrac{2}{3!}(0.1)^{3}=\\dfrac{2\\times0.001}{6}\\approx3.33\\times10^{-4}\\)."
        ],
        solution: "误差上界约 \\(3.33\\times10^{-4}\\)。 · The error bound is about \\(3.33\\times10^{-4}\\).",
        solutionLatex: "\\left|R_2(0.1)\\right|\\le\\dfrac{2}{6}(0.1)^{3}\\approx3.33\\times10^{-4}"
      }
    ],
    examTips: [
      "CED Unit 10：泰勒多项式与误差界；先写 \\(n\\)、\\(a\\)、\\(x\\) · CED Unit 10: Taylor polynomials and error bounds; write \\(n\\), \\(a\\), and \\(x\\) first.",
      "求 \\(M\\) 时先写第 \\(n+1\\) 阶导数，再在闭区间上找最大绝对值 · To find \\(M\\), write the \\((n+1)\\)st derivative first, then find its maximum absolute value on the closed interval.",
      "答案保留足够有效数字，并注明“上界” · Keep enough significant digits and label the result as an upper bound.",
      "若要求误差小于给定值，可用误差界反解最小 \\(n\\) · If an error below a given value is required, use the error bound to solve for the smallest \\(n\\)."
    ],
    related: [
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.11",
        title: "泰勒多项式导论 · Introduction to Taylor Polynomials",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.13",
        title: "半径与区间 · Radius and Interval of Convergence",
        relation: "后续 · Follow-up"
      },
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.10",
        title: "交替级数误差 · Alternating-Series Error",
        relation: "对比 · Contrast"
      },
      {
        subject: "math",
        chapterId: "calc-u10",
        code: "10.14",
        title: "求函数的泰勒或麦克劳林级数 · Finding Taylor or Maclaurin Series for a Function",
        relation: "应用 · Application"
      }
    ],
    development: [
      "泰勒余项 · Taylor remainder",
      "拉格朗日误差界 · Lagrange error bound",
      "估计 \\(M\\) · Estimating \\(M\\)",
      "常见函数的误差界 · Error bounds for common functions",
      "反推阶数 · Determining the required degree"
    ],
    checks: [
      "拉格朗日误差界中的 \\(M\\) 是哪一阶导数的上界？ · The upper bound \\(M\\) in the Lagrange error bound applies to which derivative?",
      "为什么误差界要除以 \\((n+1)!\\)？ · Why is the error bound divided by \\((n+1)!\\)?",
      "误差界与实际误差有什么区别？ · What is the difference between an error bound and the actual error?"
    ],
    summary: "拉格朗日误差界用第 \\(n+1\\) 阶导数的上界估计泰勒近似的最大误差，是判断近似精度与选择阶数的工具。 · The Lagrange error bound uses an upper bound on the \\((n+1)\\)st derivative to estimate the maximum error of a Taylor approximation, helping judge accuracy and choose the degree."
  },

  'em/em-u11/11.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能沿闭合回路写出各元件电势差的代数和。',
      '能正确应用电源与电阻的符号规则。',
      '能联立环路与结点方程求解多回路电路。',
    ],
    essentialKnowledge: [
      '环路定律：\\(\\sum_{\\text{闭合回路}}\\Delta V=0\\)，等价于能量守恒。',
      '沿绕行方向从电源负极到正极取 \\(+\\varepsilon\\)，从正极到负极取 \\(-\\varepsilon\\)。',
      '沿电流方向通过电阻取 \\(-IR\\)，逆电流方向取 \\(+IR\\)。',
      '含内阻电源可把内阻当作串联电阻，端电压为 \\(V_{\\text{端}}=\\varepsilon-Ir\\)。',
      '复杂电路需同时使用结点定律（电荷守恒）与环路定律（能量守恒）。',
    ],
    derivationNotes: [
      { from: '闭合回路', to: '电势代数和为零', note: '能量守恒，绕行一周回到原电势。' },
      { from: '符号规则', to: '回路方程', note: '电源 -→+ 取正，电阻顺电流取 \\(-IR\\)。' },
      { from: '多回路', to: '结点+环路', note: '结点定律保证电荷守恒，环路定律保证能量守恒。' },
    ],
    connections: [
      '先修：11.5 复合直流电路与 11.3 欧姆定律。',
      '后续：11.7 基尔霍夫结点与 11.8 RC 电路。',
      '应用：电路分析、电源内阻与故障诊断。',
    ],
    definition: '基尔霍夫环路定律指出：沿任意闭合回路绕行一周，各元件电势差代数和为零，\\(\\sum\\Delta V=0\\)。它等价于能量守恒：电荷绕闭合回路一周回到原电势。应用时需统一规定绕行方向，并按符号规则计入电源电动势、电阻电压降与电容器等元件。',
    intuition: '把电路想成环形山路：绕一圈回到起点，海拔净变化必须为零；电池像上坡电梯，电阻像下坡消耗，代数和为零。',
    intuitionDetailed: '符号规则：沿选定的绕行方向，穿过电源从负极到正极记 \\(+\\varepsilon\\)，从正极到负极记 \\(-\\varepsilon\\)；穿过电阻时，若绕行方向与电流方向相同，电势下降，记 \\(-IR\\)，相反则记 \\(+IR\\)。复杂电路需同时使用环路定律与结点定律：结点定律保证电荷守恒，环路定律保证能量守恒。含内阻的电源可把内阻当作与理想电源串联的电阻。若回路中有变化的磁通量，环路定律需加入感应电动势项。',
    formulas: [
      { latex: '\\sum_{\\text{闭合回路}}\\Delta V=0', note: '环路定律的基本形式。' },
      { latex: '\\varepsilon-IR_1-IR_2=0', note: '单回路、单个电源、两个串联电阻的示例。' },
      { latex: 'I=\\dfrac{\\varepsilon}{R_1+R_2+r}', note: '含电源内阻 \\(r\\) 时的电流。' },
      { latex: 'V_{\\text{端}}=\\varepsilon-Ir', note: '电源端电压；放电时小于电动势。' },
    ],
    conditions: ['电路为集中参数电路，导线电阻可忽略', '稳态电流；若磁通量变化，需加入感应电动势', '绕行方向可任选，但全回路必须一致', '符号规则必须统一，否则方程会出错', '含内阻电源要把内阻计入回路'],
    keyPoints: ['环路定律是能量守恒的体现', '绕行方向可任选，结果应与方向无关', '电源从负极到正极取正，电阻顺电流方向取负', '结点定律与环路定律配合解复杂电路', '端电压 \\(V_{\\text{端}}=\\varepsilon-Ir\\)', '理想导线电阻为零，电势不变'],
    misconceptions: [
      '把所有电动势都相加而不看极性',
      '绕行方向改变后忘记同步改变符号',
      '认为电流在电阻中“被消耗”而不是电势下降',
      '忽略电源内阻',
      '在有感应电动势的回路中直接套用静电场环路定律',
      '把结点定律与环路定律混用',
    ],
    examples: [
      {
        title: '例 1 · 串联电阻',
        prompt: '\\(12\\,\\mathrm{V}\\) 的理想电池与 \\(2\\,\\Omega\\)、\\(4\\,\\Omega\\) 两个电阻串联。求电流与各电阻上的电压降。',
        steps: ['总电阻 \\(R=2+4=6\\,\\Omega\\)。', '\\(I=\\dfrac{12}{6}=2\\,\\mathrm{A}\\)。', '\\(V_2=IR_2=2\\times2=4\\,\\mathrm{V}\\)，\\(V_4=2\\times4=8\\,\\mathrm{V}\\)。'],
        solution: '\\(I=2\\,\\mathrm{A}\\)；电压降分别为 \\(4\\,\\mathrm{V}\\) 与 \\(8\\,\\mathrm{V}\\)。',
        solutionLatex: 'I=\\dfrac{12}{2+4}=2\\,\\mathrm{A},\\quad V_2=4\\,\\mathrm{V},\\quad V_4=8\\,\\mathrm{V}',
      },
      {
        title: '例 2 · 含内阻电源',
        prompt: '\\(9\\,\\mathrm{V}\\) 电池内阻 \\(1\\,\\Omega\\)，外接 \\(2\\,\\Omega\\) 电阻。求电流与端电压。',
        steps: ['总电阻 \\(R=1+2=3\\,\\Omega\\)。', '\\(I=\\dfrac{9}{3}=3\\,\\mathrm{A}\\)。', '端电压 \\(V_{\\text{端}}=\\varepsilon-Ir=9-3\\times1=6\\,\\mathrm{V}\\)。'],
        solution: '\\(I=3\\,\\mathrm{A}\\)，\\(V_{\\text{端}}=6\\,\\mathrm{V}\\)。',
        solutionLatex: 'I=3\\,\\mathrm{A},\\quad V_{\\text{端}}=9-3\\times1=6\\,\\mathrm{V}',
      },
      {
        title: '例 3 · 反向电源',
        prompt: '\\(12\\,\\mathrm{V}\\) 电池与 \\(6\\,\\mathrm{V}\\) 电池反向串联，回路总电阻 \\(3\\,\\Omega\\)。求电流。',
        steps: ['两电源极性相反，净电动势 \\(\\varepsilon_{\\text{net}}=12-6=6\\,\\mathrm{V}\\)。', '\\(I=\\dfrac{6}{3}=2\\,\\mathrm{A}\\)。', '电流方向由较大的 \\(12\\,\\mathrm{V}\\) 电源决定。'],
        solution: '\\(I=2\\,\\mathrm{A}\\)，方向由 \\(12\\,\\mathrm{V}\\) 电源驱动。',
        solutionLatex: 'I=\\dfrac{12-6}{3}=2\\,\\mathrm{A}',
      },
    ],
    examTips: [
      'CED Unit 11：直流电路；复杂电路同时列结点与环路方程',
      '先在图上标出电流方向与绕行方向，再写符号',
      '电源内阻当作串联电阻，端电压用 \\(\\varepsilon-Ir\\)',
      '解出负电流说明实际方向与假设相反，不是错误',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u11', code: '11.5', title: '复合直流电路', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.7', title: '基尔霍夫结点', relation: '后续' },
      { subject: 'em', chapterId: 'em-u11', code: '11.3', title: '电阻与欧姆定律', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.2', title: '电磁感应', relation: '应用' },
    ],
    development: ['电势差与能量守恒', '绕行方向与符号规则', '单回路方程', '含内阻电源', '多回路与结点定律'],
    checks: ['环路定律为什么等价于能量守恒？', '电阻上的电势差符号如何确定？', '含内阻电源的端电压为什么小于电动势？'],
    summary: '基尔霍夫环路定律沿闭合回路把电动势与电势降的代数和设为零，是分析复杂直流电路的能量守恒方程。',
  },

  'em/em-u9/9.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用电势叠加求多个点电荷或连续分布的电势。',
      '能区分电势（标量）与电场（矢量）的叠加方式。',
      '能由电势函数求电场分量。',
    ],
    essentialKnowledge: [
      '点电荷电势：\\(V=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r}\\)。',
      '电势是标量，多个电荷的电势按代数和叠加：\\(V=\\sum V_i\\)。',
      '连续分布：\\(V=\\dfrac{1}{4\\pi\\varepsilon_0}\\int\\dfrac{\\mathrm{d}q}{r}\\)。',
      '电场是电势的负梯度：\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)，\\(\\vec E=-\\nabla V\\)。',
      '等势面与电场线垂直；沿等势面移动电荷不做功。',
    ],
    derivationNotes: [
      { from: '点电荷电势', to: '叠加', note: '\\(V=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r}\\) 是标量，多个电荷直接代数和。' },
      { from: '连续分布', to: '积分', note: '\\(V=\\dfrac{1}{4\\pi\\varepsilon_0}\\int\\dfrac{\\mathrm{d}q}{r}\\) 把电荷元贡献累加。' },
      { from: '电势', to: '电场', note: '\\(E=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}r}\\)，电场指向电势降低最快的方向。' },
    ],
    connections: [
      '先修：9.2 电势能与 8.2 电场。',
      '后续：9.4 电势差与功、10.4 电容器。',
      '应用：示波器、电子透镜与电路中电势分析。',
    ],
    definition: '电势是单位正电荷在该点具有的电势能，\\(V=\\dfrac{U}{q}\\)。点电荷电势为 \\(V=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r}\\)；多个电荷按标量代数和叠加，连续分布用积分 \\(V=\\dfrac{1}{4\\pi\\varepsilon_0}\\int\\dfrac{\\mathrm{d}q}{r}\\)。电场是电势的负梯度：\\(E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)。',
    intuition: '电势像“电的高度”：正电荷从高处滑向低处；电场方向指向电势下降最快的方向。',
    intuitionDetailed: '电势是标量，叠加时只看正负，不用分解方向；电场是矢量，叠加时要分解。点电荷取无穷远为零；有限大带电体外部可视为点电荷，内部电势需积分。等势面越密，电场越强；等势面与电场线处处垂直。',
    formulas: [
      { latex: 'V=\\dfrac{1}{4\\pi\\varepsilon_0}\\sum_i\\dfrac{q_i}{r_i}', note: '离散电荷的电势叠加。' },
      { latex: 'V=\\dfrac{1}{4\\pi\\varepsilon_0}\\int\\dfrac{\\mathrm{d}q}{r}', note: '连续分布的电势。' },
      { latex: 'E_x=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x},\\quad \\vec E=-\\nabla V', note: '电场是电势的负梯度。' },
      { latex: '\\Delta V=-\\int_A^B\\vec E\\cdot\\mathrm{d}\\vec s', note: '电势差与电场线积分。' },
    ],
    conditions: ['电势零点可任选；点电荷通常取无穷远为零', '电势是标量，叠加用代数和', '电场是矢量，叠加用分量', '\\(V=\\dfrac{kq}{r}\\) 适用于点电荷或球外', '等势面与电场线垂直', '由 \\(V(x,y,z)\\) 求 \\(\\vec E\\) 时用偏导'],
    keyPoints: ['电势是标量，电场是矢量', '正电荷周围电势为正，负电荷周围为负', '电势沿电场方向降低', '\\(E=-\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\)：电势变化越快，场强越大', '沿等势面移动电荷不做功'],
    misconceptions: [
      '把电势与电势能混为一谈（\\(U=qV\\)）',
      '认为电势为零处电场也为零',
      '叠加电势时分解方向（标量不需要）',
      '认为电势高处电场一定强',
      '忘记 \\(E=-\\nabla V\\) 的负号',
    ],
    examples: [
      {
        title: '例 1 · 点电荷',
        prompt: '点电荷 \\(q=2.0\\,\\mu\\mathrm{C}\\)，求距其 \\(0.30\\,\\mathrm{m}\\) 处的电势。',
        steps: ['\\(V=k\\dfrac{q}{r}\\)。', '\\(V=(9.0\\times10^{9})\\dfrac{2.0\\times10^{-6}}{0.30}\\)。', '\\(V=6.0\\times10^{4}\\,\\mathrm{V}\\)。'],
        solution: '\\(V=6.0\\times10^{4}\\,\\mathrm{V}\\)。',
        solutionLatex: 'V=6.0\\times10^{4}\\,\\mathrm{V}',
      },
      {
        title: '例 2 · 等量异号',
        prompt: '两个等量异号电荷 \\(+q\\) 与 \\(-q\\) 相距 \\(2a\\)。求它们中点处的电势与电场。',
        steps: ['电势为标量和：\\(V=\\dfrac{kq}{a}+\\dfrac{k(-q)}{a}=0\\)。', '电场为矢量和：两者都指向负电荷，叠加不为零。'],
        solution: '\\(V=0\\)，但 \\(E\\neq0\\)，方向由正指向负。',
      },
      {
        title: '例 3 · 由电势求场',
        prompt: '某区域电势 \\(V=3x^{2}+2y\\)（SI 单位）。求点 \\((1,2)\\) 处的电场。',
        steps: ['\\(E_x=-\\dfrac{\\partial V}{\\partial x}=-6x\\)。', '\\(E_y=-\\dfrac{\\partial V}{\\partial y}=-2\\)。', '在 \\((1,2)\\)：\\(\\vec E=\\langle-6,-2\\rangle\\,\\mathrm{V/m}\\)。'],
        solution: '\\(\\vec E=-6\\hat i-2\\hat j\\,\\mathrm{V/m}\\)。',
        solutionLatex: '\\vec E=-6\\hat i-2\\hat j\\,\\mathrm{V/m}',
      },
    ],
    examTips: [
      'CED Unit 9：电势；先判断标量叠加还是矢量叠加',
      '电势题直接代 \\(V=\\dfrac{kq}{r}\\)，注意正负号',
      '由 \\(V\\) 求 \\(E\\) 用偏导并加负号',
      '等势面与电场线垂直，可用于判断场方向',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u9', code: '9.1', title: '电势能', relation: '先修' },
      { subject: 'em', chapterId: 'em-u9', code: '9.2', title: '电势', relation: '先修' },
      { subject: 'em', chapterId: 'em-u9', code: '9.4', title: '电势差与功', relation: '后续' },
      { subject: 'em', chapterId: 'em-u8', code: '8.2', title: '电场', relation: '相关' },
    ],
    development: ['电势定义', '点电荷电势', '标量叠加', '连续分布积分', '电势与电场梯度'],
    checks: ['电势与电势能有什么区别？', '为什么电势为零处电场不一定为零？', '如何由 \\(V(x)\\) 求 \\(E_x\\)？'],
    summary: '电势是标量，点电荷 \\(V=\\dfrac{kq}{r}\\)，叠加用代数和；电场是电势的负梯度，等势面与电场线垂直。',
  },

  'em/em-u10/10.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明静电平衡导体的四个基本性质。',
      '能用高斯定律分析导体球壳与空腔的电荷分布。',
      '能解释尖端放电与静电屏蔽。',
    ],
    essentialKnowledge: [
      '静电平衡导体内 \\(\\vec E=0\\)，整个导体是等势体。',
      '净电荷只分布在导体表面；表面外侧 \\(\\vec E\\perp\\) 表面，大小 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)。',
      '空腔导体内部无电荷时，腔内场强为零，可屏蔽外部电场。',
      '腔内有电荷时，内表面感应等量异号电荷，外表面电荷由电荷守恒决定。',
      '曲率越大处面电荷密度越高，表面场强越强。',
    ],
    derivationNotes: [
      { from: '导体内部静电平衡', to: 'E=0', note: '若内部有场，自由电荷会继续移动，直到达到平衡。' },
      { from: '高斯面', to: '表面电荷', note: '内部无净电荷，净电荷只能分布在导体表面。' },
      { from: '表面高斯柱', to: 'E=σ/ε0', note: '表面外侧电场垂直于表面，大小由表面电荷密度决定。' },
    ],
    connections: [
      '先修：8.5 高斯定律与 9.3 电势。',
      '后续：10.2 电荷再分布与 10.4 电容器。',
      '应用：静电屏蔽、法拉第笼与避雷针。',
    ],
    definition: '导体处于静电平衡时，内部电场为零，净电荷只分布在表面，表面外侧电场垂直于表面且大小 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)，整个导体是等势体。若导体有空腔，腔内无电荷时腔内场强为零（静电屏蔽）；腔内有电荷时，内表面感应出等量异号电荷。',
    intuition: '导体中的自由电子会一直移动，直到内部电场被完全抵消；多余电荷只能“挤”到表面。',
    intuitionDetailed: '电荷在导体表面并非均匀分布：曲率越大处面电荷密度越高、场强越强，避雷针利用尖端放电。接地导体与大地等势，可通过接地改变外表面电荷。法拉第笼利用导体壳屏蔽外部电场。',
    formulas: [
      { latex: 'E_{\\mathrm{inside}}=0', note: '静电平衡时导体内部场强为零。' },
      { latex: 'E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}', note: '导体表面外侧场强。' },
      { latex: 'V=\\text{常数}', note: '整个导体是等势体。' },
    ],
    conditions: ['静电平衡：没有宏观电流', '导体内部有自由电荷', '外部电场不随时间变化', '接地导体与大地等势', '尖端曲率大处电荷密度高'],
    keyPoints: ['导体内 \\(E=0\\)', '净电荷在表面', '表面场强垂直于表面', '导体是等势体', '空腔导体可静电屏蔽'],
    misconceptions: [
      '认为导体内部有净电荷',
      '认为导体表面场强与表面平行',
      '认为导体上各点面电荷密度相同',
      '认为接地会“放走所有电荷”（只改变电势与部分电荷）',
      '把静电屏蔽与磁屏蔽混为一谈',
    ],
    examples: [
      {
        title: '例 1 · 实心导体球',
        prompt: '半径 \\(R\\) 的实心导体球带净电荷 \\(+Q\\)。求球内、球外的电场与电势。',
        steps: ['电荷全部分布在表面。', '球内 \\(E=0\\)，电势等于表面电势 \\(V=\\dfrac{kQ}{R}\\)。', '球外 \\(E=\\dfrac{kQ}{r^{2}}\\)，\\(V=\\dfrac{kQ}{r}\\)。'],
        solution: '球内 \\(E=0\\)、\\(V=\\dfrac{kQ}{R}\\)；球外 \\(E=\\dfrac{kQ}{r^{2}}\\)、\\(V=\\dfrac{kQ}{r}\\)。',
      },
      {
        title: '例 2 · 空腔导体',
        prompt: '空腔导体内部放 \\(+q\\)，导体本身不带电。求内表面、外表面电荷与腔内场强。',
        steps: ['高斯面取在导体内：\\(q_{\\mathrm{encl}}=0\\)，故内表面感应 \\(-q\\)。', '电荷守恒：外表面 \\(+q\\)。', '腔内场强由腔内电荷与内表面感应电荷共同决定，不为零。'],
        solution: '内表面 \\(-q\\)、外表面 \\(+q\\)；导体内 \\(E=0\\)，腔内有场。',
      },
      {
        title: '例 3 · 尖端',
        prompt: '为什么避雷针做成尖端？',
        steps: ['尖端曲率大，面电荷密度高。', '表面场强 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 更大。', '强电场使空气电离，电荷更易释放。'],
        solution: '尖端场强集中，利于放电中和电荷。',
      },
    ],
    examTips: [
      'CED Unit 10：导体与电容器',
      '先判断静电平衡，再写 \\(E_{\\mathrm{inside}}=0\\)',
      '空腔题用高斯定律找内表面电荷',
      '接地改变的是电势与外表面电荷',
      '尖端放电用 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\) 解释',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u8', code: '8.5', title: '高斯定律', relation: '先修' },
      { subject: 'em', chapterId: 'em-u9', code: '9.2', title: '电势', relation: '先修' },
      { subject: 'em', chapterId: 'em-u10', code: '10.2', title: '电荷再分布', relation: '后续' },
    ],
    development: ['静电平衡', '导体内场强为零', '表面电荷与场强', '空腔与屏蔽', '尖端放电'],
    checks: ['为什么导体内部场强为零？', '空腔导体的内表面电荷如何确定？', '尖端为什么容易放电？'],
    summary: '静电平衡导体内 \\(E=0\\)、净电荷在表面、整体等势；表面 \\(E=\\dfrac{\\sigma}{\\varepsilon_0}\\)，空腔导体可屏蔽外部电场。',
  },

  'em/em-u11/11.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用 \\(R=\\dfrac{\\rho L}{A}\\) 计算导体的电阻。',
      '能区分电阻与电阻率，并分析长度/面积变化的影响。',
      '能判断欧姆定律的适用范围并计算串并联等效电阻。',
    ],
    essentialKnowledge: [
      '电阻：\\(R=\\rho\\dfrac{L}{A}\\)，由材料与几何共同决定。',
      '电阻率 \\(\\rho\\) 是材料属性；电导率 \\(\\sigma=\\dfrac{1}{\\rho}\\)。',
      '欧姆定律：\\(V=IR\\)，只对欧姆器件成立。',
      '温度变化：\\(\\rho=\\rho_0[1+\\alpha(T-T_0)]\\)。',
      '串联 \\(R_{\\mathrm{eq}}=\\sum R_i\\)；并联 \\(\\dfrac{1}{R_{\\mathrm{eq}}}=\\sum\\dfrac{1}{R_i}\\)。',
    ],
    derivationNotes: [
      { from: '电阻率定义', to: '电阻', note: '\\(R=\\rho\\dfrac{L}{A}\\)：越长、越细，电阻越大。' },
      { from: '欧姆定律', to: 'V=IR', note: '对欧姆器件，电流与电压成正比，电阻为常数。' },
      { from: '温度变化', to: '电阻率变化', note: '\\(\\rho=\\rho_0[1+\\alpha(T-T_0)]\\)，金属电阻率通常随温度升高而增大。' },
    ],
    connections: [
      '先修：11.2 电流与 8.2 电场。',
      '后续：11.4 电功率与 11.5 复合直流电路。',
      '应用：导线选型、保险丝与温度传感器。',
    ],
    definition: '电阻 \\(R=\\rho\\dfrac{L}{A}\\) 描述导体对电流的阻碍，其中 \\(\\rho\\) 是电阻率、\\(L\\) 是长度、\\(A\\) 是横截面积。欧姆定律 \\(V=IR\\) 对欧姆器件成立；电阻率随温度变化 \\(\\rho=\\rho_0[1+\\alpha(T-T_0)]\\)。电导率 \\(\\sigma=\\dfrac{1}{\\rho}\\)。',
    intuition: '电阻像水管对水流的阻碍：管子越长、越细，阻碍越大；材料本身的电阻率决定“先天”阻力。',
    intuitionDetailed: '金属中自由电子与晶格碰撞产生电阻；温度升高，晶格振动增强，电阻率通常增大。半导体则可能随温度升高电阻率下降。欧姆定律是材料性质在一定条件下的近似，二极管等非线性器件不服从。串联电阻相加，并联倒数相加。',
    formulas: [
      { latex: 'R=\\rho\\dfrac{L}{A}', note: '电阻的决定式。' },
      { latex: 'V=IR', note: '欧姆定律（欧姆器件）。' },
      { latex: 'P=IV=I^{2}R=\\dfrac{V^{2}}{R}', note: '电功率。' },
      { latex: 'R_{\\mathrm{series}}=\\sum R_i,\\quad \\dfrac{1}{R_{\\mathrm{parallel}}}=\\sum\\dfrac{1}{R_i}', note: '串并联等效电阻。' },
    ],
    conditions: ['欧姆定律要求器件近似线性、温度稳定', '电阻率是材料属性，电阻还取决于几何', '均匀横截面积', '温度变化不大时用线性温度系数', '二极管、灯丝等非线性器件不服从固定 \\(R\\)'],
    keyPoints: ['\\(R\\) 由材料与几何共同决定', '长度加倍电阻加倍，面积加倍电阻减半', '电阻率是材料属性', '串联分压、并联分流', '欧姆定律不是所有器件的普遍定律'],
    misconceptions: [
      '认为电阻只由材料决定（还取决于长度与面积）',
      '把电阻率与电阻混为一谈',
      '认为欧姆定律适用于所有器件',
      '把串联当分流、并联当分压',
      '忽略温度对电阻的影响',
    ],
    examples: [
      {
        title: '例 1 · 导线电阻',
        prompt: '铜导线长 \\(2.0\\,\\mathrm{m}\\)、横截面积 \\(1.0\\times10^{-6}\\,\\mathrm{m^{2}}\\)，电阻率 \\(1.7\\times10^{-8}\\,\\Omega\\cdot\\mathrm{m}\\)。求电阻。',
        steps: ['\\(R=\\rho\\dfrac{L}{A}\\)。', '\\(R=(1.7\\times10^{-8})\\dfrac{2.0}{1.0\\times10^{-6}}\\)。', '\\(R=3.4\\times10^{-2}\\,\\Omega\\)。'],
        solution: '\\(R\\approx 0.034\\,\\Omega\\)。',
        solutionLatex: 'R\\approx 0.034\\,\\Omega',
      },
      {
        title: '例 2 · 拉伸导线',
        prompt: '把导线均匀拉长到原来的 2 倍（体积不变），电阻变为原来的几倍？',
        steps: ['体积不变：\\(L\'=2L\\)，\\(A\'=\\dfrac{A}{2}\\)。', '\\(R\'=\\rho\\dfrac{2L}{\\frac{A}{2}}=4\\rho\\dfrac{L}{A}=4R\\)。'],
        solution: '电阻变为原来的 4 倍。',
        solutionLatex: 'R\'=4R',
      },
      {
        title: '例 3 · 串并联',
        prompt: '\\(6.0\\,\\Omega\\) 与 \\(3.0\\,\\Omega\\) 的电阻，串联与并联的等效电阻各是多少？',
        steps: ['串联：\\(6+3=9\\,\\Omega\\)。', '并联：\\(\\dfrac{1}{R}=\\dfrac{1}{6}+\\dfrac{1}{3}=\\dfrac{1}{2}\\)。', '\\(R=2.0\\,\\Omega\\)。'],
        solution: '串联 \\(9.0\\,\\Omega\\)，并联 \\(2.0\\,\\Omega\\)。',
        solutionLatex: 'R_{\\mathrm{series}}=9.0\\,\\Omega,\\;R_{\\mathrm{parallel}}=2.0\\,\\Omega',
      },
    ],
    examTips: [
      'CED Unit 11：电路',
      '先判断材料/几何，再用 \\(R=\\dfrac{\\rho L}{A}\\)',
      '欧姆定律只对欧姆器件成立',
      '串联分压、并联分流',
      '拉伸/对折导线用体积不变分析',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u11', code: '11.1', title: '电流', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.2', title: '简单电路', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.4', title: '电功率', relation: '后续' },
      { subject: 'em', chapterId: 'em-u11', code: '11.5', title: '复合直流电路', relation: '后续' },
    ],
    development: ['电阻与电阻率', '几何因素', '欧姆定律', '温度效应', '串并联等效'],
    checks: ['电阻与电阻率有什么区别？', '导线拉长 2 倍电阻为何变 4 倍？', '欧姆定律什么时候不适用？'],
    summary: '电阻由材料与几何决定 \\(R=\\dfrac{\\rho L}{A}\\)；欧姆定律 \\(V=IR\\) 只适用于欧姆器件，串并联等效电阻是电路化简基础。',
  },

  'em/em-u11/11.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出结点定律并正确使用流入/流出符号。',
      '能把结点定律与环路定律联立求解多支路电路。',
      '能解释负电流结果的含义。',
    ],
    essentialKnowledge: [
      '结点定律：\\(\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}\\)，等价于电荷守恒。',
      '按统一符号约定可写成 \\(\\sum I=0\\)。',
      '稳态下电荷不会在结点积累。',
      '解出负电流表示实际方向与假设相反。',
      '结点定律与环路定律联立可解多回路电路。',
    ],
    derivationNotes: [
      { from: '电荷守恒', to: '结点定律', note: '流入结点的电荷不能堆积，故 \\(\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}\\)。' },
      { from: '符号约定', to: '代数和', note: '流入取正、流出取负时，\\(\\sum I=0\\)。' },
      { from: '结点+环路', to: '支路电流', note: '结点方程给出电流关系，环路方程给出电压关系，联立求解。' },
    ],
    connections: [
      '先修：11.5 复合直流电路与 11.6 环路定律。',
      '后续：11.8 RC 电路与多回路网络。',
      '应用：家用电路、电桥与电子线路分析。',
    ],
    definition: '基尔霍夫结点定律（电流定律）是电荷守恒在电路中的体现：流入任一结点的电流总和等于流出该结点的电流总和，\\(\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}\\)，或按符号约定 \\(\\sum I=0\\)。它用于分析分支电路，与环路定律联立求解各支路电流。',
    intuition: '结点像水管三通：流进来的水必须全部流出去，不能凭空积累。',
    intuitionDetailed: '先给每条支路假设电流方向；流入取正、流出取负（或反之），代数和为零。若解出负值，实际方向与假设相反。结点定律对任意闭合面也成立（广义结点）。稳态下电荷不会在结点堆积。',
    formulas: [
      { latex: '\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}', note: '结点定律。' },
      { latex: '\\sum I=0', note: '按统一符号约定。' },
    ],
    conditions: ['稳态电流，结点无电荷积累', '先假设各支路电流方向', '流入/流出符号约定全程一致', '对广义闭合面同样成立', '与环路定律联立时方程数要匹配未知量'],
    keyPoints: ['结点定律 = 电荷守恒', '流入总和 = 流出总和', '负电流表示实际方向相反', '结点数与独立回路数决定方程组', '广义结点可用于简化'],
    misconceptions: [
      '认为电流在结点会被“消耗”',
      '流入流出方向标错导致符号错误',
      '只写结点方程不写环路方程，未知量不足',
      '把电压与电流的符号约定混用',
      '认为结点定律只适用于三岔点',
    ],
    examples: [
      {
        title: '例 1 · 三支路',
        prompt: '某结点流入 \\(2.0\\,\\mathrm{A}\\)，一条支路流出 \\(0.50\\,\\mathrm{A}\\)，求另一支路电流。',
        steps: ['\\(I_{\\mathrm{in}}=I_{\\mathrm{out1}}+I_{\\mathrm{out2}}\\)。', '\\(2.0=0.50+I_2\\)。', '\\(I_2=1.5\\,\\mathrm{A}\\)。'],
        solution: '另一支路流出 \\(1.5\\,\\mathrm{A}\\)。',
        solutionLatex: 'I_2=1.5\\,\\mathrm{A}',
      },
      {
        title: '例 2 · 两回路结点',
        prompt: '两回路共用一个结点，支路电流分别为 \\(I_1\\) 流入、\\(I_2\\) 与 \\(I_3\\) 流出。写出结点方程。',
        steps: ['流入 = 流出。', '\\(I_1=I_2+I_3\\)。'],
        solution: '\\(I_1-I_2-I_3=0\\)。',
        solutionLatex: 'I_1=I_2+I_3',
      },
      {
        title: '例 3 · 负值',
        prompt: '解方程得到某支路 \\(I=-0.40\\,\\mathrm{A}\\)，说明什么？',
        steps: ['负号表示实际电流方向与假设相反。', '大小仍为 \\(0.40\\,\\mathrm{A}\\)。'],
        solution: '实际方向与假设相反，大小 \\(0.40\\,\\mathrm{A}\\)。',
      },
    ],
    examTips: [
      'CED Unit 11：基尔霍夫定律',
      '先标电流方向，再写流入=流出',
      '结点方程数与独立回路方程数要匹配未知量',
      '负值只表示方向相反',
      '复杂电路可先化简串并联再列方程',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u11', code: '11.5', title: '复合直流电路', relation: '先修' },
      { subject: 'em', chapterId: 'em-u11', code: '11.6', title: '基尔霍夫环路', relation: '相关' },
      { subject: 'em', chapterId: 'em-u11', code: '11.2', title: '简单电路', relation: '先修' },
    ],
    development: ['电荷守恒', '结点方程', '符号约定', '与环路定律联立', '广义结点'],
    checks: ['结点定律的物理本质是什么？', '为什么解出负电流不是错误？', '结点方程与环路方程如何配合？'],
    summary: '结点定律 \\(\\sum I_{\\mathrm{in}}=\\sum I_{\\mathrm{out}}\\) 是电荷守恒；与环路定律联立可解多支路电流。',
  },

  'em/em-u12/12.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出安培定律并确定包围的净电流。',
      '能根据对称性选择安培环路求长直导线、螺线管与环面的磁场。',
      '能分析同轴电缆等组合导体的磁场分布。',
    ],
    essentialKnowledge: [
      '安培定律：\\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{encl}}\\)。',
      '只有穿过安培环路的净电流贡献环流。',
      '长直导线：\\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)。',
      '理想螺线管：\\(B=\\mu_0nI\\)，\\(n=\\dfrac{N}{L}\\)。',
      '环面内部：\\(B=\\dfrac{\\mu_0NI}{2\\pi r}\\)。',
    ],
    derivationNotes: [
      { from: '电流对称性', to: '安培环路', note: '选取与磁场方向一致的闭合回路，使 \\(\\vec B\\cdot\\mathrm{d}\\vec l\\) 简化。' },
      { from: '安培定律', to: '长直导线', note: '\\(B(2\\pi r)=\\mu_0I\\)，故 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)。' },
      { from: '螺线管对称性', to: '内部磁场', note: '理想螺线管内部 \\(B=\\mu_0nI\\)，外部近似为零。' },
    ],
    connections: [
      '先修：12.2 运动电荷受力与 12.3 毕奥–萨伐尔定律。',
      '后续：12.5 磁偶极与磁性材料、12.6 磁导率与材料响应与 13.2 电磁感应。',
      '应用：电磁铁、螺线管与电流传感器。',
    ],
    definition: '安培定律把磁场沿闭合回路的环流与穿过该回路的净电流联系起来：\\(\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{encl}}\\)。当电流分布具有长直、螺线管或环面对称时，可用它求磁场：长直导线 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)，理想螺线管 \\(B=\\mu_0nI\\)。',
    intuition: '安培定律像“磁场沿圈的总量由圈内电流决定”：圈内电流越大，沿圈绕一周的磁场越强。',
    intuitionDetailed: '选择安培环路时让 \\(\\vec B\\) 与 \\(\\mathrm{d}\\vec l\\) 平行且大小恒定，或让某段积分为零。长直导线取同心圆；螺线管取跨内部与外部的一段矩形；环面取同心圆。电流方向与环路方向用右手定则联系。',
    formulas: [
      { latex: '\\oint\\vec B\\cdot\\mathrm{d}\\vec l=\\mu_0 I_{\\mathrm{encl}}', note: '安培定律。' },
      { latex: 'B=\\dfrac{\\mu_0I}{2\\pi r}', note: '长直导线。' },
      { latex: 'B=\\mu_0nI', note: '理想螺线管内部。' },
      { latex: 'B=\\dfrac{\\mu_0NI}{2\\pi r}', note: '环面（toroid）内部。' },
    ],
    conditions: ['稳恒电流（或准稳态）', '安培环路闭合', '只有穿过环路的净电流贡献环流', '对称性使 \\(B\\) 可提出积分号', '真空磁导率 \\(\\mu_0\\)；介质中换成 \\(\\mu\\)'],
    keyPoints: ['安培定律 = 磁场环流与包围电流', '长直导线 \\(B\\propto\\dfrac{I}{r}\\)', '螺线管内部近似均匀 \\(B=\\mu_0nI\\)', '环路外电流对环流贡献为零', '电流方向用右手定则'],
    misconceptions: [
      '把环路外的电流也算进 \\(I_{\\mathrm{encl}}\\)',
      '在不对称情形直接用 \\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)',
      '把 \\(n\\)（单位长度匝数）与总匝数 \\(N\\) 混淆',
      '认为螺线管外部磁场严格为零（近似为零）',
      '忘记电流方向与环路方向的右手关系',
    ],
    examples: [
      {
        title: '例 1 · 长直导线',
        prompt: '长直导线通 \\(10\\,\\mathrm{A}\\) 电流，求距导线 \\(5.0\\,\\mathrm{cm}\\) 处的磁感应强度。',
        steps: ['\\(B=\\dfrac{\\mu_0I}{2\\pi r}\\)。', '\\(B=\\dfrac{(4\\pi\\times10^{-7})(10)}{2\\pi(0.050)}\\)。', '\\(B=4.0\\times10^{-5}\\,\\mathrm{T}\\)。'],
        solution: '\\(B=4.0\\times10^{-5}\\,\\mathrm{T}\\)（40 μT）。',
        solutionLatex: 'B=4.0\\times10^{-5}\\,\\mathrm{T}',
      },
      {
        title: '例 2 · 螺线管',
        prompt: '理想螺线管每米 \\(1000\\) 匝，通 \\(2.0\\,\\mathrm{A}\\) 电流。求内部磁感应强度。',
        steps: ['\\(n=1000\\,\\mathrm{m^{-1}}\\)。', '\\(B=\\mu_0nI=(4\\pi\\times10^{-7})(1000)(2.0)\\)。', '\\(B=2.5\\times10^{-3}\\,\\mathrm{T}\\)。'],
        solution: '\\(B\\approx 2.5\\,\\mathrm{mT}\\)。',
        solutionLatex: 'B\\approx 2.5\\times10^{-3}\\,\\mathrm{T}',
      },
      {
        title: '例 3 · 同轴电缆',
        prompt: '同轴电缆内导体电流 \\(I\\) 向右，外导体电流 \\(I\\) 向左。求电缆外部区域的磁场。',
        steps: ['取半径大于外导体的同心圆为安培环路。', '包围的净电流 \\(I-I=0\\)。', '\\(\\oint B\\cdot\\mathrm{d}l=\\mu_0(0)\\Rightarrow B=0\\)。'],
        solution: '外部 \\(B=0\\)（理想同轴电缆）。',
      },
    ],
    examTips: [
      'CED Unit 12：磁场',
      '先判断对称性，再选安培环路',
      '写清 \\(I_{\\mathrm{encl}}\\) 与环路方向',
      '螺线管用 \\(n=\\dfrac{N}{L}\\)，不是总匝数',
      '长直导线 \\(B\\propto\\dfrac{1}{r}\\)',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u12', code: '12.2', title: '运动电荷与磁场', relation: '先修' },
      { subject: 'em', chapterId: 'em-u12', code: '12.3', title: '毕奥–萨伐尔定律', relation: '先修' },
      { subject: 'em', chapterId: 'em-u12', code: '12.5', title: '磁偶极与磁性材料', relation: '后续' },
      { subject: 'em', chapterId: 'em-u12', code: '12.6', title: '磁导率与材料响应', relation: '后续' },
      { subject: 'em', chapterId: 'em-u13', code: '13.1', title: '磁通量', relation: '后续' },
    ],
    development: ['磁场环流', '安培定律', '长直导线', '螺线管与环面', '同轴电缆与对称性'],
    checks: ['安培定律中哪些电流贡献环流？', '螺线管的 \\(n\\) 与 \\(N\\) 有什么区别？', '同轴电缆外部磁场为什么为零？'],
    summary: '安培定律 \\(\\oint B\\cdot\\mathrm{d}l=\\mu_0I_{\\mathrm{encl}}\\) 用对称性求磁场；长直导线、螺线管、环面是三类标准结果。',
  },

  'em/em-u13/13.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用法拉第定律计算感应电动势的大小。',
      '能用楞次定律判断感应电流方向。',
      '能分析动生电动势与磁通量变化的三种途径。',
    ],
    essentialKnowledge: [
      '磁通量：\\(\\Phi_B=\\int\\vec B\\cdot\\mathrm{d}\\vec A=BA\\cos\\theta\\)。',
      '法拉第定律：\\(\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)。',
      '楞次定律：感应电流的磁场阻碍原磁通量的变化。',
      '动生电动势：\\(\\varepsilon=BLv\\)（导体棒垂直切割磁感线）。',
      '磁通量变化可来自 \\(B\\)、\\(A\\) 或 \\(\\theta\\) 的变化。',
    ],
    derivationNotes: [
      { from: '磁通量变化', to: '感应电动势', note: '\\(\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)。' },
      { from: '楞次定律', to: '感应电流方向', note: '感应电流的磁场阻碍原磁通量变化，负号体现方向。' },
      { from: '导体运动', to: '动生电动势', note: '导体切割磁感线时 \\(\\varepsilon=Blv\\)（三者互相垂直）。' },
    ],
    connections: [
      '先修：13.1 磁通量与 12.4 安培定律。',
      '后续：13.3 感应电流与磁力、13.5 LR 电路。',
      '应用：发电机、变压器与无线充电。',
    ],
    definition: '法拉第电磁感应定律：穿过回路的磁通量变化会在回路中产生感应电动势，\\(\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)，其中 \\(\\Phi_B=\\int\\vec B\\cdot\\mathrm{d}\\vec A=BA\\cos\\theta\\)。负号体现楞次定律：感应电流的磁场总是阻碍原磁通量的变化。',
    intuition: '磁通量像“穿过线圈的磁场线数量”：数量变化越快，感应电动势越大；感应电流总是试图维持原来的磁通量。',
    intuitionDetailed: '磁通量变化有三种途径：\\(B\\) 变化、面积 \\(A\\) 变化、夹角 \\(\\theta\\) 变化。导体棒在磁场中运动产生动生电动势 \\(\\varepsilon=BLv\\)。楞次定律是能量守恒的体现：感应电流的磁场阻碍相对运动或磁通变化。',
    formulas: [
      { latex: '\\Phi_B=BA\\cos\\theta', note: '匀强磁场中的磁通量。' },
      { latex: '\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}', note: '法拉第定律。' },
      { latex: '\\varepsilon=BLv', note: '导体棒垂直切割磁感线。' },
      { latex: 'I=\\dfrac{\\varepsilon}{R}', note: '闭合回路的感应电流。' },
    ],
    conditions: ['回路必须闭合才能产生持续电流（开路只有电动势）', '磁通量必须变化', '\\(\\theta\\) 是 \\(\\vec B\\) 与面法线的夹角', '楞次定律用于判断感应电流方向', '动生电动势要求导体棒、速度与磁场两两垂直（或取分量）'],
    keyPoints: ['磁通量变化产生感应电动势', '变化越快，电动势越大', '\\(B\\)、\\(A\\)、\\(\\theta\\) 任一变化都可引起感应', '楞次定律：感应效果阻碍变化', '动生电动势 \\(\\varepsilon=BLv\\)'],
    misconceptions: [
      '认为有磁场就有感应电动势（必须磁通变化）',
      '把 \\(\\theta\\) 当作 \\(\\vec B\\) 与平面的夹角（应为法线夹角）',
      '忘记匝数 \\(N\\)',
      '楞次定律方向判断反了',
      '认为感应电流的磁场总是与原磁场同向',
    ],
    examples: [
      {
        title: '例 1 · 变化磁场',
        prompt: '面积 \\(0.20\\,\\mathrm{m^{2}}\\) 的单匝线圈，磁场垂直穿过且以 \\(0.50\\,\\mathrm{T/s}\\) 增大。求感应电动势；若 \\(R=0.50\\,\\Omega\\)，求电流。',
        steps: ['\\(\\Phi_B=BA\\)，\\(\\left|\\varepsilon\\right|=A\\dfrac{\\mathrm{d}B}{\\mathrm{d}t}\\)。', '\\(\\varepsilon=0.20(0.50)=0.10\\,\\mathrm{V}\\)。', '\\(I=\\dfrac{0.10}{0.50}=0.20\\,\\mathrm{A}\\)。'],
        solution: '\\(\\varepsilon=0.10\\,\\mathrm{V}\\)，\\(I=0.20\\,\\mathrm{A}\\)。',
        solutionLatex: '\\varepsilon=0.10\\,\\mathrm{V},\\;I=0.20\\,\\mathrm{A}',
      },
      {
        title: '例 2 · 动生电动势',
        prompt: '长 \\(0.50\\,\\mathrm{m}\\) 的导体棒以 \\(2.0\\,\\mathrm{m/s}\\) 垂直切割 \\(B=0.40\\,\\mathrm{T}\\) 的磁场。求电动势。',
        steps: ['\\(\\varepsilon=BLv\\)。', '\\(\\varepsilon=(0.40)(0.50)(2.0)\\)。', '\\(\\varepsilon=0.40\\,\\mathrm{V}\\)。'],
        solution: '\\(\\varepsilon=0.40\\,\\mathrm{V}\\)。',
        solutionLatex: '\\varepsilon=0.40\\,\\mathrm{V}',
      },
      {
        title: '例 3 · 楞次定律',
        prompt: '磁铁 N 极靠近线圈时，感应电流的磁场方向如何？',
        steps: ['原磁通量向右（或向上）增大。', '感应电流要阻碍增大，产生反向磁场。', '用右手定则判断电流方向。'],
        solution: '感应磁场与原磁场反向，阻碍磁通量增大。',
      },
    ],
    examTips: [
      'CED Unit 13：电磁感应',
      '先写 \\(\\Phi_B=BA\\cos\\theta\\)，再求变化率',
      '楞次定律判断方向，法拉第定律算大小',
      '动生电动势用 \\(\\varepsilon=BLv\\)',
      '注意匝数 \\(N\\) 与 \\(\\theta\\) 的定义',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u13', code: '13.1', title: '磁通量', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.3', title: '感应电流与磁力', relation: '后续' },
      { subject: 'em', chapterId: 'em-u13', code: '13.4', title: '电感', relation: '后续' },
    ],
    development: ['磁通量', '法拉第定律', '楞次定律', '动生电动势', '感应电流与能量'],
    checks: ['什么情况下会产生感应电动势？', '楞次定律如何体现能量守恒？', '\\(\\theta\\) 是哪个角？'],
    summary: '磁通量变化产生感应电动势 \\(\\varepsilon=-N\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t}\\)；楞次定律判断方向，动生电动势 \\(\\varepsilon=BLv\\)。',
  },

  'em/em-u13/13.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出 LR 回路方程并求时间常数。',
      '能计算接通与断开后电流随时间的指数变化。',
      '能说明电感储能的物理意义。',
    ],
    essentialKnowledge: [
      'LR 回路：\\(\\varepsilon-IR-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}=0\\)。',
      '时间常数：\\(\\tau=\\dfrac{L}{R}\\)。',
      '接通：\\(I(t)=\\dfrac{\\varepsilon}{R}(1-e^{-\\frac{t}{\\tau}})\\)。',
      '断开：\\(I(t)=I_0e^{-\\frac{t}{\\tau}}\\)。',
      '电感储能：\\(U_L=\\dfrac{1}{2}LI^{2}\\)。',
    ],
    derivationNotes: [
      { from: '环路定律', to: 'LR 微分方程', note: '\\(\\varepsilon-IR-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}=0\\)。' },
      { from: '微分方程', to: '电流解', note: '接通时 \\(I(t)=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\frac{t}{\\tau}}\\right)\\)，\\(\\tau=\\dfrac{L}{R}\\)。' },
      { from: '时间常数', to: '响应快慢', note: '\\(\\tau\\) 越大，电流上升越慢；稳态电流为 \\(\\dfrac{\\varepsilon}{R}\\)。' },
    ],
    connections: [
      '先修：11.6 环路定律与 13.4 电感。',
      '后续：13.6 LC 电路与 13.7 麦克斯韦方程与电磁波。',
      '应用：继电器、电机启动与滤波电路。',
    ],
    definition: 'LR 电路由电感 \\(L\\) 与电阻 \\(R\\) 串联组成。电感反抗电流变化，回路方程 \\(\\varepsilon-IR-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}=0\\)。接通电源时电流按 \\(I(t)=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\frac{t}{\\tau}}\\right)\\) 上升，断开后按 \\(I=I_0e^{-\\frac{t}{\\tau}}\\) 衰减，时间常数 \\(\\tau=\\dfrac{L}{R}\\)。',
    intuition: '电感像电流的“惯性”：电流想突然变化时，电感用感应电动势反抗；最终电流稳定，电感相当于导线。',
    intuitionDetailed: '\\(t=0\\) 时电感相当于开路（电流不能突变），\\(t\\to\\infty\\) 时相当于短路（理想电感无电阻）。\\(\\tau\\) 是电流达到最终值约 63% 所需时间；经过 \\(5\\tau\\) 基本稳定。电感储能 \\(U=\\dfrac{1}{2}LI^{2}\\)。',
    formulas: [
      { latex: '\\varepsilon-IR-L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}=0', note: 'LR 回路方程。' },
      { latex: 'I(t)=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\frac{t}{\\tau}}\\right),\\quad \\tau=\\dfrac{L}{R}', note: '接通电源的电流上升。' },
      { latex: 'I(t)=I_0e^{-\\frac{t}{\\tau}}', note: '断开电源后的电流衰减。' },
      { latex: 'U_L=\\dfrac{1}{2}LI^{2}', note: '电感储能。' },
    ],
    conditions: ['理想电感（无内阻）与恒定电阻', '开关动作在 \\(t=0\\)', '电流不能突变', '稳态时 \\(\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}=0\\)，\\(I=\\dfrac{\\varepsilon}{R}\\)', '断开时需有续流路径，否则可能产生高压'],
    keyPoints: ['\\(\\tau=\\dfrac{L}{R}\\) 决定响应快慢', '\\(t=0\\) 电感相当于开路', '\\(t\\to\\infty\\) 电感相当于短路', '电流按指数上升/衰减', '电感储能 \\(\\dfrac{1}{2}LI^{2}\\)'],
    misconceptions: [
      '认为电流可以瞬间跳到最终值',
      '把 \\(\\tau\\) 写成 \\(\\dfrac{R}{L}\\)',
      '认为稳态时电感仍有电压降（理想电感为零）',
      '认为断开电源电流立刻为零',
      '忽略电感储能在断开时释放',
    ],
    examples: [
      {
        title: '例 1 · 时间常数',
        prompt: '\\(L=0.50\\,\\mathrm{H}\\)，\\(R=10\\,\\Omega\\)。求时间常数与电流达到 63% 所需时间。',
        steps: ['\\(\\tau=\\dfrac{L}{R}=\\dfrac{0.50}{10}=0.050\\,\\mathrm{s}\\)。', '达到 63% 的时间就是 \\(\\tau\\)。'],
        solution: '\\(\\tau=0.050\\,\\mathrm{s}\\)。',
        solutionLatex: '\\tau=0.050\\,\\mathrm{s}',
      },
      {
        title: '例 2 · 上升',
        prompt: '\\(\\varepsilon=12\\,\\mathrm{V}\\)，\\(R=6.0\\,\\Omega\\)，\\(L=2.0\\,\\mathrm{H}\\)。求最终电流与 \\(t=\\tau\\) 时的电流。',
        steps: ['\\(I_{\\infty}=\\dfrac{12}{6.0}=2.0\\,\\mathrm{A}\\)。', '\\(\\tau=\\dfrac{2.0}{6.0}=0.333\\,\\mathrm{s}\\)。', '\\(I(\\tau)=2.0(1-e^{-1})=1.26\\,\\mathrm{A}\\)。'],
        solution: '\\(I_{\\infty}=2.0\\,\\mathrm{A}\\)，\\(I(\\tau)\\approx1.3\\,\\mathrm{A}\\)。',
        solutionLatex: 'I_{\\infty}=2.0\\,\\mathrm{A},\\;I(\\tau)\\approx1.3\\,\\mathrm{A}',
      },
      {
        title: '例 3 · 衰减',
        prompt: '\\(I_0=2.0\\,\\mathrm{A}\\)，\\(\\tau=0.10\\,\\mathrm{s}\\)。求 \\(t=0.20\\,\\mathrm{s}\\) 时的电流。',
        steps: ['\\(I=I_0e^{-\\frac{t}{\\tau}}\\)。', '\\(I=2.0e^{-2}=0.271\\,\\mathrm{A}\\)。'],
        solution: '\\(I\\approx0.27\\,\\mathrm{A}\\)。',
        solutionLatex: 'I\\approx0.27\\,\\mathrm{A}',
      },
    ],
    examTips: [
      'CED Unit 13：电感与 LR 电路',
      '先算 \\(\\tau=\\dfrac{L}{R}\\)，再写指数式',
      '\\(t=0\\) 电感开路，\\(t\\to\\infty\\) 短路',
      '稳态电流 \\(\\dfrac{\\varepsilon}{R}\\)',
      '注意断开时的感应高压',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u13', code: '13.4', title: '电感', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.6', title: 'LC 电路', relation: '后续' },
      { subject: 'em', chapterId: 'em-u11', code: '11.8', title: 'RC 电路', relation: '对比' },
    ],
    development: ['电感对电流变化的阻碍', 'LR 回路方程', '时间常数', '上升与衰减', '电感储能'],
    checks: ['为什么 \\(t=0\\) 时电感相当于开路？', '\\(\\tau=\\dfrac{L}{R}\\) 的物理意义是什么？', '稳态时理想电感的电压降是多少？'],
    summary: 'LR 电路中电流按指数上升/衰减，时间常数 \\(\\tau=\\dfrac{L}{R}\\)；\\(t=0\\) 电感开路，稳态短路，储能 \\(\\dfrac{1}{2}LI^{2}\\)。',
  },

  'em/em-u13/13.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出 LC 回路方程并求角频率与周期。',
      '能分析电荷与电流的相位关系。',
      '能用能量守恒求最大电流或任意时刻的能量分配。',
    ],
    essentialKnowledge: [
      'LC 回路：\\(L\\dfrac{\\mathrm{d}^{2}q}{\\mathrm{d}t^{2}}+\\dfrac{q}{C}=0\\)。',
      '角频率：\\(\\omega=\\dfrac{1}{\\sqrt{LC}}\\)；周期 \\(T=2\\pi\\sqrt{LC}\\)。',
      '电荷与电流相位差 \\(\\dfrac{\\pi}{2}\\)：\\(q\\) 最大时 \\(i=0\\)，\\(i\\) 最大时 \\(q=0\\)。',
      '能量在 \\(U_C=\\dfrac{q^{2}}{2C}\\) 与 \\(U_L=\\dfrac{1}{2}Li^{2}\\) 之间转化。',
      '总能量：\\(\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}LI_{\\max}^{2}\\)。',
    ],
    derivationNotes: [
      { from: '能量守恒', to: 'LC 方程', note: '\\(L\\dfrac{\\mathrm{d}^{2}q}{\\mathrm{d}t^{2}}+\\dfrac{q}{C}=0\\)。' },
      { from: '简谐振荡', to: '角频率', note: '\\(\\omega=\\dfrac{1}{\\sqrt{LC}}\\)，周期 \\(T=2\\pi\\sqrt{LC}\\)。' },
      { from: '能量交换', to: '振荡', note: '电场能与磁场能在电容与电感之间来回转化，理想情况总能量守恒。' },
    ],
    connections: [
      '先修：13.4 电感与 11.4 电容。',
      '后续：13.7 麦克斯韦方程与电磁波。',
      '应用：无线电调谐、振荡器与滤波器。',
    ],
    definition: '理想 LC 电路由电感与电容组成，无电阻时电荷与电流发生简谐振荡。回路方程 \\(L\\dfrac{\\mathrm{d}^{2}q}{\\mathrm{d}t^{2}}+\\dfrac{q}{C}=0\\)，角频率 \\(\\omega=\\dfrac{1}{\\sqrt{LC}}\\)，周期 \\(T=2\\pi\\sqrt{LC}\\)。能量在电容电场与电感磁场之间来回转化，总能量守恒。',
    intuition: 'LC 电路像“电的弹簧振子”：电容充电像压缩弹簧，放电时电流通过电感，电感又把它推回去，形成振荡。',
    intuitionDetailed: '电荷 \\(q(t)=Q\\cos(\\omega t+\\phi)\\)，电流 \\(i(t)=-Q\\omega\\sin(\\omega t+\\phi)\\)。电容能量 \\(U_C=\\dfrac{q^{2}}{2C}\\)，电感能量 \\(U_L=\\dfrac{1}{2}Li^{2}\\)，总能量 \\(\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}LI_{\\max}^{2}\\)。实际电路有电阻，振荡会阻尼衰减。',
    formulas: [
      { latex: '\\omega=\\dfrac{1}{\\sqrt{LC}},\\quad T=2\\pi\\sqrt{LC}', note: 'LC 振荡的角频率与周期。' },
      { latex: 'q(t)=Q\\cos(\\omega t+\\phi)', note: '电荷随时间振荡。' },
      { latex: 'U_C=\\dfrac{q^{2}}{2C},\\quad U_L=\\dfrac{1}{2}Li^{2}', note: '电场能与磁场能。' },
      { latex: '\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}LI_{\\max}^{2}', note: '总能量守恒。' },
    ],
    conditions: ['理想电感与电容，无电阻损耗', '闭合 LC 回路', '忽略辐射与寄生参数', '振荡频率由 \\(L\\)、\\(C\\) 决定，与初始能量无关', '实际电路有阻尼，振幅会衰减'],
    keyPoints: ['\\(\\omega=\\dfrac{1}{\\sqrt{LC}}\\)', '能量在 \\(U_C\\) 与 \\(U_L\\) 之间转化', '\\(q\\) 最大时 \\(i=0\\)，\\(i\\) 最大时 \\(q=0\\)', '总能量由初始电荷或电流决定', '阻尼会消耗能量'],
    misconceptions: [
      '认为 LC 振荡需要外加电源维持（理想情况不需要）',
      '把 \\(\\omega\\) 写成 \\(\\sqrt{LC}\\)',
      '认为电荷最大时电流也最大',
      '忽略电阻导致的阻尼',
      '把频率 \\(f\\) 与角频率 \\(\\omega\\) 混为一谈',
    ],
    examples: [
      {
        title: '例 1 · 频率',
        prompt: '\\(L=0.10\\,\\mathrm{H}\\)，\\(C=10\\,\\mu\\mathrm{F}\\)。求角频率、频率与周期。',
        steps: ['\\(\\omega=\\dfrac{1}{\\sqrt{LC}}=\\dfrac{1}{\\sqrt{(0.10)(10\\times10^{-6})}}\\)。', '\\(\\omega=1000\\,\\mathrm{rad/s}\\)。', '\\(f=\\dfrac{\\omega}{2\\pi}=159\\,\\mathrm{Hz}\\)，\\(T=6.28\\times10^{-3}\\,\\mathrm{s}\\)。'],
        solution: '\\(\\omega=1000\\,\\mathrm{rad/s}\\)，\\(f\\approx159\\,\\mathrm{Hz}\\)，\\(T\\approx6.3\\,\\mathrm{ms}\\)。',
        solutionLatex: '\\omega=1000\\,\\mathrm{rad/s},\\;f\\approx159\\,\\mathrm{Hz}',
      },
      {
        title: '例 2 · 最大电流',
        prompt: '\\(C=10\\,\\mu\\mathrm{F}\\) 的电容充到 \\(Q=1.0\\times10^{-4}\\,\\mathrm{C}\\)，接入 \\(L=0.10\\,\\mathrm{H}\\) 的电感。求总能量与最大电流。',
        steps: ['\\(U=\\dfrac{Q^{2}}{2C}=\\dfrac{(1.0\\times10^{-4})^{2}}{2(10\\times10^{-6})}=0.50\\,\\mathrm{J}\\)。', '\\(\\dfrac{1}{2}LI_{\\max}^{2}=U\\Rightarrow I_{\\max}=\\sqrt{\\dfrac{2U}{L}}\\)。', '\\(I_{\\max}=\\sqrt{10}=3.16\\,\\mathrm{A}\\)。'],
        solution: '\\(U=0.50\\,\\mathrm{J}\\)，\\(I_{\\max}\\approx3.2\\,\\mathrm{A}\\)。',
        solutionLatex: 'U=0.50\\,\\mathrm{J},\\;I_{\\max}\\approx3.2\\,\\mathrm{A}',
      },
      {
        title: '例 3 · 能量分配',
        prompt: '当 \\(q=\\dfrac{Q}{2}\\) 时，电容能量与电感能量各占总能量的多少？',
        steps: ['\\(U_C=\\dfrac{(\\frac{Q}{2})^{2}}{2C}=\\dfrac{1}{4}\\dfrac{Q^{2}}{2C}=\\dfrac{1}{4}U\\)。', '\\(U_L=U-U_C=\\dfrac{3}{4}U\\)。'],
        solution: '\\(U_C:U_L=1:3\\)。',
        solutionLatex: 'U_C:U_L=1:3',
      },
    ],
    examTips: [
      'CED Unit 13：LC 振荡',
      '先算 \\(\\omega=\\dfrac{1}{\\sqrt{LC}}\\)，再求 \\(f\\)、\\(T\\)',
      '能量守恒用 \\(\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}LI_{\\max}^{2}\\)',
      '\\(q\\) 与 \\(i\\) 相位差 \\(\\dfrac{\\pi}{2}\\)',
      '实际电路有阻尼，振幅衰减',
    ],
    related: [
      { subject: 'em', chapterId: 'em-u13', code: '13.4', title: '电感', relation: '先修' },
      { subject: 'em', chapterId: 'em-u13', code: '13.5', title: 'LR 电路', relation: '对比' },
      { subject: 'em', chapterId: 'em-u11', code: '11.8', title: 'RC 电路', relation: '对比' },
    ],
    development: ['LC 回路方程', '角频率与周期', '电荷/电流振荡', '能量转化', '阻尼振荡'],
    checks: ['LC 振荡的频率由什么决定？', '电荷最大时电流是多少？', '总能量如何由初始条件确定？'],
    summary: '理想 LC 电路以 \\(\\omega=\\dfrac{1}{\\sqrt{LC}}\\) 简谐振荡，能量在电容与电感之间转化；实际电路因电阻而阻尼。',
  },
  'bio/bio-u1/1.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能列举生命体最主要的元素（CHNOPS），并说明碳的四价成键能力为何适合做生物分子骨架。 · List the main elements of life (CHNOPS) and explain why carbon’s tetravalent bonding makes it suited to be the backbone of biological molecules.',
      '能区分单体与聚合物，写出脱水缩合与水解的方向和产物。 · Distinguish monomers from polymers and write the direction and products of dehydration synthesis and hydrolysis.',
      '能由官能团与分子结构推断糖类、脂质、蛋白质与核酸的性质与功能。 · Infer the properties and functions of carbohydrates, lipids, proteins, and nucleic acids from functional groups and molecular structure.'
    ],
    essentialKnowledge: [
      '生命物质由元素组成；C、H、N、O、P、S 占生物体质量的大部分，Ca、K、Na、Mg、Fe、I 等也是必需元素，其中一些只需痕量。 · Living matter is composed of elements; C, H, N, O, P, and S make up most of an organism’s mass, while Ca, K, Na, Mg, Fe, and I are also essential, some only in trace amounts.',
      '碳原子有 4 个价电子，能形成 4 条共价键，并与自身形成单键、双键或环状与支链骨架。 · A carbon atom has four valence electrons and can form four covalent bonds, including single bonds, double bonds, rings, and branched backbones with other carbon atoms.',
      '糖类、蛋白质与核酸可由单体聚合；脂质通常不以单体聚合，而由甘油、脂肪酸与磷酸基等组装。 · Carbohydrates, proteins, and nucleic acids can be built by polymerizing monomers; lipids are usually not monomer polymers but are assembled from glycerol, fatty acids, phosphate groups, and related components.',
      '单体通过脱水缩合连接成聚合物并释放水；聚合物通过水解断键并消耗水，二者都由酶催化且方向可逆。 · Monomers join into polymers by dehydration synthesis, releasing water; polymers are broken down by hydrolysis, consuming water; both are enzyme-catalyzed and reversible in direction.',
      '官能团决定分子的极性、溶解性、酸碱性、反应性与相互作用；例如羟基亲水、羧基酸性、氨基碱性、磷酸基带负电、巯基可形成二硫键。 · Functional groups determine polarity, solubility, acid–base behavior, reactivity, and interactions; for example, hydroxyl is hydrophilic, carboxyl is acidic, amino is basic, phosphate is negatively charged, and sulfhydryl can form disulfide bonds.',
      '元素组成与结构决定功能：磷脂的两亲性来自亲水头部与疏水尾部，血红蛋白含铁，核酸含磷，蛋白质常含硫。 · Elemental composition and structure determine function: phospholipid amphipathicity comes from hydrophilic heads and hydrophobic tails, hemoglobin contains iron, nucleic acids contain phosphorus, and proteins often contain sulfur.'
    ],
    definition: '元素是不能再通过化学方法分解成更简单物质的纯物质。生命主要由 C、H、N、O、P、S 六种元素构成，它们以共价键组装成糖类、脂质、蛋白质与核酸等生物大分子。生物大分子由较小的单体通过脱水缩合连接，水解则把聚合物拆回单体。 · An element is a pure substance that cannot be broken down into simpler substances by chemical means. Life is built mainly from six elements—C, H, N, O, P, and S—which form covalent bonds to assemble biological macromolecules such as carbohydrates, lipids, proteins, and nucleic acids. Macromolecules are built from smaller monomers by dehydration synthesis, while hydrolysis breaks polymers back into monomers.',
    intuition: '把生物分子想成乐高：碳是带四个接口的积木，官能团是不同颜色的接口，单体是标准零件，聚合物是由许多零件拼成的结构。 · Think of biological molecules as LEGO: carbon is a brick with four connection points, functional groups are connectors of different colors, monomers are standard parts, and polymers are structures assembled from many parts.',
    intuitionDetailed: '碳的四价性让同一元素能组成直链、支链、环与双键，从而产生近乎无限的骨架多样性。单体之间的连接通常伴随水的移出：一个单体的羟基与另一个单体的氢或羟基反应，形成新的共价键并释放 \\(\\mathrm{H_2O}\\)。消化与细胞内的降解则相反，水解酶把水加回去，把聚合物拆成可吸收或可再利用的单体。 · Carbon’s tetravalence lets one element form straight chains, branches, rings, and double bonds, producing almost unlimited backbone diversity. Joining monomers usually removes water: a hydroxyl group on one monomer reacts with a hydrogen or hydroxyl on another, forming a new covalent bond and releasing \\(\\mathrm{H_2O}\\). Digestion and intracellular breakdown run in reverse: hydrolytic enzymes add water back and split polymers into absorbable or reusable monomers.',
    formulas: [
      { latex: '\\mathrm{C,H,N,O,P,S}', note: '生命体最主要的六种元素（CHNOPS）。 · The six main elements of life (CHNOPS).' },
      { latex: '\\text{单体}\\xrightarrow{\\text{脱水缩合}}\\text{聚合物}+\\mathrm{H_2O}', note: '合成方向：形成共价键并释放水。 · Synthesis direction: a covalent bond forms and water is released.' },
      { latex: '\\text{聚合物}+\\mathrm{H_2O}\\xrightarrow{\\text{水解}}\\text{单体}', note: '降解方向：断键并消耗水。 · Breakdown direction: a bond breaks and water is consumed.' }
    ],
    derivationNotes: [
      { from: '元素组成 · Elemental composition', to: '单体结构 · Monomer structure', note: 'C、H、O 等元素通过共价键组成单体的碳骨架与官能团。 · Elements such as C, H, and O form monomers’ carbon backbones and functional groups through covalent bonds.' },
      { from: '单体 · Monomer', to: '聚合物 · Polymer', note: '脱水缩合把单体连接成长链，重复单元决定大分子类别。 · Dehydration synthesis links monomers into long chains, and the repeating unit determines the class of macromolecule.' },
      { from: '官能团与序列 · Functional groups and sequence', to: '功能 · Function', note: '极性、电荷、氢键与折叠方式决定溶解性、识别与催化功能。 · Polarity, charge, hydrogen bonding, and folding determine solubility, recognition, and catalysis.' },
    ],
    connections: [
      '先修：1.1 水的极性与氢键，为官能团相互作用提供溶剂环境。 · Prerequisite: water polarity and hydrogen bonding in 1.1 provide the solvent environment for functional-group interactions.',
      '后续：1.3–1.5 分别展开糖类、脂质、蛋白质与核酸的结构与功能。 · Follow-up: 1.3–1.5 develop the structure and function of carbohydrates, lipids, proteins, and nucleic acids.',
      '应用：P2.2 生物大分子与营养、酶、遗传物质的学习。 · Application: P2.2 applies macromolecules to nutrition, enzymes, and genetic material.',
    ],
    conditions: [
      '细胞内的脱水缩合与水解通常由特定酶催化，并需适宜的温度与 pH · Intracellular dehydration synthesis and hydrolysis are usually catalyzed by specific enzymes and require suitable temperature and pH',
      '碳骨架的稳定性来自共价键；氢键、疏水作用与离子键更多参与折叠与识别 · Carbon-backbone stability comes from covalent bonds, while hydrogen bonds, hydrophobic interactions, and ionic bonds mainly contribute to folding and recognition',
      '痕量元素需求量小但不可缺，例如碘参与甲状腺激素、铁参与血红蛋白 · Trace elements are needed in small amounts but are indispensable; for example, iodine is part of thyroid hormones and iron is part of hemoglobin',
      '并非所有脂质都是聚合物；类固醇与部分脂质由较小的前体组装而非单体链 · Not all lipids are polymers; steroids and some lipids are assembled from smaller precursors rather than monomer chains'
    ],
    keyPoints: [
      'CHNOPS 是生命的主要元素，碳是骨架核心 · CHNOPS are the main elements of life, and carbon is the core of the backbone',
      '碳四价：可形成四条共价键与多样骨架 · Carbon is tetravalent: it forms four covalent bonds and diverse backbones',
      '脱水缩合建键、水解断键，二者方向相反 · Dehydration synthesis forms bonds and hydrolysis breaks them, in opposite directions',
      '官能团决定分子性质与反应性 · Functional groups determine molecular properties and reactivity',
      '结构决定功能：单体组成、序列与折叠共同决定大分子功能 · Structure determines function: monomer composition, sequence, and folding together determine macromolecular function'
    ],
    misconceptions: [
      '把元素与化合物混为一谈，认为“碳元素”就是“碳水化合物” · Confusing elements with compounds and thinking “the element carbon” is “carbohydrate”',
      '认为脱水缩合是加水反应（实际是移出水） · Thinking dehydration synthesis adds water (it actually removes water)',
      '认为所有生物大分子都是单体聚合而成（脂质多为例外） · Assuming all macromolecules are monomer polymers (many lipids are exceptions)',
      '认为痕量元素不重要，因为它们含量少 · Assuming trace elements are unimportant because they are scarce',
      '认为只要元素相同，分子功能就一定相同（结构排列同样关键） · Assuming molecules with the same elements must have the same function (structural arrangement matters too)'
    ],
    examples: [
      {
        title: '例 1 · 元素组成 · Example 1 · Elemental Composition',
        prompt: '分别写出葡萄糖、典型蛋白质与 DNA 中最具特征的元素组成差异。 · Describe the most characteristic differences in elemental composition among glucose, a typical protein, and DNA.',
        steps: [
          '葡萄糖 \\(\\mathrm{C_6H_{12}O_6}\\) 只含 C、H、O。 · Glucose, \\(\\mathrm{C_6H_{12}O_6}\\), contains only C, H, and O.',
          '蛋白质由氨基酸组成，除 C、H、O 外还含 N，许多还含 S。 · Proteins are made of amino acids and contain N in addition to C, H, and O; many also contain S.',
          'DNA 由核苷酸组成，含 C、H、O、N、P。 · DNA is made of nucleotides and contains C, H, O, N, and P.'
        ],
        solution: '糖类以 C、H、O 为主；蛋白质特征元素是 N（常含 S）；核酸特征元素是 P。 · Carbohydrates are mainly C, H, and O; the characteristic element of proteins is N (often with S); the characteristic element of nucleic acids is P.',
        solutionLatex: '\\text{糖}:\\mathrm{CHO};\\;\\text{蛋白质}:\\mathrm{CHONS};\\;\\text{核酸}:\\mathrm{CHONP}'
      },
      {
        title: '例 2 · 脱水缩合 · Example 2 · Dehydration Synthesis',
        prompt: '两个葡萄糖分子结合成麦芽糖时，原子如何变化？写出反应式。 · How do the atoms change when two glucose molecules join to form maltose? Write the reaction.',
        steps: [
          '一个葡萄糖的羟基与另一个葡萄糖的羟基反应。 · The hydroxyl group of one glucose reacts with the hydroxyl group of the other.',
          '形成糖苷键，同时移出一个水分子。 · A glycosidic bond forms and one water molecule is removed.',
          '产物为麦芽糖与水。 · The products are maltose and water.'
        ],
        solution: '\\(\\mathrm{C_6H_{12}O_6}+\\mathrm{C_6H_{12}O_6}\\to\\mathrm{C_{12}H_{22}O_{11}}+\\mathrm{H_2O}\\)，即两个葡萄糖缩合生成麦芽糖和水。 · Two glucose molecules condense to form maltose and water.',
        solutionLatex: '\\mathrm{C_6H_{12}O_6}+\\mathrm{C_6H_{12}O_6}\\to\\mathrm{C_{12}H_{22}O_{11}}+\\mathrm{H_2O}'
      },
      {
        title: '例 3 · 结构决定功能 · Example 3 · Structure Determines Function',
        prompt: '磷脂为什么能在水中自发形成双分子层？ · Why do phospholipids spontaneously form a bilayer in water?',
        steps: [
          '磷脂有亲水的磷酸头部与两条疏水的脂肪酸尾部。 · A phospholipid has a hydrophilic phosphate head and two hydrophobic fatty acid tails.',
          '在水环境中，疏水尾部避开水、彼此聚集。 · In water, the hydrophobic tails avoid water and cluster together.',
          '两层磷脂的尾部相对，形成稳定的双分子层。 · The tails of two phospholipid layers face each other, forming a stable bilayer.'
        ],
        solution: '两亲性使磷脂在水中有序排列，形成膜的骨架。 · Amphipathicity makes phospholipids arrange in an ordered way in water, forming the membrane backbone.'
      }
    ],
    examTips: [
      'CED Unit 1：生命化学 · CED Unit 1: Chemistry of life',
      '看到“元素组成”先分辨糖类、蛋白质与核酸的特征元素 · When you see “elemental composition,” first distinguish the characteristic elements of carbohydrates, proteins, and nucleic acids.',
      '脱水缩合与水解的方向不要写反 · Do not reverse the directions of dehydration synthesis and hydrolysis.',
      '官能团题用“极性/电荷/氢键”解释溶解性与相互作用 · For functional-group questions, use polarity, charge, and hydrogen bonding to explain solubility and interactions.',
      'FRQ 用“单体—键—聚合物—功能”链条作答 · In FRQs, answer with the chain “monomer—bond—polymer—function.”'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u1', code: '1.1', title: '水与生命 · Water and Life', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.3', title: '生物大分子导论 · Introduction to Biological Macromolecules', relation: '后续 · Follow-up' },
      { subject: 'bio', chapterId: 'bio-u1', code: '1.4', title: '蛋白质性质 · Protein Properties', relation: '应用 · Application' },
      { subject: 'bio', chapterId: 'bio-prep-hs', code: 'P2.2', title: '生物大分子 · Biological Macromolecules', relation: '先修 · Prerequisite' }
    ],
    development: ['元素与生命 · Elements and life', '碳的四价性与骨架 · Carbon tetravalence and backbones', '单体与聚合物 · Monomers and polymers', '脱水缩合与水解 · Dehydration synthesis and hydrolysis', '官能团与结构功能 · Functional groups and structure–function relationships'],
    checks: ['CHNOPS 分别代表哪些元素？ · Which elements do the letters in CHNOPS represent?', '脱水缩合与水解在原子层面有何区别？ · How do dehydration synthesis and hydrolysis differ at the atomic level?', '为什么磷脂能形成膜而葡萄糖不能？ · Why can phospholipids form membranes while glucose cannot?'],
    summary: '生命以 CHNOPS 为主要元素，碳的四价性提供骨架多样性；单体通过脱水缩合形成聚合物，水解反向拆解，官能团与结构共同决定功能。 · Life uses CHNOPS as its main elements, and carbon’s tetravalence provides backbone diversity; monomers form polymers by dehydration synthesis, hydrolysis reverses the process, and functional groups together with structure determine function.'
  },

  'bio/bio-u2/2.10': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分膜内陷起源与内共生起源，并说明它们分别解释哪些细胞器。 · Distinguish invagination origins from endosymbiotic origins and explain which organelles each explains.',
      '能列举支持线粒体与叶绿体内共生起源的结构与分子证据。 · List structural and molecular evidence supporting the endosymbiotic origin of mitochondria and chloroplasts.',
      '能解释区隔化如何提高真核细胞的代谢效率与调控精度。 · Explain how compartmentalization improves metabolic efficiency and regulatory precision in eukaryotic cells.'
    ],
    essentialKnowledge: [
      '真核细胞的内膜系统可能由质膜内陷形成：内陷的膜可形成核膜、内质网、高尔基体与溶酶体等，增加膜面积并把反应分隔开。 · The eukaryotic endomembrane system may have arisen by plasma membrane invagination: infolded membrane could form the nuclear envelope, ER, Golgi, and lysosomes, increasing membrane area and separating reactions.',
      '内共生学说认为线粒体与叶绿体起源于被宿主细胞吞噬后未被消化的自由生活原核生物，双方形成稳定的互利共生。 · The endosymbiotic theory holds that mitochondria and chloroplasts originated from free-living prokaryotes that were engulfed but not digested by a host cell, establishing a stable mutualism.',
      '内共生证据包括双层膜、自身环状 DNA、70S 核糖体、独立分裂、膜脂与细菌相似，以及部分基因已转移到宿主细胞核。 · Evidence for endosymbiosis includes a double membrane, their own circular DNA, 70S ribosomes, independent division, bacterial-like membrane lipids, and the transfer of some genes to the host nucleus.',
      '内共生是深度整合：现代线粒体与叶绿体保留部分遗传自主性，但不能独立生活；宿主依赖它们提供 ATP 或光合产物。 · Endosymbiosis is deep integration: modern mitochondria and chloroplasts retain partial genetic autonomy but cannot live independently, while the host depends on them for ATP or photosynthetic products.',
      '区隔化让互不相容的反应同时进行：溶酶体的酸性水解、线粒体内膜的质子梯度、叶绿体类囊体膜的光反应都依赖局部环境。 · Compartmentalization lets incompatible reactions proceed simultaneously: acid hydrolysis in lysosomes, the proton gradient across the inner mitochondrial membrane, and the light reactions on thylakoid membranes all depend on local environments.',
      '膜内陷与内共生并不互斥；不同细胞器有不同起源，不能把所有膜性细胞器都归因于同一种机制。 · Invagination and endosymbiosis are not mutually exclusive; different organelles have different origins, and not all membrane-bound organelles should be attributed to one mechanism.'
    ],
    definition: '细胞区隔起源研究真核细胞如何获得膜性区室。主流解释有两条：质膜内陷形成核膜、内质网、高尔基体与溶酶体等内膜系统；内共生学说则认为线粒体与叶绿体来自被宿主吞噬的自由生活原核生物。 · The origins of cellular compartments concern how eukaryotic cells acquired membrane-bound spaces. There are two main explanations: plasma membrane invagination formed the endomembrane system, including the nuclear envelope, ER, Golgi, and lysosomes; the endosymbiotic theory holds that mitochondria and chloroplasts came from free-living prokaryotes engulfed by a host.',
    intuition: '真核细胞像从小作坊发展成的工厂：先把外墙折进去隔出车间，再把擅长发电或光合作用的外来细菌收编成专用部门。 · A eukaryotic cell is like a workshop that grew into a factory: first the outer wall folds inward to create rooms, then foreign bacteria good at generating power or photosynthesis are incorporated as specialized departments.',
    intuitionDetailed: '内陷模型能解释内膜系统的连续性：核膜与内质网相通，高尔基体与囊泡运输相连。内共生模型能解释线粒体与叶绿体的“细菌特征”：它们有双层膜、环状 DNA、70S 核糖体，并按类似二分裂的方式增殖。两层膜的来源通常解释为宿主吞噬膜加共生体自身膜。 · The invagination model explains the continuity of the endomembrane system: the nuclear envelope is continuous with the ER, and the Golgi is connected through vesicle traffic. The endosymbiotic model explains the “bacterial features” of mitochondria and chloroplasts: a double membrane, circular DNA, 70S ribosomes, and proliferation by binary fission–like division. The two membranes are usually explained as the host’s engulfing membrane plus the symbiont’s own membrane.',
    formulas: [
      { latex: '\\text{质膜内陷}\\to\\text{核膜/内质网/高尔基体/溶酶体}', note: '内膜系统起源的简化路径。 · Simplified path for the origin of the endomembrane system.' },
      { latex: '\\text{宿主细胞}+\\text{原核共生体}\\to\\text{线粒体或叶绿体}', note: '内共生起源的简化路径。 · Simplified path for endosymbiotic origin.' },
      { latex: '\\text{双层膜}+\\text{环状 DNA}+70S\\text{ 核糖体}\\Rightarrow\\text{内共生证据}', note: '多项证据汇聚，而非单一线索。 · Multiple lines of evidence converge rather than a single clue.' }
    ],
    derivationNotes: [
      { from: '质膜 · Plasma membrane', to: '内膜系统 · Endomembrane system', note: '质膜内陷可形成核膜、内质网与囊泡，增加膜面积并分隔反应。 · Plasma membrane invagination can form the nuclear envelope, ER, and vesicles, increasing membrane area and separating reactions.' },
      { from: '自由生活原核生物 · Free-living prokaryote', to: '线粒体或叶绿体 · Mitochondrion or chloroplast', note: '被宿主吞噬后未被消化，逐步失去独立生活能力并转移部分基因。 · After being engulfed but not digested, it gradually lost independent viability and transferred some genes.' },
      { from: '互利共生 · Mutualism', to: '细胞器 · Organelle', note: '宿主提供稳定环境与营养，共生体提供 ATP 或光合产物，形成稳定整合。 · The host provides a stable environment and nutrients, while the symbiont provides ATP or photosynthetic products, forming a stable integration.' },
    ],
    connections: [
      '先修：2.1 细胞器与 2.9 区隔化，理解膜性区室的功能。 · Prerequisite: organelles in 2.1 and compartmentalization in 2.9 explain the functions of membrane-bound compartments.',
      '后续：3.3–3.5 的细胞呼吸与光合作用依赖线粒体、叶绿体的区隔化。 · Follow-up: cellular respiration and photosynthesis in 3.3–3.5 depend on compartmentalization in mitochondria and chloroplasts.',
      '相关：7.13 生命起源讨论最早细胞与原核生物的演化。 · Related: the origin of life in 7.13 discusses the earliest cells and the evolution of prokaryotes.',
    ],
    conditions: [
      '内共生要求宿主能吞噬共生体而不将其消化，并能把共生体传给后代 · Endosymbiosis requires the host to engulf the symbiont without digesting it and to transmit it to offspring',
      '膜内陷模型主要解释内膜系统，不解释线粒体与叶绿体的细菌样特征 · The invagination model mainly explains the endomembrane system, not the bacterium-like features of mitochondria and chloroplasts',
      '区隔化依赖选择透过性膜与运输蛋白，否则区室无法维持身份 · Compartmentalization depends on selectively permeable membranes and transport proteins; otherwise a compartment cannot maintain its identity',
      '内共生证据是推断性的，需要多类独立证据汇聚 · Endosymbiotic evidence is inferential and requires multiple independent lines of evidence to converge'
    ],
    keyPoints: [
      '内膜系统可能来自质膜内陷 · The endomembrane system may come from plasma membrane invagination',
      '线粒体与叶绿体来自内共生 · Mitochondria and chloroplasts originated by endosymbiosis',
      '内共生证据：双层膜、环状 DNA、70S 核糖体、独立分裂 · Endosymbiotic evidence: double membrane, circular DNA, 70S ribosomes, independent division',
      '区隔化提高反应效率与调控精度 · Compartmentalization improves reaction efficiency and regulatory precision',
      '不同细胞器起源不同，不能一概而论 · Different organelles have different origins and cannot be lumped together'
    ],
    misconceptions: [
      '认为线粒体由质膜内陷直接形成（内共生证据更强） · Assuming mitochondria formed directly by plasma membrane invagination (endosymbiotic evidence is stronger)',
      '认为线粒体与叶绿体完全没有 DNA（它们有自身的环状 DNA） · Assuming mitochondria and chloroplasts have no DNA (they have their own circular DNA)',
      '认为内共生学说已经被单一实验“证明”（它是多证据支持的模型） · Assuming the endosymbiotic theory has been “proved” by a single experiment (it is a model supported by multiple lines of evidence)',
      '认为所有具双层膜的细胞器都来自内共生（核膜是反例） · Assuming every double-membrane organelle came from endosymbiosis (the nuclear envelope is a counterexample)',
      '把区隔化理解为“把反应隔离起来不让它们发生” · Misunderstanding compartmentalization as “isolating reactions so they cannot occur”'
    ],
    examples: [
      {
        title: '例 1 · 内共生证据 · Example 1 · Endosymbiotic Evidence',
        prompt: '为什么线粒体拥有自己的环状 DNA 与 70S 核糖体支持内共生起源？ · Why does the presence of its own circular DNA and 70S ribosomes support an endosymbiotic origin for mitochondria?',
        steps: [
          '环状 DNA 与 70S 核糖体是细菌的典型特征，真核细胞质核糖体为 80S。 · Circular DNA and 70S ribosomes are typical bacterial features, whereas eukaryotic cytoplasmic ribosomes are 80S.',
          '线粒体按类似二分裂的方式增殖，不依赖细胞有丝分裂。 · Mitochondria proliferate by binary fission–like division, independent of mitosis.',
          '其双层膜可解释为宿主吞噬膜与共生体膜。 · Their double membrane can be explained as the host’s engulfing membrane plus the symbiont’s membrane.'
        ],
        solution: '这些特征指向线粒体源自被吞噬的细菌，而非宿主内膜的简单折叠。 · These features point to mitochondria originating from engulfed bacteria rather than simple folding of the host’s inner membranes.'
      },
      {
        title: '例 2 · 膜内陷 · Example 2 · Membrane Invagination',
        prompt: '内质网与核膜为什么被认为可能来自质膜内陷？ · Why are the ER and nuclear envelope thought to possibly originate from plasma membrane invagination?',
        steps: [
          '核膜与内质网在结构上连续，外核膜与内质网相通。 · The nuclear envelope is structurally continuous with the ER, and the outer nuclear membrane is continuous with the ER.',
          '内陷可以在不破坏细胞边界的情况下增加膜面积。 · Invagination can increase membrane area without breaking the cell boundary.',
          '内陷形成的区室可分别维持不同的离子与酶环境。 · Compartments formed by invagination can maintain different ionic and enzymatic environments.'
        ],
        solution: '连续性、膜面积增加与局部环境控制共同支持内陷模型。 · Continuity, increased membrane area, and local environmental control together support the invagination model.'
      },
      {
        title: '例 3 · 比较起源 · Example 3 · Comparing Origins',
        prompt: '溶酶体与线粒体的起源机制有何不同？ · How do the origins of lysosomes and mitochondria differ?',
        steps: [
          '溶酶体来自高尔基体/内质网的膜与囊泡，没有自身 DNA。 · Lysosomes come from Golgi/ER membranes and vesicles and have no DNA of their own.',
          '线粒体有双层膜、环状 DNA 与 70S 核糖体，符合内共生。 · Mitochondria have a double membrane, circular DNA, and 70S ribosomes, consistent with endosymbiosis.',
          '因此不能用同一机制解释两者。 · Therefore the same mechanism cannot explain both.'
        ],
        solution: '溶酶体属于内膜系统；线粒体属于内共生起源。 · Lysosomes belong to the endomembrane system; mitochondria have an endosymbiotic origin.'
      }
    ],
    examTips: [
      'CED Unit 2：细胞结构与功能 · CED Unit 2: Cell structure and function',
      '先判断题目问的是内膜系统还是线粒体/叶绿体 · First decide whether the question asks about the endomembrane system or mitochondria/chloroplasts.',
      '内共生证据要写“双层膜、环状 DNA、70S 核糖体、独立分裂”中的多项 · For endosymbiotic evidence, include several of “double membrane, circular DNA, 70S ribosomes, independent division.”',
      '区隔化题从“局部 pH、酶、底物、膜面积、运输”展开 · For compartmentalization questions, discuss local pH, enzymes, substrates, membrane area, and transport.',
      'FRQ 用“证据—推断—结论”结构，避免把模型说成事实 · In FRQs, use an “evidence—inference—conclusion” structure and avoid presenting a model as fact.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.1', title: '细胞器与区隔化 · Organelles and Compartmentalization', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.9', title: '区隔化 · Compartmentalization', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.3', title: '质膜 · Plasma Membrane', relation: '基础 · Foundation' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.13', title: '生命起源 · Origins of Life', relation: '相关 · Related' }
    ],
    development: ['内膜系统与内陷 · Endomembrane system and invagination', '内共生学说 · Endosymbiotic theory', '证据链 · Evidence chain', '区隔化的收益 · Benefits of compartmentalization', '不同细胞器的起源 · Origins of different organelles'],
    checks: ['内共生学说能解释哪些细胞器？ · Which organelles does the endosymbiotic theory explain?', '为什么核膜不被归为内共生起源？ · Why is the nuclear envelope not classified as endosymbiotic in origin?', '区隔化如何让互不相容的反应同时进行？ · How does compartmentalization allow incompatible reactions to occur simultaneously?'],
    summary: '真核区隔化有两条主要起源路径：质膜内陷形成内膜系统，内共生形成线粒体与叶绿体；区隔化通过局部环境与膜面积提升代谢效率。 · Eukaryotic compartmentalization has two main origins: plasma membrane invagination formed the endomembrane system, and endosymbiosis formed mitochondria and chloroplasts; compartmentalization raises metabolic efficiency through local environments and membrane area.'
  },

  'bio/bio-u3/3.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能定义绝对适合度与相对适合度，并用繁殖贡献比较基因型或表型。 · Define absolute and relative fitness and compare genotypes or phenotypes using reproductive contribution.',
      '能解释能量获取、能量分配与适合度之间的权衡。 · Explain the trade-offs among energy acquisition, energy allocation, and fitness.',
      '能分析环境变化如何改变同一性状的适合度。 · Analyze how environmental change alters the fitness of the same trait.'
    ],
    essentialKnowledge: [
      '适合度是某个基因型或表型个体对下一代基因库的相对繁殖贡献，通常用存活到繁殖的后代数量衡量。 · Fitness is the relative reproductive contribution of individuals of a genotype or phenotype to the next generation’s gene pool, usually measured by the number of offspring that survive to reproduce.',
      '绝对适合度可直接数后代数；相对适合度以参考基因型为 1，选择系数 \\(s=1-w\\) 表示适合度下降的比例。 · Absolute fitness can be counted directly as offspring number; relative fitness sets a reference genotype to 1, and the selection coefficient \\(s=1-w\\) represents the proportional reduction in fitness.',
      '生物把能量分配给维持、生长、储存与繁殖；增加一项通常要减少另一项，形成生活史权衡。 · Organisms allocate energy to maintenance, growth, storage, and reproduction; increasing one usually means decreasing another, creating life-history trade-offs.',
      '环境决定适合度：同一性状在一种环境中可能有利，在另一种环境中可能中性或有害。 · Environment determines fitness: the same trait may be advantageous in one environment and neutral or harmful in another.',
      '适合度是相对、动态且情境依赖的，不等于“最强壮”或“最大”；只有可遗传的适合度差异才能引起进化响应。 · Fitness is relative, dynamic, and context-dependent; it is not “strongest” or “largest,” and only heritable fitness differences can drive an evolutionary response.',
      '能量获取效率、代谢率、觅食策略与繁殖投入都会影响适合度，因此能量学与自然选择直接相连。 · Energy-acquisition efficiency, metabolic rate, foraging strategy, and reproductive investment all affect fitness, directly linking energetics to natural selection.'
    ],
    definition: '适合度是某个基因型或表型个体相对于同种群其他个体，对下一代基因库的繁殖贡献。它通常用存活到繁殖的后代数量衡量；相对适合度以参考基因型为 1，选择系数 \\(s=1-w\\) 描述适合度的相对下降。 · Fitness is the reproductive contribution of individuals of a genotype or phenotype to the next generation’s gene pool relative to other individuals in the same population. It is usually measured by the number of offspring that survive to reproduce; relative fitness sets a reference genotype to 1, and the selection coefficient \\(s=1-w\\) describes the relative reduction in fitness.',
    intuition: '适合度不是“谁最强”，而是“谁留下的可繁殖后代最多”。能量像一份预算，花在维持、生长或繁殖上的比例会改变最终的繁殖收益。 · Fitness is not “who is strongest” but “who leaves the most offspring that can reproduce.” Energy is like a budget: the share spent on maintenance, growth, or reproduction changes the final reproductive payoff.',
    intuitionDetailed: '一个个体可能存活很久却不繁殖，适合度仍可能很低；另一个个体寿命较短但留下许多可育后代，适合度更高。相对适合度只在同一环境、同一时间窗内比较才有意义。能量分配存在权衡：更多卵意味着更少亲代照料，更高代谢率意味着更多觅食需求，这些都会通过繁殖成功率影响适合度。 · An individual may live a long time without reproducing and still have low fitness; another may have a shorter life but leave many fertile offspring and thus have higher fitness. Relative fitness is meaningful only when compared in the same environment and time window. Energy allocation involves trade-offs: more eggs mean less parental care, and a higher metabolic rate means greater foraging demands; both affect fitness through reproductive success.',
    formulas: [
      { latex: 'w=\\dfrac{\\text{某基因型的繁殖贡献}}{\\text{参考基因型的繁殖贡献}}', note: '相对适合度；参考基因型 \\(w=1\\)。 · Relative fitness; the reference genotype has \\(w=1\\).' },
      { latex: 's=1-w', note: '选择系数；\\(s\\) 越大，适合度越低。 · Selection coefficient; a larger \\(s\\) means lower fitness.' },
      { latex: '\\text{能量收入}=\\text{维持}+\\text{生长}+\\text{储存}+\\text{繁殖}', note: '能量分配的简化预算。 · A simplified energy-allocation budget.' }
    ],
    derivationNotes: [
      { from: '繁殖贡献 · Reproductive contribution', to: '绝对适合度 · Absolute fitness', note: '直接统计存活到繁殖的后代数。 · Directly count offspring that survive to reproduce.' },
      { from: '绝对适合度 · Absolute fitness', to: '相对适合度 · Relative fitness', note: '除以参考基因型的繁殖贡献，使比较不受绝对数量影响。 · Divide by the reference genotype’s reproductive contribution so comparisons do not depend on absolute numbers.' },
      { from: '能量预算 · Energy budget', to: '生活史权衡 · Life-history trade-off', note: '维持、生长、储存与繁殖竞争同一能量池，分配改变适合度。 · Maintenance, growth, storage, and reproduction compete for the same energy pool, and allocation changes fitness.' },
    ],
    connections: [
      '先修：3.3–3.5 的细胞能量与代谢，提供能量收支基础。 · Prerequisite: cellular energy and metabolism in 3.3–3.5 provide the energy-balance foundation.',
      '后续：7.2 自然选择与 7.4 群体遗传，把适合度差异转化为频率变化。 · Follow-up: natural selection in 7.2 and population genetics in 7.4 turn fitness differences into frequency changes.',
      '应用：生活史策略、繁殖投入与保护生物学中的适合度评估。 · Application: life-history strategies, reproductive investment, and fitness assessment in conservation biology.',
    ],
    conditions: [
      '适合度必须在同一环境、同一时间窗和同一参考群体内比较 · Fitness must be compared within the same environment, time window, and reference population',
      '存活是适合度的一部分，但最终要看存活到繁殖的后代 · Survival is part of fitness, but what ultimately counts is offspring that survive to reproduce',
      '只有可遗传的适合度差异才能引起进化响应 · Only heritable fitness differences can produce an evolutionary response',
      '性状的适合度随环境、频率与种群密度变化 · A trait’s fitness changes with environment, frequency, and population density',
      '能量分配的权衡受生活史、体型与生态位约束 · Energy-allocation trade-offs are constrained by life history, body size, and ecological niche'
    ],
    keyPoints: [
      '适合度是相对繁殖贡献，不是绝对强弱 · Fitness is relative reproductive contribution, not absolute strength',
      '相对适合度与选择系数 \\(w\\)、\\(s\\) 可互换 · Relative fitness and the selection coefficient can be converted between \\(w\\) and \\(s\\)',
      '能量分配存在维持—生长—繁殖权衡 · Energy allocation involves maintenance–growth–reproduction trade-offs',
      '环境改变会翻转性状的适合度 · Environmental change can reverse a trait’s fitness',
      '适合度差异必须可遗传才能驱动进化 · Fitness differences must be heritable to drive evolution'
    ],
    misconceptions: [
      '认为“最适者”就是最强壮、最大或最长寿的个体 · Assuming the “fittest” are the strongest, largest, or longest-lived individuals',
      '把生存本身当作适合度，忽略繁殖 · Treating survival itself as fitness and ignoring reproduction',
      '认为适合度是性状的固定属性，不随环境变化 · Assuming fitness is a fixed property of a trait that does not change with environment',
      '认为个体在生命过程中“为了适应而改变基因” · Assuming individuals “change their genes to adapt” during their lifetime',
      '认为高能量摄入一定带来高适合度（还要看分配与代价） · Assuming high energy intake always brings high fitness (allocation and costs also matter)'
    ],
    examples: [
      {
        title: '例 1 · 相对适合度 · Example 1 · Relative Fitness',
        prompt: '某基因型个体平均留下 40 个存活后代，参考基因型留下 40 个，另一基因型留下 10 个。求相对适合度与选择系数。 · One genotype leaves an average of 40 surviving offspring, the reference genotype leaves 40, and another genotype leaves 10. Find the relative fitness values and selection coefficients.',
        steps: [
          '以 40 为参考，参考基因型 \\(w=1\\)。 · With 40 as the reference, the reference genotype has \\(w=1\\).',
          '第一基因型 \\(w=\\dfrac{40}{40}=1\\)，\\(s=0\\)。 · The first genotype has \\(w=\\dfrac{40}{40}=1\\) and \\(s=0\\).',
          '第二基因型 \\(w=\\dfrac{10}{40}=0.25\\)，\\(s=0.75\\)。 · The second genotype has \\(w=\\dfrac{10}{40}=0.25\\) and \\(s=0.75\\).'
        ],
        solution: '\\(w=1\\) 与 \\(w=0.25\\)；后者选择系数 \\(s=0.75\\)。 · The relative fitness values are \\(w=1\\) and \\(w=0.25\\); the latter has selection coefficient \\(s=0.75\\).',
        solutionLatex: 'w_1=1,\\;w_2=0.25,\\;s_2=0.75'
      },
      {
        title: '例 2 · 能量权衡 · Example 2 · Energy Trade-off',
        prompt: '为什么鸟类不是产卵越多越好？ · Why is laying more eggs not always better for birds?',
        steps: [
          '每枚卵都需要能量与营养物质。 · Each egg requires energy and nutrients.',
          '卵越多，亲代能用于孵化和育雏的能量越少。 · More eggs leave less energy for incubation and chick rearing.',
          '后代存活率可能随窝卵数增加而下降，存在最适窝卵数。 · Offspring survival may decline as clutch size increases, so an optimal clutch size exists.'
        ],
        solution: '产卵数与后代存活率之间存在权衡，适合度在最适窝卵数附近最高。 · There is a trade-off between clutch size and offspring survival, and fitness is highest near the optimal clutch size.'
      },
      {
        title: '例 3 · 环境翻转 · Example 3 · Environmental Reversal',
        prompt: '桦尺蛾的深色型在工业区更常见，在清洁林区却更少。用适合度解释。 · The dark form of the peppered moth is more common in industrial areas but rarer in clean forests. Explain this using fitness.',
        steps: [
          '工业区树皮被煤烟熏黑，深色蛾更不易被鸟发现。 · In industrial areas, bark is darkened by soot, so dark moths are less easily seen by birds.',
          '清洁林区树皮浅色，深色蛾更显眼。 · In clean forests, bark is light, so dark moths are more conspicuous.',
          '同一性状在不同环境中的相对适合度发生翻转。 · The relative fitness of the same trait reverses between environments.'
        ],
        solution: '捕食选择使深色型的适合度随背景颜色改变。 · Predation selection makes the fitness of the dark form change with background color.'
      }
    ],
    examTips: [
      'CED Unit 3：细胞能量学中的适合度 · CED Unit 3: Fitness in cellular energetics',
      '计算题先找参考基因型，再算 \\(w\\) 与 \\(s\\) · In calculation problems, identify the reference genotype first, then compute \\(w\\) and \\(s\\).',
      '解释能量分配时写“权衡”而不是“越多越好” · When explaining energy allocation, write “trade-off,” not “more is always better.”',
      '环境变化题要说明选择压力如何改变相对适合度 · For environmental-change questions, explain how selection pressure changes relative fitness.',
      '不要把适合度与个体健康、体型或寿命直接等同 · Do not equate fitness directly with individual health, body size, or lifespan.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u3', code: '3.3', title: '细胞能量 · Cellular Energy', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u3', code: '3.5', title: '细胞呼吸 · Cellular Respiration', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择 · Natural Selection', relation: '后续 · Follow-up' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传 · Population Genetics', relation: '应用 · Application' }
    ],
    development: ['适合度的定义 · Defining fitness', '绝对与相对适合度 · Absolute and relative fitness', '能量分配权衡 · Energy-allocation trade-offs', '环境依赖 · Environmental dependence', '适合度与自然选择 · Fitness and natural selection'],
    checks: ['相对适合度与绝对适合度有何区别？ · What is the difference between relative and absolute fitness?', '为什么适合度不是“最强壮”？ · Why is fitness not “strongest”?', '能量分配如何影响繁殖成功？ · How does energy allocation affect reproductive success?'],
    summary: '适合度是相对繁殖贡献；能量在维持、生长与繁殖间的分配形成权衡，环境变化会改变性状的相对适合度。 · Fitness is relative reproductive contribution; allocating energy among maintenance, growth, and reproduction creates trade-offs, and environmental change alters a trait’s relative fitness.'
  },

  'bio/bio-u5/5.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能描述减数分裂 I 与 II 中同源染色体和姐妹染色单体的行为。 · Describe the behavior of homologous chromosomes and sister chromatids in meiosis I and II.',
      '能列举交叉互换、自由组合与随机受精三个主要遗传多样性来源。 · List crossing over, independent assortment, and random fertilization as three main sources of genetic diversity.',
      '能计算独立分配产生的配子组合数，并解释其与遗传多样性的关系。 · Calculate the number of gamete combinations produced by independent assortment and explain its relationship to genetic diversity.'
    ],
    essentialKnowledge: [
      '减数分裂进行一次 DNA 复制、两次细胞分裂，最终产生四个单倍体细胞。 · Meiosis carries out one DNA replication and two cell divisions, ultimately producing four haploid cells.',
      '减数第一次分裂中同源染色体配对并在后期 I 分离；减数第二次分裂中姐妹染色单体分离，类似有丝分裂。 · In meiosis I, homologous chromosomes pair and separate in anaphase I; in meiosis II, sister chromatids separate, similar to mitosis.',
      '前期 I 的同源染色体配对形成四分体，非姐妹染色单体之间发生交叉互换，产生重组染色体。 · In prophase I, homologous chromosomes pair to form tetrads, and crossing over between nonsister chromatids produces recombinant chromosomes.',
      '中期 I 同源染色体随机朝向两极，非同源染色体自由组合；\\(n\\) 对染色体可产生 \\(2^{n}\\) 种配子组合。 · In metaphase I, homologous pairs orient randomly toward the poles and nonhomologous chromosomes assort independently; \\(n\\) pairs of chromosomes can produce \\(2^{n}\\) gamete combinations.',
      '受精时雌雄配子随机结合，进一步增加后代的遗传多样性；突变是全新等位基因的最终来源。 · Random union of male and female gametes at fertilization further increases offspring genetic diversity; mutation is the ultimate source of new alleles.',
      '减数分裂错误（不分离）会产生染色体数目异常的配子，导致非整倍体后代。 · Meiotic errors (nondisjunction) produce gametes with abnormal chromosome numbers, leading to aneuploid offspring.'
    ],
    definition: '减数分裂是产生单倍体配子的特殊细胞分裂：DNA 复制一次，细胞连续分裂两次，同源染色体在减数第一次分裂分离，姐妹染色单体在减数第二次分裂分离。交叉互换、非同源染色体自由组合与随机受精共同产生遗传多样性。 · Meiosis is a specialized cell division that produces haploid gametes: DNA replicates once and the cell divides twice, with homologous chromosomes separating in meiosis I and sister chromatids separating in meiosis II. Crossing over, independent assortment of nonhomologous chromosomes, and random fertilization together generate genetic diversity.',
    intuition: '减数分裂像洗牌与发牌：交叉互换把同源染色体上的牌交换，自由组合决定每个配子拿到哪些染色体，受精再把两副牌随机配成新组合。 · Meiosis is like shuffling and dealing cards: crossing over swaps cards between homologous chromosomes, independent assortment determines which chromosomes each gamete receives, and fertilization randomly combines two hands into a new set.',
    intuitionDetailed: '前期 I 同源染色体配对，非姐妹染色单体交叉并交换片段，形成重组染色体。中期 I 每对同源染色体的朝向是随机的，因此母源与父源染色体可以独立分配。后期 I 同源染色体分开，后期 II 姐妹染色单体分开。一个二倍体细胞最终形成四个单倍体产物，每个产物只含每对同源染色体中的一条。 · In prophase I, homologous chromosomes pair and nonsister chromatids cross over and exchange segments, forming recombinant chromosomes. In metaphase I, each homologous pair orients randomly, so maternal and paternal chromosomes assort independently. Homologs separate in anaphase I, and sister chromatids separate in anaphase II. One diploid cell ultimately forms four haploid products, each containing only one chromosome from each homologous pair.',
    formulas: [
      { latex: '\\text{配子组合数}=2^{n}', note: '\\(n\\) 为单倍体染色体数；人类 \\(n=23\\)。 · \\(n\\) is the haploid chromosome number; for humans, \\(n=23\\).' },
      { latex: '2^{23}\\approx8.4\\times10^{6}', note: '人类仅靠自由组合即可产生约 840 万种配子染色体组合。 · In humans, independent assortment alone can produce about 8.4 million gamete chromosome combinations.' },
      { latex: '\\text{受精组合}=2^{n}\\times2^{n}=2^{2n}', note: '雌雄配子随机结合的简化计数。 · A simplified count of random union of male and female gametes.' }
    ],
    derivationNotes: [
      { from: 'DNA 复制一次 · One DNA replication', to: '两次分裂 · Two divisions', note: '复制后同源染色体配对，减数 I 分离同源染色体，减数 II 分离姐妹染色单体。 · After replication, homologous chromosomes pair; meiosis I separates homologs, and meiosis II separates sister chromatids.' },
      { from: '四分体 · Tetrad', to: '重组染色体 · Recombinant chromosome', note: '非姐妹染色单体交叉互换，交换片段后形成新的等位基因组合。 · Nonsister chromatids cross over and exchange segments, forming new allele combinations.' },
      { from: '中期 I 随机取向 · Random orientation in metaphase I', to: '\\(2^{n}\\) 种配子 · \\(2^{n}\\) gamete types', note: '每对同源染色体独立朝向两极，n 对产生 \\(2^{n}\\) 种组合。 · Each homologous pair orients independently toward the poles, and n pairs produce \\(2^{n}\\) combinations.' },
    ],
    connections: [
      '先修：5.1 减数分裂的时期与染色体行为。 · Prerequisite: the stages and chromosome behavior of meiosis in 5.1.',
      '后续：5.3 孟德尔分离与自由组合的细胞学基础。 · Follow-up: the cytological basis of Mendelian segregation and independent assortment in 5.3.',
      '应用：5.6 连锁、重组与染色体数目异常。 · Application: linkage, recombination, and numerical chromosome abnormalities in 5.6.',
    ],
    conditions: [
      '自由组合要求基因位于非同源染色体上；连锁基因需考虑交叉互换 · Independent assortment requires genes on nonhomologous chromosomes; linked genes require consideration of crossing over',
      '交叉互换发生在同源染色体的非姐妹染色单体之间 · Crossing over occurs between nonsister chromatids of homologous chromosomes',
      '随机受精要求配子活力与受精机会大致相当 · Random fertilization requires roughly comparable gamete viability and fertilization opportunity',
      '\\(2^{n}\\) 只计算染色体组合，不包含交叉互换产生的额外变异 · \\(2^{n}\\) counts only chromosome combinations and does not include extra variation from crossing over',
      '减数分裂正常进行才能保证染色体数目稳定 · Meiosis must proceed normally to keep chromosome number stable'
    ],
    keyPoints: [
      '一次复制、两次分裂，产生四个单倍体细胞 · One replication and two divisions produce four haploid cells',
      '同源染色体在减数 I 分离，姐妹染色单体在减数 II 分离 · Homologs separate in meiosis I; sister chromatids separate in meiosis II',
      '交叉互换产生重组染色体 · Crossing over produces recombinant chromosomes',
      '非同源染色体自由组合产生 \\(2^{n}\\) 种配子 · Independent assortment of nonhomologous chromosomes produces \\(2^{n}\\) gamete types',
      '随机受精进一步增加后代多样性 · Random fertilization further increases offspring diversity',
      '不分离导致非整倍体 · Nondisjunction causes aneuploidy'
    ],
    misconceptions: [
      '认为减数分裂产生两个与亲本相同的二倍体细胞 · Assuming meiosis produces two diploid cells identical to the parent',
      '认为同源染色体在减数第二次分裂才分离 · Assuming homologous chromosomes separate only in meiosis II',
      '认为交叉互换发生在姐妹染色单体之间（实际是非姐妹染色单体） · Assuming crossing over occurs between sister chromatids (it occurs between nonsister chromatids)',
      '认为自由组合适用于所有基因，包括紧密连锁的基因 · Assuming independent assortment applies to all genes, including tightly linked ones',
      '认为遗传多样性只来自突变，忽略重组与随机受精 · Assuming genetic diversity comes only from mutation and ignoring recombination and random fertilization'
    ],
    examples: [
      {
        title: '例 1 · 人类配子组合 · Example 1 · Human Gamete Combinations',
        prompt: '人类体细胞有 23 对染色体，仅考虑自由组合，一个个体可产生多少种配子染色体组合？ · Human somatic cells have 23 pairs of chromosomes. Considering independent assortment alone, how many gamete chromosome combinations can one individual produce?',
        steps: [
          '单倍体染色体数 \\(n=23\\)。 · The haploid chromosome number is \\(n=23\\).',
          '每对同源染色体有 2 种走向，组合数为 \\(2^{23}\\)。 · Each homologous pair has two possible orientations, so the number of combinations is \\(2^{23}\\).',
          '\\(2^{23}\\approx8.4\\times10^{6}\\)，约 840 万种。 · \\(2^{23}\\approx8.4\\times10^{6}\\), about 8.4 million.'
        ],
        solution: '约 \\(8.4\\times10^{6}\\) 种组合；交叉互换还会进一步增加多样性。 · About \\(8.4\\times10^{6}\\) combinations; crossing over would increase diversity further.',
        solutionLatex: '2^{23}\\approx8.4\\times10^{6}'
      },
      {
        title: '例 2 · 交叉互换 · Example 2 · Crossing Over',
        prompt: '基因 A/a 与 B/b 位于同一对同源染色体上。没有交叉互换时配子主要有哪些？交叉互换后呢？ · Genes A/a and B/b are on the same homologous pair. Which gametes predominate without crossing over, and what appears after crossing over?',
        steps: [
          '没有交叉互换时，同一条染色体上的等位基因连锁，主要产生亲本型配子。 · Without crossing over, alleles on the same chromosome are linked, so parental gametes predominate.',
          '交叉互换发生在非姐妹染色单体之间，交换片段后可产生重组型配子。 · Crossing over between nonsister chromatids exchanges segments and can produce recombinant gametes.',
          '重组频率取决于基因间距离。 · Recombination frequency depends on the distance between genes.'
        ],
        solution: '无交叉互换以亲本型为主；交叉互换后出现重组型。 · Without crossing over, parental types dominate; after crossing over, recombinant types appear.'
      },
      {
        title: '例 3 · 不分离 · Example 3 · Nondisjunction',
        prompt: '21 号染色体在减数第一次分裂不分离，可能产生什么配子？ · What gametes can result if chromosome 21 undergoes nondisjunction in meiosis I?',
        steps: [
          '同源染色体未分开，一个子细胞得到两条 21 号染色体，另一个没有。 · Homologs fail to separate, so one daughter cell receives two copies of chromosome 21 and the other receives none.',
          '形成的配子为 \\(n+1\\) 与 \\(n-1\\)。 · The resulting gametes are \\(n+1\\) and \\(n-1\\).',
          '\\(n+1\\) 配子受精后可形成 21 三体。 · Fertilization by an \\(n+1\\) gamete can produce trisomy 21.'
        ],
        solution: '产生多一条或少一条 21 号染色体的配子，可能导致三体或单体。 · Gametes with one extra or one missing chromosome 21 are produced, potentially leading to trisomy or monosomy.'
      }
    ],
    examTips: [
      'CED Unit 5：减数分裂与遗传多样性 · CED Unit 5: Meiosis and genetic diversity',
      '画图时标清同源染色体、姐妹染色单体与交叉互换位置 · When drawing, label homologous chromosomes, sister chromatids, and crossover points clearly.',
      '计数题先确定 \\(n\\)，再用 \\(2^{n}\\) · For counting problems, determine \\(n\\) first, then use \\(2^{n}\\).',
      '区分自由组合（非同源染色体）与交叉互换（同源染色体非姐妹染色单体） · Distinguish independent assortment (nonhomologous chromosomes) from crossing over (nonsister chromatids of homologs).',
      '不分离题要说明发生在减数 I 还是 II，结果不同 · For nondisjunction problems, state whether it occurs in meiosis I or II, because the outcomes differ.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u5', code: '5.1', title: '减数分裂 · Meiosis', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.3', title: '孟德尔遗传 · Mendelian Genetics', relation: '后续 · Follow-up' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.6', title: '染色体遗传 · Chromosomal Inheritance', relation: '应用 · Application' },
      { subject: 'bio', chapterId: 'bio-prep-hs', code: 'P2.8', title: '有丝分裂与减数分裂 · Mitosis and Meiosis', relation: '先修 · Prerequisite' }
    ],
    development: ['减数分裂 I 与 II · Meiosis I and II', '交叉互换 · Crossing over', '自由组合 · Independent assortment', '随机受精 · Random fertilization', '不分离与数目异常 · Nondisjunction and numerical abnormalities'],
    checks: ['同源染色体与姐妹染色单体分别在何时分离？ · When do homologous chromosomes and sister chromatids separate, respectively?', '为什么交叉互换能产生重组配子？ · Why can crossing over produce recombinant gametes?', '\\(2^{n}\\) 中的 \\(n\\) 指什么？ · What does \\(n\\) in \\(2^{n}\\) represent?'],
    summary: '减数分裂通过一次复制、两次分裂产生单倍体配子；交叉互换、自由组合与随机受精共同产生遗传多样性。 · Meiosis produces haploid gametes through one replication and two divisions; crossing over, independent assortment, and random fertilization together generate genetic diversity.'
  },

  'bio/bio-u5/5.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明表型由基因型与环境共同决定，并区分遗传变异与环境变异。 · Explain that phenotype is determined jointly by genotype and environment, and distinguish genetic variation from environmental variation.',
      '能解释反应规范与表型可塑性，并读懂基因型—环境互作。 · Explain reaction norms and phenotypic plasticity and interpret genotype–environment interactions.',
      '能区分环境引起的表型改变、表观遗传修饰与可遗传的 DNA 序列变化。 · Distinguish environmentally induced phenotypic change, epigenetic modification, and heritable changes in DNA sequence.'
    ],
    essentialKnowledge: [
      '表型是基因型与环境共同作用的结果；同一基因型在不同环境中可产生不同表型。 · Phenotype results from the interaction of genotype and environment; the same genotype can produce different phenotypes in different environments.',
      '反应规范描述一个基因型在环境梯度下可表现出的表型范围；表型可塑性是环境诱导的可逆或发育性表型改变。 · A reaction norm describes the range of phenotypes a genotype can express across an environmental gradient; phenotypic plasticity is environmentally induced reversible or developmental phenotypic change.',
      '环境因素包括温度、光照、营养、pH、毒素、寄主、社会压力等；例子有喜马拉雅兔的毛色、绣球花色、温度依赖性别决定与人类身高。 · Environmental factors include temperature, light, nutrition, pH, toxins, hosts, and social stress; examples include Himalayan rabbit coat color, hydrangea flower color, temperature-dependent sex determination, and human height.',
      '表观遗传修饰（DNA 甲基化、组蛋白修饰、非编码 RNA）可改变基因表达而不改变 DNA 序列，部分修饰可跨代传递。 · Epigenetic modifications (DNA methylation, histone modification, noncoding RNA) can change gene expression without changing DNA sequence, and some can be transmitted across generations.',
      '环境引起的体细胞改变通常不遗传；只有生殖细胞中的可遗传改变才能影响后代。 · Environmentally induced somatic changes are usually not inherited; only heritable changes in germ cells can affect offspring.',
      '多基因性状常呈连续分布，环境使分布更平滑；基因型—环境互作意味着不同基因型对环境变化的响应可能不同。 · Polygenic traits often show continuous distributions, and the environment smooths them further; genotype–environment interaction means different genotypes may respond differently to environmental change.'
    ],
    definition: '环境影响表型指基因型相同或不同的个体，在不同环境条件下表现出不同性状。表型由基因型与环境共同决定，环境可以通过改变基因表达、发育过程或生理状态影响性状；表观遗传修饰可在不改变 DNA 序列的情况下稳定表达状态。 · Environmental effects on phenotype occur when individuals with the same or different genotypes express different traits under different environmental conditions. Phenotype is determined jointly by genotype and environment; the environment can affect traits by changing gene expression, development, or physiological state, and epigenetic modifications can stabilize expression states without changing DNA sequence.',
    intuition: '基因是菜谱，环境是厨房：同一份菜谱在不同火候、食材和温度下会做出不同成品；菜谱没变，成品却变了。 · Genes are the recipe and the environment is the kitchen: the same recipe produces different results under different heat, ingredients, and temperatures; the recipe is unchanged, but the product differs.',
    intuitionDetailed: '反应规范把“同一基因型在不同环境中的表型”画成一条曲线或一组点。表型可塑性可以是短期的生理调整（如高海拔下红细胞增多），也可以是发育中的结构改变（如某些植物在水下长出不同叶形）。表观遗传修饰像在菜谱上贴便签：不修改文字，却决定哪些页被翻开。便签有时能传给下一代，有时会在配子形成或早期发育中被清除。 · A reaction norm plots the phenotypes of one genotype across environments as a curve or set of points. Phenotypic plasticity can be a short-term physiological adjustment (such as more red blood cells at high altitude) or a developmental structural change (such as different leaf shapes in some plants underwater). Epigenetic modifications are like sticky notes on the recipe: they do not change the text but determine which pages are opened. The notes are sometimes passed to the next generation and sometimes erased during gamete formation or early development.',
    formulas: [
      { latex: '\\text{表型}=G+E+G\\times E', note: '概念式：基因型、环境与二者互作。 · Conceptual form: genotype, environment, and their interaction.' },
      { latex: 'P=f(E)\\quad(\\text{基因型固定})', note: '反应规范：固定基因型下，表型随环境变化。 · Reaction norm: phenotype varies with environment for a fixed genotype.' }
    ],
    derivationNotes: [
      { from: '基因型 · Genotype', to: '反应规范 · Reaction norm', note: '固定基因型，改变环境，记录表型范围。 · Hold the genotype fixed, vary the environment, and record the range of phenotypes.' },
      { from: '环境信号 · Environmental signal', to: '基因表达 · Gene expression', note: '信号通路改变转录因子活性或表观遗传标记，进而改变表型。 · Signaling pathways change transcription-factor activity or epigenetic marks, thereby changing phenotype.' },
      { from: '表观遗传修饰 · Epigenetic modification', to: '可遗传性 · Heritability', note: '部分修饰可跨代传递，部分在配子形成或早期发育中被重置。 · Some modifications can be transmitted across generations, while others are reset during gamete formation or early development.' },
    ],
    connections: [
      '先修：5.3–5.4 的基因型、显性与非孟德尔遗传。 · Prerequisite: genotype, dominance, and non-Mendelian inheritance in 5.3–5.4.',
      '后续：6.5–6.6 的基因表达调控与细胞特化。 · Follow-up: gene expression regulation and cell specialization in 6.5–6.6.',
      '应用：医学中的环境—基因互作、发育可塑性与表观遗传学。 · Application: gene–environment interactions, developmental plasticity, and epigenetics in medicine.',
    ],
    conditions: [
      '环境效应取决于基因型、发育阶段与暴露时长 · Environmental effects depend on genotype, developmental stage, and duration of exposure',
      '表型可塑性不一定具有适应性，也可能是胁迫后果 · Phenotypic plasticity is not necessarily adaptive and may be a consequence of stress',
      '表观遗传修饰可稳定表达，但不等于 DNA 序列突变 · Epigenetic modifications can stabilize expression but are not DNA sequence mutations',
      '体细胞中获得的环境改变通常不传给后代 · Environmental changes acquired in somatic cells are usually not passed to offspring',
      '多基因性状的连续分布需要足够大的样本才能看清 · Continuous distributions of polygenic traits require a sufficiently large sample to see clearly'
    ],
    keyPoints: [
      '表型 = 基因型 + 环境 + 互作 · Phenotype = genotype + environment + interaction',
      '反应规范描述同一基因型的环境响应范围 · A reaction norm describes the range of environmental responses of one genotype',
      '表型可塑性是环境诱导的表型改变 · Phenotypic plasticity is environmentally induced phenotypic change',
      '表观遗传改变表达而不改变 DNA 序列 · Epigenetics changes expression without changing DNA sequence',
      '获得性体细胞改变通常不遗传 · Acquired somatic changes are usually not inherited',
      '基因型不同，对环境变化的响应也可能不同 · Different genotypes may respond differently to environmental change'
    ],
    misconceptions: [
      '认为表型完全由基因型决定 · Assuming phenotype is determined entirely by genotype',
      '认为所有环境引起的改变都会遗传给后代 · Assuming all environmentally induced changes are inherited by offspring',
      '把表观遗传修饰等同于 DNA 突变 · Equating epigenetic modification with DNA mutation',
      '认为同卵双胞胎的基因组相同就一定表型完全相同 · Assuming identical twins with the same genome must have identical phenotypes',
      '认为环境只影响外表，不影响生理与行为 · Assuming the environment affects only appearance, not physiology or behavior'
    ],
    examples: [
      {
        title: '例 1 · 喜马拉雅兔 · Example 1 · Himalayan Rabbit',
        prompt: '喜马拉雅兔的耳朵、鼻端和四肢在低温下变黑，在温暖环境下变浅。如何解释？ · The ears, nose, and limbs of Himalayan rabbits darken in the cold and lighten in warmth. How can this be explained?',
        steps: [
          '毛色由温度敏感的酶控制，低温下色素合成更活跃。 · Coat color is controlled by a temperature-sensitive enzyme, and pigment synthesis is more active at low temperatures.',
          '身体末端温度较低，因此颜色更深。 · Body extremities are cooler, so they become darker.',
          '基因型相同，环境温度不同导致表型不同。 · The genotype is the same, but different environmental temperatures produce different phenotypes.'
        ],
        solution: '温度通过影响酶活性改变色素沉积，属于环境对表型的调节。 · Temperature changes pigment deposition by affecting enzyme activity, which is environmental regulation of phenotype.'
      },
      {
        title: '例 2 · 绣球花色 · Example 2 · Hydrangea Flower Color',
        prompt: '同一株绣球在酸性土壤中开蓝花，在碱性土壤中开粉花。这是基因突变吗？ · The same hydrangea produces blue flowers in acidic soil and pink flowers in alkaline soil. Is this a gene mutation?',
        steps: [
          '土壤 pH 改变铝离子的可利用性。 · Soil pH changes the availability of aluminum ions.',
          '铝离子被根系吸收后影响花青素显色。 · Aluminum ions taken up by the roots affect anthocyanin coloration.',
          '植物基因型未变，只是环境改变了色素表现。 · The plant’s genotype is unchanged; only the environment alters pigment expression.'
        ],
        solution: '不是突变，是环境（土壤 pH 与铝离子）对花色的影响。 · It is not a mutation but an environmental effect (soil pH and aluminum ions) on flower color.'
      },
      {
        title: '例 3 · 同卵双胞胎 · Example 3 · Identical Twins',
        prompt: '同卵双胞胎基因组相同，为什么成年后身高与疾病风险可能不同？ · Identical twins share the same genome, so why can their adult height and disease risks differ?',
        steps: [
          '宫内环境、营养、生活方式与随机发育差异不同。 · Their prenatal environments, nutrition, lifestyles, and random developmental differences vary.',
          '表观遗传修饰可随环境改变并影响基因表达。 · Epigenetic modifications can change with the environment and affect gene expression.',
          '基因型相同不代表环境暴露与表达状态相同。 · Sharing a genotype does not mean sharing environmental exposures or expression states.'
        ],
        solution: '环境与表观遗传差异使相同基因组产生不同表型。 · Environmental and epigenetic differences make the same genome produce different phenotypes.'
      }
    ],
    examTips: [
      'CED Unit 5：环境影响表型 · CED Unit 5: Environmental effects on phenotype',
      '先判断差异是基因型不同还是环境不同 · First decide whether a difference comes from genotype or environment.',
      '反应规范题看“同一基因型、不同环境”的曲线 · For reaction-norm questions, read the curve for “same genotype, different environments.”',
      '表观遗传题强调“不改变 DNA 序列、改变表达” · For epigenetics questions, emphasize “no change in DNA sequence, but a change in expression.”',
      '不要把获得性体细胞改变说成可遗传 · Do not describe acquired somatic changes as heritable.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u5', code: '5.3', title: '孟德尔遗传 · Mendelian Genetics', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.4', title: '非孟德尔遗传 · Non-Mendelian Inheritance', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.5', title: '基因表达调控 · Regulation of Gene Expression', relation: '机制 · Mechanism' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.6', title: '基因表达与细胞特化 · Gene Expression and Cell Specialization', relation: '应用 · Application' }
    ],
    development: ['基因型与环境 · Genotype and environment', '反应规范 · Reaction norms', '表型可塑性 · Phenotypic plasticity', '表观遗传 · Epigenetics', '可遗传与不可遗传 · Heritable vs nonheritable'],
    checks: ['反应规范与表型可塑性有何区别？ · What is the difference between a reaction norm and phenotypic plasticity?', '表观遗传修饰为什么不算 DNA 突变？ · Why are epigenetic modifications not considered DNA mutations?', '同卵双胞胎为什么可能表型不同？ · Why can identical twins have different phenotypes?'],
    summary: '表型由基因型与环境共同决定；反应规范与可塑性描述环境响应，表观遗传修饰改变表达而不改变 DNA 序列。 · Phenotype is determined jointly by genotype and environment; reaction norms and plasticity describe environmental responses, and epigenetic modifications change expression without changing DNA sequence.'
  },

  'bio/bio-u5/5.6': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能解释连锁基因、交叉互换与重组频率之间的关系。 · Explain how linked genes, crossing over, and recombination frequency are related.",
      "能用重组频率估算基因间距离并分析伴 X 隐性遗传。 · Use recombination frequency to estimate map distance and analyze X-linked recessive inheritance.",
      "能区分染色体数目异常与结构异常，并说明其表型后果。 · Distinguish chromosomal number abnormalities from structural abnormalities and describe their phenotypic consequences."
    ],
    essentialKnowledge: [
      "位于同一染色体上的基因连锁，倾向一起遗传；同源染色体非姐妹染色单体交叉互换可产生重组配子。 · Genes on the same chromosome are linked and tend to be inherited together; crossing over between nonsister chromatids of homologous chromosomes can produce recombinant gametes.",
      "重组频率是重组型后代占后代总数的比例；1% 重组频率定义为 1 个图距单位（cM）。 · Recombination frequency is the proportion of recombinant offspring among all offspring; 1% recombination is defined as one map unit (cM).",
      "基因间距离越大，交叉互换越可能发生，重组频率越高；但两个基因相距很远时重组频率接近 50%，表现为独立分配。 · The greater the distance between genes, the more likely crossing over occurs between them and the higher the recombination frequency; however, for genes very far apart, recombination approaches 50% and resembles independent assortment.",
      "伴 X 隐性性状中男性为半合子，携带即表现；女性需两条 X 都携带才表现，因此男性患者通常更多。 · In X-linked recessive traits, males are hemizygous and express the trait with a single copy; females must carry the allele on both X chromosomes, so affected males are usually more common.",
      "染色体数目异常由不分离造成：非整倍体如 21 三体、Turner 综合征与 Klinefelter 综合征；多倍体在植物中常见。 · Abnormal chromosome number results from nondisjunction: aneuploidies such as trisomy 21, Turner syndrome, and Klinefelter syndrome; polyploidy is common in plants.",
      "染色体结构异常包括缺失、重复、倒位与易位，可改变基因剂量、打断基因或改变调控，导致发育异常或肿瘤。 · Structural chromosome abnormalities include deletions, duplications, inversions, and translocations; they can alter gene dosage, disrupt genes, or change regulation, leading to developmental abnormalities or cancer.",
      "线粒体与叶绿体基因随母系传递，不符合孟德尔核基因的分离比。 · Mitochondrial and chloroplast genes are inherited maternally and do not follow Mendelian segregation ratios for nuclear genes."
    ],
    definition: "染色体遗传研究基因在染色体上的位置与传递方式，包括连锁、重组、伴性遗传、染色体数目异常与结构异常。位于同一染色体上的基因倾向于一起遗传，交叉互换可产生重组；性染色体上的基因表现性别相关的传递模式。 · Chromosome genetics studies the location and transmission of genes on chromosomes, including linkage, recombination, sex-linked inheritance, and chromosomal number and structural abnormalities. Genes on the same chromosome tend to be inherited together, crossing over can produce recombinants, and genes on sex chromosomes show sex-related transmission patterns.",
    intuition: "染色体像一串珠子：同一串上的珠子倾向一起传递，交叉互换像交换两串之间的珠段；多一串或少一串会改变整串的剂量。 · Chromosomes are like strings of beads: beads on the same string tend to be passed on together, crossing over exchanges segments between strings, and an extra or missing chromosome changes the dose of the entire string.",
    intuitionDetailed: "连锁基因的距离越远，交叉互换发生在它们之间的概率越大，重组频率越高。重组频率不能超过 50%，因为距离很远时重组与亲本组合各占一半，看起来就像独立分配。伴 X 隐性性状的遗传要看性染色体：父亲把 X 传给所有女儿、把 Y 传给所有儿子；母亲把两条 X 中的任意一条传给子女。 · The farther apart two linked genes are, the more likely crossing over occurs between them and the higher the recombination frequency. Recombination frequency cannot exceed 50%, because at very large distances recombinant and parental combinations each account for half, which looks like independent assortment. Inheritance of X-linked recessive traits depends on the sex chromosomes: a father passes his X to all daughters and his Y to all sons; a mother passes either of her two X chromosomes to each child.",
    formulas: [
      {
        latex: "\\text{重组频率}=\\dfrac{\\text{重组型后代数}}{\\text{后代总数}}\\times100\\%",
        note: "重组配子或后代的百分比。 · Percentage of recombinant gametes or offspring."
      },
      {
        latex: "1\\%\\text{ 重组频率}=1\\,\\mathrm{cM}",
        note: "图距单位；短距离下约等于重组频率。 · Map unit; for short distances it is approximately equal to the recombination frequency."
      },
      {
        latex: "\\text{图距}\\approx\\text{重组频率}",
        note: "仅适用于较短距离；远距离需校正。 · Only valid over short distances; longer distances require correction."
      }
    ],
    derivationNotes: [
      {
        from: "连锁基因 · Linked genes",
        to: "重组频率 · Recombination frequency",
        note: "交叉互换发生在基因之间时产生重组配子，重组比例反映距离。 · Crossing over between genes produces recombinant gametes, and the recombinant proportion reflects distance."
      },
      {
        from: "重组频率 · Recombination frequency",
        to: "图距 · Map distance",
        note: "短距离下 1% 重组频率约等于 1 cM。 · At short distances, 1% recombination is approximately 1 cM."
      },
      {
        from: "性染色体 · Sex chromosomes",
        to: "伴性比例 · Sex-linked ratios",
        note: "男性半合子使 X 隐性性状更易表现，父亲只把 X 传给女儿。 · Hemizygosity in males makes X-linked recessive traits easier to express, and fathers pass their X only to daughters."
      }
    ],
    connections: [
      "先修：5.1–5.2 的减数分裂、交叉互换与自由组合。 · Prerequisite: meiosis, crossing over, and independent assortment in 5.1–5.2.",
      "后续：6.2 DNA 复制与 6.7 突变，解释染色体异常的分子基础。 · Follow-up: DNA replication in 6.2 and mutation in 6.7 explain the molecular basis of chromosomal abnormalities.",
      "应用：遗传咨询、家系分析与染色体疾病诊断。 · Application: genetic counseling, pedigree analysis, and diagnosis of chromosomal disorders."
    ],
    conditions: [
      "重组频率小于 50% 才说明连锁；接近 50% 时与独立分配难以区分 · Only recombination frequencies below 50% indicate linkage; near 50%, linkage is hard to distinguish from independent assortment.",
      "图距可加性只在短距离内近似成立 · Additivity of map distances holds only approximately over short distances.",
      "伴性遗传的比例在两性间不同，不能套用常染色体 3:1 · Sex-linked ratios differ between the sexes and cannot be treated as the autosomal 3:1 ratio.",
      "非整倍体的表型取决于涉及哪条染色体与基因剂量 · The phenotype of an aneuploidy depends on which chromosome is involved and on gene dosage.",
      "线粒体与叶绿体基因不遵循核基因的孟德尔比例 · Mitochondrial and chloroplast genes do not follow Mendelian ratios of nuclear genes."
    ],
    keyPoints: [
      "连锁基因倾向一起遗传 · Linked genes tend to be inherited together.",
      "交叉互换产生重组型 · Crossing over produces recombinant types.",
      "重组频率反映基因间距离 · Recombination frequency reflects the distance between genes.",
      "伴 X 隐性性状男性更易表现 · X-linked recessive traits are more readily expressed in males.",
      "不分离导致非整倍体 · Nondisjunction causes aneuploidy.",
      "缺失、重复、倒位、易位改变结构 · Deletions, duplications, inversions, and translocations change chromosome structure.",
      "线粒体与叶绿体基因母系传递 · Mitochondrial and chloroplast genes are inherited maternally."
    ],
    misconceptions: [
      "认为连锁基因永远不分离（交叉互换可产生重组） · Assuming linked genes never separate (crossing over can produce recombinants).",
      "认为重组频率可以超过 50% · Assuming recombination frequency can exceed 50%.",
      "认为伴性遗传只影响男性（女性也可表现或携带） · Assuming sex-linked inheritance affects only males (females can also be affected or be carriers).",
      "认为所有非整倍体都致死 · Assuming every aneuploidy is lethal.",
      "认为线粒体基因遵循孟德尔分离比 · Assuming mitochondrial genes follow Mendelian segregation ratios."
    ],
    examples: [
      {
        title: "例 1 · 重组频率 · Recombination Frequency",
        prompt: "一次测交产生 1000 个后代，其中 80 个为重组型。求重组频率与图距。 · A testcross produces 1000 offspring, 80 of which are recombinant. Find the recombination frequency and map distance.",
        steps: [
          "重组频率 \\(=\\dfrac{80}{1000}\\times100\\%=8\\%\\)。 · Recombination frequency \\(=\\dfrac{80}{1000}\\times100\\%=8\\%\\).",
          "短距离下 1% 约等于 1 cM。 · At short distances, 1% is approximately 1 cM.",
          "图距约为 8 cM。 · The map distance is about 8 cM."
        ],
        solution: "重组频率 8%，图距约 8 cM。 · Recombination frequency 8%; map distance about 8 cM.",
        solutionLatex: "\\text{重组频率}=8\\%,\\;\\text{图距}\\approx8\\,\\mathrm{cM}"
      },
      {
        title: "例 2 · 伴 X 隐性 · X-Linked Recessive",
        prompt: "携带者母亲 \\(X^C X^c\\) 与正常父亲 \\(X^C Y\\) 婚配，儿子与女儿的色盲风险如何？ · A carrier mother \\(X^C X^c\\) mates with an unaffected father \\(X^C Y\\). What are the color-blindness risks for their sons and daughters?",
        steps: [
          "儿子从母亲得到 X、从父亲得到 Y，母亲的 \\(X^c\\) 有 \\(\\dfrac{1}{2}\\) 概率传给儿子。 · Sons receive an X from the mother and a Y from the father; the mother’s \\(X^c\\) is passed to a son with probability \\(\\dfrac{1}{2}\\).",
          "女儿从父亲得到 \\(X^C\\)，因此不会表现色盲。 · Daughters receive \\(X^C\\) from the father, so they will not be color-blind.",
          "女儿有 \\(\\dfrac{1}{2}\\) 概率从母亲得到 \\(X^c\\)，成为携带者。 · A daughter has probability \\(\\dfrac{1}{2}\\) of receiving \\(X^c\\) from the mother and becoming a carrier."
        ],
        solution: "儿子 \\(\\dfrac{1}{2}\\) 患病；女儿不患病，\\(\\dfrac{1}{2}\\) 为携带者。 · Sons have a \\(\\dfrac{1}{2}\\) chance of being affected; daughters are unaffected, and \\(\\dfrac{1}{2}\\) are carriers.",
        solutionLatex: "P(\\text{儿子患病})=\\dfrac{1}{2},\\;P(\\text{女儿携带})=\\dfrac{1}{2}"
      },
      {
        title: "例 3 · 不分离时期与异常配子 · Nondisjunction Timing and Abnormal Gametes",
        prompt: "减数第一次分裂与减数第二次分裂的不分离，产生的异常配子有何不同？ · How do the abnormal gametes produced by nondisjunction in meiosis I and meiosis II differ?",
        steps: [
          "减数 I 不分离：同源染色体未分开，配子可能同时得到两条同源染色体。 · Meiosis I nondisjunction: homologous chromosomes fail to separate, so a gamete may receive both homologs.",
          "减数 II 不分离：姐妹染色单体未分开，配子得到两条相同的染色单体。 · Meiosis II nondisjunction: sister chromatids fail to separate, so a gamete receives two identical chromatids.",
          "两者都可导致 \\(n+1\\) 或 \\(n-1\\) 配子，但遗传组成不同。 · Both can produce \\(n+1\\) or \\(n-1\\) gametes, but their genetic composition differs."
        ],
        solution: "减数 I 异常配子含一对同源染色体；减数 II 异常配子含两条相同姐妹染色体。 · Meiosis I abnormal gametes contain a homologous pair; meiosis II abnormal gametes contain two identical sister chromosomes."
      }
    ],
    examTips: [
      "CED Unit 5：染色体遗传 · CED Unit 5: Chromosomal inheritance",
      "重组频率题先确认是测交还是自交，再找重组型 · For recombination-frequency problems, first decide whether the cross is a testcross or a self-cross, then identify recombinant types.",
      "伴性遗传先写亲本性染色体，再分儿子与女儿讨论 · For sex-linked inheritance, write the parental sex chromosomes first, then discuss sons and daughters separately.",
      "结构异常与数目异常要分开作答 · Answer structural and numerical abnormalities separately.",
      "记住线粒体与叶绿体基因的母系传递 · Remember the maternal inheritance of mitochondrial and chloroplast genes."
    ],
    related: [
      {
        subject: "bio",
        chapterId: "bio-u5",
        code: "5.1",
        title: "减数分裂 · Meiosis",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "bio",
        chapterId: "bio-u5",
        code: "5.2",
        title: "减数分裂与遗传多样性 · Meiosis and Genetic Diversity",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "bio",
        chapterId: "bio-u5",
        code: "5.4",
        title: "非孟德尔遗传 · Non-Mendelian Inheritance",
        relation: "相关 · Related"
      },
      {
        subject: "bio",
        chapterId: "bio-u5",
        code: "5.5",
        title: "环境影响表型 · Environmental Effects on Phenotype",
        relation: "相关 · Related"
      }
    ],
    development: [
      "连锁与重组 · Linkage and recombination",
      "重组频率与图距 · Recombination frequency and map distance",
      "伴性遗传 · Sex-linked inheritance",
      "数目异常 · Numerical abnormalities",
      "结构异常 · Structural abnormalities",
      "母系遗传 · Maternal inheritance"
    ],
    checks: [
      "为什么重组频率不能超过 50%？ · Why can recombination frequency not exceed 50%?",
      "伴 X 隐性性状为什么男性更常见？ · Why are X-linked recessive traits more common in males?",
      "减数 I 与减数 II 不分离的结果有何不同？ · How do the outcomes of nondisjunction in meiosis I and meiosis II differ?"
    ],
    summary: "染色体遗传由基因位置决定：连锁与重组决定组合，性染色体决定伴性比例，数目与结构异常改变剂量与调控。 · Chromosomal inheritance depends on gene position: linkage and recombination determine combinations, sex chromosomes determine sex-linked ratios, and numerical and structural abnormalities alter dosage and regulation."
  },
  'bio/bio-u6/6.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能解释同一基因组如何通过差异基因表达产生不同细胞类型。 · Explain how the same genome produces different cell types through differential gene expression.',
      '能说明转录因子、增强子与信号通路在细胞分化中的作用。 · Describe the roles of transcription factors, enhancers, and signaling pathways in cell differentiation.',
      '能区分细胞分化、形态发生与凋亡，并举例说明干细胞与多能性。 · Distinguish differentiation, morphogenesis, and apoptosis, and give examples of stem cells and pluripotency.'
    ],
    essentialKnowledge: [
      '多细胞生物几乎所有体细胞含相同的 DNA，但不同细胞表达不同基因；差异基因表达导致细胞特化。 · Nearly all somatic cells in a multicellular organism contain the same DNA, but different cells express different genes; differential gene expression causes cell specialization.',
      '转录因子结合启动子、增强子或沉默子，激活或抑制基因；多个转录因子的组合产生细胞类型特异性表达。 · Transcription factors bind promoters, enhancers, or silencers to activate or repress genes; combinations of transcription factors produce cell-type-specific expression.',
      '细胞信号（旁分泌、内分泌、接触依赖）可改变转录因子活性，指导分化；形态发生素浓度梯度提供位置信息。 · Cell signals (paracrine, endocrine, contact-dependent) can alter transcription-factor activity and guide differentiation; morphogen concentration gradients provide positional information.',
      '干细胞具有自我更新与分化潜能；诱导多能干细胞可通过表达特定转录因子重编程。 · Stem cells have self-renewal and differentiation potential; induced pluripotent stem cells can be reprogrammed by expressing specific transcription factors.',
      '分化通常伴随 DNA 甲基化与组蛋白修饰等表观遗传改变，使表达模式稳定；分化不是基因组丢失。 · Differentiation is usually accompanied by epigenetic changes such as DNA methylation and histone modification that stabilize expression patterns; differentiation is not loss of the genome.',
      '凋亡是程序性细胞死亡，塑造组织与器官；它与意外坏死不同，受基因调控。 · Apoptosis is programmed cell death that shapes tissues and organs; unlike accidental necrosis, it is genetically regulated.',
      '细胞特化是基因表达调控的结果，不是突变积累的结果；突变可能破坏发育，但不是正常分化的机制。 · Cell specialization results from gene-expression regulation, not accumulated mutation; mutations can disrupt development but are not the mechanism of normal differentiation.'
    ],
    definition: '基因表达与细胞特化指多细胞生物在基因组基本相同的情况下，通过差异基因表达产生不同结构与功能的细胞类型。转录因子与信号通路决定哪些基因被开启或关闭，表观遗传修饰稳定表达状态，干细胞则提供分化与组织修复的来源。 · Gene expression and cell specialization describe how multicellular organisms with essentially the same genome produce cell types with different structures and functions through differential gene expression. Transcription factors and signaling pathways determine which genes are turned on or off, epigenetic modifications stabilize expression states, and stem cells provide a source for differentiation and tissue repair.',
    intuition: '同一本说明书在每个细胞里都有，但每种细胞只高亮自己需要的章节；转录因子是书签，信号决定翻到哪一页。 · The same instruction manual exists in every cell, but each cell highlights only the chapters it needs; transcription factors are bookmarks, and signals decide which page to open.',
    intuitionDetailed: '细胞分化不是“丢掉不需要的基因”，而是“把不需要的基因关掉、把需要的基因打开”。例如肌肉细胞表达肌动蛋白与肌球蛋白基因，胰岛 β 细胞表达胰岛素基因，神经元表达神经递质合成酶基因。转录因子组合与增强子网络维持细胞身份；表观遗传标记让这些表达模式在分裂后保持。诱导多能干细胞实验证明，已分化的细胞可以被重编程回多能状态。 · Cell differentiation is not “throwing away unneeded genes” but “turning off unneeded genes and turning on needed ones.” For example, muscle cells express actin and myosin genes, pancreatic β cells express the insulin gene, and neurons express neurotransmitter-synthesizing enzyme genes. Combinations of transcription factors and enhancer networks maintain cell identity; epigenetic marks keep these expression patterns through cell division. Induced pluripotent stem cell experiments show that differentiated cells can be reprogrammed back to a pluripotent state.',
    formulas: [
      { latex: '\\text{同一基因组}+\\text{差异表达}\\to\\text{不同细胞类型}', note: '细胞特化的核心逻辑。 · The core logic of cell specialization.' },
      { latex: '\\text{转录因子}+\\text{增强子}\\Rightarrow\\text{基因开启或关闭}', note: '组合式调控。 · Combinatorial regulation.' }
    ],
    derivationNotes: [
      { from: '同一基因组 · Same genome', to: '不同转录组 · Different transcriptomes', note: '不同细胞表达不同基因组合，而不是丢失基因。 · Different cells express different gene combinations rather than losing genes.' },
      { from: '信号 · Signal', to: '转录因子活性 · Transcription-factor activity', note: '信号通路改变转录因子的定位、活性或表达，进而改变靶基因。 · Signaling pathways change transcription-factor localization, activity, or expression, thereby changing target genes.' },
      { from: '转录因子组合 · Transcription-factor combination', to: '细胞身份 · Cell identity', note: '增强子网络与表观遗传修饰稳定细胞类型特异性表达。 · Enhancer networks and epigenetic modifications stabilize cell-type-specific expression.' },
    ],
    connections: [
      '先修：6.3 转录与 6.5 基因表达调控。 · Prerequisite: transcription in 6.3 and regulation of gene expression in 6.5.',
      '后续：6.7 突变可能破坏发育调控，6.8 生物技术利用重编程与干细胞。 · Follow-up: mutations in 6.7 can disrupt developmental regulation, and biotechnology in 6.8 uses reprogramming and stem cells.',
      '应用：发育生物学、再生医学与癌症中的分化异常。 · Application: developmental biology, regenerative medicine, and differentiation defects in cancer.',
    ],
    conditions: [
      '差异表达发生在转录、RNA 加工、翻译与翻译后多个层次，转录调控通常最关键 · Differential expression occurs at transcription, RNA processing, translation, and post-translational levels, with transcriptional regulation usually most critical',
      '细胞身份需要信号与表观遗传网络共同维持 · Cell identity requires both signaling and epigenetic networks for maintenance',
      '干细胞的多能性程度不同：全能、多能、专能 · Stem cells differ in potency: totipotent, pluripotent, and multipotent',
      '凋亡受程序性信号控制，不是被动坏死 · Apoptosis is controlled by programmed signals and is not passive necrosis',
      '环境信号可影响分化方向，但不能把所有分化都归因于环境 · Environmental signals can influence differentiation direction, but not all differentiation should be attributed to environment'
    ],
    keyPoints: [
      '所有体细胞通常含相同基因组 · All somatic cells usually contain the same genome',
      '差异基因表达产生细胞特化 · Differential gene expression produces cell specialization',
      '转录因子与增强子组合决定表达 · Combinations of transcription factors and enhancers determine expression',
      '信号通路与形态发生素指导分化 · Signaling pathways and morphogens guide differentiation',
      '表观遗传修饰稳定细胞身份 · Epigenetic modifications stabilize cell identity',
      '干细胞可自我更新与分化 · Stem cells can self-renew and differentiate',
      '凋亡塑造组织 · Apoptosis shapes tissues',
      '特化不是突变积累 · Specialization is not accumulated mutation'
    ],
    misconceptions: [
      '认为不同细胞含不同基因（实际基因组通常相同） · Assuming different cells contain different genes (their genomes are usually the same)',
      '认为细胞特化需要大量突变 · Assuming cell specialization requires many mutations',
      '认为所有基因在所有细胞中都表达 · Assuming all genes are expressed in all cells',
      '认为分化完全不可逆（可以被重编程） · Assuming differentiation is completely irreversible (cells can be reprogrammed)',
      '把凋亡与坏死混为一谈 · Confusing apoptosis with necrosis'
    ],
    examples: [
      {
        title: '例 1 · 肌肉与神经元 · Example 1 · Muscle and Neuron',
        prompt: '肌肉细胞与神经元基因组相同，为什么形态与功能差异巨大？ · Muscle cells and neurons share the same genome, so why do their shapes and functions differ so greatly?',
        steps: [
          '两者都含完整基因组，但表达不同基因。 · Both contain the complete genome but express different genes.',
          '肌肉细胞高表达肌动蛋白、肌球蛋白与肌肉转录因子。 · Muscle cells highly express actin, myosin, and muscle transcription factors.',
          '神经元高表达神经递质合成酶、受体与突触蛋白。 · Neurons highly express neurotransmitter-synthesizing enzymes, receptors, and synaptic proteins.'
        ],
        solution: '差异基因表达，而不是基因组差异，导致细胞特化。 · Cell specialization results from differential gene expression, not genomic differences.'
      },
      {
        title: '例 2 · 干细胞分化 · Example 2 · Stem Cell Differentiation',
        prompt: '造血干细胞如何产生红细胞与淋巴细胞？ · How do hematopoietic stem cells produce red blood cells and lymphocytes?',
        steps: [
          '造血干细胞自我更新并接收不同信号。 · Hematopoietic stem cells self-renew and receive different signals.',
          '红细胞谱系表达血红蛋白基因，淋巴细胞表达免疫受体基因。 · The red blood cell lineage expresses hemoglobin genes, while lymphocytes express immune receptor genes.',
          '转录因子网络与表观遗传改变稳定各自身份。 · Transcription-factor networks and epigenetic changes stabilize each identity.'
        ],
        solution: '信号引导的差异基因表达使同一干细胞产生不同血细胞。 · Signal-guided differential gene expression enables one stem cell type to produce different blood cells.'
      },
      {
        title: '例 3 · 重编程 · Example 3 · Reprogramming',
        prompt: '诱导多能干细胞实验为什么能说明分化不是基因组丢失？ · Why do induced pluripotent stem cell experiments show that differentiation is not genome loss?',
        steps: [
          '已分化的成纤维细胞被导入特定转录因子。 · Differentiated fibroblasts are introduced with specific transcription factors.',
          '细胞恢复多能性，并能分化为多种细胞类型。 · The cells regain pluripotency and can differentiate into multiple cell types.',
          '这说明原基因组仍完整，只是表达程序被改变。 · This shows that the original genome remains intact and only the expression program has been changed.'
        ],
        solution: '重编程证明分化状态由表达调控维持，而非 DNA 序列丢失。 · Reprogramming shows that the differentiated state is maintained by expression regulation, not by loss of DNA sequence.'
      }
    ],
    examTips: [
      'CED Unit 6：基因表达与细胞特化 · CED Unit 6: Gene expression and cell specialization',
      '看到“同一基因组不同细胞”先写差异基因表达 · When you see “same genome, different cells,” start with differential gene expression.',
      '不要写成突变导致特化；突变是 6.7 的内容 · Do not write that mutation causes specialization; mutation is covered in 6.7.',
      '转录因子、增强子、信号通路是三个关键词 · Transcription factors, enhancers, and signaling pathways are the three key terms.',
      '干细胞题区分全能、多能与专能 · For stem cell questions, distinguish totipotent, pluripotent, and multipotent.',
      '凋亡是程序性死亡，不是坏死 · Apoptosis is programmed death, not necrosis.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u6', code: '6.3', title: '转录与 RNA 加工 · Transcription and RNA Processing', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.5', title: '基因表达调控 · Regulation of Gene Expression', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u6', code: '6.7', title: '突变 · Mutations', relation: '对比 · Contrast' },
      { subject: 'bio', chapterId: 'bio-u5', code: '5.5', title: '环境影响表型 · Environmental Effects on Phenotype', relation: '相关 · Related' }
    ],
    development: ['同一基因组 · Same genome', '差异基因表达 · Differential gene expression', '转录因子与增强子 · Transcription factors and enhancers', '信号与形态发生素 · Signals and morphogens', '表观遗传稳定 · Epigenetic stabilization', '干细胞与凋亡 · Stem cells and apoptosis'],
    checks: ['为什么同一基因组能产生不同细胞类型？ · Why can the same genome produce different cell types?', '转录因子与增强子如何组合调控基因？ · How do transcription factors and enhancers regulate genes combinatorially?', '细胞特化为什么不是突变积累？ · Why is cell specialization not accumulated mutation?'],
    summary: '细胞特化由差异基因表达驱动：转录因子、增强子、信号通路与表观遗传共同决定并维持细胞身份，而非改变基因组。 · Cell specialization is driven by differential gene expression: transcription factors, enhancers, signaling pathways, and epigenetics together determine and maintain cell identity rather than changing the genome.'
  },

  'bio/bio-u7/7.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能分类并评价化石、比较解剖、胚胎发育、生物地理与分子证据。 · Classify and evaluate fossil, comparative anatomy, embryological, biogeographic, and molecular evidence.',
      '能区分同源结构、趋同结构与痕迹结构，并说明它们对进化的意义。 · Distinguish homologous, analogous, and vestigial structures and explain their significance for evolution.',
      '能用多类独立证据构建或检验系统发育假说。 · Use multiple independent lines of evidence to build or test phylogenetic hypotheses.'
    ],
    essentialKnowledge: [
      '化石记录提供已灭绝物种、过渡形态与相对年代；地层顺序与放射性定年提供时间框架。 · The fossil record provides extinct species, transitional forms, and relative ages; stratigraphic order and radiometric dating provide the time frame.',
      '比较解剖区分同源结构（共同起源、功能可不同）、痕迹结构（退化但仍保留）与趋同结构（功能相似、独立起源）。 · Comparative anatomy distinguishes homologous structures (common origin, functions may differ), vestigial structures (reduced but retained), and analogous structures (similar function, independent origin).',
      '胚胎发育与发育调控基因（如 Hox 基因）显示深层同源性；胚胎相似不等于“重演祖先成体”。 · Embryonic development and developmental regulatory genes (such as Hox genes) reveal deep homology; embryonic similarity does not mean “recapitulating ancestral adults.”',
      '生物地理分布（岛屿特有种、大陆漂移、隔离与扩散）支持共同祖先与地理隔离下的分化。 · Biogeographic patterns (island endemics, continental drift, isolation, and dispersal) support common ancestry and divergence under geographic isolation.',
      '分子证据包括 DNA 与蛋白质序列相似度、通用遗传密码、假基因与基因重复；差异越小通常亲缘越近。 · Molecular evidence includes DNA and protein sequence similarity, the universal genetic code, pseudogenes, and gene duplication; smaller differences usually indicate closer relatedness.',
      '直接观察可记录当代进化：抗生素耐药、杀虫剂抗性、驯化与野外种群性状变化。 · Direct observation can document contemporary evolution: antibiotic resistance, pesticide resistance, domestication, and trait changes in wild populations.',
      '证据相互独立但可汇聚；进化理论由多重证据支持，不依赖单一“缺环”或单个化石。 · Lines of evidence are independent but can converge; evolutionary theory is supported by multiple lines of evidence and does not depend on a single “missing link” or fossil.'
    ],
    definition: '进化证据是支持生物共同祖先与自然选择过程的观察与数据，包括化石、比较解剖、胚胎发育、生物地理、分子序列与直接观察。不同证据回答不同问题：化石给时间与形态，解剖给结构同源性，分子给序列差异，地理给分布格局。 · Evidence for evolution is observations and data supporting common ancestry and natural selection, including fossils, comparative anatomy, embryology, biogeography, molecular sequences, and direct observation. Different evidence answers different questions: fossils give time and form, anatomy gives structural homology, molecules give sequence differences, and geography gives distribution patterns.',
    intuition: '进化证据像法庭上的多类证词：化石说明“何时与什么样”，解剖说明“结构像谁”，分子说明“序列差多少”，地理说明“为什么分布在这里”，彼此独立却能拼成同一个故事。 · Evolutionary evidence is like multiple kinds of testimony in court: fossils say “when and what it looked like,” anatomy says “whose structure it resembles,” molecules say “how much the sequences differ,” and geography says “why it lives here”; these independent lines can fit into one story.',
    intuitionDetailed: '同源结构来自共同祖先，即使功能已经改变（如脊椎动物前肢）；趋同结构来自相似选择压力但不同祖先（如鸟翼与昆虫翅）；痕迹结构是退化但仍存在的同源结构（如人的尾骨）。分子钟用序列差异估算分化时间，但需要化石或已知事件校准。化石记录不完整，缺失过渡类型并不否定进化，只是采样与保存偏差。 · Homologous structures come from a common ancestor even if functions have changed (such as vertebrate forelimbs); analogous structures arise from similar selection pressures in different ancestors (such as bird wings and insect wings); vestigial structures are reduced but still present homologous structures (such as the human coccyx). Molecular clocks use sequence differences to estimate divergence times but require calibration with fossils or known events. The fossil record is incomplete, and missing transitional forms do not refute evolution; they reflect sampling and preservation biases.',
    formulas: [
      { latex: '\\text{同源结构}\\Rightarrow\\text{共同祖先}', note: '结构同源需要发育与解剖证据。 · Structural homology requires developmental and anatomical evidence.' },
      { latex: '\\text{序列差异}\\uparrow\\;\\Rightarrow\\;\\text{分化时间}\\uparrow', note: '分子钟的简化逻辑，需要校准。 · Simplified molecular-clock logic, which requires calibration.' },
      { latex: '\\text{化石}+\\text{解剖}+\\text{分子}+\\text{地理}\\Rightarrow\\text{汇聚证据}', note: '多类独立证据共同支持结论。 · Multiple independent lines of evidence jointly support a conclusion.' }
    ],
    derivationNotes: [
      { from: '化石与地层 · Fossils and strata', to: '时间与形态序列 · Time and morphological series', note: '地层顺序与放射性定年给出相对与绝对年代。 · Stratigraphic order and radiometric dating give relative and absolute ages.' },
      { from: '比较解剖 · Comparative anatomy', to: '同源性推断 · Homology inference', note: '结构、发育与化石证据共同判断共同祖先。 · Structural, developmental, and fossil evidence together identify common ancestry.' },
      { from: '分子序列 · Molecular sequences', to: '亲缘关系 · Relatedness', note: '序列差异经分子钟校准后可估算分化时间。 · After molecular-clock calibration, sequence differences can estimate divergence times.' },
    ],
    connections: [
      '先修：7.1–7.5 的自然选择与群体遗传。 · Prerequisite: natural selection and population genetics in 7.1–7.5.',
      '后续：7.7 共同祖先与 7.9 系统发生把证据组织成树。 · Follow-up: common ancestry in 7.7 and phylogeny in 7.9 organize the evidence into trees.',
      '应用：保护生物学、疾病溯源与生物分类。 · Application: conservation biology, disease tracing, and biological classification.',
    ],
    conditions: [
      '化石记录存在保存偏差，缺失不等于不存在 · The fossil record has preservation biases; absence is not evidence of nonexistence',
      '分子钟需要化石或地质事件校准，不同基因速率不同 · Molecular clocks require calibration with fossils or geological events, and different genes evolve at different rates',
      '同源与趋同的区分需要发育、结构或化石证据 · Distinguishing homology from convergence requires developmental, structural, or fossil evidence',
      '生物地理格局需考虑大陆漂移、扩散与灭绝 · Biogeographic patterns must consider continental drift, dispersal, and extinction',
      '单个证据通常不足以确定整棵系统发育树 · A single line of evidence is usually insufficient to determine an entire phylogenetic tree'
    ],
    keyPoints: [
      '化石提供时间与过渡形态 · Fossils provide time and transitional forms',
      '同源、趋同与痕迹结构意义不同 · Homologous, analogous, and vestigial structures have different meanings',
      '胚胎与发育基因显示深层同源 · Embryos and developmental genes reveal deep homology',
      '生物地理支持共同祖先与隔离 · Biogeography supports common ancestry and isolation',
      '分子序列差异可推断亲缘 · Molecular sequence differences can infer relatedness',
      '直接观察记录当代进化 · Direct observation documents contemporary evolution',
      '多类独立证据汇聚 · Multiple independent lines of evidence converge'
    ],
    misconceptions: [
      '认为“理论”只是猜测，忽略多重证据支持 · Treating a “theory” as mere guesswork and ignoring multiple lines of supporting evidence',
      '认为缺少某个过渡化石就否定进化 · Assuming a missing transitional fossil refutes evolution',
      '把功能相似的结构都当作同源 · Treating all functionally similar structures as homologous',
      '认为胚胎早期相似等于重演祖先成体 · Assuming early embryonic similarity means recapitulating ancestral adults',
      '认为分子差异越大亲缘一定越远（需考虑基因速率与水平转移） · Assuming greater molecular difference always means more distant relatedness (gene-specific rates and horizontal transfer must be considered)',
      '认为一棵树只靠一个基因就能确定 · Assuming a tree can be determined from a single gene'
    ],
    examples: [
      {
        title: '例 1 · 鲸的过渡化石 · Example 1 · Whale Transitional Fossils',
        prompt: '古鲸化石显示后肢逐渐缩小、耳部结构变化。这些证据支持什么？ · Fossil whales show progressively reduced hind limbs and changing ear structure. What do these observations support?',
        steps: [
          '化石按地层年代排列，显示从陆生到水生的形态过渡。 · Fossils arranged by stratigraphic age show a morphological transition from terrestrial to aquatic life.',
          '后肢缩小与耳部变化是逐步累积的，而非突然出现。 · Hind-limb reduction and ear changes accumulated gradually rather than appearing suddenly.',
          '分子数据把鲸归入偶蹄类，与化石证据一致。 · Molecular data place whales within artiodactyls, consistent with the fossil evidence.'
        ],
        solution: '化石与分子证据共同支持鲸从陆生祖先逐步适应水生。 · Fossil and molecular evidence together support a gradual transition of whales from terrestrial ancestors to aquatic life.'
      },
      {
        title: '例 2 · 同源还是趋同 · Example 2 · Homology or Convergence',
        prompt: '蝙蝠翼、鸟翼与昆虫翅在功能上都用于飞行，如何判断哪些是同源？ · Bat wings, bird wings, and insect wings all function in flight. How can we determine which are homologous?',
        steps: [
          '蝙蝠翼与鸟翼的骨骼排列相似，作为脊椎动物前肢来自共同祖先，因此在这一层次上同源。 · Bat and bird wings have similar bone arrangements and, as vertebrate forelimbs, share a common ancestor, so they are homologous at that level.',
          '但两者作为飞行翼面是独立演化的，功能相似而起源不同，属于趋同（类比）。 · However, as flight surfaces they evolved independently, with similar function but different origins, so they are analogous.',
          '昆虫翅由外骨骼形成，胚胎来源与脊椎动物前肢不同，与蝙蝠翼、鸟翼都不同源。 · Insect wings form from the exoskeleton and have a different embryonic origin from vertebrate forelimbs, so they are not homologous to bat or bird wings.'
        ],
        solution: '作为前肢骨骼，蝙蝠翼与鸟翼同源；作为飞行翼面，二者与昆虫翅都是趋同。区分要看比较的层次。 · As forelimb bones, bat and bird wings are homologous; as flight surfaces, both are analogous to insect wings. The distinction depends on the level of comparison.'
      },
      {
        title: '例 3 · 分子证据 · Example 3 · Molecular Evidence',
        prompt: '为什么核糖体 RNA 序列适合比较远缘物种的亲缘关系？ · Why are ribosomal RNA sequences useful for comparing relatedness among distantly related species?',
        steps: [
          'rRNA 在所有生物中都存在且功能保守。 · rRNA is present in all organisms and its function is conserved.',
          '保守区域变化慢，可保留深层分化信号。 · Conserved regions change slowly and retain signals of deep divergence.',
          '差异大小可与化石校准后估算分化时间。 · The amount of difference can be calibrated with fossils to estimate divergence time.'
        ],
        solution: 'rRNA 通用且保守，适合推断远缘类群的亲缘关系。 · rRNA is universal and conserved, making it suitable for inferring relationships among distantly related groups.'
      }
    ],
    examTips: [
      'CED Unit 7：进化证据 · CED Unit 7: Evidence of evolution',
      '先判断题目问的是哪一类证据，再写它能回答什么问题 · First identify which type of evidence the question asks about, then state what it can answer.',
      '同源、趋同、痕迹结构用“起源/功能/发育”区分 · Distinguish homologous, analogous, and vestigial structures using origin, function, and development.',
      '分子钟题强调“需要校准” · For molecular-clock questions, emphasize the need for calibration.',
      'FRQ 用多类证据汇聚，不要只写一个化石 · In FRQs, use multiple converging lines of evidence, not just one fossil.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.1', title: '自然选择导论 · Introduction to Natural Selection', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.7', title: '共同祖先 · Common Ancestry', relation: '后续 · Follow-up' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.9', title: '系统发生 · Phylogeny', relation: '应用 · Application' },
      { subject: 'bio', chapterId: 'bio-u2', code: '2.10', title: '细胞区隔起源 · Origins of Cellular Compartments', relation: '相关 · Related' }
    ],
    development: ['化石记录 · Fossil record', '比较解剖 · Comparative anatomy', '胚胎与发育 · Embryos and development', '生物地理 · Biogeography', '分子证据 · Molecular evidence', '直接观察与证据汇聚 · Direct observation and converging evidence'],
    checks: ['同源结构与趋同结构如何区分？ · How are homologous and analogous structures distinguished?', '为什么化石记录不完整仍能支持进化？ · Why can an incomplete fossil record still support evolution?', '分子钟为什么需要校准？ · Why do molecular clocks require calibration?'],
    summary: '进化证据来自化石、解剖、胚胎、地理、分子与直接观察；多类独立证据汇聚，支持共同祖先与自然选择。 · Evidence for evolution comes from fossils, anatomy, embryos, biogeography, molecules, and direct observation; multiple independent lines of evidence converge to support common ancestry and natural selection.'
  },

  'bio/bio-u7/7.8': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能说明进化在可观察的时间尺度上持续发生，并给出直接证据。 · Explain that evolution continues on observable time scales and give direct evidence.',
      '能分析选择、基因流、遗传漂变与突变如何驱动当代种群变化。 · Analyze how selection, gene flow, genetic drift, and mutation drive contemporary population change.',
      '能区分微进化与物种形成，并解释进化不是定向进步。 · Distinguish microevolution from speciation and explain that evolution is not directed progress.'
    ],
    essentialKnowledge: [
      '进化是种群等位基因频率随世代变化；只要可遗传变异被选择、漂变或基因流改变，进化就会继续。 · Evolution is change in allele frequencies in a population across generations; whenever heritable variation is altered by selection, drift, or gene flow, evolution continues.',
      '直接观察包括抗生素耐药、杀虫剂抗性、HIV 抗药性、达尔文雀喙形变化、桦尺蛾黑化与捕捞导致的鱼类生活史变化。 · Direct observations include antibiotic resistance, pesticide resistance, HIV drug resistance, changes in Darwin’s finch beak shape, industrial melanism in peppered moths, and fishing-induced changes in fish life history.',
      '人类活动是强选择压力：捕捞、狩猎、土地利用、气候变化与药物使用都能改变性状与生活史。 · Human activities are strong selective pressures: fishing, hunting, land use, climate change, and drug use can all alter traits and life histories.',
      '基因流可引入新等位基因或抵消局部选择；遗传漂变在小种群中更强，可随机固定或丢失等位基因。 · Gene flow can introduce new alleles or counteract local selection; genetic drift is stronger in small populations and can randomly fix or lose alleles.',
      '当代进化不一定形成新物种；微进化是物种形成的基础，但生殖隔离还需要额外条件。 · Contemporary evolution does not necessarily produce new species; microevolution is the foundation of speciation, but reproductive isolation requires additional conditions.',
      '进化没有预定方向或终点；适应是局部、相对的，环境改变可能使原有适应变成负担。 · Evolution has no predetermined direction or endpoint; adaptation is local and relative, and environmental change can turn a former adaptation into a burden.'
    ],
    definition: '延续与变化指进化在当代种群中仍在发生。种群内可遗传的变异经过选择、漂变、基因流与突变，使等位基因频率随世代改变；抗生素耐药与捕捞诱导的性状变化就是可观察的当代进化。 · Continuity and change means evolution is still occurring in contemporary populations. Heritable variation within a population is altered by selection, drift, gene flow, and mutation, changing allele frequencies across generations; antibiotic resistance and fishing-induced trait changes are observable examples of contemporary evolution.',
    intuition: '进化不是博物馆里的过去时；它正在抗生素、渔网、药物与温度计下发生。每一代都可能改变种群的遗传组成。 · Evolution is not a past tense confined to museums; it is happening under antibiotics, fishing nets, drugs, and thermometers. Every generation can change a population’s genetic composition.',
    intuitionDetailed: '当一个种群中出现可遗传的抗药变异，药物使用会杀死敏感个体，耐药个体留下更多后代，耐药等位基因频率上升。类似地，捕捞大型个体可能选择体型较小、较早繁殖的个体；气候变化可改变物候与分布。观察当代进化需要基线数据、时间序列与对照，以区分个体 acclimation 与种群遗传变化。 · When a heritable resistance variant appears in a population, drug use kills susceptible individuals, resistant individuals leave more offspring, and the frequency of the resistance allele rises. Similarly, harvesting large individuals can select for smaller, earlier-reproducing fish, and climate change can alter phenology and distribution. Observing contemporary evolution requires baseline data, time series, and controls to distinguish individual acclimation from population genetic change.',
    formulas: [
      { latex: '\\Delta p=p_{t+1}-p_{t}', note: '等位基因频率的世代变化；\\(\\Delta p\\neq0\\) 表示微进化。 · Change in allele frequency across generations; \\(\\Delta p\\neq0\\) indicates microevolution.' },
      { latex: '\\text{进化}=\\text{种群等位基因频率改变}', note: '不是个体在生命周期内改变基因。 · This is not an individual changing its genes during its lifetime.' }
    ],
    derivationNotes: [
      { from: '可遗传变异 · Heritable variation', to: '选择响应 · Selection response', note: '差异繁殖使有利等位基因频率升高。 · Differential reproduction raises the frequency of advantageous alleles.' },
      { from: '环境变化 · Environmental change', to: '适合度改变 · Fitness change', note: '同一性状在新环境中的相对适合度可能翻转。 · The relative fitness of the same trait may reverse in a new environment.' },
      { from: '频率变化 · Frequency change', to: '微进化 · Microevolution', note: '等位基因频率的世代变化就是微进化，不必然形成新物种。 · Change in allele frequencies across generations is microevolution and does not necessarily produce a new species.' },
    ],
    connections: [
      '先修：7.2 自然选择与 7.4 群体遗传。 · Prerequisite: natural selection in 7.2 and population genetics in 7.4.',
      '后续：7.10 物种形成与 7.12 种群变异。 · Follow-up: speciation in 7.10 and population variation in 7.12.',
      '应用：抗药性管理、渔业与保护政策。 · Application: resistance management, fisheries, and conservation policy.',
    ],
    conditions: [
      '需要可遗传的变异与差异繁殖成功率 · Heritable variation and differential reproductive success are required',
      '观察当代进化需要基线、时间序列与适当对照 · Observing contemporary evolution requires baselines, time series, and appropriate controls',
      '个体 acclimation 不是进化；只有种群遗传组成改变才是 · Individual acclimation is not evolution; only changes in a population’s genetic composition count',
      '小种群中遗传漂变可能掩盖或加速选择 · In small populations, genetic drift can mask or accelerate selection',
      '当代微进化不必然导致生殖隔离 · Contemporary microevolution does not necessarily lead to reproductive isolation'
    ],
    keyPoints: [
      '进化是种群频率变化 · Evolution is change in population frequencies',
      '抗生素与杀虫剂耐药是直接证据 · Antibiotic and pesticide resistance are direct evidence',
      '人类活动是强选择压力 · Human activity is a strong selective pressure',
      '基因流与漂变可增强或抵消选择 · Gene flow and drift can reinforce or counteract selection',
      '微进化不等于物种形成 · Microevolution is not speciation',
      '进化没有预定方向 · Evolution has no predetermined direction'
    ],
    misconceptions: [
      '认为进化太慢，无法在人类时间尺度观察 · Assuming evolution is too slow to observe on human time scales',
      '认为进化总是让生物“更好”或更复杂 · Assuming evolution always makes organisms “better” or more complex',
      '认为个体在一生中为了适应而改变基因 · Assuming individuals change their genes to adapt during their lifetime',
      '认为只要发生进化就会形成新物种 · Assuming any evolution produces a new species',
      '认为人类已经停止进化 · Assuming humans have stopped evolving'
    ],
    examples: [
      {
        title: '例 1 · 抗生素耐药 · Example 1 · Antibiotic Resistance',
        prompt: '为什么抗生素滥用会加速耐药菌种群的形成？ · Why does antibiotic misuse accelerate the emergence of resistant bacterial populations?',
        steps: [
          '细菌种群中原本存在随机抗药变异。 · Random resistance variants already exist in the bacterial population.',
          '抗生素杀死敏感菌，耐药菌存活并繁殖。 · Antibiotics kill susceptible bacteria, while resistant bacteria survive and reproduce.',
          '耐药等位基因频率逐代升高。 · The frequency of resistance alleles rises across generations.'
        ],
        solution: '抗生素作为选择压力筛选已有抗药变异，使耐药菌比例上升。 · Antibiotics act as a selective pressure that screens existing resistance variants, increasing the proportion of resistant bacteria.'
      },
      {
        title: '例 2 · 达尔文雀 · Example 2 · Darwin’s Finches',
        prompt: '干旱年份坚果变大变硬，雀鸟喙形如何响应？ · In drought years, seeds become larger and harder. How does finch beak shape respond?',
        steps: [
          '喙更大更深的个体更能打开硬壳种子。 · Individuals with larger, deeper beaks are better at opening hard-shelled seeds.',
          '干旱时小种子减少，大喙个体存活与繁殖更好。 · During drought, small seeds become scarce, so large-beaked individuals survive and reproduce better.',
          '种群平均喙深增加，这是方向性选择。 · Average beak depth in the population increases, which is directional selection.'
        ],
        solution: '食物变化改变适合度，使喙形分布向更大更深移动。 · The food change alters fitness and shifts the beak-shape distribution toward larger and deeper beaks.'
      },
      {
        title: '例 3 · 捕捞选择 · Example 3 · Fishing Selection',
        prompt: '长期捕捞大型鱼为什么可能导致鱼群体型变小、性成熟提前？ · Why can long-term harvesting of large fish lead to smaller body size and earlier sexual maturity in fish populations?',
        steps: [
          '捕捞偏好大型个体，大型基因型繁殖机会减少。 · Fishing favors large individuals, reducing the reproductive opportunities of large genotypes.',
          '体型较小、较早成熟的个体更可能存活并繁殖。 · Smaller, earlier-maturing individuals are more likely to survive and reproduce.',
          '生活史性状在种群中发生遗传改变。 · Life-history traits undergo genetic change in the population.'
        ],
        solution: '捕捞作为选择压力改变生活史，属于当代进化。 · Fishing acts as a selective pressure that changes life history, which is contemporary evolution.'
      }
    ],
    examTips: [
      'CED Unit 7：延续与变化 · CED Unit 7: Continuity and change',
      '区分个体 acclimation 与种群进化 · Distinguish individual acclimation from population evolution.',
      '直接观察题写“基线—选择—频率变化” · For direct-observation questions, write “baseline—selection—frequency change.”',
      '不要把微进化直接等同于新物种形成 · Do not equate microevolution directly with speciation.',
      '强调进化无预定方向，适应是相对的 · Emphasize that evolution has no predetermined direction and that adaptation is relative.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择 · Natural Selection', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.4', title: '群体遗传 · Population Genetics', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.6', title: '进化证据 · Evidence for Evolution', relation: '证据 · Evidence' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.10', title: '物种形成 · Speciation', relation: '后续 · Follow-up' }
    ],
    development: ['当代进化的定义 · Defining contemporary evolution', '直接观察案例 · Direct-observation cases', '人类选择压力 · Human selective pressures', '漂变与基因流 · Drift and gene flow', '微进化与物种形成 · Microevolution and speciation'],
    checks: ['为什么抗生素耐药是当代进化的证据？ · Why is antibiotic resistance evidence of contemporary evolution?', '个体 acclimation 与种群进化有何区别？ · What is the difference between individual acclimation and population evolution?', '微进化一定导致新物种吗？ · Does microevolution always lead to a new species?'],
    summary: '进化在当代持续发生；选择、漂变、基因流与突变改变种群频率，但微进化不必然形成新物种，也没有预定方向。 · Evolution continues in the present; selection, drift, gene flow, and mutation change population frequencies, but microevolution does not necessarily produce new species and has no predetermined direction.'
  },

  'bio/bio-u7/7.12': {
    enrichedAt: "batch2",
    learningObjectives: [
      "能区分遗传变异与环境变异，并说明表型变异的来源。 · Distinguish genetic variation from environmental variation and explain the sources of phenotypic variation.",
      "能计算等位基因频率与杂合度，并用它们描述种群遗传多样性。 · Calculate allele frequencies and heterozygosity, and use them to describe genetic diversity in populations.",
      "能解释选择、漂变、基因流与突变如何维持或减少种群内变异。 · Explain how selection, drift, gene flow, and mutation maintain or reduce variation within populations."
    ],
    essentialKnowledge: [
      "种群内个体在基因型与表型上存在差异；变异是进化的原料，没有变异就没有可选择的对象。 · Individuals in a population differ in genotype and phenotype; variation is the raw material of evolution, and without variation there is nothing for selection to act on.",
      "遗传变异来自突变、减数分裂重组与随机受精、基因流；突变是全新等位基因的最终来源。 · Genetic variation comes from mutation, recombination during meiosis, random fertilization, and gene flow; mutation is the ultimate source of new alleles.",
      "表型变异还受环境影响；离散性状（如血型）由少数基因决定，连续性状（如身高）常由多基因控制并受环境修饰。 · Phenotypic variation is also influenced by the environment; discrete traits (such as blood type) are controlled by a few genes, whereas continuous traits (such as height) are often polygenic and modified by the environment.",
      "等位基因频率描述种群遗传组成；杂合度与多态性衡量遗传多样性；哈代–温伯格平衡可作为零模型。 · Allele frequencies describe the genetic composition of a population; heterozygosity and polymorphism measure genetic diversity; Hardy–Weinberg equilibrium serves as a null model.",
      "选择通常减少变异，但杂合子优势、频率依赖选择与时空异质性可以维持变异；漂变在小种群中减少变异。 · Selection usually reduces variation, but heterozygote advantage, frequency-dependent selection, and spatial or temporal heterogeneity can maintain it; drift reduces variation in small populations.",
      "种群间变异可用地理渐变群、生态型与遗传分化来描述；种群内与种群间变异共同构成生物多样性。 · Variation among populations can be described by geographic clines, ecotypes, and genetic differentiation; within- and among-population variation together make up biodiversity."
    ],
    definition: "种群变异指同一物种不同个体在基因型与表型上的差异。遗传变异来自突变、重组与基因流，环境也造成表型差异；等位基因频率、杂合度与多态性可量化种群遗传多样性。 · Population variation refers to differences in genotype and phenotype among individuals of the same species. Genetic variation comes from mutation, recombination, and gene flow, while the environment also produces phenotypic differences; allele frequencies, heterozygosity, and polymorphism quantify genetic diversity in populations.",
    intuition: "种群像一副牌：花色和点数是离散差异，体重和身高像连续刻度；洗牌、换牌与丢牌都会改变这副牌的多样性。 · A population is like a deck of cards: suits and ranks are discrete differences, while weight and height are more like a continuous scale; shuffling, swapping, and losing cards all change the diversity of the deck.",
    intuitionDetailed: "等位基因频率是某个等位基因在种群所有拷贝中所占比例；杂合度是杂合个体比例或期望杂合度。两个等位基因频率为 \\(p\\) 与 \\(q\\) 时，哈代–温伯格期望杂合度为 \\(2pq\\)。选择可以定向清除不利等位基因，但杂合子优势能让隐性等位基因以杂合形式保留；频率依赖选择让常见或稀有类型交替占优，从而维持多态性。Shannon 指数 \\(H_{\\mathrm{Sh}}\\) 属于群落多样性，本节不展开，完整定义、均匀度与计算见 8.6。 · The allele frequency is the proportion of a given allele among all copies in the population; heterozygosity is the fraction of heterozygous individuals or the expected heterozygosity. For two alleles with frequencies \\(p\\) and \\(q\\), the Hardy–Weinberg expected heterozygosity is \\(2pq\\). Selection can directionally remove disadvantageous alleles, but heterozygote advantage can keep a recessive allele in heterozygous form; frequency-dependent selection lets common or rare types alternate in advantage and thus maintains polymorphism. The Shannon index \\(H_{\\mathrm{Sh}}\\) belongs to community diversity; this section does not expand it—see 8.6 for the full definition, evenness, and computation.",
    formulas: [
      {
        latex: "p=\\dfrac{2N_{AA}+N_{Aa}}{2N}",
        note: "一对等位基因中 \\(A\\) 的频率；\\(N\\) 为个体总数。 · Frequency of \\(A\\) among one pair of alleles; \\(N\\) is the total number of individuals."
      },
      {
        latex: "H=2pq",
        note: "两个等位基因时的期望杂合度。 · Expected heterozygosity for two alleles."
      }
    ],
    derivationNotes: [
      {
        from: "突变与重组 · Mutation and recombination",
        to: "遗传变异 · Genetic variation",
        note: "突变产生新等位基因，重组与随机受精重新组合它们。 · Mutation creates new alleles, and recombination and random fertilization reshuffle them."
      },
      {
        from: "基因型频率 · Genotype frequencies",
        to: "等位基因频率 · Allele frequencies",
        note: "按拷贝数把基因型频率转换为等位基因频率。 · Convert genotype frequencies to allele frequencies by counting copies."
      },
      {
        from: "选择与漂变 · Selection and drift",
        to: "变异维持或丢失 · Maintenance or loss of variation",
        note: "杂合子优势与频率依赖选择可维持变异，漂变在小种群中丢失变异。 · Heterozygote advantage and frequency-dependent selection can maintain variation, whereas drift loses variation in small populations."
      }
    ],
    connections: [
      "先修：5.2 减数分裂与遗传多样性。 · Prerequisite: meiosis and genetic diversity in 5.2.",
      "后续：7.13 生命起源之后，变异为自然选择提供原料。 · Follow-up: after the origin of life in 7.13, variation supplies the raw material for natural selection.",
      "应用：保护遗传学、作物育种与疾病抗性管理。 · Application: conservation genetics, crop breeding, and management of disease resistance."
    ],
    conditions: [
      "等位基因频率描述种群，不描述单个个体 · Allele frequencies describe populations, not individuals.",
      "期望杂合度 \\(2pq\\) 假设随机交配与哈代–温伯格条件 · Expected heterozygosity \\(2pq\\) assumes random mating and Hardy–Weinberg conditions.",
      "连续性状的遗传力估计需要控制环境 · Estimating heritability of continuous traits requires controlling the environment.",
      "小样本的等位基因频率估计有较大抽样误差 · Allele-frequency estimates from small samples have substantial sampling error.",
      "选择维持变异需要特定机制，如杂合子优势或频率依赖选择 · Selection maintains variation only through specific mechanisms, such as heterozygote advantage or frequency-dependent selection."
    ],
    keyPoints: [
      "变异是进化的原料 · Variation is the raw material of evolution.",
      "突变是全新等位基因的最终来源 · Mutation is the ultimate source of new alleles.",
      "重组与基因流重新组合变异 · Recombination and gene flow reshuffle variation.",
      "离散性状 vs 连续性状 · Discrete versus continuous traits.",
      "等位基因频率、杂合度、多态性量化多样性 · Allele frequencies, heterozygosity, and polymorphism quantify diversity.",
      "杂合子优势与频率依赖选择维持变异 · Heterozygote advantage and frequency-dependent selection maintain variation.",
      "漂变在小种群中减少变异 · Drift reduces variation in small populations."
    ],
    misconceptions: [
      "认为所有表型变异都是遗传的 · Assuming all phenotypic variation is genetic.",
      "认为连续性状没有遗传基础 · Assuming continuous traits have no genetic basis.",
      "认为自然选择总是减少变异 · Assuming natural selection always reduces variation.",
      "认为杂合度高的种群一定更适合所有环境 · Assuming a population with high heterozygosity is necessarily better adapted to every environment.",
      "认为个体可以“进化”出新的等位基因 · Assuming an individual can “evolve” a new allele."
    ],
    examples: [
      {
        title: "例 1 · 离散与连续 · Discrete and Continuous Traits",
        prompt: "ABO 血型与人类身高分别属于哪类性状？ · Are ABO blood type and human height discrete or continuous traits?",
        steps: [
          "ABO 血型由少数等位基因决定，表现为离散类别。 · ABO blood type is determined by a few alleles and appears as discrete categories.",
          "身高由多基因累加并受营养等环境影响，呈连续分布。 · Height is polygenic and influenced by nutrition and other environmental factors, producing a continuous distribution.",
          "两类性状都可有遗传基础，但统计与遗传分析方法不同。 · Both kinds of traits can have a genetic basis, but their statistical and genetic analyses differ."
        ],
        solution: "血型为离散性状；身高为连续、多基因性状。 · Blood type is a discrete trait; height is a continuous, polygenic trait."
      },
      {
        title: "例 2 · 等位基因频率 · Allele Frequencies",
        prompt: "200 个个体中，80 个 \\(AA\\)、100 个 \\(Aa\\)、20 个 \\(aa\\)。求 \\(p\\)、\\(q\\) 与期望杂合度。 · Among 200 individuals, 80 are \\(AA\\), 100 are \\(Aa\\), and 20 are \\(aa\\). Find \\(p\\), \\(q\\), and the expected heterozygosity.",
        steps: [
          "\\(p=\\dfrac{2(80)+100}{2(200)}=\\dfrac{260}{400}=0.65\\)。 · Substitute the genotype counts: \\(p=\\dfrac{2(80)+100}{2(200)}=\\dfrac{260}{400}=0.65\\).",
          "\\(q=1-p=0.35\\)。 · Since \\(q=1-p\\), \\(q=0.35\\).",
          "期望杂合度 \\(H=2pq=2(0.65)(0.35)=0.455\\)。 · Expected heterozygosity \\(H=2pq=2(0.65)(0.35)=0.455\\)."
        ],
        solution: "\\(p=0.65\\)，\\(q=0.35\\)，期望杂合度约 \\(0.455\\)。 · \\(p=0.65\\), \\(q=0.35\\), and the expected heterozygosity is about \\(0.455\\).",
        solutionLatex: "p=0.65,\\;q=0.35,\\;H=0.455"
      },
      {
        title: "例 3 · 杂合子优势 · Heterozygote Advantage",
        prompt: "为什么镰状细胞等位基因在疟疾流行地区仍以较高频率存在？ · Why does the sickle-cell allele persist at relatively high frequency in regions where malaria is prevalent?",
        steps: [
          "\\(HbS\\) 纯合子常患严重贫血，适合度低。 · \\(HbS\\) homozygotes often have severe anemia and low fitness.",
          "\\(\\mathrm{HbA}:\\mathrm{HbS}\\) 杂合子对疟疾有一定抵抗力，适合度较高。 · \\(\\mathrm{HbA}:\\mathrm{HbS}\\) heterozygotes have some resistance to malaria and higher fitness.",
          "杂合子优势使 \\(HbS\\) 等位基因在种群中维持。 · Heterozygote advantage maintains the \\(HbS\\) allele in the population."
        ],
        solution: "杂合子优势平衡了纯合子的适合度损失，维持遗传变异。 · Heterozygote advantage balances the fitness loss of homozygotes and maintains genetic variation."
      }
    ],
    examTips: [
      "CED Unit 7：种群变异 · CED Unit 7: Variation in populations",
      "先判断变异是遗传还是环境造成 · First decide whether variation is genetic or environmental.",
      "等位基因频率用“拷贝数”计算，不要只数个体 · Calculate allele frequencies from allele copies, not just by counting individuals.",
      "杂合度 \\(2pq\\) 需要随机交配假设 · Heterozygosity \\(2pq\\) assumes random mating.",
      "维持变异的机制：杂合子优势、频率依赖选择、时空异质性 · Mechanisms that maintain variation: heterozygote advantage, frequency-dependent selection, and spatial or temporal heterogeneity.",
      "漂变与选择都可改变频率，但机制不同 · Drift and selection both change allele frequencies, but by different mechanisms."
    ],
    related: [
      {
        subject: "bio",
        chapterId: "bio-u7",
        code: "7.2",
        title: "自然选择 · Natural Selection",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "bio",
        chapterId: "bio-u7",
        code: "7.4",
        title: "群体遗传 · Population Genetics",
        relation: "先修 · Prerequisite"
      },
      {
        subject: "bio",
        chapterId: "bio-u7",
        code: "7.5",
        title: "哈代–温伯格 · Hardy–Weinberg Equilibrium",
        relation: "工具 · Tool"
      },
      {
        subject: "bio",
        chapterId: "bio-u5",
        code: "5.2",
        title: "减数分裂与遗传多样性 · Meiosis and Genetic Diversity",
        relation: "机制 · Mechanism"
      },
      {
        subject: "bio",
        chapterId: "bio-u8",
        code: "8.6",
        title: "生物多样性 · Biodiversity",
        relation: "延伸 · Extension"
      }
    ],
    development: [
      "变异的层次 · Levels of variation",
      "遗传变异来源 · Sources of genetic variation",
      "离散与连续性状 · Discrete and continuous traits",
      "等位基因频率与杂合度 · Allele frequencies and heterozygosity",
      "维持变异的机制 · Mechanisms that maintain variation"
    ],
    checks: [
      "遗传变异与环境变异如何区分？ · How can genetic variation be distinguished from environmental variation?",
      "为什么自然选择不总是减少变异？ · Why does natural selection not always reduce variation?",
      "等位基因频率与杂合度分别描述什么？ · What do allele frequency and heterozygosity each describe?"
    ],
    summary: "种群变异由遗传与环境共同造成；等位基因频率、杂合度与多态性量化多样性，选择、漂变与基因流改变变异。 · Population variation is shaped by both genetics and the environment; allele frequencies, heterozygosity, and polymorphism quantify diversity, while selection, drift, and gene flow change variation."
  },
  'bio/bio-u7/7.13': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分生命起源的化学进化与生物进化，并说明各自的时间尺度。 · Distinguish chemical evolution from biological evolution in the origin of life and explain their time scales.',
      '能评价原始汤、RNA 世界、热液喷口与原始细胞假说的证据与局限。 · Evaluate the evidence and limitations of the primordial soup, RNA world, hydrothermal vent, and protocell hypotheses.',
      '能解释最早细胞、代谢与遗传系统的早期演化顺序。 · Explain the early sequence of the first cells, metabolism, and genetic systems.'
    ],
    essentialKnowledge: [
      '地球约 46 亿年，最早生命证据约 35 至 38 亿年前；生命起源研究非生命物质如何形成可自我复制、可进化的系统。 · Earth is about 4.6 billion years old, and the earliest evidence of life dates to about 3.5–3.8 billion years ago; the origin of life studies how nonliving matter formed systems capable of self-replication and evolution.',
      '早期地球缺氧，火山活动、紫外线、闪电、热液与潮汐提供能量；有机分子可由无机物合成，Miller–Urey 实验证明氨基酸等可非生物生成。 · Early Earth was anoxic, and volcanic activity, ultraviolet light, lightning, hydrothermal vents, and tides supplied energy; organic molecules can be synthesized from inorganic substances, and the Miller–Urey experiment showed that amino acids and other molecules can form abiotically.',
      'RNA 世界假说认为 RNA 既能储存遗传信息又能催化反应（核酶），可先于 DNA 与蛋白质出现；随后 DNA 更稳定，蛋白质催化更多样。 · The RNA world hypothesis proposes that RNA can both store genetic information and catalyze reactions (ribozymes), so it may have preceded DNA and proteins; later, DNA became more stable and proteins became more versatile catalysts.',
      '原始细胞假说认为脂质囊泡包裹核酸与代谢物，形成内外分隔；膜的选择透过性让包含有利分子的囊泡生长、分裂并被选择。 · The protocell hypothesis proposes that lipid vesicles enclosed nucleic acids and metabolites, creating an inside–outside boundary; membrane selective permeability allowed vesicles containing advantageous molecules to grow, divide, and be selected.',
      '热液喷口、黏土表面与潮间带可提供浓缩、催化表面与能量梯度；具体起源地点仍是活跃研究领域。 · Hydrothermal vents, clay surfaces, and intertidal zones can provide concentration, catalytic surfaces, and energy gradients; the exact site of origin remains an active research area.',
      '最早细胞为原核生物；光合作用释放 O₂ 改变大气，随后真核细胞与内共生出现。 · The earliest cells were prokaryotes; photosynthesis released O₂ and changed the atmosphere, after which eukaryotic cells and endosymbiosis appeared.',
      '生命起源假说必须可检验；化学进化解释生命从何而来，生物进化解释生命出现后如何多样化，两者不能混为一谈。 · Hypotheses about the origin of life must be testable; chemical evolution explains where life came from, while biological evolution explains how life diversified after it appeared, and the two should not be conflated.'
    ],
    definition: '生命起源研究非生命物质如何通过化学进化形成可自我复制、可代谢并可进化的早期生命系统。主要假说包括原始汤、RNA 世界、热液喷口与原始细胞；最早生命证据约 35 至 38 亿年前，最早细胞为原核生物。 · The origin of life studies how nonliving matter formed early living systems capable of self-replication, metabolism, and evolution through chemical evolution. Major hypotheses include the primordial soup, RNA world, hydrothermal vents, and protocells; the earliest evidence of life dates to about 3.5–3.8 billion years ago, and the earliest cells were prokaryotes.',
    intuition: '生命起源像从散落的零件到能自我复制、能进化的小机器：先有可复制的化学，再有膜把反应包起来，最后选择让更会复制和维持自己的系统留下来。 · The origin of life is like going from scattered parts to a small machine that can self-replicate and evolve: first comes replicating chemistry, then a membrane that encloses the reactions, and finally selection retains systems that are better at copying and maintaining themselves.',
    intuitionDetailed: '化学进化需要构建块、能量、浓缩与模板。原始汤假说强调大气与能量驱动的有机合成；RNA 世界假说解决“先有核酸还是先有蛋白质”的循环问题；原始细胞假说解决“反应如何不被稀释”的问题。脂质囊泡可以自发生长、在机械扰动下分裂，并把内部核酸与外界分隔。一旦囊泡内的分子能自我复制并影响囊泡繁殖，自然选择就开始作用于化学系统。 · Chemical evolution requires building blocks, energy, concentration, and templates. The primordial soup hypothesis emphasizes atmosphere- and energy-driven organic synthesis; the RNA world hypothesis solves the circular “nucleic acid first or protein first” problem; the protocell hypothesis solves the problem of reactions being diluted away. Lipid vesicles can grow spontaneously, divide under mechanical disturbance, and separate internal nucleic acids from the outside. Once molecules inside a vesicle can self-replicate and affect vesicle reproduction, natural selection begins to act on chemical systems.',
    formulas: [
      { latex: '\\text{无机物}\\to\\text{有机单体}\\to\\text{聚合物}\\to\\text{原始细胞}\\to\\text{细胞}', note: '化学进化的简化顺序。 · Simplified sequence of chemical evolution.' },
      { latex: '\\text{RNA}\\Rightarrow\\text{信息储存}+\\text{催化}', note: 'RNA 世界假说的核心。 · The core of the RNA world hypothesis.' },
      { latex: '\\text{囊泡}+\\text{自我复制分子}\\Rightarrow\\text{可被选择的原始细胞}', note: '区隔化与复制结合。 · Compartmentalization combined with replication.' }
    ],
    derivationNotes: [
      { from: '无机分子 · Inorganic molecules', to: '有机单体 · Organic monomers', note: '早期地球能量源驱动非生物合成，实验可产生氨基酸等。 · Early-Earth energy sources drove abiotic synthesis, and experiments can produce amino acids and other molecules.' },
      { from: '有机单体 · Organic monomers', to: '可复制聚合物 · Replicating polymers', note: '浓缩、催化表面与模板促进聚合与复制。 · Concentration, catalytic surfaces, and templates promote polymerization and replication.' },
      { from: 'RNA 或类似分子 · RNA or similar molecules', to: '原始细胞 · Protocell', note: '膜包裹复制系统，形成可被选择的单位。 · A membrane encloses the replication system, forming a unit that can be selected.' },
    ],
    connections: [
      '先修：1.2 元素与大分子，理解生命化学基础。 · Prerequisite: elements and macromolecules in 1.2 provide the chemical foundation of life.',
      '后续：2.10 细胞区隔起源与 7.6 进化证据。 · Follow-up: the origins of cellular compartments in 2.10 and evidence for evolution in 7.6.',
      '应用：天体生物学与生命探测。 · Application: astrobiology and the search for life.',
    ],
    conditions: [
      '需要能量源、构建块、浓缩机制与可催化表面 · Energy sources, building blocks, concentration mechanisms, and catalytic surfaces are required',
      'RNA 世界需要 RNA 自复制与催化活性，实验室已发现多种核酶 · The RNA world requires RNA self-replication and catalytic activity; many ribozymes have been found in the laboratory',
      '原始细胞需要膜的生长与分裂，且内部反应能影响繁殖 · Protocells require membrane growth and division, and internal reactions must affect reproduction',
      '早期地球大气成分与温度仍有不确定性，实验模拟不能完全代表当时环境 · The composition and temperature of the early atmosphere remain uncertain, and experimental simulations cannot fully represent the ancient environment',
      '生命起源假说需要可检验的化学与地质证据 · Origin-of-life hypotheses require testable chemical and geological evidence'
    ],
    keyPoints: [
      '生命起源与生物进化不同 · The origin of life differs from biological evolution',
      '最早生命证据约 35 至 38 亿年前 · The earliest evidence of life dates to about 3.5–3.8 billion years ago',
      'Miller–Urey 证明有机分子可非生物合成 · Miller–Urey demonstrated abiotic synthesis of organic molecules',
      'RNA 世界：信息 + 催化 · RNA world: information plus catalysis',
      '原始细胞：膜包裹反应 · Protocells: membranes enclosing reactions',
      '热液喷口与黏土提供能量与表面 · Hydrothermal vents and clay provide energy and surfaces',
      '最早细胞为原核生物 · The earliest cells were prokaryotes',
      '光合作用改变大气 · Photosynthesis changed the atmosphere'
    ],
    misconceptions: [
      '认为生命起源是一步完成的事件 · Assuming the origin of life was a single-step event',
      '认为 Miller–Urey 实验直接证明了生命起源 · Assuming the Miller–Urey experiment directly proved the origin of life',
      '把 RNA 世界假说当作已完全证实的定论 · Treating the RNA world hypothesis as a fully confirmed fact',
      '认为生命起源与进化论是同一问题 · Assuming the origin of life and evolutionary theory are the same question',
      '认为最早细胞已经是真核细胞 · Assuming the earliest cells were already eukaryotic',
      '认为外太空来源假说可以替代地球化学进化研究 · Assuming an extraterrestrial-origin hypothesis can replace research on terrestrial chemical evolution'
    ],
    examples: [
      {
        title: '例 1 · Miller–Urey · Example 1 · Miller–Urey',
        prompt: 'Miller–Urey 实验用 \\(\\mathrm{CH_4}\\)、\\(\\mathrm{NH_3}\\)、\\(\\mathrm{H_2}\\) 与水在电火花下反应，得到了什么？说明了什么？ · The Miller–Urey experiment reacted \\(\\mathrm{CH_4}\\), \\(\\mathrm{NH_3}\\), \\(\\mathrm{H_2}\\), and water with electric sparks. What did it produce, and what did it show?',
        steps: [
          '实验检测到多种氨基酸等有机分子。 · The experiment detected various organic molecules, including amino acids.',
          '说明早期地球条件下无机物可形成有机单体。 · It showed that inorganic substances could form organic monomers under early-Earth conditions.',
          '但它没有证明这些单体如何聚合并形成可复制系统。 · However, it did not show how these monomers polymerized into a replicating system.'
        ],
        solution: '证明有机单体可非生物合成，但不能单独解释生命起源全过程。 · It demonstrated abiotic synthesis of organic monomers but cannot alone explain the entire origin of life.'
      },
      {
        title: '例 2 · RNA 世界 · Example 2 · RNA World',
        prompt: '为什么 RNA 世界假说能缓解“先有 DNA 还是先有蛋白质”的循环问题？ · Why does the RNA world hypothesis ease the circular “DNA first or protein first” problem?',
        steps: [
          'RNA 可以像 DNA 一样储存序列信息。 · RNA can store sequence information like DNA.',
          '某些 RNA（核酶）可以催化切割、连接等反应。 · Some RNAs (ribozymes) can catalyze cleavage, ligation, and other reactions.',
          '因此 RNA 可能同时承担遗传与催化功能，之后再演化出 DNA 与蛋白质。 · Thus RNA could have carried both genetic and catalytic functions, with DNA and proteins evolving later.'
        ],
        solution: 'RNA 兼具信息与催化潜力，可作为早期分子系统的核心。 · RNA has both informational and catalytic potential, so it could have been the core of an early molecular system.'
      },
      {
        title: '例 3 · 原始细胞 · Example 3 · Protocells',
        prompt: '脂肪酸囊泡为什么被认为是原始细胞的有力候选？ · Why are fatty acid vesicles considered strong candidates for protocells?',
        steps: [
          '脂肪酸在水中可自发形成囊泡，包裹内部溶液。 · Fatty acids can spontaneously form vesicles in water that enclose an internal solution.',
          '囊泡可生长，并在扰动下分裂。 · Vesicles can grow and divide under disturbance.',
          '膜的选择透过性让内部反应与外界环境分隔，形成选择单位。 · Membrane selective permeability separates internal reactions from the external environment, forming a unit of selection.'
        ],
        solution: '囊泡提供区隔化与繁殖基础，使内部可复制分子能被选择。 · Vesicles provide the basis for compartmentalization and reproduction, allowing internal replicating molecules to be selected.'
      }
    ],
    examTips: [
      'CED Unit 7：生命起源 · CED Unit 7: Origins of life',
      '先区分“生命起源”与“生物进化” · First distinguish “the origin of life” from “biological evolution.”',
      'RNA 世界题写“信息储存 + 催化” · For RNA world questions, write “information storage plus catalysis.”',
      '原始细胞题写“膜、区隔、生长、分裂、选择” · For protocell questions, write “membrane, compartment, growth, division, selection.”',
      '实验题说明证据支持什么、不能支持什么 · For experiment questions, state what the evidence supports and what it does not support.',
      '时间尺度：地球 46 亿年，最早生命约 35 至 38 亿年前 · Time scale: Earth is 4.6 billion years old, and the earliest life dates to about 3.5–3.8 billion years ago.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u2', code: '2.10', title: '细胞区隔起源 · Origins of Cellular Compartments', relation: '后续 · Follow-up' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.6', title: '进化证据 · Evidence for Evolution', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.7', title: '共同祖先 · Common Ancestry', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.12', title: '种群变异 · Variations in Populations', relation: '先修 · Prerequisite' }
    ],
    development: ['生命起源与进化 · Origin of life and evolution', '早期地球条件 · Early Earth conditions', '有机分子合成 · Organic molecule synthesis', 'RNA 世界 · RNA world', '原始细胞 · Protocells', '最早细胞与氧化大气 · Earliest cells and the oxygenated atmosphere'],
    checks: ['生命起源与生物进化有什么区别？ · What is the difference between the origin of life and biological evolution?', 'RNA 世界假说解决了什么问题？ · What problem does the RNA world hypothesis solve?', '原始细胞为什么需要膜？ · Why do protocells need membranes?'],
    summary: '生命起源研究化学进化如何产生可复制、可被选择的系统；RNA 世界与原始细胞假说分别解决信息与区隔化问题。 · The origin of life studies how chemical evolution produced systems that can replicate and be selected; the RNA world and protocell hypotheses address information and compartmentalization, respectively.'
  },

  'bio/bio-u8/8.1': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分行为响应与生理响应，并说明各自的代价与收益。 · Distinguish behavioral responses from physiological responses and explain their costs and benefits.',
      '能解释趋性、动性、生物钟、光周期与迁徙滞育的适应意义。 · Explain the adaptive significance of taxis, kinesis, circadian rhythms, photoperiod, migration, and diapause.',
      '能分析植物向性、光周期与春化对环境的响应。 · Analyze plant responses to the environment through tropisms, photoperiod, and vernalization.'
    ],
    essentialKnowledge: [
      '生物通过行为与生理机制响应环境变化，以维持稳态、获取资源与提高繁殖成功。 · Organisms respond to environmental change through behavioral and physiological mechanisms to maintain homeostasis, acquire resources, and increase reproductive success.',
      '行为响应包括趋性（定向移动）、动性（非定向活动速率变化）、迁徙、集群、领域行为、学习与通讯。 · Behavioral responses include taxis (directed movement), kinesis (nondirected change in activity rate), migration, grouping, territorial behavior, learning, and communication.',
      '生理响应包括 acclimation（个体可逆调整）、休眠与滞育、冬眠、渗透调节、体温调节与酶活性调整。 · Physiological responses include acclimation (reversible individual adjustment), dormancy and diapause, hibernation, osmoregulation, thermoregulation, and adjustment of enzyme activity.',
      '生物钟与光周期让生物预测昼夜与季节变化；光照、温度与褪黑素等信号参与节律与繁殖时机。 · Circadian clocks and photoperiod let organisms anticipate daily and seasonal change; light, temperature, and melatonin are signals involved in rhythms and reproductive timing.',
      '植物响应包括向光性、向地性、向触性、光周期、春化与气孔开闭，通常由激素与信号转导介导。 · Plant responses include phototropism, gravitropism, thigmotropism, photoperiodism, vernalization, and stomatal opening and closing, usually mediated by hormones and signal transduction.',
      '响应可以是先天或学习获得；环境线索必须被感受器检测并转化为神经、内分泌或细胞信号。 · Responses can be innate or learned; environmental cues must be detected by receptors and converted into neural, endocrine, or cellular signals.',
      '响应有能量与风险代价，权衡决定最优策略；acclimation 是可逆的个体调整，adaptation 是可遗传的种群变化。 · Responses carry energy and risk costs, and trade-offs determine the optimal strategy; acclimation is reversible individual adjustment, whereas adaptation is heritable population change.'
    ],
    definition: '环境响应是生物检测环境变化并作出行为或生理调整的过程。动物可移动、迁徙或改变代谢，植物通过向性、光周期与春化调整生长与开花；响应的收益必须超过能量与风险代价。 · Environmental response is the process by which organisms detect environmental change and make behavioral or physiological adjustments. Animals can move, migrate, or alter metabolism, while plants adjust growth and flowering through tropisms, photoperiod, and vernalization; the benefits of a response must exceed its energy and risk costs.',
    intuition: '环境变化像天气预报：动物可以搬家、换衣服或调空调，植物不能移动，只能通过生长方向和开花时间来应对。 · Environmental change is like a weather forecast: animals can move house, change clothes, or turn on the air conditioner, while plants cannot move and must respond through growth direction and flowering time.',
    intuitionDetailed: '趋性是朝向或远离刺激的定向运动（如趋光）；动性不定向，只改变活动速率（如湿度低时活动增加）。生物钟是内源节律，即使没有外部线索仍近似 24 小时运行，光周期则把昼夜长度转化为季节信息。植物向光性由生长素分布不均造成，向地性由重力感知与生长素重新分布造成。迁徙与滞育让动物避开不利季节，但需要能量储备与导航能力。 · Taxis is directed movement toward or away from a stimulus (such as phototaxis); kinesis is nondirected and only changes activity rate (such as increased activity when humidity is low). Circadian clocks are endogenous rhythms that run near 24 hours even without external cues, while photoperiod converts day length into seasonal information. Plant phototropism results from unequal auxin distribution, and gravitropism from gravity sensing and auxin redistribution. Migration and diapause let animals avoid unfavorable seasons but require energy reserves and navigation ability.',
    formulas: [
      { latex: '\\text{刺激}\\to\\text{感受器}\\to\\text{信号}\\to\\text{响应}', note: '环境响应的一般路径。 · General pathway of an environmental response.' },
      { latex: '\\text{响应收益}>\\text{响应代价}', note: '行为或生理响应的简化选择条件。 · Simplified condition for a behavioral or physiological response.' }
    ],
    derivationNotes: [
      { from: '环境刺激 · Environmental stimulus', to: '感受器信号 · Receptor signal', note: '光、温度、化学物质等被感受器检测并转换为电化学信号。 · Light, temperature, chemicals, and other cues are detected by receptors and converted into electrochemical signals.' },
      { from: '信号 · Signal', to: '行为或生理响应 · Behavioral or physiological response', note: '神经与内分泌系统协调肌肉、腺体与代谢。 · The nervous and endocrine systems coordinate muscles, glands, and metabolism.' },
      { from: '响应代价 · Response cost', to: '适合度 · Fitness', note: '响应的能量与风险成本影响最终适合度。 · The energy and risk costs of a response affect final fitness.' },
    ],
    connections: [
      '先修：4.4 反馈与稳态。 · Prerequisite: feedback and homeostasis in 4.4.',
      '后续：8.2–8.5 的种群、群落与生态系统过程。 · Follow-up: population, community, and ecosystem processes in 8.2–8.5.',
      '应用：保护行为学、农业光周期管理与气候变化响应。 · Application: conservation behavior, agricultural photoperiod management, and climate-change responses.',
    ],
    conditions: [
      '响应依赖感受器的敏感范围与生物的生活史阶段 · Responses depend on the receptor’s sensitivity range and the organism’s life-history stage',
      'acclimation 是可逆的个体调整，不是可遗传的适应 · Acclimation is reversible individual adjustment, not heritable adaptation',
      '光周期作为季节线索需要稳定的昼夜节律 · Photoperiod as a seasonal cue requires a stable circadian rhythm',
      '植物响应通常由激素与细胞信号介导，不能简单归因于“植物意志” · Plant responses are usually mediated by hormones and cellular signals and cannot simply be attributed to “plant will”',
      '响应有能量、时间与捕食风险等代价 · Responses carry costs in energy, time, and predation risk'
    ],
    keyPoints: [
      '行为响应 vs 生理响应 · Behavioral vs physiological responses',
      '趋性定向，动性不定向 · Taxis is directed; kinesis is nondirected',
      '生物钟与光周期预测环境变化 · Circadian clocks and photoperiod predict environmental change',
      '迁徙、滞育与冬眠是季节性策略 · Migration, diapause, and hibernation are seasonal strategies',
      '植物向性、光周期与春化 · Plant tropisms, photoperiod, and vernalization',
      'acclimation 与 adaptation 不同 · Acclimation differs from adaptation',
      '响应存在代价与权衡 · Responses involve costs and trade-offs'
    ],
    misconceptions: [
      '认为所有行为都是学习获得的 · Assuming all behavior is learned',
      '把趋性与动性混为一谈 · Confusing taxis with kinesis',
      '认为植物不会响应环境 · Assuming plants do not respond to the environment',
      '把 acclimation 当作进化适应 · Treating acclimation as evolutionary adaptation',
      '认为迁徙是随机移动 · Assuming migration is random movement',
      '认为响应越大越好，忽略能量代价 · Assuming stronger responses are always better and ignoring energy costs'
    ],
    examples: [
      {
        title: '例 1 · 趋性与动性 · Example 1 · Taxis and Kinesis',
        prompt: '眼虫向光游动与潮虫在干燥时活动增加，分别属于什么响应？ · Euglena swimming toward light and woodlice increasing activity when dry are examples of which responses?',
        steps: [
          '眼虫朝光源定向移动，属于趋光性。 · Euglena moves directionally toward a light source, which is positive phototaxis.',
          '潮虫不朝特定方向，只改变活动速率以寻找湿度，属于动性。 · Woodlice do not move in a specific direction but change activity rate to find humidity, which is kinesis.',
          '两者都是行为响应，但定向性不同。 · Both are behavioral responses, but their directionality differs.'
        ],
        solution: '眼虫为趋性；潮虫为动性。 · Euglena shows taxis; woodlice show kinesis.'
      },
      {
        title: '例 2 · 光周期 · Example 2 · Photoperiod',
        prompt: '短日植物为什么在秋季开花？ · Why do short-day plants flower in autumn?',
        steps: [
          '短日植物需要夜长超过临界值。 · Short-day plants require night length to exceed a critical value.',
          '秋季夜长增加，达到阈值。 · Autumn nights lengthen and reach the threshold.',
          '光周期信号触发开花基因表达。 · The photoperiod signal triggers expression of flowering genes.'
        ],
        solution: '夜长超过临界值触发短日植物开花。 · Night length exceeding the critical value triggers flowering in short-day plants.'
      },
      {
        title: '例 3 · acclimation · Example 3 · Acclimation',
        prompt: '人从平原到高海拔后红细胞增多，这是进化适应吗？ · When people move from lowlands to high altitude, their red blood cell count increases. Is this evolutionary adaptation?',
        steps: [
          '高海拔氧分压低，身体增加红细胞以提高携氧能力。 · At high altitude, oxygen partial pressure is lower, so the body increases red blood cells to improve oxygen carrying.',
          '这是个体在生命周期内的可逆生理调整。 · This is a reversible physiological adjustment within an individual’s lifetime.',
          '可遗传的种群适应需要多代选择。 · Heritable population adaptation requires selection across many generations.'
        ],
        solution: '属于 acclimation，不是可遗传的 adaptation。 · It is acclimation, not heritable adaptation.'
      }
    ],
    examTips: [
      'CED Unit 8：环境响应 · CED Unit 8: Responses to the environment',
      '先分类：行为还是生理，定向还是非定向 · Classify first: behavioral or physiological, directed or nondirected.',
      '植物题写向性、光周期、春化与激素 · For plant questions, write tropisms, photoperiod, vernalization, and hormones.',
      'acclimation 与 adaptation 要区分 · Distinguish acclimation from adaptation.',
      'FRQ 用“刺激—感受—信号—响应—代价”链条 · In FRQs, use the chain “stimulus—reception—signal—response—cost.”'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u4', code: '4.4', title: '反馈 · Feedback', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.2', title: '能量流 · Energy Flow', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.3', title: '种群生态 · Population Ecology', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.2', title: '自然选择 · Natural Selection', relation: '应用 · Application' }
    ],
    development: ['行为与生理响应 · Behavioral and physiological responses', '趋性与动性 · Taxis and kinesis', '生物钟与光周期 · Circadian clocks and photoperiod', '迁徙与滞育 · Migration and diapause', '植物响应 · Plant responses', '代价与权衡 · Costs and trade-offs'],
    checks: ['趋性与动性有何区别？ · What is the difference between taxis and kinesis?', 'acclimation 与 adaptation 有何不同？ · How do acclimation and adaptation differ?', '短日植物如何利用光周期开花？ · How do short-day plants use photoperiod to flower?'],
    summary: '生物用行为与生理响应应对环境变化；趋性、动性、生物钟、光周期与植物向性各有适应意义，且都受代价约束。 · Organisms use behavioral and physiological responses to cope with environmental change; taxis, kinesis, circadian clocks, photoperiod, and plant tropisms each have adaptive significance and are constrained by costs.'
  },

  'bio/bio-u8/8.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分遗传多样性、物种多样性与生态系统多样性。 · Distinguish genetic diversity, species diversity, and ecosystem diversity.',
      '能用物种丰富度、均匀度与多样性指数比较群落。 · Use species richness, evenness, and diversity indices to compare communities.',
      '能解释生物多样性对生态系统稳定性与人类福祉的意义。 · Explain the significance of biodiversity for ecosystem stability and human well-being.'
    ],
    essentialKnowledge: [
      '生物多样性是生命在基因、物种与生态系统层次的多样性，包括遗传变异、物种数、群落与生态系统类型。 · Biodiversity is the diversity of life at genetic, species, and ecosystem levels, including genetic variation, species number, and the variety of communities and ecosystem types.',
      '物种丰富度是物种数；均匀度描述各物种个体数分布的均匀程度；Shannon 指数综合丰富度与均匀度。 · Species richness is the number of species; evenness describes how evenly individuals are distributed among species; the Shannon index combines richness and evenness.',
      '生物多样性高的生态系统通常具有更高抵抗力与恢复力，但多样性—稳定性关系受环境、尺度与扰动类型影响，并非绝对。 · Ecosystems with high biodiversity usually have greater resistance and resilience, but the diversity–stability relationship depends on environment, scale, and disturbance type and is not absolute.',
      '生物多样性提供生态系统服务：食物、药物、授粉、水质净化、气候调节、土壤保持与文化价值。 · Biodiversity provides ecosystem services: food, medicine, pollination, water purification, climate regulation, soil retention, and cultural value.',
      '生物多样性热点地区物种特有性高、受威胁严重；岛屿与破碎化栖息地更易失去多样性。 · Biodiversity hotspots have high endemism and severe threats; islands and fragmented habitats are more prone to biodiversity loss.',
      '遗传多样性是物种适应环境变化的基础；物种多样性是群落结构的基础；生态系统多样性提供多种生境与生态过程。 · Genetic diversity is the basis for species to adapt to environmental change; species diversity is the basis of community structure; ecosystem diversity provides a variety of habitats and ecological processes.'
    ],
    definition: '生物多样性是生命在遗传、物种与生态系统三个层次的多样性。遗传多样性指种群内与种群间的等位基因差异；物种多样性指群落中物种的丰富度与均匀度；生态系统多样性指不同生境、群落与生态过程的多样性。 · Biodiversity is the diversity of life at three levels: genetic, species, and ecosystem. Genetic diversity refers to allele differences within and among populations; species diversity refers to the richness and evenness of species in a community; ecosystem diversity refers to the variety of habitats, communities, and ecological processes.',
    intuition: '生物多样性像投资组合：基因、物种、生态系统三种资产越多样，面对环境波动时越不容易全军覆没；但组合的收益也取决于资产之间如何关联。 · Biodiversity is like an investment portfolio: the more diverse the genetic, species, and ecosystem assets, the less likely the whole portfolio will collapse under environmental fluctuation; but returns also depend on how the assets are correlated.',
    intuitionDetailed: '物种丰富度只数物种个数，不考虑每个物种有多少个体；两个物种数相同的群落，如果一个个体的数量极不均匀，均匀度就低，Shannon 指数也低。遗传多样性让种群在病害或气候改变时有更多可能存活的等位基因组合。生态系统多样性提供不同生境，使物种能在扰动后迁移与重建。生物多样性高的系统通常更稳定，但稳定性还取决于物种功能冗余、连通性与扰动强度。 · Species richness counts species without considering how many individuals each has; of two communities with the same number of species, the one with highly uneven individual counts has lower evenness and a lower Shannon index. Genetic diversity gives a population more allele combinations that might survive disease or climate change. Ecosystem diversity provides different habitats that allow species to move and recolonize after disturbance. Systems with high biodiversity are usually more stable, but stability also depends on functional redundancy, connectivity, and disturbance intensity.',
    formulas: [
      { latex: 'H_{\\mathrm{Sh}}=-\\sum_{i=1}^{S}p_i\\ln p_i', note: 'Shannon 多样性指数；\\(p_i\\) 为第 \\(i\\) 个物种的个体比例。 · Shannon diversity index; \\(p_i\\) is the proportional abundance of species \\(i\\).' },
      { latex: 'D=1-\\sum_{i=1}^{S}p_i^{2}', note: 'Simpson 多样性指数；数值越大越多样。 · Simpson diversity index; larger values indicate greater diversity.' },
      { latex: 'E=\\dfrac{H_{\\mathrm{Sh}}}{\\ln S}', note: '均匀度；\\(S\\) 为物种数。 · Evenness; \\(S\\) is the number of species.' }
    ],
    derivationNotes: [
      { from: '物种个体数 · Species abundances', to: '相对多度 · Relative abundance', note: '把每个物种的个体数除以总个体数。 · Divide each species’ abundance by the total number of individuals.' },
      { from: '相对多度 · Relative abundance', to: 'Shannon 指数 · Shannon index', note: '对每个物种的 \\(p_i\\ln p_i\\) 求和并取负。 · Sum \\(p_i\\ln p_i\\) over species and take the negative.' },
      { from: '丰富度与均匀度 · Richness and evenness', to: '多样性 · Diversity', note: '物种越多、分布越均匀，多样性指数越高。 · More species and more even distributions produce higher diversity indices.' },
    ],
    connections: [
      '先修：8.5 群落生态中的物种相互作用。 · Prerequisite: species interactions in community ecology in 8.5.',
      '后续：8.7 生态系统扰动与保护。 · Follow-up: ecosystem disturbance and conservation in 8.7.',
      '应用：保护规划、生态系统服务评估与可持续管理。 · Application: conservation planning, ecosystem-service assessment, and sustainable management.',
    ],
    conditions: [
      '多样性指数依赖采样努力与样本量，比较时需相同采样方法 · Diversity indices depend on sampling effort and sample size, so comparisons require the same sampling method',
      '丰富度不包含均匀度信息 · Richness does not contain evenness information',
      '多样性—稳定性关系受尺度、环境与扰动类型影响 · The diversity–stability relationship depends on scale, environment, and disturbance type',
      '遗传多样性、物种多样性与生态系统多样性不能互相替代 · Genetic, species, and ecosystem diversity cannot substitute for one another',
      '热点地区通常同时具有高特有性与高威胁 · Hotspots typically have both high endemism and high threat'
    ],
    keyPoints: [
      '三个层次：遗传、物种、生态系统 · Three levels: genetic, species, ecosystem',
      '丰富度 vs 均匀度 · Richness vs evenness',
      'Shannon 与 Simpson 指数综合丰富度与均匀度 · Shannon and Simpson indices combine richness and evenness',
      '生物多样性提供生态系统服务 · Biodiversity provides ecosystem services',
      '遗传多样性是适应变化的基础 · Genetic diversity is the basis for adapting to change',
      '多样性—稳定性不是绝对定律 · Diversity–stability is not an absolute law'
    ],
    misconceptions: [
      '认为生物多样性只等于物种数 · Assuming biodiversity equals species number alone',
      '认为物种数相同的群落多样性一定相同 · Assuming communities with the same species number always have the same diversity',
      '认为生物多样性越高就越稳定，忽略环境与尺度 · Assuming higher biodiversity always means greater stability and ignoring environment and scale',
      '认为遗传多样性不属于生物多样性 · Assuming genetic diversity is not part of biodiversity',
      '认为稀有物种对生态系统没有作用 · Assuming rare species have no role in ecosystems'
    ],
    examples: [
      {
        title: '例 1 · 丰富度与均匀度 · Example 1 · Richness and Evenness',
        prompt: '群落 A 的物种个体数为 90、5、5，群落 B 为 33、33、34。两者的丰富度与均匀度如何比较？ · Community A has species abundances of 90, 5, and 5; community B has 33, 33, and 34. How do their richness and evenness compare?',
        steps: [
          '两个群落都有 3 个物种，丰富度相同。 · Both communities have three species, so their richness is the same.',
          '群落 A 的个体数极不均匀，均匀度低。 · Community A has highly uneven abundances and low evenness.',
          '群落 B 接近均匀，Shannon 指数更高。 · Community B is nearly even and has a higher Shannon index.'
        ],
        solution: '丰富度相同，但 B 的均匀度与多样性更高。 · Richness is the same, but B has higher evenness and diversity.'
      },
      {
        title: '例 2 · 遗传多样性 · Example 2 · Genetic Diversity',
        prompt: '猎豹种群曾经历严重瓶颈，遗传多样性很低。这对种群有什么风险？ · Cheetah populations went through a severe bottleneck and have low genetic diversity. What risks does this pose?',
        steps: [
          '瓶颈使许多等位基因随机丢失。 · The bottleneck randomly lost many alleles.',
          '低遗传多样性降低对疾病、气候变化的适应潜力。 · Low genetic diversity reduces the potential to adapt to disease and climate change.',
          '小种群还易发生近交衰退与漂变。 · Small populations are also prone to inbreeding depression and drift.'
        ],
        solution: '遗传多样性低使种群更脆弱，恢复力下降。 · Low genetic diversity makes the population more vulnerable and reduces resilience.'
      },
      {
        title: '例 3 · 生态系统服务 · Example 3 · Ecosystem Services',
        prompt: '传粉昆虫减少为什么会威胁农业？ · Why does a decline in pollinating insects threaten agriculture?',
        steps: [
          '许多作物依赖动物传粉。 · Many crops depend on animal pollination.',
          '传粉者减少会降低坐果率与产量。 · Fewer pollinators reduce fruit set and yield.',
          '这是生物多样性提供的调节服务。 · This is a regulating service provided by biodiversity.'
        ],
        solution: '传粉是关键的生态系统服务，生物多样性下降会影响农业产出。 · Pollination is a key ecosystem service, and biodiversity loss can reduce agricultural output.'
      }
    ],
    examTips: [
      'CED Unit 8：生物多样性 · CED Unit 8: Biodiversity',
      '先分清遗传、物种、生态系统三个层次 · First distinguish the genetic, species, and ecosystem levels.',
      '丰富度与均匀度要分开写 · Write richness and evenness separately.',
      '多样性指数题注意样本量与采样方法 · For diversity-index questions, pay attention to sample size and sampling method.',
      '生态系统服务用“供给、调节、支持、文化”分类 · Classify ecosystem services as provisioning, regulating, supporting, and cultural.',
      '不要绝对化“多样性越高越稳定” · Do not state “higher diversity is always more stable” as an absolute.'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u8', code: '8.5', title: '群落生态 · Community Ecology', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.7', title: '生态系统扰动 · Ecosystem Disturbance', relation: '后续 · Follow-up' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.11', title: '灭绝 · Extinction', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-prep-hs', code: 'P2.14', title: '生物多样性 · Biodiversity', relation: '先修 · Prerequisite' }
    ],
    development: ['三个层次 · Three levels', '丰富度与均匀度 · Richness and evenness', '多样性指数 · Diversity indices', '生态系统服务 · Ecosystem services', '热点与威胁 · Hotspots and threats', '多样性与稳定性 · Diversity and stability'],
    checks: ['遗传多样性、物种多样性与生态系统多样性有何区别？ · What is the difference among genetic, species, and ecosystem diversity?', '为什么丰富度相同不代表多样性相同？ · Why does equal richness not imply equal diversity?', '生物多样性为什么影响生态系统服务？ · Why does biodiversity affect ecosystem services?'],
    summary: '生物多样性包括遗传、物种与生态系统三个层次；丰富度、均匀度与多样性指数描述群落，多样性支撑生态系统服务与恢复力。 · Biodiversity includes genetic, species, and ecosystem levels; richness, evenness, and diversity indices describe communities, and biodiversity supports ecosystem services and resilience.'
  },

  'bio/bio-u8/8.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能区分自然扰动与人为扰动，并说明生态系统的抵抗力与恢复力。 · Distinguish natural from anthropogenic disturbance and explain ecosystem resistance and resilience.',
      '能分析入侵种、污染、富营养化、栖息地破碎化与气候变化的连锁效应。 · Analyze the cascading effects of invasive species, pollution, eutrophication, habitat fragmentation, and climate change.',
      '能提出基于生态学原理的修复与减缓策略。 · Propose restoration and mitigation strategies based on ecological principles.'
    ],
    essentialKnowledge: [
      '扰动是改变群落结构与生态系统功能的事件；自然扰动包括火灾、风暴、火山与洪水，人为扰动包括污染、土地开发、过度捕捞、外来种与气候变化。 · Disturbance is an event that alters community structure and ecosystem function; natural disturbances include fire, storms, volcanoes, and floods, while anthropogenic disturbances include pollution, land development, overfishing, invasive species, and climate change.',
      '抵抗力是生态系统抵抗变化的能力；恢复力是受扰后恢复的能力；二者不总是一致，且随尺度与扰动类型变化。 · Resistance is an ecosystem’s ability to withstand change; resilience is its ability to recover after disturbance; the two do not always coincide and vary with scale and disturbance type.',
      '入侵种缺少天敌与竞争限制，可通过竞争、捕食、杂交或改变火与水文状况导致本地种下降甚至灭绝。 · Invasive species lack natural enemies and competitive limits and can reduce or even extirpate native species through competition, predation, hybridization, or altered fire and hydrological regimes.',
      '富营养化由氮磷输入引起：藻华暴发、死亡分解耗氧、缺氧形成死区，影响淡水与沿海生态系统。 · Eutrophication is caused by nitrogen and phosphorus inputs: algal blooms, oxygen consumption during decomposition, and hypoxia create dead zones that affect freshwater and coastal ecosystems.',
      '生物放大使脂溶性污染物沿食物链浓度升高，顶级捕食者风险最高；持久性污染物可在环境中长期存在。 · Biomagnification causes lipid-soluble pollutants to increase in concentration along food chains, putting top predators at highest risk; persistent pollutants can remain in the environment for a long time.',
      '栖息地破碎化减少连通性、增加边缘效应与小种群风险；气候变化改变物候、分布与物种相互作用。 · Habitat fragmentation reduces connectivity, increases edge effects, and raises risks for small populations; climate change alters phenology, distribution, and species interactions.',
      '修复策略包括减少污染源、控制入侵种、恢复连通性、再引入关键种与保护关键栖息地，并需要长期监测与适应管理。 · Restoration strategies include reducing pollution sources, controlling invasive species, restoring connectivity, reintroducing keystone species, and protecting critical habitat, along with long-term monitoring and adaptive management.'
    ],
    definition: '生态系统扰动是改变群落结构与生态系统功能的事件，可分为自然扰动与人为扰动。扰动的后果取决于强度、频率、尺度与生态系统本身的抵抗力与恢复力；富营养化、入侵种、破碎化与气候变化常通过连锁效应放大影响。 · Ecosystem disturbance is an event that alters community structure and ecosystem function and can be natural or anthropogenic. The consequences depend on intensity, frequency, scale, and the ecosystem’s own resistance and resilience; eutrophication, invasive species, fragmentation, and climate change often amplify their effects through cascades.',
    intuition: '生态系统像一张网：拉断一根线可能没事，但拉断关键的几根，整张网会变形甚至崩塌；修复要把断线接回去，而不是只换一根新线。 · An ecosystem is like a net: breaking one thread may do no harm, but breaking a few key threads can deform or even collapse the whole net; restoration means reconnecting the broken threads, not just replacing one with a new thread.',
    intuitionDetailed: '抵抗力强的系统能在扰动中保持结构与功能，恢复力强的系统能在扰动后较快回到原状态。富营养化的链条是“养分输入→藻华→死亡→分解耗氧→缺氧→鱼类死亡”，每个环节都可能被其他因素放大。入侵种可能改变整个食物网或火 regime；破碎化让种群变小、迁移受阻，漂变与近交风险上升。修复不总是回到原状，也可能进入新的稳定状态。 · A resistant system can maintain structure and function during disturbance, while a resilient system can return to its original state relatively quickly afterward. The eutrophication chain is “nutrient input → algal bloom → death → decomposition consumes oxygen → hypoxia → fish kills,” and each step can be amplified by other factors. Invasive species can alter entire food webs or fire regimes; fragmentation makes populations smaller and dispersal harder, raising drift and inbreeding risks. Restoration does not always return to the original state and may instead produce a new stable state.',
    formulas: [
      { latex: '\\text{抵抗力}\\neq\\text{恢复力}', note: '一个系统可能抗扰动强但恢复慢，或相反。 · A system may be highly resistant but slow to recover, or vice versa.' },
      { latex: '\\mathrm{TMF}=\\dfrac{C_{\\text{高营养级}}}{C_{\\text{低营养级}}}', note: '生物放大因子；\\(\\mathrm{TMF}>1\\) 表示沿食物链浓度升高。 · Biomagnification factor; \\(\\mathrm{TMF}>1\\) indicates increasing concentration along the food chain.' }
    ],
    derivationNotes: [
      { from: '扰动 · Disturbance', to: '群落结构改变 · Change in community structure', note: '扰动改变资源、光照、养分与物种相互作用。 · Disturbance changes resources, light, nutrients, and species interactions.' },
      { from: '养分输入 · Nutrient input', to: '缺氧 · Hypoxia', note: '藻华死亡后分解耗氧，导致溶解氧下降。 · Decomposition after algal death consumes oxygen, lowering dissolved oxygen.' },
      { from: '污染物 · Pollutant', to: '生物放大 · Biomagnification', note: '脂溶性污染物在食物链中逐级富集。 · Lipid-soluble pollutants accumulate at each trophic level.' },
    ],
    connections: [
      '先修：8.5 群落生态与 8.6 生物多样性。 · Prerequisite: community ecology in 8.5 and biodiversity in 8.6.',
      '后续：保护生物学与生态系统修复。 · Follow-up: conservation biology and ecosystem restoration.',
      '应用：水质管理、入侵种控制与气候适应政策。 · Application: water-quality management, invasive-species control, and climate-adaptation policy.',
    ],
    conditions: [
      '扰动的影响取决于强度、频率、持续时间与空间尺度 · Disturbance impacts depend on intensity, frequency, duration, and spatial scale',
      '生态系统可能跨越阈值进入替代稳定状态，恢复不一定可逆 · Ecosystems can cross thresholds into alternative stable states, and recovery is not always reversible',
      '入侵种的影响取决于资源、天敌与竞争环境 · The impact of invasive species depends on resources, natural enemies, and the competitive environment',
      '污染物效应可局部、区域或全球尺度发生 · Pollutant effects can occur at local, regional, or global scales',
      '修复需要针对具体驱动因素并长期监测 · Restoration must target specific drivers and include long-term monitoring'
    ],
    keyPoints: [
      '自然扰动 vs 人为扰动 · Natural vs anthropogenic disturbance',
      '抵抗力与恢复力不同 · Resistance and resilience are different',
      '入侵种可改变竞争、捕食与扰动 regime · Invasive species can alter competition, predation, and disturbance regimes',
      '富营养化导致缺氧死区 · Eutrophication causes hypoxic dead zones',
      '生物放大使顶级捕食者风险最高 · Biomagnification puts top predators at highest risk',
      '破碎化与气候变化改变相互作用 · Fragmentation and climate change alter interactions',
      '修复需针对驱动因素并监测 · Restoration must target drivers and include monitoring'
    ],
    misconceptions: [
      '认为所有扰动都是坏事（有些生态系统依赖火灾或洪水） · Assuming all disturbance is bad (some ecosystems depend on fire or flooding)',
      '认为生态系统总能完全恢复 · Assuming ecosystems can always recover completely',
      '认为一种入侵种一定会导致整个系统崩溃 · Assuming one invasive species will necessarily collapse an entire system',
      '认为污染影响只停留在局部 · Assuming pollution effects remain only local',
      '认为植树造林一定能恢复原有生态系统 · Assuming tree planting always restores the original ecosystem',
      '把抵抗力与恢复力混为一谈 · Confusing resistance with resilience'
    ],
    examples: [
      {
        title: '例 1 · 富营养化 · Example 1 · Eutrophication',
        prompt: '农田氮磷流入湖泊后，为什么会出现鱼类死亡？ · Why can fish die after nitrogen and phosphorus from farmland flow into a lake?',
        steps: [
          '氮磷促进藻类快速繁殖，形成藻华。 · Nitrogen and phosphorus promote rapid algal growth, forming blooms.',
          '藻类死亡后被分解者分解，分解过程消耗水中氧气。 · Dead algae are decomposed by decomposers, a process that consumes oxygen in the water.',
          '溶解氧下降形成缺氧区，鱼类与底栖动物死亡。 · Dissolved oxygen falls, creating hypoxic zones where fish and benthic animals die.'
        ],
        solution: '富营养化通过“藻华—分解耗氧—缺氧”链条造成死区。 · Eutrophication creates dead zones through the chain “algal bloom—decomposition consumes oxygen—hypoxia.”'
      },
      {
        title: '例 2 · 入侵种 · Example 2 · Invasive Species',
        prompt: '外来植物在没有天敌的新环境中为什么可能迅速扩散？ · Why can an exotic plant spread rapidly in a new environment without natural enemies?',
        steps: [
          '缺少专食性天敌与病原体，存活率提高。 · The absence of specialized herbivores and pathogens increases survival.',
          '可能与本地种竞争光照、水分与养分。 · It may compete with native species for light, water, and nutrients.',
          '若改变火 regime 或土壤条件，影响会进一步放大。 · If it alters fire regimes or soil conditions, its impact can be further amplified.'
        ],
        solution: '入侵种失去天敌控制并获得竞争优势，可能改变群落结构。 · Invasive species escape natural-enemy control and gain a competitive advantage, potentially changing community structure.'
      },
      {
        title: '例 3 · 营养级联 · Example 3 · Trophic Cascade',
        prompt: '海獭消失后，海胆与海藻群落可能如何变化？ · How might sea urchin and kelp communities change after sea otters disappear?',
        steps: [
          '海獭捕食海胆，控制海胆数量。 · Sea otters prey on sea urchins and control their numbers.',
          '海獭消失后海胆数量增加，过度啃食海藻。 · Without sea otters, urchin numbers increase and they overgraze kelp.',
          '海藻林退化为海胆 barren，依赖海藻的物种减少。 · Kelp forests degrade into urchin barrens, and species that depend on kelp decline.'
        ],
        solution: '顶级捕食者消失触发营养级联，改变整个群落。 · Loss of a top predator triggers a trophic cascade that changes the entire community.'
      }
    ],
    examTips: [
      'CED Unit 8：生态系统扰动 · CED Unit 8: Ecosystem disturbance',
      '先判断扰动类型与尺度，再写连锁效应 · First identify the disturbance type and scale, then describe cascading effects.',
      '抵抗力与恢复力分开定义 · Define resistance and resilience separately.',
      '富营养化题按“养分—藻—分解—氧—生物”链条作答 · For eutrophication questions, answer with the chain “nutrients—algae—decomposition—oxygen—organisms.”',
      '生物放大题注意脂溶性、持久性与营养级 · For biomagnification questions, consider lipid solubility, persistence, and trophic level.',
      '修复题写具体措施与监测，不要只写“保护环境” · For restoration questions, give specific measures and monitoring rather than just “protect the environment.”'
    ],
    related: [
      { subject: 'bio', chapterId: 'bio-u8', code: '8.5', title: '群落生态 · Community Ecology', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.6', title: '生物多样性 · Biodiversity', relation: '先修 · Prerequisite' },
      { subject: 'bio', chapterId: 'bio-u8', code: '8.2', title: '能量流 · Energy Flow', relation: '相关 · Related' },
      { subject: 'bio', chapterId: 'bio-u7', code: '7.11', title: '灭绝 · Extinction', relation: '相关 · Related' }
    ],
    development: ['扰动类型 · Disturbance types', '抵抗力与恢复力 · Resistance and resilience', '入侵种 · Invasive species', '富营养化与污染 · Eutrophication and pollution', '破碎化与气候变化 · Fragmentation and climate change', '修复与监测 · Restoration and monitoring'],
    checks: ['抵抗力与恢复力有何区别？ · What is the difference between resistance and resilience?', '富营养化为什么会导致缺氧？ · Why does eutrophication lead to hypoxia?', '营养级联如何放大顶级捕食者消失的影响？ · How does a trophic cascade amplify the effects of losing a top predator?'],
    summary: '生态系统扰动有自然与人为来源；入侵种、富营养化、污染、破碎化与气候变化通过连锁效应改变群落，修复需针对驱动因素并长期监测。 · Ecosystem disturbances have natural and anthropogenic sources; invasive species, eutrophication, pollution, fragmentation, and climate change alter communities through cascading effects, and restoration must target drivers with long-term monitoring.'
  },

  'math/calc-u10/10.2': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能判断几何级数 \\(\\sum ar^{n-1}\\) 在 \\(|r|<1\\) 时收敛、在 \\(|r|\\ge1\\) 时发散。 · Determine whether a geometric series \\(\\sum ar^{n-1}\\) converges when \\(|r|<1\\) and diverges when \\(|r|\\ge1\\).',
      '能从部分和 \\(S_n=a\\dfrac{1-r^{n}}{1-r}\\) 取极限，推出收敛和 \\(S=\\dfrac{a}{1-r}\\)。 · Derive the sum \\(S=\\dfrac{a}{1-r}\\) by taking the limit of the partial sum \\(S_n=a\\dfrac{1-r^{n}}{1-r}\\).',
      '能识别首项与公比，并用几何级数把循环小数写成最简分数。 · Identify the first term and common ratio, and use a geometric series to write a repeating decimal as a simplified fraction.',
    ],
    essentialKnowledge: [
      '几何级数的相邻项之比恒为 \\(r\\)；首项 \\(a\\) 是求和公式的起点，与公比不能互换。 · In a geometric series the ratio of adjacent terms is always \\(r\\); the first term \\(a\\) is the starting value in the sum formula and cannot be swapped with the common ratio.',
      '当 \\(|r|<1\\) 时 \\(r^{n}\\to0\\)，部分和趋于 \\(\\dfrac{a}{1-r}\\)；这就是有限和取极限的结果。 · When \\(|r|<1\\), \\(r^{n}\\to0\\) and the partial sums approach \\(\\dfrac{a}{1-r}\\); this is the limit of the finite sums.',
      '当 \\(|r|>1\\) 时通项不趋于零；当 \\(r=1\\) 时通项恒为 \\(a\\)；当 \\(r=-1\\) 时部分和在 \\(a\\) 与 \\(0\\) 间振荡，三种情况都发散。 · When \\(|r|>1\\) the terms do not approach zero; when \\(r=1\\) every term is \\(a\\); when \\(r=-1\\) the partial sums oscillate between \\(a\\) and \\(0\\). All three cases diverge.',
      '改变求和起点只改变首项，不改变公比；例如 \\(\\sum_{n=1}^{\\infty}\\left(\\dfrac{2}{3}\\right)^{n}\\) 的首项是 \\(\\dfrac{2}{3}\\)。 · Changing the starting index changes only the first term, not the common ratio; for example, \\(\\sum_{n=1}^{\\infty}\\left(\\dfrac{2}{3}\\right)^{n}\\) has first term \\(\\dfrac{2}{3}\\).',
      '通项趋于零是收敛的必要条件，但对一般级数并不充分；几何级数恰好可以用比值直接判定。 · Terms approaching zero is necessary for convergence but not sufficient for a general series; a geometric series can be decided directly by its ratio.',
      '循环小数可看成一个首项为第一个循环块、公比为 \\(10^{-k}\\) 的几何级数。 · A repeating decimal can be viewed as a geometric series whose first term is the repeating block and whose ratio is \\(10^{-k}\\).',
    ],
    definition: '几何级数形如 \\(\\displaystyle\\sum_{n=1}^{\\infty}ar^{n-1}=a+ar+ar^{2}+\\cdots\\)，其中 \\(a\\neq0\\) 为首项，\\(r\\) 为公比。当 \\(|r|<1\\) 时级数收敛，和为 \\(S=\\dfrac{a}{1-r}\\)；当 \\(|r|\\ge1\\) 时级数发散。 · A geometric series has the form \\(\\displaystyle\\sum_{n=1}^{\\infty}ar^{n-1}=a+ar+ar^{2}+\\cdots\\), where \\(a\\neq0\\) is the first term and \\(r\\) is the common ratio. It converges when \\(|r|<1\\), with sum \\(S=\\dfrac{a}{1-r}\\), and diverges when \\(|r|\\ge1\\).',
    intuition: '每走一步都把上一步的长度乘以 \\(r\\)。若 \\(|r|<1\\)，剩下的路越来越短，总路程被一个有限数封顶；若 \\(|r|\\ge1\\)，步子不缩小，总和不可能停在一个有限值。 · Each step multiplies the previous step by \\(r\\). If \\(|r|<1\\), the remaining steps shrink and the total distance is capped by a finite number; if \\(|r|\\ge1\\), the steps do not shrink and the total cannot settle at a finite value.',
    intuitionDetailed: '部分和 \\(S_n=a+ar+\\cdots+ar^{n-1}\\) 乘 \\(r\\) 后错位相减，得到 \\(S_n=a\\dfrac{1-r^{n}}{1-r}\\)（\\(r\\neq1\\)）。收敛与否完全取决于 \\(r^{n}\\)：\\(|r|<1\\) 时它趋于零，得到 \\(\\dfrac{a}{1-r}\\)；\\(|r|>1\\) 时它无界；\\(r=1\\) 时部分和为 \\(na\\)；\\(r=-1\\) 时部分和在 \\(a\\) 与 \\(0\\) 之间跳动。 · Multiply the partial sum \\(S_n=a+ar+\\cdots+ar^{n-1}\\) by \\(r\\) and subtract with a shifted copy to obtain \\(S_n=a\\dfrac{1-r^{n}}{1-r}\\) for \\(r\\neq1\\). Convergence depends entirely on \\(r^{n}\\): when \\(|r|<1\\) it tends to zero and the sum tends to \\(\\dfrac{a}{1-r}\\); when \\(|r|>1\\) it is unbounded; when \\(r=1\\) the partial sum is \\(na\\); when \\(r=-1\\) the partial sums jump between \\(a\\) and \\(0\\).',
    formulas: [
      { latex: 'S_n=a\\dfrac{1-r^{n}}{1-r}\\quad(r\\neq1)', note: '前 \\(n\\) 项的部分和；由此取极限得到无穷和。 · Partial sum of the first \\(n\\) terms; taking its limit gives the infinite sum.' },
      { latex: 'S=\\sum_{n=1}^{\\infty}ar^{n-1}=\\dfrac{a}{1-r}\\quad(|r|<1)', note: '首项为 \\(a\\)、公比为 \\(r\\) 的几何级数之和。 · Sum of a geometric series with first term \\(a\\) and common ratio \\(r\\).' },
      { latex: '\\sum_{n=0}^{\\infty}ar^{n}=\\dfrac{a}{1-r}\\quad(|r|<1)', note: '从 \\(n=0\\) 开始时首项就是 \\(a\\)，公式形式相同但起点不同。 · Starting at \\(n=0\\) makes the first term \\(a\\); the formula has the same form but a different starting point.' },
      { latex: '|r|\\ge1\\;\\Rightarrow\\;\\sum ar^{n-1}\\text{ 发散 · diverges}', note: '包括 \\(r=1\\)、\\(r=-1\\) 与 \\(|r|>1\\)。 · This includes \\(r=1\\), \\(r=-1\\), and \\(|r|>1\\).' },
    ],
    derivationNotes: [
      { from: '部分和 · Partial sum', to: '错位相减 · Shift and subtract', note: '\\(S_n-rS_n=a-ar^{n}\\)，所以 \\(S_n=a\\dfrac{1-r^{n}}{1-r}\\)。 · Since \\(S_n-rS_n=a-ar^{n}\\), we get \\(S_n=a\\dfrac{1-r^{n}}{1-r}\\).' },
      { from: '部分和极限 · Limit of partial sums', to: '无穷和 · Infinite sum', note: '\\(|r|<1\\) 时 \\(r^{n}\\to0\\)，部分和趋于 \\(\\dfrac{a}{1-r}\\)。 · When \\(|r|<1\\), \\(r^{n}\\to0\\) and the partial sums approach \\(\\dfrac{a}{1-r}\\).' },
      { from: '循环小数 · Repeating decimal', to: '几何级数 · Geometric series', note: '把循环块看作首项，公比为 \\(10^{-k}\\)，其中 \\(k\\) 是循环块位数。 · Treat the repeating block as the first term and use ratio \\(10^{-k}\\), where \\(k\\) is the number of digits in the block.' },
    ],
    conditions: [
      '求和公式要求 \\(|r|<1\\)，且 \\(a\\) 必须是实际的首项 · The sum formula requires \\(|r|<1\\), and \\(a\\) must be the actual first term',
      '\\(r=1\\) 时不能用 \\(\\dfrac{a}{1-r}\\)，此时级数为 \\(a+a+\\cdots\\)，发散 · When \\(r=1\\), \\(\\dfrac{a}{1-r}\\) cannot be used; the series is \\(a+a+\\cdots\\) and diverges',
      '\\(r=-1\\) 时部分和不趋于定值，级数发散 · When \\(r=-1\\), the partial sums do not approach a fixed value, so the series diverges',
      '改变下标起点会改变首项；先写出前几项再套公式 · Changing the starting index changes the first term; write out the first few terms before applying the formula',
      '几何级数判别的是整条级数，不能只看某一项的大小 · A geometric-series decision concerns the whole series, not the size of a single term',
    ],
    keyPoints: [
      '收敛判据只看公比：\\(|r|<1\\) 收敛，\\(|r|\\ge1\\) 发散 · The convergence test depends only on the ratio: converge for \\(|r|<1\\), diverge for \\(|r|\\ge1\\)',
      '收敛和等于“首项除以 \\(1\\) 减公比” · The sum equals the first term divided by \\(1\\) minus the common ratio',
      '首项与公比要分开识别 · Identify the first term and the common ratio separately',
      '部分和公式是求和公式的来源 · The partial-sum formula is the source of the sum formula',
      '循环小数可用几何级数化为分数 · Repeating decimals can be converted to fractions with a geometric series',
    ],
    misconceptions: [
      '把首项 \\(a\\) 与公比 \\(r\\) 的位置弄反 · Swapping the first term \\(a\\) and the common ratio \\(r\\)',
      '在 \\(|r|\\ge1\\) 时仍套用 \\(\\dfrac{a}{1-r}\\) · Applying \\(\\dfrac{a}{1-r}\\) even when \\(|r|\\ge1\\)',
      '认为通项趋于零就一定收敛（这对几何级数成立，对一般级数不成立） · Assuming that terms tending to zero always imply convergence (true for geometric series, false for general series)',
      '从 \\(n=1\\) 与从 \\(n=0\\) 开始时用同一个首项 · Using the same first term when starting at \\(n=1\\) and at \\(n=0\\)',
      '把 \\(0.\\overline{9}\\) 误认为小于 \\(1\\)（它其实等于 \\(1\\)） · Thinking \\(0.\\overline{9}\\) is less than \\(1\\) (it actually equals \\(1\\))',
    ],
    examples: [
      {
        title: '例 1 · 直接求和 · Direct Sum',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}3\\left(\\dfrac{1}{2}\\right)^{n-1}\\) 是否收敛；若收敛，求和。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}3\\left(\\dfrac{1}{2}\\right)^{n-1}\\) converges; if it does, find the sum.',
        steps: [
          '首项 \\(a=3\\)，公比 \\(r=\\dfrac{1}{2}\\)，且 \\(|r|<1\\)。 · The first term is \\(a=3\\), the common ratio is \\(r=\\dfrac{1}{2}\\), and \\(|r|<1\\).',
          '代入 \\(S=\\dfrac{a}{1-r}\\)：\\(S=\\dfrac{3}{1-\\dfrac{1}{2}}\\)。 · Substitute into \\(S=\\dfrac{a}{1-r}\\): \\(S=\\dfrac{3}{1-\\dfrac{1}{2}}\\).',
          '化简分母：\\(1-\\dfrac{1}{2}=\\dfrac{1}{2}\\)，所以 \\(S=3\\cdot2=6\\)。 · Simplify the denominator: \\(1-\\dfrac{1}{2}=\\dfrac{1}{2}\\), so \\(S=3\\cdot2=6\\).',
        ],
        solution: '级数收敛，和为 \\(6\\)。 · The series converges, and its sum is \\(6\\).',
        solutionLatex: 'S=6',
      },
      {
        title: '例 2 · 先认出首项 · Identify the First Term First',
        prompt: '求 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^{n}}{3^{n}}\\) 的和。 · Find the sum of \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^{n}}{3^{n}}\\).',
        steps: [
          '把通项写成 \\(\\left(\\dfrac{2}{3}\\right)^{n}\\)。 · Write the general term as \\(\\left(\\dfrac{2}{3}\\right)^{n}\\).',
          '这是从 \\(n=1\\) 开始的几何级数，首项 \\(a=\\dfrac{2}{3}\\)，公比 \\(r=\\dfrac{2}{3}\\)。 · This is a geometric series starting at \\(n=1\\), with first term \\(a=\\dfrac{2}{3}\\) and common ratio \\(r=\\dfrac{2}{3}\\).',
          '因为 \\(|r|<1\\)，和为 \\(S=\\dfrac{\\dfrac{2}{3}}{1-\\dfrac{2}{3}}=\\dfrac{\\dfrac{2}{3}}{\\dfrac{1}{3}}=2\\)。 · Because \\(|r|<1\\), the sum is \\(S=\\dfrac{\\dfrac{2}{3}}{1-\\dfrac{2}{3}}=\\dfrac{\\dfrac{2}{3}}{\\dfrac{1}{3}}=2\\).',
        ],
        solution: '级数收敛，和为 \\(2\\)。 · The series converges, and its sum is \\(2\\).',
        solutionLatex: 'S=2',
      },
      {
        title: '例 3 · 循环小数 · Repeating Decimal',
        prompt: '把 \\(0.\\overline{12}\\) 写成最简分数。 · Write \\(0.\\overline{12}\\) as a simplified fraction.',
        steps: [
          '展开：\\(0.\\overline{12}=0.12+0.0012+0.000012+\\cdots\\)。 · Expand: \\(0.\\overline{12}=0.12+0.0012+0.000012+\\cdots\\).',
          '这是首项 \\(a=0.12=\\dfrac{12}{100}\\)、公比 \\(r=\\dfrac{1}{100}\\) 的几何级数。 · This is a geometric series with first term \\(a=0.12=\\dfrac{12}{100}\\) and common ratio \\(r=\\dfrac{1}{100}\\).',
          '和为 \\(S=\\dfrac{\\dfrac{12}{100}}{1-\\dfrac{1}{100}}=\\dfrac{\\dfrac{12}{100}}{\\dfrac{99}{100}}=\\dfrac{12}{99}=\\dfrac{4}{33}\\)。 · The sum is \\(S=\\dfrac{\\dfrac{12}{100}}{1-\\dfrac{1}{100}}=\\dfrac{\\dfrac{12}{100}}{\\dfrac{99}{100}}=\\dfrac{12}{99}=\\dfrac{4}{33}\\).',
        ],
        solution: '\\(0.\\overline{12}=\\dfrac{4}{33}\\)。 · \\(0.\\overline{12}=\\dfrac{4}{33}\\).',
        solutionLatex: '0.\\overline{12}=\\dfrac{4}{33}',
      },
    ],
    examTips: [
      'CED Unit 10：几何级数是所有级数判敛的基准，先看公比 · CED Unit 10: geometric series are the benchmark for all convergence tests—check the common ratio first',
      '写求和公式前先写出前两三项，确认首项 · Before writing the sum formula, list the first two or three terms to confirm the first term',
      '选择题常把 \\(r=1\\) 或 \\(r=-1\\) 混进“收敛”选项 · Multiple-choice questions often place \\(r=1\\) or \\(r=-1\\) among the “convergent” options',
      '\\(0.\\overline{9}=1\\) 是几何级数的经典结果 · \\(0.\\overline{9}=1\\) is a classic geometric-series result',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u10', code: '10.1', title: '无穷级数的收敛与发散 · Defining Convergent and Divergent Infinite Series', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.3', title: 'n 项检验 · The nth Term Test for Divergence', relation: '相关 · Related' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.5', title: '调和级数与 p 级数 · Harmonic Series and p-Series', relation: '对比 · Contrast' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.15', title: '函数表示为幂级数 · Representing Functions as Power Series', relation: '后续 · Follow-up' },
    ],
    development: ['部分和与错位相减 · Partial sums and shift-and-subtract', '收敛判据 · Convergence criterion', '求和公式 · Sum formula', '首项与公比识别 · Identifying the first term and ratio', '循环小数与几何级数 · Repeating decimals and geometric series'],
    checks: ['为什么 \\(r=1\\) 时不能用求和公式？ · Why can the sum formula not be used when \\(r=1\\)?', '\\(r=-1\\) 时部分和为什么没有极限？ · Why do the partial sums have no limit when \\(r=-1\\)?', '从 \\(n=0\\) 与从 \\(n=1\\) 开始时首项有什么不同？ · How does the first term differ when starting at \\(n=0\\) versus \\(n=1\\)?'],
    summary: '几何级数的收敛性只由公比决定：\\(|r|<1\\) 时和为 \\(\\dfrac{a}{1-r}\\)，否则发散；关键是先认对首项与公比。 · A geometric series is governed by its common ratio: if \\(|r|<1\\) the sum is \\(\\dfrac{a}{1-r}\\); otherwise it diverges. The key is to identify the first term and the ratio correctly.',
  },
  'math/calc-u10/10.5': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能判断 \\(p\\) 级数 \\(\\sum \\dfrac{1}{n^{p}}\\)：\\(p>1\\) 收敛，\\(p\\le1\\) 发散。 · Determine whether a \\(p\\)-series \\(\\sum \\dfrac{1}{n^{p}}\\) converges: it converges for \\(p>1\\) and diverges for \\(p\\le1\\).',
      '能用积分检验推导 \\(p\\) 级数判据，并说明 \\(p=1\\) 的调和级数为什么发散。 · Derive the \\(p\\)-series criterion with the integral test and explain why the harmonic series at \\(p=1\\) diverges.',
      '能把带常数因子或根式的级数改写成 \\(p\\) 级数，再判断收敛性。 · Rewrite a series with a constant factor or a radical as a \\(p\\)-series, then determine convergence.',
    ],
    essentialKnowledge: [
      '\\(p\\) 级数的通项是 \\(\\dfrac{1}{n^{p}}\\)；\\(p>1\\) 时收敛，\\(p\\le1\\) 时发散。 · The general term of a \\(p\\)-series is \\(\\dfrac{1}{n^{p}}\\); it converges for \\(p>1\\) and diverges for \\(p\\le1\\).',
      '\\(p=1\\) 时是调和级数 \\(\\sum \\dfrac{1}{n}\\)，虽然通项趋于零，但部分和按 \\(\\ln n\\) 增长而无界。 · At \\(p=1\\) the series is the harmonic series \\(\\sum \\dfrac{1}{n}\\); although its terms tend to zero, its partial sums grow like \\(\\ln n\\) and are unbounded.',
      '积分检验把级数与 \\(\\int_{1}^{\\infty}x^{-p}\\,\\mathrm{d}x\\) 比较：\\(p>1\\) 时积分值为 \\(\\dfrac{1}{p-1}\\)，\\(p=1\\) 时积分发散，\\(p<1\\) 时积分发散。 · The integral test compares the series with \\(\\int_{1}^{\\infty}x^{-p}\\,\\mathrm{d}x\\): for \\(p>1\\) the integral equals \\(\\dfrac{1}{p-1}\\); for \\(p=1\\) it diverges; for \\(p<1\\) it diverges.',
      '乘以非零常数不改变收敛性；\\(\\sum\\dfrac{C}{n^{p}}\\) 与 \\(\\sum\\dfrac{1}{n^{p}}\\) 同敛散。 · Multiplication by a nonzero constant does not change convergence; \\(\\sum\\dfrac{C}{n^{p}}\\) and \\(\\sum\\dfrac{1}{n^{p}}\\) converge or diverge together.',
      '根式先化成 \\(\\dfrac{1}{\\sqrt{n}}\\) 的形式，再读出 \\(p=\\dfrac{1}{2}\\)，级数发散。 · Rewrite the radical as \\(\\dfrac{1}{\\sqrt{n}}\\), read off \\(p=\\dfrac{1}{2}\\), and conclude divergence.',
      '\\(p\\) 级数是比较检验的基准：许多复杂级数通过放缩与 \\(p\\) 级数比较。 · The \\(p\\)-series is the benchmark for comparison tests: many complicated series are compared with a \\(p\\)-series after bounding.',
    ],
    definition: '\\(p\\) 级数形如 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\)，其中 \\(p\\) 为实数。当 \\(p>1\\) 时级数收敛；当 \\(p\\le1\\) 时级数发散。\\(p=1\\) 的特例称为调和级数。 · A \\(p\\)-series has the form \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\), where \\(p\\) is a real number. It converges when \\(p>1\\) and diverges when \\(p\\le1\\). The special case \\(p=1\\) is the harmonic series.',
    intuition: '把每一项看成宽为 \\(1\\)、高为 \\(\\dfrac{1}{n^{p}}\\) 的柱子。\\(p\\) 越大，高衰减越快，柱子总面积有限；\\(p=1\\) 时衰减刚好慢到总面积无限；\\(p<1\\) 时衰减更慢，更不可能收敛。 · View each term as a rectangle of width \\(1\\) and height \\(\\dfrac{1}{n^{p}}\\). The larger \\(p\\) is, the faster the height decays and the smaller the total area; at \\(p=1\\) the decay is just slow enough for the total area to be infinite; for \\(p<1\\) the decay is even slower, so convergence is even less likely.',
    intuitionDetailed: '对 \\(f(x)=x^{-p}\\) 用积分检验：\\(f\\) 在 \\([1,\\infty)\\) 上正、连续、递减。\\(p\\neq1\\) 时 \\(\\int_{1}^{b}x^{-p}\\,\\mathrm{d}x=\\dfrac{b^{1-p}-1}{1-p}\\)。若 \\(p>1\\)，\\(b^{1-p}\\to0\\)，积分趋于 \\(\\dfrac{1}{p-1}\\)；若 \\(p<1\\)，\\(b^{1-p}\\to\\infty\\)，积分发散。\\(p=1\\) 时积分为 \\(\\ln b\\to\\infty\\)。因此临界指数恰好是 \\(p=1\\)。 · Apply the integral test to \\(f(x)=x^{-p}\\): \\(f\\) is positive, continuous, and decreasing on \\([1,\\infty)\\). For \\(p\\neq1\\), \\(\\int_{1}^{b}x^{-p}\\,\\mathrm{d}x=\\dfrac{b^{1-p}-1}{1-p}\\). If \\(p>1\\), then \\(b^{1-p}\\to0\\) and the integral tends to \\(\\dfrac{1}{p-1}\\); if \\(p<1\\), then \\(b^{1-p}\\to\\infty\\) and the integral diverges. For \\(p=1\\), the integral is \\(\\ln b\\to\\infty\\). Thus the critical exponent is exactly \\(p=1\\).',
    formulas: [
      { latex: '\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\text{ 收敛 · converges}\\iff p>1', note: '\\(p\\) 级数判据。 · The \\(p\\)-series criterion.' },
      { latex: '\\sum_{n=1}^{\\infty}\\dfrac{1}{n}=+\\infty', note: '调和级数发散；部分和约为 \\(\\ln n\\)。 · The harmonic series diverges; its partial sums grow like \\(\\ln n\\).' },
      { latex: '\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x=\\dfrac{1}{p-1}\\quad(p>1)', note: '积分检验的极限值，也是尾部面积的尺度。 · The limiting value in the integral test; it also scales the tail area.' },
      { latex: '\\sum_{n=1}^{\\infty}\\dfrac{C}{n^{p}}\\text{ 与 · and }\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{p}}\\text{ 同敛散 · converge together}\\quad(C\\neq0)', note: '常数因子不影响收敛性。 · A constant factor does not affect convergence.' },
    ],
    derivationNotes: [
      { from: '\\(p\\) 级数 · \\(p\\)-series', to: '积分检验 · Integral test', note: '对递减正函数 \\(x^{-p}\\) 积分，比较积分与级数的尾部。 · Integrate the decreasing positive function \\(x^{-p}\\) and compare the integral with the tail of the series.' },
      { from: '积分值 · Integral value', to: '临界指数 · Critical exponent', note: '\\(p>1\\) 时 \\(b^{1-p}\\to0\\)，积分有有限极限；\\(p\\le1\\) 时无界。 · For \\(p>1\\), \\(b^{1-p}\\to0\\) and the integral has a finite limit; for \\(p\\le1\\) it is unbounded.' },
      { from: '\\(p=1\\)', to: '调和级数 · Harmonic series', note: '积分 \\(\\int_{1}^{b}\\dfrac{1}{x}\\,\\mathrm{d}x=\\ln b\\) 发散，所以部分和无界。 · The integral \\(\\int_{1}^{b}\\dfrac{1}{x}\\,\\mathrm{d}x=\\ln b\\) diverges, so the partial sums are unbounded.' },
    ],
    conditions: [
      '\\(p\\) 级数从 \\(n=1\\) 开始；改变起点不影响敛散性 · The \\(p\\)-series starts at \\(n=1\\); changing the starting point does not affect convergence',
      '\\(p\\) 可以是分数或负数，但只有 \\(p>1\\) 收敛 · \\(p\\) may be fractional or negative, but only \\(p>1\\) gives convergence',
      '常数因子必须非零；乘以零会把级数变成零级数 · The constant factor must be nonzero; multiplying by zero gives the zero series',
      '通项趋于零只是必要条件，不能据此判断 \\(p\\) 级数收敛 · Terms tending to zero is only necessary and cannot by itself establish convergence of a \\(p\\)-series',
      '积分检验要求被积函数正、连续、递减；\\(x^{-p}\\) 在 \\([1,\\infty)\\) 上满足 · The integral test requires a positive, continuous, decreasing integrand; \\(x^{-p}\\) satisfies these on \\([1,\\infty)\\)',
    ],
    keyPoints: [
      '\\(p>1\\) 收敛，\\(p\\le1\\) 发散 · Converges for \\(p>1\\), diverges for \\(p\\le1\\)',
      '调和级数是 \\(p=1\\) 的临界反例 · The harmonic series is the critical counterexample at \\(p=1\\)',
      '根式先化成 \\(\\dfrac{1}{\\sqrt{n}}\\) 再读 \\(p\\) · Rewrite radicals as \\(\\dfrac{1}{\\sqrt{n}}\\) before reading off \\(p\\)',
      '常数因子不影响敛散性 · A constant factor does not affect convergence',
      '\\(p\\) 级数是比较检验的基准 · The \\(p\\)-series is the benchmark for comparison tests',
    ],
    misconceptions: [
      '认为 \\(p=1\\) 时通项趋于零所以级数收敛 · Assuming the series converges at \\(p=1\\) because its terms tend to zero',
      '把 \\(\\sum\\dfrac{1}{n^{0.9}}\\) 误判为收敛 · Mistakenly judging \\(\\sum\\dfrac{1}{n^{0.9}}\\) to be convergent',
      '把 \\(\\sum\\dfrac{1}{\\sqrt{n}}\\) 当成 \\(p=2\\) 的级数 · Treating \\(\\sum\\dfrac{1}{\\sqrt{n}}\\) as a \\(p=2\\) series',
      '认为乘以常数会改变收敛性 · Thinking that multiplying by a constant changes convergence',
      '把 \\(p\\) 级数与几何级数的判据混用 · Mixing the criteria for \\(p\\)-series and geometric series',
    ],
    examples: [
      {
        title: '例 1 · 立方倒数 · Reciprocal Cubes',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{3}}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{3}}\\) converges.',
        steps: [
          '这是 \\(p=3\\) 的 \\(p\\) 级数。 · This is a \\(p\\)-series with \\(p=3\\).',
          '因为 \\(3>1\\)，由 \\(p\\) 级数判据知级数收敛。 · Because \\(3>1\\), the \\(p\\)-series criterion shows that the series converges.',
          '收敛值不需要求出；本题只问敛散性。 · The sum need not be found; the question asks only about convergence.',
        ],
        solution: '级数收敛。 · The series converges.',
        solutionLatex: '\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{3}}',
      },
      {
        title: '例 2 · 根式 · Radical',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{\\sqrt{n}}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{\\sqrt{n}}\\) converges.',
        steps: [
          '把根式写成幂的形式：\\(\\dfrac{1}{\\sqrt{n}}\\)。 · Write the radical in power form: \\(\\dfrac{1}{\\sqrt{n}}\\).',
          '所以 \\(p=\\dfrac{1}{2}\\)。 · Thus \\(p=\\dfrac{1}{2}\\).',
          '因为 \\(\\dfrac{1}{2}\\le1\\)，级数发散。 · Because \\(\\dfrac{1}{2}\\le1\\), the series diverges.',
        ],
        solution: '级数发散。 · The series diverges.',
        solutionLatex: '\\sum_{n=1}^{\\infty}\\dfrac{1}{\\sqrt{n}}',
      },
      {
        title: '例 3 · 常数因子与平移 · Constant Factor and Shift',
        prompt: '判断 \\(\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{5}{n^{1.2}}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{5}{n^{1.2}}\\) converges.',
        steps: [
          '常数因子 \\(5\\) 不影响敛散性，只看 \\(\\sum\\dfrac{1}{n^{1.2}}\\)。 · The constant factor \\(5\\) does not affect convergence, so consider only \\(\\sum\\dfrac{1}{n^{1.2}}\\).',
          '这是 \\(p=1.2\\) 的 \\(p\\) 级数，且 \\(1.2>1\\)。 · This is a \\(p\\)-series with \\(p=1.2\\), and \\(1.2>1\\).',
          '从 \\(n=2\\) 开始只去掉有限项，不改变收敛性。 · Starting at \\(n=2\\) only removes finitely many terms and does not change convergence.',
        ],
        solution: '级数收敛。 · The series converges.',
        solutionLatex: '\\sum_{n=2}^{\\infty}\\dfrac{5}{n^{1.2}}',
      },
    ],
    examTips: [
      'CED Unit 10：\\(p\\) 级数是比较检验的核心基准 · CED Unit 10: the \\(p\\)-series is the core benchmark for comparison tests',
      '看到根式先化成分数指数，再读 \\(p\\) · When you see a radical, convert it to a fractional exponent before reading off \\(p\\)',
      '选择题常把 \\(p=1\\) 与 \\(p>1\\) 放在一起考 · Multiple-choice questions often test \\(p=1\\) alongside \\(p>1\\)',
      '说明理由时要写出“因为 \\(p>1\\)”或“因为 \\(p\\le1\\)” · In justifications, state “because \\(p>1\\)” or “because \\(p\\le1\\)”',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u10', code: '10.1', title: '无穷级数的收敛与发散 · Defining Convergent and Divergent Infinite Series', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.4', title: '积分检验 · Integral Test for Convergence', relation: '推导工具 · Derivation tool' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.6', title: '比较检验 · Comparison Tests for Convergence', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.12', title: '反常积分 · Evaluating Improper Integrals', relation: '相关 · Related' },
    ],
    development: ['\\(p\\) 级数的形式 · Form of a \\(p\\)-series', '积分检验推导 · Integral-test derivation', '调和级数 · Harmonic series', '根式与负指数 · Radicals and negative exponents', '比较基准 · Comparison benchmark'],
    checks: ['为什么 \\(p=1\\) 是临界值？ · Why is \\(p=1\\) the critical value?', '调和级数通项趋于零，为什么仍发散？ · Why does the harmonic series diverge although its terms tend to zero?', '\\(\\sum\\dfrac{1}{\\sqrt{n}}\\) 的 \\(p\\) 是多少？ · What is \\(p\\) for \\(\\sum\\dfrac{1}{\\sqrt{n}}\\)?'],
    summary: '\\(p\\) 级数在 \\(p>1\\) 时收敛、\\(p\\le1\\) 时发散；调和级数是临界反例，根式要先写成负指数再判断。 · A \\(p\\)-series converges for \\(p>1\\) and diverges for \\(p\\le1\\); the harmonic series is the critical counterexample, and radicals should be rewritten with negative exponents before deciding.',
  },
  'math/calc-u10/10.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能对 \\(\\sum(-1)^{n+1}b_n\\) 检查交替级数检验的三个条件：\\(b_n>0\\)、最终递减、\\(b_n\\to0\\)。 · Check the three conditions of the alternating series test for \\(\\sum(-1)^{n+1}b_n\\): \\(b_n>0\\), eventually decreasing, and \\(b_n\\to0\\).',
      '能说明为什么“符号交替”本身不足以推出收敛，并用通项检验排除发散情形。 · Explain why alternating signs alone do not imply convergence, and use the \\(n\\)th-term test to rule out divergence cases.',
      '能区分绝对收敛与条件收敛，并估计满足条件时的截断误差不超过第一个被舍去的项。 · Distinguish absolute from conditional convergence, and estimate the truncation error by the first omitted term when the test applies.',
    ],
    essentialKnowledge: [
      '交替级数检验（AST）：若 \\(b_n>0\\)、\\(b_n\\) 从某一项起单调不增、且 \\(\\lim b_n=0\\)，则 \\(\\sum(-1)^{n+1}b_n\\) 收敛。 · Alternating series test (AST): if \\(b_n>0\\), \\(b_n\\) is eventually nonincreasing, and \\(\\lim b_n=0\\), then \\(\\sum(-1)^{n+1}b_n\\) converges.',
      '三个条件缺一不可：若 \\(b_n\\) 不趋于零，通项不趋于零，级数发散；若只交替但不递减，AST 不能使用。 · All three conditions are needed: if \\(b_n\\) does not tend to zero, the terms do not tend to zero and the series diverges; if the terms alternate but do not decrease, AST cannot be used.',
      'AST 只保证收敛，不给出和；它也不判断绝对收敛。 · AST guarantees convergence but gives neither the sum nor absolute convergence.',
      '在 AST 条件成立时，截断误差满足 \\(|S-S_N|\\le b_{N+1}\\)，即误差不超过第一个未计入的项。 · When AST applies, the truncation error satisfies \\(|S-S_N|\\le b_{N+1}\\), so the error is at most the first omitted term.',
      '交替调和级数 \\(\\sum\\dfrac{(-1)^{n+1}}{n}\\) 收敛，但绝对值级数 \\(\\sum\\dfrac{1}{n}\\) 发散，因此它是条件收敛。 · The alternating harmonic series \\(\\sum\\dfrac{(-1)^{n+1}}{n}\\) converges, but the absolute-value series \\(\\sum\\dfrac{1}{n}\\) diverges, so it is conditionally convergent.',
      '有限个初始项不影响敛散性；单调性只需“从某一项起”成立。 · Finitely many initial terms do not affect convergence; monotonicity only needs to hold eventually.',
    ],
    definition: '交替级数是正负号交替出现的级数，常写成 \\(\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n+1}b_n\\)，其中 \\(b_n>0\\)。若 \\(b_n\\) 最终单调递减且 \\(b_n\\to0\\)，则级数收敛；这就是交替级数检验。 · An alternating series has terms whose signs alternate, often written \\(\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n+1}b_n\\) with \\(b_n>0\\). If \\(b_n\\) is eventually decreasing and \\(b_n\\to0\\), the series converges; this is the alternating series test.',
    intuition: '部分和在目标值两侧来回跳：每一步都比上一步短。只要步长最终缩到零，左右端点就被夹在越来越窄的区间里，部分和必然收敛。 · The partial sums jump back and forth across the target, with each step shorter than the last. Once the step lengths shrink to zero, the left and right endpoints are trapped in narrower and narrower intervals, so the partial sums must converge.',
    intuitionDetailed: '把部分和排成 \\(S_1,S_2,S_3,\\ldots\\)。偶数项部分和单调上升，奇数项部分和单调下降，而两者之差是 \\(b_{n+1}\\)。若 \\(b_n\\) 递减趋于零，偶部分和与奇部分和被夹在同一个极限上，级数收敛。误差界也来自这个夹逼：真实和落在相邻两个部分和之间，区间长度就是下一项的绝对值。 · List the partial sums as \\(S_1,S_2,S_3,\\ldots\\). The even partial sums increase monotonically, the odd partial sums decrease monotonically, and the gap between them is \\(b_{n+1}\\). If \\(b_n\\) decreases to zero, the even and odd partial sums are squeezed to the same limit, so the series converges. The error bound comes from the same squeeze: the true sum lies between two consecutive partial sums, and the interval length is the absolute value of the next term.',
    formulas: [
      { latex: '\\sum_{n=1}^{\\infty}(-1)^{n+1}b_n\\text{ 收敛 · converges}', note: '当 \\(b_n>0\\)、\\(b_n\\) 最终递减、\\(b_n\\to0\\)。 · When \\(b_n>0\\), \\(b_n\\) is eventually decreasing, and \\(b_n\\to0\\).' },
      { latex: '|S-S_N|\\le b_{N+1}', note: 'AST 条件成立时的截断误差上界。 · Truncation-error bound when AST applies.' },
      { latex: '\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}=\\ln2', note: '交替调和级数收敛；其绝对值级数发散，故为条件收敛。 · The alternating harmonic series converges; its absolute-value series diverges, so it is conditionally convergent.' },
      { latex: 'b_n\\not\\to0\\;\\Rightarrow\\;\\sum(-1)^{n+1}b_n\\text{ 发散 · diverges}', note: '通项检验；AST 的第一个条件就失败。 · The \\(n\\)th-term test; the first AST condition already fails.' },
    ],
    derivationNotes: [
      { from: '相邻部分和 · Consecutive partial sums', to: '区间夹逼 · Interval squeeze', note: '\\(S_{2k}\\) 递增、\\(S_{2k-1}\\) 递减，且 \\(S_{2k-1}-S_{2k}=b_{2k}\\to0\\)。 · \\(S_{2k}\\) increases, \\(S_{2k-1}\\) decreases, and \\(S_{2k-1}-S_{2k}=b_{2k}\\to0\\).' },
      { from: '夹逼极限 · Squeeze limit', to: '收敛 · Convergence', note: '两个子列趋于同一极限，整个部分和序列收敛。 · The two subsequences tend to the same limit, so the entire sequence of partial sums converges.' },
      { from: '相邻部分和之差 · Difference of consecutive partial sums', to: '误差界 · Error bound', note: '真实和夹在 \\(S_N\\) 与 \\(S_{N+1}\\) 之间，距离不超过 \\(b_{N+1}\\)。 · The true sum lies between \\(S_N\\) and \\(S_{N+1}\\), at distance at most \\(b_{N+1}\\).' },
    ],
    conditions: [
      '\\(b_n>0\\)：把符号完全交给 \\((-1)^{n+1}\\) · \\(b_n>0\\): let \\((-1)^{n+1}\\) carry the sign',
      '\\(b_n\\) 必须最终单调不增；只要求极限为零不够 · \\(b_n\\) must eventually be nonincreasing; a zero limit alone is not enough',
      '\\(b_n\\to0\\) 是必要条件；不满足时级数发散 · \\(b_n\\to0\\) is necessary; if it fails, the series diverges',
      'AST 只适用于交替级数；非交替级数不能用 · AST applies only to alternating series; it cannot be used for nonalternating series',
      '误差界 \\(|S-S_N|\\le b_{N+1}\\) 需要 AST 的三个条件都成立 · The error bound \\(|S-S_N|\\le b_{N+1}\\) requires all three AST conditions',
    ],
    keyPoints: [
      'AST 三条件：正、最终递减、趋于零 · AST has three conditions: positive, eventually decreasing, tending to zero',
      '符号交替不等于收敛 · Alternating signs do not imply convergence',
      'AST 不判断绝对收敛 · AST does not determine absolute convergence',
      '误差不超过第一个被舍去的项 · The error is at most the first omitted term',
      '交替调和级数是条件收敛的标准例子 · The alternating harmonic series is the standard conditional-convergence example',
    ],
    misconceptions: [
      '看到正负交替就直接判定收敛，不检查 \\(b_n\\) 的单调性与极限 · Declaring convergence as soon as signs alternate, without checking the monotonicity and limit of \\(b_n\\)',
      '把 \\(b_n\\to0\\) 当作 AST 的全部条件 · Treating \\(b_n\\to0\\) as the whole AST condition',
      '认为 AST 能求出级数的和 · Thinking AST gives the sum of the series',
      '把“收敛”与“绝对收敛”混为一谈 · Confusing convergence with absolute convergence',
      '在 \\(b_n\\) 不递减时仍使用误差界 · Using the error bound when \\(b_n\\) is not decreasing',
    ],
    examples: [
      {
        title: '例 1 · 交替调和级数 · Alternating Harmonic Series',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}\\) converges.',
        steps: [
          '令 \\(b_n=\\dfrac{1}{n}\\)，则 \\(b_n>0\\)。 · Let \\(b_n=\\dfrac{1}{n}\\); then \\(b_n>0\\).',
          '\\(b_n\\) 单调递减，且 \\(\\lim_{n\\to\\infty}\\dfrac{1}{n}=0\\)。 · \\(b_n\\) decreases monotonically, and \\(\\lim_{n\\to\\infty}\\dfrac{1}{n}=0\\).',
          '三个条件都满足，由 AST 知级数收敛。 · All three conditions hold, so AST shows that the series converges.',
        ],
        solution: '级数收敛；但它不是绝对收敛，因为 \\(\\sum\\dfrac{1}{n}\\) 发散。 · The series converges, but not absolutely, because \\(\\sum\\dfrac{1}{n}\\) diverges.',
        solutionLatex: '\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}',
      },
      {
        title: '例 2 · 通项不趋于零 · Terms Do Not Tend to Zero',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n+1}\\dfrac{n}{n+1}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n+1}\\dfrac{n}{n+1}\\) converges.',
        steps: [
          '令 \\(b_n=\\dfrac{n}{n+1}\\)。 · Let \\(b_n=\\dfrac{n}{n+1}\\).',
          '\\(\\lim_{n\\to\\infty}b_n=1\\neq0\\)，所以通项不趋于零。 · \\(\\lim_{n\\to\\infty}b_n=1\\neq0\\), so the terms do not tend to zero.',
          '由 \\(n\\) 项检验，级数发散；AST 不适用。 · By the \\(n\\)th-term test, the series diverges; AST does not apply.',
        ],
        solution: '级数发散。 · The series diverges.',
        solutionLatex: '\\sum_{n=1}^{\\infty}(-1)^{n+1}\\dfrac{n}{n+1}',
      },
      {
        title: '例 3 · 误差估计 · Error Estimate',
        prompt: '用前四项近似 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}\\)，估计误差上界。 · Use the first four terms to approximate \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}\\), and estimate the error bound.',
        steps: [
          'AST 条件成立，误差不超过第一个被舍去的项。 · AST applies, so the error is at most the first omitted term.',
          '前四项之后的第一项是 \\(b_5=\\dfrac{1}{5}\\)。 · The first term after the first four is \\(b_5=\\dfrac{1}{5}\\).',
          '所以 \\(|S-S_4|\\le\\dfrac{1}{5}=0.2\\)。 · Thus \\(|S-S_4|\\le\\dfrac{1}{5}=0.2\\).',
        ],
        solution: '误差不超过 \\(0.2\\)；实际误差通常更小。 · The error is at most \\(0.2\\); the actual error is usually smaller.',
        solutionLatex: '|S-S_4|\\le\\dfrac{1}{5}',
      },
    ],
    examTips: [
      'CED Unit 10：AST 与误差界常一起考 · CED Unit 10: AST and the error bound are often tested together',
      '先写 \\(b_n\\)，再逐条检查三个条件 · Write \\(b_n\\) first, then check the three conditions one by one',
      '若 \\(b_n\\) 不趋于零，直接写通项检验发散 · If \\(b_n\\) does not tend to zero, use the \\(n\\)th-term test to conclude divergence',
      '误差题只取第一个未计入的项，不要继续加后面项 · For error questions, use only the first omitted term, not further terms',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u10', code: '10.3', title: 'n 项检验 · The nth Term Test for Divergence', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.5', title: '调和级数与 p 级数 · Harmonic Series and p-Series', relation: '对比 · Contrast' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.9', title: '绝对与条件收敛 · Determining Absolute or Conditional Convergence', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.10', title: '交替级数误差 · Alternating Series Error Bound', relation: '后续 · Follow-up' },
    ],
    development: ['交替级数的形式 · Form of an alternating series', 'AST 三条件 · The three AST conditions', '部分和夹逼 · Squeezing partial sums', '误差界 · Error bound', '条件收敛的例子 · A conditional-convergence example'],
    checks: ['为什么符号交替本身不能保证收敛？ · Why do alternating signs alone not guarantee convergence?', 'AST 的三个条件分别起什么作用？ · What role does each of the three AST conditions play?', '误差界为什么是第一个被舍去的项？ · Why is the error bound the first omitted term?'],
    summary: '交替级数检验要求正项、最终递减、趋于零；满足时级数收敛且误差不超过下一项，但它不保证绝对收敛。 · The alternating series test requires positive terms, eventual decrease, and a zero limit; when it applies, the series converges with error at most the next term, but absolute convergence is not guaranteed.',
  },
  'math/calc-u10/10.8': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能对 \\(\\sum a_n\\) 计算 \\(L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|\\)，并按 \\(L<1\\)、\\(L>1\\)、\\(L=1\\) 判定。 · Compute \\(L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|\\) for \\(\\sum a_n\\) and classify the result as \\(L<1\\), \\(L>1\\), or \\(L=1\\).',
      '能在含阶乘、指数与 \\(n\\) 次幂的比值中正确约分，避免漏项。 · Simplify ratios involving factorials, exponentials, and \\(n\\)th powers without dropping factors.',
      '能识别 \\(L=1\\) 时比值检验无结论，并改用 \\(p\\) 级数、积分检验或比较检验。 · Recognize that the ratio test is inconclusive when \\(L=1\\) and switch to a \\(p\\)-series, the integral test, or a comparison test.',
    ],
    essentialKnowledge: [
      '比值检验判定的是绝对收敛：\\(L<1\\) 时 \\(\\sum a_n\\) 绝对收敛，因此收敛。 · The ratio test detects absolute convergence: if \\(L<1\\), then \\(\\sum a_n\\) converges absolutely and therefore converges.',
      '\\(L>1\\)（包括 \\(L=\\infty\\)）时通项最终增大，\\(a_n\\not\\to0\\)，级数发散。 · If \\(L>1\\) (including \\(L=\\infty\\)), the terms eventually grow, so \\(a_n\\not\\to0\\) and the series diverges.',
      '\\(L=1\\) 时比值检验无结论；调和级数与 \\(p\\) 级数都给出 \\(L=1\\)，但敛散性不同。 · The ratio test is inconclusive when \\(L=1\\); both the harmonic series and \\(p\\)-series give \\(L=1\\), yet their convergence behavior differs.',
      '阶乘的比值 \\(\\dfrac{(n+1)!}{n!}=n+1\\)；指数的比值 \\(\\dfrac{2^{n+1}}{2^{n}}=2\\)。 · For factorials, \\(\\dfrac{(n+1)!}{n!}=n+1\\); for exponentials, \\(\\dfrac{2^{n+1}}{2^{n}}=2\\).',
      '几何级数的比值就是 \\(|r|\\)，所以比值检验可看作几何级数判据的推广。 · The ratio of a geometric series is \\(|r|\\), so the ratio test generalizes the geometric-series criterion.',
      '比值检验对含阶乘与指数的级数最有效；对有理函数型通项常得到 \\(L=1\\)。 · The ratio test is most effective for series with factorials and exponentials; rational-function terms often give \\(L=1\\).',
    ],
    definition: '对正项或可带符号的级数 \\(\\sum a_n\\)，令 \\(L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|\\)。若 \\(L<1\\)，级数绝对收敛；若 \\(L>1\\) 或 \\(L=\\infty\\)，级数发散；若 \\(L=1\\)，检验失效，需改用其他方法。 · For a series \\(\\sum a_n\\) with positive or signed terms, let \\(L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|\\). If \\(L<1\\), the series converges absolutely; if \\(L>1\\) or \\(L=\\infty\\), it diverges; if \\(L=1\\), the test is inconclusive and another method is needed.',
    intuition: '比值检验在问：从某一项到下一项，大小是稳定地缩小还是放大？若最终每步都按小于 \\(1\\) 的倍数缩小，尾部就像几何级数一样被压住；若按大于 \\(1\\) 的倍数放大，通项不可能趋于零。 · The ratio test asks whether the magnitude steadily shrinks or grows from one term to the next. If each step eventually shrinks by a factor less than \\(1\\), the tail is controlled like a geometric series; if each step grows by a factor greater than \\(1\\), the terms cannot tend to zero.',
    intuitionDetailed: '设 \\(L<1\\)，取一个介于 \\(L\\) 与 \\(1\\) 之间的数 \\(q\\)。从某一项起有 \\(|a_{n+1}|\\le q|a_n|\\)，于是尾部被几何级数 \\(|a_N|q^{n-N}\\) 控制，级数绝对收敛。若 \\(L>1\\)，同样从某一项起 \\(|a_{n+1}|\\ge q|a_n|\\)（\\(q>1\\)），通项绝对值增大，不可能趋于零，故发散。\\(L=1\\) 时比值可能略大于或略小于 \\(1\\)，没有统一结论。 · If \\(L<1\\), choose \\(q\\) between \\(L\\) and \\(1\\). Eventually \\(|a_{n+1}|\\le q|a_n|\\), so the tail is controlled by the geometric series \\(|a_N|q^{n-N}\\) and the series converges absolutely. If \\(L>1\\), then eventually \\(|a_{n+1}|\\ge q|a_n|\\) for some \\(q>1\\); the magnitudes grow, so they cannot tend to zero and the series diverges. When \\(L=1\\), the ratio may be slightly above or below \\(1\\), and no general conclusion follows.',
    formulas: [
      { latex: 'L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|', note: '比值检验的核心极限。 · The central limit in the ratio test.' },
      { latex: 'L<1\\;\\Rightarrow\\;\\sum a_n\\text{ 绝对收敛 · converges absolutely}', note: '比值检验的收敛结论。 · The convergence conclusion of the ratio test.' },
      { latex: 'L>1\\text{ 或 · or }L=\\infty\\;\\Rightarrow\\;\\sum a_n\\text{ 发散 · diverges}', note: '通项不趋于零。 · The terms do not tend to zero.' },
      { latex: 'L=1\\;\\Rightarrow\\;\\text{无结论 · inconclusive}', note: '需改用 \\(p\\) 级数、积分检验或比较检验。 · Use a \\(p\\)-series, the integral test, or a comparison test instead.' },
    ],
    derivationNotes: [
      { from: '相邻项比值 · Ratio of consecutive terms', to: '几何控制 · Geometric control', note: '\\(L<1\\) 时最终有 \\(|a_{n+1}|\\le q|a_n|\\)，尾部被几何级数控制。 · If \\(L<1\\), eventually \\(|a_{n+1}|\\le q|a_n|\\), so the tail is controlled by a geometric series.' },
      { from: '几何控制 · Geometric control', to: '绝对收敛 · Absolute convergence', note: '比较检验给出 \\(\\sum|a_n|\\) 收敛，从而 \\(\\sum a_n\\) 收敛。 · The comparison test gives convergence of \\(\\sum|a_n|\\), hence convergence of \\(\\sum a_n\\).' },
      { from: '\\(L>1\\)', to: '发散 · Divergence', note: '通项绝对值最终增大，\\(a_n\\not\\to0\\)，由 \\(n\\) 项检验发散。 · The magnitudes eventually grow, so \\(a_n\\not\\to0\\) and the \\(n\\)th-term test gives divergence.' },
    ],
    conditions: [
      '\\(a_n\\neq0\\) 对足够大的 \\(n\\) 成立，比值才有定义 · \\(a_n\\neq0\\) for all sufficiently large \\(n\\), so the ratio is defined',
      '\\(L\\) 必须是有限数或 \\(+\\infty\\)；若比值振荡无极限，比值检验不能直接使用 · \\(L\\) must be finite or \\(+\\infty\\); if the ratio oscillates without a limit, the ratio test cannot be applied directly',
      '\\(L=1\\) 不是“收敛”，也不是“发散”，而是“无法判断” · \\(L=1\\) means neither convergence nor divergence; it means the test is inconclusive',
      '比值检验判定绝对收敛；条件收敛级数可能得到 \\(L=1\\) · The ratio test detects absolute convergence; a conditionally convergent series may give \\(L=1\\)',
      '阶乘与指数要分别约分，不要把 \\((n+1)!\\) 写成 \\((n+1)n!\\) 后漏掉因子 · Simplify factorials and exponentials separately; do not drop the factor after writing \\((n+1)!=(n+1)n!\\)',
    ],
    keyPoints: [
      '\\(L<1\\) 绝对收敛 · \\(L<1\\) gives absolute convergence',
      '\\(L>1\\) 发散 · \\(L>1\\) gives divergence',
      '\\(L=1\\) 无结论 · \\(L=1\\) is inconclusive',
      '阶乘比值 \\(\\dfrac{(n+1)!}{n!}=n+1\\) · The factorial ratio \\(\\dfrac{(n+1)!}{n!}=n+1\\)',
      '指数比值 \\(\\dfrac{c^{n+1}}{c^{n}}=c\\) · The exponential ratio \\(\\dfrac{c^{n+1}}{c^{n}}=c\\)',
      '几何级数是比值检验的原型 · Geometric series are the prototype for the ratio test',
    ],
    misconceptions: [
      '把 \\(L=1\\) 直接判为收敛 · Declaring convergence when \\(L=1\\)',
      '把 \\(L>1\\) 判为条件收敛 · Calling a series conditionally convergent when \\(L>1\\)',
      '忘记绝对值，只比较带符号的比值 · Forgetting the absolute value and comparing signed ratios',
      '约分阶乘时丢掉 \\((n+1)\\) 因子 · Dropping the \\((n+1)\\) factor when simplifying factorials',
      '对振荡比值的级数强行套比值检验 · Forcing the ratio test on a series whose ratio oscillates',
    ],
    examples: [
      {
        title: '例 1 · 指数除以阶乘 · Exponential over Factorial',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^{n}}{n!}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2^{n}}{n!}\\) converges.',
        steps: [
          '写比值：\\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{2^{n+1}}{(n+1)!}\\cdot\\dfrac{n!}{2^{n}}\\)。 · Write the ratio: \\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{2^{n+1}}{(n+1)!}\\cdot\\dfrac{n!}{2^{n}}\\).',
          '约分得 \\(\\dfrac{2}{n+1}\\)。 · Simplify to \\(\\dfrac{2}{n+1}\\).',
          '取极限：\\(L=\\lim_{n\\to\\infty}\\dfrac{2}{n+1}=0<1\\)。 · Take the limit: \\(L=\\lim_{n\\to\\infty}\\dfrac{2}{n+1}=0<1\\).',
        ],
        solution: '级数绝对收敛，因此收敛。 · The series converges absolutely, hence converges.',
        solutionLatex: 'L=0<1',
      },
      {
        title: '例 2 · 阶乘增长太快 · Factorials Dominate',
        prompt: '判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n!}{3^{n}}\\) 是否收敛。 · Determine whether \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n!}{3^{n}}\\) converges.',
        steps: [
          '写比值：\\(\\dfrac{(n+1)!}{3^{n+1}}\\cdot\\dfrac{3^{n}}{n!}\\)。 · Write the ratio: \\(\\dfrac{(n+1)!}{3^{n+1}}\\cdot\\dfrac{3^{n}}{n!}\\).',
          '约分得 \\(\\dfrac{n+1}{3}\\)。 · Simplify to \\(\\dfrac{n+1}{3}\\).',
          '取极限：\\(L=\\infty>1\\)，所以级数发散。 · Take the limit: \\(L=\\infty>1\\), so the series diverges.',
        ],
        solution: '级数发散。 · The series diverges.',
        solutionLatex: 'L=\\infty',
      },
      {
        title: '例 3 · 无结论的情形 · The Inconclusive Case',
        prompt: '对 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n}\\) 使用比值检验，会得到什么？ · What does the ratio test give for \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n}\\)?',
        steps: [
          '\\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{\\dfrac{1}{n+1}}{\\dfrac{1}{n}}=\\dfrac{n}{n+1}\\)。 · \\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{\\dfrac{1}{n+1}}{\\dfrac{1}{n}}=\\dfrac{n}{n+1}\\).',
          '取极限得 \\(L=1\\)。 · Taking the limit gives \\(L=1\\).',
          '比值检验无结论；但这是调和级数，由 \\(p\\) 级数判据知它发散。 · The ratio test is inconclusive; however, this is the harmonic series, which diverges by the \\(p\\)-series criterion.',
        ],
        solution: '比值检验得到 \\(L=1\\)，无法判断；改用 \\(p\\) 级数判据得发散。 · The ratio test gives \\(L=1\\) and is inconclusive; the \\(p\\)-series criterion shows divergence.',
        solutionLatex: 'L=1',
      },
    ],
    examTips: [
      'CED Unit 10：阶乘与指数是比值检验的高频对象 · CED Unit 10: factorials and exponentials are frequent targets of the ratio test',
      '先写清楚 \\(a_{n+1}\\) 与 \\(a_n\\)，再约分，避免跳步 · Write \\(a_{n+1}\\) and \\(a_n\\) clearly before simplifying to avoid skipped steps',
      '得到 \\(L=1\\) 时立刻换方法，不要在比值上继续纠缠 · When \\(L=1\\), switch methods immediately instead of manipulating the ratio further',
      '结论要写“绝对收敛”或“发散”，不要只写 \\(L\\) 的值 · State “absolutely convergent” or “divergent,” not just the value of \\(L\\)',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u10', code: '10.2', title: '几何级数 · Working with Geometric Series', relation: '原型 · Prototype' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.5', title: '调和级数与 p 级数 · Harmonic Series and p-Series', relation: '对比 · Contrast' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.7', title: '交替级数 · Alternating Series Test for Convergence', relation: '相关 · Related' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.13', title: '半径与区间 · Radius and Interval of Convergence of Power Series', relation: '后续 · Follow-up' },
    ],
    development: ['比值检验的极限 · Limit in the ratio test', '几何控制 · Geometric control', '阶乘与指数约分 · Simplifying factorials and exponentials', '\\(L=1\\) 的处理 · Handling \\(L=1\\)', '绝对收敛 · Absolute convergence'],
    checks: ['为什么 \\(L=1\\) 时不能下结论？ · Why is no conclusion possible when \\(L=1\\)?', '阶乘比值如何快速约分？ · How do you simplify a factorial ratio quickly?', '比值检验与几何级数判据有什么关系？ · How does the ratio test relate to the geometric-series criterion?'],
    summary: '比值检验用相邻项之比的极限判断：\\(L<1\\) 绝对收敛，\\(L>1\\) 发散，\\(L=1\\) 需换方法；阶乘与指数是它的主战场。 · The ratio test uses the limit of consecutive-term ratios: \\(L<1\\) gives absolute convergence, \\(L>1\\) gives divergence, and \\(L=1\\) requires another method; factorials and exponentials are its main arena.',
  },
  'math/calc-u10/10.13': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用比值检验求幂级数 \\(\\sum c_n(x-a)^{n}\\) 的收敛半径 \\(R\\)。 · Use the ratio test to find the radius of convergence \\(R\\) of a power series \\(\\sum c_n(x-a)^{n}\\).',
      '能写出以 \\(a\\) 为中心的候选区间，并分别代入两个端点判断是否收敛。 · Write the candidate interval centered at \\(a\\) and check each endpoint for convergence.',
      '能区分收敛半径与收敛区间，并用区间记号写出最终答案。 · Distinguish the radius of convergence from the interval of convergence and write the final answer in interval notation.',
    ],
    essentialKnowledge: [
      '幂级数在 \\(|x-a|<R\\) 内绝对收敛，在 \\(|x-a|>R\\) 外发散；\\(R\\) 称为收敛半径，可以为 \\(0\\) 或 \\(+\\infty\\)。 · A power series converges absolutely for \\(|x-a|<R\\) and diverges for \\(|x-a|>R\\); \\(R\\) is the radius of convergence and may be \\(0\\) or \\(+\\infty\\).',
      '对通项作比值检验，极限中出现 \\(|x-a|\\cdot L\\)，其中 \\(L=\\lim\\left|\\dfrac{c_{n+1}}{c_n}\\right|\\)；由 \\(|x-a|L<1\\) 得 \\(R=\\dfrac{1}{L}\\)。 · Applying the ratio test produces \\(|x-a|\\cdot L\\), where \\(L=\\lim\\left|\\dfrac{c_{n+1}}{c_n}\\right|\\); from \\(|x-a|L<1\\) we get \\(R=\\dfrac{1}{L}\\).',
      '若 \\(L=0\\)，则 \\(R=+\\infty\\)，幂级数在整个实数轴上收敛；若 \\(L=+\\infty\\)，则 \\(R=0\\)，只在 \\(x=a\\) 收敛。 · If \\(L=0\\), then \\(R=+\\infty\\) and the series converges on the entire real line; if \\(L=+\\infty\\), then \\(R=0\\) and it converges only at \\(x=a\\).',
      '端点 \\(x=a-R\\) 与 \\(x=a+R\\) 必须单独代入原级数，不能由半径直接判定。 · The endpoints \\(x=a-R\\) and \\(x=a+R\\) must be substituted into the original series; the radius alone does not decide them.',
      '端点可能都收敛、都发散、或一个收敛一个发散；收敛区间因此有四种形式：\\((a-R,a+R)\\)、\\([a-R,a+R)\\)、\\((a-R,a+R]\\)、\\([a-R,a+R]\\)。 · Both endpoints may converge, both may diverge, or one may converge and the other diverge; the interval therefore has four possible forms: \\((a-R,a+R)\\), \\([a-R,a+R)\\), \\((a-R,a+R]\\), and \\([a-R,a+R]\\).',
      '在收敛半径内部，幂级数可以逐项求导与逐项积分，收敛半径不变，但端点的敛散性可能改变。 · Inside the radius, a power series may be differentiated and integrated term by term; the radius stays the same, but endpoint behavior may change.',
    ],
    definition: '幂级数形如 \\(\\displaystyle\\sum_{n=0}^{\\infty}c_n(x-a)^{n}\\)，其中 \\(a\\) 为中心。若存在 \\(R\\ge0\\) 使级数在 \\(|x-a|<R\\) 时绝对收敛、在 \\(|x-a|>R\\) 时发散，则 \\(R\\) 为收敛半径；再检验 \\(x=a\\pm R\\) 两个端点，得到收敛区间。 · A power series has the form \\(\\displaystyle\\sum_{n=0}^{\\infty}c_n(x-a)^{n}\\), where \\(a\\) is the center. If there is \\(R\\ge0\\) such that the series converges absolutely for \\(|x-a|<R\\) and diverges for \\(|x-a|>R\\), then \\(R\\) is the radius of convergence; checking the endpoints \\(x=a\\pm R\\) gives the interval of convergence.',
    intuition: '幂级数像一条以 \\(a\\) 为中心的“收敛带”：离中心足够近就一定收敛，离得足够远就一定发散。半径告诉你带子有多宽；端点恰好站在边界上，必须逐点检查。 · A power series is like a “convergence band” centered at \\(a\\): close enough to the center it must converge, far enough away it must diverge. The radius tells you how wide the band is; the endpoints sit exactly on the boundary and must be checked individually.',
    intuitionDetailed: '把 \\(x\\) 暂时固定，幂级数就是关于 \\(n\\) 的级数。比值检验给出 \\(\\lim\\left|\\dfrac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^{n}}\\right|=|x-a|L\\)。要绝对收敛，需要 \\(|x-a|L<1\\)，即 \\(|x-a|<\\dfrac{1}{L}\\)。因此半径由系数增长速率决定，与 \\(x\\) 无关。端点处 \\(|x-a|L=1\\)，比值检验失效，必须回到具体数值级数，用 \\(p\\) 级数、交替级数或比较检验判断。 · Fix \\(x\\) temporarily; the power series becomes a series in \\(n\\). The ratio test gives \\(\\lim\\left|\\dfrac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^{n}}\\right|=|x-a|L\\). Absolute convergence requires \\(|x-a|L<1\\), that is, \\(|x-a|<\\dfrac{1}{L}\\). Thus the radius is determined by the growth rate of the coefficients and is independent of \\(x\\). At an endpoint \\(|x-a|L=1\\), the ratio test fails, and we must return to the concrete numerical series and use a \\(p\\)-series, an alternating series test, or a comparison test.',
    formulas: [
      { latex: 'R=\\lim_{n\\to\\infty}\\left|\\dfrac{c_n}{c_{n+1}}\\right|', note: '当极限存在且非零时；等价于 \\(R=\\dfrac{1}{L}\\)。 · When the limit exists and is nonzero; equivalent to \\(R=\\dfrac{1}{L}\\).' },
      { latex: '|x-a|<R\\;\\Rightarrow\\;\\text{绝对收敛 · absolute convergence}', note: '开区间内部。 · Inside the open interval.' },
      { latex: '|x-a|>R\\;\\Rightarrow\\;\\text{发散 · divergence}', note: '开区间外部。 · Outside the open interval.' },
      { latex: 'x=a\\pm R\\;\\Rightarrow\\;\\text{单独检验 · check separately}', note: '端点可能收敛也可能发散。 · An endpoint may converge or diverge.' },
    ],
    derivationNotes: [
      { from: '幂级数通项 · General term', to: '比值 · Ratio', note: '\\(\\left|\\dfrac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^{n}}\\right|=|x-a|\\left|\\dfrac{c_{n+1}}{c_n}\\right|\\)。 · \\(\\left|\\dfrac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^{n}}\\right|=|x-a|\\left|\\dfrac{c_{n+1}}{c_n}\\right|\\)。' },
      { from: '比值极限 · Ratio limit', to: '半径 · Radius', note: '令 \\(|x-a|L<1\\)，得 \\(|x-a|<\\dfrac{1}{L}=R\\)。 · Set \\(|x-a|L<1\\) to get \\(|x-a|<\\dfrac{1}{L}=R\\).' },
      { from: '端点 · Endpoints', to: '数值级数 · Numerical series', note: '代入 \\(x=a\\pm R\\) 后不再含 \\(x\\)，用其他判据判断。 · After substituting \\(x=a\\pm R\\), the series no longer contains \\(x\\); use another test.' },
    ],
    conditions: [
      '比值极限存在时才能直接用 \\(R=\\dfrac{1}{L}\\)；若比值振荡，需用根值检验或其他方法 · \\(R=\\dfrac{1}{L}\\) requires the ratio limit to exist; if it oscillates, use the root test or another method',
      '\\(R\\) 是非负数，不能写成负数；\\(R=+\\infty\\) 与 \\(R=0\\) 都是合法情形 · \\(R\\) is nonnegative; both \\(R=+\\infty\\) and \\(R=0\\) are valid',
      '端点必须代入原级数，不能只看 \\(|x-a|=R\\) · Endpoints must be substituted into the original series; do not rely only on \\(|x-a|=R\\)',
      '收敛区间以 \\(a\\) 为中心，长度至多为 \\(2R\\) · The interval is centered at \\(a\\) and has length at most \\(2R\\)',
      '逐项求导或积分不改变半径，但可能改变端点敛散性 · Term-by-term differentiation or integration preserves the radius but may change endpoint behavior',
    ],
    keyPoints: [
      '先求 \\(R\\)，再写开区间 \\((a-R,a+R)\\) · Find \\(R\\) first, then write the open interval \\((a-R,a+R)\\)',
      '端点逐个代入原级数 · Substitute each endpoint into the original series',
      '\\(R=+\\infty\\) 时区间为 \\((-\\infty,+\\infty)\\) · If \\(R=+\\infty\\), the interval is \\((-\\infty,+\\infty)\\)',
      '\\(R=0\\) 时区间退化为单点 \\(\\{a\\}\\) · If \\(R=0\\), the interval collapses to the single point \\(\\{a\\}\\)',
      '半径与区间是两个不同的答案 · Radius and interval are two different answers',
    ],
    misconceptions: [
      '求出 \\(R=1\\) 就直接写收敛区间为 \\([-1,1]\\) · Writing \\([-1,1]\\) as the interval as soon as \\(R=1\\) is found',
      '忘记把区间平移回中心 \\(a\\) · Forgetting to shift the interval back to the center \\(a\\)',
      '只检验一个端点 · Checking only one endpoint',
      '把 \\(R\\) 写成 \\(\\dfrac{1}{L}\\) 却把 \\(L\\) 算成 \\(|x-a|\\) 的函数 · Writing \\(R=\\dfrac{1}{L}\\) but computing \\(L\\) as a function of \\(|x-a|\\)',
      '认为端点一定收敛或一定发散 · Assuming endpoints must converge or must diverge',
    ],
    examples: [
      {
        title: '例 1 · 中心在原点 · Center at the Origin',
        prompt: '求 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{x^{n}}{n}\\) 的收敛半径与收敛区间。 · Find the radius and interval of convergence of \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{x^{n}}{n}\\).',
        steps: [
          '系数 \\(c_n=\\dfrac{1}{n}\\)，比值 \\(\\left|\\dfrac{c_{n+1}}{c_n}\\right|=\\dfrac{n}{n+1}\\to1\\)。 · The coefficient is \\(c_n=\\dfrac{1}{n}\\), and the ratio is \\(\\left|\\dfrac{c_{n+1}}{c_n}\\right|=\\dfrac{n}{n+1}\\to1\\).',
          '所以 \\(R=\\dfrac{1}{1}=1\\)，开区间为 \\((-1,1)\\)。 · Thus \\(R=\\dfrac{1}{1}=1\\), and the open interval is \\((-1,1)\\).',
          '端点 \\(x=1\\)：级数为 \\(\\sum\\dfrac{1}{n}\\)，调和级数，发散。 · Endpoint \\(x=1\\): the series is \\(\\sum\\dfrac{1}{n}\\), the harmonic series, which diverges.',
          '端点 \\(x=-1\\)：级数为 \\(\\sum\\dfrac{(-1)^{n}}{n}\\)，由 AST 收敛。 · Endpoint \\(x=-1\\): the series is \\(\\sum\\dfrac{(-1)^{n}}{n}\\), which converges by AST.',
        ],
        solution: '收敛半径 \\(R=1\\)，收敛区间为 \\([-1,1)\\)。 · The radius is \\(R=1\\), and the interval of convergence is \\([-1,1)\\).',
        solutionLatex: 'R=1,\\quad [-1,1)',
      },
      {
        title: '例 2 · 中心平移 · Shifted Center',
        prompt: '求 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x-2)^{n}}{n\\,3^{n}}\\) 的收敛半径与收敛区间。 · Find the radius and interval of convergence of \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x-2)^{n}}{n\\,3^{n}}\\).',
        steps: [
          '系数 \\(c_n=\\dfrac{1}{n\\,3^{n}}\\)，比值 \\(\\left|\\dfrac{c_{n+1}}{c_n}\\right|=\\dfrac{n\\,3^{n}}{(n+1)3^{n+1}}=\\dfrac{n}{3(n+1)}\\to\\dfrac{1}{3}\\)。 · The coefficient is \\(c_n=\\dfrac{1}{n\\,3^{n}}\\), and the ratio is \\(\\left|\\dfrac{c_{n+1}}{c_n}\\right|=\\dfrac{n\\,3^{n}}{(n+1)3^{n+1}}=\\dfrac{n}{3(n+1)}\\to\\dfrac{1}{3}\\).',
          '所以 \\(R=3\\)，中心为 \\(2\\)，开区间为 \\((-1,5)\\)。 · Thus \\(R=3\\), the center is \\(2\\), and the open interval is \\((-1,5)\\).',
          '端点 \\(x=5\\)：级数为 \\(\\sum\\dfrac{1}{n}\\)，发散。 · Endpoint \\(x=5\\): the series is \\(\\sum\\dfrac{1}{n}\\), which diverges.',
          '端点 \\(x=-1\\)：级数为 \\(\\sum\\dfrac{(-1)^{n}}{n}\\)，收敛。 · Endpoint \\(x=-1\\): the series is \\(\\sum\\dfrac{(-1)^{n}}{n}\\), which converges.',
        ],
        solution: '收敛半径 \\(R=3\\)，收敛区间为 \\([-1,5)\\)。 · The radius is \\(R=3\\), and the interval of convergence is \\([-1,5)\\).',
        solutionLatex: 'R=3,\\quad [-1,5)',
      },
      {
        title: '例 3 · 全平面收敛 · Convergence on the Whole Line',
        prompt: '求 \\(\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{x^{n}}{n!}\\) 的收敛半径与收敛区间。 · Find the radius and interval of convergence of \\(\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{x^{n}}{n!}\\).',
        steps: [
          '比值 \\(\\left|\\dfrac{c_{n+1}}{c_n}\\right|=\\dfrac{n!}{(n+1)!}=\\dfrac{1}{n+1}\\to0\\)。 · The ratio is \\(\\left|\\dfrac{c_{n+1}}{c_n}\\right|=\\dfrac{n!}{(n+1)!}=\\dfrac{1}{n+1}\\to0\\).',
          '因此 \\(L=0\\)，\\(R=+\\infty\\)。 · Therefore \\(L=0\\) and \\(R=+\\infty\\).',
          '对任意实数 \\(x\\)，比值极限都为 \\(0<1\\)，级数绝对收敛。 · For every real \\(x\\), the ratio limit is \\(0<1\\), so the series converges absolutely.',
        ],
        solution: '收敛半径 \\(R=+\\infty\\)，收敛区间为 \\((-\\infty,+\\infty)\\)。 · The radius is \\(R=+\\infty\\), and the interval of convergence is \\((-\\infty,+\\infty)\\).',
        solutionLatex: 'R=+\\infty,\\quad (-\\infty,+\\infty)',
      },
    ],
    examTips: [
      'CED Unit 10：先写 \\(R\\)，再写开区间，最后检验端点 · CED Unit 10: find \\(R\\), write the open interval, then check endpoints',
      '端点检验要写出具体级数名称或判据 · When checking an endpoint, name the concrete series or test',
      '区间端点用方括号还是圆括号，取决于端点是否收敛 · Use brackets or parentheses according to whether each endpoint converges',
      '中心不是原点时，先做平移再套公式，避免位置错误 · When the center is not the origin, shift first before applying the formula',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u10', code: '10.8', title: '比值检验 · Ratio Test for Convergence', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.7', title: '交替级数 · Alternating Series Test for Convergence', relation: '端点工具 · Endpoint tool' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.14', title: '求函数的泰勒或麦克劳林级数 · Finding Taylor or Maclaurin Series for a Function', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.15', title: '函数表示为幂级数 · Representing Functions as Power Series', relation: '后续 · Follow-up' },
    ],
    development: ['幂级数的中心与系数 · Center and coefficients', '比值检验 · Ratio test', '收敛半径 · Radius of convergence', '端点检验 · Endpoint checks', '收敛区间记号 · Interval notation'],
    checks: ['为什么端点必须单独检验？ · Why must endpoints be checked separately?', '\\(R=+\\infty\\) 与 \\(R=0\\) 分别表示什么？ · What do \\(R=+\\infty\\) and \\(R=0\\) mean?', '收敛半径与收敛区间有什么区别？ · What is the difference between the radius and the interval of convergence?'],
    summary: '幂级数先用比值检验求半径，再以 \\(a\\) 为中心写开区间，最后逐个代入端点；半径是宽度，区间才是最终答案。 · For a power series, use the ratio test to find the radius, write the open interval centered at \\(a\\), then substitute each endpoint; the radius is the width, while the interval is the final answer.',
  },
  'math/calc-u10/10.14': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能由函数在 \\(x=a\\) 处的导数表写出泰勒级数 \\(\\sum\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}\\)。 · Write the Taylor series \\(\\sum\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}\\) from the derivative table of a function at \\(x=a\\).',
      '能用代换、乘法、逐项求导或逐项积分，从已知展开得到新函数的幂级数。 · Obtain a new power series from a known expansion by substitution, multiplication, term-by-term differentiation, or term-by-term integration.',
      '能说明泰勒级数等于原函数需要余项趋于零，并写出常见展开的收敛区间。 · Explain that a Taylor series equals the original function only when the remainder tends to zero, and state the intervals of convergence of common expansions.',
    ],
    essentialKnowledge: [
      '泰勒级数在 \\(a\\) 处的系数是 \\(\\dfrac{f^{(n)}(a)}{n!}\\)；麦克劳林级数是 \\(a=0\\) 的特例。 · The Taylor coefficient at \\(a\\) is \\(\\dfrac{f^{(n)}(a)}{n!}\\); the Maclaurin series is the special case \\(a=0\\).',
      '常见展开：\\(e^{x}=\\sum\\dfrac{x^{n}}{n!}\\)、\\(\\sin x=\\sum\\dfrac{(-1)^{n}x^{2n+1}}{(2n+1)!}\\)、\\(\\cos x=\\sum\\dfrac{(-1)^{n}x^{2n}}{(2n)!}\\)、\\(\\dfrac{1}{1-x}=\\sum x^{n}\\)（\\(|x|<1\\)）。 · Common expansions: \\(e^{x}=\\sum\\dfrac{x^{n}}{n!}\\), \\(\\sin x=\\sum\\dfrac{(-1)^{n}x^{2n+1}}{(2n+1)!}\\), \\(\\cos x=\\sum\\dfrac{(-1)^{n}x^{2n}}{(2n)!}\\), and \\(\\dfrac{1}{1-x}=\\sum x^{n}\\) for \\(|x|<1\\).',
      '在收敛半径内可逐项求导与逐项积分，所得级数收敛半径不变。 · Inside the radius of convergence, term-by-term differentiation and integration preserve the radius.',
      '代换要把整个旧变量替换掉，例如 \\(e^{-x^{2}}\\) 中令 \\(u=-x^{2}\\)，逐项写 \\(\\dfrac{(-x^{2})^{n}}{n!}\\)。 · Substitution must replace the entire old variable; for \\(e^{-x^{2}}\\), set \\(u=-x^{2}\\) and write \\(\\dfrac{(-x^{2})^{n}}{n!}\\) term by term.',
      '泰勒级数只是形式幂级数；它是否等于原函数取决于余项在区间上是否趋于零。 · A Taylor series is only a formal power series; whether it equals the original function depends on whether the remainder tends to zero on the interval.',
      '由已知级数得到的新级数，其收敛半径可用代换条件或比值检验重新确认。 · For a new series obtained from a known one, recheck the radius using the substitution condition or the ratio test.',
    ],
    definition: '函数 \\(f\\) 在 \\(x=a\\) 处的泰勒级数为 \\(\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}\\)。当 \\(a=0\\) 时称为麦克劳林级数。若在某个区间上余项 \\(R_n(x)\\to0\\)，则泰勒级数在该区间收敛到 \\(f(x)\\)。 · The Taylor series of \\(f\\) at \\(x=a\\) is \\(\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}\\). When \\(a=0\\) it is called the Maclaurin series. If the remainder \\(R_n(x)\\to0\\) on an interval, the Taylor series converges to \\(f(x)\\) there.',
    intuition: '泰勒级数把函数在一点的全部导数信息打包成多项式：常数项对齐函数值，一次项对齐斜率，二次项对齐弯曲程度，阶乘负责抵消重复求导产生的系数。 · A Taylor series packages all derivative information at one point into a polynomial: the constant term matches the value, the linear term matches the slope, the quadratic term matches the curvature, and factorials cancel the coefficients produced by repeated differentiation.',
    intuitionDetailed: '从已知展开出发比每次求导更快。例如 \\(\\dfrac{1}{1-x}\\) 是几何级数；把 \\(x\\) 换成 \\(-x^{2}\\) 就得到 \\(\\dfrac{1}{1+x^{2}}\\)；再逐项积分得到 \\(\\arctan x\\)。对 \\(\\cos x\\) 乘以 \\(x\\) 就得到 \\(x\\cos x\\)。这些操作在共同收敛半径内合法，端点要重新检查。 · Starting from known expansions is faster than differentiating each time. For example, \\(\\dfrac{1}{1-x}\\) is geometric; replacing \\(x\\) by \\(-x^{2}\\) gives \\(\\dfrac{1}{1+x^{2}}\\), and integrating term by term gives \\(\\arctan x\\). Multiplying \\(\\cos x\\) by \\(x\\) gives \\(x\\cos x\\). These operations are valid inside the common radius, but endpoints must be checked again.',
    formulas: [
      { latex: 'f(x)=\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^{n}', note: '泰勒级数在余项趋于零时成立。 · The Taylor series holds when the remainder tends to zero.' },
      { latex: 'e^{x}=\\sum_{n=0}^{\\infty}\\dfrac{x^{n}}{n!}\\quad(-\\infty<x<\\infty)', note: '指数函数的麦克劳林级数。 · The Maclaurin series of the exponential function.' },
      { latex: '\\dfrac{1}{1-x}=\\sum_{n=0}^{\\infty}x^{n}\\quad(|x|<1)', note: '几何级数，是许多展开的起点。 · The geometric series, the starting point for many expansions.' },
      { latex: '\\ln(1+x)=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}x^{n}}{n}\\quad(-1<x\\le1)', note: '由 \\(\\dfrac{1}{1+x}\\) 逐项积分得到。 · Obtained by integrating \\(\\dfrac{1}{1+x}\\) term by term.' },
    ],
    derivationNotes: [
      { from: '导数表 · Derivative table', to: '泰勒系数 · Taylor coefficients', note: '第 \\(n\\) 项系数为 \\(\\dfrac{f^{(n)}(a)}{n!}\\)，使多项式在 \\(a\\) 处匹配各阶导数。 · The \\(n\\)th coefficient is \\(\\dfrac{f^{(n)}(a)}{n!}\\), making the polynomial match derivatives up to order \\(n\\) at \\(a\\).' },
      { from: '几何级数 · Geometric series', to: '代换与积分 · Substitution and integration', note: '把 \\(x\\) 换成 \\(-x^{2}\\) 或逐项积分，可得 \\(\\dfrac{1}{1+x^{2}}\\) 与 \\(\\arctan x\\) 的展开。 · Replace \\(x\\) by \\(-x^{2}\\) or integrate term by term to get the expansions of \\(\\dfrac{1}{1+x^{2}}\\) and \\(\\arctan x\\).' },
      { from: '余项 · Remainder', to: '等式成立 · Equality', note: '只有 \\(R_n(x)\\to0\\) 时，泰勒级数才收敛到原函数。 · The Taylor series converges to the original function only when \\(R_n(x)\\to0\\).' },
    ],
    conditions: [
      '函数在展开点必须有所有需要的导数 · The function must have all required derivatives at the expansion point',
      '代换、求导、积分必须在原级数的收敛半径内进行 · Substitution, differentiation, and integration must occur inside the original radius of convergence',
      '泰勒级数本身可能收敛到别的函数；等式需要余项条件 · A Taylor series may converge to a different function; equality requires the remainder condition',
      '阶乘不能漏，尤其是偶数项与奇数项只取一半时 · Do not omit factorials, especially when only even or odd powers appear',
      '端点敛散性要单独判断，不能由开区间直接继承 · Endpoint behavior must be checked separately; it is not inherited from the open interval',
    ],
    keyPoints: [
      '系数是 \\(\\dfrac{f^{(n)}(a)}{n!}\\) · The coefficient is \\(\\dfrac{f^{(n)}(a)}{n!}\\)',
      '麦克劳林级数是 \\(a=0\\) 的特例 · The Maclaurin series is the case \\(a=0\\)',
      '从几何级数出发做代换、求导、积分最省力 · Starting from the geometric series and using substitution, differentiation, or integration is most efficient',
      '常见展开的收敛半径要记牢 · Remember the radii of common expansions',
      '泰勒级数等于函数需要余项趋于零 · Equality requires the remainder to tend to zero',
    ],
    misconceptions: [
      '认为写出泰勒级数就等于函数本身 · Assuming that writing a Taylor series proves equality with the function',
      '忘记除以阶乘 · Forgetting to divide by the factorial',
      '把 \\(e^{-x^{2}}\\) 的展开写成 \\(-e^{x^{2}}\\) · Writing the expansion of \\(e^{-x^{2}}\\) as \\(-e^{x^{2}}\\)',
      '在收敛半径外逐项求导或积分 · Differentiating or integrating term by term outside the radius',
      '把 \\(\\sin x\\) 的奇次项与 \\(\\cos x\\) 的偶次项混淆 · Confusing the odd powers of \\(\\sin x\\) with the even powers of \\(\\cos x\\)',
    ],
    examples: [
      {
        title: '例 1 · 代换 · Substitution',
        prompt: '求 \\(f(x)=e^{-x^{2}}\\) 的麦克劳林级数。 · Find the Maclaurin series of \\(f(x)=e^{-x^{2}}\\).',
        steps: [
          '已知 \\(e^{u}=\\sum_{n=0}^{\\infty}\\dfrac{u^{n}}{n!}\\)。 · We know \\(e^{u}=\\sum_{n=0}^{\\infty}\\dfrac{u^{n}}{n!}\\).',
          '令 \\(u=-x^{2}\\)，得 \\(e^{-x^{2}}=\\sum_{n=0}^{\\infty}\\dfrac{(-x^{2})^{n}}{n!}\\)。 · Set \\(u=-x^{2}\\) to get \\(e^{-x^{2}}=\\sum_{n=0}^{\\infty}\\dfrac{(-x^{2})^{n}}{n!}\\).',
          '化简：\\(\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{n!}\\)。 · Simplify: \\(\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{n!}\\).',
        ],
        solution: '\\(e^{-x^{2}}=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{n!}\\)，收敛区间为 \\((-\\infty,+\\infty)\\)。 · \\(e^{-x^{2}}=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{n!}\\), with interval of convergence \\((-\\infty,+\\infty)\\).',
        solutionLatex: 'e^{-x^{2}}=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{n!}',
      },
      {
        title: '例 2 · 几何级数代换 · Geometric Substitution',
        prompt: '求 \\(f(x)=\\dfrac{1}{1+x^{2}}\\) 的麦克劳林级数。 · Find the Maclaurin series of \\(f(x)=\\dfrac{1}{1+x^{2}}\\).',
        steps: [
          '已知 \\(\\dfrac{1}{1-u}=\\sum_{n=0}^{\\infty}u^{n}\\)，\\(|u|<1\\)。 · We know \\(\\dfrac{1}{1-u}=\\sum_{n=0}^{\\infty}u^{n}\\) for \\(|u|<1\\).',
          '令 \\(u=-x^{2}\\)，得 \\(\\dfrac{1}{1+x^{2}}=\\sum_{n=0}^{\\infty}(-x^{2})^{n}\\)。 · Set \\(u=-x^{2}\\) to get \\(\\dfrac{1}{1+x^{2}}=\\sum_{n=0}^{\\infty}(-x^{2})^{n}\\).',
          '化简：\\(\\sum_{n=0}^{\\infty}(-1)^{n}x^{2n}\\)；条件 \\(|-x^{2}|<1\\) 即 \\(|x|<1\\)。 · Simplify: \\(\\sum_{n=0}^{\\infty}(-1)^{n}x^{2n}\\); the condition \\(|-x^{2}|<1\\) means \\(|x|<1\\).',
        ],
        solution: '\\(\\dfrac{1}{1+x^{2}}=\\sum_{n=0}^{\\infty}(-1)^{n}x^{2n}\\)，收敛区间为 \\((-1,1)\\)。 · \\(\\dfrac{1}{1+x^{2}}=\\sum_{n=0}^{\\infty}(-1)^{n}x^{2n}\\), with interval of convergence \\((-1,1)\\).',
        solutionLatex: '\\dfrac{1}{1+x^{2}}=\\sum_{n=0}^{\\infty}(-1)^{n}x^{2n}',
      },
      {
        title: '例 3 · 乘法 · Multiplication',
        prompt: '求 \\(f(x)=x\\cos x\\) 的麦克劳林级数。 · Find the Maclaurin series of \\(f(x)=x\\cos x\\).',
        steps: [
          '已知 \\(\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{(2n)!}\\)。 · We know \\(\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n}}{(2n)!}\\).',
          '两边乘以 \\(x\\)：\\(x\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n+1}}{(2n)!}\\)。 · Multiply both sides by \\(x\\): \\(x\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n+1}}{(2n)!}\\).',
          '乘以 \\(x\\) 不改变收敛半径，仍为 \\(+\\infty\\)。 · Multiplying by \\(x\\) does not change the radius, which remains \\(+\\infty\\).',
        ],
        solution: '\\(x\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n+1}}{(2n)!}\\)，收敛区间为 \\((-\\infty,+\\infty)\\)。 · \\(x\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n+1}}{(2n)!}\\), with interval of convergence \\((-\\infty,+\\infty)\\).',
        solutionLatex: 'x\\cos x=\\sum_{n=0}^{\\infty}\\dfrac{(-1)^{n}x^{2n+1}}{(2n)!}',
      },
    ],
    examTips: [
      'CED Unit 10：先认已知展开，再代换、乘法、求导或积分 · CED Unit 10: recognize a known expansion first, then substitute, multiply, differentiate, or integrate',
      '写出前两三项可检查阶乘与符号 · Write the first two or three terms to check factorials and signs',
      '新级数的收敛半径要重新确认，尤其是代换后 · Recheck the radius of the new series, especially after substitution',
      '不要把泰勒多项式与泰勒级数混为一谈 · Do not confuse a Taylor polynomial with a Taylor series',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u10', code: '10.11', title: '泰勒多项式导论 · Finding Taylor Polynomial Approximations of Functions', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.12', title: '拉格朗日误差界 · Lagrange Error Bound', relation: '误差 · Error' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.13', title: '半径与区间 · Radius and Interval of Convergence of Power Series', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.15', title: '函数表示为幂级数 · Representing Functions as Power Series', relation: '后续 · Follow-up' },
    ],
    development: ['泰勒系数 · Taylor coefficients', '麦克劳林级数 · Maclaurin series', '常见展开 · Common expansions', '代换与乘法 · Substitution and multiplication', '逐项求导与积分 · Term-by-term differentiation and integration'],
    checks: ['为什么泰勒系数要除以 \\(n!\\)？ · Why is the Taylor coefficient divided by \\(n!\\)?', '写出泰勒级数是否一定等于原函数？ · Does writing a Taylor series always mean it equals the original function?', '如何从 \\(\\dfrac{1}{1-x}\\) 得到 \\(\\ln(1+x)\\) 的展开？ · How do you get the expansion of \\(\\ln(1+x)\\) from \\(\\dfrac{1}{1-x}\\)?'],
    summary: '泰勒级数用 \\(\\dfrac{f^{(n)}(a)}{n!}\\) 作系数；实际解题常从几何级数、指数与三角函数出发，通过代换、乘法、求导或积分得到新展开。 · Taylor series use coefficients \\(\\dfrac{f^{(n)}(a)}{n!}\\); in practice, start from geometric, exponential, and trigonometric expansions and obtain new ones by substitution, multiplication, differentiation, or integration.',
  },
  'math/calc-u9/9.3': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能写出参数曲线弧长积分 \\(L=\\int_{a}^{b}\\sqrt{\\left(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\right)^{2}+\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\right)^{2}}\\,\\mathrm{d}t\\)。 · Write the arc-length integral for a parametric curve: \\(L=\\int_{a}^{b}\\sqrt{\\left(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\right)^{2}+\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\right)^{2}}\\,\\mathrm{d}t\\).',
      '能从 \\(\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\) 解释弧长微元的来源。 · Explain the origin of the arc-length element \\(\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\).',
      '能对圆、直线与多项式参数曲线建立弧长积分，并用换元完成计算。 · Set up and evaluate arc-length integrals for circles, lines, and polynomial parametric curves using substitution.',
    ],
    essentialKnowledge: [
      '参数曲线的速度向量为 \\(\\langle x\'(t),y\'(t)\\rangle\\)，速率是它的长度 \\(\\sqrt{(x\')^{2}+(y\')^{2}}\\)。 · The velocity vector of a parametric curve is \\(\\langle x\'(t),y\'(t)\\rangle\\), and its speed is \\(\\sqrt{(x\')^{2}+(y\')^{2}}\\).',
      '弧长是速率对时间的积分；在 \\(t\\) 的区间上累加 \\(\\mathrm{d}s\\) 就得到曲线长度。 · Arc length is the integral of speed over time; accumulating \\(\\mathrm{d}s\\) over the \\(t\\)-interval gives the curve length.',
      '当曲线由 \\(y=f(x)\\) 给出时，取 \\(x=t\\)、\\(y=f(t)\\)，公式退化为 \\(\\int\\sqrt{1+(f\')^{2}}\\,\\mathrm{d}x\\)。 · When the curve is given by \\(y=f(x)\\), take \\(x=t\\) and \\(y=f(t)\\); the formula reduces to \\(\\int\\sqrt{1+(f\')^{2}}\\,\\mathrm{d}x\\).',
      '光滑曲线要求 \\(x\'(t)\\) 与 \\(y\'(t)\\) 连续，且不同时为零；尖点处要分段处理。 · A smooth curve requires \\(x\'(t)\\) and \\(y\'(t)\\) to be continuous and not simultaneously zero; cusps require splitting the integral.',
      '积分限是参数 \\(t\\) 的范围，不是 \\(x\\) 或 \\(y\\) 的范围。 · The limits are the range of the parameter \\(t\\), not the range of \\(x\\) or \\(y\\).',
      '弧长与参数化方式无关；同一段曲线换一种参数化，积分值不变（方向反转只改变积分限）。 · Arc length is independent of parametrization; reparametrizing the same curve leaves the value unchanged (reversing direction only swaps the limits).',
    ],
    definition: '若曲线由 \\(x=x(t)\\)、\\(y=y(t)\\)（\\(a\\le t\\le b\\)）给出，且导数连续、不同时为零，则弧长为 \\(\\displaystyle L=\\int_{a}^{b}\\sqrt{\\left(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\right)^{2}+\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\right)^{2}}\\,\\mathrm{d}t\\)。 · If a curve is given by \\(x=x(t)\\), \\(y=y(t)\\) for \\(a\\le t\\le b\\), with continuous derivatives that are not simultaneously zero, then its arc length is \\(\\displaystyle L=\\int_{a}^{b}\\sqrt{\\left(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\right)^{2}+\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\right)^{2}}\\,\\mathrm{d}t\\).',
    intuition: '把曲线切成许多极短的段，每一小段在 \\(x\\) 方向走 \\(\\mathrm{d}x\\)、在 \\(y\\) 方向走 \\(\\mathrm{d}y\\)，由勾股定理长度约为 \\(\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\)。把所有小段加起来就是弧长。 · Cut the curve into many tiny pieces; each piece moves \\(\\mathrm{d}x\\) horizontally and \\(\\mathrm{d}y\\) vertically, so by the Pythagorean theorem its length is approximately \\(\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\). Adding all the pieces gives the arc length.',
    intuitionDetailed: '用参数 \\(t\\) 表示时，\\(\\mathrm{d}x=x\'(t)\\,\\mathrm{d}t\\)、\\(\\mathrm{d}y=y\'(t)\\,\\mathrm{d}t\\)，所以 \\(\\mathrm{d}s=\\sqrt{(x\')^{2}+(y\')^{2}}\\,\\mathrm{d}t\\)。这与“速率乘时间”一致：速率是速度向量的长度，积分就是总路程。对 \\(y=f(x)\\)，\\(x\'(t)=1\\)、\\(y\'(t)=f\'(x)\\)，公式自然退化为标量弧长公式。 · In terms of \\(t\\), \\(\\mathrm{d}x=x\'(t)\\,\\mathrm{d}t\\) and \\(\\mathrm{d}y=y\'(t)\\,\\mathrm{d}t\\), so \\(\\mathrm{d}s=\\sqrt{(x\')^{2}+(y\')^{2}}\\,\\mathrm{d}t\\). This agrees with “speed times time”: speed is the length of the velocity vector, and its integral is total distance. For \\(y=f(x)\\), \\(x\'(t)=1\\) and \\(y\'(t)=f\'(x)\\), so the formula reduces to the scalar arc-length formula.',
    formulas: [
      { latex: 'L=\\int_{a}^{b}\\sqrt{\\left(\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}\\right)^{2}+\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}\\right)^{2}}\\,\\mathrm{d}t', note: '参数曲线弧长。 · Arc length of a parametric curve.' },
      { latex: '\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}', note: '弧长微元；来自勾股定理。 · Arc-length element from the Pythagorean theorem.' },
      { latex: 'L=\\int_{a}^{b}\\left|\\mathbf{v}(t)\\right|\\mathrm{d}t', note: '速率积分；与距离 traveled 一致。 · Integral of speed; equal to distance traveled.' },
      { latex: 'L=\\int_{c}^{d}\\sqrt{1+\\left(\\dfrac{\\mathrm{d}x}{\\mathrm{d}y}\\right)^{2}}\\,\\mathrm{d}y', note: '以 \\(y\\) 为参数时的等价形式。 · Equivalent form when \\(y\\) is the parameter.' },
    ],
    derivationNotes: [
      { from: '参数曲线 · Parametric curve', to: '速度向量 · Velocity vector', note: '\\(\\mathbf{v}(t)=\\langle x\'(t),y\'(t)\\rangle\\)，速率 \\(\\left|\\mathbf{v}\\right|\\)。 · \\(\\mathbf{v}(t)=\\langle x\'(t),y\'(t)\\rangle\\), with speed \\(\\left|\\mathbf{v}\\right|\\).' },
      { from: '速度向量 · Velocity vector', to: '弧长微元 · Arc-length element', note: '\\(\\mathrm{d}s=\\left|\\mathbf{v}\\right|\\mathrm{d}t=\\sqrt{(x\')^{2}+(y\')^{2}}\\,\\mathrm{d}t\\)。 · \\(\\mathrm{d}s=\\left|\\mathbf{v}\\right|\\mathrm{d}t=\\sqrt{(x\')^{2}+(y\')^{2}}\\,\\mathrm{d}t\\).' },
      { from: '弧长微元 · Arc-length element', to: '总弧长 · Total arc length', note: '对 \\(t\\) 从 \\(a\\) 到 \\(b\\) 积分，累加所有小段。 · Integrate from \\(a\\) to \\(b\\) to accumulate all pieces.' },
    ],
    conditions: [
      '导数 \\(x\'(t)\\)、\\(y\'(t)\\) 在区间上连续 · The derivatives \\(x\'(t)\\) and \\(y\'(t)\\) are continuous on the interval',
      '速度不能恒为零；尖点或自交点要分段 · The velocity cannot be identically zero; cusps or self-intersections require splitting',
      '积分限是参数范围，不是曲线在坐标轴上的投影范围 · Limits are parameter values, not the projection range on an axis',
      '曲线必须按 \\(t\\) 的方向描过一次；反向只改变积分限 · The curve must be traced once in the \\(t\\)-direction; reversing only swaps the limits',
      '被积函数非负，弧长结果应为正 · The integrand is nonnegative, so the arc length must be positive',
    ],
    keyPoints: [
      '弧长 = 速率积分 · Arc length is the integral of speed',
      '先求 \\(x\'(t)\\) 与 \\(y\'(t)\\)，再平方相加开根号 · Find \\(x\'(t)\\) and \\(y\'(t)\\), then square, add, and take the square root',
      '不要漏掉根号里的 \\(1\\)（当以 \\(x\\) 为参数时） · Do not omit the \\(1\\) under the radical when \\(x\\) is the parameter',
      '积分限用 \\(t\\) 的范围 · Use the \\(t\\)-range for the limits',
      '结果与参数化无关 · The result is independent of parametrization',
    ],
    misconceptions: [
      '只积 \\(\\sqrt{(x\')^{2}+(y\')^{2}}\\) 却把 \\(\\mathrm{d}t\\) 写成 \\(\\mathrm{d}x\\) · Integrating \\(\\sqrt{(x\')^{2}+(y\')^{2}}\\) but writing \\(\\mathrm{d}x\\) instead of \\(\\mathrm{d}t\\)',
      '忘记开根号或漏掉平方 · Forgetting the square root or the squares',
      '把 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) 直接当作弧长微元 · Treating \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) itself as the arc-length element',
      '用 \\(x\\) 的范围代替 \\(t\\) 的范围 · Using the \\(x\\)-range instead of the \\(t\\)-range',
      '把弧长与曲线下面积混淆 · Confusing arc length with area under a curve',
    ],
    examples: [
      {
        title: '例 1 · 多项式参数曲线 · Polynomial Parametric Curve',
        prompt: '求 \\(x=t^{2}\\)、\\(y=t^{3}\\)（\\(0\\le t\\le1\\)）的弧长。 · Find the arc length of \\(x=t^{2}\\), \\(y=t^{3}\\) for \\(0\\le t\\le1\\).',
        steps: [
          '\\(x\'(t)=2t\\)，\\(y\'(t)=3t^{2}\\)。 · \\(x\'(t)=2t\\) and \\(y\'(t)=3t^{2}\\).',
          '弧长微元：\\(\\sqrt{(2t)^{2}+(3t^{2})^{2}}=\\sqrt{4t^{2}+9t^{4}}=t\\sqrt{4+9t^{2}}\\)（\\(t\\ge0\\)）。 · Arc-length element: \\(\\sqrt{(2t)^{2}+(3t^{2})^{2}}=\\sqrt{4t^{2}+9t^{4}}=t\\sqrt{4+9t^{2}}\\) for \\(t\\ge0\\).',
          '令 \\(u=4+9t^{2}\\)，则 \\(\\mathrm{d}u=18t\\,\\mathrm{d}t\\)。 · Let \\(u=4+9t^{2}\\); then \\(\\mathrm{d}u=18t\\,\\mathrm{d}t\\).',
          '\\(L=\\dfrac{1}{18}\\int_{4}^{13}\\sqrt{u}\\,\\mathrm{d}u=\\dfrac{1}{18}\\cdot\\dfrac{2}{3}\\left(13\\sqrt{13}-8\\right)=\\dfrac{13\\sqrt{13}-8}{27}\\)。 · \\(L=\\dfrac{1}{18}\\int_{4}^{13}\\sqrt{u}\\,\\mathrm{d}u=\\dfrac{1}{18}\\cdot\\dfrac{2}{3}\\left(13\\sqrt{13}-8\\right)=\\dfrac{13\\sqrt{13}-8}{27}\\).',
        ],
        solution: '\\(L=\\dfrac{13\\sqrt{13}-8}{27}\\)。 · \\(L=\\dfrac{13\\sqrt{13}-8}{27}\\).',
        solutionLatex: 'L=\\dfrac{13\\sqrt{13}-8}{27}',
      },
      {
        title: '例 2 · 圆 · Circle',
        prompt: '求 \\(x=3\\cos t\\)、\\(y=3\\sin t\\)（\\(0\\le t\\le2\\pi\\)）的弧长。 · Find the arc length of \\(x=3\\cos t\\), \\(y=3\\sin t\\) for \\(0\\le t\\le2\\pi\\).',
        steps: [
          '\\(x\'(t)=-3\\sin t\\)，\\(y\'(t)=3\\cos t\\)。 · \\(x\'(t)=-3\\sin t\\) and \\(y\'(t)=3\\cos t\\).',
          '\\(\\sqrt{(x\')^{2}+(y\')^{2}}=\\sqrt{9\\sin^{2}t+9\\cos^{2}t}=3\\)。 · \\(\\sqrt{(x\')^{2}+(y\')^{2}}=\\sqrt{9\\sin^{2}t+9\\cos^{2}t}=3\\).',
          '\\(L=\\int_{0}^{2\\pi}3\\,\\mathrm{d}t=6\\pi\\)。 · \\(L=\\int_{0}^{2\\pi}3\\,\\mathrm{d}t=6\\pi\\).',
        ],
        solution: '\\(L=6\\pi\\)，即半径为 \\(3\\) 的圆周长。 · \\(L=6\\pi\\), the circumference of a circle of radius \\(3\\).',
        solutionLatex: 'L=6\\pi',
      },
      {
        title: '例 3 · 直线段 · Line Segment',
        prompt: '求 \\(x=1+2t\\)、\\(y=3-4t\\)（\\(0\\le t\\le2\\)）的弧长。 · Find the arc length of \\(x=1+2t\\), \\(y=3-4t\\) for \\(0\\le t\\le2\\).',
        steps: [
          '\\(x\'(t)=2\\)，\\(y\'(t)=-4\\)。 · \\(x\'(t)=2\\) and \\(y\'(t)=-4\\).',
          '速率为 \\(\\sqrt{2^{2}+(-4)^{2}}=\\sqrt{20}=2\\sqrt{5}\\)。 · The speed is \\(\\sqrt{2^{2}+(-4)^{2}}=\\sqrt{20}=2\\sqrt{5}\\).',
          '\\(L=\\int_{0}^{2}2\\sqrt{5}\\,\\mathrm{d}t=4\\sqrt{5}\\)。 · \\(L=\\int_{0}^{2}2\\sqrt{5}\\,\\mathrm{d}t=4\\sqrt{5}\\).',
        ],
        solution: '\\(L=4\\sqrt{5}\\)。 · \\(L=4\\sqrt{5}\\).',
        solutionLatex: 'L=4\\sqrt{5}',
      },
    ],
    examTips: [
      'CED Unit 9：参数弧长常与向量运动、距离 traveled 一起考 · CED Unit 9: parametric arc length often appears with vector motion and distance traveled',
      '先分别写 \\(x\'(t)\\)、\\(y\'(t)\\)，再合并根号 · Write \\(x\'(t)\\) and \\(y\'(t)\\) separately before combining the radical',
      '根号内可以提出 \\(t^{2}\\) 时注意 \\(\\sqrt{t^{2}}=|t|\\) · When factoring \\(t^{2}\\) out of a radical, remember \\(\\sqrt{t^{2}}=|t|\\)',
      '计算复杂时先写积分式，再看是否需要换元或数值近似 · For complicated integrals, set up the integral first, then decide on substitution or numerical approximation',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u9', code: '9.1', title: '参数运动导数 · Defining and Differentiating Parametric Equations', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u9', code: '9.2', title: '参数二阶导数 · Second Derivatives of Parametric Equations', relation: '相关 · Related' },
      { subject: 'math', chapterId: 'calc-u9', code: '9.6', title: '向量运动解题 · Solving Motion Problems Using Parametric and Vector-Valued Functions', relation: '应用 · Application' },
      { subject: 'math', chapterId: 'calc-u8', code: '8.13', title: '弧长 · The Arc Length of a Smooth, Planar Curve and Distance Traveled', relation: '对比 · Contrast' },
    ],
    development: ['参数曲线与速度 · Parametric curves and velocity', '弧长微元 · Arc-length element', '积分公式 · Integral formula', '换元计算 · Substitution', '与标量弧长的关系 · Relation to scalar arc length'],
    checks: ['弧长微元为什么是 \\(\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\)？ · Why is the arc-length element \\(\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\)?', '参数弧长的积分限应该用哪个变量的范围？ · Which variable’s range gives the limits for parametric arc length?', '圆的参数化为什么给出 \\(2\\pi r\\)？ · Why does the parametrization of a circle give \\(2\\pi r\\)?'],
    summary: '参数曲线弧长是速率对参数的积分：先求两个导数，平方相加开根号，再在参数区间上积分。 · Parametric arc length is the integral of speed with respect to the parameter: find both derivatives, square and add them under a radical, then integrate over the parameter interval.',
  },
  'math/calc-u9/9.7': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能在极坐标 \\((r,\\theta)\\) 与直角坐标 \\((x,y)\\) 之间转换，并处理负半径与多值角。 · Convert between polar coordinates \\((r,\\theta)\\) and rectangular coordinates \\((x,y)\\), including negative radii and multiple angles.',
      '能对 \\(r=f(\\theta)\\) 使用 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\) 求切线斜率。 · Use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\) to find the slope of the tangent line for \\(r=f(\\theta)\\).',
      '能由 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) 与 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) 判断水平切线与竖直切线，并单独处理极点。 · Use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) to identify horizontal and vertical tangents, treating the pole separately.',
    ],
    essentialKnowledge: [
      '极坐标与直角坐标的关系为 \\(x=r\\cos\\theta\\)、\\(y=r\\sin\\theta\\)；反过来 \\(r^{2}=x^{2}+y^{2}\\)，\\(\\tan\\theta=\\dfrac{y}{x}\\)（要按象限修正）。 · Polar and rectangular coordinates satisfy \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\); conversely, \\(r^{2}=x^{2}+y^{2}\\) and \\(\\tan\\theta=\\dfrac{y}{x}\\) (with quadrant correction).',
      '极坐标表示不唯一：\\((r,\\theta)\\) 与 \\((-r,\\theta+\\pi)\\) 表示同一点；负半径和周期性都要考虑。 · Polar representation is not unique: \\((r,\\theta)\\) and \\((-r,\\theta+\\pi)\\) represent the same point; negative radii and periodicity must be considered.',
      '把 \\(x=f(\\theta)\\cos\\theta\\)、\\(y=f(\\theta)\\sin\\theta\\) 看作参数方程，切线斜率就是 \\(\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\)。 · Treat \\(x=f(\\theta)\\cos\\theta\\) and \\(y=f(\\theta)\\sin\\theta\\) as parametric equations; the tangent slope is \\(\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\).',
      '水平切线要求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) 且 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)；竖直切线要求 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) 且 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\)。 · A horizontal tangent requires \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0\\) and \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\); a vertical tangent requires \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\).',
      '在极点 \\(r=0\\) 处两个导数可能同时为零，切线要用极限或转回直角坐标判断。 · At the pole \\(r=0\\), both derivatives may vanish; the tangent must be found by a limit or by converting to rectangular coordinates.',
      '\\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 本身不是切线斜率；它只描述半径随角度变化的速度。 · \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) is not itself the tangent slope; it only describes how the radius changes with angle.',
    ],
    definition: '极坐标用有序对 \\((r,\\theta)\\) 描述点：\\(r\\) 是到极点的有向距离，\\(\\theta\\) 是与正 \\(x\\) 轴的夹角。曲线 \\(r=f(\\theta)\\) 可化为参数方程 \\(x=f(\\theta)\\cos\\theta\\)、\\(y=f(\\theta)\\sin\\theta\\)，所以 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\)。 · Polar coordinates describe a point by an ordered pair \\((r,\\theta)\\): \\(r\\) is the directed distance from the pole, and \\(\\theta\\) is the angle from the positive \\(x\\)-axis. A curve \\(r=f(\\theta)\\) becomes the parametric equations \\(x=f(\\theta)\\cos\\theta\\), \\(y=f(\\theta)\\sin\\theta\\), so \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}\\).',
    intuition: '极坐标曲线像一根从极点伸出的“雷达臂”：角度转动时，臂的长度 \\(r\\) 随之伸缩。切线方向不是臂的伸缩速度，而是端点实际移动的方向，所以要同时考虑“转动”和“伸缩”两部分。 · A polar curve is like a radar arm extending from the pole: as the angle turns, the arm length \\(r\\) expands or contracts. The tangent direction is not the rate of expansion but the direction in which the endpoint actually moves, so both turning and stretching contribute.',
    intuitionDetailed: '从 \\(x=f(\\theta)\\cos\\theta\\)、\\(y=f(\\theta)\\sin\\theta\\) 出发，对 \\(\\theta\\) 求导：\\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta\\)，\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta\\)。两者相除就是 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)。若分子为零而分母不为零，切线水平；若分母为零而分子不为零，切线竖直。若两者同时为零，曲线可能在极点或出现尖点，需要看极限。 · Starting from \\(x=f(\\theta)\\cos\\theta\\) and \\(y=f(\\theta)\\sin\\theta\\), differentiate with respect to \\(\\theta\\): \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta\\) and \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta\\). Their quotient is \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\). If the numerator is zero and the denominator is not, the tangent is horizontal; if the denominator is zero and the numerator is not, the tangent is vertical. If both vanish, the curve may pass through the pole or have a cusp, and a limit is needed.',
    formulas: [
      { latex: 'x=r\\cos\\theta,\\quad y=r\\sin\\theta', note: '极坐标到直角坐标。 · Polar to rectangular.' },
      { latex: 'r^{2}=x^{2}+y^{2},\\quad \\tan\\theta=\\dfrac{y}{x}', note: '直角坐标到极坐标；角度要按象限修正。 · Rectangular to polar; correct the angle by quadrant.' },
      { latex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{f\'(\\theta)\\sin\\theta+f(\\theta)\\cos\\theta}{f\'(\\theta)\\cos\\theta-f(\\theta)\\sin\\theta}', note: '极坐标曲线的切线斜率。 · Tangent slope for a polar curve.' },
      { latex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=0,\\;\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\;\\Rightarrow\\;\\text{水平切线 · horizontal tangent}', note: '水平切线的条件。 · Condition for a horizontal tangent.' },
      { latex: '\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}=0,\\;\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\neq0\\;\\Rightarrow\\;\\text{竖直切线 · vertical tangent}', note: '竖直切线的条件。 · Condition for a vertical tangent.' },
    ],
    derivationNotes: [
      { from: '极坐标定义 · Polar definition', to: '参数方程 · Parametric equations', note: '把 \\(r=f(\\theta)\\) 代入 \\(x=r\\cos\\theta\\)、\\(y=r\\sin\\theta\\)。 · Substitute \\(r=f(\\theta)\\) into \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\).' },
      { from: '参数方程 · Parametric equations', to: '导数之比 · Ratio of derivatives', note: '\\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\)。 · \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta}}{\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}}\\).' },
      { from: '导数之比 · Ratio of derivatives', to: '切线分类 · Tangent classification', note: '分子为零给水平切线，分母为零给竖直切线。 · A zero numerator gives a horizontal tangent; a zero denominator gives a vertical tangent.' },
    ],
    conditions: [
      '转换角度时要按点所在象限修正，不能只用 \\(\\arctan\\left(\\dfrac{y}{x}\\right)\\) · Correct the angle by quadrant; do not rely only on \\(\\arctan\\left(\\dfrac{y}{x}\\right)\\)',
      '负半径是合法的；\\((r,\\theta)\\) 与 \\((-r,\\theta+\\pi)\\) 是同一点 · Negative radii are allowed; \\((r,\\theta)\\) and \\((-r,\\theta+\\pi)\\) are the same point',
      '切线斜率公式要求 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\)；分母为零时单独判断竖直切线 · The slope formula requires \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\neq0\\); when the denominator is zero, check for a vertical tangent',
      '极点的切线不能直接代入公式，要用极限或直角坐标 · At the pole, do not substitute directly; use a limit or rectangular coordinates',
      '同一条极坐标曲线可能被重复描过；求切线时注意角度范围 · A polar curve may be traced more than once; pay attention to the angle range',
    ],
    keyPoints: [
      '先写 \\(x(\theta)\\)、\\(y(\theta)\\)，再求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Write \\(x(\theta)\\) and \\(y(\theta)\\) first, then find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)',
      '\\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 不是斜率 · \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) is not the slope',
      '水平切线看 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)，竖直切线看 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\) · Horizontal tangents use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\); vertical tangents use \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)',
      '极点处两个导数可能同时为零，要单独处理 · At the pole both derivatives may vanish; handle it separately',
      '负半径会改变描点方向，但不改变点本身 · A negative radius reverses the tracing direction but not the point itself',
    ],
    misconceptions: [
      '把 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 当作切线斜率 · Treating \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) as the tangent slope',
      '把 \\(\\dfrac{y}{x}\\) 当作曲线在极坐标下的斜率 · Treating \\(\\dfrac{y}{x}\\) as the slope of a polar curve',
      '忘记对 \\(r\\cos\\theta\\) 与 \\(r\\sin\\theta\\) 使用乘积法则 · Forgetting the product rule for \\(r\\cos\\theta\\) and \\(r\\sin\\theta\\)',
      '把水平与竖直切线的条件弄反 · Swapping the conditions for horizontal and vertical tangents',
      '在极点两个导数都为零时直接写“斜率不存在”而不判断切线 · Declaring “no slope” at the pole without determining the tangent',
    ],
    examples: [
      {
        title: '例 1 · 心形线 · Cardioid',
        prompt: '求 \\(r=1+\\cos\\theta\\) 在 \\(\\theta=\\dfrac{\\pi}{2}\\) 处的切线斜率。 · Find the tangent slope of \\(r=1+\\cos\\theta\\) at \\(\\theta=\\dfrac{\\pi}{2}\\).',
        steps: [
          '\\(f(\\theta)=1+\\cos\\theta\\)，\\(f\'(\\theta)=-\\sin\\theta\\)。 · \\(f(\\theta)=1+\\cos\\theta\\) and \\(f\'(\\theta)=-\\sin\\theta\\).',
          '在 \\(\\theta=\\dfrac{\\pi}{2}\\)：\\(f=1\\)，\\(f\'=-1\\)。 · At \\(\\theta=\\dfrac{\\pi}{2}\\): \\(f=1\\) and \\(f\'=-1\\).',
          '分子：\\((-1)(1)+1\\cdot0=-1\\)；分母：\\((-1)(0)-1\\cdot1=-1\\)。 · Numerator: \\((-1)(1)+1\\cdot0=-1\\); denominator: \\((-1)(0)-1\\cdot1=-1\\).',
          '所以 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{-1}{-1}=1\\)。 · Thus \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{-1}{-1}=1\\).',
        ],
        solution: '切线斜率为 \\(1\\)。 · The tangent slope is \\(1\\).',
        solutionLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1',
      },
      {
        title: '例 2 · 圆的水平与竖直切线 · Horizontal and Vertical Tangents of a Circle',
        prompt: '对 \\(r=2\\cos\\theta\\)（\\(0\\le\\theta\\le\\pi\\)），求水平切线与竖直切线的角度。 · For \\(r=2\\cos\\theta\\) with \\(0\\le\\theta\\le\\pi\\), find the angles of the horizontal and vertical tangents.',
        steps: [
          '\\(f=2\\cos\\theta\\)，\\(f\'=-2\\sin\\theta\\)。 · \\(f=2\\cos\\theta\\) and \\(f\'=-2\\sin\\theta\\).',
          '分子 \\(f\'\\sin\\theta+f\\cos\\theta=2(\\cos^{2}\\theta-\\sin^{2}\\theta)=2\\cos2\\theta\\)。 · Numerator: \\(f\'\\sin\\theta+f\\cos\\theta=2(\\cos^{2}\\theta-\\sin^{2}\\theta)=2\\cos2\\theta\\).',
          '分母 \\(f\'\\cos\\theta-f\\sin\\theta=-4\\sin\\theta\\cos\\theta=-2\\sin2\\theta\\)。 · Denominator: \\(f\'\\cos\\theta-f\\sin\\theta=-4\\sin\\theta\\cos\\theta=-2\\sin2\\theta\\).',
          '水平：\\(\\cos2\\theta=0\\)，得 \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\)。竖直：\\(\\sin2\\theta=0\\)，得 \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\)。 · Horizontal: \\(\\cos2\\theta=0\\), so \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\). Vertical: \\(\\sin2\\theta=0\\), so \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\).',
        ],
        solution: '水平切线在 \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\)；竖直切线在 \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\)。 · Horizontal tangents at \\(\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}\\); vertical tangents at \\(\\theta=0,\\dfrac{\\pi}{2},\\pi\\).',
        solutionLatex: '\\theta=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}',
      },
      {
        title: '例 3 · 转回直角坐标 · Convert to Rectangular Coordinates',
        prompt: '把 \\(r=2\\sin\\theta\\) 化为直角坐标方程，并求 \\(\\theta=\\dfrac{\\pi}{6}\\) 处的切线斜率。 · Convert \\(r=2\\sin\\theta\\) to a rectangular equation and find the tangent slope at \\(\\theta=\\dfrac{\\pi}{6}\\).',
        steps: [
          '两边乘以 \\(r\\)：\\(r^{2}=2r\\sin\\theta\\)，即 \\(x^{2}+y^{2}=2y\\)。 · Multiply by \\(r\\): \\(r^{2}=2r\\sin\\theta\\), so \\(x^{2}+y^{2}=2y\\).',
          '配方得 \\(x^{2}+(y-1)^{2}=1\\)，是以 \\((0,1)\\) 为圆心、半径为 \\(1\\) 的圆。 · Complete the square: \\(x^{2}+(y-1)^{2}=1\\), a circle centered at \\((0,1)\\) with radius \\(1\\).',
          '隐式求导：\\(2x+2(y-1)y\'=0\\)，所以 \\(y\'=-\\dfrac{x}{y-1}\\)。 · Implicit differentiation: \\(2x+2(y-1)y\'=0\\), so \\(y\'=-\\dfrac{x}{y-1}\\).',
          '在 \\(\\theta=\\dfrac{\\pi}{6}\\)：\\(r=1\\)，\\(x=\\dfrac{\\sqrt3}{2}\\)，\\(y=\\dfrac{1}{2}\\)，所以 \\(y\'=\\dfrac{\\sqrt3}{1}= \\sqrt3\\)。 · At \\(\\theta=\\dfrac{\\pi}{6}\\): \\(r=1\\), \\(x=\\dfrac{\\sqrt3}{2}\\), \\(y=\\dfrac{1}{2}\\), so \\(y\'=\\dfrac{\\sqrt3}{1}=\\sqrt3\\).',
        ],
        solution: '\\(x^{2}+(y-1)^{2}=1\\)，切线斜率为 \\(\\sqrt3\\)。 · \\(x^{2}+(y-1)^{2}=1\\), and the tangent slope is \\(\\sqrt3\\).',
        solutionLatex: 'y\'=\\sqrt3',
      },
    ],
    examTips: [
      'CED Unit 9：极坐标导数常与切线、水平/竖直切线一起考 · CED Unit 9: polar derivatives often appear with tangent lines and horizontal and vertical tangents',
      '先写 \\(x(\\theta)\\)、\\(y(\\theta)\\)，再用参数方程求导，避免公式记错 · Write \\(x(\\theta)\\) and \\(y(\\theta)\\) and differentiate parametrically to avoid misremembering the formula',
      '水平切线看分子，竖直切线看分母 · Horizontal tangents use the numerator; vertical tangents use the denominator',
      '极点处不要直接代入，先看极限或转成直角坐标 · At the pole, do not substitute directly; use a limit or convert to rectangular coordinates',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u9', code: '9.1', title: '参数运动导数 · Defining and Differentiating Parametric Equations', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u9', code: '9.8', title: '极坐标面积 · Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u9', code: '9.9', title: '两极曲线间面积 · Finding the Area of the Region Bounded by Two Polar Curves', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u3', code: '3.2', title: '隐函数求导 · Implicit Differentiation', relation: '工具 · Tool' },
    ],
    development: ['极坐标与直角坐标 · Polar and rectangular coordinates', '非唯一表示 · Nonunique representation', '参数化与求导 · Parametrization and differentiation', '水平与竖直切线 · Horizontal and vertical tangents', '极点处的切线 · Tangents at the pole'],
    checks: ['为什么 \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) 不是切线斜率？ · Why is \\(\\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta}\\) not the tangent slope?', '水平切线与竖直切线分别看哪个导数？ · Which derivative determines a horizontal tangent, and which a vertical tangent?', '极点处两个导数都为零时如何处理？ · What should be done when both derivatives vanish at the pole?'],
    summary: '极坐标曲线的切线斜率来自参数方程 \\(x=r\\cos\\theta\\)、\\(y=r\\sin\\theta\\) 的导数之比；水平看 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\)，竖直看 \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\)，极点单独处理。 · The tangent slope of a polar curve comes from the ratio of derivatives of the parametric equations \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\); horizontal tangents use \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}\\), vertical tangents use \\(\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta}\\), and the pole is handled separately.',
  },
  'math/calc-u9/9.8': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用 \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left[f(\\theta)\\right]^{2}\\mathrm{d}\\theta\\) 求单条极坐标曲线围成的面积。 · Use \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left[f(\\theta)\\right]^{2}\\mathrm{d}\\theta\\) to find the area enclosed by a single polar curve.',
      '能通过描点或对称性确定扫过区域的角度范围，避免漏算或重复计算。 · Determine the angle range that sweeps the region by plotting or using symmetry, avoiding missing or double-counted area.',
      '能计算圆、心形线与花瓣形区域的面积，并解释 \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\) 的来源。 · Compute areas of circles, cardioids, and petal-shaped regions, and explain the origin of \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\).',
    ],
    essentialKnowledge: [
      '极坐标面积微元是扇形面积 \\(\\mathrm{d}A=\\dfrac{1}{2}r^{2}\\,\\mathrm{d}\\theta\\)，来自三角形面积 \\(\\dfrac{1}{2}\\) 底乘高。 · The polar area element is the sector area \\(\\mathrm{d}A=\\dfrac{1}{2}r^{2}\\,\\mathrm{d}\\theta\\), coming from the triangle area formula.',
      '总面积为 \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}r^{2}\\,\\mathrm{d}\\theta\\)；积分限是边界射线对应的角度，不是 \\(x\\) 的范围。 · The total area is \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}r^{2}\\,\\mathrm{d}\\theta\\); the limits are the angles of the bounding rays, not the \\(x\\)-range.',
      '半径为 \\(a\\) 的圆 \\(r=a\\) 在 \\(0\\le\\theta\\le2\\pi\\) 上的面积为 \\(\\pi a^{2}\\)，可作为公式自检。 · A circle \\(r=a\\) of radius \\(a\\) over \\(0\\le\\theta\\le2\\pi\\) has area \\(\\pi a^{2}\\), a useful check.',
      '对称性可以只积一半再乘 \\(2\\)，但必须确认对称轴与角度范围确实覆盖整个区域。 · Symmetry allows integrating half and doubling, but confirm that the symmetry axis and angle range cover the whole region.',
      '负半径会改变描点方向；\\(r^{2}\\) 虽然消除符号，但角度范围仍决定是否重复描过同一区域。 · A negative radius reverses tracing; although \\(r^{2}\\) removes the sign, the angle range still determines whether the same region is traced more than once.',
      '两曲线之间的极坐标面积用 \\(\\dfrac{1}{2}\\int\\left(R^{2}-r^{2}\\right)\\mathrm{d}\\theta\\)，其中 \\(R\\) 为外曲线、\\(r\\) 为内曲线。 · The polar area between two curves is \\(\\dfrac{1}{2}\\int\\left(R^{2}-r^{2}\\right)\\mathrm{d}\\theta\\), where \\(R\\) is the outer curve and \\(r\\) the inner curve.',
    ],
    definition: '若极坐标曲线 \\(r=f(\\theta)\\) 在 \\(\\alpha\\le\\theta\\le\\beta\\) 上扫出一个区域，且每条射线只与区域相交一次，则该区域面积为 \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left[f(\\theta)\\right]^{2}\\mathrm{d}\\theta\\)。 · If a polar curve \\(r=f(\\theta)\\) sweeps out a region for \\(\\alpha\\le\\theta\\le\\beta\\) and each ray meets the region once, the area is \\(A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left[f(\\theta)\\right]^{2}\\mathrm{d}\\theta\\).',
    intuition: '极坐标面积像把区域切成许多细扇形：每个扇形近似三角形，底是弧长 \\(r\\,\\mathrm{d}\\theta\\)，高是 \\(r\\)，面积就是 \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\)。把所有扇形加起来就是总面积。 · Polar area is like slicing the region into thin sectors: each sector is approximately a triangle with base \\(r\\,\\mathrm{d}\\theta\\) and height \\(r\\), so its area is \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\). Adding all sectors gives the total area.',
    intuitionDetailed: '当 \\(\\mathrm{d}\\theta\\) 很小时，扇形近似于等腰三角形，两条边都是 \\(r\\)，夹角为 \\(\\mathrm{d}\\theta\\)，面积为 \\(\\dfrac{1}{2}r^{2}\\sin(\\mathrm{d}\\theta)\\approx\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\)。积分就是把这些微小扇形从起始角到终止角累加。若曲线在某个角度范围内被重复描过，直接积分会把同一块面积算两次，所以要先确定“描过一次”的范围。 · For small \\(\\mathrm{d}\\theta\\), the sector is approximately an isosceles triangle with two sides \\(r\\) and included angle \\(\\mathrm{d}\\theta\\), so its area is \\(\\dfrac{1}{2}r^{2}\\sin(\\mathrm{d}\\theta)\\approx\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\). Integration accumulates these tiny sectors from the starting angle to the ending angle. If the curve traces the same region more than once over the chosen range, direct integration counts the same area twice, so first determine a range that traces the region exactly once.',
    formulas: [
      { latex: 'A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}r^{2}\\,\\mathrm{d}\\theta', note: '单条极坐标曲线围成的面积。 · Area enclosed by a single polar curve.' },
      { latex: '\\mathrm{d}A=\\dfrac{1}{2}r^{2}\\,\\mathrm{d}\\theta', note: '极坐标面积微元（扇形）。 · Polar area element (a sector).' },
      { latex: 'A=\\dfrac{1}{2}\\int_{\\alpha}^{\\beta}\\left(R^{2}-r^{2}\\right)\\mathrm{d}\\theta', note: '两曲线之间的面积；\\(R\\) 外、\\(r\\) 内。 · Area between two curves; \\(R\\) outer, \\(r\\) inner.' },
      { latex: 'r=a,\\;0\\le\\theta\\le2\\pi\\;\\Rightarrow\\;A=\\pi a^{2}', note: '圆面积自检。 · Circle-area check.' },
    ],
    derivationNotes: [
      { from: '扇形 · Sector', to: '面积微元 · Area element', note: '小扇形近似三角形，面积 \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\)。 · A small sector is approximately a triangle of area \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\).' },
      { from: '面积微元 · Area element', to: '积分 · Integral', note: '从 \\(\\alpha\\) 到 \\(\\beta\\) 累加所有扇形。 · Accumulate all sectors from \\(\\alpha\\) to \\(\\beta\\).' },
      { from: '角度范围 · Angle range', to: '区域 · Region', note: '先确定曲线描过一次的角度范围，避免重复计算。 · First determine a range that traces the region once to avoid double counting.' },
    ],
    conditions: [
      '积分限是角度范围，不是 \\(x\\) 或 \\(y\\) 的范围 · Limits are angles, not \\(x\\) or \\(y\\) ranges',
      '每条射线与区域只交一次时，单条曲线公式才直接给出面积 · The single-curve formula applies directly when each ray meets the region once',
      '曲线可能被重复描过；先确定一个完整周期 · A curve may be traced repeatedly; identify one complete period',
      '对称性可以简化计算，但要确认对称轴与范围 · Symmetry can simplify the computation, but confirm the axis and range',
      '面积必须非负；若结果是负的，检查 \\(r^{2}\\) 与积分限 · Area must be nonnegative; if the result is negative, check \\(r^{2}\\) and the limits',
    ],
    keyPoints: [
      '面积公式带 \\(\\dfrac{1}{2}\\) · The area formula includes \\(\\dfrac{1}{2}\\)',
      '先画草图确定角度范围 · Sketch first to determine the angle range',
      '\\(r\\) 要平方，不是 \\(r\\,\\mathrm{d}r\\) · Square \\(r\\); do not use \\(r\\,\\mathrm{d}r\\)',
      '对称区域可以部分积分后乘倍 · Symmetric regions can be integrated over part and multiplied',
      '圆面积 \\(\\pi a^{2}\\) 可用于检查 · The circle area \\(\\pi a^{2}\\) is a useful check',
    ],
    misconceptions: [
      '忘记 \\(\\dfrac{1}{2}\\) · Forgetting the factor \\(\\dfrac{1}{2}\\)',
      '用 \\(x\\) 的积分限代替 \\(\\theta\\) 的积分限 · Using \\(x\\)-limits instead of \\(\\theta\\)-limits',
      '把面积写成 \\(\\int r\\,\\mathrm{d}\\theta\\) · Writing the area as \\(\\int r\\,\\mathrm{d}\\theta\\)',
      '重复积分同一块区域 · Integrating the same region more than once',
      '在 \\(r\\) 为负时把面积当成负数 · Treating area as negative when \\(r\\) is negative',
    ],
    examples: [
      {
        title: '例 1 · 圆 · Circle',
        prompt: '求 \\(r=2\\)（\\(0\\le\\theta\\le2\\pi\\)）围成的面积。 · Find the area enclosed by \\(r=2\\) for \\(0\\le\\theta\\le2\\pi\\).',
        steps: [
          '这是半径为 \\(2\\) 的圆。 · This is a circle of radius \\(2\\).',
          '\\(A=\\dfrac{1}{2}\\int_{0}^{2\\pi}2^{2}\\,\\mathrm{d}\\theta\\)。 · \\(A=\\dfrac{1}{2}\\int_{0}^{2\\pi}2^{2}\\,\\mathrm{d}\\theta\\).',
          '\\(A=\\dfrac{1}{2}\\cdot4\\cdot2\\pi=4\\pi\\)。 · \\(A=\\dfrac{1}{2}\\cdot4\\cdot2\\pi=4\\pi\\).',
        ],
        solution: '\\(A=4\\pi\\)，与 \\(\\pi r^{2}\\) 一致。 · \\(A=4\\pi\\), consistent with \\(\\pi r^{2}\\).',
        solutionLatex: 'A=4\\pi',
      },
      {
        title: '例 2 · 心形线 · Cardioid',
        prompt: '求 \\(r=1+\\cos\\theta\\)（\\(0\\le\\theta\\le2\\pi\\)）围成的面积。 · Find the area enclosed by \\(r=1+\\cos\\theta\\) for \\(0\\le\\theta\\le2\\pi\\).',
        steps: [
          '\\(A=\\dfrac{1}{2}\\int_{0}^{2\\pi}(1+\\cos\\theta)^{2}\\,\\mathrm{d}\\theta\\)。 · \\(A=\\dfrac{1}{2}\\int_{0}^{2\\pi}(1+\\cos\\theta)^{2}\\,\\mathrm{d}\\theta\\).',
          '展开：\\(1+2\\cos\\theta+\\cos^{2}\\theta\\)。 · Expand: \\(1+2\\cos\\theta+\\cos^{2}\\theta\\).',
          '在 \\([0,2\\pi]\\) 上：\\(\\int1\\,\\mathrm{d}\\theta=2\\pi\\)，\\(\\int2\\cos\\theta\\,\\mathrm{d}\\theta=0\\)，\\(\\int\\cos^{2}\\theta\\,\\mathrm{d}\\theta=\\pi\\)。 · On \\([0,2\\pi]\\): \\(\\int1\\,\\mathrm{d}\\theta=2\\pi\\), \\(\\int2\\cos\\theta\\,\\mathrm{d}\\theta=0\\), and \\(\\int\\cos^{2}\\theta\\,\\mathrm{d}\\theta=\\pi\\).',
          '\\(A=\\dfrac{1}{2}(2\\pi+0+\\pi)=\\dfrac{3\\pi}{2}\\)。 · \\(A=\\dfrac{1}{2}(2\\pi+0+\\pi)=\\dfrac{3\\pi}{2}\\).',
        ],
        solution: '\\(A=\\dfrac{3\\pi}{2}\\)。 · \\(A=\\dfrac{3\\pi}{2}\\).',
        solutionLatex: 'A=\\dfrac{3\\pi}{2}',
      },
      {
        title: '例 3 · 偏移圆 · Shifted Circle',
        prompt: '求 \\(r=3\\cos\\theta\\)（\\(0\\le\\theta\\le\\pi\\)）围成的面积。 · Find the area enclosed by \\(r=3\\cos\\theta\\) for \\(0\\le\\theta\\le\\pi\\).',
        steps: [
          '这是圆心在 \\(\\left(\\dfrac{3}{2},0\\right)\\)、半径为 \\(\\dfrac{3}{2}\\) 的圆；\\(0\\le\\theta\\le\\pi\\) 正好描过一次。 · This is a circle centered at \\(\\left(\\dfrac{3}{2},0\\right)\\) with radius \\(\\dfrac{3}{2}\\); \\(0\\le\\theta\\le\\pi\\) traces it once.',
          '\\(A=\\dfrac{1}{2}\\int_{0}^{\\pi}9\\cos^{2}\\theta\\,\\mathrm{d}\\theta\\)。 · \\(A=\\dfrac{1}{2}\\int_{0}^{\\pi}9\\cos^{2}\\theta\\,\\mathrm{d}\\theta\\).',
          '\\(\\int_{0}^{\\pi}\\cos^{2}\\theta\\,\\mathrm{d}\\theta=\\dfrac{\\pi}{2}\\)，所以 \\(A=\\dfrac{9\\pi}{4}\\)。 · \\(\\int_{0}^{\\pi}\\cos^{2}\\theta\\,\\mathrm{d}\\theta=\\dfrac{\\pi}{2}\\), so \\(A=\\dfrac{9\\pi}{4}\\).',
        ],
        solution: '\\(A=\\dfrac{9\\pi}{4}\\)，等于 \\(\\pi\\left(\\dfrac{3}{2}\\right)^{2}\\)。 · \\(A=\\dfrac{9\\pi}{4}\\), equal to \\(\\pi\\left(\\dfrac{3}{2}\\right)^{2}\\).',
        solutionLatex: 'A=\\dfrac{9\\pi}{4}',
      },
    ],
    examTips: [
      'CED Unit 9：极坐标面积先画草图，再定角度范围 · CED Unit 9: sketch the polar region first, then determine the angle range',
      '公式中的 \\(\\dfrac{1}{2}\\) 与 \\(r^{2}\\) 都不能漏 · Do not omit either \\(\\dfrac{1}{2}\\) or \\(r^{2}\\)',
      '遇到花瓣或对称图形，先算一片再乘倍 · For petals or symmetric figures, compute one piece and multiply',
      '用圆面积或几何面积检查结果是否合理 · Check the result against a circle or a known geometric area',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u9', code: '9.7', title: '极坐标导数 · Defining Polar Coordinates and Differentiating in Polar Form', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u9', code: '9.9', title: '两极曲线间面积 · Finding the Area of the Region Bounded by Two Polar Curves', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u8', code: '8.4', title: '曲线间面积 · Finding the Area Between Curves Expressed as Functions of x', relation: '对比 · Contrast' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.9', title: '换元积分法 · Integrating Using Substitution', relation: '工具 · Tool' },
    ],
    development: ['极坐标扇形 · Polar sectors', '面积微元 · Area element', '角度范围 · Angle range', '对称性 · Symmetry', '圆与心形线 · Circles and cardioids'],
    checks: ['为什么面积微元是 \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\)？ · Why is the area element \\(\\dfrac{1}{2}r^{2}\\mathrm{d}\\theta\\)?', '积分限应该用角度还是 \\(x\\) 的范围？ · Should the limits be angles or an \\(x\\)-range?', '如何避免把同一块区域算两次？ · How can you avoid counting the same region twice?'],
    summary: '极坐标面积用 \\(\\dfrac{1}{2}\\int r^{2}\\,\\mathrm{d}\\theta\\)：先画草图确定描过一次的角度范围，再用对称性简化，最后用圆面积检查。 · Polar area uses \\(\\dfrac{1}{2}\\int r^{2}\\,\\mathrm{d}\\theta\\): sketch to find a range that traces the region once, use symmetry to simplify, and check against a circle area.',
  },
  'math/calc-u6/6.11': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能把真分式 \\(\\dfrac{P(x)}{Q(x)}\\) 分解为线性因子的部分分式，并积分。 · Decompose a proper rational function \\(\\dfrac{P(x)}{Q(x)}\\) into partial fractions with linear factors and integrate.',
      '能在分解前先做多项式长除法，把假分式化为多项式加真分式。 · Perform polynomial long division first to rewrite an improper fraction as a polynomial plus a proper fraction.',
      '能处理重复线性因子，并把 \\(\\dfrac{A}{x-r}\\) 与 \\(\\dfrac{A}{(x-r)^{m}}\\) 分别积分。 · Handle repeated linear factors and integrate \\(\\dfrac{A}{x-r}\\) and \\(\\dfrac{A}{(x-r)^{m}}\\) separately.',
    ],
    essentialKnowledge: [
      '部分分式分解要求分子次数小于分母次数；否则先做多项式除法。 · Partial-fraction decomposition requires the numerator degree to be less than the denominator degree; otherwise divide first.',
      '互异线性因子 \\((x-r)(x-s)\\) 对应 \\(\\dfrac{A}{x-r}+\\dfrac{B}{x-s}\\)；每个因子都要有一项。 · Distinct linear factors \\((x-r)(x-s)\\) correspond to \\(\\dfrac{A}{x-r}+\\dfrac{B}{x-s}\\); each factor needs its own term.',
      '重复因子 \\((x-r)^{m}\\) 需要 \\(\\dfrac{A_1}{x-r}+\\dfrac{A_2}{(x-r)^{2}}+\\cdots+\\dfrac{A_m}{(x-r)^{m}}\\)。 · A repeated factor \\((x-r)^{m}\\) requires \\(\\dfrac{A_1}{x-r}+\\dfrac{A_2}{(x-r)^{2}}+\\cdots+\\dfrac{A_m}{(x-r)^{m}}\\).',
      '积分 \\(\\dfrac{A}{x-r}\\) 得 \\(A\\ln|x-r|\\)；积分 \\(\\dfrac{A}{(x-r)^{m}}\\)（\\(m>1\\)）得 \\(\\dfrac{A}{(1-m)(x-r)^{m-1}}\\)。 · \\(\\int\\dfrac{A}{x-r}\\,\\mathrm{d}x=A\\ln|x-r|\\), while for \\(m>1\\), \\(\\int\\dfrac{A}{(x-r)^{m}}\\,\\mathrm{d}x=\\dfrac{A}{(1-m)(x-r)^{m-1}}\\).',
      '待定系数可以通过通分比较系数，或代入因子零点快速求值。 · Undetermined coefficients can be found by clearing denominators and comparing coefficients, or by substituting the zeros of the factors.',
      '分解后要检查：把部分分式通分应回到原分式；分母的每个因子都必须出现。 · After decomposing, check by recombining the partial fractions; every denominator factor must appear.',
    ],
    definition: '部分分式法把有理函数 \\(\\dfrac{P(x)}{Q(x)}\\)（分子次数小于分母次数）拆成若干简单分式之和，每个分式的分母是 \\(Q(x)\\) 的一个线性因子或它的幂。拆开后逐项积分。 · The method of partial fractions writes a rational function \\(\\dfrac{P(x)}{Q(x)}\\) (with numerator degree less than denominator degree) as a sum of simpler fractions whose denominators are linear factors of \\(Q(x)\\) or powers of them. Each term is then integrated separately.',
    intuition: '部分分式就像把一个大分数拆成几个“单位分数”的和：先按分母的因子分配位置，再用待定系数让通分后恰好等于原分子。拆开后每一项都容易积分。 · Partial fractions split one complicated fraction into a sum of simpler “unit fractions”: assign a term to each denominator factor, then choose coefficients so that recombining gives the original numerator. Each resulting term is easy to integrate.',
    intuitionDetailed: '以 \\(\\dfrac{3x+5}{(x+1)(x+2)}\\) 为例，设 \\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\)。通分得 \\(A(x+2)+B(x+1)=3x+5\\)。代入 \\(x=-1\\) 得 \\(A=2\\)，代入 \\(x=-2\\) 得 \\(B=1\\)。积分时分别得到对数项。若分母有重复因子，必须把每一层幂都写出来，否则通分后无法匹配所有系数。 · For example, for \\(\\dfrac{3x+5}{(x+1)(x+2)}\\), set \\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\). Clearing denominators gives \\(A(x+2)+B(x+1)=3x+5\\). Substituting \\(x=-1\\) gives \\(A=2\\), and \\(x=-2\\) gives \\(B=1\\). Integrating gives logarithmic terms. If a factor is repeated, include every power; otherwise the recombined numerator cannot match all coefficients.',
    formulas: [
      { latex: '\\dfrac{P(x)}{(x-r)(x-s)}=\\dfrac{A}{x-r}+\\dfrac{B}{x-s}', note: '互异线性因子的分解。 · Decomposition for distinct linear factors.' },
      { latex: '\\dfrac{P(x)}{(x-r)^{m}}=\\dfrac{A_1}{x-r}+\\cdots+\\dfrac{A_m}{(x-r)^{m}}', note: '重复线性因子要写全各层幂。 · Include every power for a repeated linear factor.' },
      { latex: '\\int\\dfrac{A}{x-r}\\,\\mathrm{d}x=A\\ln|x-r|+C', note: '一次因子的积分。 · Integral of a simple linear factor.' },
      { latex: '\\int\\dfrac{A}{(x-r)^{m}}\\,\\mathrm{d}x=\\dfrac{A}{(1-m)(x-r)^{m-1}}+C\\quad(m>1)', note: '高次重复因子的积分。 · Integral of a repeated factor with \\(m>1\\).' },
    ],
    derivationNotes: [
      { from: '有理函数 · Rational function', to: '真分式 · Proper fraction', note: '若分子次数不小于分母次数，先做多项式长除法。 · If the numerator degree is at least the denominator degree, divide first.' },
      { from: '分母因子 · Denominator factors', to: '部分分式形式 · Partial-fraction form', note: '每个互异线性因子一项；重复因子写全各层幂。 · One term per distinct linear factor; include all powers for repeated factors.' },
      { from: '待定系数 · Undetermined coefficients', to: '逐项积分 · Term-by-term integration', note: '求出系数后，对数项与幂函数项分别积分。 · After finding the coefficients, integrate logarithmic and power terms separately.' },
    ],
    conditions: [
      '必须先确认分子次数小于分母次数 · First confirm that the numerator degree is less than the denominator degree',
      '分母要完全分解为实线性因子；不可约二次因子属于后续技巧 · Factor the denominator completely into real linear factors; irreducible quadratic factors belong to later techniques',
      '重复因子的每一层幂都要有独立系数 · Every power of a repeated factor needs its own coefficient',
      '对数积分要加绝对值 · Logarithmic integrals require absolute values',
      '分解后要通分回检，确保分子与原式一致 · Recombine to check that the numerator matches the original',
    ],
    keyPoints: [
      '先除后拆：假分式先做长除法 · Divide before decomposing: use long division for improper fractions',
      '每个线性因子一项 · One term for each linear factor',
      '重复因子写全各层幂 · Include every power of a repeated factor',
      '\\(\\dfrac{A}{x-r}\\) 积分得对数 · \\(\\dfrac{A}{x-r}\\) integrates to a logarithm',
      '代入零点求系数最快 · Substituting zeros is the fastest way to find coefficients',
    ],
    misconceptions: [
      '分子次数不小于分母次数却直接分解 · Decomposing directly when the numerator degree is not less than the denominator degree',
      '重复因子只写最高次幂 · Writing only the highest power of a repeated factor',
      '把 \\(\\dfrac{A}{x-r}\\) 的积分漏掉绝对值 · Omitting the absolute value in the logarithmic integral',
      '待定系数时把 \\(A\\)、\\(B\\) 只放在分子而不乘对应的因子 · Placing \\(A\\) and \\(B\\) in the numerator without multiplying by the corresponding factor',
      '把不可约二次因子当成两个实线性因子 · Treating an irreducible quadratic factor as two real linear factors',
    ],
    examples: [
      {
        title: '例 1 · 互异线性因子 · Distinct Linear Factors',
        prompt: '求 \\(\\displaystyle\\int\\dfrac{3x+5}{(x+1)(x+2)}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int\\dfrac{3x+5}{(x+1)(x+2)}\\,\\mathrm{d}x\\).',
        steps: [
          '设 \\(\\dfrac{3x+5}{(x+1)(x+2)}=\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\)。 · Set \\(\\dfrac{3x+5}{(x+1)(x+2)}=\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\).',
          '通分：\\(A(x+2)+B(x+1)=3x+5\\)。 · Clear denominators: \\(A(x+2)+B(x+1)=3x+5\\).',
          '代入 \\(x=-1\\) 得 \\(A=2\\)；代入 \\(x=-2\\) 得 \\(B=1\\)。 · Substitute \\(x=-1\\) to get \\(A=2\\); substitute \\(x=-2\\) to get \\(B=1\\).',
          '积分：\\(2\\ln|x+1|+\\ln|x+2|+C\\)。 · Integrate: \\(2\\ln|x+1|+\\ln|x+2|+C\\).',
        ],
        solution: '\\(2\\ln|x+1|+\\ln|x+2|+C\\)。 · \\(2\\ln|x+1|+\\ln|x+2|+C\\).',
        solutionLatex: '2\\ln|x+1|+\\ln|x+2|+C',
      },
      {
        title: '例 2 · 差平方 · Difference of Squares',
        prompt: '求 \\(\\displaystyle\\int\\dfrac{1}{x^{2}-1}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int\\dfrac{1}{x^{2}-1}\\,\\mathrm{d}x\\).',
        steps: [
          '分解分母：\\(x^{2}-1=(x-1)(x+1)\\)。 · Factor the denominator: \\(x^{2}-1=(x-1)(x+1)\\).',
          '设 \\(\\dfrac{1}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}\\)。 · Set \\(\\dfrac{1}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}\\).',
          '通分得 \\(A(x+1)+B(x-1)=1\\)，所以 \\(A=\\dfrac{1}{2}\\)，\\(B=-\\dfrac{1}{2}\\)。 · Clearing denominators gives \\(A(x+1)+B(x-1)=1\\), so \\(A=\\dfrac{1}{2}\\) and \\(B=-\\dfrac{1}{2}\\).',
          '积分：\\(\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|+C\\)。 · Integrate: \\(\\dfrac{1}{2}\\ln|x-1|-\\dfrac{1}{2}\\ln|x+1|+C\\).',
        ],
        solution: '\\(\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C\\)。 · \\(\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C\\).',
        solutionLatex: '\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C',
      },
      {
        title: '例 3 · 重复因子 · Repeated Factor',
        prompt: '求 \\(\\displaystyle\\int\\dfrac{1}{x(x-1)^{2}}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int\\dfrac{1}{x(x-1)^{2}}\\,\\mathrm{d}x\\).',
        steps: [
          '设 \\(\\dfrac{1}{x(x-1)^{2}}=\\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{(x-1)^{2}}\\)。 · Set \\(\\dfrac{1}{x(x-1)^{2}}=\\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{(x-1)^{2}}\\).',
          '通分：\\(1=A(x-1)^{2}+Bx(x-1)+Cx\\)。 · Clear denominators: \\(1=A(x-1)^{2}+Bx(x-1)+Cx\\).',
          '代入 \\(x=0\\) 得 \\(A=1\\)；代入 \\(x=1\\) 得 \\(C=1\\)；比较 \\(x^{2}\\) 系数得 \\(A+B=0\\)，所以 \\(B=-1\\)。 · Substituting \\(x=0\\) gives \\(A=1\\); \\(x=1\\) gives \\(C=1\\); comparing \\(x^{2}\\) coefficients gives \\(A+B=0\\), so \\(B=-1\\).',
          '积分：\\(\\ln|x|-\\ln|x-1|-\\dfrac{1}{x-1}+C\\)。 · Integrate: \\(\\ln|x|-\\ln|x-1|-\\dfrac{1}{x-1}+C\\).',
        ],
        solution: '\\(\\ln\\left|\\dfrac{x}{x-1}\\right|-\\dfrac{1}{x-1}+C\\)。 · \\(\\ln\\left|\\dfrac{x}{x-1}\\right|-\\dfrac{1}{x-1}+C\\).',
        solutionLatex: '\\ln\\left|\\dfrac{x}{x-1}\\right|-\\dfrac{1}{x-1}+C',
      },
    ],
    examTips: [
      'CED Unit 6：部分分式只处理线性因子；不可约二次因子留给后续技巧 · CED Unit 6: partial fractions here handles linear factors; irreducible quadratics belong to later techniques',
      '先检查分子与分母的次数 · Check the degrees of numerator and denominator first',
      '重复因子写全 \\(\\dfrac{A}{x-r}+\\dfrac{B}{(x-r)^{2}}+\\cdots\\) · Write all terms for a repeated factor',
      '对数项别忘绝对值 · Do not forget absolute values in logarithmic terms',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u6', code: '6.8', title: '求原函数 · Finding Antiderivatives and Indefinite Integrals', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.10', title: '分部积分 · Integrating Using Integration by Parts', relation: '相关 · Related' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.12', title: '反常积分 · Evaluating Improper Integrals', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.13', title: '积分技巧选择 · Integrating Using Linear Partial Fractions and Other Techniques', relation: '后续 · Follow-up' },
    ],
    development: ['真分式与假分式 · Proper and improper fractions', '线性因子分解 · Linear-factor decomposition', '待定系数 · Undetermined coefficients', '重复因子 · Repeated factors', '逐项积分 · Term-by-term integration'],
    checks: ['为什么分子次数必须小于分母次数？ · Why must the numerator degree be less than the denominator degree?', '重复因子为什么要写全各层幂？ · Why must every power of a repeated factor appear?', '\\(\\dfrac{A}{x-r}\\) 的积分为什么要加绝对值？ · Why does the integral of \\(\\dfrac{A}{x-r}\\) need an absolute value?'],
    summary: '部分分式先把有理函数拆成线性因子项，再用待定系数求系数，最后逐项积分；重复因子要写全各层幂，对数项要加绝对值。 · Partial fractions decompose a rational function into linear-factor terms, determine coefficients, and integrate term by term; include every power of repeated factors and absolute values in logarithms.',
  },
  'math/calc-u6/6.12': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能识别两类反常积分：无限区间与无界被积函数，并用极限定义计算。 · Identify the two types of improper integrals—infinite intervals and unbounded integrands—and evaluate them using limits.',
      '能把含内部竖直渐近线的积分拆成两个极限，并说明任一部分发散则整体发散。 · Split an integral at an interior vertical asymptote into two limits and explain that divergence of either part makes the whole integral diverge.',
      '能用 \\(p\\) 积分判据判断 \\(\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) 与 \\(\\int_{0}^{1}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) 的敛散性。 · Use the \\(p\\)-integral criteria to decide convergence of \\(\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) and \\(\\int_{0}^{1}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\).',
    ],
    essentialKnowledge: [
      '无限区间上的反常积分定义为 \\(\\int_{a}^{\\infty}f(x)\\,\\mathrm{d}x=\\lim_{b\\to\\infty}\\int_{a}^{b}f(x)\\,\\mathrm{d}x\\)；极限存在且有限才收敛。 · An improper integral over an infinite interval is defined by \\(\\int_{a}^{\\infty}f(x)\\,\\mathrm{d}x=\\lim_{b\\to\\infty}\\int_{a}^{b}f(x)\\,\\mathrm{d}x\\); it converges only if the limit exists and is finite.',
      '被积函数在端点或内部无界时，要在无界点处取极限；内部奇点必须把积分拆成左右两部分。 · When the integrand is unbounded at an endpoint or inside the interval, take a limit at the unbounded point; an interior singularity requires splitting into left and right parts.',
      '\\(p\\) 积分判据：\\(\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) 在 \\(p>1\\) 时收敛，\\(p\\le1\\) 时发散。 · \\(p\\)-integral criterion: \\(\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) converges for \\(p>1\\) and diverges for \\(p\\le1\\).',
      '另一方向的 \\(p\\) 判据：\\(\\int_{0}^{1}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) 在 \\(p<1\\) 时收敛，\\(p\\ge1\\) 时发散。 · The other \\(p\\)-criterion: \\(\\int_{0}^{1}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) converges for \\(p<1\\) and diverges for \\(p\\ge1\\).',
      '若积分区间内有无界点，不能直接对整个区间用微积分基本定理；必须分段并在奇点处取单侧极限。 · If the interval contains an unbounded point, do not apply the Fundamental Theorem over the whole interval; split and take one-sided limits at the singularity.',
      '比较检验可用于判断反常积分敛散性：被一个收敛积分的非负函数控制则收敛；控制一个发散积分则发散。 · The comparison test can decide improper integrals: a nonnegative function bounded by a convergent integral converges; one that dominates a divergent integral diverges.',
    ],
    definition: '反常积分是积分区间无限或被积函数在区间内无界的定积分。计算时把异常点替换成变量，取极限：无限区间用 \\(b\\to\\infty\\)，端点无界用 \\(c\\to a^{+}\\) 或 \\(c\\to b^{-}\\)，内部无界则从奇点两侧分别取极限。 · An improper integral is a definite integral with an infinite interval or an unbounded integrand. Replace the problematic point by a variable and take a limit: \\(b\\to\\infty\\) for an infinite interval, \\(c\\to a^{+}\\) or \\(c\\to b^{-}\\) for an endpoint singularity, and one-sided limits on both sides for an interior singularity.',
    intuition: '反常积分在问：一块无限长的区域，面积会不会被“压”成一个有限数？如果函数衰减得足够快，面积可以有限；如果衰减太慢，面积就无限。 · An improper integral asks whether the area of an infinite region can be squeezed into a finite number. If the function decays fast enough, the area can be finite; if it decays too slowly, the area is infinite.',
    intuitionDetailed: '以 \\(\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\) 为例，\\(p\\neq1\\) 时原函数是 \\(\\dfrac{x^{1-p}}{1-p}\\)。\\(p>1\\) 时 \\(x^{1-p}\\to0\\)，面积有限；\\(p<1\\) 时 \\(x^{1-p}\\to\\infty\\)，面积无限；\\(p=1\\) 时原函数是 \\(\\ln x\\)，同样无限。靠近 \\(0\\) 的 \\(p\\) 积分方向相反：\\(p<1\\) 时 \\(x^{1-p}\\to0\\)，面积有限；\\(p\\ge1\\) 时发散。 · For \\(\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\), an antiderivative for \\(p\\neq1\\) is \\(\\dfrac{x^{1-p}}{1-p}\\). For \\(p>1\\), \\(x^{1-p}\\to0\\) and the area is finite; for \\(p<1\\), \\(x^{1-p}\\to\\infty\\) and the area is infinite; for \\(p=1\\), the antiderivative is \\(\\ln x\\), also infinite. The \\(p\\)-integral near \\(0\\) reverses: for \\(p<1\\), \\(x^{1-p}\\to0\\) and the area is finite; for \\(p\\ge1\\) it diverges.',
    formulas: [
      { latex: '\\int_{a}^{\\infty}f(x)\\,\\mathrm{d}x=\\lim_{b\\to\\infty}\\int_{a}^{b}f(x)\\,\\mathrm{d}x', note: '无限区间的定义。 · Definition for an infinite interval.' },
      { latex: '\\int_{a}^{b}f(x)\\,\\mathrm{d}x=\\lim_{c\\to b^{-}}\\int_{a}^{c}f(x)\\,\\mathrm{d}x', note: '右端点无界时的定义；左端点类似。 · Definition when the right endpoint is unbounded; the left endpoint is analogous.' },
      { latex: '\\int_{1}^{\\infty}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\text{ 收敛 · converges}\\iff p>1', note: '无限区间的 \\(p\\) 判据。 · \\(p\\)-criterion on an infinite interval.' },
      { latex: '\\int_{0}^{1}\\dfrac{1}{x^{p}}\\,\\mathrm{d}x\\text{ 收敛 · converges}\\iff p<1', note: '端点奇异的 \\(p\\) 判据。 · \\(p\\)-criterion for an endpoint singularity.' },
    ],
    derivationNotes: [
      { from: '无限区间 · Infinite interval', to: '极限 · Limit', note: '把上限换成 \\(b\\)，算完再令 \\(b\\to\\infty\\)。 · Replace the upper limit by \\(b\\), integrate, then let \\(b\\to\\infty\\).' },
      { from: '无界被积函数 · Unbounded integrand', to: '单侧极限 · One-sided limit', note: '在无界点处取 \\(c\\to a^{+}\\) 或 \\(c\\to b^{-}\\)。 · Take \\(c\\to a^{+}\\) or \\(c\\to b^{-}\\) at the unbounded point.' },
      { from: '内部奇点 · Interior singularity', to: '拆分 · Split', note: '从奇点把积分拆成两段，两段都收敛才算整体收敛。 · Split at the singularity; both pieces must converge for the whole to converge.' },
    ],
    conditions: [
      '被积函数在积分区间内部必须连续；无界点要单独处理 · The integrand must be continuous inside the interval; unbounded points need separate treatment',
      '内部奇点必须拆分，不能直接对整个区间积分 · An interior singularity must be split; do not integrate across it directly',
      '\\(p\\) 判据的两个方向相反：无限区间要 \\(p>1\\)，靠近 \\(0\\) 要 \\(p<1\\) · The two \\(p\\)-criteria point in opposite directions: \\(p>1\\) at infinity, \\(p<1\\) near \\(0\\)',
      '极限为无穷或不存在都表示发散 · A limit that is infinite or does not exist means divergence',
      '比较检验要求非负函数；不能直接比较带符号的函数 · The comparison test requires nonnegative functions; do not compare signed functions directly',
    ],
    keyPoints: [
      '反常积分就是极限 · An improper integral is a limit',
      '先找无界点，再拆分 · Find unbounded points first, then split',
      '无限区间 \\(p>1\\) 收敛 · At infinity, \\(p>1\\) converges',
      '靠近 \\(0\\) 的奇点 \\(p<1\\) 收敛 · Near \\(0\\), a singularity with \\(p<1\\) converges',
      '任一部分发散，整体发散 · If any part diverges, the whole diverges',
    ],
    misconceptions: [
      '忽略分母零点，直接对整个区间积分 · Ignoring a zero of the denominator and integrating across the whole interval',
      '把 \\(\\int_{-1}^{1}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x\\) 算成负数 · Evaluating \\(\\int_{-1}^{1}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x\\) as a negative number',
      '把两个 \\(p\\) 判据的方向弄反 · Reversing the two \\(p\\)-criteria',
      '认为面积无限大就一定发散（面积可以有限） · Assuming an unbounded region must have infinite area (the area can be finite)',
      '把 \\(\\infty\\) 当作普通数代入 · Treating \\(\\infty\\) as an ordinary number',
    ],
    examples: [
      {
        title: '例 1 · 无限区间 · Infinite Interval',
        prompt: '计算 \\(\\displaystyle\\int_{1}^{\\infty}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int_{1}^{\\infty}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x\\).',
        steps: [
          '写成极限：\\(\\lim_{b\\to\\infty}\\int_{1}^{b}x^{-2}\\,\\mathrm{d}x\\)。 · Write as a limit: \\(\\lim_{b\\to\\infty}\\int_{1}^{b}x^{-2}\\,\\mathrm{d}x\\).',
          '原函数 \\(-\\dfrac{1}{x}\\)，所以积分为 \\(\\left[-\\dfrac{1}{x}\\right]_{1}^{b}=1-\\dfrac{1}{b}\\)。 · An antiderivative is \\(-\\dfrac{1}{x}\\), so the integral is \\(\\left[-\\dfrac{1}{x}\\right]_{1}^{b}=1-\\dfrac{1}{b}\\).',
          '取极限：\\(\\lim_{b\\to\\infty}\\left(1-\\dfrac{1}{b}\\right)=1\\)。 · Take the limit: \\(\\lim_{b\\to\\infty}\\left(1-\\dfrac{1}{b}\\right)=1\\).',
        ],
        solution: '积分收敛，值为 \\(1\\)。 · The integral converges to \\(1\\).',
        solutionLatex: '\\int_{1}^{\\infty}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x=1',
      },
      {
        title: '例 2 · 端点奇异 · Endpoint Singularity',
        prompt: '计算 \\(\\displaystyle\\int_{0}^{1}\\dfrac{1}{\\sqrt{x}}\\,\\mathrm{d}x\\)。 · Evaluate \\(\\displaystyle\\int_{0}^{1}\\dfrac{1}{\\sqrt{x}}\\,\\mathrm{d}x\\).',
        steps: [
          '被积函数在 \\(x=0\\) 无界，写成 \\(\\lim_{c\\to0^{+}}\\int_{c}^{1}\\dfrac{1}{\\sqrt{x}}\\,\\mathrm{d}x\\)。 · The integrand is unbounded at \\(x=0\\), so write \\(\\lim_{c\\to0^{+}}\\int_{c}^{1}\\dfrac{1}{\\sqrt{x}}\\,\\mathrm{d}x\\).',
          '原函数 \\(2\\sqrt{x}\\)，积分值为 \\(2-2\\sqrt{c}\\)。 · An antiderivative is \\(2\\sqrt{x}\\), so the integral is \\(2-2\\sqrt{c}\\).',
          '取极限：\\(\\lim_{c\\to0^{+}}(2-2\\sqrt{c})=2\\)。 · Take the limit: \\(\\lim_{c\\to0^{+}}(2-2\\sqrt{c})=2\\).',
        ],
        solution: '积分收敛，值为 \\(2\\)。 · The integral converges to \\(2\\).',
        solutionLatex: '\\int_{0}^{1}\\dfrac{1}{\\sqrt{x}}\\,\\mathrm{d}x=2',
      },
      {
        title: '例 3 · 内部奇点 · Interior Singularity',
        prompt: '判断 \\(\\displaystyle\\int_{0}^{2}\\dfrac{1}{(x-1)^{2}}\\,\\mathrm{d}x\\) 是否收敛。 · Determine whether \\(\\displaystyle\\int_{0}^{2}\\dfrac{1}{(x-1)^{2}}\\,\\mathrm{d}x\\) converges.',
        steps: [
          '被积函数在 \\(x=1\\) 无界，必须拆成 \\(\\int_{0}^{1}+\\int_{1}^{2}\\)。 · The integrand is unbounded at \\(x=1\\), so split into \\(\\int_{0}^{1}+\\int_{1}^{2}\\).',
          '右段：\\(\\lim_{c\\to1^{+}}\\int_{c}^{2}(x-1)^{-2}\\,\\mathrm{d}x=\\lim_{c\\to1^{+}}\\left[-\\dfrac{1}{x-1}\\right]_{c}^{2}\\)。 · Right piece: \\(\\lim_{c\\to1^{+}}\\int_{c}^{2}(x-1)^{-2}\\,\\mathrm{d}x=\\lim_{c\\to1^{+}}\\left[-\\dfrac{1}{x-1}\\right]_{c}^{2}\\).',
          '该极限为 \\(+\\infty\\)，所以右段发散。 · The limit is \\(+\\infty\\), so the right piece diverges.',
          '只要有一段发散，整个积分就发散。 · If one piece diverges, the whole integral diverges.',
        ],
        solution: '积分发散；不能把两侧的形式值相加得到有限数。 · The integral diverges; do not add formal values from the two sides to get a finite number.',
        solutionLatex: '\\int_{0}^{2}\\dfrac{1}{(x-1)^{2}}\\,\\mathrm{d}x',
      },
    ],
    examTips: [
      'CED Unit 6：先找无界点，再决定是否拆分 · CED Unit 6: find unbounded points first, then decide whether to split',
      '写极限时标明是 \\(b\\to\\infty\\) 还是 \\(c\\to a^{+}\\) · Indicate whether the limit is \\(b\\to\\infty\\) or \\(c\\to a^{+}\\)',
      '两个 \\(p\\) 判据方向相反，画数轴帮助记忆 · The two \\(p\\)-criteria point in opposite directions; a number line helps',
      '结论写“收敛”或“发散”，并给出极限值或发散理由 · Conclude “convergent” or “divergent,” with the limit value or reason',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u6', code: '6.7', title: '定积分求值 · The Fundamental Theorem of Calculus and Definite Integrals', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.11', title: '部分分式 · Integrating Using Linear Partial Fractions', relation: '相关 · Related' },
      { subject: 'math', chapterId: 'calc-u10', code: '10.5', title: '调和级数与 p 级数 · Harmonic Series and p-Series', relation: '对比 · Contrast' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.8', title: '求原函数 · Finding Antiderivatives and Indefinite Integrals', relation: '工具 · Tool' },
    ],
    development: ['无限区间 · Infinite intervals', '无界被积函数 · Unbounded integrands', '内部奇点拆分 · Splitting at interior singularities', '\\(p\\) 判据 · \\(p\\)-criteria', '比较检验 · Comparison test'],
    checks: ['为什么内部奇点必须拆分？ · Why must an interior singularity be split?', '两个 \\(p\\) 判据的方向为什么相反？ · Why do the two \\(p\\)-criteria point in opposite directions?', '\\(\\int_{-1}^{1}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x\\) 为什么不是负数？ · Why is \\(\\int_{-1}^{1}\\dfrac{1}{x^{2}}\\,\\mathrm{d}x\\) not negative?'],
    summary: '反常积分用极限处理无限区间与无界被积函数；内部奇点必须拆分，任一部分发散则整体发散；两个 \\(p\\) 判据方向相反。 · Improper integrals use limits for infinite intervals and unbounded integrands; interior singularities must be split, divergence of any part means divergence of the whole, and the two \\(p\\)-criteria point in opposite directions.',
  },
  'math/calc-u8/8.11': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用垫圈法 \\(V=\\pi\\int\\left(R^{2}-r^{2}\\right)\\) 求绕 \\(x\\) 轴或 \\(y\\) 轴旋转的体积。 · Use the washer method \\(V=\\pi\\int\\left(R^{2}-r^{2}\\right)\\) to find volumes of revolution about the \\(x\\)- or \\(y\\)-axis.',
      '能在具体区域中识别外半径 \\(R\\) 与内半径 \\(r\\)，并说明截面为什么是圆环。 · Identify the outer radius \\(R\\) and inner radius \\(r\\) in a given region and explain why the cross section is an annulus.',
      '能根据旋转轴与切片方向选择 \\(\\mathrm{d}x\\) 或 \\(\\mathrm{d}y\\)，并写出正确的积分限。 · Choose \\(\\mathrm{d}x\\) or \\(\\mathrm{d}y\\) from the axis and slice direction, and write the correct limits.',
    ],
    essentialKnowledge: [
      '垫圈法的截面是圆环，面积为 \\(\\pi R^{2}-\\pi r^{2}=\\pi\\left(R^{2}-r^{2}\\right)\\)，不是 \\(\\pi(R-r)^{2}\\)。 · A washer cross section is an annulus with area \\(\\pi R^{2}-\\pi r^{2}=\\pi\\left(R^{2}-r^{2}\\right)\\), not \\(\\pi(R-r)^{2}\\).',
      '绕 \\(x\\) 轴用竖直切片：外半径是上曲线到 \\(x\\) 轴的距离，内半径是下曲线到 \\(x\\) 轴的距离，体积微元用 \\(\\mathrm{d}x\\)。 · About the \\(x\\)-axis, use vertical slices: the outer radius is the upper curve’s distance to the axis, the inner radius is the lower curve’s distance, and the volume element uses \\(\\mathrm{d}x\\).',
      '绕 \\(y\\) 轴用水平切片：外半径是右曲线到 \\(y\\) 轴的距离，内半径是左曲线到 \\(y\\) 轴的距离，体积微元用 \\(\\mathrm{d}y\\)。 · About the \\(y\\)-axis, use horizontal slices: the outer radius is the right curve’s distance to the axis, the inner radius is the left curve’s distance, and the volume element uses \\(\\mathrm{d}y\\).',
      '若区域有一条边就是旋转轴，内半径为 \\(0\\)，垫圈退化为圆盘，回到圆盘法。 · If one boundary is the axis of rotation, the inner radius is \\(0\\) and the washer reduces to a disk.',
      '积分限由区域的交点或题目给定范围决定；先画草图判断哪条曲线在外、哪条在内。 · Limits come from intersection points or the given range; sketch first to decide which curve is outer and which is inner.',
      '区域若跨越旋转轴，半径要按到轴的距离分段，不能直接用同一条曲线作外半径。 · If the region crosses the axis, radii must be handled piecewise by distance to the axis.',
    ],
    definition: '垫圈法用于求一个区域绕不穿过其内部的轴旋转所得体积。取垂直于轴的切片，截面是外半径 \\(R\\)、内半径 \\(r\\) 的圆环，体积为 \\(V=\\pi\\int_{a}^{b}\\left[R(x)^{2}-r(x)^{2}\\right]\\mathrm{d}x\\)（绕 \\(x\\) 轴）或 \\(V=\\pi\\int_{c}^{d}\\left[R(y)^{2}-r(y)^{2}\\right]\\mathrm{d}y\\)（绕 \\(y\\) 轴）。 · The washer method gives the volume when a region is rotated about an axis that does not pass through its interior. A slice perpendicular to the axis is an annulus with outer radius \\(R\\) and inner radius \\(r\\), so \\(V=\\pi\\int_{a}^{b}\\left[R(x)^{2}-r(x)^{2}\\right]\\mathrm{d}x\\) about the \\(x\\)-axis, or \\(V=\\pi\\int_{c}^{d}\\left[R(y)^{2}-r(y)^{2}\\right]\\mathrm{d}y\\) about the \\(y\\)-axis.',
    intuition: '旋转出来的立体中间是空的：每个截面像一个垫圈。先算外圆面积，再减去内圆面积，剩下的圆环面积乘以厚度，就是一片垫圈的体积。 · The solid has a hole in the middle: each cross section looks like a washer. Subtract the inner circle’s area from the outer circle’s area, multiply by the thickness, and you have the volume of one washer.',
    intuitionDetailed: '绕 \\(x\\) 轴时，竖直切片旋转成一个圆环。外半径是切片顶端到轴的距离，内半径是切片底端到轴的距离。若上曲线为 \\(f(x)\\)、下曲线为 \\(g(x)\\)，则 \\(R=f(x)\\)、\\(r=g(x)\\)（在 \\(f\\ge g\\ge0\\) 时）。绕 \\(y\\) 轴时改用水平切片，右曲线给外半径、左曲线给内半径。先画图可以避免把内外半径写反。 · About the \\(x\\)-axis, a vertical slice rotates into an annulus. The outer radius is the distance from the top of the slice to the axis, and the inner radius is the distance from the bottom. If the upper curve is \\(f(x)\\) and the lower curve is \\(g(x)\\), then \\(R=f(x)\\) and \\(r=g(x)\\) when \\(f\\ge g\\ge0\\). About the \\(y\\)-axis, use horizontal slices: the right curve gives the outer radius and the left curve the inner radius. Sketching prevents swapping them.',
    formulas: [
      { latex: 'V=\\pi\\int_{a}^{b}\\left[R(x)^{2}-r(x)^{2}\\right]\\mathrm{d}x', note: '绕 \\(x\\) 轴，竖直切片。 · About the \\(x\\)-axis with vertical slices.' },
      { latex: 'V=\\pi\\int_{c}^{d}\\left[R(y)^{2}-r(y)^{2}\\right]\\mathrm{d}y', note: '绕 \\(y\\) 轴，水平切片。 · About the \\(y\\)-axis with horizontal slices.' },
      { latex: 'A_{\\text{垫圈 · washer}}=\\pi\\left(R^{2}-r^{2}\\right)', note: '圆环截面积。 · Annulus cross-sectional area.' },
      { latex: 'r=0\\;\\Rightarrow\\;V=\\pi\\int R^{2}\\,\\mathrm{d}x', note: '内半径为 \\(0\\) 时退化为圆盘法。 · When the inner radius is \\(0\\), this reduces to the disk method.' },
    ],
    derivationNotes: [
      { from: '区域 · Region', to: '切片 · Slice', note: '取垂直于旋转轴的薄片，旋转后成为圆环。 · Take a thin slice perpendicular to the axis; it rotates into an annulus.' },
      { from: '圆环 · Annulus', to: '截面积 · Cross-sectional area', note: '外圆面积减内圆面积：\\(\\pi R^{2}-\\pi r^{2}\\)。 · Outer area minus inner area: \\(\\pi R^{2}-\\pi r^{2}\\).' },
      { from: '截面积 · Cross-sectional area', to: '体积 · Volume', note: '乘以厚度并对切片方向积分。 · Multiply by thickness and integrate along the slice direction.' },
    ],
    conditions: [
      '旋转轴不能穿过区域内部；若穿过，必须分段或改用其他方法 · The axis must not pass through the region; if it does, split or use another method',
      '外半径与内半径都必须按“到轴的距离”计算 · Both radii must be measured as distances to the axis',
      '绕 \\(x\\) 轴通常用 \\(\\mathrm{d}x\\)，绕 \\(y\\) 轴通常用 \\(\\mathrm{d}y\\) · About the \\(x\\)-axis use \\(\\mathrm{d}x\\); about the \\(y\\)-axis use \\(\\mathrm{d}y\\)',
      '先求交点确定积分限 · Find intersection points to determine the limits',
      '被积函数是 \\(R^{2}-r^{2}\\)，不是 \\((R-r)^{2}\\) · The integrand is \\(R^{2}-r^{2}\\), not \\((R-r)^{2}\\)',
    ],
    keyPoints: [
      '垫圈面积 = 外圆减内圆 · Washer area equals outer circle minus inner circle',
      '绕 \\(x\\) 轴：上减下 · About the \\(x\\)-axis: upper minus lower',
      '绕 \\(y\\) 轴：右减左 · About the \\(y\\)-axis: right minus left',
      '先平方再相减 · Square first, then subtract',
      '区域贴轴时内半径为 \\(0\\) · If the region touches the axis, the inner radius is \\(0\\)',
    ],
    misconceptions: [
      '把 \\(\\pi\\left(R^{2}-r^{2}\\right)\\) 写成 \\(\\pi(R-r)^{2}\\) · Writing \\(\\pi\\left(R^{2}-r^{2}\\right)\\) as \\(\\pi(R-r)^{2}\\)',
      '把内半径与外半径写反 · Swapping the inner and outer radii',
      '绕 \\(y\\) 轴却仍对 \\(x\\) 积分 · Integrating with respect to \\(x\\) while rotating about the \\(y\\)-axis',
      '忘记乘 \\(\\pi\\) · Forgetting the factor \\(\\pi\\)',
      '区域跨轴时仍用同一条曲线作外半径 · Using the same curve as the outer radius when the region crosses the axis',
    ],
    examples: [
      {
        title: '例 1 · 绕 x 轴 · About the x-Axis',
        prompt: '区域由 \\(y=\\sqrt{x}\\) 与 \\(y=x^{2}\\)（\\(0\\le x\\le1\\)）围成，绕 \\(x\\) 轴旋转，求体积。 · The region bounded by \\(y=\\sqrt{x}\\) and \\(y=x^{2}\\) for \\(0\\le x\\le1\\) is rotated about the \\(x\\)-axis. Find the volume.',
        steps: [
          '在 \\((0,1)\\) 上 \\(\\sqrt{x}\\ge x^{2}\\)，所以外半径 \\(R=\\sqrt{x}\\)，内半径 \\(r=x^{2}\\)。 · On \\((0,1)\\), \\(\\sqrt{x}\\ge x^{2}\\), so \\(R=\\sqrt{x}\\) and \\(r=x^{2}\\).',
          '\\(V=\\pi\\int_{0}^{1}\\left[(\\sqrt{x})^{2}-(x^{2})^{2}\\right]\\mathrm{d}x\\)。 · \\(V=\\pi\\int_{0}^{1}\\left[(\\sqrt{x})^{2}-(x^{2})^{2}\\right]\\mathrm{d}x\\).',
          '\\(V=\\pi\\int_{0}^{1}\\left(x-x^{4}\\right)\\mathrm{d}x=\\pi\\left[\\dfrac{x^{2}}{2}-\\dfrac{x^{5}}{5}\\right]_{0}^{1}\\)。 · \\(V=\\pi\\int_{0}^{1}\\left(x-x^{4}\\right)\\mathrm{d}x=\\pi\\left[\\dfrac{x^{2}}{2}-\\dfrac{x^{5}}{5}\\right]_{0}^{1}\\).',
          '\\(V=\\pi\\left(\\dfrac{1}{2}-\\dfrac{1}{5}\\right)=\\dfrac{3\\pi}{10}\\)。 · \\(V=\\pi\\left(\\dfrac{1}{2}-\\dfrac{1}{5}\\right)=\\dfrac{3\\pi}{10}\\).',
        ],
        solution: '\\(V=\\dfrac{3\\pi}{10}\\)。 · \\(V=\\dfrac{3\\pi}{10}\\).',
        solutionLatex: 'V=\\dfrac{3\\pi}{10}',
      },
      {
        title: '例 2 · 两条抛物线 · Two Parabolas',
        prompt: '区域由 \\(y=x^{2}\\) 与 \\(y=2-x^{2}\\) 围成，绕 \\(x\\) 轴旋转，求体积。 · The region bounded by \\(y=x^{2}\\) and \\(y=2-x^{2}\\) is rotated about the \\(x\\)-axis. Find the volume.',
        steps: [
          '交点：\\(x^{2}=2-x^{2}\\Rightarrow x=\\pm1\\)。 · Intersections: \\(x^{2}=2-x^{2}\\Rightarrow x=\\pm1\\).',
          '在 \\([-1,1]\\) 上 \\(2-x^{2}\\ge x^{2}\\)，所以 \\(R=2-x^{2}\\)，\\(r=x^{2}\\)。 · On \\([-1,1]\\), \\(2-x^{2}\\ge x^{2}\\), so \\(R=2-x^{2}\\) and \\(r=x^{2}\\).',
          '\\(V=\\pi\\int_{-1}^{1}\\left[(2-x^{2})^{2}-x^{4}\\right]\\mathrm{d}x\\)。 · \\(V=\\pi\\int_{-1}^{1}\\left[(2-x^{2})^{2}-x^{4}\\right]\\mathrm{d}x\\).',
          '展开得 \\((2-x^{2})^{2}-x^{4}=4-4x^{2}\\)，所以 \\(V=\\pi\\left[4x-\\dfrac{4x^{3}}{3}\\right]_{-1}^{1}=\\dfrac{16\\pi}{3}\\)。 · Expanding gives \\((2-x^{2})^{2}-x^{4}=4-4x^{2}\\), so \\(V=\\pi\\left[4x-\\dfrac{4x^{3}}{3}\\right]_{-1}^{1}=\\dfrac{16\\pi}{3}\\).',
        ],
        solution: '\\(V=\\dfrac{16\\pi}{3}\\)。 · \\(V=\\dfrac{16\\pi}{3}\\).',
        solutionLatex: 'V=\\dfrac{16\\pi}{3}',
      },
      {
        title: '例 3 · 绕 y 轴 · About the y-Axis',
        prompt: '区域由 \\(x=y^{2}\\) 与 \\(x=y\\)（\\(0\\le y\\le1\\)）围成，绕 \\(y\\) 轴旋转，求体积。 · The region bounded by \\(x=y^{2}\\) and \\(x=y\\) for \\(0\\le y\\le1\\) is rotated about the \\(y\\)-axis. Find the volume.',
        steps: [
          '在 \\((0,1)\\) 上 \\(y\\ge y^{2}\\)，所以右曲线 \\(x=y\\) 给外半径，左曲线 \\(x=y^{2}\\) 给内半径。 · On \\((0,1)\\), \\(y\\ge y^{2}\\), so the right curve \\(x=y\\) gives the outer radius and the left curve \\(x=y^{2}\\) the inner radius.',
          '\\(V=\\pi\\int_{0}^{1}\\left[y^{2}-(y^{2})^{2}\\right]\\mathrm{d}y\\)。 · \\(V=\\pi\\int_{0}^{1}\\left[y^{2}-(y^{2})^{2}\\right]\\mathrm{d}y\\).',
          '\\(V=\\pi\\int_{0}^{1}\\left(y^{2}-y^{4}\\right)\\mathrm{d}y=\\pi\\left[\\dfrac{y^{3}}{3}-\\dfrac{y^{5}}{5}\\right]_{0}^{1}\\)。 · \\(V=\\pi\\int_{0}^{1}\\left(y^{2}-y^{4}\\right)\\mathrm{d}y=\\pi\\left[\\dfrac{y^{3}}{3}-\\dfrac{y^{5}}{5}\\right]_{0}^{1}\\).',
          '\\(V=\\pi\\left(\\dfrac{1}{3}-\\dfrac{1}{5}\\right)=\\dfrac{2\\pi}{15}\\)。 · \\(V=\\pi\\left(\\dfrac{1}{3}-\\dfrac{1}{5}\\right)=\\dfrac{2\\pi}{15}\\).',
        ],
        solution: '\\(V=\\dfrac{2\\pi}{15}\\)。 · \\(V=\\dfrac{2\\pi}{15}\\).',
        solutionLatex: 'V=\\dfrac{2\\pi}{15}',
      },
    ],
    examTips: [
      'CED Unit 8：先画区域，标出旋转轴，再确定内外半径 · CED Unit 8: sketch the region, mark the axis, then determine the radii',
      '绕 \\(x\\) 轴用 \\(\\mathrm{d}x\\)，绕 \\(y\\) 轴用 \\(\\mathrm{d}y\\) · Use \\(\\mathrm{d}x\\) about the \\(x\\)-axis and \\(\\mathrm{d}y\\) about the \\(y\\)-axis',
      '被积函数是平方差，不是差的平方 · The integrand is a difference of squares, not a squared difference',
      '答案应为正；负值说明内外半径或积分限写反 · The answer should be positive; a negative value means radii or limits are reversed',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u8', code: '8.9', title: '圆盘法 · Volume with Disc Method: Revolving Around the x- or y-Axis', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u8', code: '8.12', title: '垫圈法其他轴 · Volume with Washer Method: Revolving Around Other Axes', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u8', code: '8.4', title: '曲线间面积 · Finding the Area Between Curves Expressed as Functions of x', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u8', code: '8.7', title: '截面法：正方形与矩形 · Volumes with Cross Sections: Squares and Rectangles', relation: '对比 · Contrast' },
    ],
    development: ['圆环截面 · Annulus cross sections', '外半径与内半径 · Outer and inner radii', '绕 \\(x\\) 轴 · About the \\(x\\)-axis', '绕 \\(y\\) 轴 · About the \\(y\\)-axis', '与圆盘法的关系 · Relation to the disk method'],
    checks: ['为什么垫圈面积是 \\(\\pi(R^{2}-r^{2})\\) 而不是 \\(\\pi(R-r)^{2}\\)？ · Why is the washer area \\(\\pi(R^{2}-r^{2})\\) rather than \\(\\pi(R-r)^{2}\\)?', '绕 \\(y\\) 轴时外半径由哪条曲线给出？ · Which curve gives the outer radius about the \\(y\\)-axis?', '什么情况下垫圈法退化为圆盘法？ · When does the washer method reduce to the disk method?'],
    summary: '垫圈法把旋转体切成圆环：外圆面积减内圆面积，再沿切片方向积分；关键是先画图、认对内外半径和积分变量。 · The washer method slices a solid into annuli: subtract the inner circle area from the outer, then integrate along the slice direction; sketch first and identify the radii and variable correctly.',
  },
  'math/calc-u8/8.13': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用 \\(L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x\\) 求光滑曲线 \\(y=f(x)\\) 的弧长。 · Use \\(L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x\\) to find the arc length of a smooth curve \\(y=f(x)\\).',
      '能由 \\(\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\) 解释弧长微元，并在 \\(x=g(y)\\) 时改用 \\(\\mathrm{d}y\\)。 · Explain the arc-length element from \\(\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\) and switch to \\(\\mathrm{d}y\\) when \\(x=g(y)\\).',
      '能区分路程（distance traveled）与位移，并用 \\(\\int\\left|v(t)\\right|\\mathrm{d}t\\) 求路程。 · Distinguish distance traveled from displacement and compute distance with \\(\\int\\left|v(t)\\right|\\mathrm{d}t\\).',
    ],
    essentialKnowledge: [
      '对 \\(y=f(x)\\)，弧长为 \\(L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x\\)；根号内的 \\(1\\) 来自 \\(\\mathrm{d}x\\) 的贡献。 · For \\(y=f(x)\\), the arc length is \\(L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x\\); the \\(1\\) under the radical comes from the \\(\\mathrm{d}x\\) contribution.',
      '对 \\(x=g(y)\\)，弧长为 \\(L=\\int_{c}^{d}\\sqrt{1+\\left(g\'(y)\\right)^{2}}\\,\\mathrm{d}y\\)。 · For \\(x=g(y)\\), the arc length is \\(L=\\int_{c}^{d}\\sqrt{1+\\left(g\'(y)\\right)^{2}}\\,\\mathrm{d}y\\).',
      '光滑曲线要求导数连续；尖点处要分段，因为切线方向在尖点发生突变。 · A smooth curve requires a continuous derivative; cusps must be split because the tangent direction changes abruptly.',
      '路程是速度绝对值的积分：\\(\\text{路程}=\\int_{a}^{b}\\left|v(t)\\right|\\mathrm{d}t\\)；位移是 \\(\\int_{a}^{b}v(t)\\,\\mathrm{d}t\\)。 · Distance traveled is the integral of speed: \\(\\text{distance}=\\int_{a}^{b}\\left|v(t)\\right|\\mathrm{d}t\\); displacement is \\(\\int_{a}^{b}v(t)\\,\\mathrm{d}t\\).',
      '当速度变号时，路程要把时间区间分段，在每一段内取正确符号；不能直接对速度积分。 · When velocity changes sign, split the time interval and use the correct sign on each piece; do not simply integrate velocity.',
      '有些弧长积分没有初等原函数，题目可能只要求写出积分式或用数值方法近似。 · Some arc-length integrals have no elementary antiderivative; a problem may ask only for the integral setup or a numerical approximation.',
      '参数曲线的弧长公式是 \\(\\int\\sqrt{(x\')^{2}+(y\')^{2}}\\,\\mathrm{d}t\\)，与这里的标量公式等价。 · The parametric arc-length formula \\(\\int\\sqrt{(x\')^{2}+(y\')^{2}}\\,\\mathrm{d}t\\) is equivalent to the scalar formula here.',
    ],
    definition: '光滑曲线 \\(y=f(x)\\) 从 \\(x=a\\) 到 \\(x=b\\) 的弧长为 \\(L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x\\)。若曲线写成 \\(x=g(y)\\)，则 \\(L=\\int_{c}^{d}\\sqrt{1+\\left(g\'(y)\\right)^{2}}\\,\\mathrm{d}y\\)。弧长是沿曲线走过的总长度，不是位移。 · The arc length of a smooth curve \\(y=f(x)\\) from \\(x=a\\) to \\(x=b\\) is \\(L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x\\). If the curve is written as \\(x=g(y)\\), then \\(L=\\int_{c}^{d}\\sqrt{1+\\left(g\'(y)\\right)^{2}}\\,\\mathrm{d}y\\). Arc length is total distance along the curve, not displacement.',
    intuition: '把曲线拉直成许多小线段：每一小段横向走 \\(\\mathrm{d}x\\)、纵向走 \\(\\mathrm{d}y\\)，由勾股定理长度是 \\(\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\)。把 \\(\\mathrm{d}y=f\'(x)\\mathrm{d}x\\) 代入，就得到 \\(\\sqrt{1+(f\')^{2}}\\,\\mathrm{d}x\\)。 · Straighten the curve into many tiny segments: each moves \\(\\mathrm{d}x\\) horizontally and \\(\\mathrm{d}y\\) vertically, so its length is \\(\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\). Substituting \\(\\mathrm{d}y=f\'(x)\\mathrm{d}x\\) gives \\(\\sqrt{1+(f\')^{2}}\\,\\mathrm{d}x\\).',
    intuitionDetailed: '弧长是“沿曲线走的总路程”，所以它总是非负，并且与方向无关（反向只交换积分限）。路程与位移的区别在速度变号时最明显：粒子先向右再向左，位移可能很小，但路程要加上两段长度。对速度积分得到的是位移；对速度的绝对值积分才得到路程。 · Arc length is the total distance walked along the curve, so it is always nonnegative and independent of direction (reversing only swaps the limits). The difference between distance and displacement is clearest when velocity changes sign: a particle may move right and then left, giving a small displacement but a larger total distance. Integrating velocity gives displacement; integrating the absolute value of velocity gives distance traveled.',
    formulas: [
      { latex: 'L=\\int_{a}^{b}\\sqrt{1+\\left(f\'(x)\\right)^{2}}\\,\\mathrm{d}x', note: '曲线 \\(y=f(x)\\) 的弧长。 · Arc length of \\(y=f(x)\\).' },
      { latex: 'L=\\int_{c}^{d}\\sqrt{1+\\left(g\'(y)\\right)^{2}}\\,\\mathrm{d}y', note: '曲线 \\(x=g(y)\\) 的弧长。 · Arc length of \\(x=g(y)\\).' },
      { latex: '\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}', note: '弧长微元。 · Arc-length element.' },
      { latex: '\\text{路程 · distance}=\\int_{a}^{b}\\left|v(t)\\right|\\mathrm{d}t', note: '速度变号时要分段。 · Split when velocity changes sign.' },
      { latex: '\\text{位移 · displacement}=\\int_{a}^{b}v(t)\\,\\mathrm{d}t', note: '位移可以为负。 · Displacement may be negative.' },
    ],
    derivationNotes: [
      { from: '小线段 · Small segment', to: '弧长微元 · Arc-length element', note: '勾股定理给出 \\(\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\)。 · The Pythagorean theorem gives \\(\\mathrm{d}s=\\sqrt{(\\mathrm{d}x)^{2}+(\\mathrm{d}y)^{2}}\\).' },
      { from: '弧长微元 · Arc-length element', to: '标量公式 · Scalar formula', note: '代入 \\(\\mathrm{d}y=f\'(x)\\mathrm{d}x\\)，提出 \\(\\mathrm{d}x\\)。 · Substitute \\(\\mathrm{d}y=f\'(x)\\mathrm{d}x\\) and factor out \\(\\mathrm{d}x\\).' },
      { from: '速度 · Velocity', to: '路程 · Distance', note: '对 \\(\\left|v\\right|\\) 积分；变号处分段。 · Integrate \\(\\left|v\\right|\\); split at sign changes.' },
    ],
    conditions: [
      '曲线在区间上光滑，导数连续 · The curve is smooth on the interval, with continuous derivative',
      '尖点或竖直切线处要分段或改用 \\(x=g(y)\\) · Split at cusps or vertical tangents, or switch to \\(x=g(y)\\)',
      '积分限是曲线实际经过的区间 · Limits are the interval actually traced by the curve',
      '路程要用 \\(\\left|v\\right|\\)，位移才直接用 \\(v\\) · Distance uses \\(\\left|v\\right|\\); displacement uses \\(v\\) directly',
      '结果应为非负；负值说明积分限或符号有误 · The result must be nonnegative; a negative value indicates wrong limits or signs',
    ],
    keyPoints: [
      '弧长公式根号内是 \\(1+(f\')^{2}\\) · The radical contains \\(1+(f\')^{2}\\)',
      '先求导，再平方，再加 \\(1\\) · Differentiate, square, then add \\(1\\)',
      '路程 = \\(\\int\\left|v\\right|\\)，位移 = \\(\\int v\\) · Distance is \\(\\int\\left|v\\right|\\); displacement is \\(\\int v\\)',
      '速度变号时分段 · Split when velocity changes sign',
      '有些积分只能写式或数值近似 · Some integrals can only be set up or approximated numerically',
    ],
    misconceptions: [
      '漏掉根号内的 \\(1\\) · Omitting the \\(1\\) under the radical',
      '把 \\(\\int f\'(x)\\,\\mathrm{d}x\\) 当作弧长 · Treating \\(\\int f\'(x)\\,\\mathrm{d}x\\) as arc length',
      '把路程与位移混为一谈 · Confusing distance traveled with displacement',
      '速度变号时仍直接积分 \\(v(t)\\) 求路程 · Integrating \\(v(t)\\) directly for distance when velocity changes sign',
      '忘记开根号 · Forgetting the square root',
    ],
    examples: [
      {
        title: '例 1 · 幂函数 · Power Function',
        prompt: '求 \\(y=x\\sqrt{x}\\) 从 \\(x=0\\) 到 \\(x=1\\) 的弧长。 · Find the arc length of \\(y=x\\sqrt{x}\\) from \\(x=0\\) to \\(x=1\\).',
        steps: [
          '\\(f\'(x)=\\dfrac{3}{2}\\sqrt{x}\\)，所以 \\(1+(f\')^{2}=1+\\dfrac{9x}{4}\\)。 · \\(f\'(x)=\\dfrac{3}{2}\\sqrt{x}\\), so \\(1+(f\')^{2}=1+\\dfrac{9x}{4}\\).',
          '\\(L=\\int_{0}^{1}\\sqrt{1+\\dfrac{9x}{4}}\\,\\mathrm{d}x\\)。 · \\(L=\\int_{0}^{1}\\sqrt{1+\\dfrac{9x}{4}}\\,\\mathrm{d}x\\).',
          '令 \\(u=1+\\dfrac{9x}{4}\\)，\\(\\mathrm{d}u=\\dfrac{9}{4}\\mathrm{d}x\\)，积分限从 \\(1\\) 到 \\(\\dfrac{13}{4}\\)。 · Let \\(u=1+\\dfrac{9x}{4}\\), so \\(\\mathrm{d}u=\\dfrac{9}{4}\\mathrm{d}x\\), with limits from \\(1\\) to \\(\\dfrac{13}{4}\\).',
          '\\(L=\\dfrac{4}{9}\\cdot\\dfrac{2}{3}\\left[\\dfrac{13\\sqrt{13}}{8}-1\\right]=\\dfrac{13\\sqrt{13}-8}{27}\\)。 · \\(L=\\dfrac{4}{9}\\cdot\\dfrac{2}{3}\\left[\\dfrac{13\\sqrt{13}}{8}-1\\right]=\\dfrac{13\\sqrt{13}-8}{27}\\).',
        ],
        solution: '\\(L=\\dfrac{13\\sqrt{13}-8}{27}\\)。 · \\(L=\\dfrac{13\\sqrt{13}-8}{27}\\).',
        solutionLatex: 'L=\\dfrac{13\\sqrt{13}-8}{27}',
      },
      {
        title: '例 2 · 对数余弦 · Logarithm of Cosine',
        prompt: '求 \\(y=\\ln(\\cos x)\\) 从 \\(x=0\\) 到 \\(x=\\dfrac{\\pi}{4}\\) 的弧长。 · Find the arc length of \\(y=\\ln(\\cos x)\\) from \\(x=0\\) to \\(x=\\dfrac{\\pi}{4}\\).',
        steps: [
          '\\(f\'(x)=-\\tan x\\)。 · \\(f\'(x)=-\\tan x\\).',
          '\\(1+(f\')^{2}=1+\\tan^{2}x=\\sec^{2}x\\)。 · \\(1+(f\')^{2}=1+\\tan^{2}x=\\sec^{2}x\\).',
          '\\(L=\\int_{0}^{\\dfrac{\\pi}{4}}\\sec x\\,\\mathrm{d}x\\)。 · \\(L=\\int_{0}^{\\dfrac{\\pi}{4}}\\sec x\\,\\mathrm{d}x\\).',
          '\\(\\int\\sec x\\,\\mathrm{d}x=\\ln|\\sec x+\\tan x|\\)，代入得 \\(\\ln(\\sqrt2+1)\\)。 · \\(\\int\\sec x\\,\\mathrm{d}x=\\ln|\\sec x+\\tan x|\\), which gives \\(\\ln(\\sqrt2+1)\\).',
        ],
        solution: '\\(L=\\ln(\\sqrt2+1)\\)。 · \\(L=\\ln(\\sqrt2+1)\\).',
        solutionLatex: 'L=\\ln(\\sqrt2+1)',
      },
      {
        title: '例 3 · 路程与位移 · Distance and Displacement',
        prompt: '粒子速度为 \\(v(t)=t^{2}-4\\)（\\(0\\le t\\le3\\)）。求位移与路程。 · A particle has velocity \\(v(t)=t^{2}-4\\) for \\(0\\le t\\le3\\). Find its displacement and distance traveled.',
        steps: [
          '位移：\\(\\int_{0}^{3}(t^{2}-4)\\,\\mathrm{d}t=\\left[\\dfrac{t^{3}}{3}-4t\\right]_{0}^{3}=9-12=-3\\)。 · Displacement: \\(\\int_{0}^{3}(t^{2}-4)\\,\\mathrm{d}t=\\left[\\dfrac{t^{3}}{3}-4t\\right]_{0}^{3}=9-12=-3\\).',
          '速度在 \\(t=2\\) 变号，所以要分 \\([0,2]\\) 与 \\([2,3]\\) 两段。 · Velocity changes sign at \\(t=2\\), so split into \\([0,2]\\) and \\([2,3]\\).',
          '\\(\\int_{0}^{2}(4-t^{2})\\,\\mathrm{d}t=\\dfrac{16}{3}\\)，\\(\\int_{2}^{3}(t^{2}-4)\\,\\mathrm{d}t=\\dfrac{7}{3}\\)。 · \\(\\int_{0}^{2}(4-t^{2})\\,\\mathrm{d}t=\\dfrac{16}{3}\\) and \\(\\int_{2}^{3}(t^{2}-4)\\,\\mathrm{d}t=\\dfrac{7}{3}\\).',
          '路程 \\(=\\dfrac{16}{3}+\\dfrac{7}{3}=\\dfrac{23}{3}\\)。 · Distance \\(=\\dfrac{16}{3}+\\dfrac{7}{3}=\\dfrac{23}{3}\\).',
        ],
        solution: '位移为 \\(-3\\)，路程为 \\(\\dfrac{23}{3}\\)。 · Displacement is \\(-3\\), and distance traveled is \\(\\dfrac{23}{3}\\).',
        solutionLatex: '\\Delta x=-3,\\quad D=\\dfrac{23}{3}',
      },
    ],
    examTips: [
      'CED Unit 8：弧长与路程都用积分累加，但被积函数不同 · CED Unit 8: arc length and distance both accumulate with integrals, but the integrands differ',
      '先求导并化简根号，再决定换元 · Differentiate and simplify the radical before choosing a substitution',
      '速度变号时路程必须分段 · Split distance when velocity changes sign',
      '有些积分没有初等原函数，写清积分式即可 · Some integrals have no elementary antiderivative; a clear setup may be enough',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u9', code: '9.3', title: '参数弧长 · Finding Arc Lengths of Curves Given by Parametric Equations', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u9', code: '9.6', title: '向量运动解题 · Solving Motion Problems Using Parametric and Vector-Valued Functions', relation: '应用 · Application' },
      { subject: 'math', chapterId: 'calc-u8', code: '8.2', title: '位置速度加速度 · Connecting Position, Velocity, and Acceleration Using Integrals', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u6', code: '6.9', title: '换元积分法 · Integrating Using Substitution', relation: '工具 · Tool' },
    ],
    development: ['弧长微元 · Arc-length element', '标量弧长公式 · Scalar arc-length formula', '\\(x=g(y)\\) 的情形 · The case \\(x=g(y)\\)', '路程与位移 · Distance and displacement', '数值近似 · Numerical approximation'],
    checks: ['根号内的 \\(1\\) 从哪里来？ · Where does the \\(1\\) under the radical come from?', '为什么路程要用 \\(\\left|v\\right|\\)？ · Why does distance traveled use \\(\\left|v\\right|\\)?', '什么时候应改用 \\(x=g(y)\\)？ · When should you switch to \\(x=g(y)\\)?'],
    summary: '平面曲线弧长用 \\(\\int\\sqrt{1+(f\')^{2}}\\,\\mathrm{d}x\\)（或对 \\(y\\) 的对应形式）；路程是速度绝对值的积分，速度变号时要分段。 · Planar arc length uses \\(\\int\\sqrt{1+(f\')^{2}}\\,\\mathrm{d}x\\) (or the corresponding form in \\(y\\)); distance traveled is the integral of speed and must be split when velocity changes sign.',
  },
  'math/calc-u5/5.4': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用 \\(f\'\\) 的符号变化判断临界点是局部极大、局部极小还是都不是。 · Use the sign change of \\(f\'\\) to classify a critical point as a local maximum, a local minimum, or neither.',
      '能列出临界点并把定义域分段，制作 \\(f\'\\) 的符号表。 · List the critical points, partition the domain, and build a sign chart for \\(f\'\\).',
      '能处理 \\(f\'\\) 不存在的临界点，并说明一阶导数检验与二阶导数检验的适用差异。 · Handle critical points where \\(f\'\\) does not exist and explain how the first-derivative test differs from the second-derivative test.',
    ],
    essentialKnowledge: [
      '临界点是定义域内 \\(f\'(c)=0\\) 或 \\(f\'(c)\\) 不存在的点；端点通常不参与局部极值判定。 · A critical point is a domain point where \\(f\'(c)=0\\) or \\(f\'(c)\\) does not exist; endpoints are usually not part of the local-extremum test.',
      '若 \\(f\'\\) 在 \\(c\\) 左侧为正、右侧为负，则 \\(f\\) 在 \\(c\\) 处取局部极大值。 · If \\(f\'\\) is positive to the left of \\(c\\) and negative to the right, then \\(f\\) has a local maximum at \\(c\\).',
      '若 \\(f\'\\) 在 \\(c\\) 左侧为负、右侧为正，则 \\(f\\) 在 \\(c\\) 处取局部极小值。 · If \\(f\'\\) is negative to the left of \\(c\\) and positive to the right, then \\(f\\) has a local minimum at \\(c\\).',
      '若 \\(f\'\\) 在 \\(c\\) 两侧不变号，则 \\(c\\) 不是局部极值点，即使 \\(f\'(c)=0\\)。 · If \\(f\'\\) does not change sign at \\(c\\), then \\(c\\) is not a local extremum even if \\(f\'(c)=0\\).',
      '一阶导数检验依赖符号变化，适用于 \\(f\'\\) 存在或不存在但两侧可判断符号的临界点。 · The first-derivative test relies on sign changes and applies whether \\(f\'\\) exists at the critical point or not, as long as the sign on each side is known.',
      '二阶导数检验依赖 \\(f\'\'(c)\\) 的符号；当 \\(f\'\'(c)=0\\) 时失效，此时应回到一阶导数检验。 · The second-derivative test relies on the sign of \\(f\'\'(c)\\); it fails when \\(f\'\'(c)=0\\), and the first-derivative test should then be used.',
    ],
    definition: '一阶导数检验：设 \\(c\\) 是 \\(f\\) 的临界点，且在 \\(c\\) 两侧 \\(f\'\\) 的符号可判断。若 \\(f\'\\) 由正变负，则 \\(f(c)\\) 为局部极大值；若由负变正，则为局部极小值；若不变号，则不是局部极值。 · First-derivative test: let \\(c\\) be a critical point of \\(f\\) with a determinable sign of \\(f\'\\) on each side. If \\(f\'\\) changes from positive to negative, then \\(f(c)\\) is a local maximum; if it changes from negative to positive, it is a local minimum; if there is no sign change, it is not a local extremum.',
    intuition: '导数告诉你函数在往哪边走：\\(f\'>0\\) 时上升，\\(f\'<0\\) 时下降。若在临界点从上升转为下降，那里就是山顶；从下降转为上升，那里就是谷底；一直同向，就只是路上的一个停顿。 · The derivative tells you which way the function is heading: \\(f\'>0\\) means rising, \\(f\'<0\\) means falling. If the motion changes from rising to falling at a critical point, that point is a peak; from falling to rising, it is a valley; if the direction does not change, it is only a pause on the way.',
    intuitionDetailed: '制作符号表时，先把所有临界点按大小排列，再把定义域分成若干开区间，在每个区间取一个测试点代入 \\(f\'\\)。只关心符号，不关心具体数值。若 \\(f\'\\) 在临界点处不存在，但左右符号不同，仍然可以用一阶导数检验判定极值；例如 \\(f(x)=|x|\\) 在 \\(0\\) 处。 · To build a sign chart, order all critical points, divide the domain into open intervals, and test one point in each interval in \\(f\'\\). Only the sign matters, not the exact value. If \\(f\'\\) does not exist at the critical point but the signs on the two sides differ, the first-derivative test still applies; for example, \\(f(x)=|x|\\) at \\(0\\).',
    formulas: [
      { latex: 'f\'(c)=0\\;\\text{或 · or}\\;f\'(c)\\;\\text{不存在 · does not exist}\\;\\Rightarrow\\;c\\;\\text{为临界点 · critical point}', note: '临界点的两种来源。 · The two sources of critical points.' },
      { latex: 'f\':+\\to-\\;\\Rightarrow\\;\\text{局部极大 · local maximum}', note: '由增转减。 · From increasing to decreasing.' },
      { latex: 'f\':-\\to+\\;\\Rightarrow\\;\\text{局部极小 · local minimum}', note: '由减转增。 · From decreasing to increasing.' },
      { latex: 'f\'\\text{ 不变号 · no sign change}\\;\\Rightarrow\\;\\text{不是极值 · not an extremum}', note: '即使 \\(f\'(c)=0\\)。 · Even if \\(f\'(c)=0\\).' },
    ],
    derivationNotes: [
      { from: '临界点 · Critical points', to: '分段 · Partition', note: '按临界点把定义域分成开区间。 · Divide the domain into open intervals at the critical points.' },
      { from: '分段 · Partition', to: '符号表 · Sign chart', note: '在每个区间取测试点，只记录 \\(f\'\\) 的正负。 · Test one point per interval and record only the sign of \\(f\'\\).' },
      { from: '符号表 · Sign chart', to: '极值判定 · Extremum classification', note: '看临界点两侧符号是否改变以及改变方向。 · Check whether and how the sign changes across the critical point.' },
    ],
    conditions: [
      '\\(c\\) 必须在 \\(f\\) 的定义域内 · \\(c\\) must lie in the domain of \\(f\\)',
      '临界点包括 \\(f\'=0\\) 与 \\(f\'\\) 不存在的点 · Critical points include both \\(f\'=0\\) and points where \\(f\'\\) does not exist',
      '符号表要在每个区间内取测试点，不能只看临界点本身 · The sign chart requires a test point in each interval, not just the critical point',
      '端点是绝对极值候选，但不是一阶导数检验的局部极值点 · Endpoints are candidates for absolute extrema but are not local extrema in the first-derivative test',
      '若 \\(f\'\\) 在两侧符号无法判断，一阶导数检验不能下结论 · If the sign on either side cannot be determined, the first-derivative test is inconclusive',
    ],
    keyPoints: [
      '先找临界点，再分段看符号 · Find critical points, then check signs on each interval',
      '正变负是极大，负变正是极小 · Positive to negative is a maximum; negative to positive is a minimum',
      '不变号就不是极值 · No sign change means no extremum',
      '不要漏掉 \\(f\'\\) 不存在的点 · Do not miss points where \\(f\'\\) does not exist',
      '二阶导数检验失效时回到一阶导数检验 · When the second-derivative test fails, return to the first-derivative test',
    ],
    misconceptions: [
      '认为所有临界点都是极值点 · Assuming every critical point is an extremum',
      '只找 \\(f\'=0\\)，漏掉 \\(f\'\\) 不存在的点 · Finding only \\(f\'=0\\) and missing points where \\(f\'\\) does not exist',
      '用 \\(f\\) 的符号而不是 \\(f\'\\) 的符号做符号表 · Using the sign of \\(f\\) instead of \\(f\'\\) in the sign chart',
      '把端点当作局部极值点 · Treating endpoints as local extrema',
      '认为二阶导数检验总是可用 · Assuming the second-derivative test always works',
    ],
    examples: [
      {
        title: '例 1 · 三次函数 · Cubic Function',
        prompt: '求 \\(f(x)=x^{3}-3x\\) 的局部极值。 · Find the local extrema of \\(f(x)=x^{3}-3x\\).',
        steps: [
          '\\(f\'(x)=3x^{2}-3=3(x-1)(x+1)\\)，临界点为 \\(x=-1,1\\)。 · \\(f\'(x)=3x^{2}-3=3(x-1)(x+1)\\), so the critical points are \\(x=-1,1\\).',
          '符号表：\\((-\\infty,-1)\\) 上正，\\((-1,1)\\) 上负，\\((1,\\infty)\\) 上正。 · Sign chart: positive on \\((-\\infty,-1)\\), negative on \\((-1,1)\\), positive on \\((1,\\infty)\\).',
          '在 \\(x=-1\\) 由正变负，所以局部极大；在 \\(x=1\\) 由负变正，所以局部极小。 · At \\(x=-1\\) the sign changes from positive to negative, giving a local maximum; at \\(x=1\\) it changes from negative to positive, giving a local minimum.',
          '\\(f(-1)=2\\)，\\(f(1)=-2\\)。 · \\(f(-1)=2\\) and \\(f(1)=-2\\).',
        ],
        solution: '局部极大值 \\(f(-1)=2\\)，局部极小值 \\(f(1)=-2\\)。 · Local maximum \\(f(-1)=2\\); local minimum \\(f(1)=-2\\).',
        solutionLatex: 'f(-1)=2,\\quad f(1)=-2',
      },
      {
        title: '例 2 · 二阶导数失效 · Second Derivative Fails',
        prompt: '用一阶导数检验判断 \\(f(x)=x^{4}\\) 在 \\(x=0\\) 处的极值。 · Use the first-derivative test to classify the extremum of \\(f(x)=x^{4}\\) at \\(x=0\\).',
        steps: [
          '\\(f\'(x)=4x^{3}\\)，临界点为 \\(x=0\\)。 · \\(f\'(x)=4x^{3}\\), so the critical point is \\(x=0\\).',
          '当 \\(x<0\\) 时 \\(f\'<0\\)，当 \\(x>0\\) 时 \\(f\'>0\\)。 · For \\(x<0\\), \\(f\'<0\\); for \\(x>0\\), \\(f\'>0\\).',
          '符号由负变正，所以 \\(x=0\\) 是局部极小。 · The sign changes from negative to positive, so \\(x=0\\) is a local minimum.',
          '注意 \\(f\'\'(0)=0\\)，二阶导数检验在这里失效。 · Note that \\(f\'\'(0)=0\\), so the second-derivative test is inconclusive here.',
        ],
        solution: '\\(x=0\\) 是局部极小点，极小值为 \\(0\\)。 · \\(x=0\\) is a local minimum with value \\(0\\).',
        solutionLatex: 'f(0)=0',
      },
      {
        title: '例 3 · 不是极值 · Not an Extremum',
        prompt: '判断 \\(f(x)=x^{3}\\) 在 \\(x=0\\) 处是否有局部极值。 · Determine whether \\(f(x)=x^{3}\\) has a local extremum at \\(x=0\\).',
        steps: [
          '\\(f\'(x)=3x^{2}\\)，\\(f\'(0)=0\\)。 · \\(f\'(x)=3x^{2}\\), so \\(f\'(0)=0\\).',
          '当 \\(x\\neq0\\) 时 \\(f\'(x)>0\\)，两侧都为正。 · For \\(x\\neq0\\), \\(f\'(x)>0\\), positive on both sides.',
          '符号不变，所以 \\(x=0\\) 不是局部极值点。 · The sign does not change, so \\(x=0\\) is not a local extremum.',
        ],
        solution: '\\(x=0\\) 不是局部极值点，尽管 \\(f\'(0)=0\\)。 · \\(x=0\\) is not a local extremum, even though \\(f\'(0)=0\\).',
        solutionLatex: 'f\'(0)=0',
      },
    ],
    examTips: [
      'CED Unit 5：先写临界点，再画符号表 · CED Unit 5: list critical points first, then draw the sign chart',
      '判定极大/极小时要写出“由正变负”或“由负变正” · When classifying, state “positive to negative” or “negative to positive”',
      '不要漏掉导数不存在的临界点 · Do not omit critical points where the derivative does not exist',
      '二阶导数检验失效时，一阶导数检验仍然可用 · When the second-derivative test fails, the first-derivative test still works',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u5', code: '5.2', title: '极值定理 · Extreme Value Theorem, Global Versus Local Extrema, and Critical Points', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u5', code: '5.3', title: '增减性 · Determining Intervals of Increase and Decrease', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u5', code: '5.5', title: '候选绝对极值 · Using the Candidates Test to Determine Absolute Extrema', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u5', code: '5.7', title: '二阶导数检验 · Using the Second Derivative Test to Determine Extrema', relation: '对比 · Contrast' },
    ],
    development: ['临界点 · Critical points', '符号表 · Sign chart', '由正变负 · Positive to negative', '由负变正 · Negative to positive', '与二阶导数检验的比较 · Comparison with the second-derivative test'],
    checks: ['为什么临界点不一定是极值点？ · Why is a critical point not necessarily an extremum?', '\\(f\'\\) 不存在的点也可能有极值吗？ · Can a point where \\(f\'\\) does not exist be an extremum?', '二阶导数检验失效时应该怎么办？ · What should you do when the second-derivative test is inconclusive?'],
    summary: '一阶导数检验看临界点两侧 \\(f\'\\) 的符号：正变负为极大，负变正为极小，不变号则不是极值；它也能处理 \\(f\'\\) 不存在的临界点。 · The first-derivative test reads the sign of \\(f\'\\) on both sides of a critical point: positive-to-negative is a maximum, negative-to-positive is a minimum, and no sign change means no extremum; it also handles points where \\(f\'\\) does not exist.',
  },
  'math/calc-u5/5.6': {
    enrichedAt: 'batch2',
    learningObjectives: [
      '能用 \\(f\'\'\\) 的符号确定函数在区间上的凹凸性。 · Use the sign of \\(f\'\'\\) to determine concavity on an interval.',
      '能找出凹凸性发生改变的点，并判断它是否为拐点。 · Locate points where concavity changes and decide whether they are inflection points.',
      '能说明 \\(f\'\'(c)=0\\) 与“\\(c\\) 是拐点”不是一回事，并把 \\(f\\)、\\(f\'\\)、\\(f\'\'\\) 的图像联系起来。 · Explain why \\(f\'\'(c)=0\\) does not imply an inflection point, and connect the graphs of \\(f\\), \\(f\'\\), and \\(f\'\'\\).',
    ],
    essentialKnowledge: [
      '\\(f\'\'>0\\) 在区间上成立时，函数凹向上（concave up），切线斜率递增，图像位于切线之上。 · If \\(f\'\'>0\\) on an interval, the function is concave up, the tangent slope increases, and the graph lies above its tangent lines.',
      '\\(f\'\'<0\\) 在区间上成立时，函数凹向下（concave down），切线斜率递减，图像位于切线之下。 · If \\(f\'\'<0\\) on an interval, the function is concave down, the tangent slope decreases, and the graph lies below its tangent lines.',
      '拐点是凹凸性发生改变的点；它要求 \\(f\'\'\\) 在该点两侧变号，或 \\(f\'\'\\) 在该点不存在但两侧凹凸性不同。 · An inflection point is a point where concavity changes; \\(f\'\'\\) must change sign across it, or fail to exist there while concavity differs on the two sides.',
      '\\(f\'\'(c)=0\\) 只是拐点的候选条件，不是充分条件；例如 \\(f(x)=x^{4}\\) 在 \\(0\\) 处 \\(f\'\'=0\\)，但两侧都凹向上。 · \\(f\'\'(c)=0\\) is only a candidate condition, not sufficient; for example, \\(f(x)=x^{4}\\) has \\(f\'\'(0)=0\\) but is concave up on both sides.',
      '凹凸性与增减性互相独立：函数可以在递增的同时凹向下，也可以在递减的同时凹向上。 · Concavity and increasing versus decreasing behavior are independent: a function can increase while concave down, or decrease while concave up.',
      '二阶导数检验利用临界点处的凹凸性判断极值：\\(f\'(c)=0\\) 且 \\(f\'\'(c)>0\\) 为局部极小，\\(f\'\'(c)<0\\) 为局部极大。 · The second-derivative test uses concavity at a critical point: \\(f\'(c)=0\\) with \\(f\'\'(c)>0\\) gives a local minimum, while \\(f\'\'(c)<0\\) gives a local maximum.',
    ],
    definition: '若在区间上 \\(f\'\'>0\\)，则 \\(f\\) 凹向上；若 \\(f\'\'<0\\)，则 \\(f\\) 凹向下。拐点是函数图像上凹凸性发生改变的点；在光滑函数中，拐点处 \\(f\'\'\\) 通常为零或不存在，并且两侧符号不同。 · If \\(f\'\'>0\\) on an interval, then \\(f\\) is concave up; if \\(f\'\'<0\\), it is concave down. An inflection point is a point on the graph where concavity changes; for a smooth function, \\(f\'\'\\) is usually zero or nonexistent there, with opposite signs on the two sides.',
    intuition: '凹凸性描述曲线“往哪边弯”：凹向上像碗，切线在曲线下方；凹向下像倒扣的碗，切线在曲线上方。拐点就是弯曲方向改变的地方，不是“导数为零”的地方。 · Concavity describes which way the curve bends: concave up is like a bowl with tangents below the curve; concave down is like an upside-down bowl with tangents above. An inflection point is where the bending direction changes, not where the derivative is zero.',
    intuitionDetailed: '\\(f\'\'\\) 是 \\(f\'\\) 的导数，所以 \\(f\'\'>0\\) 等价于 \\(f\'\\) 递增，也就是切线越来越陡（或负得越来越少）。拐点处 \\(f\'\\) 从递增转为递减，或反过来。判断拐点时，先找 \\(f\'\'=0\\) 或 \\(f\'\'\\) 不存在的点，再检查两侧 \\(f\'\'\\) 的符号；只有符号改变才是拐点。 · \\(f\'\'\\) is the derivative of \\(f\'\\), so \\(f\'\'>0\\) means \\(f\'\\) is increasing, which means the tangent slope is increasing (or becoming less negative). At an inflection point, \\(f\'\\) changes from increasing to decreasing or vice versa. To test for inflection points, find points where \\(f\'\'=0\\) or \\(f\'\'\\) does not exist, then check the sign of \\(f\'\'\\) on each side; only a sign change indicates an inflection point.',
    formulas: [
      { latex: 'f\'\'(x)>0\\;\\Rightarrow\\;\\text{凹向上 · concave up}', note: '切线斜率递增。 · Tangent slopes increase.' },
      { latex: 'f\'\'(x)<0\\;\\Rightarrow\\;\\text{凹向下 · concave down}', note: '切线斜率递减。 · Tangent slopes decrease.' },
      { latex: 'f\'\'\\text{ 变号 · changes sign}\\;\\Rightarrow\\;\\text{拐点 · inflection point}', note: '必须两侧凹凸性不同。 · Concavity must differ on the two sides.' },
      { latex: 'f\'(c)=0,\\;f\'\'(c)>0\\;\\Rightarrow\\;\\text{局部极小 · local minimum}', note: '二阶导数检验。 · Second-derivative test.' },
      { latex: 'f\'(c)=0,\\;f\'\'(c)<0\\;\\Rightarrow\\;\\text{局部极大 · local maximum}', note: '二阶导数检验。 · Second-derivative test.' },
    ],
    derivationNotes: [
      { from: '\\(f\'\'\\) 的符号 · Sign of \\(f\'\'\\)', to: '凹凸性 · Concavity', note: '\\(f\'\'\\) 是 \\(f\'\\) 的导数，符号决定 \\(f\'\\) 的增减。 · \\(f\'\'\\) is the derivative of \\(f\'\\), so its sign determines whether \\(f\'\\) increases or decreases.' },
      { from: '凹凸性改变 · Concavity change', to: '拐点 · Inflection point', note: '先找 \\(f\'\'=0\\) 或不存在点，再检查两侧符号。 · Find where \\(f\'\'=0\\) or fails to exist, then check signs on both sides.' },
      { from: '拐点候选 · Inflection candidates', to: '拐点 · Inflection point', note: '只有 \\(f\'\'\\) 变号才是拐点。 · Only a sign change of \\(f\'\'\\) gives an inflection point.' },
    ],
    conditions: [
      '\\(f\'\'\\) 必须在区间内有定义才能谈凹凸性 · \\(f\'\'\\) must be defined on the interval to discuss concavity',
      '拐点必须在函数定义域内 · An inflection point must lie in the domain of the function',
      '\\(f\'\'(c)=0\\) 只是候选，必须检查两侧符号 · \\(f\'\'(c)=0\\) is only a candidate; check signs on both sides',
      '\\(f\'\'\\) 不存在的点也可能是拐点 · A point where \\(f\'\'\\) does not exist may also be an inflection point',
      '凹凸性与增减性要分开判断 · Concavity and increasing versus decreasing behavior must be judged separately',
    ],
    keyPoints: [
      '\\(f\'\'>0\\) 凹向上，\\(f\'\'<0\\) 凹向下 · \\(f\'\'>0\\) is concave up; \\(f\'\'<0\\) is concave down',
      '拐点要求凹凸性改变 · An inflection point requires a change in concavity',
      '\\(f\'\'(c)=0\\) 不一定是拐点 · \\(f\'\'(c)=0\\) does not necessarily give an inflection point',
      '\\(f\'\'\\) 不存在的点也要检查 · Check points where \\(f\'\'\\) does not exist',
      '凹凸性与增减性独立 · Concavity and increase versus decrease are independent',
    ],
    misconceptions: [
      '把 \\(f\'\'(c)=0\\) 直接当作拐点 · Treating \\(f\'\'(c)=0\\) as an inflection point',
      '把凹凸性与增减性混为一谈 · Confusing concavity with increasing versus decreasing behavior',
      '认为拐点一定满足 \\(f\'(c)=0\\) · Assuming an inflection point must satisfy \\(f\'(c)=0\\)',
      '忽略 \\(f\'\'\\) 不存在的点 · Ignoring points where \\(f\'\'\\) does not exist',
      '认为凹向上就是函数值为正 · Thinking concave up means the function values are positive',
    ],
    examples: [
      {
        title: '例 1 · 三次函数 · Cubic Function',
        prompt: '讨论 \\(f(x)=x^{3}-3x\\) 的凹凸性与拐点。 · Discuss the concavity and inflection points of \\(f(x)=x^{3}-3x\\).',
        steps: [
          '\\(f\'(x)=3x^{2}-3\\)，\\(f\'\'(x)=6x\\)。 · \\(f\'(x)=3x^{2}-3\\) and \\(f\'\'(x)=6x\\).',
          '\\(x<0\\) 时 \\(f\'\'<0\\)，凹向下；\\(x>0\\) 时 \\(f\'\'>0\\)，凹向上。 · For \\(x<0\\), \\(f\'\'<0\\) and the graph is concave down; for \\(x>0\\), \\(f\'\'>0\\) and it is concave up.',
          '\\(f\'\'\\) 在 \\(x=0\\) 变号，所以 \\((0,0)\\) 是拐点。 · \\(f\'\'\\) changes sign at \\(x=0\\), so \\((0,0)\\) is an inflection point.',
        ],
        solution: '拐点为 \\((0,0)\\)；\\((-\\infty,0)\\) 凹向下，\\((0,\\infty)\\) 凹向上。 · The inflection point is \\((0,0)\\); the graph is concave down on \\((-\\infty,0)\\) and concave up on \\((0,\\infty)\\).',
        solutionLatex: '(0,0)',
      },
      {
        title: '例 2 · 零二阶导数但不是拐点 · Zero Second Derivative but No Inflection',
        prompt: '判断 \\(f(x)=x^{4}\\) 在 \\(x=0\\) 处是否有拐点。 · Determine whether \\(f(x)=x^{4}\\) has an inflection point at \\(x=0\\).',
        steps: [
          '\\(f\'(x)=4x^{3}\\)，\\(f\'\'(x)=12x^{2}\\)。 · \\(f\'(x)=4x^{3}\\) and \\(f\'\'(x)=12x^{2}\\).',
          '\\(f\'\'(0)=0\\)，但 \\(f\'\'(x)\\ge0\\) 对所有 \\(x\\) 成立。 · \\(f\'\'(0)=0\\), but \\(f\'\'(x)\\ge0\\) for all \\(x\\).',
          '两侧都凹向上，凹凸性没有改变，所以不是拐点。 · The graph is concave up on both sides, so concavity does not change and there is no inflection point.',
        ],
        solution: '\\(x=0\\) 不是拐点。 · \\(x=0\\) is not an inflection point.',
        solutionLatex: 'f\'\'(0)=0',
      },
      {
        title: '例 3 · 指数函数 · Exponential Function',
        prompt: '求 \\(f(x)=xe^{-x}\\) 的凹凸区间与拐点。 · Find the concavity intervals and inflection point of \\(f(x)=xe^{-x}\\).',
        steps: [
          '\\(f\'(x)=e^{-x}(1-x)\\)。 · \\(f\'(x)=e^{-x}(1-x)\\).',
          '\\(f\'\'(x)=e^{-x}(x-2)\\)。 · \\(f\'\'(x)=e^{-x}(x-2)\\).',
          '\\(x<2\\) 时 \\(f\'\'<0\\)，凹向下；\\(x>2\\) 时 \\(f\'\'>0\\)，凹向上。 · For \\(x<2\\), \\(f\'\'<0\\) and the graph is concave down; for \\(x>2\\), \\(f\'\'>0\\) and it is concave up.',
          '\\(f\'\'\\) 在 \\(x=2\\) 变号，所以拐点为 \\(\\left(2,\\dfrac{2}{e^{2}}\\right)\\)。 · \\(f\'\'\\) changes sign at \\(x=2\\), so the inflection point is \\(\\left(2,\\dfrac{2}{e^{2}}\\right)\\).',
        ],
        solution: '拐点 \\(\\left(2,\\dfrac{2}{e^{2}}\\right)\\)；\\((-\\infty,2)\\) 凹向下，\\((2,\\infty)\\) 凹向上。 · Inflection point \\(\\left(2,\\dfrac{2}{e^{2}}\\right)\\); concave down on \\((-\\infty,2)\\) and concave up on \\((2,\\infty)\\).',
        solutionLatex: '\\left(2,\\dfrac{2}{e^{2}}\\right)',
      },
    ],
    examTips: [
      'CED Unit 5：先求 \\(f\'\'\\)，再解 \\(f\'\'=0\\) 并检查变号 · CED Unit 5: find \\(f\'\'\\), solve \\(f\'\'=0\\), and check for sign changes',
      '拐点要写成坐标点，不只是 \\(x\\) 值 · Write an inflection point as a coordinate pair, not just an \\(x\\)-value',
      '凹凸区间用开区间表示，端点是否包含取决于定义域 · Write concavity intervals as open intervals; endpoint inclusion depends on the domain',
      '二阶导数检验失效时回到一阶导数检验 · When the second-derivative test fails, return to the first-derivative test',
    ],
    related: [
      { subject: 'math', chapterId: 'calc-u5', code: '5.3', title: '增减性 · Determining Intervals of Increase and Decrease', relation: '先修 · Prerequisite' },
      { subject: 'math', chapterId: 'calc-u5', code: '5.4', title: '一阶导数检验 · Using the First Derivative Test to Determine Relative Local Extrema', relation: '对比 · Contrast' },
      { subject: 'math', chapterId: 'calc-u5', code: '5.7', title: '二阶导数检验 · Using the Second Derivative Test to Determine Extrema', relation: '后续 · Follow-up' },
      { subject: 'math', chapterId: 'calc-u5', code: '5.9', title: '函数与导数关联 · Connecting a Function, Its First Derivative, and Its Second Derivative', relation: '相关 · Related' },
    ],
    development: ['二阶导数的符号 · Sign of the second derivative', '凹向上与凹向下 · Concave up and concave down', '拐点候选 · Inflection candidates', '变号检验 · Sign-change test', '二阶导数检验 · Second-derivative test'],
    checks: ['为什么 \\(f\'\'(c)=0\\) 不一定是拐点？ · Why does \\(f\'\'(c)=0\\) not guarantee an inflection point?', '凹凸性与增减性有什么关系？ · How are concavity and increasing versus decreasing behavior related?', '\\(f\'\'\\) 不存在的点也可能是拐点吗？ · Can a point where \\(f\'\'\\) does not exist be an inflection point?'],
    summary: '\\(f\'\'\\) 的符号决定凹凸性：正为凹向上，负为凹向下；拐点是凹凸性改变的点，必须检查 \\(f\'\'\\) 是否变号，而不能只看 \\(f\'\'=0\\)。 · The sign of \\(f\'\'\\) determines concavity: positive is concave up, negative is concave down; an inflection point is where concavity changes, so check whether \\(f\'\'\\) changes sign rather than only whether \\(f\'\'=0\\).',
  },
};
