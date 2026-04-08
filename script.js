fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");

    posts.reverse().forEach(post => {
      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <a href="post.html?id=${post.id}">
          <h2>${post.title}</h2>
        </a>
        <p class="date">${post.date}</p>
        <p>${post.preview}</p>
      `;

      container.appendChild(div);
    });
  });