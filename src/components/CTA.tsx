import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta-glass-section py-5">
      <div className="container">
        <div className="cta-glass">
          <div className="cta-content text-md-start text-center">
            <p className="eyebrow-badge">Let&apos;s Connect</p>
            <h2 className="cta-title">Build something <span className="headline">great</span> with us</h2>
            <p className="cta-sub">From idea to launch—ship faster with senior engineers, quality, and clarity.</p>
            <div className="cta-actions d-flex justify-content-center justify-content-lg-start">
              <a className="btn-cta" href="/contact">Let&apos;s talk <span aria-hidden>→</span></a>
            </div>
          </div>
          <div className="cta-media" aria-hidden>
            <div className="cta-img-wrap">
              <Image
                src="/assests/cta-right.png"
                alt="Team discussion"
                fill
                sizes="(min-width: 1024px) 640px, 50vw"
                className="cta-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


