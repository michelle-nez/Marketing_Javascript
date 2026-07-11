window.dataLayer = window.dataLayer || [];

const toast = document.querySelector("#toast");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const eventLog = document.querySelector("#eventLog");

const activity = [
  { name: "Sarah", location: "Columbus, OH", action: "signed up" },
  { name: "Devon", location: "Austin, TX", action: "requested a demo" },
  { name: "Priya", location: "Seattle, WA", action: "downloaded the guide" },
  { name: "Marcus", location: "Tampa, FL", action: "signed up" }
];

let currentIndex = 0;
let rotationHandle = null;

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Toast event:", eventData);
}

function showToast(index) {
  const item = activity[index];
  toast.textContent = `${item.name} in ${item.location} ${item.action}`;
  toast.classList.remove("hidden");

  const eventData = { event: "social_proof_shown", index };
  window.dataLayer.push(eventData);
  logEvent(eventData);
}

// TODO 1: Write startRotation(). It should immediately show the current
// activity, then use setInterval (e.g. every 3500ms) to advance
// currentIndex to the next item, looping back to 0 after the last item,
// and show it. Store the interval id in rotationHandle.
function startRotation() {

}

// TODO 2: Write stopRotation(). It should clear rotationHandle.
function stopRotation() {

}

startBtn.addEventListener("click", startRotation);
stopBtn.addEventListener("click", stopRotation);
