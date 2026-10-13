# Aula 13 · Dental ceramics — prompts de figura (lote 1)

Gerado em 2026-10-13, depois da leitura completa dos dois PPTs antigos (134 slides) e dos 11 artigos em
`1. Source\13. Ceramics\Texts\`. As sínteses de cada artigo estão em `lectures/13-ceramics/_sources/`.

## Como usar este arquivo

1. Cole **primeiro** o BLOCO DE ESTILO (seção A), idêntico para todas as figuras.
2. Cole **em seguida** o prompt da figura (seção C), inteiro, incluindo a lista de rótulos.
3. Confira a figura contra o **checklist** do prompt. Modelos de imagem erram números, fórmulas
   químicas e subscritos: **não aceite** figura com fórmula ou número errado; regere dizendo o que corrigir.
4. Salve o PNG em `1. Source\13. Ceramics\Assets\` com o nome que o ChatGPT der.
   **Eu renomeio** para o nome indicado, nos dois lugares [D-19].

## O que NÃO vai para o ChatGPT (e por quê)

O briefing proíbe "imagens genéricas de IA" e "representações microestruturais cientificamente
incorretas". Por isso a divisão é esta:

| Tipo de figura | Quem faz | Por quê |
|---|---|---|
| **Micrografias reais** (leucita, dissilicato, zircônia, alumina, superfícies) | **Reuso** — seus PPTs + artigos CC BY (seção B) | IA não pode inventar microestrutura com barra de escala |
| **Fotos clínicas de restaurações** | **Reuso** dos seus PPTs + **fotos suas que faltam** (seção B3) | Foto clínica gerada por IA seria falsa |
| **Células unitárias da zircônia (m/t/c)** | **Eu desenho** a partir de dados cristalográficos (seção D) | IA não desenha cristalografia correta |
| **Gráficos** (stress–strain, Weibull, S–N, step-stress, resistência × tamanho de defeito, contração térmica) | **Eu desenho** em SVG a partir das equações/curvas das fontes (seção D) | IA erra eixos e números |
| **Esquemas de mecanismo** | **ChatGPT, com os 29 prompts abaixo** (seção C) | É onde a IA ajuda, desde que o prompt fixe o conteúdo |

Todas as figuras de terceiros vão para um site **público**. Por isso **nenhuma figura de artigo
"all rights reserved" é reusada**: as de Kelly 2017, Cesar 2017, Belli 2014, Zhang 2023, Nejat 2025 e
Aboushelib 2016 foram transformadas em prompts de esquema original. Só reuso direto de
**Denry & Holloway 2010** (CC BY 3.0) e **Al-Johani et al. 2024** (CC BY 4.0), com atribuição.

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
```

---

# B. FIGURAS QUE JÁ EXISTEM — reuso (não precisa gerar)

## B1. Dos seus PPTs (`Dental ceramics 2025.ppt` = A · `Dental Ceramics CadCam.pptx` = B)

| Slide-fonte | O que é | Uso na aula 13 | Observação |
|---|---|---|---|
| A 2–7 | fotos clínicas, facetas antes/depois | §1.1 Applications | suas fotos clínicas? [CONFIRMAR autoria] |
| A 83, B 1 | coroas/ponte cerâmica em modelo e em boca | §1.1 | idem |
| A 89 = B 32 | ponte de zircônia: usinada → sinterizada → estratificada | §1.1 monolithic × veneered | mostra a estrutura bicamada |
| A 59 | pó de porcelana: low/medium/high bisque (fotos) | §2.3 porosidade | conceitual, sem programa de queima |
| A 62–64 | SEM de porcelana em low/medium/high bisque (barras 1, 5, 10 µm) | §2.3 | fonte original [CONFIRMAR] |
| A 30 = A 54 | SEM de cristais de leucita (barra 1 µm) | §2.3 | fonte original [CONFIRMAR]; Denry Fig. 1 é alternativa CC BY |
| A 26 = A 74 | painel de 4 SEMs comparando tipos de cristal | §1.4 / §3.3 | fonte [CONFIRMAR] |
| A 18, A 69 | SEM do dissilicato (agulhas entrelaçadas) | §3.3 | **barra de escala com nome comercial no rodapé** — recortar |
| A 31, A 78, B 20 | SEM de grãos de zircônia | §4.3 | fonte [CONFIRMAR] |
| A 23 | SEM de superfície: glaze × brocas × polimento | §2.7 / §6.3 | parece de livro-texto (Phillips?) [CONFIRMAR direitos] |
| A 17 | fractografia de coroa | §5.1 | fonte [CONFIRMAR] |
| A 21 | sequência de crescimento de trinca (8 quadros) | §5.4 | fonte [CONFIRMAR] |
| A 43 | translucidez: foto de coroas + grade | §2.6 | ok |
| A 46 | fluorescência sob UV | §2.6 (curto) | ok |

**Figuras dos PPTs que NÃO recomendo reusar** (eu substituo por esquema novo, com correção):

- **A 33**: diagrama das fases da zircônia. Fundo escuro, origem web, sem dados → substituído por D3.
- **A 34 = A 81 = B 23**: esquema de tenacificação. P&B antigo, de literatura → substituído por C16/C17.
- **A 25 = A 55**: trinca A/B em 3D cinza → substituído por C13.
- **A 27–28 / A 75–76**: tamanho/distribuição em 3D vermelho → o conceito entra em C13 (2D).
- **A 22**: resistência × tamanho de trinca, de artigo → substituído por D4, calculado pela equação.
- **B 25**: LTD de Chevalier 2006 (copyright) → substituído por C20.
- **B 22**: células unitárias + "3–4,5% volumetric expansion" → substituído por D3.

**Erros nos PPTs antigos que não vão para a aula nova** (para você saber por que mudei):

