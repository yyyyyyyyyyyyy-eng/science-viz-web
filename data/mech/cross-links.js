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
  },
  {
    "source": "mech-prep-hs:P1.2",
    "target": "mech-u1:1.1",
    "type": "connects"
  },
  {
    "source": "mech-prep-hs:P1.5",
    "target": "mech-u2:2.3",
    "type": "connects"
  },
  {
    "source": "mech-prep-hs:P1.6",
    "target": "mech-u2:2.4",
    "type": "connects"
  },
  {
    "source": "mech-prep-hs:P1.10",
    "target": "mech-u4:4.2",
    "type": "connects"
  },
  {
    "source": "mech-prep-hs:P1.11",
    "target": "mech-u5:5.2",
    "type": "connects"
  },
  {
    "source": "mech-prep-ap1:P2.4",
    "target": "mech-u3:3.3",
    "type": "connects"
  },
  {
    "source": "mech-prep-ap1:P2.5",
    "target": "mech-u4:4.2",
    "type": "connects"
  },
  {
    "source": "mech-prep-math:P3.2",
    "target": "mech-u1:1.1",
    "type": "connects"
  },
  {
    "source": "mech-prep-math:P3.3",
    "target": "mech-u3:3.1",
    "type": "connects"
  },
  {
    "source": "mech-prep-math:P3.4",
    "target": "mech-u7:7.1",
    "type": "connects"
  },
  {
    "source": "mech-u1:1.2",
    "target": "mech-u2:2.4",
    "type": "connects"
  },
  {
    "source": "mech-u2:2.6",
    "target": "mech-u6:6.4",
    "type": "connects"
  },
  {
    "source": "mech-u3:3.2",
    "target": "mech-u7:7.1",
    "type": "connects"
  },
  {
    "source": "mech-u3:3.3",
    "target": "mech-u6:6.3",
    "type": "connects"
  },
  {
    "source": "mech-u5:5.1",
    "target": "mech-u7:7.3",
    "type": "connects"
  },
  {
    "source": "mech-u5:5.2",
    "target": "mech-u6:6.3",
    "type": "connects"
  },
  {
    "source": "mech-u5:5.3",
    "target": "mech-u6:6.1",
    "type": "connects"
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
  },
  "mech-prep-hs:P1.2=>mech-u1:1.1": {
    "id": "mech-prep-hs:P1.2=>mech-u1:1.1",
    "source": "mech-prep-hs:P1.2",
    "target": "mech-u1:1.1",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.2",
    "targetCode": "1.1",
    "sourceHref": "#/t/mech/mech-prep-hs/P1.2",
    "targetHref": "#/t/mech/mech-u1/1.1",
    "titleZh": "一维运动学（预备）→ 一维运动学（AP）",
    "summary": "AP 用微积分重新表述位置、速度、加速度关系。",
    "why": "先掌握匀变速公式，再推广到非匀速运动。",
    "shared": [
      "位移",
      "加速度"
    ],
    "example": "由速度图像面积求位移。",
    "steps": [
      "复习 P1.2 的核心定义/定律",
      "指出它如何进入 1.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-hs:P1.5=>mech-u2:2.3": {
    "id": "mech-prep-hs:P1.5=>mech-u2:2.3",
    "source": "mech-prep-hs:P1.5",
    "target": "mech-u2:2.3",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.5",
    "targetCode": "2.3",
    "sourceHref": "#/t/mech/mech-prep-hs/P1.5",
    "targetHref": "#/t/mech/mech-u2/2.3",
    "titleZh": "应用力与摩擦 → 牛顿第一与第二定律",
    "summary": "受力分析、摩擦与自由体图是应用牛顿第二定律的基础。",
    "why": "先会画自由体图，再列合力方程。",
    "shared": [
      "自由体图",
      "摩擦力"
    ],
    "example": "斜面上物块的合力决定加速度。",
    "steps": [
      "复习 P1.5 的核心定义/定律",
      "指出它如何进入 2.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-hs:P1.6=>mech-u2:2.4": {
    "id": "mech-prep-hs:P1.6=>mech-u2:2.4",
    "source": "mech-prep-hs:P1.6",
    "target": "mech-u2:2.4",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.6",
    "targetCode": "2.4",
    "sourceHref": "#/t/mech/mech-prep-hs/P1.6",
    "targetHref": "#/t/mech/mech-u2/2.4",
    "titleZh": "圆周运动（预备）→ 圆周运动（AP）",
    "summary": "向心加速度与向心力的定量关系在 AP 中与牛顿定律结合。",
    "why": "圆周运动是合力指向圆心的典型应用。",
    "shared": [
      "向心加速度",
      "向心力"
    ],
    "example": "绳系小球在水平面内做圆周运动。",
    "steps": [
      "复习 P1.6 的核心定义/定律",
      "指出它如何进入 2.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-hs:P1.10=>mech-u4:4.2": {
    "id": "mech-prep-hs:P1.10=>mech-u4:4.2",
    "source": "mech-prep-hs:P1.10",
    "target": "mech-u4:4.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.10",
    "targetCode": "4.2",
    "sourceHref": "#/t/mech/mech-prep-hs/P1.10",
    "targetHref": "#/t/mech/mech-u4/4.2",
    "titleZh": "动量与碰撞 → 动量守恒与碰撞",
    "summary": "预备课的碰撞分类在 AP 中用冲量、动量守恒与恢复系数分析。",
    "why": "先有动量概念，再处理多体碰撞。",
    "shared": [
      "动量",
      "冲量"
    ],
    "example": "完全非弹性碰撞后两物体共同运动。",
    "steps": [
      "复习 P1.10 的核心定义/定律",
      "指出它如何进入 4.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-hs:P1.11=>mech-u5:5.2": {
    "id": "mech-prep-hs:P1.11=>mech-u5:5.2",
    "source": "mech-prep-hs:P1.11",
    "target": "mech-u5:5.2",
    "type": "connects",
    "typeZh": "先修",
    "sourceCode": "P1.11",
    "targetCode": "5.2",
    "sourceHref": "#/t/mech/mech-prep-hs/P1.11",
    "targetHref": "#/t/mech/mech-u5/5.2",
    "titleZh": "转动入门 → 转动运动学",
    "summary": "角位移、角速度与角加速度在 AP 中形成完整运动学描述。",
    "why": "转动运动学与平动运动学一一对应。",
    "shared": [
      "角速度",
      "角加速度"
    ],
    "example": "匀角加速度下角位移随时间二次变化。",
    "steps": [
      "复习 P1.11 的核心定义/定律",
      "指出它如何进入 5.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-ap1:P2.4=>mech-u3:3.3": {
    "id": "mech-prep-ap1:P2.4=>mech-u3:3.3",
    "source": "mech-prep-ap1:P2.4",
    "target": "mech-u3:3.3",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "P2.4",
    "targetCode": "3.3",
    "sourceHref": "#/t/mech/mech-prep-ap1/P2.4",
    "targetHref": "#/t/mech/mech-u3/3.3",
    "titleZh": "能量系统 → 机械能守恒",
    "summary": "系统边界的选取与能量存储形式决定机械能是否守恒。",
    "why": "先明确系统，再写能量守恒方程。",
    "shared": [
      "系统边界",
      "机械能"
    ],
    "example": "物块沿光滑斜面下滑时机械能守恒。",
    "steps": [
      "复习 P2.4 的核心定义/定律",
      "指出它如何进入 3.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-ap1:P2.5=>mech-u4:4.2": {
    "id": "mech-prep-ap1:P2.5=>mech-u4:4.2",
    "source": "mech-prep-ap1:P2.5",
    "target": "mech-u4:4.2",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "P2.5",
    "targetCode": "4.2",
    "sourceHref": "#/t/mech/mech-prep-ap1/P2.5",
    "targetHref": "#/t/mech/mech-u4/4.2",
    "titleZh": "动量系统 → 动量守恒与碰撞",
    "summary": "系统选择与外力冲量决定动量是否近似守恒。",
    "why": "碰撞问题先判断系统与外力和冲量。",
    "shared": [
      "系统",
      "外力冲量"
    ],
    "example": "水平气垫导轨上两滑块碰撞近似动量守恒。",
    "steps": [
      "复习 P2.5 的核心定义/定律",
      "指出它如何进入 4.2 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-math:P3.2=>mech-u1:1.1": {
    "id": "mech-prep-math:P3.2=>mech-u1:1.1",
    "source": "mech-prep-math:P3.2",
    "target": "mech-u1:1.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "P3.2",
    "targetCode": "1.1",
    "sourceHref": "#/t/mech/mech-prep-math/P3.2",
    "targetHref": "#/t/mech/mech-u1/1.1",
    "titleZh": "导数作为变化率 → 一维运动学",
    "summary": "速度是位置的导数，加速度是速度的导数。",
    "why": "微积分把平均变化率与瞬时变化率区分开。",
    "shared": [
      "瞬时速度",
      "导数"
    ],
    "example": "由位置函数求导得速度函数。",
    "steps": [
      "复习 P3.2 的核心定义/定律",
      "指出它如何进入 1.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-math:P3.3=>mech-u3:3.1": {
    "id": "mech-prep-math:P3.3=>mech-u3:3.1",
    "source": "mech-prep-math:P3.3",
    "target": "mech-u3:3.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "P3.3",
    "targetCode": "3.1",
    "sourceHref": "#/t/mech/mech-prep-math/P3.3",
    "targetHref": "#/t/mech/mech-u3/3.1",
    "titleZh": "积分作为累积 → 动能定理",
    "summary": "功是力沿位移的累积，积分给出变力做功。",
    "why": "动能定理把合功与动能变化联系起来。",
    "shared": [
      "功的积分",
      "动能"
    ],
    "example": "弹簧弹力做功可用力对位移积分。",
    "steps": [
      "复习 P3.3 的核心定义/定律",
      "指出它如何进入 3.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-prep-math:P3.4=>mech-u7:7.1": {
    "id": "mech-prep-math:P3.4=>mech-u7:7.1",
    "source": "mech-prep-math:P3.4",
    "target": "mech-u7:7.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "P3.4",
    "targetCode": "7.1",
    "sourceHref": "#/t/mech/mech-prep-math/P3.4",
    "targetHref": "#/t/mech/mech-u7/7.1",
    "titleZh": "微分方程直觉 → 周期运动",
    "summary": "简谐运动满足加速度与位移反向成正比的微分方程。",
    "why": "微分方程的解给出正弦或余弦运动。",
    "shared": [
      "简谐运动",
      "回复力"
    ],
    "example": "弹簧振子的运动方程由牛顿第二定律得到。",
    "steps": [
      "复习 P3.4 的核心定义/定律",
      "指出它如何进入 7.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u1:1.2=>mech-u2:2.4": {
    "id": "mech-u1:1.2=>mech-u2:2.4",
    "source": "mech-u1:1.2",
    "target": "mech-u2:2.4",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "1.2",
    "targetCode": "2.4",
    "sourceHref": "#/t/mech/mech-u1/1.2",
    "targetHref": "#/t/mech/mech-u2/2.4",
    "titleZh": "二维运动学 → 圆周运动",
    "summary": "把加速度分解为切向与法向后可描述圆周运动。",
    "why": "二维运动学为向心加速度提供分解视角。",
    "shared": [
      "切向加速度",
      "法向加速度"
    ],
    "example": "匀速圆周运动只有法向加速度。",
    "steps": [
      "复习 1.2 的核心定义/定律",
      "指出它如何进入 2.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u2:2.6=>mech-u6:6.4": {
    "id": "mech-u2:2.6=>mech-u6:6.4",
    "source": "mech-u2:2.6",
    "target": "mech-u6:6.4",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "2.6",
    "targetCode": "6.4",
    "sourceHref": "#/t/mech/mech-u2/2.6",
    "targetHref": "#/t/mech/mech-u6/6.4",
    "titleZh": "万有引力 → 轨道",
    "summary": "万有引力提供向心力，决定卫星与行星的轨道。",
    "why": "轨道半径与速度通过引力方程联系。",
    "shared": [
      "向心力",
      "轨道半径"
    ],
    "example": "近地卫星的周期由轨道半径决定。",
    "steps": [
      "复习 2.6 的核心定义/定律",
      "指出它如何进入 6.4 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u3:3.2=>mech-u7:7.1": {
    "id": "mech-u3:3.2=>mech-u7:7.1",
    "source": "mech-u3:3.2",
    "target": "mech-u7:7.1",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "3.2",
    "targetCode": "7.1",
    "sourceHref": "#/t/mech/mech-u3/3.2",
    "targetHref": "#/t/mech/mech-u7/7.1",
    "titleZh": "力与势能 → 周期运动",
    "summary": "势能曲线在平衡点附近的形状决定小振动频率。",
    "why": "回复力是势能对位移导数的负值。",
    "shared": [
      "势能曲线",
      "平衡点"
    ],
    "example": "弹簧势能在平衡点附近近似抛物线。",
    "steps": [
      "复习 3.2 的核心定义/定律",
      "指出它如何进入 7.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u3:3.3=>mech-u6:6.3": {
    "id": "mech-u3:3.3=>mech-u6:6.3",
    "source": "mech-u3:3.3",
    "target": "mech-u6:6.3",
    "type": "connects",
    "typeZh": "考点联结",
    "sourceCode": "3.3",
    "targetCode": "6.3",
    "sourceHref": "#/t/mech/mech-u3/3.3",
    "targetHref": "#/t/mech/mech-u6/6.3",
    "titleZh": "机械能守恒 → 滚动",
    "summary": "无滑滚动时重力势能转化为平动与转动动能。",
    "why": "用能量守恒可避免直接处理摩擦力矩。",
    "shared": [
      "平动动能",
      "转动动能"
    ],
    "example": "圆柱从斜面滚下时总动能包含两项。",
    "steps": [
      "复习 3.3 的核心定义/定律",
      "指出它如何进入 6.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u5:5.1=>mech-u7:7.3": {
    "id": "mech-u5:5.1=>mech-u7:7.3",
    "source": "mech-u5:5.1",
    "target": "mech-u7:7.3",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "5.1",
    "targetCode": "7.3",
    "sourceHref": "#/t/mech/mech-u5/5.1",
    "targetHref": "#/t/mech/mech-u7/7.3",
    "titleZh": "力矩与静力学 → 复摆",
    "summary": "复摆绕固定轴摆动，其运动由重力矩与转动惯量决定。",
    "why": "把力矩方程用于非质点刚体。",
    "shared": [
      "重力矩",
      "转动惯量"
    ],
    "example": "细杆绕一端摆动周期依赖其转动惯量。",
    "steps": [
      "复习 5.1 的核心定义/定律",
      "指出它如何进入 7.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u5:5.2=>mech-u6:6.3": {
    "id": "mech-u5:5.2=>mech-u6:6.3",
    "source": "mech-u5:5.2",
    "target": "mech-u6:6.3",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "5.2",
    "targetCode": "6.3",
    "sourceHref": "#/t/mech/mech-u5/5.2",
    "targetHref": "#/t/mech/mech-u6/6.3",
    "titleZh": "转动运动学 → 滚动",
    "summary": "无滑滚动满足线速度与角速度的约束关系。",
    "why": "转动运动学给出滚动中平动与转动的联系。",
    "shared": [
      "线速度",
      "角速度"
    ],
    "example": "车轮无滑滚动时接触点瞬时速度为零。",
    "steps": [
      "复习 5.2 的核心定义/定律",
      "指出它如何进入 6.3 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  },
  "mech-u5:5.3=>mech-u6:6.1": {
    "id": "mech-u5:5.3=>mech-u6:6.1",
    "source": "mech-u5:5.3",
    "target": "mech-u6:6.1",
    "type": "connects",
    "typeZh": "同概念",
    "sourceCode": "5.3",
    "targetCode": "6.1",
    "sourceHref": "#/t/mech/mech-u5/5.3",
    "targetHref": "#/t/mech/mech-u6/6.1",
    "titleZh": "转动动力学与能量 → 转动动能",
    "summary": "力矩做功改变转动动能，转动惯量类比质量。",
    "why": "转动动力学为转动动能定理提供基础。",
    "shared": [
      "力矩",
      "转动惯量"
    ],
    "example": "飞轮制动时摩擦力矩消耗转动动能。",
    "steps": [
      "复习 5.3 的核心定义/定律",
      "指出它如何进入 6.1 的推导或模型",
      "完成一道同时用到二者的小题并自检"
    ]
  }
};
