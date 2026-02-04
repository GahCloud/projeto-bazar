"use client";

import Link from "next/link";
import { getAllCategories, getProductsCountByCategory } from "@/data/products";

export default function CategoryNav() {
  const categories = getAllCategories();
  const counts = getProductsCountByCategory();

  return (
    <nav className="category-nav">
      <div className="container">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-sm font-medium text-brand-700 whitespace-nowrap">Categorias:</span>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.id}`}
              className="category-pill"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              <span className="text-xs text-brand-600">({counts[category.id] || 0})</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
