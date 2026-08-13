# Aula 08 · Glossário de propriedades + dossiê de fontes primárias

> **Para que serve este arquivo.** O Vinicius decidiu [D-08.4] que a aula abre com um **glossário de
> propriedades** — o aluno precisa saber o que é recuperação elástica, resistência, estabilidade dimensional
> e acurácia *antes* de qualquer comparação entre materiais. E decidiu [D-08.3] que nenhum número vai à tela
> sem fonte rastreável. Este documento resolve as duas coisas: para cada propriedade, a **definição
> normativa**, o **requisito numérico**, o **exemplo** e a **fonte**.
>
> Montado em 2026-08-13 a partir do texto público da ISO/FDIS 4823:2025 (arquivado em
> `01-iso-4823-extract.md`), de literatura peer-reviewed (PubMed e Consensus) e de buscas web.
>
> **Auditado em 2026-08-13** por verificação independente de cada número e cada referência contra o PubMed e
> contra a FDA guidance *"Dental Impression Materials — Performance Criteria for Safety and Performance
> Based Pathway"* (30 set 2024), que reproduz os critérios da ISO 4823. As correções da auditoria já estão
> aplicadas; os pontos que a auditoria deixou em aberto estão marcados `[VERIFY]`.
>
> Nível: 🟢 norma ou peer-reviewed usável direto · 🟡 peer-reviewed com ressalva · 🔴 não usar como número.

---

## 1. De onde vêm as definições

| Norma | Escopo | Papel nesta aula |
|---|---|---|
| **ISO 4823** *Dentistry — Elastomeric impression and bite registration materials* | Elastômeros (polissulfeto, silicones de condensação e de adição, poliéter) e materiais de registro oclusal | **Fonte principal das definições e dos limites.** Texto consultado e arquivado em `01-iso-4823-extract.md` |
| **ISO 21563:2021** *Dentistry — Hydrocolloid impression materials* | Alginato e ágar | Requisitos do alginato. Texto não é público; os valores abaixo vêm de literatura que os cita explicitamente |
| **ISO 5725-1:2023** *Accuracy (trueness and precision) of measurement methods and results* | Metrologia geral | Define **accuracy = trueness + precision**. É a razão pela qual "acurácia" e "reprodução de detalhe" não são a mesma coisa |
| **ISO 20896-1:2019** | Métodos para avaliar acurácia de dispositivos de impressão digital | Só como referência de fronteira — o digital está fora desta aula [D-08.2] |

> `[VERIFY]` **Edição da ISO 4823.** O documento consultado é o **FDIS** (votação encerrada em 2025-05-20),
> anunciado como 6ª edição substituindo a ISO 4823:2021; as mudanças declaradas são de embalagem/instruções
> e correções editoriais, **não da Tabela 1**. O ISO Update de set/2025 lista a **4823:2025** como publicada
> e a 2021 como retirada, mas a página indexada da iso.org ainda mostrava 4823:2021. Confirmar na biblioteca
> da NUS antes de imprimir o ano no slide.

---

## 2. O glossário — sete propriedades, com definição, número e exemplo

### 2.1 Consistency (consistência)

> **Definição ISO 4823, 3.1:** *"degree of firmness with which particles of a material, prepared for use,
> cohere so as to allow the material to flow, or resist flow"*.

Não é uma propriedade do material curado — é do material **recém-misturado**, e é o que define o **tipo**:

| Tipo | Consistência | Diâmetro do disco de teste (mm) |
|---|---|---|
| 0 | putty | ≤ 35 |
| 1 | heavy-bodied | ≤ 35 |
| 2 | medium-bodied | 31 – 41 |
| 3 | light-bodied | ≥ 36 |
| B | registro oclusal | — |

**Por que abre o glossário:** o tipo determina os requisitos que o material tem de cumprir. Um putty é
julgado por um padrão de reprodução de detalhe **quase quatro vezes mais frouxo** que um light-body
(75 µm × 20 µm) — não por ser um material pior, mas porque não é ele quem registra a linha de término.

*Fonte:* 🟢 ISO 4823, 3.1, Cláusula 4 e Tabela 1 (`01-iso-4823-extract.md`); confirmado na FDA guidance 2024.

---

### 2.2 Working time e setting time

> **Definição ISO 4823, 3.11 (working time):** *"period of time beginning with the commencement of mixing
> and ending before the material being mixed has begun to exhibit elastic properties that prevents the
> material from being manipulated as required to form an impression or a mould having the desired surface
> detail and dimensional characteristics"*.

O ponto conceitual: o working time **termina quando o material começa a se comportar como sólido elástico**,
não quando ele "endurece". A norma não fixa um valor — exige que o material cumpra o que o fabricante
declara (5.4).

`[VERIFY]` **Sem fonte citável ainda.** O ranking do material histórico (polissulfeto com os tempos mais
longos, seguido de silicones e poliéter) **não foi confirmado em fonte primária**. Não levar números de
working/setting time para a tela até resolver — é a pendência nº 1 da lista da seção 5.

