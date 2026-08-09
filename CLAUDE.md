# CLAUDE.md — instruções para o Claude Code neste repositório

Leia este arquivo por inteiro antes de qualquer tarefa. Ele é o "manual permanente" do projeto —
você não precisa perguntar ao Vinicius o que já está definido aqui.

## O que é este projeto

Biblioteca de aulas HTML interativas de Materiais Dentários (NUS, Ano 2, pré-clínico), que substitui
o PowerPoint. **O professor dirige o HTML projetando em sala — não é material de autoestudo.**
Framework pedagógico do curso: **structure → property → performance**.

## Antes de tocar em código, leia (nesta ordem)

1. `README.md` — painel de status, progresso das 20 aulas.
2. `PROJECT_RULES.md` — convenções de design/código, decisões [D-##] já tomadas.
3. `LECTURE_TEMPLATE.md` — esqueleto exato para montar uma aula nova.
4. `lectures/03-polymerisation-and-polymers/` — aula de referência já pronta; siga o padrão dela.

## Papel esperado

Você é ao mesmo tempo o desenvolvedor técnico **e** o parceiro de design instrucional. O Vinicius não
programa. Antes de gerar qualquer HTML de uma aula nova, **proponha primeiro a experiência de ensino**
(sem código ainda):
1. Narrativa da aula · 2. Objetivos de aprendizagem · 3. Conhecimento prévio do aluno ·
4. Equívocos-chave · 5. Âncora clínica · 6. Estratégia visual · 7. Elementos interativos ·
8. Estrutura de seções · 9. Assets necessários · 10. Perguntas de checkpoint.
Só depois de ele aprovar/ajustar isso, construa o HTML. Ele decide as escolhas de conteúdo/pedagogia;
você decide e executa a parte técnica.

## Onde estão os materiais-fonte (Google Drive local) — ZONAS NUMERADAS

O Google Drive do Vinicius, dentro de `G:\My Drive\NUS\Lectures\`, está organizado em três zonas
numeradas que **nunca se misturam**:

```
G:\My Drive\NUS\Lectures\
    0. Course plan\         ← planejamento do curso (reforma curricular, proposta). Não é conteúdo de aula.
    1. Source\              ← SÓ MATERIAIS-FONTE. Nunca escreva/crie/mova nada aqui. (era "New lectures")
        NN. <Tópico>\       ← ex.: "03. Polymers and polymerization"
            Assets\         ← figuras PNG prontas (fonte)
            Texts\          ← docx/pdf/roteiro com o conteúdo bruto
    2. Repo\                ← ESTE REPOSITÓRIO. Onde você trabalha e faz commit/push. (era "HTML code")
        index.html
        assets/  lectures/  tools/  _ops/
        CLAUDE.md  README.md  ...
    (+ dezenas de .ppt/.pdf históricos soltos na raiz de Lectures\ = arquivo morto, NÃO TOQUE)
```

**CONVENÇÃO DE NOMES:** o separador dos números é **ponto e espaço** (`0. Course plan`, `1. Source`,
`03. Polymers and polymerization`). **Nunca** use o middle-dot `·` — é difícil de digitar e achar.
Qualquer pasta que você criar ou renomear usa `.`.

Regra crítica: **`1. Source\` é somente leitura para você.** Leia os PDFs/DOCX/PNG de lá, mas **nunca
crie, mova ou edite arquivos dentro dela**. Todo código, toda figura copiada/renomeada e todo commit
acontecem exclusivamente dentro de `2. Repo\` (esta pasta, o repositório git). Se os caminhos não baterem
com isso, **pare e confirme com o Vinicius antes de escrever em qualquer lugar**.

**Exceção de escrita em `1. Source\`:** no comando **`vamos fazer a aula sobre <Tópico>`** (abaixo) você
**cria o esqueleto vazio** da pasta do tópico (`NN. <Tópico>\Assets\` + `Texts\`) para o Vinicius largar o
material. Essa é a única escrita permitida em `1. Source\`; o conteúdo que ele colocar lá continua intocável.

Prompts que você recebe e handovers de cada chat ficam versionados em `_ops\prompts\` e `_ops\handovers\`
dentro do repositório.

## Comando: `vamos fazer a aula sobre <Tópico>` — montar as pastas primeiro

Quando o Vinicius disser algo como "vamos fazer a aula sobre X", **prepare o terreno antes de qualquer
conteúdo**, sem mandá-lo ao terminal:
1. Descubra `NN` e o `slug` pelo mapa do curso (README). Se o número/tópico for ambíguo, **pergunte**.
2. Crie o esqueleto de material em `1. Source\NN. <Tópico>\` com `Assets\` e `Texts\` (vazias).
3. Crie o esqueleto do repo em `lectures\NN-slug\` com `assets\` e um `notes.md` inicial (cabeçalho +
   tabela vazia do manifesto de fontes `Fonte → Alimenta → Status`).
4. Diga a ele **onde largar o quê**: textos/roteiro em `…\Texts\`, figuras em `…\Assets\`.
5. **Não construa HTML nem ligue no menu ainda** — espere o material e então faça a proposta de ensino.

## Handout do aluno — PDF real paginado

O handout é um **doc separado** (não os slides): só bullets na espinha structure→property→performance +
figuras esquemáticas, **sem quiz** [D-09]. Pipeline:
- `lectures/NN-slug/handout.html` carrega `assets/css/handout.css` (`@media print` com `@page` + rodapé
  numerado).
- Gere o PDF real com `python3 tools/build-handouts-pdf.py` (WeasyPrint) → `lectures/NN-slug/handout.pdf`,
  A4 paginado, figuras não cortadas. Regenere sempre que o handout mudar.

## O menu (`index.html`) — recursos fixos

Entrada única do site, que o Vinicius projeta. Já tem: **senha `1903`** (portão client-side, não é segurança
real); **filtro** (busca + chips All/Open/Soon) e o botão **⤓ PDF** que abre a janelinha de handouts;
**cards em grade** (Open = link + pílula PDF quando há handout; Soon = esmaecido); **sem cards de
Assessment/Exam**. Ao publicar uma aula, troque o card dela soon→live mantendo esse padrão.

Ao montar uma aula:
- Leia os textos-fonte (docx/pdf) em `1. Source\NN. <Tópico>\Texts\` para entender o conteúdo real.
- **Não copie as figuras cegamente.** Analise cada uma e recomende ao Vinicius quais a aula precisa e,
  para cada uma: usar a existente, recriar/melhorar, ou criar nova. Para as que valem recriar/criar,
  entregue um **prompt/descrição pronto** (proporção, o que mostrar, rótulos, estilo) — ele gera a imagem
  em outra ferramenta e coloca em `Assets\`. Só então você copia.
- Ao copiar uma figura boa de `1. Source\NN. <Tópico>\Assets\` para `lectures\NN-slug\assets\`,
  **renomeie para kebab-case descritivo** (ex.: `Polymerization shrinkage 1.png` →
  `shrinkage-1-molecular-mechanism.png`). Nunca deixe os nomes originais do Drive no repositório, e nunca
  escreva de volta em `1. Source\`.
- Prefira **animações/interações em SVG/JS** quando ensinarem melhor que uma imagem.
- Figura sem legenda clara ou conteúdo incompleto → marque `[VERIFY]` na legenda e avise — não invente.
- **Trabalhe iterativo:** ele adiciona material aos poucos. Cheque no início se deve seguir só o material
  da pasta ou se ele traz ideias próprias; não assuma.

## Formato e design system (não reinvente por aula)

- Tudo compartilhado vive em `assets/css/lecture.css` e `assets/js/lecture.js`. Precisa de um estilo
  novo? Adicione um componente lá — nunca CSS solto dentro do HTML de uma aula.
- Identidade visual **Clinical Clean** [D-02]: teal=ciência, âmbar=clínica, rosa=equívoco, painel
  escuro=mecanismo/animação. Ver `PROJECT_RULES.md` para o mapa completo.
- **Formato enxuto** [D-04/D-05]: cada seção = 1 frase-âncora grande (`.statement`) + 1 visual/animação.
  Texto denso vai para `<details class="reveal">` (fechado por padrão) — nunca parágrafos longos soltos
  na tela principal.
- **Sem modo professor / sem notas na tela** — não reintroduza isso.
- Navegação tipo slides (←/→, PageUp/PageDown, Home/End, F para tela cheia) já vem de graça de
  `lecture.js` para qualquer página com mais de uma `<section id="...">`. Não duplique essa lógica.
- Conteúdo do aluno em **inglês**. Comentários de código, `notes.md`, commits: **português**.
- Caminhos sempre **relativos** (o site roda em `/Lectures/` no GitHub Pages).

## Ao terminar uma aula (checklist automático, sem perguntar)

1. Criar/atualizar `lectures/NN-slug/notes.md` (cobertura de objetivos, mapa de figuras, timing).
2. Ligar a aula no `index.html` raiz (trocar badge `Soon` → `Open` + `href`).
3. Atualizar a tabela de progresso em `README.md`.
4. Acrescentar uma entrada em `CHANGELOG.md`.
5. Validar antes de commitar: `node --check` nos scripts inline, tags HTML balanceadas.

## Git — faça isso você mesmo, sem pedir comandos ao Vinicius

Depois de cada tarefa concluída e validada:
```
git add -A
git commit -m "mensagem curta e descritiva em português"
git push
```
Não peça para ele rodar isso manualmente nem gere scripts `.ps1`/`.sh` para essa finalidade —
rode os comandos de git você mesmo pelo seu terminal integrado. Se o `git push` falhar por
autenticação, avise-o para conferir se está logado no GitHub pela extensão do VS Code
(ícone de Contas, canto inferior esquerdo) — não peça tokens ou senhas no chat.

## Decisões já tomadas (não reabrir sem necessidade)

Ver lista completa em `PROJECT_RULES.md`. Resumo: [D-01] 6 objetivos-guarda-chuva na tela ·
[D-02] Clinical Clean · [D-03] scaffold+aula juntos (feito) · [D-04] professor dirige como slide ·
[D-05] formato enxuto, sem modo professor ·
[D-06] estrutura em zonas numeradas com "." (0. Course plan / 1. Source read-only / 2. Repo git);
nomes nunca com "·" · [D-07] Aula 03 publicada · [D-08] workflow: Claude lê o Drive, monta o HTML,
entrega 1 prompt pro Claude Code que faz figuras+git ·
[D-09] **NUNCA colocar perguntas/quizzes/"test yourself" nos slides das aulas** (preferência do Vinicius);
os slides ensinam, não avaliam. Recap final = mapa dos learning outcomes ("onde você aprendeu"), sem perguntas ·
[D-10] Animações têm de **ensinar um mecanismo** (mostrar o fenômeno), não ser só um dial com um número —
sempre pensar no learning outcome antes de construir.

## Perguntas em aberto (avise se forem relevantes à tarefa atual)

[Q-01] Alinhar com os 14 outcomes oficiais do syllabus (pedir a lista se ainda não foi colada) ·
[Q-02] Confirmar 3 legendas `[VERIFY]` da Aula 03 (Addition, Condensation, Crosslinking) ·
[Q-04] Qual a próxima aula a construir, se não especificado.
