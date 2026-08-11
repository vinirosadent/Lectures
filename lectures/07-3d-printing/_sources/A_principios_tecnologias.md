Li integralmente os 5 PDFs (texto extraído com `pdftotext -layout`; li 100% do corpo de cada um, excluindo listas de referências). Segue a síntese.

---

# A. Proveniência dos 5 documentos

| # | Referência completa | Ano / Revista | Tipo de estudo | Observação |
|---|---|---|---|---|
| **P1** | Sahrir CD, Wang C-W, Shen Y-K, Lin W-C. *Three-Dimensional Printing in Dentistry: Evolution, Technologies, and Clinical Application.* | **Polymers 2026;18(7):785.** doi:10.3390/polym18070785 (MDPI, open access; recebido 26/02/2026, publicado 24/03/2026) | **Narrative/comprehensive review** — busca em PubMed, Scopus, Web of Science + Google Scholar; sem protocolo sistemático, sem PRISMA, sem critérios quantitativos de qualidade | Peer-reviewed. Fonte mais atual e a mais adequada para o "mapa" de aplicações clínicas por especialidade. Foco declarado: vat photopolymerization. |
| **P2** | Chen Y, Wei J. *Application of 3D Printing Technology in Dentistry: A Review.* | **Polymers 2025;17(7):886.** doi:10.3390/polym17070886 (MDPI) | **Narrative review** (sem metodologia de busca declarada) | Peer-reviewed. Fortemente orientado a materiais/engenharia (grupo de química, Nanchang Univ.). Zero números de parâmetros de impressão. |
| **P3** | Calvache Arcila LV, de Carvalho Ramos N, Bottino MA, Tribst JPM. *Indications, materials and properties of 3D printing in dentistry: a literature overview.* | **Research, Society and Development 2020;9(11):e80791110632.** doi:10.33448/rsd-v9i11.10632 | **Revisão descritiva de literatura** — busca só em PubMed, 2000–2020, 75 artigos incluídos; sem avaliação de risco de viés | Peer-reviewed, mas **revista multidisciplinar brasileira de baixo impacto, não indexada em bases odontológicas principais**. Autores são do grupo UNESP-SJC (Bottino/Tribst) — credível, mas o veículo é fraco. Contém erros de terminologia (ver §E). |
| **P4** | Punya Krishnan B, Menon Prasad Rajagopal, Pradeep Samuel, Jyotsna MK, Athira M, Mohammed Shamil, Haritha Babu. *3D printing in prosthodontics & recent trends in additive manufacturing.* | **Ano, revista, volume, DOI: NÃO CONSTAM no PDF.** Metadados: arquivo gerado em macOS Quartz, 20/12/2024, 7 páginas. Afiliação: Educare Institute of Dental Sciences, Malappuram, Índia | **Artigo de revisão/opinião curto** (~2.500 palavras) | ⚠️ **Não é documento de fabricante, mas também não é rastreável.** Sem DOI, sem ISSN, sem identificação de periódico — é efetivamente um *author manuscript*. Além disso, **o conteúdo é em grande parte derivado de uma única fonte** (Schweiger, Edelhoff & Güth, *J Clin Med* 2021;10:2010), que aparece **duplicada** como referências 1 e 3. **Não recomendo usar como citação primária na aula** — usar Schweiger et al. diretamente. |
| **P5** | Yüceer ÖM, Kaynak Öztürk E, Çiçek ES, Aktaş N, Bankoğlu Güngör M. *Three-Dimensional-Printed Photopolymer Resin Materials: A Narrative Review on Their Production Techniques and Applications in Dentistry.* | **Polymers 2025;17(3):316.** doi:10.3390/polym17030316 (MDPI) | **Narrative review** (declarado explicitamente como "narrative") | Peer-reviewed. **É de longe a fonte mais densa em mecanismo físico e em números** para LO-1 e LO-2. Limitação: cobre **apenas resinas fotopolimerizáveis** (vat photopolymerization + material jetting); não cobre PBF, binder jetting nem FFF. |

**Nota de escopo importante para a aula:** nenhuma das 5 fontes é um livro-texto de materiais dentários nem um estudo primário. São 5 revisões narrativas. Para LO-1/LO-2 isso é aceitável (são conteúdos descritivos/consensuais), mas qualquer número específico deve ser atribuído nominalmente (ver §C).

---

# B. O workflow genérico de AM, como as fontes o descrevem

## B.0 A definição de partida (ISO/ASTM 52900)

> "Process of joining materials to make objects from 3D model data, **usually layer by layer**, as opposed to subtractive manufacturing methods" — EN ISO/ASTM 52900, citado literalmente em **P4**; a mesma definição (ASTM) aparece em **P3**.

- **P1**: a norma ISO/ASTM 52900 foi publicada em **2015** e "apoiou a translação clínica da AM ao fornecer terminologia e definições de processo padronizadas, contribuindo para aceitação clínica e clareza regulatória".
- **P4** acrescenta que a **EN ISO 17296-2** descreve os fundamentos de processo da AM e oferece um sumário das categorias de processo — "que nunca pode ser exaustivo devido à evolução contínua de novas tecnologias".

**Princípio físico central (todas as fontes):** o objeto é construído por **superposição de secções transversais 2D**. **P5** formula isso da forma mais útil didaticamente: *"o dispositivo de AM converte a matéria-prima numa camada sólida fina ao longo do eixo x–y; subsequentemente cria uma nova camada movendo-se num intervalo especificado ao longo do eixo z, mantendo o ciclo de construção até a produção estar completa"*. Ou seja: **resolução x–y = resolução do sistema óptico/bico; resolução z = espessura de camada.**

## B.1 As etapas, o que acontece fisicamente, e a decisão do operador

As 5 fontes descrevem a mesma cadeia, com granularidade diferente. A descrição **mais completa e explícita é a de P3** (que é a única que nomeia *slicing* e geração de suportes como passo separado):

> **P3, §3.1:** "Primeiro, deve obter-se **aquisição de dados**, que pode ser feita por meio de scanners **sem contacto ou de contacto**. Geralmente usam-se técnicas como tomografia computorizada, CBCT, ressonância magnética e *laser scanning* (scanner extraoral ou intraoral). Logo depois, faz-se o **processamento de dados** com software CAD específico, onde é realizado o desenho virtual do objecto. Um **ficheiro STL** com o desenho concluído é importado para o software da impressora, onde **variáveis de construção e parâmetros para o *slicing* e para adicionar estruturas de suporte** são especificados, para gerar a informação necessária para controlar a impressora 3D. Continuando com a manufactura aditiva, cria-se o objecto usando o ficheiro *sliced* na impressora 3D. Finalmente, seguem-se o **pós-processamento, a limpeza do objecto e os procedimentos de pós-cura**, para a conclusão do processo de polimerização."

