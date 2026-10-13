# Aula 13 — Ceramics (Dental ceramics) · notas do professor

> Arquivo de **estado/contexto**. Não é exibido ao aluno.
> Estado (2026-10-13): pastas + `_brief.docx` + briefing arquivado; **2 PPTs antigos e 11 artigos lidos**
> (sínteses `_sources/syn-*.md`); **prompts de figura entregues** em `_ops/prompts/13-ceramics-figuras.md`
> (29 prompts ChatGPT + 11 figuras SVG minhas + reuso de CC BY e dos PPTs). Nenhum HTML ainda.
> Próximo: Etapa 1 completa (lacunas abaixo) → Etapa 2 storyboard para aprovação.
> Pasta no repositório: `lectures/13-ceramics/` · Fonte: `1. Source\13. Ceramics\`.

---

## 0. Contrato da aula

**Briefing completo (verbatim):** `_sources/briefing-original-2026-10-13.md` — é o contrato principal.
Também reproduzido como anexo em `1. Source\13. Ceramics\_brief.docx`.

**Syllabus (master `0. Course plan\Learning outcomes (master).docx`, seção 13 · 2 h):**
Objective: *Know dental ceramics and the strength–aesthetics trade-off.*

| # | Learning outcome (syllabus) |
|---|---|
| LO-1 | Classify feldspathic ceramics, lithium disilicate and zirconias (3Y, 4Y, 5Y). |
| LO-2 | Relate microstructure to strength and translucency. |
| LO-3 | Indicate each class clinically. *(conflito com o briefing — ver Q-13.3)* |

**Objetivos educacionais do briefing (10):** aplicações · classificação por composição/microestrutura ·
vítreo × vitrocerâmico × policristalino · composição/microestrutura → propriedades mecânicas, físicas,
ópticas, térmicas e químicas · mecanismos de reforço e tenacificação · fratura e fadiga · desgaste
(incl. antagonista) · cristalinidade × óptica · superfície e adesão · cerâmicas × resinas compostas.

**Macroestrutura obrigatória (briefing §2):** 1 Introduction · 2 Feldspathic porcelains · 3 Lithium
disilicate glass-ceramics · 4 Polycrystalline ceramics (alumina + **zirconia**) · 5 Fatigue (seção
independente e substancial) · 6 Summary + ceramics × resin composites. Organização tradicional,
material por material; **sem** narrativa de problema/caso clínico.

**Fluxo de trabalho pedido (briefing §11):** Etapa 1 revisão de evidências → Etapa 2 storyboard
(**aprovação do Vinicius**) → Etapa 3 conteúdo dos slides → Etapa 4 speaker notes → Etapa 5 controle de
qualidade científica → Etapa 6 material final.

---

## 1. Manifesto de fontes (`Fonte → Alimenta → Status`)

| Fonte | Tipo | Alimenta | Nível de evidência | Status |
|---|---|---|---|---|
| `_sources/briefing-original-2026-10-13.md` | briefing do Vinicius | contrato: escopo, ordem, MUST/MUST NOT, regras científicas | — | arquivado |
| `Texts\Dental ceramics 2025.ppt` (cópia; original na raiz, intocado) | aula anterior própria, 102 slides | figuras reusáveis (fotos clínicas, SEMs) — ver `_ops/prompts/13-ceramics-figuras.md` §B1; erros identificados (3 wt% ítria; K_Ic sem método; dureza×desgaste contraditório) | aula própria (não citável como número) | **lido 2026-10-13** |
| `Texts\Dental Ceramics CadCam.pptx` (cópia) | aula anterior própria (2017), 32 slides | maior parte é CAD/CAM (Aula 14); slides B13–B25 (e.max, Y-TZP) úteis | aula própria | **lido 2026-10-13** |
| Kelly et al. 2017, ADM guidance fatigue, Dent Mater 33:1192–1204, doi 10.1016/j.dental.2017.09.006 (**DOI verificado no PDF**) | guidance ADM | §5 inteira; contato/cone; intaglio | consenso ADM; © Elsevier — figuras só redesenhadas | `_sources/syn-kelly2017-adm-fatigue.md` |
| Cesar et al. 2017, ADM guidance K_Ic, Dent Mater 33:575–584, doi 10.1016/j.dental.2017.03.006 (**DOI verificado no PDF**) | guidance ADM | §1.5, §5.2; dependência de método do K_Ic | consenso ADM; sem figuras | `syn-cesar2017-…` |
| Belli et al. 2014, Dent Mater 30:424–432, doi 10.1016/j.dental.2014.01.003 | experimental | §5.8, §6.4 cerâmica × compósito em fadiga | primário; © Elsevier; **corrigendum** (e.max CAD ~30% vidro) | `syn-belli2014-…` |
| Aboushelib 2016, doi 10.1016/j.dental.2015.12.001 | experimental | §5 origem no intaglio; Weibull × ciclos | primário; © Elsevier | `syn-aboushelib2016-…` |
| Zhang et al. 2023, J Dent Res 102:245–253, doi 10.1177/00220345221142755 | revisão crítica | §3 cristalização, microestrutura × K_Ic (hipótese), fadiga | revisão; © IADR — sem reuso de figura | `syn-zhang2023-…` |
| Silva et al. 2017, Braz Oral Res 31(suppl):e58, doi 10.1590/1807-3107BOR-2017.vol31.0058 | revisão narrativa | §4 birrefringência, cúbica isotrópica; LTD sem evidência clínica | revisão; CC BY (versão não declarada); sem figuras; inconsistência de dureza do LD | `syn-silva2017-…` |
| Nejat et al. 2025, Dent Clin N Am 69:155–171, doi 10.1016/j.cden.2024.11.001 | revisão narrativa | §2–4: 15–25 vol% leucita; LD 65–70 vol%; 4Y ≈75/25, 5Y ≈50/50 t/c | revisão; © Elsevier; Table 1 = dados de fabricante (não usar números) | `syn-nejat2025-…` |
| Denry & Holloway 2010, Materials 3:351–368, doi 10.3390/ma3010351 | revisão | §2–4: leucita (CTE, 625 °C, 1,2%), LD 65 vol%, 1170 °C, ~4,5% | revisão; **CC BY 3.0 → micrografias reusáveis** (exceto Fig. 3b) | `syn-denry2010-…` |
| Al-Johani et al. 2024, Prosthesis 6:1055–1090, doi 10.3390/prosthesis6050077 | revisão | §1.5 ensaios; Weibull; óptica (Fig. 15); limiares ISO 6872:2023 | revisão; **CC BY 4.0** (exceto Figs 9, 12, 17; Fig. 16 com eixo errado) | `syn-aljohani2024-…` |
| Kyaw et al. 2024, J Dent Sci Rev, doi 10.1016/j.jdsr.2024.11.001 | revisão meta-narrativa | §6.3 desgaste: sistema; dureza não prediz; Ra ≈ 1,5 µm; glaze | revisão; CC BY-NC-ND (figuras só sem adaptação) | `syn-kyaw2024-…` |
| Sailer et al. 2018, Clin Oral Impl Res 29(S16):184–198, doi 10.1111/clr.13277 | revisão sistemática | só como ressalva (chipping de bicamada); **sem mecanismo** de material | SR clínica; CC BY-NC; taxas de sobrevivência fora do escopo | `syn-sailer2018-…` |

**Lacunas declaradas (não constam nas 11 fontes — buscar na Etapa 1, não extrapolar):** temperatura t→c
(2370 °C só no PPT antigo) e dados cristalográficos m/t/c; química do MDP–zircônia; química do silano e
reação do HF com sílica; mecanismo de nucleação/crescimento da LTD (Chevalier); valores de CTE de metal
e porcelana e a explicação material do chipping em zircônia estratificada (Sailer não dá mecanismo;
candidatos: Zhang/Sailer/Lawn 2013, condutividade térmica/resfriamento); alumina (propriedades);
micrografias 4Y/5Y; edição vigente da ISO 6872 (**briefing diz 2024; Al-Johani cita 2023 — [CONFIRMAR]**).

Referências que o briefing manda considerar — **todas [CONFIRMAR] na Etapa 1** (DOIs e edição ainda não verificados):
- Phillips' Science of Dental Materials (edição a definir).
- Kelly JR et al. ADM guidance—ceramics: Fatigue principles and testing. *Dent Mater* 2017. DOI 10.1016/j.dental.2017.09.006 [CONFIRMAR].
- Cesar PF et al. ADM guidance—Ceramics: Fracture toughness testing and method selection. *Dent Mater* 2017. DOI 10.1016/j.dental.2017.03.006 [CONFIRMAR].
- ISO 6872 — *Dentistry — Ceramic materials*: edição 2024 [CONFIRMAR edição vigente e extrair a tabela de classes/requisitos para `_sources/`].

---

## 2. Escopo — o que entra e o que fica de fora

**Fora (em profundidade), por decisão do briefing §5:** preparos, margens, espessuras mínimas, seleção
clínica de casos, protocolos de cimentação/condicionamento, estratificação, prensagem, CAD/CAM e
fresagem, programas de sinterização, equipamentos, comparação de marcas, histórico extenso, taxas de
sobrevivência clínica. Processamento entra só quando explica mudança de microestrutura (ex.:
cristalização do dissilicato, sinterização da zircônia — conceitual).

---

## 3. Decisões pendentes (Vinicius decide)

- ~~Q-13.1 Duração~~ **FECHADA 2026-10-13: 3 h** (Vinicius). Pendente técnico: atualizar card do menu
  (2 h → 3 h) e o master de outcomes no `publicar`; total do curso passa a 40 h, a menos que outra aula
  perca 1 h [registrar].
- ~~Q-13.2~~ **FECHADA 2026-10-13: sem speaker notes.** Histórico: Speaker notes × formato do projeto. Briefing §9 exige notes substanciais por slide; a decisão
  [D-05] do projeto é *deck enxuto, sem modo professor*. Opções: (a) painel de notes oculto no próprio
  deck, aberto por tecla (ex.: **N**), invisível para o aluno no projetor só se usar segunda tela;
  (b) documento separado `speaker-notes.html` + PDF, alinhado slide a slide; (c) notes só no
  `notes.md`. Recomendação provisória: (b) — não toca no deck, imprime, e não vaza em projeção.
- **Q-13.3 LO-3 "Indicate each class clinically"** colide com "seleção clínica de casos" no MUST NOT.
  Opções: reescrever como *"Relate each class to its main dental applications and material-related
  limitations"* ou manter o LO e cobrir só no nível de aplicação.
- **Q-13.4 Sobreposição com outras aulas.** (i) Aula 14 CAD/CAM (blocos cerâmicos); (ii) **Aula 20
  Degradation, fatigue & ageing** cobre fadiga e LTD. Proposta: a Aula 13 é dona de fadiga cerâmica e
  LTD da zircônia; a Aula 20 referencia em vez de repetir.
- **Q-13.5 Pré-requisitos ainda não construídos.** Aula 02 Mechanical properties (strength, modulus,
  toughness, Weibull) não existe ainda; Aula 04 Colour & optics existe (translucency/scattering).
  Proposta: definir na 13 só o necessário e referenciar a 04 para óptica básica.
- **Q-13.6 Direitos de figura.** O site é **público** no GitHub Pages (a senha do menu é client-side,
  não protege). Micrografias de artigos exigem licença compatível (CC-BY) ou permissão; o briefing já
  pede verificar reuso. Proposta: priorizar figuras CC-BY/abertas e as do próprio PPT do Vinicius, e
  marcar cada figura de terceiros com fonte + licença no mapa de figuras.

---

## 3b. Decisões do Vinicius — 2026-10-13 (tarde)

- **D-13.1 Fotos dos decks antigos liberadas** para uso no site ("pode usar as fotos"), incluindo as de
  fonte não identificada. Mantida a atribuição quando a origem for conhecida. Marcas comerciais
  visíveis: borradas quando em destaque (ex.: logo do forno em `photos/porcelain-furnace.jpg`).
- **D-13.2 Subseção "Firing and the dental furnace" ENTRA na aula**, dentro de §2 (porcelana feldspática),
  cobrindo a queima da porcelana em profundidade; a cristalização do dissilicato vai em §3 e a
  sinterização da zircônia em §4 (1–3 slides cada). **Exceção explícita ao MUST NOT do briefing**
  ("programas de sinterização", "equipamentos laboratoriais"): o foco continua sendo o que cada etapa faz
  à microestrutura (porosidade, densificação, cristalização, crescimento de grão, tensão residual), não
  receita de laboratório. Forno de prensagem: **fora**.
- Dossiê de fontes: `_sources/syn-firing-furnace-dossier.md` (textbooks + primários, DOIs verificados).

## 5a. Estrutura proposta — subseção de queima (rascunho para o storyboard)

Posição: §2, depois de "Chemical composition" e antes de "Microstructure" (o pó vira porcelana densa → a
microestrutura que resulta). ~14 min. Uma ideia por slide [D-21].

| # | Slide | Figura | Fonte principal |
|---|---|---|---|
| F1 | From powder slurry to restoration: why porcelain is fired | photos/porcelain-powder · porcelain-powders | McCabe & Walls 9e |
| F2 | The porcelain furnace: components | FIG 13.30 (a gerar) + photos/porcelain-furnace | McCabe & Walls; patente Zychek |
| F3 | Firing-temperature classes of dental ceramics | tabela (high >1300 · medium 1101–1300 · low 850–1100 · ultralow <850 °C) | Phillips cap. 10, Tab. 10-2 |
| F4 | The firing cycle as a temperature–time programme | D12 SVG — dados do slide antigo: 155 → 283 °C (0–9 min, pré-aquecimento) → 450 °C (11 min) → vácuo até 875 °C (18 min) → patamar até 20 min → 310 °C (21 min) | slide antigo do Vinicius [CONFIRMAR origem/material] |
| F5 | Pre-drying at the furnace entrance | D12 (destaque) | Clinical Guide cap. 22; McCabe & Walls |
| F6 | Viscous sintering: surface tension drives flow, viscosity sets the rate | FIG 13.05 | Wadsworth 2016; Cheung & Darvell 2002 |
| F7 | Low, medium and high bisque | photos/porcelain-firing-1…4 + porcelain-bisque-sem-series | slides antigos [descritores NÃO VERIFICADOS em livro-texto] |
| F8 | Firing under vacuum: why pores collapse | FIG 13.31 (a gerar) | Clinical Guide; McCabe & Walls (4,6 → 0,5%) |
| F9 | Firing shrinkage | photos/porcelain-firing-shrinkage-bars | slide antigo; textos divergem (10–20% / até 10% linear) [CONFIRMAR no livro impresso] |
| F10 | Temperature matters more than time; over- and under-firing | — (texto + dado) | Cheung & Darvell 2002 |
| F11 | Cooling: residual stress, slow cooling and leucite content | FIG 13.06 | Mackert & Evans 1991; Mackert 1995 |
| F12 | Repeated firings | — | Phillips (desvitrificação); Mackert 1995/1996; Barghi & Goldberg 1977 |
| F13 | Glaze firing: self-glaze and overglaze | photos/surface-finishing-sem | McCabe & Walls; Phillips; Craig's; Albakry 2004 |
| F14 | Veneered zirconia: temperature gradients during cooling | FIG 13.32 (a gerar) | Tholey 2011; Guazzato 2010; de Lima 2022 |

Em §3 (dissilicato): **L1** "Crystallisation firing: from Li₂SiO₃ to Li₂Si₂O₅" — D13 SVG com eventos de
Ortiz et al. 2019 (cristobalita ~660 °C; Li₂SiO₃ + SiO₂ → Li₂Si₂O₅ ~735–770 °C; ~40 → ~70–80 vol%) + FIG 13.11.
**L2** "Crystallisation cycle and dimensional change" — ~840–850 °C, vácuo, resfriamento longo até ~700 °C,
contração ~0,2% [valores de fabricante = exemplo típico].

Em §4 (zircônia): **Z1** "Sintering furnace and cycle" — photos/zirconia-sintering-furnace-glowing + D14 SVG
(convencional ~6–8 h, patamar 1350–1550 °C × speed ~90 min). **Z2** "Sintering shrinkage: milled ~25% oversize"
— photos/zirconia-fdp-after-machining → after-sintering (~20% linear; Al-Haj Husain 2022; Craig's).
**Z3** "Temperature and time control grain size" — Denry Fig. 10 (CC BY) + Stawarczyk 2013 (máx. resistência
1400–1550 °C; defeitos >1650 °C) + Zhang & Lawn 2018 (grão menor → menos LTD) + speed sintering (Liu 2022;
Luz 2021; Lawson 2020: efeito depende do material).

**Inconsistências a resolver antes de escrever:** contração da porcelana (linear × volumétrica);
"20–35% volumétrica" (Al-Johani) × ~20% linear (≈49% volumétrica) na zircônia; direção da translucidez em
Stawarczyk 2013 (abstract contraditório); "baixa difusividade térmica da zircônia" NÃO VERIFICADA — usar
"gradientes de temperatura acentuados" (Tholey 2011).

## 4. Mapa de figuras (Drive → repo)

Plano completo em `_ops/prompts/13-ceramics-figuras.md`: 29 prompts ChatGPT (FIG 13.01–13.29; P1 = 22),
11 figuras SVG feitas por Claude (D1–D11), reuso de Denry 2010 (CC BY 3.0) e Al-Johani 2024 (CC BY 4.0),
reuso dos PPTs (§B1) e 6 imagens reais que só o Vinicius pode fornecer (§B3).
### Lote 1 — 1ª rodada (2026-10-13): 16 aceitas, 1 a regerar

Renomeadas [D-19] em `1. Source\13. Ceramics\Assets\` e copiadas com o mesmo nome para `assets/`.
9 cópias byte-idênticas (md5 conferido) apagadas com permissão; 3 versões rejeitadas guardadas em
`Assets\_rejected\`.

| FIG | Arquivo | Seção | Nota |
|---|---|---|---|
| 13.01 | restoration-types.png | §1.1 | — |
| 13.02 | monolithic-vs-bilayer.png | §1.1 | — |
| 13.03 | why-ceramics-brittle.png | §1.2 | — |
| 13.04 | ceramic-classes-microstructure.png | §1.4 | figura-âncora |
| 13.05 | porcelain-firing-porosity.png | §2.3 | P3 |
| 13.06 | leucite-cte-microcracks.png | §2.4/2.8 | números = Denry 2010 p.2 |
| 13.07 | metal-ceramic-residual-stress.png | §2.8 | versão plana; perspectiva rejeitada |
| 13.08 | porcelain-light-scattering.png | §2.6 | — |
| 13.09 | hf-etching-glass-phase.png | §2.9/3.9 | **cópia do repo ≠ fonte**: faixa reescrita ("preferentially… attacked far less") [CONFIRMAR grau de ataque aos cristais de LD na Etapa 1] |
| 13.10 | silane-coupling.png | §2.9/3.9 | v1 rejeitada (Si–OH–Si); simplificação aceita: C=C desenhado ligado à rede |
| 13.11 | lithium-disilicate-crystallisation.png | §3.2 | ≈40 / ≈70 vol% (Zhang 2023 p.247) |
| 13.12 | crack-deflection-microstructures.png | §3.4 | — |
| 13.13 | crack-bridging-wake.png | §3.4 | aplicar ao LD como "reported" |
| 13.14 | yttria-stabilisation-vacancies.png | §4.3 | ❌ v1 rejeitada (Y³⁺ em sítio de ânion) → prompt v2 em `_ops/prompts` |
| 13.15 | transformation-toughening-trigger.png | §4.5 | **cópia do repo recolorida** (t = teal, consistente com 13.17) |
| 13.16 | transformation-zone-shielding.png | §4.5 | **cópia do repo recolorida**; "≈ 4–5%" |
| 13.17 | zirconia-3y-4y-5y.png | §4.6 | Nejat 2025 p.165; Silva 2017 p.135 |

### Lote 2 (2026-10-13): 10 aceitas

| FIG | Arquivo | Seção | Nota |
|---|---|---|---|
| 13.14 v2 | yttria-stabilisation-vacancies.png | §4.3 | Y³⁺ em sítio de cátion, vacância em sítio de ânion ✓ (4:3) |
| 13.18 | zirconia-birefringence-scattering.png | §4.8 | — |
| 13.19 | zirconia-ltd-progression.png | §4.10 | mecanismo [CONFIRMAR Chevalier na Etapa 1] |
| 13.20 | mdp-zirconia-bonding.png | §4.12 | **cópia do repo corrigida**: P–O–(CH₂)₁₀ e uma só OH (o erro veio do meu prompt) [CONFIRMAR ref. MDP] |
| 13.21 | flaw-stress-concentration.png | §5.1 | K = Y·σ·√c (Cesar 2017) |
| 13.23 | stress-corrosion-crack-tip.png | §5.4 | Kelly 2017 Fig. 2 redesenhada |
| 13.24 | crown-contact-radial-cracks.png | §5.7 | 4:3 |
| 13.26 | optics-by-microstructure.png | §6.2 | **cópia do repo recolorida** (cristais de vitrocerâmica em teal escuro) [CONFIRMAR Δn do LD] |
| 13.27 | wear-tribosystem.png | §6.3 | Kyaw 2024 (esquema original) |
| 13.29 | ceramic-vs-composite-structure.png | §6.4 | — |

Pendentes (P2): 13.22 weakest-link-size-effect, 13.25 fatigue-mechanisms-by-class, 13.28 wear-surface-condition.

### Lote 3 (2026-10-13): 13.22, 13.25, 13.28 aceitas — 29/29 figuras completas

- 13.22 weakest-link-size-effect.png · §5.3
- 13.25 fatigue-mechanisms-by-class.png · §5.8 — **cópia do repo editada**: removidos os contornos de grão desenhados na porcelana (vidro não tem grãos)
- 13.28 wear-surface-condition.png · §6.3 (Kyaw 2024)
- `Assets\_rejected\` apagada a pedido do Vinicius.

### Lote 4 — subseção de queima (2026-10-13): 3 aceitas — total 32 figuras

- 13.30 porcelain-furnace-cross-section.png · §2 F2 — conferido: carga inferior, termopar → controlador, bomba + válvula, posição de secagem.
- 13.31 vacuum-firing-pore-collapse.png · §2 F8 — "≈ 4.6%" e "≈ 0.5%" (McCabe & Walls 9e).
- 13.32 veneered-zirconia-cooling-gradient.png · §2 F14 — **cópia do repo editada**: faixas do painel "slow cooling" atenuadas para mostrar gradiente menor (o original tinha o mesmo contraste do painel rápido). Tholey 2011; de Lima 2022.

## 4b. Fotos reais extraídas dos decks antigos (2026-10-13)

37 imagens extraídas de `Dental ceramics 2025.ppt` e `Dental Ceramics CadCam.pptx` → `assets/photos/` (redimensionadas para ≤1920 px; faixas pretas de 'reflexo' cortadas). Catálogo visual enviado no chat (`fotos-decks-antigos-catalogo.png`).
**Direitos:** o site é público. Fotos clínicas = presumidas do Vinicius [CONFIRMAR autoria]. Itens marcados 'fonte?' ou 'figura de artigo/livro' só entram com fonte identificada ou substituídos.
Excluídas de propósito: técnica laboratorial de estratificação/CAD-CAM/fornos (fora do escopo), foto de feldspato com marca d'água Getty, figuras com marca comercial em destaque (blocos, frascos Luna-Wing), diagramas antigos já substituídos pelos esquemas novos.

| # | Arquivo | Seção | Nota |
|---|---|---|---|
| 1 | photos/clinical-anterior-preparations.jpg | §1.1 | caso clínico: dentes preparados (deck antigo, slide 3) |
| 2 | photos/anterior-ceramic-restorations-extraoral.jpg | §1.1 | restaurações anteriores fora da boca (slide 4) |
| 3 | photos/clinical-anterior-ceramic-restorations.jpg | §1.1 | mesmo caso, restaurações cimentadas (slide 5) |
| 4 | photos/clinical-anterior-ceramic-restorations-2.jpg | §1.1 | mesmo caso, outra vista (slide 2) |
| 5 | photos/inlay-onlay-ceramic.jpg | §1.1 | inlay e onlay em modelo (slide 10) |
| 6 | photos/ceramic-crowns-extraoral.png | §1.1 | coroas cerâmicas, fundo escuro (slide 83) |
| 7 | photos/clinical-anterior-ceramic-crowns.png | §1.1 | coroas anteriores em boca (slide 83) |
| 8 | photos/ceramic-crowns-on-cast.jpg | §1.1 | coroas sobre modelo de gesso (deck CAD/CAM, slide 1) |
| 9 | photos/ceramic-orthodontic-brackets.jpg | §1.1 | bráquetes cerâmicos (slide 10) |
| 10 | photos/zirconia-fdp-after-machining.jpg | §1.1/§4 | prótese de zircônia usinada (slide 89) |
| 11 | photos/zirconia-fdp-after-sintering.jpg | §1.1/§4 | após sinterização (contração) (slide 89) |
| 12 | photos/zirconia-fdp-after-veneering.jpg | §1.1/§2 | após estratificação: zircônia + porcelana (slide 89) |
| 13 | photos/metal-ceramic-copings-porcelain.jpg | §2.6/§2.8 | copings metálicos com porcelana = metalocerâmica (slide 43) |
| 14 | photos/translucency-specimens-grid.jpg | §2.6/§6.2 | discos sobre grade: translucidez (slide 43) |
| 15 | photos/fluorescence-uv.jpg | §2.6 | fluorescência sob UV (slide 46) |
| 16 | photos/porcelain-powders.jpg | §2.2 | kit de pós de porcelana (slide 49) — marca visível nos frascos |
| 17 | photos/feldspar-mineral.jpg | §2.2 | feldspato natural (slide 56) |
| 18 | photos/porcelain-powder.jpg | §2.2 | pó de porcelana (slide 57) |
| 19 | photos/metal-oxide-pigments.jpg | §2.6 | pigmentos de óxidos metálicos (slide 42) |
| 20 | photos/porcelain-firing-1-powder.png | §2.3 | pó (slide 59) |
| 21 | photos/porcelain-firing-2-low-bisque.png | §2.3 | low bisque (slide 59) |
| 22 | photos/porcelain-firing-3-medium-bisque.png | §2.3 | medium bisque (slide 59) |
| 23 | photos/porcelain-firing-4-high-bisque.png | §2.3 | high bisque (slide 59) |
| 24 | photos/porcelain-bisque-sem-series.jpg | §2.3 | SEM low/medium/high bisque, barras 1/5/10 µm (slides 62–64) |
| 25 | photos/leucite-crystals-sem.png | §2.3 | SEM leucita, barra 1 µm (slide 54) |
| 26 | photos/porcelain-surface-defects-sem.png | §2.5/§5.1 | defeitos de superfície (slide 35) — fonte? |
| 27 | photos/lithium-disilicate-sem.png | §3.3 | SEM dissilicato, barra 2 µm (I. Denry; slide 66) — tarja com marca |
| 28 | photos/lithium-disilicate-sem-2.png | §3.3 | SEM dissilicato, barra 5 µm (slide 18) |
| 29 | photos/lithium-disilicate-crack-path-sem.png | §3.4 | trinca atravessando dissilicato (slide 70) — fonte? |
| 30 | photos/crystal-types-sem-panel.jpg | §1.4/§3.3 | 4 SEMs: leucita × dissilicato (slide 26) — fonte? |
| 31 | photos/zirconia-sem-grain-sizes.png | §4.3/§4.8 | Y-TZP com dois tamanhos de grão (slide 31) — fonte? |
| 32 | photos/zirconia-sem.png | §4.3 | SEM zircônia, barra 2 µm (slide 18) — fonte? |
| 33 | photos/zirconia-grains-sem-10um.jpg | §4.1 | grãos de zircônia, barra 10 µm (slide 78) — fonte? |
| 34 | photos/glass-infiltrated-alumina-sem.png | §4.2 | alumina infiltrada por vidro (slide 92) |
| 35 | photos/crown-fractography-sem.jpg | §5.1 | fractografia de coroa (slide 17) — figura de artigo |
| 36 | photos/crack-growth-sequence.png | §5.4 | sequência de crescimento de trinca (slide 21) — figura de artigo |
| 37 | photos/surface-finishing-sem.png | §2.7/§6.3 | glaze × brocas × polimento (slide 23) — figura de livro/artigo |

**Fotos que ainda faltam (não existem nos decks):** coroa metalocerâmica em boca; coroa de zircônia monolítica em boca; restauração de dissilicato em boca; chipping de porcelana sobre zircônia/metal; micrografia de 4Y/5Y; superfície de zircônia envelhecida.


## 5. Estrutura do deck (publicado 2026-10-13 · 133 slides)

| Bloco | Slides | Conteúdo |
|---|---|---|
| Abertura | 1–3 | Título · 6 objetivos + faixa estrutura→propriedade→desempenho · mapa de 6 partes (+ escopo) |
| §1 Introdução | 4–23 | caso clínico (fotos) · vocabulário (veneer/inlay/onlay/coroa/FDP) · monolítico × bilayer · definição · fragilidade (FIG why-brittle, D1, D11) · cristal × vidro (D2a, D2b) · 3 classes · terminologia · SEM real · tabela de características · ensaios de flexão (Al-Johani Fig. 1, CC BY) · K_Ic · ISO 6872:2023 |
| §2 Feldspática | 24–56 | definição · convencional × leucita-reforçada · matérias-primas · óxidos · leucita · **subseção de queima (F1–F15)**: pó → forno (corte + foto) → classes Phillips → ciclo D12 *typical example* → pré-secagem → sinterização viscosa → bisques (fotos + SEM) → vácuo (4,6 → 0,5 %) → contração → temperatura × tempo → resfriamento/leucita (Mackert & Evans) → queimas repetidas → glaze → gradiente na zircônia estratificada · microtrincas/tensão · propriedades · defeitos · translucidez · fluorescência · CTE metalocerâmica · durabilidade · HF · silano · resumo |
| Pausa | 57 | 10 min |
| §3 Dissilicato | 58–75 | definição · composição (P₂O₅, Li₃PO₄) · D13 (Ortiz 2019) · 0,2 % × 20 % · SEM Denry Fig. 4 (CC BY, marca mascarada) · variação entre produtos (Zhang 2023) · fortalecimento × tenacificação · deflexão · bridging · trinca real · tensão residual (proposta) · propriedades (462 biaxial × 260 4-pt) · óptica (Al-Johani Fig. 15) · desgaste · água · condicionamento · resumo |
| §4 Policristalinas | 76–98 | definição · vitrocerâmica × policristal · alumina · aplicações · D3 fases · zircônia pura trinca · ítria/vacâncias · tenacificação (gatilho + zona) · preço da metaestabilidade · 3Y/4Y/5Y · sinterização (D14, fotos, Denry Fig. 10 CC BY) · propriedades · birrefringência · alavancas de translucidez · desgaste · LTD + contexto · adesão (MDP) · resumo |
| §5 Fadiga | 99–118 | definição · falhas · fractografia · resistência × tenacidade × fadiga · D4 Griffith · K_Ic dependente do método · elo fraco · D5 Weibull (m 3,45 × 22,5) · corrosão sob tensão · D9 · sequência real · D6 · D7 S–N · D8 · mecanismos por classe · dano de contato · D15 Belli · laboratório × clínica · resumo |
| §6 Síntese | 119–133 | Tabelas 1–3 · óptica · desgaste (sistema, superfície) · cerâmica × compósito (estrutura, Tabela 4 em 2 slides, prós/contras, afirmações a qualificar) · take-home · referências (2) |

**Decisões aplicadas nesta construção**
- Q-13.2 **FECHADA: sem speaker notes** ("notas não precisa", Vinicius 2026-10-13).
- Ciclo de queima D12 = **"typical example"** (Vinicius) — origem: slide antigo; não é programa recomendado.
- Q-13.3: LO 6 reescrito como *"Relate each class to its main applications and material-related limitations…"*.
- Q-13.1: card do menu atualizado para **3 h**. **Pendente:** master de outcomes ainda diz 2 h; total do curso passa a 40 h.
- Q-13.4 (sobreposição com 14/20) e Q-13.5 (Aula 02 inexistente) continuam abertas.
- Fotos `zirconia-fdp-after-*` **renomeadas** (nomes estavam permutados em relação ao slide 89 antigo).

**Lacunas declaradas (não ensinadas como fato ou só como mecanismo qualitativo)**
- Silano e MDP: mecanismo apresentado sem referência primária verificada → [CONFIRMAR referência] (ex.: revisão de adesão da Aula 12).
- Fonte original não identificada: `crystal-types-sem-panel`, `porcelain-surface-defects-sem`, `lithium-disilicate-crack-path-sem`, `crown-fractography-sem`, `crack-growth-sequence` (as duas últimas são figuras publicadas → [CONFIRMAR origem/permissão]).
- Contração da porcelana: apresentada como faixa "10–20 % (linear ou volumétrica)" — divergência entre livros-texto.
- Direção da translucidez em Stawarczyk 2013 não usada; "baixa difusividade térmica da zircônia" não usada.
- Edição da ISO 6872 citada como 2023 (via Al-Johani 2024).
- Mackert & Evans 1991: "8,5–55,8 %" mantido como reportado (relativo × absoluto não esclarecido no dossiê).
- Volpato et al. 2011 (InTech): citado como "et al."; autores completos [CONFIRMAR].

## 6. Timing (3 h = 170 min de aula + 10 min de pausa)

Abertura 5 · §1 25 · §2 35 (queima ≈ 14) · pausa 10 · §3 25 · §4 35 · §5 25 · §6 20 ≈ 1,3 min/slide.

## 7. Revisão por persona de aluno [D-23] — 2026-10-13

Subagente (aluno do 2.º ano, sem experiência clínica) leu o texto integral dos 133 slides. 15 itens, **15 aplicados**:
veneer × veneering porcelain; K e Y definidos no slide de K_Ic; leucita-reforçada classificada como vitrocerâmica e definição de glass-ceramic ajustada; isotrópico/anisotrópico definidos no 1.º uso; "incongruent melting" e "cubic/tetragonal" explicados; superfície intaglio padronizada; CTE definido; LTD/ageing/hidrotérmica unificados; frase de desgaste do esmalte reescrita; "grãos muito pequenos × maiores" desambiguado; 20 % linear ↔ 25 % oversize explicado (1/0,8); percentuais de Mackert contextualizados; bloco "azul" e 735–770 × 840–850 °C explicados; "bisque" definido; pontic/abutment/coping definidos. Extras aplicados: crack wake, "releases the constraint", Ra.


## 8. Revisão 1 — 2026-10-14 (pedidos do Vinicius)
- Slide de leucita × resistência usa **valores ilustrativos (80, 100, 120, 80 MPa; none/low/moderate/high)** por pedido explícito
  ("pode ser com dados fictícios"). Rotulado no gráfico e na legenda como não medido. **Atenção:** os dados medidos de Rosa et al. 2011
  não mostram esse padrão (0 vol% = 110; 12 vol% = 52; 22 vol% = 72 MPa, ar) — três marcas diferentes, confundimento por vidro e forma do
  cristal. O mecanismo (microtrincas → coalescência → queda de resistência) está documentado (Denry 2010; Borom 1977 via Rosa 2011); a
  posição do máximo, não.
- Fonte nova: Rosa V, Cesar PF, Pereira CFS, Pinto MM, Yoshimura HN. Effect of test environment and microstructure on the flexural strength
  of dental porcelains. J Prosthodont 2011;20:275–9. doi:10.1111/j.1532-849X.2011.00711.x (Fig. 3 da Wiley **não** reutilizada).
- Bisques: rótulos low/medium/high associados a pescoço / encolhimento de poros / fechamento de poros (descritores de bancada, não padronizados).
