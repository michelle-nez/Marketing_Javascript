window.dataLayer = window.dataLayer || [];

const marketingConsentCheck = document.querySelector("#marketingConsentCheck");
const currentPageLabel = document.querySelector("#currentPageLabel");
const newRouteBtn = document.querySelector("#newRouteBtn");
const rerenderBtn = document.querySelector("#rerenderBtn");
const eventLog = document.querySelector("#eventLog");

let pageCounter = 0;
let currentPageId = null;
const firedPageviews = new Set();

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Pixel event:", eventData);
}

function firePixel(pageId) {
  // TODO 1: If marketingConsentCheck.checked is false, do nothing.
  // If firedPageviews already has pageId, do nothing (already fired).
  // Otherwise add pageId to firedPageviews and push/log a
  // pixel_page_view event: { event: "pixel_page_view", pageId }.
}

newRouteBtn.addEventListener("click", () => {
  // TODO 2: Increment pageCounter, build a new pageId like `page-${pageCounter}`,
  // store it in currentPageId, update currentPageLabel's text, and call
  // firePixel(currentPageId).
});

rerenderBtn.addEventListener("click", () => {
  // TODO 3: If currentPageId is set, call firePixel(currentPageId) again
  // with the SAME id (simulating a re-render without a real navigation).
});
