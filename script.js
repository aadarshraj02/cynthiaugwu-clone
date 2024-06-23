const menuButton = document.querySelector("#menu");
const navPart2 = document.querySelector(".nav-part2");

menuButton.addEventListener("click", () => {
  menuButton.style.display = "none";
  navPart2.classList.remove("hidden");
  navPart2.classList.add("visible");
});
