"use client";

import { useEffect, useRef, useState } from "react";
type HeroProps = {
  posterImage?: string;
};

export default function Hero({ posterImage }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Ensure attributes for iOS inline autoplay
    videoEl.muted = true;
    videoEl.playsInline = true;
    try { videoEl.setAttribute("webkit-playsinline", "true"); } catch {}
    try { videoEl.setAttribute("playsinline", "true"); } catch {}

    const tryPlay = () => {
      const p = videoEl.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {});
      }
    };

    // Attempt to play immediately and when page becomes visible
    tryPlay();
    const onVisibility = () => { if (document.visibilityState === "visible") tryPlay(); };
    document.addEventListener("visibilitychange", onVisibility);

    // Set loaded state for animations
    const timer = setTimeout(() => setIsLoaded(true), 300);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          poster={posterImage}
          controls={false}
          disablePictureInPicture
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/banner-vid.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
        <div className="hero-vignette"></div>
      </div>

      <div className="container hero-center">
        <div className={`glass-panel hero-panel text-center ${isLoaded ? 'hero-panel-loaded' : ''}`}>
          <div className={`eyebrow-badge ${isLoaded ? 'fade-in-up' : ''}`}>END-TO-END PRODUCT DELIVERY</div>
          <h1 className={`text-white hero-title ${isLoaded ? 'fade-in-up fade-in-up-delay-1' : ''}`}>
            <span className="headline">Ship Impact</span>, not just releases.
          </h1>
          <p className={`text-white hero-sub ${isLoaded ? 'fade-in-up fade-in-up-delay-2' : ''}`}>
            We architect cloud-native platforms, craft usable interfaces, and turn data into decisions—fast.
          </p>
          <div className={`cta-group d-flex justify-content-center ${isLoaded ? 'fade-in-up fade-in-up-delay-3' : ''}`}>
            <a href="/contact" className="btn-primary" aria-label="Get Started">Get Started</a>
            <a className="btn-secondary" href="#services" aria-label="Explore Services">Explore Services</a>
          </div>
          <ul className={`hero-stats hero-stats-center ${isLoaded ? 'fade-in-up fade-in-up-delay-4' : ''}`}>
            <li><strong className="stat-num">50+</strong><span className="stat-label">Products launched</span></li>
            <li><strong className="stat-num">95%</strong><span className="stat-label">On-time delivery</span></li>
            <li><strong className="stat-num">24/7</strong><span className="stat-label">Support & SLAs</span></li>
          </ul>
        </div>
      </div>

      <div className={`scroll-cue ${isLoaded ? 'fade-in' : ''}`}>
        <span></span>
        <small className="text-white">Scroll</small>
      </div>
    </section>
  );
}


