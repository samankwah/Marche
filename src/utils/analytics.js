// Create a new file: src/utils/analytics.js

export const initGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  // Update consent mode
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
  });

  gtag("config", "G-Y1EV1Q38PH", {
    page_path: window.location.pathname,
  });
};

// Import and use in App.jsx or main.jsx
import { initGA } from "./utils/analytics";
useEffect(() => {
  initGA();
}, []);
