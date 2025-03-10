// ✅ Our Service1 Page Animation
export function initServiceAnimation(serviceClass, serviceImgArr) {
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
    hoverAnimation(`.${serviceClass}`, serviceImgArr);
    // hoverAnimation(`.${serviceClass} .serviceName2`, serviceImgArr);
    // hoverAnimation(`.${serviceClass} .serviceName3`, serviceImgArr);
    // hoverAnimation(`.${serviceClass} .serviceName4`, serviceImgArr);
    // hoverAnimation(`.${serviceClass} .serviceName5`, serviceImgArr);
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
          scrub: 2.75,
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
          scrub: 2.76,
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

export function initHeroTitleAnimation() {
  //moving the graphics
  const laptop = document.querySelector(".statImg");
  document.addEventListener("mousemove", (event) => {
    gsap.to(laptop, {
      x: -(window.innerWidth / 2 - event.clientX) * 0.03, // Mouse-driven movement
      y: -(window.innerHeight / 2 - event.clientY) * 0.03,
      duration: 1.5,
      ease: "power4.out",
    });
  });
  gsap.to(laptop, {
    x: 5,
    y: 5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });

  const tlLand = gsap.timeline({
    defaults: { duration: 1.75, ease: "power1.out" },
  });
  tlLand.fromTo(
    ".intro-js",
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.35 },
  );
  tlLand.from(".heroTitle-js", {
    rotationX: -100,
    transformOrigin: "50% 50% -70px",
    opacity: 0,
    duration: 0.8,
    ease: "power3",
    stagger: 0.25,
  });
  tlLand.from(
    ".heroPara-js",
    {
      y: 20,
      opacity: 0,
      duration: 0.97,
      ease: "power3",
      stagger: 0.25,
    },
    "<50%",
  );
}

function hoverAnimation(serviceClass, serviceImgArr) {
  console.log(`Searching for elements inside: ${serviceClass}`);

  const serviceContainers = document.querySelectorAll(serviceClass);

  if (serviceContainers.length === 0) {
    console.error(`❌ No elements found for selector: ${serviceClass}`);
    return;
  }

  serviceContainers.forEach((container) => {
    // Now we search for `.serviceName1`, `.serviceName2`, etc., inside each service container
    const serviceElements = container.querySelectorAll(
      "[class*='serviceName']",
    );

    console.log(
      `🔍 Found ${serviceElements.length} elements inside ${serviceClass}:`,
      serviceElements,
    );

    // Get the showcase image container
    let showcaseImgElement;
    if (serviceClass === ".service1-js") {
      showcaseImgElement = document.querySelector(
        ".showcaseContainer1-js .showcaseImg-js",
      );
    } else if (serviceClass === ".service2-js") {
      showcaseImgElement = document.querySelector(
        ".showcaseContainer2-js .showcaseImg-js",
      );
    } else if (serviceClass === ".service3-js") {
      showcaseImgElement = document.querySelector(
        ".showcaseContainer3-js .showcaseImg-js",
      );
    }
    console.log(showcaseImgElement);

    serviceElements.forEach((serviceElement) => {
      serviceElement.addEventListener("mouseenter", () => {
        console.log("🔥 Hovering over:", serviceElement.classList);

        gsap.set(serviceElement, {
          backgroundImage:
            "linear-gradient(to bottom, white 90%, transparent 100%)",
          backgroundSize: "100% 0%", // Start hidden from bottom
          backgroundRepeat: "no-repeat",
          overflow: "hidden", // Prevent content shift
        });

        gsap.to(serviceElement, {
          backgroundSize: "100% 100%",
          duration: 0.3,
          ease: "power2.out",
          padding: "13px",
        });

        // Find the correct image container dynamically
        // const showcaseImgElement = container.querySelector(".showcaseImg-js");
        if (showcaseImgElement) {
          console.log("✅ Updating image for", serviceElement.classList[2]);
          gsap.to(showcaseImgElement, {
            opacity: 0,
            duration: 0.3,
            onComplete: function () {
              showcaseImgElement.src =
                serviceImgArr[serviceElement.classList[2]];
              gsap.to(showcaseImgElement, { opacity: 1, duration: 0.3 });
            },
          });
        } else {
          console.error(
            "❌ No showcase image found inside",
            showcaseImgElement,
          );
        }
      });

      serviceElement.addEventListener("mouseleave", () => {
        gsap.to(serviceElement, {
          backgroundSize: "100% 0%",
          duration: 0.6,
          ease: "power2.out",
          padding: "12px 0px",
        });
      });
    });
  });
}
