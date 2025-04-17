import { initTestimonialsAnimation } from './gsapAnimation.js';
import {
  initAcheivementsAnimation,
  initClientAnimation,
} from './serviceGsapAnimation.js';
import { ElementAnimator } from './utils.js';

function heroTitleAnimation() {
  // Title and paragraph animations (kept from previous implementation)
  const tlLand = gsap.timeline({
    defaults: { duration: 1.75, ease: 'power1.out' },
  });

  tlLand.fromTo(
    '.intro-js',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.35 }
  );

  tlLand.from('.heroTitle-js', {
    rotationX: -100,
    transformOrigin: '50% 50% -70px',
    opacity: 0,
    duration: 0.8,
    ease: 'power3',
    stagger: 0.25,
  });

  tlLand.from(
    '.heroPara-js',
    {
      y: 20,
      opacity: 0,
      duration: 0.97,
      ease: 'power3',
      stagger: 0.25,
    },
    '<50%'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  heroTitleAnimation();
  initClientAnimation();
  initAcheivementsAnimation();
  initTestimonialsAnimation();
  //animation for hero section
  const alienImage = document.getElementById('alien-image');
  const c1Image = document.getElementById('c1-image');
  const pageOneContainer = document.querySelector('.pageOne-js');
  const b0Image = document.getElementById('b0-image');

  // Create animators with different configurations
  const alienAnimator = new ElementAnimator({
    element: alienImage,
    container: pageOneContainer,
    x: -80,
    y: -50,
    rotation: 180,
    mouseMoveScale: 120,
    duration: 5,
  });

  const c1Animator = new ElementAnimator({
    element: c1Image,
    container: pageOneContainer,
    x: 2, // Different x movement
    y: 4, // Different y movement
    rotation: 0.1, // Different rotation
    mouseMoveScale: -100, // Different mouse sensitivity
    duration: 1.5, // Slightly different duration
  });

  const b0Animator = new ElementAnimator({
    element: b0Image,
    container: pageOneContainer,
    x: 0,
    y: 0,
    rotation: 0,
    mouseMoveScale: -30,
    duration: 0,
  });
});
