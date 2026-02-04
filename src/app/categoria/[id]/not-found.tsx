import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <div className="container py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Categoria não encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Esta categoria não existe ou foi removida. 
          Que tal navegar pelas nossas categorias disponíveis?
        </p>
        <div className="space-y-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            Ver Portfólio Completo
          </Link>
          <div>
            <Link
              href="/"
              className="text-brand-600 hover:text-brand-700"
            >
              ← Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
