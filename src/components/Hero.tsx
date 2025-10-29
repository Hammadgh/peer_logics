"use client";

export default function Hero() {
  return (
    <section className="hero-modern" style={{ contain: 'layout style paint', isolation: 'isolate' }}>
      <div className="container hero-modern-container">
        <div className="hero-modern-content">
          {/* Left Section - Headline and CTAs */}
          <div className="hero-modern-left">
            <h1 className="hero-modern-headline">
              Build.<br />
              Scale.<br />
              Innovate.
            </h1>
            <p className="hero-modern-subhead">
              Empowering businesses with secure, scalable digital solutions.
            </p>
            <div className="hero-modern-cta-group">
              <a href="#services" className="contact-us-btn">
                Explore Services
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - reserved for future content */}
        </div>
      </div>
    </section>
  );
}
