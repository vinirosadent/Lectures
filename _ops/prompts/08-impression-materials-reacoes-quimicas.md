# Aula 08 — Prompts para as figuras de REAÇÃO QUÍMICA (ChatGPT)

Cinco figuras. Nível de detalhe: **como no capítulo do Van Noort**, figuras 2.7.6 a 2.7.13.

---

## Antes de começar — leia isto

**Modelos de imagem erram química.** Eles não sabem valência, não contam ligações e corrompem
subscritos. Espere gerar cada figura 3 a 5 vezes. Por isso cada prompt abaixo vem com uma
**lista de conferência** — passe por ela antes de aceitar a imagem.

**Como usar:** cole o bloco `PROMPT` inteiro no ChatGPT (modo de geração de imagem). O prompt está
em inglês de propósito — o texto que aparece dentro da figura é em inglês, e traduzir o prompt faz o
modelo traduzir os rótulos junto.

**Onde salvar:** `1. Source\08. Impression materials\Assets\`, com o nome indicado em cada figura.
Depois me avise e eu renomeio, ligo no HTML e ajusto o enquadramento.

**Paleta da aula** (já está escrita nos prompts):

| Uso | Cor |
|---|---|
| Cadeia polimérica, ciência | teal `#0C7489` |
| Grupo reativo em destaque | âmbar `#B45309` |
| Subproduto que sai | carmim `#BE123C` |
| Texto e rótulos | ardósia `#31465C` |
| Fundo | branco puro |

---

## FIG 08.10 — Polissulfeto: a reação que libera água

**Slide:** 56 · *The polysulphide reaction makes water* · coluna direita
**Arquivo:** `reaction-polysulphide.png` · **1600 × 1200 px (4:3)**
**Fonte:** Van Noort, figuras 2.7.6 e 2.7.7

```
PROMPT

A clean scientific diagram for a dental materials textbook, showing the setting reaction of a
polysulphide impression material. White background, flat vector style, no shading, no 3D, no
gradients, no decorative elements. Sans-serif labels.

The figure has THREE horizontal bands, stacked top to bottom, separated by thin light-grey rules.

BAND 1 — heading "BEFORE SETTING". Draw three separate wavy horizontal lines in teal (#0C7489),
representing polymer chains, stacked with generous vertical space between them. Each wavy line
must carry exactly these groups, drawn as short straight stubs ending in an amber (#B45309) label
reading "SH":
  - one SH at the far LEFT end of the chain
  - one SH at the far RIGHT end of the chain
  - two SH branching downward from the MIDDLE of the chain
Label the band, at the left margin in dark slate (#31465C): "Polysulphide chains, mercaptan (-SH)
groups at the ends and along the chain".

BAND 2 — heading "OXIDATION BY LEAD DIOXIDE". Draw a wide amber arrow pointing downward, and next
to it in dark slate the text "PbO2". This band is a single arrow with its label — no structures.

BAND 3 — heading "AFTER SETTING". Draw the same three teal wavy chains, but now JOINED: the end of
one chain connects to the end of the next by a short straight teal segment labelled "S-S", forming
one long chain; and the middle stubs of neighbouring chains are joined to each other by vertical
teal segments also labelled "S-S". The result must look like a connected net, not like separate
chains. Beside the net, draw three small crimson (#BE123C) circles, each containing the text "H2O",
with small crimson arrows pointing away from the network, upward and to the right. Label these in
crimson: "water, released and lost by evaporation".

At the very bottom, one line of dark slate text:
"Chain lengthening and cross-linking happen together. Water is the by-product."

Every chemical label must be exactly one of these strings and nothing else: SH, S-S, PbO2, H2O.
Do not add any other atoms, letters, numbers or formulas anywhere in the image.
```

**Conferência antes de aceitar**

- [ ] Só existem quatro rótulos químicos na imagem: `SH`, `S-S`, `PbO2`, `H2O`. Nenhum outro.
- [ ] Na banda 1, cada cadeia tem 4 grupos SH: um em cada ponta e dois no meio.
- [ ] Na banda 3 as cadeias estão **conectadas** — se continuarem separadas, a figura não ensina nada.
- [ ] As três moléculas de água estão **saindo** da rede, com seta, não flutuando soltas.
- [ ] Nenhuma letra corrompida (`H₂O` virou `H2Q`, `SH` virou `SI-I`, etc.).

---

## FIG 08.11 — Poliéter: a reação que não libera nada

