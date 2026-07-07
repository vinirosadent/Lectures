# Aula 03 — Polymers & Polymerization · notas do professor

> Arquivo de **estado/contexto** desta aula. Não é exibido ao aluno.
> Serve para: (a) rastrear cobertura de objetivos, (b) mapear figuras, (c) timing, (d) itens a verificar.

---

## 1. Objetivos — os 6 "guarda-chuva" na tela vs. competências granulares

Decisão **[D-01]**: mostramos ao aluno **6 objetivos** (legíveis, memoráveis) em vez de uma lista longa.
Cada guarda-chuva abaixo lista as competências finas que a aula de fato cobre e onde.

| # | Objetivo na tela | Competências cobertas | Seção |
|---|---|---|---|
| 1 | Vocabulário de polímeros | mer, monômero, oligômero, homo/co/terpolímero, MW = MW_mero × n, grau de polimerização | `#vocabulary` (+ chain builder) |
| 2 | Como monômeros viram polímero; adição vs condensação | 3 estágios, discriminador do subproduto, estabilidade dimensional, exemplos dentais | `#mechanisms`, `#freeradical` |
| 3 | Arquitetura e termoplástico vs termofixo | linear/ramificado/reticulado; random/block/graft; mobilidade de cadeia; ligações entre cadeias | `#architecture` (+ heat) |
| 4 | Estágios da polimerização por radical livre e consequências | iniciação/propagação/terminação; iniciadores/inibidores; O₂; calor, contração, monômero residual | `#freeradical` |
| 5 | Prever propriedades: MW, reticulação, plastificação | efeitos em resistência, rigidez, Tg, sorção de água, fragilidade | `#properties` (2 sliders) |
| 6 | Aplicar à contração e ao comportamento clínico | mecanismo molecular, pré/pós-gel, estresse, C-factor, incrementos, Bis-GMA/TEGDMA | `#shrinkage` (+ gel slider) |

**[Q-01 — aberto]** Se você tiver a lista **oficial de 14 outcomes** do syllabus, cole aqui para eu conferir 1:1
o alinhamento (hoje montei a cobertura a partir do conteúdo, não da lista verbatim).

---

## 2. Mapa de figuras (Drive → repositório) e verificação

Todas vêm da sua pasta **Assets**. O script `tools/copy-figures-03.ps1` renomeia automaticamente.

| Figura na aula | Arquivo no repo (`assets/…`) | Origem no Drive | Verificar? |
|---|---|---|---|
| FIG 03.1 | addition-polymerization.png | Addition polymerization.png | **[VERIFY]** — a figura não trouxe texto; confira se a legenda "sem subproduto" bate |
| FIG 03.2 | condensation-polymerization.png | Condensation polymerization.png | **[VERIFY]** — idem, confira "libera subproduto" |
| FIG 03.3 | free-radical-overview.png | Free-radical polymerization.png | ok (texto confere: 3 estágios) |
| FIG 03.4 | free-radical-chemistry.png | Free-radical polymerization chemistry.png | ok (benzoyl peroxide) |
| FIG 03.5 | homopolymer-linear-branched.png | Homopolymer.png | ok |
| FIG 03.6 | copolymer-random-block-graft.png | Copolymer.png | ok |
| FIG 03.7 | terpolymer-mma-ema-pma.png | Tertopolymer example.png | ok (MMA/EMA/PMA) |
| FIG 03.8 | molecular-weight-concept.png | Molecular weight.png | ok |
| FIG 03.9 | crosslinking.png | Crosslinking.png | **[VERIFY]** — sem texto; confira que mostra pontes covalentes entre cadeias |
| FIG 03.10 | plasticization.png | Plasticization.png | ok |
| FIG 03.11 | shrinkage-1-molecular-mechanism.png | Polymerization shrinkage 1.png | ok (3.40 Å → 1.54 Å) |
| FIG 03.12 | shrinkage-2-why-dental.png | Polymerization shrinkage 2.png | ok (Bis-GMA/TEGDMA, 1.5–6%) |
| FIG 03.13 | shrinkage-3-stress-development.png | Polymerization shrinkage 3.png | ok (pré/pós-gel) |
| FIG 03.14 | shrinkage-4-clinical-consequences.png | Polymerization shrinkage 4.png | ok (microleakage etc.) |

**Extras copiados** (não usados ainda, disponíveis): `molecular-weight-ethylene-example.png`,
`copolymer-methacrylate-example.png`, `copolymer-mma-ema-formula.png`.

> **3 figuras `[VERIFY]`**: Addition, Condensation e Crosslinking não retornaram texto pelo conector,
> então legendei pelo conceito padrão. Ao abrir a aula, dê uma olhada nelas e me diga se ajusto alguma legenda.

---

## 3. Animações interativas construídas (todas próprias, em SVG/JS)

| ID | Onde | O que faz | Ponto de ensino |
|---|---|---|---|
| A · chain builder | `#vocabulary` | adiciona mers; mostra n, MW e mudança de estado | MW controla estado/propriedade |
| B · adição vs condensação | `#mechanisms` | a cada passo, condensação ejeta H₂O; adição não | discriminador do subproduto |
| C · free-radical stepper | `#freeradical` | iniciação/propagação/terminação em SVG | 3 estágios + radical na ponta |
| D · calor termoplástico/termofixo | `#architecture` | slider de temperatura: linear desliza, rede trava | termofixo ≠ "só mais duro" |
| E · densidade de reticulação | `#properties` | slider muda leitura de 6 propriedades; alerta fragilidade | trade-off da reticulação |
| F · plastificação | `#properties` | slider insere plastificante, cadeias se afastam | mobilidade↑, Tg↓ |
| G · pré-gel/pós-gel/estresse | `#shrinkage` | slider de extensão da reação; abre fenda se estresse > adesão | a âncora clínica central |

---

## 4. Timing sugerido (2 h ≈ 120–150 min com folga)

Big picture 5 · Vocabulário + chain builder 15 · Adição/condensação 20 · Radical livre 20 ·
Arquitetura + calor 20 · MW/reticulação/plastificação 25 · Contração 25 · Equívocos + checkpoint 15 · Resumo 5.

Navegação em sala: **←/→** ou **PageUp/PageDown** avançam seção a seção (como slides), **Home/End** vão ao
início/fim, **F** = tela cheia. Os "deep dive" (`<details>`) ficam fechados por padrão — abra ao vivo se
quiser aprofundar algum ponto com a turma.

---

## 5. Âncoras clínicas e equívocos (desenho pedagógico)

- **Âncora de ouro**: silicone de **condensação vs adição (PVS)** — mesmo "silicone", comportamento oposto pelo subproduto.
- **Âncora do hero**: falha de margem em compósito → volta no `#shrinkage` (estresse pós-gel).
- Equívocos combatidos: contração vs estresse pós-gel · monômero residual vs grau de conversão vs grau de polimerização · termofixo = rede covalente (não "dureza") · reticulação excessiva → fragilidade.

---

## 6. Aberto para próximas iterações (Q-##)

- **[Q-01]** Confirmar alinhamento com os 14 outcomes oficiais (colar lista).
- **[Q-02]** Revisar as 3 legendas `[VERIFY]` após ver as figuras.
- **[Q-03]** Quer narração/áudio ou versão "handout para impressão" (já há CSS de impressão)?
- **[Q-04]** Próxima aula a construir? (sugestão: 02 Mechanical properties, base para composites/ceramics.)
