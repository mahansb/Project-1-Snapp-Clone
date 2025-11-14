const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".submenu-toggle");

    toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
            const isExpanded = btn.getAttribute("aria-expanded") === "true";

            // Optional: close other submenus
            toggles.forEach(t => t.setAttribute("aria-expanded", "false"));

            // Toggle current submenu
            btn.setAttribute("aria-expanded", String(!isExpanded));
        });
    });
});


