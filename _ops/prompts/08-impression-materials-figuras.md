# Aula 08 · Parte 0 (Glossário) — prompts de figura detalhados

**9 figuras pendentes**, uma por slide, para o deck de 44 slides. Todas estáticas, para gerar no ChatGPT.

> **As figuras 08.1 a 08.5 saíram deste arquivo** por decisão de 2026-08-13 (linha do tempo dos quatro
> momentos, quatro consistências, duas consistências numa moldagem, dois relógios, ângulo de contato).
> Os placeholders continuam no deck; se voltarem a ser necessárias, os prompts estão no histórico do git.
>
> **A FIG 08.6 foi completamente refeita.** A versão anterior mostrava o bloco-teste da norma e *como* os
> 20 µm são medidos — o que não ensina nada. A versão nova mostra **por que 20 µm é o número que importa**,
> ancorando-o nos objetos que vivem nessa escala.

## Como usar este arquivo

1. Cole **primeiro** o BLOCO DE ESTILO (seção A) — idêntico para todas as figuras.
2. Cole **em seguida** o prompt da figura desejada (seção B), inteiro, incluindo a lista de rótulos.
3. Confira a figura gerada contra o **checklist** que acompanha cada prompt.
4. Salve o PNG em `1. Source\08. Impression materials\Assets\` com o nome que o ChatGPT der.
   **Eu renomeio** para o nome de arquivo indicado, nos dois lugares [D-19]. Não precisa renomear nada.

**Se a figura sair errada:** o erro mais comum é o modelo inventar números ou trocar unidades.
Não aceite. Regere dizendo qual valor saiu errado e qual é o correto.

---

# A. BLOCO DE ESTILO — cole no início de TODOS os prompts

```
Crie uma ilustração científica vetorial plana para uma aula universitária de materiais dentários,
projetada num telão de sala de aula.

