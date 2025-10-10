"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <main className="min-h-screen">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Enhanced background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-40 w-48 h-48 bg-green-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 left-40 w-64 h-64 bg-lime-400/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-emerald-300">Medical Billing</span>
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

              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Streamlined healthcare revenue cycle management that maximizes reimbursements while ensuring complete compliance with healthcare regulations and standards.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-emerald-300">🏥</span>
                  <span className="ml-2 font-semibold">99.8% Claim Accuracy</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-emerald-300">🔒</span>
                  <span className="ml-2 font-semibold">HIPAA & HITECH Compliant</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-emerald-300">⚡</span>
                  <span className="ml-2 font-semibold">24/7 Processing</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-emerald-300">📊</span>
                  <span className="ml-2 font-semibold">Real-time Analytics</span>
              </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">99.8%</div>
                  <div className="text-sm text-gray-300">Claim Accuracy</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">30%</div>
                  <div className="text-sm text-gray-300">Faster Reimbursement</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Compliance</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">500+</div>
                  <div className="text-sm text-gray-300">Providers Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Billing Systems & Compliance */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Billing Systems</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive medical billing platforms designed specifically for healthcare providers, ensuring accuracy, compliance, and maximum reimbursement.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                {/* Electronic Health Records Integration */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">EHR Integration</h3>
                  <ul className="space-y-3 text-gray-300">
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
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Claim Processing</h3>
                  <ul className="space-y-3 text-gray-300">
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
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Compliance & Security</h3>
                  <ul className="space-y-3 text-gray-300">
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
        <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Revenue Cycle Management</span>
              </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    From patient registration to final payment collection, we optimize every step of your revenue cycle for maximum efficiency and profitability.
                  </p>

                  <div className="space-y-6">
                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Patient Registration & Verification</h4>
                          <p className="text-gray-300">Accurate patient data collection, insurance verification, and eligibility checking.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Charge Capture & Coding</h4>
                          <p className="text-gray-300">Automated charge entry, ICD-10/CPT coding, and medical necessity validation.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Claim Submission & Follow-up</h4>
                          <p className="text-gray-300">Electronic claim submission, automated follow-ups, and denial management.</p>
                    </div>
                    </div>
                  </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Payment Processing & Reporting</h4>
                          <p className="text-gray-300">Payment posting, reconciliation, and comprehensive financial reporting.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Performance Metrics</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">99.8%</div>
                        <div className="text-sm text-gray-300">Claim Accuracy Rate</div>
                    </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">15 Days</div>
                        <div className="text-sm text-gray-300">Average Collection Period</div>
                    </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">30%</div>
                        <div className="text-sm text-gray-300">Faster Reimbursement</div>
                  </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
                        <div className="text-sm text-gray-300">HIPAA Compliance</div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">PeerLogics Medical Billing?</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  We&apos;re healthcare revenue cycle experts with deep industry knowledge, ensuring your practice gets paid accurately and on time while maintaining compliance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Healthcare Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Deep understanding of healthcare regulations, coding requirements, and payer-specific rules for accurate billing.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Advanced Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Real-time dashboards, predictive analytics, and detailed reporting to optimize your revenue cycle performance.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Complete Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    HIPAA, HITECH, and MACRA compliant with regular audits, secure data handling, and comprehensive documentation.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Automated Workflows</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AI-powered automation for claim processing, eligibility verification, and denial management to reduce manual work.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
                  <p className="text-gray-300 leading-relaxed">
                    30% faster reimbursements, 99.8% accuracy, and 500+ satisfied healthcare providers across specialties.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Ongoing Support</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dedicated account management, 24/7 technical support, and regular performance reviews to ensure continued success.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 text-white text-center">
                  Measurable Impact on Healthcare Revenue
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-emerald-300 mb-2">30%</div>
                    <div className="text-gray-300">Faster Reimbursement</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-300 mb-2">99.8%</div>
                    <div className="text-gray-300">Claim Accuracy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-300 mb-2">50%</div>
                    <div className="text-gray-300">Denial Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-300 mb-2">25%</div>
                    <div className="text-gray-300">Revenue Increase</div>
                  </div>
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
                  Ready to Optimize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Healthcare Revenue?</span>
              </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 500+ healthcare providers who have transformed their revenue cycle with our medical billing expertise. Focus on patient care while we maximize your reimbursements.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Optimizing <span className="text-xl">→</span>
                  </a>
                  <a href="tel:+923399909972" className="inline-flex items-center justify-center gap-2 border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 hover:text-black transition-all duration-300 text-lg">
                    📞 Call Now: +92 339 9909972
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Free Revenue Analysis</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Custom Implementation Plan</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">HIPAA Compliance Guarantee</span>
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
