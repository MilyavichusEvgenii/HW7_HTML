
const icon = document.querySelector(".n__c__m__img1");
const hanb = document.querySelector(".hamburger__content");
const body = document.body;

// При клике на иконку hamb вызываем ф-ию hambHandler
icon.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  hanb.classList.toggle("open");
  icon.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  hanb.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  hanb.classList.remove("open");
  icon.classList.remove("active");
  body.classList.remove("noscroll");
}