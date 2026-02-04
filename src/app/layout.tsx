import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Mãos de Fé | Artesanato sob encomenda",
  description: "Peças artesanais feitas com carinho e fé. Faça sua encomenda diretamente pelo WhatsApp.",
  // Set this in Cloudflare Pages env vars: NEXT_PUBLIC_SITE_URL=https://<seu-projeto>.pages.dev
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
