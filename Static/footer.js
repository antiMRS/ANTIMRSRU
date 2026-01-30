let footer = document.createElement("footer");
footer.innerHTML = `
<div class="footer-content">
    <div class="footer-section">
      <h3>Быстрые ссылки</h3>
      <a href="https://antimrs.ru/">Главная</a>
      <a href="https://antimrs.ru/Info">Информация</a>
      <a href="https://antimrs.ru/Projects">Проекты</a>
    </div>

    <div class="footer-section">
      <h3>Контакты</h3>
      <p><i class="fas fa-phone"></i> @antimrs_bot</p>
      <p><i class="fas fa-envelope"></i> antimrs.business@gmail.com</p>

      <div class="social-links">
        <a href="https://vk.com/antimrs"><i class="fab fa-vk"></i></a>
        <a href="https://t.me/antiMRS"><i class="fab fa-telegram"></i></a>
        <a href="https://www.youtube.com/@antiMRS?sub_confirmation=1"
          ><i class="fab fa-youtube"></i
        ></a>
        <a href="https://github.com/antimrs"><i class="fab fa-github"></i></a>
        <a href="https://twitch.tv/antiMRS"><i class="fab fa-twitch"></i></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Информационный портал.</p>
  </div>
`;
footer.className = "footer";

document.body.append(footer);
