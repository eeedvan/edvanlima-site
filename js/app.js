/* =========================================================
   HOME / MOSAICO
   - Carrega content/projects.json
   - Cria os cards dentro de #projectsGrid
   - Aplica layout modular (wide / tall)
   ========================================================= */

fetch("content/projects.json")
  .then((r) => r.json())
  .then((data) => {
    const grid = document.getElementById("projectsGrid");

    /* Segurança básica: se o grid não existir, não faz nada */
    if (!grid) return;

    /* Para cada projeto no JSON, cria um card */
    data.projects.forEach((p) => {
      const a = document.createElement("a");

      /* =========================================================
         CLASSES DO CARD (modularidade)
         - "card" sempre existe
         - "is-wide" e "is-tall" dependem do p.layout
         ========================================================= */
      const cls = ["card"];

      if (p.layout === "wide") {
        cls.push("is-wide");
      }

      if (p.layout === "tall") {
        cls.push("is-tall");
      }

      a.className = cls.join(" ");

      /* Link para a página de projeto */
      a.href = `projeto.html?slug=${p.slug}`;

      /* =========================================================
         HTML INTERNO DO CARD
         - Imagem (background)
         - Overlay (gradiente)
         - Texto (título + formato)
         ========================================================= */
      a.innerHTML = `
        <div class="card-media" style="background-image: url('${p.cover}')"></div>
        <div class="card-overlay"></div>
        <div class="card-text">
          <strong>${p.title}</strong><br>
          <small>${p.format}</small>
        </div>
      `;

      grid.appendChild(a);
    });
  });

/* =========================================================
   HERO / PARALLAX (OPÇÃO A - JS)
   - Move a imagem do hero suavemente no scroll
   - Não interfere no mosaico
   ========================================================= */

const hero = document.querySelector(".hero");
const heroMedia = document.querySelector(".hero-media");

if (hero && heroMedia) {
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      /* Só aplica parallax enquanto o scroll estiver dentro do hero */
      if (scrollY <= heroHeight) {
        const offset = scrollY * 0.35; // intensidade (0.25 suave / 0.35 recomendado / 0.5 forte)
        heroMedia.style.transform = `translateY(${offset}px) scale(1.1)`;
      }
    },
    { passive: true }
  );
}
``
