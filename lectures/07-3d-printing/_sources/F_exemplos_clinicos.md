# F — Exemplos clínicos, números e galeria de falhas (pesquisa web, 2026-08-10)

Flags: 🅜 marketing/claim de fabricante · 🅟 paywall/login · 🅒 imagem proprietária, **redesenhar**

## 1. O gancho de abertura

> **A Align Technology produz mais de 1 milhão de dispositivos customizados por dia** — a maior operação de impressão 3D do mundo.
Srini Kaza (EVP de P&D da Align), *Orthodontic Products*, 1 jul 2025:
https://orthodonticproductsonline.com/treatment-products/aligners/inside-align-technols-million-custom-appliances-a-day-3d-printing-operation/
(era ~700.000/dia em abr 2021 · fábricas em Juárez, Xiyang e Wrocław) 🅜 mas declarado publicamente, com data.

**O twist que faz a aula:** hoje o alinhador **não é impresso**. O *modelo* é impresso e o alinhador é termoformado sobre ele e recortado. A impressão 3D em ortodontia é, majoritariamente, **impressão de ferramental descartável**.
E a Align comprou a vienense **Cubicure** por ~€79 milhões (jan 2024) exatamente para deixar de fazer isso — tecnologia *Hot Lithography*, resinas viscosas, alinhador direct-printed. Primeiro produto: **Invisalign Palatal Expander** (FDA dez/2023).
https://www.businesswire.com/news/home/20240103882681/en/ · https://www.additivemanufacturing.media/articles/qa-with-align-svp-why-the-invisalign-manufacturer-acquired-cubicure-and-the-future-of-personalized-orthodontics

## 2. Adoção e escala

