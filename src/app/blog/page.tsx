"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogLandingPage() {
  return (
    <>
      <Navbar />
      <section className="blog-landing" style={{padding: '72px 0 60px 0'}}>
        <div className="container">
          <h1 className="hero-modern-headline" style={{marginBottom: 12}}>
            <span className="hero-modern-word">Our</span>
            <span className="hero-modern-word accent-scale">Blog</span>
          </h1>
          <p className="hero-modern-subhead" style={{maxWidth: 600, marginBottom: 44}}>
            Insights, guides, tips and case studies from the PeerLogics team—exploring tech, digital transformation, healthcare IT, and building amazing products.
          </p>
          <div className="blog-cards-grid" style={{display: 'grid', gap: 32, gridTemplateColumns: '1fr', maxWidth: 800}}>
            <article className="glass-card-realistic blog-card" style={{padding: 36, borderRadius: 16, minHeight: 180}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16}}>
                <span style={{fontSize: 32, color: '#DA4E3E'}}>📝</span>
                <h2 style={{fontSize: 22, fontWeight: 700, margin: 0}}>First Article Coming Soon</h2>
              </div>
              <p style={{fontSize: 16, opacity: 0.73, margin: 0}}>
                Our team is prepping a collection of real-world expertise for business owners and tech leaders. Stay tuned!
              </p>
              <div style={{marginTop: 28}}>
                <a className="btn-hero-primary" href="#" style={{pointerEvents: 'none', opacity: 0.6}}>Read More</a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
