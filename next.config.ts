import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable some experimental features that might cause issues
    optimizePackageImports: ["@heroicons/react"],
  },
  // Ensure stable webpack configuration
  webpack: (config, { isServer }) => {
    // Fix for React Server Components bundler issues
    if (isServer) {
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'supports-color': 'commonjs supports-color',
      });
    }
    return config;
  },
  // Enable SWC minifier for better compatibility
  swcMinify: true,
};

export default nextConfig;
