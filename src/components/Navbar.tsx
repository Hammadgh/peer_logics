"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const services = [
  { name: "Website Development", href: "/services/website-development" },
  { name: "E-Commerce Solutions", href: "/services/ecommerce" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Medical Billing", href: "/services/medical-billing" },
  { name: "HR Management", href: "/services/hr-management" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger loaded animation
    setTimeout(() => setIsLoaded(true), 100);
    
    // Handle hash in URL on page load (for navigation from other pages)
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // We're on a page that has this section, smooth scroll to it
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    } else {
      // Section doesn't exist, navigate to home with hash
      window.location.href = `/#${elementId}`;
    }
  };

  const scrollToTop = () => {
    // Check if we're on home page
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header className={`navbar ${menuOpen ? "navbar-open" : ""} ${isScrolled ? "navbar-scrolled" : ""} ${isLoaded ? "navbar-loaded" : ""}`}>
      <div className="container navbar-inner">
        <button onClick={scrollToTop} className="brand brand-logo" aria-label="Peerlogics home">
          <div className="logo-wrapper">
            <Image
              src="/assests/peerlogics.png"
              alt="Peerlogics"
              className={`logo logo-dark ${mounted && theme === 'dark' ? 'logo-active' : 'logo-hidden'}`}
              width={160}
              height={40}
              priority
            />
            <Image
              src="/assests/PL-Logo-in-grey-color.png"
              alt="Peerlogics"
              className={`logo logo-light ${mounted && theme === 'light' ? 'logo-active' : 'logo-hidden'}`}
              width={160}
              height={40}
              priority
            />
          </div>
        </button>

        <nav className="nav-links nav-center" aria-label="Primary">
          <button onClick={scrollToTop} className="nav-link-btn">Home</button>
          <button onClick={() => smoothScrollTo('about')} className="nav-link-btn">About</button>
          
          {/* Services Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link-btn nav-dropdown-trigger">
              Services
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {servicesOpen && (
              <div className="nav-dropdown-menu">
                {services.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="nav-dropdown-item"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="nav-right-controls">
          <div className="nav-contact-btn">
            <Link href="/contact" className="contact-us-btn">
              Contact Us
            </Link>
          </div>
          <ThemeToggle />
        </div>

        <div className="nav-mobile-controls">
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
          <ThemeToggle />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
        <nav className="mobile-nav" aria-label="Mobile Primary">
          <button onClick={() => { scrollToTop(); setMenuOpen(false); }} className="mobile-nav-link-btn">Home</button>
          <button onClick={() => smoothScrollTo('about')} className="mobile-nav-link-btn">About</button>
          
          {/* Mobile Services Dropdown */}
          <div className="mobile-nav-dropdown">
            <button 
              onClick={() => setServicesOpen(!servicesOpen)} 
              className="mobile-nav-link-btn mobile-dropdown-trigger"
            >
              Services
              <svg 
                className={`mobile-dropdown-arrow ${servicesOpen ? 'open' : ''}`} 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {servicesOpen && (
              <div className="mobile-dropdown-content">
                {services.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="mobile-dropdown-item"
                    onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mobile-contact-btn">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}


