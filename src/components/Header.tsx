"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buildWhatsAppLink, defaultGreeting } from "@/lib/whatsapp";
import CategoryNav from "./CategoryNav";

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = buildWhatsAppLink({
  number,
  message: defaultGreeting(),
});

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled header-blur" : ""}`}>
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <span className="logo-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 8c7.2 6.4 11.6 13.6 13.2 21.6-5.6-.8-10.4-3.2-13.2-6.8-2.8 3.6-7.6 6-13.2 6.8C20.4 21.6 24.8 14.4 32 8Z"
                  fill="#c9a227"
                />
                <path
                  d="M16 34c6.4 8.8 14.4 13.2 16 13.2S41.6 42.8 48 34c-1.6 10.4-8.8 19.2-16 22-7.2-2.8-14.4-11.6-16-22Z"
                  fill="#f4d03f"
                />
              </svg>
            </span>
            <span className="text-2xl font-semibold tracking-tight text-gold">Mãos de Fé</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfólio
            </Link>
            <Link href="/como-comprar" className="nav-link">
              Como Comprar
            </Link>
            <Link href="/sobre" className="nav-link">
              Sobre
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-brand-900 text-[#f5efe1] hover:bg-brand-800 transition-colors"
            >
              WhatsApp
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 18 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-[#f8f6f2] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="navigation"
        aria-label="Menu mobile"
      >
        <nav className="flex flex-col items-center gap-6 text-xl font-medium">
          <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Portfólio
          </Link>
          <Link href="/como-comprar" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Como Comprar
          </Link>
          <Link href="/sobre" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Sobre
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4 w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Falar no WhatsApp
          </Link>
        </nav>
        {/* Decorative background element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-200/20 to-transparent pointer-events-none" />
      </div>

      <CategoryNav />
    </>
  );
}
