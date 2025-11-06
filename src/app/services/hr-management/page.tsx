import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "HR Operations Outsourcing Services - Streamline Your HR | PeerLogics",
  description: "Streamline your HR operations with our comprehensive HR outsourcing services. Payroll, benefits administration, compliance, recruitment, and employee lifecycle management. Cost-efficient, scalable, and compliant HR solutions.",
  keywords: [
    "HR operations outsourcing",
    "HR outsourcing services",
    "payroll administration",
    "HR compliance services",
    "employee data management",
    "recruitment administration",
    "HR operations management",
    "outsourced HR services",
    "HRIS implementation",
    "employee lifecycle management"
  ],
  openGraph: {
    title: "HR Operations Outsourcing Services - Streamline Your HR | PeerLogics",
    description: "Streamline your HR operations with our comprehensive HR outsourcing services. Payroll, benefits administration, compliance, recruitment, and employee lifecycle management.",
    url: "https://peerlogics.com.pk/services/hr-management",
    images: [
      {
        url: "/assests/HR.jpg",
        width: 1200,
        height: 630,
        alt: "HR Operations Outsourcing Services - PeerLogics",
      },
    ],
  },
  twitter: {
    title: "HR Operations Outsourcing Services - Streamline Your HR | PeerLogics",
    description: "Streamline your HR operations with our comprehensive HR outsourcing services. Payroll, benefits administration, compliance, recruitment, and employee lifecycle management.",
    images: ["/assests/HR.jpg"],
  },
  alternates: {
    canonical: "/services/hr-management",
  },
};

export default function HRManagementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:hr-management">
        <ServicePageClient service="hr-management" />
      </main>
      <Footer />
    </>
  );
}