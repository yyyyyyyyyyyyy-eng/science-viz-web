/** Batch 2: continue enriching the thinnest bio topics with AP-level depth. */
export const ENRICHMENTS = {
  'bio/bio-prep-hs/P2.5': {
    enrichedAt: 'batch2',
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
};
