import { wrapCourseData } from './enrichments/merge.js';

let _enrichmentsPromise = null;
async function loadEnrichments() {
  if (!_enrichmentsPromise) {
    _enrichmentsPromise = (async () => {
      const map = {};
      try {
        const b1 = await import('./enrichments/batch1.js');
        Object.assign(map, b1.ENRICHMENTS || {});
      } catch (_) {}
      try {
        const b2 = await import('./enrichments/batch2.js');
        Object.assign(map, b2.ENRICHMENTS || {});
      } catch (_) {}
      return map;
    })();
  }
  return _enrichmentsPromise;
}

export async function loadCourseData(subject) {
  let mod = null;
  switch (subject) {
    case 'bio': mod = await import('./bio/index.js'); break;
    case 'math': mod = await import('./math/index.js'); break;
    case 'mech': mod = await import('./mech/index.js'); break;
    case 'em': mod = await import('./em/index.js'); break;
    default: return null;
  }
  const enrichments = await loadEnrichments();
  return wrapCourseData(mod, enrichments);
}
export const COURSE_IDS = ['bio','math','mech','em'];
