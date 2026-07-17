<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ticket 13 — Track Video Engagement</title>
  <link rel="stylesheet" href="../shared/sample-styles.css" />
  <?php include '../shared/head-tag.php'; ?>
</head>
<body>
  <header>
    <p class="eyebrow">Marketing JavaScript Lab · Ticket 13</p>
    <h1>Track Video Engagement</h1>
    <p>This is a mock video player (no real video file) so the lab has no external dependencies. It exposes the same play/pause/time-update ideas a real HTMLMediaElement would.</p>
  </header>
<main>
  <section class="card">
    <h2>Product demo (mock player, 120 second duration)</h2>
    <p id="playerStatus">Status: paused at 0s</p>
    <div class="progress"><span id="progressBar" style="width:0%"></span></div>
    <button id="playBtn">Play</button>
    <button id="pauseBtn" class="secondary">Pause</button>
    <p>Jump to a point in the video:</p>
    <button class="secondary" data-jump="30">25%</button>
    <button class="secondary" data-jump="60">50%</button>
    <button class="secondary" data-jump="90">75%</button>
    <button class="secondary" data-jump="120">100%</button>
  </section>
  <section class="card">
    <h2>Event inspector</h2>
    <div id="eventLog" class="event-log">No events recorded yet.</div>
  </section>
</main><footer>Local training page. Events stay in your browser and are not sent to a real analytics service.</footer>
  <script src="script.js"></script>
</body>
</html>
