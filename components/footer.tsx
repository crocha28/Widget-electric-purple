const usefulLinks = [
  "Página inicial",
  "O que é o IQOS?",
  "IQOS App",
  "Loja Online",
  "Mapa de lojas",
  "Aceda a PMI.com",
];

const helpLinks = [
  "Obter ajuda",
  "Perguntas Frequentes",
  "Garantia",
  "Contactos",
  "Diagnóstico Online",
];

const legalLinks = [
  "Política de privacidade",
  "Termos e condições",
  "Condições de Venda",
  "Política de cookies",
  "Livro reclamações eletrónico",
  "Resolução de litígios online",
  "Preferência de cookies",
  "Declaração de Acessibilidade",
  "Regulamento de dados",
];

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-off-white w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 flex flex-col gap-16 lg:gap-[120px]">
        {/* Link columns */}
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-[120px]">
          {/* Links Úteis */}
          <div className="flex flex-col gap-10">
            <span className="text-sm text-off-white/50">Links Úteis</span>
            <div className="flex flex-col gap-5">
              {usefulLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-lg text-off-white hover:text-white/80 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Ajuda */}
          <div className="flex flex-col gap-10">
            <span className="text-sm text-off-white/50">Ajuda</span>
            <div className="flex flex-col gap-5">
              {helpLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-lg text-off-white hover:text-white/80 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-[#c2bfc2] tracking-wide">
            Aceitamos
          </span>
          <div className="flex items-center gap-3 ml-3">
            {["VISA", "MC", "MB", "MBWay"].map((brand) => (
              <div
                key={brand}
                className="h-[27px] px-3 bg-white/10 rounded-sm flex items-center justify-center"
              >
                <span className="text-[10px] text-off-white/70 font-bold tracking-wider">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Legal footer */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <span className="text-xs text-off-white/50 whitespace-nowrap shrink-0">
            &copy; 2026 Philip Morris Products SA. Todos os direitos reservados.
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-off-white/50 hover:text-off-white/80 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
