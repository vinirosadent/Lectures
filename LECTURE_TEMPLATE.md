# LECTURE_TEMPLATE — esqueleto para uma aula nova

> **Formato: enxuto.** O professor dirige o HTML como slide (não é self-learning).
> Cada seção = 1 frase-âncora grande (`.statement`) + 1 visual/animação. Texto denso/mecanismo fino
> vai para `<details class="reveal">` (fechado por padrão) — só abre se você clicar ao vivo.
> Sem modo professor, sem notas na tela: navegação é por teclado (←/→, PageUp/PageDown, Home/End, F).

Passo a passo para criar `lectures/NN-slug/index.html` reaproveitando tudo que já existe.

## 1. Estrutura mínima do arquivo

```html
<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NN · Título — Dental Materials</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../assets/css/lecture.css">   <!-- design system compartilhado -->
</head><body>

  <!-- barra + progresso -->
  <div class="topbar"><div class="topbar__row">
    <a class="topbar__home" href="../../index.html">← Course home</a>
    <span class="topbar__title">NN · Título</span>
    <span class="topbar__home mono">Phase X · Nh</span>
  </div><div class="progress"><div class="progress__bar"></div></div></div>

  <!-- nav de seções (um <a href="#id"> por seção) -->
  <nav class="secnav">…</nav>

  <header class="hero" id="hero">…</header>

  <section class="section" id="objectives">…</section>
  <!-- demais seções: cada uma <section class="section" id="…"> -->

  <footer class="foot l-wide">…</footer>
  <script src="../../assets/js/lecture.js"></script>
  <script> /* animações específicas da aula */ </script>
</body></html>
```

## 2. Blocos de conteúdo prontos (copiar do `lecture.css`/Aula 03)
- **Frase-âncora** (a UMA coisa da seção): `<p class="statement">texto <b>destaque</b>.</p>`.
- **Objetivos**: `.objectives > .obj` (numerados automaticamente).
- **Mecanismo**: `.box.box--mech` · **Clínica**: `.box.box--clinical` · **Por que importa**: `.matters`.
- **Mito/Fato**: `.box.box--myth > .mf > .myth / .fact`.
- **Figura**: `<figure class="figure"><img src="assets/nome.png"><figcaption><span class="fig-tag">FIG NN.x</span> …</figcaption></figure>`.
- **Tabela comparativa**: `.ctable`.
- **Flip cards**: `.flips > button.flip > .flip__inner > .flip__front/.flip__back`.
- **Quiz**: `.quiz[data-fb-ok][data-fb-no] > .quiz__opts > button.quiz__opt[data-correct]` + `.quiz__fb`.
- **Deep-dive** (aqui mora o texto denso/mecanismo fino, opcional): `<details class="reveal"><summary>…</summary><div class="reveal__body">…</div></details>`.
- **Painel de animação**: `.panel` (fundo escuro) com `<svg>` + `.readouts/.readout` + `.control` (sliders) ou `.stepper[data-stepper="id"]`.
- **Resumo**: `.takehome > ol`.

## 3. Animações
- Slider → leitura viva: `window.Lecture.bindSlider("meuSlider", function(t,val){ /* t = 0..1 */ });`
- Etapas: use `.stepper[data-stepper="id"]` com `button[data-step="1|2|3"]`; escute `stepper.addEventListener("step", …)`.
- Sempre um objetivo pedagógico claro (nada decorativo). Testar com `node --check` no bloco.

## 4. Registrar
- Ligar a aula no `index.html` (trocar `soon` por `live` + `href`).
- Criar `lectures/NN-slug/notes.md` (cobertura + figuras + timing).
- Atualizar `README.md` (painel) e `CHANGELOG.md`.
