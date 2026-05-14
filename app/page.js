export default function SmartFavelaSite() {
  const whatsappLink =
    "https://wa.me/5511940842049?text=Olá,%20tenho%20interesse%20em%20compensação%20de%20carbono%20com%20impacto%20real%20pela%20Smart%20Favela.";

  const inventoryLink =
    "mailto:rosangela@smartfavelalab.com?subject=Inventário%20de%20GEE%20e%20estratégia%20climática&body=Olá,%20quero%20entender%20como%20a%20Smart%20Favela%20pode%20apoiar%20nossa%20empresa.";

  const companyFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5gVrIXly4JvUlvbgq12jJughS3tGxhliysofbfZtgtCo5ww/viewform";

  const projectFormLink =
    "https://docs.google.com/forms/d/1uWVOZIX3dial4nL6EEoF__dp0ie0sjgeCRW3QaeXJ1A/viewform";

  const linkedinLink = "https://www.linkedin.com/company/smartfavelalab/";

  const ecosystem = [
    {
      title: "Empresas",
      description: "Demandas ESG, inventários de GEE, metas climáticas e compensação de carbono.",
      color: "border-[#7FCF6B] bg-[#7FCF6B]/10",
    },
    {
      title: "Descarbonização",
      description: "Planos, projetos e caminhos para reduzir emissões com lastro real.",
      color: "border-[#F2994A] bg-[#F2994A]/10",
    },
    {
      title: "Territórios",
      description: "Comunidades urbanas com iniciativas reais de impacto ambiental e cogeração de energia.",
      color: "border-[#F2C94C] bg-[#F2C94C]/10",
    },
    {
      title: "Dados de carbono",
      description: "Indicadores, rastreabilidade, monitoramento ",
      color: "border-[#56CCF2] bg-[#56CCF2]/10",
    },
    {
      title: "Governança ESG",
      description: "Critérios, validação, transparência, parceiros e prestação de contas.",
      color: "border-[#BB6BD9] bg-[#BB6BD9]/10",
    },
    {
      title: "Smart Favela",
      description: "Curadoria, conexão, estruturação e acompanhamento entre empresas e projetos.",
      color: "border-[#2F80ED] bg-[#2F80ED]/10",
    },
  ];

  const projects = [
    {
      name: "Horta Comunitária Urbana",
      location: "São Paulo, SP",
      type: "Fome Zero e Agricultura Sustentável",
      impact: "Impacto ambiental, educação climática e ativação territorial.",
      color: "border-[#2F80ED]",
    },
    {
      name: "Cogeração de Energia",
      location: "Heliópolis, SP",
      type: "Energia limpa e eficiência",
      impact: "Redução de emissões com impacto ambiental tangível.",
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
    "Viabilidade de projetos para descarbonização",
    "Escolha",
    "Interesse",
    "Conexão",
  ];

  const projectFlow = [
    "Cadastro",
    "Avaliação",
    "Aprovação",
    "Entrada na plataforma",
    "Conexão",
  ];

  const strategicQuestions = [
    "Quando a sua empresa fala de compensação de carbono, como está fazendo isso?",
    "Quem são os seus parceiros quando o assunto é mercado de carbono?",
    "O que está bom para a sua empresa?",
    "O que está faltando?",
    "O que te motiva a compensar?",
  ];

  const buttonBase =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

  const navLink =
    "rounded-full px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F2C94C]";

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-5">
            <img
              src="/smart-favela-logo.png"
              alt="Logo Smart Favela"
              className="h-24 w-auto shrink-0 object-contain md:h-40"
            />
            <div>
              <div className="text-2xl font-semibold tracking-wide md:text-4xl">
                SMART FAVELA <span className="align-top text-sm">®</span>
              </div>
              <div className="mt-1 text-sm text-white/60 md:text-base">smartfavela.com.br</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 md:justify-end">
            <a href="#o-que-fazemos" className={navLink}>O que fazemos</a>
            <a href="#como-funciona" className={navLink}>Como funciona</a>
            <a href="#projetos" className={navLink}>Projetos</a>
            <a href="#plataforma" className={navLink}>Plataforma</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#2F80ED]/40 bg-[#2F80ED]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#56CCF2]">
                Conexão urbana, negócios de impacto ambiental
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] md:text-7xl">
                 Compensação de carbono em projetos de cogeração de energia, dados rastreáveis, auditáveis e impacto ambiental em áreas urbanas.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                A Smart Favela conecta empresas que precisam compensar carbono com projetos ambientais que precisam de investimento, estruturando a relação de ponta a ponta: diagnóstico, curadoria, conexão e acompanhamento.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={companyFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} bg-[#2F80ED] text-white hover:bg-[#56A3FF] focus:ring-[#2F80ED]`}>
                  Quero compensar carbono
                </a>
                <a href={projectFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} bg-[#F2C94C] text-black hover:bg-[#FFE17A] focus:ring-[#F2C94C]`}>
                  Quero cadastrar um projeto
                </a>
                <a href={inventoryLink} className={`${buttonBase} border border-[#EB5757] bg-[#EB5757]/10 text-white hover:bg-[#EB5757] focus:ring-[#EB5757]`}>
                  Empresas de inventário GEE
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border-4 border-white bg-black p-6 shadow-[0_0_0_8px_rgba(47,128,237,0.12)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                  Ecossistema estratégico
                </div>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Uma rede organizada entre demanda corporativa, projetos ambientais, dados, governança e territórios.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {ecosystem.map((item) => (
                    <article key={item.title} className={`cursor-default select-none rounded-2xl border-2 p-4 ${item.color}`}>
                      <h3 className="text-base font-semibold leading-snug text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="o-que-fazemos" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">O que fazemos</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                A Smart Favela atua na execução de projetos ambientais dentro de áreas urbanas.
              </p>
              <p className="mt-4 text-lg leading-8 text-white/72">
                Isso permite que a compensação seja mmensurável, rastreável e conectada a uma narrativa ESG mais forte para empresas.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="cursor-default rounded-[1.75rem] border-2 border-[#2F80ED] bg-[#2F80ED]/10 p-6">
                <h3 className="text-xl font-semibold">Para empresas</h3>
                <p className="mt-3 text-white/75">
                  Cogeração de Energia, Impacto Ambiental e Mercado de Carbono.
                </p>
              </div>
              <div className="cursor-default rounded-[1.75rem] border-2 border-[#F2C94C] bg-[#F2C94C]/10 p-6">
                <h3 className="text-xl font-semibold">Para projetos</h3>
                <p className="mt-3 text-white/75">
                  Cadastro de iniciativas, organização da proposta, visibilidade e conexão com capital, parceiros técnicos e empresas.
                </p>
              </div>
              <div className="cursor-default rounded-[1.75rem] border-2 border-[#EB5757] bg-[#EB5757]/10 p-6">
                <h3 className="text-xl font-semibold">Papel da Smart Favela</h3>
                <p className="mt-3 text-white/75">
                  Curadoria, estruturação, cálculo de impacto ambiental, conexão entre as partes e acompanhamento da execução.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[#0c0c0c] p-8 md:p-10">
            <h2 className="text-3xl font-semibold md:text-5xl">O problema</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="cursor-default rounded-[1.75rem] border-2 border-[#2F80ED] bg-[#2F80ED]/10 p-6">
                <h3 className="text-xl font-semibold">Empresas</h3>
                <p className="mt-3 text-white/75">
                  Precisam compensar carbono, gerar ESG real e atender exigências climáticas, mas muitas vezes não sabem como executar isso com lastro e impacto mensurável.
                </p>
              </div>
              <div className="cursor-default rounded-[1.75rem] border-2 border-[#F2C94C] bg-[#F2C94C]/10 p-6">
                <h3 className="text-xl font-semibold">Comunidades</h3>
                <p className="mt-3 text-white/75">
                  Possuem projetos reais, mas enfrentam barreiras de capital, estruturação, visibilidade e conexão com grandes empresas.
                </p>
              </div>
              <div className="cursor-default rounded-[1.75rem] border-2 border-[#EB5757] bg-[#EB5757]/10 p-6">
                <h3 className="text-xl font-semibold">Mercado atual</h3>
                <p className="mt-3 text-white/75">
                  É fragmentado, pouco conectado e frequentemente focado em soluções difíceis de verificar pelo público final.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[#0c0c0c] p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-[#F2C94C]/40 bg-[#F2C94C]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">
                Diagnóstico estratégico para empresas
              </div>
              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                Antes de compensar carbono, sua empresa precisa responder às perguntas certas.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                A Smart Favela ajuda empresas a transformar questões climáticas em decisão estruturada, com parceiros, projetos, indicadores e impacto rastreável.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {strategicQuestions.map((question, index) => (
                <article key={question} className={`cursor-default rounded-[1.75rem] border-2 bg-white/5 p-6 ${index === 0 ? "border-[#2F80ED]" : index === 1 ? "border-[#EB5757]" : index === 2 ? "border-[#F2C94C]" : index === 3 ? "border-[#56CCF2]" : "border-[#BB6BD9] md:col-span-2"}`}>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Pergunta {index + 1}</div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">{question}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">Como funciona</h2>
              <p className="mt-5 text-white/72">
                A jornada foi desenhada para reduzir dúvidas: empresas entram por compensação e descarbonização; projetos entram por cadastro e avaliação.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-semibold">Fluxo da empresa</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {companyFlow.map((item, index) => (
                    <span key={item} className={`cursor-default rounded-full border px-4 py-2 text-sm ${index % 3 === 0 ? "border-[#2F80ED] bg-[#2F80ED]/10" : index % 3 === 1 ? "border-[#EB5757] bg-[#EB5757]/10" : "border-[#F2C94C] bg-[#F2C94C]/10"}`}>
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
                    <span key={item} className={`cursor-default rounded-full border px-4 py-2 text-sm ${index % 3 === 0 ? "border-[#F2C94C] bg-[#F2C94C]/10" : index % 3 === 1 ? "border-[#2F80ED] bg-[#2F80ED]/10" : "border-[#EB5757] bg-[#EB5757]/10"}`}>
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
                  <li>• projetos de geração de energia</li>
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
                Projetos cadastrados ou mapeados organizados por nome, território, tipo de impacto e potencial de contribuição para descarbonização urbana.
              </p>
            </div>
            <a href={projectFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} border border-[#F2C94C] bg-[#F2C94C]/10 text-white hover:bg-[#F2C94C] hover:text-black focus:ring-[#F2C94C]`}>
              Cadastrar projeto
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className={`cursor-default rounded-[1.75rem] border-2 bg-white/5 p-6 ${project.color}`}>
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
                A plataforma tem entradas separadas para empresas e projetos, com navegação clara, rótulos objetivos, acompanhamento de status e visualização do ecossistema.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a id="empresas" href={companyFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} bg-[#2F80ED] text-white hover:bg-[#56A3FF] focus:ring-[#2F80ED]`}>
                  Área para empresas
                </a>
                <a id="projetos-entrada" href={projectFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} border border-[#F2C94C] bg-[#F2C94C]/10 text-white hover:bg-[#F2C94C] hover:text-black focus:ring-[#F2C94C]`}>
                  Área para projetos
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#f3f1eb] p-6 text-black shadow-2xl">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm"><div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">Projetos</div><div className="mt-3 h-16 rounded-xl bg-stone-100" /></div>
                <div className="rounded-2xl bg-white p-5 shadow-sm"><div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">Indicadores</div><div className="mt-3 h-16 rounded-xl bg-stone-100" /></div>
                <div className="rounded-2xl bg-white p-5 shadow-sm"><div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">Status</div><div className="mt-3 h-16 rounded-xl bg-stone-100" /></div>
              </div>
              <div className="mt-4 rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-stone-500">Plataforma de gestão e rastreabilidade</div>
                <div className="h-48 rounded-[1.25rem] bg-stone-100" />
              </div>
            </div>
          </div>
        </section>

        <section id="formulario" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border-2 border-[#F2C94C] bg-[#F2C94C]/10 p-6 md:p-10">
            <h2 className="text-3xl font-semibold md:text-5xl">Formulários e próximos passos</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border-2 border-[#2F80ED] bg-black/40 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F80ED]">Entrada para empresas</div>
                <h3 className="mt-3 text-2xl font-semibold">Quero compensar carbono</h3>
                <p className="mt-4 leading-7 text-white/72">Ideal para empresas que desejam estruturar ESG, discutir compensação de carbono, avaliar ativos ambientais ou evoluir a partir do inventário de GEE.</p>
                <a href={companyFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} mt-6 bg-[#2F80ED] text-white hover:bg-[#56A3FF] focus:ring-[#2F80ED]`}>Abrir formulário para empresas</a>
              </div>

              <div className="rounded-[1.75rem] border-2 border-[#EB5757] bg-black/40 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EB5757]">Entrada para projetos</div>
                <h3 className="mt-3 text-2xl font-semibold">Quero cadastrar um projeto</h3>
                <p className="mt-4 leading-7 text-white/72">Ideal para coletivos, startups, territórios, lideranças e organizações que têm iniciativas reais e desejam apresentar projetos para conexão com empresas e parceiros.</p>
                <a href={projectFormLink} target="_blank" rel="noreferrer" className={`${buttonBase} mt-6 bg-[#EB5757] text-white hover:bg-[#FF7A7A] focus:ring-[#EB5757]`}>Abrir formulário para projetos</a>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-white/65">
              A plataforma conecta projetos de impacto ambiental de cogeração de energia a empresas que precisam compensar carbono.
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-3xl font-semibold">SMART FAVELA <span className="align-top text-sm">®</span></div>
              <div className="mt-2 text-white/60">smartfavela.com.br • rosangela@smartfavelalab.com</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={whatsappLink} className={`${buttonBase} border border-white/15 text-white hover:bg-white hover:text-black focus:ring-white`}>Falar no WhatsApp</a>
              <a href={linkedinLink} target="_blank" rel="noreferrer" className={`${buttonBase} border border-white/15 text-white hover:bg-[#2F80ED] focus:ring-[#2F80ED]`}>LinkedIn</a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold md:text-4xl">Mapa do site</h3>
            <div className="mt-8 grid gap-6 text-white/75 md:grid-cols-2 lg:grid-cols-4">
              <div><div className="font-semibold text-white">Início</div><ul className="mt-3 space-y-2"><li>• Hero / Apresentação</li><li>• Ecossistema estratégico</li></ul></div>
              <div><div className="font-semibold text-white">O que fazemos</div><ul className="mt-3 space-y-2"><li>• Para empresas</li><li>• Para projetos</li><li>• Papel da Smart Favela</li></ul></div>
              <div><div className="font-semibold text-white">Como funciona</div><ul className="mt-3 space-y-2"><li>• Fluxo da empresa</li><li>• Fluxo do projeto</li><li>• Automação e parceiros</li></ul></div>
              <div><div className="font-semibold text-white">Plataforma</div><ul className="mt-3 space-y-2"><li>• Área para empresas</li><li>• Área para projetos</li><li>• Formulários</li></ul></div>
            </div>

            <div className="mt-10 text-sm text-white/50">Produzido por Rose Lambiase Design</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
