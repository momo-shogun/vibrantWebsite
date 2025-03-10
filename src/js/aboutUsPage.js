import { initTestimonialsAnimation } from "./gsapAnimation.js";
import { initAcheivementsAnimation } from "./serviceGsapAnimation.js";
import { initHeroTitleAnimation } from "./serviceGsapAnimation.js";
//menu
function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

//gsap animation

document.addEventListener("DOMContentLoaded", () => {
  initTestimonialsAnimation();
  initAcheivementsAnimation();
  initHeroTitleAnimation();
});
