// Keep track of active menu
let activeMenu = null;

function toggleMenu(menuId) {
  // Close mobile menu if it's open
  document.getElementById('mobile-menu').classList.add('hidden');

  // Get elements
  const menuElement = document.getElementById(menuId + '-menu');
  const buttonElement = document.getElementById(menuId + '-btn');
  const icon = buttonElement.querySelector('i');

  // Close all desktop menus first
  document.querySelectorAll('div[id$="-menu"]:not([id^="mobile"])').forEach((menu) => {
    if (menu !== menuElement) {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => menu.classList.add('hidden') });
    }
  });

  // Reset all button states
  document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
    btn.classList.remove('text-blue-400');
    btn.querySelector('i').classList.remove('rotate-180');
  });

  // If the clicked menu is already active, close it
  if (activeMenu === menuId) {
    gsap.to(menuElement, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => menuElement.classList.add('hidden') });
    gsap.to(icon, { rotate: 0, duration: 0.3 });
    activeMenu = null;
    return;
  }

  // Otherwise, show the clicked menu
  if (menuElement && buttonElement) {
    menuElement.classList.remove('hidden');
    gsap.fromTo(menuElement, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });

    buttonElement.classList.add('text-blue-400');
    gsap.to(icon, { rotate: 180, duration: 0.3 });

    activeMenu = menuId;
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  // Close any open desktop mega menus
  document.querySelectorAll('div[id$="-menu"]:not([id^="mobile"])').forEach((menu) => {
    gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => menu.classList.add('hidden') });
  });

  // Reset button states
  document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
    btn.classList.remove('text-blue-400');
    btn.querySelector('i').classList.remove('rotate-180');
  });

  // Toggle mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');

  // Change hamburger icon
  const menuIcon = document.querySelector('#mobile-menu-toggle i');
  if (mobileMenu.classList.contains('hidden')) {
    menuIcon.setAttribute('data-lucide', 'menu');
  } else {
    menuIcon.setAttribute('data-lucide', 'x');
  }
  lucide.createIcons();
}

// Close menus when clicking outside
document.addEventListener('click', function (event) {
  const isClickInsideHeader = event.target.closest('header');

  if (!isClickInsideHeader && activeMenu) {
    document.querySelectorAll('div[id$="-menu"]:not([id^="mobile"])').forEach((menu) => {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => menu.classList.add('hidden') });
    });

    document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
      btn.classList.remove('text-blue-400');
      btn.querySelector('i').classList.remove('rotate-180');
    });

    activeMenu = null;
  }
});

// Close menus on window resize
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1024) {
    document.getElementById('mobile-menu').classList.add('hidden');

    const menuIcon = document.querySelector('#mobile-menu-toggle i');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  } else {
    document.querySelectorAll('div[id$="-menu"]:not([id^="mobile"])').forEach((menu) => {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => menu.classList.add('hidden') });
    });

    document.querySelectorAll('button[id$="-btn"]').forEach((btn) => {
      btn.classList.remove('text-blue-400');
      btn.querySelector('i').classList.remove('rotate-180');
    });

    activeMenu = null;
  }
});
