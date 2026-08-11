# Aula 07 — Principles of 3D printing in dentistry · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado: **esqueleto criado (2026-08-10)** — pastas prontas, `_brief.docx` pré-preenchido, **sem HTML ainda**.
> Próximo passo: Vinicius larga material em `1. Source\07. Principles of 3D printing in dentistry\Texts|Assets`
> e ajusta o `_brief.docx`; depois vem a **proposta de ensino** (comando `nova aula 07`) e só então o deck.
> Formato-alvo: **deck full-screen autocontido** no motor da Aula 03 (`.deck > .track > .slide`, CSS+JS inline).
> Sem quiz nos slides [D-09]. Pasta no repositório: `lectures/07-3d-printing/`.

---

## 0. Contrato da aula

**Fonte dos outcomes:** `0. Course plan\Learning outcomes (master).docx` → seção *07. Principles of 3D
printing in dentistry · 1 h*. Estes três são a versão **oficial detalhada** (não os genéricos antigos):

| # | Learning outcome |
|---|---|
| LO-1 | Explain the basic principles of 3D printing, including layer-by-layer fabrication and the main steps from digital design to a finished dental object (digital model → preparation for printing → layer-by-layer fabrication → post-processing → finished object). |
| LO-2 | Identify the main 3D-printing technologies used to fabricate dental prosthetic and surgical devices. |
| LO-3 | Recognise the main clinical applications, advantages, and limitations of 3D printing in prosthodontics and dental surgery. |

**Objective (syllabus):** Understand additive manufacturing applied to dentistry.
**Duração:** 1 h · Ano 2, pré-clínico · fecha a Fase 1 (Fundamentals).

**Espinha (rascunho, a confirmar no brief):** *em manufatura aditiva o objeto e as propriedades dele são
construídos ao mesmo tempo — camada, orientação e pós-processamento são decisões de material, então **como**
foi impresso, e não só **de que resina**, decide o comportamento clínico.*
Eixo **structure → property → performance**: construção camada-a-camada e grau de conversão heterogêneo →
anisotropia, acurácia, monômero residual → assentamento, fratura, envelhecimento, biocompatibilidade.

**Decisão de escopo [2026-08-10]:** cobertura **ampla e equilibrada** das tecnologias — vat
photopolymerization (SLA/DLP/LCD), material jetting (PolyJet), powder bed fusion (SLM/DMLS), binder jetting
e material extrusion (FFF) — cada uma pelo **mecanismo de consolidação** e pela família de material que aceita.

**Fronteiras com outras aulas:** apoia-se na Aula 03 (polimerização, degree of conversion, light-curing) sem
repetir; **não** antecipa 14 CAD/CAM (subtrativo × aditivo entra só como contraste), 15 PMMA (resinas
impressas para base de prótese) nem 16 Co-Cr (metalurgia dos frameworks).

---

## 1. Manifesto de fontes (`Fonte → Alimenta → Status`)

