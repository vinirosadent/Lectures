# Aula 09 — Gypsum products · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado: **deck completo, com as 6 figuras integradas (2026-08-20)** — 25 slides, zero placeholder,
> validado (tags, JS, imagens, navegação), revisão por persona de aluno aplicada. **Ainda não
> publicado**: falta ligar no menu (`index.html`), atualizar README/CHANGELOG e rodar o git (comando
> `publicar`).
> Formato: **deck full-screen autocontido** no motor da Aula 03 (`.deck > .track > .slide`, CSS+JS
> inline, CSS copiado da Aula 08). Sem quiz [D-09], sem widget (decisão do Vinicius — molde do PPT
> antigo). Pasta no repositório: `lectures/09-gypsum-products/`.

---

## 0. Contrato da aula

**Fonte dos outcomes:** `0. Course plan\Learning outcomes (master).docx` → seção *09. Gypsum products · 1 h*.

**Objective (syllabus):** Understand gypsum products and their applications.
**Duração:** 1 h · Ano 2, pré-clínico · segue a Aula 08 (Impression materials) na Fase 2 (Clinical materials).

| # | Learning outcome |
|---|---|
| LO-1 | Differentiate types of gypsum (impression plaster, model plaster, dental stone, high-strength stone, high-strength high-expansion stone). |
| LO-2 | Explain the setting reaction (hemihydrate → dihydrate, dissolution–precipitation). |
| LO-3 | Relate setting/hygroscopic expansion to dimensional accuracy of the cast. |

**Elo natural com a Aula 08:** o gypsum é o material que recebe a impressão — vocabulário clínico já
estabelecido (tray, impression, pour, cast, die) pode ser referenciado em vez de redefinido do zero.
A verificar na proposta de ensino se vale a pena abrir com esse elo explícito.

**Decisões de escopo:** nenhuma travada ainda — aguardando `_brief.docx` preenchido e/ou material-fonte.

---

## 1. Manifesto de fontes (`Fonte → Alimenta → Status`)

| Fonte | Tipo | Alimenta | Nível de evidência | Status |
|---|---|---|---|---|
| `1. Source\09. Gypsum products\Texts\Gypsum.pdf` — cap. "Produtos à base de gesso" (Introdução aos Materiais Dentários, Van Noort, trad. PT-BR) | livro-texto (6 pág., OCR degradado por ligaduras) | mecanismo da reação de presa, manufatura β/α-hemidrato, fatores que controlam tempo de presa e resistência, estabilidade dimensional, reprodução de detalhe | textbook (peer-reviewed de referência) | lido; OCR ruim em ~30% do texto, mas conteúdo reconhecível e consistente com o PPT — não usar para citação verbatim |
| `Gypsum products 2023.ppt` (raiz do Drive — arquivo morto, **NÃO editado**) | aula anterior do próprio Vinicius, 30 slides | **molde de escopo e extensão** — confirma que a aula é curta e direta: o que é gesso, por que usamos, tipos/classificação ADA, manufatura, reação de presa, controle de tempo de presa, expansão de presa/higroscópica, resistência, W/P ratio, plaster × stone | material de aula própria (não citável como número — ver abaixo) | lido integralmente via conversão LibreOffice→PDF; **usar como referência de FORMATO/COMPRIMENTO, não de números** — alguns valores (W/P ratio por tipo) podem estar desatualizados frente à ISO 6873:2013 |
| ISO 6873:2013 *Dentistry — Gypsum products* (extrato consultado via preview público iTeh) | norma ISO | classificação oficial Type 1–5, tabela de expansão de presa (2h/24h) e resistência à compressão (1h) por tipo — **substitui os números do PPT antigo** | norma ISO (fonte de primeira classe, D-17) | extrato arquivado em `_sources/iso-6873-2013-extract.md` |

**Decisão de escopo herdada da direção do Vinicius (2026-08-20):** aula **simples e curta** (1 h),
seguindo o molde do PPT antigo — não expandir no estilo multi-parte da Aula 08. Meta de trabalho:
~20–25 slides no formato Clinical Clean (1 ideia por slide), sem inflar o escopo além do que o PPT
já cobria.

