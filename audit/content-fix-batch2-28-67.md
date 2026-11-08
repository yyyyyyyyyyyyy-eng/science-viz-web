# Content fix — calc 2.8 check and bio 6.7 wording (2026-11-09)

Scope: `data/enrichments/batch2.js` only, plus this audit and targeted screenshots.
Base: web `613f82e`.

## Edits

1. **`math/calc-u2/2.8` → `checks[0]`**
   - Before: three concatenated fragments; the Chinese was repeated and the later
     Chinese/English fragments contained raw `\neq` outside KaTeX delimiters.
   - After: one bilingual check item (Chinese first, English second) with every
     math expression inside `\(...\)`; both sides use `(uv)'\neq u'v'` and the
     product rule `(uv)'=u'v+uv'`. `checks[1]` and `checks[2]` are unchanged.

2. **`bio/bio-u6/6.7` → sickle-cell example**
   - Before: called `GAG → GTG` a codon, which implied GTG was an RNA codon.
   - After: states that `GAG → GTG` is the DNA coding-strand triplet and the
     corresponding mRNA codon change is `GAG → GUG`.

3. **`bio/bio-u6/6.7` → connections**
   - Before: said biotechnology uses mutagenesis and sequencing “to detect
     mutations,” giving mutagenesis the wrong role.
   - After: Chinese and English both distinguish the roles — mutagens induce
     mutations, sequencing detects them — while retaining the links to 6.8
     biotechnology, sickle-cell disease, and cancer-causing mutations.

## Verification

- `node --check data/enrichments/batch2.js` passes; module import confirms three
  checks and the updated 6.7 example/connection strings.
- Served with `python3 scripts/serve-dev.py . 8811`; Playwright at 1280 px,
  light theme.
- `math/calc-u2/2.8`: the 自测 section renders all math through KaTeX and its
  text contains no raw `\neq` or `\(`/`\)` delimiters.
- `bio/bio-u6/6.7`: page text contains the DNA coding strand / mRNA codon
  distinction and the mutagenesis-versus-sequencing connection.
- Screenshots in `screenshots/content-fix-batch2-28-67/`:
  - `math-calc-u2-2.8-check.png`
  - `bio-u6-6.7-sickle-cell.png`
  - `bio-u6-6.7-connections.png`

No other content files, vocabulary arrays, or topic sources were changed.
