Pesquisa concluída. Segue o relatório.

---

# RELATÓRIO — Recursos explicativos para aula de 1h sobre mecanismos de 3D printing (odontologia, 2º ano)

**Método e honestidade de verificação.** Marquei ✅ o que li diretamente, ⚠️ o que vem de snippet de busca ou de verificação feita por um agente auxiliar sem que eu reabrisse a página, e ❌ o que não consegui verificar. Não inventei URLs, números nem citações. Onde a literatura discorda, digo que discorda.

---

## 1. As sete categorias de processo — ISO/ASTM 52900

### 1.1 A fonte primária, e ela é gratuita ✅

**ISO/ASTM 52900:2021 — *Additive manufacturing — General principles — Fundamentals and vocabulary***
`https://cdn.standards.iteh.ai/samples/74514/57d795b6267a427899d7b351598bece2/ISO-ASTM-52900-2021.pdf`

Este é o achado mais importante da frente 1. É o **preview oficial do iTeh** e — verifiquei linha a linha — ele contém a **Cláusula 3 completa até 3.4.8**, ou seja, **todas as sete definições de process category em texto verbatim da norma**, mais os termos gerais (`additive manufacturing`, `layer`, `support`, `STL`, `single-step`/`multi-step process`). Você não precisa comprar a norma para ter as definições corretas.

Autoridade: máxima — é a própria ISO/ASTM, preparada pelo ISO/TC 261 em cooperação com o ASTM Committee F42. Paywall: a norma completa é paga; **este preview é gratuito**. Licença: `© ISO/ASTM International 2021`, "COPYRIGHT PROTECTED DOCUMENT" — você pode **ler e citar**, **não pode redistribuir o PDF nem republicar o texto integral**.

**As sete categorias, verbatim (ISO/ASTM 52900:2021, 3.2.1–3.2.7):**

| Categoria | Sigla | Definição verbatim | Peso em odontologia |
|---|---|---|---|
| **binder jetting** | BJT | *"process in which a liquid bonding agent is selectively deposited to join powder materials"* | Emergente (zircônia, modelos) |
| **directed energy deposition** | DED | *"process in which focused thermal energy is used to fuse materials by melting as they are being deposited"* | Praticamente nula |
| **material extrusion** | MEX | *"process in which material is selectively dispensed through a nozzle or orifice"* | Marginal (modelos de estudo, PEEK experimental) |
| **material jetting** | MJT | *"process in which droplets of feedstock material are selectively deposited"* | Modelos multimaterial/multicor, guias |
| **powder bed fusion** | PBF | *"process in which thermal energy selectively fuses regions of a powder bed"* | **Sim** — estruturas de RPD e copings em CoCr/Ti (SLM/DMLS) |
| **sheet lamination** | SHL | *"process in which sheets of material are bonded to form a part"* | Nula |
| **vat photopolymerization** | VPP | *"process in which liquid photopolymer in a vat is selectively cured by light-activated polymerization"* | **Dominante** — modelos, guias cirúrgicas, moldeiras, splints, provisórios, bases de prótese |

Duas notas de precisão que valem ouro na aula:

- A Nota 1 de cada categoria diz que a identificação de subprocessos deve seguir o **Annex A**. É por isso que "SLA", "DLP", "LCD", "mSLA" e "CLIP" **não são categorias** — são todas VPP, distinguidas pela fonte de luz. A própria norma prevê os sufixos `-UVL` (laser UV), `-UVM` (máscara) e `-LED`. ⚠️ (os sufixos aparecem em snippet de busca do Annex A; o preview que li termina antes do Annex A — confirme antes de projetar).
- O termo `3D printing` (3.3.1) é definido **separadamente** de `additive manufacturing` (3.1.2), com a Nota 1: *"This term is often used in a non-technical context synonymously with additive manufacturing and, in these cases, typically associated with machines used for non-industrial purposes including personal use."* Ou seja: a norma diz, com todas as letras, que "3D printing" é o termo coloquial. Ótimo slide de abertura.

### 1.2 Reescritas confiáveis, para quando você quiser linguagem de aula

- **Loughborough AMRG — "The 7 categories of Additive Manufacturing"** — `https://www.lboro.ac.uk/research/amrg/about/the7categoriesofadditivemanufacturing/` (⚠️ verificado por agente auxiliar). Uma página por categoria. Autoridade muito alta (grupo de AM mais citado do Reino Unido). **Sem licença aberta declarada** — reescreva, não copie.
- **Loughborough AMRG — "What is AM?"** — `https://www.lboro.ac.uk/research/amrg/about/whatisam/` ✅ (li). Descreve o workflow em cinco etapas (CAD → STL → setup/nesting → build → post-processing) e dá espessuras de camada típicas: **FDM ~0,254 mm; SLA 0,05–0,1 mm**, citando Chua et al. Útil justamente porque dá números concretos com fonte.
- **Wohlers Associates (hoje parte da ASTM International) — "The Seven AM Processes"** — `https://wohlersassociates.com/terminology-and-definitions/the-seven-am-processes/` (⚠️ verificado por agente auxiliar). Apresenta as sete em ordem de popularidade e traz a frase útil para VPP: *"The process requires a secondary curing and washing step for post-processing. VPP requires sacrificial support material for overhanging features."* `© ASTM International` — não reutilize os esquemas.
- **NIST — Additive Manufacturing Technologies** — `https://www.nist.gov/additive-manufacturing/research-areas/technologies` (⚠️). Fonte governamental neutra, boa para o aluno cético. **Atenção de licença**: várias imagens são creditadas a **Adobe Stock** e portanto não são livres; as creditadas a "NIST"/"Lane/NIST" são utilizáveis. Confira crédito por imagem.

> **Como usar na aula.** Dez minutos: projete as sete definições verbatim da ISO/ASTM (é uma tabela só), diga que **cinco delas você nunca vai encontrar num laboratório de prótese**, e dedique o resto à VPP, com PBF em segundo plano e BJT/MJT como "olho no retrovisor". O gancho de autoridade é forte: você está lendo a norma, não um blog.

---

## 2. Melhores explainers por família de processo

### 2.1 Vat photopolymerization (SLA / DLP / LCD-mSLA)

**O melhor recurso, e com licença aberta:** Caussin et al., *"Vat Photopolymerization 3D Printing in Dentistry: A Comprehensive Review of Actual Popular Technologies"*, **Materials** (MDPI) 2024 — `https://www.mdpi.com/1996-1944/17/4/950` · DOI `10.3390/ma17040950` · PMC `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10890271/` (⚠️ URL resolve; conteúdo não lido integralmente). Peer-reviewed, autores da Université Paris Cité, cobre SLA/DLP/LCD com física do processo **já no contexto dental** e inclui pós-processamento e regulação. **Licença CC BY 4.0** — as figuras são reutilizáveis no seu deck com atribuição. É o único item desta seção com licença que permite copiar diagrama.

**Formlabs — "SLA vs. DLP vs. mSLA vs. LCD"** — `https://formlabs.com/blog/sla-dlp-msla-lcd-resin-3d-printer-comparison/` ⚠️ **VENDOR** (Formlabs fabrica SLA/SLS). Tecnicamente correto e muito bem escrito. A frase que vale adaptar: laser SLA desenha a camada com dois espelhos galvanométricos e cura **ponto a ponto**, enquanto DLP e mSLA curam **a secção inteira numa única exposição** — daí tempos de camada de 1–10 s **independentes da complexidade** em mSLA. Esta é a ideia física decisiva e a única que os alunos precisam reter: *SLA escala com a área desenhada; DLP/LCD não escalam com nada, só com o número de camadas.* All rights reserved — linke, não copie.

