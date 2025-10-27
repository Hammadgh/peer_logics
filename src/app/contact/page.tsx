import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact PeerLogics - Get In Touch",
  description: "Ready to start your project? Contact PeerLogics for professional software development, web development, e-commerce, and digital solutions. Free consultation available.",
  keywords: [
    "contact peerlogics",
    "software development consultation",
    "web development quote",
    "e-commerce development",
    "UI/UX design services",
    "medical billing software",
    "HR management systems",
    "get in touch",
    "free consultation"
  ],
  openGraph: {
    title: "Contact PeerLogics - Get In Touch",
    description: "Ready to start your project? Contact PeerLogics for professional software development, web development, e-commerce, and digital solutions. Free consultation available.",
    url: "https://peerlogics.com.pk/contact",
    images: [
      {
        url: "/assests/lets_talk.jpg",
        width: 1200,
        height: 630,
        alt: "Contact PeerLogics - Professional Software Development Services",
      },
    ],
  },
  twitter: {
    title: "Contact PeerLogics - Get In Touch",
    description: "Ready to start your project? Contact PeerLogics for professional software development, web development, e-commerce, and digital solutions. Free consultation available.",
    images: ["/assests/lets_talk.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
