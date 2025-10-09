import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-purple-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/assests/Ecom.jpeg')] bg-cover bg-center opacity-20"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="hover:text-orange-300 transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-orange-300">E-Commerce Development</span>
            </nav>

            <div className={`ios-glass ios-glass-load hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-purple-200 bg-clip-text text-transparent">
              E-Commerce Development
            </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Build powerful, scalable e-commerce platforms that drive sales and create exceptional customer experiences. From Shopify stores to custom marketplaces, we deliver results.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-orange-300">🛒</span>
                  <span className="ml-2 font-semibold">Multi-Platform Stores</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-orange-300">💳</span>
                  <span className="ml-2 font-semibold">Secure Payments</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-orange-300">📱</span>
                  <span className="ml-2 font-semibold">Mobile Commerce</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-orange-300">🚀</span>
                  <span className="ml-2 font-semibold">Performance Optimized</span>
                </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">$2.5M+</div>
                  <div className="text-sm text-gray-300">Revenue Generated</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Stores Built</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-orange-300 mb-2">&lt;2s</div>
                  <div className="text-sm text-gray-300">Load Time</div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Commerce Platforms Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Platforms</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose from industry-leading platforms or custom solutions. We help you select the perfect platform for your business needs and growth goals.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                {/* Shopify */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Shopify</h3>
                  <p className="text-gray-300 mb-6 text-center">Perfect for growing businesses</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      2M+ active stores worldwide
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      100+ payment gateways
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      24/7 expert support
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Advanced analytics
                    </li>
                  </ul>
                </div>

                {/* WooCommerce */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">WooCommerce</h3>
                  <p className="text-gray-300 mb-6 text-center">WordPress-powered flexibility</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Complete WordPress integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Unlimited customization
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Enterprise-level scaling
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      SEO-optimized structure
                    </li>
                  </ul>
              </div>

                {/* Custom Solutions */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Custom Platforms</h3>
                  <p className="text-gray-300 mb-6 text-center">Tailored for unique requirements</p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Built to your specifications
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Advanced features & integrations
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Multi-vendor marketplaces
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-3">✓</span>
                      Subscription & recurring billing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Systems & Security */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Payment Systems</span>
              </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    We integrate industry-leading payment solutions with enterprise-grade security. Accept payments globally with confidence and compliance.
                  </p>

                  <div className="space-y-6">
                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">💳</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Stripe Integration</h4>
                          <p className="text-gray-300">Accept cards, digital wallets, and bank transfers globally with enterprise security.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">🛡️</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">PCI DSS Compliance</h4>
                          <p className="text-gray-300">Level 1 PCI compliance with end-to-end encryption and fraud protection.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">🌍</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Global Payment Methods</h4>
                          <p className="text-gray-300">Support for 135+ currencies and local payment methods worldwide.</p>
                    </div>
                    </div>
                  </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">📱</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Mobile Wallets</h4>
                          <p className="text-gray-300">Apple Pay, Google Pay, Samsung Pay, and other digital wallet integrations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Security Features</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="glass-card p-4 text-center">
                            <div className="text-2xl mb-2">🔒</div>
                            <div className="text-sm text-gray-300">SSL Encryption</div>
                          </div>
                          <div className="glass-card p-4 text-center">
                            <div className="text-2xl mb-2">🛡️</div>
                            <div className="text-sm text-gray-300">DDoS Protection</div>
                          </div>
                          <div className="glass-card p-4 text-center">
                            <div className="text-2xl mb-2">🔍</div>
                            <div className="text-sm text-gray-300">Fraud Detection</div>
                          </div>
                          <div className="glass-card p-4 text-center">
                            <div className="text-2xl mb-2">📊</div>
                            <div className="text-sm text-gray-300">Real-time Monitoring</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <h4 className="text-lg font-bold text-white mb-3">Payment Success Rate</h4>
                        <div className="text-4xl font-bold text-orange-400 mb-2">99.7%</div>
                        <div className="text-sm text-gray-300">Average across all stores</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced E-Commerce Features */}
        <section className="py-20 bg-gradient-to-br from-orange-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-purple-300">E-Commerce Features</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  We build feature-rich online stores with everything you need to succeed in today&apos;s competitive marketplace.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Custom Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Unique, brand-aligned designs that reflect your vision and convert visitors into customers.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Inventory Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Real-time inventory tracking, automated reordering, and comprehensive product management.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Analytics Dashboard</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive insights into sales, customer behavior, and performance metrics.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Shipping Integration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automated shipping calculations, tracking, and integration with major carriers.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Marketing Tools</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Email campaigns, abandoned cart recovery, loyalty programs, and promotional tools.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Multi-Channel Sales</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Sell on Amazon, eBay, Facebook, Instagram, and other marketplaces seamlessly.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 text-white text-center">
                  Proven Results That Drive Growth
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-orange-300 mb-2">320%</div>
                    <div className="text-gray-300">Average ROI Increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-300 mb-2">85%</div>
                    <div className="text-gray-300">Conversion Rate Boost</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-300 mb-2">60%</div>
                    <div className="text-gray-300">Cart Abandonment Reduction</div>
                    </div>
                    <div>
                    <div className="text-4xl font-bold text-orange-300 mb-2">45%</div>
                    <div className="text-gray-300">Mobile Sales Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Stories</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how we&apos;ve helped businesses transform their online presence and boost revenue.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">F</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Fashion Retailer</h3>
                    <p className="text-gray-400 mb-4">Clothing & Accessories • Shopify Plus</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Revenue Increase</span>
                      <span className="text-orange-400 font-bold">+280%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-orange-400 font-bold">+150%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Mobile Sales</span>
                      <span className="text-orange-400 font-bold">+200%</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    &ldquo;PeerLogics transformed our online store into a revenue-generating powerhouse. The results exceeded our wildest expectations.&rdquo;
                  </p>
                  <p className="text-orange-400 font-semibold mt-4">- Jessica Martinez, CEO</p>
                </div>

                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">T</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tech Marketplace</h3>
                    <p className="text-gray-400 mb-4">Electronics & Gadgets • Custom Platform</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Platform Launch</span>
                      <span className="text-orange-400 font-bold">6 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Vendors Onboarded</span>
                      <span className="text-orange-400 font-bold">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transaction Volume</span>
                      <span className="text-orange-400 font-bold">$1.2M/month</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    &ldquo;The custom marketplace solution perfectly handles our complex multi-vendor requirements. Outstanding technical execution!&rdquo;
                  </p>
                  <p className="text-orange-400 font-semibold mt-4">- David Kim, CTO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card-enhanced p-12 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-purple-300">E-Commerce Empire?</span>
              </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 50+ successful online stores that have transformed their business with our e-commerce solutions. Let&apos;s turn your vision into a profitable reality.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Your Store <span className="text-xl">→</span>
                  </a>
                  <a href="tel:+923399909972" className="inline-flex items-center justify-center gap-2 border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-bold hover:bg-orange-400 hover:text-black transition-all duration-300 text-lg">
                    📞 Call Now: +92 339 9909972
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Free Strategy Session</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Custom Development Plan</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">90-Day Success Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">FAQ</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get answers to common questions about our e-commerce development services.
                </p>
              </div>

              <div className="space-y-6 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Which e-commerce platform is right for my business?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We help you choose based on your specific needs. Shopify is perfect for most growing businesses, WooCommerce offers maximum flexibility for WordPress sites, and custom solutions are ideal for unique requirements or high-volume operations.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">How long does it take to launch an e-commerce store?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Simple Shopify stores can launch in 2-3 weeks, while complex custom platforms typically take 6-8 weeks. We provide detailed timelines during our strategy consultation and keep you updated throughout the entire process.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Do you provide payment gateway integration?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Absolutely! We integrate with all major payment gateways including Stripe, PayPal, Square, Authorize.Net, and support for 135+ currencies. All integrations include enterprise-grade security and PCI DSS compliance.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Can you help with digital marketing and SEO?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes! We offer comprehensive digital marketing services including SEO optimization, Google Ads, Facebook/Instagram ads, email marketing automation, and conversion rate optimization to drive traffic and sales to your store.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">What ongoing support do you provide after launch?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We provide 30 days of free support after launch, plus optional maintenance packages including security updates, performance monitoring, content updates, and technical support. Many clients choose our comprehensive care plans for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
