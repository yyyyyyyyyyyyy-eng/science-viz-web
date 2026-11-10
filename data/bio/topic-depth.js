/** Topic-specific derivation chains and applications for AP Biology topics
 *  whose base records still carried the generic "定义/公理/实验事实" template.
 *  Applied only when the generic fields are still present (see index.js). */
export const DERIVATIONS = {
  'bio/bio-u1/1.5': [
    { from: '核苷酸结构 · Nucleotide structure', to: '磷酸二酯键 · Phosphodiester bonds', note: '磷酸基与下一个核苷酸的 3′–OH 缩合，形成带方向性的糖–磷酸骨架。 · The phosphate condenses with the next nucleotide’s 3′–OH, giving the directional sugar–phosphate backbone.' },
    { from: '碱基互补 · Complementary bases', to: '双螺旋与复制模板 · Double helix and template', note: 'A–T、G–C 的氢键配对使两条链互为模板，复制与转录得以保真。 · A–T and G–C hydrogen bonding lets each strand serve as a template for faithful replication and transcription.' },
    { from: '5′→3′ 极性 · 5′→3′ polarity', to: '核酸方向性 · Nucleic-acid directionality', note: '聚合酶只在 3′–OH 端延伸，因此新链合成方向固定为 5′→3′。 · Polymerases extend only at a 3′–OH end, so new strands are synthesized in the 5′→3′ direction.' },
  ],
  'bio/bio-u2/2.2': [
    { from: '几何相似 · Geometric similarity', to: '表面积/体积比 · Surface-area-to-volume ratio', note: '边长 s 的立方体 SA/V=6/s；尺寸越大，单位体积可交换的表面积越小。 · For a cube of side s, SA/V=6/s; larger cells have less exchange surface per unit volume.' },
    { from: '扩散限制 · Diffusion limitation', to: '物质交换效率 · Exchange efficiency', note: '氧气与养分靠扩散进入，扩散时间随距离平方增加，限制细胞不能无限增大。 · Oxygen and nutrients enter by diffusion, whose time grows with distance squared, limiting cell size.' },
    { from: '需求与供给 · Demand and supply', to: '细胞大小上限 · Upper size limit', note: '代谢需求随体积增加，而膜交换能力随面积增加，二者失衡时细胞必须分裂或改变形状。 · Metabolic demand scales with volume while membrane exchange scales with area; imbalance forces division or shape change.' },
  ],
  'bio/bio-u2/2.3': [
    { from: '磷脂两亲性 · Phospholipid amphipathy', to: '磷脂双分子层 · Bilayer', note: '亲水头朝外、疏水尾朝内，在水中自发形成双层并封闭成区室。 · Hydrophilic heads face water and hydrophobic tails face inward, forming a self-sealing bilayer.' },
    { from: '流动镶嵌模型 · Fluid mosaic model', to: '蛋白与胆固醇 · Proteins and cholesterol', note: '整合蛋白、外周蛋白与胆固醇镶嵌其中，膜保持流动但强度可调。 · Integral and peripheral proteins plus cholesterol are embedded, keeping the membrane fluid yet tunable in strength.' },
    { from: '疏水核心 · Hydrophobic core', to: '选择透过性 · Selective permeability', note: '疏水核心阻挡离子与大极性分子，小非极性分子可自由通过。 · The hydrophobic core blocks ions and large polar molecules while small nonpolar molecules pass.' },
  ],
  'bio/bio-u2/2.4': [
    { from: '脂双层结构 · Bilayer structure', to: '通透性差异 · Permeability differences', note: '小非极性分子（O₂、CO₂）最易通过；水分子少而慢地通过，离子几乎不能自由通过。 · Small nonpolar molecules pass most easily; water crosses slowly and ions hardly at all.' },
    { from: '电荷与极性 · Charge and polarity', to: '通道/载体需求 · Channel or carrier requirement', note: '带电或大极性物质需要通道蛋白或载体蛋白才能跨膜。 · Charged or large polar solutes need channel or carrier proteins to cross.' },
    { from: '浓度梯度 · Concentration gradient', to: '净扩散方向 · Net diffusion direction', note: '净通量由高浓度指向低浓度，直到两侧浓度相等；通透性决定达到平衡的速度。 · Net flux runs from high to low concentration until equal; permeability sets how fast equilibrium is reached.' },
  ],
  'bio/bio-u2/2.5': [
    { from: '浓度/电化学梯度 · Concentration or electrochemical gradient', to: '被动运输 · Passive transport', note: '顺梯度运输不需要 ATP，简单扩散、促进扩散与渗透都属于被动运输。 · Transport down a gradient needs no ATP; simple diffusion, facilitated diffusion, and osmosis are passive.' },
    { from: 'ATP 水解 · ATP hydrolysis', to: '主动运输 · Active transport', note: '泵蛋白利用 ATP 改变构象，把溶质逆梯度搬运，建立并维持梯度。 · Pump proteins use ATP-driven conformational changes to move solutes against a gradient.' },
    { from: '载体构象变化 · Carrier conformational change', to: '特异性和饱和 · Specificity and saturation', note: '载体只运输特定溶质，数量有限，因此高浓度时出现饱和。 · Carriers are specific and limited in number, so transport saturates at high solute concentration.' },
  ],
  'bio/bio-u2/2.6': [
    { from: '通道与载体 · Channels and carriers', to: '饱和动力学 · Saturation kinetics', note: '促进扩散速率随浓度差升高而趋于平台，因为可用运输蛋白被占满。 · Facilitated-diffusion rate plateaus as the available transporters become occupied.' },
    { from: '浓度差 · Concentration difference', to: '净通量 · Net flux', note: '净通量与浓度差成正比，直到载体饱和；两侧相等时净通量为零。 · Net flux rises with the concentration difference until saturation and is zero at equilibrium.' },
    { from: '蛋白特异性 · Protein specificity', to: '竞争与抑制 · Competition and inhibition', note: '结构相似的溶质可竞争同一载体，特异性抑制剂可阻断运输。 · Structurally similar solutes can compete for the same carrier, and specific inhibitors can block transport.' },
  ],
  'bio/bio-u2/2.9': [
    { from: '膜包被区室 · Membrane-bound compartments', to: '局部环境 · Local environments', note: '不同区室可维持不同的 pH、离子浓度与酶组合，使反应互不干扰。 · Compartments maintain distinct pH, ion concentrations, and enzyme sets so reactions do not interfere.' },
    { from: '酶定位 · Enzyme localization', to: '代谢效率 · Metabolic efficiency', note: '把连续反应的酶放在同一区室，可提高中间产物浓度与反应速率。 · Placing sequential enzymes in one compartment raises intermediate concentration and reaction rate.' },
    { from: '质子梯度 · Proton gradients', to: '溶酶体与线粒体功能 · Lysosome and mitochondrion function', note: '溶酶体用低 pH 水解酶，线粒体用跨膜质子梯度驱动 ATP 合成。 · Lysosomes use low pH hydrolases; mitochondria use a proton gradient to drive ATP synthesis.' },
  ],
  'bio/bio-u3/3.3': [
    { from: '热力学第一定律 · First law of thermodynamics', to: '能量守恒 · Energy conservation', note: '细胞不能创造能量，只能把光能或化学能转化为 ATP 与其他形式。 · Cells cannot create energy; they convert light or chemical energy into ATP and other forms.' },
    { from: '热力学第二定律 · Second law of thermodynamics', to: '熵增与能量散失 · Entropy and energy loss', note: '每次能量转化都有一部分以热散失，因此生态系统需要持续的能量输入。 · Each conversion loses some energy as heat, so ecosystems need continuous energy input.' },
    { from: 'ATP 磷酸酐键 · ATP phosphoanhydride bonds', to: '能量偶联 · Energy coupling', note: 'ATP 水解的自由能可驱动吸能反应，ATP/ADP 循环把放能与吸能过程连接起来。 · ATP hydrolysis free energy drives endergonic reactions; the ATP/ADP cycle couples exergonic and endergonic processes.' },
  ],
  'bio/bio-u3/3.4': [
    { from: '光能吸收 · Light absorption', to: '电子激发 · Electron excitation', note: '叶绿素吸收光子后电子跃迁到高能态，启动光反应。 · Chlorophyll absorbs photons and excites electrons, initiating the light reactions.' },
    { from: '电子传递 · Electron transport', to: '质子梯度、ATP 与 NADPH · Proton gradient, ATP, and NADPH', note: '电子沿类囊体膜传递时泵出 H⁺，质子回流驱动 ATP 合酶，终点还原 NADP⁺。 · Electron flow pumps H⁺ across the thylakoid membrane; backflow drives ATP synthase and NADP⁺ is reduced at the end.' },
    { from: '卡尔文循环 · Calvin cycle', to: '固碳与糖 · Carbon fixation and sugar', note: 'rubisco 固定 CO₂，ATP 与 NADPH 还原 3-PGA，最终生成 G3P 并再生 RuBP。 · Rubisco fixes CO₂, ATP and NADPH reduce 3-PGA, and G3P is produced while RuBP is regenerated.' },
  ],
  'bio/bio-u3/3.5': [
    { from: '糖酵解 · Glycolysis', to: '丙酮酸与 NADH · Pyruvate and NADH', note: '葡萄糖在细胞质中裂解为 2 个丙酮酸，净得 2 ATP 与 2 NADH。 · Glucose is split into two pyruvate in the cytosol, with a net gain of 2 ATP and 2 NADH.' },
    { from: '丙酮酸氧化与三羧酸循环 · Pyruvate oxidation and Krebs cycle', to: '电子载体 · Electron carriers', note: '乙酰-CoA 进入循环，产生 NADH、FADH₂ 与 CO₂，把能量转移到电子载体。 · Acetyl-CoA enters the cycle, producing NADH, FADH₂, and CO₂ and transferring energy to carriers.' },
    { from: '氧化磷酸化 · Oxidative phosphorylation', to: 'ATP 合成 · ATP synthesis', note: '电子传递链泵出 H⁺，质子经 ATP 合酶回流，驱动 ADP 磷酸化。 · The electron transport chain pumps H⁺; backflow through ATP synthase drives ADP phosphorylation.' },
  ],
  'bio/bio-u4/4.1': [
    { from: '信号分子 · Signaling molecule', to: '受体结合 · Receptor binding', note: '配体与特定受体结合，只有含匹配受体的细胞才能响应。 · A ligand binds a specific receptor, so only cells with the matching receptor respond.' },
    { from: '受体类型 · Receptor type', to: '信号通路 · Signaling pathway', note: 'G 蛋白偶联受体、受体酪氨酸激酶与离子通道受体启动不同的胞内级联。 · GPCRs, receptor tyrosine kinases, and ion-channel receptors initiate different intracellular cascades.' },
    { from: '作用距离 · Signaling distance', to: '旁分泌/内分泌/突触 · Paracrine, endocrine, and synaptic signaling', note: '局部扩散、血液运输与突触释放对应不同的距离与速度。 · Local diffusion, blood-borne transport, and synaptic release correspond to different distances and speeds.' },
  ],
  'bio/bio-u4/4.3': [
    { from: '配体结合 · Ligand binding', to: '受体构象变化 · Receptor conformational change', note: '配体结合改变受体构象，激活其酶活性或 G 蛋白交换。 · Ligand binding changes receptor conformation, activating enzymatic activity or G-protein exchange.' },
    { from: '级联放大 · Cascade amplification', to: '多级激酶 · Kinase cascade', note: '每一级激酶激活多个下游分子，使微弱信号放大为强烈细胞响应。 · Each kinase activates several downstream molecules, amplifying a weak signal into a strong response.' },
    { from: '第二信使 · Second messenger', to: '细胞响应 · Cellular response', note: 'cAMP、Ca²⁺ 等第二信使把膜受体信号传到胞内靶蛋白。 · Second messengers such as cAMP and Ca²⁺ relay the membrane signal to intracellular targets.' },
  ],
  'bio/bio-u4/4.4': [
    { from: '感受器–控制中心–效应器 · Sensor–control center–effector', to: '负反馈 · Negative feedback', note: '偏离设定点被检测后，效应器产生反向调节，把变量拉回设定点。 · A deviation from the set point is detected and the effector produces an opposing response.' },
    { from: '设定点偏离 · Set-point deviation', to: '纠正响应 · Corrective response', note: '血糖、体温与渗透压都通过负反馈维持动态稳定。 · Blood glucose, temperature, and osmolarity are stabilized by negative feedback.' },
    { from: '正反馈 · Positive feedback', to: '放大与终点 · Amplification and endpoint', note: '正反馈放大变化直到特定终点，如分娩催产素释放与血液凝固。 · Positive feedback amplifies a change until a specific endpoint, as in childbirth oxytocin release and blood clotting.' },
  ],
  'bio/bio-u4/4.5': [
    { from: 'DNA 复制与分裂 · DNA replication and division', to: 'G₁、S、G₂、M · G₁, S, G₂, M', note: '细胞周期按复制、分配与分裂的顺序推进，间期占大部分时间。 · The cycle proceeds through replication, distribution, and division, with interphase occupying most of the time.' },
    { from: '周期蛋白 · Cyclins', to: 'CDK 活性 · CDK activity', note: '周期蛋白浓度周期性变化，结合并激活 CDK，磷酸化靶蛋白推进周期。 · Cyclin levels oscillate, binding and activating CDKs that phosphorylate targets to advance the cycle.' },
    { from: '检查点 · Checkpoints', to: '基因组保真 · Genome fidelity', note: 'G₁/S、G₂/M 与纺锤体检查点阻止受损或未复制的 DNA 进入下一阶段。 · G₁/S, G₂/M, and spindle checkpoints prevent damaged or unreplicated DNA from advancing.' },
  ],
  'bio/bio-u4/4.7': [
    { from: '染色体凝缩 · Chromosome condensation', to: '可见的姐妹染色单体 · Visible sister chromatids', note: '前期染色质凝缩，每条染色体由两条姐妹染色单体组成。 · In prophase, chromatin condenses and each chromosome consists of two sister chromatids.' },
    { from: '纺锤体 · Spindle', to: '染色体分离 · Chromosome segregation', note: '微管附着着丝粒并把姐妹染色单体拉向两极，保证各得一套染色体。 · Microtubules attach to kinetochores and pull sister chromatids to opposite poles.' },
    { from: '胞质分裂 · Cytokinesis', to: '两个二倍体子细胞 · Two diploid daughter cells', note: '动物细胞形成收缩环，植物细胞形成细胞板，最终得到两个遗传相同的子细胞。 · Animal cells form a cleavage furrow and plant cells a cell plate, producing two genetically identical daughters.' },
  ],
  'bio/bio-u6/6.4': [
    { from: '密码子 · Codons', to: 'tRNA 反密码子 · tRNA anticodons', note: 'mRNA 的三联体密码子与 tRNA 反密码子互补配对，决定氨基酸顺序。 · Triplet codons on mRNA pair with tRNA anticodons, setting the amino-acid sequence.' },
    { from: '核糖体 A/P/E 位点 · Ribosome A/P/E sites', to: '肽键形成 · Peptide-bond formation', note: '氨酰-tRNA 进入 A 位，肽键转移到新氨基酸，tRNA 经 P、E 位退出。 · Aminoacyl-tRNA enters the A site, the peptide bond shifts to the new amino acid, and tRNAs exit through P and E sites.' },
    { from: '起始、延伸、终止 · Initiation, elongation, termination', to: '多肽 · Polypeptide', note: '起始密码子定位核糖体，延伸循环加氨基酸，终止密码子释放多肽。 · The start codon positions the ribosome, elongation adds amino acids, and a stop codon releases the polypeptide.' },
  ],
  'bio/bio-u6/6.7': [
    { from: '碱基替换 · Base substitution', to: '点突变 · Point mutation', note: '替换可造成同义、错义或无义突变，后果取决于是否改变氨基酸。 · A substitution can be synonymous, missense, or nonsense depending on whether the amino acid changes.' },
    { from: '插入或缺失 · Insertion or deletion', to: '移码 · Frameshift', note: '不是 3 的倍数的插入/缺失会改变读码框，使下游氨基酸序列大幅改变。 · Insertions or deletions not in multiples of three shift the reading frame and alter downstream sequence.' },
    { from: '突变位置与类型 · Mutation location and type', to: '蛋白质功能与表型 · Protein function and phenotype', note: '活性位点或调控区的突变更可能影响功能；多数突变中性或有害，少数有利。 · Mutations in active sites or regulatory regions are more likely to affect function; most are neutral or harmful, a few beneficial.' },
  ],
  'bio/bio-u6/6.8': [
    { from: '限制酶 · Restriction enzymes', to: '黏性末端 · Sticky ends', note: '限制酶在特定序列切割 DNA，产生互补黏性末端，便于拼接。 · Restriction enzymes cut specific sequences and leave complementary sticky ends for joining.' },
    { from: 'DNA 连接酶 · DNA ligase', to: '重组质粒 · Recombinant plasmid', note: '连接酶封闭磷酸二酯键，把目的片段稳定插入质粒。 · Ligase seals phosphodiester bonds, stably inserting the target fragment into the plasmid.' },
    { from: '转化与筛选 · Transformation and selection', to: '克隆 · Cloning', note: '细菌摄取质粒后在抗生素培养基上筛选，阳性克隆扩增目的基因。 · Bacteria take up the plasmid and are selected on antibiotic medium; positive clones amplify the target gene.' },
  ],
  'bio/bio-u7/7.2': [
    { from: '可遗传变异 · Heritable variation', to: '表型差异 · Phenotypic differences', note: '同一群体内存在可遗传的形态、生理或行为差异，为选择提供原料。 · Heritable morphological, physiological, or behavioral variation within a population provides raw material for selection.' },
    { from: '环境压力 · Environmental pressure', to: '差异存活与繁殖 · Differential survival and reproduction', note: '捕食、竞争、气候等因素使某些表型留下更多后代。 · Predation, competition, and climate let some phenotypes leave more offspring.' },
    { from: '等位基因频率改变 · Allele-frequency change', to: '进化 · Evolution', note: '有利等位基因频率逐代升高，种群的平均表型发生定向改变。 · Advantageous alleles rise in frequency across generations, shifting the population mean phenotype.' },
  ],
  'bio/bio-u7/7.3': [
    { from: '人类目标 · Human goals', to: '选择标准 · Selection criteria', note: '育种者按产量、外形或抗性等目标挑选个体，而非由自然环境筛选。 · Breeders choose individuals by yield, appearance, or resistance rather than by natural selection.' },
    { from: '多代繁殖 · Repeated generations', to: '品种形成 · Breed formation', note: '连续多代选择使目标性状的等位基因频率显著改变，形成稳定品种。 · Repeated selection over generations markedly changes allele frequencies and forms stable breeds.' },
    { from: '同一物种 · Same species', to: '仍可杂交 · Still interbreeding', note: '人工选择通常不产生生殖隔离，品种之间仍属同一物种并可杂交。 · Artificial selection usually does not create reproductive isolation; breeds remain one species and can interbreed.' },
  ],
  'bio/bio-u7/7.4': [
    { from: '等位基因频率 · Allele frequencies', to: '基因库 · Gene pool', note: '群体遗传学用基因库中每个等位基因的频率描述群体，而不是个体基因型。 · Population genetics describes a population by allele frequencies in its gene pool, not by individual genotypes.' },
    { from: '哈代–温伯格平衡 · Hardy–Weinberg equilibrium', to: '无进化力量 · No evolutionary forces', note: '无突变、选择、漂变、基因流且随机交配时，等位基因频率代代不变。 · Without mutation, selection, drift, gene flow, and with random mating, allele frequencies stay constant.' },
    { from: '突变、选择、漂变、基因流 · Mutation, selection, drift, gene flow', to: '频率改变 · Frequency change', note: '这四种力量改变等位基因频率；非随机交配改变基因型频率而不直接改变等位基因频率。 · These four forces change allele frequencies; nonrandom mating changes genotype frequencies without directly changing allele frequencies.' },
  ],
  'bio/bio-u7/7.7': [
    { from: '同源结构与分子序列 · Homologous structures and sequences', to: '共同祖先 · Common ancestry', note: '共享的骨骼排列或 DNA 序列更可能来自共同祖先，而不是独立起源。 · Shared skeletal arrangements or DNA sequences are more likely inherited from a common ancestor than evolved independently.' },
    { from: '系统树 · Phylogenetic tree', to: '分支关系 · Branching relationships', note: '系统树用分支表示共同祖先与分化顺序，节点越近亲缘关系越近。 · A phylogenetic tree uses branches to show common ancestors and divergence order; closer nodes mean closer relatedness.' },
    { from: '同源与趋同 · Homology and convergence', to: '正确解释相似性 · Correct interpretation of similarity', note: '同源来自共同祖先，趋同来自相似选择压力；只有同源能直接推断亲缘关系。 · Homology reflects common ancestry while convergence reflects similar selection; only homology directly infers relatedness.' },
  ],
  'bio/bio-u7/7.9': [
    { from: '共享衍生性状 · Shared derived characters', to: '分支 · Clades', note: '共享衍生性状（synapomorphy）定义一个分支，外群用于确定性状极性。 · Shared derived characters define a clade, and an outgroup establishes character polarity.' },
    { from: '最大简约与分子数据 · Maximum parsimony and molecular data', to: '系统树 · Phylogenetic tree', note: '选择需要最少演化变化的树，并用分子序列差异检验分支。 · Choose the tree requiring the fewest evolutionary changes and test branches with molecular sequence differences.' },
    { from: '外群 · Outgroup', to: '性状极性 · Character polarity', note: '外群缺少衍生性状，可判断某性状是祖先状态还是衍生状态。 · An outgroup lacks the derived character and reveals whether a trait is ancestral or derived.' },
  ],
  'bio/bio-u7/7.10': [
    { from: '地理隔离 · Geographic isolation', to: '异域物种形成 · Allopatric speciation', note: '地理屏障阻断基因流，两个群体独立积累突变与选择差异。 · A geographic barrier stops gene flow, and the separated populations accumulate mutations and selection differences independently.' },
    { from: '生殖隔离 · Reproductive isolation', to: '物种 · Species', note: '当群体间不能产生可育后代时，生殖隔离确立，物种形成完成。 · Speciation is complete when populations can no longer produce fertile offspring.' },
    { from: '多倍体或生态/性隔离 · Polyploidy or ecological/sexual isolation', to: '同域物种形成 · Sympatric speciation', note: '同一地区内多倍体、寄主转移或性选择可迅速建立生殖隔离。 · Polyploidy, host shifts, or sexual selection can rapidly establish reproductive isolation within one area.' },
  ],
  'bio/bio-u7/7.11': [
    { from: '环境变化 · Environmental change', to: '适应失败 · Failure to adapt', note: '快速气候或栖息地变化超出种群的适应与迁移能力时，灭绝风险升高。 · Rapid climate or habitat change beyond a population’s ability to adapt or migrate raises extinction risk.' },
    { from: '背景灭绝与大灭绝 · Background and mass extinction', to: '灭绝速率 · Extinction rate', note: '背景灭绝率低而稳定；大灭绝在短时间内消灭大量物种，并改变生态结构。 · Background extinction is low and steady; mass extinctions remove many species rapidly and restructure ecosystems.' },
    { from: '生态位空缺 · Vacant niches', to: '适应辐射 · Adaptive radiation', note: '大灭绝后幸存者进入空缺生态位，迅速分化出多种形态与功能。 · After a mass extinction, survivors fill vacant niches and rapidly diversify in form and function.' },
  ],
  'bio/bio-u8/8.2': [
    { from: '光合作用 · Photosynthesis', to: '初级生产 · Primary production', note: '生产者把光能转化为有机物中的化学能，是生态系统能量的入口。 · Producers convert light into chemical energy in organic matter, the entry point of ecosystem energy.' },
    { from: '摄食关系 · Feeding relationships', to: '营养级 · Trophic levels', note: '能量沿食物链从生产者流向各级消费者，每一级只传递约 10%。 · Energy flows from producers through consumer levels, with about 10% transferred at each step.' },
    { from: '呼吸与排泄 · Respiration and excretion', to: '能量散失 · Energy loss', note: '呼吸把大部分能量以热释放，排泄物中的能量离开食物链，因此能量不能循环。 · Respiration releases most energy as heat and excretion removes energy from the chain, so energy cannot cycle.' },
  ],
};

