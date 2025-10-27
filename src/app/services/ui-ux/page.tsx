import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "UI/UX Design Services - User Experience Design",
  description: "Professional UI/UX design services that create intuitive, engaging interfaces. User-centered design approach with accessibility, mobile-first design, and conversion optimization.",
  keywords: [
    "UI/UX design",
    "user experience design",
    "user interface design",
    "UX research",
    "UI design services",
    "user-centered design",
    "accessibility design",
    "mobile-first design",
    "conversion optimization",
    "design systems"
  ],
  openGraph: {
    title: "UI/UX Design Services - User Experience Design",
    description: "Professional UI/UX design services that create intuitive, engaging interfaces. User-centered design approach with accessibility, mobile-first design, and conversion optimization.",
    url: "https://peerlogics.com.pk/services/ui-ux",
    images: [
      {
        url: "/assests/UI-UX.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services - User Experience Design",
      },
    ],
  },
  twitter: {
    title: "UI/UX Design Services - User Experience Design",
    description: "Professional UI/UX design services that create intuitive, engaging interfaces. User-centered design approach with accessibility, mobile-first design, and conversion optimization.",
    images: ["/assests/UI-UX.png"],
  },
  alternates: {
    canonical: "/services/ui-ux",
  },
};

export default function UIUXPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:ui-ux">
        <ServicePageClient service="ui-ux" />
      </main>
      <Footer />
    </>
  );
}