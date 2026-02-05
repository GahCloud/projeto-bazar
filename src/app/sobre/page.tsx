import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre | Mãos de Fé - Artesanato Religioso",
    description: "Conheça a história por trás da Mãos de Fé: arte sacra artesanal feita com oração, propósito e muito carinho. Santos de gesso, decorações natalinas e peças especiais.",
    keywords: "sobre mãos de fé, artesanato religioso, arte sacra, santos de gesso, história da loja",
    openGraph: {
        title: "Sobre | Mãos de Fé - Artesanato Religioso",
        description: "Conheça a história por trás da Mãos de Fé: arte sacra artesanal feita com oração, propósito e muito carinho.",
        type: "website",
    },
};

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fdfbf7] to-[#f5f0e8]">
            {/* Hero Section */}
            <section className="container-custom py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative order-1 md:order-2">
                        <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-md">
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-gold/30 rounded-3xl -rotate-3" />
                            <div className="absolute -inset-4 bg-gradient-to-tl from-brand/10 to-gold/20 rounded-3xl rotate-2" />

                            {/* Main image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/perfil-artesa.png"
                                    alt="Artesã Mãos de Fé - Criadora de artesanato religioso"
                                    width={400}
                                    height={533}
                                    className="object-cover"
                                    priority
                                    unoptimized={true}
                                />
                            </div>

                            {/* Floating accent */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
                            
                            {/* Name */}
                            <div className="text-center mt-6 space-y-1">
                                <h3 className="text-xl font-serif text-brand font-semibold">Rosa Helena</h3>
                                <p className="text-sm text-brand/60">Artesã Mãos de Fé</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="inline-block">
                            <span className="text-sm uppercase tracking-widest text-brand/70 font-medium">
                                Quem Sou Eu
                            </span>
                            <div className="h-0.5 w-12 bg-gold mt-2" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand leading-tight">
                            Onde a fé encontra as mãos
                        </h1>

                        <div className="space-y-5 text-brand/80 leading-relaxed text-lg">
                            <p>
                                A <strong className="text-brand">Mãos de Fé</strong> nasceu de
                                um chamado silencioso — daqueles que a gente sente no coração
                                antes de entender com a razão. Começou nas horas de oração, nos
                                momentos de gratidão, no desejo sincero de compartilhar paz e
                                beleza com quem também busca algo maior.
                            </p>

                            <p>
                                Cada peça que sai das minhas mãos carrega um pedacinho dessa
                                história. Não é apenas gesso, tinta ou MDF. É intenção. É
                                carinho. É a certeza de que a arte pode ser um canal de graça,
                                um presente que toca a alma de quem recebe.
                            </p>

                            <p>
                                Trabalho com arte sacra, mas também com decorações de datas
                                especiais — Natal, Páscoa, e tudo aquilo que nos reúne em
                                família e nos faz lembrar do que realmente importa. Cada traço é
                                feito à mão, com tempo, atenção e muita dedicação.
                            </p>

                            <p>
                                Acredito que o artesanato é uma forma de oração. E minha missão
                                é levar, através dessas peças, um pouco de fé, esperança e amor
                                para dentro da sua casa.
                            </p>
                        </div>

                        {/* Signature/Quote */}
                        <div className="pt-4 border-t border-brand/10">
                            <p className="text-brand italic font-serif text-xl">
                                &ldquo;Que cada peça seja uma benção para quem a recebe.&rdquo;
                            </p>
                            <p className="text-brand/60 mt-2 font-medium">
                                — Com gratidão, Mãos de Fé ✨
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 btn btn-primary shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded-lg"
                                aria-label="Ver portfólio de produtos artesanais"
                            >
                                <span>Ver Portfólio</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white/50 py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto bg-brand/5 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-brand/70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl text-brand">Feito com Amor</h3>
                            <p className="text-brand/60 text-sm">
                                Cada detalhe é pensado com carinho e dedicação
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto bg-brand/5 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-brand/70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl text-brand">100% Artesanal</h3>
                            <p className="text-brand/60 text-sm">
                                Trabalho manual, peça por peça, sem produção em série
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="w-16 h-16 mx-auto bg-brand/5 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-brand/70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-serif text-xl text-brand">Propósito e Fé</h3>
                            <p className="text-brand/60 text-sm">
                                Arte que inspira e conecta com o que há de mais sagrado
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
