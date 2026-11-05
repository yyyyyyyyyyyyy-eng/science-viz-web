/** Build year-specific FRQ index from verified PDF extractions (paraphrases original). */
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const HUB = {
  bio: 'https://apcentral.collegeboard.org/courses/ap-biology/exam/past-exam-questions',
  math: 'https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam/past-exam-questions',
  mathAb: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam/past-exam-questions',
  mech: 'https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam/past-exam-questions',
  em: 'https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/exam/past-exam-questions',
};

const VERIFIED = {
  'bio-2023-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-biology.pdf',
  'bio-2023-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-biology.pdf',
  'bio-2024-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-biology.pdf',
  'bio-2024-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-biology.pdf',
  'bio-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-biology.pdf',
  'bio-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-biology.pdf',
  'bio-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-biology.pdf',
  'bio-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-biology.pdf',
  'math-2023-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-bc.pdf',
  'math-2023-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-calculus-bc.pdf',
  'math-2024-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-bc.pdf',
  'math-2024-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-calculus-bc.pdf',
  'math-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-bc.pdf',
  'math-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-calculus-bc.pdf',
  'math-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-calculus-bc.pdf',
  'math-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-calculus-bc.pdf',
  'mathAb-2023-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-ab.pdf',
  'mathAb-2023-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-calculus-ab.pdf',
  'mathAb-2024-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-ab.pdf',
  'mathAb-2024-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-calculus-ab.pdf',
  'mathAb-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-ab.pdf',
  'mathAb-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-calculus-ab.pdf',
  'mathAb-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-calculus-ab.pdf',
  'mathAb-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-calculus-ab.pdf',
  'mech-2023-s1-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-mechanics-set-1.pdf',
  'mech-2023-s1-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-physics-c-mech-set-1.pdf',
  'mech-2023-s2-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-mechanics-set-2.pdf',
  'mech-2023-s2-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-physics-c-mech-set-2.pdf',
  'mech-2024-s1-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-mech-set-1.pdf',
  'mech-2024-s1-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-physics-c-mech-set-1.pdf',
  'mech-2024-s2-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-mech-set-2.pdf',
  'mech-2024-s2-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-physics-c-mech-set-2.pdf',
  'mech-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-c-mech.pdf',
  'mech-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-physics-c-mech.pdf',
  'mech-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-physics-c-mech.pdf',
  'mech-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-physics-c-mech.pdf',
  'em-2023-s1-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-em-set-1.pdf',
  'em-2023-s1-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-physics-c-em-set-1.pdf',
  'em-2023-s2-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-em-set-2.pdf',
  'em-2023-s2-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-physics-c-em-set-2.pdf',
  'em-2024-s1-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-em-set-1.pdf',
  'em-2024-s1-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-physics-c-em-set-1.pdf',
  'em-2024-s2-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-em-set-2.pdf',
  'em-2024-s2-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-physics-c-em-set-2.pdf',
  'em-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-c-em.pdf',
  'em-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-physics-c-em.pdf',
  'em-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-physics-c-em.pdf',
  'em-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-physics-c-em.pdf',
};

