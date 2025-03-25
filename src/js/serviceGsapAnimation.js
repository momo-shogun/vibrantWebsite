export class ElementAnimator {
  /**
   * Create an animator for a specific element
   * @param {Object} config - Configuration for the animation
   */
  constructor(config) {
    // Required parameters
    this.element = config.element;
    this.container = config.container;

    // Animation parameters with defaults
    this.animationConfig = {
      x: config.x || 10,
      y: config.y || 20,
      rotation: config.rotation || 180,
      duration: config.duration || 2,
      ease: config.ease || "power1.inOut",
      mouseMoveScale: config.mouseMoveScale || 20,
      inactivityTimeout: config.inactivityTimeout || 2000,
    };

    // State tracking
    this.currentAutoMovement = null;
    this.mouseMoveTimeout = null;

    // Bind methods to maintain context
    this.startAutoMovement = this.startAutoMovement.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // Initialize the animator
    this.init();
  }

  /**
   * Initialize the element animator
   */
  init() {
    // Validate required elements
    if (!this.element || !this.container) {
      console.error("Required elements not found for animation");
      return;
    }

    // Add event listeners
    this.container.addEventListener("mousemove", this.handleMouseMove);
    this.container.addEventListener("mouseleave", this.handleMouseLeave);

    // Trigger initial auto-movement after page load
    setTimeout(this.startAutoMovement, 500);
  }

  /**
   * Create a reusable auto-movement animation
   * @returns {gsap.Timeline} GSAP animation timeline
   */
  createAutoMovement() {
    return gsap
      .timeline({
        repeat: -1,
        yoyo: true,
      })
      .to(this.element, {
        x: this.animationConfig.x,
        y: this.animationConfig.y,
        rotation: this.animationConfig.rotation,
        duration: this.animationConfig.duration,
        ease: this.animationConfig.ease,
      });
  }

  /**
   * Start auto-movement animation
   */
  startAutoMovement() {
    // Kill any existing animations
    if (this.currentAutoMovement) {
      this.currentAutoMovement.kill();
    }

    // Create and start new auto-movement
    this.currentAutoMovement = this.createAutoMovement();
    this.currentAutoMovement.play();
  }

  /**
   * Handle mouse move event
   * @param {MouseEvent} e - Mouse event
   */
  handleMouseMove(e) {
    // Clear any existing timeout
    clearTimeout(this.mouseMoveTimeout);

    // Pause current auto-movement
    if (this.currentAutoMovement) {
      this.currentAutoMovement.pause();
    }

    // Calculate mouse position relative to the container
    const rect = this.container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the movement
    const deltaX =
      (mouseX - this.element.offsetLeft) / this.animationConfig.mouseMoveScale;
    const deltaY =
      (mouseY - this.element.offsetTop) / this.animationConfig.mouseMoveScale;

    // Animate the element using GSAP
    gsap.to(this.element, {
      x: deltaX,
      y: deltaY,
      rotation: deltaX * 0.5, // Slight rotation based on movement
      ease: "power1.out",
      duration: 0.5,
    });

    // Set timeout to restart auto-movement
    this.mouseMoveTimeout = setTimeout(
      this.startAutoMovement,
      this.animationConfig.inactivityTimeout,
    );
  }

  /**
   * Handle mouse leave event
   */
  handleMouseLeave() {
    // Kill any existing mouse-tracking animations
    gsap.killTweensOf(this.element);

    // Start auto-movement
    this.startAutoMovement();
  }

  /**
   * Destroy the animator and remove event listeners
   */
  destroy() {
    this.container.removeEventListener("mousemove", this.handleMouseMove);
    this.container.removeEventListener("mouseleave", this.handleMouseLeave);

    if (this.currentAutoMovement) {
      this.currentAutoMovement.kill();
    }

    clearTimeout(this.mouseMoveTimeout);
  }
}

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
  // Select elements
  const alienImage = document.getElementById("alien-image");
  const c1Image = document.getElementById("c1-image");
  const d1Image = document.getElementById("d1-image");
  const b0Image = document.getElementById("b0-image");
  const pageOneContainer = document.querySelector(".pageOne-js");

  // Create animators with different configurations
  const alienAnimator = new ElementAnimator({
    element: alienImage,
    container: pageOneContainer,
    x: 10,
    y: 20,
    rotation: 180,
    mouseMoveScale: 20,
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

  const d1Animator = new ElementAnimator({
    element: d1Image,
    container: pageOneContainer,
    x: 7, // Different x movement
    y: 14, // Different y movement
    rotation: -10, // Different rotation
    mouseMoveScale: 100, // Different mouse sensitivity
    duration: 2, // Slightly different duration
  });

  const b0Animator = new ElementAnimator({
    element: b0Image,
    container: pageOneContainer,
    x: -17, // Different x movement
    y: -14, // Different y movement
    rotation: -30, // Different rotation
    mouseMoveScale: 50, // Different mouse sensitivity
    duration: 5, // Slightly different duration
  });

  // Title and paragraph animations (kept from previous implementation)
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
        trigger: ".clientPage-js",
        start: "top 90%",
        end: "0%",
        scrub: 2.7,
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
