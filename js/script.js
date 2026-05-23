alert("JS CONNECTED");
console.log("JS CONNECTED");

const glow = document.querySelector(".mouse-glow");
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {

  const rect = hero.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;

});