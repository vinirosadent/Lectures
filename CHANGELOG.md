# CHANGELOG

## Chat 4 (cont.) — Renumeração: Bioactivity vira Aula 06 (2026-07-23)
- **Decisão do Vinicius: manter o syllabus** — **05 = Biocompatibility**, **06 = Bioactivity**. Reverte o
  swap provisório do item anterior (que havia publicado Bioactivity como 05).
- **`git mv lectures/05-bioactivity lectures/06-bioactivity`** — histórico preservado (renomeação detectada
  pelo git; PNGs e `notes.md` movidos junto).
- **Rótulos do número no deck** (só os rótulos; conteúdo inalterado): `<title>`, topbar, hero eyebrow
  "Lecture 06", rodapé "Lecture 06 — Bioactivity" e legendas **FIG 06.1–06.5**. Os `<img src="assets/…">`
  não mudaram (mesmos nomes de arquivo).
- **Hub e README no estado canônico**: 05 · Biocompatibility → **Soon** (sem href); 06 · Bioactivity →
  **Open** + `href lectures/06-bioactivity/index.html`.
- **`notes.md`**: FIG 05.x → 06.x, caminho da pasta atualizado, **[Q-05.1] fechado** (Bioactivity = 06);
  **[Q-05.2]** (handout) segue aberto.
- **Validação**: 5 `<img>` resolvem na nova pasta; tags balanceadas (10 `<section>`); sem `<script>` inline.

## Chat 4 — Aula 05 Bioactivity finalizada (2026-07-23)
- **Aula 05 Bioactivity — 10 seções, 5 figuras, bancada animada, sem quiz.** Deck entregue pronto pelo
  Vinicius em `lectures/05-bioactivity/index.html` (formato enxuto padrão 03: `<section>` + `.statement` +
  visual/animação; texto denso em `<details class="reveal">`). **Não alterado.** Usa o design system
  compartilhado (`assets/css/lecture.css`) e os comportamentos de `assets/js/lecture.js` — **sem `<script>`
  inline**; único CSS local é `<style id="ba-anim">` para a animação da bancada (classes `.ba-`).
- **10 seções**: objetivos · o que significa (4 flip cards) · além da apatita · como surge (bancada) ·
  três rotas · evolução (timeline) · reparo × regeneração · materiais clínicos · avaliando alegações ·
  take-home (mapa de outcomes, **sem quiz** [D-09]).
- **5 figuras** (`assets/`, kebab-case, já ligadas): `spectrum-inert-to-bioactive` (FIG 05.1) ·
  `three-routes-bioactivity` (05.2) · `repair-vs-regeneration` (05.3) · `pulp-capping-dentine-bridge` (05.4) ·
  `ion-release-not-enough` (05.5).
- **Bancada animada (SVG/JS)** [D-10]: stepper de 3 tempos dissolução → mudança local (pH↑, supersaturação)
  → resposta (apatita cresce); ensina o mecanismo, respeita `prefers-reduced-motion`. Mais um **timeline
  stepper** (1969–71 → 2018–22). Química de vidros/silicatos e o par **SBF–ISO** ficam nos **deep-dives**.
- **Numeração**: o deck é "Lecture 05 · Bioactivity"; o hub tinha 05 = Biocompatibility / 06 = Bioactivity.
  Reconciliado com **swap**: **05 = Bioactivity (Open)** e **06 = Biocompatibility (Soon)**, no `index.html`
  raiz e no README.
- **Notas** (`lectures/05-bioactivity/notes.md`): cobertura dos 6 objetivos, mapa FIG 05.1–05.5, animações,
  timing ~60 min.
- **Validação**: sem `<script>` inline; 10 `<section>` + hero; 5 `<img>` conferidos um a um no disco; tags
  balanceadas. **Publicação**: badge **Open** no hub → `lectures/05-bioactivity/index.html`.

## Chat 3 — Aula 04 Colour & Optics finalizada (2026-07-20)
- **Deck em slides (padrão da Aula 03)**: `lectures/04-colour-and-optics/index.html`, autocontido (CSS+JS
  inline, motor de navegação clonado da 03). **42 slides · 6 partes**: What colour really is · The three
  attributes (hue/value/chroma) · How light interacts (quatro destinos + índice de refração) · Optical
  properties (translucidez/opacidade/fluorescência/opalescência) · Measuring colour (Munsell/CIELAB/ΔE) ·
  What sets the final colour. Nível graduação 2º ano: cada conceito com definição + significado + exemplos.
- **6 animações interativas (SVG/JS)** que ensinam o mecanismo: espectro visível · sliders hue/value/chroma ·
  **Δn → deflexão nas interfaces → orçamento de luz → aparência** · opalescência (dois observadores, azul
  refletido × laranja transmitido) · **ΔE ao vivo** com fórmula substituída e régua de 3 zonas iguais ·
  espessura × fundo (card P&B, translúcido × opaco).
- **Reforço de literatura**: limiares ΔE (Paravina 2015: perceptibilidade 1.2 / aceitabilidade 2.7),
  índices de refração (esmalte 1.63 · dentina 1.54 · Bis-GMA 1.54 · sílica 1.53), fluorescência ~440–450 nm
  (dentina ≈3× esmalte).
- **Sem perguntas nos slides [D-09]**; recap final = mapa dos learning outcomes ("onde você aprendeu").
- **21 figuras esquemáticas**: ainda **a gerar** — placeholders `.ph` no deck mostram nome + descrição;
  prompts prontos para o ChatGPT em `lectures/04-colour-and-optics/image-prompts.md`.
- **Validação**: `node --check` no script inline (**OK**), tags balanceadas (42/42 `<section>`), teste
  headless de runtime das animações (**OK**).
- **Publicação**: Aula 04 ligada no hub (badge **Open**). No ar em
  `https://vinirosadent.github.io/Lectures/lectures/04-colour-and-optics/`.

## Chat 2 — Aula 03 finalizada (2026-07-08)
- **Deck final em slides**: substituí o `index.html` da Aula 03 pela versão final entregue pelo Vinicius —
  **45 slides** organizados em **6 partes** (Orientation & goals · The building blocks · How the chains are
  arranged · How polymers form · What controls the properties · Shrinkage, stress & clinical failure).
  É **autocontido** (CSS e JS inline, só as fontes Google externas) e traz navegação própria.
- **17 figuras integradas**: todas as figuras do Drive (`New lectures\Polymers and polymerization\Assets\`)
  copiadas e renomeadas em kebab-case para `lectures/03-…/assets/`, sobrescrevendo as anteriores.
  **12 usadas** no deck; **5 disponíveis** como extras (terpolímero, dois exemplos de copolímero MMA/EMA,
  MW-conceito e shrinkage-4).
- **Revisão de conteúdo**: deck cobre vocabulário, adição×condensação, radical livre em 3 estágios,
  arquitetura (linear/ramificado/reticulado; termoplástico×termofixo), MW e distribuição, reticulação,
  copolímeros, plastificação, sorção — e a âncora clínica de contração/estresse/C-factor com sliders.
- **Validação**: `node --check` no script inline (**OK**, v24), tags balanceadas (45/45 `<section>`,
  323/323 `<div>`), e as 12 imagens referenciadas conferidas uma a uma no disco.
- **Publicação**: Aula 03 ligada no hub (`index.html` raiz, badge **Open**). **GitHub Pages** já estava
  ativo (repo público, branch `main`, raiz `/`); após o push, o deck novo foi confirmado **no ar** (HTTP 200)
  em `https://vinirosadent.github.io/Lectures/lectures/03-polymerisation-and-polymers/`.

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
