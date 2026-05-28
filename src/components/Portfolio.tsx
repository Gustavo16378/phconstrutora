import { ArrowRight } from 'lucide-react'
import { PROJECTS, PROJECT_KEYS, PROJECT_LABELS } from '../data/projects'

interface Props {
  onOpen: (key: string) => void
}

export default function Portfolio({ onOpen }: Props) {
  return (
    <section className="py-[100px] lg:py-[120px]" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="mb-16 lg:mb-20">
          <div className="text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-4">Portfólio</div>
          <h2 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.022em]">Obras que nos orgulham.</h2>
          <p className="text-[17px] text-ink-2 max-w-[620px] mt-5">
            Projetos realizados em Palmas e região, de instituições a residências.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {PROJECT_KEYS.map((key) => {
            const { title, sub } = PROJECT_LABELS[key]
            return (
              <div
                key={key}
                className="relative aspect-[4/3] overflow-hidden bg-ph-grey cursor-pointer group"
                onClick={() => onOpen(key)}
              >
                <img
                  src={PROJECTS[key].heroImage}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-ph/[.85] flex flex-col items-center justify-center px-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-gold mb-[18px]" />
                  <div className="text-[22px] font-bold tracking-[-0.005em] mb-1.5 leading-[1.2]">{title}</div>
                  <div className="text-[11px] tracking-[0.22em] uppercase opacity-85">{sub}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-transparent text-ink border border-ink hover:bg-ink hover:text-white font-semibold text-[15px] px-8 py-5 rounded-[4px] transition-colors duration-200 group"
          >
            Ver todas as obras
            <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
