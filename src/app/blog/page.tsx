"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  icon: string;
  href: string;
  category?: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Why Every Business Needs a Modern Website (and How PeerLogics Can Help You Build One That Works)",
    description: "Your website is your first impression. Learn why U.S. businesses need modern, high-performing websites and how PeerLogics builds custom websites that convert visitors into customers.",
    date: "January 20, 2024",
    readTime: "8 min read",
    icon: "🌐",
    href: "/blog/why-every-business-needs-modern-website",
    category: "Web Development"
  },
  // Add more blog posts here as they're created
];

export default function BlogLandingPage() {
  return (
    <>
      <Navbar />
      <section className="blog-landing">
        <div className="container">
          <div className="blog-header">
            <h1 className="blog-title">
              <span className="blog-title-word">Our</span>
              <span className="blog-title-word accent">Blog</span>
            </h1>
            <p className="blog-subtitle">
              Insights, guides, tips and case studies from the PeerLogics team—exploring tech, digital transformation, healthcare IT, and building amazing products.
            </p>
          </div>

          {blogPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-card-header">
                    {post.category && (
                      <span className="blog-category">{post.category}</span>
                    )}
                    <div className="blog-icon">{post.icon}</div>
                  </div>
                  <h2 className="blog-card-title">
                    <Link href={post.href}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-description">{post.description}</p>
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="blog-meta-separator">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={post.href} className="blog-card-link">
                    Read Article
                    <span className="blog-link-arrow" aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
