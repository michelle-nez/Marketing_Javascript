const campaignSummary = document.querySelector("#campaignSummary");
const formValues = document.querySelector("#formValues");
const form = document.querySelector("#demoForm");

// TODO 1: Create URLSearchParams from window.location.search.
// TODO 2: Read utm_source, utm_medium, and utm_campaign.
// TODO 3: Fall back to values already stored in sessionStorage.
// TODO 4: Save current values to sessionStorage.
// TODO 5: Fill the three hidden inputs and campaignSummary.

form.addEventListener("submit", event => {
  event.preventDefault();
  // TODO 6: Display the hidden input values inside formValues.
});
