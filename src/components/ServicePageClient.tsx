"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WhyPeerLogics from "@/components/WhyPeerLogics";

interface ServicePageClientProps {
  service: string;
}

interface ServiceConfig {
  title: string;
  description: string;
  color: string;
  gradient: string;
  accent: string;
  bgClass: string;
  scrollGradient: string;
  image: string;
  features: Array<{ icon: string; text: string }>;
  stats: Array<{ value: string; label: string }>;
  theme: 'default' | 'ecommerce' | 'website' | 'software' | 'medical' | 'hr' | 'uiux';
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceConfig = (serviceType: string): ServiceConfig => {
    const configs: Record<string, ServiceConfig> = {
      'hr-management': {
        title: 'HR Operations Outsourcing Services',
        description: 'Streamline Your HR. Empower Your People.',
        color: 'cyan',
        gradient: 'gradient-cyan',
        accent: 'accent-cyan',
        bgClass: 'hero-bg-cyan',
        scrollGradient: 'scroll-gradient-hr',
        image: '/assests/HR.jpg',
        features: [
          { icon: '💰', text: 'Cost Efficient' },
          { icon: '📈', text: 'Scalable Solutions' },
          { icon: '✅', text: '100% Compliance' },
          { icon: '🔒', text: 'Secure & Confidential' }
        ],
        stats: [
          { value: '95%', label: 'Payroll Accuracy' },
          { value: '100%', label: 'Compliance' },
          { value: '30%', label: 'Cost Reduction' },
          { value: '500+', label: 'Clients Served' }
        ],
        theme: 'hr'
      },
      'medical-billing': {
        title: 'Medical Billing',
        description: 'Streamlined healthcare revenue cycle management that maximizes reimbursements while ensuring complete compliance with healthcare regulations and standards.',
        color: 'green',
        gradient: 'gradient-green',
        accent: 'accent-green',
        bgClass: 'hero-bg-green',
        scrollGradient: 'scroll-gradient-medical',
        image: '/assests/medical-billing.jpg',
        features: [
          { icon: '🏥', text: '99.8% Claim Accuracy' },
          { icon: '🔒', text: 'HIPAA & HITECH Compliant' },
          { icon: '⚡', text: '24/7 Processing' },
          { icon: '📊', text: 'Real-time Analytics' }
        ],
        stats: [
          { value: '99.8%', label: 'Claim Accuracy' },
          { value: '30%', label: 'Faster Reimbursement' },
          { value: '100%', label: 'Compliance' },
          { value: '500+', label: 'Providers Served' }
        ],
        theme: 'medical'
      },
      'software-development': {
        title: 'Software Development',
        description: 'Build enterprise-grade software solutions that scale with your business. From custom applications to complex systems, we deliver robust, secure, and maintainable code.',
        color: 'purple',
        gradient: 'gradient-purple',
        accent: 'accent-purple',
        bgClass: 'hero-bg-purple',
        scrollGradient: 'scroll-gradient-software',
        image: '/assests/software-development.png',
        features: [
          { icon: '⚡', text: 'Agile Methodologies' },
          { icon: '🔒', text: 'Enterprise Security' },
          { icon: '📈', text: 'Scalable Architecture' },
          { icon: '🔄', text: 'DevOps Integration' }
        ],
        stats: [
          { value: '200+', label: 'Projects Delivered' },
          { value: '99.8%', label: 'Code Quality' },
          { value: '24/7', label: 'Monitoring' },
          { value: '1 Years', label: 'Average Support' }
        ],
        theme: 'software'
      },
      'ui-ux': {
        title: 'UI / UX Design',
        description: 'Create intuitive, engaging interfaces that convert visitors into loyal users. We design digital experiences that drive results and exceed expectations.',
        color: 'purple',
        gradient: 'gradient-purple',
        accent: 'accent-purple',
        bgClass: 'hero-bg-purple',
        scrollGradient: 'scroll-gradient-uiux',
        image: '/assests/UI-UX.png',
        features: [
          { icon: '👥', text: 'User-Centric Research' },
          { icon: '🎨', text: 'Modern Design Systems' },
          { icon: '📱', text: 'Mobile-First Approach' },
          { icon: '♿', text: 'Accessibility First' }
        ],
        stats: [
          { value: '85%', label: 'Better UX' },
          { value: '200%', label: 'Conversion Increase' },
          { value: '100+', label: 'Designs Delivered' },
          { value: 'WCAG', label: 'AA Compliant' }
        ],
        theme: 'uiux'
      },
      'website-development': {
        title: 'Website Development',
        description: 'Build powerful, scalable web applications that drive results. From concept to deployment, we deliver cutting-edge solutions that transform your digital presence.',
        color: 'cyan',
        gradient: 'gradient-cyan',
        accent: 'accent-cyan',
        bgClass: 'hero-bg-cyan',
        scrollGradient: 'scroll-gradient-website',
        image: '/assests/webdevelopment.png',
        features: [
          { icon: '⚡', text: 'Next.js 14 & React 18' },
          { icon: '🚀', text: 'Performance Optimized' },
          { icon: '📱', text: 'Mobile-First Design' },
          { icon: '🔒', text: 'Enterprise Security' }
        ],
        stats: [
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '<100ms', label: 'Average Load Time' },
          { value: '50+', label: 'Technologies' },
          { value: '24/7', label: 'Support' }
        ],
        theme: 'website'
      },
      'ecommerce': {
        title: 'E-Commerce Development',
        description: 'Build powerful online stores that drive sales and provide exceptional shopping experiences. From product catalogs to payment processing, we create complete e-commerce solutions.',
        color: 'orange',
        gradient: 'gradient-orange',
        accent: 'accent-orange',
        bgClass: 'hero-bg-orange',
        scrollGradient: 'scroll-gradient-ecommerce',
        image: '/assests/Ecom.jpeg',
        features: [
          { icon: '🛒', text: 'Shopping Cart' },
          { icon: '💳', text: 'Payment Gateway' },
          { icon: '📦', text: 'Inventory Management' },
          { icon: '🔒', text: 'Secure Checkout' }
        ],
        stats: [
          { value: '1000+', label: 'Online Stores' },
          { value: '40%', label: 'Conversion Rate' },
          { value: '99.9%', label: 'Uptime' },
          { value: '24/7', label: 'Support' }
        ],
        theme: 'ecommerce'
      }
    };
    
