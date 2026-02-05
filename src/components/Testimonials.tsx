"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  comment: string;
  product: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Fernanda Oliveira",
    location: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    comment: "Encomendei um santo de gesso para a casa da minha mãe. A peça ficou maravilhosa, o acabamento é impecável! Rosa Helena foi super atenciosa durante todo o processo.",
    product: "Santo de Gesso",
    rating: 5,
    date: "2 semanas atrás"
  },
  {
    id: "2",
    name: "Carlos Eduardo Santos",
    location: "Rio de Janeiro, RJ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    comment: "Comprei a decoração de Natal para presentear minha esposa. Ela amou! As peças são únicas, dá pra sentir o carinho em cada detalhe. Já fiz outra encomenda!",
    product: "Decoração Natalina",
    rating: 5,
    date: "1 mês atrás"
  },
  {
    id: "3",
    name: "Ana Paula Ribeiro",
    location: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    comment: "Super recomendo! Fiz uma encomenda personalizada de anjo para o batizado da minha sobrinha. Ficou perfeito, todo mundo elogiou. O pagamento via PIX foi super prático.",
    product: "Anjo Personalizado",
    rating: 5,
    date: "3 semanas atrás"
  },
  {
    id: "4",
    name: "Roberto Silva Lima",
    location: "Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    comment: "Atendimento excelente! A Rosa me ajudou a escolher a peça ideal para minha sala. Chegou super bem embalada e o prazo foi cumprido.",
    product: "Peça de MDF",
    rating: 5,
    date: "2 meses atrás"
  },
  {
    id: "5",
    name: "Juliana Costa Mendes",
    location: "Salvador, BA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    comment: "Amei minha compra! Os produtos são ainda mais lindos pessoalmente. Já indiquei para várias amigas do trabalho. A entrega foi rápida e segura.",
    product: "Diversos",
    rating: 5,
    date: "1 semana atrás"
  },
  {
    id: "6",
    name: "Fernando Henrique Souza",
    location: "Fortaleza, CE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    comment: "Encomendei uma peça especial para minha mãe no Dia das Mães. Foi um sucesso! A qualidade do trabalho artesanal é notável. Voltei a comprar para o Natal.",
    product: "Peça Especial",
    rating: 5,
    date: "6 meses atrás"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-gray-600">
            Depoimentos de clientes satisfeitos de todo o Brasil
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-brand-100"
            >
              {/* Header Card */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-brand-100 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={`Foto de ${testimonial.name}`}
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full">
                  {testimonial.product}
                </span>
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-brand-100"
            aria-label="Depoimentos anteriores"
          >
            <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-brand-100"
            aria-label="Próximos depoimentos"
          >
            <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-brand-900">500+</p>
            <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-900">5.0</p>
            <p className="text-sm text-gray-600">Avaliação Média</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-900">Brasil</p>
            <p className="text-sm text-gray-600">Atendimento em Todo Território</p>
          </div>
        </div>
      </div>
    </section>
  );
}
