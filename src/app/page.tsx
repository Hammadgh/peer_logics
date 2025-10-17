"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import WhyPeerLogics from "@/components/WhyPeerLogics";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section id="services">
        <div className="services-section">
          <div className="container text-lg-start text-center">
            <p className="expertise-text">Expertise</p>
            <h1 className="services-text">
              Our <span 
                className="scroll-gradient-services"
                style={{ 
                  backgroundPosition: `${scrollPosition * 0.5}px center`
                }}
              >Services</span>
            </h1>
          </div>
        </div>
        <div className="service-cards">
          <ServiceCards />
        </div>
      </section>

      <AboutSection />

      <CTA />

      <WhyPeerLogics />
      <Footer />
    </>
  );
}
