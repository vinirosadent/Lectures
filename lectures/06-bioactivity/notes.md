# Aula 06 — Bioactivity · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado: **deck final publicado (2026-07-23)** — formato enxuto (padrão da Aula 03/04): cada seção =
> 1 frase-âncora (`.statement`) + 1 visual/animação; texto denso em `<details class="reveal">`.
> `index.html` entregue pronto pelo Vinicius — **não alterar** (só os rótulos do número da aula 05→06).
> 5 figuras já nomeadas e ligadas.
> Sem quiz nos slides [D-09]. Sem `<script>` inline: usa `assets/js/lecture.js` (só um `<style id="ba-anim">`
> local para a animação da bancada, classes `.ba-`).
> Pasta no repositório: `lectures/06-bioactivity/` (renomeada de `05-bioactivity` via `git mv`, histórico preservado).

---

## 0. Formato e espinha

**Página de seções** (não é o deck full-screen da 04; é o formato de `<section>` da 03): barra de progresso,
índice lateral (`.secnav`), navegação ←/→ · PageUp/Down · Home/End · **F** herdada de `lecture.js`.
**10 seções.** Identidade *Clinical Clean* [D-02]: teal=ciência, âmbar=clínica, rosa=equívoco, painel
escuro=mecanismo.

Espinha: *"bioativo" não é o rótulo na caixa — é uma resposta biológica específica, intencional e
comprovada.* Eixo **structure → property → performance** (dissolução/superfície reativa → liberação de
íons + mudança de pH → resposta mineral/tecidual). Âncora clínica: **terapia pulpar vital** (cimento de
silicato de cálcio sobre polpa quase exposta → ponte de dentina).

---

## 1. Estrutura das 10 seções

| # | id | Seção | Elemento visual |
|---|---|---|---|
| Hero | `#hero` | Bioactivity — abertura + gancho da cavidade profunda | — |
| 1 | `#objectives` | Learning objectives (os 6) | grade `.objectives` |
| 2 | `#meaning` | What bioactivity means | **4 flip cards** (bioactive/biocompatible/remineralising/antimicrobial) + deep-dive ISO/SBF |
| 3 | `#beyond-apatite` | More than apatite | **FIG 06.1** + myth/fact |
| 4 | `#how` | How bioactivity arises | **bancada animada** (SVG/JS, stepper 3 passos) + deep-dive química |
| 5 | `#mechanisms` | Three routes | **FIG 06.2** |
| 6 | `#evolution` | A short history | **timeline stepper** (4 passos) |
| 7 | `#repair-regen` | Repair vs regeneration | **FIG 06.3** |
| 8 | `#clinical` | Clinical materials | **FIG 06.4** + tabela de 6 materiais |
| 9 | `#claims` | Evaluating claims | **FIG 06.5** + myth/fact + deep-dive 5 critérios FDI |
| 10 | `#summary` | Take-home (mapa de outcomes, sem quiz) | lista `.takehome` com `[obj n]` |

---

## 2. Cobertura dos 6 learning outcomes

1. **Definir bioatividade** e separá-la de biocompatibilidade / remineralização / ação antimicrobiana
   → §1 (obj) + §2 `#meaning` (4 flip cards + box "duas definições, uma ideia").
2. **Bioatividade = leque de respostas biológicas**; apatita é um exemplo clássico, não o conceito todo
   → §3 `#beyond-apatite` (FIG 06.1, espectro) + §5 `#mechanisms` (três rotas).
3. **Como um material se torna bioativo** (muda a química local: íons, pH, superfície reativa)
   → §4 `#how` (bancada animada: dissolução → mudança local → resposta).
4. **Origem no reparo ósseo → ampliação na odontologia** e por que isso convida ao exagero do termo
   → §6 `#evolution` (timeline: 1969–71 Hench → 1990s–2000s → 2010s hype → 2018–22 consenso/FDI).
5. **Reparo × regeneração** como desfechos → §7 `#repair-regen` (FIG 06.3; dentina terciária × dentina tubular).
6. **Julgar se a alegação "bioativo" tem evidência** → §9 `#claims` (FIG 06.5 + escada de evidência + 5 critérios
   FDI) + §8 `#clinical` (materiais de referência: CaOH, MTA, Biodentine, seladores, GIC, bioglass).

---

## 3. Mapa de figuras (FIG 06.1–06.5) — todas em `assets/`, kebab-case, já ligadas no HTML

