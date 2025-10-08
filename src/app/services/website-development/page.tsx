import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Compact Hero Section */}
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/assests/webdevelopment.png')] bg-cover bg-center opacity-20"></div>

          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
            <nav className="mb-6 text-sm">
              <a href="/" className="hover:text-cyan-300 transition-colors">Home</a>
              <span className="mx-2">›</span>
              <span className="text-cyan-300">Website Development</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Website Development
            </h1>

            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl mx-auto">
              Create stunning, high-performance websites that drive business growth
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="glass-card px-4 py-2 text-sm">
                <span className="text-cyan-300">✓</span>
                <span className="ml-2">Cutting-Edge Tech</span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="text-cyan-300">✓</span>
                <span className="ml-2">Conversion Focused</span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="text-cyan-300">✓</span>
                <span className="ml-2">Mobile First</span>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Features Grid */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Cutting-Edge Tech</h3>
                <p className="text-sm text-gray-300">Latest frameworks and technologies for modern web development</p>
              </div>

              <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Conversion Focused</h3>
                <p className="text-sm text-gray-300">Optimized layouts for maximum ROI and user engagement</p>
              </div>

              <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">🔧</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Full-Stack Solutions</h3>
                <p className="text-sm text-gray-300">End-to-end development services from concept to deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-black to-cyan-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Why Choose <span className="text-cyan-300">PeerLogics?</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Custom Design</h4>
                      <p className="text-sm text-gray-300">Tailored to your brand identity</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Mobile First</h4>
                      <p className="text-sm text-gray-300">Responsive across all devices</p>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">SEO Optimized</h4>
                      <p className="text-sm text-gray-300">Built for search engine visibility</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Performance Fast</h4>
                      <p className="text-sm text-gray-300">Lightning-fast loading speeds</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-enhanced p-6 max-w-sm mx-auto">
                <Image
                  src="/assests/process-img.png"
                  alt="Web Development Process"
                  width={250}
                  height={150}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Compact CTA Section */}
        <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card-enhanced p-8 max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Build Your <span className="text-cyan-300">Website?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let&apos;s create something amazing together
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Project <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
