import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageClient from "@/components/ServicePageClient";

export const metadata: Metadata = {
  title: "Website Development Services - Professional Web Solutions",
  description: "Professional website development services using Next.js, React, and modern technologies. Build scalable, fast, and SEO-optimized websites that drive business growth.",
  keywords: [
    "website development",
    "web development services",
    "Next.js development",
    "React development",
    "responsive web design",
    "SEO optimized websites",
    "professional web development",
    "custom website development",
    "web application development",
    "modern web technologies"
  ],
  openGraph: {
    title: "Website Development Services - Professional Web Solutions",
    description: "Professional website development services using Next.js, React, and modern technologies. Build scalable, fast, and SEO-optimized websites that drive business growth.",
    url: "https://peerlogics.com.pk/services/website-development",
    images: [
      {
        url: "/assests/webdevelopment.png",
        width: 1200,
        height: 630,
        alt: "Website Development Services - Professional Web Solutions",
      },
    ],
  },
  twitter: {
    title: "Website Development Services - Professional Web Solutions",
    description: "Professional website development services using Next.js, React, and modern technologies. Build scalable, fast, and SEO-optimized websites that drive business growth.",
    images: ["/assests/webdevelopment.png"],
  },
  alternates: {
    canonical: "/services/website-development",
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:website-development">
        <ServicePageClient service="website-development" />
      </main>
      <Footer />
    </>
  );
}