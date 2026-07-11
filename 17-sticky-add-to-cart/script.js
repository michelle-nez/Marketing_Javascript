window.dataLayer = window.dataLayer || [];

const productCard = document.querySelector("[data-item-id]");
const mainAddToCartBtn = document.querySelector("#mainAddToCartBtn");
const stickyBar = document.querySelector("#stickyBar");
const stickyAddToCartBtn = document.querySelector("#stickyAddToCartBtn");
const eventLog = document.querySelector("#eventLog");

function logEvent(eventData) {
  eventLog.textContent = JSON.stringify(eventData, null, 2);
  console.log("Cart event:", eventData);
}

function addToCart() {
  const eventData = {
    event: "add_to_cart",
    ecommerce: {
      items: [{
        item_id: productCard.dataset.itemId,
        item_name: productCard.dataset.itemName,
        price: Number(productCard.dataset.price),
        quantity: 1
      }]
    }
  };
  window.dataLayer.push(eventData);
  logEvent(eventData);
}

mainAddToCartBtn.addEventListener("click", addToCart);
stickyAddToCartBtn.addEventListener("click", addToCart);

// TODO 1: Create an IntersectionObserver that watches mainAddToCartBtn.
// In its callback, when the button is NOT intersecting the viewport, remove
// the "hidden" class from stickyBar. When it IS intersecting, add "hidden"
// back.

// TODO 2: Start observing mainAddToCartBtn with the observer you created.
