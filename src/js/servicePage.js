import {

    initClientAnimation,
    initTestimonialsAnimation,
    initStatsAnimation
} from "./gsapAnimation.js";

function puzzelTransition() {
    const images = document.querySelectorAll("#puzzel-container img");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(images[0], { y: "-100%", duration: 1, ease: "power2.inOut", delay: 1 })
        .to(images[1], { y: "-100%", duration: 1, ease: "power2.inOut", delay: 1 })
        .set(images[0], { y: "100%" }) // Reset first image below
        .set(images[1], { y: "0%" }) // Bring second image to visible area
        .to(images[0], { y: "0%", duration: 1, ease: "power2.inOut", delay: 1 })
        .to(images[1], { y: "100%", duration: 1, ease: "power2.inOut", delay: 1 });
}

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
    initClientAnimation();
    initTestimonialsAnimation();
    initStatsAnimation();
});