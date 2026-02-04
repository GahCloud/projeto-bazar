export const metadata = {
  title: "Como comprar | Mãos de Fé",
  description: "Passo a passo simples para encomendar uma peça artesanal e pagar o sinal via PIX.",
};

export default function ComoComprarPage() {
  const steps = [
    {
      title: "Escolha a peça",
      text: "Veja o portfólio e selecione um modelo ou use como referência para algo personalizado.",
    },
    {
      title: "Fale no WhatsApp",
      text: "Envie sua ideia, cores e medidas. Responderemos rápido com opções.",
    },
    {
      title: "Combine detalhes",
      text: "Ajustamos materiais, prazos e embalagem. Tudo registrado na conversa.",
    },
    {
      title: "Pague o sinal via PIX",
      text: "Enviamos a chave/QR e iniciamos a produção após confirmação do sinal.",
    },
  ];

  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-3xl font-semibold">Como comprar</h1>
        <p className="text-brand-700 text-lg">
          Em poucas mensagens você garante sua peça. Nada de formulários longos ou cadastros.
        </p>
      </div>
      <div className="grid-responsive">
        {steps.map((step, index) => (
          <div key={step.title} className="card">
            <div className="tag mb-3">Passo {index + 1}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="text-brand-700 text-sm leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-brand-100 rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-2">Sobre o pagamento</h3>
        <p className="text-sm text-brand-700 leading-relaxed">
          Trabalhamos apenas com PIX para manter custos baixos. Após alinhar os detalhes pelo WhatsApp,
          enviamos a chave ou QR code. Com o sinal confirmado, a produção é iniciada e você recebe fotos
          do andamento.
        </p>
      </div>
    </div>
  );
}
