window.dataLayer = window.dataLayer || [];

const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const eventLog = document.querySelector("#eventLog");
const milestones = [25, 50, 75, 100];
const reached = new Set();
let scheduled = false;

function getScrollPercent() {
  // TODO: Return a rounded percentage based on scrollY and total scrollable height.
   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableHeight <= 0) return 100;
  return Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100));

}

function updateScrollDepth() {
  // TODO 1: Update the progress bar and text.
  const percent = getScrollPercent();
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}% viewed`;

  // TODO 2: For each reached milestone not already in the Set, push a scroll_depth event.
milestones.forEach(milestone => {
    if (percent >= milestone && !reached.has(milestone)) {
      reached.add(milestone);
      const eventData = { event: "scroll_depth", percent: milestone, contentId: "operations_article" };
      window.dataLayer.push(eventData);
      eventLog.textContent = JSON.stringify(eventData, null, 2);
    }
  });

  // TODO 3: Set scheduled back to false.
  scheduled = false;
}

window.addEventListener("scroll", () => {
  // TODO: Use requestAnimationFrame so updateScrollDepth is not called continuously.
  if (!scheduled) {
     scheduled = true;
    requestAnimationFrame(updateScrollDepth);
   
  }
});

updateScrollDepth();
