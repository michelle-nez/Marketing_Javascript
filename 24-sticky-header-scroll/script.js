const siteHeader = document.querySelector("#siteHeader");
const TOP_THRESHOLD = 80;

let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  const currentScrollY = window.scrollY;

  // TODO 1: If currentScrollY is less than TOP_THRESHOLD, always remove
  // "header-hidden" from siteHeader (stay visible near the top).
  // Otherwise: if currentScrollY > lastScrollY, add "header-hidden"
  // (scrolling down). If currentScrollY < lastScrollY, remove
  // "header-hidden" (scrolling up).

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  // TODO 2: Throttle with requestAnimationFrame — if `ticking` is false,
  // set it to true and call requestAnimationFrame(handleScroll).
});
