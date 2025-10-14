"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-banner">
        <div className="cookie-content">
          <div className="cookie-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
              <circle cx="8" cy="10" r="1" fill="currentColor" />
              <circle cx="12" cy="14" r="1" fill="currentColor" />
              <circle cx="16" cy="10" r="1" fill="currentColor" />
              <circle cx="10" cy="16" r="1" fill="currentColor" />
            </svg>
          </div>
          <div className="cookie-text">
            <h3 className="cookie-title">We Value Your Privacy</h3>
            <p className="cookie-description">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
              <a href="/privacy-policy" className="cookie-link">Learn more</a>
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button onClick={declineCookies} className="cookie-btn cookie-btn-decline">
            Decline
          </button>
          <button onClick={acceptCookies} className="cookie-btn cookie-btn-accept">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

