Li os 6 PDFs (2 via `pdftotext`, 3 exigiram OCR com `tesseract` porque são páginas web impressas em PDF). Segue a síntese.

---

# SÍNTESE — "Princípios de impressão 3D em odontologia"
## Eixo: processo → propriedade → performance

---

## A. IDENTIFICAÇÃO DAS FONTES E NÍVEL DE EVIDÊNCIA

### ✅ PEER-REVIEWED (3 de 6)

**[F1] Hassanpour M, Narongdej P, Alterman N, Moghtadernejad S, Barjasteh E.**
*Effects of Post-Processing Parameters on 3D-Printed Dental Appliances: A Review.*
**Polymers** 2024;16(19):2795. https://doi.org/10.3390/polym16192795 (MDPI, open access, CC BY).
Tipo: **revisão narrativa/compreensiva** (não sistemática, sem PRISMA, sem avaliação de risco de viés). Autores de Engenharia Química e Aeroespacial (California State University Long Beach) — **não é um grupo clínico odontológico**. Declara "no external funding / no conflict of interest". Cobre ~34 estudos primários tabulados (Table 2). Explicitamente focada em **DLP**, por ser a tecnologia predominante em odontologia.

**[F2] Farag E, Sabet A, Ebeid K, El Sergany O.**
*Build angle effect on 3D-printed dental crowns marginal fit using digital light-processing and stereo-lithography technology: an in vitro study.*
**BMC Oral Health** 2024;24:73. https://doi.org/10.1186/s12903-024-03851-4
Tipo: **estudo in vitro laboratorial**, desenho fatorial 2×3. British University in Egypt / Ain Shams University. Sem financiamento externo, sem conflitos declarados.

**[F3] Sahrir CD, Ruslin M, Lee S-Y, Lin W-C.**
*Effect of various post-curing light intensities, times, and energy levels on the color of 3D-printed resin crowns.*
**Journal of Dental Sciences** 2024;19(1):357–363. https://doi.org/10.1016/j.jds.2023.07.008 (Association for Dental Sciences of the Republic of China / Elsevier).
Tipo: **estudo in vitro / Original Article**, desenho fatorial 5 intensidades × 3 tempos × 2 geometrias. Taipei Medical University. Financiado por NSTC Taiwan.

### ⛔ NÃO PEER-REVIEWED — DOCUMENTOS COMERCIAIS/BLOG (3 de 6)

> **Atenção crítica:** o item 4 da lista, que parecia ser o "paper de risk management", **NÃO é um artigo científico**. É um post de blog de uma loja online. Isto muda completamente o seu peso na aula.

**[V1] "3D-Printed Permanent Restorations: Clinical Reality, Decision-Making, and Risk Management in Modern Prosthodontics"**
Autor: **Prof. Tarek Salah Morsi** (Professor de Prostodontia, Ain Shams University e Misr International University, Cairo; Vice-Dean for Postgraduate Affairs and Research, MIU).
Publicado em **17 de abril de 2026** em **https://medsta.store/blogs/articles/...** — blog de uma **loja de produtos odontológicos egípcia (Medsta)**. Metadados do PDF: "Microsoft: Print To PDF", 19 páginas capturadas do navegador (com widget de chat "Hi! How can we help you?" e banner "Free shipping over 500LE" visíveis).
Tipo: **artigo de opinião / content marketing**. **Zero referências bibliográficas**. Contém **links comerciais embutidos** para produtos da própria loja (coleção de polimento de compósito, adesivos com MDP, cimentos resinosos, unidades de fotopolimerização). Termina com call-to-action: *"Explore the Medsta catalog to equip your practice for additive prosthodontics done right."*
→ **Conflito de interesses estrutural.** Autor com credenciais reais, mas o texto é publicidade nativa. **Não apresentar como evidência.** Utilizável apenas como *"exemplo de raciocínio clínico de um especialista"* ou, melhor ainda, como objeto de crítica de literacia científica.

**[V2] "How to 3D Print Dental Models: Complete Digital Dentistry Workflow Guide for Dental Professionals and Labs"**
**Rapid Shape Team**, 13 de abril de 2026. https://rapidshape3d.com/how-to/how-to-3d-print-dental-models/ — © Rapid Shape GmbH 2026.
Tipo: **guia de fabricante**. Descreve exclusivamente o ecossistema proprietário (Print Studio, resinas RS VIVO, unidades WASH e CURE, "200+ validated materials", reconhecimento RFID). Termina em formulário de newsletter com "Consent to receive marketing information".

**[V3] "A Step-by-Step Guide to 3D Printing Diagnostic Models with Phrozen Dental Printers"**
https://dental.phrozen3d.com/blogs/step-by-step-guides/diagnostic-models — blog da **Phrozen Technology**. Sem data visível no PDF (posts relacionados são de maio/junho de 2023, autor Kendrick Santoso).
Tipo: **tutorial de fabricante**, específico para Phrozen Sonic 4K XL 2022 + DS Slicer + Phrozen Dental Study Model Resin. Inclui calculadora de poupança ("$1.2 per print") e formulário de contacto comercial.

---

## B. BUILD ORIENTATION / BUILD ANGLE

### B.1 Mecanismos (por que a orientação altera a peça)

Os mecanismos explicitamente descritos nas fontes:

**1. Staircase effect (efeito escada) — [F2] e [F1]**
[F2]: *"Virtually cutting a 3D item into layers, which are then printed individually and stacked to copolymerize... The 'staircase effect' is a phenomenon that can happen when printing objects with inclined construction orientations. In this phenomenon, layers are printed gradually and the step edges between them result in errors."* → conclusão dos autores: *"it is reasonable to assume that the 45° and 90° orientations will produce less accuracy than the 0° orientation"*.
[F1] acrescenta o contraponto de pós-processamento: um pós-processamento adequado (polimento/tratamento de superfície) **reduz** o staircase effect, que é *"a poor surface finish commonly found in most 3D-printed parts"*.

**2. Área de secção transversal por camada / trajetória da luz — [F2]**
No ângulo de 90°, *"the buccal wall of the 90º sample is created by light entering a broader area with a shorter penetrating distance than that of the 0º and 45º samples"* → **excesso de polimerização (excessive polymerization) na parede bucal intaglio**, maior nos espécimes a 90°. Isto liga diretamente geometria de fatiamento → dose de luz local → conversão local → dimensão local.

**3. Forma da camada → direção da contração de polimerização — [F2]**
*"the form of the layer created by the 3D printer differs according to the build angle... A DLP-based 3D printer polymerizes one layer at a time, any change in the layer form entails changes in the form and degree of polymerization shrinkage."* Contrasta com SLA, que *"employs an ultraviolet (UV) laser to cure material point by point"*.

**4. Contacto e posição dos supports — [F2]**
- Rodando de 90° para 0°, *"the number of surfaces that are self-supported increases and the support structures number decreases"*.
- A 90°, *"the support structure was placed close to the marginal area of crown. This enhances the possibility that when the support structures are removed, this important part of the restoration may undergo damage."*
- A 45°, *"support was set back from the crown edges"* → menos tempo de acabamento/polimento.
- Cita Yu et al.: prótese em resina por SLA teve *"poor quality of the margins close to the support attachment"* e margens frequentemente rugosas.
- Cita Alharbi et al.: o **RMSE foi mais alto na zona com estrutura de suporte** (DLP).

**5. Gravidade / overhangs — [F2]**
*"In specimens with different construction orientations, gravity may distort the area that hangs over the buccal and lingual walls, changing the size of the marginal gaps."*

**6. Anisotropia das propriedades mecânicas — [F1]**
- *"the mechanical properties of 3D-printed parts are generally anisotropic and highly sensitive to the post-cure and environmental conditions"* (Tartaglia et al.).
- Alharbi et al.: **componentes impressos verticalmente exibiram compressive strength superior aos impressos horizontalmente**.
- Kim et al.: entre orientações X, Y e Z, **peças em orientação Z tiveram a menor contração** (*"due to better polymerization in each layer"*); peças maiores contraem menos (mais tempo de exposição durante a impressão → mais conversão antes do post-cure).
- Monzón et al.: **a anisotropia do DLP pode ser eliminada por um post-curing adequado** — mas a eficácia é afetada pela presença de pigmentos. → *Mensagem de aula: a anisotropia não é um destino, é parcialmente reversível pelo pós-processamento.*
- **Ligação interlaminar fraca** (*weak interlayer bonding between printed layers*) é apontada como causa da menor performance mecânica dos impressos.
- Shim et al.: a orientação de impressão determina rugosidade, hidrofilicidade e energia de superfície → **influencia adesão microbiana** (higiene da prótese).

**7. Eficiência (argumento de produção, não de exatidão) — [F1]**
Orientar a coroa com a superfície oclusal para cima reduz material de suporte e tempo de pós-processamento; guias cirúrgicas com a face plana paralela à plataforma minimizam supports.

### B.2 Achados reais de [F2] — números exatos

