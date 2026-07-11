window.dataLayer = window.dataLayer || [];

const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const eventLog = document.querySelector("#eventLog");
const milestones = [25, 50, 75, 100];
const reached = new Set();
let scheduled = false;

function getScrollPercent() {
  // TODO: Return a rounded percentage based on scrollY and total scrollable height.
}

function updateScrollDepth() {
  // TODO 1: Update the progress bar and text.
  // TODO 2: For each reached milestone not already in the Set, push a scroll_depth event.
  // TODO 3: Set scheduled back to false.
}

window.addEventListener("scroll", () => {
  // TODO: Use requestAnimationFrame so updateScrollDepth is not called continuously.
});

updateScrollDepth();
