window.dataLayer = window.dataLayer || [];

const openButton = document.querySelector("#openModal");
const closeButton = document.querySelector("#closeModal");
const backdrop = document.querySelector("#modalBackdrop");
const form = document.querySelector("#signupForm");
const emailInput = document.querySelector("#signupEmail");
const eventLog = document.querySelector("#eventLog");
const modalStatus = document.querySelector("#modalStatus");

function recordEvent(eventName) {
  // TODO: Push { event: eventName, offer: "monthly_newsletter" } and display it.
  const event = {
    event: eventName,
    offer: "monthly_newsletter"
  };
  window.dataLayer.push(event);
  eventLog.textContent = JSON.stringify(event, null, 2);
  console.log("Event recorded:", event);
}

function openModal() {
  // TODO: Show backdrop, move focus to emailInput, record newsletter_modal_view.
  backdrop.style.display = "block";
  emailInput.focus();
  recordEvent("newsletter_modal_view");
  console.log("Modal opened");
}

function closeModal(reason) {
  // TODO: Hide backdrop, return focus to openButton, record reason.
  backdrop.style.display = "none";
  openButton.focus();
  recordEvent(`newsletter_modal_close_${reason}`);
  console.log(`Modal closed due to: ${reason}`);
}

// TODO: Wire open, close, Escape key, and form submit events.
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", () => closeModal("button"));

backdrop.addEventListener("click", () => closeModal("backdrop"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && backdrop.style.display === "block") {
    closeModal("escape");
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  recordEvent("newsletter_modal_submit");
  modalStatus.textContent = "Thank you for signing up!";
  closeModal("submit");
});
console.log("Event listeners set up");
