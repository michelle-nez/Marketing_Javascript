const billingToggle = document.querySelector("#billingToggle");
const saveBadge = document.querySelector("#saveBadge");
const planCards = document.querySelectorAll("[data-monthly-price]");

const STORAGE_KEY = "billing_annual";
const ANNUAL_DISCOUNT = 0.2;

function renderPrices(isAnnual) {
  // TODO 1: For each planCard, read data-monthly-price. If isAnnual, compute
  // the discounted monthly-equivalent price: monthlyPrice * (1 -
  // ANNUAL_DISCOUNT), rounded to a whole number, and show it as
  // `$${price}/mo`. If not annual, show the plain monthly price the same
  // way. Write the result into that card's ".price-display" element.

  // TODO 2: Toggle the "hidden" class on saveBadge — visible only when
  // isAnnual is true.
}

billingToggle.addEventListener("change", () => {
  // TODO 3: Call renderPrices() with billingToggle.checked, and save that
  // boolean to localStorage under STORAGE_KEY.
});

// TODO 4: On page load, read STORAGE_KEY from localStorage (JSON.parse it;
// default to false if nothing is stored), set billingToggle.checked to it,
// and call renderPrices() with it.