**Formlabs — "Guide to Stereolithography (SLA)"** — `https://formlabs.com/blog/ultimate-guide-to-stereolithography-sla-3d-printing/` ⚠️ VENDOR. O explainer de SLA mais completo da web aberta.

**CLIP / DLS (Carbon)** — `https://www.carbon3d.com/process/` e o press release original `https://www.carbon3d.com/news/press-releases/carbon3d-introduces-clip-breakthrough-technology-for-layerless-3d-printing` ⚠️ VENDOR. Artigo primário: **Tumbleston et al., "Continuous liquid interface production of 3D objects", *Science* 2015** — paywall na Science; há cópia hospedada em curso do MIT em `https://fab.cba.mit.edu/classes/865.18/additive/clip.pdf` ⚠️ (cópia de sala de aula, situação de copyright cinzenta — leia, não redistribua).
O mecanismo, que vale a aula inteira: uma janela **transparente à luz e permeável ao oxigênio** ("como uma lente de contato") mantém uma **dead zone** de resina não polimerizável de dezenas de micrômetros, porque o O₂ inibe a polimerização radicalar até uma dose limiar. A peça nunca toca a janela, não há passo de *peel*, e o crescimento é contínuo.

### 2.2 As outras famílias — base de conhecimento da Protolabs Network (ex-Hubs) ✅ (índice verificado)

`https://www.hubs.com/knowledge-base/` — ⚠️ **VENDOR**, mas é o melhor conjunto pedagógico gratuito da web para as famílias não-VPP, e a Protolabs vende *tanto* aditivo *quanto* CNC, o que reduz o viés direcional. Páginas confirmadas no índice:

| Processo | URL |
|---|---|
| Panorama dos tipos | `https://www.hubs.com/knowledge-base/types-of-3d-printing/` |
| SLA/DLP | `https://www.hubs.com/3d-printing/sla-dlp/` |
| SLS (powder bed fusion polimérico) | `https://www.hubs.com/knowledge-base/what-is-sls-3d-printing/` |
| Binder jetting | `https://www.hubs.com/knowledge-base/what-is-binder-jetting-3d-printing/` |
| Material jetting | `https://www.hubs.com/knowledge-base/introduction-material-jetting-3d-printing/` |
| FDM / material extrusion | `https://www.hubs.com/3d-printing/fdm/` |
| Design for 3D printing | `https://www.hubs.com/knowledge-base/design-for-3d-printing/` |

A frase da página de material jetting que vale adaptar (⚠️ snippet): *"a printhead dispenses droplets of a photosensitive material that solidifies under ultraviolet (UV) light"* — é a definição mais econômica possível de MJT e conecta direto com o que os alunos já sabem de fotopolimerização. `© Protolabs Europe B.V.` — all rights reserved.

**Formlabs — "FDM vs. SLA vs. SLS"** — `https://formlabs.com/blog/fdm-vs-sla-vs-sls-how-to-choose-the-right-3d-printing-technology/` ⚠️ VENDOR. Boa tabela comparativa de três linhas para um slide único.

> **Como usar.** Para cada família não-VPP, uma frase e uma imagem, e sempre a mesma pergunta estrutural: **"o que segura a camada anterior à seguinte?"** — em VPP, ligações covalentes formadas por luz; em PBF, fusão térmica; em BJT, um adesivo líquido que depois é queimado e o pó sinterizado; em MEX, interdifusão de cadeias no polímero fundido; em MJT, luz de novo. Essa pergunta única organiza sete processos e prepara a discussão de anisotropia.

---

## 3. Analogias e modelos mentais — o que funciona, o que é cliché, e o que está errado

Esta é a seção onde encontrei o material mais valioso, então vou ser específico. Separo o que **vem de fonte** do que é **síntese minha**.

### 3.1 O organizador-mestre da aula (síntese minha, construída sobre texto verbatim da norma) ✅

A ISO/ASTM 52900 define, em 3.1.9 e 3.1.10, uma distinção que quase ninguém ensina e que resolve metade da sua aula de uma vez:

> **3.1.10 single-step process** — *"process in which parts are fabricated in a single operation where the basic geometric shape and basic material properties of the intended product are achieved simultaneously"*
> **3.1.9 multi-step process** — *"process in which parts are fabricated in two or more operations where the first typically provides the basic geometric shape and the following consolidates the part to the fundamental properties of the intended material"*

Daí sai a frase-espinha de toda a aula: **a impressora faz a forma; o pós-processamento faz o material.** E essa única ideia explica, em cadeia:

- por que existe **green state** (a forma já está pronta, o material ainda não);
- por que existe **post-curing** (não é acabamento, é a segunda metade da fabricação);
- por que **zircônia fresada** é dimensionalmente melhor (o material já existia antes da forma; só a forma mudou);
- por que **zircônia impressa** é difícil (forma → sinterização → contração, dois processos disputando a mesma dimensão);
- por que existe **anisotropia** (a forma foi construída numa ordem temporal, e essa ordem fica gravada no material).

Isto é melhor do que qualquer analogia porque é literalmente o texto da norma. Recomendo abrir e fechar a aula com ele.

### 3.2 Construção camada a camada — abandone o pão de forma

**A analogia que eu recomendo para este público: a tomografia rodando ao contrário.** Os alunos já entendem que o CBCT pega um volume e o converte numa pilha de cortes axiais. O slicer faz **exatamente a mesma operação**, e a impressora a inverte: reconstrói o volume a partir dos cortes. Não é uma metáfora frouxa — é a mesma discretização de um contínuo ao longo de um eixo, e as duas sofrem o **mesmo artefato**: a resolução *através* do plano é pior que a resolução *no* plano. No CBCT, a espessura de corte limita o que você enxerga; na impressão, o **layer height** limita o que você consegue fabricar. Mesma matemática, e eles já têm a intuição pronta.

**A segunda melhor: curvas de nível de um mapa topográfico.** Cada camada é uma curva de nível de z constante. Onde o terreno é íngreme, as curvas ficam juntas; onde é raso, ficam afastadas. Isso não só ilustra o fatiamento como **já entrega o staircase effect** e a sua dependência do ângulo local — coisa que o pão de forma nunca vai dar.

**Avaliação honesta das analogias conhecidas (vale dizer aos alunos por que você não vai usá-las):**

- **Pão fatiado** — ruim, e ativamente enganosa em dois pontos. Primeiro, as fatias são **cortadas de um pão que já existia**, ou seja, é uma imagem *subtrativa* usada para ensinar um processo aditivo; reforça exatamente o modelo mental errado. Segundo, sugere fatias idênticas e paralelas, quando o essencial é que **cada camada tem uma secção transversal diferente** — é essa variação que constrói a geometria.
- **Parede de tijolos** — parcialmente correta (há interfaces; a parede é mais fraca ao longo das juntas), mas erra em três coisas. (a) Os tijolos são unidos por um **terceiro material**, a argamassa; camadas impressas são unidas **pelo próprio material**. (b) Tijolos são assentados em **fiada alternada** justamente para evitar planos contínuos de fraqueza — camadas impressas são perfeitamente alinhadas, então a analogia **subestima** a anisotropia. (c) A escala está errada por ordens de grandeza.
  **Correção que eu proporia:** troque por **compensado (plywood) *versus* pilha de lâminas soltas**. O compensado é forte porque as lâminas são cruzadas; a peça impressa **não é cruzada** — todas as camadas são paralelas. Dizer "uma impressão é um compensado que ninguém se deu ao trabalho de cruzar" transmite o problema e a solução ao mesmo tempo (e é literalmente por isso que se discute orientação e toolpath).

