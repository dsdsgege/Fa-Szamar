let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const totalSlides = slides.length;

function showItems() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
    }
}
window.onload=showItems();

function moveSlide(direction) {
    currentSlide += direction;

    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100; // A slide eltolása
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}