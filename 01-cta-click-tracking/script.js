window.dataLayer = window.dataLayer || [];

const eventLog = document.querySelector("#eventLog");
const ctaButtons = document.querySelectorAll(".track-cta");

ctaButtons.forEach((button) => {
    button.addEventListener('click', () => {

        const eventData = {
            event: "cta_click",
            ctaName: button.dataset.ctaName,
            placement: button.dataset.placement,
            campaign: button.dataset.campaign
        };

        window.dataLayer.push(eventData);

        eventLog.innerHTML = JSON.stringify(eventData, null, 2);

        console.log("CTA event:", eventData);
    });
});