"use client";

import { useEffect, useState } from "react";

interface WhyPeerLogicsProps {
  theme?: 'default' | 'ecommerce' | 'website' | 'software' | 'medical' | 'hr' | 'uiux';
}

export default function WhyPeerLogics({ theme = 'default' }: WhyPeerLogicsProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          <path d="M12 18L13.09 14.26L18 15L13.09 15.74L12 20L10.91 15.74L6 15L10.91 14.26L12 18Z" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      title: "Result-Driven Team",
      description: "We focus on measurable outcomes, not jargon."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
        </svg>
      ),
      title: "Global Experience",
      description: "Local expertise, global standards. Trusted by startups and U.S. healthcare partners."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      title: "Scalable Solutions",
      description: "Systems that grow with your business, not against it."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          <path d="M12 15.39l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.39z" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      title: "End-to-End Delivery",
      description: "From design to deployment, everything handled by one reliable team."
    }
  ];

  return (
    <section className={`why-peerlogics-section why-peerlogics-${theme} py-5`}>
      <div className="container">
        <div className="why-peerlogics-panel glass-panel-enhanced text-center">
          <p className="eyebrow-badge">WHY PEERLOGICS?</p>
          <div className="why-peerlogics-header-wrapper">
            <h2 className="why-peerlogics-heading">
              Why <span 
                className="headline scroll-gradient-why"
                style={{ 
                  backgroundPosition: `${scrollPosition * 0.5}px center`
                }}
              >PeerLogics</span>?
            </h2>
            <div className="why-peerlogics-divider" aria-hidden></div>
          </div>
          <p className="why-peerlogics-lede">
            We don't just build software, we build partnerships that deliver real results. 
            Here's what sets us apart in the healthcare technology space.
          </p>
          
          <div className="why-peerlogics-grid">
            {features.map((feature, index) => (
              <div key={index} className="why-peerlogics-card glass-card-realistic">
                <div className="why-peerlogics-icon" aria-hidden>
                  {feature.icon}
                </div>
                <h3 className="why-peerlogics-title">{feature.title}</h3>
                <p className="why-peerlogics-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
