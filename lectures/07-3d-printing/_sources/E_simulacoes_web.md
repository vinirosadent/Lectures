# E — Simulações interativas, prior art e técnicas de implementação (pesquisa web, 2026-08-10)

Para os widgets do deck (HTML autocontido, CSS+JS inline, sem bibliotecas, projetado em sala).

## 1. Demos existentes — abrir ao vivo ou imitar

| Recurso | URL | Uso |
|---|---|---|
| **Kiri:Moto** — slicer completo no browser (FDM+SLA), slider de camada, sem login | https://grid.space/kiri/ | Abrir ao vivo: carregar STL de coroa e arrastar o slider mostrando cross-sections reais |
| **iamRapid Cross-Section Viewer** — interseção triângulo–plano, painel 3D + trace 2D sincronizados; detecta *enclosed voids* | https://iamrapid.com/tools/cross-section-viewer/ | **O padrão de interação a copiar**: dois canvas + um range input |
| gcode.ws / gcode-viewer | https://gcode.ws/ · https://gcode-viewer.com/ | Contraste FDM; código-fonte com lógica "slider → índice de camada → redraw" |
| **Bartosz Ciechanowski** (Mechanical Watch, Cameras and Lenses) | https://ciechanow.ski/ | Gold standard de HTML+Canvas sem frameworks. Copiar o *vocabulário de interação*, não o conteúdo |
| Explorable Explanations | https://explorabl.es/ · https://github.com/blob42/awesome-explorables | Garimpo de padrões de UI |
| **Next-Gen Molecular Workbench** (HTML5, open source, polimerização) | https://mw.concord.org/nextgen/ | Motor visual de referência para a animação de partículas |
| CHITUBOX — Island Detection / Risk Detection | https://www.chitubox.com/en/article/academy/tutorial/chitubox-free/manual/island-detection-on-chitubox-explained | Conceito: pixels órfãos por camada → por que existem supports. Redesenhar como mini-grid |
| NC Viewer (toolpath ao vivo) | https://ncviewer.com/ | Alternativa leve |

**Descartar:** 3DPrinterOS Online Slicer (login-walled), STL viewers SEO-spam (link-rot).

## 2. Slicing e staircase — matemática e números

**Geometria (a base do widget):** largura do degrau = `h / tan(θ)` · cusp height ≈ `h · cos(θ)`, θ medido da horizontal.
→ **Quanto mais próxima da horizontal a superfície, PIOR o degrau.** Parede vertical não tem degrau.
Em odontologia: superfície oclusal e vertentes rasas = pior caso; parede axial de preparo = melhor caso.

**Tempo (MSLA):** `T = N_bottom·(t_exp_bottom + t_lift + t_retract + t_rest) + (H/h − N_bottom)·(t_exp + t_lift + t_retract + t_rest)`.
O ponto didático: os tempos de lift/retract/rest **não dependem de h**; só o número de camadas `H/h` depende → **T ∝ 1/h**.
Fonte: https://helpcenter.phrozen3d.com/hc/en-us/articles/33736600221721-Understanding-Resin-Profile-Settings · https://ameralabs.com/blog/the-complete-resin-3d-printing-settings-guide-for-beginners/

