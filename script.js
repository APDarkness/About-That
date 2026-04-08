fetch("posts.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load posts.json");
    return res.json();
  })
  .then(posts => {
    const container = document.getElementById("posts");

    if (!container) {
      console.error("Missing #posts container in HTML");
      return;
    }

    posts.slice().reverse().forEach(post => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <a href="post.html?id=${post.id}" class="post-link">
          <h2>${post.title}</h2>
          <p class="date">${post.date}</p>
          <p>${post.preview}</p>
        </a>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading posts:", err));
