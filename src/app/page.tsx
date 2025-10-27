import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "PeerLogics - End-to-End Product Delivery",
  description: "We architect cloud-native platforms, craft usable interfaces, and turn data into decisions, fast. Partner with our expert team for reliable software development.",
  keywords: [
    "web development",
    "software development", 
    "e-commerce development",
    "UI/UX design",
    "medical billing software",
    "HR management systems",
    "Next.js development",
    "React development",
    "cloud solutions",
    "digital transformation"
  ],
  openGraph: {
    title: "PeerLogics - End-to-End Product Delivery",
    description: "We architect cloud-native platforms, craft usable interfaces, and turn data into decisions, fast. Partner with our expert team for reliable software development.",
    url: "https://peerlogics.com.pk",
    images: [
      {
        url: "/assests/peerlogics.png",
        width: 1200,
        height: 630,
        alt: "PeerLogics - Professional Software Development Services",
      },
    ],
  },
  twitter: {
    title: "PeerLogics - End-to-End Product Delivery",
    description: "We architect cloud-native platforms, craft usable interfaces, and turn data into decisions, fast. Partner with our expert team for reliable software development.",
    images: ["/assests/peerlogics.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePageClient />
      <Footer />
      <StructuredData 
        type="service" 
        data={{
          name: "Software Development Services",
          description: "Professional software development services including web development, e-commerce, UI/UX design, medical billing, and HR management solutions.",
          serviceType: "Software Development"
        }} 
      />
    </>
  );
}