- **"About 3 wt% of yttria"** (A 80, B 19) → o correto é **3 mol%** Y₂O₃ (Nejat 2025 p.165; ≈ 5 wt%).
  B 22 diz "3%–6% weight", também ambíguo.
- **Tabela A 67**: dá K_Ic de 3Y-TZP "5–10 MPa√m" sem método. Cesar 2017 (pp. 577, 582) mostra que K_Ic
  depende do método (indentação concorda com outros métodos em ~30% dos casos). Os valores vão com
  método declarado, ou não vão.
- **A 52 contra A 40**: "Can rapidly abrade tooth enamel" × "no strong correlation between hardness and
  enamel wear". O segundo está certo (Kyaw 2024 p.261) e vira o ponto central de §6.3.
- **A 71**: "compressive stresses from controlled crystallization" no dissilicato. Nejat 2025 trata isso como
  hipótese; entra como **proposed**, não como mecanismo demonstrado.
- **A 43**: "translucency is observed primarily among single-crystal materials" é confuso e sai. A
  explicação nova é por diferença de índice de refração e birrefringência (C9, C19, C27).

## B2. Dos artigos CC BY — eu recorto em alta resolução, com atribuição no slide

| Figura | Licença | O que mostra | Uso |
|---|---|---|---|
| Denry & Holloway 2010, Fig. 1 | CC BY 3.0 | cristal de leucita maclado (barra 2 µm) | §2.3 |
| Denry 2010, Fig. 3a | CC BY 3.0 | leucita com microtrincas (barra 5 µm) | §2.4, junto com C7 |
| Denry 2010, Fig. 2 | CC BY 3.0 | poro, inclusão e trinca numa cerâmica de cobertura | §5.1 |
| Denry 2010, Fig. 4 | CC BY 3.0 | bastões de dissilicato entrelaçados (barra 2 µm) | §3.3 |
| Denry 2010, Fig. 9 | CC BY 3.0 | dissilicato parcialmente × totalmente cristalizado, HT × LT (barras 1 µm) | §3.3 / §3.6 |
| Denry 2010, Fig. 7 | CC BY 3.0 | alumina tenacificada por zircônia, grãos A/Z (barra 10 µm) | §4.2 |
| Denry 2010, Fig. 10 | CC BY 3.0 | 3Y-TZP sinterizada a 1300 × 1500 °C, crescimento de grão (barras 1 µm) | §4.3 / §4.8 |
| Al-Johani et al. 2024, Fig. 1 | CC BY 4.0 | 6 montagens de ensaio de flexão (3 e 4 pontos, biaxiais) | §1.5 / §5.2 |
| Al-Johani 2024, Fig. 15 | CC BY 4.0 | 6 interações da luz com vitrocerâmica de silicato de lítio | §3.6 |

Exclusões: **Denry Fig. 3b** ("reproduced with permission"); **Al-Johani Figs 9, 12 e 17** (adaptadas de
terceiros); **Al-Johani Fig. 16** (eixo b* invertido). Os nomes comerciais nas tarjas das micrografias de
Denry serão recortados.

## B3. FALTAM — fotos/micrografias reais que só você pode fornecer

Coloque em `Assets\` se tiver; senão eu procuro alternativas CC BY na Etapa 1.

1. **Foto clínica de coroa metalocerâmica**, de preferência com a margem metálica/opaco visível.
2. **Foto clínica de coroa de zircônia monolítica.**
3. **Foto de inlay/onlay cerâmico** (o slide A 10 tem um ícone pequeno, insuficiente).
4. **Foto de chipping da porcelana de cobertura** sobre zircônia ou metal.
5. **Micrografia de zircônia 4Y ou 5Y** mostrando grãos cúbicos maiores. Seu laboratório tem?
6. **Micrografia de superfície de zircônia envelhecida (LTD)** ou de superfície monoclínica. Opcional.

---

# C. OS 29 PROMPTS PARA O CHATGPT

Numeração: `FIG 13.NN`. **Uma figura por slide** [D-21]. Proporção padrão **16:9 · 1920 × 1080 px**,
salvo indicação. Prioridade: **P1** = essencial (mecanismo central da aula) · **P2** = importante ·
**P3** = desejável.

---

## SECTION 1 — INTRODUCTION

### FIG 13.01 · Types of ceramic restorations — `restoration-types.png` · P1 · 16:9
**O aluno deve concluir:** reconhecer os cinco objetos que a aula vai citar o tempo todo — faceta, inlay,
onlay, coroa, prótese fixa de 3 elementos — antes de qualquer propriedade [D-22].

```
COMPOSIÇÃO: cinco painéis lado a lado, mesma escala, cada um com um rótulo em CAIXA ALTA acima e uma
linha de definição em sentence case abaixo.