    return configs[serviceType as string] || configs['website-development'];
  };

  const config = getServiceConfig(service);

  return (
    <>
      {/* Enhanced Hero Section with Glass Effects */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${config.bgClass}`}>
        <div className="absolute inset-0 bg-white/40 dark:bg-black/30"></div>
        <div className="absolute inset-0 professional-moving-bg"></div>

        <div className="relative z-10 text-center service-heading max-w-5xl mx-auto px-6">
          <nav className="mb-8 text-sm fade-in-up">
            <Link href="/" className={`service-text hover:${config.accent} transition-colors`}>Home</Link>
            <span className="mx-2 service-text-muted">›</span>
            <span className={config.accent}>{config.title}</span>
          </nav>

          <div className={`glass-panel hero-panel text-center fade-in-up fade-in-up-delay-1`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span 
                className={config.scrollGradient}
                style={{ 
                  backgroundPosition: `${scrollPosition * 0.5}px center`
                }}
              >
                {config.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 service-text max-w-3xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-2">
              {config.description}
            </p>

            {/* Enhanced feature badges with animations */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up fade-in-up-delay-3">
              {config.features.map((feature, index) => (
                <div key={index} className="ios-glass px-6 py-3 text-sm service-text">
                  <span className={config.accent}>{feature.icon}</span>
                  <span className="ml-2 font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Key statistics with glass cards */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 fade-in-up fade-in-up-delay-4">
              {config.stats.map((stat, index) => (
                <div key={index} className="ios-glass p-6 text-center">
                  <div className={`text-3xl font-bold ${config.accent} mb-2`}>{stat.value}</div>
                  <div className="text-sm service-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-specific content sections */}
      {service === 'hr-management' ? (
        <>
          {/* Intro Section */}
          <section className="py-20 service-bg-primary">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center fade-in-up">
                <p className="text-lg md:text-xl service-text leading-relaxed">
                  Managing HR operations in-house can be time-consuming, costly, and complex. Our HR Operations Outsourcing services help you simplify processes, improve compliance, and enhance employee experience—so your business can focus on what it does best.
                </p>
              </div>
            </div>
          </section>

          {/* Why Outsource Section */}
          <section className="py-20 service-bg-secondary">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 fade-in-up">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                    Why <span className={config.gradient}>Outsource HR Operations?</span>
                  </h2>
                </div>
                <div className="max-w-4xl mx-auto fade-in-up fade-in-up-delay-1">
                  <p className="text-lg service-text leading-relaxed mb-4">
                    Efficient HR management is the backbone of every successful organization. However, routine administrative tasks can overwhelm your HR team, pulling focus from strategic priorities such as talent development and engagement.
                  </p>
                  <p className="text-lg service-text leading-relaxed">
                    By outsourcing HR operations, you gain access to experienced professionals, proven processes, and advanced HR technologies—all without the overhead of maintaining an in-house HR infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our HR Operations Services */}
          <section className="py-20 service-bg-primary">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 fade-in-up">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                    Our <span className={config.gradient}>HR Operations Services</span>
                  </h2>
                  <p className="text-xl service-text max-w-3xl mx-auto">
                    We offer end-to-end HR support tailored to your business size, industry, and goals:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                  <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 service-heading text-center">Payroll & Benefits Administration</h3>
                    <ul className="service-text text-left space-y-2 text-sm">
                      <li>• Accurate and timely payroll processing</li>
                      <li>• Statutory compliance and tax filing</li>
                      <li>• Benefits management and employee self-service portals</li>
                    </ul>
                  </div>

                  <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 service-heading text-center">Employee Data Management</h3>
                    <ul className="service-text text-left space-y-2 text-sm">
                      <li>• Centralized HR records and data accuracy</li>
                      <li>• HRIS implementation and maintenance</li>
                      <li>• Secure document management and reporting</li>
                    </ul>
                  </div>

                  <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 service-heading text-center">HR Compliance & Policy Management</h3>
                    <ul className="service-text text-left space-y-2 text-sm">
                      <li>• Labor law compliance and audit support</li>
                      <li>• Policy creation, review, and updates</li>
                      <li>• Risk management and employee relations support</li>
                    </ul>
                  </div>

                  <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 service-heading text-center">Recruitment Administration</h3>
                    <ul className="service-text text-left space-y-2 text-sm">
                      <li>• Job posting and candidate coordination</li>
                      <li>• Background checks and onboarding support</li>
                      <li>• Offer letter and documentation management</li>
                    </ul>
                  </div>

                  <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 service-heading text-center">Employee Lifecycle Management</h3>
                    <ul className="service-text text-left space-y-2 text-sm">
                      <li>• Onboarding, transitions, and exit management</li>
                      <li>• Leave tracking and attendance management</li>
                      <li>• HR analytics and workforce reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 service-bg-secondary">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 fade-in-up">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                    Benefits of <span className={config.gradient}>Partnering With Us</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up fade-in-up-delay-1">
                  <div className="glass-card-enhanced p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h3 className="font-bold mb-2 service-heading">Cost Efficiency</h3>
                        <p className="service-text text-sm">Reduce overhead and optimize your HR spend</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card-enhanced p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h3 className="font-bold mb-2 service-heading">Scalability</h3>
                        <p className="service-text text-sm">Easily adapt to workforce changes and business growth</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card-enhanced p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h3 className="font-bold mb-2 service-heading">Accuracy & Compliance</h3>
                        <p className="service-text text-sm">Stay compliant with evolving labor laws</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card-enhanced p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h3 className="font-bold mb-2 service-heading">Focus on Strategy</h3>
                        <p className="service-text text-sm">Free your HR leaders to drive culture and engagement</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card-enhanced p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h3 className="font-bold mb-2 service-heading">Technology-Driven</h3>
                        <p className="service-text text-sm">Leverage modern HR platforms for efficiency and transparency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industries Section */}
          <section className="py-20 service-bg-primary">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 service-heading">
                  Industries <span className={config.gradient}>We Serve</span>
                </h2>
                <p className="text-lg service-text">
                  We partner with organizations across sectors including IT, manufacturing, healthcare, retail, financial services, and more.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                  Professional <span className={config.gradient}>{config.title} Services</span>
                </h2>
                <p className="text-xl service-text max-w-3xl mx-auto">
                  We deliver exceptional {config.title.toLowerCase()} solutions tailored to your specific needs, ensuring maximum impact and return on investment.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 fade-in-up fade-in-up-delay-1">
                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Strategic Planning</h3>
                  <p className="service-text text-center">
                    Comprehensive analysis and strategic planning to ensure your project aligns with business objectives and delivers measurable results.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Expert Execution</h3>
                  <p className="service-text text-center">
                    Professional implementation using industry best practices and cutting-edge technologies for optimal performance and scalability.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 service-heading text-center">Ongoing Support</h3>
                  <p className="service-text text-center">
                    Continuous support, maintenance, and optimization to ensure your solution remains effective and up-to-date with evolving requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why PeerLogics Section */}
      <WhyPeerLogics theme={config.theme} />

      {/* Enhanced CTA Section */}
      <section className="py-20 service-bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card-enhanced p-12 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 service-heading">
                Ready to Get Started with <span className={config.gradient}>{config.title}?</span>
              </h2>
              <p className="text-xl service-text mb-8 leading-relaxed max-w-2xl mx-auto">
                Let&apos;s discuss your project requirements and create a custom solution that drives your business forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/contact" className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-lg`}>
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
                  <span className="service-text">Custom Proposal</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                  <span className="service-text">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
