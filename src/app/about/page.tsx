import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 light:from-indigo-100 light:via-purple-100 light:to-pink-100">
          <div className="absolute inset-0 bg-black/40 dark:bg-black/40 light:bg-white/20"></div>
          <div className="absolute inset-0 bg-[url('/assests/aboutBgImg.png')] bg-cover bg-center opacity-10 dark:opacity-10 light:opacity-5"></div>

          <div className="relative z-10 text-center text-white dark:text-white light:text-gray-900 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 dark:from-white dark:to-purple-200 light:from-gray-900 light:to-purple-600 bg-clip-text text-transparent">
              About PeerLogics
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 dark:text-gray-200 light:text-gray-700 max-w-2xl mx-auto">
              We build reliable software, fast. Partnering with you end-to-end to ship high-quality solutions with speed and confidence.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Company Story */}
              <div className="glass-card-enhanced p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 service-heading">Our Story</h2>
                <div className="prose prose-lg service-text max-w-none">
                  <p className="mb-6">
                    Founded with a vision to bridge the gap between innovative technology and practical business solutions,
                    PeerLogics has grown into a trusted partner for organizations seeking to transform their digital presence.
                  </p>
                  <p className="mb-6">
                    Our team of senior engineers and designers brings decades of combined experience in web development,
                    e-commerce platforms, and enterprise software solutions. We believe that great software isn&apos;t just
                    about lines of code, it&apos;s about understanding your business and delivering solutions that drive real results.
                  </p>
                  <p>
                    From startups to Fortune 500 companies, we&apos;ve helped organizations across industries build scalable,
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
                  <h3 className="text-xl font-bold mb-3 service-heading">Speed with Quality</h3>
                  <p className="service-text">Small, senior teams shipping iteratively with CI/CD and test automation for reliable delivery.</p>
                </div>

                <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 service-heading">Outcomes Aligned</h3>
                  <p className="service-text">Roadmaps shaped by KPIs and customer value, not vanity features or scope creep.</p>
                </div>

                <div className="glass-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 service-heading">Reliable at Scale</h3>
                  <p className="service-text">Cloud-native patterns, security-first architecture, and observability baked in from day one.</p>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card-enhanced p-8">
                  <h3 className="text-2xl font-bold mb-4 service-heading">Our Mission</h3>
                  <p className="service-text">
                    To empower businesses with cutting-edge technology solutions that drive growth,
                    efficiency, and competitive advantage. We believe in building software that not
                    only meets today&apos;s needs but scales for tomorrow&apos;s challenges.
                  </p>
                </div>

                <div className="glass-card-enhanced p-8">
                  <h3 className="text-2xl font-bold mb-4 service-heading">Our Vision</h3>
                  <p className="service-text">
                    To be the most trusted technology partner for businesses worldwide, known for
                    delivering exceptional software solutions that transform how organizations operate
                    and compete in the digital landscape.
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </section>

       

        {/* CTA Section */}
        <section className="py-20 service-bg-primary">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card-enhanced p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 service-heading">
                Ready to Work <span className="gradient-purple">Together?</span>
              </h2>
              <p className="text-xl service-text mb-8">
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


