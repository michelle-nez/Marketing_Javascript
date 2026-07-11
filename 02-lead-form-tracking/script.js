window.dataLayer = window.dataLayer || [];

const form = document.querySelector("#leadForm");
const formStatus = document.querySelector("#formStatus");
const eventLog = document.querySelector("#eventLog");

form.addEventListener("submit", event => {
  event.preventDefault();

  // TODO 1: Read and trim name and email.
  // TODO 2: Read the selected interest.
  // TODO 3: If any value is missing, show an error and return.
  // TODO 4: Create a lead_form_submit event that includes only formName and interest.
  // IMPORTANT: Do not put name or email in the analytics event.
  // TODO 5: Push the event, show success, and reset the form.
});
