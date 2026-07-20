# Aula 04 — Colour & Optics · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado: **deck estruturado + 21 figuras integradas (2026-07-20)** — padrão da Aula 03, nível graduação 2º ano.
> Figuras geradas pelo Vinicius (ChatGPT) copiadas de `1. Source/04. Color in dentistry/Assets/` (nomes
> `01_…`–`21_…`) para `assets/` em kebab-case; os 21 placeholders `.ph` viraram `<figure>` reais.
> Publicado no hub; falta o `git push` (rodar da máquina do Vinicius). Próximo opcional: handout.

---

## 0. Formato e espinha

**Deck full-screen autocontido** (mesmo motor da Aula 03: `.deck > .track > .slide`, CSS+JS inline,
navegação ←/→ · PageUp/Down · Home/End · **F** tela cheia · **O** overview). **42 slides · 6 partes.**
CSS extra de layout (bloco "Aula 04") melhora a distribuição vertical (conteúdo espalhado, não espremido
no meio) e permite figuras largas (`.ph--wide`).
CSS e motor de navegação copiados verbatim da Aula 03 para consistência total.

Espinha: *a cor não é um pigmento — é o que o material faz com a luz.* Eixo **structure → property →
performance** (microestrutura/índice de refração → reflexão/absorção/espalhamento/transmissão → aparência
e estabilidade). Âncora **material-science** (não clínica). Cada conceito tem **defbox** (definição) +
significado + exemplos — profundidade de graduação, não resumo.

---

## 1. Estrutura do deck (40 slides)

| Parte | Slides | Conteúdo |
|---|---|---|
| Título | 1 | Colour & Optics |
| **01 · What colour really is** | 6 | objetivos+flowstrip · cor=luz/objeto/observador · espectro visível+RGB · **[int] espectro** · visão (cones S/M/L, tricromática/oponente) |
| **02 · The three attributes** | 5 | 3 atributos · **hue** (famílias, Vita A–D, teeth yellow/yellow-red) · **value** (escala 0–10, por que domina, squint, "go lighter") · **chroma** (dentina, cervical/incisal, inverso com value) · **[int] HVC** |
| **03 · How light interacts** | 8 | overview 4 destinos (figura larga + grade 2×2) · **reflexão & absorção** (surface) · **espalhamento & transmissão** (body) · **o que é RI** (n=c/v, analogia canudo) · **RI em odonto** (exemplos: composite match, zircônia, esmalte/dentina) · **[int] light budget** · caso mancha branca |
| **04 · Optical properties** | 5 | tabela síntese · translucidez/opacidade (TP, gradiente) · fluorescência (440–450nm, dentina 3×, metamerismo) · opalescência (prisma HAp, azul/laranja, halo) · **[int] opalescência** |
| **05 · Measuring colour** | 6 | por que medir · Munsell (H V/C, Vita) · CIELAB (L*a*b*, valores de dente) · ΔE + limiares (1.2/2.7) · **[int] ΔE** · colorímetro×espectrofotômetro + metamerismo |
| **06 · Final colour** | 6 | 5 fatores · **[int] espessura×fundo** · estabilidade/envelhecimento · myth/fact · take-home (6) · self-check (2 Q&A) |

[int] = slide `slide--interactive` com animação SVG/JS própria (6 no total).

---

## 2. Cobertura dos 5 learning outcomes

1. hue/value/chroma → Parte 02 (3 slides dedicados + animação).
2. reflexão/absorção/espalhamento/transmissão → Parte 03 (defbox de cada + RI + animação + caso).
3. translucidez/opacidade/fluorescência/opalescência → Parte 04 (1 slide cada + tabela + animação).
4. Munsell & CIELAB (ΔE) → Parte 05 (Munsell, CIELAB, ΔE, instrumentos, animação).
5. composição/espessura/fundo/superfície/envelhecimento → Parte 06 (fatores + animação + estabilidade).
Intro leve: visão (Parte 01) e instrumentos (Parte 05).

---

## 3. Reforço de literatura (conferido jul/2026)

- **Limiares ΔE (Paravina 2015, JERD doi:10.1111/jerd.12149):** perceptibilidade ΔEab **1.2** (ΔE00 0.8);
  aceitabilidade ΔEab **2.7** (ΔE00 1.8).
- **Índices de refração:** esmalte **1.63**, dentina **1.54**, cemento 1.58, água 1.33, HAp 1.62–1.65;
  Bis-GMA 1.54, sílica ~1.53, TEGDMA 1.46. Match filler↔matriz → translucidez; poros ar/água (RI≈1.0) →
  mancha branca. Espalhamento no esmalte ~1/λ³.
- **Fluorescência:** pico ~440–450 nm; dentina ~3× esmalte (matéria orgânica); material não-fluorescente →
  falha metamérica.
- Fontes: Paravina 2015 (JERD); tandfonline 10.1080/26415275.2021.1906879 (RI filler/matriz); SPIE JBO
  20(4):040901 (fluorescência); + Notes.docx do professor.

---

## 4. Animações próprias (6, vanilla JS no `<script>` inline; helper lab2rgb04 = CIELAB→sRGB)

1. Espectro 380–780 nm (`#wl`) · 2. HVC no dente (`#hue/#val/#chr`, value aparente cai com chroma) ·
3. Quatro destinos (`#sca`, mismatch→espalhamento) · 4. Opalescência (`#op`, azul↔laranja) ·
5. Comparador ΔE (`#dL/#dA/#dB`, limiares) · 6. Espessura×fundo (`#thk/#sub`).

---

## 5. Ilustrações a gerar (19) — placeholders `.ph` no deck mostram nome + descrição

Todas em `1. Source/04. Color in dentistry/Assets/` (o Vinicius gera) → depois copio para `assets/` (kebab-case).
Estilo comum: flat vector, textbook científico, fundo branco, rótulos em inglês, teal #0C7489 + âmbar #B45309.

`light-object-observer` · `visible-spectrum` · `cone-response-curves` · `hvc-overview` · `hue-shade-families` ·
`value-scale` · `chroma-scale` · `four-fates-of-light` (larga) · `reflection-specular-diffuse` ·
`scattering-transmission` · `refractive-index-bending` · `refractive-index-match` · `white-spot-lesion` ·
`translucency-opacity` · `fluorescence-uv` · `tooth-optical-anatomy` · `shade-matching-conditions` ·
`munsell-solid` · `cielab-axes` · `delta-e-thresholds` · `colour-ageing`. **(21 no total)**

(Prompts completos entregues ao Vinicius no chat; os placeholders no deck já trazem a descrição de cada uma.)

---

## 6. Validação técnica

`node --check` no JS inline: **OK**. Tags: section 40/40, div 286/286, svg 7/7, script 1/1, table 1/1 — **OK**.
CSS do overview/deckbar/`.ph`/`.slide--interactive`/`.instrument` presentes; ids do motor (prog/count/prev/
next/menuBtn/partLabel/overview/ovGrid) presentes.

---

## 7. Aberto (Q-##)

- **[Q-04.1]** Gerar as 19 ilustrações; conferir descrições.
- **[Q-04.2]** Construir `handout.html` (bullets + figuras esquemáticas) depois das imagens.
- **[Q-04.3]** Publicar (index, README, CHANGELOG, git push) — aguardando "publicar".
- **[Q-01 global]** Alinhar aos 14 outcomes oficiais quando a lista for colada.
