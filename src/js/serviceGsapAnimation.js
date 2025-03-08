// ✅ Our Service1 Page Animation
export function initServiceAnimation(serviceClass) {
  const mm = gsap.matchMedia();

  // Remove previous spans if they exist
  const wrapperText = document.querySelector(
    `.${serviceClass} .serviceHightlight`,
  );

  wrapperText.innerHTML = wrapperText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  // Get the spans
  const spans = wrapperText.querySelectorAll(
    `.${serviceClass} .serviceHightlight span`,
  );

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    const tlService = gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${serviceClass}`,

          start: "top 90%",
          end: "+=120%",
          scrub: 0.3,
        },
      })
      .set(
        spans,
        {
          color: "#364153",
          stagger: 0.1,
        },
        0.3,
      );

    tlService.fromTo(
      `.${serviceClass} .serviceName1`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<50%",
    );

    tlService.fromTo(
      `.${serviceClass} .serviceName2`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<50%",
    );
    tlService.fromTo(
      `.${serviceClass} .serviceName3`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<50%",
    );
    tlService.fromTo(
      `.${serviceClass} .serviceName4`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<80%",
    );
    tlService.fromTo(
      `.${serviceClass} .serviceName5`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<80%",
    );
    hoverAnimation(`.${serviceClass} .serviceName1`);
    hoverAnimation(`.${serviceClass} .serviceName2`);
    hoverAnimation(`.${serviceClass} .serviceName3`);
    hoverAnimation(`.${serviceClass} .serviceName4`);
    hoverAnimation(`.${serviceClass} .serviceName5`);
  });

  mm.add("(max-width: 1024px)", () => {
    // Mobile & Tablet animation
    const tlService = gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${serviceClass}`,

          start: "top 90%",
          end: "0%",
          scrub: 0.3,
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
      "<50%",
    );
    tlService.fromTo(
      ".serviceName3",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<50%",
    );
    tlService.fromTo(
      ".serviceName4",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<80%",
    );
    tlService.fromTo(
      ".serviceName5",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5 },
      "<80%",
    );
  });
}

export function initAcheivementsAnimation() {
  const mm = gsap.matchMedia();

  // Remove previous spans if they exist
  const wrapperText = document.querySelector(
    `.acheivements-js .achievementsHightlight`,
  );

  wrapperText.innerHTML = wrapperText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  // Get the spans
  const spans = wrapperText.querySelectorAll(
    `.acheivements-js .achievementsHightlight span`,
  );

  mm.add("(min-width: 1025px)", () => {
    // Desktop animation
    const tlClient = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".acheivements-js",

          start: "top 90%",
          end: "+=120%",
          scrub: 0.3,
        },
      })
      .set(
        spans,
        {
          color: "white",
          stagger: 0.1,
        },
        0.1,
      );

    const tlStats = gsap.timeline({
      scrollTrigger: {
        trigger: ".statsContainer",

        start: "top 90%",
        end: "+=120%",
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
    animateNumber("#projectsCompleted", 420, 2);
  });

  mm.add("(max-width: 1024px)", () => {
    // Mobile & Tablet animation
    const tlClientMobile = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".acheivements-js",

          start: "top 90%",
          end: "0%",
          scrub: 0.3,
        },
      })
      .set(
        spans,
        {
          color: "white",
          stagger: 0.1,
        },
        0.1,
      );
    const tlStats = gsap.timeline({
      scrollTrigger: {
        trigger: ".statsContainer",

        start: "top 90%",
        end: "+=120%",
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
    animateNumber("#projectsCompleted", 420, 2);
  });
}

function hoverAnimation(serviceClass) {
  const serviceElement = document.querySelector(serviceClass);

  if (serviceElement) {
    // Set initial gradient background with Tailwind compatibility
    gsap.set(serviceElement, {
      backgroundImage:
        "linear-gradient(to bottom, white 90%, transparent 100%)",
      backgroundSize: "100% 0%", // Start hidden from bottom
      backgroundRepeat: "no-repeat",
      overflow: "hidden", // Prevent content shift
    });

    serviceElement.addEventListener("mouseenter", () => {
      gsap.to(serviceElement, {
        backgroundSize: "100% 100%", // Smooth bottom-up animation
        duration: 0.6,
        ease: "power2.out",
        padding: "10px", // Smooth padding animation
      });
    });

    serviceElement.addEventListener("mouseleave", () => {
      gsap.to(serviceElement, {
        backgroundSize: "100% 0%", // Revert animation
        duration: 0.6,
        ease: "power2.out",
        padding: "12px 0px",
      });
    });
  } else {
    console.error(`Element with class ${serviceClass} not found`);
  }
}
