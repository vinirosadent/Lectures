# Prompt para o Claude Code — consertar e publicar a Lecture 03

Cole tudo abaixo (a partir da linha "Preciso consertar...") no Claude Code, dentro do VS Code, com a pasta do repositório (HTML code) aberta.

---

Preciso consertar e publicar a Lecture 03. O `index.html` já existe em `lectures/03-polymerisation-and-polymers/index.html` e está quase certo — só tem **2 placeholders "Figure to add"** que precisam virar imagens reais, e essas figuras precisam estar na pasta de assets. Faça tudo isto e me devolva o link no final.

**1. Copie as duas figuras** da minha pasta de origem para a pasta de assets do repo.
Origem: `G:\My Drive\NUS\Lectures\New lectures\Polymers and polymerization\Assets\`
Arquivos: `propagation-schematic.png` e `oxygen-inhibition-chemistry.png`
Destino: `lectures\03-polymerisation-and-polymers\assets\`
(Se algum nome na origem tiver espaços/maiúsculas diferentes, ache o arquivo certo e copie renomeando para exatamente `propagation-schematic.png` e `oxygen-inhibition-chemistry.png`.)

**2. No `index.html`**, substitua os 2 blocos de placeholder por imagens reais.

Ache o bloco `<div class="ph">...</div>` que contém `propagation-schematic.png` e troque a div inteira por:

```html
<div class="figbox"><img src="assets/propagation-schematic.png" alt=""><p class="figcap"><b>FIG.</b> The radical hops to each new chain end as monomers add — fast and exothermic.</p></div>
```

Ache o bloco `<div class="ph">...</div>` que contém `oxygen-inhibition-chemistry.png` e troque a div inteira por:

```html
<div class="figbox"><img src="assets/oxygen-inhibition-chemistry.png" alt=""><p class="figcap"><b>FIG.</b> O₂ diffuses into the surface and forms chain-stopping peroxyl radicals — a thin tacky layer.</p></div>
```

**3. Valide antes de publicar:**
- `grep -c "Figure to add" lectures/03-polymerisation-and-polymers/index.html` deve dar **0**.
- Para cada `assets/*.png` referenciado no `index.html`, confirme que o arquivo existe em `lectures/03-polymerisation-and-polymers/assets/`. Se faltar algum, me dê a lista e pare.

**4. Publique:**

```
git add -A
git commit -m "Lecture 03: fix propagation & oxygen figures, remove placeholders"
git push
```

**5. Confirme** me dando o link `https://vinirosadent.github.io/Lectures/lectures/03-polymerisation-and-polymers/` e diga que o push foi aceito. Se o push pedir autenticação, rode `git push` uma vez e me diga.
