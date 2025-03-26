import { initTestimonialsAnimation } from './gsapAnimation.js';
import {
  initServiceAnimation,
  initAcheivementsAnimation,
  initHeroTitleAnimation,
} from './serviceGsapAnimation.js';
import {
  service1Images,
  service2Images,
  service3Images,
} from './serviceImgConstants.js';

//gsap animation

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialsAnimation();
  initServiceAnimation('service1-js', service1Images);
  initServiceAnimation('service2-js', service2Images);
  initServiceAnimation('service3-js', service3Images);
  initAcheivementsAnimation();
  initHeroTitleAnimation();
});
