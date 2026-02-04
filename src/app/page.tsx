import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/products";

export default function HomePage() {
  const featured = allProducts.slice(0, 3);

  return (
    <div className="container space-y-12 py-10">
      <section className="hero shadow-soft">
        <div className="hero-content">
          <span className="tag">Arte sacra sob encomenda</span>
          <h1 className="text-4xl md:text-5xl leading-tight text-gold">Mãos de Fé</h1>
          <p className="text-lg md:text-xl text-[#f4ede1] max-w-2xl leading-relaxed">
            Peças devocionais feitas à mão, com acabamento premium e atendimento direto pelo WhatsApp.
            Encomende quadros, imagens e relíquias personalizadas com pagamento simples via PIX.
          </p>
          <div className="btn-pair flex-wrap">
            <Link href="/portfolio" className="btn btn-primary btn-shimmer">
              Ver portfólio
            </Link>
            <Link href="/como-comprar" className="btn btn-secondary">
              Como comprar
            </Link>
          </div>
        </div>
        <div className="floating-ornament">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-white/80">
            Fé
            <br />
            & Arte
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="section-title text-3xl text-gold">Destaques</h2>
          <Link href="/portfolio" className="text-sm underline">
            Ver todos
          </Link>
        </div>
        <div className="grid-responsive">
          {featured.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
