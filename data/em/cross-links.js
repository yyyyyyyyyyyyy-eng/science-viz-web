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
  },
  {
    "source": "em-prep-found:P1.1",
    "target": "em-u8:8.1",
    "type": "connects"
  },
  {
    "source": "em-prep-found:P1.2",
    "target": "em-u8:8.2",
    "type": "connects"
  },
  {
    "source": "em-prep-found:P1.3",
    "target": "em-u9:9.2",
    "type": "connects"
  },
  {
    "source": "em-prep-found:P1.4",
    "target": "em-u10:10.3",
    "type": "connects"
  },
  {
    "source": "em-prep-found:P1.5",
    "target": "em-u11:11.3",
    "type": "connects"
  },
  {
    "source": "em-prep-found:P1.6",
    "target": "em-u12:12.2",
    "type": "connects"
  },
  {
    "source": "em-u8:8.1",
    "target": "em-u9:9.1",
    "type": "connects"
  },
  {
    "source": "em-u8:8.2",
    "target": "em-u9:9.3",
    "type": "connects"
  },
  {
    "source": "em-u8:8.3",
    "target": "em-u10:10.1",
    "type": "connects"
  },
  {
    "source": "em-u8:8.5",
    "target": "em-u10:10.1",
    "type": "connects"
  },
  {
    "source": "em-u9:9.1",
    "target": "em-u10:10.3",
    "type": "connects"
  },
  {
    "source": "em-u10:10.3",
    "target": "em-u11:11.8",
    "type": "connects"
  },
  {
    "source": "em-u11:11.1",
    "target": "em-u12:12.3",
    "type": "connects"
  },
  {
    "source": "em-u11:11.8",
    "target": "em-u13:13.6",
    "type": "connects"
  },
  {
    "source": "em-u12:12.2",
    "target": "em-u13:13.2",
    "type": "connects"
  },
  {
    "source": "em-u12:12.3",
    "target": "em-u13:13.1",
    "type": "connects"
  },
  {
    "source": "em-u12:12.4",
    "target": "em-u13:13.4",
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
  },
  "em-prep-found:P1.1=>em-u8:8.1": {
    "id": "em-prep-found:P1.1=>em-u8:8.1",
    "source": "em-prep-found:P1.1",
    "target": "em-u8:8.1",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.1",
    "targetCode": "8.1",
    "sourceHref": "#/t/em/em-prep-found/P1.1",
    "targetHref": "#/t/em/em-u8/8.1",
    "titleZh": "电荷与库仑定律（预备）→ 电荷与力",
    "summary": "库仑定律的矢量形式与叠加原理在 AP 中用于多电荷系统。",
    "why": "先掌握点电荷间作用力，再处理电荷分布。",
    "shared": [
      "库仑定律",
      "叠加原理"
    ],
    "example": "两个同号点电荷相互排斥。",
    "steps": [
      "复习 P1.1 的核心定义/定律",
      "指出它如何进入 8.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.2=>em-u8:8.2": {
    "id": "em-prep-found:P1.2=>em-u8:8.2",
    "source": "em-prep-found:P1.2",
    "target": "em-u8:8.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.2",
    "targetCode": "8.2",
    "sourceHref": "#/t/em/em-prep-found/P1.2",
    "targetHref": "#/t/em/em-u8/8.2",
    "titleZh": "电场直觉 → 电场",
    "summary": "电场强度定义、场线与叠加在 AP 中系统化。",
    "why": "场把电荷间作用转化为空间性质。",
    "shared": [
      "电场强度",
      "场线"
    ],
    "example": "正电荷场线向外发散。",
    "steps": [
      "复习 P1.2 的核心定义/定律",
      "指出它如何进入 8.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.3=>em-u9:9.2": {
    "id": "em-prep-found:P1.3=>em-u9:9.2",
    "source": "em-prep-found:P1.3",
    "target": "em-u9:9.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.3",
    "targetCode": "9.2",
    "sourceHref": "#/t/em/em-prep-found/P1.3",
    "targetHref": "#/t/em/em-u9/9.2",
    "titleZh": "电势直觉 → 电势",
    "summary": "电势是单位电荷的电势能，沿场线方向降低。",
    "why": "先建立电势能直觉，再定义电势。",
    "shared": [
      "电势",
      "电势能"
    ],
    "example": "正电荷顺电场方向运动时电势降低。",
    "steps": [
      "复习 P1.3 的核心定义/定律",
      "指出它如何进入 9.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.4=>em-u10:10.3": {
    "id": "em-prep-found:P1.4=>em-u10:10.3",
    "source": "em-prep-found:P1.4",
    "target": "em-u10:10.3",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.4",
    "targetCode": "10.3",
    "sourceHref": "#/t/em/em-prep-found/P1.4",
    "targetHref": "#/t/em/em-u10/10.3",
    "titleZh": "电容直觉 → 电容器",
    "summary": "电容、电荷与电势差的关系在 AP 中用于串并联与储能。",
    "why": "先有平行板与介质直觉，再定量计算。",
    "shared": [
      "电容",
      "平行板"
    ],
    "example": "插入电介质提高电容器的电容。",
    "steps": [
      "复习 P1.4 的核心定义/定律",
      "指出它如何进入 10.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.5=>em-u11:11.3": {
    "id": "em-prep-found:P1.5=>em-u11:11.3",
    "source": "em-prep-found:P1.5",
    "target": "em-u11:11.3",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.5",
    "targetCode": "11.3",
    "sourceHref": "#/t/em/em-prep-found/P1.5",
    "targetHref": "#/t/em/em-u11/11.3",
    "titleZh": "欧姆定律与电路 → 电阻与欧姆定律",
    "summary": "电阻率、温度效应与串并联规律扩展预备课的欧姆定律。",
    "why": "从宏观 V=IR 深入到材料与几何因素。",
    "shared": [
      "电阻率",
      "欧姆定律"
    ],
    "example": "长而细的导线电阻更大。",
    "steps": [
      "复习 P1.5 的核心定义/定律",
      "指出它如何进入 11.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-prep-found:P1.6=>em-u12:12.2": {
    "id": "em-prep-found:P1.6=>em-u12:12.2",
    "source": "em-prep-found:P1.6",
    "target": "em-u12:12.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.6",
    "targetCode": "12.2",
    "sourceHref": "#/t/em/em-prep-found/P1.6",
    "targetHref": "#/t/em/em-u12/12.2",
    "titleZh": "磁场与洛伦兹力直觉 → 运动电荷与磁场",
    "summary": "洛伦兹力的方向与大小在 AP 中用矢量叉积定量描述。",
    "why": "先建立磁场对运动电荷作用的直觉。",
    "shared": [
      "洛伦兹力",
      "右手定则"
    ],
    "example": "电子垂直射入匀强磁场做圆周运动。",
    "steps": [
      "复习 P1.6 的核心定义/定律",
      "指出它如何进入 12.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u8:8.1=>em-u9:9.1": {
    "id": "em-u8:8.1=>em-u9:9.1",
    "source": "em-u8:8.1",
    "target": "em-u9:9.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "8.1",
    "targetCode": "9.1",
    "sourceHref": "#/t/em/em-u8/8.1",
    "targetHref": "#/t/em/em-u9/9.1",
    "titleZh": "电荷与力 → 电势能",
    "summary": "电场力做功引入电势能，点电荷系统的电势能由库仑力积分得到。",
    "why": "先有受力与位移，再定义势能。",
    "shared": [
      "电场力做功",
      "电势能"
    ],
    "example": "同号电荷靠近时电势能增加。",
    "steps": [
      "复习 8.1 的核心定义/定律",
      "指出它如何进入 9.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u8:8.2=>em-u9:9.3": {
    "id": "em-u8:8.2=>em-u9:9.3",
    "source": "em-u8:8.2",
    "target": "em-u9:9.3",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "8.2",
    "targetCode": "9.3",
    "sourceHref": "#/t/em/em-u8/8.2",
    "targetHref": "#/t/em/em-u9/9.3",
    "titleZh": "电场 → 电势与场",
    "summary": "电势由电场沿路径积分得到，电场是电势的负梯度。",
    "why": "场与势是同一静电相互作用的两种描述。",
    "shared": [
      "电势梯度",
      "路径积分"
    ],
    "example": "匀强电场中电势沿场方向线性降低。",
    "steps": [
      "复习 8.2 的核心定义/定律",
      "指出它如何进入 9.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u8:8.3=>em-u10:10.1": {
    "id": "em-u8:8.3=>em-u10:10.1",
    "source": "em-u8:8.3",
    "target": "em-u10:10.1",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "8.3",
    "targetCode": "10.1",
    "sourceHref": "#/t/em/em-u8/8.3",
    "targetHref": "#/t/em/em-u10/10.1",
    "titleZh": "电场叠加 → 导体静电",
    "summary": "导体表面电荷重新分布，使内部合场为零并形成等势体。",
    "why": "叠加原理用于分析导体表面电荷产生的场。",
    "shared": [
      "静电平衡",
      "等势体"
    ],
    "example": "导体内部电场为零，电荷分布在表面。",
    "steps": [
      "复习 8.3 的核心定义/定律",
      "指出它如何进入 10.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u8:8.5=>em-u10:10.1": {
    "id": "em-u8:8.5=>em-u10:10.1",
    "source": "em-u8:8.5",
    "target": "em-u10:10.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "8.5",
    "targetCode": "10.1",
    "sourceHref": "#/t/em/em-u8/8.5",
    "targetHref": "#/t/em/em-u10/10.1",
    "titleZh": "高斯定律 → 导体静电",
    "summary": "高斯定律可证明导体内部无净电荷、外部场垂直于表面。",
    "why": "选择合适高斯面分析导体静电平衡。",
    "shared": [
      "高斯面",
      "静电屏蔽"
    ],
    "example": "空腔导体可屏蔽外部电场。",
    "steps": [
      "复习 8.5 的核心定义/定律",
      "指出它如何进入 10.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u9:9.1=>em-u10:10.3": {
    "id": "em-u9:9.1=>em-u10:10.3",
    "source": "em-u9:9.1",
    "target": "em-u10:10.3",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "9.1",
    "targetCode": "10.3",
    "sourceHref": "#/t/em/em-u9/9.1",
    "targetHref": "#/t/em/em-u10/10.3",
    "titleZh": "电势能 → 电容器",
    "summary": "电容器储存的电场能可用电势差与电荷量表示。",
    "why": "充电过程把电荷逐次移到极板，积累电势能。",
    "shared": [
      "储能",
      "电势差"
    ],
    "example": "电容器放电可点亮小灯泡。",
    "steps": [
      "复习 9.1 的核心定义/定律",
      "指出它如何进入 10.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u10:10.3=>em-u11:11.8": {
    "id": "em-u10:10.3=>em-u11:11.8",
    "source": "em-u10:10.3",
    "target": "em-u11:11.8",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "10.3",
    "targetCode": "11.8",
    "sourceHref": "#/t/em/em-u10/10.3",
    "targetHref": "#/t/em/em-u11/11.8",
    "titleZh": "电容器 → RC 电路",
    "summary": "RC 电路的充放电过程由电容与电阻共同决定时间常数。",
    "why": "把电容元件接入电路后分析暂态电流与电压。",
    "shared": [
      "时间常数",
      "充放电"
    ],
    "example": "开关闭合后电容电压按指数趋近电源电压。",
    "steps": [
      "复习 10.3 的核心定义/定律",
      "指出它如何进入 11.8 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u11:11.1=>em-u12:12.3": {
    "id": "em-u11:11.1=>em-u12:12.3",
    "source": "em-u11:11.1",
    "target": "em-u12:12.3",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "11.1",
    "targetCode": "12.3",
    "sourceHref": "#/t/em/em-u11/11.1",
    "targetHref": "#/t/em/em-u12/12.3",
    "titleZh": "电流 → 毕奥–萨伐尔定律",
    "summary": "电流元产生磁场，毕奥–萨伐尔定律给出磁场叠加规则。",
    "why": "先有电流定义，再计算电流产生的磁场。",
    "shared": [
      "电流元",
      "磁场叠加"
    ],
    "example": "长直导线周围的磁场呈同心圆分布。",
    "steps": [
      "复习 11.1 的核心定义/定律",
      "指出它如何进入 12.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u11:11.8=>em-u13:13.6": {
    "id": "em-u11:11.8=>em-u13:13.6",
    "source": "em-u11:11.8",
    "target": "em-u13:13.6",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "11.8",
    "targetCode": "13.6",
    "sourceHref": "#/t/em/em-u11/11.8",
    "targetHref": "#/t/em/em-u13/13.6",
    "titleZh": "RC 电路 → LC 电路",
    "summary": "RC 与 LC 都是含储能元件的暂态电路，但 LC 可产生振荡。",
    "why": "把电阻换成交替的能量交换，可比较衰减与振荡。",
    "shared": [
      "暂态",
      "振荡"
    ],
    "example": "理想 LC 回路中电场能与磁场能相互转化。",
    "steps": [
      "复习 11.8 的核心定义/定律",
      "指出它如何进入 13.6 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u12:12.2=>em-u13:13.2": {
    "id": "em-u12:12.2=>em-u13:13.2",
    "source": "em-u12:12.2",
    "target": "em-u13:13.2",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "12.2",
    "targetCode": "13.2",
    "sourceHref": "#/t/em/em-u12/12.2",
    "targetHref": "#/t/em/em-u13/13.2",
    "titleZh": "运动电荷与磁场 → 电磁感应",
    "summary": "导体棒切割磁感线时，洛伦兹力驱动电荷形成动生电动势。",
    "why": "动生电动势是磁场对运动电荷作用的结果。",
    "shared": [
      "动生电动势",
      "洛伦兹力"
    ],
    "example": "导体棒在磁场中滑动使回路产生电流。",
    "steps": [
      "复习 12.2 的核心定义/定律",
      "指出它如何进入 13.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u12:12.3=>em-u13:13.1": {
    "id": "em-u12:12.3=>em-u13:13.1",
    "source": "em-u12:12.3",
    "target": "em-u13:13.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "12.3",
    "targetCode": "13.1",
    "sourceHref": "#/t/em/em-u12/12.3",
    "targetHref": "#/t/em/em-u13/13.1",
    "titleZh": "电流的磁场 → 磁通量",
    "summary": "电流产生的磁场穿过回路形成磁通量，是感应现象的前提。",
    "why": "先会计算电流磁场，再讨论磁通量变化。",
    "shared": [
      "磁场",
      "磁通量"
    ],
    "example": "螺线管电流变化会改变穿过线圈的磁通量。",
    "steps": [
      "复习 12.3 的核心定义/定律",
      "指出它如何进入 13.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "em-u12:12.4=>em-u13:13.4": {
    "id": "em-u12:12.4=>em-u13:13.4",
    "source": "em-u12:12.4",
    "target": "em-u13:13.4",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "12.4",
    "targetCode": "13.4",
    "sourceHref": "#/t/em/em-u12/12.4",
    "targetHref": "#/t/em/em-u13/13.4",
    "titleZh": "安培定律 → 电感",
    "summary": "电感由电流产生的磁通量定义，长螺线管的自感可用安培定律估算。",
    "why": "磁场能量与自感系数通过磁通量联系起来。",
    "shared": [
      "自感",
      "磁通量"
    ],
    "example": "螺线管匝数越多，自感越大。",
    "steps": [
      "复习 12.4 的核心定义/定律",
      "指出它如何进入 13.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  }
};
