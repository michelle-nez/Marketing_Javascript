window.dataLayer = window.dataLayer || [];

const backdrop = document.querySelector("#exitModalBackdrop");
const closeModalBtn = document.querySelector("#closeModalBtn");
const claimOfferBtn = document.querySelector("#claimOfferBtn");
const simulateExitBtn = document.querySelector("#simulateExitBtn");
const eventLog = document.querySelector("#eventLog");

const SESSION_KEY = "exit_intent_shown";

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Popup event:", eventData);
}

function showModal() {
  // TODO 1: If sessionStorage already has SESSION_KEY, do nothing. Otherwise
  // remove the "hidden" class from backdrop, set SESSION_KEY in
  // sessionStorage, and push/log an exit_intent_shown event.
}

function hideModal() {
  // TODO 2: Add the "hidden" class back to backdrop.
  backdrop.classList.add("hidden");
}

document.addEventListener("mouseout", event => {
  // TODO 3: If event.clientY is at or above 0 (mouse left toward the top of
  // the window), call showModal().
});

// TODO 4: Wire up closeModalBtn, clicking the backdrop itself (but not the
// modal contents), and the Escape key to all call hideModal().

claimOfferBtn.addEventListener("click", () => {
  // TODO 5: Push/log an exit_intent_claimed event, then hideModal().
});

simulateExitBtn.addEventListener("click", showModal);
