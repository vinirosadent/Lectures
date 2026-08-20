# CHANGELOG

## Chat 8b — Aula 09: duas figuras de mecanismo e o corte da figura larga (2026-08-21)
- **Dois slides novos**, ambos trocando texto por mecanismo visual. Deck vai de 25 para **26 slides**
  e de 6 para **8 figuras**.
- **Slide 8** (*Particle shape sets how much water is needed*) virou duas colunas com a nova
  **FIG 09.2**, que mostra ONDE a água se aloja: dentro dos poros do β e entre as partículas nos
  dois. Não duplica a FIG 09.8 (síntese plaster × stone) — uma é mecanismo, a outra é síntese, e
  ficam a 16 slides de distância.
- **Slide 14, novo** (*How each factor acts on the setting reaction*) com a **FIG 09.5**, que amarra
  os quatro fatores do slide 13 de volta às três batidas da reação. O 13 lista *o que*; o 14 mostra
  *por que*.
- **Legendas renumeradas por posição no documento** (via script, não busca-e-substitui), para o deck
  ler 09.1 → 09.8 em ordem. Nomes de arquivo não mudaram — são descritivos, não numerados.
- **Corte da figura larga resolvido; exceção a [D-20] documentada no CSS.** Duas construções
  flexíveis falharam pelo mesmo motivo de fundo: `max-height:100%` não segurou a imagem (a
  porcentagem não resolve contra um pai cuja altura veio do flex) e o `overflow:hidden` cortou topo
  e rodapé; `flex:1 1 0` colapsou a imagem para altura nenhuma, o mesmo colapso da Aula 08. O teto
  em `vh` é a construção correta aqui, e o 68vh foi **calculado** a partir do orçamento vertical do
  slide, não chutado. Quem pegou o corte foi o smoke-test visual com WeasyPrint — o jsdom passou em
  100% dos checks com a figura cortada.

## Chat 8 — Aula 09: Gypsum products, deck completo (2026-08-20)
- **Aula nova do zero ao publicado no mesmo chat**: esqueleto de pastas, brief pré-preenchido,
  material-fonte lido (`Gypsum.pdf` — cap. Van Noort — e o `Gypsum products 2023.ppt` histórico como
  molde de escopo/formato), proposta de ensino aprovada, deck construído, 6 figuras geradas e
  integradas, publicado.
- **25 slides, 6 partes, sem widgets, sem quiz [D-09]** — decisão do Vinicius de manter a aula simples
  e curta, no molde do PPT antigo, em vez do formato multi-parte da Aula 08. Sem âncora clínica
  dedicada (removida a pedido dele).
- **Números ancorados na ISO 6873:2013** (Tabela 1 — expansão de presa e resistência à compressão por
  tipo), com dois callbacks reais para a Aula 08, que já citava os mesmos 0.20%/0.15% de expansão
  para Type 3/Type 4. Extrato da norma arquivado em `lectures/09-gypsum-products/_sources/`.
- **Revisão por persona de aluno (Ano II, sem clínica) [D-23]** encontrou e corrigiu: vocabulário
  clínico cru (articulador, dente preparado, investing), "calcined" sem explicar o processo, mecanismo
  da expansão higroscópica que só existia numa legenda de figura, a subclasse Type 2 Class 1/Class 2
  aparecendo sem contexto, ambiguidade úmido/seco na tabela de resistência, e "model stone" como
  terceiro nome para o Type 3.
- **6 figuras geradas pelo Vinicius e integradas** (`manufacture-beta-alpha-hemihydrate`,
  `gypsum-classification-tree`, `setting-reaction-dissolution-precipitation`,
  `water-powder-ratio-effect`, `setting-vs-hygroscopic-expansion`, `plaster-vs-stone-particles`) —
  já vieram com o nome-alvo exato, sem precisar de rename [D-19]. Todas conferidas visualmente antes
  de entrar: números exatos, sem texto inventado, paleta consistente.
- Ligada no menu (`index.html`, Soon → Open). Zero placeholder no deck.

