import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Software Development Services - Custom Software Solutions",
  description: "Professional software development services using modern technologies. Build scalable, secure, and maintainable applications with agile methodologies and enterprise-grade solutions.",
  keywords: [
    "software development",
    "custom software development",
    "enterprise software",
    "web application development",
    "mobile app development",
    "API development",
    "cloud solutions",
    "agile development",
    "DevOps",
    "microservices"
  ],
  openGraph: {
    title: "Software Development Services - Custom Software Solutions",
    description: "Professional software development services using modern technologies. Build scalable, secure, and maintainable applications with agile methodologies and enterprise-grade solutions.",
    url: "https://peerlogics.com.pk/services/software-development",
    images: [
      {
        url: "/assests/software-development.png",
        width: 1200,
        height: 630,
        alt: "Software Development Services - Custom Software Solutions",
      },
    ],
  },
  twitter: {
    title: "Software Development Services - Custom Software Solutions",
    description: "Professional software development services using modern technologies. Build scalable, secure, and maintainable applications with agile methodologies and enterprise-grade solutions.",
    images: ["/assests/software-development.png"],
  },
  alternates: {
    canonical: "/services/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:software-development">
        <ServicePageClient service="software-development" />
      </main>
      <Footer />
    </>
  );
}