import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />

      <section id="services">
        <div className="services-section">
          <div className="container text-lg-start text-center">
            <p className="expertise-text">Expertise</p>
            <h1 className="services-text">Our Services</h1>
          </div>
        </div>
        <div className="service-cards">
          <ServiceCards />
        </div>
      </section>

      <CTA />

      <Testimonials />
      <Footer />
    </>
  );
}
