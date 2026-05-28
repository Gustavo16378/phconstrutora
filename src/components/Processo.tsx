import { Phone, MapPin, FileText, HardHat, Key } from 'lucide-react'

const STEPS = [
  { num: '01', icon: Phone,    title: 'Primeiro contato', desc: 'Você nos chama, entendemos sua necessidade.' },
  { num: '02', icon: MapPin,   title: 'Visita técnica',    desc: 'Avaliamos o local e definimos o escopo.' },
  { num: '03', icon: FileText, title: 'Orçamento',         desc: 'Enviamos proposta clara e sem surpresas.' },
  { num: '04', icon: HardHat,  title: 'Execução',          desc: 'Nossa equipe começa a obra com dedicação.' },
  { num: '05', icon: Key,      title: 'Entrega',           desc: 'Vistoriamos juntos e garantimos sua satisfação.' },
]

export default function Processo() {
  return (
    <section className="py-[100px] lg:py-[120px] bg-off" id="processo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="mb-16 lg:mb-20">
          <div className="text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-4">Como Trabalhamos</div>
          <h2 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.022em]">Nosso processo.</h2>
          <p className="text-[17px] text-ink-2 max-w-[620px] mt-5">
            Cinco etapas claras, do primeiro contato à entrega da chave.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6 relative">
          {/* dashed line */}
          <div
            className="absolute left-[8%] right-[8%] top-8 h-0.5 z-0"
            style={{
              backgroundImage: 'linear-gradient(to right, #1565C0 0, #1565C0 50%, transparent 50%)',
              backgroundSize: '14px 2px',
            }}
          />
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-gold flex items-center justify-center text-blue-ph font-extrabold text-lg tracking-[-0.01em] mb-5">
                {num}
              </div>
              <h4 className="text-[17px] font-bold mb-2 tracking-[-0.005em]">{title}</h4>
              <p className="text-[14px] text-ink-2 leading-[1.55] max-w-[220px]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: zigzag */}
        <div className="lg:hidden relative">
          {/* vertical dashed line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px z-0"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #1565C0 0, #1565C0 50%, transparent 50%)',
              backgroundSize: '2px 12px',
            }}
          />
          {STEPS.map(({ num, title, desc }, i) => {
            const isOdd = i % 2 === 0
            return (
              <div key={num} className="grid grid-cols-[1fr_52px_1fr] gap-3 items-center py-[18px] relative z-10">
                {/* left body (odd steps) */}
                <div className={isOdd ? 'text-right pr-1' : ''}>
                  {isOdd && (
                    <>
                      <h4 className="text-[16px] font-bold mb-1">{title}</h4>
                      <p className="text-[13px] text-ink-2 leading-[1.55]">{desc}</p>
                    </>
                  )}
                </div>

                {/* dot */}
                <div className="w-[52px] h-[52px] rounded-full bg-off border-2 border-gold flex items-center justify-center text-blue-ph font-extrabold text-[15px] mx-auto">
                  {num}
                </div>

                {/* right body (even steps) */}
                <div className={!isOdd ? 'text-left pl-1' : ''}>
                  {!isOdd && (
                    <>
                      <h4 className="text-[16px] font-bold mb-1">{title}</h4>
                      <p className="text-[13px] text-ink-2 leading-[1.55]">{desc}</p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