| Item | Valor |
|---|---|
| Desenho | In vitro, 2 tecnologias × 3 ângulos |
| n total | **60 coroas anatómicas completas de molar inferior** |
| Grupos | Grupo 1 DLP (n=30); Grupo 2 SLA (n=30) |
| Subgrupos | 0°, 45°, 90° — **n=10 por subgrupo** |
| Preparo | Molar inferior de resina (Nissin), redução oclusal de **2 mm**, convergência total **6°**, término em **chanfro profundo circunferencial de 1 mm** |
| Scanner | 3Shape E2 (de bancada) |
| CAD | exocad Galway 3.0 |
| **Cement space (virtual)** | **30 µm** |
| Layer thickness | **50 µm em ambos os printers** (mínimo de cada máquina) |
| DLP | NextDent 5100 + resina **C&B NextDent** (3D Systems) |
| SLA | Formlabs **Form 2** + **Permanent Crown Resin** (hybrid composite resin) |
| Definição de 0° | superfície oclusal **paralela** à plataforma |
| Definição de 90° | superfície lingual **perpendicular** ao framework de suporte |
| Supports | hastes cilíndricas fixadas em cúspides bucais, cúspides linguais e cristas marginais |
| Pós-proc. DLP | limpeza **5 min em 2-propanol 96%** + cura **45 min** (LC-3D Print Box) |
| Pós-proc. SLA | limpeza **1 min em etanol 95%** + post-cure **30 min** UV (DWS S2) |
| Armazenamento | **10 dias** em caixa seca e opaca antes da medição |
| Medição | discrepância marginal vertical, microscópio digital USB a **40×**, ImageJ 1.43U; **4 sítios** (meio de bucal, mesial, lingual, distal); média dos 4 = valor do espécime |
| Estatística | Kolmogorov-Smirnov + Shapiro-Wilk; ANOVA one-way e two-way; Tukey HSD; α = 0,05 |

**Resultados (Table 1) — gap marginal, µm, média (DP):**

| | 0° | 45° | 90° | p |
|---|---|---|---|---|
| **SLA** | **40 (1,63)** ᵃ | 55 (1,49) ᵇ | 72 (1,2) ᶜ | < 0,00001 |
| **DLP** | 57 (1,24) ᵃ | 70 (1,89) ᵇ | **89 (2,62)** ᶜ | < 0,00001 |

**Efeitos principais (pooled):**
- **Tecnologia:** SLA **55,6 ± 13,59 µm** vs DLP **72 ± 13,67 µm** — SLA significativamente melhor (**p < 0,001**).
- **Ângulo:** **0° = 48,5 ± 9,04** < **45° = 62,5 ± 8,05** < **90° = 80,5 ± 8,99 µm**; **todos os pares diferentes** no Tukey (**p < 0,001**).
- Two-way ANOVA: efeito significativo **de ambos** os fatores (p < 0,001).

**Ângulo vencedor: 0°** (oclusal paralela à plataforma), em **ambas** as tecnologias. Melhor célula absoluta: **SLA a 0° = 40 µm**. Pior célula: **DLP a 90° = 89 µm**. Amplitude total do efeito combinado: **49 µm** (40 → 89), ou seja, **mais do que duplica** o gap.

**Aceitabilidade clínica:** *"All specimens' marginal gap, with different build orientation, was under the clinically permitted limits of **120 µm**"* — logo, **as três conclusões formais do artigo** são: (1) a tecnologia afeta a exatidão marginal; (2) o build angle afeta a exatidão marginal; (3) **todas as variáveis testadas ficaram dentro do intervalo clinicamente aceitável**.

**Consistência com a literatura (declarada pelos autores):** concorda com Ryu et al. (180° na convenção deles = 0° aqui é o melhor); **discorda de Park et al.**, que sugeriram 45° em vez de 0°.

### B.3 Limitações de [F2] — para ensinar leitura crítica

1. **n = 10 por célula**; sem cálculo de poder amostral reportado.
2. **A comparação DLP vs SLA está confundida (confounded)**: mudaram simultaneamente (a) o printer, (b) **a resina** (NextDent C&B vs Formlabs Permanent Crown Resin) e (c) **o protocolo de pós-processamento** (5 min/96% IPA + 45 min de cura vs 1 min/95% etanol + 30 min de cura). Logo **"SLA é mais exato que DLP" não é uma conclusão suportada** — o que foi comparado foram dois *sistemas* completos. Este é um excelente ponto de aula.
3. Só **coroas unitárias**; os próprios autores dizem que *"longer spans or intracoronal restorations may be further examined"*.
4. Só **3 ângulos**, **uma geometria** (molar inferior), **um layer thickness** (50 µm), **um cement space** (30 µm).
5. Variáveis não testadas e explicitamente listadas como pendentes pelos autores: **posição na plataforma, tipo de suporte, espessura de camada**.
6. Só **gap marginal vertical**; **internal fit não foi medido**; não houve cimentação, envelhecimento, termociclagem ou carga.
7. DP intra-subgrupo muito pequenos (1,2–2,6 µm) — homogeneidade elevada, típica de in vitro com operador único; não representa variabilidade de rotina.
8. Frase inconsistente no Discussion (*"the two measurement methodologies"* quando só existiu uma) — sinal de revisão editorial imperfeita.

---

## C. PÓS-PROCESSAMENTO

> **Frase-espinha de [F1]:** as quatro etapas são **(1) remoção de supports → (2) washing → (3) secondary polymerization (post-curing) → (4) polishing/surface treatment**, e *"the sequential steps listed... are not fixed and can be adjusted for each specific resin."*
> **Custo:** o pós-processamento é estimado em **≈ 1/3 do custo total do processo de produção** de uma peça impressa em 3D.
> **Regra de ouro dimensional:** *"Post-processing shows little effect on the overall dimensional accuracy of 3D-printed specimens **if the parts are fully cured during the printing process**. On the other hand, if the printed parts are not fully cured during printing, considerable shrinkage and shape distortion may be induced via the post-treatment."*

### C.1 Remoção de supports
Ferramentas descritas: faca afiada e endurecida, espátula, disco diamantado, ponta ultrassónica — *"to avoid any breakages or uneven surfaces"* [F1]. Propriedade controlada: **integridade geométrica local e qualidade de superfície na zona de contacto**; em coroas, [F2] mostra que se o suporte estiver junto à margem, a remoção **danifica a margem**.

### C.2 Washing (lavagem)

**Mecanismo [F1]:** *"the solvent's molecules gradually penetrate from the surface into the resin matrix and eliminate the unreacted monomers. This has a **softening effect** on the printed part and can alter its properties."*

**Escolha do solvente — "like dissolves like"**, mas com um obstáculo estrutural: *"Manufacturers often keep the composition of their materials confidential, providing only safety data sheets with limited information. This lack of transparency leads to uncertainty and inconsistency in research and application methods."*

| Solvente | Efeito reportado |
|---|---|
| **IPA (isopropanol)** | O mais usado e recomendado por fabricantes. **Riscos:** alta inflamabilidade, volatilidade, tonturas, irritação ocular severa, problemas respiratórios. Snowwhite et al.: classificado como **agressivo** — *"not only washed the excess resins but also affected the structure of the printouts, resulting in a rough surface"* (acabamento **fosco/matte**). Contudo, Hwangbo: **IPA deu flexural strength marcadamente mais alta que TPM** (modulus igual); Scherer: **IPA 91% e 99% > bio-etanol, TPM e RESINAWAY** em flexural strength; Mayer: IPA entre os mais altos em degree of conversion. Mayer (fracture load): **IPA deu fracture loads mais baixos** que Yellow Magic e centrifugação. |
| **Etanol** | Riscos semelhantes ao IPA. Lambart: etanol e EASY 3D Cleaner deram a **menor flexural strength** — atribuído ao **menor peso molecular do etanol**, que *"allows for easier dissolution into the linear polymer chains, thereby disrupting the polymer matrix"*. Gonzalez: etanol deu **maior transparência óptica** que acetona. |
| **TPM (tripropylene glycol monomethyl ether)** | Menor inflamabilidade, toxicidade e volatilidade — mas **mais caro e mais lento**. Deu **melhor exatidão dimensional que IPA** num estudo (embora *"none of them resulted in accurately predefined dimensions"*). Flexural strength inferior ao IPA. |
| **Soluções aquosas / à base de água** | Snowwhite: **aumentaram maximum stress e flexural modulus**, aproximando-se do grupo controlo (ar comprimido + panos). Não agressivas → superfície **brilhante e clara**. |
| **Acetona, butyl glycol** | Mayer: **as menores flexural strengths**. Mas butyl glycol e IPA deram os **maiores degrees of conversion**. |
| **Óleo alimentar** | Melhorou propriedades mecânicas mas **deixou contaminantes residuais**. |
| **Monómeros como solvente (PEA, TMPTA, HDDA)** | PEA: **queda considerável do flexural modulus**; TMPTA e HDDA: **aumento** do modulus. Resultados inconclusivos. Levantam *"pertinent questions regarding biocompatibility, health implications, and safety and disposal procedures"*. |
| **Detergente + peróxido de hidrogénio** | Bardelcik (PMMA/SLA): não lavados tiveram o **maior peak stress mas o menor alongamento** (menor tenacidade). **Detergente + H₂O₂ 5% → tenacidade +90% vs controlo** (absorção de surfatantes na matriz → ductilidade). Pior peak stress: IPA 60% + H₂O₂ 5% + detergente. |

