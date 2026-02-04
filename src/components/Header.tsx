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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled header-blur" : ""}`}>
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
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
          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfólio
            </Link>
            <Link href="/como-comprar" className="nav-link">
              Como Comprar
            </Link>
            <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="nav-link">
              WhatsApp
            </Link>
          </nav>
        </div>
      </header>
      <CategoryNav />
    </>
  );
}
