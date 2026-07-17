window.dataLayer = window.dataLayer || [];

let consent = localStorage.getItem("analytics_consent") || "unknown";
const queuedEvents = [];
const eventTable = document.querySelector("#eventTable");
const consentStatus = document.querySelector("#consentStatus");

function renderConsent() {
  // TODO: Display whether consent is unknown, granted, or denied.
}

function sendAnalyticsEvent(eventName) {
  // TODO 1: Create an event object with event and timestamp.
  // TODO 2: If granted, push to dataLayer and render as recorded.
  // TODO 3: If unknown, queue it and render as queued.
  // TODO 4: If denied, do not store it; render as blocked.
}

function flushQueue() {
  // TODO: Push every queued event after consent is granted, then empty the queue.
}

// TODO: Wire accept, reject, reset, and all .marketing-action buttons.
renderConsent();
