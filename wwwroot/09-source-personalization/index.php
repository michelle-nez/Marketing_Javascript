<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 09 — Personalize a Landing Page by Source</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 09</p>
    <h1>Personalize a Landing Page by Source</h1>
    <p>Use campaign source data to select approved copy variations.</p>
  </header>
<main>
  <section class="card">
    <p>Test a source:</p>
    <a class="button" href="?utm_source=linkedin">LinkedIn</a>
    <a class="button secondary" href="?utm_source=newsletter">Newsletter</a>
    <a class="button secondary" href="index.html">Direct</a>
  </section>
  <section class="card">
    <span id="sourceLabel" class="pill">Unknown source</span>
    <h2 id="personalizedHeadline">Default headline</h2>
    <p id="personalizedCopy">Default supporting copy.</p>
    <button id="personalizedCta">Learn more</button>
  </section>
  <section class="card"><h2>Personalization event</h2><div id="eventLog" class="event-log">No event recorded.</div></section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