*Fonte:* 🟢 ISO 4823, 3.11 e 5.4.

---

### 2.3 Detail reproduction (reprodução de detalhe)

**O que se mede:** a menor linha gravada num bloco-teste metálico que o material reproduz **contínua** em
toda a extensão. Não é uma medida de precisão dimensional — é de **capacidade de escoar contra a superfície
antes de gelificar**.

| Tipo | Linha que precisa reproduzir |
|---|---|
| 0 (putty) | 75 µm |
| 1 (heavy) | 50 µm |
| 2 (medium) | **20 µm** |
| 3 (light) | **20 µm** |
| Alginato (ISO 21563) | **50 µm** |

**Exemplo com escala real, para o slide:** 20 µm é cerca de **um terço da espessura de um fio de cabelo
humano** (≈70 µm).

**Segunda etapa que o glossário deve incluir — compatibility with gypsum.** A norma tem um requisito
*separado* (5.7, Tabela 1) para a linha reproduzida **no gesso vazado contra o molde**: 75 µm para o tipo 0
e **50 µm** para os tipos 1, 2 e 3. Ou seja: um light-body que registra 20 µm no molde só precisa entregar
50 µm no modelo. **O detalhe é perdido na transferência**, e a norma já assume isso. É um slide excelente,
e prepara diretamente a Aula 09 (gesso).

**A distinção que o glossário existe para fazer:** um material pode reproduzir a linha de 20 µm **e ainda
assim** produzir um troquel dimensionalmente errado. Reprodução de detalhe é sobre **superfície**;
acurácia é sobre **distância entre dois pontos**. São medidas independentes, com testes independentes na
mesma norma (7.4 × 7.5).

*Fontes:* 🟢 ISO 4823, 5.5, 5.7, 7.4 e Tabela 1 · 🟢 ISO 21563:2021, via Beuter et al., *Sci Rep* 2024
(molde com linhas de 20, 50 e 75 µm; critério de aprovação = linha de 50 µm contínua).

---

### 2.4 Elastic recovery (recuperação elástica)

> **Definição ISO 4823, 3.2:** *"ability of an elastomer to return to its original shape when a compression
> load is removed"*.

**Requisito normativo:**

| Material | Mínimo |
|---|---|
| Elastômeros, **tipos 0, 1, 2 e 3** (ISO 4823) | **≥ 96,5 %** |
| Alginato (ISO 21563:2021) | **≥ 95 %** |

> Atenção ao escopo: o **tipo B** (registro oclusal) **não** é avaliado por recuperação elástica — ele tem
> requisitos próprios de *compression set* (≤ 0,1 mm) e dureza Shore A (≥ 50).

**Como se mede (ISO 4823, 7.7):** o corpo de prova é comprimido, a carga é removida e a mudança de
comprimento é medida. Na literatura que segue a norma, a deformação aplicada é de **30 %** para elastômeros
(Lawson et al. 2008) e de 20 % por 5 s para alginato (Beuter et al. 2024, seguindo a ISO 21563).

**O complemento é a deformação permanente:** recuperação de 96,5 % significa 3,5 % de **deformação
permanente**. São a mesma medida vista de dois lados — vale dizer isso explicitamente no slide, porque os
livros usam os dois termos como se fossem propriedades diferentes.

**Exemplo aritmético para a tela** *(cálculo ilustrativo com premissas didáticas declaradas — não é dado
medido, e os 20 % não são o valor da norma, que usa 30 %)*: uma coroa com ~8 mm de diâmetro, cujo retentivo
obriga o material a se deformar 20 % ao ser removido.

| Recuperação elástica | Deformação permanente | Erro dimensional sobre 8 mm |
|---|---|---|
| 96,5 % (o mínimo da norma) | 3,5 % × 20 % = 0,7 % | ≈ **56 µm** |
| 99,5 % (um PVS de bom desempenho) | 0,5 % × 20 % = 0,1 % | ≈ **8 µm** |

A diferença entre os dois materiais é de ~48 µm. Contra o valor historicamente adotado de **120 µm** de
discrepância marginal máxima aceitável, isso é **cerca de 40 % de todo o orçamento de erro** — e é isto que
responde à pergunta do aluno *"3,5 % não é pouco?"*.

> **Duas honestidades obrigatórias neste slide.**
> 1. As premissas (8 mm, 20 %) são escolhas didáticas. Mostrar a conta, não só o resultado.
> 2. O que se calcula aqui é um **erro dimensional da ordem de**, não uma discrepância marginal medida —
>    erro de diâmetro e gap marginal vertical são grandezas diferentes.
>
> **E uma ressalva sobre o próprio critério de 120 µm** (ver 2.9): ele é o valor historicamente adotado,
> não um consenso.

*Fontes:* 🟢 ISO 4823, 3.2, 5.8, 7.7 e Tabela 1 · 🟢 ISO 21563:2021 (95 %), citado verbatim em Beuter et
al., *Sci Rep* 2024 · 🟢 Lawson et al., *J Prosthet Dent* 2008 (os 30 % da norma) · 🟢 Singer et al.,
*BMC Res Notes* 2022 (confirma o requisito de 96,5 % em uso).

