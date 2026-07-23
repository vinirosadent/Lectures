# Aula 06 — Bioactivity · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado: **deck horizontal publicado (2026-07-23)** — reconstruído no **esquema de slides da Aula 03/04**
> (`.deck > .track > .slide`, **autocontido**: CSS **e** JS inline, motor de navegação próprio). Substituiu
> a versão anterior de scroll vertical (que usava `lecture.js` + animações SVG).
> `index.html` entregue pronto pelo Vinicius — **não alterar**. 6 figuras já nomeadas e ligadas.
> Sem quiz nos slides [D-09]. Pasta no repositório: `lectures/06-bioactivity/`.

---

## 0. Formato e espinha

**Deck full-screen autocontido** (mesmo motor da Aula 03/04): `.deck > .track > .slide`, CSS+JS **inline**
(só as fontes Google externas, com fallback do sistema). Navegação própria: ←/→ · PageDown/Up · Espaço ·
Home/End · **F** tela cheia · **O** overview (grade de slides) · Esc fecha. Barra inferior (`.deckbar`) com
part-label + contador; barra de progresso no topo. Identidade *Clinical Clean* [D-02]: teal=ciência,
âmbar=clínica, rosa/carmim=equívoco/alerta, slides escuros (título/divisórias) = mecanismo.

Espinha: *"bioativo" não é o rótulo na caixa — é uma resposta biológica específica, intencional e
comprovada.* Eixo **structure → property → performance** (dissolução/superfície reativa → liberação de
íons + mudança de pH → resposta mineral/tecidual). Âncora clínica: **terapia pulpar vital** (cimento de
silicato de cálcio sobre polpa quase exposta → ponte de dentina).

---

## 1. Estrutura do deck — 23 slides · 6 partes

| Parte | Slides | Conteúdo |
|---|---|---|
| Título | 1 | Bioactivity |
| **01 · What "bioactive" means** | divisória + 4 | objetivos (6 objcards + faixa structure→property→performance) · o conceito (defbox) · bioactive × 3 vizinhos · narrow × broad |
| **02 · More than apatite** | divisória + 2 | apatita é um sinal, não o todo (**FIG 06.1**) · íon = sinal, não prova (**FIG 06.2**) |
| **03 · How bioactivity arises** | divisória + 2 | padrão de 3 tempos (**FIG 06.3**) · duas químicas canônicas (deep dive) |
| **04 · How it works & how the idea grew** | divisória + 2 | três rotas (**FIG 06.4**) · breve história (1969–71 → 2018–22) |
| **05 · In the tooth: repair & materials** | divisória + 3 | reparo × regeneração (**FIG 06.5**) · terapia pulpar vital (**FIG 06.6**) · materiais estabelecidos |
| **06 · Judging a claim** | divisória + 3 | barra de evidência FDI · o custo (trade-off) · take-home (6 essenciais) |

Slides escuros = título + 6 divisórias de parte. Sem `slide--interactive` nesta versão (o mecanismo virou
figura estática **FIG 06.3**, antes era animação SVG).

---

## 2. Cobertura dos 6 learning outcomes

1. **Definir bioatividade** e separá-la de biocompatibilidade / remineralização / antimicrobiano
   → Parte 01 (objetivos + "o conceito" + bioactive × 3 vizinhos + narrow/broad).
2. **Bioatividade = leque de respostas**; apatita é um exemplo → Parte 02 (FIG 06.1 espectro) + Parte 04 (rotas).
3. **Como se torna bioativo** (muda a química local: íons, pH) → Parte 03 (FIG 06.3, três tempos).
4. **Origem no osso → ampliação na odontologia** e o exagero do termo → Parte 04 (breve história).
5. **Reparo × regeneração** → Parte 05 (FIG 06.5).
6. **Julgar a alegação "bioativo"** → Parte 06 (barra FDI + custo) + Parte 05 (materiais de referência).

---

## 3. Mapa de figuras (FIG 06.1–06.6) — nova ordem do deck; todas em `assets/`, kebab-case, ligadas no HTML

