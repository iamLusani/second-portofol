document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("header");

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Change header background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "#222";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });

  // Lightbox functionality
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.querySelector(".close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      lightbox.style.display = "block";
      lightboxImage.src = this.querySelector("img").src;
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Form submission

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(
        function (response) {
          alert("Email sent successfully!");
        },
        function (error) {
          alert("Failed to send email. Please try again later.");
        }
      );
    });
});