---

### 2.5 Strain in compression (deformação sob compressão) — a "flexibilidade"

> **Definição ISO 4823, 3.10:** *"flexibility/stiffness property ranges of the materials that determines
> whether the set materials, when formed as impressions, can be removed from the mouth without injury to the
> impressed oral tissues and have adequate stiffness in the more flexible portions of impressions to resist
> deformation when model-forming products are poured against them"*.

Esta definição é a mais didática das sete, porque a própria norma explicita **os dois lados do compromisso**:

- **flexível demais** → o molde se deforma quando o gesso é vazado contra ele;
- **rígido demais** → não sai da boca sem machucar o tecido (e sem se distorcer).

| Tipo | Faixa exigida |
|---|---|
| 0 e 1 (putty, heavy) | 0,8 – 20,0 % |
| 2 e 3 (medium, light) | 2,0 – 20,0 % |

Note que é uma **faixa, com mínimo e máximo** — a única propriedade da tabela onde ser "melhor" não é ser
maior. Isso é um bom slide.

**Exemplo:** o poliéter é o mais rígido dos elastômeros — é o material que os alunos vão achar difícil de
remover em prótese sobre múltiplos pilares, e é a mesma rigidez que o torna resistente à deformação durante
o vazamento. Medidas comparativas: Lu, Nguyen & Powers 2004 — os poliéteres "moles" mais recentes têm
**maior strain in compression** e **menor resistência à tração** que os silicones de adição hidrofílicos, e
consistências heavy-body têm maior tear e maior resistência à tração que as light-body. Pandey et al. 2019
encontraram o mesmo padrão comparando PVS, poliéter e o híbrido vinil-polieter-silicone: strain sob
compressão maior no poliéter, recuperação elástica maior no PVS.

*Fontes:* 🟢 ISO 4823, 3.10, 5.9, 7.8 e Tabela 1 · 🟢 Lu H, Nguyen B, Powers JM, *J Prosthet Dent* 2004 ·
🟡 Pandey et al., *Contemp Clin Dent* 2019.

---

### 2.6 Tear strength / tear energy (resistência ao rasgamento)

**Ponto importante e contraintuitivo:** a **ISO 4823 não exige resistência ao rasgamento** dos elastômeros —
ela não está entre os requisitos da Cláusula 5 nem na Tabela 1. Quem impõe um mínimo é a norma do
**hidrocoloide**:

| Material | Requisito |
|---|---|
| Elastômeros (ISO 4823) | **nenhum requisito normativo** |
| Alginato (ISO 21563:2021) | **≥ 0,38 N/mm** |

> Verificado de forma independente: a lista de ensaios da ISO 4823 reproduzida na FDA guidance de set/2024
> é consistência, reprodução de detalhe, mudança dimensional linear, compatibilidade com gesso, recuperação
> elástica e strain in compression (tipos 0–3); mudança dimensional linear, compression set e dureza Shore A
> (tipo B). **Tear strength não aparece.**

Isto é excelente material de aula: mostra que "estar conforme a norma" e "ser bom clinicamente" não são a
mesma afirmação, e prepara o outcome de **apreciação crítica das alegações do fabricante**.

**Valores medidos:**

- Alginato convencional: **0,79 ± 0,09 N/mm** — pouco mais que o dobro do mínimo (Beuter et al. 2024).
- **Ranking entre elastômeros** (teste trouser-leg, energia de rasgamento): **polissulfeto > silicone de
  adição > silicone de condensação**, com o polissulfeto no topo e o de condensação na base — Keck &
  Douglas, *J Dent Res* 1984. **Esta é a fonte primária do ranking que aparece nos slides antigos.**
  ⚠️ O estudo testou quatro famílias, incluindo **poliéteres**, mas o ranking publicado no abstract posiciona
  apenas as três acima — **não afirmar onde o poliéter cai** sem consultar o texto completo.

**Onde importa clinicamente:** áreas interproximais finas e sulco gengival — exatamente onde a camada de
material é mais delgada. É por isso que a resistência ao rasgamento não é uma propriedade "de bancada": ela
decide se a margem sobrevive à remoção.

**Dependência da velocidade** — um ponto de mecanismo que vale um slide: a resistência ao rasgamento é
**viscoelástica**, ou seja, depende da velocidade de aplicação da carga. Quanto mais rápida a remoção, maior
a resistência ao rasgamento medida — o que dá base física à instrução clínica de remover o molde com **um
movimento único e rápido**, que os alunos costumam receber como folclore.
`[VERIFY]` A afirmação está sustentada, mas **só por revisão narrativa** (Levartovsky et al. 2011, que
afirma literalmente *"the faster the impression is loaded and pulled out, the higher the tear strength is"*).
A fonte experimental primária ainda não foi localizada.

