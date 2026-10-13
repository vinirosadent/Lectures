# Aula 13 · Dental ceramics — prompts da subseção "Firing and the dental furnace" (lote 4)

3 figuras novas para a subseção de queima dentro de §2 (porcelana), decidida em 2026-10-13.
Cole o **BLOCO DE ESTILO** e depois **um** prompt. Salve em `1. Source\13. Ceramics\Assets\`; eu renomeio.

As curvas de ciclo (porcelana, cristalização do dissilicato, sinterização da zircônia) **não vão para o
ChatGPT**: eu desenho em SVG a partir dos dados. A curva da porcelana usa os valores do seu slide antigo
"Furnace cycle and shrinkage".

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

### FIG 13.30 · The porcelain furnace in cross-section — `porcelain-furnace-cross-section.png` · P1 · 16:9
**O aluno deve concluir:** o forno de porcelana é uma câmara isolada, aquecida por resistência elétrica,
com termopar e controlador programável que seguem uma curva temperatura × tempo, e uma bomba de vácuo
que retira o ar da câmara durante o aquecimento. A peça entra por baixo, numa plataforma que sobe.
**Fontes:** McCabe & Walls 9e (mufla aquecida eletricamente com pirômetro); Zychek, patente US 6,252,202
(bobina de resistência Fe–Cr–Al atrás de uma luva de quartzo; forno de carga inferior); Clinical Guide to
Applied Dental Materials, cap. 22 (controle computadorizado; vácuo de ~10% da pressão atmosférica).

```
COMPOSIÇÃO: um corte vertical 2D, frontal, de um forno de porcelana de CARGA INFERIOR, ocupando os
dois terços esquerdos; à direita, uma coluna de rótulos com linhas-guia finas. Sem perspectiva.

