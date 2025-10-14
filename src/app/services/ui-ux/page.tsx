"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function UIUXPage() {
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
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-purple">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/30"></div>

          {/* Enhanced background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200/40 dark:bg-pink-500/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/40 dark:bg-purple-500/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-purple-400/10 dark:to-pink-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-40 w-48 h-48 bg-rose-200/30 dark:bg-rose-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 left-40 w-64 h-64 bg-fuchsia-200/30 dark:bg-fuchsia-400/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center service-heading max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="service-text hover:accent-purple transition-colors">Home</Link>
              <span className="mx-2 service-text-muted">›</span>
              <span className="accent-purple">UI / UX Design</span>
            </nav>

            <div className={`ios-glass ios-glass-load hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span 
                  className="scroll-gradient-uiux"
                  style={{ 
                    backgroundPosition: `${scrollPosition * 0.5}px center`
                  }}
                >
                  UI / UX Design
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 service-text max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Create intuitive, engaging interfaces that convert visitors into loyal users. We design digital experiences that drive results and exceed expectations.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">👥</span>
                  <span className="ml-2 font-semibold">User-Centric Research</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">🎨</span>
                  <span className="ml-2 font-semibold">Modern Design Systems</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">📱</span>
                  <span className="ml-2 font-semibold">Mobile-First Approach</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">♿</span>
                  <span className="ml-2 font-semibold">Accessibility First</span>
              </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">85%</div>
                  <div className="text-sm service-text">Better UX</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">200%</div>
                  <div className="text-sm service-text">Conversion Increase</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">100+</div>
                  <div className="text-sm service-text">Designs Delivered</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">WCAG</div>
                  <div className="text-sm service-text">AA Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Tools */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Our <span className="gradient-purple">Design Process</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  We follow a proven, user-centered design methodology that delivers exceptional results through research, iteration, and validation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">User Research</h3>
                  <p className="service-text leading-relaxed">
                    In-depth user interviews, surveys, and behavior analysis to understand your audience&apos;s needs and pain points.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Information Architecture</h3>
                  <p className="service-text leading-relaxed">
                    Strategic content organization and user flow mapping to create intuitive navigation and information hierarchy.
                  </p>
              </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Visual Design</h3>
                  <p className="service-text leading-relaxed">
                    Modern, brand-aligned visual design systems with micro-interactions and smooth animations that engage users.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Testing & Validation</h3>
                  <p className="service-text leading-relaxed">
                    Usability testing, A/B testing, and analytics to validate design decisions and optimize user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools & Technologies */}
        <section className="py-20 service-bg-alternate">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 service-heading">
                    Industry-Leading <span className="gradient-purple">Design Tools</span>
              </h2>
                  <p className="text-xl service-text mb-8 leading-relaxed">
                    We use the latest design tools and technologies to create cutting-edge user experiences that set your brand apart.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="service-heading font-bold">F</span>
                      </div>
                      <h4 className="text-lg font-bold service-heading mb-2">Figma</h4>
                      <p className="text-sm service-text">Collaborative design platform</p>
                    </div>

                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="service-heading font-bold">A</span>
                      </div>
                      <h4 className="text-lg font-bold service-heading mb-2">Adobe XD</h4>
                      <p className="text-sm service-text">Prototyping & animation</p>
                    </div>

                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="service-heading font-bold">S</span>
                  </div>
                      <h4 className="text-lg font-bold service-heading mb-2">Sketch</h4>
                      <p className="text-sm service-text">Vector design & symbols</p>
                    </div>

                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="service-heading font-bold">P</span>
                      </div>
                      <h4 className="text-lg font-bold service-heading mb-2">Principle</h4>
                      <p className="text-sm service-text">Interactive prototyping</p>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <h3 className="text-2xl font-bold service-heading mb-6 text-center">Design Deliverables</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="service-text">User Research Reports</span>
                        <span className="text-pink-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="service-text">Wireframes & User Flows</span>
                        <span className="text-pink-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="service-text">High-Fidelity Mockups</span>
                        <span className="text-pink-400">✓</span>
                    </div>
                      <div className="flex items-center justify-between">
                        <span className="service-text">Interactive Prototypes</span>
                        <span className="text-pink-400">✓</span>
                    </div>
                      <div className="flex items-center justify-between">
                        <span className="service-text">Design Systems</span>
                        <span className="text-pink-400">✓</span>
                  </div>
                      <div className="flex items-center justify-between">
                        <span className="service-text">Accessibility Audits</span>
                        <span className="text-pink-400">✓</span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Why Choose <span className="gradient-purple">PeerLogics Design?</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  We&apos;re not just designers—we&apos;re strategic partners who understand how great design drives business growth and user satisfaction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">User-Centric Approach</h3>
                  <p className="service-text leading-relaxed">
                    Every design decision is backed by user research and behavioral data to ensure your interface resonates with your target audience.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">♿</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Accessibility First</h3>
                  <p className="service-text leading-relaxed">
                    WCAG 2.1 AA compliant designs that work for everyone, including users with disabilities. Inclusive design is not optional—it&apos;s essential.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Mobile-First Excellence</h3>
                  <p className="service-text leading-relaxed">
                    Designs optimized for mobile performance and touch interactions, ensuring exceptional experiences across all devices.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Design Systems</h3>
                  <p className="service-text leading-relaxed">
                    Scalable design systems that maintain consistency across your entire product ecosystem and accelerate future development.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Conversion Optimization</h3>
                  <p className="service-text leading-relaxed">
                    Data-driven design decisions that improve conversion rates, user engagement, and business metrics.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Collaborative Process</h3>
                  <p className="service-text leading-relaxed">
                    Work closely with your team through every stage of the design process with regular feedback sessions and transparent communication.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 service-heading text-center">
                  Measurable Impact on Business Success
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">85%</div>
                    <div className="service-text">Improved Usability</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">200%</div>
                    <div className="service-text">Conversion Increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">60%</div>
                    <div className="service-text">Reduced Bounce Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">45%</div>
                    <div className="service-text">Mobile Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card-enhanced p-12 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Ready to Create <span className="gradient-purple">Exceptional User Experiences?</span>
              </h2>
                <p className="text-xl service-text mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 100+ businesses that have transformed their digital presence with our user-centered design approach. Let&apos;s design something amazing together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Your Design <span className="text-xl">→</span>
                  </a>
                  <a href="tel:+923399909972" className="inline-flex items-center justify-center gap-2 border-2 border-purple-500 dark:border-pink-400 accent-purple px-8 py-4 rounded-full font-bold hover:bg-purple-500 dark:hover:bg-pink-400 hover:text-white dark:hover:text-black transition-all duration-300 text-lg">
                    📞 Call Now: +92 339 9909972
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Free UX Audit</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Custom Design Strategy</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Unlimited Revisions</span>
                  </div>
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