*Fontes:* 🟢 ISO 4823, Tabela 1 (ausência de requisito) + FDA guidance 2024 · 🟢 Keck & Douglas,
*J Dent Res* 1984;63(2):155-7 · 🟢 Beuter et al., *Sci Rep* 2024 · 🟡 Levartovsky et al. 2011 (revisão).

---

### 2.7 Linear dimensional change e dimensional stability

**São duas coisas diferentes e é aqui que os alunos se perdem.**

**Linear dimensional change** é o **teste da norma**: mede-se uma linha no bloco-teste e a mesma linha no
molde depois de **24 h** a (23 ± 2) °C.

| Todos os tipos (0, 1, 2, 3 e B) | **máximo 1,5 %** |
|---|---|

**Dimensional stability** é o **comportamento ao longo do tempo** — não é um requisito com número único, é
a curva. E a curva tem sinal e mecanismo próprios para cada família:

| Família | Mecanismo | Direção |
|---|---|---|
| Silicone de adição | sem subproduto | mínima, estável por dias |
| Poliéter | sem subproduto, mas **sorve água** | contrai pouco; **expande** se armazenado úmido ou em desinfetante prolongado |
| Polissulfeto | libera **água** | contrai progressivamente; troquéis tendem a ficar **maiores** que o dente |
| Silicone de condensação | libera **etanol** | a maior contração das quatro famílias |
| Alginato | **sinerese** (perde água) e **embebição** (ganha) | contrai ou expande conforme a umidade do ambiente |

**Evidência primária da curva no tempo:**

- **Williams, Jackson & Bergman 1984** (11 materiais; vazamento imediato, 1 h, 4 h e 24 h): **a maior
  acurácia sempre no vazamento imediato**; todos os silicones de adição estáveis em todos os tempos; o
  silicone de condensação perde acurácia rapidamente com vazamento tardio; polissulfetos só bons se vazados
  imediatamente — **com a exceção do Omniflex, estável até 4 h**; o poliéter (Impregum) **expandiu** durante
  o armazenamento.
- **Marcinak et al. 1980:** polissulfetos produzem troquéis **maiores** que o dente, aumentando com o tempo
  de armazenamento; um poliéter produziu troquéis menores até 4 h e **maiores** até 24 h; hidrocoloide
  reversível, maiores até 30 min e depois queda rápida.
- **Khan et al. 2020** (até 15 dias): o **silicone de condensação** reduz significativamente já a partir de
  30 min e permanece significativamente alterado até 15 dias; o **silicone de adição** mostrou diferença
  significativa nas janelas de 2 a 12 h; **apenas o poliéter** não diferiu significativamente do troquel
  mestre em nenhum tempo. Conclusão dos autores: o poliéter teve as menores mudanças, embora as diferenças
  fossem pequenas o bastante para serem consideradas clinicamente aceitáveis.
- **Alginato:** Walker et al. 2010 — o alginato convencional **contrai continuamente**, enquanto os
  "extended-storage" **expandem** com o tempo.

> **Consequência de ensino (a espinha da aula aparece aqui):** o número da norma (1,5 % em 24 h) é um
> **portão de qualidade**, não uma descrição do comportamento clínico. Dois materiais podem passar no mesmo
> teste e ter curvas de deriva opostas. É por isso que "quando vazar" é uma decisão de material, não de
> agenda do laboratório.

*Fontes:* 🟢 ISO 4823, 5.6, 7.5, Tabela 1 · 🟢 Williams PT, Jackson DG, Bergman W, *J Prosthet Dent* 1984 ·
🟢 Marcinak CF, Young FA, Draughn RA, Flemming WR, *J Dent Res* 1980 · 🟡 Khan SA et al.,
*J Int Soc Prev Community Dent* 2020 (um material por família) · 🟢 Walker MP et al., *Angle Orthod* 2010.

---

### 2.8 Accuracy — trueness + precision

> **ISO 5725-1:** **accuracy** é o termo guarda-chuva e tem **dois componentes**.
> **Trueness** = proximidade entre a **média** de um grande número de medidas e o valor de referência.
> **Precision** = proximidade entre as medidas **entre si**.

Esta é a definição que o aluno tem de levar para o resto do curso — reaparece em CAD/CAM, em escaneamento,
em ensaios mecânicos e em degradação.

**Exemplo visual clássico (o alvo):** um material com **alta trueness e baixa precision** acerta na média mas
espalha; um com **alta precision e baixa trueness** repete o mesmo erro com fidelidade. Um molde que contrai
0,5 % **toda vez** é **preciso e não verdadeiro** — e, por ser sistemático, é o único dos dois erros que
poderia, em princípio, ser compensado.

**Por que entra logo no glossário:** sem esta distinção, a frase "o silicone de adição é o mais acurado" não
tem conteúdo. Com ela, a afirmação vira testável: mais verdadeiro (menor deriva sistemática) **e** mais
preciso (menor dispersão entre moldes).

*Fontes:* 🟢 ISO 5725-1:2023 · referência de fronteira: ISO 20896-1:2019 para dispositivos digitais.

