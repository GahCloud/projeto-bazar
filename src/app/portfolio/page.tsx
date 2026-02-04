"use client";

import ProductCard from "@/components/ProductCard";
import { allProducts, getProductsGroupedByCategory, getAllCategories } from "@/data/products";
import Link from "next/link";
import SimpleSearch from "@/components/SimpleSearch";
import { useState } from "react";

export default function PortfolioPage() {
  const productsByCategory = getProductsGroupedByCategory();
  const categories = getAllCategories();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-3">
        <p className="tag">Curadoria devocional</p>
        <h1 className="section-title text-3xl text-gold">Portfólio Completo</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Cada peça pode ser adaptada em tamanho, moldura ou gravação. Escolha a categoria que mais te interessa
          ou navegue por todos os nossos produtos artesanais.
        </p>
        <div className="flex justify-center">
          <SimpleSearch onSearch={setFilteredProducts} />
        </div>
      </div>

      {filteredProducts.length < allProducts.length ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Resultados da Busca</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Navegue por Categoria</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => {
                const productCount = allProducts.filter((p) => p.category === category.id).length;
                return (
                  <Link
                    key={category.id}
                    href={`/categoria/${category.id}`}
                    className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="font-medium text-sm">{category.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{productCount} itens</p>
                  </Link>
                );
              })}
            </div>
          </div>

          {productsByCategory.map(({ category, products }) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                  <span className="text-sm text-gray-500">({products.length} produtos)</span>
                </div>
                <Link
                  href={`/categoria/${category.id}`}
                  className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                >
                  Ver todos →
                </Link>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product, index) => (
                  <ProductCard key={product.slug} product={product} index={index} />
                ))}
              </div>
              {products.length > 8 && (
                <div className="text-center">
                  <Link
                    href={`/categoria/${category.id}`}
                    className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-700 rounded-lg hover:bg-brand-200 transition-colors"
                  >
                    Ver mais {products.length - 8} produtos desta categoria
                  </Link>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      <div className="bg-brand-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Nossa Coleção</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-3xl font-bold text-brand-600">{allProducts.length}</div>
            <div className="text-sm text-gray-600">Peças Únicas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-600">{categories.length}</div>
            <div className="text-sm text-gray-600">Categorias</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-600">100%</div>
            <div className="text-sm text-gray-600">Artesanal</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-600">✨</div>
            <div className="text-sm text-gray-600">Feito com amor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
