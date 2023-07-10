/*-----------------------------------------------------------------------------------*/
/*	NICESCROLL
/*-----------------------------------------------------------------------------------*/
// jQuery(document).ready(function() {
// 	jQuery("body").niceScroll({
// 		cursorcolor:"#333",
// 		cursorborder:"0px",
// 		cursorwidth :"8px",
// 		zindex:"9999"
// 	});
// });

/*Paused function when detecting errors in code.

/*-----------------------------------------------------------------------------------*/
/*	Services animation area
/*-----------------------------------------------------------------------------------*/
const icons = document.querySelectorAll('.sci li');
const bgSection = document.querySelector('#services');
// let serviceFirstTime = true;

// if(serviceFirstTime) {
//   bgSection.style.backgroundColor = icons[5].getAttribute('data-color');
// }

icons.forEach(icon => {
  icon.addEventListener('mouseenter', (event) => {
    let color = event.target.getAttribute('data-color');
    bgSection.style.backgroundColor = color;
  });
});

/*-----------------------------------------------------------------------------------*/
/*	Vanilla tilt js 
/*-----------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const tiltElemnts = document.querySelectorAll('.sci li');
  VanillaTilt.init(tiltElemnts, {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1
  });
});

/*-----------------------------------------------------------------------------------*/
/*	Slider-draggable-custom
/*-----------------------------------------------------------------------------------*/
const slider = document.querySelector('.slider-draggable'),
  firstImg = slider.querySelectorAll('.slide-item img')[0],
  arrowIcons = document.querySelectorAll('.slider-draggable-container span');


let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = 0; 

// Function for getting image width
function getFirstImgWidth() {
  const firstImg = slider.querySelector('.slide-item img');
  firstImgWidth = firstImg.clientWidth;
}

const showHideIcons = () => {
  let scrollWidth = slider.scrollWidth - slider.clientWidth; //Getting max scrolleable width
  arrowIcons[0].style.display = slider.scrollLeft == 0 ? 'none' : 'inline-block';
  arrowIcons[1].style.display = slider.scrollLeft == scrollWidth ? 'none' : 'inline-block';
}

// Functions for buttons
arrowIcons.forEach(button => {
  button.addEventListener('click', () => {
    // If clicked button is left, reuce width value from the carousel scroll left else add to it
    const displacement = button.id == 'btn-prev' ? -firstImgWidth : firstImgWidth;
    smoothScrollTo(slider, slider.scrollLeft + displacement, 250); //Element / Displacement's element / Time Animation
    setTimeout(() => showHideIcons(), 60); //calling showHideIcons after 60ms.
  });
});

// Functions for Dragging
const dragStart = (event) => {
  // Updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = event.pageX || event.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
};

const dragging = (event) => {
  // Scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  event.preventDefault();
  slider.classList.add('dragging-on');
  positionDiff = (event.pageX || event.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  slider.classList.remove('dragging-on');

  // autoSlideAdapt();
};

// function autoSlideAdapt() {
//   positionDiff = Math.abs(positionDiff);
//   let valDifference = firstImgWidth - positionDiff;

//   if (slider.scrollLeft > prevScrollLeft) {
//     if (positionDiff > firstImgWidth / 2) {
//       smoothScrollTo(slider, Math.ceil(slider.scrollLeft / firstImgWidth) * firstImgWidth, 250);
//     } else {
//       smoothScrollTo(slider, Math.floor(slider.scrollLeft / firstImgWidth) * firstImgWidth, 250);
//     }
//   } else {
//     if (positionDiff > firstImgWidth / 2) {
//       smoothScrollTo(slider, Math.floor(slider.scrollLeft / firstImgWidth) * firstImgWidth, 250);
//     } else {
//       smoothScrollTo(slider, Math.ceil(slider.scrollLeft / firstImgWidth) * firstImgWidth, 250);
//     }
//   }
// }

// Smooth displacement function
function smoothScrollTo(element, to, duration) {
  const start = element.scrollLeft;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

// Acceleration / deceleration function
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);

slider.addEventListener('mousemove', dragging);
slider.addEventListener('touchmove', dragging);

slider.addEventListener('mouseup', dragStop);
slider.addEventListener('mouseleave', dragStop);
slider.addEventListener('touchend', dragStop);
window.addEventListener('resize', getFirstImgWidth);

getFirstImgWidth(); //Getting first time image size
/*-----------------------------------------------------------------------------------*/
/*	Scroll animation area
/*-----------------------------------------------------------------------------------*/
let animationTargets = [];
const elemenTarget = [
  'meet-us-load',
  'services-load',
  'branding-load-sc1',
  'branding-load-sc2'
];

const observerOptions = {
  root: null, // Observar el viewport
  rootMargin: '0px 0px 0px 0px', // Sin margen adicional
  threshold: 0.5 // Umbral de intersección del 50%
};

const loadArea = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visiblePage');
    }
  });
}

const mainObserver = new IntersectionObserver(loadArea, observerOptions);

elemenTarget.forEach(element => {
  animationTargets.push(document.getElementById(element));
})

animationTargets.forEach(target => {
  mainObserver.observe(target);
})
