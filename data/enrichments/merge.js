/** Merge enrichment overlays into topic objects (immutable-ish shallow merge). */
export function applyEnrichment(topic, enrichment) {
  if (!topic || !enrichment) return topic;
  const out = { ...topic, ...enrichment, enriched: true, enrichedAt: enrichment.enrichedAt || 'batch' };
  // Deep-ish for arrays we replace wholly when provided
  for (const k of [
    'learningObjectives', 'essentialKnowledge', 'formulas', 'derivationNotes', 'conditions',
    'keyPoints', 'misconceptions', 'examples', 'examTips', 'related', 'connections',
    'development', 'checks', 'modules', 'vocabulary',
  ]) {
    if (enrichment[k] != null) out[k] = enrichment[k];
  }
  return out;
}

export function wrapCourseData(data, enrichmentsById) {
  if (!data || !enrichmentsById) return data;
  const origGet = data.getTopic?.bind(data);
  const origAll = data.allTopics?.bind(data);
  return {
    ...data,
    getTopic(chapterId, code) {
      const t = origGet ? origGet(chapterId, code) : null;
      if (!t) return null;
      const enr = enrichmentsById[t.id] || enrichmentsById[`${t.subject}/${t.chapterId}/${t.code}`];
      return applyEnrichment(t, enr);
    },
    allTopics() {
      const list = origAll ? origAll() : [];
      return list.map((t) => {
        const enr = enrichmentsById[t.id] || enrichmentsById[`${t.subject}/${t.chapterId}/${t.code}`];
        return applyEnrichment(t, enr);
      });
    },
  };
}
