# Dental Materials Science — Interactive Lecture Library

Aulas interativas em HTML (sem PowerPoint) para o curso de Materiais Dentários (Ano 2, pré-clínico).
Cada aula é uma página que roda no navegador, com figuras + animações próprias, construída sobre um
**design system compartilhado**. Framework pedagógico do curso: **structure → property → performance**.

---

## Painel de status

| | |
|---|---|
| **Chat atual** | 7 (Aula 09 &mdash; Gypsum products finalizada) |
| **Identidade visual** | Clinical Clean (**[D-02]**) — teal=ciência, âmbar=clínica, rosa=equívoco, painel escuro=mecanismo |
| **Aulas prontas** | **03 · Polymers & Polymerization** (45 slides, 17 figuras) · **04 · Colour & Optics** — deck em slides (42 slides · 6 partes, 6 animações; 21 figuras esquemáticas a gerar) · **06 · Bioactivity** — deck horizontal (esquema Aula 03; 23 slides · 6 partes, 6 figuras, sem quiz) · **07 · Principles of 3D printing in dentistry** — deck horizontal (30 slides · 5 partes, 8 figuras, **3 widgets interativos**) &middot; **08 &middot; Impression materials — Parte 0** (glossário de 9 propriedades; 51 slides, 17 figuras, sem widgets) &middot; **09 · Gypsum products** — deck horizontal (26 slides · 6 partes, 8 figuras, sem widgets, sem quiz) |
| **Próxima sugerida** | Aula 08, Partes 1 a 4 (classificação · reações de presa · propriedades comparadas · técnicas) — ou Aula 10 (Cements for prosthodontics) |
| **Repositório** | https://github.com/vinirosadent/Lectures |
| **Publicação** | GitHub Pages → `https://vinirosadent.github.io/Lectures/` |

### Progresso (20 aulas · 39 h)
- [ ] 01 Introduction & framework
- [ ] 02 Mechanical properties
- [x] **03 Polymers & polymerization** ✅ — deck final em slides, figuras integradas, revisão de conteúdo
- [x] **04 Colour & optics** ✅ — deck em slides (42 slides · 6 partes · 6 animações interativas); figuras esquemáticas a gerar (ver `lectures/04-colour-and-optics/image-prompts.md`)
- [ ] 05 Biocompatibility
- [x] **06 Bioactivity** ✅ — deck horizontal (esquema Aula 03; autocontido, 23 slides · 6 partes), 6 figuras (FIG 06.1–06.6); sem quiz [D-09]
- [x] **07 Principles of 3D printing in dentistry** ✅ — deck horizontal autocontido, 30 slides · 5 partes, 8 figuras + **3 widgets em SVG/canvas** (staircase · build angle · gel point); sem quiz [D-09]
- [~] **08 Impression materials** — **Parte 0 pronta** (glossário de 9 propriedades, 51 slides, 17 figuras, zero placeholders); Partes 1–4 pendentes
- [x] **09 Gypsum products** ✅ — deck horizontal autocontido, 26 slides · 6 partes, 8 figuras (FIG 09.1–09.8), zero placeholders, sem widgets, sem quiz [D-09]; sem handout ainda
- [ ] 10–14 Cements · Composites · Adhesives · Ceramics · CAD/CAM
- [ ] 15–20 Acrylics · CoCr · Endo · NiTi/aligners · Implants · Degradation

---

## Estrutura do repositório

```
Lectures/
├── index.html                      ← hub do curso (lista as 20 aulas)
├── assets/
│   ├── css/lecture.css             ← design system compartilhado (todas as aulas)
│   ├── js/lecture.js               ← comportamentos compartilhados (nav, quiz, flips…)
│   └── images/                     ← imagens globais (logo etc.)
├── lectures/
│   └── 03-polymerisation-and-polymers/
│       ├── index.html              ← a aula
│       ├── notes.md                ← notas do professor (cobertura, figuras, timing)
│       └── assets/                 ← figuras desta aula (PNG copiados do seu Drive)
├── tools/
│   └── copy-figures-03.ps1         ← copia+renomeia as figuras do Drive p/ a aula
├── README.md · PROJECT_RULES.md · LECTURE_TEMPLATE.md · CHANGELOG.md
```

---

## Como rodar localmente (Windows)

1. **Copiar as figuras** (só na primeira vez de cada aula):
   clique com o botão direito em `tools/copy-figures-03.ps1` → *Run with PowerShell*.
   Se ele não achar sua pasta, escolha a pasta `Assets` do Drive na janelinha.
2. **Abrir a aula**: dê duplo-clique em `lectures/03-polymerisation-and-polymers/index.html`
   — ou, para tudo funcionar 100% (fontes/animações), rode um servidor local:
   ```powershell
   python -m http.server
   ```
   e acesse `http://localhost:8000/` no navegador.

> Não precisa de internet para as animações; só as fontes bonitas vêm da web (há fallback do sistema offline).

---

## Publicar no GitHub Pages
Settings → Pages → *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → Save.
Depois de ~1 min: hub em `https://vinirosadent.github.io/Lectures/` e a aula em
`https://vinirosadent.github.io/Lectures/lectures/03-polymerisation-and-polymers/`.

---

## Convenções rápidas
Conteúdo do aluno em **inglês**; comentários de código e notas em **português**.
Caminhos sempre **relativos** (para o Pages funcionar em subpasta). Detalhes em `PROJECT_RULES.md`.
