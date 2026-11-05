/**
 * Prerequisite foundational units (US high-school scope) before AP.
 * Distinct layer in maps; edges into AP topics.
 */
export const PREP_UNITS = {
  bio: [
    {
      id: 'bio-prep-chem', code: 'P1', titleZh: '高中化学基础', titleEn: 'High School Chemistry Foundations', layer: 'prep',
      topics: [
        { code: 'P1.1', titleZh: '科学测量与有效数字', titleEn: 'Measurement and Significant Figures' },
        { code: 'P1.2', titleZh: '原子结构与同位素', titleEn: 'Atomic Structure and Isotopes' },
        { code: 'P1.3', titleZh: '元素周期表', titleEn: 'Periodic Table' },
        { code: 'P1.4', titleZh: '离子键与共价键', titleEn: 'Ionic and Covalent Bonding' },
        { code: 'P1.5', titleZh: '分子几何与极性', titleEn: 'Molecular Geometry and Polarity' },
        { code: 'P1.6', titleZh: '化学反应与计量', titleEn: 'Chemical Reactions and Stoichiometry' },
        { code: 'P1.7', titleZh: '溶液与浓度', titleEn: 'Solutions and Concentration' },
        { code: 'P1.8', titleZh: '酸碱与 pH', titleEn: 'Acids, Bases, and pH' },
        { code: 'P1.9', titleZh: '水与氢键', titleEn: 'Water and Hydrogen Bonding' },
        { code: 'P1.10', titleZh: '有机官能团入门', titleEn: 'Intro Organic Functional Groups' },
        { code: 'P1.11', titleZh: '热力学与反应热入门', titleEn: 'Intro Thermochemistry' },
        { code: 'P1.12', titleZh: '反应速率与平衡入门', titleEn: 'Intro Kinetics and Equilibrium' },
      ],
    },
    {
      id: 'bio-prep-hs', code: 'P2', titleZh: '高中生物', titleEn: 'High School Biology', layer: 'prep',
      topics: [
        { code: 'P2.1', titleZh: '科学方法与实验设计', titleEn: 'Scientific Method and Experimental Design' },
        { code: 'P2.2', titleZh: '生物大分子', titleEn: 'Biological Macromolecules' },
        { code: 'P2.3', titleZh: '细胞结构', titleEn: 'Cell Structure' },
        { code: 'P2.4', titleZh: '细胞膜与运输', titleEn: 'Cell Membrane and Transport' },
        { code: 'P2.5', titleZh: '酶', titleEn: 'Enzymes' },
        { code: 'P2.6', titleZh: '光合作用概览', titleEn: 'Photosynthesis Overview' },
        { code: 'P2.7', titleZh: '细胞呼吸概览', titleEn: 'Cellular Respiration Overview' },
        { code: 'P2.8', titleZh: '有丝分裂与减数分裂', titleEn: 'Mitosis and Meiosis' },
        { code: 'P2.9', titleZh: '孟德尔遗传', titleEn: 'Mendelian Genetics' },
        { code: 'P2.10', titleZh: 'DNA 与蛋白质合成入门', titleEn: 'DNA and Protein Synthesis Intro' },
        { code: 'P2.11', titleZh: '自然选择入门', titleEn: 'Natural Selection Intro' },
        { code: 'P2.12', titleZh: '生态层级与能量流', titleEn: 'Ecological Levels and Energy Flow' },
        { code: 'P2.13', titleZh: '人体系统概览', titleEn: 'Human Body Systems Overview' },
        { code: 'P2.14', titleZh: '生物多样性', titleEn: 'Biodiversity' },
      ],
    },
  ],
  math: [
    {
      id: 'math-prep-alg1', code: 'P1', titleZh: '代数 I', titleEn: 'Algebra I', layer: 'prep',
      topics: [
        { code: 'P1.1', titleZh: '表达式与实数性质', titleEn: 'Expressions and Properties of Real Numbers' },
        { code: 'P1.2', titleZh: '线性方程', titleEn: 'Linear Equations' },
        { code: 'P1.3', titleZh: '线性不等式', titleEn: 'Linear Inequalities' },
        { code: 'P1.4', titleZh: '函数与图像入门', titleEn: 'Intro Functions and Graphs' },
        { code: 'P1.5', titleZh: '斜率与直线方程', titleEn: 'Slope and Equations of Lines' },
        { code: 'P1.6', titleZh: '线性方程组', titleEn: 'Systems of Linear Equations' },
        { code: 'P1.7', titleZh: '指数运算', titleEn: 'Exponent Rules' },
        { code: 'P1.8', titleZh: '多项式运算', titleEn: 'Polynomial Operations' },
        { code: 'P1.9', titleZh: '因式分解', titleEn: 'Factoring' },
        { code: 'P1.10', titleZh: '二次方程入门', titleEn: 'Intro Quadratic Equations' },
        { code: 'P1.11', titleZh: '指数增长入门', titleEn: 'Intro Exponential Growth' },
        { code: 'P1.12', titleZh: '数据与线性模型', titleEn: 'Data and Linear Models' },
      ],
    },
    {
      id: 'math-prep-geo', code: 'P2', titleZh: '几何', titleEn: 'Geometry', layer: 'prep',
      topics: [
        { code: 'P2.1', titleZh: '点线面与角', titleEn: 'Points, Lines, Planes, Angles' },
        { code: 'P2.2', titleZh: '平行与三角形全等', titleEn: 'Parallel Lines and Triangle Congruence' },
        { code: 'P2.3', titleZh: '相似三角形', titleEn: 'Similar Triangles' },
        { code: 'P2.4', titleZh: '直角三角与毕达哥拉斯', titleEn: 'Right Triangles and Pythagorean Theorem' },
        { code: 'P2.5', titleZh: '三角比入门', titleEn: 'Intro Trigonometric Ratios' },
        { code: 'P2.6', titleZh: '圆的性质', titleEn: 'Properties of Circles' },
        { code: 'P2.7', titleZh: '面积与周长', titleEn: 'Area and Perimeter' },
        { code: 'P2.8', titleZh: '表面积与体积', titleEn: 'Surface Area and Volume' },
        { code: 'P2.9', titleZh: '坐标几何', titleEn: 'Coordinate Geometry' },
        { code: 'P2.10', titleZh: '变换', titleEn: 'Transformations' },
        { code: 'P2.11', titleZh: '证明基础', titleEn: 'Basics of Proof' },
      ],
    },
    {
      id: 'math-prep-alg2', code: 'P3', titleZh: '代数 II', titleEn: 'Algebra II', layer: 'prep',
      topics: [
        { code: 'P3.1', titleZh: '函数族回顾', titleEn: 'Families of Functions Review' },
        { code: 'P3.2', titleZh: '二次函数深入', titleEn: 'Quadratic Functions in Depth' },
        { code: 'P3.3', titleZh: '多项式函数', titleEn: 'Polynomial Functions' },
        { code: 'P3.4', titleZh: '有理函数', titleEn: 'Rational Functions' },
        { code: 'P3.5', titleZh: '根式与有理指数', titleEn: 'Radicals and Rational Exponents' },
        { code: 'P3.6', titleZh: '指数函数', titleEn: 'Exponential Functions' },
        { code: 'P3.7', titleZh: '对数函数', titleEn: 'Logarithmic Functions' },
        { code: 'P3.8', titleZh: '数列与级数入门', titleEn: 'Sequences and Series Intro' },
        { code: 'P3.9', titleZh: '概率与计数', titleEn: 'Probability and Counting' },
        { code: 'P3.10', titleZh: '矩阵入门', titleEn: 'Intro Matrices' },
        { code: 'P3.11', titleZh: '圆锥曲线入门', titleEn: 'Intro Conic Sections' },
        { code: 'P3.12', titleZh: '三角恒等式预备', titleEn: 'Trig Identity Prep' },
      ],
    },
    {
      id: 'math-prep-precalc', code: 'P4', titleZh: '预备微积分', titleEn: 'Precalculus', layer: 'prep',
      topics: [
        { code: 'P4.1', titleZh: '多项式与有理函数分析', titleEn: 'Polynomial and Rational Analysis' },
        { code: 'P4.2', titleZh: '指数与对数模型', titleEn: 'Exponential and Log Models' },
        { code: 'P4.3', titleZh: '单位圆与三角函数', titleEn: 'Unit Circle and Trig Functions' },
        { code: 'P4.4', titleZh: '三角方程与恒等式', titleEn: 'Trig Equations and Identities' },
        { code: 'P4.5', titleZh: '极坐标入门', titleEn: 'Intro Polar Coordinates' },
        { code: 'P4.6', titleZh: '参数方程入门', titleEn: 'Intro Parametric Equations' },
        { code: 'P4.7', titleZh: '向量入门', titleEn: 'Intro Vectors' },
        { code: 'P4.8', titleZh: '矩阵与变换', titleEn: 'Matrices and Transformations' },
        { code: 'P4.9', titleZh: '极限直觉', titleEn: 'Limit Intuition' },
        { code: 'P4.10', titleZh: '变化率直觉', titleEn: 'Rate of Change Intuition' },
      ],
    },
  ],
  mech: [
    {
      id: 'mech-prep-hs', code: 'P1', titleZh: '高中物理', titleEn: 'High School Physics', layer: 'prep',
      topics: [
        { code: 'P1.1', titleZh: '测量、单位与矢量', titleEn: 'Measurement, Units, and Vectors' },
        { code: 'P1.2', titleZh: '一维运动学', titleEn: '1D Kinematics' },
        { code: 'P1.3', titleZh: '二维运动与抛体', titleEn: '2D Motion and Projectiles' },
        { code: 'P1.4', titleZh: '牛顿定律', titleEn: "Newton's Laws" },
        { code: 'P1.5', titleZh: '应用力与摩擦', titleEn: 'Applied Forces and Friction' },
        { code: 'P1.6', titleZh: '圆周运动', titleEn: 'Circular Motion' },
        { code: 'P1.7', titleZh: '万有引力入门', titleEn: 'Intro Gravitation' },
        { code: 'P1.8', titleZh: '功与动能', titleEn: 'Work and Kinetic Energy' },
        { code: 'P1.9', titleZh: '势能与守恒', titleEn: 'Potential Energy and Conservation' },
        { code: 'P1.10', titleZh: '动量与碰撞', titleEn: 'Momentum and Collisions' },
        { code: 'P1.11', titleZh: '转动入门', titleEn: 'Intro Rotation' },
        { code: 'P1.12', titleZh: '简谐运动', titleEn: 'Simple Harmonic Motion' },
        { code: 'P1.13', titleZh: '机械波与声音', titleEn: 'Mechanical Waves and Sound' },
        { code: 'P1.14', titleZh: '静电入门', titleEn: 'Intro Electrostatics' },
        { code: 'P1.15', titleZh: '直流电路基础', titleEn: 'Basic DC Circuits' },
        { code: 'P1.16', titleZh: '磁与电磁入门', titleEn: 'Intro Magnetism and Induction' },
      ],
    },
    {
      id: 'mech-prep-ap1', code: 'P2', titleZh: 'AP Physics 1 核心', titleEn: 'AP Physics 1 Core', layer: 'prep',
      topics: [
        { code: 'P2.1', titleZh: '运动学建模', titleEn: 'Kinematics Modeling' },
        { code: 'P2.2', titleZh: '动力学与自由体图', titleEn: 'Dynamics and Free-Body Diagrams' },
        { code: 'P2.3', titleZh: '圆周与万有引力', titleEn: 'Circular Motion and Gravitation' },
        { code: 'P2.4', titleZh: '能量系统', titleEn: 'Energy Systems' },
        { code: 'P2.5', titleZh: '动量系统', titleEn: 'Momentum Systems' },
        { code: 'P2.6', titleZh: '简谐与波', titleEn: 'SHM and Waves' },
        { code: 'P2.7', titleZh: '基础电路', titleEn: 'Basic Circuits' },
        { code: 'P2.8', titleZh: '转动动力学入门', titleEn: 'Intro Rotational Dynamics' },
      ],
    },
    {
      id: 'mech-prep-math', code: 'P3', titleZh: '物理用数学', titleEn: 'Math for Physics', layer: 'prep',
      topics: [
        { code: 'P3.1', titleZh: '矢量分解与点积', titleEn: 'Vector Components and Dot Product' },
        { code: 'P3.2', titleZh: '导数作为变化率', titleEn: 'Derivative as Rate of Change' },
        { code: 'P3.3', titleZh: '积分作为累积', titleEn: 'Integral as Accumulation' },
        { code: 'P3.4', titleZh: '微分方程直觉', titleEn: 'Differential Equation Intuition' },
        { code: 'P3.5', titleZh: '小角近似', titleEn: 'Small-Angle Approximation' },
      ],
    },
  ],
  em: [
    {
      id: 'em-prep-found', code: 'P1', titleZh: '电磁预备', titleEn: 'E&M Foundations', layer: 'prep',
      topics: [
        { code: 'P1.1', titleZh: '电荷与库仑定律', titleEn: 'Charge and Coulomb’s Law' },
        { code: 'P1.2', titleZh: '电场直觉', titleEn: 'Electric Field Intuition' },
        { code: 'P1.3', titleZh: '电势直觉', titleEn: 'Electric Potential Intuition' },
        { code: 'P1.4', titleZh: '电容直觉', titleEn: 'Capacitance Intuition' },
        { code: 'P1.5', titleZh: '欧姆定律与电路', titleEn: 'Ohm’s Law and Circuits' },
        { code: 'P1.6', titleZh: '磁场与洛伦兹力直觉', titleEn: 'Magnetic Field and Lorentz Force Intuition' },
        { code: 'P1.7', titleZh: '磁通量直觉', titleEn: 'Magnetic Flux Intuition' },
        { code: 'P1.8', titleZh: '矢量场与通量直觉', titleEn: 'Vector Fields and Flux Intuition' },
        { code: 'P1.9', titleZh: '微积分工具回顾', titleEn: 'Calc Tools Review for E&M' },
      ],
    },
  ],
};

export function mergeUnits(apUnits) {
  const out = {};
  for (const sid of Object.keys(apUnits)) {
    out[sid] = [...(PREP_UNITS[sid] || []), ...apUnits[sid]];
  }
  return out;
}
