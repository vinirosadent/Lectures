# Aula 13 · Dental ceramics — prompts que faltam (lote 2)

**13 figuras.** 10 essenciais (P1) e 3 importantes (P2). Este arquivo é autossuficiente: tem o bloco de
estilo (com as regras aprendidas na 1ª rodada) e só os prompts pendentes.

**Como usar**
1. Cole o **BLOCO DE ESTILO** e, em seguida, **um** prompt (uma figura por conversa funciona melhor).
2. Confira o **checklist** antes de aceitar. Fórmulas, subscritos e números errados → regerar.
3. Salve os PNGs em `1. Source\13. Ceramics\Assets\`. **Eu renomeio** [D-19]; não precisa renomear.

| Ordem | FIG | Arquivo | Seção | Prioridade |
|---|---|---|---|---|
| 1 | 13.14 v2 | `yttria-stabilisation-vacancies.png` | §4 Zirconia | P1 |
| 2 | 13.18 | `zirconia-birefringence-scattering.png` | §4 Zirconia | P1 |
| 3 | 13.19 | `zirconia-ltd-progression.png` | §4 Zirconia | P1 |
| 4 | 13.20 | `mdp-zirconia-bonding.png` | §4 Zirconia | P1 |
| 5 | 13.21 | `flaw-stress-concentration.png` | §5 Fatigue | P1 |
| 6 | 13.23 | `stress-corrosion-crack-tip.png` | §5 Fatigue | P1 |
| 7 | 13.24 | `crown-contact-radial-cracks.png` | §5 Fatigue | P1 |
| 8 | 13.26 | `optics-by-microstructure.png` | §6 Summary | P1 |
| 9 | 13.27 | `wear-tribosystem.png` | §6 Summary | P1 |
| 10 | 13.29 | `ceramic-vs-composite-structure.png` | §6 Summary | P1 |
| 11 | 13.22 | `weakest-link-size-effect.png` | §5 Fatigue | P2 |
| 12 | 13.25 | `fatigue-mechanisms-by-class.png` | §5 Fatigue | P2 |
| 13 | 13.28 | `wear-surface-condition.png` | §6 Summary | P2 |

---

# A. BLOCO DE ESTILO — cole no início de TODOS os prompts

```
Crie uma ilustração científica vetorial plana para uma aula universitária de materiais dentários
(ciência dos materiais), projetada num telão de sala de aula.

ESTILO OBRIGATÓRIO
- Ilustração vetorial plana (flat vector), estilo diagrama de livro-texto científico moderno.
- Fundo BRANCO PURO (#FFFFFF). Sem fundo colorido, sem gradiente, sem vinheta.
- SEM sombras, SEM gradientes, SEM brilho, SEM reflexo, SEM efeito 3D, SEM textura, SEM perspectiva
  realista, SEM aparência fotográfica. Tudo em 2D (cortes e vistas planas).
- Traço uniforme e limpo. Composição arejada, margens generosas, nada encostando na borda.

CÓDIGO DE CORES FIXO DESTA AULA — usar APENAS estas cores, sempre com este significado
  #E3E9EF  cinza-claro  → FASE VÍTREA (glass matrix), preenchimentos neutros
  #0C7489  teal         → FASE CRISTALINA (cristais de leucita, de dissilicato de lítio, grãos de
                          zircônia TETRAGONAL, grãos de alumina)
  #9CC9D3  teal-claro   → grãos de zircônia CÚBICA
  #B45309  âmbar        → grãos de zircônia MONOCLÍNICA (transformados); raios de LUZ nas figuras ópticas
  #BE123C  carmim       → TRINCA, defeito, poro, tensão de TRAÇÃO, dano
  #31465C  ardósia      → contornos, texto, setas de COMPRESSÃO, estruturas neutras (dente, metal)
  #FFFFFF  branco       → fundo

TIPOGRAFIA
- Sans-serif geométrica limpa (tipo Inter / Helvetica). Texto grande, legível a 4 m num telão.
- TODOS os rótulos em INGLÊS, exatamente como escritos no prompt, sem traduzir nem reformular.
- Rótulos de painel em CAIXA ALTA; textos explicativos em sentence case.

