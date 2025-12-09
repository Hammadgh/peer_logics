import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration for cPanel deployment
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true, // Better compatibility with static hosting
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Note: Headers are not supported with static export (output: 'export')
  // Headers should be configured at the web server level (Apache/Nginx) for static hosting
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'next-themes'],
  },
};

export default nextConfig;
