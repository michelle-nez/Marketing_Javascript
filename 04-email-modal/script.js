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
}

function openModal() {
  // TODO: Show backdrop, move focus to emailInput, record newsletter_modal_view.
}

function closeModal(reason) {
  // TODO: Hide backdrop, return focus to openButton, record reason.
}

// TODO: Wire open, close, Escape key, and form submit events.