PROIBIDO
- Nenhum logotipo, marca d'água, nome de fabricante ou marca comercial.
- Nenhuma legenda embaixo da figura (a legenda vai no slide). Nenhum título geral no topo.
- Nenhum texto decorativo, frase de efeito, emoji ou ícone genérico.
- Nenhum número, unidade, fórmula ou símbolo além dos que o prompt pedir explicitamente.

NÚMEROS E FÓRMULAS
- Reproduza números, unidades e fórmulas EXATAMENTE como escritos, com subscritos corretos
  (Li₂Si₂O₅, ZrO₂, Y₂O₃, SiO₂, KAlSi₂O₆) e os símbolos µm, °C, %, →.

REGRAS QUE A 1ª RODADA MOSTROU SEREM NECESSÁRIAS
- Zircônia TETRAGONAL é SEMPRE teal escuro #0C7489. Teal-claro #9CC9D3 é SÓ para zircônia CÚBICA.
- Nada de perspectiva, blocos 3D ou barras com profundidade: só cortes e vistas 2D planas.
- Fórmulas químicas: valência correta (oxigênio faz 2 ligações, nunca "Si–OH–Si").
```

---


# P1

### FIG 13.14 v2 · Yttria stabilisation — `yttria-stabilisation-vacancies.png` (substitui o prompt original)

```
COMPOSIÇÃO: um painel quadrado 2D esquemático. No canto inferior esquerdo, em fonte pequena:
"2D schematic, not to scale".

