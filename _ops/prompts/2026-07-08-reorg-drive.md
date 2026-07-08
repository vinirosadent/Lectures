# Reorganização do Google Drive local — 2026-07-08

> Prompt executado pelo Claude Code em 2026-07-08. Salvo aqui como registro (handover/ops).

Preciso reorganizar meu Google Drive local (sincronizado em `G:\My Drive\NUS\Lectures\`). Faça tudo em fases, confirmando antes de qualquer remoção e reportando ao final. Nada aqui é destrutivo, exceto remover UMA pasta que você confirmar estar vazia. Não toque nos ~35 arquivos .ppt/.pdf/.mp4 históricos soltos na raiz de `Lectures\` — eles ficam onde estão.

**Fase 0 — segurança.** Antes de começar: `cd "G:\My Drive\NUS\Lectures"` e liste o conteúdo (só o primeiro nível). No repositório (HTML code), rode `git status` e confirme que está limpo (sem alterações pendentes). Se houver algo não commitado, pare e me avise.

**Fase 1 — criar a zona de planejamento.** Crie a pasta `G:\My Drive\NUS\Lectures\0 · Course plan\`. Mova para dentro dela:
- a pasta `Dental Materials Modernization\`
- `Dental_Materials_Curriculum_Reform_Summary.pptx`
- `Proposal RD2000.docx`

**Fase 2 — renomear a zona de fontes.** Renomeie `New lectures\` → `1 · Source\`. Dentro dela, renomeie `Polymers and polymerization\` → `03 · Polymers and polymerization\` (para casar com a numeração das aulas do repo).

**Fase 3 — recolher as figuras soltas.** Mova os 2 PNGs de dentro de `new figures for polymers\` para `1 · Source\03 · Polymers and polymerization\Assets\`. Mantenha os nomes originais por enquanto e liste no relatório final quais foram (vou te passar nomes limpos depois). Depois de mover, remova a pasta `new figures for polymers\` (deve ficar vazia).

**Fase 4 — investigar a pasta suspeita `1. Codes`.** Olhe `1 · Source\1. Codes\` e a pasta `Lectures\` dentro dela. Confirme se estão completamente vazias e se não contêm um repositório git (`.git`). Se vazias e sem git → remova `1. Codes\` inteira. Se tiver QUALQUER arquivo dentro → pare, não remova, e me liste o conteúdo.

**Fase 5 — criar a zona de operações no repo (ainda chamado HTML code).** Dentro do repositório, crie `_ops\prompts\` e `_ops\handovers\`. Mova o arquivo `G:\My Drive\PROMPT-claude-code-lecture03.md` (está na raiz do meu Drive) para `_ops\prompts\`. Salve também este prompt inteiro que você está executando como `_ops\prompts\2026-07-08-reorg-drive.md`. Depois: `git add -A`, `git commit -m "Add _ops folder (prompts + handovers); relocate lecture 03 prompt"`, `git push`.

**Fase 6 — renomear o repo por último (com cuidado).** Este é o passo delicado porque você está trabalhando dentro dessa pasta. Faça assim: saia dela primeiro (`cd "G:\My Drive\NUS\Lectures"`), então renomeie `HTML code\` → `2 · Repo\`. Reabra o VS Code nessa pasta nova. Confirme que nada quebrou: `git remote -v` (deve apontar para vinirosadent/Lectures), `git log --oneline -3` (histórico intacto), e que `index.html` e `lectures\03-polymerisation-and-polymers\index.html` continuam lá. O renomear da pasta-mãe é invisível para o git, então o site publicado no GitHub Pages não é afetado — mas confirme mesmo assim.

**Relatório final.** Me devolva: (1) a árvore final do primeiro nível de `NUS\Lectures\`; (2) o `git status` e `git log --oneline -3`; (3) os nomes dos 2 PNGs que você moveu; (4) confirmação de que a `1. Codes` foi removida (ou o que tinha dentro); (5) confirmação de que o remote e o histórico do git estão intactos.
