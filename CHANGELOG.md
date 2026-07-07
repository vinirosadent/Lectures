# CHANGELOG

## Chat 1 (continuação) — formato enxuto + navegação por slides
- **[D-04/D-05]** Uso real esclarecido: o professor **dirige** o HTML projetando em sala (não é self-learning).
  Reformulei o sistema e a Aula 03 para o formato **enxuto**: cada seção = 1 frase-âncora (`.statement`) +
  1 visual/animação; texto denso migrou para `<details class="reveal">` opcional (fechado por padrão).
- **Removido**: modo professor / notas na tela (`.prof`, botão, tecla T) — não é necessário.
- **Adicionado**: navegação tipo pptx em `lecture.js` — ←/→ e PageUp/PageDown avançam seção-a-seção,
  Home/End vão ao início/fim, **F** = tela cheia, controles "‹ X/N ›" no canto (somem na impressão).
- Docs atualizados: `PROJECT_RULES.md`, `LECTURE_TEMPLATE.md`, `notes.md` da Aula 03.

## Chat 1 — scaffold + Aula 03  (2026-07)
- **Design system compartilhado** (`assets/css/lecture.css`): identidade *Clinical Clean* [D-02],
  tokens, tipografia (Space Grotesk / Inter / IBM Plex Mono) e todos os componentes de ensino.
- **JS compartilhado** (`assets/js/lecture.js`): barra de progresso "polimerizante", scrollspy,
  flip cards, quiz com feedback, reveal-on-scroll, modo professor (tecla T), stepper genérico,
  API `window.Lecture` (bindSlider, lerp).
- **Hub do curso** (`index.html`): framework structure→property→performance + as 20 aulas por fase.
- **Aula 03 · Polymers & Polymerization** (`lectures/03-…/index.html`): 10 seções, 14 figuras do Drive,
  7 animações próprias (chain builder, adição×condensação, radical-livre stepper, calor termoplástico/termofixo,
  slider de reticulação, slider de plastificação, pré/pós-gel & estresse), 3 quizzes, mitos/fatos, take-home.
- **Notas da aula** (`notes.md`): cobertura de objetivos, mapa de figuras com flags `[VERIFY]`, timing.
- **Ferramenta** (`tools/copy-figures-03.ps1`): copia+renomeia as figuras do Drive para a pasta da aula.
- **Docs de estado**: README, PROJECT_RULES, LECTURE_TEMPLATE.
- Decisões: [D-01] 6 objetivos na tela · [D-02] Clinical Clean · [D-03] scaffold+aula juntos.
- Aberto: [Q-01] 14 outcomes oficiais · [Q-02] 3 legendas [VERIFY] · [Q-03] handout/áudio · [Q-04] próxima aula.
