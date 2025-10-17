"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyPeerLogics from "@/components/WhyPeerLogics";
import Link from "next/link";

export default function MedicalBillingPage() {
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
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:medical-billing">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-green">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/30"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200/40 dark:bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200/40 dark:bg-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-200/30 to-teal-200/30 dark:from-emerald-400/10 dark:to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-40 w-48 h-48 bg-green-200/30 dark:bg-green-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-40 left-40 w-64 h-64 bg-lime-200/30 dark:bg-lime-400/10 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Moving shapes like main services section */}
            <div className="hero-moving-shape-1"></div>
            <div className="hero-moving-shape-2"></div>
            <div className="hero-moving-shape-3"></div>
            <div className="hero-moving-shape-4"></div>
          </div>

          <div className="relative z-10 text-center service-heading max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="service-text hover:accent-green transition-colors">Home</Link>
              <span className="mx-2 service-text-muted">›</span>
              <span className="accent-green">Medical Billing</span>
            </nav>

            <div className={`glass-panel hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span 
                  className="scroll-gradient-medical"
                  style={{ 
                    backgroundPosition: `${scrollPosition * 0.5}px center`
                  }}
                >
                  Medical Billing
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 service-text max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Streamlined healthcare revenue cycle management that maximizes reimbursements while ensuring complete compliance with healthcare regulations and standards.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-green">🏥</span>
                  <span className="ml-2 font-semibold">99.8% Claim Accuracy</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-green">🔒</span>
                  <span className="ml-2 font-semibold">HIPAA & HITECH Compliant</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-green">⚡</span>
                  <span className="ml-2 font-semibold">24/7 Processing</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-green">📊</span>
                  <span className="ml-2 font-semibold">Real-time Analytics</span>
              </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-green mb-2">99.8%</div>
                  <div className="text-sm service-text">Claim Accuracy</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-green mb-2">30%</div>
                  <div className="text-sm service-text">Faster Reimbursement</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-green mb-2">100%</div>
                  <div className="text-sm service-text">Compliance</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-green mb-2">500+</div>
                  <div className="text-sm service-text">Providers Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Billing Systems & Compliance */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Healthcare <span className="gradient-green">Billing Systems</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  Comprehensive medical billing platforms designed specifically for healthcare providers, ensuring accuracy, compliance, and maximum reimbursement.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                {/* Electronic Health Records Integration */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">EHR Integration</h3>
                  <ul className="space-y-3 service-text">
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Epic, Cerner, Meditech integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Real-time data synchronization
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Automated charge capture
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Seamless workflow integration
                    </li>
                  </ul>
                </div>

                {/* Claim Management */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Claim Processing</h3>
                  <ul className="space-y-3 service-text">
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Automated claim scrubbing
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Electronic claim submission
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Real-time claim tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Automated follow-ups
                    </li>
                  </ul>
              </div>

                {/* Compliance & Security */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Compliance & Security</h3>
                  <ul className="space-y-3 service-text">
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      HIPAA & HITECH compliant
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      SOC 2 Type II certified
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      End-to-end encryption
                    </li>
                    <li className="flex items-center">
                      <span className="text-emerald-400 mr-3">✓</span>
                      Regular security audits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Cycle Management */}
        <section className="py-20 service-bg-alternate">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 service-heading">
                    Complete <span className="gradient-green">Revenue Cycle Management</span>
              </h2>
                  <p className="text-xl service-text mb-8 leading-relaxed">
                    From patient registration to final payment collection, we optimize every step of your revenue cycle for maximum efficiency and profitability.
                  </p>

                  <div className="space-y-6">
                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Patient Registration & Verification</h4>
                          <p className="service-text">Accurate patient data collection, insurance verification, and eligibility checking.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">2</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Charge Capture & Coding</h4>
                          <p className="service-text">Automated charge entry, ICD-10/CPT coding, and medical necessity validation.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Claim Submission & Follow-up</h4>
                          <p className="service-text">Electronic claim submission, automated follow-ups, and denial management.</p>
                    </div>
                    </div>
                  </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">4</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Payment Processing & Reporting</h4>
                          <p className="service-text">Payment posting, reconciliation, and comprehensive financial reporting.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <h3 className="text-2xl font-bold service-heading mb-6 text-center">Key Performance Metrics</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">99.8%</div>
                        <div className="text-sm service-text">Claim Accuracy Rate</div>
                    </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">15 Days</div>
                        <div className="text-sm service-text">Average Collection Period</div>
                    </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">30%</div>
                        <div className="text-sm service-text">Faster Reimbursement</div>
                  </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
                        <div className="text-sm service-text">HIPAA Compliance</div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Why Choose <span className="gradient-green">PeerLogics Medical Billing?</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  We&apos;re healthcare revenue cycle experts with deep industry knowledge, ensuring your practice gets paid accurately and on time while maintaining compliance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Healthcare Expertise</h3>
                  <p className="service-text leading-relaxed">
                    Deep understanding of healthcare regulations, coding requirements, and payer-specific rules for accurate billing.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Advanced Analytics</h3>
                  <p className="service-text leading-relaxed">
                    Real-time dashboards, predictive analytics, and detailed reporting to optimize your revenue cycle performance.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Complete Compliance</h3>
                  <p className="service-text leading-relaxed">
                    HIPAA, HITECH, and MACRA compliant with regular audits, secure data handling, and comprehensive documentation.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Automated Workflows</h3>
                  <p className="service-text leading-relaxed">
                    AI-powered automation for claim processing, eligibility verification, and denial management to reduce manual work.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Proven Results</h3>
                  <p className="service-text leading-relaxed">
                    30% faster reimbursements, 99.8% accuracy, and 500+ satisfied healthcare providers across specialties.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Ongoing Support</h3>
                  <p className="service-text leading-relaxed">
                    Dedicated account management, 24/7 technical support, and regular performance reviews to ensure continued success.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 service-heading text-center">
                  Measurable Impact on Healthcare Revenue
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold accent-green mb-2">30%</div>
                    <div className="service-text">Faster Reimbursement</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-green mb-2">99.8%</div>
                    <div className="service-text">Claim Accuracy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-green mb-2">50%</div>
                    <div className="service-text">Denial Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-green mb-2">25%</div>
                    <div className="service-text">Revenue Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why PeerLogics Section */}
        <WhyPeerLogics theme="medical" />

        {/* Enhanced CTA Section */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card-enhanced p-12 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Ready to Optimize Your <span className="gradient-green">Healthcare Revenue?</span>
              </h2>
                <p className="text-xl service-text mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 500+ healthcare providers who have transformed their revenue cycle with our medical billing expertise. Focus on patient care while we maximize your reimbursements.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Optimizing <span className="text-xl">→</span>
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Free Revenue Analysis</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Custom Implementation Plan</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">HIPAA Compliant Solutions</span>
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
