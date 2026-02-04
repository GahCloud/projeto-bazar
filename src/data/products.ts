import portfolio from "./portfolio.json";
import { categories } from "./categories";

export type Product = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  imageSrc: string;
  alt: string;
  category: string;
  categoryLabel: string;
  price?: number;
  dimensions?: string;
};

export const allProducts: Product[] = portfolio as Product[];

export function getProductsByCategory(categoryId: string) {
  return allProducts.filter((product) => product.category === categoryId);
}

export function getProductsGroupedByCategory() {
  return categories
    .map((category) => ({
      category,
      products: getProductsByCategory(category.id),
    }))
    .filter((group) => group.products.length > 0);
}

export function getAllCategories() {
  return categories;
}

export function getProductsCountByCategory() {
  const counts: Record<string, number> = {};
  categories.forEach((cat) => {
    counts[cat.id] = getProductsByCategory(cat.id).length;
  });
  return counts;
}
