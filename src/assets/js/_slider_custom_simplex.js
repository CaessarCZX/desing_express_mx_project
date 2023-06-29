'use strict';

let slideIndex = 0;
const slideInterval = 5000;
let slideTimer;

const plusSlides = (numberSlide) => {
  showSlides(slideIndex += numberSlide);
};

const currentSlides = (numberSlide) => {
  showSlides(slideIndex = numberSlide);
};

const showSlides = (numberSlide) => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');

  if (numberSlide >= slides.length) {
    slideIndex = 0;
  } else if (numberSlide < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Remove active class from dots
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
};

const startSlideTimer = () => {
  slideTimer = setInterval(() => {
    plusSlides(1);
  }, slideInterval);
};

const stopSlideTimer = () => {
  clearInterval(slideTimer);
};

const pauseOnHover = () => {
  const slider = document.querySelector('.slideshow-container');

  slider.addEventListener('mouseenter', () => {
    stopSlideTimer();
  });

  slider.addEventListener('mouseleave', () => {
    startSlideTimer();
  });
};

const handleVisibilityChange = () => {
  if (document.visibilityState === 'visible') {
    startSlideTimer();
  } else {
    stopSlideTimer();
  }
};

document.addEventListener('visibilitychange', handleVisibilityChange);

showSlides(slideIndex);
startSlideTimer();
pauseOnHover();
