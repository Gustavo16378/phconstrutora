import { useEffect } from 'react'
import { X, Check } from 'lucide-react'
import { PROJECTS } from '../data/projects'
import { ArrowRight } from 'lucide-react'

interface Props {
  projectKey: string | null
  onClose: () => void
}

export default function PortfolioModal({ projectKey, onClose }: Props) {
  const project = projectKey ? PROJECTS[projectKey] : null
  const isOpen = Boolean(project)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('is-locked')
    } else {
      document.body.classList.remove('is-locked')
    }
    return () => document.body.classList.remove('is-locked')
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Scroll panel to top when project changes
  useEffect(() => {
    if (isOpen) {
      const panel = document.getElementById('modal-panel')
      if (panel) panel.scrollTop = 0
    }
  }, [projectKey, isOpen])

  return (
    <div
      className={`fixed inset-0 z-[200] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[rgba(13,13,13,.72)] backdrop-blur-[6px] transition-opacity duration-[350ms] ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        id="modal-panel"
        className={`absolute right-0 top-0 bottom-0 w-full max-w-[980px] bg-white overflow-y-auto shadow-[-30px_0_80px_rgba(0,0,0,.25)] transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {project && (
          <>
            {/* Sticky close bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-9 py-5 bg-white/[.94] backdrop-blur-[8px] border-b border-line md:px-9 px-5">
              <div className="flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase text-ink-2 font-semibold">
                <span className="w-[18px] h-0.5 bg-gold inline-block" />
                Portfólio · PH Construtora
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="w-11 h-11 border border-line bg-white flex items-center justify-center rounded-[4px] text-ink hover:bg-ink hover:border-ink hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </div>

            {/* Hero image */}
            <div className="relative aspect-video bg-ph-grey overflow-hidden">
              <img src={project.heroImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,.65)] to-transparent" />
              <div className="absolute left-9 right-9 bottom-8 text-white z-[2] md:left-9 md:right-9 left-5 right-5 bottom-5">
                <span className="inline-flex items-center gap-[14px] text-[11px] tracking-[0.26em] uppercase text-white font-semibold mb-[18px] px-[14px] py-2 bg-blue-ph">
                  {project.cat}
                </span>
                <h2 className="text-[clamp(32px,4.5vw,48px)] font-extrabold tracking-[-0.025em] leading-[1.05] max-w-[720px]">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="px-9 py-12 pb-16 md:px-9 px-5">
              {/* Facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 border border-line mb-14">
                {[
                  { label: 'Localização', value: project.loc },
                  { label: 'Ano',         value: project.year },
                  { label: 'Tipo',        value: project.type },
                  { label: 'Área',        value: project.area },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white px-[22px] py-6 border-r border-b border-line last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                    <div className="text-[11px] tracking-[0.24em] uppercase text-ink-2 font-semibold mb-2">{label}</div>
                    <div className="text-[18px] font-bold text-ink tracking-[-0.005em]">{value}</div>
                  </div>
                ))}
              </div>

              {/* About */}
              <div className="mb-14">
                <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase text-blue-ph font-bold mb-[18px]">
                  <span className="w-6 h-0.5 bg-gold inline-block" />
                  Sobre a obra
                </div>
                <h3 className="text-[28px] font-extrabold tracking-[-0.018em] leading-[1.15] mb-5">{project.tagline}</h3>
                <p className="text-[16px] text-ink-2 leading-[1.75] mb-4">{project.desc}</p>
                <p className="text-[16px] text-ink-2 leading-[1.75]">{project.desc2}</p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
                {project.gallery.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-ph-grey">
                    <img src={src} alt={`${project.title} — foto ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Services checklist */}
              <div className="mb-14">
                <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase text-blue-ph font-bold mb-[18px]">
                  <span className="w-6 h-0.5 bg-gold inline-block" />
                  Serviços executados
                </div>
                <h3 className="text-[28px] font-extrabold tracking-[-0.018em] leading-[1.15] mb-5">
                  O que a PH entregou nesta obra
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {project.check.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-ink leading-[1.5]">
                      <Check size={18} strokeWidth={2.2} className="text-blue-ph flex-shrink-0 mt-[3px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-14 p-9 bg-off border-l-[3px] border-blue-ph flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
                <div>
                  <h4 className="text-[20px] font-bold tracking-[-0.005em] mb-2">Quer uma obra como esta?</h4>
                  <p className="text-[14px] text-ink-2">Fale com a PH e receba um orçamento sem compromisso.</p>
                </div>
                <a
                  href="https://wa.me/5563981045578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-ph hover:bg-blue-dark text-white font-semibold text-[14px] px-[26px] py-4 rounded-[4px] transition-colors duration-200 group whitespace-nowrap"
                >
                  Solicitar orçamento
                  <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
