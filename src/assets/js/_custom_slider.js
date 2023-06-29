'use strict';

let slideIndex = 0;

const plusSlides = (numberSlide) => {
  showSlides(slideIndex += numberSlide);
};

const currentSlides = (numberSlide) => {
  showSlides(slideIndex = numberSlide);
};

const showSlides = (numberSlide) => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');

  if (numberSlide > slides.length) {
    slideIndex = 1;
  }
  if (numberSlide < 1) {
    slideIndex = slides.length;
  }

  // Hide slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Remove active class from dots
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
};

// let slideAutoIndex = 0

const autoSlides = () => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');

  // Hide slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Remove active class from dots
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  // Increment slide index
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

  setTimeout(autoSlides, 5000);
  // Chnage image every 5 seconds
}


showSlides(slideIndex);
autoSlides();