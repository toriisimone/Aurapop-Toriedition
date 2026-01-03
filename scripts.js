// Load categories from products.json
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    const grid = document.querySelector(".ap-category-grid");

    data.categories.forEach(cat => {
      const card = document.createElement("div");
      card.classList.add("ap-category-card");

      card.innerHTML = `
        <div class="ap-category-img" style="background-image: url('${cat.image}')"></div>
        <div class="ap-category-name">${cat.name}</div>
      `;

      grid.appendChild(card);
    });
  });
