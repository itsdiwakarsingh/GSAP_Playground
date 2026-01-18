gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out",
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    })
    gsap.to(".card", {
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), 0 0 60px 20px rgba(84, 160, 255, 0.7)",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut"
    })
  }
})