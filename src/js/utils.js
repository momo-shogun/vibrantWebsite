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
      x: config.x,
      y: config.y,
      rotation: config.rotation,
      duration: config.duration,
      ease: config.ease || 'power1.inOut',
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
      console.error('Required elements not found for animation');
      return;
    }

    // Add event listeners
    this.container.addEventListener('mousemove', this.handleMouseMove);
    this.container.addEventListener('mouseleave', this.handleMouseLeave);

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
      ease: 'power1.out',
      duration: 0.5,
    });

    // Set timeout to restart auto-movement
    this.mouseMoveTimeout = setTimeout(
      this.startAutoMovement,
      this.animationConfig.inactivityTimeout
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
    this.container.removeEventListener('mousemove', this.handleMouseMove);
    this.container.removeEventListener('mouseleave', this.handleMouseLeave);

    if (this.currentAutoMovement) {
      this.currentAutoMovement.kill();
    }

    clearTimeout(this.mouseMoveTimeout);
  }
}
