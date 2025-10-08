import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('/assests/aboutBgImg.png')] bg-cover bg-center opacity-10"></div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              About PeerLogics
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              We build reliable software, fast. Partnering with you end-to-end to ship high-quality solutions with speed and confidence.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Company Story */}
              <div className="glass-card-enhanced p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
                <div className="prose prose-lg text-gray-300 max-w-none">
                  <p className="mb-6">
                    Founded with a vision to bridge the gap between innovative technology and practical business solutions,
                    PeerLogics has grown into a trusted partner for organizations seeking to transform their digital presence.
                  </p>
                  <p className="mb-6">
                    Our team of senior engineers and designers brings decades of combined experience in web development,
                    e-commerce platforms, and enterprise software solutions. We believe that great software isn't just
                    about lines of code—it's about understanding your business and delivering solutions that drive real results.
                  </p>
                  <p>
                    From startups to Fortune 500 companies, we've helped organizations across industries build scalable,
                    secure, and user-friendly digital products that stand the test of time.
                  </p>
                </div>
              </div>

              {/* Values Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Speed with Quality</h3>
                  <p className="text-gray-300">Small, senior teams shipping iteratively with CI/CD and test automation for reliable delivery.</p>
                </div>

                <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Outcomes Aligned</h3>
                  <p className="text-gray-300">Roadmaps shaped by KPIs and customer value—not vanity features or scope creep.</p>
                </div>

                <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Reliable at Scale</h3>
                  <p className="text-gray-300">Cloud-native patterns, security-first architecture, and observability baked in from day one.</p>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card-enhanced p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower businesses with cutting-edge technology solutions that drive growth,
                    efficiency, and competitive advantage. We believe in building software that not
                    only meets today's needs but scales for tomorrow's challenges.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the most trusted technology partner for businesses worldwide, known for
                    delivering exceptional software solutions that transform how organizations operate
                    and compete in the digital landscape.
                  </p>
                </div>
              </div>

              {/* Leadership */}
              <div className="glass-card-enhanced p-8">
                <h3 className="text-2xl font-bold mb-8 text-white text-center">Leadership Team</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white">JD</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">John Doe</h4>
                    <p className="text-sm text-gray-400 mb-3">CEO & Founder</p>
                    <p className="text-sm text-gray-300">
                      15+ years in enterprise software development and digital transformation.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white">SM</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Sarah Miller</h4>
                    <p className="text-sm text-gray-400 mb-3">CTO</p>
                    <p className="text-sm text-gray-300">
                      Expert in cloud architecture and scalable system design with 12+ years experience.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white">MJ</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Mike Johnson</h4>
                    <p className="text-sm text-gray-400 mb-3">Head of Design</p>
                    <p className="text-sm text-gray-300">
                      UX/UI specialist focused on creating intuitive and engaging user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
                By The Numbers
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    50+
                  </div>
                  <p className="text-gray-300">Projects Delivered</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                    95%
                  </div>
                  <p className="text-gray-300">On-Time Delivery</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-300">Support Available</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                    5★
                  </div>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-black to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card-enhanced p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Work <span className="text-purple-300">Together?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss your project and turn your vision into reality
              </p>
              <a href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


