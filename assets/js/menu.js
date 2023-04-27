const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav__links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  menuButton.querySelector("img").src = isExpanded
    ? "assets/images/icon-menu.svg"
    : "assets/images/icon-menu-close.svg";
});
