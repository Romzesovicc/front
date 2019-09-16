let slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,9000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}