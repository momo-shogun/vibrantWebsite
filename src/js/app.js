// main.js
import {
    initHeroAnimation,
    initStatsAnimation,
    initFeaturesAnimation,
    initProcessAnimation,
    initTestimonialsAnimation
} from './gsapAnimation.js';

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
        slideTransition: 'linear',
        draggable: true,
        fade: true,
        pauseOnFocus: true,
        infinite: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});

//menu
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

//gradient
// const b1 = "linear-gradient(240deg, #f86f3d59, rgba(232, 121, 249, 0.26) 40.92%, rgba(41, 104, 240, 0.123) 70.35%)";

// document.querySelector("#a").style.background = b1;
// document.querySelector("#a").style.backgroundSize = "300% 300%"; // Larger background area for smooth movement

gsap.to("#a", {
    backgroundPosition: "40% 23%", // Moves the gradient
    duration: 100,
    ease: "linear",
    repeat: -1,
    yoyo: true
});

//gsap animation

document.addEventListener("DOMContentLoaded", () => {
    initHeroAnimation();
    initStatsAnimation();
    initFeaturesAnimation();
    initProcessAnimation();
    initTestimonialsAnimation();
});