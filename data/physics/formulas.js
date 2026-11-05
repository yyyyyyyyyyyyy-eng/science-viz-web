/** AP Physics C Mechanics + E&M equation sheet (paraphrased structure of College Board sheet). */
export const PHYSICS_FORMULA_GROUPS = [
  {
    id: 'const',
    title: '常数与换算',
    titleEn: 'Constants and Conversion Factors',
    rows: [
      { id: 'c-g', latex: 'g=9.8\\,\\mathrm{m\\,s^{-2}}', symbols: [{ s: 'g', m: '重力加速度（近地）' }], conditions: '地球表面近似', derivation: '经验/测量值。', example: { q: '自由落体 2 s 的速度', a: 'v=gt=19.6\\,\\mathrm{m\\,s^{-1}}' }, related: ['#/t/mech/mech-u1/1.1'] },
      { id: 'c-G', latex: 'G=6.67\\times 10^{-11}\\,\\mathrm{N\\,m^{2}\\,kg^{-2}}', symbols: [{ s: 'G', m: '万有引力常量' }], conditions: 'SI', derivation: '实验测定。', example: { q: '两 1 kg 相距 1 m 的引力', a: '6.67\\times 10^{-11}\\,\\mathrm{N}' }, related: ['#/t/mech/mech-u2/2.6'] },
      { id: 'c-k', latex: 'k=\\dfrac{1}{4\\pi\\varepsilon_0}=9.0\\times 10^{9}\\,\\mathrm{N\\,m^{2}\\,C^{-2}}', symbols: [{ s: 'k', m: '库仑常量' }], conditions: '真空', derivation: '由 \\(\\varepsilon_0\\) 定义。', example: { q: '两 1 C 相距 1 m 的力', a: '9.0\\times 10^{9}\\,\\mathrm{N}' }, related: ['#/t/em/em-u8/8.1'] },
      { id: 'c-e0', latex: '\\varepsilon_0=8.85\\times 10^{-12}\\,\\mathrm{C^{2}\\,N^{-1}\\,m^{-2}}', symbols: [{ s: '\\varepsilon_0', m: '真空介电常量' }], conditions: '真空', derivation: '定义。', example: { q: '平行板 C 公式中的角色', a: 'C=\\varepsilon_0 A/d' }, related: ['#/t/em/em-u10/10.3'] },
      { id: 'c-mu', latex: '\\mu_0=4\\pi\\times 10^{-7}\\,\\mathrm{T\\,m\\,A^{-1}}', symbols: [{ s: '\\mu_0', m: '真空磁导率' }], conditions: '真空', derivation: '定义。', example: { q: '长直导线 B', a: 'B=\\dfrac{\\mu_0 I}{2\\pi r}' }, related: ['#/t/em/em-u12/12.3'] },
      { id: 'c-e', latex: 'e=1.60\\times 10^{-19}\\,\\mathrm{C}', symbols: [{ s: 'e', m: '元电荷' }], conditions: '', derivation: '实验。', example: { q: '电子电荷', a: '-e' }, related: ['#/t/em/em-u8/8.1'] },
    ],
  },
  {
    id: 'mech-kin',
    title: '力学 · 运动学',
    titleEn: 'Mechanics · Kinematics',
    rows: [
      { id: 'm-v', latex: 'v=v_0+at', symbols: [{ s: 'a', m: '恒加速度' }], conditions: '匀加速直线', derivation: 'a=\\dfrac{\\mathrm{d}v}{\\mathrm{d}t} 积分。', example: { q: 'v_0=0,a=2,t=3', a: 'v=6' }, related: ['#/t/mech/mech-u1/1.1'] },
      { id: 'm-x', latex: 'x=x_0+v_0 t+\\dfrac{1}{2}at^2', symbols: [], conditions: '匀加速', derivation: 'v 再积分。', example: { q: '自由落体 h', a: 'h=\\dfrac{1}{2}gt^2' }, related: ['#/t/mech/mech-u1/1.1'] },
      { id: 'm-v2', latex: 'v^2=v_0^2+2a(x-x_0)', symbols: [], conditions: '匀加速', derivation: '消去 t。', example: { q: '刹停距离', a: 'x=\\dfrac{v_0^2}{2|a|}' }, related: ['#/t/mech/mech-u1/1.1'] },
      { id: 'm-R', latex: 'R=\\dfrac{v_0^2\\sin 2\\theta}{g}', symbols: [{ s: 'R', m: '水平射程' }], conditions: '无阻力、平地', derivation: '飞行时间与水平速度。', example: { q: '\\theta=45^\\circ', a: 'R=\\dfrac{v_0^2}{g}' }, related: ['#/t/mech/mech-u1/1.2'] },
    ],
  },
  {
    id: 'mech-dyn',
    title: '力学 · 动力学与圆周',
    titleEn: 'Mechanics · Dynamics',
    rows: [
      { id: 'm-F', latex: '\\sum \\vec F=m\\vec a', symbols: [{ s: 'm', m: '质量' }], conditions: '惯性系', derivation: '牛顿第二定律。', example: { q: 'F=10\\,\\mathrm{N},m=2\\,\\mathrm{kg}', a: 'a=5\\,\\mathrm{m\\,s^{-2}}' }, related: ['#/t/mech/mech-u2/2.3'] },
      { id: 'm-f', latex: 'f_s\\le \\mu_s N,\\quad f_k=\\mu_k N', symbols: [{ s: '\\mu', m: '摩擦系数' }], conditions: '接触面模型', derivation: '经验模型。', example: { q: '水平拉临界', a: 'F=\\mu_s mg' }, related: ['#/t/mech/mech-u2/2.3'] },
      { id: 'm-cent', latex: 'a_c=\\dfrac{v^2}{r}=\\omega^2 r', symbols: [{ s: 'a_c', m: '向心加速度' }], conditions: '匀速圆周', derivation: '速度方向变化率。', example: { q: 'v=4,r=2', a: 'a_c=8' }, related: ['#/t/mech/mech-u2/2.4'] },
      { id: 'm-grav', latex: 'F_g=\\dfrac{GMm}{r^2}', symbols: [], conditions: '质点/球对称外', derivation: '牛顿万有引力。', example: { q: '环绕速度', a: 'v=\\sqrt{\\dfrac{GM}{r}}' }, related: ['#/t/mech/mech-u2/2.6'] },
    ],
  },
  {
    id: 'mech-energy',
    title: '力学 · 功、能量、动量',
    titleEn: 'Work, Energy, Momentum',
    rows: [
      { id: 'm-W', latex: 'W=\\int \\vec F\\cdot \\mathrm{d}\\vec r', symbols: [{ s: 'W', m: '功' }], conditions: '路径积分', derivation: '功的定义。', example: { q: '恒力平行位移', a: 'W=Fd' }, related: ['#/t/mech/mech-u3/3.1'] },
      { id: 'm-K', latex: 'K=\\dfrac{1}{2}mv^2', symbols: [], conditions: '非相对论', derivation: '动能定理。', example: { q: 'm=2,v=3', a: 'K=9' }, related: ['#/t/mech/mech-u3/3.1'] },
      { id: 'm-U', latex: 'U_g=mgh,\\quad U_s=\\dfrac{1}{2}kx^2', symbols: [{ s: 'k', m: '劲度系数' }], conditions: '近地；胡克区间', derivation: '保守力势能。', example: { q: '弹簧压缩 x', a: 'U=\\dfrac{1}{2}kx^2' }, related: ['#/t/mech/mech-u3/3.2'] },
      { id: 'm-p', latex: '\\vec p=m\\vec v,\\quad \\vec J=\\int \\vec F\\,\\mathrm{d}t=\\Delta\\vec p', symbols: [{ s: 'J', m: '冲量' }], conditions: '', derivation: '牛顿定律积分。', example: { q: '动量守恒碰撞', a: 'm_1v_1+m_2v_2=\\mathrm{const}' }, related: ['#/t/mech/mech-u4/4.1'] },
    ],
  },
  {
    id: 'mech-rot',
    title: '力学 · 转动与振动',
    titleEn: 'Rotation & Oscillations',
    rows: [
      { id: 'm-tau', latex: '\\sum \\tau=I\\alpha', symbols: [{ s: 'I', m: '转动惯量' }], conditions: '定轴', derivation: '转动牛顿第二定律。', example: { q: '圆盘 I', a: 'I=\\dfrac{1}{2}mR^2' }, related: ['#/t/mech/mech-u5/5.3'] },
      { id: 'm-L', latex: 'L=I\\omega', symbols: [{ s: 'L', m: '角动量' }], conditions: '定轴', derivation: '定义。', example: { q: '无外力矩', a: 'L 守恒' }, related: ['#/t/mech/mech-u6/6.2'] },
      { id: 'm-shm', latex: 'T=2\\pi\\sqrt{\\dfrac{m}{k}},\\quad \\omega=\\sqrt{\\dfrac{k}{m}}', symbols: [], conditions: '简谐（线性恢复力）', derivation: '解微分方程 \\(\\ddot x=-\\omega^2 x\\)。', example: { q: 'k=4,m=1', a: 'T=\\pi' }, related: ['#/t/mech/mech-u7/7.1'] },
      { id: 'm-pend', latex: 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', symbols: [{ s: 'L', m: '摆长' }], conditions: '小角近似', derivation: '\\(\\sin\\theta\\approx\\theta\\)。', example: { q: 'L=1\\,\\mathrm{m}', a: 'T\\approx 2.0\\,\\mathrm{s}' }, related: ['#/t/mech/mech-u7/7.2'] },
    ],
  },
  {
    id: 'em-es',
    title: '电磁 · 静电与电容',
    titleEn: 'E&M · Electrostatics',
    rows: [
      { id: 'e-F', latex: '\\vec F=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q_1 q_2}{r^2}\\hat r', symbols: [], conditions: '点电荷', derivation: '库仑定律。', example: { q: '同号电荷', a: '排斥' }, related: ['#/t/em/em-u8/8.1'] },
      { id: 'e-E', latex: '\\vec E=\\dfrac{\\vec F}{q_0}', symbols: [{ s: 'q_0', m: '试探电荷' }], conditions: '场定义', derivation: '定义。', example: { q: '点电荷场', a: 'E=\\dfrac{kQ}{r^2}' }, related: ['#/t/em/em-u8/8.2'] },
      { id: 'e-gauss', latex: '\\oint \\vec E\\cdot \\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}', symbols: [{ s: 'Q_{enc}', m: '包围电荷' }], conditions: '任意闭合面', derivation: '高斯定律。', example: { q: '均匀球外', a: '等同点电荷' }, related: ['#/t/em/em-u8/8.5'] },
      { id: 'e-V', latex: 'V=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r},\\quad U=qV', symbols: [{ s: 'V', m: '电势' }], conditions: '无穷远为零', derivation: '场的线积分。', example: { q: '等势面', a: '与场线正交' }, related: ['#/t/em/em-u9/9.2'] },
      { id: 'e-C', latex: 'C=\\dfrac{Q}{V}=\\kappa\\varepsilon_0\\dfrac{A}{d}', symbols: [{ s: '\\kappa', m: '介电常数' }], conditions: '平行板近似', derivation: '定义与场。', example: { q: '插入电介质', a: 'C 增大' }, related: ['#/t/em/em-u10/10.3'] },
    ],
  },
  {
    id: 'em-circ',
    title: '电磁 · 电路',
    titleEn: 'E&M · Circuits',
    rows: [
      { id: 'e-ohm', latex: 'V=IR', symbols: [{ s: 'R', m: '电阻' }], conditions: '欧姆导体', derivation: '欧姆定律。', example: { q: 'I=2,R=3', a: 'V=6' }, related: ['#/t/em/em-u11/11.3'] },
      { id: 'e-P', latex: 'P=IV=I^2 R=\\dfrac{V^2}{R}', symbols: [{ s: 'P', m: '功率' }], conditions: '', derivation: '能量对时间。', example: { q: '发热', a: 'P=I^2 R' }, related: ['#/t/em/em-u11/11.4'] },
      { id: 'e-RC', latex: 'q(t)=CE\\left(1-e^{-\\dfrac{t}{RC}}\\right),\\quad \\tau=RC', symbols: [{ s: '\\tau', m: '时间常数' }], conditions: '充电；放电则指数衰减', derivation: '解微分方程。', example: { q: '约 5\\tau', a: '接近稳态' }, related: ['#/t/em/em-u11/11.8'] },
    ],
  },
  {
    id: 'em-mag',
    title: '电磁 · 磁场与感应',
    titleEn: 'Magnetic Fields & Induction',
    rows: [
      { id: 'e-Fb', latex: '\\vec F=q\\vec v\\times \\vec B', symbols: [], conditions: '', derivation: '洛伦兹力。', example: { q: 'v\\perp B', a: '圆周运动 r=\\dfrac{mv}{|q|B}' }, related: ['#/t/em/em-u12/12.2'] },
      { id: 'e-wire', latex: 'B=\\dfrac{\\mu_0 I}{2\\pi r}', symbols: [], conditions: '无限长直导线', derivation: '安培/毕奥–萨伐尔。', example: { q: '距离加倍', a: 'B 减半' }, related: ['#/t/em/em-u12/12.3'] },
      { id: 'e-far', latex: '\\mathcal{E}=-\\dfrac{\\mathrm{d}\\Phi_B}{\\mathrm{d}t},\\quad \\Phi_B=\\int \\vec B\\cdot \\mathrm{d}\\vec A', symbols: [{ s: '\\mathcal{E}', m: '感应电动势' }], conditions: '', derivation: '法拉第定律；负号=楞次。', example: { q: '通量匀增', a: '|\\mathcal{E}| 恒定' }, related: ['#/t/em/em-u13/13.2'] },
    ],
  },
];
