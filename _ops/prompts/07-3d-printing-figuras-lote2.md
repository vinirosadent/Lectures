# Aula 07 — prompts de figura, lote 2 (slides densificados)

Gere, salve em `1. Source\07. Principles of 3D printing in dentistry\Assets\` e me avise
("adicionei material"). No deck, cada uma já tem um **placeholder tracejado** no lugar exato — assim que
chegarem, eu troco.

**Estilo comum — cole no início de todo prompt:**

> Clean academic scientific diagram for a university dental materials lecture, projected on a large
> classroom screen. Flat vector illustration style, pure white background, no drop shadows, no gloss,
> no 3D bevels, no stock-photo look. Restrained palette: **teal (#0d7d7d)** for science and mechanism,
> **amber (#d98a00)** for clinical relevance, **crimson (#c0392b)** for warning or failure,
> **dark slate (#1c2b33)** for structural elements, mid-grey for secondary detail.
> Typography: clean geometric sans-serif, **large enough to read from the back of a lecture hall**.
> Labels in English, concise, no full sentences. No watermark, no logo, no signature.

---

## FIG 07.9 — `single-vs-multi-step.png` · 4:3 · 2000×1500
**Onde:** slide "Single-step and multi-step processes". Hoje o aluno tem de imaginar isso.

> Two horizontal process lanes stacked one above the other, sharing a common horizontal axis labelled
> "stages of manufacture", left to right.
> UPPER LANE, titled "Milled crown — properties inherited": stage 1 a solid industrial blank drawn as a
> puck, annotated "polymerised / sintered under factory control"; stage 2 a milling bur cutting the crown
> shape from it; stage 3 the finished crown. Beneath this lane runs a horizontal bar labelled
> "material properties", **already completely filled in teal from the very first stage** and unchanged
> across all three.
> LOWER LANE, titled "Printed crown — properties produced at the bench": stage 1 a bottle of liquid resin;
> stage 2 the crown emerging from a printer, drawn with visible layer lines and tinted pale yellow, labelled
> "green part — shape only"; stage 3 a wash tank; stage 4 a UV cure chamber; stage 5 the finished crown,
> tinted orange. Beneath this lane the same "material properties" bar is **empty at stages 1–2 and fills
> progressively across stages 3–5**, reaching full only at the end.
> A vertical dashed line crosses both lanes at the point where the geometry is complete, labelled
> "shape achieved". The key visual message is that in the upper lane the properties bar is already full at
> that line, and in the lower lane it is nearly empty.
> Small caption strip at the bottom: "ISO/ASTM 52900 — single-step vs multi-step process".

---

## FIG 07.10 — `slicing-principle.png` · 4:3 · 2000×1500
**Onde:** slide "Slicing: converting a volume into a stack of layers".

> Three panels left to right with large arrows between them.
> PANEL 1, titled "Continuous volume": a molar crown drawn as a smooth solid, three-quarter view,
> in dark slate outline with a light teal fill.
> PANEL 2, titled "Sliced": the same crown cut into a stack of horizontal layers with visible gaps between
> them, slightly exploded vertically. **One single layer is pulled out to the side** and shown flat, face
> on, as a 2D closed contour with its interior hatched — this is the layer's cross-section. A small label
> points to the gap between two layers reading "layer height (z resolution)", and another points to the
> outline of the extracted layer reading "in-plane resolution (optics or nozzle)".
> PANEL 3, titled "Rebuilt": the crown being reconstructed from the bottom upwards on a build platform;
> the lower two-thirds are solid, the topmost layer is highlighted in amber as the one currently being
> formed, and the upper third is drawn as a faint dashed outline of what is still to come.
> Beneath the three panels, a thin horizontal band: on the left "CBCT: volume → slices", on the right
> "printer: slices → volume", with arrows pointing in opposite directions to show the operations are
> inverse to one another.

---

## FIG 07.11 — `crown-surfaces-staircase.png` · 16:9 · 2400×1350
**Onde:** slide novo "What layer height does to a restoration". É a figura que liga a geometria à clínica.

> Central image: a vertical cross-section through a full crown seated on a prepared tooth, drawn large and
> clearly, with **horizontal layer lines drawn straight through the whole crown** to show that the layers
> are always parallel to the build platform regardless of the crown's shape.
> Three magnified circular callouts connected to the crown by thin leader lines:
> CALLOUT A, on the **occlusal surface** (a nearly horizontal region): the smooth CAD outline drawn dashed,
> approximated by very **wide, shallow steps** that deviate visibly from it. Border and label in crimson,
> titled "Occlusal — worst case", subtitle "surface close to horizontal, θ small, steps wide".
> CALLOUT B, on a **cuspal incline** (roughly 45°): moderate steps, amber border, titled
> "Cuspal incline — intermediate".
> CALLOUT C, on the **axial wall and finish line** (near vertical): the steps are almost invisible and the
> printed outline nearly coincides with the CAD outline. Teal border, titled "Axial wall — best case",
> subtitle "surface close to vertical, θ large, steps narrow".
> Along the bottom, a horizontal gradient bar from crimson on the left to teal on the right, labelled at the
> left end "surface close to horizontal" and at the right end "surface close to vertical", with the formula
> **step width = h / tan θ** set above the middle of the bar.
> Do not draw supports or a printer — this figure is only about surface geometry.

---

## FIG 07.12 — `aligner-production-chain.png` · 16:9 · 2400×1350
**Onde:** slide de abertura (Align). Serve para mostrar que o objeto impresso é a ferramenta, não o produto.

> A single horizontal production chain of six stages with arrows, drawn as clean icons with labels beneath.
> 1 "Intraoral scan" — a scanner wand over an arch.
> 2 "Digital set-up" — a series of three small arches showing teeth in progressively different positions,
>   labelled "stage 1 … stage n".
> 3 "Printed model" — one arch model on a build platform, drawn with visible layer lines.
> 4 "Thermoforming" — a flat polymer sheet being drawn down over that model under heat and vacuum.
> 5 "Trimming" — the formed sheet being cut along the gingival outline, with the model beneath.
> 6 "Aligner" — the finished clear appliance on its own.
> **Stage 3 is boxed in amber and tagged "TOOL — printed, then discarded".**
> **Stage 6 is boxed in teal and tagged "PRODUCT — not printed".**
> A thin bracket spans stages 2–5 labelled "repeated for every stage of the treatment, for every patient".
> Keep the arch and appliance shapes schematic; no photorealism, no brand names.
