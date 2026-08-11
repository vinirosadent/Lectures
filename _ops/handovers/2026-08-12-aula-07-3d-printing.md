# Handover — Chat 5 · Aula 07 · Principles of 3D printing in dentistry (2026-08-12)

## 1. O que foi desenvolvido
Aula **07 — Principles of 3D printing in dentistry** (1 h, Fase 1), do zero: pastas, brief, digestão das
fontes, pesquisa web, proposta de ensino aprovada, deck construído, figuras integradas e publicação no menu.

**Espinha:** ISO/ASTM 52900 distingue *single-step* de *multi-step process* — na AM a peça ganha a **forma**
num passo e as **propriedades** noutro. Fecho: *"o STL não é o objeto; é uma intenção."*
**Âncora:** Farag 2024 (*BMC Oral Health*) — build angle × gap marginal, com a linha dos 120 µm.
**Gancho:** Align, >1 M dispositivos/dia, com o twist de que o impresso é o **modelo**, não o alinhador.

## 2. Arquivos criados / modificados

**Criados**
- `lectures/07-3d-printing/index.html` — deck autocontido, **30 slides · 5 partes**, CSS+JS inline,
  motor clonado da Aula 03. Sem quiz [D-09].
- `lectures/07-3d-printing/notes.md` — contrato, manifesto das 17 fontes, estrutura, cobertura dos outcomes,
  mapa de figuras, descrição dos widgets, timing, demos físicas, pendências.
- `lectures/07-3d-printing/assets/` — 8 PNG renomeados em kebab-case.
- `lectures/07-3d-printing/_sources/` — A princípios/tecnologias · B aplicações clínicas ·
  C processo→propriedade · D recursos de ensino · E simulações web · F exemplos clínicos.
- `_ops/prompts/07-3d-printing-figuras.md` — os 8 prompts de figura, com o bloco de estilo Clinical Clean.
- `1. Source/07. Principles of 3D printing in dentistry/_brief.docx` (+ `Assets/`, `Texts/`).

**Modificados**
- `index.html` (menu) — card 07 `soon` → `live`.
- `README.md`, `CHANGELOG.md`.

## 3. Estado do Git
Commit **`0c393c2`** feito, working tree limpo. **Push pendente** — o sandbox não tem as credenciais do
GitHub. Rodar uma vez no PowerShell (ou usar GitHub Desktop / VS Code):

```
cd "G:\My Drive\NUS\Lectures\2. Repo"; git push origin main
```

Nota: o mount do Drive recusa `rm` em silêncio — se o git reclamar de `index.lock` "Operation not permitted",
foi isso; nesta sessão resolveu-se habilitando a exclusão de arquivos na pasta.

## 4. Preview
- Local: abrir `2. Repo/lectures/07-3d-printing/index.html` no browser.
- Publicado (após o push): `https://vinirosadent.github.io/Lectures/lectures/07-3d-printing/`
- Menu: `https://vinirosadent.github.io/Lectures/` (senha `1903`).

Teclas: ←/→ · PageUp/Down · Espaço · Home/End · **F** tela cheia · **O** overview.

## 5. Questões em aberto
- **[Q-07.1] Handout** da Aula 07 ainda não existe (`handout.html` + `handout.pdf` via WeasyPrint). Comando `handout`.
- **[Q-07.2] [VERIFY]** `trueness-precision-target.png` saiu sem a seta diagonal "ACCURACY"; compensado por
  texto no slide. Regerar se quiser.
- **[Q-07.3]** Ciclo térmico dos metais (stress relief, debinding, sinterização) **não está nos 17 PDFs** —
  decisão tomada: adiar para a Aula 16. Se mudar de ideia, precisa de fonte nova.
- **[Q-07.4]** Conferir o deck projetado na sala — o `devicePixelRatio` muda ao ligar o projetor (o canvas
  do W3 reajusta no `resize` e a cada troca de slide, mas vale confirmar ao vivo).
- Herdadas: [Q-01] os 14 outcomes oficiais na lista-mestre; [Q-03] handout da Aula 06;
  [Q-04] a pasta-fonte "05. Biocompatibility" contém material de bioatividade; [Q-06] peso dos PDFs.

## 6. Próximo passo recomendado
`git push`, abrir o deck projetado e dirigir os três widgets uma vez. Depois, **`handout`** para a Aula 07 —
e a próxima aula sugerida continua sendo a **02 · Mechanical properties**, que é pré-requisito de quase tudo
na Fase 2 e ainda não existe.

## 7. Decisões desta sessão (para não reabrir)
- Metais: só o mecanismo de consolidação (sinterizar × fundir); ciclo térmico → Aula 16.
- Fontes comerciais (Formlabs, Rapid Shape, Phrozen, blog Medsta): usadas como **referência visual e de fluxo
  de bancada**, nunca como fonte de números.
- Guias cirúrgicas: ensinadas com os desvios por tipo de suporte (dente 1,81° / osso 2,14° / mucosa 2,95°),
  sem inventar números que as 17 fontes não trazem.
- Analogias: adotado *"o slicer é a tomografia rodando ao contrário"*; **rejeitados** pão fatiado (imagem
  subtrativa para processo aditivo) e parede de tijolos (argamassa é um terceiro material; fiada alternada
  subestima a anisotropia).
- 3 widgets, não 5. Bloco 05 mantido cheio.
