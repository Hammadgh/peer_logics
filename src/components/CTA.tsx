"use client";

import { useEffect, useState } from "react";

export default function CTA() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <div className="cta-badge">
              <span>Ready to collaborate?</span>
            </div>

            <h2 className="cta-title">
              Transform your ideas into <span 
                className="gradient-text scroll-gradient-cta"
                style={{ 
                  backgroundPosition: `${scrollPosition * 0.5}px center`
                }}
              >digital reality</span>
            </h2>

            <p className="cta-description">
              Partner with our expert team to build scalable, secure, and innovative solutions
              that drive real business results. From concept to deployment—we make it happen.
            </p>

            <div className="cta-actions">
              <a className="btn-primary" href="/contact">
                Start Your Project
              </a>
              <a className="btn-secondary" href="#services">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


