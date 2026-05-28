import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#sobre',      label: 'Sobre',           section: 'sobre' },
  { href: '#servicos',   label: 'Serviços',         section: 'servicos' },
  { href: '#processo',   label: 'Como Trabalhamos', section: 'processo' },
  { href: '#portfolio',  label: 'Portfólio',        section: 'portfolio' },
  { href: '#depoimentos',label: 'Depoimentos',      section: 'depoimentos' },
  { href: '#contato',    label: 'Contato',          section: 'contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4)

      const fromTop = window.scrollY + 140
      let current = ''
      NAV_LINKS.forEach(({ section }) => {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= fromTop) current = section
      })
      setActive(current)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="nav"
      className={`sticky top-0 z-50 bg-white border-b border-transparent transition-shadow duration-200 ${scrolled ? 'shadow-[0_6px_22px_rgba(17,17,17,.06)]' : ''}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 h-[78px] flex items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-2 font-bold tracking-[0.01em]">
          <span className="text-blue-ph font-extrabold text-2xl tracking-[-0.01em]">PH</span>
          <span className="text-ink font-medium text-[13px] tracking-[0.22em] uppercase">Construtora</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex gap-8" id="nav-links">
          {NAV_LINKS.map(({ href, label, section }) => (
            <a
              key={section}
              href={href}
              className={`text-[14px] font-medium text-ink relative py-2 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0.5 after:h-px after:bg-blue-ph after:transition-transform after:duration-250 after:origin-left hover:text-blue-ph ${active === section ? 'text-blue-ph after:scale-x-100 after:!h-0.5' : 'after:scale-x-0'}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 bg-blue-ph hover:bg-blue-dark text-white font-semibold text-[14px] px-[26px] py-4 rounded-[4px] transition-colors duration-200"
        >
          Solicitar Orçamento
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer"
          aria-label="Menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="w-[22px] h-0.5 bg-ink block" />
          <span className="w-[22px] h-0.5 bg-ink block" />
          <span className="w-[22px] h-0.5 bg-ink block" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-line px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label, section }) => (
            <a
              key={section}
              href={href}
              className="text-[15px] font-medium text-ink py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex items-center justify-center bg-blue-ph text-white font-semibold text-[14px] px-6 py-3 rounded-[4px] mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
