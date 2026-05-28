export default function Sobre() {
  return (
    <section className="py-[100px] lg:py-[120px]" id="sobre">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div>
            <div className="text-[12px] tracking-[0.24em] uppercase text-blue-ph font-semibold mb-4">Sobre nós</div>
            <h2 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.022em] max-w-[780px]">
              Quem está por trás da PH Construtora.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] text-ink-2 leading-[1.7]">
              <p>
                Paulo fundou a PH Construtora em 2018 com um objetivo claro: entregar construções e reformas com qualidade real, do início ao acabamento.
              </p>
              <p>
                Em Palmas – TO, a construtora já deixou sua marca em obras comerciais, residenciais e institucionais — incluindo o Cartório do Registro de Imóveis, o Amazonas Center e a Cooperativa dos Enfermeiros, em frente à Unimed.
              </p>
              <p>
                Equipe dedicada, acompanhamento técnico de ponta a ponta e compromisso com o prazo são os pilares que sustentam cada obra que assinamos.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-line flex items-center gap-4">
              <div>
                <div className="font-bold text-[15px]">Paulo H. – Fundador</div>
                <div className="text-[13px] text-ink-2 tracking-[0.04em]">PH Construtora · Palmas – TO</div>
              </div>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative aspect-[4/5] bg-ph-grey">
            {/* FOTO: fundador Paulo ou obra emblemática */}
            <div className="absolute right-[-16px] top-[-16px] bg-gold text-ink px-[22px] py-[18px] font-extrabold text-[13px] tracking-[0.18em] uppercase rounded-[4px]">
              Desde 2018
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
