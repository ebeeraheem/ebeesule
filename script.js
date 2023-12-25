// Show / Hide navigation menu
const showMenu = document.querySelector("#open-menu");
const hideMenu = document.querySelector("#close-menu");

const menu = document.querySelector(".header-nav");
const menuLinks = document.querySelectorAll(".header-nav a");

function openMenu() {
  menu.classList.add("open");
}
function closeMenu() {
  menu.classList.remove("open");
}

showMenu.addEventListener("click", openMenu);
hideMenu.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
// End of Show / Hide navigation menu
