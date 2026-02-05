"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppLink, productMessage } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const href = buildWhatsAppLink({
    number,
    message: productMessage(product),
  });

  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`card card-premium card-glow h-full flex flex-col gap-3 group ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link href={`/portfolio/${product.slug}`} className="block overflow-hidden rounded-2xl" aria-label={`Ver detalhes de ${product.title}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl image-frame bg-[#fdfbf7] flex items-center justify-center">
          <div
            className={`image-skeleton ${imageLoaded ? "opacity-0" : "opacity-100"}`}
            aria-hidden="true"
          />
          {isVisible && (
            <Image
              src={product.imageSrc}
              alt={product.alt}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onLoadingComplete={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300" />
        </div>
      </Link>
      <div className="flex-1 space-y-2">
        <p className="tag tag-gold">{product.categoryLabel}</p>
        <h3 className="text-lg product-title group-hover:text-brand-700 transition-colors">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}
        {product.dimensions && (
          <p className="text-xs text-gray-500">Dimensões: {product.dimensions}</p>
        )}
      </div>
      <div className="btn-pair">
        <Link
          href={`/portfolio/${product.slug}`}
          className="btn btn-secondary flex-1 text-center text-sm"
        >
          Ver detalhes
        </Link>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-shimmer flex-1 text-center text-sm"
        >
          Encomendar
        </a>
      </div>
    </article>
  );
}
