import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Medical Billing Software - Healthcare Revenue Management",
  description: "Professional medical billing software solutions for healthcare providers. HIPAA compliant, automated claim processing, and revenue cycle management to maximize reimbursements.",
  keywords: [
    "medical billing software",
    "healthcare billing",
    "medical billing services",
    "revenue cycle management",
    "HIPAA compliant billing",
    "healthcare revenue optimization",
    "medical claim processing",
    "healthcare billing automation",
    "medical practice management",
    "healthcare financial management"
  ],
  openGraph: {
    title: "Medical Billing Software - Healthcare Revenue Management",
    description: "Professional medical billing software solutions for healthcare providers. HIPAA compliant, automated claim processing, and revenue cycle management to maximize reimbursements.",
    url: "https://peerlogics.com.pk/services/medical-billing",
    images: [
      {
        url: "/assests/medical-billing.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Billing Software - Healthcare Revenue Management",
      },
    ],
  },
  twitter: {
    title: "Medical Billing Software - Healthcare Revenue Management",
    description: "Professional medical billing software solutions for healthcare providers. HIPAA compliant, automated claim processing, and revenue cycle management to maximize reimbursements.",
    images: ["/assests/medical-billing.jpg"],
  },
  alternates: {
    canonical: "/services/medical-billing",
  },
};

export default function MedicalBillingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:medical-billing">
        <ServicePageClient service="medical-billing" />
      </main>
      <Footer />
    </>
  );
}