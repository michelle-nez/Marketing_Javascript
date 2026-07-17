window.dataLayer = window.dataLayer || [];

const regionSelect = document.querySelector("#regionSelect");
const productCards = document.querySelectorAll("[data-price-usd]");
const eventLog = document.querySelector("#eventLog");

const STORAGE_KEY = "selected_region";

const regions = {
  US: { currency: "USD", locale: "en-US", rate: 1 },
  UK: { currency: "GBP", locale: "en-GB", rate: 0.79 },
  EU: { currency: "EUR", locale: "de-DE", rate: 0.92 }
};

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Region event:", eventData);
}

// TODO 1: Write renderPrices(region). For each element in productCards,
// read data-price-usd, multiply it by regions[region].rate, and format it
// with new Intl.NumberFormat(regions[region].locale, { style: "currency",
// currency: regions[region].currency }).format(convertedPrice). Write the
// formatted string into that card's ".price-display" element.
function renderPrices(region) {

}

regionSelect.addEventListener("change", () => {
  // TODO 2: Call renderPrices() with the new value, save it to
  // localStorage under STORAGE_KEY, and push/log a region_changed event.
});

// TODO 3: On page load, read STORAGE_KEY from localStorage (default to
// "US" if nothing is stored), set regionSelect.value to it, and call
// renderPrices() with it.
