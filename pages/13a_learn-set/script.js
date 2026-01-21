import gsap from "gsap";

gsap.set('.gsap-box', {
    opacity: 0,
    scale: 0.5,
    y: 500,
    x: 500,
})

gsap.to('.gsap-box', {
    opacity: 1,
    delay: 0.5,
    scale: 1,
    x: 0,
    y: 0,
    duration: 2,
    ease: 'expo.out',
})