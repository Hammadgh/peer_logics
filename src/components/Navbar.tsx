"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${menuOpen ? "navbar-open" : ""} ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link href="/" className="brand brand-logo" aria-label="Peerlogics home">
          <Image
            src="/assests/peerlogics.png"
            alt="Peerlogics"
            className="logo"
            width={160}
            height={40}
          />
        </Link>

        <nav className="nav-links nav-center" aria-label="Primary">
          <Link href="/">Home</Link>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </nav>

        <div className="nav-contact-btn">
          <Link href="/contact" className="contact-us-btn">
            Contact Us
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
        <nav className="mobile-nav" aria-label="Mobile Primary">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mobile-contact-btn">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}


