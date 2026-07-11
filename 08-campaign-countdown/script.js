window.dataLayer = window.dataLayer || [];

const countdown = document.querySelector("#countdown");
const offerTitle = document.querySelector("#offerTitle");
const offerMessage = document.querySelector("#offerMessage");
const offerCta = document.querySelector("#offerCta");
const eventLog = document.querySelector("#eventLog");

// TODO 1: Read campaign_demo_end from localStorage.
// TODO 2: If missing, create an end time 10 minutes from now and store it.
// TODO 3: Create updateCountdown to calculate remaining hours/minutes/seconds.
// TODO 4: When expired, disable CTA, change copy, clear interval, and record campaign_expired once.
// TODO 5: Update immediately and every second.
// TODO 6: Reset the stored time and reload when resetTimer is clicked.
