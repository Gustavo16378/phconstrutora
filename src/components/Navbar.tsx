import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useScrollDirection } from '../hooks/useScrollDirection'
import logo from '../assets/logo.jpeg'

const NAV_LINKS = [
  { href: '#sobre',       label: 'Sobre',           section: 'sobre' },
  { href: '#servicos',    label: 'Serviços',         section: 'servicos' },
  { href: '#processo',    label: 'Como Trabalhamos', section: 'processo' },
  { href: '#portfolio',   label: 'Portfólio',        section: 'portfolio' },
  { href: '#depoimentos', label: 'Depoimentos',      section: 'depoimentos' },
  { href: '#contato',     label: 'Contato',          section: 'contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const savedScrollY = useRef(0)

  /* ── scroll spy + opacity trigger ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const fromTop = window.scrollY + 140
      let current = ''
      NAV_LINKS.forEach(({ section }) => {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= fromTop) current = section
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── scroll lock (iOS-safe) ── */
  useEffect(() => {
    if (menuOpen) {
      savedScrollY.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollY.current}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, savedScrollY.current)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [menuOpen])

  /* ── ESC to close ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setMenuOpen(false)

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'transform 0.3s ease, background 0.25s ease, box-shadow 0.25s ease',
    transform: scrollDirection === 'down' && window.scrollY > 80 ? 'translateY(-100%)' : 'translateY(0)',
    background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 6px 22px rgba(17,17,17,.08)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(230,233,238,0.6)' : '1px solid transparent',
  }

  /* ── portal: overlay + drawer ── */
  const portal = ReactDOM.createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          background: 'rgba(13,13,13,0.55)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: '280px',
          maxWidth: '85vw',
          background: '#0D0D0D',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <a href="#top" onClick={close} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="PH Construtora" style={{ height: '48px', width: 'auto', display: 'block', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
          <button
            onClick={close}
            aria-label="Fechar menu"
            style={{
              width: '40px', height: '40px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '4px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', lineHeight: 1,
              fontFamily: 'inherit',
            }}
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {NAV_LINKS.map(({ href, label, section }) => (
            <a
              key={section}
              href={href}
              onClick={close}
              style={{
                display: 'block',
                padding: '14px 24px',
                color: active === section ? '#1565C0' : 'rgba(255,255,255,0.85)',
                fontWeight: active === section ? 600 : 500,
                fontSize: '16px',
                textDecoration: 'none',
                borderLeft: active === section ? '3px solid #1565C0' : '3px solid transparent',
                background: active === section ? 'rgba(21,101,192,0.08)' : 'transparent',
                transition: 'color 0.2s, background 0.2s',
                fontFamily: 'inherit',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <a
            href="#contato"
            onClick={close}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#1565C0',
              color: '#fff',
              fontWeight: 600,
              fontSize: '14px',
              padding: '14px 24px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'inherit',
            }}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </>,
    document.body,
  )

  return (
    <>
      <header style={navStyle} id="nav">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>

          {/* Logo */}
          <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src={logo} alt="PH Construtora" style={{ height: '56px', width: 'auto', display: 'block', objectFit: 'contain' }} />
          </a>

          {/* Desktop nav (centered) */}
          <nav style={{ display: 'none', gap: '32px', flex: 1, justifyContent: 'center' }} className="desktop-nav">
            {NAV_LINKS.map(({ href, label, section }) => (
              <a
                key={section}
                href={href}
                className={`nav-link${active === section ? ' nav-link--active' : ''}`}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: active === section ? '#1565C0' : '#111',
                  textDecoration: 'none',
                  padding: '8px 0',
                  position: 'relative',
                  fontFamily: 'inherit',
                }}
              >
                {label}
                <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: '2px',
                  height: active === section ? '2px' : '1px',
                  background: '#1565C0',
                  transform: active === section ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.25s ease',
                  display: 'block',
                }} />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contato"
            className="desktop-cta"
            style={{
              display: 'none',
              alignItems: 'center',
              background: '#1565C0',
              color: '#fff',
              fontWeight: 600,
              fontSize: '14px',
              padding: '12px 22px',
              borderRadius: '4px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              fontFamily: 'inherit',
            }}
          >
            Solicitar Orçamento
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              width: '40px', height: '40px',
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <span style={{ width: '22px', height: '2px', background: scrolled ? '#111' : '#111', display: 'block', borderRadius: '1px' }} />
            <span style={{ width: '22px', height: '2px', background: scrolled ? '#111' : '#111', display: 'block', borderRadius: '1px' }} />
            <span style={{ width: '22px', height: '2px', background: scrolled ? '#111' : '#111', display: 'block', borderRadius: '1px' }} />
          </button>
        </div>
      </header>

      {/* Spacer so content doesn't go under the fixed nav */}
      <div style={{ height: '72px' }} aria-hidden="true" />

      {/* Portal: overlay + drawer (outside nav stacking context) */}
      {portal}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .hamburger   { display: none !important; }
        }
      `}</style>
    </>
  )
}
