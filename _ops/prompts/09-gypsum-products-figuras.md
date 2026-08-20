# Aula 09 · Gypsum products — prompts de figura

**6 figuras pendentes**, uma por slide, para o deck de 25 slides. Todas estáticas, para gerar no ChatGPT.

## Como usar este arquivo

1. Cole **primeiro** o BLOCO DE ESTILO (seção A) — idêntico para todas as figuras.
2. Cole **em seguida** o prompt da figura desejada (seção B), inteiro, incluindo a lista de rótulos.
3. Confira a figura gerada contra o **checklist** que acompanha cada prompt.
4. Salve o PNG em `1. Source\09. Gypsum products\Assets\` com o nome que o ChatGPT der.
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
  #0C7489  teal      → o mecanismo, a fase alfa/stone, o "certo"
  #B45309  âmbar     → o contexto clínico, a fase beta/plaster
  #BE123C  carmim    → falha, erro, expansão fora do intervalo, o que dá errado
  #31465C  ardósia   → estruturas neutras, contornos, texto, instrumentos
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
- Use "µm", "°C" e os símbolos químicos (CaSO₄, H₂O) exatamente como escritos.
```

---

# B. OS SEIS PROMPTS

---

## FIG 09.1 · Two hemihydrates from one manufacturing choice
**Arquivo:** `manufacture-beta-alpha-hemihydrate.png` · **Slide 7** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** β- e α-hemidrato partem do mesmo diidrato e têm a mesma fórmula
química; a única diferença é COMO a água é removida — e essa escolha de processo é o que decide a
forma da partícula, e por consequência tudo que vem depois na aula (razão água/pó, resistência).

```
COMPOSIÇÃO GERAL
Um diagrama de processo em Y: uma caixa de partida no topo-centro, dois braços descendo para a
esquerda e para a direita, cada um terminando numa caixa de partícula ampliada.

CAIXA DE PARTIDA (topo-centro)
Um retângulo ardósia (#31465C) com o texto "GYPSUM" e a fórmula "CaSO₄ · 2H₂O" abaixo, em branco.

BRAÇO ESQUERDO (âmbar #B45309) — leva a β-hemihydrate
Uma seta descendo e à esquerda, rotulada "OPEN VESSEL, ATMOSPHERIC PRESSURE". No meio do braço, um
ícone simples de um recipiente aberto sobre uma chama, sem detalhe realista, apenas forma geométrica.
A seta termina numa caixa âmbar rotulada "β-HEMIHYDRATE (PLASTER)" com a fórmula "CaSO₄ · ½H₂O"
abaixo. Ao lado dessa caixa, um círculo de ampliação (zoom) mostrando 6-8 partículas irregulares,
porosas, com contornos ásperos e pequenos vazios internos representados como pontos brancos dentro
de cada partícula — todas em âmbar claro com contorno âmbar escuro.

BRAÇO DIREITO (teal #0C7489) — leva a α-hemihydrate
Uma seta descendo e à direita, rotulada "AUTOCLAVE, STEAM PRESSURE". No meio do braço, um ícone
simples de um cilindro fechado com uma válvula, forma geométrica, sem realismo. A seta termina numa
caixa teal rotulada "α-HEMIHYDRATE (STONE)" com a fórmula "CaSO₄ · ½H₂O" abaixo. Ao lado dessa caixa,
um círculo de ampliação mostrando 6-8 partículas regulares, densas, prismáticas, bem compactadas,
sem vazios internos visíveis — todas em teal claro com contorno teal escuro.

RODAPÉ
Uma linha fina cinza separando o diagrama de uma faixa de texto centralizada: "Same formula.
Different particle architecture."

RÓTULOS EXATOS (não alterar)
"GYPSUM" · "CaSO₄ · 2H₂O" · "OPEN VESSEL, ATMOSPHERIC PRESSURE" · "β-HEMIHYDRATE (PLASTER)" ·
"CaSO₄ · ½H₂O" · "AUTOCLAVE, STEAM PRESSURE" · "α-HEMIHYDRATE (STONE)" · "CaSO₄ · ½H₂O" ·
"Same formula. Different particle architecture."
```

