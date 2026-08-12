# Aula 07 — prompts de figura, lote 2 (versão científica)

Gere, salve em `1. Source\07. Principles of 3D printing in dentistry\Assets\` e me avise
("adicionei material"). No deck, cada uma já tem um **placeholder tracejado** no lugar exato.

## Regra que vale para as quatro

**Nenhuma destas figuras pode ser meramente ilustrativa.** Cada uma tem de carregar pelo menos um destes:
um **eixo com escala**, uma **barra de escala metrológica**, uma **fórmula** ou **valores medidos**. O aluno
tem de poder *ler uma quantidade* na figura, não só reconhecer um desenho.

**Todos os números abaixo são para reproduzir literalmente** — eu os calculei ou os tirei das fontes da aula.
Modelos de imagem erram texto e algarismo com frequência: **confira os números na imagem gerada** antes de me
mandar. Se algum sair errado, é mais rápido regerar do que corrigir. **Não deixe o modelo inventar valores.**

**Estilo comum — cole no início de todo prompt:**

> Clean academic scientific diagram for a university dental materials lecture, projected on a large
> classroom screen. Flat vector illustration style, pure white background, no drop shadows, no gloss,
> no 3D bevels, no stock-photo look. Restrained palette: **teal (#0d7d7d)** for science and mechanism,
> **amber (#d98a00)** for clinical relevance, **crimson (#c0392b)** for warning or failure,
> **dark slate (#1c2b33)** for structural elements, mid-grey for secondary detail.
> Typography: clean geometric sans-serif, **large enough to read from the back of a lecture hall**;
> numerals and units in a monospaced face. Labels in English, concise, no full sentences.
> **Reproduce every number and unit exactly as written; do not invent, round or add any value.**
> No watermark, no logo, no signature.

---

## FIG 07.9 — `single-vs-multi-step.png` · 4:3 · 2000×1500 ⟵ **regerar**
**Onde:** slide "Single-step and multi-step processes".
**Ciência que a figura tem de carregar:** onde no processo o material adquire as propriedades, e o que
acontece **quimicamente** em cada lado — conversão de duplas ligações C=C e monômero residual.

> Two horizontal process lanes stacked one above the other, sharing a common horizontal axis at the bottom
> labelled "stages of manufacture", left to right.
>
> UPPER LANE, titled "Milled crown — single-step: properties inherited": stage 1 a solid industrial blank
> drawn as a puck, annotated "industrially polymerised or sintered: controlled temperature and pressure";
> stage 2 a milling bur cutting the crown shape from it, annotated "material removal only — no chemical
> change"; stage 3 the finished crown. Numbered circles 1–3 in teal.
>
> LOWER LANE, titled "Printed crown — multi-step: properties produced at the bench": stage 1 a bottle of
> liquid resin, annotated "monomer + photoinitiator"; stage 2 the crown on a build platform inside a
> printer, drawn with visible layer lines and tinted pale yellow, annotated "green part — shape achieved,
> conversion incomplete"; stage 3 a wash tank labelled "WASH", annotated "removes unreacted surface
> monomer"; stage 4 a UV chamber labelled "UV CURE 405 nm", annotated "converts trapped monomer";
> stage 5 the finished crown, tinted orange. Numbered circles 1–5 in amber.
>
> A vertical dashed line crosses both lanes and continues down into the chart below, labelled at the top
> "shape achieved". It sits after milling in the upper lane and after printing in the lower lane.
>
> BELOW BOTH LANES, occupying the lower third, **one single line chart shared by both lanes — not two
> separate bars**:
> - Y axis on the left, labelled "degree of conversion (%)", ticks at **0, 25, 50, 75, 100**.
> - A horizontal **crimson dashed threshold line at 50%**, labelled at its right end
>   "**below 50%: unreacted monomer can leach**".
> - X axis is the same "stages of manufacture" axis, each stage icon above sitting directly over its
>   position on the chart.
> - **Teal line (milled)**: flat and high across the entire width, drawn at about 95%, labelled on the line
>   "industrially polymerised — conversion already high".
> - **Amber line (printed)**: a **step function**, not a smooth curve. Near 0% at the resin stage; steps up
>   to **46%** at the printing stage, with a small mono-type callout reading "**≈ 46% (green part)**"; a
>   small rise at the wash stage; steps up to **70%** at the UV cure stage, with a callout reading
>   "**≈ 70% after 45 min post-cure**"; then flat to the end.
> - **The amber line must sit clearly BELOW the 50% threshold at the green-part stage and clearly ABOVE it
>   after post-curing** — this crossing is the point of the whole chart.
> - The vertical gap between the teal and amber lines exactly at the dashed "shape achieved" line is filled
>   with light crimson hatching, with a bracket labelled "**properties still to be produced**".
>
> TWO SMALL MOLECULAR INSETS, circular, connected by thin leader lines to the amber line:
> - one at the green-part stage: a loose polymer network with several **unattached free monomer units drawn
>   as small crimson dots** floating in the gaps, labelled "residual monomer, mobile".
> - one at the post-cure stage: the same network now denser and more crosslinked, with almost no free dots,
>   labelled "crosslinked network, monomer consumed".
>
> Caption strip along the very bottom: "ISO/ASTM 52900 — single-step vs multi-step process".
>
> The chart must read as a proper plot with labelled axes and tick values, not as a progress bar. Do not use
> gradient fills inside the lines and do not split any line into two shades.

*Valores: 46% e 70% são grau de conversão (Hassanpour, Polymers 2024; melhor valor medido 69,6% aos 45 min,
Kirby). O limiar de 50% para lixiviação vem da mesma revisão. Os 95% da fresada são indicativos — a figura
traz a nota "schematic" se você preferir; me diga e eu ajusto o prompt.*

---

## FIG 07.10 — `slicing-principle.png` · 4:3 · 2000×1500
**Onde:** slide "Slicing: converting a volume into a stack of layers".
**Ciência que a figura tem de carregar:** que a resolução é **anisotrópica** (z ≠ x–y), e onde a altura de
camada se situa em relação às tolerâncias clínicas que o aluno já vai ver na aula.

> Three panels left to right with large arrows between them, occupying the upper two-thirds.
>
> PANEL 1, titled "Continuous volume": a molar crown drawn as a smooth solid, three-quarter view, dark slate
> outline with light teal fill.
>
> PANEL 2, titled "Sliced": the same crown cut into a stack of horizontal layers with visible gaps, slightly
> exploded vertically. **One single layer is pulled out to the side** and shown flat, face on, as a closed
> 2D contour with hatched interior. Two leader lines with labels:
> - pointing at the vertical gap between two layers: "**layer height h — z resolution**";
> - pointing at the outline of the extracted layer: "**in-plane resolution — laser spot, projected voxel or
>   nozzle width**".
> A short annotation beside the extracted layer: "**each layer is a closed contour: the interior can be
> solid or hollowed**".
>
> PANEL 3, titled "Rebuilt": the crown reconstructed from the bottom upwards on a build platform; the lower
> two-thirds solid, the topmost layer highlighted in amber as the one currently being formed, the upper
> third a faint dashed outline. Annotation: "**number of layers = object height ÷ h**".
>
> LOWER THIRD — **a horizontal logarithmic scale bar in micrometres**, the scientific core of the figure.
> A single horizontal axis with tick marks and labels at **10, 25, 50, 100, 200, 500 µm**. On it, mark:
> - a teal band spanning **25–100 µm** labelled "**typical layer height, vat photopolymerization**";
> - a teal tick at **16–32 µm** labelled "material jetting";
> - a teal tick at **20–50 µm** labelled "powder bed fusion, metal";
> - a teal band spanning **50–400 µm** labelled "material extrusion (FFF)";
> - an amber tick at **30 µm** labelled "**virtual cement space used in crown CAD**";
> - a crimson tick at **120 µm** labelled "**clinically accepted marginal limit**".
> Above the scale, a short line of text: "**one 50 µm layer is about 40% of the whole marginal tolerance**".
>
> Beneath the scale bar, a thin band with two opposing arrows: on the left "CBCT: volume → slices", on the
> right "printer: slices → volume", labelled in the centre "**the same discretisation, run in opposite
> directions**".

*Valores: alturas de camada típicas por processo (Protolabs/Hubs knowledge base e P5); 30 µm é o cement
space do desenho experimental de Farag 2024; 120 µm é McLean & von Fraunhofer, BDJ 1971.*

---

## FIG 07.11 — `crown-surfaces-staircase.png` · 16:9 · 2400×1350
**Onde:** slide "What layer height does to a restoration".
**Ciência que a figura tem de carregar:** a fórmula do degrau **avaliada**, com os três valores calculados
para h = 50 µm, e a comparação direta com o limite clínico. É a figura que prova que o problema não é
"a superfície fica feia", é que **numa superfície ela ultrapassa a tolerância clínica**.

> Central image, occupying the left two-thirds: a vertical cross-section through a full crown seated on a
> prepared tooth, drawn large, with **horizontal layer lines drawn straight through the whole crown**, to
> show that the layers stay parallel to the build platform regardless of the crown's shape. A small caption
> beside it: "**layer height h = 50 µm in all three cases**".
>
> Three magnified circular callouts connected to the crown by thin leader lines. In each callout the smooth
> CAD outline is drawn dashed and the printed outline is drawn as steps over it:
> - CALLOUT A, on the **occlusal surface**, crimson border. Title "Occlusal — worst case".
>   Sub-label "θ ≈ 10° to the platform". Values, in monospaced type:
>   "**step width = 284 µm**" and "**deviation = 49 µm**". Add a red tag: "**exceeds the 120 µm limit**".
> - CALLOUT B, on a **cuspal incline**, amber border. Title "Cuspal incline — intermediate".
>   Sub-label "θ ≈ 45°". Values: "**step width = 50 µm**", "**deviation = 35 µm**".
> - CALLOUT C, on the **axial wall and finish line**, teal border. Title "Axial wall — best case".
>   Sub-label "θ ≈ 80°". Values: "**step width = 9 µm**", "**deviation = 9 µm**".
>
> RIGHT THIRD — **a small line plot**, the quantitative core:
> - X axis "surface angle θ to the platform (°)", ticks at 10, 30, 45, 60, 80.
> - Y axis "step width (µm)", **logarithmic**, ticks at 10, 50, 100, 500.
> - One teal curve for **h = 50 µm** and one fainter grey curve for **h = 100 µm**, both falling steeply
>   from left to right.
> - A horizontal crimson dashed line at **120 µm** labelled "clinical marginal limit".
> - Three filled dots on the h = 50 µm curve at θ = 10°, 45° and 80°, coloured crimson, amber and teal to
>   match callouts A, B and C.
> - The formula **step width = h / tan θ** printed above the plot.
>
> Along the very bottom, one line of text: "**the same layer height gives a 30-fold difference in surface
> error across a single crown**".
>
> Do not draw supports, a printer or a resin vat — this figure is only about surface geometry.

*Valores calculados para h = 50 µm: 50/tan10° = 284 µm · 50/tan45° = 50 µm · 50/tan80° = 8,8 ≈ 9 µm.
Desvios = h·cos θ: 49 · 35 · 9 µm. Razão 284/9 ≈ 32× → "30-fold". A fórmula é exata, não é estimativa.*

---

## FIG 07.12 — `aligner-production-chain.png` · 16:9 · 2400×1350
**Onde:** slide de abertura (Align).
**Ciência que a figura tem de carregar:** por que o modelo impresso pode ter requisitos de propriedade
muito mais baixos que o dispositivo — **vida útil exigida** e **temperatura de termoformagem**. Isto é
seleção de materiais, não logística.

> UPPER TWO-THIRDS — a horizontal production chain of six stages with arrows, clean icons with labels
> beneath:
> 1 "Intraoral scan" — a scanner wand over an arch.
> 2 "Digital set-up" — three small arches with teeth in progressively different positions, labelled
>   "stage 1 … stage n".
> 3 "Printed model" — one arch model on a build platform, drawn with visible layer lines.
> 4 "Thermoforming" — a flat polymer sheet being drawn down over that model under heat and vacuum, with the
>   annotation "**sheet heated above its glass transition temperature, T_g**".
> 5 "Trimming" — the formed sheet cut along the gingival outline.
> 6 "Aligner" — the finished clear appliance alone.
> Stage 3 is boxed in amber and tagged "**TOOL — printed, then discarded**".
> Stage 6 is boxed in teal and tagged "**PRODUCT — not printed**".
> A thin bracket spans stages 2–5 labelled "repeated for every stage, for every patient".
>
> LOWER THIRD — **a horizontal logarithmic time axis**, the scientific core of the figure, labelled
> "required service life of the object". Tick labels: **minutes · hours · days · weeks · months · years**.
> Three markers placed on it, each with a small icon and a bar:
> - **printed model** at "minutes", amber, annotated "must survive one thermoforming cycle only; the
>   requirement is **dimensional stability at the forming temperature**, not durability";
> - **aligner** at "1–2 weeks", teal, annotated "worn intraorally; must resist water sorption, staining and
>   creep";
> - **definitive crown** at "years", dark slate, annotated "must resist fatigue, wear and hydrolytic
>   degradation".
> A single line of text beneath the axis: "**property requirements scale with required service life — this
> is why a printed model is an easy object and a printed crown is a hard one**".
>
> Keep arches and appliances schematic; no photorealism, no brand names, no patient photographs.

*A escala de vida útil é o argumento de seleção de materiais que amarra o slide de abertura ao slide da
escada de maturidade, no fim da aula. Os "1–2 weeks" de uso por alinhador e o requisito térmico da
termoformagem são propriedades do processo, não números de fabricante.*
