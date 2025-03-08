// gsapAnimations.js

// ✅ Hero Section Animation
export function initHeroAnimation() {
  const tlLand = gsap.timeline({
    defaults: { duration: 1.75, ease: "power1.out" },
  });

  tlLand
    .fromTo(".heroTitle-js", { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
    .fromTo(".heroImage-js", { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "<");

  const brandRedSpan = document.querySelector(".heroTitle-js");

  if (brandRedSpan) {
    brandRedSpan.addEventListener("mouseenter", () => {
      gsap.to(brandRedSpan, { scale: 1.02, duration: 0.3, ease: "power2.out" });
    });

    brandRedSpan.addEventListener("mouseleave", () => {
      gsap.to(brandRedSpan, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  }
  const circle = document.querySelector(".bottom-circle");
  const laptop = document.querySelector(".laptop");
  const bottomLeftSquare = document.querySelector(".bottomLeftSquare");

  document.addEventListener("mousemove", (event) => {
    let moveX = (window.innerWidth / 2 - event.clientX) * 0.05; // Adjust sensitivity
    let moveY = (window.innerHeight / 2 - event.clientY) * 0.02;

    gsap.to(circle, {
      x: moveX * 0.5,
      y: 82,
      rotation: moveX * -0.2, // Rotate opposite to movement
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(bottomLeftSquare, {
      x: moveX * 0.2,
      y: moveY,
      rotation: moveX * -1,
      duration: 0.5,
      ease: "power4.out",
    });
    gsap.to(bottomRightSquare, {
      x: moveX * -0.2,
      y: -moveY,
      rotation: moveX * 1,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to(topRightSquare, {
      x: moveX * 0.2,
      y: moveY,
      rotation: moveX * 0.2,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to(laptop, {
      x: -moveX * 0.5,
      y: -moveY,
      duration: 0.5,
      ease: "power4.out",
    });
    gsap.to(phone, {
      x: moveX * 0.5,
      y: moveY,
      duration: 0.5,
      ease: "power4.out",
    });
  });
}

// ✅ Stats Page Animation
export function initStatsAnimation() {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    const tlClient = gsap.timeline({
      scrollTrigger: {
        trigger: ".client-js",

        scrub: 2,
        start: "start 80%",
        end: "top 40%",
        delay: 2,
      },
    });

    tlClient.fromTo(
      ".statsHeading-js",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0 },
    );

    const tlStats = gsap.timeline({
      scrollTrigger: {
        trigger: ".statsContainer",
        start: "top 90%",
        end: "top 90",
        ease: "power2.out",
      },
    });

    function animateNumber(targetElement, targetNumber, duration) {
      tlStats.to(
        targetElement,
        {
          innerText: targetNumber,
          duration: duration,
          snap: { innerText: 1 },
          onUpdate: function () {
            if (
              ["employeeCount", "happyClientsCount"].includes(targetElement.id)
            ) {
              this.targets()[0].innerText += "+";
            }
          },
        },
        "<",
      );
    }

    animateNumber("#employeeCount", 40, 2);
    animateNumber("#experienceYears", 12, 2);
    animateNumber("#mobileAppsCount", 20, 2);
    animateNumber("#happyClientsCount", 350, 2);
    animateNumber("#projectsCompleted", 420, 2);
  });

  mm.add("(max-width: 1024px)", () => {
    // Mobile & Tablet animation
    const tlClientMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".client-js",

        scrub: true,
        start: "top 90%",
        end: "bottom 80%",
      },
    });

    tlClientMobile.fromTo(
      ".statsHeading-js",
      { opacity: 0.2, y: 20 },
      { opacity: 1, y: 0 },
    );

    const tlStatsMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".statsContainer",

        start: "top 95%",
        end: "top 80%",
        ease: "power2.out",
      },
    });

    function animateNumberMobile(targetElement, targetNumber, duration) {
      tlStatsMobile.to(
        targetElement,
        {
          innerText: targetNumber,
          duration: duration,
          snap: { innerText: 1 },
          onUpdate: function () {
            if (
              ["employeeCount", "happyClientsCount"].includes(targetElement.id)
            ) {
              this.targets()[0].innerText += "+";
            }
          },
        },
        "<",
      );
    }

    animateNumberMobile("#employeeCount", 40, 3);
    animateNumberMobile("#experienceYears", 12, 3);
    animateNumberMobile("#mobileAppsCount", 20, 3);
    animateNumberMobile("#happyClientsCount", 350, 2);
  });
}

// ✅ Features Page Animation
export function initFeaturesAnimation() {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    const tlFeature = gsap.timeline({
      scrollTrigger: {
        trigger: ".thirdPage-js",
        scrub: 2,

        start: "-50%",
        end: "50%",
      },
    });

    tlFeature.fromTo(
      ".featureHeading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
    );

    tlFeature.from(".service-js", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "linear",
    });

    document.querySelectorAll(".service-js").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.1,
          background: "linear-gradient(264deg, #4B0082 20%  , #1447e6  )",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          background: "#000",
          duration: 1,
          ease: "power2.out",
        });
      });
    });
  });

  mm.add("(max-width: 1024px)", () => {
    // Mobile & Tablet animation
    const tlFeature = gsap.timeline({
      scrollTrigger: {
        trigger: ".thirdPage-js",
        scrub: "true",

        start: "-30%",
        end: "80%",
      },
    });

    tlFeature.fromTo(
      ".featureHeading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: "1.5" },
    );

    tlFeature.from(
      ".service-js",
      {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "linear",
      },
      "<30%",
    );

    document.querySelectorAll(".service-js").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.1,
          background: "linear-gradient(264deg, #4B0082 20%  , #1447e6  )",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          background: "#000",
          duration: 1,
          ease: "power2.out",
        });
      });
    });
  });
}

