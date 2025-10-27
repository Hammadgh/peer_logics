import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./services/service-colors.css";
import ScrollIndicator from "./components/ScrollIndicator";
import ThemeProvider from "@/components/ThemeProvider";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PeerLogics - End-to-End Product Delivery",
    template: "%s | PeerLogics"
  },
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
  authors: [{ name: "PeerLogics Team" }],
  creator: "PeerLogics",
  publisher: "PeerLogics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://peerlogics.com.pk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peerlogics.com.pk',
    title: 'PeerLogics - End-to-End Product Delivery',
    description: 'We architect cloud-native platforms, craft usable interfaces, and turn data into decisions, fast. Partner with our expert team for reliable software development.',
    siteName: 'PeerLogics',
    images: [
      {
        url: '/assests/peerlogics.png',
        width: 1200,
        height: 630,
        alt: 'PeerLogics - Professional Software Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeerLogics - End-to-End Product Delivery',
    description: 'We architect cloud-native platforms, craft usable interfaces, and turn data into decisions, fast. Partner with our expert team for reliable software development.',
    images: ['/assests/peerlogics.png'],
    creator: '@peerlogics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <ScrollIndicator />
          <CookieConsent />
          <StructuredData type="organization" />
          <PerformanceOptimizer />
        </ThemeProvider>
      </body>
    </html>
  );
}