## Chat 7b — Aula 08: as reações químicas ganham figura (2026-08-19)
- **Cinco figuras de reação integradas**, conferidas uma a uma contra as figuras 2.7.6 a 2.7.13 do
  Van Noort antes de entrar: polissulfeto, poliéter, condensação, adição e os quatro backbones lado
  a lado. Todas passaram na conferência química — nenhum subscrito corrompido, nenhuma valência
  inventada.
- **Estrutura por material ficou uniforme nos quatro**: identidade → química com a figura da reação
  → consequência → valores → usos. Antes só o poliéter tinha slide de consequência separado.
- **Bug de CSS corrigido**: a figura larga colapsava numa faixa de 40 px porque `flex-grow` foi
  escrito para um container que é grid, e porque `.figbox{max-width:26vw}` esmagava a largura.
  Classe `.figbox.wide` com teto em `vh`. Reforça [D-20].
- **Títulos em registro descritivo**: *What the water costs* e as outras três viraram
  **Consequence: …**; *the figures* virou **typical values**, que deixou de ser ambíguo agora que o
  deck tem figuras de verdade.
- Deck em **84 slides e 33 figuras**. Faltam duas figuras conceituais (moldeira e espaço de
  decisão); os slides funcionam sem elas.

## Chat 7 — Aula 08: Parte 2, os quatro elastômeros (2026-08-19)
- **29 slides novos (52–80)** na ordem polissulfeto → poliéter → condensação → adição. Deck fecha com
  **80 slides e 28 figuras**.
- **Eixo único da parte:** *a reação de presa deixa alguma coisa para trás?* A matriz 2×2 do subproduto é
  apresentada como **previsão**, não como lista — o aluno deduz dela o prazo de vazamento e se o modelo
  pode ser vazado duas vezes.
- **Tabela comparativa ancorada em consenso**, não em artigo isolado: tempos de trabalho e presa da tabela
  8-3 do *Phillips'* (37 °C, reômetro oscilante), ângulos de contato e contração térmica do Van Noort,
  recuperação e contração de 24 h como faixas de livro-texto. Tear strength entra como **ranking** porque
  os valores publicados se sobrepõem demais entre produtos.
- **Nenhuma ordenação usa `<` ou `>` cru** — cada linha traz o rótulo do sentido (*more is BETTER* ·
  *more is WORSE* · *too soft distorts, too stiff fractures the die*). Pedido explícito do Vinicius.
- **Slide de qualificação:** a classificação do poliéter como o mais rígido dos elastômeros **envelheceu** —
  os poliéteres moles atuais deformam mais que os silicones de adição hidrofílicos (Lu 2004; Pandey 2019).
- **Hidrogênio e paládio ficam fora**: verificado que a liberação de H₂ é problema dos anos 1980, resolvido
  pelos fabricantes; produtos atuais não exigem espera antes de vazar.
- **Moldeiras rígida × flexível** com o mecanismo declarado: a moldeira decide a *direção* da contração.
- **Revisão pela persona de aluno do 2º ano — 18 dos 20 achados aplicados**, incluindo uma **contradição
  numérica real** entre a linha de ranking e a tabela de valores, o anel de aziridina chamado de imina, e
  três cards que repetiam a mesma desvantagem apagando a distinção entre os materiais.

## Chat 6 — Aula 08 Impression materials: Parte 0, o glossário de propriedades (2026-08-13/14)
- **Aula 08 criada do zero**: pasta-fonte com `_brief.docx` pré-preenchido, pasta no repo, manifesto de
  fontes e o material histórico do Drive (4 aulas antigas) extraído para `_sources/`.
- **Escopo decidido**: materiais não-elásticos e escaneamento intraoral **fora**; todo número ancorado em
  norma ou literatura peer-reviewed, com a fonte visível no slide.
- **Dossiê de fontes primárias** (`_sources/00-glossary-…`) com ISO 4823, ISO 6873, ISO 21563 e ISO 5725-1
  mais ~25 referências, **auditado por um agente de verificação** (9 correções aplicadas, uma fonte
  descartada por ser irrastreável).
