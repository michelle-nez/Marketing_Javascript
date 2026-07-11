window.dataLayer = window.dataLayer || [];

const stockMessage = document.querySelector("#stockMessage");
const buyBtn = document.querySelector("#buyBtn");
const restockBtn = document.querySelector("#restockBtn");
const eventLog = document.querySelector("#eventLog");

let stock = 12;

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Inventory event:", eventData);
}

function renderStock() {
  // TODO 1: Update stockMessage.textContent and className based on stock:
  // - stock > 10: textContent "In stock", className "status"
  // - stock from 1 to 10: textContent `Only ${stock} left!`, className "status warning"
  // - stock === 0: textContent "Sold out", className "status warning", and
  //   disable buyBtn (buyBtn.disabled = true)
  // Also make sure buyBtn.disabled is false whenever stock > 0.
}

buyBtn.addEventListener("click", () => {
  // TODO 2: If stock is greater than 0, decrement it, call renderStock(),
  // and push an inventory_change event with the new stock value.
});

restockBtn.addEventListener("click", () => {
  stock = 15;
  renderStock();
});

renderStock();
