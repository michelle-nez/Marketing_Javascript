window.dataLayer = window.dataLayer || [];

const chatBubble = document.querySelector("#chatBubble");
const dismissChatBtn = document.querySelector("#dismissChatBtn");
const eventLog = document.querySelector("#eventLog");

const SESSION_KEY = "chat_widget_dismissed";
let timerHandle = null;
let shown = false;

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Chat widget event:", eventData);
}

function showBubble(trigger) {
  // TODO 1: If sessionStorage has SESSION_KEY set, or the bubble was
  // already shown this page view (shown === true), do nothing. Otherwise
  // remove "hidden" from chatBubble, set shown = true, clear timerHandle if
  // it exists, and push/log a chat_widget_shown event that includes the
  // trigger name ("timer" or "scroll").
}

if (!sessionStorage.getItem(SESSION_KEY)) {
  // TODO 2: Start a setTimeout for 8000ms that calls showBubble("timer").
  // Store its id in timerHandle.
}

window.addEventListener("scroll", () => {
  // TODO 3: Compute how far down the page the visitor has scrolled as a
  // percentage: window.scrollY / (document.body.scrollHeight -
  // window.innerHeight) * 100. If it's 50 or more, call
  // showBubble("scroll").
});

dismissChatBtn.addEventListener("click", () => {
  // TODO 4: Add "hidden" back to chatBubble and set SESSION_KEY in
  // sessionStorage so it doesn't reappear this session.
});
