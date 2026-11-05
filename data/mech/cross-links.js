/** Curated cross-topic links for mech map */
export const CROSS_EDGES = [
  {
    "source": "mech-u3:3.1",
    "target": "mech-prep-hs:P1.8",
    "type": "connects"
  },
  {
    "source": "mech-u3:3.2",
    "target": "mech-prep-hs:P1.9",
    "type": "connects"
  },
  {
    "source": "mech-u1:1.1",
    "target": "mech-prep-hs:P1.3",
    "type": "connects"
  },
  {
    "source": "mech-u2:2.3",
    "target": "mech-prep-hs:P1.4",
    "type": "connects"
  },
  {
    "source": "mech-u4:4.1",
    "target": "mech-u4:4.2",
    "type": "connects"
  },
  {
    "source": "mech-u3:3.1",
    "target": "mech-u6:6.1",
    "type": "connects"
  },
  {
    "source": "mech-u2:2.6",
    "target": "mech-prep-hs:P1.7",
    "type": "connects"
  },
  {
    "source": "mech-u7:7.1",
    "target": "mech-prep-hs:P1.12",
    "type": "connects"
  },
  {
    "source": "mech-u3:3.4",
    "target": "mech-u3:3.1",
    "type": "connects"
  },
  {
    "source": "mech-u6:6.2",
    "target": "mech-u4:4.2",
    "type": "connects"
  },
  {
    "source": "mech-prep-hs:P1.8",
    "target": "mech-u3:3.1",
    "type": "prerequisite"
  }
];
export const CROSS_RELATIONS = {
  "mech-u3:3.1=>mech-prep-hs:P1.8": {
    "id": "mech-u3:3.1=>mech-prep-hs:P1.8",
    "source": "mech-u3:3.1",
    "target": "mech-prep-hs:P1.8",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.1",
    "targetCode": "P1.8",
    "sourceHref": "#/t/mech/mech-u3/3.1",
    "targetHref": "#/t/mech/mech-prep-hs/P1.8",
    "titleZh": "动能定理 → 功与动能",
    "summary": "动能定理 W_net=ΔK 把功与动能变化定量联系起来。",
    "why": "功是力沿位移的积分（或点积累积）。",
    "shared": [
      "净功",
      "ΔK"
    ],
    "example": "恒力做功 W=Fd cosθ 导致速率变化。",
    "steps": [
      "复习 3.1 的核心定义/定律",
      "指出它如何进入 P1.8 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u3:3.2=>mech-prep-hs:P1.9": {
    "id": "mech-u3:3.2=>mech-prep-hs:P1.9",
    "source": "mech-u3:3.2",
    "target": "mech-prep-hs:P1.9",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.2",
    "targetCode": "P1.9",
    "sourceHref": "#/t/mech/mech-u3/3.2",
    "targetHref": "#/t/mech/mech-prep-hs/P1.9",
    "titleZh": "力与势能 → 势能与守恒",
    "summary": "保守力定义势能；机械能守恒是势能+动能在只有保守力时恒定。",
    "why": "重力/弹簧力可引入 U。",
    "shared": [
      "保守力",
      "机械能"
    ],
    "example": "自由落体 mgh 转化为 ½mv²。",
    "steps": [
      "复习 3.2 的核心定义/定律",
      "指出它如何进入 P1.9 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u1:1.1=>mech-prep-hs:P1.3": {
    "id": "mech-u1:1.1=>mech-prep-hs:P1.3",
    "source": "mech-u1:1.1",
    "target": "mech-prep-hs:P1.3",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "1.1",
    "targetCode": "P1.3",
    "sourceHref": "#/t/mech/mech-u1/1.1",
    "targetHref": "#/t/mech/mech-prep-hs/P1.3",
    "titleZh": "一维运动学 → 抛体",
    "summary": "抛体水平与竖直分量各自用一维运动学方程。",
    "why": "加速度分解：水平近似 0，竖直为 g。",
    "shared": [
      "分量运动",
      "匀变速公式"
    ],
    "example": "射程公式来自竖直运动时间与水平匀速。",
    "steps": [
      "复习 1.1 的核心定义/定律",
      "指出它如何进入 P1.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u2:2.3=>mech-prep-hs:P1.4": {
    "id": "mech-u2:2.3=>mech-prep-hs:P1.4",
    "source": "mech-u2:2.3",
    "target": "mech-prep-hs:P1.4",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "2.3",
    "targetCode": "P1.4",
    "sourceHref": "#/t/mech/mech-u2/2.3",
    "targetHref": "#/t/mech/mech-prep-hs/P1.4",
    "titleZh": "牛顿定律（AP）→ 牛顿定律（预备）",
    "summary": "ΣF=ma 贯穿预备与 AP；AP 更强调系统与多体。",
    "why": "自由体图是共同工具。",
    "shared": [
      "ΣF=ma",
      "自由体图"
    ],
    "example": "斜面物块加速度 g sinθ（光滑）。",
    "steps": [
      "复习 2.3 的核心定义/定律",
      "指出它如何进入 P1.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u4:4.1=>mech-u4:4.2": {
    "id": "mech-u4:4.1=>mech-u4:4.2",
    "source": "mech-u4:4.1",
    "target": "mech-u4:4.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "4.1",
    "targetCode": "4.2",
    "sourceHref": "#/t/mech/mech-u4/4.1",
    "targetHref": "#/t/mech/mech-u4/4.2",
    "titleZh": "冲量与动量 → 动量守恒",
    "summary": "冲量等于动量变化；内力冲量抵消时系统总动量守恒。",
    "why": "碰撞分析的出发点。",
    "shared": [
      "J=Δp",
      "孤立系统"
    ],
    "example": "一维弹性碰撞联立动量与动能守恒。",
    "steps": [
      "复习 4.1 的核心定义/定律",
      "指出它如何进入 4.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u3:3.1=>mech-u6:6.1": {
    "id": "mech-u3:3.1=>mech-u6:6.1",
    "source": "mech-u3:3.1",
    "target": "mech-u6:6.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.1",
    "targetCode": "6.1",
    "sourceHref": "#/t/mech/mech-u3/3.1",
    "targetHref": "#/t/mech/mech-u6/6.1",
    "titleZh": "动能定理 → 转动动能",
    "summary": "平动动能 ½mv²；转动动能 ½Iω²；滚动是二者之和。",
    "why": "力矩做功改变转动动能。",
    "shared": [
      "I",
      "ω"
    ],
    "example": "圆盘无滑滚动总动能 ½mv²+½Iω²。",
    "steps": [
      "复习 3.1 的核心定义/定律",
      "指出它如何进入 6.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u2:2.6=>mech-prep-hs:P1.7": {
    "id": "mech-u2:2.6=>mech-prep-hs:P1.7",
    "source": "mech-u2:2.6",
    "target": "mech-prep-hs:P1.7",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "2.6",
    "targetCode": "P1.7",
    "sourceHref": "#/t/mech/mech-u2/2.6",
    "targetHref": "#/t/mech/mech-prep-hs/P1.7",
    "titleZh": "万有引力（AP）→ 万有引力入门",
    "summary": "F=Gm₁m₂/r² 与轨道运动、势能 −Gm₁m₂/r。",
    "why": "圆形轨道向心力由万有引力提供。",
    "shared": [
      "逆平方力",
      "轨道"
    ],
    "example": "近地卫星周期与轨道半径关系。",
    "steps": [
      "复习 2.6 的核心定义/定律",
      "指出它如何进入 P1.7 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u7:7.1=>mech-prep-hs:P1.12": {
    "id": "mech-u7:7.1=>mech-prep-hs:P1.12",
    "source": "mech-u7:7.1",
    "target": "mech-prep-hs:P1.12",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "7.1",
    "targetCode": "P1.12",
    "sourceHref": "#/t/mech/mech-u7/7.1",
    "targetHref": "#/t/mech/mech-prep-hs/P1.12",
    "titleZh": "周期运动 → 简谐运动",
    "summary": "简谐运动是周期运动的重要模型：a=−ω²x。",
    "why": "弹簧与单摆小角度近似。",
    "shared": [
      "回复力",
      "周期 T=2π/ω"
    ],
    "example": "弹簧振子能量在 K 与 U 间转换。",
    "steps": [
      "复习 7.1 的核心定义/定律",
      "指出它如何进入 P1.12 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u3:3.4=>mech-u3:3.1": {
    "id": "mech-u3:3.4=>mech-u3:3.1",
    "source": "mech-u3:3.4",
    "target": "mech-u3:3.1",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "3.4",
    "targetCode": "3.1",
    "sourceHref": "#/t/mech/mech-u3/3.4",
    "targetHref": "#/t/mech/mech-u3/3.1",
    "titleZh": "功率 → 动能定理",
    "summary": "功率 P=dW/dt；净功仍联系 ΔK。",
    "why": "瞬时功率 F·v。",
    "shared": [
      "功率",
      "功"
    ],
    "example": "恒力加速时 P 随 v 增大。",
    "steps": [
      "复习 3.4 的核心定义/定律",
      "指出它如何进入 3.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u6:6.2=>mech-u4:4.2": {
    "id": "mech-u6:6.2=>mech-u4:4.2",
    "source": "mech-u6:6.2",
    "target": "mech-u4:4.2",
    "type": "connects",
    "typeZh": "联结",
    "sourceCode": "6.2",
    "targetCode": "4.2",
    "sourceHref": "#/t/mech/mech-u6/6.2",
    "targetHref": "#/t/mech/mech-u4/4.2",
    "titleZh": "角动量 → 线动量守恒（类比）",
    "summary": "线动量守恒与角动量守恒分别对应平动/转动的孤立系统对称性。",
    "why": "冲量矩等于角动量变化，类比 J=Δp。",
    "shared": [
      "L=Iω",
      "τ_net=dL/dt"
    ],
    "example": "无外力矩时花样滑冰收臂角速度增大。",
    "steps": [
      "复习 6.2 的核心定义/定律",
      "指出它如何进入 4.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-hs:P1.8=>mech-u3:3.1": {
    "id": "mech-prep-hs:P1.8=>mech-u3:3.1",
    "source": "mech-prep-hs:P1.8",
    "target": "mech-u3:3.1",
    "type": "prerequisite",
    "typeZh": "先修",
    "sourceCode": "P1.8",
    "targetCode": "3.1",
    "sourceHref": "#/t/mech/mech-prep-hs/P1.8",
    "targetHref": "#/t/mech/mech-u3/3.1",
    "titleZh": "功与动能 → 动能定理",
    "summary": "预备课建立 W 与 K 的关系，AP 正式写成动能定理并用于多力系统。",
    "why": "需要功的定义与动能表达式。",
    "shared": [
      "功",
      "动能"
    ],
    "example": "计算变力近似功再比 ΔK。",
    "steps": [
      "复习 P1.8 的核心定义/定律",
      "指出它如何进入 3.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  }
};