DUAS SUB-REDES, desenhadas numa grade rigorosamente regular:
- CÁTIONS: círculos MÉDIOS teal (#0C7489) nos cruzamentos de uma grade quadrada de 5 colunas × 4 linhas.
- ÂNIONS: círculos GRANDES cinza-claros (#E3E9EF, contorno ardósia), cada um no CENTRO de um quadrado
  formado por 4 cátions (sub-rede deslocada meia célula na diagonal) → 4 colunas × 3 linhas de ânions.
Rotule dois cátions comuns com "Zr⁴⁺" e dois ânions com "O²⁻".

DEFEITO (no centro da grade):
- Troque DOIS cátions vizinhos na mesma linha (posições de CÁTION, círculos médios) por círculos
  âmbar (#B45309) LIGEIRAMENTE MAIORES que os Zr⁴⁺, rotulados "Y³⁺".
- Remova UM ÂNION (uma posição de círculo GRANDE) vizinho a esses dois Y³⁺, deixando no lugar um
  quadrado tracejado carmim (#BE123C) do tamanho de um ânion, rotulado "oxygen vacancy".
- REGRA OBRIGATÓRIA: Y³⁺ fica SÓ onde havia círculo médio (cátion); a vacância fica SÓ onde havia
  círculo grande (ânion). Nunca o contrário.

À direita da grade, bloco de texto em fonte mono:
  "2 Y³⁺ replace 2 Zr⁴⁺"
  "→ 1 O²⁻ site left empty"
  "3Y = 3 mol% Y₂O₃"
```
**Checklist:** Y³⁺ em sítio de cátion · vacância em sítio de ânion · "3 mol% Y₂O₃" exato.

---

### FIG 13.18 · Why tetragonal zirconia scatters light: birefringence at grain boundaries — `zirconia-birefringence-scattering.png` · P1 · 16:9
**O aluno deve concluir:** o grão tetragonal é anisotrópico (o índice de refração depende da
orientação). A cada contorno entre grãos com orientações diferentes, o n muda e a luz se espalha. O
grão cúbico é isotrópico (sem esse salto). Poros também espalham. Por isso, na zircônia, "mais
cristal" não explica a óptica; o que explica é a simetria do cristal.
**Fontes:** Silva 2017 p.135; Nejat 2025 p.165.

```
COMPOSIÇÃO: dois painéis lado a lado, com feixe de 5 raios âmbar (#B45309) entrando por cima.

PAINEL ESQUERDO — "TETRAGONAL GRAINS (anisotropic)"
  Mosaico de grãos teal ESCURO (#0C7489), cada grão com um pequeno traço interno em direção diferente
  (indicando orientação cristalina diferente). Os raios desviam um pouco a cada contorno de grão,
  saindo espalhados; só um raio sai embaixo.
  Rótulo com seta num contorno: "n changes at every grain boundary → scattering".
PAINEL DIREITO — "CUBIC GRAINS (isotropic)"
  Mosaico de grãos maiores teal-claros (#9CC9D3), sem traços internos. Os raios atravessam quase retos;
  4 de 5 saem embaixo.
  Rótulo: "same n in all directions → less scattering".
Em ambos, um poro pequeno (círculo branco, contorno carmim) com um raio se espalhando nele, rótulo
comum: "pores scatter in both".
```
**Checklist:** traços de orientação só no painel tetragonal · sem valores de n · raios âmbar.

---

### FIG 13.19 · Low-temperature degradation: from the surface inward — `zirconia-ltd-progression.png` · P1 · 16:9
**O aluno deve concluir:** em presença de água, grãos tetragonais da SUPERFÍCIE transformam-se
espontaneamente para monoclínico, sem trinca. A expansão gera microtrincas que deixam a água
penetrar mais fundo, a zona transformada cresce, e a superfície fica rugosa e pode perder grãos. É a
mesma transformação t → m do mecanismo de tenacificação, só que aqui é prejudicial. Depende da
formulação; a relevância clínica não está estabelecida.
**Fontes:** slides A 82 / B 24 (seus); Belli 2014 p.430 (umidade corrói Zr–O e pode disparar
transformação espontânea); Silva 2017 p.136 (sem evidência clínica de falha por LTD). Mecanismo de
nucleação e crescimento [CONFIRMAR fonte primária na Etapa 1: Chevalier].

```
COMPOSIÇÃO: três cortes da superfície em sequência horizontal (stage 1 → 2 → 3), com setas.
Em cada corte: superfície no topo; moléculas de água desenhadas como "H₂O" em texto ardósia acima da
superfície; mosaico de grãos teal ESCURO (#0C7489) = tetragonais, abaixo.

STAGE 1 — "WATER AT THE SURFACE": um único grão de superfície âmbar (#B45309, monoclínico),
  ligeiramente saliente. Rótulo: "t → m in a surface grain".
STAGE 2 — "TRANSFORMATION SPREADS": vários grãos de superfície e alguns logo abaixo em âmbar;
  microtrincas carmim (#BE123C) entre grãos transformados; setas finas indicando água descendo pelas
  microtrincas. Rótulos: "microcracks" e "water penetrates deeper".
STAGE 3 — "TRANSFORMED SURFACE LAYER": uma camada contínua âmbar no topo, delimitada por linha
  tracejada ("transformed zone depth"); superfície irregular com um grão saindo ("grain pull-out") e
  rugosidade aumentada ("roughening").
Faixa embaixo: "Same t → m transformation as in toughening, here driven by water, without a crack".
```
**Checklist:** água como "H₂O" · o 1º estágio tem um só grão âmbar · a frase final presente.

---

### FIG 13.20 · Bonding to zirconia: no glass, so phosphate monomer (MDP) — `mdp-zirconia-bonding.png` · P1 · 16:9
**O aluno deve concluir:** a zircônia não tem fase vítrea, então HF não condiciona e o silano tem pouca
afinidade. O monômero fosfatado 10-MDP liga quimicamente o grupo fosfato ao óxido de zircônio (Zr–O–P),
enquanto o metacrilato copolimeriza com a resina. O jateamento aumenta a área, mas pode induzir
transformação t → m e dano superficial.
**Fonte química:** 10-MDP = 10-methacryloyloxydecyl dihydrogen phosphate [CONFIRMAR referência
primária na Etapa 1]. Seus PDFs atuais não descrevem MDP (Al-Johani menciona "10-MDP" de passagem).

```
COMPOSIÇÃO: diagrama horizontal em três zonas (espelho do FIG 13.10, para os alunos compararem).

ZONA 1 — "ZIRCONIA SURFACE": bloco de grãos teal (#0C7489) compactos, sem cinza-claro; na face
  direita, grupos "Zr–OH".
ZONA 2 — "10-MDP": molécula em fórmula estrutural simplificada horizontal:
  à esquerda o grupo fosfato "–O–P(=O)(OH)₂" com uma das OH já substituída por uma ligação ao Zr da
  superfície ("Zr–O–P"); depois uma cadeia longa "–(CH₂)₁₀–"; depois "–O–C(=O)–"; terminando em
  "C(CH₃)=CH₂".
  Chave sobre o fosfato: "phosphate group bonds to zirconia (Zr–O–P)".
  Chave sobre o C=C: "methacrylate copolymerises with resin".
ZONA 3 — "RESIN CEMENT": cadeias poliméricas onduladas ardósia, conectadas ao C=C.
Faixa inferior esquerda, pequena, em carmim: "Air abrasion roughens the surface but can induce t → m
transformation and surface damage".
```
**Checklist:** "(CH₂)₁₀" exato · ligação Zr–O–P · aviso sobre jateamento em carmim · sem marca.

---

### FIG 13.21 · A flaw concentrates stress — `flaw-stress-concentration.png` · P1 · 16:9
**O aluno deve concluir:** sob tração, as linhas de força se aglomeram na ponta de um defeito; quanto
mais longo e agudo o defeito, maior a tensão local. Por isso a resistência de uma cerâmica é decidida
pelo seu maior defeito, e por que ela é muito mais fraca em tração do que em compressão.
**Fonte:** Kelly 2017 p.1192 ss.; Cesar 2017 pp.576–577 (K = Y·σ·√c; a resistência depende do defeito,
a tenacidade é do material).

```
COMPOSIÇÃO: dois painéis lado a lado: uma placa cinza-claro (#E3E9EF) tracionada por setas carmim
(#BE123C) em cima e embaixo ("applied tension σ"), com linhas de força ardósia finas verticais.

PAINEL ESQUERDO — "NO FLAW": linhas paralelas, igualmente espaçadas. Rótulo: "uniform stress".
PAINEL DIREITO — "SURFACE FLAW": uma trinca elíptica fina carmim entrando pela lateral da placa
  (horizontal, perpendicular à tração). As linhas de força desviam e se APERTAM na ponta da trinca.
  Um pequeno círculo de destaque ampliado na ponta: "stress concentration at the crack tip".
  Cota com seta dupla ao longo da trinca: "c (flaw size)".
Embaixo, faixa com a relação em fonte mono, centralizada:
  "K = Y · σ · √c     fracture when K reaches K_Ic"
```
**Checklist:** a fórmula exatamente "K = Y · σ · √c" e "K_Ic" (Ic subscrito) · linhas apertadas na ponta.

---

### FIG 13.23 · Stress corrosion at the crack tip: water breaks strained Si–O–Si bonds — `stress-corrosion-crack-tip.png` · P1 · 16:9
**O aluno deve concluir:** em vidros e cerâmicas com fase vítrea, a água ataca a ligação Si–O–Si
tensionada na ponta da trinca. A ligação se rompe em dois Si–OH, e a trinca avança abaixo da tensão
crítica (crescimento subcrítico). Quantidades minúsculas de umidade bastam.
**Fonte:** Kelly 2017 p.1196 (Fig. 2, mecanismo em 3 passos; redesenhado como esquema original) e
p.1198 (umidade relativa de 0,02% já é suficiente).

```
COMPOSIÇÃO: três quadros em sequência horizontal (step 1 → 2 → 3), cada um mostrando a ponta de uma
trinca em V (faces carmim #BE123C) e, exatamente na ponta, uma ligação Si–O–Si.
Átomos: Si = círculo teal (#0C7489) rotulado "Si"; O = círculo cinza-claro com contorno ardósia
rotulado "O"; H = círculo branco pequeno com contorno ardósia rotulado "H".
Setas grandes ardósia acima e abaixo do conjunto, puxando para fora: "tensile stress".

STEP 1 — "WATER ADSORBS": uma molécula H₂O se aproxima da ligação Si–O–Si esticada na ponta.
STEP 2 — "REACTION": o O da água se liga a um Si; um H vai para o O da ponte; ligações em formação
  em traço tracejado.
STEP 3 — "BOND BROKEN": dois grupos Si–OH, um em cada face da trinca; a ponta avançou uma posição.
Faixa embaixo: "Slow (subcritical) crack growth below the critical stress — stress corrosion".
```
**Checklist:** produto final = dois "Si–OH" · trinca avança no step 3 · nenhum número.

---

### FIG 13.24 · Where a ceramic crown cracks: contact damage and radial cracks — `crown-contact-radial-cracks.png` · P1 · 16:9
**O aluno deve concluir:** a carga oclusal produz dois tipos de trinca. Cone (Hertziana) parte da
superfície de contato. Radial parte da superfície interna (intaglio), por flexão, logo abaixo da carga.
Em coroas que falham na clínica, a origem costuma ser a superfície interna, tracionada.
**Fontes:** Kelly 2017 p.1201 (cone cracks; trincas radiais do intaglio como origem em coroas falhadas);
Aboushelib 2016 p.533 (trinca crítica na superfície de assentamento, abaixo do ponto de carga).

```
COMPOSIÇÃO: um corte vertical grande de uma coroa cerâmica monolítica (cerâmica em cinza-claro
#E3E9EF) sobre um dente preparado ardósia, com camada fina de cimento.
Uma esfera ardósia (antagonista) pressionando o centro da face oclusal; seta grande "occlusal load".

Duas trincas carmim (#BE123C):
  1. Logo abaixo do contato, na superfície oclusal: anel + trinca inclinada em forma de cone descendo
     para dentro. Rótulo: "cone (Hertzian) crack — starts at the contact surface".
  2. Na superfície interna da coroa (voltada para o dente), exatamente abaixo da carga: trinca vertical
     subindo em direção à oclusal, com 2 ramificações finas. Rótulo: "radial crack — starts at the
     intaglio (inner) surface, in tension".
Setas carmim pequenas horizontais divergentes na superfície interna: "flexural tension".
```
**Checklist:** duas trincas com origens diferentes · rótulo "intaglio" presente · cerâmica cinza-clara.

---

### FIG 13.26 · Light through four ceramic microstructures — `optics-by-microstructure.png` · P1 · 16:9
**O aluno deve concluir:** a translucidez não depende de "quanto cristal", e sim de onde o índice de
refração muda. No vidro com leucita e no dissilicato, o n dos cristais é próximo do vidro. Na
zircônia 3Y, a birrefringência de cada grão espalha a luz. Na 5Y, os grãos cúbicos reduzem esse
espalhamento. A espessura amplifica tudo.
**Fontes:** Nejat 2025 pp.156, 165; Silva 2017 p.135; Al-Johani 2024 p.17. [CONFIRMAR na Etapa 1 uma fonte primária para o Δn pequeno entre cristais de Li₂Si₂O₅ e vidro residual.]

```
COMPOSIÇÃO: quatro placas verticais lado a lado, mesma espessura, cada uma com 5 raios âmbar
(#B45309) entrando por cima; embaixo de cada placa, o número de raios que saem.

PLACA 1 — "FELDSPATHIC PORCELAIN": vidro cinza-claro + poucos cristais teal; 4 raios saem.
  Texto: "glass-rich; small Δn".
PLACA 2 — "LITHIUM DISILICATE": bastões teal entrelaçados em vidro; 3 raios saem.
  Texto: "≈ 70 vol% crystals, small Δn between crystals and glass".
PLACA 3 — "3Y ZIRCONIA": grãos teal pequenos com traços de orientação; 1 raio sai, os outros espalham.
  Texto: "no glass; birefringent tetragonal grains".
PLACA 4 — "5Y ZIRCONIA": metade grãos teal-claros grandes (cúbicos) + metade teal; 3 raios saem.
  Texto: "cubic grains reduce scattering".
Faixa embaixo: "More crystalline ≠ less translucent. Scattering depends on Δn, birefringence, pores
and thickness".
```
**Checklist:** contagem de raios saindo: 4 / 3 / 1 / 3 · "≈ 70 vol%" exato · frase com "≠".

---

### FIG 13.27 · Wear is a response of the system, not a material property — `wear-tribosystem.png` · P1 · 16:9
**O aluno deve concluir:** o desgaste do esmalte antagonista depende do sistema inteiro: superfícies,
carga e movimento, meio e terceiro corpo. Dureza sozinha não prevê desgaste.
**Fonte:** Kyaw 2024 p.258 ("wear is not a property of a material but rather a response of a system") e
p.260 (Fig. 2, 12 fatores em 4 grupos, CC BY-NC-ND, não pode ser adaptada → esquema original);
p.261 (dureza não prediz desgaste do esmalte).

```
COMPOSIÇÃO: no centro, um corte simples de dois corpos em contato: uma cúspide de esmalte (cinza-claro
#E3E9EF, rotulada "enamel antagonist") sobre uma superfície cerâmica (teal #0C7489, rotulada "ceramic
restoration"), com uma seta horizontal de deslizamento e uma seta vertical de carga; entre eles,
pequenas partículas ardósia rotuladas "third bodies (debris, food)".
Em volta, quatro caixas conectadas ao centro por linhas finas:
  Caixa 1 "SURFACES": "roughness (Ra)" / "glazed or polished" / "microstructure"
  Caixa 2 "LOADING": "force" / "sliding vs. impact" / "number of cycles"
  Caixa 3 "ENVIRONMENT": "saliva" / "pH" / "temperature"
  Caixa 4 "MATERIAL PROPERTIES": "hardness" / "fracture toughness" / "elastic modulus"
Na caixa 4, uma nota pequena carmim: "hardness alone does not predict enamel wear".
```
**Checklist:** 4 caixas com os rótulos exatos · nota em carmim na caixa 4 · nenhum número.

---

### FIG 13.29 · Ceramic and resin composite: structure and response to water — `ceramic-vs-composite-structure.png` · P1 · 16:9
**O aluno deve concluir:** a cerâmica é uma rede inorgânica (vidro e/ou cristais) que quase não
absorve água. O compósito é uma matriz polimérica com partículas inorgânicas unidas por silano. A água
entra na matriz (sorção), plastifica o polímero e hidrolisa a interface carga–matriz. A comparação de
propriedades da §6.4 parte daqui.
**Fonte:** aula 11 (Resin composites) e Nejat 2025 p.167 (cargas silanizadas em matriz polimérica). A
comparação quantitativa fica para as tabelas, com fonte e método.

```
COMPOSIÇÃO: dois painéis lado a lado, cada um com um quadrado de microestrutura e, à direita do quadrado,
um ícone "H₂O" com setas.

PAINEL ESQUERDO — "DENTAL CERAMIC": quadrado com o padrão de vidro-cerâmica (vidro cinza-claro + bastões
  teal). As setas de água param na superfície. Rótulos: "inorganic network (glass and/or crystals)" e
  "negligible water sorption".
PAINEL DIREITO — "RESIN COMPOSITE": quadrado com matriz de cadeias poliméricas onduladas ardósia e
  partículas teal arredondadas de tamanhos variados, cada uma com um anel fino âmbar (#B45309) = camada
  de silano. As setas de água ENTRAM na matriz; em duas partículas o anel âmbar está interrompido por
  pequena fenda carmim.
  Rótulos: "polymer matrix", "inorganic filler", "silane layer", "water sorption into the matrix",
  "hydrolysis at the filler–matrix interface".
Nenhum número.
```
**Checklist:** água para na cerâmica, entra no compósito · anéis de silano âmbar · fendas carmim só no
compósito.


---

# STATUS DO LOTE 1 (atualizado 2026-10-13, depois da 1ª rodada de geração)

| FIG | Arquivo | Status |
|---|---|---|
| 13.01 | restoration-types.png | ✅ aceita |
| 13.02 | monolithic-vs-bilayer.png | ✅ aceita |
| 13.03 | why-ceramics-brittle.png | ✅ aceita |
| 13.04 | ceramic-classes-microstructure.png | ✅ aceita |
| 13.05 | porcelain-firing-porosity.png | ✅ aceita |
| 13.06 | leucite-cte-microcracks.png | ✅ aceita (números conferidos) |
| 13.07 | metal-ceramic-residual-stress.png | ✅ aceita a versão plana; a versão em perspectiva foi para `_rejected\` |
| 13.08 | porcelain-light-scattering.png | ✅ aceita |
| 13.09 | hf-etching-glass-phase.png | ✅ aceita **com a faixa inferior reescrita por mim**: "HF dissolves the silica-based glass preferentially; the crystals are attacked far less". A frase do meu prompt ("not the crystals") era absoluta demais |
| 13.10 | silane-coupling.png | ✅ aceita a 2ª versão; a 1ª tinha "Si–OH–Si" (erro químico) e foi para `_rejected\` |
| 13.11 | lithium-disilicate-crystallisation.png | ✅ aceita (fórmulas e vol% conferidos) |
| 13.12 | crack-deflection-microstructures.png | ✅ aceita |
| 13.13 | crack-bridging-wake.png | ✅ aceita |
| 13.14 | yttria-stabilisation-vacancies.png | ❌ **REGERAR com o prompt v2 abaixo**: Y³⁺ saiu em sítio de ÂNION e a vacância em sítio de CÁTION (o inverso do correto) |
| 13.15 | transformation-toughening-trigger.png | ✅ aceita; **recolori no repo** os grãos tetragonais de teal-claro para teal (no 3Y/4Y/5Y o teal-claro significa cúbica) |
| 13.16 | transformation-zone-shielding.png | ✅ aceita; recolorida como a 13.15 |
| 13.17 | zirconia-3y-4y-5y.png | ✅ aceita |
| 13.18–13.29 | — | ⏳ ainda não geradas |

**Faltam do P1:** 13.14 (regerar), 13.18, 13.19, 13.20, 13.21, 13.23, 13.24, 13.26, 13.27, 13.29.
**Faltam do P2:** 13.22, 13.25, 13.28.

## FIG 13.14 v2 · Yttria stabilisation — `yttria-stabilisation-vacancies.png` (substitui o prompt original)

```
COMPOSIÇÃO: um painel quadrado 2D esquemático. No canto inferior esquerdo, em fonte pequena:
"2D schematic, not to scale".

DUAS SUB-REDES, desenhadas numa grade rigorosamente regular:
- CÁTIONS: círculos MÉDIOS teal (#0C7489) nos cruzamentos de uma grade quadrada de 5 colunas × 4 linhas.
- ÂNIONS: círculos GRANDES cinza-claros (#E3E9EF, contorno ardósia), cada um no CENTRO de um quadrado
  formado por 4 cátions (sub-rede deslocada meia célula na diagonal) → 4 colunas × 3 linhas de ânions.
Rotule dois cátions comuns com "Zr⁴⁺" e dois ânions com "O²⁻".

DEFEITO (no centro da grade):
- Troque DOIS cátions vizinhos na mesma linha (posições de CÁTION, círculos médios) por círculos
  âmbar (#B45309) LIGEIRAMENTE MAIORES que os Zr⁴⁺, rotulados "Y³⁺".
- Remova UM ÂNION (uma posição de círculo GRANDE) vizinho a esses dois Y³⁺, deixando no lugar um
  quadrado tracejado carmim (#BE123C) do tamanho de um ânion, rotulado "oxygen vacancy".
- REGRA OBRIGATÓRIA: Y³⁺ fica SÓ onde havia círculo médio (cátion); a vacância fica SÓ onde havia
  círculo grande (ânion). Nunca o contrário.

À direita da grade, bloco de texto em fonte mono:
  "2 Y³⁺ replace 2 Zr⁴⁺"
  "→ 1 O²⁻ site left empty"
  "3Y = 3 mol% Y₂O₃"
```
**Checklist:** Y³⁺ em sítio de cátion · vacância em sítio de ânion · "3 mol% Y₂O₃" exato.

---


# P2

### FIG 13.22 · Weakest link and size effect — `weakest-link-size-effect.png` · P2 · 16:9
**O aluno deve concluir:** cada amostra cerâmica tem uma população aleatória de defeitos. Ela quebra
pelo pior defeito na região tracionada, por isso a resistência varia de amostra para amostra.
Amostras maiores (mais volume sob tração) têm mais chance de conter um defeito grande, e são mais
fracas em média. É a base intuitiva de Weibull.
**Fonte:** Al-Johani 2024 p.5 (σ₀ a 63,2%; m maior = mais confiável; amostras maiores falham a
tensões menores).

```
COMPOSIÇÃO: dois painéis.

PAINEL ESQUERDO — "WEAKEST LINK": uma corrente horizontal de 7 elos ardósia; um elo carmim mais fino
  rotulado "weakest link"; setas de tração nas pontas. Texto: "A chain is as strong as its weakest link".
PAINEL DIREITO — "SIZE EFFECT": duas barras de cerâmica sob flexão (três pontos de apoio desenhados
  como triângulos/círculos ardósia), uma PEQUENA e uma GRANDE, ambas cinza-claro, com muitos defeitos
  aleatórios desenhados como tracinhos carmim de tamanhos variados.
  Na face inferior (tracionada) de cada barra, um contorno tracejado carmim delimitando a faixa
  "region under tension".
  Na barra grande, um tracinho visivelmente MAIOR dentro da região tracionada, rotulado "largest flaw".
  Texto embaixo: "Larger stressed volume → higher probability of a large flaw → lower strength".
```
**Checklist:** uma barra pequena e uma grande · defeito maior só na grande · sem números.

---

### FIG 13.25 · Fatigue damage differs between ceramic classes — `fatigue-mechanisms-by-class.png` · P2 · 16:9
**O aluno deve concluir:** "fadiga" não é um mecanismo único. Na fase vítrea predomina o crescimento
subcrítico por corrosão sob tensão. Nas cerâmicas com pontes (vitrocerâmicas), a carga cíclica pode
degradar as pontes. Na zircônia, a água na ponta da trinca reduz o limiar de crescimento e pode
interagir com a transformação. Por isso a ordem por resistência à flexão não prevê a ordem em fadiga.
**Fontes:** Kelly 2017 p.1196 (corrosão sob tensão), p.1197 (detritos de pontes em deterioração), p.1201
(limiar da Y-TZP em água ~50% abaixo do K_Ic); Belli 2014 p.429 (perdas de 29,6–62,3% após 10⁴ ciclos em
água; zircônia de 768 para 440 MPa) e p.430 (umidade e transformação espontânea). As colunas 2 e 3 vão
no slide como **mecanismos propostos/reportados**.

```
COMPOSIÇÃO: três colunas lado a lado, cada uma com um mini-esquema em cima e 2 linhas de texto embaixo.

COLUNA 1 — "GLASS-RICH (feldspathic)": ponta de trinca em vidro cinza-claro com "H₂O" na ponta.
  Texto: "Stress corrosion of Si–O–Si" / "slow crack growth dominates".
COLUNA 2 — "GLASS-CERAMIC (lithium disilicate)": trinca com 2 bastões teal fazendo ponte; um deles
  quebrado, com fragmentos pequenos ardósia entre as faces.
  Texto: "Cyclic loading can degrade crack bridges" / "debris wedges between crack faces (reported)".
COLUNA 3 — "POLYCRYSTALLINE (zirconia)": trinca com grãos âmbar transformados ao longo das faces e
  "H₂O" na ponta.
  Texto: "Water lowers the crack-growth threshold" / "interaction with t → m transformation".
Faixa embaixo, em ardósia: "Ranking by flexural strength ≠ ranking by fatigue resistance".
```
**Checklist:** três colunas com títulos exatos · frase final com "≠" · sem números.

---

### FIG 13.28 · Surface condition over time: glazed, polished and rough — `wear-surface-condition.png` · P2 · 16:9
**O aluno deve concluir:** o glaze é uma camada vítrea fina que se desgasta e expõe a superfície
rugosa por baixo. O dissilicato perde vidro e pode soltar cristais. A zircônia polida continua lisa, e
a rugosa continua rugosa. A rugosidade, mais que a dureza, governa o desgaste do antagonista.
**Fonte:** Kyaw 2024 pp.261, 264–266 (desgaste do glaze em ~6 meses; Ra > 1,5 µm aumenta muito o
desgaste; perda de matriz e arrancamento de cristais no dissilicato; zircônia polida permanece lisa).

```
COMPOSIÇÃO: grade 3 linhas × 2 colunas. Colunas: "INITIAL" e "AFTER WEAR". Cada célula é um perfil em
corte da superfície (linha de superfície bem visível).

LINHA 1 — "GLAZED CERAMIC": inicial: camada fina cinza-clara lisa (rotulada "glaze layer") sobre uma
  superfície teal rugosa; após desgaste: glaze removido em partes, perfil rugoso exposto, pequenos
  fragmentos ardósia soltos ("glaze fragments act as abrasive").
LINHA 2 — "LITHIUM DISILICATE (polished)": inicial: bastões teal em vidro, superfície plana; após:
  vidro rebaixado entre bastões e um bastão faltando ("matrix wear and crystal pull-out").
LINHA 3 — "ZIRCONIA": inicial: duas sub-células lado a lado, "polished" (perfil liso) e "rough"
  (perfil serrilhado); após: o liso continua liso, o rugoso continua rugoso ("roughness persists").
Faixa embaixo: "Enamel wear rises sharply when ceramic roughness exceeds Ra ≈ 1.5 µm".
```
**Checklist:** "Ra ≈ 1.5 µm" exato · 3 linhas × 2 colunas · zircônia com as duas condições.

---
