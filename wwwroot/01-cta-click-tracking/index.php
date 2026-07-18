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
      <nav class="site-nav">
            <a class="brand" href="#">Ultra Spec Cables</a>
            <ul class="nav-links">
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact</a></li>
            </ul>
      </nav>

      <header class="hero-band">
            <div class="hero-inner">
                  <span class="pill">Summer Campaign</span>
                  <h1>Build a faster support operation</h1>
                  <p>Give your team enterprise-grade cable and A/V infrastructure support, without the wait. Our help
                        desk resolves the majority of tickets on first contact.</p>
                  <div class="hero-cta-row">
                        <button class="track-cta" data-cta-name="request_demo" data-placement="hero"
                              data-campaign="summer_ops">Request a demo</button>
                        <button class="track-cta secondary" data-cta-name="download_guide" data-placement="hero"
                              data-campaign="summer_ops">Download the guide</button>
                  </div>
            </div>
      </header>

      <section class="features">
            <h2>Why support teams switch to us</h2>
            <div class="feature-grid">
                  <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>First-contact resolution</h3>
                        <p>Most tickets are resolved on the first call, so your team spends less time waiting on a
                              callback.</p>
                  </div>
                  <div class="feature-card">
                        <div class="feature-icon">🔧</div>
                        <h3>Certified cable &amp; A/V techs</h3>
                        <p>Every technician is trained on structured cabling, rack builds, and A/V integration, not
                              generic IT support.</p>
                  </div>
                  <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Transparent reporting</h3>
                        <p>See ticket volume, resolution time, and satisfaction scores in one dashboard, updated in
                              real time.</p>
                  </div>
            </div>
      </section>

      <main>
            <section class="card">
                  <h2>Event inspector</h2>
                  <p>Choose a CTA above. Your script should add one structured event to <code>window.dataLayer</code>
                        and show it below.</p>
                  <div id="eventLog" class="event-log">No CTA event recorded yet.</div>
            </section>
      </main>

      <footer class="site-footer">
            <div class="footer-inner">Local training page for Ultra Spec Cables. Events stay in your browser and are
                  not sent to a real analytics service.</div>
      </footer>

      <script src="script.js"></script>
</body>

</html>