**Tempo de lavagem — dose–resposta com janela ótima:**
- Jang et al.: **10 min** de IPA ou TPM **maximizou o degree of conversion e minimizou monómero residual**, sem variação significativa de flexural strength ou rugosidade entre durações.
- Hwangbo et al.: prolongar até **90 min aumentou significativamente a cell viability**; **mínimo de 60 min para atingir 60% de cell viability**, com benefício marginal além disso. Ultrassons melhoraram ainda mais. Contudo: **flexural modulus diminuiu** com lavagem prolongada (redução do peso molecular da resina). Recomendam **evitar lavagens excessivamente longas em próteses**.
- Scherer et al.: 4 durações (**5, 6, 7, 8 min**) × 3 soluções (IPA-91, IPA-99, TPM) → **correlação positiva entre tempo de enxaguamento e flexural strength**.
- Xu et al.: **5 min de IPA com ultrassom** já bastou para aumentar cell viability, **sem benefício adicional além disso**; flexural strength e morfologia estáveis entre 5 e 60 min; **acima de 12 h → queda da flexural strength e aparecimento de fissuras superficiais** — mecanismo: *"solvent molecules penetrating the surface, causing expansion, stress, osmotic pressure, and relaxation of the polymer networks."*
- Nowacki et al.: lavagem insuficiente → **maior rugosidade**; lavagem excessiva → **queda da tensile strength por formação de voids** (concentração local de tensão); flexural strength inalterada.
- **Over-washing — resumo de [F1]:** *"over washing the samples may have detrimental effects on the surface quality and mechanical properties due to the surface absorption of the solvent, leading to **plasticizing effects**."*

**Temperatura da solução de lavagem** — Oh et al. (N/T, 30, 40, 50 °C × 5, 10, 15, 30, 60 min): temperatura mais alta **↑ degree of conversion e ↑ cell viability**, mas **↓ flexural strength e ↓ microhardness**. → **Trade-off explícito biocompatibilidade vs mecânica.**

**Método de lavagem:**
- Jin et al.: **banho ultrassónico > rotary washer** na eluição de monómeros residuais.
- Mayer et al.: **força centrífuga (1500 rpm, 5 min)** melhorou degree of conversion, rugosidade, fracture load e resistência ao desgaste vs imersão.
- Gonzales et al.: **5 min de sonicação** deu melhor proliferação celular do que **2 h de imersão** em etanol ou acetona — e **sem compostos não reagidos detetáveis** após a lavagem.
- Vara et al.: **sem diferença significativa de exatidão dimensional** entre lavagem manual, ultrassónica ou mista.
- [F1] admite lacuna: *"research focusing on the effects of washing methods, particularly for SLA and DLP... remains relatively limited."*

### C.3 Post-curing (polimerização secundária)

**Mecanismo fundamental [F1]:**
Durante a impressão, *"not all monomers are fully cured due to **surface oxygen inhibiting the reaction**. This leaves the printed parts soft and bendable"* (green state). A cinética explica o resto: *"At the start, monomers are highly mobile, allowing efficient diffusion and promoting rapid polymerization until the **gel point** is reached, where polymer chains crosslink to form a three-dimensional network. **After the gel point, monomer mobility significantly decreases**, limiting their diffusion and reaction, leading to incomplete conversion and a lower overall DC. The post-curing process provides additional energy to drive further polymerization."*
Confirmação térmica (Cingesar et al., DSC): o post-curing **reduz a entalpia de cura residual e desloca a Tg para valores mais altos** → prova de aumento do crosslinking.

**Temperatura**

| Achado | Fonte em [F1] |
|---|---|
| Temperatura ↑ → viscosidade ↓ → mais colisões de radicais livres → mais crosslinking | mecanismo geral |
| **Luz + calor a 110 °C** melhorou significativamente a **ultimate tensile strength e o degree of conversion** de UDMA (melhor rede interpenetrante **nas interfaces entre camadas**) | Alsandi et al. |
| Relação linear DC vs temperatura com **declive 0,15**; **a temperatura foi 12× mais efetiva que o intervalo de post-curing**; DC máximo entre **100–125 °C** → *"making intraoral post-curing impractical"*; 3–7 min > 30 s ou 1 min | Bagis et al. |
| Alinhadores Dental LT Clear: mesma duração, **maior temperatura → maior compressive strength**. Força de mordida humana **50–700 N (média 400 N)**; carga de teste 1000 N. **Grupo não curado resistiu só a 380 N com deformação considerável.** A **80 °C durante 15–20 min** → comportamento elástico; **80 °C durante 5 min** → deformação plástica. Ótimo declarado: **15–20 min a 40–80 °C com fonte de 405 nm**; com Blue UV-A 315–400 nm ou UV-Blue 400–550 nm são precisos **10 min** | Jindal et al. |
| SLA Clear resin, 40/60/80 °C × 15/30 min: **melhor exatidão a temperaturas mais baixas** (gap aumenta com a temperatura); **melhor DC a 60 °C/30 min**, mas o DC **cai a 80 °C** (oxigénio ligado a radicais livres atua como inibidor). **Condição ótima global: 15 min a 40 °C.** Recomendam **≤ 66 °C** para bases de prótese, para evitar alterações dimensionais | Katheng et al. |
| Maiores propriedades mecânicas com **maior temperatura em menor tempo**; mudanças significativas já com ≥5 min; sem alterações relevantes entre 30 e 60 min | Miedzinska et al. |
| **PMMA não tolera >125 °C** — começa a **despolimerizar**, libertando **monómero MMA**; **90% despolimerizado a 450 °C** | [F1] |
| Trade-off geral: *"a longer post-curing at a low temperature could yield comparable outcomes to shorter post-curing at a higher temperature"* | Perea-Lowery et al. |

**Duração**

- Kirby et al. (2024): **15 min → 45 min aumentou significativamente o DC**; **maior DC médio = 69,6% com Phrozen Cure V2 aos 45 min**. Comparou unidades caras vs baratas (Phrozen Cure V2, SUNUV de unhas, Triad 2000 de halogéneo de tungsténio, forno caseiro) → **diferenças mínimas de DC entre unidades**; a mensagem é *"the importance of curing time over the type of curing unit used."*
- Kim et al.: dureza, DC e biocompatibilidade melhoram com duração prolongada.
- Soto-Montero et al.: **5–10 min** deu flexural strength e modulus aceitáveis **com alteração de cor mínima**. Knoop microhardness (KHN) depende de tempo **e profundidade**: maior a **50 µm** de profundidade, decrescendo a **2–4 mm**, voltando a subir a **5 mm**. Efeito **material-dependente**.
- Scherer et al.: durações de **25 a 45 min**; ótimo = **25 min a seco**.
- Aati et al.: durações prolongadas **↑ flexural strength, ↑ modulus, ↑ Vickers hardness, ↓ citotoxicidade, ↓ water sorption e solubility**.
- Contraponto: *"mechanical properties including tensile, flexural, and hardness were found to **degrade** if the post-curing duration was poorly chosen"*; Nowacki: post-curing longo pode **afetar a exatidão dimensional pela contração durante o crosslinking**; Riccio et al.: post-curing aumenta rigidez e resistência à rotura **mas aumenta a fragilidade (brittleness)**.
- **Over-curing** [F1]: *"over-curing may cause health issues by making the printed parts brittle and weak"*; *"excessive post-curing may lead to **depolymerization**, brittleness, and inferior material properties."*
- Katheng: a **exatidão** é pouco influenciada pela **duração** (é a temperatura que manda).

**Comprimento de onda e intensidade**

- Zguris: 365, 385 e 405 nm em resinas Formlabs → **405 nm deu o melhor tensile modulus e strength**. Por isso *"405 nm is one of the most commonly selected light sources in commercial products."*
- Reymus et al.: três métodos — (a) LED **380–510 nm por 6 min**; (b) **4000 flashes, 300–700 nm, em atmosfera de azoto**; (c) **UV 315–550 nm por 30 min**. Fracture load **variou e foi altamente dependente do tipo de resina** → não há protocolo universal.
- Wu et al.: **a intensidade UV NÃO teve efeito significativo no degree of conversion** — *"the UV intensity dominates the rate of secondary curing, but it does not contribute much to the degree of conversion gradient"*. Porém, **maior intensidade → maior distorção**; só encurtou o tempo para atingir a amplitude de curvatura.
  → **Nuance importante:** intensidade governa a **velocidade**; tempo/energia e temperatura governam o **DC final**.

**Atmosfera / meio (condição de cura)**