**Staircase effect, quantitativamente e sem fórmula assustadora:** a largura do degrau é `layer height / tan(θ)`, com θ medido a partir da horizontal. A consequência é contraintuitiva e por isso memorável: **quanto mais próxima da horizontal a superfície, PIOR o degrau**; uma parede vertical não tem degrau nenhum. Em odontologia isso é imediato — a **superfície oclusal** e as vertentes rasas de cúspide são o pior caso; a **parede axial de um preparo** é o melhor. Fontes de apoio: `https://www.sciencedirect.com/topics/engineering/staircase-effect` (⚠️ página de tópico do ScienceDirect, leitura gratuita, texto agregado automaticamente — verifique antes de citar) e `https://www.azom.com/article.aspx?ArticleID=24438` ("Why Part Orientation Matters in 3D Printing", ⚠️ mídia técnica, não peer-reviewed).

### 3.3 Por que a orientação importa — a analogia do veio da madeira (síntese minha)

Um marceneiro nunca pergunta "qual é a forma?" sem perguntar "para onde corre o veio?". **Orientação é o ato de escolher o veio de um material que não tinha veio nenhum antes de você imprimir.** É essa a inversão que faz a ficha cair: a manufatura aditiva **cria** a direção preferencial, ela não a herda.

E vale explicitar que a orientação decide **cinco coisas ao mesmo tempo**, não uma:
1. onde cai o staircase (qual superfície fica feia);
2. qual eixo é o eixo fraco (onde a peça vai fraturar);
3. onde os supports tocam — e portanto onde a superfície fica danificada (**marca de support no intaglio é erro clínico**);
4. a área de secção por camada → forças de *peel*, risco de falha e tempo de impressão;
5. em VPP, quantas vezes cada região recebe exposição extra de luz.

Referência prática de fabricante: **Formlabs, "Model orientation best practices for SLA printing"** — `https://formlabs.com/support/Model-Orientation/` ⚠️ VENDOR. E, especificamente dental, a recomendação de **60° para bases de prótese** e de inclinar superfícies planas grandes em **10–20°** aparece nos application guides da Formlabs Dental (`https://dental.formlabs.com/global/indications/digital-dentures/guide/`) ⚠️ — números de fabricante, cite como recomendação de fabricante, não como evidência.

### 3.4 Green state — a etimologia é o melhor "gancho"

O termo vem de **cerâmica e metalurgia do pó**: um *green body* é a peça conformada mas **não sinterizada** — sólida, manipulável e frágil, ainda não é o material pretendido. ⚠️ (a origem da palavra "green" é disputada: uma hipótese, atribuída a W. D. Kingery, é a coloração dada por ligantes orgânicos usados por oleiros antigos; a outra é simplesmente "cru/imaturo". Trate como curiosidade, não como fato estabelecido — as fontes que achei são de qualidade fraca.)

O que importa é que a palavra carrega a ideia certa: **forma pronta, material ainda não**. E isso é exatamente a definição de *multi-step process* da ISO/ASTM (§3.1).

**Cuidado importante, e é uma boa lição em si:** a literatura **não** é unânime sobre a *direção* da mudança de propriedades com o post-curing. Há relatos de ganho de rigidez e há relatos de aumento de fragilidade — o sinal depende fortemente da formulação. Não afirme uma direção universal. Enquadre como *"a cura muda drasticamente as propriedades; a direção depende da resina"*, que é mais honesto e ensina mais.

Fontes de números (⚠️ **snippets, não li os artigos** — confirme antes de projetar qualquer número):
- *"Effect of Different Post-Curing Methods on the Degree of Conversion of 3D-Printed Resin for Models in Dentistry"*, **Polymers** (MDPI) 2024 — `https://www.mdpi.com/2073-4360/16/4/549` · PMC `https://pmc.ncbi.nlm.nih.gov/articles/PMC10892052/`. **CC BY** (padrão MDPI). Snippet reporta DC as-printed ≈ **63,1%** e diferença significativa entre 15 e 45 min de pós-cura.
- *"The impact of modifying 3D printing parameters on mechanical strength and physical properties in vat photopolymerisation"*, **Scientific Reports** 2025 — `https://www.nature.com/articles/s41598-025-97294-8`. OA. Snippet reporta DC significativamente maior em espécimes impressos verticalmente **no green state**, diferença que **desaparece após o post-cure** — se confirmado, é um dado bonito porque liga orientação, green state e cura numa frase só.
- *"Post-polymerization of three-dimensional printing resin using a dental light curing unit"* — `https://pmc.ncbi.nlm.nih.gov/articles/PMC11010625/`.
- Formlabs (⚠️ VENDOR): `https://formlabs.com/blog/how-to-post-cure-3d-prints/`.

### 3.5 Oxygen inhibition — a inversão pedagógica mais bonita da aula

Eles já viram inibição por oxigênio na aula de polimerização, como um **defeito**: a camada superficial pegajosa de 10–40 µm num compósito. O movimento de ensino é mostrar que **a mesma física é o mecanismo que viabiliza a impressora mais rápida do mundo**.

No CLIP da Carbon, a inibição por O₂ é **mantida deliberadamente**: uma janela permeável ao oxigênio sustenta uma **dead zone** de resina permanentemente líquida com dezenas de micrômetros, e é justamente por isso que a peça nunca gruda na janela e o crescimento pode ser contínuo, sem o passo de *peel*. Analogia que eu proporia: **é um colchão de ar de hovercraft, só que feito de líquido e mantido por gás que atravessa a janela** — o sólido nunca toca a superfície, então não há o que descolar.

A frase de aula: *"o oxigênio que estraga a superfície da sua restauração é o mesmo oxigênio que, controlado, torna a impressão contínua possível. O defeito e a solução são a mesma reação."*

Fonte clínica acessível: **Institute of Digital Dentistry**, *"Understanding the oxygen inhibition layer — why that glycerin blob actually matters"* — `https://instituteofdigitaldentistry.com/workflows/understanding-the-oxygen-inhibition-layer-why-that-glycerin-blob-actually-matters/` ⚠️ **blog clínico**, não peer-reviewed, mas alinhado com a literatura e conecta a OIL a peças impressas (monômero não convertido lixiviando na boca). Respaldo peer-reviewed, **ambos paywalled**: Bijelic-Donova et al., *Eur J Oral Sci* 2015 (`https://onlinelibrary.wiley.com/doi/10.1111/eos.12167`) e Gauthier et al., *J Dent Res* (`https://pubmed.ncbi.nlm.nih.gov/16040730/`).

### 3.6 Anisotropia — aqui a sabedoria convencional está, em parte, ERRADA ✅

Este é o achado mais forte do relatório e responde diretamente ao seu pedido.

**Allum, Moetazedian, Gleadall & Silberschmidt (Loughborough), *"Interlayer bonding has bulk-material strength in extrusion additive manufacturing: new understanding of anisotropy"*, *Additive Manufacturing* 2020** — preprint de autor, **acesso livre**: `http://fullcontrolgcode.com/wp-content/uploads/2020/07/Author-version-Interlayer-bonding-has-bulk-material-strength-in-extrusion-additive-manufacturing-New-understanding-of-anisotropy.pdf` · DOI `10.1016/j.addma.2020.101297` (versão final paywalled na Elsevier). ✅ Li o abstract e a introdução verbatim.

Do abstract, verbatim: *"Both F and Z specimens demonstrated bulk material strength. In contrast, strain-at-fracture, specific load-bearing capacity, and toughness were found to be lower in Z specimens due to the presence of filament-scale geometric features (grooves between extruded filaments)... It was found that anisotropy was caused by the extruded-filament geometry and localised strain (as opposed to assumed incomplete bonding of the polymer across the interlayer interface)."*

