window.dataLayer = window.dataLayer || [];

const eventLog = document.querySelector("#eventLog");
const ctaButtons = document.querySelectorAll(".track-cta");

// TODO 1: Loop through ctaButtons.
ctaButtons.forEach((button) => {
    // Step 2: Add a click event listener
    button.addEventListener('click', () => {
        alert(`Button ${button.textContent} clicked!`);
        // TODO 3: Build an event object with event, ctaName, placement, and campaign.
        const eventData ={
            event: "cta_click",
            ctaName: button.dataset.ctaName,
            placement: button.dataset.placement,
            campaign: button.dataset.campaign
        };
       // TODO 4: Push the object into window.dataLayer.
        window.dataLayer.push(eventData);
        eventLog.innerHTML = JSON.stringify(eventData, null, 2);
        // TODO 5: Display the event object inside eventLog with JSON.stringify.
        console.log("CTA event:", eventData);
    });
});