- Scherer et al.: seco vs água vs glicerina → **seco foi o melhor** (fracture resistance e flexural strength), depois água, depois glicerina. Piores resultados nos molhados atribuídos à **absorção superficial de água/glicerina**.
- Nowacki et al. (contradição direta): cura **dentro de recipiente de vidro com água** melhorou significativamente a flexural strength e a dureza — *"the hardness increased in the wet state due to **oxygen limitation** in water, which slowed down polymerization... **the impact of oxygen was more crucial than that of UV light**."*
  → **Discordância explícita entre estudos** — usar como exemplo de mecanismos competitivos (inibição por oxigénio vs plastificação/absorção).
- Vara et al.: **post-curing em atmosfera rica em azoto deu exatidão dimensional significativamente melhor** — *"nitrogen post-curing prevents the formation of an oxygen-inhibited layer."*
- Mendes-Felipe et al.: propriedades térmicas semelhantes com calor ou UV, **mas o UV produz material mais homogeneamente reticulado, com propriedades mecânicas superiores**.
- Chang et al.: a **posição da peça dentro da câmara de post-curing** afeta cor, translucidez, microdureza e flexural strength. → daí a recomendação de **prato rotativo (turntable)** para exposição uniforme, sobretudo em peças grandes ou complexas.
- Bayarsaikhan et al.: flexural properties **sem diferença** entre aparelhos, mas **variações consideráveis em DC, dureza Vickers e cell viability** entre aparelhos.
- Lassila et al.: Form Cure deu **maior flexural strength e menor wear depth** vs Visio Beta Vacuum, Ivoclar Targis e cura térmica. **Envelhecimento hidrotérmico reduziu significativamente a flexural strength em todos os grupos.** Propriedades ópticas (gloss, translucidez) foram **pouco afetadas pelo post-curing — mas muito afetadas pelo polimento**. SEM/EDS: microestrutura e composição elementar inalteradas → *"post-curing primarily affects mechanical attributes."*
- Autoclavagem como pós-polimerização (Tangpothitham et al.): **132 °C durante 4 min** → **reduziu significativamente a eluição de UDMA, HEMA e EGDMA**, **aumentou a microdureza**, **manteve o flexural modulus**, **reduziu water sorption e solubility**; houve alterações dimensionais lineares mas o ajuste manteve-se **clinicamente aceitável**.

**Contração e distorção**
- Kim et al.: resina sem solvente/aditivos contrai menos que resinas comerciais SLA/DLP (evaporação de solvente e expansão/contração de aditivos são fatores principais de variação de volume). Peças **maiores contraem menos**. **Orientação Z = menor contração.** Princípio: *"greater exposure time [durante a impressão] indicates better polymerization and a lower degree of additional polymerization during post-curing."*

### C.4 Polimento e tratamento de superfície
- Objetivo: acabamento de superfície, estética, e **biocompatibilidade** [F1].
- **Esterilização:** Gonzales et al. comparou (1) UV 30 min em câmara de biossegurança, (2) imersão em etanol 70% por 10 min, (3) autoclave 20 min a 121 °C. **A autoclave deformou as amostras** (inadequada); etanol causou pequenos defeitos de transparência; **UV foi o melhor método**, sem comprometer a integridade estrutural.
- Linares-Alvelais et al.: **a esterilização em autoclave prejudicou as propriedades de tração e causou fissuração superficial**; propuseram **esterilização por alta pressão hidrostática (HHP)**, que **melhorou biocompatibilidade, módulo elástico e tensile strength**.
  → **Contradição aparente com Tangpothitham** (132 °C/4 min benéfico) → depende do ciclo, da resina e do desfecho medido. Bom para ensinar "protocolo é específico do material".
- Lassila et al.: **o polimento teve impacto significativo nos valores de gloss** — o brilho é dominado pelo acabamento, não pelo post-curing.

### C.5 Metais — debinding / sintering
**Não consta nas fontes.** Nenhum dos 6 documentos aborda debinding, sintering, DMLS/SLM ou metal binder jetting em detalhe. [F1] apenas classifica PBF e DED pela ASTM e afirma: *"Despite their precision and durability, **PBF and DED are rarely used in dentistry due to issues like surface roughness and porosity**"*; e que as técnicas de sinterização *"are capable of generating precise and mechanically resilient components from a diverse range of materials. However, their operation necessitates extended printing times and an initial substantial investment."*
→ **Recomendação:** se a aula precisa de metais, é necessário material-fonte adicional. Não extrapolar destes PDFs.

### C.6 Achados do artigo de cor [F3] — desenho e números exatos

**Desenho**
- Amostras: **single crown (SC)** e **pontic (PO)**, desenhadas em inLab WS16 (Dentsply Sirona).
- Impressora: tipo **LCD** (Veribuild, Whip Mix); **layer thickness 50 µm**, tempo de iluminação **12 s**, **4 base layers**.
- Material: resina de crown & bridge **cor A2** (Printin, Printin3D, Taiwan): **urethane acrylate 30–40%, monómero acrílico 55–65%, 1,6-hexanediol diacrylate 5–15%, fotoiniciador 0–5%**.
- Lavagem: **duas passagens em isopropanol 90%** + **ultrassons 5 min**.
- Post-curing: câmara UV com fonte de **405 nm**, **12 LEDs multidirecionais**.
- **Intensidades: 105, 210, 420, 630 e 860 mW/cm²** (identificadas no artigo pelos códigos 2, 4, 8, 12, 16).
- **Tempos: 5, 10 e 15 min.**
- Amostragem: n = 45 por grupo (SC e PO), **N = 90 total**. ⚠️ **O artigo é internamente inconsistente**: o texto diz "each comprising three replicates", a legenda estatística diz "the mean ± SD of the **four** replicate samples", e a legenda da Fig. 4 diz "**n = 10**". Reportar esta inconsistência.
- Medição: **espectrofotómetro VITA Easyshade**, espaço **CIE L\*a\*b\***, **3 pontos predeterminados** por espécime (superfície bucal: **cúspide, mediana e marginal**), fundo padrão de **placa preta**.
- **Referência de cor: VITA A2 nominal → L\* = 75,74; a\* = 1,79; b\* = 18,05.** ⚠️ **Portanto ΔE aqui = desvio da cor obtida face ao alvo A2 declarado**, e não uma comparação antes/depois do post-curing.
- Estatística: ANOVA one-way + Tukey HSD; α = 0,05.

**Tabela de energia (Table 1 do artigo) — intensidade × tempo**

| Código (intensidade) | 5 min | 10 min | 15 min |
|---|---|---|---|
| 2 (105 mW/cm²) | 525 | 1050 | 1575 |
| 4 (210 mW/cm²) | 1050 | 2100 | 3150 |
| 8 (420 mW/cm²) | 2100 | 4200 | 6300 |
| 12 (630 mW/cm²) | 3150 | 6300 | 9450 |
| 16 (860 mW/cm²) | 4300 | 8600 | **12 900** |

⚠️ **Erro de unidades no artigo:** rotulam esta grandeza como "mW/cm²" e definem *"The total energy (in mW/cm²) is determined by combining the transmitted light intensity (mW/cm²) with the curing time (min)."* Fisicamente, intensidade × tempo dá **densidade de energia (J/cm² ou mJ/cm²)**, não mW/cm². Os valores da tabela são **mW·min/cm²**. Convertendo corretamente: 860 mW/cm² × 5 min = 860 × 300 s = **258 000 mJ/cm² = 258 J/cm²**. → **Excelente ponto de aula sobre rigor dimensional em radiometria** (energia = irradiância × tempo).

**Resultados**
- **SC (single crown), 5 min:** intensidades acima de 420 mW/cm² produziram **diferença de cor significativa** nas regiões de **cúspide e margem** bucais (p < 0,05); **a melhor condição foi 860 mW/cm² durante 5 min**.
- **SC, 10 e 15 min:** a melhor intensidade passa a ser **210 mW/cm²** (mais tempo compensa menos intensidade). Diferença significativa a 630 mW/cm² aos 10 min.
- **PO (pontic), 5 e 10 min:** **descidas significativas** de ΔE em **todos os três pontos** a partir de 210 mW/cm² (p < 0,05), continuando a descer com o aumento da intensidade; melhor a **860 mW/cm²**. Aos **15 min**, sem diferença significativa **exceto** a **630 mW/cm²**.
- **Valor mínimo de ΔE reportado (SC):** **5,35 ± 0,47**, na **superfície de cúspide bucal**, com energia **4300** (= 860 mW/cm² × 5 min) — descrito como *"considered **acceptable only** on the buccal cusp surface"*. Ou seja, **na coroa unitária a maioria das condições NÃO atingiu aceitabilidade**.
- **PO:** *"all buccal surfaces in the pontic test group exhibited **acceptable** values of color difference."*
- **Efeito da espessura:** o SC, mais fino que o pontic, **exibiu ΔE notavelmente maior** — consistente com Çakmak et al. (ΔE aumenta com a diminuição da espessura da coroa).
- **Diferenças por região anatómica:** superfície **mediana** bucal teve os menores a\* (0,11 ± 0,01) e b\* (14,20 ± 1,73) → tendência verde/azul; cúspide e margem tendem para verde/amarelo. Explicação oferecida: *"variations in enamel thickness, degree of mineralization, and the presence of stains"* + acessibilidade da luz e grau de polimerização por região + variação de irradiância entre secções + **posição na placa de polimerização** + **concentração de fotoiniciador**.

