// Show / Hide navigation menu
const showMenu = document.querySelector("#open-menu");
const hideMenu = document.querySelector("#close-menu");

const menu = document.querySelector(".header-nav");
// const menuItems = document.querySelectorAll(".header-nav > *");

function openMenu() {
  menu.style.display = "flex";
}
function closeMenu(event) {
  menu.style.display = "none";
}

showMenu.addEventListener("click", openMenu);
hideMenu.addEventListener("click", closeMenu);
