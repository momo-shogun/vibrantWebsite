import { initTestimonialsAnimation } from './gsapAnimation.js';
import {
  initAcheivementsAnimation,
  initClientAnimation,
} from './serviceGsapAnimation.js';
import { initHeroTitleAnimation } from './serviceGsapAnimation.js';
//menu

//gsap animation

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialsAnimation();
  initAcheivementsAnimation();
  initHeroTitleAnimation();
  initClientAnimation();
});
