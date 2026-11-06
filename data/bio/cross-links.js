/** Curated cross-topic links for bio map */
export const CROSS_EDGES = [
  {
    "source": "bio-u3:3.4",
    "target": "bio-u3:3.5",
    "type": "connects"
  },
  {
    "source": "bio-u3:3.5",
    "target": "bio-u3:3.4",
    "type": "connects"
  },
  {
    "source": "bio-u6:6.1",
    "target": "bio-u4:4.7",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.10",
    "target": "bio-u4:4.7",
    "type": "connects"
  },
  {
    "source": "bio-u4:4.7",
    "target": "bio-u5:5.1",
    "type": "connects"
  },
  {
    "source": "bio-u2:2.4",
    "target": "bio-u2:2.7",
    "type": "connects"
  },
  {
    "source": "bio-u2:2.3",
    "target": "bio-u2:2.5",
    "type": "connects"
  },
  {
    "source": "bio-u1:1.6",
    "target": "bio-u3:3.1",
    "type": "connects"
  },
  {
    "source": "bio-u3:3.1",
    "target": "bio-u3:3.4",
    "type": "connects"
  },
  {
    "source": "bio-u6:6.1",
    "target": "bio-u5:5.2",
    "type": "connects"
  },
  {
    "source": "bio-u7:7.2",
    "target": "bio-u8:8.3",
    "type": "connects"
  },
  {
    "source": "bio-u3:3.5",
    "target": "bio-u2:2.1",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.6",
    "target": "bio-u3:3.4",
    "type": "prerequisite"
  },
  {
    "source": "bio-prep-hs:P2.7",
    "target": "bio-u3:3.5",
    "type": "prerequisite"
  },
  {
    "source": "bio-u4:4.1",
    "target": "bio-u4:4.7",
    "type": "connects"
  },
  {
    "source": "bio-prep-chem:P1.9",
    "target": "bio-u1:1.1",
    "type": "connects"
  },
  {
    "source": "bio-prep-chem:P1.10",
    "target": "bio-u1:1.3",
    "type": "connects"
  },
  {
    "source": "bio-prep-chem:P1.11",
    "target": "bio-u3:3.3",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.5",
    "target": "bio-u1:1.6",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.8",
    "target": "bio-u4:4.5",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.9",
    "target": "bio-u5:5.3",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.11",
    "target": "bio-u7:7.2",
    "type": "connects"
  },
  {
    "source": "bio-prep-hs:P2.12",
    "target": "bio-u8:8.2",
    "type": "connects"
  },
  {
    "source": "bio-u1:1.1",
    "target": "bio-u2:2.7",
    "type": "connects"
  },
  {
    "source": "bio-u1:1.5",
    "target": "bio-u6:6.1",
    "type": "connects"
  },
  {
    "source": "bio-u2:2.5",
    "target": "bio-u3:3.5",
    "type": "connects"
  },
  {
    "source": "bio-u2:2.10",
    "target": "bio-u7:7.13",
    "type": "connects"
  },
  {
    "source": "bio-u4:4.3",
    "target": "bio-u6:6.5",
    "type": "connects"
  },
  {
    "source": "bio-u4:4.6",
    "target": "bio-u6:6.7",
    "type": "connects"
  },
  {
    "source": "bio-u5:5.3",
    "target": "bio-u7:7.4",
    "type": "connects"
  },
  {
    "source": "bio-u6:6.7",
    "target": "bio-u7:7.2",
    "type": "connects"
  },
  {
    "source": "bio-u6:6.8",
    "target": "bio-u7:7.9",
    "type": "connects"
  },
  {
    "source": "bio-u7:7.11",
    "target": "bio-u8:8.7",
    "type": "connects"
  },
  {
    "source": "bio-u3:3.4",
    "target": "bio-u8:8.2",
    "type": "connects"
  }
];
export const CROSS_RELATIONS = {
  "bio-u3:3.4=>bio-u3:3.5": {
    "id": "bio-u3:3.4=>bio-u3:3.5",
    "source": "bio-u3:3.4",
    "target": "bio-u3:3.5",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.4",
    "targetCode": "3.5",
    "sourceHref": "#/t/bio/bio-u3/3.4",
    "targetHref": "#/t/bio/bio-u3/3.5",
    "titleZh": "光合作用 → 细胞呼吸",
    "summary": "光合固定 CO₂ 并储存化学能；呼吸氧化有机物释放 ATP，二者在碳与能量流上互补。",
    "why": "产物与反应物互为输入（糖、O₂ / CO₂、H₂O）。",
    "shared": [
      "碳循环",
      "能量载体 ATP/NADPH"
    ],
    "example": "叶肉细胞白天光合产糖，线粒体持续呼吸供能。",
    "steps": [
      "复习 3.4 的核心定义/定律",
      "指出它如何进入 3.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u3:3.5=>bio-u3:3.4": {
    "id": "bio-u3:3.5=>bio-u3:3.4",
    "source": "bio-u3:3.5",
    "target": "bio-u3:3.4",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.5",
    "targetCode": "3.4",
    "sourceHref": "#/t/bio/bio-u3/3.5",
    "targetHref": "#/t/bio/bio-u3/3.4",
    "titleZh": "细胞呼吸 → 光合作用",
    "summary": "呼吸产生的 CO₂ 可被光合再利用；强调生态系统物质循环。",
    "why": "并非每个细胞都同时进行两者，但在生物圈尺度耦合。",
    "shared": [
      "CO₂/O₂",
      "能量流动"
    ],
    "example": "封闭生态瓶中光合与呼吸气体交换维持平衡。",
    "steps": [
      "复习 3.5 的核心定义/定律",
      "指出它如何进入 3.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u6:6.1=>bio-u4:4.7": {
    "id": "bio-u6:6.1=>bio-u4:4.7",
    "source": "bio-u6:6.1",
    "target": "bio-u4:4.7",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "6.1",
    "targetCode": "4.7",
    "sourceHref": "#/t/bio/bio-u6/6.1",
    "targetHref": "#/t/bio/bio-u4/4.7",
    "titleZh": "DNA/RNA 结构 → 有丝分裂",
    "summary": "有丝分裂需精确复制并分配 DNA；染色体是 DNA+蛋白质的结构。",
    "why": "S 期复制后的姐妹染色单体在后期分离。",
    "shared": [
      "染色体",
      "DNA 复制"
    ],
    "example": "纺锤丝牵引着丝粒分离复制后的 DNA。",
    "steps": [
      "复习 6.1 的核心定义/定律",
      "指出它如何进入 4.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.10=>bio-u4:4.7": {
    "id": "bio-prep-hs:P2.10=>bio-u4:4.7",
    "source": "bio-prep-hs:P2.10",
    "target": "bio-u4:4.7",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "P2.10",
    "targetCode": "4.7",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.10",
    "targetHref": "#/t/bio/bio-u4/4.7",
    "titleZh": "DNA 与蛋白质合成入门 → 有丝分裂",
    "summary": "细胞周期中遗传物质复制是分裂前提。",
    "why": "理解 DNA 复制才能解释为何子细胞遗传信息相同。",
    "shared": [
      "半保留复制",
      "遗传连续性"
    ],
    "example": "间期 DNA 复制量加倍。",
    "steps": [
      "复习 P2.10 的核心定义/定律",
      "指出它如何进入 4.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u4:4.7=>bio-u5:5.1": {
    "id": "bio-u4:4.7=>bio-u5:5.1",
    "source": "bio-u4:4.7",
    "target": "bio-u5:5.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "4.7",
    "targetCode": "5.1",
    "sourceHref": "#/t/bio/bio-u4/4.7",
    "targetHref": "#/t/bio/bio-u5/5.1",
    "titleZh": "有丝分裂 → 减数分裂",
    "summary": "二者都涉及纺锤体与染色体运动，但减数分裂产生单倍体并增加变异。",
    "why": "比较前期联会、同源分离与姐妹分离的差异。",
    "shared": [
      "纺锤体",
      "染色体分离"
    ],
    "example": "减数第一次分裂同源染色体分离。",
    "steps": [
      "复习 4.7 的核心定义/定律",
      "指出它如何进入 5.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u2:2.4=>bio-u2:2.7": {
    "id": "bio-u2:2.4=>bio-u2:2.7",
    "source": "bio-u2:2.4",
    "target": "bio-u2:2.7",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "2.4",
    "targetCode": "2.7",
    "sourceHref": "#/t/bio/bio-u2/2.4",
    "targetHref": "#/t/bio/bio-u2/2.7",
    "titleZh": "膜通透性 → 渗透与水势",
    "summary": "选择透过性决定溶质梯度，从而驱动水势差与渗透净流动。",
    "why": "水顺水势梯度移动。",
    "shared": [
      "半透膜",
      "水势"
    ],
    "example": "高渗环境使细胞失水皱缩。",
    "steps": [
      "复习 2.4 的核心定义/定律",
      "指出它如何进入 2.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u2:2.3=>bio-u2:2.5": {
    "id": "bio-u2:2.3=>bio-u2:2.5",
    "source": "bio-u2:2.3",
    "target": "bio-u2:2.5",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "2.3",
    "targetCode": "2.5",
    "sourceHref": "#/t/bio/bio-u2/2.3",
    "targetHref": "#/t/bio/bio-u2/2.5",
    "titleZh": "质膜 → 膜运输",
    "summary": "磷脂双分子层与蛋白通道/载体是被动与主动运输的结构基础。",
    "why": "疏水内核限制极性分子自由扩散。",
    "shared": [
      "磷脂双层",
      "转运蛋白"
    ],
    "example": "葡萄糖经载体协助扩散进入细胞。",
    "steps": [
      "复习 2.3 的核心定义/定律",
      "指出它如何进入 2.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u1:1.6=>bio-u3:3.1": {
    "id": "bio-u1:1.6=>bio-u3:3.1",
    "source": "bio-u1:1.6",
    "target": "bio-u3:3.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "1.6",
    "targetCode": "3.1",
    "sourceHref": "#/t/bio/bio-u1/1.6",
    "targetHref": "#/t/bio/bio-u3/3.1",
    "titleZh": "酶结构与功能 → 酶催化",
    "summary": "活性位点与诱导契合解释催化如何降低活化能。",
    "why": "结构决定底物特异性与催化效率。",
    "shared": [
      "活性位点",
      "活化能"
    ],
    "example": "温度过高使酶变性失活。",
    "steps": [
      "复习 1.6 的核心定义/定律",
      "指出它如何进入 3.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u3:3.1=>bio-u3:3.4": {
    "id": "bio-u3:3.1=>bio-u3:3.4",
    "source": "bio-u3:3.1",
    "target": "bio-u3:3.4",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.1",
    "targetCode": "3.4",
    "sourceHref": "#/t/bio/bio-u3/3.1",
    "targetHref": "#/t/bio/bio-u3/3.4",
    "titleZh": "酶催化 → 光合作用",
    "summary": "光合光反应与碳反应依赖多种酶（如 Rubisco）。",
    "why": "酶动力学影响光合速率对环境的响应。",
    "shared": [
      "Rubisco",
      "代谢通路"
    ],
    "example": "低温降低酶活性从而降低光合速率。",
    "steps": [
      "复习 3.1 的核心定义/定律",
      "指出它如何进入 3.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u6:6.1=>bio-u5:5.2": {
    "id": "bio-u6:6.1=>bio-u5:5.2",
    "source": "bio-u6:6.1",
    "target": "bio-u5:5.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "6.1",
    "targetCode": "5.2",
    "sourceHref": "#/t/bio/bio-u6/6.1",
    "targetHref": "#/t/bio/bio-u5/5.2",
    "titleZh": "DNA 结构 → 减数分裂与遗传多样性",
    "summary": "交叉互换发生在同源染色体的 DNA 层面，产生新等位基因组合。",
    "why": "DNA 断裂重接机制导致重组。",
    "shared": [
      "同源重组",
      "等位基因"
    ],
    "example": "前期 I 交叉形成交叉结。",
    "steps": [
      "复习 6.1 的核心定义/定律",
      "指出它如何进入 5.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u7:7.2=>bio-u8:8.3": {
    "id": "bio-u7:7.2=>bio-u8:8.3",
    "source": "bio-u7:7.2",
    "target": "bio-u8:8.3",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "7.2",
    "targetCode": "8.3",
    "sourceHref": "#/t/bio/bio-u7/7.2",
    "targetHref": "#/t/bio/bio-u8/8.3",
    "titleZh": "自然选择 → 种群生态",
    "summary": "选择改变种群等位基因频率；种群动态又受密度与资源制约。",
    "why": "进化与生态在种群尺度交汇。",
    "shared": [
      "适应度",
      "种群"
    ],
    "example": "抗药性等位基因频率在施药压力下上升。",
    "steps": [
      "复习 7.2 的核心定义/定律",
      "指出它如何进入 8.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u3:3.5=>bio-u2:2.1": {
    "id": "bio-u3:3.5=>bio-u2:2.1",
    "source": "bio-u3:3.5",
    "target": "bio-u2:2.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.5",
    "targetCode": "2.1",
    "sourceHref": "#/t/bio/bio-u3/3.5",
    "targetHref": "#/t/bio/bio-u2/2.1",
    "titleZh": "细胞呼吸 → 细胞器与区隔化",
    "summary": "线粒体膜与基质区隔化支持电子传递与化学渗透。",
    "why": "内膜嵴增加 ATP 合酶工作面积。",
    "shared": [
      "线粒体",
      "化学渗透"
    ],
    "example": "质子梯度建于线粒体内膜两侧。",
    "steps": [
      "复习 3.5 的核心定义/定律",
      "指出它如何进入 2.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.6=>bio-u3:3.4": {
    "id": "bio-prep-hs:P2.6=>bio-u3:3.4",
    "source": "bio-prep-hs:P2.6",
    "target": "bio-u3:3.4",
    "type": "prerequisite",
    "typeZh": "先修",
    "sourceCode": "P2.6",
    "targetCode": "3.4",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.6",
    "targetHref": "#/t/bio/bio-u3/3.4",
    "titleZh": "光合概览 → 光合作用",
    "summary": "高中光合概览建立光反应/碳反应框架，AP 单元深入机制与实验。",
    "why": "需要先有叶绿体与能量转换的直觉。",
    "shared": [
      "光反应",
      "卡尔文循环"
    ],
    "example": "由色素吸收光谱联系到电子传递。",
    "steps": [
      "复习 P2.6 的核心定义/定律",
      "指出它如何进入 3.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.7=>bio-u3:3.5": {
    "id": "bio-prep-hs:P2.7=>bio-u3:3.5",
    "source": "bio-prep-hs:P2.7",
    "target": "bio-u3:3.5",
    "type": "prerequisite",
    "typeZh": "先修",
    "sourceCode": "P2.7",
    "targetCode": "3.5",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.7",
    "targetHref": "#/t/bio/bio-u3/3.5",
    "titleZh": "细胞呼吸概览 → 细胞呼吸",
    "summary": "预备课中的糖酵解/线粒体图景是 AP 细节的骨架。",
    "why": "ATP 收支与氧化还原直觉先建立。",
    "shared": [
      "糖酵解",
      "氧化磷酸化"
    ],
    "example": "比较有氧与无氧 ATP 产量。",
    "steps": [
      "复习 P2.7 的核心定义/定律",
      "指出它如何进入 3.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u4:4.1=>bio-u4:4.7": {
    "id": "bio-u4:4.1=>bio-u4:4.7",
    "source": "bio-u4:4.1",
    "target": "bio-u4:4.7",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "4.1",
    "targetCode": "4.7",
    "sourceHref": "#/t/bio/bio-u4/4.1",
    "targetHref": "#/t/bio/bio-u4/4.7",
    "titleZh": "细胞通讯 → 有丝分裂",
    "summary": "周期蛋白与激酶等信号控制能否进入有丝分裂。",
    "why": "检查点是信号通路对分裂的门控。",
    "shared": [
      "周期蛋白",
      "检查点"
    ],
    "example": "DNA 损伤信号可阻滞 G2/M。",
    "steps": [
      "复习 4.1 的核心定义/定律",
      "指出它如何进入 4.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-chem:P1.9=>bio-u1:1.1": {
    "id": "bio-prep-chem:P1.9=>bio-u1:1.1",
    "source": "bio-prep-chem:P1.9",
    "target": "bio-u1:1.1",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.9",
    "targetCode": "1.1",
    "sourceHref": "#/t/bio/bio-prep-chem/P1.9",
    "targetHref": "#/t/bio/bio-u1/1.1",
    "titleZh": "水与氢键 → 水与生命",
    "summary": "水的极性与氢键解释内聚、黏附、高比热与溶剂性质。",
    "why": "AP 1.1 直接把这些分子间作用与生命支持性质联系起来。",
    "shared": [
      "氢键",
      "极性分子"
    ],
    "example": "冰的密度小于液态水，使水体表面结冰后仍能保温。",
    "steps": [
      "复习 P1.9 的核心定义/定律",
      "指出它如何进入 1.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-chem:P1.10=>bio-u1:1.3": {
    "id": "bio-prep-chem:P1.10=>bio-u1:1.3",
    "source": "bio-prep-chem:P1.10",
    "target": "bio-u1:1.3",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.10",
    "targetCode": "1.3",
    "sourceHref": "#/t/bio/bio-prep-chem/P1.10",
    "targetHref": "#/t/bio/bio-u1/1.3",
    "titleZh": "有机官能团 → 生物大分子",
    "summary": "羟基、羧基、氨基与磷酸基决定单体的连接方式和性质。",
    "why": "生物大分子由带官能团的小分子脱水缩合而成。",
    "shared": [
      "官能团",
      "脱水缩合"
    ],
    "example": "氨基酸的氨基与羧基形成肽键。",
    "steps": [
      "复习 P1.10 的核心定义/定律",
      "指出它如何进入 1.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-chem:P1.11=>bio-u3:3.3": {
    "id": "bio-prep-chem:P1.11=>bio-u3:3.3",
    "source": "bio-prep-chem:P1.11",
    "target": "bio-u3:3.3",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.11",
    "targetCode": "3.3",
    "sourceHref": "#/t/bio/bio-prep-chem/P1.11",
    "targetHref": "#/t/bio/bio-u3/3.3",
    "titleZh": "热力学入门 → 细胞能量",
    "summary": "自由能变化与吸热、放热反应是理解 ATP 偶联反应的基础。",
    "why": "细胞用放能反应驱动吸能反应，遵守能量守恒。",
    "shared": [
      "自由能",
      "能量守恒"
    ],
    "example": "ATP 水解的放能驱动主动运输。",
    "steps": [
      "复习 P1.11 的核心定义/定律",
      "指出它如何进入 3.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.5=>bio-u1:1.6": {
    "id": "bio-prep-hs:P2.5=>bio-u1:1.6",
    "source": "bio-prep-hs:P2.5",
    "target": "bio-u1:1.6",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P2.5",
    "targetCode": "1.6",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.5",
    "targetHref": "#/t/bio/bio-u1/1.6",
    "titleZh": "酶（预备）→ 酶结构与功能",
    "summary": "预备课的活化能与变性概念在 AP 中扩展到活性位点、诱导契合与调节。",
    "why": "先有酶促反应直觉，再分析结构如何决定功能。",
    "shared": [
      "活化能",
      "活性位点"
    ],
    "example": "高温破坏非共价键使酶变性。",
    "steps": [
      "复习 P2.5 的核心定义/定律",
      "指出它如何进入 1.6 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.8=>bio-u4:4.5": {
    "id": "bio-prep-hs:P2.8=>bio-u4:4.5",
    "source": "bio-prep-hs:P2.8",
    "target": "bio-u4:4.5",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P2.8",
    "targetCode": "4.5",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.8",
    "targetHref": "#/t/bio/bio-u4/4.5",
    "titleZh": "有丝分裂与减数分裂 → 细胞周期",
    "summary": "预备课的分裂阶段图是理解间期、检查点与周期调控的骨架。",
    "why": "细胞周期把分裂事件组织成可调控的有序过程。",
    "shared": [
      "间期",
      "检查点"
    ],
    "example": "DNA 在 S 期复制后进入 G2 与 M 期。",
    "steps": [
      "复习 P2.8 的核心定义/定律",
      "指出它如何进入 4.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.9=>bio-u5:5.3": {
    "id": "bio-prep-hs:P2.9=>bio-u5:5.3",
    "source": "bio-prep-hs:P2.9",
    "target": "bio-u5:5.3",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P2.9",
    "targetCode": "5.3",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.9",
    "targetHref": "#/t/bio/bio-u5/5.3",
    "titleZh": "孟德尔遗传（预备）→ 孟德尔遗传（AP）",
    "summary": "AP 用概率、减数分裂与显隐性关系重新解释分离和自由组合定律。",
    "why": "同一组定律从表型比例上升到配子与等位基因层面。",
    "shared": [
      "分离定律",
      "自由组合"
    ],
    "example": "单因子杂交的 3:1 表型比来自 1:2:1 基因型比。",
    "steps": [
      "复习 P2.9 的核心定义/定律",
      "指出它如何进入 5.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.11=>bio-u7:7.2": {
    "id": "bio-prep-hs:P2.11=>bio-u7:7.2",
    "source": "bio-prep-hs:P2.11",
    "target": "bio-u7:7.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P2.11",
    "targetCode": "7.2",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.11",
    "targetHref": "#/t/bio/bio-u7/7.2",
    "titleZh": "自然选择入门 → 自然选择",
    "summary": "AP 用变异、遗传力、选择压力与适应度定量描述选择。",
    "why": "预备课的定性叙述在 AP 中变成可测量的群体过程。",
    "shared": [
      "适应度",
      "选择压力"
    ],
    "example": "抗生素耐药菌在用药环境中频率上升。",
    "steps": [
      "复习 P2.11 的核心定义/定律",
      "指出它如何进入 7.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-prep-hs:P2.12=>bio-u8:8.2": {
    "id": "bio-prep-hs:P2.12=>bio-u8:8.2",
    "source": "bio-prep-hs:P2.12",
    "target": "bio-u8:8.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P2.12",
    "targetCode": "8.2",
    "sourceHref": "#/t/bio/bio-prep-hs/P2.12",
    "targetHref": "#/t/bio/bio-u8/8.2",
    "titleZh": "生态层级与能量流 → 能量流",
    "summary": "食物链与能量金字塔在 AP 中用净初级生产量和营养级传递效率表述。",
    "why": "生态系统的能量单向流动并逐级递减。",
    "shared": [
      "营养级",
      "净初级生产量"
    ],
    "example": "草原生态系统中约九成能量在每一营养级以热散失。",
    "steps": [
      "复习 P2.12 的核心定义/定律",
      "指出它如何进入 8.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u1:1.1=>bio-u2:2.7": {
    "id": "bio-u1:1.1=>bio-u2:2.7",
    "source": "bio-u1:1.1",
    "target": "bio-u2:2.7",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "1.1",
    "targetCode": "2.7",
    "sourceHref": "#/t/bio/bio-u1/1.1",
    "targetHref": "#/t/bio/bio-u2/2.7",
    "titleZh": "水与生命 → 渗透与水势",
    "summary": "水的极性、氢键与内聚性使水势、渗透和膨压成为细胞过程。",
    "why": "水势差决定水跨半透膜移动的方向。",
    "shared": [
      "水势",
      "半透膜"
    ],
    "example": "细胞放入高渗溶液会失水皱缩。",
    "steps": [
      "复习 1.1 的核心定义/定律",
      "指出它如何进入 2.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u1:1.5=>bio-u6:6.1": {
    "id": "bio-u1:1.5=>bio-u6:6.1",
    "source": "bio-u1:1.5",
    "target": "bio-u6:6.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "1.5",
    "targetCode": "6.1",
    "sourceHref": "#/t/bio/bio-u1/1.5",
    "targetHref": "#/t/bio/bio-u6/6.1",
    "titleZh": "核酸 → DNA 与 RNA 结构",
    "summary": "核苷酸结构、糖-磷酸骨架与碱基配对在 Unit 6 中用于解释复制和转录。",
    "why": "Unit 1 建立单体与聚合物结构，Unit 6 展开信息流机制。",
    "shared": [
      "核苷酸",
      "碱基互补"
    ],
    "example": "腺嘌呤与胸腺嘧啶形成两个氢键。",
    "steps": [
      "复习 1.5 的核心定义/定律",
      "指出它如何进入 6.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u2:2.5=>bio-u3:3.5": {
    "id": "bio-u2:2.5=>bio-u3:3.5",
    "source": "bio-u2:2.5",
    "target": "bio-u3:3.5",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "2.5",
    "targetCode": "3.5",
    "sourceHref": "#/t/bio/bio-u2/2.5",
    "targetHref": "#/t/bio/bio-u3/3.5",
    "titleZh": "膜运输 → 细胞呼吸",
    "summary": "电子传递链把质子泵到膜间隙，ATP 合酶利用质子回流合成 ATP。",
    "why": "化学渗透把膜运输原理与能量转换连接起来。",
    "shared": [
      "质子梯度",
      "ATP 合酶"
    ],
    "example": "线粒体内膜两侧的质子梯度驱动 ATP 合成。",
    "steps": [
      "复习 2.5 的核心定义/定律",
      "指出它如何进入 3.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u2:2.10=>bio-u7:7.13": {
    "id": "bio-u2:2.10=>bio-u7:7.13",
    "source": "bio-u2:2.10",
    "target": "bio-u7:7.13",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "2.10",
    "targetCode": "7.13",
    "sourceHref": "#/t/bio/bio-u2/2.10",
    "targetHref": "#/t/bio/bio-u7/7.13",
    "titleZh": "细胞区隔起源 → 生命起源",
    "summary": "膜的形成与区隔化让原始反应体系获得内外差异，是原始细胞的关键一步。",
    "why": "生命起源需要把自我复制与代谢包裹在可选择的边界内。",
    "shared": [
      "原始膜",
      "区隔化"
    ],
    "example": "脂质囊泡可包裹核酸与代谢物。",
    "steps": [
      "复习 2.10 的核心定义/定律",
      "指出它如何进入 7.13 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u4:4.3=>bio-u6:6.5": {
    "id": "bio-u4:4.3=>bio-u6:6.5",
    "source": "bio-u4:4.3",
    "target": "bio-u6:6.5",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "4.3",
    "targetCode": "6.5",
    "sourceHref": "#/t/bio/bio-u4/4.3",
    "targetHref": "#/t/bio/bio-u6/6.5",
    "titleZh": "信号转导 → 基因表达调控",
    "summary": "信号级联可激活或抑制转录因子，从而改变基因表达。",
    "why": "细胞外信号最终可落到转录调控层面。",
    "shared": [
      "转录因子",
      "磷酸化级联"
    ],
    "example": "激素受体激活后诱导特定基因转录。",
    "steps": [
      "复习 4.3 的核心定义/定律",
      "指出它如何进入 6.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u4:4.6=>bio-u6:6.7": {
    "id": "bio-u4:4.6=>bio-u6:6.7",
    "source": "bio-u4:4.6",
    "target": "bio-u6:6.7",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "4.6",
    "targetCode": "6.7",
    "sourceHref": "#/t/bio/bio-u4/4.6",
    "targetHref": "#/t/bio/bio-u6/6.7",
    "titleZh": "细胞周期调控 → 突变",
    "summary": "原癌基因与抑癌基因突变可破坏检查点，使细胞绕过正常调控。",
    "why": "突变累积是细胞失控增殖的重要机制。",
    "shared": [
      "检查点",
      "抑癌基因"
    ],
    "example": "p53 功能缺失会削弱 DNA 损伤后的停滞与凋亡。",
    "steps": [
      "复习 4.6 的核心定义/定律",
      "指出它如何进入 6.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u5:5.3=>bio-u7:7.4": {
    "id": "bio-u5:5.3=>bio-u7:7.4",
    "source": "bio-u5:5.3",
    "target": "bio-u7:7.4",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "5.3",
    "targetCode": "7.4",
    "sourceHref": "#/t/bio/bio-u5/5.3",
    "targetHref": "#/t/bio/bio-u7/7.4",
    "titleZh": "孟德尔遗传 → 群体遗传",
    "summary": "个体等位基因的传递规律扩展到群体层面的等位基因频率。",
    "why": "群体遗传把孟德尔定律与进化变化连接起来。",
    "shared": [
      "等位基因频率",
      "遗传平衡"
    ],
    "example": "隐性性状在群体中的比例取决于等位基因频率。",
    "steps": [
      "复习 5.3 的核心定义/定律",
      "指出它如何进入 7.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u6:6.7=>bio-u7:7.2": {
    "id": "bio-u6:6.7=>bio-u7:7.2",
    "source": "bio-u6:6.7",
    "target": "bio-u7:7.2",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "6.7",
    "targetCode": "7.2",
    "sourceHref": "#/t/bio/bio-u6/6.7",
    "targetHref": "#/t/bio/bio-u7/7.2",
    "titleZh": "突变 → 自然选择",
    "summary": "突变提供新的遗传变异，自然选择改变这些变异在群体中的频率。",
    "why": "没有变异就没有可选择的表型差异。",
    "shared": [
      "遗传变异",
      "适应度"
    ],
    "example": "抗药性突变在药物压力下被选择。",
    "steps": [
      "复习 6.7 的核心定义/定律",
      "指出它如何进入 7.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u6:6.8=>bio-u7:7.9": {
    "id": "bio-u6:6.8=>bio-u7:7.9",
    "source": "bio-u6:6.8",
    "target": "bio-u7:7.9",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "6.8",
    "targetCode": "7.9",
    "sourceHref": "#/t/bio/bio-u6/6.8",
    "targetHref": "#/t/bio/bio-u7/7.9",
    "titleZh": "生物技术 → 系统发生",
    "summary": "DNA 测序与分子标记为比较物种亲缘关系提供大量数据。",
    "why": "分子序列差异可用来重建系统发生树。",
    "shared": [
      "DNA 测序",
      "序列比对"
    ],
    "example": "比较 rRNA 序列可推断远缘物种关系。",
    "steps": [
      "复习 6.8 的核心定义/定律",
      "指出它如何进入 7.9 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u7:7.11=>bio-u8:8.7": {
    "id": "bio-u7:7.11=>bio-u8:8.7",
    "source": "bio-u7:7.11",
    "target": "bio-u8:8.7",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "7.11",
    "targetCode": "8.7",
    "sourceHref": "#/t/bio/bio-u7/7.11",
    "targetHref": "#/t/bio/bio-u8/8.7",
    "titleZh": "灭绝 → 生态系统扰动",
    "summary": "栖息地破坏、入侵种与气候变化会提高灭绝风险并改变群落结构。",
    "why": "局地灭绝会削弱生态系统功能与稳定性。",
    "shared": [
      "生物多样性",
      "栖息地"
    ],
    "example": "栖息地破碎化使小种群更易局地灭绝。",
    "steps": [
      "复习 7.11 的核心定义/定律",
      "指出它如何进入 8.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "bio-u3:3.4=>bio-u8:8.2": {
    "id": "bio-u3:3.4=>bio-u8:8.2",
    "source": "bio-u3:3.4",
    "target": "bio-u8:8.2",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "3.4",
    "targetCode": "8.2",
    "sourceHref": "#/t/bio/bio-u3/3.4",
    "targetHref": "#/t/bio/bio-u8/8.2",
    "titleZh": "光合作用 → 能量流",
    "summary": "光合作用固定太阳能，净初级生产量是生态系统能量流的起点。",
    "why": "生态系统的能量最终来自生产者固定的光能。",
    "shared": [
      "净初级生产量",
      "生产者"
    ],
    "example": "浮游植物支撑海洋食物网。",
    "steps": [
      "复习 3.4 的核心定义/定律",
      "指出它如何进入 8.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  }
};
