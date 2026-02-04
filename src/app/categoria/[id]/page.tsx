import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryById, categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.id);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.id);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
          Portfólio
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 font-medium">{category.name}</span>
      </nav>

      {/* Header da Categoria */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            <p className="text-gray-600 mt-1">{category.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm text-gray-500">
            {products.length} produto{products.length !== 1 ? "s" : ""} encontrado{products.length !== 1 ? "s" : ""}
          </p>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categoria/${cat.id}`}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  cat.id === params.id
                    ? "bg-brand-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Produtos */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Nenhum produto encontrado
          </h3>
          <p className="text-gray-600 mb-6">
            Esta categoria ainda não possui produtos disponíveis.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            Ver todos os produtos
          </Link>
        </div>
      )}

      {/* CTA Flutuante da Categoria */}
      {products.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href={buildWhatsAppLink({
              number: whatsappNumber,
              message: `Olá! Tenho interesse em produtos da categoria ${category.name} da loja Mãos de Fé. Gostaria de ver mais opções e fazer uma encomenda.`,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Peça por WhatsApp</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}
