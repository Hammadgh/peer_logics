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

    // Enhanced iOS compatibility - ensure all required attributes
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.autoplay = true;

    // Set iOS-specific attributes for inline playback
    try {
      videoEl.setAttribute("webkit-playsinline", "true");
      videoEl.setAttribute("playsinline", "true");
      videoEl.setAttribute("x5-video-player-type", "h5-page");
      videoEl.setAttribute("x5-video-player-fullscreen", "false");
    } catch {
      // Silently handle any attribute setting errors
    }

    // Enhanced play function with better error handling
    const tryPlay = async () => {
      try {
        if (videoEl.paused) {
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            await playPromise;
          }
        }
      } catch (error) {
        // Silently handle autoplay failures (common on iOS)
        console.warn('Video autoplay prevented:', error);
      }
    };

    // iOS-specific event listeners for better playback
    const handleCanPlay = () => {
      tryPlay();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };

    const handleTouchStart = () => {
      // Pre-emptively try to play on user interaction (iOS requirement)
      tryPlay();
      document.removeEventListener('touchstart', handleTouchStart);
    };

    // Set up event listeners
    videoEl.addEventListener('canplay', handleCanPlay);
    videoEl.addEventListener('loadeddata', handleCanPlay);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Attempt initial play
    tryPlay();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener('touchstart', handleTouchStart);
      if (videoEl) {
        videoEl.removeEventListener('canplay', handleCanPlay);
        videoEl.removeEventListener('loadeddata', handleCanPlay);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" style={{ contain: 'layout style paint', isolation: 'isolate' }}>
      <div className="hero-media" style={{ contain: 'layout style' }}>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterImage}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/banner-vid.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
        <div className="hero-vignette"></div>
      </div>

      <div className="container hero-center">
            <div className="glass-panel-enhanced hero-panel text-center">
          <div className="eyebrow-badge">END-TO-END PRODUCT DELIVERY</div>
          <h1 className="service-heading hero-title">
            <span 
              className="headline scroll-gradient" 
              style={{ 
                backgroundPosition: `${scrollPosition * 0.5}px center`
              }}
            >
              Ship Impact
            </span>, not just releases.
          </h1>
          <p className="service-text hero-sub">
            We architect cloud-native platforms, craft usable interfaces, and turn data into decisions—fast.
          </p>
          <div className="cta-group d-flex justify-content-center">
            <a href="/contact" className="btn-hero-glass" aria-label="Get Started">Get Started</a>
            <a className="btn-secondary" href="#services" aria-label="Explore Services">Explore Services</a>
          </div>
          <ul className="hero-stats hero-stats-center">
            <li className="glass-card-realistic"><strong className="stat-num">50+</strong><span className="stat-label">Products launched</span></li>
            <li className="glass-card-realistic"><strong className="stat-num">95%</strong><span className="stat-label">On-time delivery</span></li>
            <li className="glass-card-realistic"><strong className="stat-num">24/7</strong><span className="stat-label">Support & SLAs</span></li>
          </ul>
        </div>
      </div>

      

      {/* Corner Elements */}
      <div className="hero-corner top-left"></div>
      <div className="hero-corner top-right"></div>
      <div className="hero-corner bottom-left"></div>
      <div className="hero-corner bottom-right"></div>
    </section>
  );
}


