# Aula 07 — prompts de figura, lote 3 (o "andar térreo")

Estas quatro figuras existem por causa da revisão de 2026-08-12, em que um aluno de 2.º ano leu a aula
inteira e reportou que **nunca chegou a ver o processo físico**: nem a máquina, nem a peça na resina, nem
um support, nem o que "0° / 45° / 90°" significam. Todas as confusões dele descem a esta lacuna.

Gere, salve em `1. Source\07. Principles of 3D printing in dentistry\Assets\` e me avise
("adicionei material"). No deck, cada uma já tem um **placeholder tracejado** no lugar exato.
Eu renomeio os arquivos.

## Regra que vale para as quatro

Ao contrário do lote 2, estas figuras são **descritivas, não quantitativas**: o trabalho delas é mostrar
*o que a coisa é*, não medir. Mas continuam a valer duas regras:

1. **Tudo o que aparece tem de estar rotulado.** Um aluno que nunca viu uma impressora não pode ficar a
   adivinhar qual peça é qual. Prefira rótulo explícito a elegância.
2. **Nada de invenção.** Se um número aparece, é porque está escrito aqui.

**Estilo comum — cole no início de todo prompt:**

> Clean academic scientific diagram for a university dental materials lecture, projected on a large
> classroom screen. Flat vector illustration style, pure white background, no drop shadows, no gloss,
> no 3D bevels, no stock-photo look. Restrained palette: **teal (#0d7d7d)** for science and mechanism,
> **amber (#d98a00)** for clinical relevance, **crimson (#c0392b)** for warning or failure,
> **dark slate (#1c2b33)** for structural elements, mid-grey for secondary detail.
> Typography: clean geometric sans-serif, **large enough to read from the back of a lecture hall**;
> numerals and units in a monospaced face. Labels in English, concise, no full sentences.
> **Reproduce every label exactly as written; do not invent or add any value.**
> No watermark, no logo, no signature.

---

## FIG 07.13 — `printer-hardware.png` · 16:9 · 2000×1125
**Onde:** slide "The equipment: printer, wash station, curing unit" (Parte 1).
**O que a figura tem de resolver:** o aluno nunca viu uma impressora. Se ele sair daqui sem saber que há
uma cuba de líquido, uma janela transparente por baixo, e uma plataforma que sobe puxando a peça para fora
do líquido, metade da aula não tem chão.

> A labelled diagram in two zones, separated by a thin vertical rule.
>
> LEFT ZONE, occupying about 60% of the width, titled "1 — Printer (vat photopolymerization, bottom-up)":
> a cutaway side view of a desktop resin printer. From bottom to top: a **light engine** at the base drawn
> as a projector box with a teal light cone rising from it, labelled "light source (laser, LCD or
> projector)"; above it a **transparent window** drawn as a thin horizontal bar, labelled "transparent
> window"; above that a shallow open tank half filled with pale amber liquid, labelled "vat — liquid
> resin"; suspended in the liquid, hanging upside down from above, a **dental crown** in teal being built,
> connected by a lattice of thin vertical struts to a horizontal plate above it; the struts labelled
> "supports", the plate labelled "build platform"; a vertical rail at the side with an upward arrow
> labelled "platform steps up by one layer height". At the very bottom edge of the crown, a small magnified
> circular inset showing the newest layer forming in the narrow gap between the window and the part,
> annotated "new layer forms here, between window and part".
> To the right of the printer, a small two-step cycle diagram with curved arrows: "1. expose" → "2. lift to
> peel and let resin flow back" → back to 1, with the caption underneath "a few seconds per layer,
> almost independent of layer height".
>
> RIGHT ZONE, occupying about 40%, split into two stacked panels:
> upper panel titled "2 — Wash station": a closed basket holding the same crown submerged in a bath of
> clear solvent with a stirring swirl arrow, labelled "solvent removes uncured resin from the surface";
> lower panel titled "3 — Curing unit": the same crown inside a small chamber lined with UV lamps drawn as
> teal chevrons pointing inward, with a small thermometer icon in the corner, labelled "light and heat
> complete the polymerisation".
>
> Across the very bottom of the whole figure, a single horizontal band split in three, aligned under the
> three machines, reading: "geometry established" (under the printer, dark slate) — "surface cleaned"
> (under the wash, mid-grey) — "properties produced" (under the cure unit, amber).

---

## FIG 07.14 — `resin-network.png` · 4:3 · 2000×1500
**Onde:** slide "What the resin is, and what light does to it" (Parte 1).
**O que a figura tem de resolver:** o aluno tem monómero e polímero do 1.º ano, mas nunca lhe disseram que
a resina de impressão é monómero + fotoiniciador, nem o que é o **gel point** — que a aula usa depois numa
animação inteira. Sem isto, a animação do gel point é um desenho a mexer.

> Three square panels in a row, left to right, sharing one continuous horizontal axis beneath them labelled
> "degree of conversion (%)" with ticks at 0, 25, 50, 75, 100.
>
> PANEL 1, titled "Liquid resin", positioned over the 0 mark: many small teal circles scattered freely with
> short motion arrows around them, labelled "monomer — free to move"; among them a few distinct amber
> circles with a small starburst, labelled "photoinitiator"; the panel border drawn as a wavy line to
> suggest a liquid.
>
> PANEL 2, titled "Exposure", positioned between 25 and 50: a teal light cone entering from above; the
> amber photoinitiators now drawn as split pairs with radiating marks, labelled "light produces free
> radicals"; several teal circles now joined into short chains with a few crosslinks between chains;
> remaining free circles still scattered. A vertical crimson dashed line runs down through this panel to
> the axis, ending in a bold label on the axis reading "GEL POINT — liquid becomes solid" with a smaller
> subtitle "reached while most monomer is still unreacted".
>
> PANEL 3, titled "Green part", positioned over about 46 on the axis: a dense interconnected teal network
> filling the panel with a rigid straight border; trapped inside the mesh, four or five isolated teal
> circles drawn with a crimson outline and a small crossed-out motion arrow, labelled "unreacted monomer —
> now physically trapped, can leach out".
>
> Below the axis, two short bracketed markers: one under 46 labelled "as printed ≈46%", one under 70
> labelled "after post-curing ≈70%", with a small arrow between them labelled "post-curing". At the far
> right of the axis, at 100, a small crimson cross with the label "never reached".

---

## FIG 07.15 — `supports-basics.png` · 16:9 · 2000×1125
**Onde:** slide "Support structures" (Parte 1).
**O que a figura tem de resolver:** "supports" aparecem cinco vezes na aula — em vantagens, em falhas, num
slide inteiro sobre onde colocá-los — e nunca foram definidos. O aluno teve de fazer engenharia reversa.

> Three panels in a row, sharing a common dark slate horizontal bar at the bottom of each labelled
> "build platform".
>
> PANEL 1, titled "The problem": a molar crown floating above the platform, occlusal surface downwards.
> The lowest overhanging region of the crown is outlined in crimson and labelled "overhang — nothing
> beneath this layer to rest on". A downward crimson arrow beside it labelled "peel force at every layer",
> and a small crimson symbol showing the region detaching.
>
> PANEL 2, titled "The solution": the same crown in the same position, now connected to the platform by a
> lattice of thin teal struts that branch as they rise and end in very fine points where they touch the
> crown. Labelled "supports — printed in the same resin, broken off afterwards". One strut is magnified in
> a circular inset showing its narrow tip touching the crown surface, annotated "contact point is
> deliberately thin, so it snaps rather than tears".
>
> PANEL 3, titled "The cost": the crown alone, supports removed, with the former contact zone magnified in
> a circular inset showing a small raised nub and a shallow surface irregularity, labelled in amber
> "support scar — requires finishing". Beneath the panel, in amber, the line "support placement is a
> decision about which surface is allowed to be damaged".
>
> Across the bottom of the whole figure, a separate narrow strip, visually set apart, showing a powder bed:
> a rectangular box of stippled grey powder with a part buried inside it, labelled "powder bed fusion — the
> loose powder supports the part, so no supports are removed; the part leaves the machine fragile".

---

## FIG 07.16 — `build-orientation-three.png` · 16:9 · 2000×1125
**Onde:** slide "Build orientation and marginal gap: the measured effect" (Parte 5).
**O que a figura tem de resolver:** esta é a figura mais importante do lote. O aluno disse que este foi
"o momento em que parei de tentar acompanhar", porque não conseguia imaginar o que 0°, 45° e 90° eram.
A figura substitui uma animação que foi removida por não estar a ensinar.

**Regra dura:** as linhas de camada têm de estar **sempre horizontais** nos três painéis — é a peça que
roda, nunca as camadas. É exatamente esse o ponto.

> Three panels in a row, each showing the SAME mandibular molar crown, in cross-section, sitting on a dark
> slate horizontal "build platform" bar at the bottom. In all three panels, thin horizontal grey lines run
> across the entire crown at even spacing, labelled once (in panel 1 only) "printed layers — always
> horizontal". Teal support struts connect the crown to the platform in each panel. The cervical margin —
> the thin peripheral edge of the crown — is drawn as a thick amber line in all three panels, labelled once
> "margin (where the gap is measured)".
>
> PANEL 1, titled "0° — occlusal surface parallel to the platform": the crown sits upright, occlusal
> surface up. The axial walls carrying the amber margin are vertical, so the horizontal layer lines stack
> along them. A magnified circular inset on the margin shows a smooth vertical wall with layers stacked
> neatly one on another, annotated "margin built layer upon layer — smooth". Supports attach to the
> occlusal surface, away from the margin. Below the panel, in a monospaced box: "SLA 40 µm · DLP 57 µm".
>
> PANEL 2, titled "45° — crown tilted": the same crown rotated 45°, layer lines still horizontal and now
> crossing the axial wall obliquely. Magnified inset on the margin shows a stepped, staircase-like edge,
> annotated "layers cross the margin — steps appear". Supports attach to the tilted underside.
> Below the panel: "SLA 55 µm · DLP 70 µm".
>
> PANEL 3, titled "90° — crown on its side": the crown rotated fully onto its side, layer lines still
> horizontal, now running across the margin at the least favourable angle. Magnified inset shows a coarser
> staircase on the margin, annotated "widest steps on the margin". Supports attach close to the margin, with
> a small amber warning marker labelled "supports now near the margin". Below the panel:
> "SLA 72 µm · DLP 89 µm".
>
> Across the bottom of the whole figure, a single horizontal reference line drawn in crimson, spanning all
> three panels, labelled at its right end "120 µm — conventional clinical limit", with a short note beneath
> in mid-grey: "all six values fall below it — orientation changed the margin of safety, not the verdict".
>
> Source line, small, bottom left: "Farag et al., BMC Oral Health 2024;24:73 — 60 crowns, 10 per group".
