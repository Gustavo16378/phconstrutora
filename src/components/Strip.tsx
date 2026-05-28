const STATS = [
  { num: '+7',    label: 'Anos de experiência' },
  { num: '+50',   label: 'Obras entregues' },
  { num: '100%',  label: 'Comprometimento' },
  { num: 'Palmas',label: 'Tocantins · base local' },
]

export default function Strip() {
  return (
    <section className="bg-blue-ph text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ num, label }, i) => (
            <div
              key={i}
              className={`
                px-5 py-10 lg:px-8 lg:py-[72px]
                border-b border-white/[.14]
                ${i % 2 !== 1 ? 'border-r border-white/[.14]' : ''}
                lg:border-b-0
                ${i < 3 ? 'lg:border-r lg:border-white/[.14]' : 'lg:border-r-0'}
              `}
            >
              <div className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-0.03em] leading-none mb-3 break-words">
                {num.startsWith('+') ? (
                  <>
                    <span className="text-gold font-semibold mr-1">+</span>
                    {num.slice(1)}
                  </>
                ) : num}
              </div>
              <div className="text-[12px] tracking-[0.22em] uppercase text-white/[.78] font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
