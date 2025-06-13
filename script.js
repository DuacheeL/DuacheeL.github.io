// Check JS is Connected
console.log('JS Connected');

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  // Animation
const container = document.querySelectorAll('.gd-projects-container');
const sections = gsap.utils.toArray(".gd-projects-container section");
const scrollContainer = document.querySelector(".gd-projects-container");
scrollContainer.style.width = `${sections.length * 720}px`;

const scrollLength = scrollContainer.offsetWidth;

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.legnth -1)
  ease: "none",
  scrollTrigger: {
    trigger: ".gd-projects-container",
    pin: true, 
    scrub: 1,
    end: "+=" + scrollLength,
    start: "top top",
    markers: true,
  }
});
});