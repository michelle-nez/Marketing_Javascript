<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 21 — Currency and Region Switcher</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 21</p>
    <h1>Currency and Region Switcher</h1>
    <p>Choose a region and every product's price should update together.</p>
  </header>
<main>
  <section class="card">
    <label for="regionSelect">Region</label>
    <select id="regionSelect">
      <option value="US">United States (USD)</option>
      <option value="UK">United Kingdom (GBP)</option>
      <option value="EU">European Union (EUR)</option>
    </select>
  </section>
  <section class="grid">
    <div class="card" data-price-usd="24.00">
      <h2>Canvas Tote Bag</h2>
      <p class="price-display metric">$24.00</p>
    </div>
    <div class="card" data-price-usd="58.00">
      <h2>Wool Blend Scarf</h2>
      <p class="price-display metric">$58.00</p>
    </div>
    <div class="card" data-price-usd="12.50">
      <h2>Enamel Travel Mug</h2>
      <p class="price-display metric">$12.50</p>
    </div>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
