const menuButton = document.querySelector("#menu");
const navPart2 = document.querySelector(".nav-part2");
const circle = document.querySelector("#mini-circle");

menuButton.addEventListener("click", () => {
  menuButton.style.display = "none";
  navPart2.classList.remove("hidden");
  navPart2.classList.add("visible");
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollow() {
  window.addEventListener("mousemove", (details) => {
    circle.style.transform = `
    translate(${details.clientX}px, ${details.clientY}px)
    `;
  });
}
circleMouseFollow();