| Passo | O que acontece fisicamente | Decisão do operador | O que as fontes dizem sobre porque isto muda as propriedades finais |
|---|---|---|---|
| **1. Aquisição de dados** | Digitalização da anatomia. **P3**: scanners *non-contact* ou *contact*; CT, CBCT, MRI, laser scanning intra/extraoral. **P1**: "scanners intraorais, CBCT, ou scans laboratoriais". **P5**: "scanning intraoral, imagens de tomografia, ou scanners extraorais". Método **direto** (boca) vs **indireto** (digitalizar impressão ou modelo) — **P3** | Direto vs indireto; qual modalidade de imagem | **P5** cita 4 estudos/revisões: impressão digital ≥ convencional em exatidão; convencional é **pior** em arcadas desdentadas e implantes inclinados, enquanto o método digital não é afetado por esses fatores. **P5** (Luu et al.): *cross-mounting* digital mais exato que o convencional, mas **desvios maiores na região anterior** que na posterior. **P3** alerta: modelos ortodônticos impressos têm limitação "no momento da digitalização extraoral por falta de identificação de pontos de referência". |
| **2. CAD (desenho virtual)** | Criação do desenho do dispositivo em software CAD, ou geração a partir de scans de modelos físicos (**P1**) | Geometria, espessuras, bloqueio de retenções (*undercuts*) | **P5**, moldeiras individuais: o CAD permite "o bloqueio virtual de *undercuts* para prevenir deformação irreversível durante a remoção da moldeira". **P1** (futuro): restaurações desenhadas por IA atingem *trueness* e adaptação marginal comparáveis às desenhadas por humanos, **4–9× mais rápido**. |
| **3. Exportação para STL** | Conversão da superfície CAD numa malha triangulada. **P1**: "STL — *standard tessellation language* — o formato de ficheiro mais usado em AM desde a sua introdução **em 1987**". **P3**: os dados do scanner "são convertidos num formato STL compatível com o software". **P5**: "o desenho é convertido num formato compatível com a impressora, tal como ficheiros STL" | (nenhuma fonte discute densidade de malha / outros formatos) | **Não consta nas fontes** qualquer discussão sobre erro de tesselação, densidade de triângulos, ou formatos alternativos (3MF, AMF, PLY, OBJ). Se quiser abordar isso na aula, precisa de outra fonte. |
| **4. Orientação de construção (*build orientation*)** | Rotação do objeto no volume de construção; define a direção de empilhamento das camadas relativamente à geometria | Ângulo de construção (0°, 45°, 90°…) | **Este é o passo com melhor evidência nas fontes.** **P3** lista "**ângulo de impressão e orientação de impressão**" entre as variáveis que determinam a exatidão. **P3** cita **Shim et al. 2020** (bases de prótese em PMMA impressas): a orientação **influencia significativamente** a exatidão — 90° teve as menores taxas de erro para o **comprimento**, 45° teve as **maiores** taxas de erro para a **espessura**; e, para resistência, **0° teve a maior resistência flexural, seguido de 45° e depois 90°**. **P3** cita **Hada et al. 2020** (SLA, próteses): **45°** foi a direção com **maior precisão** vs 0° e 90°. **P3** cita **Alharbi et al. 2016a**: em SLA a orientação de impressão "influencia significativamente a resistência à compressão de resinas compostas impressas". **P5** lista "orientação de impressão" entre os fatores de impressão que determinam a resistência. → **Mensagem-chave defensável: o ângulo que optimiza exatidão dimensional NÃO é necessariamente o que optimiza resistência mecânica.** |
| **5. Geração de suportes** | Adição de estruturas sacrificiais que ancoram o objeto à plataforma e sustentam *overhangs* | Onde colocar suportes; densidade; que superfície sacrificar | **P5**: "constrói-se uma plataforma para estabilizar a peça e suportar estruturas em *overhang*". **P3** lista "**quantidade de material de suporte**" como variável de exatidão, e conta os suportes como desvantagem: "são necessários passos extra ao colocar estruturas de suporte". **P5**: os suportes geram resíduo ambiental e "os desenhos devem minimizar a necessidade de suportes". **P5** (bottom-up SLA): plataforma invertida "minimizando a necessidade de estruturas de suporte" (⚠️ ver §E). **P2**, Fig. 5A, mostra explicitamente uma coroa impressa **antes do polimento e da remoção dos suportes**. |
| **6. *Slicing*** | Fatiar o STL em camadas 2D de espessura definida; gerar o ficheiro-máquina | **Espessura de camada** | **P5**: "modelos 3D obtidos por vários métodos são divididos em **incontáveis camadas 2D** por programas de software, e os dados são transferidos para o dispositivo de AM". **P3** enuncia o *trade-off* central: o processo camada-a-camada produz o **efeito escada (*staircase effect*)**; "se a espessura de camada for ajustada para a resolução mais alta, o efeito escada pode ser reduzido, **porém o tempo de impressão do objecto aumentaria significativamente**". |
| **7. Impressão (consolidação camada-a-camada)** | Ver §C — mecanismo depende da tecnologia | Parâmetros de exposição, temperatura da câmara/resina, posicionamento na plataforma | **P3** lista as variáveis que afetam o resultado: "espessura da camada de impressão, **intensidade do laser, velocidade do laser**, ângulo e orientação de impressão, software, **contração entre camadas**, quantidade de material de suporte, procedimentos de pós-processamento". **P5** (SLA): "a qualidade das estruturas impressas depende da **cinética de cura**, influenciada por **intensidade de luz, tempo de iluminação, viscosidade da resina, funcionalidade química e aditivos** da formulação. Os **fotoiniciadores** iniciam as reações de polimerização, enquanto os **absorvedores de luz aumentam a resolução** do objeto". **P5** também lista "posicionamento dos objetos na plataforma de impressão" como fator de resistência. |
| **8. Lavagem (solvente)** | Remoção de resina não polimerizada aderente à superfície e nas concavidades | Solvente, número de banhos, tempo | **P5** é explícito e é a única fonte que nomeia o solvente: "O pós-processamento envolve **banhos sucessivos de álcool isopropílico** para eliminar resina não polimerizada, seguidos de **pós-polimerização num forno UV** para atingir as propriedades ótimas da resina. Estes passos são delineados pelo fabricante para assegurar a qualidade desejada em termos de **propriedades mecânicas e biocompatibilidade**." **P5** (mSLA): "após a impressão, a peça é lavada com álcool isopropílico para remover excesso de resina e curada sob luz UV para solidificação completa". **P5** lista "duração do pós-enxaguamento" entre os fatores pós-impressão que determinam a resistência. |
| **9. Pós-cura (*post-curing*)** | Polimerização adicional sob UV (forno) para completar a conversão monómero→polímero | Tempo, temperatura, dispositivo de cura | **Este é o passo com a ligação mais direta a *structure→property***. **P1**: "as propriedades mecânicas finais dos materiais dentários impressos, incluindo **resistência flexural, dureza e estabilidade dimensional, são fortemente influenciadas pela composição do monómero, teor de carga, **grau de conversão** e **condições de pós-cura**". **P5**: os fatores pós-impressão são "**condições de pós-cura (tempo, temperatura e dispositivo de cura)**, duração do pós-enxaguamento, técnicas de acabamento e polimento, e práticas de armazenamento". **P5** (biocompatibilidade): "um problema-chave dos polímeros é a **libertação de monómeros citotóxicos devido a polimerização incompleta**. Estes monómeros residuais podem causar reações alérgicas, irritação e sensibilização da mucosa oral, e podem até exibir efeitos genotóxicos e reprotóxicos. Estes efeitos foram ligados ao **grau de conversão monómero-polímero**, sublinhando a necessidade de melhorar essa taxa de conversão para aumentar a biocompatibilidade". Revisão sistemática de Cabrol et al. (27 estudos, 32 resinas comerciais) citada em **P5**: **a maioria das resinas 3D pós-processadas é não-citotóxica**, e "o dentista é responsável por seguir as recomendações do fabricante". **P1** (limitações): preocupações com "libertação de monómero residual, degradação polimérica e biocompatibilidade a longo prazo" requerem estudos longitudinais. |
| **10. Remoção de suportes + acabamento/polimento** | Corte mecânico manual dos suportes; alisamento das marcas | Onde e como cortar | **P5**: "as peças impressas são limpas para eliminar resina residual, e as **estruturas de suporte são removidas manualmente**". **P5** lista "técnicas de acabamento e polimento" entre os determinantes pós-impressão da resistência. **P2**, Fig. 5, ilustra a coroa "antes do polimento e remoção dos suportes". **P5** (material jetting): "embora o equipamento e materiais de MJ sejam caros, **a remoção dos materiais de suporte pode ser desafiante**"; PolyJet usa suporte fotocurável e MultiJet usa **cera** — "esta distinção impacta o processo de remoção, tornando os procedimentos de pós-processamento do PolyJet mais curtos e simples que os do MultiJet". |
| **11. Sinterização/tratamento térmico para metais e cerâmicas** | — | — | ⚠️ **NÃO CONSTA NAS FONTES.** Nenhuma das 5 fontes descreve um passo de forno de sinterização/*debinding*/alívio de tensões após SLM/DMLS, nem sinterização de zircónia após vat photopolymerization cerâmica. O mais próximo é **P3**: "limitação no fabrico de estruturas cerâmicas, pelo facto de estruturas porosas produzidas pela técnica aditiva poderem requerer **pós-processamento extensivo, o que causa contração**" (citando Denry & Kelly 2014); e **P3** lista "**distorção térmica**" como desvantagem do laser sintering. Se a aula precisar do ciclo de sinterização metálico/cerâmico, **é necessária outra fonte**. |

## B.2 Duas versões resumidas do fluxo, tal como nas figuras

- **P1, Fig. 1** (legenda literal): "Visão geral do procedimento de impressão 3D em odontologia, ilustrando **geração de ficheiro STL → manufactura aditiva → lavagem → pós-cura → a restauração dentária impressa resultante**."
- **P5, Fig. 1** (legenda literal): "Os passos sequenciais envolvidos no processo de impressão 3D para aplicações dentárias começam com **aquisição de dados por técnicas de digitalização** e progridem para **desenho virtual**, **fabricação por métodos de manufactura aditiva**, e **pós-processamento final**."

---

# C. Tabela tecnologia-a-tecnologia

Números **só** quando a fonte os enuncia; a fonte está etiquetada em cada célula.

## C.1 Categorias ISO/ASTM

**P5** e **P3** dão a lista das **7 categorias ASTM**: vat photopolymerization, binder jetting, material jetting, powder bed fusion, directed energy deposition, material extrusion, sheet lamination.
⚠️ **P3 comete um erro**: escreve a lista como "*stereolithography (SLA)*, material jetting, material extrusion (ME) ou FDM, binder jetting, powder bed fusion, sheet lamination, direct energy deposition" — substituindo a categoria correta (**vat photopolymerization**) pelo nome de **uma técnica dentro dela** (SLA). **P5 usa a nomenclatura correta.** Use P5.

**P1** classifica as tecnologias dentárias em 4 grupos: **vat photopolymerization, powder bed fusion, material extrusion, material jetting**.

---

## C.2 VAT PHOTOPOLYMERIZATION

