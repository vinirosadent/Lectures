# Aula 08 — Impression materials · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado: **esqueleto criado (2026-08-13)** — pastas prontas, `_brief.docx` pré-preenchido,
> material histórico já inventariado em `_sources/`. **Sem HTML ainda.**
> Próximo passo: Vinicius ajusta o `_brief.docx` e larga material extra em
> `1. Source\08. Impression materials\Texts|Assets`; depois vem a **proposta de ensino**
> (comando `nova aula 08`) e só então o deck. **Escopo já decidido em 2026-08-13 — ver seção 0.**
> Formato-alvo: **deck full-screen autocontido** no motor da Aula 03 (`.deck > .track > .slide`, CSS+JS
> inline). Sem quiz nos slides [D-09]. Pasta no repositório: `lectures/08-impression-materials/`.

---

## 0. Contrato da aula

**Fonte dos outcomes:** `0. Course plan\Learning outcomes (master).docx` → seção *08. Impression materials
· 3 h*, **atualizada pelo enunciado enviado por ele em 2026-08-13** (que troca o outcome de escaneamento
digital por "overview of techniques" — divergência registrada abaixo em Q-08.1).

| # | Learning outcome (versão do brief) |
|---|---|
| LO-0 | Define and use the vocabulary of impression-material properties — consistency, working time, detail reproduction, elastic recovery and permanent deformation, strain in compression, tear strength, linear dimensional change and dimensional stability, and accuracy as trueness plus precision — each with its normative definition and a worked example. |
| LO-1 | Compare the elastic impression materials in clinical use — addition silicone (PVS), condensation silicone, polysulphide, polyether and alginate. |
| LO-2 | Relate composition and setting reaction (addition vs condensation; sol–gel) to dimensional stability, elastic recovery and the time window for pouring the cast. |
| LO-3 | Give an overview of impression techniques — tray selection and adhesion, one-stage and two-stage putty–wash, tissue displacement, removal and disinfection. |

**Decisões de escopo travadas [2026-08-13]:**

| # | Decisão |
|---|---|
| D-08.4 | **A aula abre com um GLOSSÁRIO de propriedades, com exemplos.** Sete entradas — consistency, working/setting time, detail reproduction, elastic recovery (e deformação permanente), strain in compression, tear strength, linear dimensional change vs dimensional stability, e accuracy = trueness + precision. Cada uma com definição normativa, requisito numérico e exemplo trabalhado. Nada de comparar materiais antes de o aluno saber o que está sendo comparado. Redigido e com fontes em `_sources/00-glossary-properties-and-primary-sources.md`. |
| D-08.1 | **Materiais não-elásticos ficam FORA.** Impression plaster, godiva/compound e pasta de ZOE aparecem apenas como um ramo da árvore de classificação, sem desenvolvimento. As fontes H3, H4 e H5 do manifesto ficam como contexto, não como conteúdo de tela. |
| D-08.2 | **Escaneamento intraoral não é mencionado.** O outcome da lista-mestre *"Situate digital scanning as an alternative"* foi riscado; o fluxo digital é tratado integralmente na Aula 14. Isto substitui a redação do enunciado de 2026-08-13 no ponto do LO-3. |
| D-08.3 | **Todo número comparativo vai para a tela com fonte visível** — ISO 4823 (elastômeros), ISO 21563 (hidrocoloides) ou literatura peer-reviewed, numa `srcline` no próprio slide. Os valores das aulas antigas só entram depois de ancorados. |

Consequência de tempo: com não-elásticos e digital fora, as 3 h ficam concentradas nos quatro elastômeros
+ alginato, na tabela comparativa e nas técnicas — cabe cobertura profunda de mecanismo.

**Objective (syllabus):** Know impression materials and their selection criteria.
**Duração:** 3 h · Ano 2, pré-clínico · **primeira aula da Fase 2 (Clinical materials)**.

**Espinha (rascunho no brief, a confirmar):** *a moldagem é um registro dimensional, e todo material começa
a perder esse registro no momento em que presa: a reação de presa decide se um subproduto deixa o material,
se água entra ou sai dele e, portanto, por quanto tempo o registro continua verdadeiro — escolher um
material de moldagem é escolher qual erro dimensional se é capaz de controlar.*

Eixo **structure → property → performance**: química da presa e subproduto → estabilidade dimensional,
recuperação elástica, resistência ao rasgamento → adaptação marginal, janela para vazar o modelo, falha.

**Fronteiras com outras aulas:** gesso e materiais de troquel ficam na **Aula 09**; ZOE como cimento de
fixação fica na **Aula 10**; o fluxo digital completo fica na **Aula 14**; degradação/envelhecimento na
**Aula 20**. Apoia-se na **Aula 03** (polimerização por adição × condensação, subproduto, contração) sem
repetir a química do zero.

---

## 1. Manifesto de fontes (`Fonte → Alimenta → Status`)

