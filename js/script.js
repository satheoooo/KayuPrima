const glow = document.querySelector(".mouse-glow");
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
});

/* =========================
   LOGIN MODAL
========================= */

const loginBtn = document.querySelector(".login-btn");
const unlockBtn = document.querySelector(".unlock-btn");
const loginModal = document.querySelector(".login-modal");
const closeModal = document.querySelector(".close-modal");
const submitLogin = document.querySelector(".submit-login");
const premiumSection = document.querySelector(".premium-section");

/* open modal */
loginBtn.addEventListener("click", () => {
  loginModal.classList.add("active");
});

unlockBtn.addEventListener("click", () => {
  loginModal.classList.add("active");
});

/* close modal */
closeModal.addEventListener("click", () => {
  loginModal.classList.remove("active");
});

/* fake login */
submitLogin.addEventListener("click", () => {
  loginModal.classList.remove("active");
  premiumSection.classList.remove("locked");
});