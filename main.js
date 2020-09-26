const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

console.log(window.innerWidth);
document.documentElement.style.setProperty(
  "--imgHeight",
  `${window.innerWidth / 1.45631067961165}px`
);

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});