---

### 2.9 Nota obrigatória — o critério de 120 µm **não é consenso**

O valor de 120 µm de discrepância marginal máxima aceitável vem de **McLean & von Fraunhofer 1971**, um
estudo *in vivo* de **espessura de película de cimento** em cerca de 1000 restaurações. Duas ressalvas que
precisam estar na tela quando o número for usado:

1. É uma medida de **espessura de cimento**, não um desfecho clínico de sobrevivência.
2. **A literatura não tem consenso sobre o limiar.** Revisões recentes afirmam explicitamente que não existe
   um valor com base clínica ou de evidência estabelecida, com propostas entre **50 e 200 µm**.

Apresentar como *"o critério historicamente adotado, e por que ele é discutível"* — não como constante.
Coerente com [D-08.3], e ele próprio vira um bom exemplo de apreciação crítica da literatura.

*Fontes:* 🟢 McLean JW, von Fraunhofer JA, *Br Dent J* 1971;131(3):107-11 · 🟢 Yeo IS, Yang JH, Lee JB,
*J Prosthet Dent* 2003 (uso explícito do critério de 120 µm).

---

## 3. Correções ao material histórico — coisas que o slide antigo diz e a literatura não sustenta

Estas são as intervenções científicas mais importantes desta aula. **Não reproduzir os slides antigos sem
tratá-las.**

### 3.1 "Luvas de látex inibem a presa do silicone de adição" — verdadeiro, mas mais estreito do que se ensina

O mecanismo é real e específico: compostos de enxofre envenenam o catalisador de ácido cloroplatínico. Mas a
evidência é **heterogênea e dependente da marca da luva**:

- **Baumann & Klapper 1992** — 4 silicones de adição × 7 luvas: **alguns** silicones de adição mostraram
  inibição quase completa; os de condensação, nenhuma.
- **Matis, Valadez & Valadez 1997** — a proporção de putties que presa em 5 min cai de 100 % (mão nua) para
  88 %, 50 % ou 38 % **conforme a marca da luva**; existem luvas que não interferem.
- **Machado & Guedes 2011** — **240 amostras, nenhuma reação**: nem os fios retratores manipulados com luva
  de látex, nem os hemostáticos à base de sulfato inibiram a presa de três silicones de adição.
- **de Camargo, Chee & Donovan 1993** — medicamentos de fio retrator (sulfato de alumínio, sulfato férrico)
  **não** causaram inibição.

**Formulação defensável para a tela:** o mecanismo é o envenenamento do catalisador de platina por enxofre;
a magnitude clínica depende da luva específica e do material específico, e os agentes hemostáticos à base
de sulfato — historicamente acusados — **não foram confirmados como causa**. A regra prática que sobrevive
à evidência é sobre **contato direto da luva com o putty**, não sobre o fio retrator.

**Um culpado mais bem documentado:** materiais de restauração provisória. **Al-Sowygh 2014** testou 5 PVS
(Virtual, Aquasil, Genie, Correct Plus, Express) e 1 poliéter (Impregum) contra 6 provisórios: **todos os 5
PVS** tiveram inibição significativa (p<0,001) com **todos** os provisórios **exceto Trim Plus**; o poliéter
foi praticamente imune; e **só H₂O₂ a 3 %** foi eficaz entre os métodos de descontaminação testados. Este é
um achado clinicamente mais acionável que a história das luvas, e não está no material antigo.

### 3.2 O poliéter com dois números de contração incompatíveis

O material histórico dá 0,30 % em 24 h num slide e −0,07 a −0,10 % noutro, sem declarar as condições. A
literatura resolve o aparente conflito: o poliéter **contrai pouco por polimerização** e **expande por
sorção de água** — o valor depende inteiramente de como foi armazenado. Não reproduzir nenhum dos dois
números isolados; ensinar o **mecanismo com sinal**.

### 3.0 Strain in compression — DOIS erros corrigidos em 2026-08-13

O Vinicius questionou a figura de *too flexible* e a checagem confirmou que **eu havia escrito o
mecanismo errado**, e que um segundo slide repetia um mito refutado na literatura. Registrado aqui para
não voltar.

#### (a) "A moldagem se curva sob o PESO do gesso" — FALSO

A conclusão (modelo maior) está certa; a **causa** estava errada.

| Grandeza | Valor |
|---|---|
| Pressão de uma coluna de 30 mm de pasta de gesso (ρ ≈ 2100 kg/m³) | **≈ 0,6 kPa** |
| Tensão aplicada no ensaio de strain in compression da própria norma | **≈ 0,1 MPa** — cerca de **160×** mais |
| Deformação resultante do peso, no material mais mole que a ISO admite (E secante ≈ 0,5 MPa) | ≈ 0,12%, ou **poucos µm** |
| A mesma deformação, com o material **confinado** pela moldeira (módulo volumétrico governa) | **desprezível** |

