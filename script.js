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

//photo presentation :

document.addEventListener("DOMContentLoaded", function () {
  const photoContainer = document.getElementById("photo-container");
  setTimeout(() => {
    photoContainer.style.display = "block";
    setTimeout(() => {
      photoContainer.style.display = "none";
    }, 8000);
  }, 2000);
});

// Barre skills:

function moveJs() {
  let elem = document.getElementById("progress-bar-js");
  let width = 0;
  let id = setInterval(frame, 20);

  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveJs();

function moveHtml() {
  let elem = document.getElementById("progress-bar-html");
  let width = 0;
  let id = setInterval(frame, 20);

  function frame() {
    if (width >= 55) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveHtml();

function moveCss() {
  let elem = document.getElementById("progress-bar-css");
  let width = 0;
  let id = setInterval(frame, 20);

  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveCss();

function moveReact() {
  let elem = document.getElementById("progress-bar-react");
  let width = 0;
  let id = setInterval(frame, 20);

  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

//Carrouselle:

moveReact();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  speed: 600,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