- **Parte 0 construída**: 51 slides, 17 figuras, zero placeholders. Deck desdobrado segundo o princípio
  **uma ideia por slide** — definição, exemplo do cotidiano, exemplo dental e consequência em slides
  separados.
- **Widgets removidos**: a calculadora de deformação permanente e o alvo de trueness/precision viraram
  slides. O critério que fica: animação só quando o aluno precisa ver uma grandeza mudar em resposta a
  outra para entender um mecanismo.
- **Duas correções científicas** ao que se ensina habitualmente: o modelo de gesso sai maior pela
  **expansão de presa restringida**, não pelo peso do gesso (a coluna exerce ~0,6 kPa contra os ~0,1 MPa
  do ensaio da própria norma); e **rigidez não prediz a força de remoção** da moldagem (Walker 2013 — o
  silicone de adição era o mais rígido e o poliéter exigiu mais força).
- **5 figuras construídas em SVG por código** (ensaio do disco, quatro alvos, os passos da recuperação
  elástica, o mecanismo molecular do retorno, e o ensaio de strain), com a geometria calculada em vez de
  estimada — volume constante real, médias conferidas, escalas proporcionais.
- **Bug de CSS corrigido**: `.figbox img` usava `width:100%` com um teto fixo de `76vh`, o que cortava o
  topo das imagens; substituído pela negociação por flex do [D-20].
- **Duas revisões por persona de aluno de Ano II sem experiência clínica**, ambas aplicadas: a primeira
  apontou ~30 termos clínicos usados sem definição e uma contradição numérica real; a segunda mediu os
  pixels das figuras e encontrou erros de escala dentro delas.
- Menu, README e este CHANGELOG atualizados; card 08 ligado como **Open**.

## Chat 5 (cont.) — Aula 07: revisão de registro para tom acadêmico (2026-08-12)
- **Todos os 24 títulos de slide** reescritos em forma descritiva (ex.: *"Oxygen: the defect that became the
  machine"* → *"Oxygen inhibition in printing and in CLIP"*; *"Same surface. Opposite rule."* →
  *"Support placement on a crown and on a denture base"*).
- **Todos os 26 rótulos de caixa** (`k-tag`) trocados por rótulos funcionais neutros: *Definition ·
  Interpretation · Methodological limitation · Scope of this lecture · Practical consequence · Discussion
  point · General rule*, no lugar de *"The twist" · "The sentence to remember" · "The asymmetry nobody
  teaches" · "Take this one sentence" · "Why this is the spine of the lecture"*.
- **Removido** o bloco `.bigq` (frase de efeito sobre o oxigênio) e a regra CSS órfã; substituído por uma
  caixa de mecanismo que resume a mesma física em registro descritivo.
- **Eyebrows** padronizados como rótulos de seção (*Context · Structure · Property · Mechanism ·
  Performance · Interactive · Summary*).
- **Prosa e strings dos widgets** revisadas: retiradas as construções de apóstrofe ao aluno ("Ask yourself",
  "Keep asking", "The part looks finished. It is not."), mantidos os conteúdos e todos os números.
- **Slide de adoção**: tabela de crescimento restaurada com as duas linhas (impressão 3D 10%→57%;
  fresagem 39%→67%); a não-substituição virou nota curta, sem enquadramento retórico.
- Validação repetida: tags balanceadas, `node --check` OK, varredura headless dos 3 widgets sem alteração
  de comportamento.


## Chat 5 — Aula 07 · Principles of 3D printing in dentistry (2026-08-12)
- **Nova aula publicada**: `lectures/07-3d-printing/index.html` — deck **autocontido** no esquema da Aula 03
  (`.deck > .track > .slide`, CSS e JS inline), **30 slides · 5 partes**: What additive manufacturing is ·
  From digital file to finished object · The family of technologies · Where the properties are written ·
  When it goes wrong and where it reaches the patient. Sem quiz [D-09].
- **Espinha**: ISO/ASTM 52900 *single-step* × *multi-step* — a peça ganha a forma num passo e as propriedades
  noutro. Fecho: *"o STL não é o objeto, é uma intenção"*. Âncora: Farag 2024 (build angle × gap marginal).