Além disso a figura estava geometricamente errada: pressão hidrostática é isotrópica, e uma lâmina fina
de material tem gesso dos dois lados à mesma altura — a carga líquida é ~zero. As "porções mais
flexíveis" de que a norma fala são as **não apoiadas pela moldeira**.

**O mecanismo correto: a expansão de presa do gesso, e o quanto a moldagem + moldeira a restringem.**

| Tipo de gesso (ISO 6873, Tabela 1) | Expansão linear de presa, 2 h |
|---|---|
| Tipo 1 — plaster de moldagem | 0,00 – 0,15% |
| Tipo 2 classe 1 — montagem | 0,00 – 0,05% |
| Tipo 2 classe 2 — modelos | 0,06 – 0,30% |
| **Tipo 3 — dental stone para modelos** | **0,00 – 0,20%** |
| **Tipo 4 — die stone, alta resistência e baixa expansão** | **0,00 – 0,15%** (e 0,00 – 0,18% em 24 h) |
| Tipo 5 — die stone de alta expansão | 0,16 – 0,30% — **expande de propósito**, para compensar a contração de outros materiais |

Sobre 50 mm de largura intermolar, 0,20% são **100 µm**. Esta é a fonte de erro dominante, e é uma ordem
de grandeza maior que qualquer efeito do peso.

**Evidência primária:** Ishida 1989 — a distorção das *moldagens* foi pequena e a reprodutibilidade
tridimensional foi boa; material e moldeira **não** afetaram a acurácia da moldagem mas **afetaram a do
modelo**; a expansão de presa ocorreu em todas as direções; as larguras e comprimentos de arco nos
modelos **aumentaram**; e silicone de adição + moldeira individual foram os mais acurados **porque a
combinação suprimiu efetivamente a expansão de presa**. Teraoka & Takahashi 2000 mediram a mudança
dimensional **e a pressão** do gesso contra a moldagem: com moldeira aberta a expansão foi anisotrópica,
com moldeira fechada não houve diferença entre direções — *"the impression tray influences the setting
expansion of stones"*.

> **Bônus pedagógico:** o Tipo 5 existe para expandir e **compensar** a contração de outro material.
> É um erro sistemático deliberadamente introduzido para cancelar outro — exatamente o que o slide de
> trueness × precision diz ser o único tipo de erro compensável. Vale amarrar as duas coisas em sala.

#### (b) "Material rígido é mais difícil de remover da boca" — REFUTADO

**Walker MP, Alderman N, Petrie CS, Melander J, McGuire J.** *J Prosthodont* 2013;22(5):362-6. Poliéter,
PVS e o híbrido VPES, em light e medium body (n=5). Rigidez por tração (ASTM D412), dureza Shore A
(ASTM D2240-05), força de remoção em máquina universal com modelo de aço e moldeira metálica.

- Medium body: o **PVS** teve rigidez e dureza significativamente maiores (p≤0,05); mas foi o
  **poliéter** que exigiu força de remoção significativamente maior (p≤0,05).
- Light body: a rigidez **não diferiu** entre os materiais; o poliéter ainda assim exigiu mais força.
- **Nenhuma correlação positiva** (p>0,05) entre força de remoção e rigidez ou dureza.
- Conclusão dos autores: *"high impression material rigidity and hardness are not predictors of
  impression removal difficulty."*

O que governa a força de remoção é a **profundidade das retenções e a adesão do material às
superfícies**, não a rigidez. Os próprios autores notam que fabricantes reformularam materiais para
reduzir rigidez por causa dessa crença.

**Ressalva de escopo:** estudo in vitro, n=5, modelo de aço padronizado, sem tecido mole nem saliva.
Refuta bem *"rigidez prediz força de remoção"*; não prova que rigidez seja irrelevante em toda situação.

**O que sobrevive sobre rigidez excessiva:** fratura de troquéis delgados na **separação do modelo**, e
o **limite mínimo** da norma (0,8% para putty/heavy; 2,0% para medium/light), que existe segundo a
própria definição para que o material saia da boca *"without injury to impressed oral tissues"*.

`[VERIFY]` Numeração da cláusula: o extrato do FDIS 4823:2025 que arquivei traz **3.10**; a
ISO 4823:2015 traz o mesmo texto como **3.8**. Confirmar qual edição/numeração citar.
`[VERIFY]` Teraoka & Takahashi 2000 mediram a **pressão** do gesso contra a moldagem, mas o abstract não
traz os valores. Se a NUS der acesso ao texto completo, esse número converte o argumento de cálculo
teórico em medida direta — vale buscar.

### 3.3 Desinfecção do poliéter — o limiar de 10 min não tem fonte

O material antigo dá "mais de 10 min → embebição". **A literatura recuperada não sustenta esse limiar, e as
duas fontes mais próximas nem sequer testam poliéter:**

- **Gothwal et al. 2019** testou **só silicones** (dois de adição, um de condensação) — nenhum poliéter. E
  encontrou **diferença significativa** para um deles (a recuperação elástica do AFFINIS *melhorou* com
  desinfecção e autoclavagem). A conclusão utilizável é que os três silicones podem ser desinfetados sem
  perda relevante de recuperação elástica.
