"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyPeerLogics from "@/components/WhyPeerLogics";
import Link from "next/link";

export default function SoftwareDevelopmentPage() {
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
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:software-development">
        {/* Enhanced Hero Section with Glass Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-purple">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/30"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-200/40 dark:bg-violet-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/40 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-200/30 to-purple-200/30 dark:from-violet-400/10 dark:to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-40 w-48 h-48 bg-fuchsia-200/30 dark:bg-fuchsia-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-40 left-40 w-64 h-64 bg-pink-200/30 dark:bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Moving shapes like main services section */}
            <div className="hero-moving-shape-1"></div>
            <div className="hero-moving-shape-2"></div>
            <div className="hero-moving-shape-3"></div>
            <div className="hero-moving-shape-4"></div>
          </div>

          <div className="relative z-10 text-center service-heading max-w-5xl mx-auto px-6">
            <nav className="mb-8 text-sm fade-in-up">
              <Link href="/" className="service-text hover:accent-purple transition-colors">Home</Link>
              <span className="mx-2 service-text-muted">›</span>
              <span className="accent-purple">Software Development</span>
            </nav>

            <div className={`glass-panel hero-panel text-center fade-in-up fade-in-up-delay-1`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span 
                  className="scroll-gradient-software"
                  style={{ 
                    backgroundPosition: `${scrollPosition * 0.5}px center`
                  }}
                >
                  Software Development
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 service-text max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
                Build enterprise-grade software solutions that scale with your business. From custom applications to complex systems, we deliver robust, secure, and maintainable code.
              </p>

              {/* Enhanced feature badges with animations */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">⚡</span>
                  <span className="ml-2 font-semibold">Agile Methodologies</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">🔒</span>
                  <span className="ml-2 font-semibold">Enterprise Security</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">📈</span>
                  <span className="ml-2 font-semibold">Scalable Architecture</span>
                </div>
                <div className="ios-glass px-6 py-3 text-sm service-text">
                  <span className="accent-purple">🔄</span>
                  <span className="ml-2 font-semibold">DevOps Integration</span>
                </div>
              </div>

              {/* Key statistics with glass cards */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">200+</div>
                  <div className="text-sm service-text">Projects Delivered</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">99.8%</div>
                  <div className="text-sm service-text">Code Quality</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">24/7</div>
                  <div className="text-sm service-text">Monitoring</div>
                </div>
                <div className="ios-glass p-6 text-center">
                  <div className="text-3xl font-bold accent-purple mb-2">1 Years</div>
                  <div className="text-sm service-text">Average Support</div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Methodologies & Technologies */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Development <span className="gradient-purple">Methodologies</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  We employ industry-leading development practices to ensure your software is built right the first time, with maintainability and scalability in mind.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                {/* Agile Development */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Agile Development</h3>
                  <ul className="space-y-3 service-text">
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Scrum & Kanban frameworks
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      2-week sprint cycles
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Daily standups & retrospectives
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Continuous client feedback
                    </li>
                  </ul>
                </div>

                {/* DevOps & CI/CD */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">DevOps & CI/CD</h3>
                  <ul className="space-y-3 service-text">
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Automated testing & deployment
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Docker containerization
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Kubernetes orchestration
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Infrastructure as Code
                    </li>
                  </ul>
              </div>

                {/* Code Quality */}
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Code Quality</h3>
                  <ul className="space-y-3 service-text">
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      99.8% code quality score
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Comprehensive test coverage
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Static code analysis
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Security vulnerability scanning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 service-bg-alternate">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 service-heading">
                    Enterprise <span className="gradient-purple">Technology Stack</span>
              </h2>
                  <p className="text-xl service-text mb-8 leading-relaxed">
                    We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof software solutions.
                  </p>

                  <div className="space-y-6">
                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">F</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Frontend Technologies</h4>
                          <p className="service-text">React 18, Next.js 14, Vue.js, Angular, TypeScript, Tailwind CSS</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">B</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Backend Technologies</h4>
                          <p className="service-text">Node.js, Python FastAPI/Django, .NET Core, Java Spring Boot, Go</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">D</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Databases & Storage</h4>
                          <p className="service-text">PostgreSQL, MongoDB, Redis, Elasticsearch, AWS S3, Azure Blob</p>
                    </div>
                    </div>
                  </div>

                    <div className="glass-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="service-heading font-bold text-sm">C</span>
                    </div>
                    <div>
                          <h4 className="text-lg font-bold service-heading mb-2">Cloud & Infrastructure</h4>
                          <p className="service-text">AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-in-right">
                  <div className="glass-card-enhanced p-8">
                    <h3 className="text-2xl font-bold service-heading mb-6 text-center">Development Capabilities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-card p-4 text-center">
                        <div className="text-2xl mb-2">💻</div>
                        <div className="text-sm service-text">Web Apps</div>
                      </div>
                      <div className="glass-card p-4 text-center">
                        <div className="text-2xl mb-2">🖥️</div>
                        <div className="text-sm service-text">Desktop Apps</div>
                      </div>
                      <div className="glass-card p-4 text-center">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="text-sm service-text">Mobile Apps</div>
                    </div>
                      <div className="glass-card p-4 text-center">
                        <div className="text-2xl mb-2">🔗</div>
                        <div className="text-sm service-text">API Integration</div>
                    </div>
                      <div className="glass-card p-4 text-center">
                        <div className="text-2xl mb-2">☁️</div>
                        <div className="text-sm service-text">Cloud Solutions</div>
                  </div>
                      <div className="glass-card p-4 text-center">
                        <div className="text-2xl mb-2">🧠</div>
                        <div className="text-sm service-text">AI/ML Integration</div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-violet-900 dark:via-purple-900 dark:to-indigo-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Why Choose <span className="gradient-purple">PeerLogics?</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  We&apos;re not just developers, we&apos;re strategic technology partners who understand how software drives business transformation and competitive advantage.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Proven Track Record</h3>
                  <p className="service-text leading-relaxed">
                    200+ successful projects across industries with 99.8% code quality score and enterprise-grade reliability.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Enterprise Security</h3>
                  <p className="service-text leading-relaxed">
                    SOC 2 Type II certified with end-to-end encryption, OWASP compliance, and comprehensive security audits.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Scalable Architecture</h3>
                  <p className="service-text leading-relaxed">
                    Microservices, serverless functions, and cloud-native solutions that grow with your business needs.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">DevOps Excellence</h3>
                  <p className="service-text leading-relaxed">
                    Automated CI/CD pipelines, infrastructure as code, and 24/7 monitoring for seamless deployments.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">AI/ML Integration</h3>
                  <p className="service-text leading-relaxed">
                    Machine learning models, predictive analytics, and intelligent automation for next-generation applications.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading">Business Focus</h3>
                  <p className="service-text leading-relaxed">
                    Every line of code serves a business purpose. We build solutions that drive ROI and competitive advantage.
                  </p>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="glass-card-enhanced p-12 fade-in-up fade-in-up-delay-2">
                <h3 className="text-3xl font-bold mb-8 service-heading text-center">
                  Measurable Results That Drive Business Growth
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">85%</div>
                    <div className="service-text">Faster Development</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">99.9%</div>
                    <div className="service-text">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">50%</div>
                    <div className="service-text">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold accent-purple mb-2">300%</div>
                    <div className="service-text">Performance Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why PeerLogics Section */}
        <WhyPeerLogics theme="software" />

        {/* Enhanced CTA Section */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card-enhanced p-12 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Ready to Build <span className="gradient-purple">Enterprise Software?</span>
              </h2>
                <p className="text-xl service-text mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 200+ businesses that have transformed their operations with our custom software solutions. Let&apos;s turn your vision into scalable reality.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    Start Your Project <span className="text-xl">→</span>
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Free Consultation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">Technical Specification</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    <span className="service-text">6-Month Support</span>
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
