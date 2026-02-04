import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts } from "@/data/products";
import { buildWhatsAppLink, productMessage } from "@/lib/whatsapp";

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export async function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.title} | Mãos de Fé`,
    description:
      product.description ||
      `Peça artesanal religiosa única. ${product.title} feita à mão com carinho e fé. Encomende diretamente pelo WhatsApp.`,
    keywords: [
      product.title,
      "artesanato religioso",
      "imagem sagrada",
      "encomenda",
      "artesanal",
      "Mãos de Fé",
    ],
    openGraph: {
      title: `${product.title} | Mãos de Fé`,
      description: product.description || `Peça artesanal religiosa única. Encomende diretamente pelo WhatsApp.`,
      images: [
        {
          url: product.imageSrc,
          width: 1200,
          height: 800,
          alt: product.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Mãos de Fé`,
      description: product.description || `Peça artesanal religiosa única. Encomende diretamente pelo WhatsApp.`,
      images: [product.imageSrc],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const href = buildWhatsAppLink({
    number,
    message: productMessage(product!),
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product!.title,
    description:
      product!.description ||
      `Peça artesanal religiosa única. ${product!.title} feita à mão com carinho e fé.`,
    image: product!.imageSrc,
    category: "Artesanato Religioso",
    brand: {
      "@type": "Brand",
      name: "Mãos de Fé",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      description: "Sob encomenda - Entre em contato pelo WhatsApp",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Tipo",
        value: "Artesanal",
      },
      {
        "@type": "PropertyValue",
        name: "Contato",
        value: "WhatsApp",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pb-12">
        <div
          className="w-full mb-8"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.55)), url(${product!.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container py-12 text-white space-y-2">
            <span className="tag bg-white/15 text-white border border-white/20">Imagem sagrada</span>
            <h1 className="text-3xl md:text-4xl font-semibold">{product!.title}</h1>
            {product!.description && (
              <p className="max-w-2xl text-white/90 leading-relaxed">{product!.description}</p>
            )}
          </div>
        </div>

        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white border border-brand-100 rounded-2xl p-4 shadow-soft image-frame">
            <Image
              src={product!.imageSrc}
              alt={product!.alt}
              width={1200}
              height={900}
              className="w-full h-auto object-cover object-center rounded-xl image-warm"
              priority
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-3 text-brand-800">
              <p>
                Cada peça é produzida de forma artesanal após seu contato. Ajuste molduras, tamanhos e materiais
                com orientação direta pelo WhatsApp.
              </p>
              <p>
                Para iniciar, enviamos a chave PIX para pagamento do sinal e o prazo estimado de produção. Você recebe
                fotos do processo para aprovar.
              </p>
            </div>
            <div className="btn-pair">
              <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-shimmer">
                Encomendar pelo WhatsApp
              </a>
              <Link href="/portfolio" className="btn btn-secondary">
                Voltar ao portfólio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