**Limiares de perceptibilidade/aceitabilidade usados**
- **ΔE ≤ 2,6 e ΔE ≤ 5,5** (citando Kim et al. 2021, *Materials*).
- Também citam **ΔE ≤ 3,7** (Johnston & Kao, *J Dent Res* 1989;68:819–22).
- Os próprios autores admitem: *"Due to an ongoing controversy surrounding the gold standard threshold value, further investigation is required to determine clinically discernible color differences that more accurately reflect real-world clinical scenarios."*
- ⚠️ Os limiares modernos CIEDE2000 50:50 (PT ≈ 0,8; AT ≈ 1,8) **não constam nas fontes**.

**Conclusão dos autores:** *"exposing a resin crown to a high light intensity results in color stability and allows shorter post-curing times"*; **860 mW/cm² durante 5 min foi aceitável**; **energia ótima adicional de "4000–8000 mW/cm²"** (ou seja, 4000–8000 mW·min/cm², = 240–480 J/cm²).

⚠️ **Frase problemática no Discussion de [F3]:** *"This suggests that **lower light intensities can lead to greater polymerization** and potentially lead to higher levels of discolouration in these areas"* — é internamente incoerente com o resto do parágrafo (que argumenta o oposto). Provável erro de redação/tradução. **Não citar essa frase.**

---

## D. MONÓMERO RESIDUAL E BIOCOMPATIBILIDADE

**A cadeia causal, como está descrita em [F1]:**

1. **Origem 1 — inibição por oxigénio na superfície.** Durante a impressão, *"not all monomers are fully cured due to surface oxygen inhibiting the reaction"*. E na lavagem: *"With insufficient washing, the excess unreacted surface monomers **cannot undergo sufficient polymerization during the post-curing procedure, as the existing oxygen acts as an inhibitor**."*
2. **Origem 2 — cinética pós-gel point.** Após o gel point, a mobilidade dos monómeros cai drasticamente → conversão incompleta → **DC baixo**.
3. **Limiar de conversão:** *"A **degree of conversion below 50%** indicates unreacted monomers, which could potentially leach out and cause cell death"* (Lin et al.).
4. **Limiar de resíduo de superfície:** *"According to medical standards, the amount of **surface residue is required to be lower than 18 wt%**"* — ⚠️ **a norma específica não é nomeada** em [F1]. Razão adicional: *"the remaining uncured monomers can act as a **substrate promoting the growth of dental decay bacteria**."*
5. **Genotoxicidade:** *"especially in orthodontic applications, the presence of **methacrylate monomers in directly printed aligner materials can be a source of genotoxicity, which can impact the DNA by producing reactive oxygen species**."*
6. **Monómeros identificados como lixiviáveis:** **UDMA, HEMA, EGDMA** (Tangpothitham et al.); a autoclavagem 132 °C/4 min reduziu significativamente a eluição destes três.
7. **Comparação de materiais:** entre Invisalign®, Dental LT® e Accura 60®, o Invisalign teve a menor citotoxicidade **mas não é diretamente imprimível**; entre os imprimíveis, **Dental LT® < Accura 60®** em citotoxicidade.

**O que o pós-processamento faz a isto (direção e magnitude):**

| Intervenção | Efeito sobre monómero residual/biocompatibilidade |
|---|---|
| **Lavagem adequada (solvente + tempo)** | Remove o monómero não reagido da superfície → *"3D-printed dental devices are found to possess superior biocompatibility after being washed with the proper solvent for an appropriate amount of time."* **O TEMPO importa mais que o TIPO de solvente** — Hwangbo: *"determining a proper washing duration is more critical than the type of solvent used to increase viability"*; Lambart: **diferença não significativa de citotoxicidade entre solventes diferentes**. |
| **Tempo de lavagem** | Hwangbo: **≥60 min para atingir 60% de cell viability**; até 90 min continua a melhorar. Xu: **5 min com ultrassons já suficiente**, sem ganho adicional. → dependente do sistema. |
| **Ultrassons / centrifugação** | Melhoram cell viability e eluição de monómeros; **5 min de sonicação > 2 h de imersão** (Gonzales) e *"no presence of unreacted compounds post-washing"*. |
| **Temperatura da lavagem** | ↑ temperatura → **↑ DC e ↑ cell viability**, mas ↓ flexural strength e ↓ dureza (Oh et al.). |
| **Post-curing (UV/calor)** | *"The improvement in biocompatibility can be attained by **eliminating the double bonds and obtaining a fully solid state of the resin, increasing the degree of conversion, and removing the excess liquid resin**."* Lin et al.: *"**isopropanol washing and UV post-curing reduce monomer leaching by tightening polymer chains and enhancing the overall degree of conversion**"* — apesar de DC <50%, **os testes de citotoxicidade não mostraram morte celular**, o que os autores atribuem à conversão espacial não uniforme (superfície mais convertida que o interior). |
| **Duração do post-curing** | Aati et al.: durações prolongadas **reduzem citotoxicidade**. Kim et al.: dureza, DC e biocompatibilidade melhoram com duração. **Contraponto:** Xu et al.: tempos prolongados melhoraram superfície e flexural strength **mas não afetaram significativamente a citotoxicidade**. |
| **Atmosfera de azoto** | Elimina a camada inibida por oxigénio → melhor polimerização e exatidão dimensional (Vara et al.). |
| **Autoclavagem 132 °C / 4 min** | ↓ eluição de UDMA/HEMA/EGDMA, ↑ microdureza, ↓ water sorption/solubility, ajuste mantido clinicamente aceitável. |
| **Water sorption como vetor de degradação** | A absorção de água *"has a negative impact on the biocompatibility and degradation rate"*, e causa *"dimensional changes, retention loss, and margin contour fracture of the dental crowns."* Mecanismo: difusão para micro-voids + interações moleculares dependentes da polaridade da resina → *"reduction in the material's strength, chemical degradation, and **release of residual monomers**."* **Materiais impressos têm maior solubilidade em água que os termopolimerizados convencionais**, porque *"the 3D-printed parts are exposed to elevated temperatures for a shorter period of time."* |
| **⚠️ Nota metodológica** | *"In most 3D printing resins, toxicity measurement is usually performed **once the parts are fully cured**"* → os dados de citotoxicidade publicados refletem a peça idealmente processada, **não** a peça mal processada da clínica. |

⚠️ O limiar ISO 10993-5 (<70% de viabilidade = citotóxico) **não consta nas fontes**.

---

## E. RESTAURAÇÕES DEFINITIVAS IMPRESSAS — [V1]

> **AVISO OBRIGATÓRIO ANTES DE USAR:** este é um **post de blog comercial**, sem uma única referência bibliográfica, publicado no site de uma loja de material dentário, com links de venda intercalados no texto. Não é um "risk-management paper". As afirmações abaixo são **opinião estruturada de um professor de prostodontia**, não evidência. Devem ser apresentadas como **"framework de decisão proposto"**, e idealmente **verificadas contra literatura primária** antes de irem para o slide.

### E.1 Onde o autor situa as restaurações definitivas impressas hoje

TL;DR literal do texto: *"3D-printed permanent restorations are **clinically viable in selected low-load, low-risk cases—but they are not yet a universal replacement for ceramic or milled CAD/CAM restorations**. Success depends on rigorous case selection, controlled occlusal management, precise bonding execution, and a structured maintenance strategy. **They behave more like advanced composite restorations than ceramics**: effective when used appropriately, problematic when used indiscriminately."*

Enquadramento: *"the gap between a laboratory-validated material and a chairside clinical outcome is where most complications are born"*; as definitivas *"must survive years of occlusal loading, chemical exposure from saliva and diet, and the biological demands of the oral environment. They must bond reliably, wear predictably, and resist fracture... **That is a significantly higher bar, and 3D-printed composite resins are only beginning to clear it.**"*

### E.2 Critérios de decisão propostos

**Indicações favoráveis:**
- Onlays posteriores substituindo cúspides em pacientes com **oclusão controlada**
- Facetas anteriores em **zonas não funcionais**
- Restaurações interinas de **longa duração** (temporização prolongada)
- Restaurações **antagonistas a próteses totais** ou a antagonistas de baixo desgaste

**Alto risco — cautela ou evitar:**
- Coroas posteriores de **contorno total em bruxómanos** ou oclusores pesados
- **Coroas unitárias implanto-suportadas em região molar**
- **Próteses implanto-suportadas de arcada completa**
- Pacientes com **parafunção ativa** (bruxismo, apertamento, interposição lingual)

**Lógica biomecânica declarada:** *"Printed composite resins, regardless of brand or formulation, are not ceramics. Their **flexural strength, hardness values, and fracture toughness fall below those of zirconia and lithium disilicate**."* E, em implantes: *"the **absence of a periodontal ligament removes the shock-absorption mechanism**... Any material weakness translates directly—and without dampening—into stress at the implant-abutment interface."*

