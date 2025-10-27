"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import WhyPeerLogics from "@/components/WhyPeerLogics";
import CTA from "@/components/CTA";

export default function HomePageClient() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side to prevent hydration mismatch
    setIsClient(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero />

      <AboutSection />

      <section id="services">
        <div className="services-section">
          <div className="container text-lg-start text-center">
            <p className="expertise-text">Expertise</p>
            <h1 className="services-text">
              Our <span 
                className="scroll-gradient-services"
                style={{ 
                  backgroundPosition: isClient ? `${scrollPosition * 0.5}px center` : '0px center'
                }}
              >Services</span>
            </h1>
          </div>
        </div>
        <div className="service-cards">
          <ServiceCards />
        </div>
      </section>

      <CTA />

      <WhyPeerLogics />
    </>
  );
}
