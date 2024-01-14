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

// Form validation start
const contactForm = document.querySelector(".contact-form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formPhone = document.querySelector("#phone");
const formMessage = document.querySelector("#message");
const formBtn = document.querySelector("#form-button");

contactForm.addEventListener("submit", function (input) {
  let isValid = true;

  // Name validation
  if (formName.value.trim() === "") {
    formName.style.border = "1px solid red";
    isValid = false;
  } else {
    formName.style.border = "1px solid green";
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (formEmail.value.trim() === "" || !emailPattern.test(formEmail.value)) {
    formEmail.style.border = "1px solid red";
    isValid = false;
  } else {
    formEmail.style.border = "1px solid green";
  }

  // Phone number validation
  if (!Number(formPhone.value.trim())) {
    formPhone.style.border = "1px solid red";
    isValid = false;
  } else {
    formPhone.style.border = "1px solid green";
  }

  // Message validation
  if (formMessage.value.trim() === "") {
    formMessage.style.border = "1px solid red";
    isValid = false;
  } else {
    formMessage.style.border = "1px solid green";
  }

  // Prevent form submission if an error is encountered
  if (!isValid) {
    input.preventDefault();
  } else {
    // Reset the form if it's successfully submitted
    contactForm.reset();
  }
});
// Form validation end
