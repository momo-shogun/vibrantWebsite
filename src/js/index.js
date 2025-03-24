//menu
let activeMenu = null;
function toggleMenu(menuId) {
  // Close mobile menu if it's open
  document.getElementById("mobile-menu").classList.add("hidden");

  // Hide all desktop menus first
  document
    .querySelectorAll('div[id$="-menu"]:not([id^="mobile"])')
    .forEach((menu) => {
      menu.classList.add("hidden");
    });

  // Reset all desktop button states
  document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
    btn.classList.remove("text-blue-400");
    btn.querySelector("i").classList.remove("rotate-180");
  });

  // If the clicked menu is already active, just close it
  if (activeMenu === menuId) {
    activeMenu = null;
    return;
  }

  // Otherwise, show the clicked menu
  const menuElement = document.getElementById(menuId + "-menu");
  const buttonElement = document.getElementById(menuId + "-btn");

  if (menuElement && buttonElement) {
    menuElement.classList.remove("hidden");
    buttonElement.classList.add("text-blue-400");
    buttonElement.querySelector("i").classList.add("rotate-180");
    activeMenu = menuId;
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  // Close any open desktop mega menus
  document
    .querySelectorAll('div[id$="-menu"]:not([id^="mobile"])')
    .forEach((menu) => {
      menu.classList.add("hidden");
    });

  // Reset desktop button states
  document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
    btn.classList.remove("text-blue-400");
    btn.querySelector("i").classList.remove("rotate-180");
  });

  // Toggle mobile menu
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");

  // Change hamburger icon
  const menuIcon = document.querySelector("#mobile-menu-toggle i");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.setAttribute("data-lucide", "menu");
  } else {
    menuIcon.setAttribute("data-lucide", "x");
  }
  lucide.createIcons();
}

// Mobile submenu toggle
function toggleMobileSubmenu(submenuId) {
  const submenu = document.getElementById(submenuId);
  const button = submenu.previousElementSibling;
  const icon = button.querySelector("i");

  // Toggle the submenu
  submenu.classList.toggle("hidden");

  // Toggle the icon rotation
  if (submenu.classList.contains("hidden")) {
    icon.classList.remove("rotate-180");
  } else {
    icon.classList.add("rotate-180");
  }
}

// Close menus when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideHeader = event.target.closest("header");

  if (!isClickInsideHeader && activeMenu) {
    // Close desktop mega menus
    document
      .querySelectorAll('div[id$="-menu"]:not([id^="mobile"])')
      .forEach((menu) => {
        menu.classList.add("hidden");
      });

    // Reset button states
    document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
      btn.classList.remove("text-blue-400");
      btn.querySelector("i").classList.remove("rotate-180");
    });

    activeMenu = null;
  }
});

// Close menus on window resize
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    // lg breakpoint
    // Close mobile menu
    document.getElementById("mobile-menu").classList.add("hidden");

    // Reset mobile menu icon
    const menuIcon = document.querySelector("#mobile-menu-toggle i");
    menuIcon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  } else {
    // Close desktop mega menus
    document
      .querySelectorAll('div[id$="-menu"]:not([id^="mobile"])')
      .forEach((menu) => {
        menu.classList.add("hidden");
      });

    // Reset button states
    document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
      btn.classList.remove("text-blue-400");
      btn.querySelector("i").classList.remove("rotate-180");
    });

    activeMenu = null;
  }
});
