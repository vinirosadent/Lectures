/* =====================================================================
   DENTAL MATERIALS · SHARED LECTURE JS
   ---------------------------------------------------------------------
   Comportamentos GENÉRICOS que toda aula herda automaticamente só por
   usar as classes/atributos do design system. A lógica específica de
   uma animação (ex.: montar a cadeia de polímero) fica no <script> da
   própria aula, e pode usar os helpers expostos em window.Lecture.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- 1. Barra de progresso "polimerizante" ---------------- */
  // A largura da barra = quanto da página já foi lida.
  var bar = document.querySelector(".progress__bar");
  function updateProgress() {
    if (!bar) return;
    var h = document.documentElement;
    var scrolled = h.scrollTop || document.body.scrollTop;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (scrolled / max) * 100 : 0;
    bar.style.width = pct.toFixed(1) + "%";
  }

  /* ---------- 2. Scrollspy: acende o ponto da seção atual ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  var navDots = Array.prototype.slice.call(document.querySelectorAll(".secnav a"));
  function updateSpy() {
    var pos = window.scrollY + window.innerHeight * 0.35;
    var current = null;
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s.id; });
    navDots.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
    });
  }

  /* rAF para não sobrecarregar o scroll */
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateProgress(); updateSpy(); ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  updateProgress(); updateSpy();

  /* ---------- 3. Flip cards (termo → definição) ------------------- */
  document.querySelectorAll(".flip").forEach(function (card) {
    function toggle() { card.classList.toggle("is-flipped"); }
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

  /* ---------- 4. Quiz com feedback imediato ----------------------- */
  // Markup esperado:
  //   <div class="quiz" data-fb-ok="..." data-fb-no="...">
  //     <button class="quiz__opt" data-correct>...</button>  (a correta)
  //     <button class="quiz__opt">...</button>
  //     <div class="quiz__fb"></div>
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var opts = quiz.querySelectorAll(".quiz__opt");
    var fb = quiz.querySelector(".quiz__fb");
    var answered = false;
    opts.forEach(function (opt) {
      opt.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var correct = opt.hasAttribute("data-correct");
        opts.forEach(function (o) {
          o.setAttribute("disabled", "");
          if (o.hasAttribute("data-correct")) o.classList.add("correct");
        });
        if (!correct) opt.classList.add("wrong");
        if (fb) {
          fb.classList.add("show", correct ? "ok" : "no");
          fb.innerHTML = correct
            ? (quiz.getAttribute("data-fb-ok") || "Correct.")
            : (quiz.getAttribute("data-fb-no") || "Not quite — see the highlighted answer.");
        }
      });
    });
  });

  /* ---------- 5. Reveal-on-scroll (aparição suave das seções) ----- */
  var io = ("IntersectionObserver" in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 })
    : null;
  document.querySelectorAll(".reveal-on-scroll").forEach(function (el) {
    if (io) io.observe(el); else el.classList.add("in");
  });

  /* ---------- 6. Helper genérico: STEPPER ------------------------- */
  // Botões .stepper[data-stepper="ID"] > button[data-step="n"]
  // mostram o painel [data-step-panel="ID"][data-step="n"].
  document.querySelectorAll(".stepper[data-stepper]").forEach(function (stepper) {
    var id = stepper.getAttribute("data-stepper");
    var btns = stepper.querySelectorAll("button[data-step]");
    var panels = document.querySelectorAll('[data-step-panel="' + id + '"]');
    function go(n) {
      btns.forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-step") === n); });
      panels.forEach(function (p) { p.style.display = p.getAttribute("data-step") === n ? "" : "none"; });
      // dispara um evento para a aula reagir (ex.: animar o SVG daquele passo)
      stepper.dispatchEvent(new CustomEvent("step", { detail: { id: id, step: n } }));
    }
    btns.forEach(function (b) { b.addEventListener("click", function () { go(b.getAttribute("data-step")); }); });
    if (btns.length) go(btns[0].getAttribute("data-step"));
  });

  /* ---------- 7. MODO APRESENTAÇÃO (dirigir como slides) ---------- */
  // Para dar aula projetando: avança seção-a-seção com o teclado (←/→,
  // PageUp/PageDown, Home/End) e tela cheia (F). Injeta controles ‹ › na tela.
  (function presenter() {
    var slides = [];
    var hero = document.getElementById("hero");
    if (hero) slides.push(hero);
    Array.prototype.push.apply(slides, Array.prototype.slice.call(document.querySelectorAll("section[id]")));
    if (slides.length < 2) return; // páginas sem seções (ex.: hub) não recebem controles

    function currentIndex() {
      var pos = window.scrollY + 90; // logo abaixo da barra fixa
      var idx = 0;
      for (var i = 0; i < slides.length; i++) { if (slides[i].offsetTop <= pos) idx = i; }
      return idx;
    }
    function goto(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      slides[i].scrollIntoView({ behavior: "smooth", block: "start" });
      setCount(i);
    }
    function toggleFs() {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) { document.exitFullscreen(); }
    }

    // Controles na tela (‹  X/N  ›  ⛶)
    var bar = document.createElement("div");
    bar.className = "present-controls";
    bar.innerHTML =
      '<button class="pc-btn" data-dir="-1" title="Previous (←)" aria-label="Previous section">‹</button>' +
      '<span class="pc-count"></span>' +
      '<button class="pc-btn" data-dir="1" title="Next (→)" aria-label="Next section">›</button>' +
      '<button class="pc-btn pc-fs" title="Fullscreen (F)" aria-label="Toggle fullscreen">⛶</button>';
    document.body.appendChild(bar);
    var countEl = bar.querySelector(".pc-count");
    function setCount(i) { countEl.textContent = (i + 1) + " / " + slides.length; }
    bar.querySelectorAll(".pc-btn[data-dir]").forEach(function (b) {
      b.addEventListener("click", function () { goto(currentIndex() + parseInt(b.getAttribute("data-dir"), 10)); });
    });
    bar.querySelector(".pc-fs").addEventListener("click", toggleFs);

    // Teclado no estilo PowerPoint (não interfere quando um slider/campo está focado)
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      switch (e.key) {
        case "ArrowRight": case "PageDown": e.preventDefault(); goto(currentIndex() + 1); break;
        case "ArrowLeft":  case "PageUp":   e.preventDefault(); goto(currentIndex() - 1); break;
        case "Home": e.preventDefault(); goto(0); break;
        case "End":  e.preventDefault(); goto(slides.length - 1); break;
        case "f": case "F": toggleFs(); break;
      }
    });

    setCount(currentIndex());
    window.addEventListener("scroll", function () { setCount(currentIndex()); }, { passive: true });
  })();

  /* ---------- 8. API pública para scripts de aula ----------------- */
  // window.Lecture.bindSlider(inputId, callback) -> chama callback(valor 0..1)
  //   sempre que o slider muda, já normalizado. Útil para crosslink/plasticização.
  window.Lecture = {
    bindSlider: function (inputId, cb) {
      var el = document.getElementById(inputId);
      if (!el) return;
      function fire() {
        var min = parseFloat(el.min || 0), max = parseFloat(el.max || 100);
        var t = (parseFloat(el.value) - min) / (max - min);
        cb(t, parseFloat(el.value));
      }
      el.addEventListener("input", fire);
      fire();
    },
    // Interpola número entre a e b conforme t (0..1)
    lerp: function (a, b, t) { return a + (b - a) * t; }
  };

})();
