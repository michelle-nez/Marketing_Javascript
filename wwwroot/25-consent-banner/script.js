window.dataLayer = window.dataLayer || [];

const analyticsCheck = document.querySelector("#analyticsCheck");
const marketingCheck = document.querySelector("#marketingCheck");
const savePreferencesBtn = document.querySelector("#savePreferencesBtn");
const acceptAllBtn = document.querySelector("#acceptAllBtn");
const analyticsStatus = document.querySelector("#analyticsStatus");
const marketingStatus = document.querySelector("#marketingStatus");
const eventLog = document.querySelector("#eventLog");

const STORAGE_KEY = "cookie_consent";

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Consent event:", eventData);
}

function readConsent() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { analytics: false, marketing: false };
  } catch {
    return { analytics: false, marketing: false };
  }
}

function applyConsent(consent) {
  // TODO 1: Update analyticsStatus and marketingStatus text to "Analytics:
  // loaded" / "Analytics: not loaded" (and the same for Marketing) based on
  // the consent object. Push/log a consent_updated event listing which
  // categories are currently granted (e.g. { event: "consent_updated",
  // granted: ["analytics"] }).
}

savePreferencesBtn.addEventListener("click", () => {
  // TODO 2: Build a consent object from the checkbox states, save it to
  // localStorage under STORAGE_KEY, and call applyConsent() with it.
});

acceptAllBtn.addEventListener("click", () => {
  // TODO 3: Check both optional checkboxes, save { analytics: true,
  // marketing: true } to localStorage, and call applyConsent() with it.
});

// TODO 4: On page load, read the saved consent with readConsent(), set the
// analyticsCheck/marketingCheck checkbox states to match, and call
// applyConsent() with it so the status text reflects saved preferences.