**Laboratórios dos EUA com impressora 3D** (Key Group, *2022 U.S. Dental Laboratory report*, via https://www.prodways.com/resources/3d-printing-transforming-dental-manufacturing/ 🅜🅟):
2014 **~10%** → 2022 **57%**. Labs grandes **97%** · labs pequenos **34%**.
**Milling no mesmo período: 39% → 67%** — as duas cresceram. Não é substituição.
Segmento **in-lab = 83,6%** do mercado projetado 2026 (Grand View) — o laboratório, não a clínica, é onde a impressão acontece.

**Tamanho de mercado — cinco consultorias discordam (isso é um slide em si):**

| Consultoria | Valor | Ano | URL |
|---|---|---|---|
| Grand View | US$ 4,89 bi | 2025 | https://www.grandviewresearch.com/industry-analysis/dental-3d-printing-market |
| Grand View | US$ 6,16 bi | 2026 | idem |
| Precedence | US$ 6,30 bi | 2026 | https://www.precedenceresearch.com/dental-3d-printing-market |
| MarketsandMarkets | US$ 3,96 bi | 2025 | https://www.marketsandmarkets.com/Market-Reports/dental-3d-printing-market-258228239.html |
| Polaris (via Prodways) | US$ 3,18 bi | 2024 | — |

Todos 🅜🅟. **Uso didático:** projetar as cinco linhas. *"Mesmo mercado, mesmo ano, diferença de 60%. Quando alguém mostrar um número de mercado num congresso, pergunte de onde veio."*

## 3. Parâmetros concretos que o professor pode citar

Fonte principal: https://dental.formlabs.com/materials/ + application guides (todos 🅜)

| Aplicação | Parâmetro citável |
|---|---|
| Modelos ortodônticos | 1 modelo a cada **49 s**; 11 arcos em job de 9 min; 95% da superfície dentro de **100 µm** do digital |
| Modelos restauradores | >99% dentro de 100 µm; placa cheia a 50 µm em <8 h |
| Layer height × tempo | 160 µm = 3 h · 100 µm = 4,5 h · **50 µm = 7,5 h** (mesma placa) |
| Moldeira individual | impressa a **200 µm** de propósito (throughput) |
| Guia cirúrgico | parede **≥2,0 mm**; offset dos dentes 0–0,07 mm; offset da sleeve 0–0,040 mm; **12 guias em 48 min** |
| Splint rígido (Dental LT Clear V2) | offset de CAD **0,05–0,10 mm** |
| Base de prótese total | base **>2,0 mm**; orientação **60°**; supports **na intaglio** |
| Dentes de prótese | arco a 0–30°; gap de colagem base–dente ≤0,1 mm |
| Coroa definitiva chairside | SprintRay Ceramic Crown (**>50% cerâmica**, FDA 510(k) Class II): coroa em ~10 min, fluxo <45 min |
| SprintRay Midas (Digital Press SLA, cápsula) | **3 coroas OU 6 inlays/onlays OU 9 facetas por ciclo de 10 min** (IDS 2025) |
| Castable Wax Resin | **20% de cera**, não requer post-cure |
| Ciclo padrão | Print → **Wash 5–10 min** → **Cure 1–10 min** |

**Outras tecnologias:** RPD Co-Cr por **SLM**, camadas 20–50 µm, câmara com argônio.
Prótese total monolítica multicolorida por **material jetting** (Stratasys J5 DentaJet + TrueDent): **5 resinas jateadas e curadas simultaneamente**, base e dentes numa peça só, sem montagem — https://www.stratasys.com/en/dental/materials/truedent/ 🅜
Guia endodôntico (canal calcificado), case report open access: https://pmc.ncbi.nlm.nih.gov/articles/PMC12554005/ · revisão com figuras: https://www.mdpi.com/1660-4601/19/16/9958

## 4. Galeria de falhas — o ativo mais valioso

**Fonte-mãe (galeria visual gratuita, sem login):** https://formlabs.com/support/Diagnosing-a-print-failure/ 🅒 redesenhar

| Defeito | O que a imagem mostra |
|---|---|
| **Raft silhouetting** | Plataforma quase vazia com só a silhueta achatada do raft; o resto ficou no tanque |
| **Non-adherence** | Plataforma completamente limpa; a peça boia no tanque |
| **Delamination** | **Fenda horizontal nítida** separando dois blocos de camadas |
| **Cupping blowout** | Parede côncava com ruptura irregular, rasgada, como implodida |
| **Volume explosion** | Buraco que começa pequeno e se abre para cima através das camadas |
| **Layer shifting (X)** | Degrau lateral abrupto na mesma altura em todas as peças |
| **Rashing / ragging** | Abas finas de resina parcialmente curada; textura esfarrapada |
| **Elephant's foot** | Base com material extra espalhado como um pé |
| **Overcompression** | Raft esmagado, peça mais baixa que o esperado |

**Cupping blowout é a mais ensinável** (https://formlabs.com/support/Cupping-Blowout/): a região côncava vira ventosa; ao subir a plataforma no *peel* o volume aumenta → queda de pressão → a diferença empurra as paredes para dentro → parede fina encurva e rompe. O PreForm tem toggle **"Show Cups"** que pinta as ventosas.
Pergunta de aula: *por que um modelo de arco completo oco é exatamente uma ventosa?*

**Guia de falhas especificamente dentário** (IFUN3D, 26 nov 2025, 🅜): https://ifun3d.com/blog/3d-printing/dental/dental-3d-printing-troubleshooting-guide
- **Delamination** = "cabo de guerra" entre **peel force** (sucção contra o FEP) e **curing force** (ligação química entre camadas). Resina fria piora (recomendam 20–25 °C).
- **Warping**: *"o arco entorta, a região de molares descola, a ferradura estreita — arruinando o cross-arch fit"*. Correção: não imprimir arco deitado, angular 30–45°, drain holes 2–3 mm, parede uniforme 2–3 mm.
- **Inaccuracy** — a mais clínica: *"a peça parece perfeita a olho nu mas falha no assentamento"*. Causas: **light bleeding** (a luz vaza e cura resina que deveria ficar líquida → **furos ficam menores, dies ficam maiores**); contração de 0,5–2%; **IPA em excesso faz a resina inchar** (limitar wash a 5–10 min).

**Supports na intaglio — o contraste didático perfeito:**
- Coroa: *"zero supports sobre a linha de margem ou na intaglio — qualquer resíduo ali é um **high spot** e impede o assentamento"* 🅜
- Base de prótese total, Formlabs recomenda **o contrário**: *"we recommend placing the supports on the intaglio face of the denture base"*, concentrando touchpoints no perímetro.
→ **Pergunta de discussão:** por que a regra se inverte? (a intaglio da prótese será ajustada e polida; a da coroa é a interface de cimentação, intocável.)
Evidência: build angle × marginal fit https://pmc.ncbi.nlm.nih.gov/articles/PMC10785357/ · orientação × trueness da intaglio (JPD 2023) https://www.thejpd.org/article/S0022-3913(23)00186-5/pdf

## 5. Antes/depois do post-processing

**A imagem perfeita:** https://dental.formlabs.com/indications/surgical-guides/guide/ §4 — **cinco guias cirúrgicos alinhados**, cada um num estágio, *de cores diferentes*. Legenda original: *"printed and washed, cured, polished, sleeves inserted, and sterilized."* 🅒 redesenhar como faixa de 5 quadros coloridos.

**A cor conta a história química (ouro didático, texto oficial):**
> *"Durante a pós-cura, ocorrerá uma mudança de cor de **amarelo translúcido para laranja translúcido**."*
> *"Após a autoclavagem, as peças mudarão de **laranja translúcido para amarelo claro translúcido**."*
→ indicador macroscópico do grau de conversão. Pergunta: *o que a cor está dizendo sobre os fotoiniciadores?*

**Green part, definição oficial** (https://dental.formlabs.com/post-processing/): a forma "green" sai da impressora curada o suficiente para manter a **geometria**, mas com **ligações poliméricas ainda não formadas**. E: *"405 nm light initiates a reaction that cross-links the individual polymers, creating an interconnected, **isotropic**, and **100% dense** final part"* 🅜 (⚠️ o claim de isotropia é de fabricante e contradiz a literatura de orientação — bom contraste).

**Protocolos citáveis (guia cirúrgico):** wash 5 min em **IPA 99%** · secagem ao ar ≥30 min · autoclave **pré-vácuo 132 °C/4 min** ou gravitacional 121 °C/30 min, sempre com ciclo de secagem · *"não exceder ciclos de autoclave"* · ISO 10993-1:2018 não citotóxico/não sensibilizante/não irritante.
**Prótese total:** secagem 30 min · base: pré-aquecer 15 min a 80 °C + curar 5 min a 80 °C · dentes 5 min a 80 °C · *tack cure* interproximal 365–405 nm por 5–10 s · aviso: **UV extra num dispositivo já curado escurece os dentes** → usar bonder autopolimerizável para reparo.
**Splint:** *"exceder a duração do wash afeta a acurácia dimensional"* · arrancar suportes com a mão deixa **crateras** · sequência de polimento documentada com fotos.
**Compliance:** materiais biocompatíveis exigem **tanque, plataforma e wash dedicados** — contaminação cruzada anula a biocompatibilidade.
**Photobleaching:** muitas resinas dentárias saem levemente amareladas e **clareiam sozinhas em 30–60 min** 🅜

## 6. Casos e números clínicos

**Acurácia de guia cirúrgico por tipo de suporte** (J Funct Biomater, open access, https://www.mdpi.com/2079-4983/17/4/194):

| Suporte | Angular | Linear no colo | Linear no ápice |
|---|---|---|---|
| Dento-suportado | 1,81° ± 0,45° | 0,59 ± 0,18 mm | 0,73 ± 0,19 mm |
| Osso-suportado | 2,14° ± 0,48° | 1,04 ± 0,26 mm | 1,61 ± 0,31 mm |
| Muco-suportado | 2,95° ± 0,60° | 1,47 ± 0,29 mm | 1,87 ± 0,37 mm |

Meta-análise de arco completo (2025): 1,18 mm no colo · 1,46 mm no ápice · 3,65° angular — https://pubmed.ncbi.nlm.nih.gov/40736781/ 🅟
*"O guia não é perfeito. Ele é previsivelmente imperfeito — e a previsibilidade depende do que ele apoia. Dente > osso > mucosa. Por quê?"*

**Mesmo STL, máquinas diferentes — a frase mais importante da aula:**
- Modelos de implante: **SLA 0,26 ± 0,17 mm vs DLP 0,07 ± 0,02 mm** (~4×) — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12072760/ (2025, OA)
- DLP > LCD em trueness e precision — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9600557/ (2022, OA)
- Impressora dentária dedicada (Form 3B): 37 ± 5 µm — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11762011/ (2025, OA)
- Tecnologia × orientação × shell thickness em arco completo — https://www.nature.com/articles/s41598-025-24780-4 (Sci Rep 2025, OA)
> *"O STL não é o objeto. O STL é uma intenção. O objeto é o que a sua máquina, a sua resina, o seu ângulo e a sua cura fizerem com aquela intenção."*

**Zircônia impressa × fresada** (BMC Oral Health 2023, CC BY, https://pmc.ncbi.nlm.nih.gov/articles/PMC10318718/), 3Y-TZP, n=20:
VMGT **impressa 80 ± 30 vs fresada 60 ± 20 µm** (p<0,001) · SRT **100 ± 10 vs 60 ± 10 µm** · sem diferença no axial gap.
Conclusão dos autores: *"embora as fresadas tenham dado melhores resultados, as impressas oferecem resultados **clinicamente aceitáveis**"*. **O milling ganha E a impressão passa** — e ambas abaixo dos 120 µm.

**Primeira mandíbula de titânio impressa** (Netherlands Cancer Institute + M3DT, ago 2022): https://www.eurekalert.org/news-releases/960878 · https://medicalxpress.com/news/2022-08-successful-custom-3d-printed-titanium-jaw.html
**Reconstrução mandibular com fibula + cutting guides + miniplacas patient-specific** (open access, com imagens): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8967138/ — desvio plano×pós-op **3,64 ± 1,18 mm**; união óssea em 18/19 gaps em 10 ± 2 meses.
**Próteses totais impressas — evidência honesta** (revisão sistemática 2025, OA): https://pmc.ncbi.nlm.nih.gov/articles/PMC11855026/ — em um estudo, **5 de 9 domínios de satisfação favoreceram as convencionais**; as digitais ganharam em retenção, nº de consultas, conforto e manutenção previsível.
**Coroas definitivas — divisor de águas regulatório:** SprintRay Ceramic Crown FDA 510(k) Class II (2023) 🅜 · BEGO VarseoSmile TriniQ, primeira resina indicada para **pontes permanentes** até 3 elementos 🅜
> *"Em 2018 ninguém defendia coroa impressa como definitiva. Em 2026 há resinas com clearance do FDA. O que mudou não foi a impressora — foi a carga de partículas."* (ponte para a aula de compósitos)

**Horizonte:** dente cultivado em laboratório, King's College London, abr 2025 — https://www.kcl.ac.uk/news/lab-grown-teeth-might-become-an-alternative-to-fillings-following-research-breakthrough (⚠️ imprensa exagerou; usar como horizonte, dizendo isso).
**Impressão intraoral direta NÃO existe** — procurado especificamente, sem evidência clínica. Não inventar.

## 7. Custos (ordem de grandeza apenas — fóruns e blogs, não auditados 🅜🅒)
Modelo impresso cobrado a **US$ 15–25/arco**; material de prótese total impressa **US$ 20–40/unidade** vs >US$ 40 só em gesso, cera, acrílico e dentes numa convencional. Guia cirúrgico "US$ 2–6" (Formlabs). Modelo de osso temporal por **US$ 1,92** (literatura cirúrgica).