**Slide:** 60 · *The polyether reaction makes nothing* · coluna direita
**Arquivo:** `reaction-polyether.png` · **1600 × 1200 px (4:3)**
**Fonte:** Van Noort, figuras 2.7.8 e 2.7.9

```
PROMPT

A clean scientific diagram for a dental materials textbook, showing the ring-opening setting
reaction of a polyether impression material. White background, flat vector style, no shading,
no 3D, no gradients. Sans-serif labels.

The figure has THREE horizontal bands, stacked top to bottom, separated by thin light-grey rules.

BAND 1 — heading "THE REACTIVE GROUP". On the left, draw a single wavy teal (#0C7489) line labelled
"polyether chain". At its right end, attached by a short straight stub, draw ONE three-membered
ring in amber (#B45309): an equilateral triangle whose three corners are two carbon atoms and one
nitrogen atom. Label the top corner "N" and leave the two lower corners unlabelled. From the "N"
corner, draw one short bond going up and to the right, ending in the label "R". Beside the ring,
in dark slate (#31465C), the caption: "aziridine ring — three atoms, highly strained".

BAND 2 — heading "THE RING OPENS". Draw a wide amber arrow pointing downward. To the right of the
arrow, in dark slate: "aromatic sulphonate ester". Below the arrow, draw the SAME ring but now
BROKEN OPEN: the triangle is cut at one bond, and the two ends spring apart into a short open
chain, still in amber, with the "N" still labelled. Add a small dark slate caption:
"the strain is released; the opened end is now reactive".

BAND 3 — heading "CROSS-LINKING". Draw three wavy teal chains arranged around a central point, each
one ending in an opened amber group, all three joined together at a single shared nitrogen labelled
"N" in the centre. The three chains must visibly connect to one another through that centre.
On the right side of this band, draw a crimson (#BE123C) dashed rectangle containing, in crimson
text, only the words: "NOTHING LEAVES". No molecule, no arrow escaping, no bubble.

At the very bottom, one line of dark slate text:
"Every atom present in the paste is still present in the set rubber."

Every chemical label must be exactly one of these strings and nothing else: N, R.
Do not draw or write H2O, alcohol, ethanol, or any escaping molecule anywhere in the image.
The reaction produces no by-product and the figure must show that absence explicitly.
```

**Conferência antes de aceitar**

- [ ] O anel da banda 1 tem **três** cantos, não quatro nem cinco. Se tiver mais, refaça.
- [ ] Exatamente **um** nitrogênio por anel, e ele está rotulado `N`.
- [ ] Na banda 2 o anel está visivelmente **aberto**, não apenas maior.
- [ ] Na banda 3 as três cadeias se encontram num ponto comum — se ficarem paralelas, refaça.
- [ ] **Nenhuma molécula escapando.** Este é o ponto inteiro da figura. Se aparecer qualquer bolha
      saindo, a figura está cientificamente errada e ensina o oposto.

---

## FIG 08.12 — Silicone de condensação: a reação que libera etanol

**Slide:** 65 · *The condensation reaction makes ethanol* · coluna direita
**Arquivo:** `reaction-condensation-silicone.png` · **1600 × 1200 px (4:3)**
**Fonte:** Van Noort, figuras 2.7.10 e 2.7.11

```
PROMPT

A clean scientific diagram for a dental materials textbook, showing the condensation cross-linking
reaction of a silicone impression material. White background, flat vector style, no shading, no 3D,
no gradients. Sans-serif labels.

The figure has THREE horizontal bands, stacked top to bottom, separated by thin light-grey rules.

BAND 1 — heading "THE TWO REACTANTS", split into a left half and a right half by a thin vertical
rule.
  LEFT HALF: draw three wavy teal (#0C7489) horizontal lines stacked vertically, each labelled at
  its left end with an amber (#B45309) "OH". Under them, in dark slate (#31465C):
  "polydimethylsiloxane, hydroxyl-terminated — three chains".
  RIGHT HALF: draw one central atom labelled "Si" in amber, with FOUR straight bonds radiating from
  it in the four diagonal directions, each bond ending in the amber label "OEt". Under it, in dark
  slate: "tetraethyl silicate — four reactive arms".

BAND 2 — heading "CROSS-LINKING". A wide amber arrow pointing downward, with the dark slate label
"tin compound" beside it.

BAND 3 — heading "AFTER SETTING", split into a left half and a right half.
  LEFT HALF: draw the central "Si" atom now joined to THREE of the teal chains — each of the three
  bonds drawn as a straight line from Si to a chain, and each of those junctions labelled "O" in
  amber. The FOURTH bond of the Si still carries its original "OEt" label, unreacted. The three
  chains must visibly form a connected network around the central Si.
  RIGHT HALF: draw three separate crimson (#BE123C) circles, each containing the text "EtOH", with
  crimson arrows pointing away to the right, off the edge of the figure. Below them, in crimson:
  "three molecules of ethanol, one per bond formed — small, volatile, leaves quickly".

At the very bottom, one line of dark slate text:
"Three arms are needed to build a network. Two would only make the chain longer."

Every chemical label must be exactly one of these strings and nothing else: OH, Si, OEt, O, EtOH.
Do not add any other atoms, letters, numbers or formulas anywhere in the image.
```

