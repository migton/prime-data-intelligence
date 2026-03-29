async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  return response.json();
}

function productCard(product) {
  const outcomes = product.outcomes.slice(0, 3).map((item) => `<li>${item}</li>`).join("");
  return `
    <article class="card product-card">
      <img src="${product.cover}" alt="${product.title}">
      <span class="badge">${product.badge}</span>
      <h3>${product.title}</h3>
      <p>${product.summary}</p>
      <div class="product-meta">
        <span class="muted">${product.category}</span>
        <span class="price">${product.price}</span>
      </div>
      <ul class="list-clean">${outcomes}</ul>
      <div class="cta-row">
        <a class="btn btn-primary" href="${product.url}" target="_blank" rel="noopener">View product</a>
      </div>
    </article>
  `;
}

function insightCard(item) {
  return `
    <article class="card">
      <span class="badge">Insight</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="cta-row">
        <a class="btn btn-secondary" href="${item.url}">Read more</a>
      </div>
    </article>
  `;
}

async function initProducts(selector, path = "/data/products.json", limit = null) {
  const target = document.querySelector(selector);
  if (!target) return;
  const products = await loadJson(path);
  const rendered = (limit ? products.slice(0, limit) : products).map(productCard).join("");
  target.innerHTML = rendered;
}

async function initInsights(selector, path = "/data/insights.json") {
  const target = document.querySelector(selector);
  if (!target) return;
  const insights = await loadJson(path);
  target.innerHTML = insights.map(insightCard).join("");
}

window.PrimeApp = { initProducts, initInsights };
