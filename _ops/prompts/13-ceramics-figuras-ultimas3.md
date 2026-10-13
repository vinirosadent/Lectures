# Aula 13 · Dental ceramics — os 3 prompts que faltam

Cole o **BLOCO DE ESTILO** e, em seguida, **um** dos prompts. Salve os PNGs em
`1. Source\13. Ceramics\Assets\`; eu renomeio.

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
