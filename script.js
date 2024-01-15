// slider

let currentIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slider img').length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translation = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translation + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// scroll button

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



