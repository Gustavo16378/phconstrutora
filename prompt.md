Vou te fornecer o design aprovado em HTML puro (v1.html) e o modelo mobile (mobile-preview.html). Sua tarefa é converter fielmente para React + Vite + TypeScript + Tailwind CSS, seguindo minha stack padrão.

---

## STACK

- React + Vite + TypeScript
- Tailwind CSS (sem componentes externos)
- Lucide React (ícones, substituindo os SVGs inline do HTML)
- Google Fonts: Montserrat via index.html

---

## ESTRUTURA DE ARQUIVOS

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    Strip.tsx          ← faixa de números azul
    Sobre.tsx
    Diferenciais.tsx
    Servicos.tsx
    Processo.tsx       ← timeline
    Portfolio.tsx
    PortfolioModal.tsx ← modal de obra (drawer lateral)
    Depoimentos.tsx
    CtaFinal.tsx
    Footer.tsx
  data/
    projects.ts        ← objeto PROJECTS do script JS
  App.tsx
  main.tsx
  index.css
```

---

## TOKENS DE DESIGN (Tailwind config ou CSS vars)

```
--blue: #1565C0
--blue-dark: #0E4A93
--gold: #C9A84C
--white: #FFFFFF
--off: #F4F6F9
--ink: #111111
--ink-2: #555555
--line: #E6E9EE
--ph-grey: #AAAAAA
--footer: #0D0D0D
```

Adicione essas variáveis no tailwind.config e use via classes customizadas ou CSS vars no index.css.

---

## COMPORTAMENTOS A PRESERVAR

1. **Navbar sticky** com box-shadow ao fazer scroll (useEffect + scroll listener)
2. **Scroll spy** nos links da navbar (seção ativa fica com underline azul)
3. **Scroll progress bar** lateral direita (3px, azul, fixed)
4. **Portfolio Modal** — drawer que abre pela direita ao clicar numa obra, com:
   - Overlay com blur
   - Fecha com ESC ou clique no backdrop
   - body.overflow hidden quando aberto
   - Dados vindos do `projects.ts`
5. **Hover nos cards de serviço** — fundo vira azul, texto vira branco
6. **Hover no portfólio** — overlay azul com nome da obra
7. **Scroll suave** entre seções

---

## DATA (extraia do HTML e coloque em src/data/projects.ts)

```ts
export const PROJECTS = {
  cartorio: { ... },
  amazonas: { ... },
  cooperativa: { ... },
  residencial: { ... },
  comercial: { ... },
  industrial: { ... },
}
```

Cada projeto tem: title, cat, loc, year, type, area, tagline, desc, desc2, check[]

---

## PLACEHOLDERS

Todos os placeholders de imagem são `<div>` com `bg-[#AAAAAA]` e aspect-ratio definido. Comentar com `{/* FOTO: descrição */}` para facilitar substituição futura.

---

## LINKS EXTERNOS

- WhatsApp CTA: `https://wa.me/5563981045578`
- Google Fonts: adicionar no `index.html`

---

## OBSERVAÇÕES

- Não inventar libs além das especificadas
- Manter todos os textos, conteúdos e estrutura exatamente como no HTML
- Ícones Lucide equivalentes aos SVGs do HTML (Building2, Clock, CheckCircle, etc.)
- Mobile-first: o design mobile está no arquivo mobile-preview.html, use como referência para breakpoints
- Perguntar antes de tomar qualquer decisão de design não especificada aqui