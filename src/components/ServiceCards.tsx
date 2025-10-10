import Image from "next/image";

type Service = {
  title: string;
  description: string;
  icon: string;
  href?: string;
};

const services: Service[] = [
  {
    title: "Website Development",
    description:
      "At PeerLogics, we are dedicated to delivering exceptional technology solutions tailored to your business needs.",
    icon: "/assests/webdevelopment.png",
    href: "/services/website-development",
  },
  {
    title: "UI / UX",
    description:
      "We design usable, accessible interfaces that convert — backed by research and iterative testing.",
    icon: "/assests/UiUx.png",
    href: "/services/ui-ux",
  },
  {
    title: "Medical Billing",
    description:
      "HIPAA‑aware workflows and reliable systems to streamline your end‑to‑end billing operations.",
    icon: "/assests/MedicalBilling.png",
    href: "/services/medical-billing",
  },
  {
    title: "E‑Commerce Develop",
    description:
      "From catalog to checkout, we build performant storefronts that scale and convert.",
    icon: "/assests/online-shop.png",
    href: "/services/ecommerce",
  },
  {
    title: "Software Development",
    description:
      "Modern, maintainable platforms engineered with quality, security, and observability built‑in.",
    icon: "/assests/software-development.png",
    href: "/services/software-development",
  },
  {
    title: "Medical HR Management",
    description:
      "Secure HR tooling tailored for clinics and hospitals with auditability and compliance.",
    icon: "/assests/Medical-HR.png",
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
                  <Image src={svc.icon} alt="" width={40} height={40} />
                </div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.description}</p>
                <a className="svc-link" href={svc.href ?? "#"}>
                  More About <span aria-hidden>→</span>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



