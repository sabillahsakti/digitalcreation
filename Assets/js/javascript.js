var sliderIndex = 0;
var sliderTrack = document.querySelector('.slider-track');
var slides = document.querySelectorAll('.slider-track img');
var slideWidth = slides[0].clientWidth;

function changeSlide(n) {
    sliderIndex += n;

    if (sliderIndex < 0) {
        sliderIndex = slides.length - 1;
    } else if (sliderIndex >= slides.length) {
        sliderIndex = 0;
    }

    sliderTrack.style.transform = `translateX(-${sliderIndex * slideWidth}px)`;
}
