window.dataLayer = window.dataLayer || [];

const eventLog = document.querySelector("#eventLog");
const ctaButtons = document.querySelectorAll(".track-cta");

//*: GA4 Function
function trackGa4Event(eventName, parameters = {}) {
      if (typeof window.gtag !== "function") {
            console.error("The Google tag isn't loaded — check shared/analytics.js.");
            return;
      }
      window.gtag("event", eventName, parameters);
}
//* END GA4 Function

ctaButtons.forEach((button) => {
      button.addEventListener('click', () => {

            const eventData = {
                  event: "cta_click",
                  ctaName: button.dataset.ctaName,
                  placement: button.dataset.placement,
                  campaign: button.dataset.campaign
            };

            window.dataLayer.push(eventData);

            trackGa4Event("cta_click", {
                  cta_name: eventData.ctaName,
                  placement: eventData.placement,
                  campaign: eventData.campaign
            });
            
            eventLog.innerHTML = JSON.stringify(eventData, null, 2);

            console.log("CTA event:", eventData);
      });
});