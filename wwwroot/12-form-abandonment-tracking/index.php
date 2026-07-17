<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 12 — Track Form Abandonment</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 12</p>
    <h1>Track Form Abandonment</h1>
    <p>Find out which required fields visitors leave empty before giving up on the form.</p>
  </header>
<main>
  <section class="card">
    <h2>Contact form</h2>
    <form id="contactForm" novalidate>
      <label for="fullName">Full name *</label>
      <input type="text" id="fullName" name="fullName" data-required="true" />

      <label for="email">Email *</label>
      <input type="email" id="email" name="email" data-required="true" />

      <label for="company">Company</label>
      <input type="text" id="company" name="company" />

      <button type="submit">Submit</button>
      <button type="button" id="simulateLeaveBtn" class="secondary">Simulate leaving the page</button>
    </form>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
