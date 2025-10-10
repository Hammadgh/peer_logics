"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function WebsiteDevelopmentPage() {
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
      <main className="min-h-screen">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Enhanced background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-40 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 left-40 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="hover:text-cyan-300 transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-cyan-300">Website Development</span>
            </nav>

            <div className={`ios-glass ios-glass-load hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span 
                  className="scroll-gradient-website"
                  style={{ 
                    backgroundPosition: `${scrollPosition * 0.5}px center`
                  }}
                >
                  Website Development
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Build powerful, scalable web applications that drive results. From concept to deployment, we deliver cutting-edge solutions that transform your digital presence.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-cyan-300">⚡</span>
                  <span className="ml-2 font-semibold">Next.js 14 & React 18</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-cyan-300">🚀</span>
                  <span className="ml-2 font-semibold">Performance Optimized</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-cyan-300">📱</span>
                  <span className="ml-2 font-semibold">Mobile-First Design</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-cyan-300">🔒</span>
                  <span className="ml-2 font-semibold">Enterprise Security</span>
                </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">&lt;100ms</div>
                  <div className="text-sm text-gray-300">Average Load Time</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Technologies</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies & Frameworks Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Technologies</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We leverage the latest frameworks, libraries, and tools to build future-proof web applications that scale with your business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                {/* Frontend Technologies */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Frontend Excellence</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      React 18 with TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Next.js 14 App Router
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Tailwind CSS & Framer Motion
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Progressive Web Apps (PWA)
                    </li>
                  </ul>
                </div>

                {/* Backend Technologies */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Backend Power</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Node.js & Express.js
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Python FastAPI & Django
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      RESTful & GraphQL APIs
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Microservices Architecture
                    </li>
                  </ul>
              </div>

                {/* Database & Cloud */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Cloud & Database</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      AWS, Azure, Google Cloud
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      MongoDB, PostgreSQL, Redis
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      Serverless Functions
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">✓</span>
                      CDN & Edge Computing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Development Process</span>
              </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    We follow agile methodologies and industry best practices to deliver exceptional results. Our process is transparent, collaborative, and designed to exceed expectations.
                  </p>

                  <div className="space-y-6">
                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Discovery & Planning</h4>
                          <p className="text-gray-300">Deep dive into your requirements, market research, and strategic planning for optimal solutions.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Design & Prototyping</h4>
                          <p className="text-gray-300">Create wireframes, mockups, and interactive prototypes with user experience at the forefront.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Development & Testing</h4>
                          <p className="text-gray-300">Agile development with continuous integration, automated testing, and quality assurance.</p>
                    </div>
                    </div>
                  </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Deployment & Support</h4>
                          <p className="text-gray-300">Seamless deployment, performance monitoring, and ongoing support for sustained success.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <Image
                      src="/assests/process-img.png"
                      alt="Development Process"
                      width={600}
                      height={400}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">PeerLogics?</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  We&apos;re not just developers—we&apos;re strategic partners who understand business growth through technology. Here&apos;s what sets us apart.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Business-First Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We don&apos;t just build websites—we create digital solutions that drive measurable business results. Every line of code serves a strategic purpose.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Lightning Performance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our websites load in under 100ms with 99.9% uptime. We optimize every aspect—from code splitting to CDN distribution—for unmatched speed.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Enterprise Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    SOC 2 compliant with end-to-end encryption, DDoS protection, and regular security audits. Your data is protected by industry-leading standards.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Mobile-First Excellence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every website is built mobile-first with PWA capabilities, ensuring perfect performance across all devices and screen sizes.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">SEO & Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built-in SEO optimization, Google Analytics 4 integration, and conversion tracking to measure and improve your ROI from day one.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Scalable Architecture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Future-proof solutions built with microservices, serverless functions, and cloud-native technologies that grow with your business.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 text-white text-center">
                  Proven Track Record of Success
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-300 mb-2">150+</div>
                    <div className="text-gray-300">Websites Launched</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-300 mb-2">98%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-300 mb-2">3 Years</div>
                    <div className="text-gray-300">Average Partnership</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-300 mb-2">$2M+</div>
                    <div className="text-gray-300">Client Revenue Generated</div>
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
                  Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Stories</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how we&apos;ve transformed businesses with our web development expertise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">E</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Platform</h3>
                    <p className="text-gray-400 mb-4">B2B Marketplace • React & Node.js</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Performance Improvement</span>
                      <span className="text-cyan-400 font-bold">85% faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-cyan-400 font-bold">+230%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Mobile Traffic</span>
                      <span className="text-cyan-400 font-bold">+180%</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    &ldquo;PeerLogics transformed our outdated platform into a modern, high-performance marketplace. The results speak for themselves.&rdquo;
                  </p>
                  <p className="text-cyan-400 font-semibold mt-4">- Sarah Johnson, CTO</p>
                </div>

                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">SaaS Application</h3>
                    <p className="text-gray-400 mb-4">Project Management Tool • Next.js & AWS</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Load Time Reduction</span>
                      <span className="text-cyan-400 font-bold">90% faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">User Engagement</span>
                      <span className="text-cyan-400 font-bold">+150%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Server Costs</span>
                      <span className="text-cyan-400 font-bold">-60%</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    &ldquo;The team&apos;s technical expertise and attention to detail delivered exactly what we needed. Outstanding results!&rdquo;
                  </p>
                  <p className="text-cyan-400 font-semibold mt-4">- Michael Chen, CEO</p>
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
                  Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Digital Presence?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 150+ businesses that have accelerated their growth with our cutting-edge web development solutions. Let&apos;s discuss your project and turn your vision into reality.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Your Project <span className="text-xl">→</span>
                  </a>
                  <a href="tel:+923399909972" className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg">
                    📞 Call Now: +92 339 9909972
                  </a>
              </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Free Consultation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Custom Proposal</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">30-Day Guarantee</span>
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
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Questions</span>
              </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get answers to common questions about our web development services.
                </p>
              </div>

              <div className="space-y-6 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">How long does a typical website project take?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Most projects are completed within 4-8 weeks, depending on complexity. Simple websites can be done in 2-3 weeks, while complex web applications may take 8-12 weeks. We provide detailed timelines during our initial consultation.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Do you provide ongoing maintenance and support?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. Our 24/7 monitoring ensures your website stays secure and fast.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Can you work with our existing design or branding?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Absolutely! We can work with your existing brand guidelines, design assets, or even redesign specific sections while maintaining consistency with your current visual identity.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">What technologies do you use for web development?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use cutting-edge technologies including React 18, Next.js 14, TypeScript, Node.js, Python, AWS/Azure/Google Cloud, MongoDB, PostgreSQL, and more. We choose the best tech stack for your specific needs.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Do you offer SEO optimization services?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes, SEO is built into every website we create. We implement best practices including semantic HTML, meta tags, structured data, performance optimization, and mobile-first design to ensure your site ranks well in search engines.
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
