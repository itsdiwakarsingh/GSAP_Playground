import gsap from "gsap";

gsap.to(".box", {
    opacity: 1,
    duration: 2,
    rotate: 360,
    background: '#f21919ff',
    repeat: -1,
    borderRadius: "50%",
    scale: 1.25,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 1,


})