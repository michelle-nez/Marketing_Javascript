<!doctype html>
<html lang="en">

<head>
      <?php include '../shared/head-tag.php'; ?>

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ticket 01 - Track Marketing CTA Clicks</title>
      <link rel="stylesheet" href="../shared/sample-styles.css" />

</head>

<body>
      <header>
            <p class="eyebrow">Marketing JavaScript Lab · Ticket 01</p>
            <h1>Track Marketing CTA Clicks</h1>
            <p>Capture useful click data without changing every button handler separately.</p>
      </header>
      <main>
            <section class="card">
                  <span class="pill">Summer Campaign</span>
                  <h2>Build a faster support operation</h2>
                  <p>Choose a CTA. Your script should add one structured event to <code>window.dataLayer</code> and show
                        it below.</p>
                  <button class="track-cta" data-cta-name="request_demo" data-placement="hero"
                        data-campaign="summer_ops">Request a demo</button>
                  <button class="track-cta secondary" data-cta-name="download_guide" data-placement="hero"
                        data-campaign="summer_ops">Download the guide</button>
            </section>
            <section class="card">
                  <h2>Event inspector</h2>
                  <div id="eventLog" class="event-log">No CTA event recorded yet.</div>
            </section>
      </main>
      <footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
      <script src="script.js"></script>
</body>

</html>
