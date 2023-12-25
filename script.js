// Show / Hide navigation menu
const showMenu = document.querySelector("#open-menu");
const hideMenu = document.querySelector("#close-menu");

const menu = document.querySelector(".header-nav");

function openMenu() {
  menu.classList.add("open");
}
function closeMenu(event) {
  if (event.target.closest("#close-menu")) {
    menu.classList.remove("open");
  }
}

showMenu.addEventListener("click", openMenu);
hideMenu.addEventListener("click", closeMenu);