**Framework de 5 passos:**
1. **Avaliar condições de carga** — baixa (anterior, antagonista mole, unidade única) → considerar impresso; alta (molar, bruxómano, oclusão pesada) → cerâmica ou metalocerâmica.
2. **Avaliar perfil de risco do paciente** — oclusão controlada, sem parafunção → indicação possível com monitorização.
3. **Definir tipo de restauração e expectativas** — interina de longa duração = indicação forte; coroa posterior definitiva sobre implante = cautela, aguardar evidência mais forte.
4. **Planear manutenção proativamente** — **recalls a 3–6 meses, não anuais**; monitorização oclusal sistemática e polimento em cada visita; educar o paciente **antes** da entrega.
5. **Definir uma estratégia de saída (exit strategy)** — documentar ajuste marginal, contactos oclusais e estado de superfície **no dia da entrega** (baseline); estabelecer limiares clínicos que desencadeiam substituição; informar o paciente da possibilidade de substituição futura **como contingência planeada, não como falha**.

### E.3 Modos de falha identificados

- **Desgaste oclusal e perda de contactos cêntricos** — *"typically the earliest sign"*
- **Rugosidade de superfície e pigmentação** — progride à medida que o brilho se perde
- **Descimentação (debonding)** — frequentemente por erros no protocolo de tratamento de superfície ou contaminação
- **Fratura sob carga elevada** — sobretudo coroas posteriores de contorno total em bruxómanos
- Em implantes cimentados: **degradação do cimento na margem peri-implantar**

**Cadeia biológica do desgaste (o argumento mais interessante do texto):**
*"faster surface wear compared to ceramic alternatives, progressive loss of gloss, and increased surface roughness"* nos **6 a 12 meses** após a entrega → *"These are **not cosmetic inconveniences. They carry biological consequences**. Surface roughness, even at the microscopic level, dramatically increases plaque retention"* → cáries secundárias em dentes; em implantes, *"rough surfaces adjacent to the peri-implant sulcus may accelerate bacterial colonization, increasing the risk of peri-implant mucositis or, over longer timeframes, peri-implantitis."*
Frase-chave para a aula: *"**The day-of-delivery photograph is not a clinical outcome measure. It is a starting point.**"*

### E.4 Adesão (protocolo proposto)
- **Jateamento com Al₂O₃ a 50 µm** → aumenta energia de superfície e cria retenção micromecânica; *"This step is **not optional**—it is foundational."*
- **Primers contendo MDP** → adesão química à matriz polimérica.
- **Timing crítico:** aderir **imediatamente** após o tratamento de superfície; qualquer atraso permite contaminação por saliva, humidade do ar ou luvas.
- *"Manufacturer protocols are not suggestions... generic ceramic bonding workflows may not perform equivalently on printed substrates."*

### E.5 Fluxo chairside — variáveis de processo que o autor lista
Explicitamente: **calibração da impressora, prazo de validade e condições de armazenamento da resina, orientação de impressão** (*"which affects surface properties and internal stress distribution"*)**, espessura de camada, adequação do protocolo de lavagem, e duração e intensidade do post-cure**. *"Each of these variables can influence the clinical performance of the final restoration. Each requires active management."*
Sobre o post-curing: *"**Post-curing is arguably the most critical step in the entire chairside workflow.** It determines the final mechanical properties, surface hardness, and biocompatibility... Insufficient post-curing—in terms of irradiance, exposure time, or wavelength match—produces a material with compromised properties."*
Controlo de qualidade pré-entrega: inspeção visual sob ampliação, verificação de ajuste marginal e mapeamento oclusal — *"in every case—without exception."*

### E.6 Lacunas de evidência que o autor reconhece
- *"Short-to-medium-term data (**two to four years**) shows acceptable outcomes for anterior and low-load posterior applications. **Long-term five-year-plus data is limited.**"*
- Para adoção alargada (incluindo posterior e sobre implantes) faltam: **resistência de material melhorada e padronizada, ensaios clínicos prospetivos de longo prazo, protocolos de pós-processamento validados, e integração de análise oclusal em tempo real no fluxo chairside.** *"The timeline is measured in years, not decades."*
- Sobre regulação: *"regulatory clearance establishes **baseline safety, not long-term clinical equivalence**."*
- Postura recomendada: *"**structured enthusiasm**: adopt where evidence supports it, monitor rigorously, and advance the protocol as the data warrants it."*
- Comunicação: os pacientes devem entender que estas restaurações *"are advanced but not yet equivalent to ceramic prostheses in longevity... They represent a **controlled-risk solution, not a permanent guarantee**."*
- Conclusão: *"the role of innovation is to **enhance clinical judgment, not replace it**."*

⚠️ **Nenhum dos números ou afirmações acima tem citação.** As afirmações "2–4 anos", "6–12 meses", "50 µm", "3–6 meses" são **asserções não referenciadas**.

---

## F. VOCABULÁRIO DE EXATIDÃO — como é usado NESTAS fontes

| Termo | Como é operacionalizado nas fontes |
|---|---|
| **Trueness** | Só aparece operacionalizada em [F1], Table 2, entrada Vara et al. 2023: **trueness = median error**. |
| **Precision** | Idem: **precision = interquartile range (IQR)**. |
| **Accuracy / dimensional accuracy** | Usado de forma solta em ambos os artigos como "conformidade dimensional ao desenho CAD". ⚠️ **A definição formal ISO 5725 (accuracy = trueness + precision) NÃO consta nas fontes.** |
| **Marginal discrepancy / marginal gap** | [F2], definição operacional explícita: *"the **vertical distance between each fabricated crown margin and corresponding abutment preparation finish line, parallel to the tooth axis**"*, medida a 40×, em **4 sítios axiais médios** (bucal, mesial, lingual, distal), com a média dos 4 a constituir o valor do espécime. Método justificado como **não destrutivo**, sem necessidade de materiais intermédios (silicone ou cimento) e permitindo medição em múltiplos sítios. |
| **Internal fit** | **Não foi medido em [F2].** O que existe é o **cement space virtual (die spacer) de 30 µm** definido em CAD, justificado por Habib et al. e Zheng et al. Os autores notam que *"a thicker cement spacing may be appropriate for therapeutic applications"* e que *"thick cement space would have removed minor discrepancies between the modifications"* — ou seja, um cement space generoso **mascara** diferenças entre grupos, e por isso escolheram 30 µm (mais exigente). |
| **Limiar clínico de ajuste marginal** | **120 µm.** Fonte citada em [F2]: **McLean JW, von Fraunhofer JA. "The estimation of cement film thickness by an in vivo technique." Br Dent J 1971;131:107–111.** É o clássico estudo in vivo de McLean & von Fraunhofer. Todos os 6 subgrupos de [F2] ficaram abaixo (40–89 µm). |
| **Limiar de cor** | [F3]: **ΔE ≤ 2,6** e **ΔE ≤ 5,5** (citando Kim et al. 2021, *Materials* 14:650), mais **ΔE ≤ 3,7** (Johnston & Kao, *J Dent Res* 1989;68:819–22). Os autores declaram explicitamente que não há gold standard consensual. **Fórmula usada: ΔE = √[(ΔL\*)² + (Δa\*)² + (Δb\*)²]** → é **ΔE_ab (CIE76)**, não CIEDE2000. |
| **Limiar de monómero residual** | **< 18 wt% de resíduo de superfície**, "according to medical standards" [F1] — norma não identificada. |
| **Limiar de degree of conversion** | **DC < 50%** = presença de monómeros não reagidos com potencial de lixiviação e morte celular [F1, citando Lin et al.]. Melhor DC reportado numa unidade comercial: **69,6%** (Phrozen Cure V2, 45 min). |
| **Limiar mecânico funcional** | Força de mordida humana **50–700 N, média 400 N**; alinhador não curado colapsou a **380 N** [F1, Jindal et al.]. |
| **RMSE** | Mencionado em [F2] (Alharbi et al.) como métrica de exatidão dimensional para superfícies inteiras — **mais alto na zona com supports**. |

---

## G. AS AFIRMAÇÕES CAUSA → EFEITO MAIS DEFENSÁVEIS (e as indefensáveis)

### ✅ G.1 — Ensináveis como conteúdo central

**1. O build angle altera a discrepância marginal de coroas impressas, e 0° (oclusal paralela à plataforma) é superior a 45° e a 90°, em DLP e em SLA.**
Números: 0° = 48,5 ± 9,04 µm; 45° = 62,5 ± 8,05 µm; 90° = 80,5 ± 8,99 µm; todos os pares p < 0,001 (Tukey). Efeito replicado independentemente nas duas tecnologias (SLA 40→55→72; DLP 57→70→89).
Mecanismos suportados pela própria fonte: staircase effect; sobre-polimerização na parede bucal intaglio a 90° por entrada de luz em área maior com menor distância de penetração; alteração da forma da camada → alteração da forma e do grau da contração de polimerização; posição dos supports junto à margem a 90° com risco de dano na remoção; distorção gravitacional de overhangs.
**Fonte: [F2] Farag et al., BMC Oral Health 2024;24:73.**
Ressalva a dizer em voz alta: **todos os grupos ficaram abaixo do limiar de 120 µm** — logo o efeito é **real e estatisticamente robusto**, mas **a sua relevância clínica neste desenho específico é limitada**. A frase de aula é: *"a orientação move o resultado de forma previsível; não é a diferença entre sucesso e fracasso numa coroa unitária de molar em condições ideais de laboratório — mas é margem de segurança que se gasta ou se poupa."*