Toda atualização é **incremental por manifesto** [D-11]: material novo = arquivo em
`1. Source\08. Impression materials\` que não aparece nesta tabela.

Coluna **Nível**: 🟢 peer-reviewed utilizável · 🟡 material didático próprio (sem citação rastreável) ·
🔴 comercial/não rastreável (entra como referência visual, nunca como número [D-17]).

### 1a. Material histórico do Vinicius (raiz do Drive — arquivo morto, **read-only**)

Texto extraído com `pdftotext -layout` e versionado em `_sources/`. As figuras desses PDFs são **bitmaps de
slide antigo**; a recomendação é **redesenhar** como figuras Clinical Clean, não reaproveitar.

| # | Fonte (raiz de `Lectures\`) | Nível | Alimenta | Status |
|---|---|---|---|---|
| H1 | `Elastomeric impression materials 2024.pdf` — 75 slides, 193 bitmaps | 🟡 | Composição, reação de presa e propriedades dos 4 elastômeros; tabela de falhas; ranking comparativo; desinfecção | extraído → `_sources/hist-elastomeric-2024.md` |
| H2 | `Hydrocollois - Alginate 2025.pdf` — 32 slides, 167 bitmaps | 🟡 | Definição de moldagem, propriedades desejáveis (17 itens), sol–gel, alginato (composição, reação, manipulação), ágar | extraído → `_sources/hist-hydrocolloids-alginate-2025.md` |
| H3 | `Non elastic impression materials.pdf` — 32 slides, 286 bitmaps | 🟡 | ~~Plaster, godiva~~ — **fora do escopo [D-08.1]**; fica só como contexto do ramo da árvore | extraído → `_sources/hist-non-elastic-2021.md` — **texto parcial**: boa parte dos slides finais é imagem, sem camada de texto |
| H4 | `Duplicating Materials.pdf` — 6 slides | 🟡 | Ágar como material duplicador (ponte com H2) | extraído → `_sources/hist-duplicating-materials-2017.md` |
| H5 | `Zinc Oxide and Eugenol 2025.pdf` — 32 slides | 🟡 | **fora do escopo [D-08.1]** — ZOE é cimento (Aula 10) | **não extraído**, por decisão |
| H6 | `Elastomeric impression materials 2024.ppt`, `Hydrocollois - Alginate.pptx`, `Non elastic impression materials.ppt` | 🟡 | Originais editáveis dos PDFs acima | não abertos — usar se precisar de uma figura em vetor |

### 1b. Fontes primárias — normas e literatura (busca de 2026-08-13)

Dossiê completo, com definição verbatim, requisito numérico, exemplo e citação Vancouver de cada item:
**`_sources/00-glossary-properties-and-primary-sources.md`**; o texto normativo consultado está arquivado em
**`_sources/01-iso-4823-extract.md`**.

> **Auditado em 2026-08-13** por um agente de verificação independente, que conferiu cada número e cada
> referência contra o PubMed e contra a FDA guidance de set/2024 (que reproduz a Tabela 1 da ISO 4823).
> Nove correções foram encontradas e **já aplicadas** — entre elas uma referência com autor e página
> errados citada cinco vezes no corpo, um achado de Khan 2020 invertido, e o critério de 120 µm apresentado
> como consenso quando não é. Uma fonte foi **descartada por ser irrastreável** (Kazanji 2020).

Resumo do que ficou ancorado:

| Propriedade | Requisito normativo | Fonte |
|---|---|---|
| Detail reproduction | 20 µm (tipos 2 e 3) · 50 µm (tipo 1) · 75 µm (tipo 0) · 50 µm alginato | 🟢 ISO 4823 Tab. 1 · ISO 21563:2021 |
| Elastic recovery | **≥ 96,5 %** elastômeros · **≥ 95 %** alginato | 🟢 ISO 4823 5.8/Tab. 1 · ISO 21563 via Singer 2024 |
| Strain in compression | 0,8–20,0 % (tipos 0 e 1) · 2,0–20,0 % (tipos 2 e 3) — **faixa, não mínimo** | 🟢 ISO 4823 5.9/Tab. 1 |
| Linear dimensional change | **máx. 1,5 %** em 24 h, todos os tipos | 🟢 ISO 4823 5.6/Tab. 1 |
| Tear strength | **nenhum requisito na ISO 4823** · **≥ 0,38 N/mm** no alginato | 🟢 ISO 4823 Tab. 1 (ausência) · ISO 21563 via Singer 2024 |
| Accuracy | = **trueness + precision** | 🟢 ISO 5725-1 |
| Compatibility with gypsum | 75 µm (tipo 0) · 50 µm (tipos 1, 2 e 3) — **o detalhe é perdido na transferência para o gesso** | 🟢 ISO 4823 5.7/Tab. 1 |
| Ranking de tear energy | polissulfeto > silicone de adição > silicone de condensação (poliéter **não posicionado** no abstract) | 🟢 Keck & Douglas, *J Dent Res* 1984;63(2):155-7 |
| Deriva dimensional no tempo | adição estável; condensação perde rápido; poliéter **expande** com sorção | 🟢 Williams 1984 · Marcinak 1980 · Walker 2010 |
| Critério de referência | **120 µm — historicamente adotado, SEM consenso** (propostas de 50 a 200 µm); é medida de espessura de cimento, não desfecho clínico | 🟢 McLean & von Fraunhofer 1971 · Yeo 2003 |

**Correções ao material histórico já documentadas** (seção 3 do dossiê): a inibição por luva de látex é
mais estreita e dependente de marca do que se ensina, e os hemostáticos de sulfato foram inocentados
(Machado & Guedes 2011; de Camargo 1993); os materiais provisórios são um inibidor melhor documentado
(Al-Sowygh 2014, 5 de 6 marcas de PVS, p<0,001); os dois números de contração do poliéter dependem da
condição de armazenamento e não podem ser citados isolados.

### 1c. Material novo (`1. Source\08. Impression materials\`)

| # | Fonte | Nível | Alimenta | Status |
|---|---|---|---|---|
| — | *(vazio — aguardando `Texts\` e `Assets\`)* | — | — | — |

### 1d. Lacunas declaradas (nenhum chat futuro deve extrapolar)

Resolvido em 2026-08-13: a maior parte de [D-08.3] está ancorada (ver 1b). **Continua em aberto:**

- **Working/setting time por família** — ainda sem fonte citável. O ranking do slide antigo (polissulfeto
  mais longo) não foi confirmado em fonte primária.
- **Dependência da tear strength com a velocidade de remoção** — é a base física da instrução "remova com
  um movimento rápido e único"; recuperada só via revisão secundária (Levartovsky 2011). Falta a fonte
  experimental.
- **Limiar de 10 min de imersão do poliéter em desinfetante** — apresentar como recomendação de fabricante
  até achar norma ou literatura. A evidência recuperada sobre desinfecção é contraditória (Gothwal 2019
  não achou efeito na recuperação elástica; Kavita 2021 achou alteração dimensional em alguns grupos).
- **Edição publicada da ISO 4823** (2021 ou 2025) e citação completa de McLean & von Fraunhofer 1971 —
  confirmar na biblioteca da NUS antes de imprimir no slide. `[VERIFY]`
- Deslocamento tecidual (fio retrator, pastas) aparece só de passagem nas aulas antigas — precisará de
  fonte externa se virar seção.

---

## 2. Estrutura do deck

### Parte 0 · Glossário — **CONSTRUÍDA (2026-08-13) · 44 slides · SEM widgets**

`index.html` contém **44 slides** cobrindo apenas a Parte 0. Motor da Aula 03/07 (`.deck > .track >
.slide`, CSS inline; o JS é só o motor de navegação). As Partes 1 a 4 serão acrescentadas ao mesmo arquivo.

> **[D-21] UMA IDEIA POR SLIDE.** O deck foi reescrito de 21 para 44 slides por decisão do Vinicius:
> *"você não precisa comprimir o máximo de informação em um único slide"*. Cada propriedade agora ocupa
> **um slide de definição + um ou mais slides de exemplo**; os dois lados de um trade-off (*too flexible*
> × *too stiff*) e cada passo de um cálculo são slides separados.
>
> **Os dois widgets foram removidos.** O W1 (calculadora de deformação permanente) foi cortado por ele
> — *"animação desnecessária"* — e virou dois slides: um com o cálculo em `.steps` e outro com a tabela
> comparando 96,5% e 99,5%. O W2 (trueness × precision) saiu por coerência com o mesmo princípio e virou
> três slides de definição + um de exemplo, mais a figura dos quatro alvos. **O deck não tem mais canvas
> nem sliders.**

| Slides | Bloco |
|---|---|
| 1 | Título |
| 2–3 | Fluxo do procedimento em 6 etapas · vocabulário dos objetos (tray, impression, cast, die, prepared tooth, margin, sulcus) [D-22] |
| 4–5 | Por que as propriedades vêm antes dos materiais · mapa das 9 propriedades |
| 6 | Divisor Grupo 1 |
| 7–10 | **Consistency**: definição · exemplo do cotidiano · os quatro tipos · por que duas consistências |
| 11–13 | **Working & setting time**: definição de cada · exemplo do concreto |
| 14–15 | **Wettability**: definição · a margem ausente |
| 16 | Divisor Grupo 2 |
| 17–20 | **Detail reproduction**: definição · a moeda na massinha · a escala de 20 µm · não é acurácia |
| 21 | Divisor Grupo 3 |
| 22–27 | **Elastic recovery / permanent deformation**: definição de cada · elástico × chiclete · o undercut · o cálculo em 4 passos · a tabela dos dois materiais |
| 28–30 | **Strain in compression**: definição (com o gancho do módulo) · too flexible · too stiff |
| 31–34 | **Tear strength**: definição · o saco plástico · onde rasga · por que remover rápido |
| 35 | Divisor Grupo 4 |
| 36–39 | **Dimensional change / stability**: definição de cada · os três mecanismos · a esponja |
| 40–43 | **Accuracy**: trueness · precision · accuracy · o erro que pode ser corrigido |
| 44 | Tabela-resumo das 9 propriedades |

**Validação executada:** tags balanceadas por elemento · `node --check` no JS inline · execução headless
com jsdom (navegação completa nos dois sentidos, overview com 44 itens e 4 divisores, zero
`console.error`, zero rótulos vazios) · smoke-test visual com WeasyPrint · varredura de registro [D-16]
(zero frases proibidas; k-tags dentro do vocabulário fixo).

### Partes 1 a 4

*(a definir na proposta de ensino — comando `nova aula 08`)*

Esboço de trabalho para 3 h, no eixo structure → property → performance:

| Parte | Conteúdo |
|---|---|
| **0 · Glossário** [D-08.4] | O que é um registro dimensional; as sete propriedades, cada uma com definição normativa, requisito e exemplo trabalhado. Termina com o par accuracy = trueness + precision, que é emprestado ao resto do curso. |
| 1 · Classificação | A árvore e por que ela é construída assim (o ramo não-elástico existe mas não é desenvolvido [D-08.1]; hidrocoloide × elastômero). |
| 2 · Reação de presa | Material a material, com o subproduto como o eixo: alginato, polissulfeto, silicone de condensação, silicone de adição, poliéter. |
| 3 · Propriedades comparadas | A tabela lida com o vocabulário da Parte 0, cada número com fonte visível [D-08.3]. Inclui as três correções ao material histórico. |
| 4 · Técnicas | Moldeira, adesivo, putty–wash, deslocamento tecidual, remoção, janela de vazamento, desinfecção. |
| Recap | Mapa dos outcomes. |

A Parte 0 não é uma lista de definições para decorar: cada entrada é montada como
*definição normativa → o que a propriedade governa fisicamente → exemplo com número → consequência clínica*.
O exemplo aritmético da recuperação elástica (96,5 % × 99,5 % num retentivo, contra os 120 µm de
discrepância marginal aceitável) é o que faz o aluno parar de achar que "3 % é pouco" — e é também o
momento em que a espinha da aula aparece pela primeira vez.

---

## 3b. Revisão por persona de aluno — 2ª rodada (2026-08-14, com as figuras)

Deck de 49 slides com 12 figuras ligadas, submetido de novo à persona de aluno de Ano II sem
experiência clínica, desta vez com instrução de **abrir cada PNG**. Ela mediu os pixels das figuras.

**Aplicado no HTML:**

| Achado | Correção |
|---|---|
| Referência cruzada errada ("two slides from now" apontava para o slide errado) | corrigida para três |
| O slide de strain prometia uma faixa "com mínimo e máximo" e o **máximo nunca aparecia**; os mínimos só existiam dentro de uma figura | tabela com 0,8–20,0% e 2,0–20,0% no próprio slide |
| `0.6 kPa` × `0.1 MPa` sem dizer que 1 MPa = 1000 kPa; e o fator declarado (×160) não batia com a conta (166,7) | valores em MPa, a conversão explícita e ×170 |
| No cálculo dos 56 µm, "20% de quê" e "0,7% de quê" nunca eram declarados — o pulo do material para o dente era o único passo não justificado | passo extra que nomeia o referente de cada percentagem |
| `luting cement`, `finish line` usados sem definir (e *finish line* como sinônimo não declarado de *margin*) | definidos inline |
| Nomes de materiais (addition silicone, polyether, alginate) usados numa Parte 0 que existe justamente para preceder os materiais | caixa de nota antes do slide que depende deles |
| Duas taxonomias concorrentes para os mesmos quatro grupos em slides consecutivos (figura × roadmap) | roadmap alinhado ao vocabulário da figura |
| Tabela-resumo: coluna "Defined in" com um item que não é norma; cláusula 5.4 ausente | ambas corrigidas |

**Pendente — erros DENTRO das figuras, exigem regerar:**

| Figura | Erro medido |
|---|---|
| `why-twenty-micrometres-matters.png` | **A régua não é linear**, apesar de dizer "LINEAR SCALE, NOT EXAGGERATED": 0–20 µm ocupa ~395 px e 20–40 µm ocupa ~116 px. O marcador de **25 µm** está pousado sobre a marca de **40**, e o de **70 µm** (fio de cabelo) cai em ~87. A figura contradiz a tese do próprio slide, que pede ao aluno para conferir a escala com os olhos. |
| `tear-strength-trouser-test.png` | O rótulo **`t` tem dois significados na mesma figura**: à esquerda é a abertura entre as pernas do corpo de prova, à direita é definido como THICKNESS. Como o slide existe para justificar N/mm em vez de MPa, a ambiguidade atinge o ponto central. |
| `strain-too-stiff-separation.png` | A tarja inferior antecipa a conclusão do slide seguinte, anulando a estrutura "o que se esperava / o que se mediu". |
| `dimensional-change-three-mechanisms.png` | No painel do meio, setas para **fora** com legenda "→ shrinkage"; no painel 3, a direção das setas não corresponde à direção do efeito. |
| `strain-too-flexible-gypsum.png` | Na comparação inferior, os dois dentes estão lado a lado e do mesmo tamanho com uma seta "larger" entre eles — lê-se como distância, não como aumento. Sobreposição concêntrica resolveria. |
| `working-setting-time-two-clocks.png` | Eixo Y rotulado **"viscosity"**, palavra que não existe em nenhum slide (a aula diz *consistency*). E a figura revela o setting time um slide antes da definição. |
| `wettability-contact-angle-voids.png` | Os painéis inferiores usam quantidades diferentes de material nos dois lados, introduzindo uma variável que não é a do slide. |
| `detail-vs-accuracy-sharp-but-shifted.png` | Painel esquerdo sem rótulos (dente × material) e contração exagerada sem a nota "exaggerated for visibility" que a FIG 08.8 traz. |

**As duas figuras que faltavam foram construídas em SVG (2026-08-14), não geradas por IA.**
`consistency-four-types-disc-test.png` e `trueness-precision-four-targets.png` são geométricas, e
desenhá-las por código resolve de vez o problema que a aluna encontrou nas outras: **a escala é
calculada, não estimada**.

- Na do ensaio do disco, as quatro porções de material têm **área de corte idêntica** (volume constante,
  90×60 = 5400 em todas), e o diâmetro de cada disco é **exatamente** a largura da porção achatada
  correspondente. A figura é geometricamente verdadeira, não desenhada à mão.
- Na dos quatro alvos, os dez pontos de cada alvo são constantes fixas e a cruz da média é a média real
  dos dez — conferida por código (0,005 e 0,031 de distância do centro nos dois alvos "TRUE"; 0,558 e
  0,473 nos dois deslocados).
- **Erro corrigido durante a construção:** na primeira versão os rótulos dos eixos estavam trocados.
  Na grade, trueness varia entre as **colunas** e precision entre as **linhas** — a versão inicial dizia
  o contrário.

Os `.svg` de origem estão em `1. Source\08. Impression materials\Assets\` junto com os PNG, para poderem
ser reeditados.

### Três figuras de mecanismo, construídas em SVG (2026-08-14)

Pedido do Vinicius: mostrar **os passos** de elastic recovery / permanent deformation e de strain in
compression — antes, durante a carga, por que volta, e como a percentagem é medida. Construídas por
código, com a geometria calculada.

| Figura | Arquivo | Slide | O que resolve |
|---|---|---|---|
| **08.15** · como a percentagem é medida | `elastic-recovery-step-by-step.png` | 27 | Quatro estados do corpo de prova com **as duas chaves que nomeiam o denominador** — era exatamente onde a revisão do aluno dizia ter perdido o fio ("20% de quê? 0,7% de quê?"). O resíduo é desenhado exagerado e **declarado como exagerado**. |
| **08.16** · por que volta | `why-the-material-springs-back.png` | 28 | O mecanismo molecular: cadeias enroladas → esticadas sob carga, presas pelas ligações cruzadas → recolhem. As cadeias que **escorregaram** voltam em carmim e não retornam. Amarra viscoelasticidade, recuperação elástica e deformação permanente numa imagem só. |
| **08.17** · o ensaio de strain | `strain-in-compression-test.png` | 34 | O ensaio com h₀ e h₁, a fórmula com **denominador h₀** (diferente do da 08.15), e a faixa 2,0–20,0% com as duas zonas de falha. Separa as duas propriedades que a aluna disse que confundiria. |

**Slide removido:** *"It is not the weight of the gypsum"*. A correção científica continua no subtítulo do
slide de *too flexible* ("caused by the gypsum growing — not by the gypsum weighing") e o argumento
completo, com os cálculos, permanece na seção 3.0 do dossiê de fontes.

> **Limitação conhecida do smoke-test:** o WeasyPrint **não implementa `object-fit`**, então em figuras
> cuja proporção difere muito da do espaço disponível ele escala só pela largura e corta o excesso
> vertical. Isso apareceu na 08.17. A construção CSS está correta para o Chromium; confirmar no navegador.

### Correção do corte das imagens (2026-08-14)

O Vinicius mandou um screenshot da FIG 08.10 com os dois títulos de painel cortados no topo — ou seja,
**o corte era real e não artefato do WeasyPrint**. Causa: a regra base `.figbox img{width:100%;
height:auto;max-height:76vh}` força a largura, deixa a altura seguir a proporção da imagem, e 76vh é um
teto chutado que não sabe quanta altura sobrou na coluna depois do título, do subtítulo e de eventual
caixa irmã; o `overflow:hidden` da figbox então corta em silêncio. Corrigido com a construção do [D-20]:
a imagem pode usar até 100% da largura **e** até 100% da altura que o flex der à figbox, com
`object-fit:contain` preservando a proporção. Nenhum número fixo. Verificado nos 14 slides com figura.

**Não aplicado, para o Vinicius decidir:** ela sugere cortar o slide 5 (o roadmap duplica a figura do
slide 4) e fundir os slides 22 e 23; e observa que o padrão de cartões `.vs` aparece em 11 slides e as
analogias do cotidiano em 6, o que fica previsível. Também pede uma figura para o slide de
viscoelasticidade, hoje o único slide de mecanismo sem figura.

---

## 3. Mapa de figuras (Drive → repo)

**Prompts prontos** em `_ops/prompts/08-impression-materials-figuras.md` (bloco de estilo Clinical Clean +
8 prompts + o critério animação × figura). Nenhuma figura gerada ainda — todos os slides mostram o
placeholder `.ph` com o nome de arquivo esperado.

| Arquivo esperado (`assets/`) | Slide | Origem | Status |
|---|---|---|---|
| `impression-timeline-four-moments.png` | 3 | ChatGPT | prompt pronto |
| `consistency-four-types-disc-test.png` | 6 | ChatGPT | prompt pronto |
| `working-setting-time-two-clocks.png` | 7 | ChatGPT | prompt pronto |
| `wettability-contact-angle-voids.png` | 8 | ChatGPT | prompt pronto |
| `detail-reproduction-test-block-scale.png` | 10 | ChatGPT | prompt pronto — **conferir proporção das barras** |
| `detail-vs-accuracy-sharp-but-shifted.png` | 11 | ChatGPT | prompt pronto |
| `undercut-deformation-on-removal.png` | 13 | ChatGPT | prompt pronto |
| `two-consistencies-one-impression.png` | 10 | ChatGPT | **novo** com o desdobramento [D-21] |
| `strain-too-flexible-gypsum.png` | 29 | ChatGPT | **substitui** a figura dupla — uma figura por slide |
| `strain-too-stiff-removal.png` | 30 | ChatGPT | **substitui** a figura dupla |
| `tear-strength-trouser-test.png` | 31 | ChatGPT | **separada** do slide de onde rasga |
| `tear-strength-thin-regions.png` | 33 | ChatGPT | prompt pronto |
| `dimensional-change-three-mechanisms.png` | 38 | ChatGPT | prompt pronto |
| `trueness-precision-four-targets.png` | 42 | ChatGPT | agora é a única representação dos quatro alvos (o widget saiu) |

> Os números de slide acima são da versão de 44 slides. Quatro prompts precisam ser
> **atualizados/criados** no arquivo de prompts por causa do desdobramento: `two-consistencies-one-impression`,
> `strain-too-flexible-gypsum`, `strain-too-stiff-removal` e `tear-strength-trouser-test` (que se separou
> de `tear-strength-thin-regions`).

Ao receber os PNG em `1. Source\08. Impression materials\Assets\`, **renomear nos dois lugares** [D-19].

---

## 4. Widgets interativos

**Nenhum.** Decisão do Vinicius em 2026-08-13: a calculadora de deformação permanente era *"animação
desnecessária"*, e o widget de trueness × precision saiu junto por coerência. O critério que fica
registrado na skill [D-10]: **animação só quando o aluno precisa ver uma grandeza mudar em resposta a
outra para entender um mecanismo**. Se o ponto é uma conta ou uma comparação de estados, slides ensinam
melhor — ficam na tela enquanto ele fala e sobrevivem no handout.

Para as Partes 1 a 4, o único candidato que passa nesse teste é a **deriva dimensional no tempo por
família** (imediato, 1 h, 4 h, 24 h — Williams 1984), e mesmo esse deve ser comparado com a alternativa
de quatro slides antes de ser construído.

---

## 5. Timing

Parte 0 (glossário): **35 a 45 min** para 21 slides, contando os dois widgets. O ponto de fadiga
identificado na revisão é o Grupo 3 (slides 12 a 16, cinco telas seguidas sobre deformação) — vale uma
pausa deliberada ou uma pergunta à turma logo depois do W1.

*(Partes 1 a 4 a definir — 3 h é a maior alocação da Fase 2 junto com cimentos, compósitos e adesivos)*

---

## 7. Revisão por persona de aluno (2026-08-13)

A Parte 0 foi submetida a uma revisão feita por um agente com a persona **"aluna de Odontologia do 2º ano
da NUS, sem nenhuma experiência clínica"**, com instrução de ser implacável sobre vocabulário não definido.
O relatório apontou ~30 termos clínicos usados sem definição, uma contradição numérica real e cinco
problemas de sequência. **Todas as cinco prioridades foram aplicadas:**

| # | Achado | O que foi feito |
|---|---|---|
| 1 | ~30 termos de procedimento usados como se fossem óbvios (tray, gypsum, cast, die, margin, sulcus, preparation, crown) — todos os termos de física estavam definidos, quase nenhum de clínica | **Novo slide 2**, com o fluxo em 6 etapas. Resolve ~15 termos de uma vez |
| 2 | **Contradição real:** permanent deformation definida como % da deformação no slide 13 e exibida como % da dimensão no widget do 14 | O widget mostra **os dois denominadores**, rotulados, e a nota explica a diferença |
| 3 | O widget de trueness/precision vinha **antes** das definições; e `accuracy = trueness + precision` numa caixa de fórmula sugeria uma soma aritmética | Slides invertidos; a caixa de fórmula saiu; o texto diz "tem dois componentes, não é uma soma" |
| 4 | Contagem inconsistente: título dizia nove, tabela tinha dez linhas, 14 caixas de definição, `compatibility with gypsum` prometida num divisor e nunca definida, `setting time` sumia do resumo | Padronizado em **9 propriedades** (pares na mesma linha), divisor corrigido, setting time no resumo |
| 5 | Faltavam ganchos ao conhecimento prévio | Módulo elástico (Aula 02) no slide de strain; subproduto de condensação (Aula 03) no corpo do slide de dimensional change; viscoelasticidade nomeada como raiz comum |

**Correções menores também aplicadas:** ordem de grandeza dos tempos (minutos, 2 a 10); referência de
escala para o widget (120 µm, com a ressalva de não-consenso); barra residual ampliada ×10; explicação de
por que tear strength é N/mm e não MPa; mapeamento tipo 0–3 ↔ nome numa tabela; vocabulário
gypsum/cast/die padronizado; analogia da molhabilidade reescrita (era "a superfície decide", que treina a
alavanca oposta à que o dentista controla); definição de undercut corrigida para bater com a figura;
analogia da esponja com a ressalva de escala.

**Não aplicado (decisão do Vinicius):** incluir uma fotografia real de material antes do slide 10. A
revisão pediu; o deck é todo esquemático por decisão de design. Vale considerar uma foto no slide 2.

Relatório completo não versionado — o resumo acima é o registro.

---

## 6. Pendências

| # | Pendência |
|---|---|
| Q-08.1 | ~~Divergência de outcome (digital scanning × overview of techniques)~~ — **resolvida por [D-08.2]**. |
| Q-08.2 | ~~Escopo dos não-elásticos~~ — **resolvida por [D-08.1]**. |
| Q-08.3 | ~~Buscar as fontes primárias para cada número~~ — **executado em 2026-08-13**, ver 1b e o dossiê em `_sources/`. Resta o resíduo listado em 1d (working/setting time, velocidade × tear, limiar dos 10 min, edição da ISO). |
| Q-08.4 | Ágar: só menção como hidrocoloide reversível/material duplicador, ou tratamento próprio? (com o digital fora, sobra tempo) |
| Q-08.7 | **Correção de 2026-08-13, motivada por dúvida do Vinicius sobre a figura de *too flexible*.** Dois erros meus, ambos corrigidos no deck, nos prompts e no dossiê (seção 3.0): (a) o mecanismo não é o **peso** do gesso — a coluna exerce ~0,6 kPa contra os ~0,1 MPa do ensaio da própria norma — mas a **expansão de presa** do gesso e o quanto a moldagem e a moldeira a restringem (ISO 6873 Tab. 1; Ishida 1989; Teraoka 2000); (b) a afirmação de que material rígido é mais difícil de remover da boca foi **medida e refutada** (Walker 2013 — nenhuma correlação; o poliéter exigiu mais força apesar de o PVS ser mais rígido). Pendente: obter o texto completo de Teraoka 2000 pela NUS, que traz a **pressão medida** do gesso contra a moldagem. |
| Q-08.8 | As figuras 08.1 a 08.5 foram removidas do arquivo de prompts a pedido do Vinicius — confirmar se já foram geradas ou se aqueles slides ficam sem figura, para fechar o mapa de figuras. |
| Q-08.5 | Âncora: candidato A (adição × condensação no mesmo preparo) ou B (poliéter na desinfecção)? Ele escolhe no brief. |
| Q-08.6 | Handout + PDF da Aula 08 — decidir se entra junto com o deck. |


---

## 7. Parte 2 — os quatro elastômeros (2026-08-19)

**29 slides novos (52–80)**, na ordem escolhida pelo Vinicius: **polissulfeto → poliéter → condensação →
adição**. Deck agora com **80 slides e 28 figuras**, zero placeholders.

### 7a. O eixo da Parte 2

Tudo pende de **uma pergunta**: *a reação de presa deixa alguma coisa para trás?* A matriz 2×2 do slide 53
(subproduto sim/não × absorve água sim/não) é apresentada como **previsão**, não como lista — sabendo só a
resposta da coluna do meio, o aluno prevê o prazo de vazamento e se o modelo pode ser vazado duas vezes.

### 7b. Estrutura por material

Cada material tem: **identidade** (foto real) → **química** (com o subproduto no centro) → **consequência**
→ **slides de referência** (valores + aplicações/prós/contras). Os slides de referência existem para o
aluno estudar; ele os pula em aula. **Sem marcação visual** — decisão dele.

### 7c. Decisões desta sessão

| # | Decisão |
|---|---|
| D-08.5 | **Ordem dos materiais:** polissulfeto → poliéter → condensação → adição (histórica e química). |
| D-08.6 | **Ordenações nunca com `<` ou `>` cru.** Cada linha traz o rótulo do sentido: *more is BETTER · more is WORSE · too soft distorts, too stiff fractures the die*. Pedido explícito do Vinicius. |
| D-08.7 | **Hidrogênio e paládio ficam de fora.** Verificado: a liberação de H₂ pelos silicones de adição é problema dos anos 1980, resolvido pelos fabricantes com sequestrantes de paládio; os produtos atuais não exigem espera (Craig 1988). |
| D-08.8 | **Metalização com cobre/prata cortada.** |
| D-08.9 | **Tear strength entra como ranking, não como número** — os valores publicados se sobrepõem demais entre produtos: silicones < poliéter < polissulfeto (Craig 1988). |

### 7d. Revisão pela persona de aluno — Parte 2

20 achados no grupo (a). **Aplicados 18.** Os que eram erro factual meu:

| # | Achado | Correção |
|---|---|---|
| a1 | **Contradição numérica real** entre a linha de ranking (`adição ≈ poliéter`) e a tabela (adição ~0,05% × poliéter 0,2–0,3%) | O `≈` estava no par errado: agora `adição → poliéter ≈ polissulfeto → condensação` |
| a3 | O catalisador do silicone de condensação nunca era nomeado, e "excesso deixa grupos terminais não reagidos" confundia catalisador com reticulador | Nomeados **silicato de tetraetila** (reticulador) e **composto de estanho**, com a nota de que nenhum é catalisador no sentido estrito — ambos são consumidos, ao contrário da platina |
| a4 | A linha do ângulo de contato usava a cor verde de "mais é melhor", mas seu melhor valor está à **esquerda** — a cor instruía a leitura invertida | Cor trocada e slide próprio explicando que naquela linha número e qualidade correm em sentidos opostos |
| a5 | Tear strength estava no ranking e **ausente da tabela grande**; três dos quatro cards diziam o mesmo "Low tear strength", apagando a distinção | Linha nova na tabela; cada card agora diz o que é específico daquele material |
| a7 | Recuperação elástica e deformação permanente em linhas separadas sem dizer que são a mesma medida | Declarado na tabela: as duas somam 100% |
| a8 | Anel de aziridina chamado de **imina** | Corrigido, com a nota de que a literatura odontológica usa o termo impropriamente |
| a10 | "A contração cria o espaço para o cimento" | Corrigido: erra numa direção tolerante, mas o espaço é feito de propósito com die spacer |
| a13 | Ângulo de contato do silicone de condensação **faltava** na tabela | Preenchido (~98°) |
| a14 | Cores na linha de custo emitiam um veredito que contradizia o slide-resumo | Cores removidas da linha |
| a15 | "can wait" para o poliéter sem a condição | Agora "can wait — **if kept dry**" |
| a16 | *polar*, *surfactant* e *ppm/°C* carregavam argumentos inteiros e nunca eram definidos | Definidos na primeira aparição |
| a18 | 7 fotos renomeadas e nunca ligadas, duas delas evidência direta de afirmações feitas sem prova | **Dois slides novos** (mistura automática · duas viscosidades) e mais duas fotos ligadas; restam 4 reservadas para a Parte 4 |

**Não aplicado, por decisão anterior do Vinicius:** o achado **a2** pedia devolver o conteúdo de
hidrogênio/paládio. Contraria [D-08.7] e foi mantido fora.

**Também aplicado por [D-21]:** três slides densos desdobrados — a tabela de rankings separou-se da sua
leitura, o slide de química do poliéter perdeu a caixa de polaridade (que pertence ao slide seguinte), e o
slide de referência do polissulfeto virou dois (valores · usos e trade-offs).

### 7e. Validação

`tags balanceadas · 80 slides · 28 imagens · 0 placeholders · todos os src resolvem · nenhuma ordenação com
< ou > cru · nenhuma frase repetida entre cards · node --check OK · jsdom 80 slides e 0 erros de console ·
WeasyPrint 80 páginas para 80 slides (sem estouro)`

### 7f. Fotos ainda não ligadas

`photo-addition-clinical-sequence.png` · `photo-addition-wash-into-tray.png` ·
`photo-impression-defects.png` · `photo-polyether-tray-adhesive-bottle.png` — **reservadas para a Parte 4
(técnicas)**, onde há contexto para elas. `photo-impression-defects.png` em particular pede um slide de
defeitos que ainda não existe.


### 7g. Correções pedidas pelo Vinicius após ver o deck publicado (2026-08-19)

| Pedido | Feito |
|---|---|
| Remover o slide *Two things to notice in that table* | Removido — deck volta a 79 slides |
| *One ranking in the textbooks has aged* — "não quero poesia" | → **Polyether rigidity: textbook ranking versus measurements** |
| Mesmo motivo, por varredura minha | *Reading the rankings without getting them backwards* → **Property rankings across the four materials** |

**[D-16] reforçado:** títulos de slide são descritivos e nomeiam o conteúdo. Nada de construção
retórica, mesmo quando ela "funciona" pedagogicamente.

### 7h. As sete figuras que faltam — os prompts estão escritos

O deck descreve as quatro reações químicas **em texto e sem nenhuma figura**. Prompts detalhados em
`_ops/prompts/08-impression-materials-reacoes-quimicas.md`, no nível de detalhe do capítulo do Van
Noort (figuras 2.7.6 a 2.7.13), com lista de conferência por figura:

| Fig | Slide | Arquivo esperado |
|---|---|---|
| 08.10 | 56 · polissulfeto | `reaction-polysulphide.png` |
| 08.11 | 60 · poliéter | `reaction-polyether.png` |
| 08.12 | 65 · condensação | `reaction-condensation-silicone.png` |
| 08.13 | 69 · adição | `reaction-addition-silicone.png` |
| 08.14 | 54 · os quatro backbones | `four-backbones-comparison.png` |
| 08.15 | 77 · moldeira e direção da contração | `tray-controls-direction.png` |
| 08.16 | 79 · espaço de decisão sem resposta | `choice-space-no-answer.png` |

**Decisão do Vinicius:** prompts para ChatGPT, e não SVG gerado por mim. Registrei a ressalva de que
estrutura química é o pior caso para geração de imagem por IA; cada prompt traz portanto a lista de
conferência, e a oferta de eu refazer em SVG a figura que não sair.

| # | Questão nova |
|---|---|
| Q-08.11 | O texto do Van Noort descreve a pasta-base do silicone de adição como contendo "polivinil siloxano, **silanol** e uma carga". A menção a silanol é imprecisa: na hidrossililação o parceiro do vinil é o **hidreto de silício (Si–H)**; silanol é o grupo do silicone de *condensação*. O deck usa Si–H, que é a química correta. Confirmar contra o original em inglês antes do handout. |
