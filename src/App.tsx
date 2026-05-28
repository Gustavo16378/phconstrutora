import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Sobre from './components/Sobre'
import Diferenciais from './components/Diferenciais'
import Servicos from './components/Servicos'
import Processo from './components/Processo'
import Portfolio from './components/Portfolio'
import PortfolioModal from './components/PortfolioModal'
import Depoimentos from './components/Depoimentos'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Sobre />
        <Diferenciais />
        <Servicos />
        <Processo />
        <Portfolio onOpen={setActiveProject} />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
      <PortfolioModal projectKey={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
