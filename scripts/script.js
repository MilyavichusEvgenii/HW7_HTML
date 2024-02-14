let menu__btn = document.querySelector(".menu__btn");
let hamburger__content = document.querySelector(".hamburger__content");
// const menu = document.querySelector(".menu").cloneNode(1);
// const body = document.body;

menu__btn.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  menu__btn.classList.toggle("active");
  hamburger__content.classList.toggle("active");
  // body.classList.toggle("noscroll");
  // renderPopup();
}

// function renderPopup() {
//   popup.appendChild(menu);
// }

// // Код для закрытия меню при нажатии на ссылку

// const links = Array.from(menu.children);

// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// }


// // Код для закрытия меню при нажатии на ссылку
// const links = Array.from(menu.children);

// // Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// // Закрытие попапа при клике на меню
// function closeOnClick() {
//   hanb.classList.remove("open");
//   icon.classList.remove("active");
//   body.classList.remove("noscroll");
// }