document.querySelectorAll(".service-option").forEach((option) => {
  let isActive = false; // Keep track of the active state

  option.addEventListener("click", () => {
    const service = option.getAttribute("data-service");
    if (isActive) {
      // If already active, reverse the animation
      gsap.to(option, {
        scale: 1,
        background: "transparent",
        borderColor: "#6B7280",
        color: "#000",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // If not active, apply the animation
      gsap.to(option, {
        scale: 1.001,
        background: "#007bff",
        borderColor: "#007bff",
        color: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    isActive = !isActive; // Toggle the active state
  });
});

document.querySelectorAll(".pricing-option").forEach((option) => {
  option.addEventListener("click", () => {
    // Find the currently active option
    const activeOption = document.querySelector(".pricing-option.active");

    if (activeOption && activeOption !== option) {
      // Reset the previous active option
      gsap.to(activeOption, {
        scale: 1,
        background: "transparent",
        borderColor: "#6B7280",
        color: "#000",
        duration: 0.3,
        ease: "power2.out",
      });
      activeOption.classList.remove("active");
    }

    // Toggle the clicked option
    const isActive = option.classList.contains("active");
    gsap.to(option, {
      scale: isActive ? 1 : 1.001,
      background: isActive ? "transparent" : "#007bff",
      borderColor: isActive ? "#6B7280" : "#007bff",
      color: isActive ? "#000" : "#fff",
      duration: 0.3,
      ease: "power2.out",
    });

    option.classList.toggle("active");
  });
});
