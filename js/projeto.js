const slug = new URLSearchParams(location.search).get("slug");

fetch("content/projects.json")
  .then(r => r.json())
  .then(data => {
    const p = data.projects.find(x => x.slug === slug);
    document.getElementById("title").innerText = p.title;
    document.getElementById("desc").innerText = p.description;
  });
