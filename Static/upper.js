let upper = document.createElement("header");
upper.innerHTML = `
    <div class="header-icon">@</div>
    <h1>antiMRS</h1>
      <button class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
      </button>`;
upper.className = "header";

document.body.append(upper);

const themeToggle = document.getElementById("themeToggle");
const body = document.body;
let is_dark_theme = localStorage.getItem("dark_theme_enabled") || false;

function updateTheme() {
    body.classList.toggle("dark-theme", is_dark_theme);
    localStorage.setItem("dark_theme_enabled", is_dark_theme);
    if (is_dark_theme) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

updateTheme();

themeToggle.addEventListener("click", () => {
    is_dark_theme = !is_dark_theme;
    updateTheme();
});
