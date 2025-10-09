import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HRManagementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/assests/Medical-HR.png')] bg-cover bg-center opacity-20"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-blue-300">HR Management</span>
            </nav>

            <div className={`glass-panel hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                HR Management
            </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Comprehensive healthcare HR solutions that streamline recruitment, employee management, payroll, and compliance. Built specifically for medical environments with HIPAA compliance at the core.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-blue-300">👥</span>
                  <span className="ml-2 font-semibold">Smart Recruitment</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-blue-300">💰</span>
                  <span className="ml-2 font-semibold">Automated Payroll</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-blue-300">🔒</span>
                  <span className="ml-2 font-semibold">HIPAA Compliant</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-blue-300">📊</span>
                  <span className="ml-2 font-semibold">Real-time Analytics</span>
                </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">80%</div>
                  <div className="text-sm text-gray-300">Faster Hiring</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Payroll Accuracy</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Compliance</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">300+</div>
                  <div className="text-sm text-gray-300">Healthcare Clients</div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare HR Solutions & Recruitment */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">HR Solutions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Complete HR management systems designed specifically for healthcare organizations, ensuring compliance, efficiency, and exceptional employee experience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                {/* Smart Recruitment */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Smart Recruitment</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      AI-powered candidate matching
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Automated interview scheduling
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Background check integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Credential verification
                    </li>
                  </ul>
                </div>

                {/* Employee Management */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Employee Management</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Digital employee profiles
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Performance tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Skills & certification management
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Succession planning tools
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
                      <span className="text-blue-400 mr-3">✓</span>
                      HIPAA & HITECH compliant
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      SOC 2 Type II certified
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Automated compliance tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      Audit trail management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payroll & Benefits Management */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Payroll & Benefits</span>
              </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Streamlined payroll processing and benefits administration designed for healthcare organizations with complex scheduling, overtime, and compliance requirements.
                  </p>

                  <div className="space-y-6">
                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">💰</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Automated Payroll Processing</h4>
                          <p className="text-gray-300">Accurate calculations, tax compliance, and direct deposit for all healthcare staff including shift differentials.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">🏥</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Benefits Administration</h4>
                          <p className="text-gray-300">Healthcare-specific benefits management including insurance, retirement, and wellness programs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">📊</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Time & Attendance</h4>
                          <p className="text-gray-300">Smart scheduling, time tracking, and leave management optimized for healthcare shift work.</p>
                    </div>
                    </div>
                  </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">📋</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h4>
                          <p className="text-gray-300">FLSA compliance, wage & hour tracking, and automated reporting for healthcare regulations.</p>
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
                        <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                        <div className="text-sm text-gray-300">Payroll Accuracy Rate</div>
                    </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
                        <div className="text-sm text-gray-300">Faster Recruitment</div>
                    </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
                        <div className="text-sm text-gray-300">Administrative Time Saved</div>
                  </div>

                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
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
        <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">PeerLogics HR?</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  We&apos;re healthcare HR technology experts with deep industry knowledge, ensuring your organization attracts, retains, and develops top healthcare talent while maintaining complete compliance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Healthcare Specialized</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built specifically for medical environments with deep understanding of healthcare regulations, licensing, and credentialing requirements.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">AI-Powered Automation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intelligent automation for routine tasks, predictive analytics for retention, and smart matching for optimal candidate placement.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Advanced Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive HR analytics, turnover prediction, diversity tracking, and performance insights for data-driven decisions.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Complete Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    HIPAA, FLSA, EEOC, and healthcare-specific compliance with automated reporting, audit trails, and regulatory updates.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Employee Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Self-service portals, mobile apps, wellness tracking, and engagement tools to improve healthcare worker satisfaction and retention.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Scalable Solutions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From small clinics to large hospital systems, our solutions scale with your organization&apos;s growth and complexity.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 text-white text-center">
                  Measurable Impact on Healthcare HR Operations
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">80%</div>
                    <div className="text-gray-300">Faster Hiring</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
                    <div className="text-gray-300">Payroll Accuracy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">60%</div>
                    <div className="text-gray-300">Admin Time Saved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">40%</div>
                    <div className="text-gray-300">Turnover Reduction</div>
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
                  Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Healthcare HR?</span>
              </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 300+ healthcare organizations that have revolutionized their HR operations with our intelligent, compliant solutions. Focus on patient care while we optimize your workforce management.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Transform HR Operations <span className="text-xl">→</span>
                  </a>
                  <a href="tel:+923399909972" className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-bold hover:bg-blue-400 hover:text-black transition-all duration-300 text-lg">
                    📞 Call Now: +92 339 9909972
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Free HR Assessment</span>
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
