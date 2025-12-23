let upper = document.createElement("header");
upper.innerHTML = `
    <div class="header-icon">@</div>
    <h1>antiMRS</h1>
      <button class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
      </button>`;
upper.className = "header";

document.body.append(upper);
