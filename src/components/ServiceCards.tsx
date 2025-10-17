type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Professional, responsive, and SEO-optimized websites that capture attention and convert visitors.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    href: "/services/website-development",
  },
  {
    title: "Software Engineering",
    description:
      "Tailored software solutions that solve real business challenges with modern frameworks and clean architecture.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: "/services/software-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive, user-friendly interfaces that make customers fall in love with your product.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="10" r="2" fill="currentColor"/>
        <path d="M14 10l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: "/services/ui-ux",
  },
  {
    title: "Medical Billing Solutions",
    description:
      "Trusted by U.S. clinics, our HIPAA-aware medical billing systems help streamline revenue cycles and improve patient record handling.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    href: "/services/medical-billing",
  },
  {
    title: "E‑Commerce Development",
    description:
      "From catalog to checkout, we build performant storefronts that scale and convert.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="21" r="1" fill="currentColor"/>
        <circle cx="20" cy="21" r="1" fill="currentColor"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 8h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    href: "/services/ecommerce",
  },
  {
    title: "HR Management Systems",
    description:
      "Secure, data-driven HR software that automates attendance, payroll, and compliance for corporate and healthcare teams.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 21v-2a4 4 0 0 1 4-4h.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: "/services/hr-management",
  },
];

export default function ServiceCards() {
  return (
    <div className="service-cards">
      <div className="container">
        <div className="row g-4">
          {services.map((svc) => (
            <div key={svc.title} className="col-md-4">
              <article className="svc-card glass-card-realistic">
                <div className="svc-icon">
                  {svc.icon}
                </div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.description}</p>
                <a className="svc-btn" href={svc.href ?? "#"}>
                  <span>Discover More</span>
                  <span className="svc-btn-arrow" aria-hidden>→</span>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}