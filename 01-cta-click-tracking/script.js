window.dataLayer = window.dataLayer || [];

const eventLog = document.querySelector("#eventLog");
const ctaButtons = document.querySelectorAll(".track-cta");

//*: GA4 Function
//* END GA4 Function

//*Hubspot Function
//*End Hubspot


// TODO 1: Loop through ctaButtons.
ctaButtons.forEach((button) => {
    // Step 2: Add a click event listener
    button.addEventListener('click', () => {

        // TODO 3: Build an event object with event, ctaName, placement, and campaign.
        const eventData = {
            event: "cta_click",
            ctaName: button.dataset.ctaName,
            placement: button.dataset.placement,
            campaign: button.dataset.campaign
        };

        // TODO 4: Push the object into window.dataLayer.
        window.dataLayer.push(eventData);

        // TODO 5: Display the event object inside eventLog with JSON.stringify.
        eventLog.innerHTML = JSON.stringify(eventData, null, 2);


        console.log("CTA event:", eventData);
    });
});





