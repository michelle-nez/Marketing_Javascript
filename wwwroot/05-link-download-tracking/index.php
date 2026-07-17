<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 05 - Track Downloads and Outbound Links</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 05</p>
    <h1>Track Downloads and Outbound Links</h1>
    <p>Classify resource clicks from one listener on the page container.</p>
  </header>
<main>
  <section class="card" id="resourceList">
    <h2>Campaign resources</h2>
    <p><a href="files/operations-guide.pdf" data-title="Operations Guide">Download operations guide (PDF)</a></p>
    <p><a href="https://example.org/partner-webinar" data-title="Partner Webinar">Visit partner webinar</a></p>
    <p><a href="#pricing" data-title="Pricing Section">Jump to pricing</a></p>
  </section>
  <section class="card" id="pricing"><h2>Pricing</h2><p>This internal anchor should be classified as an internal link.</p></section>
  <section class="card"><h2>Last classified click</h2><div id="eventLog" class="event-log">No link event recorded.</div></section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
