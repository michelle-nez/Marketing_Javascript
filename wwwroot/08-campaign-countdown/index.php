<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 08 — Create a Campaign Countdown</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 08</p>
    <h1>Create a Campaign Countdown</h1>
    <p>Build a reliable local countdown for a limited-time offer.</p>
  </header>
<main>
  <section class="card">
    <span class="pill">Limited campaign</span>
    <h2 id="offerTitle">Registration closes soon</h2>
    <div id="countdown" class="metric">--:--:--</div>
    <p id="offerMessage">The timer will begin when the JavaScript is complete.</p>
    <button id="offerCta">Reserve a seat</button>
    <button id="resetTimer" class="secondary">Reset 10-minute demo</button>
  </section>
  <section class="card"><h2>Campaign state event</h2><div id="eventLog" class="event-log">No event recorded.</div></section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
