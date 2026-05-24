/* ==========================================
   KAYUPRIMA - MAIN SCRIPTS
   ------------------------------------------
   This file handles the main interactions:
   1. Mouse Glow Effect (Hero)
   2. Login Modal Controls
   3. Premium Section Locking Logic
   ========================================== */

/* 1. MOUSE GLOW EFFECT (HERO) */
const glow = document.querySelector(".mouse-glow");
const hero = document.querySelector(".hero");

if (hero && glow) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  });
}

/* 2. LOGIN MODAL CONTROLS */
const loginBtn = document.querySelector(".login-btn");
const unlockBtn = document.querySelector(".unlock-btn");
const loginModal = document.querySelector(".login-modal");
const closeModal = document.querySelector(".close-modal");
const submitLogin = document.querySelector(".submit-login");
const premiumSection = document.querySelector(".premium-section");

/* Open Modal */
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    loginModal.classList.add("active");
  });
}

if (unlockBtn) {
  unlockBtn.addEventListener("click", () => {
    loginModal.classList.add("active");
  });
}

/* Close Modal */
if (closeModal) {
  closeModal.addEventListener("click", () => {
    loginModal.classList.remove("active");
  });
}

/* 3. PREMIUM SECTION LOGIC (FAKE LOGIN) */
if (submitLogin) {
  submitLogin.addEventListener("click", () => {
    // Tutup Modal
    loginModal.classList.remove("active");
    
    // Buka Akses Premium
    if (premiumSection) {
      premiumSection.classList.remove("locked");
    }
    
    console.log("Login sukses, akses premium terbuka.");
  });
}