| Fig | Arquivo | Seção | O que mostra |
|---|---|---|---|
| **06.1** | `spectrum-inert-to-bioactive.png` | §3 `#beyond-apatite` | Espectro INERT→BIOACTIVE (ouro/alumina → composito → GIC → bioglass → silicato de cálcio); apatita é marcador, não a definição. |
| **06.2** | `three-routes-bioactivity.png` | §5 `#mechanisms` | Três rotas: puramente química (GIC/flúor) · mista (CaOH/MTA/Biodentine) · solely biológica (fatores de crescimento). |
| **06.3** | `repair-vs-regeneration.png` | §7 `#repair-regen` | Reparo (dentina terciária, selada mas desorganizada) × regeneração (dentina tubular original). |
| **06.4** | `pulp-capping-dentine-bridge.png` | §8 `#clinical` | Cimento de silicato de cálcio sobre polpa: libera Ca²⁺ + pH alto → células odontoblasto-like → ponte de dentina. |
| **06.5** | `ion-release-not-enough.png` | §9 `#claims` | Liberação de íons **sozinha** (sem apatita/resposta) × liberação **+** resposta tecidual — o efeito, não a liberação, define. |

Figuras-fonte extras em `1. Source/05. Bioactivity/Assets/` **não usadas** no deck (disponíveis se precisar):
"Dissolution → Local change → Response" (mecanismo) e "The evidence ladder" (SBF) — o mesmo conteúdo já
aparece como animação/deep-dive no HTML. (A pasta-fonte no Drive mantém o nome `05. Bioactivity`; só a pasta
do repositório passou a `06-bioactivity`.)

---

## 4. Elementos animados/interativos próprios

1. **Bancada do mecanismo** (§4 `#how`) — SVG/JS via stepper `data-stepper="how"`, 3 passos:
   **Dissolução** (íons Ca²⁺/PO₄³⁻/OH⁻·F⁻ derivando da superfície, `@keyframes ba-drift`) →
   **Mudança local** (pH sobe, fluido supersaturado) → **Resposta** (cristais de apatita crescendo,
   `@keyframes ba-grow`). Ensina o **mecanismo** [D-10], não é um dial com número. Respeita
   `prefers-reduced-motion`. CSS local em `<style id="ba-anim">` (classes `.ba-`); comportamento do
   stepper vem de `lecture.js`.
2. **Timeline stepper** (§6 `#evolution`) — `data-stepper="timeline"`, 4 passos (1969–71 · 1990s–2000s ·
   2010s · 2018–22), cada um num box (mech/myth/clinical) mostrando como o significado de "bioativo" mudou.
3. **4 flip cards** (§2 `#meaning`) — bioactive / biocompatible / remineralising / antimicrobial.

---

## 5. Onde ficam química e normas (deep-dives, fechados por padrão)

Para manter os slides enxutos, o conteúdo pesado fica em `<details class="reveal">`:
- **§2** — como as **normas** definem (ISO 23317 = teste de apatita em **SBF**; corpos de biomateriais usam
  definição ampla; odontologia fica no meio).
- **§4** — as **duas químicas canônicas**: vidro bioativo (troca iônica → pH ↑ → gel de sílica → camada de
  apatita) e cimentos de silicato de cálcio (reação com água → Ca(OH)₂ → pH alto + Ca²⁺). Reações
  detalhadas ficam **fora** da aula; o padrão de 3 tempos é o ponto.
- **§9** — os **5 critérios FDI** para chamar um material de "bioativo".

Ou seja: química de vidros/silicatos e o par **SBF–ISO** ficam nos deep-dives, não na tela principal.

---

## 6. Timing sugerido (~60 min)

| Bloco | Seções | min |
|---|---|---|
| Abertura + objetivos | Hero, §1 | 5 |
| O que é / além da apatita | §2, §3 | 12 |
| Mecanismo (bancada) | §4 | 10 |
| Três rotas | §5 | 6 |
| História / evolução do termo | §6 | 7 |
| Reparo × regeneração | §7 | 6 |
| Materiais clínicos (âncora) | §8 | 8 |
| Avaliando alegações | §9 | 5 |
| Take-home | §10 | 1 |
| **Total** | | **~60** |

Deep-dives são opcionais — abrir sob demanda estende cada bloco.

---

## 7. Validação técnica

- **Sem `<script>` inline** (só `<script src="../../assets/js/lecture.js">`); um único `<style id="ba-anim">`
  local para a animação da bancada.
- **10 `<section>`** + hero; **5 `<img>`** todos resolvidos em `assets/` (5 PNGs conferidos no disco).
- Tags balanceadas; sem quiz/"test yourself" [D-09]; recap final = mapa dos learning outcomes.

---

## 8. Aberto (Q-##)

- **[Q-05.1] — RESOLVIDO (2026-07-23):** numeração definida pelo Vinicius = **manter o syllabus**. Bioactivity
  é a **Aula 06** (Open); Biocompatibility permanece **05** (Soon). Pasta renomeada `05-bioactivity` →
  `06-bioactivity` (`git mv`); rótulos do número no deck e as legendas FIG 06.1–06.5 ajustados; hub e README
  no estado canônico.
- **[Q-05.2]** Handout do aluno (`handout.html`/`.pdf`) — **aberto**; não feito nesta aula (a 03/04 têm; a 06 ainda não).
- **[Q-01 global]** Alinhar aos 14 outcomes oficiais quando a lista for colada.
