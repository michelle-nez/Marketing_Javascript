window.dataLayer = window.dataLayer || [];

const messages = {
  linkedin: {
    headline: "Turn operational experience into measurable growth",
    copy: "See how structured workflows improve visibility across teams.",
    cta: "View the business case"
  },
  newsletter: {
    headline: "Continue your operations learning series",
    copy: "Explore this month's practical guide to better service workflows.",
    cta: "Read the new guide"
  },
  direct: {
    headline: "Improve customer operations with clearer workflows",
    copy: "Explore services, examples, and measurable outcomes.",
    cta: "Explore solutions"
  }
};

// TODO 1: Read utm_source from the query string and fall back to direct.
// TODO 2: Select a matching message object or use direct.
// TODO 3: Update sourceLabel, headline, copy, and CTA text.
// TODO 4: Record personalization_view with source and messageKey.
// TODO 5: Record personalized_cta_click with the same source.
