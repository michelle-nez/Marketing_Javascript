window.dataLayer = window.dataLayer || [];

const resourceList = document.querySelector("#resourceList");
const eventLog = document.querySelector("#eventLog");

resourceList.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (!link) return;

  // Keep the training page open for external/PDF demo links.
  if (!link.hash) event.preventDefault();

  // TODO 1: Build a URL from link.href.
  // TODO 2: Classify PDF links as resource_download.
  // TODO 3: Classify a different hostname as outbound_link_click.
  // TODO 4: Otherwise classify as internal_link_click.
  // TODO 5: Push event name, title, and destination to dataLayer and display it.
});
