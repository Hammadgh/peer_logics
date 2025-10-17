"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about-section py-5">
      <div className="about-illustration" aria-hidden></div>
      <div className="container">
        <div className="about-panel glass-panel-enhanced text-center">
          <p className="eyebrow-badge">ABOUT PEERLOGICS</p>
          <div className="about-header-wrapper">
            <h2 className="about-heading">We build <span 
              className="headline scroll-gradient-about"
              style={{ 
                backgroundPosition: `${scrollPosition * 0.5}px center`
              }}
            >secure</span> healthcare solutions, fast</h2>
            <div className="about-divider" aria-hidden></div>
          </div>
          <p className="about-lede">
            We specialize in healthcare technology solutions, from medical billing automation to HR management systems. 
            Our team combines deep healthcare industry knowledge with modern technology practices to deliver 
            HIPAA-compliant, scalable solutions that improve operational efficiency and patient care.
          </p>
          <ul className="about-bullets">
            <li>HIPAA-compliant solutions with enterprise-grade security</li>
            <li>Streamlined medical billing and revenue cycle management</li>
            <li>Integrated HR systems designed for healthcare organizations</li>
          </ul>
          <div className="about-highlights">
            <div className="ah-card glass-card-realistic">
              <div className="ah-icon" aria-hidden>🏥</div>
              <h3 className="ah-title">Healthcare expertise</h3>
              <p className="ah-text">Deep understanding of medical billing, compliance, and healthcare workflows.</p>
            </div>
            <div className="ah-card glass-card-realistic">
              <div className="ah-icon" aria-hidden>🔒</div>
              <h3 className="ah-title">HIPAA compliant</h3>
              <p className="ah-text">Security-first approach with built-in compliance and audit capabilities.</p>
            </div>
            <div className="ah-card glass-card-realistic">
              <div className="ah-icon" aria-hidden>⚡</div>
              <h3 className="ah-title">Rapid deployment</h3>
              <p className="ah-text">Fast implementation with minimal disruption to your existing operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