**Mecanismo comum (P1):** "fotoiniciadores ativados por luz desencadeiam **crosslinking rápido de monómeros de resina** formando uma rede polimérica sólida". Sistemas de resina: **Bis-GMA, UDMA, TEGDMA** (dimetacrilatos), + fotoiniciadores e aditivos funcionais que regulam viscosidade, cinética de polimerização e propriedades finais (**P1**).
**P5:** "processo de criar uma estrutura polimerizando resina fotopolimérica líquida camada a camada com ajuda de luz ultravioleta a partir de uma cuba (*vat*)".
**P5:** as 4 técnicas mais comuns de vat polymerization são **SLA, mSLA, DLP e CLIP**.

### (a) SLA — Stereolithography

| Item | Conteúdo |
|---|---|
| **Mecanismo** | Feixe de **laser** focado polimeriza seletivamente a resina **ponto a ponto**, traçando o contorno da secção transversal de cada camada (**P1, P2, P5**). **P5** detalha: plataforma de construção submersa na resina líquida; **espelho de varrimento (scanning mirror)** guia o feixe UV focado para dentro do reservatório; após curar a camada, a plataforma **desce** uma distância igual à espessura de camada, permitindo que uma camada fresca de resina não curada cubra a anterior. |
| **Fonte de energia** | Laser UV (**P2**: "laser UV ou outra fonte de luz"). |
| **Configurações** | **Top-down** (plataforma desce na cuba) e **bottom-up** (plataforma invertida sobe; janela UV-transparente antiaderente) — **P5**, **P3** (Fig. 1 de P3 mostra ambas). |
| **Espessura de camada / resolução (números)** | **P5**: "entre camadas, a plataforma baixa **50 µm ou menos** para aplicações de alta resolução, ou **200 µm ou mais** para peças que requerem menor resolução". **P5**: "isto permite **resoluções de 10 µm tanto no plano x–y como no eixo z**". **P5**: "a **profundidade de cura**, que define a resolução do eixo z, é regulada pelo **fotoiniciador** e pelos **parâmetros de exposição da irradiação — comprimento de onda, potência e duração da exposição**". **P3** (citando Zhang et al. 2019): a exatidão de impressão com SLA **aumenta à medida que a espessura de camada diminui** (testadas 20, 25, 30, 50, 100 µm). |
| **Materiais aceites** | **P1** (Tabela 1): "resina fotopolimerizada, plásticos e cerâmicas". **P3**: apenas material fotopolimerizável ("*only photopolymerized material*", "*single material vat*"). |
| **Dispositivos dentários** | **P1**: modelos dentários, guias cirúrgicas, restaurações provisórias, dentes acrílicos, protetores bucais, placas de mordida. **P5**: coroas temporárias e permanentes, próteses parciais fixas, guias cirúrgicas, *templates*, modelos e *casts* diagnósticos; **goteiras/splints cirúrgicos maxilofaciais** ("SLA é comummente empregue no fabrico destes *splints* pela sua alta precisão e capacidade de trabalhar com materiais biocompatíveis"). **P3** (Tabela 2): padrões de resina (*resin patterns*), *try-in* de prótese total, coroas, goteiras oclusais. **P2**: modelos médicos, guias cirúrgicas. |
| **Limitações** | **P1**: mais lento que DLP; custo de equipamento relativamente alto; pós-processamento obrigatório (lavagem + pós-cura); restrição de materiais (só resinas poliméricas). **P5**: disponibilidade limitada de fotopolímeros; **citotoxicidade e potencial de irritação das resinas e monómeros não reagidos** devem ser cuidadosamente considerados. **P3**: caro, material caro, requer pós-cura, cuba de material único. |
| **Nota histórica de engenharia (P5)** | 1ª geração usava **espelhos galvanométricos** → *defocusing* e erros ópticos → laser fixo + mesa de translação x–y + janela de vidro transparente para controlar a espessura de camada → problema de **adesão da resina ao vidro** → desenvolvimento do sistema de **superfície livre** que imprime diretamente sobre a plataforma. |

### (b) DLP — Digital Light Processing

