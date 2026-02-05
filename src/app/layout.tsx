import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Mãos de Fé | Artesanato Religioso Sob Encomenda",
  description: "Peças artesanais religiosas feitas com carinho e fé. Santos de gesso, decorações natalinas e itens especiais. Faça sua encomenda diretamente pelo WhatsApp.",
  keywords: "artesanato religioso, santos de gesso, peças sacras, encomendas, artesanato sob encomenda, decoração religiosa, imagens religiosas",
  authors: [{ name: "Mãos de Fé" }],
  creator: "Mãos de Fé",
  publisher: "Mãos de Fé",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Mãos de Fé | Artesanato Religioso Sob Encomenda",
    description: "Peças artesanais religiosas feitas com carinho e fé. Santos de gesso, decorações natalinas e itens especiais. Faça sua encomenda diretamente pelo WhatsApp.",
    siteName: "Mãos de Fé",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mãos de Fé | Artesanato Religioso Sob Encomenda",
    description: "Peças artesanais religiosas feitas com carinho e fé. Faça sua encomenda diretamente pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mãos de Fé",
    description: "Peças artesanais religiosas feitas com carinho e fé. Santos de gesso, decorações natalinas e itens especiais.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    category: "Artesanato Religioso",
    serviceType: "Venda de artesanato religioso sob encomenda",
    keywords: "artesanato religioso, santos de gesso, peças sacras, encomendas",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Produtos Religiosos",
      itemListElement: [
        {
          "@type": "Product",
          name: "Santos de Gesso",
          category: "Artesanato Religioso"
        },
        {
          "@type": "Product", 
          name: "Decorações Natalinas",
          category: "Artesanato Religioso"
        },
        {
          "@type": "Product",
          name: "Peças Especiais",
          category: "Artesanato Religioso"
        }
      ]
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