/** Year-specific original paraphrases from PDF review (not CB wording) */
const DATA = {
  bio: {
    2023: [
      { q:1, paraphrase:'分析真核微生物 PHO 信号通路如何调控基因表达，并结合实验数据论证。', topics:['bio-u6:6.1','bio-u6:6.5','bio-u4:4.1'], parts:['a','b','c','d'], difficulty:'难' },
      { q:2, paraphrase:'升高 CO₂ 对光合作用与植物生长的影响；解读实验并评价设计。', topics:['bio-u3:3.4','bio-u3:3.5','bio-u8:8.7'], parts:['a','b','c','d'], difficulty:'难' },
      { q:3, paraphrase:'沙鳗作为沿海关键种的角色与生态数据解读。', topics:['bio-u8:8.5','bio-u8:8.6'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'比较光反应中非循环与循环电子流的路径与产物。', topics:['bio-u3:3.4','bio-u3:3.5'], parts:['a','b','c'], difficulty:'中' },
      { q:5, paraphrase:'反刍动物四腔胃相关微生物/消化过程的概念分析。', topics:['bio-u2:2.1','bio-u8:8.2'], parts:['a','b','c'], difficulty:'中' },
      { q:6, paraphrase:'管家基因编码普遍过程蛋白；联系转录/翻译调控。', topics:['bio-u6:6.2','bio-u6:6.3'], parts:['a','b','c'], difficulty:'中' },
    ],
    2024: [
      { q:1, paraphrase:'减数第一次分裂交叉互换对同源染色体中期排列的必要性及相关遗传分析。', topics:['bio-u5:5.1','bio-u5:5.2'], parts:['a','b','c','d'], difficulty:'难' },
      { q:2, paraphrase:'环境升温对某些生物代谢率影响的实验数据分析与论证。', topics:['bio-u3:3.1','bio-u8:8.1'], parts:['a','b','c','d'], difficulty:'难' },
      { q:3, paraphrase:'红细胞从环境摄取葡萄糖能力是否随条件改变的探究题。', topics:['bio-u2:2.4','bio-u2:2.5'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'野燕麦在加州中部作为入侵种的生态/进化分析。', topics:['bio-u8:8.7','bio-u7:7.10'], parts:['a','b','c'], difficulty:'中' },
      { q:5, paraphrase:'促进或阻碍物种形成的机制研究题。', topics:['bio-u7:7.10','bio-u7:7.5'], parts:['a','b','c'], difficulty:'中' },
      { q:6, paraphrase:'核糖体沿 mRNA 密码子移动时翻译速率的量化讨论。', topics:['bio-u6:6.2','bio-u6:6.3'], parts:['a','b','c'], difficulty:'中' },
    ],
    2025: [
      { q:1, paraphrase:'分泌蛋白转运至内质网（共翻译/翻译后）及核糖体功能相关长题。', topics:['bio-u2:2.1','bio-u6:6.2'], parts:['a','b','c','d'], difficulty:'难' },
      { q:2, paraphrase:'昆虫信息素与 20E/DopEcR 信号影响定向活动的实验图/表分析。', topics:['bio-u4:4.1','bio-u4:4.2'], parts:['a','b','c','d'], difficulty:'难' },
      { q:3, paraphrase:'西南沙漠入侵草（buffelgrass）对本地生态的威胁与数据解读。', topics:['bio-u8:8.7','bio-u8:8.5'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'加勒比海与太平洋曾连通背景下的物种分化/地理隔离题。', topics:['bio-u7:7.10','bio-u7:7.6'], parts:['a','b','c'], difficulty:'中' },
      { q:5, paraphrase:'由前体合成氨基酸 B 的代谢通路图分析（酶与中间物）。', topics:['bio-u3:3.1','bio-u6:6.5'], parts:['a','b','c'], difficulty:'中' },
      { q:6, paraphrase:'果蝇 ald 基因编码 ALD 蛋白及其细胞定位/功能关联。', topics:['bio-u6:6.1','bio-u6:6.4'], parts:['a','b','c'], difficulty:'中' },
    ],
    2026: [
      { q:1, paraphrase:'二核苷多磷酸盐作为信号分子的细胞过程分析。', topics:['bio-u4:4.1','bio-u1:1.4'], parts:['a','b','c','d'], difficulty:'难' },
      { q:2, paraphrase:'真核细胞 siRNA 调控基因表达的机制与实验推理。', topics:['bio-u6:6.5','bio-u6:6.6'], parts:['a','b','c','d'], difficulty:'难' },
      { q:3, paraphrase:'氰化物抑制细胞色素 c 氧化酶（CCO）对呼吸链的影响。', topics:['bio-u3:3.3','bio-u3:3.2'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'减数分裂产生配子过程与变异来源的概念题。', topics:['bio-u5:5.1','bio-u5:5.2'], parts:['a','b','c'], difficulty:'中' },
      { q:5, paraphrase:'加勒比安乐蜥趾垫与生态位/适应相关分析。', topics:['bio-u7:7.1','bio-u7:7.5'], parts:['a','b','c'], difficulty:'中' },
      { q:6, paraphrase:'非洲猛禽作为顶级捕食者与关键种的生态作用。', topics:['bio-u8:8.5','bio-u8:8.6'], parts:['a','b','c'], difficulty:'中' },
    ],
  },
  math: {
    2023: [
      { q:1, paraphrase:'加油站加油流量率模型：用表/函数求变化率、积分与解释。', topics:['calc-u2:2.1','calc-u6:6.1','calc-u4:4.1'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:2, paraphrase:'平面曲线上粒子运动：位置函数与速度/加速度分析。', topics:['calc-u9:9.1','calc-u4:4.2'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:3, paraphrase:'牛奶升温微分方程模型：解 DE 或解释斜率场相关量。', topics:['calc-u7:7.1','calc-u7:7.3'], parts:['a','b','c','d'], difficulty:'难', abShared:true },
      { q:4, paraphrase:'由 f′ 图像分析 f 的极值、凹凸与积分关系。', topics:['calc-u5:5.1','calc-u5:3'], parts:['a','b','c'], difficulty:'中', abShared:true },
      { q:5, paraphrase:'给定 f、g 图像与 g 的解析式，做复合/面积/积分计算。', topics:['calc-u6:6.1','calc-u8:8.1'], parts:['a','b','c'], difficulty:'难', abShared:false },
      { q:6, paraphrase:'全阶可导函数的泰勒/麦克劳林相关：系数、逼近与误差。', topics:['calc-u10:10.1','calc-u10:10.5'], parts:['a','b','c'], difficulty:'难', abShared:false },
    ],
    2024: [
      { q:1, paraphrase:'杯中咖啡温度表：估计导数、左黎曼和、后续 C′ 模型求温与凹性。', topics:['calc-u2:2.1','calc-u6:6.1','calc-u5:5.3'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:2, paraphrase:'xy 平面曲线上粒子：速度分量、速率、切线与位置。', topics:['calc-u9:9.1','calc-u4:4.2'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:3, paraphrase:'海水深度满足微分方程的模型：平衡解、特解与长期行为。', topics:['calc-u7:7.1','calc-u7:7.5'], parts:['a','b','c','d'], difficulty:'难', abShared:true },
      { q:4, paraphrase:'可微函数 f 的图像：水平切线、积分与函数值关系。', topics:['calc-u5:5.1','calc-u8:8.1'], parts:['a','b','c'], difficulty:'中', abShared:true },
      { q:5, paraphrase:'二阶可微 f 与 f′ 数值表：近似、极值与极限。', topics:['calc-u5:5.2','calc-u2:2.3'], parts:['a','b','c'], difficulty:'难', abShared:false },
      { q:6, paraphrase:'麦克劳林级数收敛区间内求 f 性质与逼近。', topics:['calc-u10:10.1','calc-u10:10.5'], parts:['a','b','c'], difficulty:'难', abShared:false },
    ],
    2025: [
      { q:1, paraphrase:'果园入侵植物扩散：C(t)=7.6 arctan(0.2t) 亩数模型，求导/积分/解释。', topics:['calc-u3:3.1','calc-u4:4.1','calc-u6:6.1'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:2, paraphrase:'极坐标曲线 r=2 sin²θ 与半圆围成区域的面积/交点。', topics:['calc-u9:9.3','calc-u9:9.4'], parts:['a','b','c','d'], difficulty:'难', abShared:false },
      { q:3, paraphrase:'学生阅读书籍 0–10 分钟的速率模型：积分求页数与平均。', topics:['calc-u6:6.1','calc-u8:8.1'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:4, paraphrase:'闭区间上连续 f 的图像：极值、积分与中值相关。', topics:['calc-u5:5.1','calc-u5:5.4'], parts:['a','b','c'], difficulty:'中', abShared:true },
      { q:5, paraphrase:'微分方程特解 y=f(x) 的斜率场/分离变量分析。', topics:['calc-u7:7.1','calc-u7:7.3'], parts:['a','b','c'], difficulty:'难', abShared:true },
      { q:6, paraphrase:'关于 x=4 的泰勒级数：系数、收敛与逼近误差。', topics:['calc-u10:10.2','calc-u10:10.5'], parts:['a','b','c'], difficulty:'难', abShared:false },
    ],
    2026: [
      { q:1, paraphrase:'雄鸟抵达筑巢区三十日速率模型：积分、平均与解释。', topics:['calc-u6:6.1','calc-u4:4.1'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:2, paraphrase:'极坐标曲线围成阴影区域的面积计算。', topics:['calc-u9:9.4','calc-u9:9.1'], parts:['a','b','c','d'], difficulty:'难', abShared:false },
      { q:3, paraphrase:'馅饼出炉后内部温度随时间变化的模型（表或 DE）。', topics:['calc-u7:7.1','calc-u2:2.1'], parts:['a','b','c','d'], difficulty:'中', abShared:true },
      { q:4, paraphrase:'二阶可微 f 在闭区间上：由 f′ 图像推断 f 性态。', topics:['calc-u5:5.1','calc-u5:5.3'], parts:['a','b','c'], difficulty:'中', abShared:true },
      { q:5, paraphrase:'定义 f(x)=3x−1 与 g 的复合/反函数/积分关系。', topics:['calc-u3:3.3','calc-u6:6.1'], parts:['a','b','c'], difficulty:'难', abShared:true },
      { q:6, paraphrase:'函数 g 的麦克劳林级数：项、收敛半径与逼近。', topics:['calc-u10:10.1','calc-u10:10.5'], parts:['a','b','c'], difficulty:'难', abShared:false },
    ],
  },
  mech: {
    '2023-1': [
      { q:1, paraphrase:'水平面物块压缩墙边弹簧 P 后释放：能量、受力与运动分析。', topics:['mech-u3:3.1','mech-u2:2.3','mech-u7:7.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'轻线悬挂匀质圆盘构成扭摆：周期与转动惯量。', topics:['mech-u5:5.3','mech-u7:7.1'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'水平面上静止小球与匀质杆碰撞/相互作用系统。', topics:['mech-u4:4.1','mech-u5:5.3'], parts:['a','b','c'], difficulty:'难' },
    ],
    '2023-2': [
      { q:1, paraphrase:'新泡沫材料：小车质量与碰撞/能量实验探究材料性质。', topics:['mech-u4:4.1','mech-u3:3.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'物块与 N 个弹簧系统周期 T 与 N 关系的实验设计。', topics:['mech-u7:7.1','mech-u3:3.2'], parts:['a','b','c'], difficulty:'中' },
      { q:3, paraphrase:'三叶片风力发电机绕轴转动的转动动力学。', topics:['mech-u5:5.3','mech-u6:6.1'], parts:['a','b','c'], difficulty:'难' },
    ],
    '2024-1': [
      { q:1, paraphrase:'质量 m 与 3m 的物块与理想弹簧组合装置的动力学/能量。', topics:['mech-u2:2.3','mech-u3:3.1','mech-u7:7.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'圆柱体下落受空气阻力 F_drag 的运动模型。', topics:['mech-u1:1.1','mech-u2:2.3'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'竖直杆上枢接匀质杆的转动与力矩分析。', topics:['mech-u5:5.1','mech-u5:3'], parts:['a','b','c'], difficulty:'难' },
    ],
    '2024-2': [
      { q:1, paraphrase:'斜面角 θ 与光滑桌面上质量 2m、m 物块系统。', topics:['mech-u2:2.3','mech-u3:3.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'球体下落空气阻力模型与实验对比。', topics:['mech-u1:1.1','mech-u2:2.3'], parts:['a','b','c'], difficulty:'中' },
      { q:3, paraphrase:'竖直轴上水平轴支撑的匀质圆盘转动摩擦与动力学。', topics:['mech-u5:5.3','mech-u6:6.1'], parts:['a','b','c'], difficulty:'难' },
    ],
    2025: [
      { q:1, paraphrase:'两滑块相向水平滑动的碰撞/动量与能量分析。', topics:['mech-u4:4.1','mech-u3:3.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'两弹簧 A、B 与质量 m 物块系统在水平面静平衡/振动。', topics:['mech-u7:7.1','mech-u3:3.2'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'轻杆一端接轻箱，另一端约束下的转动/平动耦合。', topics:['mech-u5:5.3','mech-u2:2.3'], parts:['a','b','c'], difficulty:'难' },
      { q:4, paraphrase:'同质量同半径圆盘与圆环无滑动滚动比较。', topics:['mech-u6:6.1','mech-u5:5.3'], parts:['a','b','c'], difficulty:'中' },
    ],
    2026: [
      { q:1, paraphrase:'水平面大箱滑行，其上小立方体相对运动与摩擦。', topics:['mech-u2:2.3','mech-u1:1.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'总质量 4M 抛体自地面发射的运动学/能量。', topics:['mech-u1:1.2','mech-u3:3.1'], parts:['a','b','c'], difficulty:'中' },
      { q:3, paraphrase:'已知 k 的水平弹簧与质量 m 物块的振动/能量。', topics:['mech-u7:7.1','mech-u3:3.2'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'独轮车轮悬空支架上的转动惯量与角运动。', topics:['mech-u5:5.3','mech-u6:6.1'], parts:['a','b','c'], difficulty:'难' },
    ],
  },
  em: {
    '2023-1': [
      { q:1, paraphrase:'用非导电带电球实验测定真空介电常量 ε₀。', topics:['em-u8:8.1','em-u8:8.5'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'平行导轨间距 L、电阻与滑动杆的感应电动势/电流。', topics:['em-u13:13.1','em-u13:13.2'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'电池、两电阻、两电容与开关组成的暂态电路。', topics:['em-u11:11.3','em-u11:11.8'], parts:['a','b','c'], difficulty:'难' },
    ],
    '2023-2': [
      { q:1, paraphrase:'带 +q 绝缘球实验测定 ε₀ 的变体装置。', topics:['em-u8:8.1','em-u8:8.2'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'间距 d 的平行导轨与 R=0.20Ω、滑动杆的感应电路。', topics:['em-u13:13.1','em-u11:11.3'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'含理想电池、两 R、两 C 与开关的电路分析。', topics:['em-u11:11.8','em-u10:10.3'], parts:['a','b','c'], difficulty:'难' },
    ],
    '2024-1': [
      { q:1, paraphrase:'均匀线电荷密度非导电杆与 −2.0 nC 球的静电场/力。', topics:['em-u8:8.2','em-u8:8.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'两相同电阻并联接电池：测电阻的实验设计。', topics:['em-u11:11.3','em-u11:11.4'], parts:['a','b','c'], difficulty:'中' },
      { q:3, paraphrase:'刚性矩形线框（宽 L 高 2L）在外力下的电磁感应。', topics:['em-u13:13.1','em-u13:13.3'], parts:['a','b','c'], difficulty:'难' },
    ],
    '2024-2': [
      { q:1, paraphrase:'负均匀线电荷密度杆与 +1.0 nC 球的场与电势。', topics:['em-u8:8.2','em-u9:9.2'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'两相同电阻串联接电池测 R 的实验。', topics:['em-u11:11.3','em-u11:11.4'], parts:['a','b','c'], difficulty:'中' },
      { q:3, paraphrase:'边长 D 的刚性正方形线框在外力下的感应。', topics:['em-u13:13.1','em-u12:12.1'], parts:['a','b','c'], difficulty:'难' },
    ],
    2025: [
      { q:1, paraphrase:'孤立空气介质同轴圆柱壳电容器的电场与电容。', topics:['em-u10:10.3','em-u8:8.5'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'面积 A、电阻 R 的旋转圆形导线圈在匀强磁场中的感应。', topics:['em-u13:13.1','em-u12:12.1'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'用图像法测定电路元件电阻率的实验题。', topics:['em-u11:11.3','em-u11:11.2'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'相距 2d、等流反向的长平行导线 S、T 的磁场。', topics:['em-u12:12.3','em-u12:12.1'], parts:['a','b','c'], difficulty:'中' },
    ],
    2026: [
      { q:1, paraphrase:'平行 y 轴的两长圆柱载流导线的磁场叠加。', topics:['em-u12:12.3','em-u12:12.1'], parts:['a','b','c'], difficulty:'中' },
      { q:2, paraphrase:'xy 平面内固定的非导电带电细杆 S、T 的电场/电势。', topics:['em-u8:8.2','em-u9:9.2'], parts:['a','b','c'], difficulty:'难' },
      { q:3, paraphrase:'采集数据作图测定未知电学量的实验设计。', topics:['em-u11:11.3','em-u10:10.3'], parts:['a','b','c'], difficulty:'中' },
      { q:4, paraphrase:'边长 s、总电阻 R 的正方形导线圈在变化场中的感应。', topics:['em-u13:13.1','em-u13:13.2'], parts:['a','b','c'], difficulty:'难' },
    ],
  },
};

function outline(subject, topics) {
  const topicLinks = topics.map((tid) => {
    const [chapterId, code] = tid.split(':');
    // fix typos like calc-u5:5:3
    const clean = code.includes(':') ? code.split(':').pop() : code;
    const ch = chapterId;
    return { topicId: `${ch}:${clean}`, href: `#/t/${subject}/${ch}/${clean}`, label: `${ch}:${clean}` };
  });
  return {
    steps: [
      { text: '阅读官方 PDF，列出已知量表征与各小问目标。', links: topicLinks.slice(0, 1) },
      { text: '写出适用定义/定律（符号），对齐题中设定。', links: topicLinks },
      { text: '分小问完成计算或论证；对照评分指南自检。', links: topicLinks.slice(-1) },
    ],
    topicLinks,
  };
}

function fixTopics(topics) {
  return topics.map((tid) => {
    // calc-u5:5:3 -> calc-u5:5.3 mistake; mech-u5:5:3
    const m = tid.match(/^([^:]+):(.+)$/);
    if (!m) return tid;
    let code = m[2].replace(/^(\d+):(\d+)$/, '$1.$2');
    return `${m[1]}:${code}`;
  });
}

const entries = [];
function addBioMath(course, year, items, sourceExam) {
  const subject = course === 'mathAb' ? 'math' : course;
  const frq = VERIFIED[`${sourceExam || course}-${year}-frq`];
  const sg = VERIFIED[`${sourceExam || course}-${year}-sg`];
  const exam = course === 'bio' ? 'AP Biology' : course === 'math' ? 'AP Calculus BC' : 'AP Calculus AB';
  for (const item of items) {
    if (course === 'mathAb' && item.abShared === false) continue;
    const topics = fixTopics(item.topics);
    entries.push({
      id: `${sourceExam || course}-${year}-q${item.q}`,
      year, course: subject, examLabel: exam, sourceExam: sourceExam || course,
      question: item.q, parts: item.parts, paraphrase: item.paraphrase,
      difficulty: item.difficulty, topics, abShared: !!item.abShared,
      pdfQuestions: frq, pdfScoring: sg, hub: HUB[sourceExam || course],
      pdfMissing: !frq, verified: true, verification: 'pdf-text-extract',
      solutionOutline: outline(subject, topics),
      copyrightNote: '仅官方 PDF 链接与原创题意复述；不含试题原文。',
    });
  }
}

function addPhys(course, year, set, items) {
  const key = set ? `${course}-${year}-s${set}` : `${course}-${year}`;
  const frq = VERIFIED[`${key}-frq`];
  const sg = VERIFIED[`${key}-sg`];
  const exam = course === 'mech' ? 'AP Physics C: Mechanics' : 'AP Physics C: E&M';
  for (const item of items) {
    const topics = fixTopics(item.topics);
    entries.push({
      id: `${key}-q${item.q}`,
      year, course, examLabel: exam, sourceExam: course,
      question: item.q, parts: item.parts, set: set || undefined,
      paraphrase: item.paraphrase, difficulty: item.difficulty, topics,
      pdfQuestions: frq, pdfScoring: sg, hub: HUB[course],
      pdfMissing: !frq, verified: !!frq, verification: frq ? 'pdf-text-extract' : 'unverified',
      solutionOutline: outline(course, topics),
      copyrightNote: '仅官方 PDF 链接与原创题意复述；不含试题原文。',
    });
  }
}

for (const year of [2023, 2024, 2025, 2026]) {
  addBioMath('bio', year, DATA.bio[year]);
  addBioMath('math', year, DATA.math[year]);
  addBioMath('mathAb', year, DATA.math[year], 'mathAb');
}
for (const [key, items] of Object.entries(DATA.mech)) {
  if (key.includes('-')) {
    const [y, s] = key.split('-');
    addPhys('mech', Number(y), Number(s), items);
  } else addPhys('mech', Number(key), null, items);
}
for (const [key, items] of Object.entries(DATA.em)) {
  if (key.includes('-')) {
    const [y, s] = key.split('-');
    addPhys('em', Number(y), Number(s), items);
  } else addPhys('em', Number(key), null, items);
}

// 2020 hub-only placeholder (no guessed FRQ rows)
entries.push({
  id: 'hub-2020',
  year: 2020,
  course: 'bio',
  examLabel: 'AP 2020 (online administration)',
  sourceExam: 'multi',
  question: 0,
  parts: [],
  paraphrase: '2020 年为线上考试形式；本站未能检索到稳定的 media PDF 直链。请从 College Board 历年真题页下载各科已发布材料。',
  difficulty: '—',
  topics: [],
  pdfQuestions: null,
  pdfScoring: null,
  hub: HUB.bio,
  pdfMissing: true,
  verified: false,
  verification: 'hub-only',
  solutionOutline: { steps: [], topicLinks: [] },
  copyrightNote: '仅官网入口；无试题复述（无法核验 PDF）。',
  hubLinks: HUB,
});

const byCourseYear = {};
for (const e of entries) {
  if (e.question === 0) continue;
  byCourseYear[e.course] = byCourseYear[e.course] || {};
  byCourseYear[e.course][e.year] = (byCourseYear[e.course][e.year] || 0) + 1;
}

const payload = {
  generatedAt: '2026-11-05',
  disclaimer: '仅收录已用官方 PDF 文本核验的 2023–2026 FRQ。2021–2022 media 直链返回非 PDF，已移除以免臆测。2020 仅保留官网入口说明。不含试题原文。',
  hubs: HUB,
  verifiedUrlCount: Object.keys(VERIFIED).length,
  entries,
};

writeFileSync(join(ROOT, 'data/shared/pastpapers.js'), `/** Verified CB FRQ index — year-specific original paraphrases */\nexport const PAST_PAPERS = ${JSON.stringify(payload, null, 2)};\nexport function pastPapersForTopic(topicId) {\n  return PAST_PAPERS.entries.filter((e) => e.topics?.includes(topicId));\n}\nexport function pastPapersForUnit(subject, unitId) {\n  return PAST_PAPERS.entries.filter((e) => e.course === subject && e.topics?.some((t) => t.startsWith(unitId + ':')));\n}\n`);
writeFileSync(join(ROOT, 'audit/pastpapers-stats.json'), JSON.stringify({
  total: entries.filter(e=>e.question).length,
  hubOnly: entries.filter(e=>e.verification==='hub-only').length,
  removedUnverifiedYears: [2020,2021,2022],
  note2020: 'hub-only marker retained',
  note2021_2022: 'removed — media PDFs unavailable (38KB HTML stubs)',
  byCourseYear,
  verifiedUrls: Object.keys(VERIFIED).length,
}, null, 2));
console.log(JSON.stringify({ total: entries.filter(e=>e.question).length, byCourseYear }, null, 2));
