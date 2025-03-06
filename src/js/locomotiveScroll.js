// Detect if the device is mobile or desktop
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

// Set up LocomotiveScroll
const scroll = new LocomotiveScroll({
  el: document.querySelector(".scroll-container"),
  smooth: true,
  smartphone: { smooth: true }, // smooth scrolling for mobile
  tablet: { smooth: true }, // smooth scrolling for tablets
  // For desktop, we will apply a custom speed multiplier (to slow down)
  getSpeed: isMobile ? 1 : 0.5, // Reduce scroll speed on desktop (0.5 means slower, 1 means normal)
  multiplier: isMobile ? 1 : 0.5, // Slow down scrolling by modifying the multiplier
});

// Update ScrollTrigger when Locomotive Scroll updates
scroll.on("scroll", ScrollTrigger.update);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// Refresh ScrollTrigger after Locomotive is fully loaded
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
