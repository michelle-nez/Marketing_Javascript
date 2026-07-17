<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 19 — Live Scarcity and Inventory Indicator</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 19</p>
    <h1>Live Scarcity and Inventory Indicator</h1>
    <p>Stock messaging should get more urgent as the count drops, and the buy button should disable at zero.</p>
  </header>
<main>
  <section class="card">
    <h2>Ceramic Mug (starts with 12 in stock)</h2>
    <p id="stockMessage" class="status">In stock</p>
    <button id="buyBtn">Simulate a purchase</button>
    <button id="restockBtn" class="secondary">Restock (testing only)</button>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
