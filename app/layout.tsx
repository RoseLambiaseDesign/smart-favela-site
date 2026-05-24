export const metadata = {
  title:
    "Smart Favela | Descarbonização Urbana e Créditos de Carbono",

  description:
    "A Smart Favela conecta empresas a projetos reais de impacto ambiental, descarbonização urbana, cogeração de energia e ativos climáticos rastreáveis.",

  keywords: [
    "mercado de carbono",
    "créditos de carbono",
    "descarbonização",
    "ESG",
    "sustentabilidade",
    "energia urbana",
    "smart favela",
    "compensação de carbono",
  ],

  openGraph: {
    title:
      "Smart Favela | Plataforma de Descarbonização Urbana",

    description:
      "Conectamos empresas a projetos reais de impacto ambiental e ativos climáticos rastreáveis.",

    url: "https://www.smartfavela.com.br",

    siteName: "Smart Favela",

    locale: "pt_BR",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}