const body = document.body;
const toggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll(".nav-links a");

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", body.classList.contains("nav-open") ? "true" : "false");
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";
navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  reveals.forEach((node) => observer.observe(node));
} else {
  reveals.forEach((node) => node.classList.add("in"));
}

document.querySelectorAll("[data-video-toggle]").forEach((button) => {
  const selector = button.getAttribute("data-video-toggle");
  const video = document.querySelector(selector);
  if (!video) return;

  button.addEventListener("click", () => {
    video.muted = !video.muted;
    button.textContent = video.muted ? "Sound Off" : "Sound On";
  });
});
