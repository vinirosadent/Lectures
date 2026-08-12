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

## FIG 07.9 — `single-vs-multi-step.png` · 4:3 · 2000×1500  ⟵ **v2, regerar**
**Onde:** slide "Single-step and multi-step processes".
**O que mudou:** as duas barras "material properties" saem. No lugar entra **um único gráfico** com duas
curvas no mesmo eixo — é o que transforma a figura de ilustração em medida, e o vão entre as curvas na
linha "shape achieved" passa a ser o argumento inteiro do slide.

> Two horizontal process lanes stacked one above the other, sharing a common horizontal axis at the bottom
> labelled "stages of manufacture", left to right.
>
> UPPER LANE, titled "Milled crown — properties inherited": stage 1 a solid industrial blank drawn as a
> puck, annotated "polymerised / sintered under factory control"; stage 2 a milling bur cutting the crown
> shape from it; stage 3 the finished crown. Numbered circles 1–3 in teal.
>
> LOWER LANE, titled "Printed crown — properties produced at the bench": stage 1 a bottle of liquid resin;
> stage 2 the crown on a build platform inside a printer, drawn with visible layer lines and tinted pale
> yellow, labelled "green part — shape only"; stage 3 a wash tank labelled "WASH"; stage 4 a UV chamber
> labelled "UV CURE"; stage 5 the finished crown, tinted orange. Numbered circles 1–5 in amber.
>
> A vertical dashed line crosses both lanes and continues down into the chart below, labelled at the top
> "shape achieved". It sits after milling in the upper lane and after printing in the lower lane.
>
> BELOW BOTH LANES, occupying the lower third of the figure, **a single line chart shared by both lanes —
> not two separate bars**:
> - Y axis on the left, labelled "share of final material properties", with only three tick labels:
>   **0%**, **50%**, **100%**. A faint horizontal gridline at 100%.
> - X axis is the same "stages of manufacture" axis, aligned so that each stage icon above sits directly
>   over its position on the chart.
> - **Teal line (milled)**: a flat horizontal line sitting exactly on 100% across the entire width, from
>   the first stage to the last. Small label on the line: "milled — inherited from the blank".
> - **Amber line (printed)**: drawn as a **step function**, not a smooth curve. It stays flat near 0% for
>   the liquid resin stage; steps up to roughly **half height** at the printing stage; rises slightly at the
>   wash stage; steps up to 100% only at the post-curing stage, then stays flat to the end.
>   Small label on the line: "printed — produced during post-processing".
> - The **vertical gap between the two lines at the dashed "shape achieved" line is shaded** in light
>   crimson hatching, with a short bracket and the label **"properties still to be produced"**.
> - Two small callouts pointing at the amber line, in mono-style small type: at the printing step,
>   "degree of conversion ≈ 46%"; at the post-curing step, "≈ 70%".
> - A small note in grey under the Y axis: "schematic".
>
> Caption strip along the very bottom: "ISO/ASTM 52900 — single-step vs multi-step process".
>
> The chart must read as a proper plot with axes and ticks, not as a progress bar or a loading indicator.
> Do not use gradient fills inside the lines, and do not split any line into two different shades.

**Por que assim:** a barra anterior era decorativa — sem eixo, sem grandeza nomeada, e com dois tons de teal
que não correspondiam a estágio nenhum. Com eixo em % e curva em degraus, o aluno lê *quanto* falta e
*em que passo* aquilo aparece; e a área hachurada no "shape achieved" é literalmente a diferença entre
single-step e multi-step.

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
