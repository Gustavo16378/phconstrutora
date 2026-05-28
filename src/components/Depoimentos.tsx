const QUOTES = [
  {
    text: 'A PH Construtora reformou completamente nosso espaço comercial. Prazo cumprido, acabamento impecável e Paulo sempre presente na obra.',
    name: 'Ricardo M.',
    role: 'Empresário · Palmas – TO',
  },
  {
    text: 'Fizeram a reforma da nossa sede com muito profissionalismo. Recomendo sem hesitar para qualquer tipo de obra em Palmas.',
    name: 'Ana Paula S.',
    role: 'Gestora · Palmas – TO',
  },
  {
    text: 'Contratei para reforma residencial completa. Resultado superou as expectativas. Equipe séria e comprometida do início ao fim.',
    name: 'Carlos F.',
    role: 'Servidor Público · Palmas – TO',
  },
]

export default function Depoimentos() {
  return (
    <section className="py-[100px] lg:py-[120px] bg-off" id="depoimentos">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="mb-16 lg:mb-20">
          <div className="text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-4">Depoimentos</div>
          <h2 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.022em]">
            O que dizem nossos clientes.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {QUOTES.map(({ text, name, role }) => (
            <div key={name} className="bg-white px-9 py-11 relative rounded-[4px] shadow-[0_1px_3px_rgba(17,17,17,.04)]">
              <span
                className="absolute top-6 left-6 font-extrabold text-[92px] leading-none text-blue-ph/[.15] select-none"
                aria-hidden="true"
              >
                "
              </span>
              <div className="relative z-[1] mt-9">
                <p className="text-[16px] text-ink leading-[1.65] mb-7 italic">{text}</p>
                <div className="pt-6 border-t border-line text-[14px]">
                  <strong className="block font-bold text-ink mb-0.5">{name}</strong>
                  <span className="text-ink-2 text-[13px] tracking-[0.04em]">{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
