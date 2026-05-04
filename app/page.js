import { Img } from "@chakra-ui/react";

export default function SmartFavelaSite() {
  const whatsappLink =
    "https://wa.me/5511940842049?text=Olá,%20tenho%20interesse%20em%20compensação%20de%20carbono";

  const companyFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5gVrIXly4JvUlvbgq12jJughS3tGxhliysofbfZtgtCo5ww/viewform";

  const projectFormLink =
    "https://docs.google.com/forms/d/1uWVOZIX3dial4nL6EEoF__dp0ie0sjgeCRW3QaeXJ1A/viewform";

  const linkedinLink =
    "https://www.linkedin.com/company/smartfavelalab/";

  const ecosystem = [
    "Empresas",
    "Descarbonização",
    "Territórios",
    "Dados de Carbono",
    "Governança ESG",
    "Smart Favela",
  ];

  const strategicQuestions = [
    "Quando a sua empresa fala de compensação de carbono, como está fazendo isso?",
    "Quem são os seus parceiros quando o assunto é mercado de carbono?",
    "O que está bom para a sua empresa?",
    "O que está faltando?",
    "O que te motiva a compensar?",
  ];

  const button =
    "rounded-2xl px-6 py-3 font-medium transition hover:-translate-y-1";

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HEADER */}
      <header className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-6">
          
          {/* LOGO GRANDE */}
          <Img
            src="/smart-favela-logo.png"
            alt="Logo Smart Favela"
            className="h-32 md:h-48 w-auto object-contain"
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              SMART FAVELA <span className="text-sm">®</span>
            </h1>
            <p className="text-white/60">smartfavela.com</p>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Conectamos empresas que precisam compensar carbono com projetos reais de impacto.
        </h2>

        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Transformamos ESG em ação concreta, com rastreabilidade, impacto urbano e conexão direta com territórios.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={companyFormLink} className={`${button} bg-blue-600 hover:bg-blue-500`}>
            Quero compensar carbono
          </a>

          <a href={projectFormLink} className={`${button} bg-yellow-500 text-black hover:bg-yellow-400`}>
            Quero cadastrar um projeto
          </a>

          <a href={whatsappLink} className={`${button} border border-white/20 hover:bg-white hover:text-black`}>
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold">Ecossistema</h2>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {ecosystem.map((item) => (
            <div
              key={item}
              className="p-5 border border-white/10 rounded-2xl bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PERGUNTAS ESTRATÉGICAS */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Antes de compensar carbono, sua empresa precisa responder:
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {strategicQuestions.map((q) => (
            <div
              key={q}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold">
          Transforme ESG em estratégia real
        </h2>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href={companyFormLink} className={`${button} bg-blue-600 hover:bg-blue-500`}>
            Empresas
          </a>

          <a href={projectFormLink} className={`${button} bg-red-500 hover:bg-red-400`}>
            Projetos
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p>smartfavela.com • rosangela@smartfavelalab.com</p>

        <div className="mt-4">
          <a
            href={linkedinLink}
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-white/40 text-sm">
          Produzido por Rose Lambiase Design
        </p>
      </footer>
    </div>
  );
}