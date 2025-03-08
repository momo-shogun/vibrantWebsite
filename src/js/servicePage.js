import { initTestimonialsAnimation } from "./gsapAnimation.js";
import {
  initServiceAnimation,
  initAcheivementsAnimation,
} from "./serviceGsapAnimation.js";
import {
  service1Images,
  service2Images,
  service3Images,
} from "./serviceImgConstants.js";
//menu
function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

gsap.to("#a", {
  backgroundPosition: "40% 23%", // Moves the gradient
  duration: 100,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

//gsap animation

document.addEventListener("DOMContentLoaded", () => {
  initTestimonialsAnimation();
  initServiceAnimation("service1-js", service1Images);
  initServiceAnimation("service2-js", service2Images);
  initServiceAnimation("service3-js", service3Images);
  initAcheivementsAnimation();
});
