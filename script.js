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

function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
  })
    .to(".bounding-h1", {
      y: "0",
      duration: 2,
      ease: "expo.inOut",
      stagger: 0.2,
      delay: -1,
    })
    .from("#hero-footer", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut",
      delay: -1,
    });
}

var timeout;
function circleSkew() {
  var xScale = 1;
  var yScale = 1;
  var xPrev = 0;
  var yPrev = 0;

  window.addEventListener("mousemove", (details) => {
    this.clearTimeout(timeout);
    xScale = gsap.utils.clamp(0.8, 1.2, details.clientX - xPrev);
    yScale = gsap.utils.clamp(0.8, 1.2, details.clientY - yPrev);
    xPrev = details.clientX;
    yPrev = details.clientY;
    circleMouseFollow(xScale, yScale);
    timeout = this.setTimeout(() => {
      circle.style.transform = `
        translate(${details.clientX}px, ${details.clientY}px) scale(1,1)
        `;
    }, 100);
  });
}

function circleMouseFollow(xScale, yScale) {
  window.addEventListener("mousemove", (details) => {
    circle.style.transform = `
    translate(${details.clientX}px, ${details.clientY}px) scale(${xScale},${yScale})
    `;
  });
}
document.querySelectorAll(".elem").forEach((elem) => {
  var rotate = 0;
  var difference = 0;
  elem.addEventListener("mousemove", (details) => {
    var diff = details.clientY - elem.getBoundingClientRect().top;
    difference = rotate - details.clientX;
    rotate = details.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, difference * 0.6),
    });
  });

  elem.addEventListener("mouseleave", (details) => {
    var diff = details.clientY - elem.getBoundingClientRect().top;
    difference = rotate - details.clientX;
    rotate = details.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
});

circleMouseFollow();
firstPageAnimation();
circleSkew();
