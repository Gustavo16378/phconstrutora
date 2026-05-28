export interface Project {
  title: string
  cat: string
  loc: string
  year: string
  type: string
  area: string
  tagline: string
  desc: string
  desc2: string
  check: string[]
}

export const PROJECTS: Record<string, Project> = {
  cartorio: {
    title: 'Cartório do Registro de Imóveis',
    cat: 'Institucional',
    loc: 'Palmas – TO',
    year: '2023',
    type: 'Reforma institucional',
    area: '« confidencial »',
    tagline: 'Modernizando um espaço público de alto fluxo, sem parar o atendimento.',
    desc: 'A PH executou a reforma completa do Cartório do Registro de Imóveis em Palmas, atualizando layout, instalações e acabamentos para receber um volume maior de atendimento diário.',
    desc2: 'A obra exigiu organização de etapas e prazos rigorosos para que o expediente do cartório não fosse interrompido em momento algum — cada frente foi planejada em conjunto com a administração do espaço.',
    check: ['Reforma de layout interno', 'Instalações elétricas atualizadas', 'Hidráulica revisada', 'Porcelanatos em área de atendimento', 'Pintura interna completa', 'Acabamento institucional'],
  },
  amazonas: {
    title: 'Amazonas Center',
    cat: 'Comercial',
    loc: 'Palmas – TO',
    year: '2022',
    type: 'Edificação comercial',
    area: '« consultar »',
    tagline: 'Um centro comercial de múltiplas lojas entregue dentro do prazo combinado.',
    desc: 'O Amazonas Center foi uma das obras de maior escala assinadas pela PH em Palmas, reunindo lojas, circulação pública e áreas técnicas em um único complexo comercial.',
    desc2: 'A construção demandou coordenação de equipes em paralelo — estrutura, alvenaria, instalações, fachada e acabamento — com cronograma firme e entregas parciais alinhadas com lojistas e administração.',
    check: ['Estrutura e alvenaria', 'Instalações elétricas e hidráulicas', 'Pisos em porcelanato', 'Pintura interna e externa', 'Acabamento de fachada', 'Coordenação de obra'],
  },
  cooperativa: {
    title: 'Cooperativa dos Enfermeiros',
    cat: 'Institucional',
    loc: 'Frente à Unimed · Palmas – TO',
    year: '2024',
    type: 'Construção institucional',
    area: '« consultar »',
    tagline: 'Sede própria para uma classe profissional, em uma das esquinas mais nobres de Palmas.',
    desc: 'A PH construiu a sede da Cooperativa dos Enfermeiros em uma localização estratégica em Palmas — em frente à Unimed — com padrão institucional e acabamento condizente com o porte da entidade.',
    desc2: 'O projeto exigiu cuidado especial com a fachada e a circulação interna, já que a sede recebe diariamente cooperados, parceiros e visitantes.',
    check: ['Construção completa do zero', 'Estrutura armada', 'Fachada institucional', 'Instalações elétricas e hidráulicas', 'Acabamentos em porcelanato', 'Pintura interna e externa'],
  },
  residencial: {
    title: 'Obra Residencial – Palmas',
    cat: 'Residencial',
    loc: 'Palmas – TO',
    year: '2024',
    type: 'Construção residencial',
    area: '« consultar »',
    tagline: 'Uma residência construída do zero com atenção em cada detalhe de acabamento.',
    desc: 'Projeto residencial entregue chave em mão em Palmas, desenhado com atenção ao terreno, à luz natural e ao programa da família.',
    desc2: 'A obra passou pelas etapas de fundação, estrutura, alvenaria, instalações e acabamento, sempre com acompanhamento direto do Paulo na obra.',
    check: ['Fundação e estrutura', 'Alvenaria completa', 'Hidráulica e elétrica', 'Instalação de porcelanato', 'Pintura interna e externa', 'Acabamento residencial'],
  },
  comercial: {
    title: 'Reforma Comercial',
    cat: 'Comercial',
    loc: 'Palmas – TO',
    year: '2023',
    type: 'Reforma comercial',
    area: '« consultar »',
    tagline: 'Renovação de um espaço comercial mantendo a operação do cliente.',
    desc: 'Reforma comercial completa em ponto já em operação, com troca de pisos, atualização de elétrica e nova pintura.',
    desc2: 'A escolha por etapas planejadas evitou interrupção longa do funcionamento do estabelecimento.',
    check: ['Demolição controlada', 'Nova elétrica', 'Instalação de porcelanato', 'Pintura interna', 'Acabamento comercial', 'Limpeza fina e entrega'],
  },
  industrial: {
    title: 'Construção Industrial',
    cat: 'Industrial',
    loc: 'Tocantins',
    year: '2022',
    type: 'Construção industrial',
    area: '« consultar »',
    tagline: 'Galpão industrial com pé-direito alto e instalações preparadas para produção.',
    desc: 'Galpão construído do zero, com estrutura metálica, alvenaria, piso industrial e instalações dimensionadas para operação.',
    desc2: 'A obra foi planejada para receber equipamentos de produção e logística desde o primeiro dia de funcionamento.',
    check: ['Fundação reforçada', 'Estrutura metálica', 'Piso industrial', 'Elétrica de alta carga', 'Hidráulica industrial', 'Acabamento e fachada'],
  },
}

export const PROJECT_KEYS = Object.keys(PROJECTS) as (keyof typeof PROJECTS)[]

export const PROJECT_LABELS: Record<string, { title: string; sub: string }> = {
  cartorio:    { title: 'Cartório Registro de Imóveis', sub: 'Institucional · Palmas – TO' },
  amazonas:    { title: 'Amazonas Center',              sub: 'Comercial · Palmas – TO' },
  cooperativa: { title: 'Cooperativa dos Enfermeiros',  sub: 'Institucional · Frente à Unimed' },
  residencial: { title: 'Obra Residencial',             sub: 'Residencial · Palmas – TO' },
  comercial:   { title: 'Reforma Comercial',            sub: 'Comercial · Palmas – TO' },
  industrial:  { title: 'Construção Industrial',        sub: 'Industrial · Tocantins' },
}
