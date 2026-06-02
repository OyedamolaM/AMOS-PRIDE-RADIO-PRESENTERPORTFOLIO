const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let isGoogleAnalyticsReady = false;

export function initGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || isGoogleAnalyticsReady) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
  isGoogleAnalyticsReady = true;
}

export function trackEvent(eventName, parameters = {}) {
  if (!isGoogleAnalyticsReady || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}