ESTILO OBRIGATÓRIO
- Ilustração vetorial plana (flat vector), estilo diagrama técnico de livro-texto científico moderno.
- Fundo BRANCO PURO (#FFFFFF). Sem fundo colorido, sem gradiente de fundo, sem vinheta.
- SEM sombras, SEM gradientes, SEM brilho, SEM reflexo, SEM efeito 3D, SEM textura, SEM perspectiva
  realista, SEM aparência fotográfica, SEM renderização volumétrica.
- Traço uniforme e limpo, espessura consistente. Cantos levemente arredondados nas caixas.
- Composição arejada: margens generosas, elementos bem separados, nada encostando na borda.

PALETA — usar APENAS estas cores, com estes significados
  #0C7489  teal      → o material de moldagem, ciência, mecanismo, o "certo"
  #B45309  âmbar     → o dente, o tecido, o contexto clínico
  #BE123C  carmim    → falha, erro, o que dá errado, o resíduo indesejado
  #31465C  ardósia   → estruturas neutras, contornos, texto, instrumentos, metal
  #E3E9EF  cinza     → preenchimentos de apoio, linhas auxiliares, grades
  #FFFFFF  branco    → fundo

TIPOGRAFIA
- Fonte sans-serif geométrica limpa (tipo Inter, Helvetica, Space Grotesk).
- TODOS os rótulos em INGLÊS, exatamente como escritos no prompt, sem traduzir e sem reformular.
- Tamanho de texto grande o bastante para ser lido a 4 metros de distância num telão.
- Rótulos de seção em CAIXA ALTA; textos explicativos em sentence case.

PROIBIDO
- Nenhum logotipo, marca d'água, assinatura, nome de fabricante ou marca comercial.
- Nenhuma legenda de figura embaixo da imagem (a legenda está no slide).
- Nenhum texto decorativo, nenhuma frase de efeito, nenhum emoji, nenhum ícone genérico de banco.
- Nenhum número, unidade ou símbolo além dos que este prompt pedir explicitamente.

NÚMEROS
- Reproduza todos os números e unidades EXATAMENTE como escritos, dígito por dígito.
- Use "µm" (micrômetro) com o caractere µ correto. Use vírgula decimal APENAS se o prompt usar.
```

---

# B. OS NOVE PROMPTS

---

## FIG 08.6 · What lives at 20 micrometres
**Arquivo:** `why-twenty-micrometres-matters.png` · **Slide 19** · **16:9 · 1920 × 1080 px**

**O que o aluno deve concluir:** 20 µm não é um número escolhido por um comitê. É a escala em que a
margem existe de verdade — a mesma escala do cimento que deveria selá-la e das bactérias que a colonizam.
Um detalhe de 20 µm não registrado é um espaço real, ocupado por coisas reais.

**Fontes dos números** (para conferência, não para a figura): ISO 4823 Tabela 1 (20 µm) · ISO 9917-1
(película de cimento ≤ 25 µm) · Garberoglio & Brännström, *Arch Oral Biol* 1976 (túbulo dentinário
2,5 µm perto da polpa) · McLean & von Fraunhofer 1971 (120 µm, historicamente adotado, sem consenso).

```
COMPOSIÇÃO GERAL
Uma régua de escala horizontal LINEAR ocupando os dois terços superiores da imagem, e um painel de
ampliação no terço inferior esquerdo, mais uma faixa de conclusão no rodapé.

A RÉGUA — parte superior
Um eixo horizontal reto em ardósia (#31465C), atravessando toda a largura útil, começando em 0 à
esquerda e terminando em 130 à direita. Marcas de escala menores a cada 10 unidades e marcas maiores
com número a cada 20 unidades: 0, 20, 40, 60, 80, 100, 120.
Rótulo do eixo, centralizado abaixo dele, em caixa alta pequena:
  MICROMETRES (µm)  —  LINEAR SCALE, NOT EXAGGERATED

SEIS MARCADORES sobre a régua. Cada marcador é uma linha vertical partindo do eixo para cima,
terminando numa pequena etiqueta com o valor e uma descrição. Posicione cada um EXATAMENTE no seu valor
na escala linear. Alterne a altura das etiquetas (alta, baixa, alta…) para que não se sobreponham.

  Marcador em 1 µm    — cor teal (#0C7489), linha curta
      valor:      "1 µm"
      descrição:  "an oral bacterium"
      (desenhe ao lado da etiqueta um pequeno círculo cheio teal, minúsculo, como ícone)

  Marcador em 2.5 µm  — cor teal (#0C7489)
      valor:      "2.5 µm"
      descrição:  "a dentinal tubule, near the pulp"

  Marcador em 20 µm   — cor CARMIM (#BE123C), linha MAIS GROSSA e mais alta que todas as outras,
      etiqueta com fundo carmim claro e contorno carmim, em destaque evidente
      valor:      "20 µm"
      descrição:  "the finest line the impression must record"

  Marcador em 25 µm   — cor âmbar (#B45309)
      valor:      "25 µm"
      descrição:  "the thickest film a luting cement may form"

  Marcador em 70 µm   — cor ardósia (#31465C)
      valor:      "70 µm"
      descrição:  "a human hair"

  Marcador em 120 µm  — cor âmbar (#B45309), com a etiqueta em estilo TRACEJADO
      valor:      "120 µm"
      descrição:  "the marginal gap conventionally called acceptable"
      segunda linha da descrição, em texto menor e itálico:  "no consensus — 50 to 200 µm proposed"

DESTAQUE DA VIZINHANÇA CRÍTICA
Sombreie levemente, em carmim muito claro, a faixa da régua entre 20 e 25 µm, e escreva acima dela, em
texto pequeno carmim, com uma chave ou colchete ligando os dois marcadores:
  "what the impression must record, and what the cement can fill, are the same size"

PAINEL DE AMPLIAÇÃO — terço inferior esquerdo
Uma caixa retangular de contorno ardósia, ligada por duas linhas finas divergentes ao trecho de 0 a
5 µm da régua (indicando que é uma ampliação daquela região).
Rótulo no topo da caixa, caixa alta pequena, ardósia:  MAGNIFIED  ×10
Dentro da caixa, uma faixa horizontal representando uma fenda de 20 µm de largura, desenhada entre
duas superfícies: em cima o esmalte/dente em âmbar, embaixo a restauração em ardósia. Dentro da fenda,
DESENHE VINTE pequenos círculos teal idênticos, lado a lado, preenchendo exatamente a largura da fenda,
tocando-se uns nos outros.
Rótulo à direita da fenda, com seta de chamada, em teal:
  "twenty bacteria fit side by side"
Cote a largura da fenda com uma linha de cota, rotulada: "20 µm"

FAIXA DE CONCLUSÃO — rodapé
Uma faixa horizontal de fundo cinza muito claro atravessando toda a largura, com o texto centralizado
em ardósia, peso semibold:
  "detail that is not recorded here cannot be recovered by any later step"

NÃO INCLUIR: bloco-teste da norma, microscópio, régua com escala logarítmica, dente inteiro,
arcada, seringa, moldeira, valores diferentes dos seis listados acima.
```

**Checklist:**
▢ a escala é **linear** e os marcadores estão nas posições corretas — confira visualmente que a distância
de 0 a 20 é um sexto da distância de 0 a 120
▢ o marcador de 20 µm é claramente o mais destacado de todos
▢ 20 e 25 µm estão praticamente colados na régua (essa proximidade **é** o argumento)
▢ o painel ampliado tem exatamente **vinte** círculos, não "vários"
▢ a nota de não-consenso acompanha os 120 µm
▢ os seis valores são exatamente 1 · 2.5 · 20 · 25 · 70 · 120 µm, sem nenhum outro número na figura

---

## FIG 08.7 · Sharp but displaced
**Arquivo:** `detail-vs-accuracy-sharp-but-shifted.png` · **Slide 20** · **16:9 · 1920 × 1080 px**

**O que o aluno deve concluir:** nitidez e acurácia são independentes — a moldagem pode registrar cada
detalhe perfeitamente e mesmo assim estar toda no lugar errado.

```
COMPOSIÇÃO EM DOIS PAINÉIS lado a lado, separados por uma linha vertical fina cinza.

PAINEL ESQUERDO
Título no topo, caixa alta teal (#0C7489):  DETAIL REPRODUCTION
Conteúdo: um corte transversal AMPLIADO da região cervical de um dente preparado, com o dente em âmbar
(#B45309) e o material de moldagem em teal (#0C7489) acompanhando o contorno em contato contínuo.
A linha de término é nítida e angulosa. Uma lupa circular sobrepõe essa região, ampliando-a mais ainda
e mostrando o traço perfeitamente definido, sem interrupções nem arredondamentos.
Texto abaixo do painel, sentence case, ardósia:
  "every feature is sharp"

PAINEL DIREITO
Título no topo, caixa alta carmim (#BE123C):  ACCURACY
Conteúdo: uma arcada dentária vista DE CIMA (vista oclusal), desenhada em forma de U, DUAS VEZES
sobrepostas e concêntricas:
  - o contorno externo, TRACEJADO, em ardósia, rotulado: "the original arch"
  - dentro dele, o mesmo contorno em linha CHEIA carmim, uniformemente menor em toda a extensão,
    rotulado: "the impression, uniformly contracted"
Ao redor de todo o perímetro, seis a oito setas curtas radiais apontando PARA DENTRO, em carmim,
indicando contração uniforme.
Na região dos molares de um dos lados, uma linha de cota entre os dois contornos, com setas nas pontas,
rotulada: "dimensional discrepancy"
IMPORTANTE: os detalhes de cada dente (cúspides, sulcos) devem estar desenhados com a MESMA nitidez nos
dois contornos — a diferença é só de tamanho e posição, nunca de definição.
Texto abaixo do painel, sentence case, ardósia:
  "every feature is sharp — and all of them have moved together"

NÃO INCLUIR: percentuais, valores em micrômetros, gengiva, língua, palato.
```

**Checklist:** ▢ no painel direito, os dois contornos têm o mesmo nível de detalhe ▢ a contração é
uniforme em todo o perímetro, não localizada ▢ as setas radiais apontam para dentro ▢ o painel
esquerdo tem lupa e o direito não.

---

## FIG 08.8 · Why an impression must deform to come out
**Arquivo:** `undercut-deformation-on-removal.png` · **Slide 25** · **16:9 · 1920 × 1080 px**

**Esta é a figura mais importante do deck.** A revisão do aluno mostrou que o conceito de undercut é o que
mais trava a compreensão de quatro propriedades.

**O que o aluno deve concluir:** a deformação na remoção não é erro do operador — é consequência
geométrica da forma do dente, e é obrigatória.

```
COMPOSIÇÃO EM TRÊS PAINÉIS horizontais, em sequência, separados por setas finas ardósia apontando para
a direita.

GEOMETRIA COMUM AOS TRÊS PAINÉIS
Um corte transversal vertical de um dente, em âmbar (#B45309) com preenchimento âmbar claro. O contorno
do dente NÃO é um cone: sobe estreito a partir do colo, alarga-se até um ponto de máxima largura, e
volta a estreitar em direção ao topo. Esse formato deve ser evidente e um pouco exagerado.
No PRIMEIRO painel apenas, anote a geometria:
  - uma linha horizontal TRACEJADA ardósia na altura da máxima largura, rotulada à direita:
    "widest contour"
  - a região ABAIXO dessa linha, entre o contorno do dente e uma vertical imaginária que desce do ponto
    mais largo, preenchida com hachura diagonal fina, rotulada com seta de chamada:
    "UNDERCUT"

PAINEL 1 — rótulo no topo, caixa alta ardósia:  SEATED
Material de moldagem em teal (#0C7489) envolvendo o dente completamente, preenchendo o undercut,
em contato total com toda a superfície.

PAINEL 2 — rótulo no topo, caixa alta ardósia:  DURING WITHDRAWAL
O mesmo material, deslocado alguns milímetros para cima, ainda envolvendo o dente. Na altura em que o
material passa pelo contorno máximo, ele está visivelmente DISTENDIDO e AFINADO. Duas setas curtas
apontando para FORA, em carmim (#BE123C), nesse ponto de máxima distensão, com o rótulo:
  "the material must stretch over the bulge"

PAINEL 3 — rótulo no topo, caixa alta ardósia:  AFTER RECOVERY
O material sozinho, fora do dente, mostrando a cavidade negativa que ele carrega. Por dentro da
cavidade, desenhe TRACEJADO em ardósia o contorno original do dente. A pequena diferença entre o
contorno recuperado do material e o contorno tracejado original é preenchida em carmim sólido, com
seta de chamada e o rótulo:
  "residual mismatch — this becomes the error in the die"
Imediatamente abaixo desse rótulo, em texto pequeno itálico ardósia:
  "exaggerated here for visibility"

NÃO INCLUIR: gengiva, dentes vizinhos, moldeira, percentuais, valores em micrômetros.
```

**Checklist:** ▢ o dente NÃO é cônico — a barriga e o estreitamento abaixo dela são evidentes
▢ a hachura do UNDERCUT está ABAIXO da linha de máxima largura, não acima ▢ no painel 2 o afinamento
está no ponto de passagem pela barriga ▢ no painel 3 existe a nota "exaggerated here for visibility"
▢ os três rótulos de painel estão presentes.

---

## FIG 08.9 · Too flexible
**Arquivo:** `strain-too-flexible-gypsum.png` · **Slide 29** · **4:3 · 1600 × 1200 px**

> ⚠️ **Esta figura foi refeita em 2026-08-13.** A versão anterior mostrava as paredes da moldagem
> abauladas **sob o peso do gesso**. Isso é fisicamente insustentável: uma coluna de 30 mm de gesso
> exerce ~0,6 kPa, contra os ~0,1 MPa que o próprio ensaio da norma aplica — 160 vezes mais. E o material
> confinado entre a cavidade e uma moldeira rígida praticamente não tem para onde ir.
> **O agente da deformação é o gesso que CRESCE, não o gesso que PESA.**

**O que o aluno deve concluir:** o gesso expande ao presar; a moldagem e a moldeira são a cinta que
restringe essa expansão; um material flexível não restringe, e o modelo sai maior. A moldagem em si
continua correta — o erro nasce dentro do gesso.

**Gere esta figura e a FIG 08.10 na MESMA sessão**, para que saiam com o mesmo enquadramento e peso
visual. Elas são um par e aparecem em slides consecutivos.

```
COMPOSIÇÃO — DOIS PAINÉIS lado a lado, separados por uma linha vertical fina cinza. Os dois painéis
mostram exatamente a mesma cena, mudando apenas a rigidez do material.

CENA COMUM AOS DOIS PAINÉIS
Um corte transversal vertical: uma moldeira em U em ardósia (#31465C) sólido; dentro dela, a moldagem
já presa em teal (#0C7489), com a cavidade negativa de dois dentes voltada para cima; e a cavidade
completamente preenchida por gesso já vazado, em cinza claro (#E3E9EF) com contorno ardósia.
Rotule o gesso UMA VEZ, no painel esquerdo: "gypsum, setting"
IMPORTANTE: o gesso está PARADO e já preenchido, não sendo despejado. Não desenhe jarro, corrente de
material caindo, nem qualquer indicação de vazamento em andamento.

SETAS DE EXPANSÃO — o elemento central da figura
Em ambos os painéis, desenhe seis a oito setas curtas partindo de DENTRO do gesso e apontando para
FORA, em todas as direções (para os lados, para cima e para baixo), representando a expansão de presa.
As setas nascem no interior do gesso, não na superfície.
Rotule o conjunto UMA VEZ, no painel esquerdo, com um texto acima:
  "gypsum expands as it sets — in every direction"

PAINEL ESQUERDO — rótulo no topo, caixa alta teal:  STIFF MATERIAL
As paredes de teal permanecem RETAS e imóveis. Onde as setas de expansão atingem a parede, desenhe um
pequeno símbolo de bloqueio (uma barra curta perpendicular à seta, em teal escuro), indicando que a
expansão é contida. A moldeira ardósia atrás está intacta e reta.
Rótulo abaixo do painel, sentence case: "the expansion is restrained — the cast matches the mouth"

PAINEL DIREITO — rótulo no topo, caixa alta carmim:  FLEXIBLE MATERIAL
As mesmas setas de expansão, agora ATRAVESSANDO a parede: as paredes de teal estão visivelmente
deslocadas para fora, curvadas, e o gesso ocupa um volume maior. As setas que tocam as paredes são
desenhadas em carmim (#BE123C) e continuam além da posição original da parede, que fica marcada por
uma linha TRACEJADA ardósia no lugar onde a parede estaria no painel esquerdo.
Rótulo abaixo do painel, sentence case: "the expansion is not restrained — the cast comes out larger"

COMPARAÇÃO DIMENSIONAL — faixa entre os painéis e o rodapé
Dois contornos sobrepostos de um único DENTE do modelo (não da moldagem inteira), lado a lado:
  - o dente como ele é na boca, TRACEJADO ardósia, rotulado: "the tooth"
  - o dente no modelo obtido do material flexível, linha cheia carmim, uniformemente maior, rotulado:
    "the die from the flexible impression"
Uma linha de cota entre os dois contornos, rotulada: "larger"

FAIXA DE CONCLUSÃO
No rodapé, uma faixa horizontal de fundo carmim muito claro com o texto centralizado em carmim:
  "the impression is still correct — the error was born inside the gypsum"

NÃO INCLUIR: jarro ou corrente de gesso sendo despejado, setas apontando para baixo representando
peso, a palavra "weight" em qualquer lugar, paciente, mão, valores numéricos.
```

**Checklist:** ▢ as setas de expansão nascem DENTRO do gesso e apontam em **todas** as direções, não só
para os lados ▢ não há nenhuma indicação de gesso sendo despejado nem de peso ▢ a palavra "weight" não
aparece ▢ a comparação dimensional é de **um dente**, não do contorno externo da moldagem ▢ o painel
esquerdo tem os símbolos de bloqueio.

---

## FIG 08.10 · Too stiff
**Arquivo:** `strain-too-stiff-separation.png` · **Slide 30** · **4:3 · 1600 × 1200 px**

> ⚠️ **Esta figura também foi refeita em 2026-08-13.** A versão anterior mostrava a moldagem rígida
> difícil de arrancar da boca, com a gengiva tracionada, e uma barra dizendo que material rígido exige
> mais força de remoção. **Essa relação foi medida e refutada:** Walker et al. (2013) encontraram
> *nenhuma* correlação entre rigidez/dureza e força de remoção — o silicone de adição era o mais rígido
> e mais duro, e foi o **poliéter** que exigiu mais força.
> O que a rigidez excessiva realmente causa é **fratura do modelo na separação**; e o limite mínimo da
> norma existe para que o material saia da boca **sem lesar os tecidos**.

**O que o aluno deve concluir:** rigidez demais quebra o gesso na separação, e o piso da norma protege
o tecido do paciente — mas rigidez não é o que torna a moldagem difícil de tirar da boca.

```
COMPOSIÇÃO — DOIS PAINÉIS lado a lado, separados por uma linha vertical fina cinza, no mesmo
enquadramento e com o mesmo peso visual da FIG 08.9.

PAINEL ESQUERDO — rótulo no topo, caixa alta carmim:  SEPARATION FROM THE CAST
Um corte transversal: o modelo de gesso já presa, em cinza claro (#E3E9EF) com contorno ardósia,
mostrando dois dentes, um deles ALTO E DELGADO (um troquel). A moldagem rígida em teal (#0C7489) sendo
levantada, ainda agarrada ao troquel delgado, com uma seta grossa vertical ardósia rotulada:
  "separation"
No troquel delgado, desenhe uma FRATURA — uma linha irregular em carmim (#BE123C) atravessando a base
dele, com um pequeno fragmento se separando. Rotule com seta de chamada:
  "the slender die fractures — and this is the model the crown will be built on"
Onde a moldagem agarra o gesso, marque a região de retenção com hachura carmim e rotule:
  "the stiff material grips the undercut in the gypsum"

PAINEL DIREITO — rótulo no topo, caixa alta âmbar:  REMOVAL FROM THE MOUTH
Um corte transversal de um dente em âmbar (#B45309) com a gengiva ao redor em âmbar mais claro, e a
moldagem em teal saindo. O tecido gengival está sendo comprimido e distendido pelo material rígido ao
passar, com duas setas curtas âmbar indicando a deformação do tecido.
Rotule com seta de chamada: "the tissue is pressed as the material passes"
Abaixo do painel, uma faixa de fundo teal claro com o texto em teal:
  "this is what the standard's LOWER limit protects: 0.8% for putty and heavy, 2.0% for medium and light"

FAIXA DE CORREÇÃO DE MITO — rodapé, atravessando os dois painéis
Uma faixa horizontal de fundo cinza claro (#E3E9EF) com contorno ardósia, contendo, centralizado:
  linha 1, em ardósia caixa alta pequena:  A MEASURED CLAIM THAT DID NOT SURVIVE
  linha 2, em ardósia:
    "stiffness and hardness do not predict how hard an impression is to remove from the mouth —
     when measured together, the stiffest material was not the hardest to remove"

NÃO INCLUIR: barra comparando força de remoção entre material flexível e rígido, sangue, expressão de
dor, valores numéricos de força, gesso sendo vazado.
```

**Checklist:** ▢ o painel esquerdo é sobre **separação do modelo**, não sobre remoção da boca ▢ a
fratura está no troquel delgado, no gesso, não no material de moldagem ▢ não existe nenhuma barra
comparando força de remoção ▢ a faixa de correção de mito está presente e legível ▢ os limites 0.8% e
2.0% estão escritos corretamente.

---

## FIG 08.11 · The trouser-leg test
**Arquivo:** `tear-strength-trouser-test.png` · **Slide 31** · **16:9 · 1920 × 1080 px**

**O que o aluno deve concluir:** a resistência ao rasgamento é medida sobre uma linha, não sobre uma
área — é por isso que a unidade é N/mm e não MPa.

```
COMPOSIÇÃO EM DUAS METADES verticais.

METADE ESQUERDA — o corpo de prova.
Uma tira retangular horizontal em teal (#0C7489) com contorno mais escuro, vista de frente. A partir da
extremidade esquerda, um corte longitudinal ao meio divide a tira em duas "pernas" iguais, que estão
afastadas uma da outra formando um Y deitado.
Duas setas grossas em ardósia (#31465C), uma partindo da perna superior para cima e outra da perna
inferior para baixo, ambas rotuladas com a letra: "F"
Na ponta interna do corte (onde as duas pernas se juntam), desenhe um pequeno símbolo de concentração —
três linhas curtas divergentes em carmim (#BE123C) — e rotule com seta de chamada:
  "the tear propagates along this line"
Na extremidade direita da tira, uma linha de cota vertical medindo a ESPESSURA da tira, rotulada: "t"
Rotule a tira, abaixo dela: "trouser-leg specimen"

METADE DIREITA — a conta e a distinção.
No alto, uma caixa retangular de contorno teal com a fórmula centralizada em fonte mono, grande:
  tear strength = F / t
Abaixo da caixa, a unidade em destaque, mono, teal:
  N/mm
Sob isso, dois pequenos diagramas comparativos lado a lado, cada um com um rótulo:
  Diagrama A: um retângulo com hachura preenchendo TODA a face, uma seta perpendicular à face,
    rotulado abaixo: "stress = force ÷ AREA  (N/mm², MPa)"
  Diagrama B: o mesmo retângulo, mas com a hachura reduzida a uma ÚNICA LINHA na borda, uma seta ao
    longo dessa linha, rotulado abaixo: "tear strength = force ÷ THICKNESS  (N/mm)"
Sob os dois diagramas, uma linha de texto em carmim, centralizada:
  "this is not a stress — it cannot be compared with the strengths in Lecture 02"

NÃO INCLUIR: máquina de ensaio desenhada, dente, boca, valores numéricos de força.
```

**Checklist:** ▢ a fórmula está escrita exatamente "tear strength = F / t" ▢ a unidade N/mm aparece
separada e em destaque ▢ os diagramas A e B mostram claramente área × linha ▢ a espessura t está cotada
na tira ▢ a frase final em carmim está presente.

---

## FIG 08.12 · The two thin regions
**Arquivo:** `tear-strength-thin-regions.png` · **Slide 33** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** a moldagem não rasga em lugar aleatório — rasga exatamente nos dois
pontos onde ela é mais fina, que são os dois pontos onde a margem está.

```
COMPOSIÇÃO
Um corte transversal vertical único através de DOIS dentes vizinhos, ocupando a maior parte da figura,
com um detalhe ampliado.

CENA PRINCIPAL
Dois dentes em corte, lado a lado, em âmbar (#B45309), com um espaço estreito entre eles (o espaço
interproximal). Ao redor do colo de cada um, gengiva em âmbar mais claro, formando um sulco estreito e
profundo em cada lado.
Material de moldagem em teal (#0C7489) envolvendo os dois dentes por cima e descendo:
  - para dentro de cada sulco gengival, formando um COLAR fino e alongado;
  - para dentro do espaço interproximal, formando uma MEMBRANA estreita.

DESTAQUE DAS DUAS REGIÕES CRÍTICAS
Contorne cada uma dessas duas regiões com uma linha carmim (#BE123C) e rotule com seta de chamada:
  região no sulco:          "sulcular collar — the thinnest material in the impression"
  região interproximal:     "interproximal web"
Em cada uma, desenhe uma linha de cota medindo a espessura, com o rótulo: "< 0.5 mm"

DETALHE AMPLIADO
No canto inferior direito, uma lupa circular ampliando o colar sulcular, mostrando duas situações
sobrepostas em meia-lua:
  - metade esquerda: o colar íntegro, em teal, rotulado "intact"
  - metade direita: o colar rompido, com o fragmento separado permanecendo dentro do sulco, desenhado
    em carmim, rotulado "torn — the fragment stays in the sulcus"

FAIXA DE CONCLUSÃO
No rodapé, faixa horizontal de fundo carmim muito claro, texto centralizado em carmim:
  "the impression looks smooth and is missing its margin"

NÃO INCLUIR: arcada completa, raízes longas, osso, valores numéricos além de "< 0.5 mm".
```

**Checklist:** ▢ os dois colares sulculares e a membrana interproximal são visivelmente mais finos que
o resto do material ▢ ambos estão cotados com "< 0.5 mm" ▢ a lupa mostra as duas situações (íntegro e
rompido) ▢ o fragmento rompido está DENTRO do sulco, não fora.

---

## FIG 08.13 · Three reasons a set material changes size
**Arquivo:** `dimensional-change-three-mechanisms.png` · **Slide 38** · **16:9 · 1920 × 1080 px**

**O que o aluno deve concluir:** a mudança dimensional tem três causas moleculares distintas, e uma delas
(a saída do subproduto) é exatamente a reação de condensação já vista na Aula 03.

```
COMPOSIÇÃO
Título comum no alto, centralizado, em ardósia caixa alta:  THE SET MATERIAL IS NOT INERT
Abaixo, TRÊS painéis quadrados de tamanho igual, lado a lado, separados por linhas verticais finas.

ELEMENTO COMUM AOS TRÊS: em cada painel, um contorno retangular TRACEJADO em ardósia representando o
volume ORIGINAL do material, e dentro ou ao redor dele o volume ATUAL em linha cheia.

PAINEL 1
Rótulo no topo, caixa alta teal:  CROSS-LINKING CONTINUES
Conteúdo: cadeias poliméricas desenhadas como linhas onduladas longas em teal (#0C7489), dispostas
paralelamente. Entre cadeias vizinhas, pequenos círculos cheios em teal escuro marcando as ligações
cruzadas, com quatro ou cinco setas curtas apontando das cadeias umas para as outras.
O contorno em linha cheia é MENOR que o tracejado.
Rótulo abaixo, sentence case: "chains are pulled closer together → shrinkage"

PAINEL 2
Rótulo no topo, caixa alta teal:  A BY-PRODUCT LEAVES
Conteúdo: as mesmas cadeias onduladas em teal, e cinco ou seis pequenas moléculas circulares em carmim
(#BE123C) escapando através das bordas do bloco, com setas indicando a saída; duas delas já fora do
contorno. Rotule o grupo de moléculas com seta de chamada: "ethanol or water"
O contorno em linha cheia é MENOR que o tracejado.
Rótulo abaixo, sentence case: "the material loses the volume of what escaped → shrinkage"
Rótulo adicional em texto pequeno itálico, ardósia: "this is the condensation reaction from Lecture 03"

PAINEL 3
Rótulo no topo, caixa alta teal:  WATER MOVES IN OR OUT
Conteúdo: uma rede de gel desenhada como uma malha regular em teal, com pequenas moléculas de água em
teal claro distribuídas nos espaços. No centro, uma seta VERTICAL DUPLA, com:
  - a metade superior apontando para fora do bloco, rotulada em carmim: "syneresis → shrinkage"
  - a metade inferior apontando para dentro do bloco, rotulada em teal: "imbibition → expansion"
Desenhe DOIS contornos em linha cheia: um menor e um maior que o tracejado, para mostrar as duas
direções possíveis.
Rótulo abaixo, sentence case: "water is exchanged with the surroundings"

NÃO INCLUIR: fórmulas químicas estruturais, nomes de polímeros específicos, percentuais, dente, boca.
```

**Checklist:** ▢ os três painéis têm o contorno tracejado de referência ▢ no painel 2 as moléculas que
escapam estão em carmim e algumas já estão fora ▢ o painel 3 tem DOIS contornos cheios (contração e
expansão) ▢ a nota sobre a Aula 03 está presente ▢ syneresis está associada a shrinkage e imbibition a
expansion, não o contrário.

---

## FIG 08.14 · Where the group sits, how tight the group is
**Arquivo:** `trueness-precision-four-targets.png` · **Slide 42** · **1:1 · 1400 × 1400 px**

**O que o aluno deve concluir:** trueness e precision são duas dimensões independentes, e a combinação
"preciso mas não verdadeiro" é qualitativamente diferente das outras.

```
COMPOSIÇÃO
Quatro alvos circulares dispostos numa grade 2 × 2, com espaçamento generoso entre eles.

CADA ALVO
Quatro anéis concêntricos de contorno cinza (#E3E9EF) e, no centro, um círculo pequeno preenchido em
teal (#0C7489) representando o valor verdadeiro.
Dez marcas de tiro por alvo, desenhadas como pontos cheios teal com contorno escuro, tamanho uniforme.
Uma CRUZ em âmbar (#B45309), traço grosso, marcando a média dos dez pontos daquele alvo — posicione-a
corretamente no centro geométrico da nuvem de pontos de cada caso.

DISTRIBUIÇÕES — siga exatamente
  Superior esquerdo:  os dez pontos agrupados num aglomerado pequeno, centrado no círculo central.
                      A cruz cai sobre o centro.
                      Rótulo abaixo, caixa alta teal:  TRUE AND PRECISE
  Superior direito:   os dez pontos agrupados num aglomerado igualmente pequeno, mas todo ele
                      deslocado para o quadrante superior direito, longe do centro.
                      A cruz cai no meio desse aglomerado deslocado.
                      Rótulo abaixo, caixa alta carmim:  PRECISE, NOT TRUE
  Inferior esquerdo:  os dez pontos muito espalhados por todo o alvo, distribuídos em todas as
                      direções, mas equilibrados de modo que a cruz da média caia sobre o centro.
                      Rótulo abaixo, caixa alta carmim:  TRUE, NOT PRECISE
  Inferior direito:   os dez pontos espalhados E deslocados para o mesmo lado.
                      A cruz cai deslocada do centro.
                      Rótulo abaixo, caixa alta carmim:  NEITHER

EIXOS ANOTADOS
Uma seta horizontal longa abaixo de toda a grade, apontando para a esquerda, rotulada centralizada:
  "PRECISION — how tight the group is"
Uma seta vertical longa à esquerda de toda a grade, apontando para cima, rotulada na vertical:
  "TRUENESS — where the group sits"
(As setas devem indicar que a qualidade aumenta em direção ao alvo superior esquerdo.)

LEGENDA
No rodapé, à esquerda, dois itens de legenda em linha:
  ● (ponto teal)   "one impression"
  ✚ (cruz âmbar)   "mean of the ten"

NOTA
Sob o alvo superior direito, em texto pequeno carmim:
  "a systematic error — the only kind that could be compensated for"

NÃO INCLUIR: números, escalas, percentuais, dardos, arco e flecha, mira, alvo estilizado de tiro
esportivo com cores de competição.
```

**Checklist:** ▢ exatamente dez pontos em cada alvo ▢ a cruz da média está no lugar certo em cada caso
(no centro nos dois alvos "TRUE", deslocada nos outros dois) ▢ os dois alvos de cima têm dispersão
IGUAL entre si; os dois de baixo têm dispersão igual entre si ▢ os eixos estão rotulados ▢ a nota sobre
erro sistemático está sob o alvo superior direito.

---

# C. Ordem sugerida de geração

| Lote | Figuras | Por quê |
|---|---|---|
| **1 — as que destravam a compreensão** | 08.8 (undercut) · 08.12 (onde rasga) · 08.6 (o que vive em 20 µm) | A revisão de aluno apontou estas como decisivas: sem elas, quatro propriedades ficam abstratas. |
| **2 — o par de contraste** | 08.9 (too flexible) + 08.10 (too stiff) | **Gere as duas na mesma sessão** para saírem com o mesmo peso visual. |
| **3 — as de medida** | 08.11 (trouser-leg) · 08.7 (sharp but displaced) | Ancoram a unidade e a distinção detalhe × acurácia. |
| **4 — as conceituais** | 08.13 (três mecanismos) · 08.14 (quatro alvos) | Esquemáticas puras; toleram estar por último. |

# D. Conferência final, depois de gerar tudo

- ▢ **Numerais:** cada figura com número foi conferida contra o valor esperado. Os que mais falham:
  os seis valores da 08.6 (1 · 2.5 · 20 · 25 · 70 · 120 µm) e o "< 0.5 mm" da 08.12.
- ▢ **Escala honesta:** a régua da 08.6 é linear e os marcadores estão nas posições proporcionais certas.
- ▢ **Consistência de cor:** o material de moldagem é teal em TODAS as figuras; o dente é âmbar em
  todas; o que dá errado é carmim em todas. Uma figura que inverta isso confunde o deck inteiro.
- ▢ **Consistência de geometria:** o dente da 08.8 e o da 08.10 têm a mesma forma (barriga + undercut).
- ▢ **Sem texto em português** em nenhuma figura.
- ▢ **Sem marca comercial** visível.
