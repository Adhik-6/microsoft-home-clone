const slidesWrapper = document.getElementById("carouselSlides");
const dots = document.querySelectorAll("#carouselDots button");
let currentSlide = 0;
const totalSlides = dots.length;

function goToSlide(index) {
  currentSlide = index;
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-blue-600", i === currentSlide);
    dot.classList.toggle("bg-gray-400", i !== currentSlide);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  goToSlide(currentSlide);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}, 5000);

goToSlide(0);