**2. A duração e a temperatura do post-curing controlam o degree of conversion, e o DC controla simultaneamente as propriedades mecânicas e a biocompatibilidade — mas com direções OPOSTAS a partir de certo ponto.**
- Duração: 15 → 45 min **aumentou significativamente o DC**, com máximo de **69,6%** (Kirby et al.).
- Temperatura: relação linear com declive **0,15**, e **a temperatura foi 12× mais efetiva que o intervalo de post-curing**; DC máximo a 100–125 °C, o que torna o post-curing intraoral impraticável (Bagis et al.).
- Mas: **DC ótimo a 60 °C/30 min e queda a 80 °C** (oxigénio ligado a radicais livres como inibidor), enquanto **a exatidão dimensional é melhor a temperaturas mais baixas**; ótimo global proposto = **15 min a 40 °C** (Katheng et al.); **≤ 66 °C** para bases de prótese.
- E: **over-curing → depolymerization, brittleness e propriedades inferiores**; contração durante o crosslinking → perda de exatidão dimensional.
**Fonte: [F1] Hassanpour et al., Polymers 2024;16:2795.**
Frase de aula: **"o post-curing não é 'quanto mais, melhor' — é uma janela. Fora dela em qualquer direção, perde-se."**

**3. A lavagem tem uma janela ótima: lavagem insuficiente deixa monómero residual (citotoxicidade, rugosidade), lavagem excessiva plastifica e degrada a peça.**
- Insuficiente: monómero de superfície não polimeriza no post-cure porque **o oxigénio o inibe**; monómero residual → citotoxicidade, genotoxicidade por espécies reativas de oxigénio (alinhadores), e **substrato para bactérias cariogénicas**; **≥60 min de lavagem para atingir 60% de cell viability** (Hwangbo et al.); **10 min maximizou DC e minimizou monómero residual** (Jang et al.).
- Excessiva: **>12 h → queda da flexural strength e fissuras superficiais**, por penetração do solvente com expansão, tensão, pressão osmótica e relaxamento da rede polimérica (Xu et al.); **flexural modulus diminui** com lavagem prolongada (Hwangbo et al.); **tensile strength cai por formação de voids** (Nowacki et al.).
- E: **o tempo de lavagem importa mais do que o tipo de solvente** para viabilidade celular (Hwangbo et al.; corroborado por Lambart et al., sem diferença significativa de citotoxicidade entre solventes).
**Fonte: [F1] Hassanpour et al., Polymers 2024;16:2795.**

**4. A intensidade e o tempo do post-curing são intercambiáveis dentro de uma janela de energia, e essa energia determina a cor final da restauração — sendo o efeito dependente da espessura da peça.**
- Alta intensidade + tempo curto = estabilidade de cor: **860 mW/cm² durante 5 min** foi a melhor condição para o single crown; com 10–15 min, **210 mW/cm²** passa a ser suficiente.
- Energia ótima declarada: **4000–8000 mW·min/cm²**.
- **Efeito de espessura:** o single crown (mais fino) teve **ΔE claramente maior** que o pontic; no pontic **todas as superfícies bucais atingiram valores aceitáveis**, no single crown **apenas a cúspide bucal na melhor condição** (ΔE = 5,35 ± 0,47).
**Fonte: [F3] Sahrir et al., J Dent Sci 2024;19:357–363.**
Ressalva a mencionar: o ΔE é calculado contra o padrão nominal VITA A2, com CIE76; os limiares usados (2,6 / 5,5 / 3,7) são reconhecidos pelos próprios autores como controversos; e a tabela de energia tem as unidades erradas.

### ❌ G.2 — NÃO defensáveis / a não apresentar como evidência

**De [V1] Medsta (blog comercial):**
- ❌ *"Short-to-medium-term data (two to four years) shows acceptable outcomes"* — **sem qualquer citação**. Não verificável.
- ❌ *"Emerging clinical observations—from case series, single-arm studies, and increasingly from multicenter data—suggest a consistent pattern"* — **nenhum estudo é nomeado**.
- ❌ *"Airborne particle abrasion (50 µm Al₂O₃)... is not optional—it is foundational"* — protocolo específico apresentado como imperativo, sem dados.
- ❌ *"Shortened recall intervals (three to six months rather than annual)"* — opinião, sem base citada.
- ❌ A menção nominal de **SprintRay Pro95, Formlabs Crown Resin e NextDent** como *"commonly referenced in clinical literature"* — sem referências, num site que vende produtos.
- ❌ Todas as afirmações regulatórias (FDA / marcação CE para coroas, inlays, onlays e facetas definitivas) — não verificáveis a partir do documento.
- ⚠️ **Conflito de interesses não declarado no corpo do texto**: links de venda para polimento, adesivos com MDP, cimentos e unidades de fotopolimerização, exatamente nos parágrafos que recomendam esses produtos.

**De [V3] Phrozen — a contradição mais útil da aula:**
- ❌ *"you only need to cure your model for **1 minute** to achieve good mechanical properties and precision"* — **contradiz diretamente** a literatura peer-reviewed: Kirby et al. mostram o DC ainda a subir de 15 para 45 min; Jindal et al. exigem 15–20 min; Soto-Montero 5–10 min. A própria Phrozen atenua logo a seguir (*"Different resins have different post-curing times"*), o que expõe a natureza material-específica da afirmação. **Nota justa:** trata-se de um **modelo de diagnóstico** (sem contacto intraoral, baixa exigência mecânica), pelo que 1 min pode ser adequado *para aquela resina e aquela aplicação* — mas a transferência para dispositivos intraorais seria um erro grave. **É este o ponto pedagógico.**
- ❌ *"$1.2 per print"* e *"ready to use in under 25 minutes"* — marketing.
- ⚠️ *"ultrasonic cleaner and 95% alcohol for 120 seconds"* — 2 min, no limite inferior do que a literatura suporta (Xu et al.: 5 min com ultrassons); não é errado, mas não é justificado por dados no documento.
- ⚠️ Recomendação de curar em qualquer aparelho *"as long as it emits the same wavelength (405 nm)"* — **incompleto**: [F1] mostra que **irradiância, tempo, temperatura, atmosfera e posição na câmara** também alteram DC, dureza e cell viability (Bayarsaikhan: flexural strength igual entre aparelhos, mas **DC, Vickers e cell viability variaram consideravelmente**).

**De [V2] Rapid Shape:**
- ❌ *"Tilt models at approximately **20–30°** to reduce suction"*, *"tilt them **65–75°** to maximize platform capacity"* — números específicos apresentados como regras, **sem qualquer dado**. E note-se: o argumento é de **capacidade de plataforma e sucção**, **não de exatidão** — o que **entra em tensão direta** com [F2], que mostra que inclinar aumenta o gap marginal. Em modelos (tolerância maior) o compromisso pode ser aceitável; em coroas, não é a mesma conversa. **Excelente slide de contraste.**
- ❌ *"washing... usually **6–8 minutes** total"* e *"**6–10 minutes** depending on the material"* de cura — parâmetros proprietários do ecossistema Rapid Shape, não generalizáveis.
- ❌ *"over **200 validated materials**"*, *"intelligent connectivity"*, reconhecimento RFID — marketing.
- ⚠️ *"wall thickness of at least **2–3 mm**"* para modelos ocos — regra prática sem dados.
- ✅ **Corroborado pela literatura (usar):** *"Insufficient washing leaves uncured resin residue that compromises surface finish, marginal fit, and biocompatibility. Incomplete curing leaves the material in a '**green**' state, mechanically weak, dimensionally unstable due to continued resin shrinkage, and potentially non-compliant with medical biocompatibility standards. **Neither step should be shortened or skipped.**"* — esta passagem está alinhada com [F1]. É um bom exemplo de que **documentos comerciais podem estar corretos** — mas a correção tem de vir da verificação contra literatura, não da confiança na fonte.

**De [F2] (peer-reviewed, mas com uma conclusão que NÃO se sustenta):**
- ⚠️ ❌ **"SLA é mais exato do que DLP"** — a diferença é real (55,6 vs 72 µm, p < 0,001), **mas está confundida com resina diferente e protocolo de pós-processamento diferente**. Os próprios autores atenuam no fim: *"studies showed that **there is no one 3D printing method that is better than another** and that a well picked technology will perform the needed purpose."* **Não ensinar "SLA > DLP".**

---

## H. FIGURAS PARA RECRIAR (esquemas e animações)

