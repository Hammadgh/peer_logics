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
    } catch (e) {
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
      setIsLoaded(true);
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

    // Set loaded state for animations (backup timeout)
    const timer = setTimeout(() => setIsLoaded(true), 500);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener('touchstart', handleTouchStart);
      if (videoEl) {
        videoEl.removeEventListener('canplay', handleCanPlay);
        videoEl.removeEventListener('loadeddata', handleCanPlay);
      }
      clearTimeout(timer);
    };
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
          crossOrigin="anonymous"
          poster={posterImage}
          controls={false}
          disablePictureInPicture
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          x5-video-player-fullscreen="false"
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


