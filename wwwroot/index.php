<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Marketing JavaScript Lab — GA4 Live Test</title>
  <?php include 'shared/head-tag.php'; ?>
  <style>
    :root {
      --ink: #1c2430;
      --muted: #5b6b7c;
      --line: #d9e1e8;
      --paper: #ffffff;
      --bg: #f4f7fa;
      --blue: #2563eb;
      --blue-soft: #eaf1ff;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--ink);
      line-height: 1.5;
    }

    header {
      padding: 40px 20px 28px;
      text-align: center;
      background: var(--paper);
      border-bottom: 1px solid var(--line);
    }

    header h1 {
      margin: 0 0 8px;
      font-size: clamp(1.5rem, 4vw, 2rem);
    }

    header p {
      margin: 0;
      color: var(--muted);
      max-width: 640px;
      margin-inline: auto;
    }

    .tag-badge {
      display: inline-block;
      margin-top: 14px;
      padding: 6px 12px;
      background: var(--blue-soft);
      color: var(--blue);
      border-radius: 999px;
      font-size: .85rem;
      font-weight: 600;
    }

    main {
      max-width: 1000px;
      margin: 0 auto;
      padding: 32px 20px 60px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 16px;
    }

    a.card {
      display: block;
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 16px 18px;
      text-decoration: none;
      color: inherit;
      transition: border-color .15s ease, transform .15s ease;
    }

    a.card:hover {
      border-color: var(--blue);
      transform: translateY(-2px);
    }

    .card .num {
      font-size: .75rem;
      font-weight: 700;
      color: var(--blue);
      letter-spacing: .04em;
    }

    .card h2 {
      margin: 4px 0 0;
      font-size: 1rem;
    }

    footer {
      text-align: center;
      color: var(--muted);
      font-size: .85rem;
      padding: 20px;
    }

    code {
      background: var(--blue-soft);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: .85em;
    }
  </style>
</head>

<body>
  <header>
    <h1>Marketing JavaScript Lab</h1>
    <p>26 hands-on GA4 tracking tickets. Every page below shares one live Google tag so events roll up into a single GA4
      property for testing.</p>
    <span class="tag-badge">Google tag: G-79ER3C1LFB</span>
  </header>
  <main>
    <div class="grid">
      <a class="card" href="01-cta-click-tracking/"><span class="num">01</span>
        <h2>Track Marketing CTA Clicks</h2>
      </a>
      <a class="card" href="02-lead-form-tracking/"><span class="num">02</span>
        <h2>Validate and Track a Lead Form</h2>
      </a>
      <a class="card" href="03-utm-campaign-capture/"><span class="num">03</span>
        <h2>Capture UTM Campaign Parameters</h2>
      </a>
      <a class="card" href="04-email-modal/"><span class="num">04</span>
        <h2>Build and Track an Email Signup Modal</h2>
      </a>
      <a class="card" href="05-link-download-tracking/"><span class="num">05</span>
        <h2>Track Downloads and Outbound Links</h2>
      </a>
      <a class="card" href="06-scroll-depth/"><span class="num">06</span>
        <h2>Measure Scroll-Depth Engagement</h2>
      </a>
      <a class="card" href="07-ab-headline-test/"><span class="num">07</span>
        <h2>Run a Simple Headline A/B Test</h2>
      </a>
      <a class="card" href="08-campaign-countdown/"><span class="num">08</span>
        <h2>Create a Campaign Countdown</h2>
      </a>
      <a class="card" href="09-source-personalization/"><span class="num">09</span>
        <h2>Personalize a Landing Page by Source</h2>
      </a>
      <a class="card" href="10-consent-aware-analytics/"><span class="num">10</span>
        <h2>Add Consent-Aware Analytics</h2>
      </a>
      <a class="card" href="11-ga4-ecommerce-events/"><span class="num">11</span>
        <h2>GA4-Style Ecommerce Event Tracking</h2>
      </a>
      <a class="card" href="12-form-abandonment-tracking/"><span class="num">12</span>
        <h2>Track Form Abandonment</h2>
      </a>
      <a class="card" href="13-video-engagement-tracking/"><span class="num">13</span>
        <h2>Track Video Engagement</h2>
      </a>
      <a class="card" href="14-web-vitals-reporting/"><span class="num">14</span>
        <h2>Report Core Web Vitals</h2>
      </a>
      <a class="card" href="15-referral-attribution/"><span class="num">15</span>
        <h2>Capture Referral and Affiliate Attribution</h2>
      </a>
      <a class="card" href="16-exit-intent-popup/"><span class="num">16</span>
        <h2>Build an Exit-Intent Offer Popup</h2>
      </a>
      <a class="card" href="17-sticky-add-to-cart/"><span class="num">17</span>
        <h2>Sticky Add-to-Cart Bar</h2>
      </a>
      <a class="card" href="18-social-proof-toast/"><span class="num">18</span>
        <h2>Social Proof Activity Toast</h2>
      </a>
      <a class="card" href="19-scarcity-inventory/"><span class="num">19</span>
        <h2>Live Scarcity and Inventory Indicator</h2>
      </a>
      <a class="card" href="20-chat-widget-trigger/"><span class="num">20</span>
        <h2>Live Chat Widget Trigger Logic</h2>
      </a>
      <a class="card" href="21-currency-region-switch/"><span class="num">21</span>
        <h2>Currency and Region Switcher</h2>
      </a>
      <a class="card" href="22-pricing-toggle/"><span class="num">22</span>
        <h2>Monthly and Annual Pricing Toggle</h2>
      </a>
      <a class="card" href="23-dark-mode-toggle/"><span class="num">23</span>
        <h2>Dark Mode Toggle with Persistence</h2>
      </a>
      <a class="card" href="24-sticky-header-scroll/"><span class="num">24</span>
        <h2>Auto-Hide Sticky Header on Scroll</h2>
      </a>
      <a class="card" href="25-consent-banner/"><span class="num">25</span>
        <h2>Granular Cookie Consent Banner</h2>
      </a>
      <a class="card" href="26-pixel-dedupe/"><span class="num">26</span>
        <h2>Conditional Pixel Loading with Dedupe</h2>
      </a>
    </div>
  </main>
  <footer>Upload everything in this <code>starter-files</code> folder as the contents of
    <code>nerdommicro.com/ga4/</code>.</footer>
</body>

</html>