- **3 widgets interativos** (SVG/canvas inline, sem bibliotecas, determinísticos para scrub ao vivo):
  **W1 staircase** (layer height × ângulo → `h/tanθ`, desvio, nº de camadas, tempo `T ∝ 1/h`);
  **W2 one angle, four consequences** (0/45/90° → orientação na plataforma · staircase na margem ·
  posição dos supports · gap medido SLA/DLP com a linha dos 120 µm);
  **W3 gel point** (canvas: rede polimérica, mobilidade colapsando, DC travando em 46% e destravando a 70%
  na pós-cura, barra de monômero não reagido).
- **8 figuras** em `assets/`: `workflow-ribbon` · `process-families-matrix` · `vat-optics-sla-lcd` ·
  `vat-optics-dlp-clip` · `failure-gallery` · `supports-intaglio-inversion` · `trueness-precision-target` ·
  `maturity-ladder`. Prompts versionados em `_ops/prompts/07-3d-printing-figuras.md`.
- **Base documental**: 17 PDFs digeridos + pesquisa web, sintetizados em `lectures/07-3d-printing/_sources/`
  (A princípios/tecnologias · B aplicações · C processo→propriedade · D recursos de ensino ·
  E simulações web · F exemplos clínicos), com nível de evidência por fonte e lacunas declaradas.
- **Decisões**: metais só pelo mecanismo de consolidação, ciclo térmico adiado para a Aula 16; fontes
  comerciais usadas como referência visual e de fluxo, sem citar seus números; guias cirúrgicas ensinadas
  com os desvios por tipo de suporte (dente/osso/mucosa).
- **Robustez**: cada widget isolado em `try/catch` e o hook de canvas protegido — um erro num widget não
  derruba a navegação do deck; `show(0)` passou a rodar antes dos widgets.
- **Validação**: `node --check` do JS inline OK; tags balanceadas (section 30/30, div 201/201, svg 2/2);
  8 `<img>` resolvem; execução headless em jsdom — varredura completa de W1 (4 alturas × 15 ângulos, sem
  NaN), W2 (3 ângulos) e W3 (DC monotônico 0→70%, cor vira de alerta para ok ao cruzar 50%), navegação,
  barra de progresso e overview com 30 itens.
- **Menu**: card 07 `soon` → `live`. Sem handout ainda.


## Chat 4 (cont.) — Aula 06 reconstruída no esquema de deck horizontal da Aula 03 (2026-07-23)
- **Novo `index.html`**: deck **autocontido** no esquema `.deck > .track > .slide` (CSS **e** JS inline,
  motor de navegação clonado da Aula 03/04) substituiu a versão anterior de **scroll vertical** (que usava
  `assets/js/lecture.js` + animações SVG). `index-deck.html` → `index.html`.
- **23 slides · 6 partes**: What "bioactive" means · More than apatite · How bioactivity arises ·
  How it works & how the idea grew (rotas + história) · In the tooth (repair & materials) · Judging a claim.
  Navegação ←/→ · Espaço · PageUp/Down · Home/End · **F** tela cheia · **O** overview.
- **6 figuras** (nova ordem, `assets/`, já ligadas): `spectrum-inert-to-bioactive` (FIG 06.1) ·
  `ion-release-not-enough` (06.2) · `mechanism-three-beats` (06.3, **nova** — antes era animação SVG) ·
  `three-routes-bioactivity` (06.4) · `repair-vs-regeneration` (06.5) · `pulp-capping-dentine-bridge` (06.6).
- **Sem quiz** [D-09]; take-home = 6 essenciais. Sem `slide--interactive` (o mecanismo virou figura estática).
- **`notes.md`** reescrito para o novo formato (estrutura de 6 partes, mapa FIG 06.1–06.6, timing ~60 min);
  **[Q-06.1]** (formato) fechado.
- **Validação**: 6 `<img>` resolvem; tags balanceadas (section 23/23, div 126/126, svg 1/1, script 1/1).
  `node --check` do JS inline pendente nesta sessão (node não instalado); motor idêntico ao já validado na 03/04.

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