Toda atualização é **incremental por manifesto** [D-11]: material novo = arquivo em
`1. Source\07. Principles of 3D printing in dentistry\` que não aparece nesta tabela.

**17 PDFs recebidos em 2026-08-10**, lidos integralmente e sintetizados em
`_sources/` (A = princípios/tecnologias, B = aplicações clínicas, C = processo→propriedade).
Coluna **Nível**: 🟢 peer-reviewed utilizável · 🟡 peer-reviewed com ressalva · 🔴 comercial/não rastreável.

| # | Fonte (`…\Texts\`) | Nível | Alimenta | Status |
|---|---|---|---|---|
| P1 | Three-Dimensional Printing in Dentistry: Evolution, Technologies, and Clinical Application (Sahrir, *Polymers* 2026;18:785) | 🟢 narrative review | Parte 1 + 3 (mapa de tecnologias), Parte 5 (roda de aplicações) | lido |
| P2 | Application of 3D Printing Technology in Dentistry: A Review (Chen & Wei, *Polymers* 2025;17:886) | 🟡 sem nenhum dado quantitativo | Parte 3 (mecanismo qualitativo PBF/FFF) | lido |
| P3 | Indications, materials and properties of 3D printing in dentistry (Calvache Arcila, *RSD* 2020) | 🟡 revista fraca; 3 erros de terminologia | Parte 1 (staircase, resolução), Parte 4 (orientação: Shim 2020, Hada 2020) | lido — corrigir erros |
| P4 | 3D printing in prosthodontics & recent trends in additive manufacturing | 🔴 sem revista, sem DOI, sem ano; decalca Schweiger 2021 | — | **substituir por Schweiger, *J Clin Med* 2021;10:2010** |
| P5 | 3D-Printed Photopolymer Resin Materials (Yüceer, *Polymers* 2025;17:316) | 🟢 a mais densa em mecanismo | Parte 1 + 3 (SLA/mSLA/DLP/CLIP, material jetting) | lido |
| S1 | 3D Printing in Dentistry: Scoping Review of Clinical Applications, Advantages, Limitations (Jun, *Oral* 2025;5:24) | 🟡 corpo de evidência quase todo in vitro; contradição interna | Parte 5 (escada de maturidade, head-to-head) | lido |
| S2 | Applications of 3D-Printing in Prosthodontics (Alyami, *Cureus* 2024;16:e68501) | 🟡 narrative sem método | Parte 5 (fit de provisórias por ângulo, frameworks SLM) | lido |
| S3 | 3D Printing And Rapid Prototyping In Prosthodontics (review) | 🔴 lista de benefícios sem dado | Parte 6 (objeto de análise crítica) | lido |
| S4 | 3D printing in prosthodontics (RPD frameworks, Renishaw) | 🟡 n=1, ligado a fabricante | Parte 5 (RPD, argumento geométrico, híbrido) | lido |
| S5 | Surgical applications of 3D printing: review & how to get started | 🟡 exclui odontologia | Parte 5 (cirurgia: volume de uso, custo, tempo de bloco) | lido |
| S6 | Role of 3D Printing in Planning Complex Procedures & Training (multispecialty) | 🟢 melhores números cirúrgicos | Parte 5 (CAMR: −173 min, erro 1 mm; regulação) | lido |
| F1 | Effects of Post-Processing Parameters on 3D-Printed Dental Appliances (Hassanpour, *Polymers* 2024;16:2795) | 🟢 **pilar da Parte 4** | Parte 4 (lavagem, pós-cura, DoC, monômero residual) | lido |
| F2 | Build angle effect on 3D-printed dental crowns marginal fit, DLP vs SLA (Farag, *BMC Oral Health* 2024;24:73) | 🟢 estudo in vitro, n=60 | **Âncora da aula** + ANIM 1 | lido |
| F3 | Post-curing light intensities, times, energy × color of printed crowns (Sahrir, *J Dent Sci* 2024;19:357) | 🟢 in vitro; erro de unidades | Parte 4 (janela de energia, cor) | lido |
| V1 | 3D-Printed permanent restorations: clinical reality, decision making, risk management | 🔴 **blog comercial, zero referências** | Parte 6 (objeto de análise crítica) | lido — **não citar como evidência** |
| V2 | How Do You 3D Print Dental Models (Rapid Shape) | 🔴 guia de fabricante | Parte 6 (contraste: inclinar 20–30° por sucção × F2) | lido |
| V3 | Step-by-Step Guide… Phrozen Dental Printers | 🔴 blog de fabricante | Parte 6 (“curar 1 minuto” × Kirby 15→45 min) | lido |

**Lacunas dos 17 PDFs** (não extrapolar deles): debinding/sinterização de metais e cerâmicas;
limiar ISO 10993-5 de citotoxicidade; medição operacional do grau de conversão; erro de tesselação do STL.
Já **supridas por pesquisa web** (2026-08-10, ver abaixo): ISO/ASTM 52900, ISO 5725, desvios de guia cirúrgica.

### 1b. Pesquisa web complementar (2026-08-10)

O Vinicius pediu material além de artigos: exemplos, visualizações e ideias de simulação interativa.
Três frentes, salvas em `_sources/`:

| Arquivo | Conteúdo |
|---|---|
| `E_simulacoes_web.md` | Prior art de simuladores no browser (Kiri:Moto, iamRapid cross-section viewer), a matemática dos widgets (staircase `h/tanθ`, tempo `T ∝ 1/h`), regras de orientação e supports, GIF do NIST sobre crescimento de rede (**único asset embutível**), técnicas de canvas e restrições de projeção, vídeos de processo |
| `F_exemplos_clinicos.md` | Gancho da Align (1 M/dia), adoção 10%→57% dos labs, parâmetros citáveis por indicação, **galeria de falhas da Formlabs**, faixa de 5 estágios do pós-processamento, acurácia de guias por tipo de suporte, mesmo STL × máquinas diferentes, zircônia impressa × fresada |
| `D_recursos_ensino.md` | ISO/ASTM 52900 verbatim (preview gratuito iTeh), ISO 5725 e o pôster do NPL, **análise crítica das analogias** (por que "pão fatiado" e "parede de tijolos" são ruins), Allum 2020 sobre anisotropia ser geometria e não solda fraca, **5 demos físicas** de sala, OpenLearn T805_1 (CC BY-NC-SA) |

**Decisões de escopo tomadas com o Vinicius (2026-08-10):**
- Metais: só mecanismo de consolidação + ponte explícita para a Aula 16; sem ciclo térmico.
- Fontes comerciais: **usar como fonte visual e de fluxo de bancada**, sem citar os números delas.
- Guias cirúrgicas: usar os números que existem (por tipo de suporte), não inventar.

---

## 2. Mapa de figuras (Drive → repo)

| Origem (`…\Assets\`) | Destino (`lectures/07-3d-printing/assets/`) | Legenda | Status |
|---|---|---|---|
| _(nenhuma ainda)_ | — | — | — |

---

## 2b. Estrutura aprovada (2026-08-10)

**Espinha:** ISO/ASTM 52900 distingue *single-step* de *multi-step process* — na AM multi-etapa a peça ganha a
**forma** num passo e as **propriedades** noutro. Frase de fecho: *"o STL não é o objeto; é uma intenção"*
(sustentada por PMC 2025: mesmo arquivo → 0,07 mm em DLP vs 0,26 mm em SLA).
**Âncora:** Farag 2024 — build angle × gap marginal, com a linha dos 120 µm.
**Gancho:** Align, >1 M dispositivos/dia + o twist (o impresso é o modelo, não o alinhador) + adoção 10%→57%.

| # | Bloco | min | Widget/visual |
|---|---|---|---|
| 0 | Gancho | 3 | — |
| 1 | O que é AM (52900, single/multi-step, aditivo × subtrativo) | 7 | **W1 staircase** |
| 2 | Do arquivo ao objeto (workflow, faixa dupla) | 10 | FIG 07.1 · **W2 orientação** |
| 3 | A família de tecnologias | 10 | FIG 07.2 · FIG 07.3 |
| 4 | Onde as propriedades são escritas | 14 | **W3 gel point** · FIG 07.4 |
| 5 | Quando dá errado, e o paciente | 12 | FIG 07.5 · FIG 07.6 · FIG 07.7 · FIG 07.8 |
| 6 | Recap — mapa dos outcomes | 2 | — |

**Widgets aprovados (3, canvas/JS inline, sem bibliotecas):**
- **W1 staircase** — slider de layer height (25/50/100/150 µm) → perfil de margem com degraus (`h/tanθ`),
  número de desvio com linha de ±50 µm, barra de tempo (`T ∝ 1/h`). Insight: superfície mais horizontal = pior degrau.
- **W2 um ângulo, quatro consequências** (ÂNCORA) — slider 0→90° → forma da secção · degraus na margem ·
  posição dos supports (vermelho junto à margem a 90°) · barra de gap com dados Farag (SLA 40/55/72 · DLP 57/70/89)
  e a linha dos 120 µm.
- **W3 gel point** — partículas, mobilidade colapsando, contador de DC travando ~45% e destravando a ~70% na
  pós-cura, barra espelhada de monômero lixiviável. Fallback: GIF do NIST (domínio público).

**Demos físicas:** (1) tira de acetato + tesourada de 2 mm → anisotropia é **geometria** (concentrador de
tensão), não solda fraca — Allum 2020. (2) duas barras em saco selado, green × pós-curada, para flexionar.

**Analogia adotada:** o slicer é a **tomografia rodando ao contrário** — mesma discretização, mesmo artefato
(resolução através do plano pior que no plano). **Rejeitadas:** pão fatiado (imagem subtrativa ensinando
processo aditivo) e parede de tijolos (argamassa é um terceiro material; fiada alternada subestima a anisotropia).

**Contraste embutido:** a Formlabs afirma peça pós-curada "isotropic and 100% dense"; a literatura mede
resistência mudando com o ângulo. Apresentar lado a lado, sem acusar.

## 3. O deck construído — 30 slides · 5 partes

| Parte | Slides | Conteúdo |
|---|---|---|
| Abertura | 1–4 | título · gancho Align (1 M/dia + o twist) · adoção 10%→57% com o milling subindo junto · objetivos |
| **01 · What AM is** | 5–9 | divisória · ISO/ASTM 52900 + single-step × multi-step · aditivo × subtrativo honesto · slicer = CT ao contrário + staircase · **W1** |
| **02 · File → object** | 10–13 | divisória · **FIG workflow-ribbon** · **W2 (âncora)** · leitura honesta do Farag (todos < 120 µm) |
| **03 · Technologies** | 14–18 | divisória · **FIG process-families-matrix** · **FIG vat-optics-sla-lcd** · **FIG vat-optics-dlp-clip** · metais (sinterizar × fundir) + ponte p/ Aula 16 |
| **04 · Properties written** | 19–23 | divisória · green part (faixa de 5 estágios em CSS, cor = química) · **W3** · as duas janelas · inversão do oxigênio (defeito → CLIP) |
| **05 · Wrong / patient** | 24–29 | divisória · **FIG failure-gallery** · **FIG supports-intaglio-inversion** · **FIG trueness-precision-target** · guias por suporte + zircônia impressa × fresada · **FIG maturity-ladder** |
| Recap | 30 | mapa dos outcomes + a frase do STL |

Slides escuros = título, 5 divisórias e os 3 slides interativos.

---

## 4. Cobertura dos outcomes

| Outcome | Onde é ensinado | Onde é recapitulado |
|---|---|---|
| **LO-1** princípios + etapas | Slides 6 (52900, single/multi-step), 8 (staircase), 9 (**W1**), 11 (workflow ribbon), 12 (**W2**), 20–21 (green part, **W3**) | Slide 30, card 1 |
| **LO-2** tecnologias | Slides 15 (matriz das 5 famílias), 16–17 (ópticas do vat), 18 (PBF: sinterizar × fundir) | Slide 30, card 2 |
| **LO-3** aplicações, vantagens, limitações | Slides 7 (aditivo × subtrativo), 13 (limite dos 120 µm), 22 (janelas), 25 (falhas), 26 (supports na intaglio), 27–28 (exatidão, guias, zircônia), 29 (escada de maturidade) | Slide 30, card 3 |

---

## 5. Mapa de figuras (Drive → repo)

| Origem (`…\Assets\ChatGPT Image Aug 12, 2026…`) | Destino (`assets/`) | Slide |
|---|---|---|
| 06_10_35 | `workflow-ribbon.png` | 11 |
| 06_13_37 | `process-families-matrix.png` | 15 |
| 06_25_45 (1) | `vat-optics-sla-lcd.png` | 16 |
| 06_25_45 (2) | `vat-optics-dlp-clip.png` | 17 |
| 06_28_11 | `failure-gallery.png` | 25 |
| 06_38_38 | `supports-intaglio-inversion.png` | 26 |
| 06_47_00 | `trueness-precision-target.png` | 27 |
| 06_48_50 | `maturity-ladder.png` | 29 |

**[VERIFY]** a figura `trueness-precision-target.png` saiu **sem a seta diagonal "ACCURACY"** que o prompt pedia.
Compensado por texto no slide (defbox "Accuracy — not a quadrant, the diagonal") e pela legenda. Se quiser,
regerar com ênfase na diagonal.
**Não gerada:** `post-processing-five-stages` — substituída por uma faixa de 5 estágios em HTML/CSS
(`.stagestrip`), que ficou melhor porque as cores são exatas e editáveis.

---

## 6. Os 3 widgets (SVG/canvas inline, sem bibliotecas)

Todos **determinísticos**: `draw(valor)` é função pura, então arrastar o slider para trás em aula devolve
exatamente o mesmo desenho. Cada um está isolado em `try/catch` — um erro não derruba a navegação.

| Widget | Slide | Entrada | Saídas | Base |
|---|---|---|---|---|
| **W1 staircase** | 9 | layer height (25/50/100/150 µm) × θ (10–80°) | largura do degrau `h/tanθ`, desvio `h·cosθ` (vermelho acima de 50 µm), nº de camadas, tempo (`7 s`/camada → `T ∝ 1/h`) | geometria exata; modelo de tempo declarado no slide |
| **W2 one angle, four consequences** | 12 | ângulo 0/45/90° (discreto — só onde há dado) | A coroa girando com as camadas fixas na horizontal + supports mudando de cor · B margem ampliada com os degraus · C barras SLA/DLP com a linha dos 120 µm | Farag 2024, valores reais |
| **W3 gel point** | 21 | progresso 0–100 | rede polimérica em canvas, DC (0→40 → trava em 46 → 70), mobilidade colapsando e sendo reerguida pela pós-cura, barra de monômero não reagido | Hassanpour 2024; DC 69,6% em 45 min (Kirby) |

Verificação headless (jsdom): W1 varrido em 4×15 combinações sem NaN; W3 com DC monotônico e a cor virando
de alerta para ok exatamente ao cruzar 50%; navegação, progresso e overview (30 itens) OK.

---

## 7. Timing (≈ 58 min)

| Bloco | min |
|---|---|
| Gancho + adoção + objetivos | 6 |
| 01 · O que é AM (+ W1) | 8 |
| 02 · Do arquivo ao objeto (+ W2) | 11 |
| 03 · Tecnologias | 10 |
| 04 · Onde as propriedades são escritas (+ W3) | 13 |
| 05 · Falhas e paciente | 8 |
| Recap | 2 |

Bloco 05 é o compressível se o debate render.

---

## 8. Demos físicas propostas (não implementadas no deck)

1. **Tira de acetato + tesourada de 2 mm** (30 s) → anisotropia é **geometria**, não solda fraca (Allum 2020).
2. **Duas barras em saco selado**, green × pós-curada, para flexionar (4 min). Resina não curada é irritante
   e sensibilizante — **nunca circular peça green nua**.
3. **Set de alinhadores** descartado — cada alinhador é um passo discreto de um movimento contínuo, e todos
   são termoformados sobre modelos impressos. Fecha o gancho de abertura.

---

## 9. Pendências

- [ ] **Handout + `handout.pdf`** (WeasyPrint) — ainda não feito. Comando `handout`.
- [ ] **[VERIFY]** seta diagonal "ACCURACY" ausente em `trueness-precision-target.png`.
- [ ] Conferir o deck projetado no laptop da sala (o `devicePixelRatio` muda ao ligar o projetor; o canvas do
      W3 já reajusta no `resize` e a cada troca de slide).
- [ ] Se quiser cobrir o ciclo térmico dos metais, precisa de fonte adicional — não está nos 17 PDFs.