## 0b. Proposta de ensino — aprovada (2026-08-20)

Espinha: produtos de gesso convertem um pó de hemidrato em um molde rígido de diidrato por uma reação
de dissolução-precipitação; a cinética e o empacotamento dos cristais — definidos pela manufatura
(β vs α-hemidrato), pela razão água/pó e por aditivos — determinam tempo de presa, expansão e
resistência, que decidem se um tipo serve para impressão, modelo de estudo ou troquel de precisão.

**Decisões fechadas nesta rodada:**
- **[D-09.4] SEM âncora clínica dedicada.** O Vinicius rejeitou a âncora proposta (técnico pesando
  água/pó, troquel em gesso diferente) — "não é uma boa âncora, não quero âncora aqui". A aula abre
  direto pelo contexto/elo com a Aula 08, sem um slide de caso-gancho.
- **[D-09.5] Aceleradores/retardadores: só citar que existem, sem elaborar.** Nada de slide dedicado a
  cada aditivo (K₂SO₄, bórax, coloides) — uma linha/lista rápida dentro do slide de "fatores que
  controlam o tempo de presa" basta.
- **Nomenclatura:** ISO 6873 (Type 1–5) como primária, nome ADA clássico entre parênteses — proposta
  aceita sem objeção (resolve Q-09.1).
- **Sem widget.** Mantém o molde do PPT (zero animação); a razão água/pó vira tabela/dado estático, não
  slider.
- **6 figuras a gerar**, nenhuma existente em `Assets/` — aceito sem objeção.

**Esqueleto aprovado (structure → property → performance):**

| Seção | Conteúdo | Figura |
|---|---|---|
| Abertura | O que é gesso quimicamente + por que a Odontologia precisa dele + elo com a Aula 08 | — |
| Manufatura | β-hemidrato (calcinação ao ar) × α-hemidrato (autoclave) — morfologia da partícula | FIG 09.1 |
| Classificação | ISO 6873 Type 1–5 (nome ADA ao lado), ligada à manufatura | FIG 09.2 |
| Reação de presa | Dissolução → supersaturação → precipitação de cristais entrelaçados, exotérmica | FIG 09.3 |
| Controle do tempo de presa | Tamanho de partícula, aditivos (citados, não elaborados), razão água/pó, espatulação | — |
| Razão água/pó | ↑água → ↑tempo de presa, ↑porosidade, ↓resistência (dado estático ISO 6873) | FIG 09.4 |
| Expansão | Presa × higroscópica — mecanismo e diferença de grandeza | FIG 09.5 |
| Resistência | Úmida × seca; fatores | — (tabela) |
| Plaster × Stone | Síntese comparativa + seleção clínica por tipo | FIG 09.6 |
| Recap | Mapa dos 3 outcomes | — |

Números-âncora: Tabela 1 da ISO 6873:2013 (`_sources/iso-6873-2013-extract.md`) para tempo de presa,
expansão (2h/24h) e resistência à compressão por tipo.

---

## 2. Estrutura do deck — construído (2026-08-20)

**25 slides**, deck horizontal autocontido (motor da Aula 03/08), CSS copiado verbatim de `lectures/
08-impression-materials/index.html` (versão mais madura/corrigida da folha compartilhada — já inclui
todos os fixes de layout [D-20] e os componentes `.dtable`, `.datastrip`, `.axisnote`, `.srcline`,
`.ph`). Sem widgets (decisão do Vinicius: molde do PPT antigo). Zero `<img>` órfã — as 6 figuras estão
como placeholders `.ph` dentro do `.figbox`, prontos para virar `<img>` quando as figuras chegarem.

