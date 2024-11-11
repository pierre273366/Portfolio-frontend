let menuToggle = document.querySelector(".toggle");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function playSound() {
  const clickSound = document.getElementById("click-hamburger");
  clickSound.play();
}
