fetch("content/projects.json")
  .then(r => r.json())
  .then(data => {
    const grid = document.getElementById("projectsGrid");
    data.projects.forEach(p => {
      const a = document.createElement("a");
      a.className = "card";
      a.href = `projeto.html?slug=${p.slug}`;
      const cls = ["card"];
      if (p.layout === "wide") cls.push("is-wide");
      if (p.layout === "tall") cls.push("is-tall");
      a.className = cls.join(" ");
      a.innerHTML = `
        <div class="card-media" style="background-image:url('${p.cover}')"></div>
        <div class="card-overlay"></div>
        <div class="card-text">
          <strong>${p.title}</strong><br>
          <small>${p.format}</small>
        </div>
      `;
      grid.appendChild(a);
    });
  });
