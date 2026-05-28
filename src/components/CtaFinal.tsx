import { ArrowRight } from 'lucide-react'

export default function CtaFinal() {
  return (
    <section className="bg-blue-ph text-white py-[120px] text-center" id="contato">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14">
        <div className="w-14 h-0.5 bg-gold mx-auto mb-8" />
        <h2 className="text-[clamp(36px,5.5vw,64px)] font-extrabold tracking-[-0.025em] leading-[1.05] mb-5">
          Pronto para começar sua obra?
        </h2>
        <p className="text-[18px] max-w-[560px] mx-auto mb-11 text-white/[.85]">
          Entre em contato agora e solicite seu orçamento sem compromisso.
        </p>
        <a
          href="https://wa.me/5563981045578"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-blue-ph hover:bg-off font-semibold text-[15px] px-8 py-5 rounded-[4px] transition-colors duration-200 group"
        >
          {/* WhatsApp icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          Chamar no WhatsApp
          <ArrowRight size={16} className="transition-transform duration-250 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