- **Kavita et al. 2021** achou alteração dimensional significativa em alguns grupos, mas o relato é
  internamente incoerente (cita grupos III e IV que nunca define) — 🟡 usar com cautela.

O princípio (poliéter sorve água; tempo de imersão importa) é sólido e decorre do mecanismo. **O limiar de
10 min deve ser apresentado como recomendação de fabricante**, não como constante física, até que se ache
norma ou literatura. `[VERIFY]`

---

## 4. Referências (Vancouver — para a `srcline` dos slides e o handout)

**Normas**

1. ISO 4823. Dentistry — Elastomeric impression and bite registration materials. Geneva: ISO. (Texto consultado: ISO/FDIS 4823:2025, 6ª ed., substituindo ISO 4823:2021 — extrato em `01-iso-4823-extract.md`.) `[VERIFY edição publicada]`
2. ISO 21563:2021. Dentistry — Hydrocolloid impression materials. Geneva: ISO; 2021.
3. ISO 5725-1:2023. Accuracy (trueness and precision) of measurement methods and results — Part 1: General principles and definitions. Geneva: ISO; 2023.
4. ISO 20896-1:2019. Dentistry — Digital impression devices — Part 1: Methods for assessing accuracy. Geneva: ISO; 2019.
4b. ISO 6873:2013. Dentistry — Gypsum products. Geneva: ISO; 2013. — Tabela 1 (expansão linear de presa por tipo) consultada no preview público e transcrita na seção 3.0.
4c. ISO 9917-1. Dentistry — Water-based cements. — película máxima de 25 µm para cimentos de fixação.
5. US Food and Drug Administration. Dental impression materials — performance criteria for safety and performance based pathway. Guidance for industry and FDA staff. Silver Spring: FDA; 30 Sep 2024. — reproduz item a item os critérios da ISO 4823; usada como verificação independente da Tabela 1.

**Literatura** *(recuperada via PubMed e Consensus; verificada individualmente)*

