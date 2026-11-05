export async function loadCourseData(subject) {
  switch (subject) {
    case 'bio': return import('./bio/index.js');
    case 'math': return import('./math/index.js');
    case 'mech': return import('./mech/index.js');
    case 'em': return import('./em/index.js');
    default: return null;
  }
}
export const COURSE_IDS = ['bio','math','mech','em'];
