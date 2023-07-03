
// Services animation area
const icons = document.querySelectorAll('.sci li');
const bgSection = document.querySelector('#services');
let serviceFirstTime = true;

if(serviceFirstTime) {
  bgSection.style.backgroundColor = icons[5].getAttribute('data-color');
}

icons.forEach(icon => {
  icon.addEventListener('mouseenter', (event) => {
    let color = event.target.getAttribute('data-color');
    bgSection.style.backgroundColor = color;
  });
  // icon.addEventListener('mouseleave', (event) => {
  //   bgSection.style.backgroundColor = '#ffffff';
  // });
});

// Vanilla tilt js 
document.addEventListener('DOMContentLoaded', () => {
  const tiltElemnts = document.querySelectorAll('.sci li');
  VanillaTilt.init(tiltElemnts, {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1
  });
});

//Scroll animation area
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
