export type Category = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  sourceFolder: string;
};

export const categories: Category[] = [
  {
    id: "santos-de-gesso",
    name: "Santos de Gesso",
    description: "Imagens religiosas em gesso pintadas à mão.",
    icon: "⛪",
    sourceFolder: "SANTOS_GESSO",
  },
  {
    id: "natal",
    name: "Natal",
    description: "Peças e enfeites natalinos artesanais.",
    icon: "🎄",
    sourceFolder: "NATAL",
  },
  {
    id: "halloween",
    name: "Halloween",
    description: "Decorações e itens temáticos de Halloween.",
    icon: "🎃",
    sourceFolder: "HALLOWEEN",
  },
  {
    id: "pascoa",
    name: "Páscoa",
    description: "Peças decorativas e temáticas de Páscoa.",
    icon: "🐣",
    sourceFolder: "PASCOA",
  },
  {
    id: "mdf",
    name: "Produtos MDF",
    description: "Itens artesanais produzidos em MDF.",
    icon: "🪵",
    sourceFolder: "MDF",
  },
  {
    id: "diversos",
    name: "Diversos",
    description: "Outros artesanatos e peças especiais.",
    icon: "✨",
    sourceFolder: "DIVERSOS",
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryName(id: string): string {
  const category = getCategoryById(id);
  return category?.name || "Sem categoria";
}

export function getCategoryByFolder(folder: string): Category | undefined {
  return categories.find((cat) => cat.sourceFolder === folder);
}
