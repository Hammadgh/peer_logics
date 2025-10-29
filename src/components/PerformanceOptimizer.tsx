'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/_next/static/media/geist-sans.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/assests/peerlogics.png',
        '/assests/mainImage.png',
        '/banner-vid.mp4'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = src.endsWith('.mp4') ? 'video' : 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize video loading
    const optimizeVideos = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        // Add loading="lazy" for non-critical videos
        if (!video.classList.contains('hero-video')) {
          video.setAttribute('loading', 'lazy');
        }
        
        // Add preload="metadata" for better performance
        video.setAttribute('preload', 'metadata');
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for images below the fold
        if (!img.closest('.hero')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add fetchpriority="high" for above-the-fold images
        if (img.closest('.hero') || img.closest('.navbar')) {
          img.setAttribute('fetchpriority', 'high');
        }
      });
    };

    // Intersection Observer for lazy loading
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        // Observe all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeVideos();
    optimizeImages();
    setupLazyLoading();

    // Cleanup
    return () => {
      // Remove any added elements if needed
    };
  }, []);

  return null;
}