6. Lu H, Nguyen B, Powers JM. Mechanical properties of 3 hydrophilic addition silicone and polyether elastomeric impression materials. J Prosthet Dent. 2004;92(2):151-4. [DOI](https://doi.org/10.1016/j.prosdent.2004.05.016)
7. Lawson NC, Burgess JO, Litaker MS. Tensile elastic recovery of elastomeric impression materials. J Prosthet Dent. 2008;100(1):29-33. [DOI](https://doi.org/10.1016/S0022-3913(08)60131-6)
8. Keck SC, Douglas WH. Tear strength of non-aqueous impression materials. J Dent Res. 1984;63(2):155-7. [DOI](https://doi.org/10.1177/00220345840630021201)
9. Williams PT, Jackson DG, Bergman W. An evaluation of the time-dependent dimensional stability of eleven elastomeric impression materials. J Prosthet Dent. 1984;52(1):120-5. [DOI](https://doi.org/10.1016/0022-3913(84)90194-x)
10. Marcinak CF, Young FA, Draughn RA, Flemming WR. Linear dimensional changes in elastic impression materials. J Dent Res. 1980;59(7):1152-5. [DOI](https://doi.org/10.1177/00220345800590071001)
11. Khan SA, Tushar, Nezam S, Singh P, Kumari N, Singh SS. Comparison and evaluation of linear dimensional accuracy of three elastomeric impression materials at different time intervals using vision inspection system: an in vitro study. J Int Soc Prev Community Dent. 2020;10(6):736-42. [DOI](https://doi.org/10.4103/jispcd.JISPCD_282_20)
12. Walker MP, Burckhard J, Mitts DA, Williams KB. Dimensional change over time of extended-storage alginate impression materials. Angle Orthod. 2010;80(6):1110-5. [DOI](https://doi.org/10.2319/031510-150.1)
13. Beuter L, Bourauel C, Singer L. Assessing the impact of an environmentally friendly approach on irreversible dental hydrocolloid performance. Sci Rep. 2024;14(1):30516. [DOI](https://doi.org/10.1038/s41598-024-83035-w)
14. Singer L, Bourauel C, Habib SI, Shalaby HE, Saniour SH. Tear strength and elastic recovery of new generation hybrid elastomeric impression material: a comparative study. BMC Res Notes. 2022;15(1):224. [DOI](https://doi.org/10.1186/s13104-022-06110-3)
15. Pandey P, Mantri S, Bhasin A, Deogade SC. Mechanical properties of a new vinyl polyether silicone in comparison to vinyl polysiloxane and polyether elastomeric impression materials. Contemp Clin Dent. 2019;10(2):203-7. [DOI](https://doi.org/10.4103/ccd.ccd_324_18)
16. Levartovsky S, Folkman M, Alter E, Pilo R. [Elastomeric impression materials]. Refuat Hapeh Vehashinayim (1993). 2011;28(2):54-64, 75. Hebraico, resumo em inglês. — 🟡 revisão narrativa; única fonte localizada para a dependência tear × velocidade.
17. Baumann MA, Klapper M. [Silicone molding compounds and latex gloves. The effect of latex gloves on addition and condensation silicones]. Schweiz Monatsschr Zahnmed. 1992;102(6):688-92. Alemão, resumo em inglês.
18. Matis BA, Valadez D, Valadez E. The effect of the use of dental gloves on mixing vinyl polysiloxane putties. J Prosthodont. 1997;6(3):189-92. [DOI](https://doi.org/10.1111/j.1532-849x.1997.tb00089.x)
19. de Camargo LM, Chee WW, Donovan TE. Inhibition of polymerization of polyvinyl siloxanes by medicaments used on gingival retraction cords. J Prosthet Dent. 1993;70(2):114-7. [DOI](https://doi.org/10.1016/0022-3913(93)90003-7)
20. Machado CEP, Guedes CG. Effects of sulfur-based hemostatic agents and gingival retraction cords handled with latex gloves on the polymerization of polyvinyl siloxane impression materials. J Appl Oral Sci. 2011;19(6):628-33. [DOI](https://doi.org/10.1590/s1678-77572011000600014)
21. Al-Sowygh ZH. The effect of various interim fixed prosthodontic materials on the polymerization of elastomeric impression materials. J Prosthet Dent. 2014;112(2):176-81. [DOI](https://doi.org/10.1016/j.prosdent.2013.10.023)
22. Gothwal G, Meena S, Padiyar UN, Sharma HK, Kaurani P, Singh DP. Comparative evaluation of elastic recovery of three different elastomeric impression materials on chemical disinfection and autoclaving: an in vitro study. J Indian Prosthodont Soc. 2019;19(4):345-52. [DOI](https://doi.org/10.4103/jips.jips_277_19)
23. Kavita K, Reddy KRP, Reddy KRM, Kumar S, Pandey G, Singh R. Assessment of effect of different sterilization agents on dimensional accuracy of different impression materials in implant prosthesis. J Pharm Bioallied Sci. 2021;13(Suppl 2):S1620-3. [DOI](https://doi.org/10.4103/jpbs.jpbs_315_21) — 🟡 relato internamente incoerente.
24. McLean JW, von Fraunhofer JA. The estimation of cement film thickness by an in vivo technique. Br Dent J. 1971;131(3):107-11. [DOI](https://doi.org/10.1038/sj.bdj.4802708) — origem do critério de 120 µm.
25. Yeo IS, Yang JH, Lee JB. In vitro marginal fit of three all-ceramic crown systems. J Prosthet Dent. 2003;90(5):459-64. [DOI](https://doi.org/10.1016/j.prosdent.2003.08.005) — uso explícito do critério de 120 µm.
26. Ishida K. [Accuracy of complete dental arch impressions and stone casts using a three-dimensional measurement system. Effect of rubber impression materials and trays]. Nihon Hotetsu Shika Gakkai Zasshi. 1989. — 🟡 japonês, pouco citado, só abstract acessível; usar como suporte mecanístico, não como evidência isolada.
27. Teraoka F, Takahashi J. Dimensional changes and pressure of dental stones set in silicone rubber impressions. Dent Mater. 2000;16(2):145-9. [DOI](https://doi.org/10.1016/s0109-5641(99)00096-2) — a moldeira governa a direção da expansão de presa. **Referência mais robusta para o mecanismo.**
28. Walker MP, Alderman N, Petrie CS, Melander J, McGuire J. Correlation of impression removal force with elastomeric impression material rigidity and hardness. J Prosthodont. 2013;22(5):362-6. [DOI](https://doi.org/10.1111/jopr.12011) — refuta a relação rigidez → força de remoção.
29. Rueda LJ, Sy-Muñoz JT, Naylor WP, Goodacre CJ, Swartz ML. The effect of using custom or stock trays on the accuracy of gypsum casts. Int J Prosthodont. 1996. — moldeira individual e a variação nos modelos.

**Descartado — não usar**

- *Kazanji M et al., Al-Rafidain Dent J 2020* (armazenamento de alginato por 15/30/60 min). Não indexado no
  PubMed, sem volume, páginas ou DOI localizáveis. 🔴 **Irrastreável — não levar para a tela.** O achado que
  interessava (alginato tolera ~30 min de espera, mas não 60 min) está coberto por Walker 2010, que é
  rastreável.

**Pendências de busca para o próximo chat**

1. **Working/setting time por família** com fonte citável — nada confirmado até agora.
2. **Fonte experimental primária** para a dependência da resistência ao rasgamento com a velocidade de
   remoção (hoje só via revisão narrativa, ref. 16).
3. Confirmar a **edição publicada da ISO 4823** (2021 ou 2025).
4. Origem do **limiar de 10 min** de imersão do poliéter — norma, fabricante ou literatura?
5. Consultar o **texto completo de Keck & Douglas 1984** para saber onde o **poliéter** se posiciona no
   ranking de energia de rasgamento.
