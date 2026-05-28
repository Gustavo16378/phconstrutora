import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-16 lg:py-24" id="top">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-[14px] text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-7">
              <span className="w-6 h-0.5 bg-gold inline-block" />
              Palmas – TO · desde 2018
            </div>
            <h1 className="text-[clamp(44px,7.2vw,80px)] leading-[1.02] tracking-[-0.025em] font-extrabold mb-6">
              Construímos com solidez.{' '}
              <span className="text-blue-ph">Entregamos com qualidade.</span>
            </h1>
            <p className="text-[18px] text-ink-2 max-w-[480px] mb-10">
              Mais de 7 anos transformando projetos em realidade em Palmas – TO, com engenharia rigorosa e prazos cumpridos.
            </p>
            <div className="flex flex-wrap gap-[14px]">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-blue-ph hover:bg-blue-dark text-white font-semibold text-[15px] px-8 py-5 rounded-[4px] transition-colors duration-200 group"
              >
                Solicitar orçamento
                <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-transparent text-ink border border-ink hover:bg-ink hover:text-white font-semibold text-[15px] px-8 py-5 rounded-[4px] transition-colors duration-200"
              >
                Ver portfólio
              </a>
            </div>
          </div>

          {/* Media placeholder */}
          <div className="relative aspect-[4/5] bg-ph-grey rounded-[2px]">
            {/* FOTO: fachada de obra ou equipe PH Construtora */}
            <div className="absolute left-6 bottom-6 bg-white p-4 shadow-[0_10px_30px_rgba(17,17,17,.12)] flex gap-[14px] items-center rounded-[4px]">
              <div className="w-9 h-9 rounded-full border-2 border-gold flex items-center justify-center text-blue-ph font-extrabold text-[13px]">
                PH
              </div>
              <div className="text-[12px] leading-[1.3] text-ink">
                <strong className="block font-bold">+50 obras</strong>
                entregues em Palmas – TO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
