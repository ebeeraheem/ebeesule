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

// Projects card slide-up animation start
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  projectCards.forEach((card) => {
    observer.observe(card);
  });
});
// Projects card slide-up animation end
