import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'breadcrumb' | 'faq';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PeerLogics",
          "description": "Professional software development company specializing in web development, e-commerce, UI/UX design, medical billing, and HR management solutions.",
          "url": "https://peerlogics.com.pk",
          "logo": "https://peerlogics.com.pk/assests/peerlogics.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-42-1234567",
            "contactType": "customer service",
            "email": "info@peerlogics.com.pk"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3rd Floor, 35-C Empress Rd",
            "addressLocality": "Lahore",
            "postalCode": "54000",
            "addressCountry": "PK"
          },
          "sameAs": [
            "https://www.linkedin.com/company/peerlogics",
            "https://twitter.com/peerlogics"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": "10-50",
          "areaServed": "Pakistan",
          "serviceType": [
            "Web Development",
            "E-Commerce Development", 
            "UI/UX Design",
            "Software Development",
            "Medical Billing Software",
            "HR Management Systems"
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "Software Development Services",
          "description": data?.description || "Professional software development services",
          "provider": {
            "@type": "Organization",
            "name": "PeerLogics",
            "url": "https://peerlogics.com.pk"
          },
          "areaServed": "Pakistan",
          "serviceType": data?.serviceType || "Software Development",
          "offers": {
            "@type": "Offer",
            "description": "Professional software development services",
            "availability": "https://schema.org/InStock"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data?.items as Array<{ name: string; url: string }>)?.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (data?.faqs as Array<{ question: string; answer: string }>)?.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}


