const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const offcanvasMenu = document.getElementById("offcanvasMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  offcanvasMenu.classList.remove("translate-x-full");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  menuButton.innerHTML = '<i class="ri-close-line text-2xl"></i>';
}

function closeMenu() {
  offcanvasMenu.classList.add("translate-x-full");
  overlay.classList.add("opacity-0", "pointer-events-none");
  menuButton.innerHTML = '<i class="ri-menu-line text-2xl"></i>';
}

menuButton.addEventListener("click", () => {
  if (offcanvasMenu.classList.contains("translate-x-full")) {
    openMenu();
  } else {
    closeMenu();
  }
});

closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close menu when pressing escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});
