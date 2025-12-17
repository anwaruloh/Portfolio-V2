const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => observer.observe(el));

const cards = document.querySelectorAll(".project-card");
/* Windows */
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
/* HP */
cards.forEach((card) => {
  card.addEventListener("touchstart", (e) => {
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    card.style.setProperty("--x", `${touch.clientX - rect.left}px`);
    card.style.setProperty("--y", `${touch.clientY - rect.top}px`);
    card.classList.add("mobile-glow");
  });
});
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