**Checklist:**
▢ dois braços claramente distintos por cor (âmbar = plaster/β, teal = stone/α), consistente com o
resto do deck (β é sempre tratado como o "mais simples/histórico", α como o "mais denso/forte")
▢ as partículas da ampliação β são visivelmente porosas/irregulares; as da α são visivelmente
densas/regulares — o contraste tem de ser óbvio a 4 metros
▢ nenhum texto além dos rótulos exatos listados acima

---

## FIG 09.2 · The five ISO 6873 types
**Arquivo:** `gypsum-classification-tree.png` · **Slide 9** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** os cinco tipos não são uma lista arbitrária — eles se agrupam em
duas famílias (plasters, de β; stones, de α), e dentro de cada família a numeração sobe com a
resistência/exigência técnica.

```
COMPOSIÇÃO GERAL
Uma árvore de classificação vertical. Uma caixa raiz no topo, dividindo-se em dois ramos (esquerda
e direita), cada ramo terminando em caixas-folha lado a lado.

CAIXA RAIZ (topo-centro)
Retângulo ardósia (#31465C): "GYPSUM PRODUCTS", branco.

RAMO ESQUERDO — família PLASTER (âmbar #B45309)
Uma linha descendo para uma caixa de categoria âmbar "PLASTER (β)", que se ramifica em duas
caixas-folha menores, lado a lado, contorno âmbar, fundo branco:
  "TYPE 1 — Impression plaster"
  "TYPE 2 — Model / mounting plaster"

RAMO DIREITO — família STONE (teal #0C7489)
Uma linha descendo para uma caixa de categoria teal "STONE (α)", que se ramifica em três
caixas-folha menores, lado a lado, contorno teal, fundo branco:
  "TYPE 3 — Dental stone"
  "TYPE 4 — High strength, low expansion"
  "TYPE 5 — High strength, high expansion"

Sob cada grupo de folhas, uma seta fina horizontal cinza rotulada "increasing strength →" indicando
que, dentro de cada família, o número mais alto é o mais resistente.

RÓTULOS EXATOS (não alterar)
"GYPSUM PRODUCTS" · "PLASTER (β)" · "TYPE 1 — Impression plaster" ·
"TYPE 2 — Model / mounting plaster" · "STONE (α)" · "TYPE 3 — Dental stone" ·
"TYPE 4 — High strength, low expansion" · "TYPE 5 — High strength, high expansion" ·
"increasing strength →"
```

**Checklist:**
▢ exatamente 5 caixas-folha (2 à esquerda, 3 à direita), nenhuma a mais
▢ cores consistentes com a FIG 09.1 (âmbar = plaster/β, teal = stone/α)
▢ a seta "increasing strength →" aparece só uma vez sob cada grupo, não em cada caixa individual

---

## FIG 09.3 · Dissolution, then precipitation
**Arquivo:** `setting-reaction-dissolution-precipitation.png` · **Slide 11** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** a presa não é a água "secando" — é um pó se dissolvendo, a solução
ficando supersaturada, e um cristal diferente (mais insolúvel) precipitando e travando tudo no lugar.

```
COMPOSIÇÃO GERAL
Três painéis lado a lado, numerados 1, 2, 3, cada um dentro de um retângulo de contorno fino cinza,
representando três momentos em sequência, ligados por setas finas entre os painéis.

PAINEL 1 — "DISSOLUTION"
Um copo/béquer esquemático (contorno ardósia) contendo água (preenchimento azul-acinzentado claro).
Partículas irregulares âmbar (representando o hemidrato) dispersas, algumas com pequenas setas
curvas saindo delas em direção ao líquido, indicando dissolução. Rótulo abaixo: "Hemihydrate
dissolves".

PAINEL 2 — "SUPERSATURATION"
O mesmo béquer, agora com o líquido num tom levemente mais escuro/denso (indicando concentração),
e pequenos pontos teal dispersos representando núcleos de cristalização começando a aparecer.
Rótulo abaixo: "Solution becomes supersaturated".

PAINEL 3 — "PRECIPITATION"
O mesmo béquer, agora dominado por cristais teal em forma de agulha, entrelaçados uns nos outros,
formando uma massa rígida visível preenchendo boa parte do béquer. Rótulo abaixo: "Dihydrate
crystals interlock".

RODAPÉ
Uma linha de fórmula centralizada, em fonte monoespaçada: "CaSO₄ · ½H₂O + 1½H₂O → CaSO₄ · 2H₂O + heat"

RÓTULOS EXATOS (não alterar)
"DISSOLUTION" · "Hemihydrate dissolves" · "SUPERSATURATION" · "Solution becomes supersaturated" ·
"PRECIPITATION" · "Dihydrate crystals interlock" · "CaSO₄ · ½H₂O + 1½H₂O → CaSO₄ · 2H₂O + heat"
```

