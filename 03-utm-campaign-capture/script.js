const campaignSummary = document.querySelector("#campaignSummary");
const formValues = document.querySelector("#formValues");
const form = document.querySelector("#demoForm");

// TODO 1: Create URLSearchParams from window.location.search.
const urlParams = new URLSearchParams(window.location.search);

// TODO 2: Read utm_source, utm_medium, and utm_campaign.
// TODO 3: Fall back to values already stored in sessionStorage.
const campaign = {
  source: params.get("utm_source") || sessionStorage.getItem("utm_source") || "direct",
  medium: params.get("utm_medium") || sessionStorage.getItem("utm_medium") || "none",
  name: params.get("utm_campaign") || sessionStorage.getItem("utm_campaign") || "unassigned"
};

// TODO 4: Save current values to sessionStorage.
sessionStorage.setItem("utm_source", campaign.source);
sessionStorage.setItem("utm_medium", campaign.medium);
sessionStorage.setItem("utm_campaign", campaign.name);

// TODO 5: Fill the three hidden inputs and campaignSummary.
form.querySelector("#utm_source").value = campaign.source;
form.querySelector("#utm_medium").value = campaign.medium;
form.querySelector("#utm_campaign").value = campaign.name;

campaignSummary.textContent = JSON.stringify(campaign, null, 2);


form.addEventListener("submit", event => {
  event.preventDefault();
  // TODO 6: Display the hidden input values inside formValues.
  const values = Object.fromEntries(new FormData(form).entries());
  formValues.textContent = JSON.stringify(values, null, 2);
});
