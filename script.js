// Show / Hide navigation menu
const showMenu = document.querySelector("#open-menu");
const hideMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".header-nav");
const menuLinks = document.querySelectorAll(".header-nav a");

function openMenu() {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menu.classList.remove("open");
    document.body.style.overflow = "";
}

showMenu?.addEventListener("click", openMenu);
hideMenu?.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

// Close menu on escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
        closeMenu();
    }
});
// End of Show / Hide navigation menu

// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", function () {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        ".project-card, .experience-item, .skill-category, .highlight-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});
// End of scroll animations

// Enhanced form validation
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formCompany = document.querySelector("#company");
    const formMessage = document.querySelector("#message");

    // Real-time validation
    function validateField(field, validationFn, errorMessage) {
        const isValid = validationFn(field.value);

        // Remove existing error styling
        field.style.borderColor = "";

        // Apply styling based on validation
        if (field.value.trim() !== "") {
            field.style.borderColor = isValid ? "#56ab91" : "#ef4444";
        }

        return isValid;
    }

    // Validation functions
    const isValidName = (value) => value.trim().length >= 2;
    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isValidMessage = (value) => value.trim().length >= 10;

    // Add real-time validation listeners
    formName?.addEventListener("blur", () =>
        validateField(
            formName,
            isValidName,
            "Name must be at least 2 characters"
        )
    );

    formEmail?.addEventListener("blur", () =>
        validateField(
            formEmail,
            isValidEmail,
            "Please enter a valid email address"
        )
    );

    formMessage?.addEventListener("blur", () =>
        validateField(
            formMessage,
            isValidMessage,
            "Message must be at least 10 characters"
        )
    );

    contactForm.addEventListener("submit", function (event) {
        let isValid = true;

        // Validate all required fields
        if (!validateField(formName, isValidName)) {
            isValid = false;
        }

        if (!validateField(formEmail, isValidEmail)) {
            isValid = false;
        }

        if (!validateField(formMessage, isValidMessage)) {
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();

            // Focus on first invalid field
            const firstInvalidField = contactForm.querySelector(
                'input[style*="rgb(239, 68, 68)"], textarea[style*="rgb(239, 68, 68)"]'
            );
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        }
    });
}
// Form validation end

// Automatic copyright year and header scroll effect
document.addEventListener("DOMContentLoaded", function () {
    // Update copyright year
    const yearElement = document.querySelector(".year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Header scroll effect
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    function updateHeader() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.background = "rgba(2, 24, 43, 0.98)";
            header.style.backdropFilter = "blur(20px)";
        } else {
            header.style.background = "rgba(2, 24, 43, 0.95)";
            header.style.backdropFilter = "blur(10px)";
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", updateHeader);
});
// End of utility functions
