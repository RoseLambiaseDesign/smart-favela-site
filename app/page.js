export default function SmartFavelaSite() {
  const whatsappLink =
    "https://wa.me/5511940842049?text=Olá,%20tenho%20interesse%20em%20compensação%20de%20carbono%20com%20impacto%20real%20pela%20Smart%20Favela.";

  const inventoryLink =
    "mailto:rosangela@smartfavelalab.com?subject=Inventário%20de%20GEE%20e%20estratégia%20climática&body=Olá,%20quero%20entender%20como%20a%20Smart%20Favela%20pode%20apoiar%20nossa%20empresa.";

  const companyFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5gVrIXly4JvUlvbgq12jJughS3tGxhliysofbfZtgtCo5ww/viewform";

  const projectFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5gVrIXly4JvUlvbgq12jJughS3tGxhliysofbfZtgtCo5ww/viewform";

    const linkedinLink =
  "https://www.linkedin.com/company/smartfavelalab/";
  const ecosystem = [
    "Empresas",
    "Planos de Descarbonização",
    "Comunidades",
    "Dados de Carbono",
    "Certificação ESG",
    "Smart Favela",
  ];

  const projects = [
    {
      name: "Horta Comunitária Urbana",
      location: "São Paulo, SP",
      type: "Segurança alimentar e regeneração local",
      impact: "Impacto comunitário, educação climática e ativação territorial.",
      color: "border-[#2F80ED]",
    },
    {
      name: "Energia Solar em Equipamentos Comunitários",
      location: "Heliópolis, SP",
      type: "Energia limpa e eficiência",
      impact: "Redução de emissões com benefício social tangível.",
      color: "border-[#EB5757]",
    },
    {
      name: "Capacitação Profissional Verde",
      location: "Grande São Paulo",
      type: "Inclusão produtiva",
      impact: "Empregabilidade e formação para a transição climática.",
      color: "border-[#F2C94C]",
    },
  ];

  const companyFlow = [
    "Cadastro",
    "Acesso",
    "Viabilidade de Projetos para Descarbonização",
    "Escolha",
    "Interesse",
    "Conexão",
  ];

  const projectFlow = [
    "Cadastro",
    "Avaliação",
    "Aprovação",
    "Entrada na Plataforma",
    "Conexão",
  ];

  const roadmap = [
    {
      phase: "Curto prazo",
      text: "Refazer posicionamento, criar site, Instagram e LinkedIn, estruturar formulários e organizar a comunicação para empresas e comunidades.",
      color: "border-[#2F80ED]",
    },
    {
      phase: "Médio prazo",
      text: "Criar o MVP da plataforma, validar o dashboard, desenvolver parcerias estratégicas e fechar o primeiro projeto.",
      color: "border-[#EB5757]",
    },
    {
      phase: "Longo prazo",
      text: "Escalar a operação, ampliar a rede de projetos e aumentar o volume de conexões entre empresas, territórios e ativos de carbono.",
      color: "border-[#F2C94C]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black p-2">
              <img
                src="/smart-favela-logo.png"
                alt="Logo Smart Favela"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-wide md:text-2xl">
                SMART FAVELA <span className="align-top text-xs">®</span>
              </div>
              <div className="text-sm text-white/60">smartfavela.com</div>
            </div>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            <a href="#o-que-fazemos" className="text-sm text-white/75 transition hover:text-white">
              O que fazemos
            </a>
            <a href="#como-funciona" className="text-sm text-white/75 transition hover:text-white">
              Como funciona
            </a>
            <a href="#projetos" className="text-sm text-white/75 transition hover:text-white">
              Projetos
            </a>
            <a href="#plataforma" className="text-sm text-white/75 transition hover:text-white">
              Plataforma
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-[#2F80ED]/40 bg-[#2F80ED]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
              Conexão comunidade, negócios e impacto social
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] md:text-7xl">
              A Smart Favela conecta empresas que precisam compensar carbono com projetos sociais que precisam de investimento.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Estruturamos a relação de ponta a ponta: identificamos projetos, entendemos a necessidade, calculamos impacto, conectamos com a empresa e acompanhamos a execução.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#empresas" className="rounded-2xl bg-[#2F80ED] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5">
                Quero compensar carbono
              </a>
              <a href="#projetos-entrada" className="rounded-2xl border border-[#F2C94C] bg-[#F2C94C]/10 px-6 py-3 font-medium text-white transition hover:bg-[#F2C94C]/20">
                Quero cadastrar um projeto
              </a>
              <a href={inventoryLink} className="rounded-2xl border border-[#EB5757] bg-[#EB5757]/10 px-6 py-3 font-medium text-white transition hover:bg-[#EB5757]/20">
                Empresas de inventário GEE
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border-4 border-white bg-black p-6 shadow-[0_0_0_8px_rgba(47,128,237,0.12)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Ecossistema estratégico
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {ecosystem.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl border-2 p-4 text-sm font-medium ${
                      index === 0
                        ? "border-[#7FCF6B] bg-[#7FCF6B]/10"
                        : index === 1
                        ? "border-[#F2994A] bg-[#F2994A]/10"
                        : index === 2
                        ? "border-[#F2C94C] bg-[#F2C94C]/10"
                        : index === 3
                        ? "border-[#56CCF2] bg-[#56CCF2]/10"
                        : index === 4
                        ? "border-[#BB6BD9] bg-[#BB6BD9]/10"
                        : "border-[#2F80ED] bg-[#2F80ED]/10"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="o-que-fazemos" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">O que fazemos</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              A Smart Favela atua dentro do mercado de carbono com uma abordagem diferente do padrão. Em vez de trabalhar apenas com compensações abstratas, direciona o investimento para projetos reais dentro de áreas urbanas.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Isso permite que a compensação seja rastreável, gere impacto direto e funcione como ativo estratégico para as empresas.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border-2 border-[#2F80ED] bg-[#2F80ED]/10 p-6">
              <h3 className="text-xl font-semibold">Para empresas</h3>
              <p className="mt-3 text-white/75">
                Permite acessar projetos, entender impacto e escolher onde investir.
              </p>
            </div>
            <div className="rounded-[1.75rem] border-2 border-[#F2C94C] bg-[#F2C94C]/10 p-6">
              <h3 className="text-xl font-semibold">Para projetos</h3>
              <p className="mt-3 text-white/75">
                Permite cadastrar iniciativas, estruturar melhor a proposta e acessar capital.
              </p>
            </div>
            <div className="rounded-[1.75rem] border-2 border-[#EB5757] bg-[#EB5757]/10 p-6">
              <h3 className="text-xl font-semibold">Nosso papel</h3>
              <p className="mt-3 text-white/75">
                Organizar o projeto, calcular impacto, fazer a conexão e acompanhar a execução.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[#0c0c0c] p-8 md:p-10">
          <h2 className="text-3xl font-semibold md:text-5xl">O problema</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border-2 border-[#2F80ED] bg-[#2F80ED]/10 p-6">
              <h3 className="text-xl font-semibold">Empresas</h3>
              <p className="mt-3 text-white/75">
                Precisam compensar carbono, gerar ESG real e atender exigências, mas não sabem como executar.
              </p>
            </div>
            <div className="rounded-[1.75rem] border-2 border-[#F2C94C] bg-[#F2C94C]/10 p-6">
              <h3 className="text-xl font-semibold">Comunidades</h3>
              <p className="mt-3 text-white/75">
                Possuem projetos reais, mas não têm acesso a capital nem conexão com grandes empresas.
              </p>
            </div>
            <div className="rounded-[1.75rem] border-2 border-[#EB5757] bg-[#EB5757]/10 p-6">
              <h3 className="text-xl font-semibold">Mercado atual</h3>
              <p className="mt-3 text-white/75">
                É fragmentado, pouco conectado e focado em soluções pouco tangíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">Como funciona</h2>
            <p className="mt-5 text-white/72">
              Hoje essa operação acontece manualmente. O próximo passo é transformar isso em uma plataforma com dashboard.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">Fluxo da empresa</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {companyFlow.map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      index % 3 === 0
                        ? "border-[#2F80ED] bg-[#2F80ED]/10"
                        : index % 3 === 1
                        ? "border-[#EB5757] bg-[#EB5757]/10"
                        : "border-[#F2C94C] bg-[#F2C94C]/10"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mt-14 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 lg:mt-16">
              <div className="text-lg font-semibold">Fluxo do projeto</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {projectFlow.map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      index % 3 === 0
                        ? "border-[#F2C94C] bg-[#F2C94C]/10"
                        : index % 3 === 1
                        ? "border-[#2F80ED] bg-[#2F80ED]/10"
                        : "border-[#EB5757] bg-[#EB5757]/10"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">Automação e parceiros</div>
              <ul className="mt-4 space-y-2 text-white/72">
                <li>• email automático após cadastro</li>
                <li>• validação manual dos projetos</li>
                <li>• acompanhamento via dashboard</li>
                <li>• certificadoras ESG</li>
                <li>• empresas de inventário de carbono</li>
                <li>• organizações sociais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">Projetos</h2>
            <p className="mt-4 max-w-2xl text-white/72">
              Lista de projetos com nome, local, tipo e impacto, como previsto na estrutura do site.
            </p>
          </div>
          <a href="#projetos-entrada" className="rounded-2xl border border-[#F2C94C] bg-[#F2C94C]/10 px-5 py-3 font-medium text-white">
            Cadastrar projeto
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className={`rounded-[1.75rem] border-2 bg-white/5 p-6 ${project.color}`}>
              <div className="h-44 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,#111_0%,#1a1a1a_100%)]" />
              <div className="mt-5 text-sm text-white/55">{project.location}</div>
              <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
              <div className="mt-3 text-sm font-medium text-white/75">{project.type}</div>
              <p className="mt-4 leading-7 text-white/72">{project.impact}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plataforma" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">Plataforma</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              O site precisa ter entrada separada para empresas e projetos, com login distinto e visualização clara do ecossistema.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a id="empresas" href={whatsappLink} className="rounded-2xl bg-[#2F80ED] px-6 py-3 font-medium text-white">
                Área para empresas
              </a>
              <a id="projetos-entrada" href="#formulario" className="rounded-2xl border border-[#F2C94C] bg-[#F2C94C]/10 px-6 py-3 font-medium text-white">
                Área para projetos
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#f3f1eb] p-6 text-black shadow-2xl">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">Projetos</div>
                <div className="mt-3 h-16 rounded-xl bg-stone-100" />
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">Indicadores</div>
                <div className="mt-3 h-16 rounded-xl bg-stone-100" />
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">Acompanhamento</div>
                <div className="mt-3 h-16 rounded-xl bg-stone-100" />
              </div>
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-white p-5 shadow-sm">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-stone-500">
                Plataforma de gestão e rastreabilidade
              </div>
              <div className="h-48 rounded-[1.25rem] bg-stone-100" />
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border-2 border-[#F2C94C] bg-[#F2C94C]/10 p-6 md:p-10">
          <h2 className="text-3xl font-semibold md:text-5xl">Formulários e próximos passos</h2>
          ...//<p className="mt-4 max-w-3xl text-white/75">
            Para manter o site mais limpo, objetivo e profissional, os formulários ficam em links separados. Assim, cada público entra pela porta certa e segue uma jornada mais clara de conversão.
          </p>//...

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border-2 border-[#2F80ED] bg-black/40 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F80ED]">
                Entrada para empresas
              </div>
              <h3 className="mt-3 text-2xl font-semibold">Quero compensar carbono</h3>
              <p className="mt-4 leading-7 text-white/72">
                Ideal para empresas que desejam estruturar ESG, discutir compensação de carbono, avaliar ativos ambientais ou evoluir a partir do inventário de GEE.
              </p>
              <a
                href={companyFormLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-[#2F80ED] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
              >
                Abrir formulário para empresas
              </a>
            </div>

            <div className="rounded-[1.75rem] border-2 border-[#EB5757] bg-black/40 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EB5757]">
                Entrada para projetos
              </div>
              <h3 className="mt-3 text-2xl font-semibold">Quero cadastrar um projeto</h3>
              <p className="mt-4 leading-7 text-white/72">
                Ideal para coletivos, territórios, lideranças e organizações que têm iniciativas reais e desejam apresentar projetos para conexão com empresas e parceiros.
              </p>
              <a
                href={projectFormLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-[#EB5757] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
              >
                Abrir formulário para projetos
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-white/65">
            A Plataforma que oferece créditos de carbono, marketing reputacional e ativos econômicos </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-3xl font-semibold">
                SMART FAVELA <span className="align-top text-sm">®</span>
              </div>
              <div className="mt-2 text-white/60">smartfavela.com • rosangela@smartfavelalab.com</div>
            </div>
            <a href={whatsappLink} className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              Falar no WhatsApp
            </a>
            <a
  href={linkedinLink}
  target="_blank"
  rel="noreferrer"
  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10"
>
  LinkedIn
</a>
          </div>
          

          <div className="mt-12">
            <h3 className="text-2xl font-semibold md:text-4xl">Mapa do site</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-white/75">
              <div>
                <div className="font-semibold text-white">Início</div>
                <ul className="mt-3 space-y-2">
                  <li>• Hero / Apresentação</li>
                  <li>• Ecossistema estratégico</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-white">O que fazemos</div>
                <ul className="mt-3 space-y-2">
                  <li>• Para empresas</li>
                  <li>• Para projetos</li>
                  <li>• Papel da Smart Favela</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-white">Como funciona</div>
                <ul className="mt-3 space-y-2">
                  <li>• Fluxo da empresa</li>
                  <li>• Fluxo do projeto</li>
                  <li>• Automação e parceiros</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-white">Plataforma</div>
                <ul className="mt-3 space-y-2">
                  <li>• Área para empresas</li>
                  <li>• Área para projetos</li>
                  <li>• Formulários</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-sm text-white/50">
              Produzido por Rose Lambiase Design
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
