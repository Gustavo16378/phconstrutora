const NAV_LINKS = [
  { href: '#sobre',      label: 'Sobre' },
  { href: '#servicos',   label: 'Serviços' },
  { href: '#processo',   label: 'Como Trabalhamos' },
  { href: '#portfolio',  label: 'Portfólio' },
  { href: '#depoimentos',label: 'Depoimentos' },
  { href: '#contato',    label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-footer text-white/[.7] pt-20 pb-8 border-t-2 border-gold">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-16 pb-14 border-b border-white/[.08]">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2 font-bold tracking-[0.01em]">
              <span className="text-white font-extrabold text-2xl tracking-[-0.01em]">PH</span>
              <span className="text-white/[.7] font-medium text-[13px] tracking-[0.22em] uppercase">Construtora</span>
            </div>
            <p className="mt-5 text-[14px] max-w-[320px] leading-[1.7]">
              Construção da base ao acabamento. Solidez, qualidade e prazo cumprido em Palmas – TO desde 2018.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-[12px] tracking-[0.22em] uppercase font-semibold mb-[22px]">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-[14px] hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[12px] tracking-[0.22em] uppercase font-semibold mb-[22px]">Contato</h4>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li><a href="tel:+5563981045578" className="hover:text-white transition-colors duration-200">(63) 98104-5578</a></li>
              <li>
                <a
                  href="https://wa.me/5563981045578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>Palmas – Tocantins</li>
              <li>Seg–Sex · 08h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[12px] text-white/[.5] tracking-[0.04em]">
          <span>© 2025 PH Construtora. Todos os direitos reservados.</span>
          <span>Construímos com solidez. Entregamos com qualidade.</span>
        </div>
      </div>
    </footer>
  )
}
