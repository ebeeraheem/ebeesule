// Show / Hide navigation menu
const showMenu = document.querySelector("#open-menu");
const hideMenu = document.querySelector("#close-menu");

const menu = document.querySelector(".header-nav");
const menuItems = document.querySelectorAll(".header-nav > *");

function openMenu() {
  menu.classList.add("open");
}
function closeMenu() {
  menu.classList.remove("open");
}

showMenu.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);
