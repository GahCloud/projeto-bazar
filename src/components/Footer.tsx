import Link from "next/link";
import { categories } from "@/data/categories";
import { buildWhatsAppLink, defaultGreeting } from "@/lib/whatsapp";

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = buildWhatsAppLink({
  number,
  message: defaultGreeting(),
});

export default function Footer() {
  return (
    <footer className="footer-premium border-t border-gold-500">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gold">Sobre</h3>
          <p className="text-brand-100 leading-relaxed">
            Mãos de Fé é um ateliê de arte sacra sob encomenda. Cada peça é feita à mão com cuidado, tradição e
            atendimento direto pelo WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gold">Categorias</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/categoria/${category.id}`} className="footer-link">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gold">Contato</h3>
          <ul className="space-y-2 text-brand-100">
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="footer-link">
                Atendimento via WhatsApp
              </a>
            </li>
            <li>Segunda a sábado, 9h às 18h</li>
            <li>Pagamento via PIX</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gold">Redes</h3>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A5.5 5.5 0 1 1 6.5 14 5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5Zm5.2-3.7a1 1 0 1 1-1.4 0 1 1 0 0 1 1.4 0Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 9H16V6h-2.5A4.5 4.5 0 0 0 9 10.5V12H7v3h2v6h3v-6h2.4l.6-3H12v-1.5A1.5 1.5 0 0 1 13.5 9Z" />
              </svg>
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.97L0 24l6.2-1.63a11.9 11.9 0 0 0 5.85 1.5h.01c6.59 0 11.94-5.34 11.94-11.92 0-3.18-1.24-6.17-3.48-8.47ZM12.06 21.3h-.01a9.94 9.94 0 0 1-5.07-1.4l-.36-.22-3.68.96.98-3.58-.24-.37a9.94 9.94 0 0 1-1.55-5.29c0-5.52 4.51-10.02 10.06-10.02 2.68 0 5.2 1.05 7.09 2.95a9.94 9.94 0 0 1 2.94 7.08c0 5.52-4.51 10.02-10.07 10.02Zm5.78-7.53c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.23-.69.08-.32-.16-1.36-.5-2.6-1.59-.97-.86-1.62-1.92-1.81-2.24-.19-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.22-.32.33-.53.11-.21.06-.4-.03-.56-.08-.16-.7-1.7-.97-2.33-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.62s1.13 3.05 1.29 3.26c.16.21 2.26 3.45 5.48 4.84.76.33 1.35.52 1.81.67.77.24 1.47.21 2.02.13.62-.09 1.88-.78 2.14-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.6-.37Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold-500/30 text-center text-xs text-brand-100 py-4">
        © Mãos de Fé. Arte sacra feita à mão.
      </div>
    </footer>
  );
}
