<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 15 — Capture Referral and Affiliate Attribution</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 15</p>
    <h1>Capture Referral and Affiliate Attribution</h1>
    <p>The first referral link a visitor clicks should get the credit, even after they browse more pages.</p>
  </header>
<main>
  <section class="card">
    <h2>Arrive from a partner link</h2>
    <a class="button" href="?ref=partner_a">Partner A demo link</a>
    <a class="button secondary" href="?aff=influencer_b">Affiliate B demo link</a>
    <p><a href="index.html">Visit with no referral parameter</a></p>
  </section>
  <section class="card">
    <h2>Stored attribution</h2>
    <div id="attributionSummary" class="event-log">No attribution stored yet.</div>
    <button id="signupBtn">Sign up</button>
    <button id="clearBtn" class="secondary">Clear attribution</button>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
