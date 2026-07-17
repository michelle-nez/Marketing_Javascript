<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 18 — Social Proof Activity Toast</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
  <style>
    .toast-container { position: fixed; left: 16px; bottom: 16px; max-width: 320px; }
  </style>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 18</p>
    <h1>Social Proof Activity Toast</h1>
    <p>Rotate through sample recent-activity messages, one at a time, in a fixed-position toast.</p>
  </header>
<main>
  <section class="card">
    <h2>Controls</h2>
    <button id="startBtn">Start</button>
    <button id="stopBtn" class="secondary">Stop</button>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
  <div class="toast-container">
    <div id="toast" class="status hidden"></div>
  </div>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