// ✅ Process Page Animation
export function initProcessAnimation() {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    const tlProcess = gsap.timeline({
      scrollTrigger: {
        trigger: ".forthPage-js",

        scrub: 2,
        start: "-50%",
        end: "+=110%",
      },
    });
    tlProcess.fromTo(
      ".processHeading",
      { opacity: 0.4, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
    );
    tlProcess.fromTo(
      ".process1-js",
      { x: "40%", opacity: 0.2 },
      { x: "0%", opacity: 1, duration: 4 },
      "<35%",
    );
    tlProcess.fromTo(
      ".process2-js",
      { y: "20%", opacity: 0 },
      { y: "0", opacity: 1, duration: 4 },
    );
    tlProcess.fromTo(
      ".process3-js",
      { x: "-40%", opacity: 0 },
      { x: "0", opacity: 1, duration: 4 },
    );
    tlProcess.fromTo(
      ".process4-js",
      { x: "40%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 4 },
    );
    tlProcess.fromTo(
      ".process5-js",
      { y: "-60%", opacity: 0 },
      { y: "0", opacity: 1, duration: 4 },
    );
  });

  mm.add("(max-width: 1024px)", () => {
    // Mobile & Tablet animation
    const tlProcess = gsap.timeline({
      scrollTrigger: {
        trigger: ".forthPage-js",

        scrub: 2,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    tlProcess.fromTo(
      ".processHeading",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2 },
    );
    tlProcess.fromTo(
      ".process1-js",
      { x: "40%", opacity: 0.2 },
      { x: "0%", opacity: 1, duration: 4 },
      "<35%",
    );
    tlProcess.fromTo(
      ".process2-js",
      { y: "20%", opacity: 0 },
      { y: "0", opacity: 1, duration: 1 },
    );
    tlProcess.fromTo(
      ".process3-js",
      { x: "-40%", opacity: 0 },
      { x: "0", opacity: 1, duration: 1 },
    );
    tlProcess.fromTo(
      ".process4-js",
      { x: "40%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1 },
    );
    tlProcess.fromTo(
      ".process5-js",
      { y: "-60%", opacity: 0 },
      { y: "0", opacity: 1, duration: 1 },
    );
  });
}

// ✅ Our Client Page Animation
export function initClientAnimation() {
  // Remove previous spans if they exist
  const wrapperText = document.querySelector(".clientHightlight");

  wrapperText.innerHTML = wrapperText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  // Get the spans
  const spans = wrapperText.querySelectorAll(".clientHightlight span");

  const tlCompanies = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".fifthPage-js",

        start: "top 90%",
        end: "0%",
        scrub: 0.7,
      },
    })
    .set(
      spans,
      {
        color: "#eee",
        stagger: 0.1,
      },
      0.1,
    );

  tlCompanies.fromTo(
    ".companyLogo1",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 2 },
  );
  tlCompanies.fromTo(
    ".companyLogo2",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 2 },
  );
  tlCompanies.fromTo(
    ".companyLogo3",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 2 },
  );
  tlCompanies.fromTo(
    ".companyLogo4",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 2 },
  );
}

// ✅ Testimonials Animation
export function initTestimonialsAnimation() {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sixthPage-js",

        start: "top top",
        end: "+=250%",
        scrub: 2,
        pin: true,
      },
    });

    const testimonials = gsap.utils.toArray(".testimonial");

    testimonials.forEach((testimonial) => {
      tl.fromTo(
        testimonial,
        { yPercent: 0, opacity: 1 },
        { yPercent: -500, opacity: 1, duration: 2, ease: "none" },
        "<24%",
      );
    });
  });

  mm.add("(max-width: 1024px)", () => {
    mm;
    // Mobile and tablet animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sixthPage-js",

        start: "top top",
        end: "+=250%",
        scrub: 2,
        pin: true,
      },
    });

    const testimonials = gsap.utils.toArray(".testimonial");

    testimonials.forEach((testimonial) => {
      tl.fromTo(
        testimonial,
        { yPercent: 0, opacity: 1 },
        { yPercent: -500, opacity: 1, duration: 2, ease: "none" },
        "<24%",
      );
    });
  });
}
