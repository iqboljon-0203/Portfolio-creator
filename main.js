// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add scroll animation for header
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
});
// Optional: Add intersection observer for animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observe all logos
document.querySelectorAll(".logo").forEach((logo) => {
  logo.style.animationPlayState = "paused";
  observer.observe(logo);
});
// Intersection Observer for animation on scroll
const observerService = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observe all service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.style.animationPlayState = "paused";
  observerService.observe(card);
});
// Intersection Observer for animation on scroll
const observerProjects = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observe all project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.animationPlayState = "paused";
  observerProjects.observe(card);
});

// Navigation functionality
const projectGrid = document.querySelector(".projects-grid");
const prevButton = document.querySelector(".nav-button:first-child");
const nextButton = document.querySelector(".nav-button:last-child");

let currentScroll = 0;
const scrollAmount = 300;

prevButton.addEventListener("click", () => {
  currentScroll = Math.max(currentScroll - scrollAmount, 0);
  projectGrid.scrollTo({
    left: currentScroll,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  currentScroll = Math.min(
    currentScroll + scrollAmount,
    projectGrid.scrollWidth - projectGrid.clientWidth
  );
  projectGrid.scrollTo({
    left: currentScroll,
    behavior: "smooth",
  });
});
// Intersection Observer for animation on scroll
const observerBlog = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observe all blog items
document.querySelectorAll(".blog-item").forEach((item) => {
  item.style.animationPlayState = "paused";
  observerBlog.observe(item);
});
const track = document.querySelector(".testimonial-track");
const slides = document.querySelectorAll(".testimonial");
const prevButtonTest = document.querySelector(".nav-button.prev");
const nextButtonTest = document.querySelector(".nav-button.next");

let currentIndex = 0;

function updateSlider() {
  // Update transform
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active class
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  // Update button states
  prevButtonTest.disabled = currentIndex === 0;
  nextButtonTest.disabled = currentIndex === slides.length - 1;
}

prevButtonTest.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButtonTest.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Initialize slider
updateSlider();

// Optional: Auto-advance slides
let autoAdvance = setInterval(() => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  } else {
    currentIndex = 0;
    updateSlider();
  }
}, 5000);

// Pause auto-advance on hover
track.addEventListener("mouseenter", () => {
  clearInterval(autoAdvance);
});

track.addEventListener("mouseleave", () => {
  autoAdvance = setInterval(() => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0;
      updateSlider();
    }
  }, 5000);
});

//Faq section
// Accordion functionality
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Close all other accordions
    document.querySelectorAll(".accordion-button").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute("aria-expanded", "false");
        otherButton.nextElementSibling.style.maxHeight = "0";
      }
    });

    // Toggle current accordion
    button.setAttribute("aria-expanded", !isExpanded);
    if (!isExpanded) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});

// Update accordion height on window resize
window.addEventListener("resize", () => {
  document
    .querySelectorAll('.accordion-button[aria-expanded="true"]')
    .forEach((button) => {
      const content = button.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
    });
});
