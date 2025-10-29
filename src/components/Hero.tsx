"use client";

import { useEffect, useRef, useState } from "react";

type HeroProps = {
  posterImage?: string;
};

export default function Hero({ posterImage }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.autoplay = true;

    try {
      videoEl.setAttribute("webkit-playsinline", "true");
      videoEl.setAttribute("playsinline", "true");
    } catch {}

    const tryPlay = async () => {
      try {
        if (videoEl.paused) {
          await videoEl.play();
        }
      } catch (error) {
        console.warn('Video autoplay prevented:', error);
      }
    };

    const handleCanPlay = () => tryPlay();
    videoEl.addEventListener('canplay', handleCanPlay);
    document.addEventListener('touchstart', () => {
      tryPlay();
      document.removeEventListener('touchstart', () => {});
    }, { passive: true });

    tryPlay();

    return () => {
      if (videoEl) {
        videoEl.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-modern force-dark-hero" style={{ contain: 'layout style paint', isolation: 'isolate' }}>
      {/* Background Video */}
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterImage}
        >
          <source src="/banner-vid.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-modern-container">
        <div className="hero-modern-content">
          {/* Left Section - Headline and CTAs */}
          <div className="hero-modern-left">
            <h1 className="hero-modern-headline">
              <span className="hero-modern-word hero-word-build">Build.</span>
              <span className="hero-modern-word hero-word-scale">Scale.</span>
              <span className="hero-modern-word hero-word-innovate">Innovate.</span>
            </h1>
            <p className="hero-modern-subhead">
              Empowering businesses with secure, scalable digital solutions.
            </p>
            <div className="hero-modern-cta-group">
              <a href="#services" className="btn-hero-primary">
                Explore Services
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
             
            </div>
          </div>

          {/* Right Section - Glass Dashboard Preview Card */}
        
        </div>
      </div>
    </section>
  );
}
