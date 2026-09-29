import React, { useState } from "react";

const STORAGE_KEY = "demo-banner-dismissed";

const WRAPPER = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  // Above Bootstrap's fixed navbars (1030), below modal backdrops (1040), so
  // dialogs still cover it rather than fighting it.
  zIndex: 1035,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 48px",
  background: "#172b4d",
  color: "#fff",
  fontFamily: "'Open Sans', system-ui, sans-serif",
  fontSize: "13px",
  lineHeight: 1.45,
  textAlign: "center",
  boxShadow: "0 -2px 14px rgba(0, 0, 0, 0.25)",
};

const CREDENTIALS = {
  padding: "1px 7px",
  borderRadius: "4px",
  background: "rgba(255, 255, 255, 0.16)",
  fontFamily: "'SFMono-Regular', Menlo, Consolas, monospace",
  whiteSpace: "nowrap",
};

const CLOSE = {
  position: "absolute",
  top: "50%",
  right: "12px",
  transform: "translateY(-50%)",
  width: "28px",
  height: "28px",
  border: 0,
  borderRadius: "50%",
  background: "transparent",
  color: "#fff",
  fontSize: "20px",
  lineHeight: 1,
  cursor: "pointer",
  opacity: 0.75,
};

/**
 * Fixed notice marking this deployment as a portfolio demo.
 *
 * Styles are inline deliberately: the banner lives outside the Argon SCSS
 * build, so it cannot be broken by the template's stylesheet and needs no
 * change to the asset pipeline.
 */
export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (err) {
      // Private browsing can throw on access; just show the banner.
      return false;
    }
  });

  if (dismissed) {
    return null;
  }

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (err) {
      // Dismissal simply will not persist.
    }
    setDismissed(true);
  };

  return (
    <div style={WRAPPER} role="status">
      <span>
        <strong>Demo site.</strong> A portfolio demonstration, not a production
        system. Sign in with <span style={CREDENTIALS}>admin</span> /{" "}
        <span style={CREDENTIALS}>admin</span>.
      </span>
      <button
        type="button"
        onClick={dismiss}
        style={CLOSE}
        aria-label="Dismiss demo notice"
      >
        &times;
      </button>
    </div>
  );
}