### H1. **[ANIMAÇÃO — a figura-âncora da aula] "Um ângulo, quatro consequências"**
Uma coroa de molar mostrada a 0°, 45° e 90° na plataforma. Ao rodar (slider de 0→90°), quatro painéis sincronizados mudam em simultâneo:
1. **Fatiamento:** a secção transversal por camada muda de forma e área; o contorno da margem passa de "uma camada, um anel" para "degraus escalonados".
2. **Staircase:** zoom na margem cervical mostrando os degraus de 50 µm a crescer com o ângulo.
3. **Supports:** contadores animados — nº de supports ↓ e distância supports-margem ↑ quando se roda de 90° para 0°; a 90°, os supports acendem a vermelho junto à margem ("zona de dano na remoção").
4. **Barra de resultado:** o gap marginal medido preenche em tempo real — SLA 40 → 55 → 72 µm; DLP 57 → 70 → 89 µm — com a linha vermelha dos **120 µm** de McLean & von Fraunhofer fixa no topo, sempre acima de todas as barras.
Fonte: [F2].

### H2. **Esquema "Por que 90° sobre-polimeriza a parede bucal"**
Corte transversal da coroa a 0° e a 90°, com feixes de luz vindos de baixo. A 90°, o feixe atinge a **parede bucal com área maior e distância de penetração menor** → sobreposição de dose ilustrada por gradiente de cor (mapa de dose acumulada). Legenda: *"a mesma resina, a mesma máquina, o mesmo tempo — dose local diferente porque a geometria da camada mudou."*
Fonte: [F2].

### H3. **[ANIMAÇÃO — o mecanismo mais importante da aula] "Gel point e o monómero aprisionado"**
Animação molecular em 3 fases:
- **Fase 1 (pré-gel):** monómeros livres, alta mobilidade, difusão rápida, cadeias a crescer depressa.
- **Fase 2 (gel point):** a rede 3D fecha-se; **a mobilidade colapsa**; monómeros ficam presos em bolsos → contador de DC estagna (~40–50%).
- **Fase 3 (post-cure):** entra energia (UV 405 nm e/ou calor); a mobilidade sobe de novo; o contador de DC sobe para ~70%; monómeros presos convertem-se; a barra "monómero lixiviável" esvazia-se em espelho.
Sobrepor as duas linhas horizontais: **DC 50% (limiar de lixiviação/morte celular)** e **DC 69,6% (melhor valor medido, 45 min)**.
Fonte: [F1].

### H4. **Esquema "Camada de inibição por oxigénio"**
Superfície da peça com O₂ a difundir e a capturar radicais livres → camada superficial pegajosa não polimerizada. Três painéis de intervenção lado a lado:
(a) **lavagem** remove-a; (b) **atmosfera de azoto** impede-a de se formar (→ melhor exatidão dimensional, Vara et al.); (c) **cura submersa em água/glicerina** limita o O₂ (Nowacki: ↑dureza) **mas** plastifica a superfície (Scherer: seco > água > glicerina). Terminar com um ponto de interrogação explícito: **"duas fontes peer-reviewed discordam — porquê?"**
Fonte: [F1].

### H5. **[ANIMAÇÃO] "A janela da lavagem" — curva em U**
Eixo x = tempo de lavagem (log: 5 min → 10 min → 60 min → 90 min → 12 h). Duas curvas sobrepostas:
- 🟢 **Biocompatibilidade/cell viability** — sobe (60% aos 60 min, continua a melhorar até 90 min);
- 🔴 **Integridade mecânica** (flexural modulus / tensile strength) — desce, com queda abrupta e **fissuras superficiais desenhadas para além das 12 h**.
A **zona verde de sobreposição** ilumina-se entre ~5 e ~30 min. Sobrepor os marcadores dos estudos: Jang (10 min, DC máx.), Xu (5 min com ultrassons já basta; >12 h = falha), Hwangbo (60 min para 60% viabilidade), Scherer (5→8 min, flexural strength ↑).
Fonte: [F1].

### H6. **Mapa de calor 5×3 do post-curing e da cor**
Grelha: linhas = intensidade (105, 210, 420, 630, 860 mW/cm²), colunas = tempo (5, 10, 15 min); cada célula com o valor de energia (525 → 12 900 mW·min/cm²) e colorida pelo ΔE. Sobrepor a **banda diagonal iso-energia de 4000–8000** (o ótimo declarado) e as **linhas de limiar ΔE = 2,6 / 3,7 / 5,5**. Duas grelhas lado a lado: **SC (fino)** vs **PO (espesso)**, para mostrar visualmente que a peça mais fina falha mais células.
Fonte: [F3]. **Incluir uma nota de rodapé sobre o erro de unidades.**

### H7. **Diagrama de cadeia "processo → propriedade → performance"** (o esqueleto da aula)
Três colunas com setas atravessando:
- **Processo:** orientação · espessura de camada · solvente · tempo/temperatura de lavagem · método de lavagem · irradiância · comprimento de onda · tempo de post-cure · temperatura · atmosfera · posição na câmara · polimento
- **Propriedade:** degree of conversion · monómero residual · crosslinking/Tg · flexural strength e modulus · dureza (Vickers/Knoop/Martens) · anisotropia · contração · rugosidade · water sorption · cor (ΔE)
- **Performance:** ajuste marginal · retenção/adesão · fratura · desgaste · retenção de placa e cárie secundária / peri-implantite · citotoxicidade e genotoxicidade · estabilidade estética · longevidade
Colorir as setas por **direção do efeito**, e marcar a **cinzento** as que os artigos dizem estar em disputa (ex.: cura molhada; anisotropia após post-cure; efeito da intensidade UV no DC).

### H8. **Reconstrução da Table 1 de [F1] — "o que cada variável de processo realmente controla"**
Matriz de variáveis de input (solvente, duração da lavagem, método de lavagem, temperatura de post-cure, duração, comprimento de onda, condição de cura) × atributos, com distinção visual entre **critical attributes** (mechanical strength, biocompatibility, dimensional accuracy, surface quality, degree of conversion, flexural strength) e **non-critical** (elastic modulus, surface roughness, colour stability, water absorption, aesthetic appeal). É a figura mais "professoral" de todo o conjunto e transmite de imediato a mensagem *"nenhuma variável de processo é neutra"*.
Fonte: [F1] Table 1.

### H9. **Slide de literacia científica — "Três documentos, três estatutos"**
Três cartões lado a lado com a **primeira página real** de cada: [F2] BMC Oral Health (com DOI, n, ANOVA, p-values) | [V1] blog Medsta (com o banner "Free shipping over 500LE" e o widget de chat visíveis) | [V3] Phrozen (com o formulário "I am interested in"). Por baixo de cada, a mesma pergunta: *"Quanto tempo devo pós-polimerizar?"* → Respostas: **"15 → 45 min aumenta o DC; 69,6% aos 45 min" | "post-curing é o passo mais crítico" (sem número, sem fonte) | "1 minuto".**
Esta é provavelmente a figura de maior retorno pedagógico de todo o conjunto.

### H10. **Esquema "Desgaste → rugosidade → biologia"** (para a parte clínica)
Linha temporal de 0 → 6 → 12 meses: perda de gloss → aumento da rugosidade → retenção de placa → (dente) cárie secundária / (implante) mucosite e peri-implantite. Anotar em cada seta se é **suportada por dados nas fontes** (não é — [V1] não cita) e ligar ao dado que **está** nas fontes: o polimento é o que domina o gloss ([F1], Lassila et al.) e a orientação de impressão determina rugosidade, hidrofilicidade e energia de superfície, que governam adesão microbiana ([F1], Shim et al.). **Isto permite ensinar a cadeia com honestidade epistémica.**

---

## NOTAS FINAIS PARA O PLANEAMENTO DA AULA

1. **A espinha científica pedida ("como foi impresso determina o comportamento clínico") está bem suportada** — mas repousa sobre **apenas 3 fontes revistas por pares** deste conjunto, das quais **uma revisão narrativa** faz o trabalho pesado. Os dois estudos primários são **in vitro, de célula pequena (n=10) e sem envelhecimento**.
2. **O documento que parecia ser o pilar clínico ([V1]) é publicidade.** Recomendo fortemente ou (a) substituí-lo por literatura primária sobre restaurações definitivas impressas, ou (b) usá-lo deliberadamente como **objeto de análise crítica** — o que, honestamente, dá uma aula melhor.
3. **Metais (debinding/sintering): não consta nas fontes.** Se a aula tiver de cobrir metais, é preciso material adicional.
4. **Duas contradições reais entre estudos peer-reviewed** valem ouro pedagógico: (a) cura seca vs molhada (Scherer vs Nowacki); (b) o efeito da intensidade UV no DC (Wu: sem efeito no DC / [F3]: intensidade governa a cor). Ambas se resolvem pela mesma ideia: **irradiância governa a taxa; energia total, temperatura e atmosfera governam o estado final.**
5. **Três erros/inconsistências verificáveis nos artigos** ([F3]: unidades de energia e n inconsistente; [F2]: comparação DLP-vs-SLA confundida) podem ser usados, se quiser, como exercício de leitura crítica em vez de serem apenas ignorados.
agentId: a0d42474bacf7a76f (use SendMessage with to: 'a0d42474bacf7a76f', summary: '<5-10 word recap>' to continue this agent)
<usage>subagent_tokens: 185393
tool_uses: 25
duration_ms: 702311</usage>