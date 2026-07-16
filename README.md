# Marketing JavaScript Ticket Lab

A collection of 26 practical JavaScript exercises based on common
marketing and website-maintenance tasks, each wired to a live GA4
property for hands-on testing.

## Project Purpose

The goal of this repository is to demonstrate how JavaScript can support
marketing websites and digital operations, from basic click tracking
through consent-aware analytics and ecommerce event tracking.

## Skills Demonstrated

- HTML
- CSS
- JavaScript
- DOM manipulation
- Event listeners
- Form validation
- Arrays and objects
- Dynamic page content
- `window.dataLayer` / GA4 event tracking
- Debugging
- Marketing-focused website features

## Ticket List

1. [Track Marketing CTA Clicks](01-cta-click-tracking/)
2. [Validate and Track a Lead Form](02-lead-form-tracking/)
3. [Capture UTM Campaign Parameters](03-utm-campaign-capture/)
4. [Build and Track an Email Signup Modal](04-email-modal/)
5. [Track Downloads and Outbound Links](05-link-download-tracking/)
6. [Measure Scroll-Depth Engagement](06-scroll-depth/)
7. [Run a Simple Headline A/B Test](07-ab-headline-test/)
8. [Create a Campaign Countdown](08-campaign-countdown/)
9. [Personalize a Landing Page by Source](09-source-personalization/)
10. [Add Consent-Aware Analytics](10-consent-aware-analytics/)
11. [GA4-Style Ecommerce Event Tracking](11-ga4-ecommerce-events/)
12. [Track Form Abandonment](12-form-abandonment-tracking/)
13. [Track Video Engagement](13-video-engagement-tracking/)
14. [Report Core Web Vitals](14-web-vitals-reporting/)
15. [Capture Referral and Affiliate Attribution](15-referral-attribution/)
16. [Build an Exit-Intent Offer Popup](16-exit-intent-popup/)
17. [Sticky Add-to-Cart Bar](17-sticky-add-to-cart/)
18. [Social Proof Activity Toast](18-social-proof-toast/)
19. [Live Scarcity and Inventory Indicator](19-scarcity-inventory/)
20. [Live Chat Widget Trigger Logic](20-chat-widget-trigger/)
21. [Currency and Region Switcher](21-currency-region-switch/)
22. [Monthly and Annual Pricing Toggle](22-pricing-toggle/)
23. [Dark Mode Toggle with Persistence](23-dark-mode-toggle/)
24. [Auto-Hide Sticky Header on Scroll](24-sticky-header-scroll/)
25. [Granular Cookie Consent Banner](25-consent-banner/)
26. [Conditional Pixel Loading with Dedupe](26-pixel-dedupe/)

## Shared Assets

- `shared/sample-styles.css` — shared page styling for every ticket.
- `shared/analytics.js` — loads the live Google tag (`G-DTH6N9ZNFE`) so
  every ticket page reports into the same GA4 property.

## How to Run

**Locally:**
1. Clone the repository.
2. Open a ticket folder.
3. Open `index.html` with Live Server (or any local server) so the page
   loads over `http://` rather than `file://`.
4. Test using browser developer tools.

**Live:** this repo is also deployed as a git submodule at
`nerdommicro.com/ga4/`, served from `wwwroot/ga4` inside the
`MicroRenamerWeb` Blazor app. `index.html` at the root of this repo
lists and links to all 26 tickets.

## Professional Relevance

This project demonstrates practical JavaScript skills for:

- Web Development
- Digital Marketing
- Marketing Operations
- Website Administration
- E-commerce

## Author

**Michelle Nesbitt**

Website owner for over 10 years.

GitHub: https://github.com/michelle-nez