| # | Slide | Figura |
|---|---|---|
| 1 | Título | — |
| 2 | Divisor Parte 1/6 — What gypsum is, and why dentistry needs it | — |
| 3 | Learning objectives | — |
| 4 | From mineral gypsum to dental hemihydrate | — |
| 5 | Why dentistry needs it (elo factual com a Aula 08) | — |
| 6 | Divisor Parte 2/6 — Manufacture sets the type | — |
| 7 | Same dihydrate, two different hemihydrates | **FIG 09.1** |
| 8 | Particle shape sets how much water is needed | — |
| 9 | Five types, ISO 6873:2013 (dtable) | **FIG 09.2** |
| 10 | Divisor Parte 3/6 — The setting reaction | — |
| 11 | Dissolution, then precipitation (`.steps`) | **FIG 09.3** |
| 12 | Divisor Parte 4/6 — Controlling the set | — |
| 13 | What speeds up or slows down setting | — |
| 14 | Water/powder ratio: effect on setting time and strength | **FIG 09.4** |
| 15 | Divisor Parte 5/6 — Expansion, a controlled side effect | — |
| 16 | Setting expansion: crystal growth in air | — |
| 17 | Hygroscopic expansion: setting against water | **FIG 09.5** |
| 18 | Clinical significance: expansion as shrinkage compensation (`.vs` too little/too much + callback aos 0.20%/0.15% já citados na Aula 08) | — |
| 19 | Linear setting expansion by type (dtable ISO 6873 Tabela 1) | — |
| 20 | Divisor Parte 6/6 — Strength and choosing a type | — |
| 21 | Wet strength, dry strength, and the ISO minimum (dtable) | — |
| 22 | Factors controlling strength | — |
| 23 | Plaster and stone, side by side | **FIG 09.6** |
| 24 | Matching the type to the task (dtable de seleção clínica) | — |
| 25 | Take-home — os 3 outcomes | — |

