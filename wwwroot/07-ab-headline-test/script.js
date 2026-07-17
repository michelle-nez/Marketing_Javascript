window.dataLayer = window.dataLayer || [];

const variants = [
  { id: "A", headline: "Reduce customer-service backlogs", subheadline: "Build a more consistent support operation." },
  { id: "B", headline: "Respond to customers faster", subheadline: "Improve workflows, visibility, and service quality." }
];

const headline = document.querySelector("#headline");
const subheadline = document.querySelector("#subheadline");
const variantLabel = document.querySelector("#variantLabel");
const eventLog = document.querySelector("#eventLog");

// TODO 1: Read marketing_headline_variant from localStorage.
// TODO 2: If missing, randomly choose A or B and save it.
// TODO 3: Find the matching variant object and update the page copy.
// TODO 4: Record experiment_impression with experimentId and variant.
// TODO 5: Record experiment_cta_click when the CTA is clicked.
// TODO 6: Reset localStorage and reload when resetVariant is clicked.