**Checklist:**
▢ progressão visual clara entre os 3 painéis (partículas dispersas → núcleos aparecendo → cristais
entrelaçados preenchendo o béquer) — o aluno tem de "ver" a massa endurecendo da esquerda para a
direita
▢ a fórmula do rodapé está exatamente como escrita, incluindo os pontos entre os coeficientes
▢ nenhum número de tempo ou temperatura inventado

---

## FIG 09.4 · Water/powder ratio: setting time and strength move opposite ways
**Arquivo:** `water-powder-ratio-effect.png` · **Slide 14** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** o gráfico é esquemático, não um dado medido ponto-a-ponto — mas a
direção das duas curvas (tempo de presa sobe, resistência cai, ambas conforme a razão água/pó sobe)
é o que precisa ficar gravado.

```
COMPOSIÇÃO GERAL
Um único gráfico de linhas esquemático, eixo X horizontal e DUAS linhas de tendência com dois eixos Y
(esquerda e direita), sem grade de fundo pesada.

EIXO X (horizontal, ardósia)
Rotulado "WATER / POWDER RATIO" com apenas dois marcadores nas extremidades: "Low" à esquerda,
"High" à direita. Sem valores numéricos no eixo X (a relação é qualitativa).

EIXO Y ESQUERDO (teal #0C7489)
Rotulado "SETTING TIME" na vertical. Uma curva teal, suave, SUBINDO da esquerda (baixa) para a
direita (alta) — linha ascendente.

EIXO Y DIREITO (âmbar #B45309)
Rotulado "COMPRESSIVE STRENGTH" na vertical. Uma curva âmbar, suave, DESCENDO da esquerda (alta)
para a direita (baixa) — linha descendente.

As duas curvas se cruzam visualmente no meio do gráfico, formando um "X" suave.

RODAPÉ
Uma nota em itálico, fonte menor, centralizada: "Schematic trend, not measured data points."

RÓTULOS EXATOS (não alterar)
"WATER / POWDER RATIO" · "Low" · "High" · "SETTING TIME" · "COMPRESSIVE STRENGTH" ·
"Schematic trend, not measured data points."
```

**Checklist:**
▢ as duas curvas se cruzam em X — uma sobe, a outra desce, nada de curvas paralelas
▢ nenhum valor numérico no eixo X (é intencionalmente qualitativo — os números vêm em slide próprio)
▢ a nota de rodapé "schematic trend" aparece, deixando claro que não é dado medido

---

## FIG 09.5 · Why free water changes how far the crystals grow
**Arquivo:** `setting-vs-hygroscopic-expansion.png` · **Slide 17** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** a diferença entre expansão de presa e higroscópica não é "mais do
mesmo" — é a ausência de uma restrição física (a tensão superficial da água residual) que existe no
ar e desaparece quando há água livre em contato com a massa.