**Decisões de conteúdo aplicadas nesta rodada (2026-08-20):**
- **Sem âncora clínica dedicada** — removida por pedido do Vinicius. A abertura liga à Aula 08 só como
  frase factual ("The impression itself... exists only long enough to be poured; the gypsum product is
  what survives on the bench afterwards"), não como caso-gancho.
- **Aceleradores/retardadores citados, não elaborados** — uma linha no slide 13 ("potassium sulphate…
  borax…"), sem slide dedicado a mecanismo de cada aditivo.
- **Números-âncora = ISO 6873:2013 Tabela 1** (`_sources/iso-6873-2013-extract.md`), não os valores do
  PPT antigo. Consistência verificada com a Aula 08, que já citava 0.20%/0.15% (Type 3/Type 4) para o
  mesmo standard — usado como callback no slide 18.
- **[D-16] varredura aplicada**: 4 títulos reescritos para tirar qualquer sabor de frase de duas partes
  ("More water: slower set, weaker cast" → "Water/powder ratio: effect on setting time and strength";
  "Growing crystals push the cast wider" → "Setting expansion: crystal growth in air"; etc.). Dois
  `k-tag` fora do vocabulário fixo ("Counter-intuitive", "Do not confuse") trocados por "Important
  qualification" e "Note".
- **[D-21] varredura aplicada**: o slide de manufatura tinha 3 caixas empilhadas (2 `.defbox` + `.mech`)
  — convertido para `.vs` (cards lado a lado) + `.mech`, ficando em 2 blocos.

---

## 3. Mapa de figuras (Drive → repo) — todas integradas (2026-08-20)

As 6 figuras foram geradas pelo Vinicius (ChatGPT) e largadas em `1. Source\09. Gypsum products\
Assets\` **já com os nomes-alvo exatos** — nenhum rename necessário [D-19]. Copiadas 1:1 para
`lectures/09-gypsum-products/assets/` e integradas no `index.html`, substituindo os 6 placeholders
`.ph`. Todas conferidas visualmente contra o checklist do prompt antes de integrar: números exatos
(fórmulas, faixas de W/P ratio), sem texto inventado, sem logo/marca d'água, paleta âmbar=β/plaster
e teal=α/stone consistente nas 6.

| Figura | Arquivo | Slide | Conferência visual |
|---|---|---|---|
| FIG 09.1 | `manufacture-beta-alpha-hemihydrate.png` | 7 | OK — fórmulas exatas, partículas β porosas vs α densas bem distintas |
| FIG 09.2 | `gypsum-water-demand-beta-alpha.png` | 8 | OK — α maciça sem poros (o erro mais provável, evitado), poros do β preenchidos de água, barras ~85%/50% |
| FIG 09.3 | `gypsum-classification-tree.png` | 9 | OK — 5 folhas (2+3), cores consistentes com 09.1 |
| FIG 09.4 | `setting-reaction-dissolution-precipitation.png` | 11 | OK — progressão dos 3 béqueres clara, equação exata |
| FIG 09.5 | `setting-time-factors-mechanism.png` | 14 | OK, com nota — os béqueres da linha 3 não têm exatamente a mesma contagem de pontos (12 vs ~9); o contraste de densidade lê corretamente à distância, não vale regerar |
| FIG 09.6 | `water-powder-ratio-effect.png` | 15 | OK — curvas em X, sem valores no eixo X, nota "schematic trend" presente |
| FIG 09.7 | `setting-vs-hygroscopic-expansion.png` | 18 | OK, com nota — usou setas para dentro/fora em vez de bloco maior à direita (variação aceitável do prompt, mecanismo continua claro) |
| FIG 09.8 | `plaster-vs-stone-particles.png` | 24 | OK — contraste de empacotamento óbvio, os dois valores de W/P ratio e resistência exatos |

### Segunda rodada de figuras (2026-08-21) — dois slides novos, deck vai a 26 slides

Duas figuras extras foram pedidas pelo Vinicius e integradas, ambas de MECANISMO (o "porquê"), em
slides que antes eram só texto:
- **Slide 8** (`Particle shape sets how much water is needed`) virou duas colunas e ganhou a
  **FIG 09.2**, que mostra ONDE a água se aloja — dentro dos poros do β e entre as partículas nos
  dois. Deliberadamente **não** duplica a FIG 09.8 (síntese plaster × stone): esta é o mecanismo,
  aquela é a síntese, e ficam a 16 slides de distância. A repetição do W/P ratio nas duas é reforço
  intencional.
- **Slide 14, novo** (`How each factor acts on the setting reaction`) recebeu a **FIG 09.5**, figura
  larga sozinha, que amarra os 4 fatores do slide 13 de volta às três batidas da FIG 09.4. Divisão:
  o slide 13 lista *o que* são os fatores, o 14 mostra *por que* funcionam.

Renumeração: com as duas inserções, todas as legendas foram renumeradas **por posição no documento**
(script, não busca-e-substitui manual) para que o deck leia 09.1 → 09.8 em ordem. Os nomes de arquivo
são descritivos em kebab-case e **não** mudaram.

**Bug de layout resolvido — exceção documentada a [D-20].** A figura larga do slide 14 cortava no
topo e no rodapé. Duas construções flexíveis foram tentadas e falharam pelo mesmo motivo de fundo (a
altura da imagem dependia de uma altura do pai que só existe depois do layout): `max-height:100%`
deixou a imagem no tamanho intrínseco e o `overflow:hidden` do figbox a cortou; `flex:1 1 0` a
colapsou para altura nenhuma — o mesmo colapso já visto na Aula 08. A solução correta aqui é o teto
absoluto em `vh`, e o valor **não foi chutado**: 100vh − 4vh − 6.5vh de padding, − eyebrow (~2.4vh),
título (~5.7vh), subtítulo de uma linha (~4.3vh), padding do figbox (~3vh) e legenda (~2.9vh) ≈ 71vh
disponíveis; ficou em **68vh**, com margem para o título quebrar em duas linhas. O raciocínio está
comentado no CSS, na classe `.s-body.one-col.figonly`.

Validação pós-integração (as duas rodadas): tags balanceadas, `node --check` ok, 0 placeholders `.ph`,
8/8 `<img>` resolvendo em disco, legendas 09.1–09.8 em ordem, navegação/overview/progresso via jsdom,
e **smoke-test visual com WeasyPrint** nos dois slides novos (foi ele que pegou o corte).

---

## 4. Widgets interativos

**Nenhum.** Decisão do Vinicius: aula simples no molde do PPT antigo (que também não tem animação).
A razão água/pó, única candidata real ao teste [D-10], virou slide de mecanismo + dado estático em
vez de slider.

---

## 5. Timing

25 slides para 1 h de aula (mais curta que a Aula 08, como pedido). 6 partes: (1) contexto/composição,
2 slides de conteúdo; (2) manufatura/classificação, 3 slides; (3) reação de presa, 1 slide; (4)
controle da presa, 2 slides; (5) expansão, 4 slides; (6) resistência/seleção/recap, 5 slides — mais
6 divisores e 1 título.

---

## 6. Pendências

- [Q-09.1] ~~Confirmar nomenclatura~~ — **resolvido**: ISO 6873 (Type 1–5) como primária, sem nome ADA
  em paralelo (o PPT antigo usava "Type I–V"/GV Black, mas o deck ficou só com ISO 6873 por
  simplicidade — Vinicius pode pedir para adicionar o nome ADA clássico entre parênteses se preferir).
- [Q-09.2] ~~Water/powder ratio~~ — **resolvido**: entrou (slides 8 e 14), com faixas ilustrativas de
  textbook, não normativas.
- [Q-09.3] ~~Material-fonte~~ — **resolvido**: `Gypsum.pdf` (cap. Van Noort, OCR degradado) recebido e
  lido; `Gypsum products 2023.ppt` (arquivo morto na raiz do Drive) revisado como molde de
  escopo/formato, não de números.
- [Q-09.4] **Novo.** Figuras ainda não geradas — deck construído com 6 placeholders `.ph`. Rodar
  `imagens?` depois que o Vinicius gerar os PNGs, ou aguardar ele soltar os arquivos em `Assets\`.
- [Q-09.5] ~~Revisão por persona~~ — **resolvido**, ver seção 7.

---

## 7. Revisão por persona de aluno [D-23] (2026-08-20)

Subagente com a persona "aluno de Odontologia Ano II da NUS, sem experiência clínica" leu os 25 slides
na ordem. Notas de compreensão 6–9/10 em todos os conceitos; nenhuma contradição numérica encontrada.

**Aplicado:**
- Slide 5 (Why dentistry needs it): glosou inline `prepared tooth`, `articulator`, `wax pattern`/
  `investing` — antes soltos sem definição, maior ponto de risco de desengajamento apontado.
- Slide 7 (manufatura): "calcined" trocado por "heated... to drive off water" nos dois cards — o termo
  sozinho não dizia o que fisicamente acontece.
- Slide 17 (hygroscopic expansion): o mecanismo de tensão superficial, que só existia na legenda da
  figura ainda pendente, migrou para o texto do slide (`.mech`) — não pode depender só da figura.
- Slide 9 e 19 (classificação): Type 2 Class 1/Class 2 estava aparecendo do nada na tabela ISO
  (slide 19) — agora introduzido já no slide 9 ("mounting (Class 1) or models (Class 2)") e o srcline
  do slide 19 faz o elo de volta.
- Slide 21 (resistência): cabeçalho da tabela mudou para "Compressive strength, **wet**, 1 h (MPa)" —
  estava ambíguo se batia com a "resistência úmida" citada na key acima.
- Slide 18: removida a repetição quase literal do callback à Aula 08 (aparecia no card E na key);
  também "model stone" virou "dental stone" para bater com o rótulo já usado no slide 9.
- Slide 24 (seleção clínica): `master cast`, `die`, `wax-up` e `investment shrinkage` glosados inline
  em vez de citados crus.

**Não aplicado (decisão adiada para o Vinicius, não é regra travada):**
- Nomenclatura ADA clássica (Type I–V) em paralelo ao ISO 6873 — o aluno-persona não pediu isso, mas
  fica registrado como opção caso o Vinicius prefira dar as duas nomenclaturas lado a lado (Q-09.1).
- Ordem dos números de expansão: o aluno notou que o slide 18 (prosa, cita 0.20%/0.15%) antecede a
  tabela formal do slide 19 com os mesmos números — efeito "déjà vu" leve, mas intencional (o slide 18
  é sobre a *consequência clínica* do intervalo, a 19 é *a tabela de referência* completa); mantido.
