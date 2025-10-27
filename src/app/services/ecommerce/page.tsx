import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcommercePageClient from "@/components/EcommercePageClient";

export const metadata: Metadata = {
  title: "E-Commerce Development Services - Online Store Solutions",
  description: "Professional e-commerce development services including Shopify, WooCommerce, and custom platforms. Build secure, scalable online stores that drive sales and growth.",
  keywords: [
    "e-commerce development",
    "online store development",
    "Shopify development",
    "WooCommerce development",
    "e-commerce solutions",
    "online shopping platform",
    "digital commerce",
    "online store design",
    "e-commerce integration",
    "payment gateway integration"
  ],
  openGraph: {
    title: "E-Commerce Development Services - Online Store Solutions",
    description: "Professional e-commerce development services including Shopify, WooCommerce, and custom platforms. Build secure, scalable online stores that drive sales and growth.",
    url: "https://peerlogics.com.pk/services/ecommerce",
    images: [
      {
        url: "/assests/Ecom.jpeg",
        width: 1200,
        height: 630,
        alt: "E-Commerce Development Services - Online Store Solutions",
      },
    ],
  },
  twitter: {
    title: "E-Commerce Development Services - Online Store Solutions",
    description: "Professional e-commerce development services including Shopify, WooCommerce, and custom platforms. Build secure, scalable online stores that drive sales and growth.",
    images: ["/assests/Ecom.jpeg"],
  },
  alternates: {
    canonical: "/services/ecommerce",
  },
};

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black transition-colors services:ecommerce">
        <EcommercePageClient />
      </main>
      <Footer />
    </>
  );
}