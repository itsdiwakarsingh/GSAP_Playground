import gsap from "gsap";
// Select the main floating action button (FAB)
const fab = document.querySelector(".fab");

// Select all child action buttons
const children = document.querySelectorAll(".fab-child");

// Set how far the children spread out from the center
const radius = 100;

// Track whether menu is expanded or collapsed
let expanded = false;

fab.addEventListener("click", () => {
  expanded = !expanded;

  // Toggle button symbol (＋ / ×)
  fab.textContent = expanded ? "X" : "+";

  if (expanded) {
    // Define arc of expansion: spread over 90 degrees
    const arcSpan = Math.PI / 1.5; // radians
    const startAngle = Math.PI / 2 + arcSpan / 2; // start at top-center

    gsap.to(children, {
      x: (i) => Math.cos(startAngle - i * (arcSpan / (children.length - 1))) * radius,
      y: (i) => -Math.sin(startAngle - i * (arcSpan / (children.length - 1))) * radius,
      opacity: 1,
      rotate: 360,
      duration: 0.5,
      ease: 'expo.out',
      pointerEvents: 'auto',
    });
  } else {
    gsap.to(children, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power1.out',
      pointerEvents: 'none',
    });
  }
});
