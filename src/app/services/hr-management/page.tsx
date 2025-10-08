import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HRManagementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Compact Hero Section */}
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/assests/Medical-HR.png')] bg-cover bg-center opacity-20"></div>

          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
            <nav className="mb-6 text-sm">
              <a href="/" className="hover:text-blue-300 transition-colors">Home</a>
              <span className="mx-2">›</span>
              <span className="text-blue-300">HR Management</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Medical HR Management
            </h1>

            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl mx-auto">
              Streamline healthcare HR operations with intelligent, compliant solutions
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="glass-card px-4 py-2 text-sm">
                <span className="text-blue-300">✓</span>
                <span className="ml-2">Smart Recruitment</span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="text-blue-300">✓</span>
                <span className="ml-2">Payroll Automation</span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="text-blue-300">✓</span>
                <span className="ml-2">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Features Grid */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Smart Recruitment</h3>
                <p className="text-sm text-gray-300">AI-powered hiring tools for healthcare talent acquisition</p>
              </div>

              <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">💰</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Payroll Automation</h3>
                <p className="text-sm text-gray-300">Accurate, compliant payroll processing for healthcare staff</p>
              </div>

              <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">📋</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Compliance Tracking</h3>
                <p className="text-sm text-gray-300">Real-time regulatory compliance monitoring and reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-black to-blue-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Why Choose <span className="text-blue-300">PeerLogics?</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Healthcare Specialized</h4>
                      <p className="text-sm text-gray-300">Built specifically for medical environments</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">HIPAA Compliant</h4>
                      <p className="text-sm text-gray-300">Full data security and privacy protection</p>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Automated Workflows</h4>
                      <p className="text-sm text-gray-300">Reduce manual tasks by up to 80%</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Real-time Analytics</h4>
                      <p className="text-sm text-gray-300">Live reporting and performance insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact CTA Section */}
        <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card-enhanced p-8 max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Transform Your <span className="text-blue-300">HR Operations</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Modern, efficient healthcare HR management solutions
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