**Conferência antes de aceitar**

- [ ] O silicato central tem **quatro** braços na banda 1. Três ou cinco está errado.
- [ ] Na banda 3, **três** braços reagiram e **um** continua com `OEt`. Esse detalhe é o argumento do
      slide: dois braços só alongariam a cadeia, é o terceiro que faz a rede.
- [ ] São **três** moléculas de etanol saindo — uma por ligação formada. Não duas, não quatro.
- [ ] `EtOH` escrito assim, não `ETOH`, `EtOh` nem `C2H5OH`.
- [ ] As três cadeias estão conectadas entre si através do Si central.

---

## FIG 08.13 — Silicone de adição: a reação que não libera nada

**Slide:** 69 · *The addition reaction makes nothing* · coluna direita
**Arquivo:** `reaction-addition-silicone.png` · **1600 × 1200 px (4:3)**
**Fonte:** Van Noort, figuras 2.7.12 e 2.7.13

```
PROMPT

A clean scientific diagram for a dental materials textbook, showing the addition (hydrosilylation)
setting reaction of a silicone impression material. White background, flat vector style, no shading,
no 3D, no gradients. Sans-serif labels.

The figure has THREE horizontal bands, stacked top to bottom, separated by thin light-grey rules.

BAND 1 — heading "THE TWO PASTES", split into a left half and a right half by a thin vertical rule.
  LEFT HALF, sub-heading "BASE": draw two wavy teal (#0C7489) horizontal lines. At the right end of
  each, attached by a short stub, draw a DOUBLE BOND — two parallel straight lines close together —
  ending in the amber (#B45309) label "CH2". Label this group in amber: "vinyl". Under it, in dark
  slate (#31465C): "polydimethylsiloxane with vinyl end groups".
  RIGHT HALF, sub-heading "CATALYST PASTE": draw two wavy teal horizontal lines, each ending in a
  short stub with the amber label "Si-H". Under it, in dark slate: "silicone hydride cross-linker".

BAND 2 — heading "ADDITION". A wide amber arrow pointing downward, with the dark slate label
"platinum catalyst" beside it.

BAND 3 — heading "AFTER SETTING". Draw the chains from the left half and the chains from the right
half now JOINED end to end into one continuous network: where the vinyl group and the Si-H group
met, draw a single straight teal segment with no label, showing that the double bond has become a
single bond and the two chains are now one. The network must span the full width of the band and
look connected.
On the right side of the band, draw a crimson (#BE123C) dashed rectangle containing, in crimson
text, only the words: "NOTHING LEAVES". No molecule, no arrow escaping, no bubble.

At the very bottom, one line of dark slate text:
"The bond is made by adding across a double bond, so there is nothing to break off."

Every chemical label must be exactly one of these strings and nothing else: CH2, Si-H.
Do not draw or write ethanol, EtOH, H2O, alcohol, or any escaping molecule anywhere in the image.
This reaction produces no by-product and the figure must show that absence explicitly.
```

**Conferência antes de aceitar**

- [ ] A dupla ligação da banda 1 são **duas linhas paralelas**. Se vier uma só, o aluno não vê o
      ponto — é ela que desaparece na reação.
- [ ] Na banda 3 a dupla ligação **sumiu**, virou ligação simples. Se as duas linhas continuarem lá,
      a figura está errada.
- [ ] Cadeias da esquerda e da direita estão **unidas** na banda 3, não lado a lado.
- [ ] **Nenhuma molécula escapando.** Igual ao poliéter: mostrar a ausência é o objetivo.
- [ ] Só dois rótulos químicos: `CH2` e `Si-H`.

---

## FIG 08.14 — Os quatro backbones lado a lado

**Slide:** 54 · *The four backbones and what reacts* · substitui ou acompanha a tabela
**Arquivo:** `four-backbones-comparison.png` · **1800 × 1000 px (16:9 aproximado)**
**Fonte:** Van Noort, figuras 2.7.6, 2.7.8, 2.7.10, 2.7.12