export const APPLICATIONS = {
  'bio/bio-u1/1.1': { zh: '蒸腾作用、体温调节与气候缓冲', en: 'transpiration, thermoregulation, and climate buffering' },
  'bio/bio-u1/1.5': { zh: 'PCR、DNA 测序与分子诊断', en: 'PCR, DNA sequencing, and molecular diagnostics' },
  'bio/bio-u2/2.2': { zh: '细胞培养、肿瘤生长与器官尺寸', en: 'cell culture, tumor growth, and organ size' },
  'bio/bio-u2/2.3': { zh: '药物递送与膜受体靶点', en: 'drug delivery and membrane-receptor targets' },
  'bio/bio-u2/2.4': { zh: '渗透压治疗与血脑屏障', en: 'osmotic therapy and the blood–brain barrier' },
  'bio/bio-u2/2.5': { zh: '利尿剂、囊性纤维化与转运缺陷', en: 'diuretics, cystic fibrosis, and transport defects' },
  'bio/bio-u2/2.6': { zh: '葡萄糖转运与药物竞争', en: 'glucose transport and competitive drugs' },
  'bio/bio-u2/2.9': { zh: '溶酶体贮积症与靶向给药', en: 'lysosomal storage disorders and targeted delivery' },
  'bio/bio-u3/3.1': { zh: '工业酶、洗涤剂与医学抑制剂', en: 'industrial enzymes, detergents, and medical inhibitors' },
  'bio/bio-u3/3.3': { zh: '代谢工程与能量药物', en: 'metabolic engineering and energy drugs' },
  'bio/bio-u3/3.4': { zh: '作物产量、人工光合与碳汇', en: 'crop yield, artificial photosynthesis, and carbon sinks' },
  'bio/bio-u3/3.5': { zh: '运动生理、缺氧与代谢病', en: 'exercise physiology, hypoxia, and metabolic disease' },
  'bio/bio-u4/4.1': { zh: '激素治疗与神经药理学', en: 'hormone therapy and neuropharmacology' },
  'bio/bio-u4/4.3': { zh: '靶向药物与信号通路抑制', en: 'targeted drugs and pathway inhibition' },
  'bio/bio-u4/4.4': { zh: '糖尿病、体温调节与稳态医学', en: 'diabetes, thermoregulation, and homeostasis medicine' },
  'bio/bio-u4/4.5': { zh: '化疗、再生医学与细胞周期', en: 'chemotherapy, regenerative medicine, and the cell cycle' },
  'bio/bio-u4/4.6': { zh: '癌症靶向治疗与检查点抑制剂', en: 'targeted cancer therapy and checkpoint inhibitors' },
  'bio/bio-u4/4.7': { zh: '非整倍体筛查与染色体疾病', en: 'aneuploidy screening and chromosomal disease' },
  'bio/bio-u5/5.1': { zh: '非整倍体与出生缺陷', en: 'aneuploidy and birth defects' },
  'bio/bio-u6/6.2': { zh: 'PCR、DNA 测序与分子克隆', en: 'PCR, DNA sequencing, and molecular cloning' },
  'bio/bio-u6/6.4': { zh: '抗生素靶点与遗传病', en: 'antibiotic targets and genetic disease' },
  'bio/bio-u6/6.7': { zh: '致癌突变与遗传筛查', en: 'oncogenic mutations and genetic screening' },
  'bio/bio-u6/6.8': { zh: '基因工程、CRISPR 与生物制药', en: 'genetic engineering, CRISPR, and biopharmaceuticals' },
  'bio/bio-u7/7.2': { zh: '抗生素耐药与害虫抗药性', en: 'antibiotic resistance and pesticide resistance' },
  'bio/bio-u7/7.3': { zh: '作物育种与家畜品种', en: 'crop breeding and livestock breeds' },
  'bio/bio-u7/7.4': { zh: '保护遗传学与群体管理', en: 'conservation genetics and population management' },
  'bio/bio-u7/7.7': { zh: '比较基因组学与祖先重建', en: 'comparative genomics and ancestral reconstruction' },
  'bio/bio-u7/7.9': { zh: '病毒溯源与生物分类', en: 'viral tracing and biological classification' },
  'bio/bio-u7/7.10': { zh: '入侵物种与保护单元', en: 'invasive species and conservation units' },
  'bio/bio-u7/7.11': { zh: '保护生物学与第六次灭绝', en: 'conservation biology and the sixth extinction' },
  'bio/bio-u8/8.2': { zh: '渔业管理、能量金字塔与生态足迹', en: 'fisheries management, energy pyramids, and ecological footprints' },
  'bio/bio-u8/8.3': { zh: '种群管理、濒危物种与收获策略', en: 'population management, endangered species, and harvest strategy' },
  'bio/bio-u8/8.5': { zh: '生物多样性保护与生态恢复', en: 'biodiversity conservation and ecological restoration' },
};
