const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav__links");

menuButton.addEventListener("click", () => {
  // Toggle the "open" class on the navigation links element to show or hide the menu
  navLinks.classList.toggle("open");

  // Update the accessibility attribute for the menu button
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);

  // Switch the menu icon based on the menu state
  const menuIcon = menuButton.querySelector("img");
  menuIcon.src = isExpanded
    ? "assets/images/icon-menu.svg" // Menu icon when the menu is open
    : "assets/images/icon-menu-close.svg"; // Menu icon when the menu is closed
});
