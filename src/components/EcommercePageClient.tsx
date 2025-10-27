"use client";

import { useEffect, useState } from "react";
import WhyPeerLogics from "@/components/WhyPeerLogics";
import Link from "next/link";

export default function EcommercePageClient() {
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
      {/* Enhanced Hero Section with Glass Effects */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 dark:from-slate-900 dark:via-orange-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-white/40 dark:bg-black/30"></div>

        {/* Professional moving gradient background */}
        <div className="absolute inset-0 professional-moving-bg"></div>

        <div className="relative z-10 text-center service-heading max-w-5xl mx-auto px-6">
          <nav className="mb-8 text-sm fade-in-up">
            <Link href="/" className="service-text hover:text-orange-600 dark:hover:accent-orange transition-colors">Home</Link>
            <span className="mx-2 text-gray-600 dark:text-gray-300-muted">›</span>
            <span className="accent-orange">E-Commerce Development</span>
          </nav>

          <div className={`ios-glass ios-glass-load hero-panel text-center fade-in-up fade-in-up-delay-1`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span 
                className="scroll-gradient-ecommerce"
                style={{ 
                  backgroundPosition: `${scrollPosition * 0.5}px center`
                }}
              >
                E-Commerce Development
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 service-text max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
              Build powerful, scalable e-commerce platforms that drive sales and create exceptional customer experiences. From Shopify stores to custom marketplaces, we deliver results.
            </p>

            {/* Enhanced feature badges with animations */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
              <div className="ios-glass px-6 py-3 text-sm service-text font-semibold">
                <span className="accent-orange">🛒</span>
                <span className="ml-2 font-semibold">Multi-Platform Stores</span>
              </div>
              <div className="ios-glass px-6 py-3 text-sm service-text font-semibold">
                <span className="accent-orange">💳</span>
                <span className="ml-2 font-semibold">Secure Payments</span>
              </div>
              <div className="ios-glass px-6 py-3 text-sm service-text font-semibold">
                <span className="accent-orange">📱</span>
                <span className="ml-2 font-semibold">Mobile Commerce</span>
              </div>
              <div className="ios-glass px-6 py-3 text-sm service-text font-semibold">
                <span className="accent-orange">🚀</span>
                <span className="ml-2 font-semibold">Performance Optimized</span>
              </div>
            </div>

            {/* Key statistics with glass cards */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
              <div className="ios-glass p-6 text-center">
                <div className="text-3xl font-bold accent-orange mb-2">$100k+</div>
                <div className="text-sm service-text">Revenue Generated</div>
              </div>
              <div className="ios-glass p-6 text-center">
                <div className="text-3xl font-bold accent-orange mb-2">99.9%</div>
                <div className="text-sm service-text">Uptime</div>
              </div>
              <div className="ios-glass p-6 text-center">
                <div className="text-3xl font-bold accent-orange mb-2">50+</div>
                <div className="text-sm service-text">Stores Built</div>
              </div>
              <div className="ios-glass p-6 text-center">
                <div className="text-3xl font-bold accent-orange mb-2">&lt;2s</div>
                <div className="text-sm service-text">Load Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 dark:from-orange-400 dark:to-purple-400">Platforms</span>
              </h2>
              <p className="text-xl service-text max-w-3xl mx-auto">
                Choose from industry-leading platforms or custom solutions. We help you select the perfect platform for your business needs and growth goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
              {/* Shopify */}
              <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 service-heading text-center">Shopify</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">Perfect for growing businesses</p>
                <ul className="space-y-3 service-text">
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    2M+ active stores worldwide
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    100+ payment gateways
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    24/7 expert support
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Advanced analytics
                  </li>
                </ul>
              </div>

              {/* WooCommerce */}
              <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold mb-4 service-heading text-center">WooCommerce</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">WordPress-powered flexibility</p>
                <ul className="space-y-3 service-text">
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Complete WordPress integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Unlimited customization
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Enterprise-level scaling
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    SEO-optimized structure
                  </li>
                </ul>
              </div>

              {/* Custom Solutions */}
              <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 service-heading text-center">Custom Platforms</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">Tailored for unique requirements</p>
                <ul className="space-y-3 service-text">
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Built to your specifications
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Advanced features & integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Multi-vendor marketplaces
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 dark:text-orange-300 mr-3">✓</span>
                    Subscription & recurring billing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PeerLogics Section */}
      <WhyPeerLogics theme="ecommerce" />

      {/* Enhanced CTA Section */}
      <section className="py-20 service-bg-alternate">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="glass-card-enhanced p-12 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading cta-heading-fixed">
                Ready to Launch Your <span className="gradient-orange">E-Commerce Empire?</span>
              </h2>
              <p className="text-xl service-text mb-8 leading-relaxed max-w-2xl mx-auto">
                Join 50+ successful online stores that have transformed their business with our e-commerce solutions. Let&apos;s turn your vision into a profitable reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                  Start Your Store <span className="text-xl">→</span>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                  <span className="service-text">Free Strategy Session</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                  <span className="service-text">Custom Development Plan</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                  <span className="service-text">90-Day Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



