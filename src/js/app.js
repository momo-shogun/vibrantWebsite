// main.js
import {
  initHeroAnimation,
  initStatsAnimation,
  initFeaturesAnimation,
  initProcessAnimation,
  initClientAnimation,
  initTestimonialsAnimation,
} from "./gsapAnimation.js";

// slick slider
$(document).ready(function () {
  // Initialize Owl Carousel with optimal settings
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true,
    autoplaySpeed: 8000,
    slideTransition: "linear",
    draggable: true,
    fade: true,
    pauseOnFocus: true,
    infinite: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
});

//menu
function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

//gradient
// const b1 = "background: #8ED5FB; background: radial-gradient(at left top, #8ED5FB, #EF69FE);";

// document.querySelector("#a").style.background = b1;
// document.querySelector("#a").style.backgroundSize = "300% 300%"; // Larger background area for smooth movement

//gsap animation

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimation();
  initStatsAnimation();
  initFeaturesAnimation();
  initProcessAnimation();
  initClientAnimation();
  initTestimonialsAnimation();
});