Em todos os painéis: o dente natural é desenhado em contorno ardósia (#31465C) com preenchimento
branco; a RESTAURAÇÃO CERÂMICA é preenchida em teal (#0C7489) com 60% de opacidade, para se ver a
forma da peça sobre o dente. Gengiva como uma faixa simples em cinza-claro (#E3E9EF).

PAINEL 1 — "VENEER": incisivo central em vista vestibular E em corte sagital pequeno ao lado; a peça
cerâmica é uma lâmina fina cobrindo só a face vestibular.
  Linha abaixo: "Thin shell bonded to the facial surface"
PAINEL 2 — "INLAY": molar em vista oclusal; a peça ocupa uma caixa no centro da face oclusal, sem
cobrir cúspides.
  Linha abaixo: "Fills a cavity within the cusps"
PAINEL 3 — "ONLAY": molar em vista oclusal; a peça cobre o centro e UMA ou DUAS cúspides inteiras.
  Linha abaixo: "Replaces one or more cusps"
PAINEL 4 — "CROWN": molar em corte vertical (mésio-distal); a peça é uma capa que envolve toda a coroa
do dente preparado (o dente preparado aparece menor, em ardósia, dentro da capa).
  Linha abaixo: "Covers the whole prepared tooth"
PAINEL 5 — "3-UNIT FIXED DENTAL PROSTHESIS": três dentes em vista vestibular: dois dentes preparados
(pilares) nas extremidades e um espaço no meio; uma peça cerâmica única cobre os dois pilares e
preenche o espaço com um dente suspenso (pôntico). Rotule com setas: "abutment", "pontic", "abutment",
e uma seta curta para a união entre coroa e pôntico: "connector".
  Linha abaixo: "Replaces a missing tooth"
```
**Checklist:** 5 painéis · cerâmica sempre teal translúcido · os rótulos "abutment / pontic /
connector" presentes · nenhuma marca.

---

### FIG 13.02 · Monolithic and bilayer (veneered) restorations — `monolithic-vs-bilayer.png` · P1 · 16:9
**O aluno deve concluir:** "monolítica" é uma peça de um só material; "veneered/bilayer" tem uma
infraestrutura (metal ou zircônia) coberta por porcelana. Essa interface é onde a aula vai discutir
expansão térmica, tensões residuais e chipping.

```
COMPOSIÇÃO: três cortes verticais de uma coroa de molar, lado a lado, mesma escala. Em todos, o dente
preparado é ardósia (#31465C) em baixo-centro, e a camada de cimento é uma linha fina cinza-clara
(#E3E9EF) entre dente e coroa, rotulada "cement".

PAINEL 1 — "MONOLITHIC": a coroa inteira em teal (#0C7489), espessura uniforme. Seta rotulada
"single material (glass-ceramic or zirconia)".
PAINEL 2 — "METAL-CERAMIC": camada interna fina em ardósia sólido rotulada "metal framework"; sobre
ela uma camada muito fina branca-opaca com contorno ardósia rotulada "opaque layer"; por fora, a
camada mais espessa em cinza-claro (#E3E9EF) rotulada "veneering porcelain".
PAINEL 3 — "VENEERED ZIRCONIA": camada interna em teal (#0C7489) rotulada "zirconia framework (core)";
por fora, camada espessa em cinza-claro rotulada "veneering porcelain".

Nos painéis 2 e 3, destaque a INTERFACE entre infraestrutura e porcelana com uma linha tracejada
âmbar (#B45309) e um rótulo comum aos dois painéis: "framework–veneer interface".
```
**Checklist:** cimento rotulado nos 3 · camada opaca só no metalocerâmico · interface tracejada nos
painéis 2 e 3 · nenhuma cor fora da paleta.

---

### FIG 13.03 · Why ceramics are brittle: slip in a metal and in an ionic solid — `why-ceramics-brittle.png` · P1 · 16:9
**O aluno deve concluir:** num metal, planos de átomos deslizam (deformação plástica). Num sólido
iônico, deslizar uma distância atômica põe íons de mesma carga frente a frente → repulsão → o material
trinca em vez de deformar.

```
COMPOSIÇÃO: dois painéis lado a lado, cada um com dois estados (antes → depois) empilhados
verticalmente e uma seta de cisalhamento horizontal.

PAINEL ESQUERDO — "METAL"
  Estado de cima: grade regular de círculos iguais ardósia (#31465C), 5 fileiras × 8 colunas, imersos
  num fundo de pontinhos pequenos cinza-claros rotulado "electron sea".
  Seta horizontal grande sobre a fileira de cima: "shear stress".
  Estado de baixo: as duas fileiras de cima deslocadas uma posição atômica para a direita; a grade
  continua perfeita. Rótulo em teal (#0C7489): "Planes slide → plastic deformation".

PAINEL DIREITO — "IONIC CERAMIC"
  Estado de cima: grade alternada de círculos grandes cinza-claros com "−" (ânions) e círculos menores
  teal com "+" (cátions), padrão de xadrez, 5 × 8.
  A mesma seta: "shear stress".
  Estado de baixo: as duas fileiras de cima deslocadas UMA posição; agora "+" fica sobre "+" e "−"
  sobre "−". Desenhe pequenas setas duplas de repulsão carmim (#BE123C) entre íons de mesma carga e uma
  linha de trinca carmim ao longo do plano de deslizamento.
  Rótulo carmim: "Like charges meet → repulsion → fracture".

Embaixo, no centro, uma linha de texto ardósia: "Directional covalent bonds resist slip in the same way".
```
**Checklist:** só "+" e "−" como símbolos · depois do deslizamento, cargas iguais alinhadas no painel
iônico · nenhum número.

---

### FIG 13.04 · Three microstructural classes of dental ceramics — `ceramic-classes-microstructure.png` · P1 · 16:9
**O aluno deve concluir:** a classificação usada em toda a aula é microestrutural: quanto vidro e
quanto cristal, e de que forma. É a figura-âncora; volta nas seções 2, 3, 4 e 6.

```
COMPOSIÇÃO: três quadrados grandes lado a lado (vista de uma seção polida ampliada), mesma escala,
e, embaixo, três blocos de texto alinhados com eles: "GLASS-RICH", "GLASS + CRYSTALS", "NO GLASS".

QUADRADO 1 — rótulo acima: "PREDOMINANTLY GLASSY"
  Fundo cinza-claro (#E3E9EF) = vidro. Poucos cristais teal (#0C7489) pequenos, arredondados/
  poligonais, ESPARSOS (ocupam cerca de um quinto da área). Dois ou três poros pequenos (círculos
  brancos com contorno carmim).
  Abaixo: "Example: feldspathic porcelain"
QUADRADO 2 — rótulo acima: "GLASS-CERAMIC"
  Fundo cinza-claro = vidro residual. Cristais teal ALONGADOS (bastões, proporção comprimento:largura
  ~5:1), ENTRELAÇADOS em várias orientações, ocupando cerca de dois terços da área; o vidro aparece só
  nos espaços entre bastões.
  Abaixo: "Example: lithium disilicate"
QUADRADO 3 — rótulo acima: "POLYCRYSTALLINE"
  Mosaico de grãos poligonais teal compactos (tipo favo irregular), separados por linhas finas ardósia
  = contornos de grão; NENHUM cinza-claro (sem vidro). Rotule uma linha com seta: "grain boundary".
  Abaixo: "Examples: zirconia, alumina"

Legenda de cores pequena no canto inferior direito: quadrado cinza-claro "glass", quadrado teal
"crystalline phase".
```
**Checklist:** vidro some no 3º quadrado · bastões entrelaçados no 2º · só uma legenda de duas cores ·
nenhuma marca comercial.

---

## SECTION 2 — FELDSPATHIC PORCELAINS

### FIG 13.05 · Firing of porcelain powder: from particles to a dense glass — `porcelain-firing-porosity.png` · P3 · 16:9
**O aluno deve concluir:** a porcelana não "reage" ao queimar. As partículas de vidro amolecem e se
fundem (sinterização viscosa), e os poros que ficam presos viram defeitos. Conceitual; nada de
programa de queima (fora do escopo).

```
COMPOSIÇÃO: quatro quadros em sequência horizontal com setas entre eles, cada um uma vista em corte
ampliada.
1 "POWDER COMPACT": partículas angulosas cinza-claras (#E3E9EF) com contorno ardósia, encostadas, com
  espaços brancos entre elas.
2 "NECKS FORM": partículas arredondando, unidas por pescoços; espaços ainda conectados.
3 "PORES CLOSE": massa contínua cinza-clara com poros isolados ESFÉRICOS (círculos brancos, contorno
  carmim #BE123C); rótulo com seta para um poro: "trapped pore".
4 "DENSE GLASS": massa contínua com MUITO menos poros e menores; rótulo: "vacuum firing reduces porosity".
Embaixo do quadro 1 ao 4, uma seta comprida ardósia: "heat: glass particles soften and flow".
Nos quadros 3 e 4, pequenos cristais teal (#0C7489) distribuídos, rótulo em um deles: "leucite (if present)".
```
**Checklist:** poros esféricos nos quadros 3–4 · sem temperaturas · sem forno desenhado.

---

### FIG 13.06 · Leucite in glass: thermal contraction mismatch and microcracks — `leucite-cte-microcracks.png` · P1 · 16:9
**O aluno deve concluir:** a leucita contrai mais que o vidro ao resfriar (coeficiente de expansão
muito maior). Isso gera tensões em volta de cada cristal, microtrincas, e é também a ferramenta
usada para ajustar a expansão da porcelana à do metal.
**Fonte dos números:** Denry & Holloway 2010, p.2 (CC BY): leucita KAlSi₂O₆, transformação
cúbica→tetragonal a 625 °C com variação de volume de 1,2%, coeficiente de expansão 20–25 × 10⁻⁶/K; vidro
feldspático ~8,6 × 10⁻⁶/K; 15–25 vol% de leucita.

```
COMPOSIÇÃO: dois painéis lado a lado e uma faixa de dados embaixo.

PAINEL ESQUERDO — "AT FIRING TEMPERATURE"
  Um cristal de leucita teal (#0C7489) poligonal, grande, no centro de um quadrado de vidro cinza-claro
  (#E3E9EF). O cristal encosta perfeitamente no vidro em todo o contorno.
  Rótulos: "leucite crystal (KAlSi₂O₆)" e "glass matrix".
PAINEL DIREITO — "AFTER COOLING"
  O mesmo cristal agora LIGEIRAMENTE MENOR que o "buraco" no vidro (mostre o contorno original tracejado
  ardósia e o novo contorno do cristal um pouco para dentro).
  Setas finas carmim (#BE123C) radiais na interface apontando para fora do cristal: "tensile stress at
  the interface".
  Setas ardósia (#31465C) curvas, tangenciais, no vidro em volta do cristal: "tangential compression in the glass".
  Três microtrincas carmim curtas: duas dentro/na borda do cristal e uma no vidro próximo, rótulo:
  "microcracks".
FAIXA DE DADOS EMBAIXO (dois blocos de texto em fonte mono):
  "Leucite: CTE 20–25 × 10⁻⁶/K"      "Feldspathic glass: CTE ≈ 8.6 × 10⁻⁶/K"
  e no centro: "Leucite contracts more than the glass on cooling"
```
**Checklist:** valores exatamente "20–25 × 10⁻⁶/K" e "≈ 8.6 × 10⁻⁶/K" · contorno original tracejado ·
trincas em carmim.

---

### FIG 13.07 · Metal-ceramic: matched and mismatched thermal contraction — `metal-ceramic-residual-stress.png` · P1 · 16:9
**O aluno deve concluir:** a porcelana é formulada para contrair um pouco MENOS que o metal no
resfriamento. Assim ela fica em compressão leve, que é o lado seguro para um material frágil. Se
contrair mais que o metal, a porcelana fica em tração e trinca ou lasca.
**Fonte:** Denry 2010 p.2 ("contração térmica levemente menor que a do metal… porcelana sob leve compressão").

```
COMPOSIÇÃO: dois painéis lado a lado, cada um com um corte de uma barra bicamada (metal embaixo em
ardósia sólido #31465C; porcelana em cima em cinza-claro #E3E9EF), e embaixo de cada barra uma frase.

PAINEL ESQUERDO — "MATCHED: porcelain contracts slightly less than the metal"
  Dentro da porcelana, pares de setas horizontais ardósia apontando uma para a outra (compressão),
  rótulo: "mild residual compression in porcelain".
  Um pequeno ícone de check em teal (#0C7489) no canto.
PAINEL DIREITO — "MISMATCHED: porcelain contracts more than the metal"
  Dentro da porcelana, pares de setas horizontais carmim (#BE123C) apontando para fora (tração), rótulo:
  "residual tension in porcelain".
  Duas trincas verticais carmim partindo da superfície da porcelana e uma lasca se soltando na borda,
  rótulos: "cracking" e "chipping".
Sem números de CTE.
```
**Checklist:** setas de compressão em ardósia (esquerda), de tração em carmim (direita) · nenhum valor
numérico · metal sempre embaixo.

---

### FIG 13.08 · Light in porcelain: matched and mismatched refractive indices — `porcelain-light-scattering.png` · P2 · 16:9
**O aluno deve concluir:** a luz atravessa sem desvio onde o índice de refração (n) é igual dos dois
lados e se espalha onde n muda bruscamente. Leucita e vidro têm n parecidos (porcelana translúcida);
poros e partículas opacificadoras têm n muito diferentes (espalham, opacificam).
**Fonte:** Nejat 2025 p.156 (n da leucita próximo ao da matriz vítrea); Al-Johani 2024 p.17 (diferença
de n governa a transmissão); slides A 44–45 (opacificadores: óxidos de cério, titânio, zircônio).

```
COMPOSIÇÃO: três quadrados lado a lado (corte de uma placa fina), luz entrando por cima em feixe de
5 raios paralelos âmbar (#B45309).

QUADRADO 1 — "GLASS ONLY": vidro cinza-claro (#E3E9EF) uniforme; os 5 raios atravessam retos e saem
  embaixo. Rótulo: "uniform n → transmitted".
QUADRADO 2 — "GLASS + LEUCITE (similar n)": vidro com cristais teal (#0C7489) arredondados; os raios
  atravessam quase retos, com um ou dois desvios mínimos. Rótulo: "small Δn → mostly transmitted".
QUADRADO 3 — "GLASS + PORES / OPACIFIER PARTICLES (large Δn)": vidro com poros (círculos brancos,
  contorno carmim) e partículas pequenas ardósia densas; os raios batem e se espalham em muitas
  direções curtas, só um sai embaixo. Rótulo: "large Δn → scattered → opaque".
Uma linha embaixo dos três: "Scattering occurs where the refractive index (n) changes abruptly".
Não escrever valores de n.
```
**Checklist:** usar "n" e "Δn" exatamente · sem valores · raios em âmbar.

---

### FIG 13.09 · Hydrofluoric acid dissolves the glassy phase — `hf-etching-glass-phase.png` · P1 · 16:9
**O aluno deve concluir:** o HF dissolve a fase vítrea à base de sílica, não os cristais. O resultado é
uma superfície microrretentiva que depende de existir vidro, e por isso não funciona na zircônia.
O mecanismo químico vem no slide; a figura mostra a consequência microestrutural.

```
COMPOSIÇÃO: dois cortes de superfície lado a lado, cada um com "before" em cima e "after" embaixo
(4 quadros), e uma seta "HF" entre before e after.

COLUNA ESQUERDA — "FELDSPATHIC PORCELAIN"
  Before: superfície plana; vidro cinza-claro (#E3E9EF) com cristais de leucita teal (#0C7489)
  arredondados, esparsos.
  After: o vidro rebaixado e corroído entre os cristais, criando sulcos e cavidades irregulares;
  cristais de leucita expostos/salientes. Rótulo: "glass dissolved, leucite exposed".
COLUNA DIREITA — "LITHIUM DISILICATE"
  Before: superfície plana; bastões teal entrelaçados com vidro cinza-claro nos interstícios.
  After: vidro removido entre os bastões até certa profundidade, bastões expostos formando uma rede de
  microrretenções. Rótulo: "interstitial glass dissolved, crystals exposed".
Embaixo, faixa contínua em ardósia: "HF attacks the silica-based glass, not the crystals".
Um pequeno quadro à direita, separado por linha fina, rotulado "ZIRCONIA": grãos teal compactos, sem
vidro, "before" e "after" idênticos, com o rótulo carmim "no glass phase → HF does not etch".
```
**Checklist:** "after" mostra o vidro rebaixado · quadro da zircônia sem mudança · nenhuma concentração
de ácido nem tempo (fora do escopo).

---

### FIG 13.10 · Silane coupling between a silica-based ceramic and a resin — `silane-coupling.png` · P1 · 16:9
**O aluno deve concluir:** o silano é uma molécula bifuncional. Uma ponta forma ligação siloxano
(Si–O–Si) com a sílica da cerâmica; a outra (metacrilato) copolimeriza com o cimento resinoso.
**Fonte química:** estrutura do γ-MPS (3-methacryloxypropyltrimethoxysilane), padrão em livros-texto
[CONFIRMAR referência primária na Etapa 1]. Seus PDFs atuais não descrevem silano; isto é conhecimento
de livro-texto que vou ancorar.

```
COMPOSIÇÃO: diagrama horizontal em três zonas da esquerda para a direita.

ZONA 1 (esquerda) — "CERAMIC SURFACE": bloco vertical cinza-claro (#E3E9EF) com contorno ardósia;
  na face direita, uma fileira de grupos "Si–OH" desenhados como texto químico.
ZONA 2 (centro) — "SILANE": uma molécula desenhada em fórmula estrutural simplificada horizontal:
  à esquerda um átomo "Si" ligado a três "O" (um deles já ligado ao Si da superfície, formando
  "Si–O–Si"), depois uma cadeia "–(CH₂)₃–", depois um grupo éster "–O–C(=O)–", terminando em
  "C(CH₃)=CH₂".
  Acima da parte do Si: chave com rótulo "binds to ceramic (siloxane bond, Si–O–Si)".
  Acima da parte C=C: chave com rótulo "copolymerises with resin (methacrylate group)".
ZONA 3 (direita) — "RESIN CEMENT": rede de cadeias poliméricas desenhadas como linhas onduladas
  ardósia entrelaçadas; a dupla ligação C=C do silano conectada a uma dessas cadeias.
Uma nota pequena embaixo: "Silane = bifunctional coupling agent".
Use teal (#0C7489) para destacar a ligação Si–O–Si na interface e âmbar (#B45309) para destacar a
ligação ao polímero.
```
**Checklist:** fórmula com "(CH₂)₃" e "C(CH₃)=CH₂" corretos · ligação Si–O–Si na interface · sem
nome comercial.

---

## SECTION 3 — LITHIUM DISILICATE GLASS-CERAMICS

### FIG 13.11 · Crystallisation of a lithium disilicate glass-ceramic — `lithium-disilicate-crystallisation.png` · P1 · 16:9
**O aluno deve concluir:** a vitrocerâmica nasce vidro e é cristalizada por tratamento térmico
controlado. Num material CAD/CAM de dois estágios, o estado intermediário tem cristais de metassilicato
de lítio. O estado final tem ~70 vol% de bastões de dissilicato entrelaçados num vidro residual.
**Fontes:** Zhang 2023 p.247 (~40 vol% Li₂SiO₃ no estado intermediário; ~70 vol% de bastões no final);
Denry 2010 p.5 (Li₂SiO₃ forma-se antes do Li₂Si₂O₅; prensado ~65 vol%); Nejat 2025 p.156 (65–70 vol%;
P₂O₅ como agente nucleante). Sem temperaturas: são de fabricante.

```
COMPOSIÇÃO: três quadrados em sequência com setas grossas ardósia entre eles; abaixo de cada um, um
bloco de dados em fonte mono.

QUADRADO 1 — "GLASS": cinza-claro (#E3E9EF) uniforme, com pontinhos minúsculos teal espalhados
  rotulados "nuclei (P₂O₅ as nucleating agent)".
  Dados: "amorphous"
SETA 1 rotulada "nucleation + growth"
QUADRADO 2 — "INTERMEDIATE STATE": vidro cinza-claro com plaquetas pequenas teal-claras (#9CC9D3),
  finas e curtas, ocupando ~40% da área.
  Dados: "lithium metasilicate, Li₂SiO₃" / "≈ 40 vol% crystals"
SETA 2 rotulada "crystallisation heat treatment"
QUADRADO 3 — "FINAL GLASS-CERAMIC": bastões teal (#0C7489) longos e entrelaçados ocupando ~70% da
  área; vidro cinza-claro só nos interstícios. Rotule um bastão: "Li₂Si₂O₅ crystal" e um interstício:
  "residual glass".
  Dados: "lithium disilicate, Li₂Si₂O₅" / "≈ 70 vol% crystals"
Faixa embaixo: "Crystal fraction and morphology vary between formulations".
```
**Checklist:** fórmulas Li₂SiO₃ e Li₂Si₂O₅ exatas · "≈ 40 vol%" e "≈ 70 vol%" · nenhuma temperatura ·
nenhuma marca.

---

### FIG 13.12 · Crack path through three microstructures (crack deflection) — `crack-deflection-microstructures.png` · P1 · 16:9
**O aluno deve concluir:** num vidro a trinca segue reta. Cristais obrigam a trinca a desviar, e
bastões alongados e entrelaçados produzem um caminho mais tortuoso que partículas equiaxiais. Quanto
mais tortuoso o caminho, mais energia é consumida, e isso é tenacificação.
**Fonte:** Kelly 2017 p.1197 (tenacidade do dissilicato atribuída à deflexão pelos cristais alongados);
slides A 25–28 (seu conceito: tamanho e distribuição).

```
COMPOSIÇÃO: três quadrados lado a lado, mesma escala. Em cada um, uma trinca carmim (#BE123C) entra
pela borda superior e desce até a borda inferior.

QUADRADO 1 — "GLASS": cinza-claro uniforme; trinca RETA vertical. Rótulo: "straight path".
QUADRADO 2 — "GLASS + EQUIAXED CRYSTALS": cristais teal arredondados esparsos; a trinca desvia
  suavemente em volta de alguns cristais. Rótulo: "moderate deflection".
QUADRADO 3 — "INTERLOCKED ELONGATED CRYSTALS": bastões teal entrelaçados; a trinca em zigue-zague,
  contornando bastões, com uma pequena ramificação. Rótulos: "crack deflection" e "crack branching".
Embaixo, uma barra simples com três marcadores sob os quadrados, rotulada "crack path length",
crescendo do 1 para o 3, SEM números.
Frase final: "Longer, more tortuous path → more energy consumed → higher fracture toughness".
```
**Checklist:** trinca sempre carmim · zigue-zague só no 3º · sem números.

---

### FIG 13.13 · Crack bridging behind the crack tip — `crack-bridging-wake.png` · P2 · 16:9
**O aluno deve concluir:** a ponte de trinca é diferente da deflexão. Atrás da ponta da trinca,
cristais intactos atravessam a fenda e seguram as duas faces juntas, o que reduz a tensão que chega à
ponta (blindagem). Conceito de "wake".
**Fonte:** Kelly 2017 p.1197 (Fig. 4b, bridging; detritos de pontes deteriorando sob carga cíclica);
Al-Johani 2024 p.8 (shielding/bridging/R-curve). Denry 2010 só cita bridging para alumina, então a
aplicação ao dissilicato vai no slide como "reported/proposed".

```
COMPOSIÇÃO: um único painel largo. Uma trinca carmim (#BE123C) aberta em cunha horizontal vindo da
esquerda, terminando numa ponta aguda à direita. Microestrutura de fundo: bastões teal entrelaçados em
vidro cinza-claro.

Na região da trinca já aberta (à esquerda da ponta), 3 ou 4 bastões teal ATRAVESSAM a fenda, ligando
a face de cima à de baixo. Pequenas setas ardósia (#31465C) puxando as duas faces uma para a outra em
cada bastão.
Rótulos:
  - na ponta: "crack tip"
  - na região dos bastões: "crack wake"
  - num bastão: "bridging crystal"
  - chave sobre os bastões: "bridges hold the crack faces together → lower stress at the tip"
Um mini-quadro no canto superior direito, separado, "CRACK DEFLECTION (for comparison)": a mesma
trinca desviando em torno de um bastão, sem pontes.
```
**Checklist:** pontes ATRÁS da ponta · rótulos "crack wake" e "bridging crystal" · mini-quadro
separado.

---

## SECTION 4 — POLYCRYSTALLINE CERAMICS (ZIRCONIA)

### FIG 13.14 · Yttria stabilisation: Y³⁺ substitution and oxygen vacancies — `yttria-stabilisation-vacancies.png` · P2 · 16:9
**O aluno deve concluir:** Y³⁺ ocupa sítios de Zr⁴⁺. Para manter o cristal neutro, falta um O²⁻ para
cada dois Y³⁺ (vacância de oxigênio). É essa química que estabiliza a fase tetragonal/cúbica à
temperatura ambiente. "3Y" = 3 mol% Y₂O₃.
**Fonte:** Nejat 2025 p.165 (3Y/4Y/5Y = mol% de ítria). A estequiometria (1 vacância por 2 Y³⁺) é
química de defeitos padrão [CONFIRMAR referência primária na Etapa 1].

```
COMPOSIÇÃO: um painel quadrado 2D esquemático (NÃO cristalograficamente em escala; escreva no canto
inferior esquerdo em fonte pequena: "2D schematic, not to scale").
Grade regular de cátions (círculos médios teal #0C7489, rotulados "Zr⁴⁺" em dois deles) alternados
com ânions (círculos maiores cinza-claro #E3E9EF com contorno ardósia, rotulados "O²⁻" em dois deles).
Substitua DOIS cátions vizinhos por círculos âmbar (#B45309) rotulados "Y³⁺".
Entre eles, um sítio de ânion VAZIO desenhado como quadrado tracejado carmim (#BE123C), rotulado
"oxygen vacancy".
À direita da grade, um bloco de texto em fonte mono:
  "2 Y³⁺ replace 2 Zr⁴⁺"
  "→ 1 O²⁻ site left empty"
  "3Y = 3 mol% Y₂O₃"
```
**Checklist:** dois Y³⁺ e uma vacância · "3 mol% Y₂O₃" exato · aviso "not to scale".

---

### FIG 13.15 · Transformation toughening (1): stress at the crack tip triggers t → m — `transformation-toughening-trigger.png` · P1 · 16:9
**O aluno deve concluir:** a tensão de tração concentrada na ponta da trinca permite que grãos
tetragonais metaestáveis se transformem em monoclínicos. Primeiro passo do mecanismo.
**Fonte:** Denry 2010 pp.10–11; Silva 2017 p.134; Kelly 2017 p.1197 (Fig. 4c).

```
COMPOSIÇÃO: um painel largo. Mosaico de grãos poligonais teal (#0C7489) = tetragonais. Uma trinca
carmim (#BE123C) entra pela esquerda até o centro.
Em volta da ponta da trinca, um contorno em forma de rim/lóbulo (zona) tracejado ardósia, rotulado
"high tensile stress near the crack tip".
Dentro dessa zona, os grãos imediatamente à frente da ponta estão mudando de cor: alguns já âmbar
(#B45309) = monoclínicos, outros meio a meio (metade teal, metade âmbar).
Legenda no canto: teal = "tetragonal (t), metastable"; âmbar = "monoclinic (m), transformed".
Faixa embaixo: "Stress releases the constraint → t → m transformation in grains at the crack tip".
```
**Checklist:** apenas grãos na zona próxima à ponta mudam · legenda t/m · sem números.

---

### FIG 13.16 · Transformation toughening (2): volume expansion closes the crack — `transformation-zone-shielding.png` · P1 · 16:9
**O aluno deve concluir:** o grão monoclínico é ~4–5% maior em volume. Os grãos transformados ao longo
da trinca empurram as faces uma contra a outra (compressão), fazendo uma "zona de transformação" que
blinda a ponta. É tenacificação por transformação, diferente de reforço por partículas.
**Fontes:** Denry 2010 p.10 (aumento de volume ~4,5%); Nejat 2025 p.165 (grãos m ~4–5% maiores). O
slide usa "≈ 4–5%".

```
COMPOSIÇÃO: dois painéis.

PAINEL ESQUERDO (grande) — "TRANSFORMATION ZONE"
  Mosaico de grãos teal (tetragonais). Uma trinca carmim avançou da esquerda até perto da borda
  direita. Ao longo de toda a trinca (acima e abaixo), uma faixa contínua de grãos âmbar (#B45309,
  monoclínicos), LIGEIRAMENTE MAIORES que os teal, delimitada por linha tracejada ardósia, rotulada
  "transformation zone (wake)".
  Setas ardósia (#31465C) curtas, perpendiculares à trinca, apontando para dentro da fenda dos dois lados:
  "compressive stress closes the crack".
  Na ponta: "crack tip shielded".
PAINEL DIREITO (pequeno) — "ONE GRAIN"
  Um grão teal "t" → seta → o mesmo grão maior em âmbar "m", com linhas de geminação finas (twins) no
  interior. Texto: "volume increase ≈ 4–5%".
```
**Checklist:** "≈ 4–5%" exato · faixa âmbar ao longo de toda a trinca · setas de compressão em ardósia.

---

### FIG 13.17 · 3Y, 4Y and 5Y zirconia: phase content and microstructure — `zirconia-3y-4y-5y.png` · P1 · 16:9
**O aluno deve concluir:** mais ítria → mais fase cúbica (grãos maiores, opticamente isotrópicos, que
NÃO se transformam) → mais translucidez, menos tenacificação por transformação. As designações são
teores nominais; a microestrutura varia entre fabricantes.
**Fontes:** Nejat 2025 p.165 (4Y ≈ 75% t / 25% c; 5Y ≈ 50% t / 50% c; cúbica não tenacifica; mais
cúbica → mais translúcida, menos resistente); Silva 2017 p.135 (3Y-TZP > 90% tetragonal).

```
COMPOSIÇÃO: três quadrados lado a lado (mosaicos de grãos), cada um com um título, um pequeno gráfico
de barra horizontal empilhada embaixo, e duas setas de tendência atravessando os três por baixo.

QUADRADO 1 — "3Y": quase só grãos pequenos teal (#0C7489) = tetragonais.
  Barra: teal "> 90% t".
QUADRADO 2 — "4Y": grãos pequenos teal com alguns grãos MAIORES teal-claros (#9CC9D3) = cúbicos.
  Barra: teal "≈ 75% t" + teal-claro "≈ 25% c".
QUADRADO 3 — "5Y": metade da área em grãos maiores teal-claros e metade em grãos menores teal.
  Barra: teal "≈ 50% t" + teal-claro "≈ 50% c".
Legenda: teal = "tetragonal (t): transformable"; teal-claro = "cubic (c): not transformable, optically isotropic".
Setas de tendência embaixo (texto, sem números):
  seta para a direita âmbar: "translucency increases"
  seta para a direita carmim: "transformation toughening and strength decrease"
Nota pequena: "Nominal yttria content; phase fractions vary between manufacturers".
```
**Checklist:** porcentagens exatamente "> 90%", "≈ 75%/≈ 25%", "≈ 50%/≈ 50%" · grãos cúbicos maiores ·
nota de variação entre fabricantes presente.

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
  Mosaico de grãos teal (#0C7489), cada grão com um pequeno traço interno em direção diferente
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
superfície; mosaico de grãos teal (tetragonais) abaixo.

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

## SECTION 5 — FATIGUE OF DENTAL CERAMICS

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

## SECTION 6 — SUMMARY AND COMPARISON

### FIG 13.26 · Light through four ceramic microstructures — `optics-by-microstructure.png` · P1 · 16:9
**O aluno deve concluir:** a translucidez não depende de "quanto cristal", e sim de onde o índice de
refração muda. No vidro com leucita e no dissilicato, o n dos cristais é próximo do vidro. Na
zircônia 3Y, a birrefringência de cada grão espalha a luz. Na 5Y, os grãos cúbicos reduzem esse
espalhamento. A espessura amplifica tudo.
**Fontes:** Nejat 2025 pp.156, 165; Silva 2017 p.135; Al-Johani 2024 p.17.

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

**Prompts pendentes reunidos em `13-ceramics-figuras-lote2.md`.**
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

# D. FIGURAS QUE EU DESENHO EM SVG — dados e equações, sem IA

| # | Figura | Slide | Base |
|---|---|---|---|
| D1 | Curva tensão–deformação: cerâmica (linear até a fratura) × metal × polímero, esquemática | §1.2 | conceito (slide A 14) |
| D2 | Tetraedro SiO₄ + rede cristalina × rede vítrea 2D + cátions modificadores (Na⁺, K⁺) quebrando pontes (oxigênios não-pontantes) | §1.3 / §2.2 | modelo de Zachariasen [CONFIRMAR ref. na Etapa 1] |
| D3 | Zircônia: células unitárias monoclínica / tetragonal / cúbica + barra de temperatura (m → t a 1170 °C; t → c a 2370 °C) | §4.4 | dados cristalográficos [CONFIRMAR: CIFs + fonte de 2370 °C; 1170 °C = Denry p.10] |
| D4 | Resistência × tamanho do defeito, σ_f = K_Ic / (Y√c), para três valores de K_Ic com método declarado | §5.2 | equação de Cesar 2017 p.576 |
| D5 | Gráfico de Weibull: dois materiais com a mesma σ₀ e m diferente; marca de 63,2% | §5.3 | Al-Johani 2024 p.5 (definições) |
| D6 | Carga × tempo: estática, dinâmica (rampa) e cíclica | §5.5 | Kelly 2017 p.1199 (Fig. 6, redesenhada) |
| D7 | Curvas S–N: A (com limite de fadiga) × B (queda contínua), eixo log de ciclos 10⁰–10⁷ | §5.6 | Kelly 2017 p.1200 (Fig. 9, redesenhada) |
| D8 | Protocolo step-stress: degraus de carga × ciclos, com falha marcada | §5.6 | Kelly 2017 [CONFIRMAR página] |
| D9 | Tamanho do defeito e resistência residual ao longo do tempo (crescimento lento, falha súbita) | §5.4 | Kelly 2017 p.1193 (Fig. 1, redesenhada) |
| D10 | Contração térmica × temperatura: metal e porcelana do T_g até a ambiente (esquemático, sem valores) | §2.8 | Denry 2010 p.2 (conceito) |
| D11 | Distribuição de tensão na flexão: compressão em cima, tração embaixo (complementa Al-Johani Fig. 1) | §1.5 | conceito |

---

# E. Resumo por prioridade

- **P1 (essenciais, gerar primeiro): 22 figuras.** 13.01, 02, 03, 04, 06, 07, 09, 10, 11, 12, 15, 16, 17, 18, 19,
  20, 21, 23, 24, 26, 27, 29.
- **P2: 6 figuras.** 13.08, 13, 14, 22, 25, 28.
- **P3: 1 figura.** 13.05.
