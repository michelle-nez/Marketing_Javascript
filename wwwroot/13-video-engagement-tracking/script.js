window.dataLayer = window.dataLayer || [];

const playerStatus = document.querySelector("#playerStatus");
const progressBar = document.querySelector("#progressBar");
const eventLog = document.querySelector("#eventLog");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const jumpButtons = document.querySelectorAll("[data-jump]");

const duration = 120;
let currentTime = 0;
let playing = false;
let tickHandle = null;
const reachedMilestones = new Set();

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Video event:", eventData);
}

function updateUI() {
  const percent = Math.min(100, (currentTime / duration) * 100);
  progressBar.style.width = `${percent}%`;
  playerStatus.textContent = `Status: ${playing ? "playing" : "paused"} at ${Math.round(currentTime)}s`;
}

function checkMilestones() {
  // TODO 1: Compute the percent watched (currentTime / duration * 100).
  // For each milestone in [25, 50, 75, 100], if percent has reached it and
  // reachedMilestones does not already contain it, add it to the Set and
  // push a video_progress event: { event: "video_progress", milestone, currentTime }.
}

playBtn.addEventListener("click", () => {
  // TODO 2: Set playing to true, start an interval (e.g. every 250ms) that
  // advances currentTime (stop it at duration) and calls updateUI() +
  // checkMilestones(). Store the interval id in tickHandle. Push a
  // video_play event with the current currentTime.
});

pauseBtn.addEventListener("click", () => {
  // TODO 3: Clear tickHandle, set playing to false, update the UI, and push
  // a video_pause event with the current currentTime.
});

jumpButtons.forEach(button => {
  button.addEventListener("click", () => {
    // TODO 4: Set currentTime to Number(button.dataset.jump), update the UI,
    // and call checkMilestones() so jumping forward can trigger milestones.
  });
});
