"use client";

import { useEffect, useState } from "react";

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mostrar modal após 3 segundos na primeira visita
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("hasSeenInfoModal");
      if (!hasSeenModal) {
        setIsOpen(true);
        setTimeout(() => setShowModal(true), 100);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setIsOpen(false), 300);
    localStorage.setItem("hasSeenInfoModal", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto transform transition-all duration-300 ${
          showModal ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-800 to-brand-900 text-white p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Bem-vindo à Mãos de Fé!</h2>
              <p className="text-sm text-white/80">Como funciona nosso processo</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-gold font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Peças Únicas</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Cada peça é artesanal e exclusiva. Não temos produção em série, 
                  garantindo que você tenha um item verdadeiramente especial.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-gold font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Escolha sua Peça</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Navegue pelo nosso portfólio e encontre a peça que mais 
                  toca seu coração. Cada uma tem sua própria história e energia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-gold font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Entre em Contato</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Clique no botão &ldquo;Encomendar&rdquo; ou fale diretamente pelo WhatsApp. 
                  Vamos conversar sobre sua peça e esclarecer todas as dúvidas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-gold font-semibold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">Sinal + Envio</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Após o pagamento do sinal via PIX, iniciamos a preparação 
                  e enviamos sua peça com todo carinho e segurança.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-50 rounded-xl p-4 text-center">
            <p className="text-sm text-brand-800 font-medium mb-3">
              Pronto para encontrar sua peça especial?
            </p>
            <a
              href="/portfolio"
              onClick={handleClose}
              className="inline-flex items-center gap-2 bg-brand-900 text-white px-6 py-2.5 rounded-full hover:bg-brand-800 transition-colors"
            >
              <span>Ver Portfólio</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-center text-gray-500">
            Com ❤️ e fé, cada peça é uma bênção especial
          </p>
        </div>
      </div>
    </div>
  );
}
