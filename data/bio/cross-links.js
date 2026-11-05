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
  }
};
