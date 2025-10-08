"use client";

import { useState, useEffect } from "react";

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
        <a href="/" className="brand brand-logo" aria-label="Peerlogics home">
          <img src="/assests/peerlogics.png" alt="Peerlogics" className="logo" />
        </a>

        <nav className="nav-links nav-center" aria-label="Primary">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

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
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}


