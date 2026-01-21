import gsap from "gsap";

const reapeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    delay: 0.2,
    ease: 'power4.out',
    stagger: 0.2,
})

reapeat.addEventListener('click', () => {
    animation.restart();
})