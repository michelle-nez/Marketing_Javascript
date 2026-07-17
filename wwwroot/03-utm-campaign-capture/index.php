<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 03 - Capture UTM Campaign Parameters</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 03</p>
    <h1>Capture UTM Campaign Parameters</h1>
    <p>Read campaign values from the URL and save them for the current browser session.</p>
  </header>
<main>
  <section class="card">
    <h2>Campaign landing page</h2>
    <p>Open a demo source:</p>
    <a class="button" href="?utm_source=linkedin&utm_medium=paid_social&utm_campaign=webinar_launch">LinkedIn demo</a>
    <a class="button secondary" href="?utm_source=newsletter&utm_medium=email&utm_campaign=july_offer">Email demo</a>
    <p><a href="index.html">Clear campaign parameters</a></p>
  </section>
  <section class="card">
    <h2>Captured attribution</h2>
    <div id="campaignSummary" class="event-log">No campaign data captured yet.</div>
    <form id="demoForm">
      <input type="hidden" id="utmSource" name="utm_source" />
      <input type="hidden" id="utmMedium" name="utm_medium" />
      <input type="hidden" id="utmCampaign" name="utm_campaign" />
      <button type="submit">Inspect hidden form values</button>
    </form>
    <div id="formValues" class="status">Hidden values have not been inspected.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
