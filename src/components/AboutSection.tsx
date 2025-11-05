"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="about-panel text-center">
          <div className="about-header-wrapper">
            <h2 className="about-heading">We build <span 
              className="headline scroll-gradient-about"
              style={{ 
                backgroundPosition: isClient ? `${scrollPosition * 0.5}px center` : '0px center'
              }}
            >modern solutions</span></h2>
            <p className="about-lede">
              Our team combines innovation with technical precision to drive digital transformation.
            </p>
            <div className="about-highlights">
            <div className="ah-card glass-card-realistic">
              <div className="ah-icon" aria-hidden>💻</div>
              <h3 className="ah-title">Full-Stack Expertise
              </h3>
              <p className="ah-text">End-to-end development across web, mobile, and cloud platforms with modern frameworks and tools.</p>
            </div>
            <div className="ah-card glass-card-realistic">
              <div className="ah-icon" aria-hidden>🔒</div>
              <h3 className="ah-title">Secure Architecture</h3>
              <p className="ah-text">Enterprise-grade security, clean code practices, and data protection built into every project.</p>
            </div>
            <div className="ah-card glass-card-realistic">
              <div className="ah-icon" aria-hidden>⚡</div>
              <h3 className="ah-title">Rapid deployment</h3>
              <p className="ah-text">Agile workflows ensure fast delivery and seamless integration with your existing systems.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




