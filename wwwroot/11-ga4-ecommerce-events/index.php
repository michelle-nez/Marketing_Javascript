<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 11 — GA4-Style Ecommerce Event Tracking</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 11</p>
    <h1>GA4-Style Ecommerce Event Tracking</h1>
    <p>Push view_item, add_to_cart, and purchase events to window.dataLayer using a consistent item shape.</p>
  </header>
<main>
  <section class="card" data-item-id="sku_2201" data-item-name="Trail Runner Backpack" data-price="64.00">
    <span class="pill">Bestseller</span>
    <h2>Trail Runner Backpack</h2>
    <p>$64.00 · This card's data attributes are the source of truth for the item object.</p>
    <button id="addToCartBtn">Add to cart</button>
  </section>
  <section class="card">
    <h2>Cart</h2>
    <div id="cartSummary" class="event-log">Cart is empty.</div>
    <button id="purchaseBtn" class="secondary">Complete purchase</button>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
