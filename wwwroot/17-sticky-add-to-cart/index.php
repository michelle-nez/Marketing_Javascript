<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 17 — Sticky Add-to-Cart Bar</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
  <style>
    .sticky-bar {
      position: fixed; left: 0; right: 0; bottom: 0;
      background: var(--paper); border-top: 1px solid var(--line);
      padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px;
    }
    .sticky-bar.hidden { display: none; }
  </style>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 17</p>
    <h1>Sticky Add-to-Cart Bar</h1>
    <p>Scroll down past the product card. A sticky bar should appear once the main button is out of view.</p>
  </header>
<main>
  <section class="card" data-item-id="sku_4410" data-item-name="Insulated Water Bottle" data-price="28.00">
    <span class="pill">New</span>
    <h2>Insulated Water Bottle</h2>
    <p>$28.00</p>
    <button id="mainAddToCartBtn">Add to cart</button>
  </section>

  <section class="card long-copy">
    <h2>Product details</h2>
    <p>Keeps drinks cold for 24 hours and hot for 12. Double-wall vacuum insulation, powder-coated finish, leak-proof lid.</p>
    <p>Fits most cup holders and cage mounts. Dishwasher safe on the top rack. Available in five colors.</p>
    <p>BPA-free stainless steel construction. Backed by a lifetime warranty against manufacturing defects.</p>
    <p>This filler content exists so the page is tall enough to scroll the main button out of view.</p>
    <p>Shipping usually takes 3-5 business days within the continental US, longer for international orders.</p>
  </section>

  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main>
  <div id="stickyBar" class="sticky-bar hidden">
    <span>Insulated Water Bottle — $28.00</span>
    <button id="stickyAddToCartBtn">Add to cart</button>
  </div>
<footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
