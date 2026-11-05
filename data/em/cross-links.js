/** Curated cross-topic links for em map */
export const CROSS_EDGES = [
  {
    "source": "em-u8:8.4",
    "target": "em-u8:8.5",
    "type": "connects"
  },
  {
    "source": "em-u8:8.5",
    "target": "em-u8:8.2",
    "type": "connects"
  },
  {
    "source": "em-u13:13.1",
    "target": "em-u13:13.2",
    "type": "connects"
  },
  {
    "source": "em-u13:13.2",
    "target": "em-u13:13.3",
    "type": "connects"
  },
  {
    "source": "em-u9:9.4",
    "target": "em-u8:8.2",
    "type": "connects"
  },
  {
    "source": "em-u10:10.3",
    "target": "em-u9:9.2",
    "type": "connects"
  },
  {
    "source": "em-u11:11.3",
    "target": "em-u11:11.2",
    "type": "connects"
  },
  {
    "source": "em-u12:12.2",
    "target": "em-u12:12.1",
    "type": "connects"
  },
  {
    "source": "em-u12:12.4",
    "target": "em-u12:12.1",
    "type": "connects"
  },
  {
    "source": "em-u13:13.2",
    "target": "em-u11:11.8",
    "type": "connects"
  },
  {
    "source": "em-prep-found:P1.8",
    "target": "em-u8:8.4",
    "type": "prerequisite"
  },
  {
    "source": "em-prep-found:P1.7",
    "target": "em-u13:13.1",
    "type": "prerequisite"
  },
  {
    "source": "em-u9:9.3",
    "target": "em-u8:8.5",
    "type": "connects"
  }
];
export const CROSS_RELATIONS = {
  "em-u8:8.4=>em-u8:8.5": {
    "id": "em-u8:8.4=>em-u8:8.5",
    "source": "em-u8:8.4",
    "target": "em-u8:8.5",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "8.4",
    "targetCode": "8.5",
    "sourceHref": "#/t/em/em-u8/8.4",
    "targetHref": "#/t/em/em-u8/8.5",
    "titleZh": "电通量 → 高斯定律",
    "summary": "高斯定律用闭合曲面上电通量等于闭合电荷/ε₀。",
    "why": "对称性选择高斯面使 E 可提出积分号。",
    "shared": [
      "Φ_E",
      "∮E·dA=Q_enc/ε₀"
    ],
    "example": "均匀球壳外场同点电荷。",
    "steps": [
      "复习 8.4 的核心定义/定律",
      "指出它如何进入 8.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u8:8.5=>em-u8:8.2": {
    "id": "em-u8:8.5=>em-u8:8.2",
    "source": "em-u8:8.5",
    "target": "em-u8:8.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "8.5",
    "targetCode": "8.2",
    "sourceHref": "#/t/em/em-u8/8.5",
    "targetHref": "#/t/em/em-u8/8.2",
    "titleZh": "高斯定律 → 电场",
    "summary": "高斯定律是计算对称电场的核心工具。",
    "why": "由通量约束得到 |E|(r)。",
    "shared": [
      "对称性",
      "径向场"
    ],
    "example": "无限长直线电荷 E=λ/(2πε₀r)。",
    "steps": [
      "复习 8.5 的核心定义/定律",
      "指出它如何进入 8.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u13:13.1=>em-u13:13.2": {
    "id": "em-u13:13.1=>em-u13:13.2",
    "source": "em-u13:13.1",
    "target": "em-u13:13.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "13.1",
    "targetCode": "13.2",
    "sourceHref": "#/t/em/em-u13/13.1",
    "targetHref": "#/t/em/em-u13/13.2",
    "titleZh": "磁通量 → 电磁感应",
    "summary": "法拉第定律：感应电动势等于磁通量变化率的负值。",
    "why": "ε=−dΦ_B/dt。",
    "shared": [
      "Φ_B",
      "感应电动势"
    ],
    "example": "条形磁铁插入线圈时电流表偏转。",
    "steps": [
      "复习 13.1 的核心定义/定律",
      "指出它如何进入 13.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u13:13.2=>em-u13:13.3": {
    "id": "em-u13:13.2=>em-u13:13.3",
    "source": "em-u13:13.2",
    "target": "em-u13:13.3",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "13.2",
    "targetCode": "13.3",
    "sourceHref": "#/t/em/em-u13/13.2",
    "targetHref": "#/t/em/em-u13/13.3",
    "titleZh": "电磁感应 → 感应电流与磁力",
    "summary": "感应电流在磁场中受安培力，常表现为楞次定律的阻碍。",
    "why": "能量来自引起通量变化的机械功。",
    "shared": [
      "楞次定律",
      "安培力"
    ],
    "example": "铝环套落磁铁时减速。",
    "steps": [
      "复习 13.2 的核心定义/定律",
      "指出它如何进入 13.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u9:9.4=>em-u8:8.2": {
    "id": "em-u9:9.4=>em-u8:8.2",
    "source": "em-u9:9.4",
    "target": "em-u8:8.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "9.4",
    "targetCode": "8.2",
    "sourceHref": "#/t/em/em-u9/9.4",
    "targetHref": "#/t/em/em-u8/8.2",
    "titleZh": "电势差与功 → 电场",
    "summary": "电势差等于电场力移动单位电荷所做之功的负相关；V=−∫E·dl。",
    "why": "匀强场中 ΔV=Ed。",
    "shared": [
      "电势",
      "场强"
    ],
    "example": "平行板间匀强场由电压与间距决定。",
    "steps": [
      "复习 9.4 的核心定义/定律",
      "指出它如何进入 8.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u10:10.3=>em-u9:9.2": {
    "id": "em-u10:10.3=>em-u9:9.2",
    "source": "em-u10:10.3",
    "target": "em-u9:9.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "10.3",
    "targetCode": "9.2",
    "sourceHref": "#/t/em/em-u10/10.3",
    "targetHref": "#/t/em/em-u9/9.2",
    "titleZh": "电容器 → 电势",
    "summary": "电容 C=Q/V；储存电能与电势差相关。",
    "why": "U=½CV²。",
    "shared": [
      "电容",
      "电势差"
    ],
    "example": "并联电容组等效电容增大。",
    "steps": [
      "复习 10.3 的核心定义/定律",
      "指出它如何进入 9.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u11:11.3=>em-u11:11.2": {
    "id": "em-u11:11.3=>em-u11:11.2",
    "source": "em-u11:11.3",
    "target": "em-u11:11.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "11.3",
    "targetCode": "11.2",
    "sourceHref": "#/t/em/em-u11/11.3",
    "targetHref": "#/t/em/em-u11/11.2",
    "titleZh": "欧姆定律 → 简单电路",
    "summary": "V=IR 是分析串并联电路的基本关系。",
    "why": "结合基尔霍夫定律扩展到复杂网络。",
    "shared": [
      "电阻",
      "电流"
    ],
    "example": "串联分压、并联分流。",
    "steps": [
      "复习 11.3 的核心定义/定律",
      "指出它如何进入 11.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u12:12.2=>em-u12:12.1": {
    "id": "em-u12:12.2=>em-u12:12.1",
    "source": "em-u12:12.2",
    "target": "em-u12:12.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "12.2",
    "targetCode": "12.1",
    "sourceHref": "#/t/em/em-u12/12.2",
    "targetHref": "#/t/em/em-u12/12.1",
    "titleZh": "运动电荷与磁场 → 磁场",
    "summary": "洛伦兹力 F=q v×B 解释带电粒子在磁场中的偏转。",
    "why": "匀强 B 中垂直入射作匀速圆周运动。",
    "shared": [
      "洛伦兹力",
      "回旋半径"
    ],
    "example": "r=mv/(qB)。",
    "steps": [
      "复习 12.2 的核心定义/定律",
      "指出它如何进入 12.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u12:12.4=>em-u12:12.1": {
    "id": "em-u12:12.4=>em-u12:12.1",
    "source": "em-u12:12.4",
    "target": "em-u12:12.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "12.4",
    "targetCode": "12.1",
    "sourceHref": "#/t/em/em-u12/12.4",
    "targetHref": "#/t/em/em-u12/12.1",
    "titleZh": "安培定律 → 磁场",
    "summary": "∮B·dl=μ₀ I_enc 用于对称电流分布求 B。",
    "why": "长直导线、螺线管是典型应用。",
    "shared": [
      "安培环路",
      "对称性"
    ],
    "example": "无限长直导线 B=μ₀I/(2πr)。",
    "steps": [
      "复习 12.4 的核心定义/定律",
      "指出它如何进入 12.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u13:13.2=>em-u11:11.8": {
    "id": "em-u13:13.2=>em-u11:11.8",
    "source": "em-u13:13.2",
    "target": "em-u11:11.8",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "13.2",
    "targetCode": "11.8",
    "sourceHref": "#/t/em/em-u13/13.2",
    "targetHref": "#/t/em/em-u11/11.8",
    "titleZh": "电磁感应 → RC 电路",
    "summary": "变化磁通量产生的电动势可驱动含 R、C 的暂态电路。",
    "why": "把感应 ε 当作电源接入电路方程。",
    "shared": [
      "感应电动势",
      "暂态"
    ],
    "example": "发电机对 RC 负载供电的充放电。",
    "steps": [
      "复习 13.2 的核心定义/定律",
      "指出它如何进入 11.8 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.8=>em-u8:8.4": {
    "id": "em-prep-found:P1.8=>em-u8:8.4",
    "source": "em-prep-found:P1.8",
    "target": "em-u8:8.4",
    "type": "prerequisite",
    "typeZh": "先修",
    "sourceCode": "P1.8",
    "targetCode": "8.4",
    "sourceHref": "#/t/em/em-prep-found/P1.8",
    "targetHref": "#/t/em/em-u8/8.4",
    "titleZh": "矢量场与通量直觉 → 电通量",
    "summary": "预备课中的通量直觉上升到 Φ_E=∫E·dA。",
    "why": "需要面积元方向与场的点积概念。",
    "shared": [
      "通量",
      "面积矢量"
    ],
    "example": "匀强场穿过平面的通量 E A cosθ。",
    "steps": [
      "复习 P1.8 的核心定义/定律",
      "指出它如何进入 8.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.7=>em-u13:13.1": {
    "id": "em-prep-found:P1.7=>em-u13:13.1",
    "source": "em-prep-found:P1.7",
    "target": "em-u13:13.1",
    "type": "prerequisite",
    "typeZh": "先修",
    "sourceCode": "P1.7",
    "targetCode": "13.1",
    "sourceHref": "#/t/em/em-prep-found/P1.7",
    "targetHref": "#/t/em/em-u13/13.1",
    "titleZh": "磁通量直觉 → 磁通量",
    "summary": "Φ_B=∫B·dA 是法拉第定律的输入量。",
    "why": "先建立“穿过回路的场线条数”直觉。",
    "shared": [
      "磁通",
      "回路"
    ],
    "example": "线圈匝数增加使总磁链增大。",
    "steps": [
      "复习 P1.7 的核心定义/定律",
      "指出它如何进入 13.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u9:9.3=>em-u8:8.5": {
    "id": "em-u9:9.3=>em-u8:8.5",
    "source": "em-u9:9.3",
    "target": "em-u8:8.5",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "9.3",
    "targetCode": "8.5",
    "sourceHref": "#/t/em/em-u9/9.3",
    "targetHref": "#/t/em/em-u8/8.5",
    "titleZh": "电势与场 → 高斯定律应用情境",
    "summary": "由对称 E 得 V(r)=−∫E dr；静电平衡导体等势。",
    "why": "高斯结果与电势差计算衔接。",
    "shared": [
      "E=−∇V",
      "导体"
    ],
    "example": "球壳内外电势分布。",
    "steps": [
      "复习 9.3 的核心定义/定律",
      "指出它如何进入 8.5 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  }
};