```
COMPOSIÇÃO GERAL
Dois painéis lado a lado, de largura igual, separados por uma linha vertical fina cinza.

PAINEL ESQUERDO — "SETTING IN AIR"
Um bloco retangular representando o gesso (contorno ardósia, preenchimento cinza claro #E3E9EF),
com cristais em forma de agulha (teal) crescendo a partir de pontos internos, mas com pequenas setas
curtas e grossas em ardósia apontando PARA DENTRO nas bordas do bloco, representando a tensão
superficial da água residual restringindo o crescimento. O bloco tem um tamanho de referência
(moderado). Rótulo abaixo: "Residual water's surface tension restrains growth".

PAINEL DIREITO — "SETTING AGAINST WATER"
O mesmo tipo de bloco, mas visivelmente MAIOR (mais largo), com uma camada de água livre
representada como uma faixa azul-acinzentada clara cobrindo a superfície superior do bloco. Os
cristais teal crescem mais livremente, sem as setas de restrição — ou com setas para fora, mais
longas, indicando expansão livre. Rótulo abaixo: "Free water removes the restraint".

RODAPÉ
Uma linha central: "Same reaction. No restraining tension." em itálico.

RÓTULOS EXATOS (não alterar)
"SETTING IN AIR" · "Residual water's surface tension restrains growth" · "SETTING AGAINST WATER" ·
"Free water removes the restraint" · "Same reaction. No restraining tension."
```

**Checklist:**
▢ o bloco do painel direito é visivelmente MAIOR que o da esquerda — essa diferença de tamanho é o
ponto inteiro da figura
▢ as setas de restrição (para dentro) aparecem só no painel esquerdo
▢ a camada de água livre no painel direito é claramente distinta do material do bloco (cor diferente)

---

## FIG 09.6 · Particle packing explains the water demand and strength gap
**Arquivo:** `plaster-vs-stone-particles.png` · **Slide 23** · **4:3 · 1600 × 1200 px**

**O que o aluno deve concluir:** esta é a síntese visual da aula — a mesma diferença de partícula
introduzida na FIG 09.1 é o que explica, ao mesmo tempo, a razão água/pó E a resistência final.

```
COMPOSIÇÃO GERAL
Dois painéis lado a lado, largura igual, cada um mostrando uma vista ampliada e esquemática de
partículas empacotadas, com uma faixa de dados abaixo de cada painel.

PAINEL ESQUERDO — "PLASTER (β)"
Título em âmbar (#B45309) no topo. Abaixo, 10-14 partículas irregulares, porosas, de tamanhos
desiguais, empacotadas de forma solta com espaços/vazios visíveis entre elas (representados em
branco/cinza claro entre as formas âmbar). Sob o painel, uma faixa de dados com dois valores:
"W/P ratio ≈ 0.45–0.60" e "Lower strength".

PAINEL DIREITO — "STONE (α)"
Título em teal (#0C7489) no topo. Abaixo, 10-14 partículas regulares, densas, de tamanho
uniforme, empacotadas de forma compacta com poucos espaços visíveis entre elas (formas teal bem
justapostas). Sob o painel, uma faixa de dados com dois valores: "W/P ratio ≈ 0.28–0.32" e
"Higher strength".

RÓTULOS EXATOS (não alterar)
"PLASTER (β)" · "W/P ratio ≈ 0.45–0.60" · "Lower strength" · "STONE (α)" ·
"W/P ratio ≈ 0.28–0.32" · "Higher strength"
```

**Checklist:**
▢ o contraste de empacotamento é óbvio a 4 metros: painel esquerdo claramente mais poroso/solto,
painel direito claramente mais denso/compacto
▢ os dois valores de W/P ratio e resistência aparecem exatamente como escritos (faixa, não ponto
único; "≈", não "=")
▢ cores consistentes com FIG 09.1 e FIG 09.2 (âmbar = plaster/β, teal = stone/α) em todo o deck

---

## Ordem sugerida de geração

| Prioridade | Figuras | Por quê |
|---|---|---|
| **1 — trava o resto do deck** | 09.1 (manufatura) | Todo o vocabulário β/α e as cores âmbar/teal nascem aqui; as outras cinco a referenciam. |
| **2 — mecanismo central** | 09.3 (dissolução-precipitação) | É o outcome 2 (LO-2) da aula, a espinha do deck. |
| **3 — as de síntese** | 09.5 (expansão) · 09.6 (plaster × stone) | Fecham os outcomes 1 e 3. |
| **4 — as esquemáticas** | 09.2 (árvore de classificação) · 09.4 (gráfico água/pó) | Toleram ficar por último — são apoio visual a uma tabela que já existe no slide. |
