/** Open educational resources and attribution */
export const CREDITS = {
  titleZh: '内容来源与许可',
  titleEn: 'Credits & Licenses',
  intro:
    '练习题与部分讲解改编自开放教育资源（OER）。College Board 官方考题不收录原文，仅提供检索链接。',
  sources: [
    {
      id: 'openstax-biology-2e',
      title: 'OpenStax Biology 2e',
      license: 'CC BY 4.0',
      url: 'https://openstax.org/books/biology-2e/pages/1-introduction',
      note: '概念与题型风格参考；本站题目为教学改写与原创数据。',
    },
    {
      id: 'openstax-calculus',
      title: 'OpenStax Calculus Volumes 1–3',
      license: 'CC BY-NC-SA 4.0',
      url: 'https://openstax.org/details/books/calculus-volume-1',
      note: '多表征与微积分练习风格参考；数值与设问原创或改编。',
    },
    {
      id: 'openstax-university-physics',
      title: 'OpenStax University Physics Volumes 1–3',
      license: 'CC BY 4.0',
      url: 'https://openstax.org/details/books/university-physics-volume-1',
      note: '力学与电磁问题情境与数量级参考。',
    },
    {
      id: 'openstax-college-physics-2e',
      title: 'OpenStax College Physics 2e',
      license: 'CC BY-NC-SA 4.0',
      url: 'https://openstax.org/details/books/college-physics-2e',
      note: '预备物理概念题参考。',
    },
    {
      id: 'original',
      title: '本项目原创 AP 风格题',
      license: 'Project',
      url: '',
      note: '图示由内置 SVG 渲染器生成；参数化题目可换组数据。',
    },
  ],
};

/** College Board AP resources — links only, no copyrighted FRQ text */
export const COLLEGE_BOARD_INDEX = {
  titleZh: 'College Board 官方资源索引',
  titleEn: 'College Board Resource Index',
  disclaimer:
    '以下仅为公开页面链接，便于按单元检索。请勿在此站点期望看到 College Board 已发布 FRQ 的原文转录。',
  courses: [
    {
      subject: 'bio',
      label: 'AP Biology',
      ced: 'https://apcentral.collegeboard.org/courses/ap-biology/course',
      apClassroom: 'https://apclassroom.collegeboard.org/',
      freeResponse: 'https://apcentral.collegeboard.org/courses/ap-biology/exam/past-exam-questions',
      units: [
        { code: '1', title: 'Chemistry of Life', hint: 'Search AP Biology FRQ Unit 1' },
        { code: '2', title: 'Cell Structure and Function', hint: 'Unit 2' },
        { code: '3', title: 'Cellular Energetics', hint: 'Unit 3' },
        { code: '4', title: 'Cell Communication and Cell Cycle', hint: 'Unit 4' },
        { code: '5', title: 'Heredity', hint: 'Unit 5' },
        { code: '6', title: 'Gene Expression and Regulation', hint: 'Unit 6' },
        { code: '7', title: 'Natural Selection', hint: 'Unit 7' },
        { code: '8', title: 'Ecology', hint: 'Unit 8' },
      ],
    },
    {
      subject: 'math',
      label: 'AP Calculus BC',
      ced: 'https://apcentral.collegeboard.org/courses/ap-calculus-bc/course',
      freeResponse: 'https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam/past-exam-questions',
      units: [
        { code: '1', title: 'Limits and Continuity' },
        { code: '2', title: 'Differentiation: Definition and Fundamental Properties' },
        { code: '3', title: 'Differentiation: Composite, Implicit, Inverse' },
        { code: '4', title: 'Contextual Applications of Differentiation' },
        { code: '5', title: 'Analytical Applications of Differentiation' },
        { code: '6', title: 'Integration and Accumulation of Change' },
        { code: '7', title: 'Differential Equations' },
        { code: '8', title: 'Applications of Integration' },
        { code: '9', title: 'Parametric, Polar, Vector' },
        { code: '10', title: 'Infinite Sequences and Series' },
      ],
    },
    {
      subject: 'mech',
      label: 'AP Physics C: Mechanics',
      ced: 'https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/course',
      freeResponse: 'https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam/past-exam-questions',
      units: [
        { code: '1', title: 'Kinematics' },
        { code: '2', title: 'Force and Translational Dynamics' },
        { code: '3', title: 'Work, Energy, and Power' },
        { code: '4', title: 'Linear Momentum' },
        { code: '5', title: 'Torque and Rotational Dynamics' },
        { code: '6', title: 'Energy and Momentum of Rotating Systems' },
        { code: '7', title: 'Oscillations' },
      ],
    },
    {
      subject: 'em',
      label: 'AP Physics C: Electricity and Magnetism',
      ced: 'https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/course',
      freeResponse: 'https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/exam/past-exam-questions',
      units: [
        { code: '8', title: 'Electric Charges, Fields, and Gauss’s Law' },
        { code: '9', title: 'Electric Potential' },
        { code: '10', title: 'Conductors and Capacitors' },
        { code: '11', title: 'Electric Circuits' },
        { code: '12', title: 'Magnetic Fields and Electromagnetism' },
        { code: '13', title: 'Electromagnetic Induction' },
      ],
    },
  ],
};
