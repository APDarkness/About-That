fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");

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
  });

