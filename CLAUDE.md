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

## Onde estão os materiais-fonte (Google Drive local) — ESTRUTURA FIXA

O Google Drive do Vinicius tem duas pastas **irmãs** (mesmo nível), e elas **não se misturam nunca**:

```
G:\My Drive\NUS\Lectures\
    New lectures\                     ← SÓ MATERIAIS-FONTE. Nunca escreva/crie nada aqui.
        <Nome do Tópico>\
            Assets\                   ← figuras PNG prontas
            Texts\                    ← docx/pdf com o conteúdo bruto
    HTML code\                        ← ESTE REPOSITÓRIO. Onde você trabalha e faz commit/push.
        index.html
        assets/  lectures/  tools/
        CLAUDE.md  README.md  ...
```

Regra crítica: **`New lectures\` é somente leitura para você.** Você tem acesso direto pelo sistema
de arquivos e deve **ler** os PDFs/DOCX/PNG de lá — mas **nunca crie, mova ou edite arquivos dentro
dela**. Todo código, toda figura copiada e renomeada, todo commit — tudo isso acontece exclusivamente
dentro de `HTML code\` (esta pasta, o repositório git). Se em algum momento os caminhos não baterem com
isso, **pare e confirme com o Vinicius antes de escrever em qualquer lugar** — não assuma uma estrutura
diferente, mesmo que pareça mais conveniente.

Ao montar uma aula:
- Leia os textos-fonte (docx/pdf) em `New lectures\<Tópico>\Texts\` para entender o conteúdo real.
- **Não copie as figuras cegamente.** Analise cada uma e o conteúdo da aula e **recomende ao Vinicius**
  quais figuras a aula precisa e, para cada uma: usar a existente, recriar/melhorar, ou criar nova.
  Para as que valem recriar/criar, entregue a ele um **prompt/descrição pronto** (proporção, o que mostrar,
  rótulos, estilo) — ele gera a imagem em outra ferramenta e coloca em `Assets\`. Só então você copia.
- Ao copiar uma figura já boa de `New lectures\<Tópico>\Assets\` para
  `HTML code\lectures\NN-slug\assets\`, **renomeie para kebab-case descritivo**
  (ex.: `Polymerization shrinkage 1.png` → `shrinkage-1-molecular-mechanism.png`).
  Nunca deixe os nomes originais do Drive no repositório, e nunca escreva nada de volta em `New lectures\`.
- Prefira **animações/interações em SVG/JS** (feitas por você no HTML) quando ensinarem melhor que uma imagem.
- Se uma figura não tiver legenda clara ou o conteúdo parecer incompleto, marque `[VERIFY]` na legenda
  e avise o Vinicius — não invente o que a figura mostra.
- **Trabalhe iterativo:** ele adiciona material aos poucos e vocês constroem juntos. Não espere um pacote
  fechado; se ele trouxer mais material depois, continue de onde parou. Às vezes ele quer que você siga só
  o material da pasta, às vezes traz ideias próprias — cheque no início, não assuma.

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
[D-05] formato enxuto, sem modo professor.

## Perguntas em aberto (avise se forem relevantes à tarefa atual)

[Q-01] Alinhar com os 14 outcomes oficiais do syllabus (pedir a lista se ainda não foi colada) ·
[Q-02] Confirmar 3 legendas `[VERIFY]` da Aula 03 (Addition, Condensation, Crosslinking) ·
[Q-04] Qual a próxima aula a construir, se não especificado.
