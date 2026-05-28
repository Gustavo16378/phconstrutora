import { Sun, Home, Users, Clock, MessageCircle, MapPin } from 'lucide-react'

const CARDS = [
  {
    icon: Sun,
    title: 'Experiência desde 2018',
    desc: 'Anos de obra entregue com qualidade comprovada em Palmas.',
  },
  {
    icon: Home,
    title: 'Do início ao fim',
    desc: 'Cuidamos de cada etapa, da fundação ao acabamento.',
  },
  {
    icon: Users,
    title: 'Equipe especializada',
    desc: 'Profissionais treinados para cada tipo de serviço.',
  },
  {
    icon: Clock,
    title: 'Prazo cumprido',
    desc: 'Nosso compromisso com o cronograma é levado a sério.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento direto',
    desc: 'Fale direto com quem decide. Sem intermediários.',
  },
  {
    icon: MapPin,
    title: 'Obras em Palmas',
    desc: 'Conhecemos a cidade, suas normas e suas necessidades.',
  },
]

export default function Diferenciais() {
  return (
    <section className="py-[100px] lg:py-[120px] bg-off">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="mb-16 lg:mb-20">
          <div className="text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-4">Diferenciais</div>
          <h2 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.022em] max-w-[780px]">
            Por que escolher a PH Construtora.
          </h2>
          <p className="text-[17px] text-ink-2 max-w-[620px] mt-5">
            Seis razões que fazem nossos clientes voltarem — e indicarem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border-l-[3px] border-blue-ph px-8 py-9 shadow-[0_1px_3px_rgba(17,17,17,.04)] hover:shadow-[0_14px_38px_rgba(17,17,17,.08)] hover:-translate-y-[3px] transition-all duration-250"
            >
              <div className="w-11 h-11 flex items-center justify-center text-blue-ph mb-6">
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <h3 className="text-[19px] font-bold tracking-[-0.005em] mb-[10px] leading-[1.3]">{title}</h3>
              <p className="text-[15px] text-ink-2 leading-[1.55]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