PARTES (de cima para baixo):
1. CÂMARA DE QUEIMA (mufla): um cilindro em corte, de paredes grossas em cinza-claro (#E3E9EF) com
   contorno ardósia, rotuladas "refractory insulation". O interior da câmara é branco.
2. Na face interna das paredes, uma bobina desenhada como zigue-zague contínuo em âmbar (#B45309),
   rotulada "resistance heating coil". Entre a bobina e o interior, uma linha dupla fina cinza,
   rotulada "quartz sleeve".
3. Uma haste fina ardósia entrando pela parede até perto do centro da câmara, terminando num ponto,
   rotulada "thermocouple". Dela sai um fio fino até uma caixa retangular ardósia à direita, com uma
   mini-tela mostrando uma curva temperatura × tempo (sem números), rotulada "programmable controller".
4. Um tubo saindo da câmara até um pequeno bloco ardósia rotulado "vacuum pump", com uma pequena
   válvula no caminho rotulada "vent valve".
5. PLATAFORMA: abaixo da câmara, um pedestal cinza-claro sobre uma haste vertical, com uma seta dupla
   vertical ao lado rotulada "motorised lift". Sobre o pedestal, uma bandeja em grade tipo favo
   rotulada "firing tray" e, sobre ela, uma pequena coroa em teal (#0C7489) apoiada num pino,
   rotulada "restoration on firing peg".
6. Abaixo da boca da câmara, a mesma plataforma desenhada TRACEJADA numa posição mais baixa,
   rotulada "drying position at the furnace entrance".
Pequenas setas onduladas em âmbar saindo da bobina para o interior: "radiant heat".
Sem números, sem marca, sem tela com valores.
```
**Checklist:** carga inferior (a plataforma sobe) · termopar ligado ao controlador · bomba de vácuo com
válvula · posição de secagem tracejada · nenhuma marca.

---

### FIG 13.31 · Why porcelain is fired under vacuum — `vacuum-firing-pore-collapse.png` · P1 · 16:9
**O aluno deve concluir:** quando os poros se fecham, o gás preso dentro deles resiste à contração.
Sob vácuo, os poros se fecham quase vazios. Ao liberar o vácuo com o vidro ainda viscoso, a pressão
atmosférica comprime os poros, que colapsam. Resultado: porosidade de ~4,6% (queima ao ar) para ~0,5%
(queima a vácuo).
**Fontes:** Clinical Guide to Applied Dental Materials, cap. 22 (mecanismo); McCabe & Walls 9e (4,6% → 0,5%);
Wadsworth et al., Proc R Soc A 2016 (o gás preso interrompe a densificação final).

```
COMPOSIÇÃO: duas fileiras horizontais (em cima = AIR FIRING; embaixo = VACUUM FIRING), cada uma com três
quadros em sequência e setas entre eles. Todos os quadros são cortes ampliados de porcelana: vidro em
cinza-claro (#E3E9EF), poros como círculos brancos com contorno ardósia.

FILEIRA DE CIMA — rótulo à esquerda: "AIR FIRING"
  Quadro 1 "pores close": vidro contínuo com 5 poros médios; dentro de cada poro, muitos pontinhos
    ardósia = gás; rótulo "air trapped at 1 atm".
  Quadro 2 "holding": os mesmos poros quase do mesmo tamanho; setas curtas carmim (#BE123C) de dentro
    para fora em cada poro: "gas pressure resists shrinkage".
  Quadro 3 "after firing": poros ainda presentes, tamanho médio; rótulo "residual porosity ≈ 4.6%".
FILEIRA DE BAIXO — rótulo à esquerda: "VACUUM FIRING"
  Quadro 1 "pores close under vacuum": os mesmos 5 poros, com pouquíssimos pontinhos de gás;
    rótulo "little gas inside".
  Quadro 2 "vacuum released": setas ardósia grossas de FORA para dentro em volta do bloco, rótulo
    "atmospheric pressure restored while the glass is still viscous"; poros encolhendo.
  Quadro 3 "after firing": apenas 2 poros minúsculos; rótulo "residual porosity ≈ 0.5%".
Faixa inferior: "Gas trapped in closed pores limits densification; firing under vacuum removes it".
```
**Checklist:** "≈ 4.6%" e "≈ 0.5%" exatos · gás denso só na fileira de cima · setas de pressão externa
só no quadro 2 de baixo.

---

### FIG 13.32 · Cooling a veneered zirconia crown: temperature gradient — `veneered-zirconia-cooling-gradient.png` · P2 · 16:9
**O aluno deve concluir:** no resfriamento rápido, a superfície da porcelana esfria antes do interior
junto à zircônia. A diferença de temperatura através da coroa passa de 100 °C e gera tensão residual na
porcelana. Resfriar lentamente até a transição vítrea reduz o gradiente, sem eliminá-lo. O benefício
clínico contra o chipping ainda não está demonstrado.
**Fontes:** Tholey, Swain & Thiel, Dent Mater 2011 (>100 °C no resfriamento rápido; até 88 °C no lento, até
~600 °C = Tg); de Lima et al., J Mech Behav Biomed Mater 2022 (sem efeito do protocolo de resfriamento na
resistência ao chipping).

```
COMPOSIÇÃO: dois cortes verticais idênticos de uma coroa de molar estratificada, lado a lado.
Em ambos: núcleo de zircônia em teal (#0C7489) sobre um troquel ardósia; porcelana de cobertura por fora.
A porcelana é preenchida com FAIXAS CONCÊNTRICAS sólidas (isotermas), da superfície externa em
cinza-claro (#E3E9EF) = mais fria, até junto ao núcleo em âmbar (#B45309) = mais quente.

PAINEL ESQUERDO — "FAST COOLING": 4 faixas bem marcadas, alternando de cinza-claro (fora) a âmbar
  (dentro), com faixa âmbar larga. Seta dupla atravessando a porcelana rotulada "ΔT > 100 °C".
  Três pequenas setas carmim (#BE123C) na superfície: "residual stress in the veneer".
PAINEL DIREITO — "SLOW COOLING TO Tg": apenas 2 faixas (cinza-claro por fora, âmbar fina por dentro),
  contraste visivelmente menor que no painel esquerdo. Seta dupla rotulada "ΔT reduced (≤ 88 °C)".
Faixa inferior: "Slow cooling lowers the gradient; its effect on clinical chipping is not established".
```
**Checklist:** "ΔT > 100 °C" e "≤ 88 °C" exatos · zircônia em teal · frase final presente.