Ou seja: para PLA em material extrusion, **a interface entre camadas tem a resistência do material maciço**. A anisotropia em ductilidade e tenacidade vem dos **sulcos geométricos entre filamentos**, que funcionam como **concentradores de tensão** — não de uma "solda mal feita". Os autores também reportam que velocidade de impressão e tempo de camada **não influenciaram** a resistência da ligação interlaminar.

**Ressalva obrigatória, e você precisa dizê-la em voz alta:** isto é **material extrusion em PLA**, não vat photopolymerization. Não transfira o achado em bloco para resinas dentárias, onde o mecanismo é outro (co-polimerização parcial entre camadas, rede interpenetrante, e exposição adicional das camadas já curadas). Aliás, na literatura de SLA há relatos de espécimes verticais ficando **mais resistentes e mais frágeis**, precisamente por causa dessa exposição extra — direção oposta à do FDM.

**Como fazer os alunos SENTIREM isso — minha proposta, e acho que é a melhor resposta ao seu pedido:**

> **A demo do entalhe, 30 segundos, custo zero.** Dê a cada aluno uma tira de acetato/transparência. Peça para rasgá-la puxando pelas bordas — é difícil, quase impossível. Agora dê uma **tesourada mínima na borda**, um piquezinho de 2 mm, e peça para rasgar de novo — rasga sozinha. O material é o mesmo, a área resistente é praticamente a mesma; o que mudou foi um **concentrador de tensão**.
> A frase seguinte é a aula inteira: *"a linha de camada não é uma junta de cola fraca. É uma fileira de entalhes microscópicos. Vocês acabaram de sentir a diferença entre 'material fraco' e 'geometria ruim' — e é a segunda que explica por que a peça quebra."*

Isso é seguro, instantâneo, funciona em anfiteatro, e é **fisicamente correto** de acordo com um artigo peer-reviewed de Loughborough. Combine com a demo de quebrar duas barras impressas em orientações diferentes (seção 5) e a anisotropia deixa de ser uma palavra no slide.

Contraponto empírico útil (⚠️ não peer-reviewed, mas quantitativo e honesto): **CNC Kitchen**, `https://www.cnckitchen.com/blog/the-influence-of-layer-height-on-the-strength-of-fdm-3d-prints` — ensaios de tração caseiros com espécimes deitados vs. em pé; snippets reportam valores **≥50% menores** nos espécimes em pé. Vale como "o efeito é grande e qualquer um pode medir", não como referência acadêmica.

### 3.7 Trueness / precision / accuracy — a assimetria que ninguém ensina (síntese minha)

Além do alvo de dardos (seção 4), há um ponto clinicamente acionável que raramente é dito:

> **A precision você consegue medir na sua própria clínica. A trueness, não.** Basta escanear o mesmo caso várias vezes e comparar os scans entre si para estimar precision. Mas para saber trueness você precisa de uma **referência externa**, que você não tem. Consequência: um viés sistemático — scanner consistentemente 40 µm menor — é **invisível** para o operador. Ele se manifesta como "todas as coroas ficam apertadas", e o clínico culpa o laboratório.

Isso transforma um par de definições ISO num raciocínio de diagnóstico, que é o que aluno de odontologia guarda.

---

## 4. Vocabulário de exatidão feito direito (ISO 5725)

### 4.1 Fontes normativas e de metrologia

**NPL (National Physical Laboratory, UK) — pôster "The difference between ACCURACY, PRECISION & TRUENESS"** — `https://www.npl.co.uk/getmedia/52c4d2e1-bb4e-4401-bbdc-319251cc7830/ACCURACY_PRECISION_TRUENESS_2023.pdf` ⚠️ (verificado por agente auxiliar, texto extraído). **É o melhor slide único da aula toda.** Uma página, instituto nacional de metrologia, com a figura de alvo em quatro quadrantes organizada em dois eixos ("Increasing precision" × "Increasing trueness") e a **diagonal** rotulada "Increasing accuracy". Os quadrantes são rotulados *High trueness/high precision*, *High trueness/low precision*, *Low trueness/high precision*, *Low trueness/low precision*. Repare no ponto de ouro: **"accuracy" não é um dos quadrantes — é a diagonal.** `© NPL Management Ltd` — **não é CC**; use com atribuição.

**ISO 5725-1:2023 — preview gratuito com a Cláusula 3 completa** — `https://cdn.standards.iteh.ai/samples/69418/a7c3fb78cdce4a6398bd3f759670d72e/ISO-5725-1-2023.pdf` ⚠️. Contém verbatim:
- **3.5 accuracy** = *"closeness of agreement between a test result and the true value"*; Nota 3: *"Accuracy refers to a combination of trueness and precision."*
- **3.6 trueness** = *"closeness of agreement between the expectation of test results and a true value"*; Nota 2: *"Trueness is sometimes referred to as 'accuracy of the mean'. This usage is not recommended."*
- **3.12 precision** = *"closeness of agreement between independent test results obtained under stipulated conditions"*.
- Introdução 0.2, na formulação clássica: *"'Trueness' refers to the closeness of agreement between the arithmetic mean of a large number of test results and the true or accepted reference value."*

**A armadilha, documentada pela própria ISO** (Introdução 0.1, verbatim): *"The term accuracy was at one time used to cover only the one component now named trueness, but it became clear that to many persons it should imply the total displacement of a result from a reference value, due to random as well as systematic effects."* Isto é prova documental de que "accuracy" mudou de sentido — e explica por que artigos antigos de odontologia escrevem "accuracy" querendo dizer "trueness". Slide pronto.

**JCGM 200:2012 (VIM, 3ª ed.) — gratuito, navegável termo a termo** — `https://jcgm.bipm.org/vim/en/2.13.html` (accuracy) · `.../2.14.html` (trueness) · `.../2.15.html` (precision) · PDF completo `https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf` ⚠️. Autoridade BIPM/JCGM, **sem paywall**. Duas notas perfeitas para um slide de "erros comuns": **2.14 NOTE 3** — *"'Measurement accuracy' should not be used for 'measurement trueness'."*; **2.15 NOTE 4** — *"Sometimes 'measurement precision' is erroneously used to mean measurement accuracy."*

**NPL Good Practice Guide No. 118, *A Beginner's Guide to Measurement*** — `https://eprintspublications.npl.co.uk/4882/1/mgpg118.pdf` ⚠️. Nível de ensino médio, ideal como leitura pré-aula. Frase útil: *"Bias is the opposite of trueness."*

**Wikipedia, "Accuracy and precision"** — `https://en.wikipedia.org/wiki/Accuracy_and_precision`. Avaliação: **tecnicamente correto e bem referenciado** (cita BS ISO 5725-1, JCGM 200 e Menditto et al., *Accred Qual Assur* 2007). Use como **mapa de leitura para você**, não como citação em slide para alunos.

### 4.2 A figura de alvo com licença aberta — ⚠️ AVISO

O agente auxiliar **não conseguiu verificar as páginas do Wikimedia Commons** (retorno vazio no fetcher, HTTP 403 no proxy). Os dados abaixo vêm de snippets de busca e **precisam ser confirmados na própria página antes do uso**:

- `https://commons.wikimedia.org/wiki/File:Accuracy_(trueness_and_precision).svg` — autor Sv1xv, obra própria, **CC BY-SA 3.0** (⚠️ não verificado). É a figura usada no artigo da Wikipedia, com legenda *"Accuracy of a target grouping according to BIPM and ISO 5725"* — exatamente a versão de quatro quadrantes.
- `https://commons.wikimedia.org/wiki/Category:Accuracy_and_precision` — categoria com alternativas.

