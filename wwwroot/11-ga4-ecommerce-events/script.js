window.dataLayer = window.dataLayer || [];

const productCard = document.querySelector("[data-item-id]");
const cartSummary = document.querySelector("#cartSummary");
const eventLog = document.querySelector("#eventLog");
const addToCartBtn = document.querySelector("#addToCartBtn");
const purchaseBtn = document.querySelector("#purchaseBtn");

let cart = [];

// TODO 1: Write buildItem() that reads data-item-id, data-item-name, and
// data-price off productCard and returns { item_id, item_name, price, quantity: 1 }.
function buildItem() {

}

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Ecommerce event:", eventData);
}

function renderCart() {
  if (cart.length === 0) {
    cartSummary.textContent = "Cart is empty.";
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartSummary.textContent = `${cart.length} item(s) — total $${total.toFixed(2)}`;
}

// TODO 2: On page load, push a view_item event shaped like:
// { event: "view_item", ecommerce: { items: [ buildItem() ] } }

addToCartBtn.addEventListener("click", () => {
  // TODO 3: Add buildItem() to the cart array, re-render the cart, and push
  // an add_to_cart event with the same ecommerce.items shape as view_item.
});

purchaseBtn.addEventListener("click", () => {
  // TODO 4: If the cart is not empty, push a purchase event with a
  // transaction_id (use Date.now()), a value equal to the cart total, and
  // ecommerce.items built from the whole cart array. Then empty the cart
  // and re-render.
});
