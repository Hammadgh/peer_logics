"use client";

import { useEffect } from "react";

export default function ScrollIndicator() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scrollIndicator');
      if (scrollIndicator) {
        if (window.scrollY > 300) {
          scrollIndicator.style.opacity = '1';
          scrollIndicator.style.pointerEvents = 'auto';
        } else {
          scrollIndicator.style.opacity = '0';
          scrollIndicator.style.pointerEvents = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator" id="scrollIndicator">
      <div className="scroll-arrow" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18,15 12,9 6,15"></polyline>
        </svg>
      </div>
      
    </div>
  );
}
