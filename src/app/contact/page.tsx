'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // Convert FormData to JSON object
    const object: Record<string, string> = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(object),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Web3Forms error:', data.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section with CTAs */}
        <section className="contact-hero-professional relative py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-slate-900 dark:via-gray-900 dark:to-black light:from-white light:via-gray-50 light:to-slate-50">
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/20 light:bg-white/60"></div>
          
          {/* Professional Gradient Shapes - Static */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/5 light:bg-blue-400/8 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 light:bg-purple-400/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/4 dark:bg-cyan-500/4 light:bg-cyan-400/6 rounded-full blur-3xl"></div>
          </div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.015]">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Accent Line at Top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent dark:via-blue-500/20 light:via-blue-400/30"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight service-heading">
              Get in Touch
            </h1>

            <p className="text-base md:text-lg service-text max-w-xl mx-auto leading-relaxed">
              Have a project in mind? We&apos;re here to help bring your vision to life with professional solutions.
            </p>

            {/* Simple Accent */}
            <div className="flex justify-center items-center mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 dark:via-blue-400/40 light:via-blue-500/50 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Compact Contact Form & Info */}
        <section className="py-16 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Contact Form */}
              <div id="contact-form" className="glass-card-enhanced p-6">
                <h2 className="text-2xl font-bold mb-4 service-heading">Send Us a Message</h2>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-500/20 dark:bg-green-500/20 light:bg-green-100 border border-green-500/50 dark:border-green-500/50 light:border-green-300 rounded-lg text-green-400 dark:text-green-400 light:text-green-700 text-sm">
                    ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon!
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-500/20 dark:bg-red-500/20 light:bg-red-100 border border-red-500/50 dark:border-red-500/50 light:border-red-300 rounded-lg text-red-400 dark:text-red-400 light:text-red-700 text-sm">
                    ✗ Oops! Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="6cd08af0-ba46-41c4-84de-613a55966974" />
                  
                  {/* Optional: Redirect URL after submission */}
                  <input type="hidden" name="redirect" value="false" />
                  
                  {/* Optional: Custom subject line */}
                  <input type="hidden" name="subject" value="New Contact Form Submission from PeerLogics Website" />
                  
                  {/* Optional: From name that appears in email */}
                  <input type="hidden" name="from_name" value="PeerLogics Website Contact Form" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium service-text mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-3 py-2 bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium service-text mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full px-3 py-2 bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium service-text mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium service-text mb-2">Project Type *</label>
                    <select 
                      name="project_type"
                      required
                      className="w-full px-3 py-2 bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors"
                    >
                      <option value="" className="text-gray-500 dark:text-gray-400 light:text-gray-500">Select a service</option>
                      <option value="Website Development" className="text-gray-900 dark:text-white light:text-gray-900">Website Development</option>
                      <option value="E-Commerce" className="text-gray-900 dark:text-white light:text-gray-900">E-Commerce</option>
                      <option value="UI/UX Design" className="text-gray-900 dark:text-white light:text-gray-900">UI/UX Design</option>
                      <option value="Software Development" className="text-gray-900 dark:text-white light:text-gray-900">Software Development</option>
                      <option value="Medical Billing" className="text-gray-900 dark:text-white light:text-gray-900">Medical Billing</option>
                      <option value="HR Management" className="text-gray-900 dark:text-white light:text-gray-900">HR Management</option>
                      <option value="Other" className="text-gray-900 dark:text-white light:text-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium service-text mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="glass-card-enhanced p-6">
                  <h3 className="text-xl font-bold mb-4 service-heading">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold service-heading mb-1">Email</h4>
                        <a href="mailto:info@peerlogics.com.pk" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                          info@peerlogics.com.pk
                        </a>
                      </div>
                    </div>


                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold service-heading mb-1">Office</h4>
                        <address className="text-purple-400 not-italic text-sm">
                        3rd Floor, 35-C Empress Rd, Lahore, 54000
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional CTA Section */}
        <section className="py-16 service-bg-alternate">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold service-heading mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Start Your Project?</span>
              </h2>
              <p className="text-xl service-text mb-8 max-w-2xl mx-auto">
                Don&apos;t wait for tomorrow. Every great project starts with a single conversation. Let&apos;s discuss how we can bring your vision to life.
              </p>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold service-heading mb-2">Fast Response</h3>
                  <p className="service-text-muted">We respond to all inquiries within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold service-heading mb-2">Expert Team</h3>
                  <p className="service-text-muted">Senior developers and designers only</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold service-heading mb-2">Quality Focused</h3>
                  <p className="service-text-muted">Dedicated to delivering excellence</p>
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
