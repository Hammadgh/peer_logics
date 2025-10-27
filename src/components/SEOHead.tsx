import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title = "PeerLogics - End-to-End Product Delivery",
  description = "We architect cloud-native platforms, craft usable interfaces, and turn data into decisions, fast. Partner with our expert team for reliable software development.",
  keywords = [],
  canonical,
  ogImage = "/assests/peerlogics.png",
  ogType = "website",
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes("PeerLogics") ? title : `${title} | PeerLogics`;
  const fullKeywords = [
    "web development",
    "software development", 
    "e-commerce development",
    "UI/UX design",
    "medical billing software",
    "HR management systems",
    "Next.js development",
    "React development",
    "cloud solutions",
    "digital transformation",
    ...keywords
  ].join(", ");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="PeerLogics Team" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`https://peerlogics.com.pk${canonical}`} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://peerlogics.com.pk${ogImage}`} />
      <meta property="og:url" content={`https://peerlogics.com.pk${canonical || ""}`} />
      <meta property="og:site_name" content="PeerLogics" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://peerlogics.com.pk${ogImage}`} />
      <meta name="twitter:creator" content="@peerlogics" />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/assests/peerlogics.png" />
    </Head>
  );
}


