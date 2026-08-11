# PROJECT_RULES — como este projeto é construído

Regras estáveis que valem para **todas** as aulas. Ler no início de cada chat novo.

## Idioma
- **Conteúdo do aluno** (na tela): inglês.
- **Comentários de código, notas do professor, este tipo de doc**: português.

## Design system (é compartilhado — não duplicar por aula)
- Toda cor/tipografia/componente vive em `assets/css/lecture.css`.
- Precisa de um visual novo? Adicione um **componente** no CSS compartilhado, não estilos soltos na aula.
- Identidade **[D-02] Clinical Clean**. Mapa semântico das cores (tem significado):
  - **teal** = ciência / mecanismo · **âmbar** = clínica / paciente · **rosa** = equívoco / alerta
  - **painel escuro** = "bancada de mecanismo" onde as animações aparecem.
- Assinatura: barra de progresso que "polimeriza" ao rolar.
- Fontes: Space Grotesk (display) · Inter (corpo) · IBM Plex Mono (fórmulas/dados), com fallback do sistema.

## Estrutura e caminhos
- Cada aula: `lectures/NN-slug/index.html` + `notes.md` + `assets/`.
- **Sempre caminhos relativos.** Da aula, o compartilhado é `../../assets/...`. Nunca começar com `/`
  (quebraria no GitHub Pages, que serve em `/Lectures/`).
- Figuras de aula ficam em `lectures/NN-slug/assets/` com nomes **kebab-case** descritivos.

## Componentes de ensino disponíveis (classes do CSS)
`.statement` (frase-âncora grande, 1 por seção) · `.box--mech` (mecanismo) · `.box--clinical` (clínica)
· `.box--myth` (mito/fato) · `.matters` (por que importa) · `.panel` (painel escuro p/ animação)
· `.figure` (figura+legenda) · `.ctable` (tabela comparativa) · `.flips/.flip` (termo→definição)
· `.quiz` (com `data-correct`, `data-fb-ok`, `data-fb-no`) · `.reveal` (deep-dive dobrável, onde mora o texto denso)
· `.stepper[data-stepper]` · `.takehome`.

## Formato de apresentação — [D-04]
O professor **dirige** o HTML como se fossem slides; os alunos não abrem sozinhos. Por isso:
- **Enxuto por padrão** [D-05]: cada seção = 1 `.statement` (frase-âncora) + 1 visual/animação.
  Texto denso/mecanismo fino vai para `<details class="reveal">` (fechado por padrão, opcional).
- **Sem modo professor / sem notas na tela** — removido do sistema. Nada de notas ocultas do docente.
- **Navegação tipo pptx** (herdada de `lecture.js`, automática em qualquer aula com >1 `<section id>`):
  ←/→ e PageUp/PageDown avançam seção-a-seção; Home/End vão ao início/fim; **F** = tela cheia;
  controles "‹ X/N ›" no canto inferior direito.

## JS
- Comportamentos genéricos ficam em `assets/js/lecture.js` (herdados por atributo/classe).
- Lógica de animação específica da aula vai no `<script>` inline no fim do `index.html` da aula,
  podendo usar `window.Lecture.bindSlider(id, cb)` e `window.Lecture.lerp(a,b,t)`.
- Acessibilidade: respeitar `prefers-reduced-motion` (já no CSS); toda animação precisa ter sentido pedagógico.

## Qualidade (checar antes de entregar)
- `node --check` no JS; contagem de tags balanceada; nomes de figura batendo com o script de cópia.
- Responsivo até mobile; foco de teclado visível; CSS de impressão para handout.

## Registro de escrita — [D-16] (regra dura)

Isto é **material de aula universitária**, não copy de marketing. **Nunca use "títulos de impacto".**

- **Títulos de slide (`s-title`): descritivos, nomeiam o conteúdo.** Sem aforismo, trocadilho, paralelismo
  retórico, frase de duas partes com ponto no meio ou promessa dramática.
  - ❌ "Oxygen: the defect that became the machine" → ✅ "Oxygen inhibition in printing and in CLIP"
  - ❌ "Same surface. Opposite rule." → ✅ "Support placement on a crown and on a denture base"
  - ❌ "Six failures, six mechanisms" → ✅ "Characteristic print failures and their causes"
  - ❌ "Neither one wins. They fail differently." → ✅ "Additive and subtractive manufacturing compared"
- **Rótulos de caixa (`k-tag`): funcionais, não editoriais.** Vocabulário fixo: *Definition · Interpretation ·
  Mechanism · Clinical significance · Methodological limitation · Origin of the threshold · Scope of this
  lecture · Applications · General rule · Practical consequence · Discussion point · Important qualification ·
  Note · Summary point*.
  Proibidos: "The twist", "The sentence to remember", "Take this one sentence", "The asymmetry nobody teaches",
  "Why this is the spine of the lecture", "Read it carefully", "Both things are true", "Ask the class".
- **Eyebrows** padronizados como rótulos de seção: `Context · Structure · Property · Mechanism · Performance ·
  Interactive · Summary`.
- **Prosa** em terceira pessoa, descritiva. Sem apóstrofe ao aluno ("Ask yourself…", "Keep asking…",
  "You already know…" → "This was introduced in Lecture NN"), sem suspense, sem hipérbole.
  Analogia **explicativa** é bem-vinda quando carrega física (ex.: o slicer faz com o STL a mesma
  discretização que o CBCT faz com o volume).
- **Sem componente `.bigq`** (frase de efeito centralizada em corpo grande). Não recriar.
- Vale para **títulos, subtítulos, caixas, legendas, `axisnote`, prompts de figura e as strings de texto
  dentro dos widgets em JS** — é nas strings de JS que o tom informal costuma sobreviver a uma revisão.
- Numa revisão de registro, **números, dados e citações não mudam**; só a formulação.

## Decisões registradas
- **[D-01]** 14 outcomes → 6 objetivos "guarda-chuva" na tela; cobertura fina fica em `notes.md`.
- **[D-02]** Identidade **Clinical Clean**.
- **[D-03]** Construir scaffold compartilhado + Aula 03 juntos (feito no chat 1).
- **[D-04]** O professor dirige o HTML como slide (sem self-learning); navegação por teclado tipo pptx.
- **[D-16]** **Registro acadêmico**: títulos de slide descritivos, nunca frases de impacto; rótulos de caixa
  funcionais; prosa em terceira pessoa; sem `.bigq`. Vale também dentro das strings dos widgets. Ver a seção
  "Registro de escrita" acima.
- **[D-05]** Formato **enxuto**: frase-âncora + visual por seção; sem modo professor/notas na tela; texto denso vira deep-dive opcional.

## Questões abertas
- **[Q-01]** Alinhar com os 14 outcomes oficiais (colar lista verbatim).
- **[Q-02]** Verificar 3 legendas `[VERIFY]` (Addition, Condensation, Crosslinking).
- **[Q-04]** Próxima aula a construir?
