window.dataLayer = window.dataLayer || [];

const simulateBtn = document.querySelector("#simulateBtn");
const metricsReport = document.querySelector("#metricsReport");
const eventLog = document.querySelector("#eventLog");

const thresholds = {
  LCP: { good: 2500, needsImprovement: 4000, unit: "ms" },
  CLS: { good: 0.1, needsImprovement: 0.25, unit: "" },
  INP: { good: 200, needsImprovement: 500, unit: "ms" }
};

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Web Vitals event:", eventData);
}

// TODO 1: Write classifyMetric(name, value). Look up thresholds[name] and
// return "good" if value <= good, "needs-improvement" if value <=
// needsImprovement, otherwise "poor".
function classifyMetric(name, value) {

}

function randomMetricValues() {
  return {
    LCP: Math.round(1500 + Math.random() * 4000),
    CLS: Number((Math.random() * 0.35).toFixed(3)),
    INP: Math.round(100 + Math.random() * 550)
  };
}

simulateBtn.addEventListener("click", () => {
  const values = randomMetricValues();

  // TODO 2: Build a `metrics` object where each key (LCP, CLS, INP) maps to
  // { value, rating: classifyMetric(key, value) }.

  // TODO 3: Render metricsReport as readable text (or HTML) showing each
  // metric's value and rating.

  // TODO 4: Push a single web_vitals event containing the metrics object
  // and log it.
});
