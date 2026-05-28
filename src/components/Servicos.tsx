import { Building2, Hammer, Grid3X3, Paintbrush, Zap, Droplets } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Building2,
    title: 'Construção Civil',
    desc: 'Obras residenciais e comerciais do zero, com engenharia rigorosa.',
  },
  {
    icon: Hammer,
    title: 'Reformas em Geral',
    desc: 'Renovação completa do seu espaço, residencial ou comercial.',
  },
  {
    icon: Grid3X3,
    title: 'Porcelanatos',
    desc: 'Instalação com acabamento de alto padrão em qualquer formato.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura',
    desc: 'Interna e externa com materiais de qualidade e acabamento limpo.',
  },
  {
    icon: Zap,
    title: 'Elétrica',
    desc: 'Instalações seguras e dentro das normas, residenciais ou prediais.',
  },
  {
    icon: Droplets,
    title: 'Hidráulica',
    desc: 'Soluções completas de encanamento e tubulação para qualquer projeto.',
  },
]

export default function Servicos() {
  return (
    <section className="py-[100px] lg:py-[120px]" id="servicos">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="mb-16 lg:mb-20">
          <div className="text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-4">Serviços</div>
          <h2 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.022em]">O que fazemos.</h2>
          <p className="text-[17px] text-ink-2 max-w-[620px] mt-5">
            Atuação completa em obras residenciais, comerciais e institucionais — do projeto à entrega da chave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-line divide-y divide-line md:divide-y-0">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="bg-white px-9 py-11 cursor-pointer group hover:bg-blue-ph transition-colors duration-300 border-b md:border-r border-line last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="w-11 h-11 flex items-center justify-center text-blue-ph mb-7 group-hover:text-white transition-colors duration-300">
                <Icon size={32} strokeWidth={1.4} />
              </div>
              <h3 className="text-[20px] font-bold mb-3 tracking-[-0.005em] group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
              <p className="text-[15px] text-ink-2 mb-6 leading-[1.55] group-hover:text-white transition-colors duration-300">
                {desc}
              </p>
              <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold text-blue-ph group-hover:text-white transition-colors duration-300">
                Saiba mais <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
