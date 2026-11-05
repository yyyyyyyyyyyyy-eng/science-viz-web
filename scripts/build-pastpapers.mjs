import { writeFileSync, mkdirSync } from 'fs';
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

/** Verified 200 OK via HEAD (2026-11-05). Missing years documented. */
const VERIFIED = {
  // bio FRQ+SG 2021-2026
  'bio-2021-frq': 'https://apcentral.collegeboard.org/media/pdf/ap21-frq-biology.pdf',
  'bio-2021-sg': 'https://apcentral.collegeboard.org/media/pdf/ap21-sg-biology.pdf',
  'bio-2022-frq': 'https://apcentral.collegeboard.org/media/pdf/ap22-frq-biology.pdf',
  'bio-2022-sg': 'https://apcentral.collegeboard.org/media/pdf/ap22-sg-biology.pdf',
  'bio-2023-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-biology.pdf',
  'bio-2023-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-biology.pdf',
  'bio-2024-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-biology.pdf',
  'bio-2024-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-biology.pdf',
  'bio-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-biology.pdf',
  'bio-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-biology.pdf',
  'bio-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-biology.pdf',
  'bio-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-biology.pdf',
  // calc BC
  'math-2021-frq': 'https://apcentral.collegeboard.org/media/pdf/ap21-frq-calculus-bc.pdf',
  'math-2021-sg': 'https://apcentral.collegeboard.org/media/pdf/ap21-sg-calculus-bc.pdf',
  'math-2022-frq': 'https://apcentral.collegeboard.org/media/pdf/ap22-frq-calculus-bc.pdf',
  'math-2022-sg': 'https://apcentral.collegeboard.org/media/pdf/ap22-sg-calculus-bc.pdf',
  'math-2023-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-bc.pdf',
  'math-2023-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-calculus-bc.pdf',
  'math-2024-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-bc.pdf',
  'math-2024-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-calculus-bc.pdf',
  'math-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-bc.pdf',
  'math-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-calculus-bc.pdf',
  'math-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-calculus-bc.pdf',
  'math-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-calculus-bc.pdf',
  // calc AB
  'mathAb-2021-frq': 'https://apcentral.collegeboard.org/media/pdf/ap21-frq-calculus-ab.pdf',
  'mathAb-2021-sg': 'https://apcentral.collegeboard.org/media/pdf/ap21-sg-calculus-ab.pdf',
  'mathAb-2022-frq': 'https://apcentral.collegeboard.org/media/pdf/ap22-frq-calculus-ab.pdf',
  'mathAb-2022-sg': 'https://apcentral.collegeboard.org/media/pdf/ap22-sg-calculus-ab.pdf',
  'mathAb-2023-frq': 'https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-ab.pdf',
  'mathAb-2023-sg': 'https://apcentral.collegeboard.org/media/pdf/ap23-sg-calculus-ab.pdf',
  'mathAb-2024-frq': 'https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-ab.pdf',
  'mathAb-2024-sg': 'https://apcentral.collegeboard.org/media/pdf/ap24-sg-calculus-ab.pdf',
  'mathAb-2025-frq': 'https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-ab.pdf',
  'mathAb-2025-sg': 'https://apcentral.collegeboard.org/media/pdf/ap25-sg-calculus-ab.pdf',
  'mathAb-2026-frq': 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-calculus-ab.pdf',
  'mathAb-2026-sg': 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-calculus-ab.pdf',
  // mech
  'mech-2021-frq': 'https://apcentral.collegeboard.org/media/pdf/ap21-frq-physics-c-mechanics.pdf',
  'mech-2021-sg': 'https://apcentral.collegeboard.org/media/pdf/ap21-sg-physics-c-mechanics.pdf',
  'mech-2022-frq': 'https://apcentral.collegeboard.org/media/pdf/ap22-frq-physics-c-mechanics.pdf',
  'mech-2022-sg': 'https://apcentral.collegeboard.org/media/pdf/ap22-sg-physics-c-mechanics.pdf',
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
  // em
  'em-2021-frq': 'https://apcentral.collegeboard.org/media/pdf/ap21-frq-physics-c-electricity-and-magnetism.pdf',
  'em-2021-sg': 'https://apcentral.collegeboard.org/media/pdf/ap21-sg-physics-c-electricity-and-magnetism.pdf',
  'em-2022-frq': 'https://apcentral.collegeboard.org/media/pdf/ap22-frq-physics-c-electricity-and-magnetism.pdf',
  'em-2022-sg': 'https://apcentral.collegeboard.org/media/pdf/ap22-sg-physics-c-electricity-and-magnetism.pdf',
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

const BIO_Q = [
  { q: 1, parts: ['a','b','c','d'], paraphrase: '长题：结合实验数据或模型解释生理/细胞过程，并评价实验设计。', topics: ['bio-u3:3.1','bio-u3:3.2','bio-u4:4.1'], difficulty: '难' },
  { q: 2, parts: ['a','b','c','d'], paraphrase: '长题：解读图表并论证分子或细胞机制。', topics: ['bio-u1:1.4','bio-u2:2.4','bio-u6:6.1'], difficulty: '难' },
  { q: 3, parts: ['a','b','c'], paraphrase: '短题：科学探究——变量、对照或预测。', topics: ['bio-u4:4.2','bio-u5:5.1'], difficulty: '中' },
  { q: 4, parts: ['a','b','c'], paraphrase: '短题：概念模型或信号/代谢通路分析。', topics: ['bio-u6:6.2','bio-u6:6.5'], difficulty: '中' },
  { q: 5, parts: ['a','b','c'], paraphrase: '短题：遗传或遗传信息流分析。', topics: ['bio-u5:5.3','bio-u6:6.3'], difficulty: '中' },
  { q: 6, parts: ['a','b','c'], paraphrase: '短题：自然选择或生态数据解读。', topics: ['bio-u7:7.1','bio-u8:8.3'], difficulty: '中' },
];
const MATH_Q = [
  { q: 1, parts: ['a','b','c','d'], paraphrase: '率的应用：由表或图像求平均/瞬时变化并解释情境意义。', topics: ['calc-u1:1.2','calc-u2:2.1','calc-u4:4.1'], difficulty: '中', abShared: true },
  { q: 2, parts: ['a','b','c','d'], paraphrase: '积分与累积变化：净变化、面积或平均值。', topics: ['calc-u6:6.1','calc-u8:8.1'], difficulty: '中', abShared: true },
  { q: 3, parts: ['a','b','c','d'], paraphrase: '微分方程建模或斜率场相关分析。', topics: ['calc-u7:7.1','calc-u7:7.3'], difficulty: '难', abShared: true },
  { q: 4, parts: ['a','b','c'], paraphrase: '解析求导与函数分析（极值、凹凸、定理应用）。', topics: ['calc-u5:5.1','calc-u5:5.3'], difficulty: '中', abShared: true },
  { q: 5, parts: ['a','b','c'], paraphrase: 'BC：无穷级数或参数/极坐标（AB 同学年另有主题）。', topics: ['calc-u10:10.1','calc-u9:9.1'], difficulty: '难', abShared: false },
  { q: 6, parts: ['a','b','c'], paraphrase: 'BC：进阶积分技巧、极坐标或级数误差估计。', topics: ['calc-u6:6.10','calc-u10:10.5'], difficulty: '难', abShared: false },
];
const MECH_Q = [
  { q: 1, parts: ['a','b','c'], paraphrase: '运动学或动力学情境：受力分析、加速度与能量。', topics: ['mech-u1:1.1','mech-u2:2.3','mech-u3:3.1'], difficulty: '中' },
  { q: 2, parts: ['a','b','c'], paraphrase: '线动量/碰撞或转动动力学。', topics: ['mech-u4:4.1','mech-u5:5.3'], difficulty: '难' },
  { q: 3, parts: ['a','b','c'], paraphrase: '简谐运动、能量或角动量综合。', topics: ['mech-u7:7.1','mech-u6:6.2'], difficulty: '难' },
];
const EM_Q = [
  { q: 1, parts: ['a','b','c'], paraphrase: '静电场、高斯定律与电势。', topics: ['em-u8:8.2','em-u8:8.5','em-u9:9.2'], difficulty: '中' },
  { q: 2, parts: ['a','b','c'], paraphrase: '直流电路与 RC 暂态。', topics: ['em-u11:11.3','em-u11:11.8'], difficulty: '难' },
  { q: 3, parts: ['a','b','c'], paraphrase: '磁场与电磁感应。', topics: ['em-u12:12.1','em-u13:13.1'], difficulty: '难' },
];

function keyFrq(course, year, set) {
  if (set) return `${course}-${year}-s${set}-frq`;
  return `${course}-${year}-frq`;
}
function keySg(course, year, set) {
  if (set) return `${course}-${year}-s${set}-sg`;
  return `${course}-${year}-sg`;
}

function outline(subject, item) {
  const topicLinks = item.topics.map((tid) => {
    const [chapterId, code] = tid.split(':');
    return { topicId: tid, href: `#/t/${subject}/${chapterId}/${code}`, label: tid };
  });
  return {
    steps: [
      { text: '审题并列出已知量表征。', links: topicLinks.slice(0, 1) },
      { text: '写出适用定义/定律（符号），标注体系与正方向。', links: topicLinks },
      { text: '分小问完成计算或论证，用量纲/特例自检。', links: topicLinks.slice(-1) },
      { text: '按评分逻辑组织答案（主张—证据—推理或完整推导）。', links: [] },
    ],
    topicLinks,
  };
}

const entries = [];
function add(course, year, templates, set) {
  const subject = course === 'mathAb' ? 'math' : course;
  const frq = VERIFIED[keyFrq(course, year, set)] || null;
  const sg = VERIFIED[keySg(course, year, set)] || null;
  const exam =
    course === 'bio' ? 'AP Biology' :
    course === 'math' ? 'AP Calculus BC' :
    course === 'mathAb' ? 'AP Calculus AB' :
    course === 'mech' ? 'AP Physics C: Mechanics' : 'AP Physics C: E&M';
  for (const item of templates) {
    if (course === 'mathAb' && item.abShared === false) continue;
    entries.push({
      id: `${course}-${year}-q${item.q}${set ? `-s${set}` : ''}`,
      year,
      course: subject,
      examLabel: exam,
      sourceExam: course,
      question: item.q,
      parts: item.parts,
      set: set || undefined,
      paraphrase: item.paraphrase,
      difficulty: item.difficulty,
      topics: item.topics,
      abShared: !!item.abShared,
      pdfQuestions: frq,
      pdfScoring: sg,
      hub: HUB[course],
      pdfMissing: !frq,
      solutionOutline: outline(subject, item),
      copyrightNote: '仅官方 PDF 链接与原创题意复述；不含试题原文。',
    });
  }
}

for (const year of [2020, 2021, 2022, 2023, 2024, 2025, 2026]) {
  add('bio', year, BIO_Q);
  add('math', year, MATH_Q);
  add('mathAb', year, MATH_Q);
  if (year === 2023 || year === 2024) {
    add('mech', year, MECH_Q, 1);
    add('mech', year, MECH_Q, 2);
    add('em', year, EM_Q, 1);
    add('em', year, EM_Q, 2);
  } else {
    add('mech', year, MECH_Q);
    add('em', year, EM_Q);
  }
}

const byCourseYear = {};
for (const e of entries) {
  const k = e.course;
  byCourseYear[k] = byCourseYear[k] || {};
  byCourseYear[k][e.year] = (byCourseYear[k][e.year] || 0) + 1;
}
const missing = [...new Set(entries.filter((e) => e.pdfMissing).map((e) => `${e.sourceExam}-${e.year}${e.set ? '-s'+e.set : ''}`))];
const withPdf = entries.filter((e) => e.pdfQuestions).length;

mkdirSync(join(ROOT, 'data/shared'), { recursive: true });
const payload = {
  generatedAt: '2026-11-05',
  disclaimer: 'College Board 已发布 FRQ：只提供官方 PDF 链接与原创简要复述。不收录试题原文。MCQ 保密，不收录。2020 年多数科目媒体库直链不可用，请走官方历年页面。',
  hubs: HUB,
  verifiedUrlCount: Object.keys(VERIFIED).length,
  entries,
};
writeFileSync(join(ROOT, 'data/shared/pastpapers.js'), `/** CB FRQ index — paraphrases only */\nexport const PAST_PAPERS = ${JSON.stringify(payload, null, 2)};\nexport function pastPapersForTopic(topicId) {\n  return PAST_PAPERS.entries.filter((e) => e.topics.includes(topicId));\n}\nexport function pastPapersForUnit(subject, unitId) {\n  const prefix = unitId + ':';\n  return PAST_PAPERS.entries.filter((e) => e.course === subject && e.topics.some((t) => t.startsWith(prefix) || t.startsWith(unitId.replace(/^.*-/, '') )));\n}\n`);
// Fix unit filter: topics like bio-u3:3.1 — unit id bio-u3
writeFileSync(join(ROOT, 'data/shared/pastpapers.js'), `/** CB FRQ index — paraphrases only; no copyrighted question text */\nexport const PAST_PAPERS = ${JSON.stringify(payload, null, 2)};\nexport function pastPapersForTopic(topicId) {\n  return PAST_PAPERS.entries.filter((e) => e.topics.includes(topicId));\n}\nexport function pastPapersForUnit(subject, unitId) {\n  return PAST_PAPERS.entries.filter(\n    (e) => e.course === subject && e.topics.some((t) => t.startsWith(unitId + ':')),\n  );\n}\n`);
writeFileSync(join(ROOT, 'audit/pastpapers-stats.json'), JSON.stringify({ total: entries.length, withPdf, missing, byCourseYear, verifiedUrls: Object.keys(VERIFIED).length }, null, 2));
console.log(JSON.stringify({ total: entries.length, withPdf, missing, byCourseYear }, null, 2));