| Fig | Arquivo | Parte / slide | O que mostra |
|---|---|---|---|
| **06.1** | `spectrum-inert-to-bioactive.png` | 02 · apatita é um sinal | Espectro INERT→BIOACTIVE (ouro/alumina → composito → GIC → bioglass → silicato de cálcio); apatita = marcador. |
| **06.2** | `ion-release-not-enough.png` | 02 · íon = sinal, não prova | Liberação **sozinha** (sem apatita/resposta) × liberação **+** resposta tecidual. |
| **06.3** | `mechanism-three-beats.png` | 03 · padrão de 3 tempos | Dissolução → mudança local (íons, pH) → resposta (apatita/tecido). Substitui a antiga animação SVG da bancada. |
| **06.4** | `three-routes-bioactivity.png` | 04 · três rotas | Puramente química (GIC/flúor) · mista (CaOH/MTA/Biodentine) · solely biológica (fatores de crescimento). |
| **06.5** | `repair-vs-regeneration.png` | 05 · reparo × regeneração | Dentina terciária (selada, desorganizada) × dentina tubular original. |
| **06.6** | `pulp-capping-dentine-bridge.png` | 05 · terapia pulpar vital | Cimento de silicato de cálcio: Ca²⁺ + pH alto → células odontoblasto-like → ponte de dentina. |

Figuras-fonte extras em `1. Source/05. Bioactivity/Assets/` **não usadas**: "The evidence ladder" (SBF) — o
conteúdo aparece como texto (barra FDI). A pasta-fonte no Drive mantém o nome `05. Bioactivity`; só a pasta
do repositório é `06-bioactivity`.

---

## 4. Elementos gráficos próprios (não-figura)

- **Faixa structure → property → performance** (SVG inline, slide de objetivos) — esquema, não animação.
- **Cards comparativos** (`.vs`): bioactive × biocompatible × remineralising × antimicrobial.
- **Defboxes** (narrow/broad; duas químicas), **steps** (linha do tempo 1969–71 → 2018–22), **objgrid**
  (objetivos e take-home).
- **Sem animações interativas / sem quiz** [D-09/D-10]: esta versão é um deck estático de slides (o mecanismo
  passou a ser a **FIG 06.3**). Overview (**O**) permite pular para qualquer slide.

---

## 5. Onde ficam química e normas

Enxuto na tela; o conteúdo pesado fica em slides marcados **"Deep dive · optional"** ou no texto:
- **Parte 03** — as **duas químicas canônicas** (vidro bioativo: troca iônica → pH↑ → gel de sílica → apatita;
  cimentos de silicato de cálcio: reação com água → Ca(OH)₂ → pH alto + Ca²⁺). Reações detalhadas ficam fora.
- **Parte 06** — os **5 critérios FDI** + o **par SBF/apatita como triagem** (não prova).

---

## 6. Timing sugerido (~60 min)

| Bloco | Parte | min |
|---|---|---|
| Abertura + objetivos | Título + 01 | 10 |
| Além da apatita | 02 | 9 |
| Mecanismo (3 tempos + química) | 03 | 10 |
| Rotas + história | 04 | 11 |
| Reparo × regeneração + clínica | 05 | 13 |
| Avaliando alegações + take-home | 06 | 7 |
| **Total** | | **~60** |

Slides "deep dive" são opcionais — pular estende/encurta cada bloco.

---

## 7. Validação técnica

- **Autocontido** no esquema da Aula 03: **CSS + JS inline** (motor de navegação clonado da 03/04). Aqui o
  `<script>` inline é **esperado** (deck self-contained) — não usa `assets/js/lecture.js`.
- **23 `<section class="slide">`** (título + 6 divisórias + 16 de conteúdo); tags balanceadas
  (section 23/23, div 126/126, svg 1/1, script 1/1).
- **6 `<img src="assets/…">`** todos resolvidos no disco (6 PNGs conferidos).
- Sem quiz/"test yourself" [D-09]; take-home = mapa dos 6 essenciais.
- `node --check` no JS inline: **pendente nesta sessão** (node não instalado no ambiente); o motor é o mesmo
  já validado nas Aulas 03/04. Rodar na máquina do Vinicius se quiser reconfirmar.

---

## 8. Aberto (Q-##)

- **[Q-05.1] — RESOLVIDO (2026-07-23):** numeração = manter o syllabus. Bioactivity = **Aula 06** (Open);
  Biocompatibility = **05** (Soon).
- **[Q-06.1] — RESOLVIDO (2026-07-23):** formato = **deck horizontal da Aula 03** (substituiu o scroll vertical).
- **[Q-05.2]** Handout do aluno (`handout.html`/`.pdf`) — **aberto**; não feito nesta aula (a 03/04 têm; a 06 ainda não).
- **[Q-01 global]** Alinhar aos 14 outcomes oficiais quando a lista for colada.
