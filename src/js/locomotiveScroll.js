const scroll = new LocomotiveScroll({
  el: document.querySelector(".scroll-container"),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true },
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
  // pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger after Locomotive is fully loaded
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
