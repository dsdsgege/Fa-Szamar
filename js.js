let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const totalSlides = slides.length;
let index = 0;


prev.addEventListener("click",function() {
    index--;
    if(index < 0) {
        index = totalSlides-1;
    }
    showItems();

}

)

next.addEventListener("click",function() {
    index++;
    if(index >= totalSlides) {
        index = 0;
    }
    showItems();

}

)

function showItems() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
        slides[i].classList.remove("show");
    }
    slides[index].classList.add("show");
    slides[index].classList.remove("hide");
}




window.onload=showItems();

