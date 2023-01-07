const menuIcon = document.getElementById("menuIcon");
const navLinks = document.querySelector(".nav-links")

menuIcon.addEventListener("click", () => {
	// Checks if menu has a class of .open
	navLinks.classList.toggle("open");
	// Changes to menu-close icon
	if (navLinks.classList.contains("open")) {
		menuIcon.src = "assets/images/icon-menu-close.svg";
	}
	else {
		menuIcon.src = "assets/images/icon-menu.svg";
	}
})