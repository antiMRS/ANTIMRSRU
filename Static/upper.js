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

//buttons
const infBtn = document.getElementById("infBtn");
const lnkBtn = document.getElementById("lnkBtn");
const prjBtn = document.getElementById("prjBtn");
const datBtn = document.getElementById("datBtn");

infBtn.addEventListener("click", () => {
    window.location.assign("https://antimrs.ru/Info");
});
lnkBtn.addEventListener("click", () => {
    window.location.assign("https://antimrs.ru/Links");
});
prjBtn.addEventListener("click", () => {
    window.location.assign("https://antimrs.ru/Projects");
});
datBtn.addEventListener("click", () => {
    window.location.assign("https://antimrs.ru/Data");
});
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
