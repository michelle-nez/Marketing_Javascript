window.dataLayer = window.dataLayer || [];

const attributionSummary = document.querySelector("#attributionSummary");
const eventLog = document.querySelector("#eventLog");
const signupBtn = document.querySelector("#signupBtn");
const clearBtn = document.querySelector("#clearBtn");

const STORAGE_KEY = "referral_attribution";

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Attribution event:", eventData);
}

function readAttribution() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function renderAttribution() {
  const stored = readAttribution();
  attributionSummary.textContent = stored
    ? JSON.stringify(stored, null, 2)
    : "No attribution stored yet.";
}

// TODO 1: On page load, read `ref` or `aff` from the URL with
// URLSearchParams. If one is present AND nothing is stored yet, save
// { code, capturedAt: Date.now() } to localStorage under STORAGE_KEY.
// Do this only if readAttribution() currently returns null (first-touch).

renderAttribution();

signupBtn.addEventListener("click", () => {
  // TODO 2: Read the stored attribution. If present, compute
  // daysSinceFirstTouch from capturedAt to now, and push a signup event:
  // { event: "signup", referralCode: stored.code, daysSinceFirstTouch }.
  // If nothing is stored, push { event: "signup", referralCode: null }.
});

clearBtn.addEventListener("click", () => {
  // TODO 3: Remove STORAGE_KEY from localStorage and re-render the
  // attribution summary.
});
