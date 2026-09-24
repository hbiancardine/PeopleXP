// Dados demonstrativos compartilhados entre Cadastro de Vagas (listagem) e Nova/Editar Vaga (formulário).
(function () {
  const STORE = 'tp-vagas-v1';
  const FLASH = 'tp-vagas-flash';

  const SEED = [
    { id: 237, codigo: 'TESTE', nome: 'TESTE STAFF', tipo: 'VAGA EXTERNA STAFF', cargo: 'SUPERVISOR DE ATENDIMENTO I', inclusao: '15/02/2023 16:01', fim: '28/09/2026', status: 'Publicada' },
    { id: 2166, codigo: 'VAGA PcD', nome: 'Agente de atendimento - Vaga exclusiva para pessoas com deficiência - SP (PcD)', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '11/04/2025 10:39', fim: '30/09/2026', status: 'Publicada' },
    { id: 2167, codigo: 'VAGA PcD', nome: 'Agente de atendimento - Vaga exclusiva para pessoas com deficiência - RN (PcD)', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '11/04/2025 10:47', fim: '30/09/2026', status: 'Publicada' },
    { id: 2122, codigo: 'META CT INTERNO', nome: 'Apenas uso interno - Gerente de Operações Senior Bilíngue - Interno', tipo: 'VAGA EXTERNA STAFF', cargo: 'GERENTE DE OPERACOES SR BILINGUE', inclusao: '28/03/2025 11:27', fim: '', status: 'Publicada' },
    { id: 2354, codigo: 'DIDI', nome: 'Agente de Atendimento - Aplicativo Food Delivery', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '25/06/2025 09:07', fim: '30/09/2026', status: 'Publicada' },
    { id: 2464, codigo: 'BANCO BNG', nome: 'SUPERVISOR ESPECIALISTA', tipo: 'VAGA EXTERNA STAFF', cargo: 'SUPERVISOR ESPECIALISTA', inclusao: '01/08/2025 11:05', fim: '', status: 'Publicada' },
    { id: 2592, codigo: 'Analista de TI jr', nome: 'Analista de Microinformatica Jr.', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE MICROINFORMATICA JR', inclusao: '09/09/2025 10:23', fim: '', status: 'Publicada' },
    { id: 2607, codigo: 'PICPAY QA E TRN', nome: 'Analista de Qualidade e Treinamento PL', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE QUALIDADE E TREINAMENTO PLENO', inclusao: '12/09/2025 10:12', fim: '', status: 'Publicada' },
    { id: 2611, codigo: 'ASSISTENTE CAIO', nome: 'Assistente de Recursos Humanos', tipo: 'VAGA EXTERNA STAFF', cargo: 'ASSISTENTE DE RECURSOS HUMANOS', inclusao: '15/09/2025 17:52', fim: '', status: 'Publicada' },
    { id: 2736, codigo: 'Coordenador de A&AT', nome: 'Coordenador de Atração e Aquisição de Talentos', tipo: 'VAGA EXTERNA STAFF', cargo: 'COORDENADOR DE ATRACAO E AQUISICAO DE TALENTOS JR', inclusao: '03/11/2025 12:02', fim: '', status: 'Publicada' },
    { id: 2741, codigo: 'NUBANK SAC', nome: 'Agente de Atendimento - Serviços Financeiros - Recife', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '05/11/2025 09:30', fim: '31/10/2026', status: 'Publicada' },
    { id: 2755, codigo: 'WFM JR BIL', nome: 'Analista de WFM Junior Bilíngue', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE WFM JUNIOR', inclusao: '10/11/2025 14:18', fim: '', status: 'Publicada' },
    { id: 2780, codigo: 'SUP OPS SP', nome: 'Supervisor de Operações - São Paulo', tipo: 'VAGA EXTERNA STAFF', cargo: 'SUPERVISOR DE OPERACOES', inclusao: '18/11/2025 08:45', fim: '15/12/2026', status: 'Publicada' },
    { id: 2802, codigo: 'EXPERT ESP', nome: 'Agente de Atendimento Bilíngue Espanhol - Home Office', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO BILINGUE', inclusao: '02/12/2025 10:00', fim: '30/11/2026', status: 'Publicada' },
    { id: 2815, codigo: 'DEV FRONT', nome: 'Desenvolvedor Front-End Pleno', tipo: 'VAGA EXTERNA STAFF', cargo: 'DESENVOLVEDOR FRONT-END PLENO', inclusao: '09/12/2025 16:40', fim: '', status: 'Publicada' },
    { id: 2011, codigo: 'VIVO RECEP', nome: 'Agente de Atendimento Receptivo - Telecom', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '14/01/2025 09:12', fim: '30/06/2026', status: 'Bloqueada' },
    { id: 2098, codigo: 'MKT ANALISTA', nome: 'Analista de Marketing', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE MARKETING', inclusao: '20/03/2025 13:50', fim: '', status: 'Bloqueada' },
    { id: 2433, codigo: 'SUP BKO', nome: 'Supervisor de Back Office', tipo: 'VAGA EXTERNA STAFF', cargo: 'SUPERVISOR DE ATENDIMENTO I', inclusao: '22/07/2025 10:05', fim: '31/08/2026', status: 'Bloqueada' },
    { id: 2690, codigo: 'VAGA PcD', nome: 'Agente de atendimento - Vaga exclusiva para pessoas com deficiência - MG (PcD)', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '10/10/2025 11:22', fim: '30/09/2026', status: 'Bloqueada' },
    { id: 2799, codigo: 'COORD RH', nome: 'Coordenador de RH', tipo: 'VAGA EXTERNA STAFF', cargo: 'COORDENADOR DE RH', inclusao: '28/11/2025 15:35', fim: '', status: 'Bloqueada' },
    { id: 1504, codigo: 'BLACK FRIDAY 24', nome: 'Agente de Atendimento Temporário - Black Friday', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '01/10/2024 08:00', fim: '30/11/2024', status: 'Encerrada' },
    { id: 1622, codigo: 'ANALISTA DP', nome: 'Analista de Departamento Pessoal', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE DEPARTAMENTO PESSOAL', inclusao: '12/11/2024 10:30', fim: '31/01/2025', status: 'Encerrada' },
    { id: 1788, codigo: 'SUP ATD RJ', nome: 'Supervisor de Atendimento - Rio de Janeiro', tipo: 'VAGA EXTERNA STAFF', cargo: 'SUPERVISOR DE ATENDIMENTO I', inclusao: '05/12/2024 14:10', fim: '28/02/2025', status: 'Encerrada' },
    { id: 1893, codigo: 'EXPERT PE', nome: 'Agente de Atendimento - Recife/PE', tipo: 'VAGA EXTERNA EXPERT', cargo: 'EXPERT EM INTERACAO', inclusao: '20/01/2025 09:00', fim: '31/03/2025', status: 'Encerrada' },
    { id: 1950, codigo: 'QA TRN JR', nome: 'Analista de Qualidade e Treinamento Jr', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE QUALIDADE E TREINAMENTO JR', inclusao: '03/02/2025 11:45', fim: '30/04/2025', status: 'Encerrada' },
    { id: 2210, codigo: 'GER CONTAS', nome: 'Gerente de Contas Sênior', tipo: 'VAGA EXTERNA STAFF', cargo: 'GERENTE DE CONTAS SR', inclusao: '15/04/2025 16:20', fim: '31/07/2025', status: 'Encerrada' },
    { id: 2305, codigo: 'SUP SUPORTE', nome: 'Analista de Suporte Pleno', tipo: 'VAGA EXTERNA STAFF', cargo: 'ANALISTA DE SUPORTE PLENO', inclusao: '02/06/2025 08:55', fim: '31/08/2025', status: 'Encerrada' },
  ];

  const BEM_ESTAR_DEFAULT = 'Aqui cuidamos dos nossos colaboradores dos pés à cabeça, com iniciativas voltadas para saúde física e saúde mental, promovendo um ambiente que fortalece o equilíbrio entre vida pessoal e vida profissional. Em saúde mental contamos com apoio psicológico e um canal exclusivo para cuidado do sentimento e bem-estar de forma individualizada, além de promover ações de conscientização, como a semana do Bem-estar e ações que promovem a conexão social e interação entre os colaboradores como Festival de Música e Dança e Sextas-feiras temáticas. No pilar de saúde física promovemos iniciativas como a Copa TP, Campeonato de Game, Grupo de corrida, além de parcerias com academias, estúdios de pilates, yoga e parceiros de cultura e lazer.';

  // Opções demonstrativas (substituir pelas listas reais do sistema)
  const OPTIONS = {
    tipos: ['VAGA EXTERNA EXPERT', 'VAGA EXTERNA STAFF', 'VAGA EXTERNA EXPERT CONSULTORIA', 'JOVEM APRENDIZ EXPERT', 'JOVEM APRENDIZ STAFF'],
    perfisCandidato: ['BKO', 'SAC/VENDAS', 'SUPORTE', 'COBRANÇA', 'STAFF'],
    gestaoRS: ['RS Corporativo', 'RS Regional Sudeste', 'RS Regional Nordeste', 'RS Regional Sul'],
    status: ['Publicada', 'Bloqueada', 'Encerrada'],
    confidencialidade: ['Pública', 'Confidencial'],
    modalidades: ['Presencial', 'Híbrido', 'Remoto'],
    niveis: ['Operacional', 'Júnior', 'Pleno', 'Sênior', 'Liderança'],
    publicos: ['VAGA PARA TODOS OS PÚBLICOS', 'VAGA EXCLUSIVA PARA PESSOAS COM DEFICIÊNCIA'],
    escalas: ['5x2', '6x1', '4x3', '5x1'],
    // Base demonstrativa de uso de salários no sistema (valor → nº de vagas). Os 3 mais usados aparecem como sugestão.
    salariosUso: { 'R$ 1.897,50 + RV até 18% + Benefícios + Plano de carreira': 412, 'R$ 1.650,00 + RV até 15% + Benefícios': 356, 'R$ 2.350,00 + Benefícios + Plano de carreira': 198, 'R$ 3.200,00 + Benefícios': 74, 'A combinar': 31 },
    requisitos: ['Ensino médio completo', 'Digitação rápida e precisa', 'Atenção aos detalhes', 'Conhecimento de Excel'],
    perfisVisualizar: ['Administrador', 'Recrutador', 'Analista de RS', 'Gestor de RS', 'Hiring Manager', 'Parceiro'],
    parceiros: ['Catho', 'Gupy', 'Infojobs', 'Vagas.com', 'CIEE', 'Instituto Jô Clemente'],
  };

  // Benefícios demonstrativos por Tipo de Vaga (listas definitivas serão fornecidas)
  const BENEFICIOS = {
    'VAGA EXTERNA EXPERT': ['Vale-transporte', 'Vale-refeição ou vale-alimentação', 'Assistência médica', 'Assistência odontológica', 'Seguro de vida', 'Plano de carreira'],
    'VAGA EXTERNA STAFF': ['Vale-transporte', 'Vale-refeição ou vale-alimentação', 'Assistência médica', 'Assistência odontológica', 'Seguro de vida', 'Participação nos lucros', 'Gympass'],
    'VAGA EXTERNA EXPERT CONSULTORIA': ['Vale-transporte', 'Vale-refeição', 'Assistência médica', 'Seguro de vida'],
    'JOVEM APRENDIZ EXPERT': ['Vale-transporte', 'Vale-refeição', 'Curso de aprendizagem profissional'],
    'JOVEM APRENDIZ STAFF': ['Vale-transporte', 'Vale-refeição', 'Assistência médica', 'Curso de aprendizagem profissional'],
  };

  // Classificação PcD (categorias → condições). Demonstrativo: manter a classificação oficial do sistema.
  const PCD_TREE = [
    { id: 'fisica', label: 'Física', items: ['Amputação ou ausência de membro', 'Hemiparesia', 'Hemiplegia', 'Monoparesia', 'Monoplegia', 'Nanismo', 'Ostomia', 'Paralisia cerebral', 'Paraparesia', 'Paraplegia', 'Tetraparesia', 'Tetraplegia', 'Triparesia', 'Triplegia', 'Membros com deformidade congênita ou adquirida'] },
    { id: 'auditiva', label: 'Auditiva', items: ['Perda auditiva bilateral parcial', 'Perda auditiva bilateral total', 'Perda auditiva unilateral'] },
    { id: 'visual', label: 'Visual', items: ['Cegueira', 'Baixa visão', 'Visão monocular'] },
    { id: 'mental', label: 'Mental', items: ['Deficiência intelectual', 'Deficiência psicossocial', 'Transtorno do espectro autista'] },
    { id: 'multipla', label: 'Múltipla', items: ['Associação de duas ou mais deficiências'] },
    { id: 'reabilitado', label: 'Reabilitado', items: ['Reabilitado pelo INSS'] },
  ];

  // Detalhes completos de vagas demonstrativas (modo Editar)
  const DETAILS = {
    2166: {
      descricao: 'Atendimento receptivo a clientes de grandes marcas, com treinamento pago, plano de carreira e ambiente inclusivo em São Paulo.',
      perfilCandidato: 'SAC/VENDAS', gestaoRS: 'RS Regional Sudeste', confidencialidade: 'Pública',
      sobre: '<p>Buscamos pessoas comunicativas para atuar no atendimento a clientes, esclarecendo dúvidas e resolvendo solicitações pelos canais de voz e chat.</p><p>Principais atividades:</p><ul><li>Atender clientes com cordialidade e agilidade</li><li>Registrar os atendimentos no sistema</li><li>Encaminhar demandas às áreas responsáveis</li></ul>',
      salario: 'R$ 1.897,50 + RV até 18% + Benefícios + Plano de carreira', horarios: '09:00 às 15:20 | 15:20 às 21:40', escala: '6x1', jornada: '06h20',
      modalidade: 'Presencial', local: 'Água Branca – São Paulo/SP',
      escalas: ['5x2', '6x1', '4x3', '5x1'],
    // Base demonstrativa de uso de salários no sistema (valor → nº de vagas). Os 3 mais usados aparecem como sugestão.
    salariosUso: { 'R$ 1.897,50 + RV até 18% + Benefícios + Plano de carreira': 412, 'R$ 1.650,00 + RV até 15% + Benefícios': 356, 'R$ 2.350,00 + Benefícios + Plano de carreira': 198, 'R$ 3.200,00 + Benefícios': 74, 'A combinar': 31 },
    requisitos: ['Ensino médio completo', 'Digitação rápida e precisa', 'Atenção aos detalhes'],
      perfisVisualizar: ['Administrador', 'Recrutador', 'Analista de RS'], parceiros: ['Instituto Jô Clemente', 'Catho'],
      dataInicio: '2025-04-11', nivel: 'Operacional', aceitaMudanca: false, idadeMin: '18', idadeMax: '',
      publico: 'VAGA EXCLUSIVA PARA PESSOAS COM DEFICIÊNCIA',
      pcd: ['fisica::Amputação ou ausência de membro', 'fisica::Monoparesia', 'fisica::Nanismo', 'auditiva::Perda auditiva bilateral parcial', 'auditiva::Perda auditiva unilateral', 'visual::Baixa visão', 'visual::Visão monocular', 'reabilitado::Reabilitado pelo INSS'],
      pesquisaSatisfacao: true,
      bemEstar: '<p>' + BEM_ESTAR_DEFAULT + '</p><p>Para esta vaga, contamos também com intérprete de Libras nos treinamentos e ambiente com acessibilidade completa.</p>',
    },
  };

  const toISO = br => { if (!br) return ''; const [d, m, y] = br.split(' ')[0].split('/'); return y + '-' + m + '-' + d; };
  const toBR = iso => iso ? iso.split('-').reverse().join('/') : '';

  function load() {
    try { const s = JSON.parse(localStorage.getItem(STORE)); if (Array.isArray(s)) return s; } catch (e) {}
    return SEED.map(v => ({ ...v }));
  }
  function save(list) { try { localStorage.setItem(STORE, JSON.stringify(list)); } catch (e) {} }

  function defaults() {
    return {
      id: null, codigo: '', nome: '', descricao: '', tipo: '', perfilCandidato: '', cargo: '', gestaoRS: '', status: 'Publicada', confidencialidade: 'Pública',
      sobre: '', salario: '', horarios: '', escala: '', jornada: '', modalidade: '', local: '', requisitos: [],
      bemEstar: getBemEstar().html,
      perfisVisualizar: [], parceiros: [], dataInicio: '', dataFim: '', nivel: '', aceitaMudanca: false, idadeMin: '', idadeMax: '',
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], pesquisaSatisfacao: false,
    };
  }

  function get(id) {
    const row = load().find(v => v.id === id);
    if (!row) return null;
    const base = defaults();
    const seeded = DETAILS[id] || {};
    const derived = {
      descricao: row.nome.length <= 155 ? row.nome : row.nome.slice(0, 152) + '...',
      perfilCandidato: /EXPERT/.test(row.tipo) ? 'SAC/VENDAS' : 'STAFF', gestaoRS: 'RS Corporativo',
      modalidade: 'Presencial', local: 'São Paulo/SP', salario: 'A combinar', horarios: '08:00 às 17:48', escala: '5x2', jornada: '08h48',
      perfisVisualizar: ['Administrador', 'Recrutador'], nivel: 'Operacional',
      publico: /pcd/i.test(row.codigo + row.nome) ? 'VAGA EXCLUSIVA PARA PESSOAS COM DEFICIÊNCIA' : 'VAGA PARA TODOS OS PÚBLICOS',
      dataInicio: toISO(row.inclusao), dataFim: toISO(row.fim),
    };
    return { ...base, ...derived, ...seeded, ...(row.form || {}), ...pick(row) };
  }
  function pick(row) { const { form, ...rest } = row; return rest; }

  function upsert(data) {
    const list = load();
    const now = new Date(); const pad = n => String(n).padStart(2, '0');
    const stamp = pad(now.getDate()) + '/' + pad(now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
    const { id, codigo, nome, tipo, cargo, status, ...form } = data;
    let row = id != null ? list.find(v => v.id === id) : null;
    if (!row) {
      row = { id: Math.max(...list.map(v => v.id), 0) + 1, inclusao: stamp };
      list.push(row);
    }
    Object.assign(row, { codigo, nome, tipo, cargo, status, fim: toBR(data.dataFim), form });
    save(list);
    return row;
  }

  function topSalarios(n) {
    const count = { ...OPTIONS.salariosUso };
    load().forEach(v => { const s = v.form && v.form.salario; if (s) count[s] = (count[s] || 0) + 1; });
    return Object.entries(count).filter(([s]) => s !== 'A combinar').sort((a, b) => b[1] - a[1]).slice(0, n || 3).map(([s]) => s);
  }

  // Conteúdos configuráveis (páginas Benefícios por Tipo de Vaga e Texto Bem Estar TP)
  const BEN_STORE = 'tp-beneficios-v1', BE_STORE = 'tp-bemestar-v1';
  function getBeneficios() {
    try { const s = JSON.parse(localStorage.getItem(BEN_STORE)); if (s && typeof s === 'object') return { ...JSON.parse(JSON.stringify(BENEFICIOS)), ...s.data }; } catch (e) {}
    return JSON.parse(JSON.stringify(BENEFICIOS));
  }
  function getBeneficiosMeta() { try { return (JSON.parse(localStorage.getItem(BEN_STORE)) || {}).meta || {}; } catch (e) { return {}; } }
  function saveBeneficios(tipo, list, user) {
    let s = {}; try { s = JSON.parse(localStorage.getItem(BEN_STORE)) || {}; } catch (e) {}
    s.data = s.data || {}; s.meta = s.meta || {};
    s.data[tipo] = list; s.meta[tipo] = { at: stampNow(), by: user || 'Admin TP' };
    localStorage.setItem(BEN_STORE, JSON.stringify(s));
  }
  function getBemEstar() {
    try { const s = JSON.parse(localStorage.getItem(BE_STORE)); if (s && s.html) return s; } catch (e) {}
    return { html: '<p>' + BEM_ESTAR_DEFAULT + '</p>', at: '', by: '' };
  }
  function saveBemEstar(html, user) { localStorage.setItem(BE_STORE, JSON.stringify({ html, at: stampNow(), by: user || 'Admin TP' })); }
  function stampNow() { const n = new Date(), p = x => String(x).padStart(2, '0'); return p(n.getDate()) + '/' + p(n.getMonth() + 1) + '/' + n.getFullYear() + ' ' + p(n.getHours()) + ':' + p(n.getMinutes()); }
  function countByTipo() { const c = {}; load().forEach(v => { c[v.tipo] = (c[v.tipo] || 0) + 1; }); return c; }

  function setFlash(msg) { try { sessionStorage.setItem(FLASH, JSON.stringify(msg)); } catch (e) {} }
  function takeFlash() { try { const m = JSON.parse(sessionStorage.getItem(FLASH)); sessionStorage.removeItem(FLASH); return m; } catch (e) { return null; } }

  window.TPVagas = { getBeneficios, getBeneficiosMeta, saveBeneficios, getBemEstar, saveBemEstar, countByTipo, topSalarios, load, save, get, upsert, defaults, setFlash, takeFlash, OPTIONS, BENEFICIOS, PCD_TREE, BEM_ESTAR_DEFAULT, toISO, toBR };
})();
