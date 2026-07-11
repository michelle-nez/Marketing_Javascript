window.dataLayer = window.dataLayer || [];

const resourceList = document.querySelector("#resourceList");
const eventLog = document.querySelector("#eventLog");

resourceList.addEventListener("click", event => {

  const link = event.target.closest("a");

  if (!link) return;

  // Keep the training page open for external/PDF demo links.
  if (!link.hash) event.preventDefault();

  // TODO 1: Build a URL from link.href.
  const destination = new URL(link.href, window.location.href);

  // TODO 2: Classify PDF links as resource_download.
  const isPdf = destination.pathname.toLowerCase().endsWith(".pdf");

  // TODO 3: Classify a different hostname as outbound_link_click.
  const isOutbound = destination.hostname && destination.hostname !== window.location.hostname;

  // TODO 4: Otherwise classify as internal_link_click.
  const eventName = isPdf
    ? "resource_download"
    : isOutbound
      ? "outbound_link_click"
      : "internal_link_click";

        const eventData = {
    event: eventName,
    linkTitle: link.dataset.title || link.textContent.trim(),
    destination: destination.href
  };

  // TODO 5: Push event name, title, and destination to dataLayer and display it.
  window.dataLayer.push(eventData);
  eventLog.textContent = JSON.stringify(eventData, null, 2);

});