```
PROMPT

A clean scientific comparison diagram for a dental materials textbook. White background, flat vector
style, no shading, no 3D, no gradients. Sans-serif labels.

FOUR equal vertical columns, side by side, separated by thin light-grey vertical rules. Each column
has a heading at the top in dark slate (#31465C), one polymer chain drawn in the middle, and one
caption at the bottom.

COLUMN 1 — heading "POLYSULPHIDE". Draw a wavy teal (#0C7489) horizontal line. At each end and at
two points along the middle, attach short stubs ending in the amber (#B45309) label "SH".
Bottom caption in dark slate: "mercaptan groups".

COLUMN 2 — heading "POLYETHER". Draw a wavy teal horizontal line. At each end, attach a short stub
ending in an amber equilateral triangle — a three-membered ring — with its top corner labelled "N".
Bottom caption in dark slate: "aziridine rings".

COLUMN 3 — heading "CONDENSATION SILICONE". Draw a wavy teal horizontal line. At each end, attach a
short stub ending in the amber label "OH". Bottom caption in dark slate: "hydroxyl groups".

COLUMN 4 — heading "ADDITION SILICONE". Draw a wavy teal horizontal line. At each end, attach a
short stub ending in a DOUBLE BOND — two short parallel lines — finishing in the amber label "CH2".
Bottom caption in dark slate: "vinyl groups".

Draw a horizontal grey bracket spanning columns 3 and 4 only, below their captions, with the dark
slate text: "same backbone — polydimethylsiloxane".

All four chains must be drawn identically in shape, thickness and length. The ONLY visible
difference between the columns is the group at the ends of the chain.

Every chemical label must be exactly one of these strings and nothing else: SH, N, OH, CH2.
Do not add any other atoms, letters, numbers or formulas anywhere in the image.
```

**Conferência antes de aceitar**

- [ ] As quatro cadeias têm **exatamente a mesma forma**. Se o modelo desenhar quatro cadeias
      diferentes, a figura perde o argumento — é justamente a igualdade que faz a diferença aparecer.
- [ ] A chave cinza cobre **só** as colunas 3 e 4.
- [ ] O anel da coluna 2 tem três cantos.
- [ ] A dupla ligação da coluna 4 tem duas linhas.
- [ ] Só quatro rótulos químicos no total: `SH`, `N`, `OH`, `CH2`.

---

## FIG 08.15 — A moldeira decide a direção da contração

**Slide:** 77 · *The tray is part of the measuring system* · coluna direita
**Arquivo:** `tray-controls-direction.png` · **1600 × 1200 px (4:3)**
**Fonte:** Van Noort, ch. 2.7 e figura 2.7.1

```
PROMPT

A clean scientific diagram for a dental materials textbook, showing how the impression tray controls
the direction in which an impression material contracts. White background, flat vector style, no
shading, no 3D, no gradients, no photographic realism. Sans-serif labels.

The figure is split into a LEFT half and a RIGHT half by a thin vertical grey rule. Both halves show
the same cross-section, drawn identically, so the only difference the reader sees is the outcome.

EACH HALF shows, from top to bottom, a vertical cross-section through a seated impression:
  - at the top, a thick horizontal bar in dark slate (#31465C) representing the TRAY, labelled "tray"
  - below it, a band of teal (#0C7489) representing the IMPRESSION MATERIAL, of even thickness
  - inside that band, a rectangular NOTCH cut upward from the bottom edge, representing the cavity
    left by a prepared tooth. Outline this notch with a bold amber (#B45309) line and label it
    "cavity left by the tooth".

LEFT HALF, heading "RIGID TRAY — bonded material":
Draw short crimson (#BE123C) arrows inside the teal material, all pointing UPWARD, towards the tray.
Label them in crimson: "the material contracts towards the tray it is glued to". Draw the amber
cavity outline slightly WIDER than a thin grey dashed rectangle placed inside it, and label the
dashed rectangle in grey: "original tooth". Add a dark slate caption under the half:
"The cavity gets wider. The die poured into it comes out slightly LARGER than the tooth — a known
direction."

RIGHT HALF, heading "FLEXIBLE TRAY — same material":
Draw the tray bar visibly BENT, curving upward at both ends. Draw crimson arrows inside the teal
material pointing in SCATTERED, inconsistent directions — some up, some sideways, some diagonal.
Draw the amber cavity outline as a distorted, irregular shape, no longer rectangular, with no
dashed reference rectangle inside it. Add a dark slate caption under the half:
"The tray springs back and the record moves with it. The direction of the error is unknown."

At the very bottom, spanning the full width, one line of dark slate text:
"The tray does not carry the impression. It decides which way the error points."

Do not draw any teeth, gums, faces, or anatomical detail. This is a schematic cross-section, not an
illustration of a mouth. Do not add any chemical formulas or numbers.
```

