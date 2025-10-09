import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function UIUXPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/assests/UI-UX.png')] bg-cover bg-center opacity-20"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="hover:text-pink-300 transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-pink-300">UI / UX Design</span>
            </nav>

            <div className={`ios-glass ios-glass-load hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              UI / UX Design
            </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Create intuitive, engaging interfaces that convert visitors into loyal users. We design digital experiences that drive results and exceed expectations.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-pink-300">👥</span>
                  <span className="ml-2 font-semibold">User-Centric Research</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-pink-300">🎨</span>
                  <span className="ml-2 font-semibold">Modern Design Systems</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-pink-300">📱</span>
                  <span className="ml-2 font-semibold">Mobile-First Approach</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm">
                  <span className="text-pink-300">♿</span>
                  <span className="ml-2 font-semibold">Accessibility First</span>
              </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-pink-300 mb-2">85%</div>
                  <div className="text-sm text-gray-300">Better UX</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-pink-300 mb-2">200%</div>
                  <div className="text-sm text-gray-300">Conversion Increase</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-pink-300 mb-2">100+</div>
                  <div className="text-sm text-gray-300">Designs Delivered</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold text-pink-300 mb-2">WCAG</div>
                  <div className="text-sm text-gray-300">AA Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Tools */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Design Process</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We follow a proven, user-centered design methodology that delivers exceptional results through research, iteration, and validation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">User Research</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In-depth user interviews, surveys, and behavior analysis to understand your audience&apos;s needs and pain points.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Information Architecture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Strategic content organization and user flow mapping to create intuitive navigation and information hierarchy.
                  </p>
              </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Visual Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Modern, brand-aligned visual design systems with micro-interactions and smooth animations that engage users.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Testing & Validation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Usability testing, A/B testing, and analytics to validate design decisions and optimize user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools & Technologies */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Industry-Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Design Tools</span>
              </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    We use the latest design tools and technologies to create cutting-edge user experiences that set your brand apart.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">F</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Figma</h4>
                      <p className="text-sm text-gray-300">Collaborative design platform</p>
                    </div>

                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Adobe XD</h4>
                      <p className="text-sm text-gray-300">Prototyping & animation</p>
                    </div>

                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">S</span>
                  </div>
                      <h4 className="text-lg font-bold text-white mb-2">Sketch</h4>
                      <p className="text-sm text-gray-300">Vector design & symbols</p>
                    </div>

                    <div className="ios-glass p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">P</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Principle</h4>
                      <p className="text-sm text-gray-300">Interactive prototyping</p>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Design Deliverables</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">User Research Reports</span>
                        <span className="text-pink-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Wireframes & User Flows</span>
                        <span className="text-pink-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">High-Fidelity Mockups</span>
                        <span className="text-pink-400">✓</span>
                    </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Interactive Prototypes</span>
                        <span className="text-pink-400">✓</span>
                    </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Design Systems</span>
                        <span className="text-pink-400">✓</span>
                  </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Accessibility Audits</span>
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
        <section className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">PeerLogics Design?</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  We&apos;re not just designers—we&apos;re strategic partners who understand how great design drives business growth and user satisfaction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">User-Centric Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every design decision is backed by user research and behavioral data to ensure your interface resonates with your target audience.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">♿</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Accessibility First</h3>
                  <p className="text-gray-300 leading-relaxed">
                    WCAG 2.1 AA compliant designs that work for everyone, including users with disabilities. Inclusive design is not optional—it&apos;s essential.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Mobile-First Excellence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Designs optimized for mobile performance and touch interactions, ensuring exceptional experiences across all devices.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Design Systems</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Scalable design systems that maintain consistency across your entire product ecosystem and accelerate future development.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Conversion Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Data-driven design decisions that improve conversion rates, user engagement, and business metrics.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Collaborative Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Work closely with your team through every stage of the design process with regular feedback sessions and transparent communication.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 text-white text-center">
                  Measurable Impact on Business Success
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-pink-300 mb-2">85%</div>
                    <div className="text-gray-300">Improved Usability</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-pink-300 mb-2">200%</div>
                    <div className="text-gray-300">Conversion Increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-pink-300 mb-2">60%</div>
                    <div className="text-gray-300">Reduced Bounce Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-pink-300 mb-2">45%</div>
                    <div className="text-gray-300">Mobile Engagement</div>
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
                  Ready to Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Exceptional User Experiences?</span>
              </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 100+ businesses that have transformed their digital presence with our user-centered design approach. Let&apos;s design something amazing together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Your Design <span className="text-xl">→</span>
                  </a>
                  <a href="tel:+923399909972" className="inline-flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-full font-bold hover:bg-pink-400 hover:text-black transition-all duration-300 text-lg">
                    📞 Call Now: +92 339 9909972
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Free UX Audit</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Custom Design Strategy</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Unlimited Revisions</span>
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
