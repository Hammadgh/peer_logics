export default function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <div className="about-illustration" aria-hidden></div>
      <div className="container">
        <div className="about-panel glass-panel text-center text-md-start">
          <p className="eyebrow-badge">ABOUT PEERLOGICS</p>
          <h2 className="about-heading">We build <span className="headline">reliable</span> software, fast</h2>
          <div className="about-divider" aria-hidden></div>
          <p className="about-lede">
            We partner with you end‑to‑end—from validation to launch—to ship high‑quality
            software with speed and confidence. Our senior engineers focus on outcomes,
            observability, and secure-by-default practices so your product scales without drama.
          </p>
          <ul className="about-bullets">
            <li>Outcome‑driven roadmaps aligned to your KPIs</li>
            <li>Cloud‑native architecture with maintainability as a first principle</li>
            <li>Accessible, performant UI with security and testing built‑in</li>
          </ul>
          <div className="about-highlights">
            <div className="ah-card">
              <div className="ah-icon" aria-hidden>⚡</div>
              <h3 className="ah-title">Speed with quality</h3>
              <p className="ah-text">Small, senior teams shipping iteratively with CI/CD and test automation.</p>
            </div>
            <div className="ah-card">
              <div className="ah-icon" aria-hidden>🎯</div>
              <h3 className="ah-title">Outcomes aligned</h3>
              <p className="ah-text">Roadmaps shaped by KPIs and customer value—not vanity features.</p>
            </div>
            <div className="ah-card">
              <div className="ah-icon" aria-hidden>🛡️</div>
              <h3 className="ah-title">Reliable at scale</h3>
              <p className="ah-text">Cloud-native patterns, security-first, and observability baked in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



