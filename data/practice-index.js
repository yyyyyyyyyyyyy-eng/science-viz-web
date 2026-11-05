export async function loadBank(subject, unitId) {
  return import(`./${subject}/practice/${unitId}.js`);
}