**Conferência antes de aceitar**

- [ ] Os dois lados são **desenhados igual** — mesma espessura de material, mesma moldeira, mesma
      cavidade. Só o resultado difere. Se o modelo desenhar duas cenas diferentes, o contraste some.
- [ ] No lado esquerdo, **todas** as setas apontam para cima. Uma seta desgarrada destrói o argumento.
- [ ] A cavidade do lado esquerdo é maior que o retângulo tracejado de referência. Esse é o achado:
      o modelo sai maior que o dente.
- [ ] No lado direito não há retângulo de referência — a distorção não tem direção conhecida.
- [ ] Nenhum dente, gengiva ou desenho anatômico. É corte esquemático.

---

## FIG 08.16 — O espaço de decisão, sem a resposta

**Slide:** 79 · *Choosing between the four* · substitui ou acompanha o roadmap
**Arquivo:** `choice-space-no-answer.png` · **1600 × 1000 px**
**Fonte:** conceitual, construída a partir da estrutura da própria aula

O pedido é explícito: **a figura não pode dar a resposta.** Ela mostra as perguntas que decidem, e
deixa o preenchimento para o aluno. Nenhum nome de material aparece.

```
PROMPT

A clean conceptual diagram for a dental materials lecture. White background, flat vector style, no
shading, no 3D, no gradients, no icons, no illustrations. Sans-serif text only.

At the centre of the image, draw a single dark slate (#31465C) rounded rectangle containing, in
dark slate text on two lines:
"THE CASE
IN FRONT OF YOU"

Around that centre, arranged at the four diagonal corners, draw FOUR teal (#0C7489) rounded
rectangles of equal size, each connected to the centre by a thin teal line. Each contains one
question, in teal text:

  TOP LEFT:      "Can the field be kept dry?"
  TOP RIGHT:     "When will the cast be poured?"
  BOTTOM LEFT:   "How thin is the material at the margin?"
  BOTTOM RIGHT:  "How many preparations, and how deep are the undercuts?"

Below each of the four boxes, in smaller grey text, add one line naming the property that question
tests — not the material:

  under TOP LEFT:      "wettability"
  under TOP RIGHT:     "dimensional stability"
  under BOTTOM LEFT:   "tear strength"
  under BOTTOM RIGHT:  "rigidity and elastic recovery"

At the bottom of the image, spanning the full width, draw a single empty amber (#B45309) rounded
rectangle with a dashed outline, tall enough to hold one line of text, containing only the amber
words: "YOUR CHOICE".

Do not name any impression material anywhere in the image. Do not write polysulphide, polyether,
silicone, addition, condensation, alginate, or any product name. Do not draw arrows pointing to an
answer. The four boxes must be identical in size and visual weight, so that none of them looks like
the most important one.
```

**Conferência antes de aceitar**

- [ ] **Nenhum material nomeado.** Se aparecer "addition silicone" em qualquer canto, refaça — é o
      requisito central.
- [ ] As quatro caixas têm o mesmo tamanho e a mesma cor. Se uma estiver destacada, a figura sugere
      uma resposta.
- [ ] Cada caixa tem a propriedade correspondente embaixo, ligando de volta ao vocabulário da Parte 0.
- [ ] A caixa "YOUR CHOICE" está **vazia**.
- [ ] Nenhuma seta apontando de uma pergunta para uma conclusão.

---

## Se o ChatGPT não conseguir

Depois de 4 ou 5 tentativas sem acertar, me mande o que saiu. Eu refaço aquela figura em SVG
programaticamente — cada átomo e ligação por coordenada calculada — e ela entra no deck no mesmo
lugar, com as mesmas cores. Isso já foi feito nesta aula para as figuras de strain e recuperação
elástica.

## Uma nota de fonte

O texto do Van Noort descreve a pasta-base do silicone de adição como contendo "polivinil siloxano,
silanol e uma carga". A menção a **silanol** ali é imprecisa — na hidrossililação o parceiro do
grupo vinil é o **hidreto de silício (Si–H)**, não um silanol, que é o grupo do silicone de
*condensação*. O deck usa Si–H, que é a química correta, e os prompts acima seguem o deck. Registrado
em `notes.md` como Q-08.11.