**Recomendação prática:** se você quer uma figura cuja procedência você consegue defender hoje, use o **pôster do NPL**. Se quiser a do Commons, abra a página, leia a caixa de licença e guarde um print — resolve em 30 segundos o que não deu para resolver remotamente.

### 4.3 "Trueness" na literatura de CAD/CAM e scanners intraorais

**A melhor fonte odontológica única:** Kihara et al., *"Trueness and precision of digital implant impressions by intraoral scanners: a literature review"*, ***International Journal of Implant Dentistry*** 2021 — `https://link.springer.com/article/10.1186/s40729-021-00352-9` · DOI `10.1186/s40729-021-00352-9` ⚠️. SpringerOpen, **OA, sem paywall**; provavelmente **CC BY 4.0** (a seção "Rights and permissions" não foi capturada — confirme antes de reutilizar a **Fig. 1**, que é a figura de alvo aplicada à odontologia digital).

Tem uma seção **"Terminology"** que cita a ISO 5725-1 verbatim e — melhor ainda — **nomeia estudos que usam o termo errado** (Nedelcu 2018, Marghalani 2018, Tan 2019). Cito o trecho verificado: *"Although 'accuracy' is used as a synonym for 'trueness' in some studies, this review follows the above-mentioned definition by the ISO."*

**E entrega uma crítica metodológica que quase ninguém ensina**, verbatim: *"Due to its calculation methodology, the best-fit algorithm aligns test data with the reference data as closely as possible to its theoretical counterpart. Therefore, the actual positional relationship between the reference data and test data may deviate much more, and the deviation between the images may be underestimated."*
Ou seja: **o best-fit subestima o desvio real.** É o slide que ensina o aluno a não engolir um mapa de cores verdinho.

**Estudo in vivo com colour maps prontos:** *"Trueness and precision of intraoral scanners in the maxillary dental arch: an in vivo analysis"*, ***Scientific Reports*** 2020 — `https://www.nature.com/articles/s41598-020-58075-7` ⚠️. OA, CC BY. Compara CS3600 e TRIOS3 contra scanner extraoral de referência; box plots e mapas de cor prontos para projetar. O fato de ser *in vivo* neutraliza a objeção "isso só funciona em laboratório".

**A metodologia padrão, para você narrar em aula:** (a) escanear com scanner de referência → *reference STL*; (b) escanear com o IOS em teste, várias repetições → *test STLs*; (c) sobrepor cada test ao reference por **best-fit** → **trueness**; (d) sobrepor os tests **entre si** → **precision**; (e) reportar em **RMS (µm)** e visualizar como **colour deviation map**.

### 4.4 Marginal fit — os números reais e quem os diz

**Fonte-âncora, CC BY e gratuita:** Rödiger, Schneider & Rinke, *"Influence of Material Selection on the Marginal Accuracy of CAD/CAM-Fabricated Metal- and All-Ceramic Single Crown Copings"*, ***BioMed Research International*** 2018;2018:2143906 — DOI `10.1155/2018/2143906` · PDF `https://pdfs.semanticscholar.org/62c7/d83b6e464b65df9928c4e80a6af1b439d308.pdf` ⚠️ (verificado por agente auxiliar; licença CC BY confirmada na página de rosto).

| Afirmação | Valor | Quem diz |
|---|---|---|
| Limiar clássico | máx. **120 µm**, após exame de 5 anos de 1.000 restaurações | **McLean & von Fraunhofer 1971**, citados por Rödiger et al. |
| **Não há consenso** | *"the available literature offers no defined threshold regarding the maximum marginal discrepancy that is clinically acceptable"* | Rödiger et al. 2018, verbatim |
| Dispersão na literatura | **7,6–206,3 µm** (revisão de 183 estudos) | Nawafleh et al., *J Prosthodont* 2013;22(5):419–428 |
| Dispersão em cerâmicas | **3,7–174 µm** (revisão sistemática, 54 artigos) | Contrepois et al., *J Prosthet Dent* 2013;110(6):447–E10 |
| Dados próprios (n=10) | Ti cp **46,9 ± 23,1**; CoCr **48,4 ± 29,7**; **zircônia YSZ 68,3 ± 28,5**; vitrocerâmica **58,7 ± 21,2 µm** | Rödiger et al. 2018 |

**Referência primária:** McLean JW, von Fraunhofer JA. *The estimation of cement film thickness by an in vivo technique.* **British Dental Journal 1971;131(3):107–111** · DOI `10.1038/sj.bdj.4802708` · `https://pubmed.ncbi.nlm.nih.gov/5283545/`. ❌ **PAYWALL** (Nature/BDJ) — o texto original não foi lido. **Cite pela fonte secundária CC BY e diga isso aos alunos**; é higiene de citação e vale a pena demonstrar.

**Números concorrentes** (⚠️ fonte de baixo prestígio, **Austin Publishing Group, possivelmente predatória** — use só como registro de que os números circulam, nunca como autoridade): `https://austinpublishinggroup.com/dental-disorders/fulltext/jdod-v6-id1136.php` reporta que a ADA indicaria **25–40 µm** (inatingível na prática), com **100 µm** descrito como clinicamente aceitável e **120 µm** como máximo tolerável. Traz também um dado clínico bonito: um explorador **afiado** detecta ~36 µm em 95% das pessoas; exploradores **cegos** não detectam.

> **Frase honesta para o slide:** *"120 µm é o número mais citado, vem de McLean & von Fraunhofer (BDJ, 1971), de ~1.000 restaurações acompanhadas por 5 anos. Mas não há consenso: propostas vão de 25–40 µm a 100, 120 e até 150–200 µm, e os valores medidos na literatura vão de 3,7 a 206 µm — em grande parte porque os métodos de medição não são padronizados."*

---

## 4b. Aditivo vs. subtrativo — incluindo o caso honesto para o milling

**Melhor comparação vendor, e a mais equilibrada:** **Protolabs Network (ex-Hubs), "3D printing vs. CNC machining"** — `https://www.hubs.com/knowledge-base/3d-printing-vs-cnc-machining/` ⚠️ **VENDOR**. Curiosamente é a mais honesta com o milling, porque a Protolabs **vende os dois serviços** e não tem incentivo direcional. Viés real: CTAs de cotação por toda a página. Dados verificados:
- Tolerâncias: **CNC ±0,025–0,125 mm** · SLM/DMLS ±0,100 · binder jetting ±0,200 · SLS ±0,300 · FDM industrial ±0,200 / desktop ±0,500 mm.
- Verbatim: CNC entrega *"fully **isotropic** properties"*; peças aditivas *"often exhibit **anisotropic** properties, meaning they may be weaker along layer lines"*.
- FAQ, verbatim: *"Will 3D printing make CNC machining obsolete? No."*
- Lado aditivo, honestamente: geometrias impossíveis de usinar; sem necessidade de acesso de ferramenta; **mais barato abaixo de ~10 unidades**; SLS e MJF **dispensam supports**.

**Formlabs, "Additive vs. Subtractive Manufacturing"** — `https://formlabs.com/blog/additive-manufacturing-vs-subtractive-manufacturing/` ⚠️ **VENDOR com viés pró-aditivo evidente** (fabrica impressoras; CTAs de ROI; **não tem tabela de tolerâncias comparativa — a omissão é o viés**). Ainda assim concede, verbatim: *"subtractive manufacturing is most often the choice for fabricating finished parts... subtractive processes are a better choice for metals parts for all but the most complex designs."*
> **Uso didático que eu recomendo:** projete a página da Formlabs ao lado da da Protolabs e pergunte à turma *"qual das duas empresas vende impressoras? como vocês perceberam?"*. Ensina mais sobre conflito de interesse em literatura patrocinada do que qualquer slide sobre o assunto.

