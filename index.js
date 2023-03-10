const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

let index = 0;

display(index);

function display(index) {
  slides.forEach((slide) => (slide.style.display = "none"));

  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;

  if (index > slides.length - 1) {
    index = 0;
  }

  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = 1;
  }

  display(index);
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
