# Aula 07 — prompts de figura (gerar fora, salvar em `1. Source\07. Principles of 3D printing in dentistry\Assets\`)

Gere cada imagem, salve com o nome sugerido na pasta `Assets\` e me avise ("adicionei material").
Eu copio, renomeio em kebab-case e ligo no deck.

**Estilo comum — cole no início de todo prompt:**

> Clean academic scientific diagram for a university dental materials lecture, projected on a large
> classroom screen. Flat vector illustration style, pure white background, no drop shadows, no gloss,
> no 3D bevels, no stock-photo look. Restrained palette: **teal (#0d7d7d)** for science and mechanism,
> **amber (#d98a00)** for clinical relevance, **crimson (#c0392b)** for warning or failure,
> **dark slate (#1c2b33)** for structural elements, mid-grey for secondary detail.
> Typography: clean geometric sans-serif, **large enough to read from the back of a lecture hall**.
> Labels in English, concise, no full sentences. No watermark, no logo, no signature.

---

## FIG 07.1 — `workflow-ribbon.png` · 16:9 · 2400×1350
**O que é:** a espinha da LO-1. A fita do fluxo com a faixa dupla — decisão do operador em cima, propriedade escrita embaixo.

> A horizontal process ribbon of six connected stages with arrows, spanning the full width:
> 1 "Data acquisition" (icon: intraoral scanner wand + CBCT head), 2 "CAD design" (icon: wireframe crown),
> 3 "Print preparation" (icon: object tilted on a build platform), 4 "Layer-by-layer build" (icon: resin vat
> with platform), 5 "Post-processing" (icon: wash tank + UV cure chamber), 6 "Finished device" (icon: polished crown).
> Stage 3 is subdivided into three small chips beneath it: "orientation", "supports", "slicing".
> Stage 5 is subdivided into three chips: "wash", "support removal", "post-cure".
> ABOVE the ribbon, a thin teal band labelled "operator decision" with one short phrase per stage.
> BELOW the ribbon, a thin amber band labelled "what this step writes into the material", with one short
> phrase per stage: "scan accuracy", "geometry and undercuts", "dimensional accuracy AND strength",
> "resolution vs time", "degree of conversion, residual monomer", "surface and biocompatibility".
> The two bands must be visually clearly separated from the main ribbon.

---

## FIG 07.2 — `process-families-matrix.png` · 16:9 · 2400×1350
**O que é:** o slide mais valioso da LO-2. Cinco famílias pelo mecanismo de consolidação.

> A clean comparison matrix, 5 rows by 5 columns, with a header row.
> Rows (left column, bold): "Vat photopolymerization (SLA · DLP · LCD)", "Material jetting (PolyJet)",
> "Powder bed fusion (SLS · SLM)", "Binder jetting", "Material extrusion (FFF)".
> Columns: "Feedstock form", "What consolidates it", "Support comes from", "Materials it accepts",
> "Typical dental device".
> Cell contents — Feedstock: liquid in a vat / droplets / powder bed / powder bed / filament.
> What consolidates it: light / light / laser (sinter or melt) / chemical binder / heat.
> Support: sacrificial structures / dedicated support material / the surrounding powder itself /
> the surrounding powder itself / sacrificial structures.
> Materials: photopolymer resins / photopolymers, multi-material / metals, polymers, ceramics /
> gypsum, ceramics / thermoplastics.
> Dental device: models, guides, splints, provisionals / multi-colour denture, models /
> Co-Cr frameworks, Ti meshes / models / training models, trays.
> Each row has a small icon in the first column depicting the feedstock.
> Use teal for the "what consolidates it" column to mark it as the organising principle.

---

## FIG 07.3 — `vat-optics-four-panels.png` · 16:9 · 2400×1350
**O que é:** as quatro ópticas do vat lado a lado, variando só o sistema de luz.

> Four schematic side-view cross-sections side by side, identical scale, identical resin vat and build
> platform in each, differing ONLY in the optical system beneath.
> (a) "SLA": a UV laser and a galvanometric scanning mirror, curing a single moving point; a dashed arrow
>     shows the scanning path. Caption below: "cures point by point".
> (b) "LCD / mSLA": an array of UV LEDs at the bottom (label "395–405 nm") shining through an LCD panel
>     drawn as a checkerboard of black and transparent pixels acting as a mask; the whole layer is exposed
>     at once. Caption: "resolution = LCD pixel size".
> (c) "DLP": a projector with a digital micromirror device, shown with a small magnified inset of square
>     tilting micromirrors; a focusing lens; the whole layer exposed at once. Caption: "resolution = voxel size".
> (d) "CLIP": an oxygen-permeable window at the bottom, a thin shaded band immediately above it labelled
>     "dead zone ≈20–30 µm", and the platform rising with a CONTINUOUS smooth arrow, not a stepped one.
>     Caption: "no peel step".
> Beneath all four panels, one thin comparison strip with four small labelled bars: speed, resolution,
> relative cost, oxygen sensitivity.

---

## FIG 07.4 — `post-processing-five-stages.png` · 16:9 · 2400×1350
**O que é:** a faixa dos cinco estágios, com a mudança de cor como indicador macroscópico de conversão.

> A horizontal strip of five identical dental surgical guides, side by side, left to right, each at a
> different processing stage, each drawn in a DIFFERENT colour to show the chemical change:
> 1 "Printed + washed" — translucent pale yellow, still slightly glossy, small support nubs visible.
> 2 "Post-cured" — translucent orange.
> 3 "Polished" — translucent orange, smooth, support nubs gone.
> 4 "Sleeves inserted" — same, with small metal cylinders seated in the guide holes.
> 5 "Sterilised (autoclaved)" — translucent pale yellow again, slightly lighter than stage 1.
> A thin teal arrow runs beneath the whole strip labelled "degree of conversion increasing".
> A short callout above stage 2 reads: "colour change = chemistry you can see".
> Stage 1 carries a small crimson tag reading "green part — shape finished, material not".

---

## FIG 07.5 — `failure-gallery.png` · 16:9 · 2400×1350
**O que é:** seis falhas características como esquemas de linha, não fotos.

> A 3 by 2 grid of six simple schematic line drawings of 3D print failures, each in a bordered card
> with a bold title and a one-line cause underneath. Crimson is used only for the defect itself,
> everything else in dark slate line art on white.
> 1 "Delamination" — a printed block with a clean horizontal crack splitting it into two stacks of layers.
>   Cause: "peel force beat interlayer bonding".
> 2 "Cupping blowout" — a hollow dome-shaped part with a torn, ragged rupture in its concave wall,
>   with small arrows pointing inward on the wall. Cause: "trapped volume acted as a suction cup".
> 3 "Warping" — a full dental arch model with the molar regions lifting off the build platform and the
>   horseshoe narrowing. Cause: "cure shrinkage pulled the arch inward".
> 4 "Elephant's foot" — a part whose bottom two layers are visibly wider than the rest, spreading outward.
>   Cause: "over-exposed first layers".
> 5 "Support scar" — a crown shown from beneath, with rough bumps on the intaglio surface and along the
>   margin. Cause: "supports placed on the fitting surface".
> 6 "Staircase on the margin" — magnified view of a crown margin where a smooth curved CAD outline
>   (dashed) is approximated by visible rectangular steps. Cause: "layer height against a near-horizontal surface".

---

## FIG 07.6 — `supports-intaglio-inversion.png` · 4:3 · 2000×1500
**O que é:** a regra que se inverte — o melhor momento de discussão da aula.

> Two side-by-side panels with a large teal "vs" between them.
> LEFT panel titled "Crown": a molar crown tilted on a build platform with support struts touching ONLY
> the occlusal and axial outer surfaces; the intaglio (fitting) surface and the margin line are highlighted
> in crimson with a crossed-out support symbol and the label "never here".
> Beneath: "the intaglio IS the cementation interface — any nub is a high spot".
> RIGHT panel titled "Complete denture base": a denture base tilted on a platform with support struts
> touching the INTAGLIO surface, concentrated around the perimeter, drawn in teal with a tick symbol.
> Beneath: "the intaglio will be adjusted, relined and polished anyway".
> A single question in large type across the bottom: "Same surface. Opposite rule. Why?"

---

## FIG 07.7 — `trueness-precision-target.png` · 1:1 · 1800×1800
**O que é:** o vocabulário de exatidão, na figura clássica de alvo (redesenhar, não copiar do NPL).

> A 2 by 2 grid of four dartboard-style concentric targets, each with a cluster of shot marks.
> Horizontal axis labelled "increasing precision" with an arrow pointing right.
> Vertical axis labelled "increasing trueness" with an arrow pointing up.
> Bottom-left: shots scattered widely and off-centre — "low trueness, low precision".
> Bottom-right: shots tightly clustered but far off-centre — "low trueness, high precision".
> Top-left: shots scattered but averaging on centre — "high trueness, low precision".
> Top-right: shots tightly clustered on centre — "high trueness, high precision".
> A bold teal diagonal arrow runs from bottom-left to top-right labelled "ACCURACY".
> A small note in the corner: "accuracy is not a quadrant — it is the diagonal (ISO 5725)".
> The shot marks should be clearly visible from a distance: large solid dots, not thin crosses.

---

## FIG 07.8 — `maturity-ladder.png` · 16:9 · 2400×1350
**O que é:** o fecho da LO-3, escalonado por maturidade — evita o tom publicitário.

> A three-tier ascending staircase diagram, read left to right, each step a wide platform holding a list.
> Step 1, lowest and widest, in confident teal, titled "ROUTINE": study models and dies, custom trays,
> occlusal splints, provisional crowns, castable patterns, surgical guides, aligner models, anatomical
> models for surgical planning.
> Step 2, middle, in amber, titled "EMERGING": complete denture bases and teeth, Co-Cr RPD frameworks,
> metal copings and implant frameworks, cutting and repositioning guides.
> Step 3, highest and narrowest, in muted grey with a crimson outline, titled "EXPERIMENTAL":
> definitive full-contour posterior crowns, implant-supported full-arch prostheses, printed root-form
> implants, printed zirconia.
> A vertical axis on the left labelled "strength of clinical evidence", low at the bottom, high at the top —
> deliberately drawn INVERTED relative to the steps, so the highest step has the weakest evidence.
> A crimson caption under step 3: "clinically available ≠ clinically proven".