**All3DP, "Additive vs Subtractive Manufacturing – Simply Explained"** — `https://all3dp.com/2/additive-vs-subtractive-manufacturing-simply-explained/` ⚠️ **mídia comercial** (publicidade + serviço próprio de impressão; artigo de 2019, datado). Uma frase aproveitável: processos aditivos geram *"tiny pores in surfaces... These weaken the part and can lead to contamination or infection when used in food or medical applications"* — ponte direta para biofilme em bases de prótese impressas.

**O argumento mais elegante e contraintuitivo — e é peer-reviewed CC BY.** Rödiger et al. 2018 (mesma referência de 4.4) explica **por que zircônia fresada tem gap maior que metal fresado**, verbatim: *"Zirconia is milled in a presintered stage, and a sintering process is needed to bring the material to its final density... This shrinkage of the material has to be compensated by milling the restoration in an enlarged state. Compared to the metallic materials that are milled in their final state, the sintering process introduces an additional source of error."*
> Isso ensina que "subtrativo = preciso" é preguiçoso. O que importa é **quantas transformações de estado o material sofre DEPOIS de ganhar a forma** — que é exatamente o eixo single-step/multi-step da seção 3.1. Ti e CoCr: fresados no estado final → 46–48 µm. Zircônia: fresada pré-sinterizada, encolhe → 68 µm.

**O slide-chave, com dados dentais diretos:** *"Marginal gap and internal fit of milled vs. 3D printed monolithic zirconia crowns"*, ***BMC Oral Health*** 2023 — `https://pmc.ncbi.nlm.nih.gov/articles/PMC10318718/` ⚠️ (verificado por leitura direta pelo agente auxiliar). **CC BY 4.0**, sem paywall. Zircônia 3Y-TZP, n=20:
- VMGT: **impressa 80 ± 30 µm vs. fresada 60 ± 20 µm** (p<0,001)
- SRT: **impressa 100 ± 10 µm vs. fresada 60 ± 10 µm**
- Sem diferença significativa no axial gap
- Conclusão dos autores, verbatim: *"Although milled crowns showed better results, the 3D printed zirconia crowns offer **clinically acceptable** results in terms of marginal adaptation and internal fit."*

É o resultado honesto: **o milling ganha, E a impressão passa no critério clínico.** E 80/100 µm ficam abaixo dos 120 µm de McLean — o gráfico fecha as seções 4 e 4b num só slide.

**Meta-análise recente** ❌ **PAYWALL, NÃO VERIFICADA:** *J Prosthet Dent* 2024, `https://www.thejpd.org/article/S0022-3913(24)00283-X/fulltext` · DOI `10.1016/j.prosdent.2024.04.024`. Snippets reportam 15 publicações de 6.539 registros e SMD=1,46 favorecendo o fresado no marginal fit — **não confirmado**. Busque pelo acesso da NUS antes de colocar números no slide.

❌ **Não cite:** Hussain A., "Additive vs. Subtractive Manufacturing in Dental Laboratory Technology", `https://academicworks.cuny.edu/ny_pubs/739/` — aparece alto nas buscas mas é **pôster de iniciação científica de graduação**, não peer-reviewed.

### Síntese pronta para slide

**Onde o milling genuinamente ganha:** (1) material **industrialmente processado** — o blank de PMMA é polimerizado sob alta pressão e temperatura, dissilicato e zircônia vêm de processos cerâmicos controlados; você **herda** a qualidade, não a fabrica na bancada *(⚠️ argumento padrão da literatura, mas não localizei um paper OA que o estabeleça com dados — verifique antes de citar números)*; (2) **isotropia** — sem planos de camada, sem eixo fraco; (3) **tolerância** ±0,025–0,125 mm; (4) **acabamento** — sem layer lines nem marcas de support; (5) **validação estabelecida** por décadas; (6) **dados de fit**: 60 ± 20 vs. 80 ± 30 µm.

**Onde o aditivo genuinamente ganha:** (1) **liberdade geométrica** — undercuts, canais internos, lattices; (2) **desperdício** — o blank de zircônia vira majoritariamente pó; (3) **nesting** — dezenas de peças numa build plate, custo marginal da complexidade ≈ zero; (4) **custo unitário abaixo de ~10 unidades**, sem custo de ferramenta; (5) **sem limite de diâmetro de fresa** — o milling não reproduz sulco mais estreito que a ferramenta, e cantos internos ficam arredondados **por definição geométrica**; (6) **materiais infresáveis** — elastômeros, multimaterial, gradientes.

**Fechamento honesto:** não são rivais, são complementares — as duas melhores fontes dizem isso explicitamente (Protolabs: *"a hybrid approach can offer the best of both worlds"*; Formlabs: *"not mutually exclusive"*), e é literalmente o que o laboratório faz hoje: **imprime o modelo e a moldeira, fresa a coroa definitiva.**

---

## 5. Demonstrações físicas para a sala de aula

**Achado negativo, e é importante:** **não localizei nenhuma demonstração de bancada para ensino de AM publicada e formalmente avaliada em periódico de educação odontológica.** As recomendações abaixo são montagens apoiadas em literatura de processo, não protocolos validados. Diga isso a si mesmo antes de chamá-las de "evidence-based".

### O que existe publicado

- **IEEE TryEngineering, "3D Printing by Hand"** — `https://tryengineering.org/resource/lesson-plan/3d-printing-by-hand/` · PDF `https://tryengineering.org/wp-content/uploads/3dprintingbyhand-2.pdf` ✅. Fatiamento manual em foam board. Lesson plan de sociedade profissional, faixa 8–14 anos — a **mecânica** é excelente, o texto é infantil. `© 2019 IEEE, all rights reserved`: execute, não republique figuras. Consome 90 min na íntegra.
- **TeachEngineering (NSF / CU Boulder + Michigan State), "3D Printing, CAD and G-Code Basics"** — `https://www.teachengineering.org/activities/view/mis-2342-3d-printng-computer-aided-design-g-code-basics` ✅. Inclui o simulador gratuito **NC Viewer** (`https://ncviewer.com/`), que desenha o toolpath ao vivo. ⚠️ `© Regents of the University of Colorado` — **não é Creative Commons**; uso educacional livre pelos Terms of Use, mas não republique.
- **ASEE Gulf-Southwest 2022, Williams & Bahadir, "Understanding the Anisotropic Characteristics of 3D Printed Parts"** — PDF aberto: `https://peer.asee.org/understanding-the-anisotropic-characteristics-of-3d-printed-parts.pdf` ✅. Corpos ASTM D638 tipo IV em **7 orientações** (SLA em Form 2; nylon em Markforged), com curvas tensão-deformação, UTS por orientação e foto lado a lado **"fratura dúctil × delaminação"**. Conference paper regional (peer review leve), mas é **o artigo que respalda a sua demo de quebrar peças**. Achado relevante: em SLA, a peça a 90° ficou **mais forte e mais frágil**, por exposição adicional das camadas já curadas. ASEE: leitura gratuita, **cite e parafraseie, não copie a figura**.
- **ASEE Annual 2024, Billah, "Development of Hands-on Additive Manufacturing Courses"** — `https://peer.asee.org/development-of-hands-on-additive-manufacturing-courses` · DOI `10.18260/1-2--47183` ✅. Curso eletivo estruturado **sobre as 7 categorias ASTM**. Roube a espinha dorsal curricular; o projeto completo não cabe em 60 min.
- **Nassani et al., *J Dent Educ* 2024** — `https://onlinelibrary.wiley.com/doi/10.1002/jdd.13521` ❌ paywall Wiley · versão livre `https://pmc.ncbi.nlm.nih.gov/articles/PMC11675528/` ⚠️ (PMC bloqueou com reCAPTCHA; **texto não confirmado**). 118 estudantes de odontologia num exercício prático de 3D printing com engenharia; ganho significativo pré/pós. **Peer-reviewed no periódico de referência da área** — é a sua citação de "isto funciona com o meu público exato".
- **Mello, Dutra & Liedke, "3D Printing in Dental Education: A Scoping Review", *Med Princ Pract* 2025** — `https://karger.com/mpp/article/doi/10.1159/000548395/934775/` · PMC `https://pmc.ncbi.nlm.nih.gov/articles/PMC13046323/` ⚠️. 94 estudos, 11 especialidades, ~3.604 graduandos. **CC BY-NC 4.0** — figuras e tabelas **reutilizáveis com atribuição, uso não comercial**. Um dos poucos itens com licença aberta *e* específico de odontologia.
- **NIH 3D** (ex-NIH 3D Print Exchange) — `https://3d.nih.gov/` ✅ · termos `https://3d.nih.gov/terms`. >12.000 modelos biomédicos incluindo dentes e implantes, STL/GLB. Agência federal dos EUA; **licenças CC ou domínio público declaradas por entrada** — confira a página de cada modelo.
- **AmeraLabs Town** (peça-teste de resolução para resina) — `https://ameralabs.com/blog/town-calibration-part/` ⚠️. Padrão de facto para calibração; ⚠️ **licença não declarada** — imprima e circule, não redistribua o STL.

