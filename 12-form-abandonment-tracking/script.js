window.dataLayer = window.dataLayer || [];

const form = document.querySelector("#contactForm");
const requiredFields = Array.from(form.querySelectorAll("[data-required='true']"));
const eventLog = document.querySelector("#eventLog");
const simulateLeaveBtn = document.querySelector("#simulateLeaveBtn");

const abandonedFields = new Set();

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Form event:", eventData);
}

requiredFields.forEach(field => {
  // TODO 1: On blur, if field.value is blank, add field.name to
  // abandonedFields. If it has a value, delete field.name from
  // abandonedFields (they came back and filled it in).
  field.addEventListener("blur", () => {

  });
});

simulateLeaveBtn.addEventListener("click", () => {
  // TODO 2: Build a list of required field names that are still empty
  // right now (don't rely only on abandonedFields, check current values).
  // If any are empty, push a form_abandonment event with an
  // incompleteFields array and log it. If none are empty, log a small
  // message instead of an event.
});

form.addEventListener("submit", event => {
  event.preventDefault();
  // TODO 3: If every required field has a value, push a form_submitted
  // event, clear abandonedFields, and log it. Otherwise, do not submit —
  // log a validation message instead.
});
