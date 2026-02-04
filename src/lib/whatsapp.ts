import type { Product } from "@/data/products";

type BuildLinkParams = {
  number?: string | null;
  message: string;
};

export function buildWhatsAppLink({ number, message }: BuildLinkParams) {
  const phone = (number || "").replace(/\D/g, "");
  const target = phone ? `https://wa.me/${phone}` : "https://wa.me";
  const text = encodeURIComponent(message);
  return `${target}?text=${text}`;
}

export function defaultGreeting() {
  return "Olá! Gostaria de saber mais sobre as peças da Mãos de Fé.";
}

export function productMessage(product: Product) {
  return `Olá! Tenho interesse na peça ${product.title} (slug: ${product.slug}) da loja Mãos de Fé. Gostaria de fazer a encomenda e pagar o sinal via PIX. Pode me enviar a chave, por favor?`;
}
