# batch2 bilingual follow-up

Date: 2026-11-08
Scope: `data/enrichments/batch2.js` only, plus this audit and targeted screenshots.
Base: web `8da480c` (vocabulary commit already on main).

## Part 1 — leftovers and bio polish

### Three leftover calc example steps

Verified already bilingual at `4fcaf0c` (the polish commit), and rechecked after this round:

- `math/calc-u9/9.7` `examples[2].steps[3]` has Chinese + English.
- `math/calc-u9/9.8` `examples[2].steps[2]` has Chinese + English.
- `math/calc-u8/8.13` `examples[0].steps[0]` has Chinese + English.

No other steps in those examples were rewritten.

### Bio `5.6` and `7.12`

Both overlays were fully rewritten into Chinese-first bilingual text. The automated sweep found 78/82 Chinese-only strings in `5.6` and 74/81 in `7.12` before this round; after the rewrite, the same sweep reports **0** Chinese-only student-facing strings in both.

Covered fields: learning objectives, essential knowledge, definition, intuition, intuition-detail, formula notes, derivation notes, connections, conditions, key points, misconceptions, example titles/prompts/steps/solutions, exam tips, related titles and relations, development, checks, and summary. No new examples or keys were invented.

### Related-link merge

`bio/bio-u6/6.7` now keeps the overlay’s `6.2` / `6.4` / `7.1` links and adds:

- `6.6` — `基因表达与细胞特化 · Gene Expression and Cell Specialization` (`先修 · Prerequisite`)
- `6.8` — `生物技术 · Biotechnology` (`相关 · Related`)

`bio/bio-u7/7.11` now keeps `7.9` / `7.10` / `8.6` and adds:

- `7.12` — `种群变异 · Variations in Populations` (`相关 · Related`)

No duplicate `7.10`.

### 8.6 related titles

Every related link with `code: '8.6'` in `batch2.js` now uses `生物多样性 · Biodiversity`:

- `bio/bio-u7/7.11`
- `bio/bio-u7/7.12`
- `bio/bio-u8/8.5`
- `bio/bio-u8/8.7`

Teaching prose that merely mentions biodiversity was left alone.

## Part 2 — earlier Chinese-only calc overlays

These 18 existing keys were rewritten into Chinese-first bilingual text without adding keys or a vocabulary field:

`math/calc-u2/2.8`, `math/calc-u3/3.1`, `math/calc-u3/3.2`, `math/calc-u4/4.4`, `math/calc-u4/4.7`, `math/calc-u5/5.1`, `math/calc-u5/5.11`, `math/calc-u6/6.9`, `math/calc-u6/6.10`, `math/calc-u7/7.2`, `math/calc-u7/7.6`, `math/calc-u7/7.9`, `math/calc-u8/8.4`, `math/calc-u8/8.9`, `math/calc-u9/9.1`, `math/calc-u10/10.11`, `math/calc-u10/10.12`, `math/math-prep-geo/P2.10`.

Every student-facing string in these overlays now contains both Chinese and English. Generic “能陈述「…」” learning objectives were replaced with topic-specific objectives, and the banned slogan phrase does not appear anywhere in the touched blocks. Fraction notation was normalized to `\dfrac` (including `f^{(k)}(a)/k!`, `0/0`, `∞/∞`, and `u/v`); no `÷` or slash fractions remain in the touched student-facing strings. Units such as `cm/s` and differential ratios such as `dy/dt` are unchanged.

The 15 already-bilingual Calc BC overlays were not rewritten, except for the three verified leftover steps above.

## Validation

1. `node --check data/enrichments/batch2.js` — pass.
2. Key count unchanged: 135; no `vocabulary` field added; field sets unchanged for all 20 rewritten/checked keys.
3. Bilingual sweep: 0 Chinese-only student-facing strings across the 18 Part 2 keys and bio `5.6` / `7.12`.
4. Related checks: `6.7` includes `6.6`, `6.2`, `6.4`, `6.8`, `7.1`; `7.11` includes `7.9`, `7.10`, `7.12`, `8.6`; every `8.6` link title is bilingual.
5. Targeted Playwright (13 runs, `python3 scripts/serve-dev.py . 8899`):
   - 9.7, 9.8, 8.13, bio 5.6, 7.12, 6.7, 7.11, 8.6, 8.7, calc 5.1, calc 2.8 at 1280.
   - calc 5.1 and 2.8 also at 390.
   - All runs: bilingual text visible, 0 console/page errors, 0 `.katex-error`, 0 horizontal overflow.

Screenshots: `screenshots/batch2-bilingual-followup/` (13 PNGs).

## Files touched

- `data/enrichments/batch2.js`
- `audit/batch2-bilingual-followup.md`
- `screenshots/batch2-bilingual-followup/`

No changes to `batch1.js`, `js/topic-page.js`, `data/enrichments/merge.js`, source topic files, practice bank, simulators, CSS, exam figures, mindmap, or desktop packaging.
