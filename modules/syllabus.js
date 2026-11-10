/**
 * Official AP CED unit/topic outlines (College Board, current frameworks).
 * Sources: AP Biology CED; AP Calculus AB/BC CED; AP Physics C Mechanics CED (2024–25);
 * AP Physics C E&M CED (units 8–13).
 */


import { mergeUnits } from './prep-units.js';

export const COURSES = {
  bio: {
    id: 'bio',
    name: '生物',
    en: 'AP Biology',
    overview: 'AP Biology · 8 units',
  },
  math: {
    id: 'math',
    name: '微积分',
    en: 'AP Calculus BC',
    overview: 'AP Calculus BC · 10 units',
  },
  mech: {
    id: 'mech',
    name: '力学',
    en: 'AP Physics C: Mechanics',
    overview: 'AP Physics C Mechanics · 7 units',
  },
  em: {
    id: 'em',
    name: '电磁',
    en: 'AP Physics C: E&M',
    overview: 'AP Physics C E&M · Units 8–13',
  },
};

/** @typedef {{ id: string, code: string, titleZh: string, titleEn: string, topics: { code: string, titleZh: string, titleEn: string }[] }} UnitDef */

/** @type {Record<string, UnitDef[]>} */
export const UNITS = {
  bio: [
    {
      id: 'bio-u1', code: '1', titleZh: '生命化学', titleEn: 'Chemistry of Life',
      topics: [
        { code: '1.1', titleZh: '水与生命', titleEn: 'Structure of Water and Hydrogen Bonding' },
        { code: '1.2', titleZh: '元素与大分子', titleEn: 'Elements of Life' },
        { code: '1.3', titleZh: '生物大分子导论', titleEn: 'Introduction to Biological Macromolecules' },
        { code: '1.4', titleZh: '蛋白质性质', titleEn: 'Properties of Biological Macromolecules' },
        { code: '1.5', titleZh: '核酸', titleEn: 'Nucleic Acids' },
        { code: '1.6', titleZh: '酶结构与功能', titleEn: 'Structure and Function of Enzymes' },
      ],
    },
    {
      id: 'bio-u2', code: '2', titleZh: '细胞结构与功能', titleEn: 'Cell Structure and Function',
      topics: [
        { code: '2.1', titleZh: '细胞器与区隔化', titleEn: 'Cell Structure: Subcellular Components' },
        { code: '2.2', titleZh: '细胞大小', titleEn: 'Cell Size' },
        { code: '2.3', titleZh: '质膜', titleEn: 'Plasma Membranes' },
        { code: '2.4', titleZh: '膜通透性', titleEn: 'Membrane Permeability' },
        { code: '2.5', titleZh: '膜运输', titleEn: 'Membrane Transport' },
        { code: '2.6', titleZh: '促进扩散', titleEn: 'Facilitated Diffusion' },
        { code: '2.7', titleZh: '渗透与水势', titleEn: 'Tonicity and Osmoregulation' },
        { code: '2.8', titleZh: '主动运输', titleEn: 'Mechanisms of Transport' },
        { code: '2.9', titleZh: '区隔化', titleEn: 'Compartmentalization' },
        { code: '2.10', titleZh: '细胞区隔起源', titleEn: 'Origins of Cell Compartmentalization' },
      ],
    },
    {
      id: 'bio-u3', code: '3', titleZh: '细胞能量学', titleEn: 'Cellular Energetics',
      topics: [
        { code: '3.1', titleZh: '酶催化', titleEn: 'Enzyme Catalysis' },
        { code: '3.2', titleZh: '环境影响酶', titleEn: 'Environmental Impacts on Enzyme Function' },
        { code: '3.3', titleZh: '细胞能量', titleEn: 'Cellular Energy' },
        { code: '3.4', titleZh: '光合作用', titleEn: 'Photosynthesis' },
        { code: '3.5', titleZh: '细胞呼吸', titleEn: 'Cellular Respiration' },
        { code: '3.6', titleZh: '适应与能量', titleEn: 'Fitness' },
        { code: '3.7', titleZh: '酶变性与复性', titleEn: 'Enzyme Denaturation and Renaturation' },
      ],
    },
    {
      id: 'bio-u4', code: '4', titleZh: '细胞通讯与细胞周期', titleEn: 'Cell Communication and Cell Cycle',
      topics: [
        { code: '4.1', titleZh: '细胞通讯', titleEn: 'Cell Communication' },
        { code: '4.2', titleZh: '信号转导导论', titleEn: 'Introduction to Signal Transduction' },
        { code: '4.3', titleZh: '信号转导', titleEn: 'Signal Transduction' },
        { code: '4.4', titleZh: '反馈', titleEn: 'Feedback' },
        { code: '4.5', titleZh: '细胞周期', titleEn: 'Cell Cycle' },
        { code: '4.6', titleZh: '细胞周期调控', titleEn: 'Regulation of Cell Cycle' },
        { code: '4.7', titleZh: '有丝分裂', titleEn: 'Mitosis' },
      ],
    },
    {
      id: 'bio-u5', code: '5', titleZh: '遗传', titleEn: 'Heredity',
      topics: [
        { code: '5.1', titleZh: '减数分裂', titleEn: 'Meiosis' },
        { code: '5.2', titleZh: '减数分裂与遗传多样性', titleEn: 'Meiosis and Genetic Diversity' },
        { code: '5.3', titleZh: '孟德尔遗传', titleEn: 'Mendelian Genetics' },
        { code: '5.4', titleZh: '非孟德尔遗传', titleEn: 'Non-Mendelian Genetics' },
        { code: '5.5', titleZh: '环境影响表型', titleEn: 'Environmental Effects on Phenotype' },
        { code: '5.6', titleZh: '染色体遗传', titleEn: 'Chromosomal Inheritance' },
      ],
    },
    {
      id: 'bio-u6', code: '6', titleZh: '基因表达与调控', titleEn: 'Gene Expression and Regulation',
      topics: [
        { code: '6.1', titleZh: 'DNA 与 RNA 结构', titleEn: 'DNA and RNA Structure' },
        { code: '6.2', titleZh: '复制', titleEn: 'Replication' },
        { code: '6.3', titleZh: '转录与 RNA 加工', titleEn: 'Transcription and RNA Processing' },
        { code: '6.4', titleZh: '翻译', titleEn: 'Translation' },
        { code: '6.5', titleZh: '基因表达调控', titleEn: 'Regulation of Gene Expression' },
        { code: '6.6', titleZh: '基因表达与细胞特化', titleEn: 'Gene Expression and Cell Specialization' },
        { code: '6.7', titleZh: '突变', titleEn: 'Mutations' },
        { code: '6.8', titleZh: '生物技术', titleEn: 'Biotechnology' },
      ],
    },
    {
      id: 'bio-u7', code: '7', titleZh: '自然选择', titleEn: 'Natural Selection',
      topics: [
        { code: '7.1', titleZh: '自然选择导论', titleEn: 'Introduction to Natural Selection' },
        { code: '7.2', titleZh: '自然选择', titleEn: 'Natural Selection' },
        { code: '7.3', titleZh: '人工选择', titleEn: 'Artificial Selection' },
        { code: '7.4', titleZh: '群体遗传', titleEn: 'Population Genetics' },
        { code: '7.5', titleZh: '哈代–温伯格', titleEn: 'Hardy-Weinberg Equilibrium' },
        { code: '7.6', titleZh: '进化证据', titleEn: 'Evidence of Evolution' },
        { code: '7.7', titleZh: '共同祖先', titleEn: 'Common Ancestry' },
        { code: '7.8', titleZh: '延续与变化', titleEn: 'Continuing Evolution' },
        { code: '7.9', titleZh: '系统发生', titleEn: 'Phylogeny' },
        { code: '7.10', titleZh: '物种形成', titleEn: 'Speciation' },
        { code: '7.11', titleZh: '灭绝', titleEn: 'Extinction' },
        { code: '7.12', titleZh: '种群变异', titleEn: 'Variations in Populations' },
        { code: '7.13', titleZh: '生命起源', titleEn: 'Origins of Life on Earth' },
      ],
    },
    {
      id: 'bio-u8', code: '8', titleZh: '生态学', titleEn: 'Ecology',
      topics: [
        { code: '8.1', titleZh: '环境响应', titleEn: 'Responses to the Environment' },
        { code: '8.2', titleZh: '能量流', titleEn: 'Energy Flow Through Ecosystems' },
        { code: '8.3', titleZh: '种群生态', titleEn: 'Population Ecology' },
        { code: '8.4', titleZh: '密度效应', titleEn: 'Effect of Density on Populations' },
        { code: '8.5', titleZh: '群落生态', titleEn: 'Community Ecology' },
        { code: '8.6', titleZh: '生物多样性', titleEn: 'Biodiversity' },
        { code: '8.7', titleZh: '生态系统扰动', titleEn: 'Disruptions to Ecosystems' },
        { code: '8.10', titleZh: '生态层级与物质循环', titleEn: 'Ecological Organization and Biogeochemical Cycles' },
      ],
    },
  ],
  math: [
    {
      id: 'calc-u0', code: '0', titleZh: '预备', titleEn: 'Prerequisite',
      topics: [
        { code: '0.1', titleZh: '函数与图像', titleEn: 'Functions and Graphs' },
        { code: '0.2', titleZh: '单位圆与三角', titleEn: 'Unit Circle and Trigonometry' },
      ],
    },
    {
      id: 'calc-u1', code: '1', titleZh: '极限与连续', titleEn: 'Limits and Continuity',
      topics: [
        { code: '1.1', titleZh: '瞬时变化导论', titleEn: 'Introducing Calculus: Can Change Occur at an Instant?' },
        { code: '1.2', titleZh: '极限定义与记号', titleEn: 'Defining Limits and Using Limit Notation' },
        { code: '1.3', titleZh: '由图像估计极限', titleEn: 'Estimating Limit Values from Graphs' },
        { code: '1.4', titleZh: '由表估计极限', titleEn: 'Estimating Limit Values from Tables' },
        { code: '1.5', titleZh: '极限的代数性质', titleEn: 'Determining Limits Using Algebraic Properties of Limits' },
        { code: '1.6', titleZh: '代数操作求极限', titleEn: 'Determining Limits Using Algebraic Manipulation' },
        { code: '1.7', titleZh: '选择求极限程序', titleEn: 'Selecting Procedures for Determining Limits' },
        { code: '1.8', titleZh: '挤压定理', titleEn: 'Determining Limits Using the Squeeze Theorem' },
        { code: '1.9', titleZh: '极限多种表示的联结', titleEn: 'Connecting Multiple Representations of Limits' },
        { code: '1.10', titleZh: '探索间断类型', titleEn: 'Exploring Types of Discontinuities' },
        { code: '1.11', titleZh: '定义连续性', titleEn: 'Defining Continuity at a Point' },
        { code: '1.12', titleZh: '确认区间连续', titleEn: 'Confirming Continuity over an Interval' },
        { code: '1.13', titleZh: '除去间断', titleEn: 'Removing Discontinuities' },
        { code: '1.14', titleZh: '无限极限与竖直渐近', titleEn: 'Connecting Infinite Limits and Vertical Asymptotes' },
        { code: '1.15', titleZh: '无穷远处极限与水平渐近', titleEn: 'Connecting Limits at Infinity and Horizontal Asymptotes' },
        { code: '1.16', titleZh: '中间值定理', titleEn: 'Working with the Intermediate Value Theorem (IVT)' },
      ],
    },
    {
      id: 'calc-u2', code: '2', titleZh: '导数：定义与基本性质', titleEn: 'Differentiation: Definition and Fundamental Properties',
      topics: [
        { code: '2.1', titleZh: '瞬时变化率', titleEn: 'Defining Average and Instantaneous Rates of Change' },
        { code: '2.2', titleZh: '导数定义', titleEn: 'Defining the Derivative of a Function and Using Derivative Notation' },
        { code: '2.3', titleZh: '估计函数在某点处的导数', titleEn: 'Estimating Derivatives of a Function at a Point' },
        { code: '2.4', titleZh: '导数与连续', titleEn: 'Connecting Differentiability and Continuity' },
        { code: '2.5', titleZh: '幂函数导数', titleEn: 'Applying the Power Rule' },
        { code: '2.6', titleZh: '常数倍与和差', titleEn: 'Derivative Rules: Constant, Sum, Difference, and Constant Multiple' },
        { code: '2.7', titleZh: 'cos x、sin x、eˣ 与 ln x 的导数', titleEn: 'Derivatives of cos x, sin x, eˣ, and ln x' },
        { code: '2.8', titleZh: '乘积法则', titleEn: 'The Product Rule' },
        { code: '2.9', titleZh: '商法则', titleEn: 'The Quotient Rule' },
        { code: '2.10', titleZh: '三角函数导数', titleEn: 'Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions' },
      ],
    },
    {
      id: 'calc-u3', code: '3', titleZh: '复合、隐函数与反函数导数', titleEn: 'Differentiation: Composite, Implicit, and Inverse Functions',
      topics: [
        { code: '3.1', titleZh: '链式法则', titleEn: 'The Chain Rule' },
        { code: '3.2', titleZh: '隐函数求导', titleEn: 'Implicit Differentiation' },
        { code: '3.3', titleZh: '反函数导数', titleEn: 'Differentiating Inverse Functions' },
        { code: '3.4', titleZh: '反三角函数导数', titleEn: 'Differentiating Inverse Trigonometric Functions' },
        { code: '3.5', titleZh: '求导程序的选择', titleEn: 'Selecting Procedures for Calculating Derivatives' },
        { code: '3.6', titleZh: '高阶导数', titleEn: 'Calculating Higher-Order Derivatives' },
      ],
    },
    {
      id: 'calc-u4', code: '4', titleZh: '导数的情境应用', titleEn: 'Contextual Applications of Differentiation',
      topics: [
        { code: '4.1', titleZh: '变化率情境', titleEn: 'Interpreting the Meaning of the Derivative in Context' },
        { code: '4.2', titleZh: '直线运动', titleEn: 'Straight-Line Motion: Connecting Position, Velocity, and Acceleration' },
        { code: '4.3', titleZh: '变化率与单位', titleEn: 'Rates of Change in Applied Contexts Other Than Motion' },
        { code: '4.4', titleZh: '相关变化率', titleEn: 'Introduction to Related Rates' },
        { code: '4.5', titleZh: '相关变化率求解', titleEn: 'Solving Related Rates Problems' },
        { code: '4.6', titleZh: '局部线性近似', titleEn: 'Approximating Values of a Function Using Local Linearity and Linearization' },
        { code: '4.7', titleZh: '洛必达法则', titleEn: "L'Hospital's Rule for Determining Limits of Indeterminate Forms" },
      ],
    },
    {
      id: 'calc-u5', code: '5', titleZh: '导数的分析应用', titleEn: 'Analytical Applications of Differentiation',
      topics: [
        { code: '5.1', titleZh: '中值定理', titleEn: 'Using the Mean Value Theorem' },
        { code: '5.2', titleZh: '极值定理', titleEn: 'Extreme Value Theorem, Global Versus Local Extrema, and Critical Points' },
        { code: '5.3', titleZh: '增减性', titleEn: 'Determining Intervals of Increase and Decrease' },
        { code: '5.4', titleZh: '一阶导数检验', titleEn: 'Using the First Derivative Test to Determine Relative Local Extrema' },
        { code: '5.5', titleZh: '候选绝对极值', titleEn: 'Using the Candidates Test to Determine Absolute Extrema' },
        { code: '5.6', titleZh: '凹性与拐点', titleEn: 'Determining Concavity of Functions over Their Domains' },
        { code: '5.7', titleZh: '二阶导数检验', titleEn: 'Using the Second Derivative Test to Determine Extrema' },
        { code: '5.8', titleZh: '函数草图', titleEn: 'Sketching Graphs of Functions and Their Derivatives' },
        { code: '5.9', titleZh: '函数与导数关联', titleEn: 'Connecting a Function, Its First Derivative, and Its Second Derivative' },
        { code: '5.10', titleZh: '优化导论', titleEn: 'Introduction to Optimization Problems' },
        { code: '5.11', titleZh: '优化求解', titleEn: 'Solving Optimization Problems' },
        { code: '5.12', titleZh: '隐式关系行为', titleEn: 'Exploring Behaviors of Implicit Relations' },
      ],
    },
    {
      id: 'calc-u6', code: '6', titleZh: '积分与累积变化', titleEn: 'Integration and Accumulation of Change',
      topics: [
        { code: '6.1', titleZh: '累积变化探查', titleEn: 'Exploring Accumulations of Change' },
        { code: '6.2', titleZh: '黎曼和近似', titleEn: 'Approximating Areas with Riemann Sums' },
        { code: '6.3', titleZh: '黎曼和、求和记号与定积分', titleEn: 'Riemann Sums, Summation Notation, and Definite Integral Notation' },
        { code: '6.4', titleZh: '微积分基本定理', titleEn: 'The Fundamental Theorem of Calculus and Accumulation Functions' },
        { code: '6.5', titleZh: '定积分解释', titleEn: 'Interpreting the Behavior of Accumulation Functions Involving Graphs' },
        { code: '6.6', titleZh: '定积分性质的应用', titleEn: 'Applying Properties of Definite Integrals' },
        { code: '6.7', titleZh: '定积分求值', titleEn: 'The Fundamental Theorem of Calculus and Definite Integrals' },
        { code: '6.8', titleZh: '求原函数', titleEn: 'Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation' },
        { code: '6.9', titleZh: '换元积分法', titleEn: 'Integrating Using Substitution' },
        { code: '6.10', titleZh: '分部积分', titleEn: 'Integrating Using Integration by Parts' },
        { code: '6.11', titleZh: '部分分式', titleEn: 'Integrating Using Linear Partial Fractions' },
        { code: '6.12', titleZh: '反常积分', titleEn: 'Evaluating Improper Integrals' },
        { code: '6.13', titleZh: '积分技巧选择', titleEn: 'Integrating Using Linear Partial Fractions and Other Techniques' },
        { code: '6.14', titleZh: '积分技巧综合', titleEn: 'Selecting Techniques for Antidifferentiation' },
      ],
    },
    {
      id: 'calc-u7', code: '7', titleZh: '微分方程', titleEn: 'Differential Equations',
      topics: [
        { code: '7.1', titleZh: '微分方程建模', titleEn: 'Modeling Situations with Differential Equations' },
        { code: '7.2', titleZh: '验证微分方程的解', titleEn: 'Verifying Solutions for Differential Equations' },
        { code: '7.3', titleZh: '斜率场草图', titleEn: 'Sketching Slope Fields' },
        { code: '7.4', titleZh: '斜率场推理', titleEn: 'Reasoning Using Slope Fields' },
        { code: '7.5', titleZh: '欧拉法', titleEn: "Approximating Solutions Using Euler's Method" },
        { code: '7.6', titleZh: '可分离变量', titleEn: 'Finding General Solutions Using Separation of Variables' },
        { code: '7.7', titleZh: '特解', titleEn: 'Finding Particular Solutions Using Initial Conditions and Separation of Variables' },
        { code: '7.8', titleZh: '指数模型', titleEn: 'Exponential Models with Differential Equations' },
        { code: '7.9', titleZh: 'Logistic 模型', titleEn: 'Logistic Models with Differential Equations' },
      ],
    },
    {
      id: 'calc-u8', code: '8', titleZh: '积分的应用', titleEn: 'Applications of Integration',
      topics: [
        { code: '8.1', titleZh: '积分求平均', titleEn: 'Finding the Average Value of a Function on an Interval' },
        { code: '8.2', titleZh: '位置速度加速度', titleEn: 'Connecting Position, Velocity, and Acceleration Using Integrals' },
        { code: '8.3', titleZh: '累积变化率', titleEn: 'Using Accumulation Functions and Definite Integrals in Applied Contexts' },
        { code: '8.4', titleZh: '曲线间面积', titleEn: 'Finding the Area Between Curves Expressed as Functions of x' },
        { code: '8.5', titleZh: '曲线间面积 y', titleEn: 'Finding the Area Between Curves Expressed as Functions of y' },
        { code: '8.6', titleZh: '曲线间面积其他', titleEn: 'Finding Area Between Curves That Intersect at More Than Two Points' },
        { code: '8.7', titleZh: '截面法：正方形与矩形', titleEn: 'Volumes with Cross Sections: Squares and Rectangles' },
        { code: '8.8', titleZh: '已知截面体积', titleEn: 'Volumes with Cross Sections: Triangles and Semicircles' },
        { code: '8.9', titleZh: '圆盘法', titleEn: 'Volume with Disc Method: Revolving Around the x- or y-Axis' },
        { code: '8.10', titleZh: '圆盘法其他轴', titleEn: 'Volume with Disc Method: Revolving Around Other Axes' },
        { code: '8.11', titleZh: '垫圈法', titleEn: 'Volume with Washer Method: Revolving Around the x- or y-Axis' },
        { code: '8.12', titleZh: '垫圈法其他轴', titleEn: 'Volume with Washer Method: Revolving Around Other Axes' },
        { code: '8.13', titleZh: '弧长', titleEn: 'The Arc Length of a Smooth, Planar Curve and Distance Traveled' },
      ],
    },
    {
      id: 'calc-u9', code: '9', titleZh: '参数、极坐标与向量', titleEn: 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions',
      topics: [
        { code: '9.1', titleZh: '参数运动导数', titleEn: 'Defining and Differentiating Parametric Equations' },
        { code: '9.2', titleZh: '参数二阶导数', titleEn: 'Second Derivatives of Parametric Equations' },
        { code: '9.3', titleZh: '参数弧长', titleEn: 'Finding Arc Lengths of Curves Given by Parametric Equations' },
        { code: '9.4', titleZh: '向量值函数', titleEn: 'Defining and Differentiating Vector-Valued Functions' },
        { code: '9.5', titleZh: '向量值函数积分', titleEn: 'Integrating Vector-Valued Functions' },
        { code: '9.6', titleZh: '向量运动解题', titleEn: 'Solving Motion Problems Using Parametric and Vector-Valued Functions' },
        { code: '9.7', titleZh: '极坐标导数', titleEn: 'Defining Polar Coordinates and Differentiating in Polar Form' },
        { code: '9.8', titleZh: '极坐标面积', titleEn: 'Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve' },
        { code: '9.9', titleZh: '两极曲线间面积', titleEn: 'Finding the Area of the Region Bounded by Two Polar Curves' },
      ],
    },
    {
      id: 'calc-u10', code: '10', titleZh: '无穷序列与级数', titleEn: 'Infinite Sequences and Series',
      topics: [
        { code: '10.1', titleZh: '无穷级数的收敛与发散', titleEn: 'Defining Convergent and Divergent Infinite Series' },
        { code: '10.2', titleZh: '几何级数', titleEn: 'Working with Geometric Series' },
        { code: '10.3', titleZh: 'n 项检验', titleEn: 'The nth Term Test for Divergence' },
        { code: '10.4', titleZh: '积分检验', titleEn: 'Integral Test for Convergence' },
        { code: '10.5', titleZh: '调和级数与 p 级数', titleEn: 'Harmonic Series and p-Series' },
        { code: '10.6', titleZh: '比较检验', titleEn: 'Comparison Tests for Convergence' },
        { code: '10.7', titleZh: '交替级数', titleEn: 'Alternating Series Test for Convergence' },
        { code: '10.8', titleZh: '比值检验', titleEn: 'Ratio Test for Convergence' },
        { code: '10.9', titleZh: '绝对与条件收敛', titleEn: 'Determining Absolute or Conditional Convergence' },
        { code: '10.10', titleZh: '交替级数误差', titleEn: 'Alternating Series Error Bound' },
        { code: '10.11', titleZh: '泰勒多项式导论', titleEn: 'Finding Taylor Polynomial Approximations of Functions' },
        { code: '10.12', titleZh: '拉格朗日误差界', titleEn: 'Lagrange Error Bound' },
        { code: '10.13', titleZh: '半径与区间', titleEn: 'Radius and Interval of Convergence of Power Series' },
        { code: '10.14', titleZh: '求函数的泰勒或麦克劳林级数', titleEn: 'Finding Taylor or Maclaurin Series for a Function' },
        { code: '10.15', titleZh: '函数表示为幂级数', titleEn: 'Representing Functions as Power Series' },
      ],
    },
  ],
  mech: [
    {
      id: 'mech-u1', code: '1', titleZh: '运动学', titleEn: 'Kinematics',
      topics: [
        { code: '1.1', titleZh: '一维运动学', titleEn: 'Kinematics in One Dimension' },
        { code: '1.2', titleZh: '二维运动学', titleEn: 'Kinematics in Two Dimensions' },
      ],
    },
    {
      id: 'mech-u2', code: '2', titleZh: '力与平动动力学', titleEn: 'Force and Translational Dynamics',
      topics: [
        { code: '2.1', titleZh: '质心', titleEn: 'Center of Mass' },
        { code: '2.2', titleZh: '系统', titleEn: 'Systems' },
        { code: '2.3', titleZh: '牛顿第一与第二定律', titleEn: "Newton's Laws of Motion: First and Second Law" },
        { code: '2.4', titleZh: '圆周运动', titleEn: 'Circular Motion' },
        { code: '2.5', titleZh: '牛顿第三定律', titleEn: "Newton's Laws of Motion: Third Law" },
        { code: '2.6', titleZh: '万有引力', titleEn: 'Gravitation' },
        { code: '2.7', titleZh: '阻力与终端速度', titleEn: 'Resistive Forces and Terminal Velocity' },
        { code: '2.8', titleZh: '弹簧力与非理想弹簧', titleEn: 'Spring Forces and Nonideal Springs' },
      ],
    },
    {
      id: 'mech-u3', code: '3', titleZh: '功、能量与功率', titleEn: 'Work, Energy, and Power',
      topics: [
        { code: '3.1', titleZh: '动能定理', titleEn: 'Work–Energy Theorem' },
        { code: '3.2', titleZh: '力与势能', titleEn: 'Forces and Potential Energy' },
        { code: '3.3', titleZh: '机械能守恒', titleEn: 'Conservation of Energy' },
        { code: '3.4', titleZh: '功率', titleEn: 'Power' },
        { code: '3.5', titleZh: '变力做功与势能函数', titleEn: 'Work by Variable Forces and Potential Energy Functions' },
      ],
    },
    {
      id: 'mech-u4', code: '4', titleZh: '线动量', titleEn: 'Linear Momentum',
      topics: [
        { code: '4.1', titleZh: '冲量与动量', titleEn: 'Impulse and Momentum' },
        { code: '4.2', titleZh: '动量守恒与碰撞', titleEn: 'Conservation of Linear Momentum, Collisions' },
      ],
    },
    {
      id: 'mech-u5', code: '5', titleZh: '力矩与转动动力学', titleEn: 'Torque and Rotational Dynamics',
      topics: [
        { code: '5.1', titleZh: '力矩与静力学', titleEn: 'Torque and Rotational Statics' },
        { code: '5.2', titleZh: '转动运动学', titleEn: 'Rotational Kinematics' },
        { code: '5.3', titleZh: '转动动力学', titleEn: 'Rotational Dynamics and Energy' },
      ],
    },
    {
      id: 'mech-u6', code: '6', titleZh: '转动系统的能量与动量', titleEn: 'Energy and Momentum of Rotating Systems',
      topics: [
        { code: '6.1', titleZh: '转动动能', titleEn: 'Rotational Kinetic Energy' },
        { code: '6.2', titleZh: '角动量', titleEn: 'Angular Momentum' },
        { code: '6.3', titleZh: '滚动', titleEn: 'Rolling' },
        { code: '6.4', titleZh: '轨道', titleEn: 'Orbits' },
      ],
    },
    {
      id: 'mech-u7', code: '7', titleZh: '振动', titleEn: 'Oscillations',
      topics: [
        { code: '7.1', titleZh: '周期运动', titleEn: 'Periodic Motion' },
        { code: '7.2', titleZh: '单摆', titleEn: 'Pendulums' },
        { code: '7.3', titleZh: '复摆', titleEn: 'Physical Pendulums' },
      ],
    },
  ],
  em: [
    {
      id: 'em-u8', code: '8', titleZh: '电荷、电场与高斯定律', titleEn: "Electric Charges, Fields, and Gauss's Law",
      topics: [
        { code: '8.1', titleZh: '电荷与力', titleEn: 'Electric Charge and Force' },
        { code: '8.2', titleZh: '电场', titleEn: 'Electric Fields' },
        { code: '8.3', titleZh: '电场叠加', titleEn: 'Electric Field of Charge Distributions' },
        { code: '8.4', titleZh: '电通量', titleEn: 'Electric Flux' },
        { code: '8.5', titleZh: '高斯定律', titleEn: "Gauss's Law" },
        { code: '8.6', titleZh: '电荷性质与电荷守恒', titleEn: 'Properties and Conservation of Charge' },
        { code: '8.7', titleZh: '连续电荷分布的电场积分', titleEn: 'Electric Fields by Integration' },
        { code: '8.8', titleZh: '电力、引力与宏观物性', titleEn: 'Electric and Gravitational Forces in Matter' },
        { code: '8.9', titleZh: '介电率与电极化', titleEn: 'Permittivity and Electric Polarization' },
        { code: '8.10', titleZh: '绝缘体电荷与内部电场', titleEn: 'Charge and Fields inside Insulators' },
        { code: '8.11', titleZh: '电荷密度与包围电荷积分', titleEn: 'Charge Density and Enclosed Charge' },
      ],
    },
    {
      id: 'em-u9', code: '9', titleZh: '电势', titleEn: 'Electric Potential',
      topics: [
        { code: '9.1', titleZh: '电势能', titleEn: 'Electric Potential Energy' },
        { code: '9.2', titleZh: '电势', titleEn: 'Electric Potential' },
        { code: '9.3', titleZh: '电势与场', titleEn: 'Electric Potential Due to Charge Distributions' },
        { code: '9.4', titleZh: '电势差与功', titleEn: 'Conservation of Electric Energy' },
        { code: '9.5', titleZh: '电势能积分与多电荷系统', titleEn: 'Potential Energy Integrals and Charge Systems' },
        { code: '9.6', titleZh: '电池与化学电势差', titleEn: 'Batteries and Chemical Potential Difference' },
      ],
    },
    {
      id: 'em-u10', code: '10', titleZh: '导体与电容器', titleEn: 'Conductors and Capacitors',
      topics: [
        { code: '10.1', titleZh: '导体静电', titleEn: 'Electrostatics with Conductors' },
        { code: '10.2', titleZh: '电荷再分布', titleEn: 'Redistribution of Charge between Conductors' },
        { code: '10.3', titleZh: '电容器', titleEn: 'Capacitors' },
        { code: '10.4', titleZh: '电介质', titleEn: 'Dielectrics' },
        { code: '10.5', titleZh: '接触再分布与感应接地', titleEn: 'Charge Redistribution and Grounding' },
        { code: '10.6', titleZh: '导体静电平衡的建立', titleEn: 'Establishing Electrostatic Equilibrium' },
        { code: '10.7', titleZh: '平行板电容的电场与充电功', titleEn: 'Parallel-Plate Fields and Charging Work' },
      ],
    },
    {
      id: 'em-u11', code: '11', titleZh: '电路', titleEn: 'Electric Circuits',
      topics: [
        { code: '11.1', titleZh: '电流', titleEn: 'Electric Current' },
        { code: '11.2', titleZh: '简单电路', titleEn: 'Simple Circuits' },
        { code: '11.3', titleZh: '电阻与欧姆定律', titleEn: 'Resistance, Resistivity, and Ohm’s Law' },
        { code: '11.4', titleZh: '电功率', titleEn: 'Electric Power' },
        { code: '11.5', titleZh: '复合直流电路', titleEn: 'Compound Direct Current Circuits' },
        { code: '11.6', titleZh: '基尔霍夫环路', titleEn: "Kirchhoff's Loop Rule" },
        { code: '11.7', titleZh: '基尔霍夫结点', titleEn: "Kirchhoff's Junction Rule" },
        { code: '11.8', titleZh: 'RC 电路', titleEn: 'Resistor–Capacitor (RC) Circuits' },
        { code: '11.9', titleZh: '电流密度与截面积分', titleEn: 'Current Density and Surface Integration' },
        { code: '11.10', titleZh: '电路元件、开闭与拓扑', titleEn: 'Circuit Elements, Open Circuits, and Topology' },
        { code: '11.11', titleZh: '电容网络与电荷守恒', titleEn: 'Capacitor Networks and Charge Conservation' },
      ],
    },
    {
      id: 'em-u12', code: '12', titleZh: '磁场与电磁学', titleEn: 'Magnetic Fields and Electromagnetism',
      topics: [
        { code: '12.1', titleZh: '磁场', titleEn: 'Magnetic Fields' },
        { code: '12.2', titleZh: '运动电荷与磁场', titleEn: 'Magnetism and Moving Charges' },
        { code: '12.3', titleZh: '毕奥–萨伐尔定律', titleEn: 'Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law' },
        { code: '12.4', titleZh: '安培定律', titleEn: "Ampère's Law" },
        { code: '12.5', titleZh: '磁偶极与磁性材料', titleEn: 'Magnetic Dipoles and Magnetic Materials' },
        { code: '12.6', titleZh: '磁导率与材料响应', titleEn: 'Magnetic Permeability and Material Response' },
        { code: '12.7', titleZh: '运动电荷产生的磁场', titleEn: 'Magnetic Field of a Moving Charge' },
        { code: '12.8', titleZh: '复合场与霍尔效应', titleEn: 'Crossed Fields and the Hall Effect' },
        { code: '12.9', titleZh: '毕奥–萨伐尔积分与电流几何', titleEn: 'Biot–Savart Integration and Current Geometry' },
        { code: '12.10', titleZh: '多电流磁场叠加', titleEn: 'Superposition of Magnetic Fields' },
      ],
    },
    {
      id: 'em-u13', code: '13', titleZh: '电磁感应', titleEn: 'Electromagnetic Induction',
      topics: [
        { code: '13.1', titleZh: '磁通量', titleEn: 'Magnetic Flux' },
        { code: '13.2', titleZh: '电磁感应', titleEn: 'Electromagnetic Induction' },
        { code: '13.3', titleZh: '感应电流与磁力', titleEn: 'Induced Currents and Magnetic Forces' },
        { code: '13.4', titleZh: '电感', titleEn: 'Inductance' },
        { code: '13.5', titleZh: 'LR 电路', titleEn: 'Circuits with Resistors and Inductors (LR Circuits)' },
        { code: '13.6', titleZh: 'LC 电路', titleEn: 'Circuits with Capacitors and Inductors (LC Circuits)' },
        { code: '13.7', titleZh: '麦克斯韦方程与电磁波', titleEn: 'Maxwell Equations and Electromagnetic Waves' },
        { code: '13.8', titleZh: '感应回路受力与运动', titleEn: 'Forces and Motion of Induced-Current Loops' },
      ],
    },
  ],
};

/** AP units + prerequisite foundational units (prep first). */

/** AP units + prerequisite foundational units (prep first). */
export const ALL_UNITS = mergeUnits(UNITS);
