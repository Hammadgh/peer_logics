import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "HR Management Software - Healthcare HR Solutions",
  description: "Comprehensive HR management software for healthcare organizations. HIPAA compliant, automated payroll, recruitment, and employee management solutions for medical environments.",
  keywords: [
    "HR management software",
    "healthcare HR solutions",
    "employee management system",
    "healthcare payroll software",
    "HR automation",
    "healthcare recruitment",
    "HIPAA compliant HR",
    "employee self-service",
    "healthcare workforce management",
    "HR analytics"
  ],
  openGraph: {
    title: "HR Management Software - Healthcare HR Solutions",
    description: "Comprehensive HR management software for healthcare organizations. HIPAA compliant, automated payroll, recruitment, and employee management solutions for medical environments.",
    url: "https://peerlogics.com.pk/services/hr-management",
    images: [
      {
        url: "/assests/HR.jpg",
        width: 1200,
        height: 630,
        alt: "HR Management Software - Healthcare HR Solutions",
      },
    ],
  },
  twitter: {
    title: "HR Management Software - Healthcare HR Solutions",
    description: "Comprehensive HR management software for healthcare organizations. HIPAA compliant, automated payroll, recruitment, and employee management solutions for medical environments.",
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