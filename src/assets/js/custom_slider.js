'use strict';

const timeOut = 7000;
let slideIndex = 0;

const plusSlides = (numberSlide) => {
  showSlides(slideIndex += numberSlide);
};

const currentSlides = (numberSlide) => {
  showSlides(slideIndex = numberSlide);
};

const showSlides = (numberSlide) => {
  const slides = document.querySelectorAll('.mySlides');
  const lines = document.querySelectorAll('.line');

  if (numberSlide > slides.length) {
    slideIndex = 1;
  }
  if (numberSlide < 1) {
    slideIndex = slides.length;
  }

  // Hide slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Remove active class from dots
  lines.forEach((line) => {
    line.classList.remove('active');
  });

  slides[slideIndex - 1].classList.add('active');
  lines[slideIndex - 1].classList.add('active');
};

// let slideAutoIndex = 0

const autoSlides = () => {
  const slides = document.querySelectorAll('.mySlides');
  const lines = document.querySelectorAll('.line');

  // Hide slides
  slides.forEach((slide) => {
    // slide.style.display = 'none';
    slide.classList.remove('active');
  });

  // Remove active class from dots
  lines.forEach((line) => {
    line.classList.remove('active');
  });

  // Increment slide index
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  // slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('active');
  lines[slideIndex - 1].classList.add('active');

  setTimeout(autoSlides, timeOut);
  // Chnage image every 5 seconds
}


// showSlides(slideIndex);
autoSlides();