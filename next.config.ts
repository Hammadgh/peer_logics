import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration for cPanel deployment
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better compatibility with static hosting
};

export default nextConfig;