**Layer heights típicos** (Protolabs Network, https://www.hubs.com/knowledge-base/impact-layer-height-3d-print/):
FDM 50–400 µm (comum 200) · **SLA 25–100 µm (comum 50)** · SLS 80–120 · MJF 80 · DMLS/SLM 30–50 µm.
Tem foto comparativa de 50/200/300 µm e esquema do stepping crescendo com a curvatura. 🅒 redesenhar.

**Não monotônico:** ~50 µm otimiza trueness e marginal gap de coroas **melhor que 25 µm e que 100 µm** — mais camadas = mais peel cycles = mais deriva. É o "aha moment" do slider.
Retainers ortodônticos: sem diferença significativa entre 100 e 50 µm (p>0,05) — https://pmc.ncbi.nlm.nih.gov/articles/PMC12594317/
Layer thickness × flexural strength/hardness: https://pmc.ncbi.nlm.nih.gov/articles/PMC8885203/

**Tempos reais (Formlabs Dental, https://dental.formlabs.com/blog/dental-model-3d-print-speed-improvements/):** placa cheia de modelos ortodônticos a **160 µm = 3 h · 100 µm = 4,5 h · 50 µm = 7,5 h**. Tem a foto do mesmo modelo nas 3 alturas — o slide de staircase pronto. 🅜🅒

**Teste tátil:** STL grátis "Staircase Effect Test Print" — https://www.printables.com/model/1380128-staircase-effect-test-print

## 3. Orientação e supports

**As 4 regras físicas (Formlabs Form 4 Design Guide, https://formlabs.com/blog/design-guide-form4/ · https://formlabs.com/support/Model-Orientation/):**
1. Inclinar reduz a área de cross-section por camada → reduz a **peel force** contra o FEP. Superfície plana paralela à plataforma = pior caso.
2. Maiores camadas mais próximas da plataforma (menos alavanca).
3. Parede suportada ≤0,2 mm empena só pelas peel forces.
4. Superfícies côncavas apontando para a plataforma; drain hole no ponto mais baixo.

**Regra dos 45° em uma frase:** a 45° cada camada está em ~50% de contato com a de baixo — o suficiente para se auto-suportar.
Slic3r (threshold de overhang): https://manual.slic3r.org/expert-mode/support-material · Bambu Wiki: https://wiki.bambulab.com/en/filament-acc/filament/print-quality/overhang (o *highlight rosa* das superfícies em risco é uma boa ideia visual) · PrusaSlicer via Univ. Maryland: https://dozuki.umd.edu/Guide/PrusaSlicer:+Generating+Supports+II/907 · Univ. Wisconsin: https://medesignlab.me.wisc.edu/training/3d-printing/supports/

**Suction / cupping:** ao subir a plataforma, uma cavidade fechada aumenta de volume → queda de pressão → parede encurva e rompe. Formlabs explica com diagrama e tem toggle "Show Cups": https://formlabs.com/support/Cupping-Blowout/
Números de blog (⚠️ não peer-reviewed): parede 2,5–3 mm ao ocar; 2–3 drain holes de 4–6 mm; segundo furo no topo como *breather*.

## 4. Fotopolimerização visualizada

**⭐ NIST — Stochastic Network Growth Simulation for Photopolymerization**
https://www.nist.gov/programs-projects/stochastic-network-growth-simulation-photopolymerization
GIF: https://www.nist.gov/sites/default/files/images/2018/02/02/display2.gif
Legenda oficial: *a maior parte dos crosslinks (amarelo) é criada nos estágios tardios da cura; cada novo crosslink substitui um nó regular (vermelho)*.
**Obra de agência federal dos EUA → o único asset visual desta pesquisa que se pode embutir diretamente** (confirmar em https://www.nist.gov/copyrights-disclaimers). Paper: Sarkar & Lin-Gibson, *Adv Theory Simul* 2018 🅟

**Reimplementação em canvas:** grid de monômeros cinzentos → pulso de luz cria radicais → random walk → ligação e propagação → nós amarelos de crosslink. Contadores vivos de **% conversion** e **crosslink density** + barra de **mobilidade caindo** (autodesaceleração/vitrificação). O **gel point** emerge naturalmente quando um cluster percola de borda a borda.

**Dead zone / oxygen inhibition (CLIP):**
PDF aberto do curso MIT CBA com as figuras canônicas: https://fab.cba.mit.edu/classes/865.18/additive/clip.pdf (original em *Science* 🅟)
PNAS layerless: https://www.pnas.org/content/113/42/11703
**Simulação 2D de difusão-reação de O₂ com mapas de concentração e conversão vs. altura** (open access): https://ncbi.nlm.nih.gov/pmc/articles/PMC7240730
Widget sugerido: eixo vertical = altura acima da janela; gradiente de O₂ subindo, gradiente de radicais descendo; a **linha onde se cruzam** é a interface de cura, a faixa abaixo pisca "DEAD ZONE". Slider de intensidade move a interface para baixo; slider de permeabilidade faz o contrário.

## 5. Técnicas de canvas/SVG (implementação)

| Recurso | URL | O que tirar |
|---|---|---|
| MDN Advanced animations | https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations | Loop canônico clear→update→draw→rAF |
| MDN Optimizing canvas | https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas | Offscreen, camadas, rAF nunca setInterval |
| web.dev HiDPI canvas | https://web.dev/articles/canvas-hidipi | Padrão retina completo |
| CSS-Tricks stroke-dasharray | https://css-tricks.com/how-to-get-handwriting-animation-with-irregular-svg-strokes/ | "Desenhar" o laser SLA traçando o contorno |
| Motion Tricks masks × clipPath | https://www.motiontricks.com/svg-masks-and-clippaths/ | Reveal progressivo da peça |
| Marching squares | https://observablehq.com/@mahog/marching-squares · https://en.wikipedia.org/wiki/Marching_squares | Contorno de campo escalar 2D em ~40 linhas, sem three.js |

**Restrições para projeção (críticas):**
- `const dpr = Math.min(window.devicePixelRatio || 1, 2)` — cap em 2.
- **Re-setup ao mover para o projetor**: ouvir `resize` **e** `matchMedia('(resolution: 1dppx)')` — o dpr muda ao passar para o segundo monitor e o canvas fica borrado. É o bug nº 1 em aula.
- Dois canvas em camadas: fundo estático desenhado uma vez, só o que anima no de cima.
- 300–800 partículas no máximo; `fillRect(x,y,2,2)` em vez de `arc()` (~5× mais barato).
- **Sliders determinísticos**: `draw(sliderValue)` como função pura — arrastar para trás tem de voltar exatamente ao mesmo estado. Estado acumulado quebra a demo ao vivo.
- Separar *play* (rAF avança t) de *scrub* (range escreve t, um redraw).
- Fonte mínima ~18–20 px CSS em canvas; rótulo que importa vai em HTML por cima, não em `fillText`.
- **Sem WebGL/three.js** — context loss ao trocar de display via HDMI.

## 6. Vídeos de processo (⚠️ durações não verificadas; linkar, não embutir arquivo)

| Vídeo | URL |
|---|---|
| Step-by-step: 3D print dental crowns, SprintRay Pro 55S (iDD, 2023) | https://www.youtube.com/watch?v=cQdmy9WoVwo |
| Post-processing de coroa impressa (VarseoSmile, 2021) | https://www.youtube.com/watch?v=ImULpG8rENo |
| Printing / Washing / Curing — Formlabs Form 4 (2024) | https://www.youtube.com/watch?v=tYKHHNCp1pI |
| **Timelapse de modelos dentais**, Zortrax Inkspire | https://www.youtube.com/watch?v=S1eq_hpFiDg |
| Timelapse resina transparente (curto, dá para ver dentro da peça) | https://www.youtube.com/watch?v=zPBYtKiy_B0 |
| Peça colada no FEP (evidência física da peel force) | https://www.youtube.com/watch?v=VQsaFIc-42o |
| Remoção de suportes (support scars visíveis) | https://www.youtube.com/watch?v=BW-Q3xsigNU |

**Não existe** vídeo público de câmera por baixo do vat filmando a máscara LCD acender camada a camada, nem macro em slow motion do peel front — o que é justamente o argumento para a nossa animação existir.

## Priorização recomendada dos widgets
1. **Slicing / staircase slider** — maior retorno, matemática trivial, zero risco. Construir primeiro.
2. **Orientação → área de secção + peel force + posição dos supports** — 1 controle, 3 conceitos.
3. **Cupping / drain hole toggle** — o mais memorável e clinicamente acionável.
4. **Dead zone / oxygen inhibition** — 2 sliders, 2 gradientes, 1 interface.
5. **Polimerização em partículas + gel point + DC** — o mais caro; se apertar, usar o GIF do NIST.