### As 5 melhores demos para ESTE público — minha recomendação ranqueada

**1. Green state × post-cured, em saco selado — flexionar e sentir.** *(base: Formlabs; execução minha.)* Duas barras idênticas, uma só lavada em IPA, outra pós-curada, ambas em ziplock transparente rotulado. 4 min. Ensina que a impressora **não termina** a peça. **Segurança: sacos selados obrigatoriamente** — resina não curada é irritante e sensibilizante de pele; nunca circule peça green nua; descarte como resíduo de resina.

**2. Oxygen inhibition: cura no ar × cura sob glicerina.** *(base: iDD + literatura peer-reviewed; execução clássica.)* Duas gotas numa lâmina, fotopolimerizador, uma gota de glicerina, e dois alunos tocando com sonda. 3 min. É a demo que **transforma a aula anterior deles em pré-requisito real** e prepara o CLIP. **Segurança:** escudo laranja, nunca aponte para os olhos, luvas.

**3. A demo do entalhe (acetato + tesourada).** *(proposta minha, seção 3.6.)* 30 segundos, custo zero, risco zero, e é a forma mais direta de fazer os alunos **sentirem** que anisotropia é geometria (concentrador de tensão), não "cola fraca" — apoiada em Allum et al. 2020.

**4. Anisotropia: duas barras iguais, orientações diferentes, quebradas ao vivo.** *(base: ASEE Williams & Bahadir; execução minha.)* 4 min com o gráfico de UTS no slide seguinte. Quebre **dentro de um saco transparente**, com óculos de proteção.

**5. Slicing ao vivo: um dente do NIH 3D no slicer, arrastando o slider de camadas.** *(base: NIH 3D + NC Viewer; execução minha.)* Gratuito, zero logística, e introduz STL, slicing, layer height, supports e staircase num único gesto. 5 min. Faça a pergunta *"por que a superfície oclusal fica em escadinha e a parede axial não?"* **antes** de responder — é a deixa para a fórmula `layer height / tan(θ)`.

**Bônus de 2 min, se sobrar tempo:** leve um **set de alinhadores ortodônticos**, mesmo descartados. Cada alinhador é um passo discreto de um movimento contínuo — a mesma discretização do slicing, aplicada a algo que eles já viram na clínica; e todos os alinhadores modernos são termoformados **sobre modelos impressos**. Fecha o argumento "isto não é futuro, é a rotina do laboratório ao lado".

**Não recomendo em 60 min:** o projeto DMT completo do ASEE, a atividade de G-code e a construção manual em foam board — todos excelentes, todos ≥90 min, todos desenhados para engenharia.

---

## 6. Materiais didáticos abertos sobre AM

### Os dois melhores achados, ambos com licença aberta de verdade

**⭐ OpenLearn (The Open University), curso gratuito "Additive manufacturing" (T805_1)** ✅ **verificado por leitura direta**
`https://www.open.edu/openlearn/science-maths-technology/additive-manufacturing/content-section-0`
Curso completo de **8 horas, Level 3 (Advanced)**, publicado em 2016 e atualizado em 2019, avaliação 4,2/5 com 22 notas. **Licença Creative Commons BY-NC-SA declarada com selo na página** (com a ressalva padrão da OU: materiais de terceiros embutidos não estão sob a CC). **Baixável em Word, PDF, EPUB, HTML e OUXML** — ou seja, você pode extrair e reeditar.
Estrutura (verificada): 1 Overview / **1.2 "Why is this course not called 3D printing?"** / 2 Fundamentals / 3 Creating a model and building an artefact (CAD, laser scanning, machine positioning, build) / 4 Materials (polymer, metallic, other) / 5 Design implications / **6 Finished parts — 6.1 surface finish and feature quality, 6.2 microstructural properties, 6.3 residual stress** / Glossary.
**Por que é o melhor item da lista:** é o único recurso que combina **nível universitário + licença aberta + formato editável + exatamente os tópicos da sua aula** (acabamento de superfície, microestrutura, tensões residuais). A seção 1.2 é literalmente a discussão de nomenclatura da sua seção 1. Sugiro tratá-lo como a espinha dorsal e a odontologia como a camada de aplicação.

**⭐ SkillsCommons (US Dept. of Labor / TAACCCT) — curso "3D Printing - Additive Manufacturing"** ⚠️
`https://moodle.skillscommons.org/course/view.php?id=308` · repositório `http://www.skillscommons.org/` · portal DOL `https://www.dol.gov/agencies/eta/skills-training-grants/community-colleges/educational-resources`
Currículo desenvolvido por community colleges americanos com dinheiro federal, **avaliado por terceiros**. **Licença CC BY 4.0** — a mais permissiva desta lista inteira: você pode adaptar, traduzir e até usar comercialmente, só atribuindo. Também há um "Stratasys 3D Printing Curriculum Guide" em `http://www.skillscommons.org/handle/taaccct/10807` ⚠️ (verifique a licença desse item específico, já que é material de fabricante depositado no repositório).
**Ressalva de nível:** é currículo técnico de community college, não de pesquisa — bom para estrutura e figuras, raso para mecanismos.

### Os demais