| Item | Conteúdo |
|---|---|
| **Mecanismo** | Projeta **a imagem inteira de uma camada de uma só vez**, curando toda a área simultaneamente (**P1**). Usa um **DMD — *digital micromirror device*** com centenas de milhares de microespelhos que direcionam seletivamente a luz (**P1, P3, P4, P5**). **P5**: os microespelhos "movem-se em duas direções e ligam/desligam milhares de vezes por segundo… isto permite às impressoras DLP **criar um modelo em *voxels* em vez de camadas**". |
| **Fonte de energia** | **P1**: projetor de luz digital UV. **P5**: "lâmpada de arco ou chip semicondutor com matriz de microespelhos". **P3**: "LED de alta potência". **P4**: tecnologia de projeção da **Texas Instruments**; comprimentos de onda **380 nm e 405 nm**; **microespelhos quadrados com aresta controlada de ≈16 micrómetros**, atuados por **forças de campo eletrostático**; a luz é focada opticamente na plataforma de construção dentro de uma cuba transparente de fotopolímero, ou numa **superfície difusa (absorvedor)**. |
| **Resolução** | **P3**: "cada espelho representa um ou mais píxeis na imagem projetada. **O número de espelhos corresponde à resolução da imagem projetada**." **P5**: "a maior desvantagem do DLP está no **tamanho de cada voxel**. Voxels maiores → resoluções mais baixas, desenhos mais 'blocados' e angulares; voxels menores → resoluções mais altas e resultados mais suaves." |
| **Números** | **P3** (Zhang et al. 2019, 3 impressoras DLP + 1 SLA, camadas de 20/25/30/50/100 µm): "para tecnologia DLP a **espessura de camada ideal é 50 µm**"; a impressora EvoDent teve a maior precisão a **50 µm**; a Form 2 (SLA) teve a menor precisão a **100 µm**. (⚠️ a mesma frase de P3 também afirma que "DLP mostrou a maior precisão de impressão com espessura de 100 µm" — contradição interna, ver §E.) |
| **Materiais** | **P1**: resina fotopolimerizada, plásticos e cerâmicas. **P2**: "**zircónia, alumina e hidroxiapatite**" — DLP processa **pasta/*slurry* de líquido fotopolimérico + cerâmica**. **P3** (Tabela 1): "*photopolymer liquid and ceramic mixture slurry*" (esta descrição está em P2 Tabela 1). |
| **Dispositivos dentários** | **P1**: coroas, pontes, guias cirúrgicas, modelos ortodônticos. **P2**: guias cirúrgicas, alinhadores invisíveis, modelos dentários, **implantes impressos diretamente**; **P2** cita Moin et al. — "sistemas DLP podem fabricar preemptivamente um **implante análogo-radicular (RAI) monobloco em zircónia**" (via P1). **P5**: coroas e próteses parciais fixas temporárias **e permanentes** clinicamente aceitáveis, dispositivos protéticos removíveis; modelos *master* e segmentados (crítico em implantologia para posicionar análogos laboratoriais). **P3**: padrões de resina, *copings* para fundição, *mock-ups*, coroas. |
| **Limitações** | **P2** (Tabela 1): "tamanho de impressão limitado e temperatura de operação". **P5**: "os projetores emitem sobretudo luz de espectro largo, com **porção significativa abaixo de 400 nm, que é menos eficaz para ativar os fotoiniciadores**". **P1**: requer lavagem e pós-cura tal como SLA. |
| **Vantagem física distintiva (P5)** | "DLP é **menos propenso à inibição pelo oxigénio** que o SLA, porque a camada de resina é polimerizada consistentemente **no fundo da cuba**, reduzindo a exposição direta ao ar ambiente." |

### (c) LCD / mSLA (*masked stereolithography*, também "DUP")

| Item | Conteúdo |
|---|---|
| **Mecanismo** | **P1**: "emprega um **painel LCD como máscara** para bloquear ou transmitir seletivamente a luz de um *array* de LEDs, para curar a resina. O painel LCD permite **exposição paralela** da superfície de resina **sem necessidade de lentes ópticas ou sistemas de projeção complexos**, resultando num desenho de impressora simplificado." **P5**: "mSLA usa **LEDs** como fonte de luz; a luz LED é direcionada através de um LCD e cada camada é curada por **técnica de mascaramento**; o ecrã LCD **bloqueia seletivamente as áreas indesejadas**". **P4**: "**DUP — direct UV printing** — expõe a plataforma **pixel a pixel** via ecrãs LCD". |
| **Fonte de energia (números)** | **P4**: "para retroiluminação, tipicamente utilizam-se **LEDs UV com faixa de comprimento de onda de 395 a 405 nm**". |
| **Resolução** | **P5**: "a resolução do mSLA depende do **tamanho do píxel do ecrã LCD**; contudo, pode ocorrer **perda prática de resolução devido à difusão da luz**". **P5**: "a precisão na impressão LCD é parcialmente compensada por um algoritmo, mas a tecnologia sofre de **problemas de convergência óptica**". |
| **Custo (números)** | **P5**: "dependendo da marca, o custo das impressoras LCD é **2 a 10 vezes menor** que o das impressoras SLA ou DLP". |
| **Dispositivos** | **P1**: modelos diagnósticos, restaurações provisórias. **P5**: restaurações protéticas, com boa qualidade de superfície. |
| **Limitações** | **P1**: "o **rearranjo das moléculas de cristal líquido sob campo elétrico pode ser incompleto durante comutação rápida**, levando a ligeira **fuga de luz (*light leakage*)** e precisão de cura reduzida. Consequentemente, impressoras LCD geralmente exibem **exatidão e resolução inferiores às DLP**". **P5**: "a alta intensidade luminosa dos ecrãs LCD pode causar **sobreaquecimento, levando a degradação rápida do ecrã**"; "menos ergonómicas, dependem de software *open-source*, sem funções automatizadas de impressão e pós-processamento; **os parâmetros específicos de impressão para cada resina nem sempre são fornecidos e podem ter de ser determinados pelo utilizador**"; **falta de perfis de impressão certificados/otimizados para uso dentário**. **P5**: "a exatidão da impressão LCD **não foi extensivamente estudada**". |

### (d) CLIP — Continuous Liquid Interface Production (só em P5)

- **Mecanismo:** impressão **contínua**, sem separação camada-a-camada — "o material fotossensível é iluminado com transições suaves do modelo à medida que a mesa levanta continuamente o modelo da cuba de resina". Usa **LEDs + oxigénio**. Existe uma **"dead zone"** entre uma **janela permeável ao oxigénio** e a superfície de cura; essa zona "previne a adesão à janela e **inibe a fotopolimerização radicalar**".
- **Números:** "a espessura mínima da *dead zone* para impressão baseada em CLIP foi determinada como estando **em torno de 20 a 30 µm**. Como a *dead zone* é influenciada pelos parâmetros de impressão, trabalhar abaixo desse limiar pode aumentar a probabilidade de defeitos causados por adesão à janela."
- **Requisitos:** "alta reatividade da resina e alta intensidade de luz são cruciais".
- **Limitações:** "particularmente com **superfícies horizontais grandes e planas**. A combinação de resina viscosa e movimento contínuo gera **forças de sucção significativas** entre a membrana do fundo e a impressão durante a elevação, levando a **deformação da membrana e distorção do modelo**."
- **Aplicações dentárias específicas: não constam nas fontes.**

---

## C.3 MATERIAL JETTING (PolyJet / MultiJet / MJP / "PP")

| Item | Conteúdo |
|---|---|
| **Mecanismo** | **P5**: "deposita **gotículas minúsculas de material** sobre a plataforma através de uma **cabeça de impressão**, seguidas de **fotopolimerização intermédia**". Sequência exata (**P5**): (1) **aquecer a resina líquida a 30 °C e 60 °C** [sic — presumivelmente *entre* 30 e 60 °C] para atingir a viscosidade ótima; (2) a cabeça move-se e deposita gotículas nas localizações requeridas; (3) a cabeça **equipada com luz UV cura** o fotopolímero depositado, formando a primeira camada; (4) a plataforma **desce** a altura de uma camada; repetir. **P1**: "ejeção precisa de um fotopolímero líquido sobre a plataforma, **instantaneamente curado por luz**". **P3**: "resina líquida injetada seletivamente a partir de **centenas de bicos** e polimerizada com luz UV, **permitindo o uso de materiais diferentes que possibilitam cores ou durezas (rigidez) diferentes na mesma impressão**". **P4**: "similar à impressão 2D… cura numa fase de exposição intermédia, construindo o produto camada a camada". |
| **Fonte de energia** | UV na própria cabeça de impressão (**P5**). |
| **Espessura de camada (número)** | **P5**: "a espessura de camada típica em MJ é **aproximadamente 16 a 32 µm**". |
| **Materiais** | **P5**: "acrílicos, fotopolímeros, **metais e cerâmicas**, com cores e propriedades físicas diversas". **P1**: resina fotopolimerizada. **P4**: multi-material Stratasys — "**5 graus distintos de material em mais de 500.000 cores**". **Suporte:** PolyJet usa **suporte fotocurável**; MultiJet usa **cera** (**P5**). |
| **Qualidades** | **P5**: "propriedades mecânicas **homogéneas**, exatidão dimensional, excelente qualidade de superfície, baixa rugosidade de superfície". **P4**: "tempo de construção muito rápido e grande precisão". |
| **Dispositivos** | **P1**: modelos de alto detalhe, *scaffolds*, guias cirúrgicas; guias endodônticas (**P1** menciona SLA/DLP/PolyJet para guias endodônticas). **P5**: modelos dentários, coroas temporárias; **P5 Tabela 3** lista MED610 (Stratasys, PolyJet) para **guia cirúrgica**, VisiJet Crystal e Visijet M3 Stoneplast (3D Systems, MultiJet) para **réplica dentária de ensino** e **guias de injeção de compósito**, VeroWhitePlus (PolyJet) para réplica dentária/guia cirúrgica. **P3**: *try-in* de prótese total, coroa e modelo dentário, coroas, *copings* e ponte cerâmica de 3 elementos (Silva et al.). |
| **Limitações** | **P5**: "as suas propriedades mecânicas limitadas reduzem a adequação para aplicações orais"; "**entupimento frequente das cabeças de impressão** coloca desafios de manutenção" e "necessidade de manutenção regular"; equipamento e materiais **caros**; **remoção do material de suporte pode ser difícil**; "fotopolímeros tendem a **degradar-se ao longo do tempo, perdendo as suas propriedades mecânicas**"; **tempo de produção mais longo** que vat photopolymerization. **P3**: "grande tolerância, baixa resistência mecânica, acabamento de superfície rugoso, **as camadas podem colapsar durante o processo de construção**". |

---

## C.4 POWDER BED FUSION (SLS / SLM / DMLS)

| Item | SLS | SLM / DMLS |
|---|---|---|
| **Mecanismo** | **P2**: "feixe laser controlado para **sinterizar ou fundir** materiais em pó camada a camada". **P1**: "usa um laser para **sinterizar** pós — metal, polímeros e cerâmicas — em estruturas sólidas". | **P2**: "utiliza um **feixe laser de alta energia para fundir e solidificar seletivamente pó metálico camada a camada**, com base em modelos CAD 3D". **P1**: "SLM foi concebido para fabricação metálica, usando feixes laser de alta energia para **fundir completamente** os pós metálicos, permitindo produzir estruturas metálicas **densas** e complexas." **P3**: "SLM baseia-se na **fusão** do pó em vez da sua sinterização" (Vandenbroucke & Kruth 2007). |
| **Fonte de energia** | **P3**: "feixe laser de CO₂ que traça um caminho no leito de pó" (⚠️ ver §E). | Laser de alta energia (**P1, P2**). |
| **Materiais** | **P1** (Tab. 1): plásticos, cerâmicas e metais; pós como **alumide, poliamida, poliuretano**. **P2**: polímeros, metais, cerâmicas e compósitos. **P3**: resina, metais e cerâmicas. | **P1** (Tab. 1): **titânio, ligas de titânio, cobalto-crómio, aço inoxidável**. **P2**: aço inoxidável, pó de ferro, etc. **P3**: metais. |
| **Densidade / propriedades** | **P1**: "alta resistência mecânica e durabilidade". | **P1**: "**excelente** resistência mecânica". **P3**: "é possível objeto impresso com **100% de densidade**". **P4**: "estruturas de coroas e pontes em metal não-precioso obtidas por laser sintering têm características mecânicas e físicas **semelhantes às restaurações fundidas**" (Fischer et al. 2008). |
| **Dispositivos dentários** | **P1**: modelos cirúrgicos, protótipos de estruturas (*frameworks*), *scaffolds*. **P2**: moldes e próteses leves de alta precisão. **P3**: SLM — coroas e estruturas metálicas, **estruturas de próteses parciais removíveis**. | **P1**: implantes, placas maxilofaciais, *frameworks*, coroa metálica. **P2**: **malhas de titânio personalizadas para aumento ósseo em implantologia**; restaurações metálicas de alta precisão. **P3**: DMLS — estruturas de próteses fixas de 3 elementos em Co-Cr, *copings* Co-Cr. **P4**: "para o fabrico de **coroas e pontes em CoCr, o laser sintering é hoje o procedimento aceite**"; próteses parciais removíveis monobloco (*one-piece cast denture*) diretamente em liga Co-Cr. |
| **Limitações** | **P2**: "velocidades de impressão lentas e **pós-processamento complexo**"; custo de equipamento mais alto. **P3**: caro; **distorção térmica**. | **P2**: "materiais limitados e demorado"; custo de fabrico mais alto; "a dependência de matérias-primas metálicas **limita o seu âmbito**". **P3**: caro; distorção térmica. |
| **Fluxo direto vs indireto (P4)** | — | **P4** é a única fonte que faz esta distinção explícita, muito útil didaticamente: no **processo indireto** as estruturas são **primeiro impressas em cera ou plástico** e depois convertidas por **fundição por cera perdida (*lost-wax casting*)**; o **processo direto** usa laser sintering para converter **diretamente** o dataset CAD num produto em liga Co-Cr. Vantagens do laser sintering citadas: transferência de dados digitais mais fácil, tempos de produção mais curtos, **uniformidade**. **P4**: a AM de ligas metálicas é usada eficazmente na indústria dentária **desde 2002**. |

---

## C.5 BINDER JETTING

Cobertura muito fina — **apenas P3** e (na lista de categorias ASTM) **P5**.

| Item | Conteúdo |
|---|---|
| **Mecanismo (P3)** | "Material de gesso, tipo leito de pó, é frequentemente usado. Uma **cabeça de impressão fornece cor e um aglutinante (*binder*), camada a camada**. **O pó suporta a peça.** A peça acabada geralmente **necessita de algum tipo de pós-processamento porque a peça é bastante frágil**." |
| **Fonte de consolidação** | **Aglutinante químico**, não energia térmica/luminosa. |
| **Materiais** | **P3**: pó (gesso). |
| **Vantagens (P3)** | Fabricação rápida; baixo custo de material; **material multicolorido é possível**. |
| **Limitações (P3)** | Grande tolerância; **baixa resistência mecânica**; acabamento de superfície rugoso. |
| **Dispositivos (P3)** | **Mufla/flask individualizada para prótese total** (Sun, Lü & Wang 2009); **modelos de dentes** (Chang, Lo & Jiang 2015). |
| **Espessura de camada / exatidão** | **Não consta nas fontes.** |
| Nota | Ponto pedagógico útil: é a única das cinco famílias em que **o pó não fundido funciona ele próprio como suporte** — logo, não há estruturas de suporte a remover, mas a peça sai **"verde"/frágil**. (O termo "*green part*" **não é usado** por nenhuma das 5 fontes — ver §D.) |

---

## C.6 MATERIAL EXTRUSION (FFF / FDM)

| Item | Conteúdo |
|---|---|
| **Mecanismo** | **P2**: "aquece e extrude materiais termoplásticos (como PLA e nylon) através de um **bico fino**, depositando-os camada a camada". **P3** (Fig. 2, legenda): "a posição do bico move-se no plano **x–y** para criar o padrão desejado. Uma vez completada uma camada, o bico move-se para cima ao longo do **eixo z** uma distância predefinida para imprimir a camada seguinte." **P1**: "extrusão de filamento termoplástico". |
| **Materiais** | **P1**: termoplásticos — **PLA, ABS, PEEK, nylon**; nota que "PEEK tem alta resistência e durabilidade". **P2**: PLA, nylon. |
| **Dispositivos** | **P1**: modelos educacionais, guias cirúrgicas, moldeiras individuais. **P2**: próteses personalizadas, aparelhos, implantes. |
| **Limitações** | **P1**: "resolução e qualidade de superfície comparativamente mais baixas **limitam a sua aplicação em fluxos dentários exigentes em precisão**". **P2**: "menor exatidão dimensional, acabamentos de superfície rugosos, e preocupações quanto a durabilidade e segurança oral"; ineficiente para produção em larga escala. **P3**: "baixa precisão e velocidade, e a **espessura do bico do material**, que pode afetar a qualidade do objeto impresso"; classifica FDM como uma das máquinas ainda **limitadas para uso em odontologia**. **P4** (o mais assertivo): "devido a estarem **limitados a resoluções mais baixas e a necessitarem de períodos de impressão longos**, os métodos de material extrusion (MEX) como **FFF e FDM são atualmente menos relevantes no mercado dentário**." |
| **Vantagem** | **P2**: custo-efetivo (equipamento e materiais baratos); "alta eficiência e alta utilização de material"; **P2** e **P1** apontam-no como opção **económica para pequenos lotes**. |

---

## C.7 Hierarquia de escolha, segundo as fontes

- **P1 (2026)**: "vat photopolymerization — SLA, DLP e LCD — são as mais amplamente aplicadas devido à sua **alta exatidão** e adequação aos materiais dentários"; a revisão foca-se nelas por serem "as mais adotadas atualmente em odontologia devido à sua exatidão superior, resolução fina e compatibilidade com resinas dentárias".
- **P4**: "do ponto de vista tecnológico e financeiro, **SLA, DLP e MJT** parecem ser as tecnologias mais interessantes para a indústria dos plásticos."
- **P3 (2020)**: "em odontologia os métodos mais comuns são: **SLA, material jetting, binder jetting e laser sintering**." → note-se a **deriva temporal** de 2020 para 2025/26 (§E).
- **P4** introduz ainda **"hybrid manufacturing"**: "mistura de fases aditivas e subtrativas… com o objetivo de fundir a **exatidão da fresagem CNC** com a **eficiência da manufatura aditiva**. As características dos objetos produzidos por procedimentos híbridos incluem **estruturas de superfície melhoradas, maior precisão de adaptação e custos reduzidos**." Exemplos citados: design digital + impressão 3D combinada com prensagem cerâmica analógica; laser sintering combinado com fresagem CNC.

---

# D. Terminologia que os alunos confundem — definições **como as fontes as usam**

### 1. Aditivo vs subtrativo
- **P1**: "Ao contrário das técnicas de manufatura **subtrativa** convencionais, **onde material é removido de um bloco sólido** para atingir a forma desejada, a manufatura **aditiva constrói objetos camada a camada diretamente a partir de um modelo digital 3D**, permitindo o fabrico de geometrias complexas com alta precisão e **desperdício mínimo de material**."
- **P3**: "O processo de manufatura subtrativa baseia-se na **fresagem** do material, como no sistema CAD/CAM. O processo de manufatura aditiva… baseia-se na **adição** do material… criando objetos **uma camada de cada vez**." Limitações do subtrativo segundo **P3**: "grande perda de material durante a fresagem, **espessura limitada da restauração**, falta de precisão no nível de detalhe **devido ao tamanho da broca de fresagem**, e alto custo de aquisição e manutenção do equipamento."
- **P3** acrescenta a vantagem geométrica central do aditivo: "pode criar **detalhes finos, tais como *undercuts*, vazios e geometrias internas complexas**, que o método subtrativo limita."
- **P5, Tabela 1** (quadro comparativo formal, com números): desperdício (**"poupanças de material reportadas de até 95–98%**, com resina e pó não usados recicláveis" vs "resíduo significativo… frequentemente não reutilizável"); tempo ("**mais rápido para desenhos complexos, sobretudo ao produzir múltiplos itens em simultâneo — ex.: até 20 restaurações impressas numa sessão**"); custo ("**até 8–10 vezes mais barato** para materiais como resina composta comparado com PMMA fresado ou dissilicato de lítio"); customização; impacto ambiental.
- **P4** contrapõe honestamente: "embora as tecnologias aditivas estejam a tornar-se cada vez mais populares, os **processos subtrativos historicamente produziram altos níveis de produtividade e exatidão de adaptação**."
- **P4** dá também um argumento *structure→property* forte: "ao longo do processo de construção, as **técnicas aditivas oferecem o benefício importante de permitir o controlo individual de propriedades** — tanto mecânicas como cosméticas. Em contraste, **nos procedimentos subtrativos essas propriedades são determinadas pelo bloco de fresagem já criado.**"

### 2. Rapid prototyping vs Additive manufacturing — ⚠️ **as fontes divergem** (ver §E)
- **P3** trata-os como **sinónimos**: "O processo de manufatura aditiva, **também conhecido como rapid prototyping**…"; e "o processo de manufatura aditiva, **também chamado impressão 3D ou rapid prototyping**, é definido como…".
- **P3** também dá a leitura histórica correta: "A impressão 3D **originou-se do rapid prototyping**, que é a produção rápida do modelo por manufatura aditiva em camadas. Foi um processo que começou a ser usado em **1980**, para o fabrico de **protótipos, modelos e moldes de fundição**."
- **P4**: "**O rapid prototyping era o uso primário das impressoras 3D na época**" (anos 1980).
- **P1**: Kodama (1981) descreveu "um **sistema de rapid prototyping** baseado no princípio da fotopolimerização".
- **Leitura defensável para a aula:** *rapid prototyping* = a **aplicação histórica original** (produzir protótipos não-funcionais rapidamente); *additive manufacturing* = o **termo normativo ISO/ASTM** para o processo, hoje usado para fabricar **dispositivos finais funcionais**. Equipará-los, como faz P3, é impreciso.

### 3. Green part / peça verde
**NÃO CONSTA NAS FONTES.** Nenhuma das 5 usa o termo. O conceito mais próximo é **P3** sobre binder jetting: "a peça acabada geralmente necessita de algum tipo de pós-processamento porque a **peça é bastante frágil**"; e **P5**: as estruturas de vat polymerization "**requerem tratamento de pós-processamento**" antes de atingirem "as propriedades ótimas da resina".

### 4. Degree of conversion (DoC / grau de conversão)
- **P1** lista **"degree of conversion"** na sua tabela de abreviaturas (**DoC**) e afirma: "as propriedades mecânicas finais dos materiais dentários impressos — **resistência flexural, dureza e estabilidade dimensional** — são fortemente influenciadas por **composição do monómero, teor de carga, grau de conversão e condições de pós-cura**."
- **P5** usa a formulação biológica: "**grau de conversão monómero-para-polímero**"; monómeros residuais por polimerização incompleta → "reações alérgicas, irritação e sensibilização da mucosa oral, e podem até exibir efeitos genotóxicos e reprotóxicos"; "sublinhando a **necessidade de melhorar essa taxa de conversão para aumentar a biocompatibilidade da resina**".
- **Nenhuma das 5 fontes define DoC operacionalmente** (ex.: % de duplas ligações C=C convertidas, medido por FTIR). Isso **não consta nas fontes**.

### 5. Anisotropia
⚠️ **O termo "anisotropia/anisotropic" NÃO aparece em nenhuma das 5 fontes.** Mas o **fenómeno** está bem documentado em **P3**, sob o rótulo de "efeito da orientação de impressão":
- **P3**: "as propriedades mecânicas dos materiais de impressão podem ser afetadas pela **orientação de impressão**, dependendo do método aditivo usado. Por exemplo, no método SLA a orientação de impressão **influencia significativamente a resistência à compressão** de resinas compostas impressas (Alharbi et al. 2016a)."
- **P3** (Shim et al. 2020, base de prótese PMMA): "amostras impressas a **0° tiveram a maior resistência flexural, seguidas de 45° e 90°**."
- **P5** confirma indiretamente: "orientação de impressão" é listada entre os fatores de impressão que determinam a resistência.
- **Contraponto (P5)**: SLA "oferece… **forte ligação química entre camadas, resultando em boa resistência no eixo z**" — que é, na prática, uma afirmação de **isotropia**. Isto **contradiz** P3 (ver §E).
- **Sugestão para a aula:** pode introduzir o termo *anisotropy* como o nome correto do fenómeno, mas deve ser transparente de que o **termo** vem de si/de outra fonte e que **os dados de suporte nestes 5 papers** são os de Alharbi 2016 e Shim 2020 citados por P3.

### 6. Trueness vs precision vs accuracy — ⚠️ ponto de risco
**Só P3 define os três termos**, e a sua definição de "precision" está **mal formulada**:
> **P3, §3.4 (tradução literal):** "**Resolução** é específica de cada tecnologia e impressora, e é definida em cada eixo x, y e z em **µm ou dpi**, onde o **eixo z normalmente corresponde à espessura de camada**. **Precisão** é a função de uma impressora 3D fabricar objetos com dimensões 3D exatas, **ou quão próximos os objetos impressos estão uns dos outros**. E **veracidade** [*veracity*, i.e. **trueness**] é a **discrepância entre as dimensões reais do objeto desejado e o objeto impresso**." (Puebla et al. 2012)

Comentários:
- A definição de **trueness** ("veracity") em P3 está correta e é utilizável: **desvio face ao desenho CAD de referência**.
- A definição de **precision** em P3 é **híbrida e incorreta na primeira metade**: "fabricar objetos com dimensões 3D exatas" é *trueness*, não *precision*. Só a **segunda metade** ("quão próximos os objetos impressos estão uns dos outros") é a definição correta de precision = **reprodutibilidade entre réplicas**.
- **P3 nunca define "accuracy"**, mas usa a palavra profusamente (e a expressão "accuracy and veracity" sugere que a trata como termo guarda-chuva).
- **Nenhuma fonte cita ISO 5725** (accuracy = trueness + precision). Isso **não consta nas fontes**. Se quiser ensinar a definição normativa, precisa de outra referência. **P3** cita porém Ender & Mehl 2013, *"A new method of measuring trueness and precision"* (J Prosthet Dent) — é a citação certa a puxar.
- **P5** usa os termos de forma consistente com a norma mas sem os definir: "para volumes de impressão menores, **DLP teoricamente atinge maior *trueness* que SLA** devido à sua projeção de alta resolução em superfícies pequenas, ultrapassando a resolução do laser SLA. Contudo, **SLA é geralmente considerado mais *preciso* que DLP e LCD**, embora essa precisão impacte primariamente o **acabamento de superfície** e não a adaptação ou a qualidade de inserção."

### 7. Resolução vs exatidão
- **P3** dá a definição de resolução (acima): grandeza **da máquina**, em µm ou dpi, por eixo; **z ≈ espessura de camada**.
- **P5** mostra por que resolução ≠ exatidão: no mSLA "a resolução depende do tamanho do píxel do LCD; contudo, pode ocorrer **perda prática de resolução devido à difusão da luz**". No DLP, a resolução é ditada pelo **tamanho do voxel**.
- **P3** enuncia a lista completa de fatores que separam resolução nominal de exatidão real: "espessura da camada, intensidade do laser, velocidade do laser, ângulo e orientação de impressão, software, contração entre camadas, quantidade de material de suporte, procedimentos de pós-processamento… bem como as configurações apropriadas destes parâmetros"; e ainda "**a precisão é influenciada pelas formas ou geometrias a replicar, pelos métodos de fabrico e pelos materiais**".

### 8. Efeito escada (*staircase effect*)
- **P3** (única fonte, com figura dedicada): "é possível observar a **interposição não homogénea das camadas impressas causando um efeito visível na superfície do modelo impresso, denominado efeito escada**. Impressoras com este tipo de limitação são **inadequadas para fabricar espécimes de uso dentário que requeiram alta precisão**… se a espessura de camada for ajustada para a resolução mais alta, o efeito escada pode ser reduzido, **porém o tempo de impressão aumentaria significativamente**."

### 9. Voxel
- **P5**: DLP "cria um modelo em **voxels** em vez de camadas"; "voxels maiores → resoluções mais baixas, desenhos mais blocados e angulares; voxels menores → resoluções mais altas e resultados mais suaves".

---

# E. Contradições e afirmações fracas — sinalizadas explicitamente

### E.1 Contradições **entre** os papers

**(1) SLA precisa ou não de pós-processamento?**
- **P1**: entre as limitações do SLA está "**passos de pós-processamento obrigatórios, incluindo lavagem e pós-cura**".
- **P5** (§SLA): "o sistema de fotopolimerização inicialmente utilizado oferece vantagens tais como resolução aumentada, **superfícies lisas que frequentemente não requerem pós-processamento**…"
- ➜ **Contradição direta**, e **P5 contradiz-se a si própria** três páginas depois: "as estruturas 3D produzidas com vat polymerization **requerem tratamento de pós-processamento**… banhos sucessivos de álcool isopropílico… seguidos de pós-polimerização em forno UV."
- **Para a aula:** a lavagem + pós-cura são **obrigatórias** em vat photopolymerization (posição de P1, e da própria P5 no §3). A frase de P5 no §2.1 refere-se, quando muito, ao **acabamento de superfície** (não precisar de polimento), não à polimerização.

**(2) As camadas em SLA são bem ligadas (isotropia) ou a orientação muda a resistência (anisotropia)?**
- **P5**: SLA tem "**forte ligação química entre camadas, resultando em boa resistência no eixo z**".
- **P3**: em SLA, "a orientação de impressão **influencia significativamente a resistência à compressão**" (Alharbi 2016a) e as amostras a **0° tiveram maior resistência flexural que 45° e 90°** (Shim 2020).
- ➜ Incompatíveis. **A evidência experimental (P3, dois estudos independentes) prevalece sobre a afirmação genérica de P5.** A resistência **é** dependente da direção.

**(3) Qual tecnologia é mais exata: SLA, DLP ou LCD?**
- **P1**: "impressoras LCD geralmente exibem **exatidão e resolução inferiores às DLP**"; SLA "geralmente mais lento que DLP" mas com "alta exatidão".
- **P5**: "para volumes de impressão menores, **DLP teoricamente atinge maior trueness que SLA**"; "contudo, **SLA é geralmente considerado mais preciso que DLP e LCD**"; "**LCD aparenta ser menos exato que DLP, mas a exatidão da impressão LCD não foi extensivamente estudada**".
- ➜ Não é uma contradição factual estrita (trueness vs precision vs volume de construção), mas **a literatura não suporta um ranking simples**. **Ensine como dependente de: volume de construção, tamanho do voxel/pixel, e do desfecho medido (trueness vs precision vs surface finish).** A ressalva de P5 ("LCD não extensivamente estudado") é a afirmação mais honesta das cinco fontes.

**(4) Qual é a espessura de camada ideal? — P3 contradiz-se dentro do mesmo parágrafo**
> **P3**: "concluíram que **para tecnologia DLP a espessura de camada ideal é 50 µm** e a exatidão de impressão com SLA aumentou com a diminuição da espessura de camada. Foi também mostrado que **a tecnologia DLP mostrou a maior precisão de impressão com uma espessura de camada de 100 µm**, e o tipo de impressora EvoDent teve a maior precisão com 50 µm…"
- ➜ "**ideal = 50 µm**" e "**maior precisão a 100 µm**" no mesmo parágrafo. **Não use estes números como afirmação isolada na aula.** Se quiser o número, cite o estudo primário (Zhang ZC, Li, Chu & Shen, 2019) diretamente.

**(5) Rapid prototyping = AM?**
- **P3**: sim, sinónimos. **P4** e **P1**: rapid prototyping foi o **uso original** dos equipamentos. ➜ Prefira a leitura histórica; a equiparação de P3 é imprecisa.

**(6) O que domina o mercado dentário?**
- **P3 (2020)**: "SLA, material jetting, **binder jetting** e laser sintering".
- **P1 (2026)** e **P5 (2025)**: **vat photopolymerization domina**; binder jetting não é sequer discutido.
- ➜ **Não é uma contradição, é deriva temporal** — mas se apresentar as duas listas lado a lado sem datar, os alunos ficam confusos. **Date sempre a afirmação.**

**(7) O bottom-up SLA "minimiza a necessidade de suportes"?**
- **P5**: dispositivos bottom-up "**apresentam uma plataforma UV-transparente antiaderente e elevam gradualmente a plataforma invertida durante o processo, minimizando a necessidade de estruturas de suporte**".
- ➜ **Afirmação fraca / provavelmente errada.** Na prática o bottom-up é a configuração que **mais** depende de suportes (a peça fica suspensa e sujeita a forças de descolamento). A própria P5 descreve, para o CLIP (também bottom-up), "**forças de sucção significativas… levando a deformação da membrana e distorção do modelo**". **Não repita esta afirmação na aula.**

**(8) Material jetting elimina a pós-polimerização?**
- **P5**: "seguidas de fotopolimerização intermédia. **Este método elimina a necessidade de pós-polimerização** [50]."
- ➜ Afirmação de fonte única, não corroborada por nenhuma outra das 5 fontes, e em tensão com a própria P5 quando diz que os fotopolímeros MJ "tendem a degradar-se ao longo do tempo" e que a **remoção do suporte é difícil**. Trate como característica **distintiva reivindicada**, não como facto estabelecido.

### E.2 Erros e afirmações fracas **dentro** de papers individuais

**(9) P1, Tabela 1 — erro de copy-paste na biocompatibilidade do SLM.**
A linha do SLM lista materiais "titânio, ligas de titânio, cobalto-crómio, aço inoxidável" mas descreve a biocompatibilidade como "**Good biocompatibility for polymer-based materials**" — exatamente o mesmo texto da linha do SLS. **Não reproduza a tabela de P1 tal como está.**

**(10) P3 — descrição do laser sintering conflacionada e provavelmente errada.**
> "Em SLS/DMLS, as camadas são construídas sequencialmente **fundindo partículas de pó usando um feixe laser de CO₂**… Em cada camada, o laser **eleva a temperatura até ao ponto de fusão, o que funde as partículas de pó**. O processo repete-se… **SLM baseia-se na fusão do pó em vez de o sinterizar.**"
- Problemas: (a) descreve o SLS como **fusão**, e depois diz que o que distingue o SLM é… a fusão — **inconsistência interna**; (b) atribui **laser de CO₂** também ao **DMLS** (metais), quando o CO₂ é típico do SLS de polímeros. Use a formulação de **P1**, que é limpa: **SLS sinteriza; SLM funde completamente → peças densas.**

**(11) P3 — nomeia a categoria ASTM errada** ("stereolithography" em vez de "vat photopolymerization"). Use P5.

**(12) P3, Figura 1 — legenda internamente contraditória.**
> "Esquema de dois tipos de abordagens SLA. **(A) Bottom-up setup. No setup top-down (B), cada camada recém-fabricada fica por baixo das camadas anteriores e a polimerização do material fotossensível é realizada por irradiação a partir de baixo.**"
- Descrever "irradiação a partir de baixo" e "camada nova por baixo das anteriores" como **top-down** é o inverso da convenção. **Se recriar esta figura, corrija os rótulos.**

**(13) P5 — "aquecer a resina líquida a 30 °C e 60 °C"** (material jetting). Frase mal construída; presumivelmente "entre 30 e 60 °C". Cite como intervalo aproximado ou não cite.

**(14) P5 — números de resultado cirúrgico sem estudo identificável.**
> "estes *splints* personalizados **aumentam a exatidão cirúrgica em até 30%**, minimizando desvios… as durações operatórias foram **reduzidas em média 15–25%**… **mais de 90% dos pacientes** reportaram conforto e satisfação…" [refs 174–176]
- São três números clínicos precisos, atribuídos em bloco a três referências, sem desenho de estudo, sem n, sem tipo de cirurgia, e **sem qualquer verificação cruzada nas outras 4 fontes**. **Classificação: afirmação fraca.** Não os cite como facto na aula.

**(15) P1 — dois resultados diretamente opostos apresentados como concordantes (mantenedores de espaço pediátricos).**
> "Watson et al. mostraram que **a retenção de mantenedores de espaço impressos foi significativamente MENOR** comparada com os tradicionais [166]. **Thakur et al. também confirmaram** que mantenedores impressos… mostraram **taxa de retenção impressionante de 77,4% aos 9 meses vs 51,6% dos convencionais** [167]."
- O "também confirmaram" liga dois achados **opostos**. Erro editorial de P1. **Se usar mantenedores de espaço como exemplo, apresente-o como evidência conflituante.**

**(16) P1 — afirmações clínicas de efeito grande com base em estudo único.**
- "Liu et al. confirmaram que coroas interinas impressas demonstraram **gaps marginais 4,3× menores** que as produzidas convencionalmente e reduziram o tempo de fabricação **de 10 min para 5 min**" — efeito muito grande, estudo único, condições não descritas.
- "Hougne et al. reportaram **taxa de sobrevivência de 98%** de coroas temporárias impressas" — **estudo de coorte retrospetivo**, sem duração declarada em P1.
- "guias fabricadas de resinas biocompatíveis que fornecem excelente exatidão dimensional, **frequentemente dentro de aproximadamente 0,2 mm da trajetória planeada**" — referência única [110], sem definir se é desvio no ápice, na entrada, ou angular.
- ➜ Utilizáveis como **ilustração**, não como magnitude de efeito estabelecida.

**(17) P2 — revisão sem qualquer parâmetro quantitativo.**
P2 não fornece **um único número** de espessura de camada, resolução, exatidão, comprimento de onda ou propriedade mecânica em todo o artigo. Serve para *mecanismo qualitativo* e *aplicações*, não para números.

**(18) P4 — proveniência não verificável + fonte única.**
Sem revista, sem DOI, sem ano; referências 1 e 3 são o mesmo artigo (Schweiger 2021) e boa parte do texto sobre SLA/DLP/MJT/hybrid manufacturing decalca esse artigo. **Recomendação: substituir P4 por Schweiger J, Edelhoff D, Güth JF.** *J Clin Med* 2021;10(9):2010 — que é a fonte real, peer-reviewed e citável.

**(19) P4 — conclusão especulativa apresentada como previsão.**
> "A tecnologia aditiva irá indubitavelmente eventualmente substituir vários passos, se não todo o processo humano de fabrico de próteses."
- Opinião sem evidência. Contrastar com a posição mais sóbria de **P5**: "os fluxos laboratoriais ainda exigem *design*, impressão e acabamento qualificados, **limitando a acessibilidade a muitos clínicos**"; e "**os materiais ideais para próteses impressas ainda estão por desenvolver**".

**(20) Lacuna comum às 5 fontes (importante declarar em aula):**
- **P1**: "a literatura atual demonstra **variabilidade metodológica considerável**, incluindo diferenças em tipos de impressora, formulações de material, parâmetros de impressão e protocolos de pós-processamento. Esta heterogeneidade **torna difíceis as comparações diretas entre estudos** e realça a necessidade de protocolos experimentais padronizados."
- **P3**: "devido aos diferentes protocolos, tecnologia usada, parâmetros de impressora e material polimérico usado, **é difícil comparar os resultados dos estudos**."
- **P5**: "ausência de **protocolos de teste padronizados** e de diretrizes regulatórias… **estudos clínicos de longo prazo limitados**… os dados científicos sobre materiais imprimíveis para **restaurações permanentes permanecem escassos**."
- **P2**: "os materiais que satisfazem a aplicação clínica são ainda **limitados**… o pós-processamento é **complexo**… é um longo caminho do laboratório à clínica."
- ➜ **As quatro fontes peer-reviewed convergem na mesma limitação.** Esta é a afirmação mais defensável que pode fazer sobre o estado da evidência.

---

# F. Figuras/diagramas destes papers que vale a pena recriar como esquemas de ensino

Descrevo cada uma com detalhe suficiente para escrever um prompt de geração. Todas devem ser **redesenhadas de raiz** (não reproduzidas), já que são figuras protegidas mesmo em CC-BY sem atribuição adequada.

### F.1 — **Fluxo de trabalho AM (o esquema-espinha da LO-1)** — combina P1 Fig. 1 + P5 Fig. 1 + P3 §3.1
Fita horizontal de 5–6 blocos com setas, cada bloco com um ícone e a **decisão do operador** por baixo:
`Aquisição de dados` (ícone: scanner intraoral + CBCT) → `CAD` (ícone: coroa em wireframe) → `STL + preparação de impressão` (subdividido em três chips: *orientação de construção* / *suportes* / *slicing*) → `Impressão camada-a-camada` (ícone: cuba + plataforma) → `Pós-processamento` (subdividido: *lavagem IPA* → *remoção de suportes* → *pós-cura UV*) → `Objeto acabado`.
Faixa inferior paralela em cor diferente rotulada **"o que cada passo altera na propriedade final"**: exatidão da digitalização → geometria/undercuts → exatidão dimensional **e** resistência (anisotropia) → resolução vs tempo (efeito escada) → grau de conversão, monómero residual, biocompatibilidade.
*Nota:* P1 Fig. 1 é exatamente STL → AM → washing → post-curing → restauração; P5 Fig. 1 é data acquisition → virtual design → fabrication → post-processing. O valor pedagógico está em **fundir as duas e explicitar o passo "preparação para impressão"**, que só P3 descreve em texto e nenhuma figura mostra.

### F.2 — **Comparação em 4 painéis das tecnologias de vat photopolymerization** — baseado em P5 Fig. 3 (a) SLA (b) mSLA (c) DLP (d) CLIP, e P1 Fig. 2 (a) SLA (b) DLP (c) LCD
Quatro cortes sagitais esquemáticos lado a lado, mesma escala, mesma cuba/plataforma, variando **apenas o sistema óptico**:
- **(a) SLA** — laser + espelho galvanométrico, ponto de cura pontual a "desenhar" a secção; seta a indicar varrimento; anotar "cura ponto a ponto".
- **(b) mSLA/LCD** — matriz de LEDs UV em baixo (anotar **395–405 nm**, de P4) + painel LCD como **máscara** com píxeis pretos/transparentes; toda a camada exposta em simultâneo; anotar "resolução = tamanho do píxel do LCD" e "perda por difusão da luz".
- **(c) DLP** — projetor + **DMD** (inserto ampliado com microespelhos quadrados de **≈16 µm** basculantes, de P4) + lente de focagem; toda a camada exposta de uma vez; anotar "resolução = tamanho do voxel", "380/405 nm".
- **(d) CLIP** — janela **permeável ao oxigénio**, banda fina sombreada rotulada **"dead zone, ≈20–30 µm"** entre a janela e a frente de cura, plataforma a subir **continuamente** (seta contínua, não escalonada).
Barra comparativa por baixo: velocidade / resolução / custo relativo / propensão a inibição por O₂ (DLP < SLA, per P5).

### F.3 — **Top-down vs bottom-up SLA** — baseado em P3 Fig. 1, **com os rótulos corrigidos**
Dois painéis: à esquerda **top-down** (laser por cima, plataforma **desce** dentro da cuba cheia, camada nova formada **sobre** as anteriores, na superfície livre da resina); à direita **bottom-up** (fonte de luz por **baixo** através de janela transparente antiaderente, plataforma **sobe**, peça pendurada de cabeça para baixo, camada nova formada **por baixo** das anteriores). Anotar em bottom-up: força de descolamento a cada camada, menor volume de resina necessário. ⚠️ **Corrigir a inversão de rótulos da legenda original de P3** e **não** repetir a afirmação de P5 de que bottom-up dispensa suportes.

### F.4 — **Efeito escada (*staircase effect*) e o trade-off espessura de camada ↔ tempo** — baseado em P3 Fig. 3
Superfície curva/inclinada (perfil de uma cúspide ou de uma margem de coroa) sobreposta por degraus retangulares. Três versões lado a lado: camada **grossa** (degraus grandes, desvio visível face à curva ideal, tempo curto), camada **média**, camada **fina** (degraus quase imperceptíveis, tempo longo). Setas de eixo: "resolução ↑" vs "tempo de impressão ↑↑". Adicionar sobreposição da linha CAD ideal a tracejado para mostrar o desvio geométrico. Excelente para introduzir a distinção **resolução ≠ exatidão**.

### F.5 — **Extrusão de material (FFF/FDM): movimento x–y então incremento em z** — baseado em P3 Fig. 2
Bico aquecido a depositar um cordão de filamento fundido num padrão de preenchimento no plano x–y; após completar a camada, seta vertical mostrando o bico a subir uma distância predefinida em z. Anotar: "a espessura do cordão é limitada pelo diâmetro do bico" (P3) e "resolução e acabamento inferiores → uso dentário limitado" (P1, P4).

### F.6 — **Matriz das 5 famílias de processo × mecanismo de consolidação** (não existe como figura em nenhum dos papers — vale construir)
Grelha de 5 linhas (vat photopolymerization / material jetting / powder bed fusion / binder jetting / material extrusion) × 4 colunas (**forma da matéria-prima** [líquido em cuba, gotícula, leito de pó, leito de pó, filamento] / **agente de consolidação** [luz, luz, laser (sinterização vs fusão), aglutinante químico, calor] / **suporte** [estruturas sacrificiais / suporte dedicado (fotopolímero ou cera) / o próprio pó / o próprio pó / estruturas sacrificiais] / **dispositivo dentário típico**). Uma coluna extra a cinzento: "pós-processamento crítico" (lavagem+pós-cura / remoção de suporte / *não consta nas fontes* / peça frágil requer infiltração-pós-processo / acabamento). Este é provavelmente **o slide mais valioso da LO-2** e sintetiza P1+P2+P3+P5.

### F.7 — **Fluxo do guia cirúrgico implantar em 4 passos** — baseado em P2 Fig. 2
(A) modelo digital da mandíbula obtido por digitalização → (B) posição do implante planeada no software de *design* (mostrar o eixo do implante sobreposto ao osso em CBCT) → (C) desenho do guia cirúrgico no software (manga/*sleeve* + apoio dentário) → (D) guia impresso, com o texto de P2: "CBCT → template digital → impressão → colocação do implante na posição ideal". Bom exemplo concreto de "do digital ao objeto físico" que amarra LO-1 a um dispositivo cirúrgico real.

### F.8 — **Coroa impressa: antes vs depois do pós-processamento** — baseado em P2 Fig. 5
Três painéis: (A) coroa impressa **ainda com os suportes ligados e sem polimento**, orientada em ângulo na plataforma; (B) mesma coroa após remoção de suportes, lavagem, pós-cura e polimento; (C) para contraste, uma coroa **fresada** (subtrativa). Anotar em (A) as marcas de suporte na superfície intaglio vs oclusal → gancho perfeito para a decisão de **onde colocar os suportes**.

### F.9 — **O efeito do ângulo de construção na exatidão E na resistência** (não existe como figura; construir a partir dos dados de P3)
Painel esquerdo: o mesmo objeto (base de prótese ou barra de teste) representado a **0°, 45° e 90°** na plataforma, com as camadas visíveis a mudar de direção relativamente ao eixo longo. Painel direito: dois gráficos de barras esquemáticos empilhados — **"erro dimensional"** (Shim 2020: 90° menor erro em comprimento; 45° maior erro em espessura) e **"resistência flexural"** (Shim 2020: 0° > 45° > 90°), com uma terceira anotação (Hada 2020, SLA: 45° maior precisão). Título do slide: **"o ângulo ótimo depende do que se está a otimizar"**. ⚠️ Rotular claramente que são estudos diferentes com materiais/desfechos diferentes.

### F.10 — **Roda de aplicações clínicas por especialidade** — baseado em P1 Fig. 3 e P5 Fig. 5 (e P2 Fig. 1)
Roda central "3D printing in dentistry" com 7 setores: **Prostodontia** (coroas/pontes, provisórias, próteses totais e parciais removíveis, moldeiras individuais, modelos *master*), **Ortodontia** (modelos, alinhadores, contenções, *brackets* personalizados, IBT, NAM), **CTBMF** (guias cirúrgicos, *splints*, placas de titânio pré-contornadas, próteses de ATM/TJR, modelos anatómicos), **Endodontia** (guia de acesso guiado, réplica de dente doador para autotransplante, apicectomia, remoção guiada de espigão), **Periodontologia** (*scaffolds*, membranas, preservação alveolar, guias de gengivectomia), **Odontopediatria** (coroas, mantenedores de espaço, modelos de treino), **Dentisteria conservadora** (guias de injeção de compósito). Nota de P1: "a seta indica o processo de tratamento em procedimentos endodônticos". Este é o slide de **encerramento da LO-2** (ponte para as aulas seguintes).

---

## Nota final de curadoria

Para LO-1 e LO-2, a hierarquia de confiança destas 5 fontes é: **P5 (Yüceer, Polymers 2025) > P1 (Sahrir, Polymers 2026) > P3 (Calvache Arcila, RSD 2020, com correções) > P2 (Chen & Wei, Polymers 2025, só qualitativo) >> P4 (não rastreável; substituir por Schweiger et al. 2021)**.

**Lacunas que estas 5 fontes NÃO cobrem** e que precisará de suprir de outra forma se quiser abordá-las: sinterização/tratamento térmico pós-SLM; ciclo de sinterização de zircónia impressa; definição normativa ISO 5725 de accuracy/trueness/precision; o termo e a mecânica da *anisotropia*; o conceito de *green part*; erro de tesselação do STL e formatos alternativos; medição operacional do grau de conversão.
agentId: aa62f9a6b91b37e0d (use SendMessage with to: 'aa62f9a6b91b37e0d', summary: '<5-10 word recap>' to continue this agent)
<usage>subagent_tokens: 190415
tool_uses: 32
duration_ms: 733321</usage>