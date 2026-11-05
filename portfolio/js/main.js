/* ============================================
   Portfolio — interactions
   ============================================ */

// ---------- Mobile navigation ----------
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// ---------- Gallery filter ----------
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const category = btn.dataset.filter;
    cards.forEach((card) => {
      const show = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !show);
    });
  });
});

// ---------- Lightbox ----------
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox__caption");
const closeBtn = lightbox.querySelector(".lightbox__close");

function openLightbox(title, imgSrc) {
  lightboxImg.src = imgSrc;
  lightboxImg.alt = title;
  lightboxCaption.textContent = title;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

cards.forEach((card) => {
  const open = () => {
    const title = card.querySelector("h3").textContent;
    // Use the project image if present, otherwise its placeholder text
    const img = card.querySelector("img");
    if (img) {
      openLightbox(title, img.src);
    } else {
      // No image yet — fall back to the placeholder as a simple preview
      openLightbox(title, "");
      lightboxCaption.textContent = `${title} — add images/project-*.jpg to enable the preview.`;
    }
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") open();
  });
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// ---------- Reveal on scroll ----------
const revealTargets = document.querySelectorAll(
  ".section__head, .skill-card, .work-card, .about__grid, .hero__actions, .contact__text"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
