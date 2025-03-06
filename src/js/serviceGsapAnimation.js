// ✅ Our Service Page Animation
export function initServiceAnimation(triggerName) {
  const mm = gsap.matchMedia();

  // Remove previous spans if they exist
  const wrapperText = document.querySelector(".serviceHightlight");

  wrapperText.innerHTML = wrapperText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  // Get the spans
  const spans = wrapperText.querySelectorAll(".serviceHightlight span");

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    const tlService = gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${triggerName}`,
          scroller: ".scroll-container",
          start: "top 90%",
          end: "0%",
          scrub: 0.7,
        },
      })
      .set(
        spans,
        {
          color: "#364153",
          stagger: 0.1,
        },
        0.1,
      );

    tlService.fromTo(
      ".serviceName1",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<50%",
    );
    tlService.fromTo(
      ".serviceName2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
    );
    tlService.fromTo(
      ".serviceName3",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
    );
    tlService.fromTo(
      ".serviceName4",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
    );
    tlService.fromTo(
      ".serviceName5",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
    );
  });

  mm.add("(max-width: 1024px)", () => {
    // Mobile & Tablet animation
    const tlCompanies = gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${triggerName}`,
          scroller: ".scroll-container",
          start: "top 90%",
          end: "0%",
          scrub: 0.7,
        },
      })
      .set(
        spans,
        {
          color: "#364153",
          stagger: 0.1,
        },
        0.1,
      );
  });
}
