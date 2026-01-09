// Simple vanilla JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMe");
  const message = document.getElementById("message");
  let clickCount = 0;

  // Modal functionality - open modal when button has data-modal attribute
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".modal-close");
  const featureCards = document.querySelectorAll(".feature-card");

  // Open modal when feature card or button with data-modal is clicked
  const modalTriggers = document.querySelectorAll("[data-modal]");
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close modal when close button is clicked
  closeButtons.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      const modal = this.closest(".modal");
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  });

  // Close modal when clicking outside of modal content
  modals.forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (event.target === this) {
        this.classList.remove("show");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modals.forEach((modal) => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
      });
    }
  });

  // Multi-step modal navigation for modal1
  const modal1 = document.getElementById("modal1");
  if (modal1) {
    const steps = modal1.querySelectorAll(".modal-step");
    const prevButton = modal1.querySelector(".prev-button");
    const nextButton = modal1.querySelector(".next-button");
    const currentStepSpan = modal1.querySelector(".current-step");
    let currentStep = 1;
    const totalSteps = steps.length;

    function updateStepDisplay() {
      steps.forEach((step) => {
        step.classList.remove("active");
      });
      steps[currentStep - 1].classList.add("active");
      currentStepSpan.textContent = currentStep;

      // Update button visibility
      prevButton.style.display = currentStep === 1 ? "none" : "block";
      nextButton.style.display = currentStep === totalSteps ? "none" : "block";

      // Scroll modal to top
      modal1.scrollTop = 0;
    }

    nextButton.addEventListener("click", function () {
      if (currentStep < totalSteps) {
        currentStep++;
        updateStepDisplay();
      }
    });

    prevButton.addEventListener("click", function () {
      if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
      }
    });
  }

  // Multi-step modal navigation for modal3
  const modal3 = document.getElementById("modal3");
  if (modal3) {
    const steps = modal3.querySelectorAll(".modal-step");
    const prevButton = modal3.querySelector(".prev-button");
    const nextButton = modal3.querySelector(".next-button");
    const currentStepSpan = modal3.querySelector(".current-step");
    let currentStep = 1;
    const totalSteps = steps.length;

    function updateStepDisplay() {
      steps.forEach((step) => {
        step.classList.remove("active");
      });
      steps[currentStep - 1].classList.add("active");
      currentStepSpan.textContent = currentStep;

      // Update button visibility
      prevButton.style.display = currentStep === 1 ? "none" : "block";
      nextButton.style.display = currentStep === totalSteps ? "none" : "block";

      // Scroll modal to top
      modal3.scrollTop = 0;
    }

    nextButton.addEventListener("click", function () {
      if (currentStep < totalSteps) {
        currentStep++;
        updateStepDisplay();
      }
    });

    prevButton.addEventListener("click", function () {
      if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
      }
    });
  }

  // Log to console when page loads
  console.log("Kawashimo app loaded successfully!");
  console.log("Running on Azure Static Web Apps");
});