- **MIT OpenCourseWare 2.008 *Design and Manufacturing II*, Spring 2025 — Lecture 23 "Layered Manufacturing II: Additive Manufacturing"** ⚠️ · `https://ocw.mit.edu/courses/2-008-design-and-manufacturing-ii-spring-2025/mit2_008_s25_lec23.pdf` · lista `.../lists/lecture-notes/` · também Lecture 22. Autoridade máxima (linhagem John Hart / Ely Sachs / Tim Gutowski). **CC BY-NC-SA 4.0.** ⚠️ **Ressalva importante:** slides do MIT frequentemente contêm figuras de terceiros ("Courtesy of…", "used with permission") **fora** da CC — cheque cada figura. ⚠️ O PDF de 8 MB **não foi aberto**; verifique o conteúdo antes de planejar em cima dele.
- **TeachEngineering — PowerPoint de Additive Manufacturing, em .pptx editável** ✅ · `https://www.teachengineering.org/content/mis_/activities/mis-2342-3D-printing/mis-2342-3D-printing-powerpoint-presentation.pptx` (também em .pdf). É o **único .pptx pronto e gratuito** que apareceu. Nível de ensino médio: sirva-se dos esquemas, reescreva o texto. ⚠️ **© CU Boulder / Michigan State — NÃO é Creative Commons.**
- **TU Delft OpenCourseWare — "6.2.5 3D Printing"** ✅ · `https://ocw.tudelft.nl/course-readings/6-2-5-3d-printing/`. **CC BY-NC-SA 4.0 declarada com selo.** Fotos reais de peças impressas, legalmente reutilizáveis. É um reading de **arquitetura** — use pelas fotos, não pela técnica. ⚠️ Não há curso de AM dedicado no TU Delft OCW; a oferta forte da TU Delft está em cursos pagos/edX, **não abertos**.
- **Wikimedia Commons — esquemas de estereolitografia** ⚠️ · `https://commons.wikimedia.org/wiki/File:Stereolithography_apparatus_vector.svg` (CC BY-SA 3.0) · `.../File:Stereolithography_process.gif`. Qualidade variável, sem revisão formal — **verifique a corretude do esquema antes de projetar**. Vantagem real: **SVG editável**, então você traduz os rótulos para português, coisa que os PDFs do MIT não permitem.
- **OER Commons — "Additive Manufacturing (AM)"** ❌ `https://oercommons.org/courseware/lesson/76708/overview` — a página **retornou vazia** nas minhas tentativas e a licença **não foi confirmada**. Snippets indicam objetivos alinhados ao que você quer (definir AM, história, "layers" e componentes do slicer, workflow). **Abra no navegador e confirme a licença** — se for CC BY, é um bom achado.
- **ASTM AM CoE / America Makes** — `https://amcoe.org/` ⚠️ ❌ **PAYWALL**: os 25+ webinars e os certificados são pagos, e as normas F42 também (`https://store.astm.org/`). **Não há módulos didáticos abertos aqui.** Cite a norma; não conte com material reutilizável.
- **NIST — Measurement Science for AM** — `https://www.nist.gov/programs-projects/measurement-science-additive-manufacturing-program` ⚠️. São relatórios técnicos, **não slides**. Obras de funcionários federais dos EUA são geralmente **domínio público**, mas ⚠️ isso **não foi confirmado nestes documentos específicos**. Nível alto demais para 2º ano; utilidade real seria uma figura de artefato de teste.
- **Coursera — Illinois (`https://www.coursera.org/specializations/3d-printing-additive-manufacturing`) e Arizona State (`https://www.coursera.org/specializations/additive-manufacturing`)** ⚠️ **ARMADILHA DE LICENÇA**: **free-to-audit ≠ openly licensed**. Vídeos e slides são all rights reserved. Use só para (a) calibrar escopo pelo syllabus e (b) link de "quer se aprofundar?" no slide final. **Não extraia frames.**
- **Penn State CIMP-3D / Nottingham CfAM / Fraunhofer** ❌ — páginas institucionais all rights reserved; **não foram localizados materiais didáticos abertos**. Especificamente: buscas **não retornaram** recursos abertos do Nottingham CfAM nem módulos educacionais abertos da Fraunhofer. **Não presuma que existam.**

### Resumo executivo de licenças

| Fonte | Reutilizar figuras no deck? |
|---|---|
| **SkillsCommons (CC BY 4.0)** | ✅ **Sim, inclusive comercialmente** — a mais permissiva |
| **Caussin et al., *Materials* 2024 (CC BY 4.0)** | ✅ **Sim** — melhor opção para esquemas de VPP dental |
| **BMC Oral Health 2023 (CC BY 4.0)** | ✅ Sim — dados de fit impresso vs. fresado |
| **Rödiger et al. 2018 (CC BY)** | ✅ Sim — marginal fit e o argumento da sinterização |
| **OpenLearn OU (CC BY-NC-SA)** | ✅ Sim, não comercial + share-alike; **baixável e editável** |
| MIT OCW (CC BY-NC-SA 4.0) | ✅ Sim, **checar figuras de terceiros dentro do PDF** |
| TU Delft OCW (CC BY-NC-SA 4.0) | ✅ Sim (fotos de peças) |
| Wikimedia Commons (CC BY-SA) | ✅ Sim, atribuição + share-alike; **SVG traduzível** |
| Karger scoping review (CC BY-NC) | ✅ Sim, não comercial |
| NIH 3D | ✅ CC ou domínio público — **conferir por entrada** |
| ASEE PEER | ⚠️ Grátis para ler; **citar sim, copiar figura não** |
| TeachEngineering / IEEE TryEngineering | ⚠️ Grátis para usar; **all rights reserved** |
| **ISO/ASTM 52900, ISO 5725 (previews iTeh)** | ⚠️ **Ler e citar sim; redistribuir o PDF não** |
| NPL (pôster e GPG 118) | ⚠️ © NPL, não CC — use com atribuição |
| Loughborough, Formlabs, Protolabs, All3DP, iDD, Carbon | ❌ All rights reserved — linke e reescreva |
| Coursera (Illinois, ASU) | ❌ **Free-to-audit, não open** |
| ASTM AM CoE, normas F42 | ❌ Paywall |
| Wiley (*J Dent Educ*, *Eur J Oral Sci*), BDJ, *JPD* | ❌ Paywall |

---

## O que NÃO consegui verificar — declarado explicitamente

- **Wikimedia Commons**: 100% de falha no fetcher (retorno vazio) e HTTP 403 no proxy. Todas as licenças de figuras do Commons neste relatório vêm de snippets. **Confirme na página.**
- **ISO Online Browsing Platform** (`iso.org/obp`): exige JavaScript, não renderizou. Use os previews do iTeh, que foram lidos linha a linha.
- **PMC/PubMed** passaram a devolver reCAPTCHA no meio da sessão: Nassani 2024, Mello 2025 (scoping review) e vários outros ficaram sem verificação direta de texto integral.
- **Paywalls não vencidos:** McLean & von Fraunhofer 1971 (BDJ); meta-análise *JPD* 2024; Allum et al. versão final na Elsevier (mas o **preprint de autor é aberto e foi lido**); Bijelic-Donova 2015 e Gauthier (Wiley/JDR).
- **Não abri** o PDF de 8 MB da Lecture 23 do MIT, nem as páginas do Wohlers e do Loughborough "7 categorias" (foram lidas pelo agente auxiliar, não por mim), nem as páginas da Formlabs (deduplicação/limite de tamanho — dependi de snippets e do agente auxiliar).
- **OER Commons lesson 76708**: página retornou vazia; **licença não confirmada**.
- **Anexo A da ISO/ASTM 52900** (sufixos `-UVL`, `-UVM`, `-LED`): vem de snippet; o preview que li termina antes do Anexo A.
- **Achado negativo relevante:** não existe, até onde pesquisei, demo de bancada para AM publicada e avaliada em periódico de educação odontológica; e não foram localizados recursos abertos do Nottingham CfAM ou da Fraunhofer.

Nenhum número, citação verbatim ou URL neste relatório foi inventado. Onde citei texto entre aspas como "verbatim", ele foi extraído de um documento efetivamente lido — por mim ou, quando indicado com ⚠️, pelo agente auxiliar.
agentId: a8987fb4e5f311617 (use SendMessage with to: 'a8987fb4e5f311617', summary: '<5-10 word recap>' to continue this agent)
<usage>subagent_tokens: 155921
tool_uses: 28
duration_ms: 1411149</usage>