// ==========================================
// MOCKDB: Centralized Data Architecture
// ==========================================
const MockDB = {
  campaigns: [
    { id: 'c1', name: 'Vagas BCO Talentos PCD', status: 'Ativa', fontePrincipal: 'whatsapp', meioPrincipal: 'messaging', cliques: 12400, candidaturas: 3180, contratacoes: 286, tempoMedioContratacao: null, vagas: ['Atendimento PCD','Suporte PCD','Analista PCD'], utmIds: ['u1','u2'] },
    { id: 'c2', name: 'Jovem Aprendiz', status: 'Ativa', fontePrincipal: 'google', meioPrincipal: 'cpc', cliques: 18600, candidaturas: 5120, contratacoes: 412, tempoMedioContratacao: 12, vagas: ['Jovem Aprendiz SP','Jovem Aprendiz RJ'], utmIds: ['u3','u4'] },
    { id: 'c3', name: 'Banner de Metrô', status: 'Ativa', fontePrincipal: 'offline', meioPrincipal: 'totem', cliques: 21300, candidaturas: 3940, contratacoes: 254, tempoMedioContratacao: 30, vagas: ['Analista de Atendimento','Suporte Técnico','Op. Telemarketing','Backoffice'], utmIds: ['u5','u6'] },
    { id: 'c4', name: 'Diversidade 50+', status: 'Ativa', fontePrincipal: 'linkedin', meioPrincipal: 'job_post', cliques: 6850, candidaturas: 1740, contratacoes: 198, tempoMedioContratacao: 22, vagas: ['Atendimento Senior','Suporte Senior'], utmIds: ['u7','u8'] },
    { id: 'c5', name: 'WhatsApp - Quinta', status: 'Ativa', fontePrincipal: 'facebook', meioPrincipal: 'post', cliques: 4920, candidaturas: 1320, contratacoes: 142, tempoMedioContratacao: 18, vagas: ['Suporte Técnico','Atendimento Geral'], utmIds: ['u9','u10'] }
  ],
  utms: [
    { id: 'u1', campaignId:'c1', utm_source: 'whatsapp', utm_medium: 'messaging', utm_campaign: 'vagas_pcd', utm_content: 'btn_verde', utm_term: 'grupo_rj', url: 'https://people.tp.com/vagas/pcd?utm_source=whatsapp&utm_medium=messaging&utm_campaign=vagas_pcd&utm_content=btn_verde&utm_term=grupo_rj', cliques: 7800, candidaturas: 2100, contratacoes: 190 },
    { id: 'u2', campaignId:'c1', utm_source: 'instagram', utm_medium: 'social', utm_campaign: 'vagas_pcd', utm_content: 'story_01', utm_term: 'pcd_sp', url: 'https://people.tp.com/vagas/pcd?utm_source=instagram&utm_medium=social', cliques: 4600, candidaturas: 1080, contratacoes: 96 },
    { id: 'u3', campaignId:'c2', utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'jovem_aprendiz', utm_content: 'anuncio_01', utm_term: '', url: '...', cliques: 11200, candidaturas: 3200, contratacoes: 260 },
    { id: 'u4', campaignId:'c2', utm_source: 'google', utm_medium: 'display', utm_campaign: 'jovem_aprendiz', utm_content: 'banner_lateral', utm_term: '', url: '...', cliques: 7400, candidaturas: 1920, contratacoes: 152 },
    { id: 'u5', campaignId:'c3', utm_source: 'offline', utm_medium: 'qr_code', utm_campaign: 'metro_estacao_se', utm_content: 'totem_01', utm_term: '', url: '...', cliques: 13500, candidaturas: 2500, contratacoes: 160 },
    { id: 'u6', campaignId:'c3', utm_source: 'offline', utm_medium: 'totem', utm_campaign: 'metro_estacao_luz', utm_content: 'painel_02', utm_term: '', url: '...', cliques: 7800, candidaturas: 1440, contratacoes: 94 },
    { id: 'u7', campaignId:'c4', utm_source: 'linkedin', utm_medium: 'job_post', utm_campaign: 'diversidade_50', utm_content: 'post_senior', utm_term: '', url: '...', cliques: 4200, candidaturas: 1100, contratacoes: 130 },
    { id: 'u8', campaignId:'c4', utm_source: 'linkedin', utm_medium: 'sponsored', utm_campaign: 'diversidade_50', utm_content: 'inmail_01', utm_term: '', url: '...', cliques: 2650, candidaturas: 640, contratacoes: 68 },
    { id: 'u9', campaignId:'c5', utm_source: 'facebook', utm_medium: 'post', utm_campaign: 'quinta_oportunidade', utm_content: 'img_01', utm_term: '', url: '...', cliques: 2800, candidaturas: 780, contratacoes: 85 },
    { id: 'u10', campaignId:'c5', utm_source: 'whatsapp', utm_medium: 'messaging', utm_campaign: 'quinta_oportunidade', utm_content: 'disparo_01', utm_term: '', url: '...', cliques: 2120, candidaturas: 540, contratacoes: 57 }
  ],
  candidates: [
    { id: 'CID-001', applicationId: 'APP-001', name: 'João Silva', emailMasked: 'jo***@email.com', phoneMasked: '(11) 9****-1234', campaignId: 'c1', utmId: 'u1', vaga: 'Atendimento PCD', macroetapa: 'Contratação', microetapa: 'Contratação concluída', status: 'Contratado', dataPrimeiroClique: '01/05/2026', dataCandidatura: '02/05/2026', dataContratacao: '10/05/2026', source: 'whatsapp', medium: 'messaging', utm_campaign: 'vagas_pcd', utm_content: 'btn_verde', device: 'Mobile', cidade: 'São Paulo', estado: 'SP' },
    { id: 'CID-002', applicationId: 'APP-002', name: 'Mariana Costa', emailMasked: 'ma***@email.com', phoneMasked: '(21) 9****-4321', campaignId: 'c2', utmId: 'u3', vaga: 'Jovem Aprendiz RJ', macroetapa: 'Contratação', microetapa: 'Contratação concluída', status: 'Contratado', dataPrimeiroClique: '03/05/2026', dataCandidatura: '04/05/2026', dataContratacao: '12/05/2026', source: 'google', medium: 'cpc', utm_campaign: 'jovem_aprendiz', utm_content: 'anuncio_01', device: 'Desktop', cidade: 'Rio de Janeiro', estado: 'RJ' },
    { id: 'CID-003', applicationId: 'APP-003', name: 'Carlos Santos', emailMasked: 'ca***@email.com', phoneMasked: '(31) 9****-5555', campaignId: 'c3', utmId: 'u5', vaga: 'Analista de Atendimento', macroetapa: 'Contratação', microetapa: 'Contratação concluída', status: 'Contratado', dataPrimeiroClique: '05/05/2026', dataCandidatura: '05/05/2026', dataContratacao: '15/05/2026', source: 'offline', medium: 'qr_code', utm_campaign: 'metro_estacao_se', utm_content: 'totem_01', device: 'Mobile', cidade: 'Belo Horizonte', estado: 'MG' },
    { id: 'CID-004', applicationId: 'APP-004', name: 'Ana Souza', emailMasked: 'an***@email.com', phoneMasked: '(41) 9****-7777', campaignId: 'c4', utmId: 'u7', vaga: 'Atendimento Senior', macroetapa: 'Contratação', microetapa: 'Contratação concluída', status: 'Contratado', dataPrimeiroClique: '10/05/2026', dataCandidatura: '11/05/2026', dataContratacao: '20/05/2026', source: 'linkedin', medium: 'job_post', utm_campaign: 'diversidade_50', utm_content: 'post_senior', device: 'Desktop', cidade: 'Curitiba', estado: 'PR' },
    { id: 'CID-005', applicationId: 'APP-005', name: 'Pedro Lima', emailMasked: 'pe***@email.com', phoneMasked: '(11) 9****-1111', campaignId: 'c5', utmId: 'u9', vaga: 'Suporte Técnico', macroetapa: 'Seleção', microetapa: 'Cadastro iniciado', status: 'Pendente', dataPrimeiroClique: '12/05/2026', dataCandidatura: '12/05/2026', dataContratacao: null, source: 'facebook', medium: 'post', utm_campaign: 'quinta_oportunidade', utm_content: 'img_01', device: 'Mobile', cidade: 'São Paulo', estado: 'SP' }
  ],
  journeyEvents: {},
  peopleStages: {
    'Seleção': [
      { label: 'Cadastro iniciado', cands: 3120, tempo: '1h' },
      { label: 'Candidatura concluída', cands: 1850, tempo: '2h' },
      { label: 'Teste iniciado', cands: 1500, tempo: '1d' },
      { label: 'Teste concluído', cands: 1200, tempo: '2d' },
      { label: 'Entrevista agendada', cands: 800, tempo: '4d' },
      { label: 'Entrevista realizada', cands: 600, tempo: '1d' },
      { label: 'Aprovado na seleção', cands: 450, tempo: '2d' }
    ],
    'Documentação': [
      { label: 'Documentação iniciada', cands: 400, tempo: '1d' },
      { label: 'Dados pessoais preenchidos', cands: 380, tempo: '1d' },
      { label: 'Upload de documentos', cands: 320, tempo: '3d' },
      { label: 'Documentos enviados', cands: 300, tempo: '1d' },
      { label: 'Documentação aprovada', cands: 280, tempo: '2d' }
    ],
    'Admissão': [
      { label: 'Exame agendado', cands: 260, tempo: '3d' },
      { label: 'Exame concluído', cands: 240, tempo: '1d' },
      { label: 'Contrato enviado', cands: 230, tempo: '1d' },
      { label: 'Contratação concluída', cands: 200, tempo: '-' }
    ]
  },
  funnelStages: [
    { label: 'Cliques', value: 63420, percent: 100 },
    { label: 'Candidaturas', value: 15300, percent: 24.1 },
    { label: 'Seleção', value: 8200, percent: 12.9 },
    { label: 'Documentação', value: 3400, percent: 5.3 },
    { label: 'Admissão', value: 1800, percent: 2.8 },
    { label: 'Contratação', value: 1292, percent: 2.0 }
  ],
  timeSeries: {
    labels: ['01/05', '05/05', '10/05', '15/05', '20/05', '25/05', '30/05'],
    cliques: [5000, 7200, 8500, 12000, 9500, 11000, 10220],
    candidaturas: [600, 850, 1100, 2200, 1400, 1800, 1470],
    contratacoes: [50, 80, 95, 150, 120, 160, 179]
  },
  sourceMedium: [
    { fonte: 'google', meio: 'cpc', cliques: 11200, candidaturas: 3200, contratacoes: 260 },
    { fonte: 'whatsapp', meio: 'messaging', cliques: 9920, candidaturas: 2640, contratacoes: 247 },
    { fonte: 'offline', meio: 'qr_code/totem', cliques: 21300, candidaturas: 3940, contratacoes: 254 },
    { fonte: 'linkedin', meio: 'job_post', cliques: 6850, candidaturas: 1740, contratacoes: 198 },
    { fonte: 'facebook', meio: 'post', cliques: 2800, candidaturas: 780, contratacoes: 85 }
  ]
};

const MAX_VEL = 30;
MockDB.campaigns.forEach(c => {
  c.conversaoVisitaCandidatura = ((c.candidaturas / c.cliques) * 100).toFixed(2);
  c.conversaoCandidaturaContratacao = ((c.contratacoes / c.candidaturas) * 100).toFixed(2);
  if (c.tempoMedioContratacao === null) {
    c.score = 'N/D';
  } else {
    const maxCont = 412; const maxConvCC = 11.38; const maxCand = 5120;
    let scoreCont = (c.contratacoes / maxCont) * 40;
    let scoreConvCC = (parseFloat(c.conversaoCandidaturaContratacao) / maxConvCC) * 30;
    let scoreCand = (c.candidaturas / maxCand) * 20;
    let scoreVel = ((MAX_VEL - c.tempoMedioContratacao) / MAX_VEL) * 10;
    if (scoreVel < 0) scoreVel = 0;
    c.score = Math.round(scoreCont + scoreConvCC + scoreCand + scoreVel);
  }
});

MockDB.utms.forEach(u => {
  u.conversaoVisitaCandidatura = ((u.candidaturas / u.cliques) * 100).toFixed(2);
  u.conversaoCandidaturaContratacao = ((u.contratacoes / u.candidaturas) * 100).toFixed(2);
});

MockDB.sourceMedium.forEach(sm => {
  sm.conversaoVisitaCandidatura = ((sm.candidaturas / sm.cliques) * 100).toFixed(2);
  sm.conversaoCandidaturaContratacao = ((sm.contratacoes / sm.candidaturas) * 100).toFixed(2);
});

MockDB.candidates.forEach(cand => {
  MockDB.journeyEvents[cand.id] = [
    { date: cand.dataPrimeiroClique + ' 10:00', macroetapa: 'Aquisição', microetapa: 'Primeiro Clique', title: 'Primeiro Clique', description: `Acessou via ${cand.source}/${cand.medium}`, status: 'completed' }
  ];
});

// ==========================================
// Chart Management System (Clean & Robust)
// ==========================================
const chartInstances = {};

function setupChartDefaults() {
  if (typeof Chart === 'undefined') return;
  Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
  Chart.defaults.color = '#64748b';
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 23, 42, 0.9)';
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.elements.bar.borderRadius = 6;
  Chart.defaults.elements.line.tension = 0.4;
  Chart.defaults.elements.point.radius = 4;
  Chart.defaults.elements.point.hoverRadius = 6;
}

function createGradient(ctx, colorStart, colorEnd) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

function destroyChart(canvasId) {
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
    delete chartInstances[canvasId];
  }
}

function renderChart(canvasId, type, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  destroyChart(canvasId);
  
  if (canvas.offsetParent === null) {
      return null;
  }

  const ctx = canvas.getContext('2d');
  
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: (type === 'pie' || type === 'doughnut'),
        position: 'bottom',
        labels: { usePointStyle: true, boxWidth: 8, padding: 20 }
      }
    }
  };

  if (type === 'line' || type === 'bar') {
    baseOptions.scales = {
      y: { beginAtZero: true, grid: { borderDash: [4, 4], color: '#f1f5f9' }, border: { display: false } },
      x: { grid: { display: false }, border: { display: false } }
    };
    if (options.indexAxis === 'y') {
       baseOptions.scales = {
         x: { beginAtZero: true, grid: { borderDash: [4, 4], color: '#f1f5f9' }, border: { display: false } },
         y: { grid: { display: false }, border: { display: false } }
       };
    }
  }

  const finalOptions = { ...baseOptions, ...options };
  
  if (options.plugins) {
    finalOptions.plugins = { ...baseOptions.plugins, ...options.plugins };
  }
  if (options.scales && baseOptions.scales) {
    finalOptions.scales = { ...baseOptions.scales, ...options.scales };
  }

  chartInstances[canvasId] = new Chart(ctx, {
    type: type,
    data: data,
    options: finalOptions
  });

  return chartInstances[canvasId];
}

// ==========================================
// Chart Initializers (The Views)
// ==========================================

function initCharts() {
  setupChartDefaults();

  const ctxTrend = document.getElementById('chartTrend')?.getContext('2d');
  if(!ctxTrend) return;

  renderChart('chartTrend', 'line', {
    labels: MockDB.timeSeries.labels,
    datasets: [
      { 
        label: 'Cliques', 
        data: MockDB.timeSeries.cliques, 
        borderColor: '#3b82f6', 
        backgroundColor: createGradient(ctxTrend, 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0)'), 
        fill: true 
      },
      { label: 'Candidaturas', data: MockDB.timeSeries.candidaturas, borderColor: '#8b5cf6', backgroundColor: 'transparent' },
      { label: 'Contratações', data: MockDB.timeSeries.contratacoes, borderColor: '#10b981', backgroundColor: 'transparent' }
    ]
  }, { plugins: { legend: { display: true, position: 'top' } } });

  renderChart('chartDistribution', 'doughnut', {
    labels: ['Seleção', 'Documentação', 'Admissão'],
    datasets: [{ 
      data: [8200, 3400, 1800], 
      backgroundColor: ['#3b82f6', '#f59e0b', '#10b981'], 
      borderWidth: 0,
      hoverOffset: 4
    }]
  }, { cutout: '75%' });

  renderChart('chartCanalOverview', 'bar', {
    labels: MockDB.campaigns.slice(0, 3).map(c => c.name),
    datasets: [
      { label: 'Visita → Cand.', data: MockDB.campaigns.slice(0, 3).map(c => parseFloat(c.conversaoVisitaCandidatura)), backgroundColor: '#3b82f6' },
      { label: 'Cand. → Contratação', data: MockDB.campaigns.slice(0, 3).map(c => parseFloat(c.conversaoCandidaturaContratacao)), backgroundColor: '#10b981' }
    ]
  }, { plugins: { legend: { display: true, position: 'top' } } });
}

function initAcquisitionView() {
  renderChart('chartAcqCampanhas', 'bar', {
    labels: MockDB.campaigns.map(c => c.name),
    datasets: [
      { label: 'Cliques', data: MockDB.campaigns.map(c => c.cliques), backgroundColor: '#3b82f6' },
      { label: 'Candidaturas', data: MockDB.campaigns.map(c => c.candidaturas), backgroundColor: '#8b5cf6' }
    ]
  }, { plugins: { legend: { display: true, position: 'top' } } });

  renderChart('chartAcqFonte', 'doughnut', {
    labels: MockDB.sourceMedium.map(sm => `${sm.fonte} / ${sm.meio}`),
    datasets: [{ data: MockDB.sourceMedium.map(sm => sm.cliques), backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444'], borderWidth: 0 }]
  }, { cutout: '70%' });

  const tbody = document.getElementById('acq-source-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    MockDB.sourceMedium.forEach(sm => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${sm.fonte}</td>
        <td>${sm.meio}</td>
        <td>${sm.cliques.toLocaleString('pt-BR')}</td>
        <td>${sm.candidaturas.toLocaleString('pt-BR')}</td>
        <td>${sm.contratacoes.toLocaleString('pt-BR')}</td>
        <td><span style="color:#3b82f6; font-weight:600;">${sm.conversaoVisitaCandidatura}%</span></td>
        <td><span style="color:#10b981; font-weight:600;">${sm.conversaoCandidaturaContratacao}%</span></td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function initConversionsView() {
  renderChart('chartConvVC', 'bar', {
    labels: MockDB.campaigns.map(c => c.name),
    datasets: [{ label: 'Conv. Visita -> Cand. (%)', data: MockDB.campaigns.map(c => parseFloat(c.conversaoVisitaCandidatura)), backgroundColor: '#3b82f6' }]
  }, { indexAxis: 'y' });

  renderChart('chartConvCC', 'bar', {
    labels: MockDB.campaigns.map(c => c.name),
    datasets: [{ label: 'Conv. Cand. -> Contrat. (%)', data: MockDB.campaigns.map(c => parseFloat(c.conversaoCandidaturaContratacao)), backgroundColor: '#ec4899' }]
  }, { indexAxis: 'y' });

  const tbody = document.getElementById('conv-table-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    MockDB.campaigns.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:600; cursor:pointer; color:var(--primary-purple);" onclick="navigateDrilldown('campanha-detalhe', '${c.name}', {campaignId: '${c.id}'})">${c.name}</td>
        <td>${c.cliques.toLocaleString('pt-BR')}</td>
        <td>${c.candidaturas.toLocaleString('pt-BR')}</td>
        <td>${c.contratacoes.toLocaleString('pt-BR')}</td>
        <td><span style="color:#3b82f6; font-weight:600;">${c.conversaoVisitaCandidatura}%</span></td>
        <td><span style="color:#10b981; font-weight:600;">${c.conversaoCandidaturaContratacao}%</span></td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function renderCampaignDetailCharts(camp) {
  const ctxTrend = document.getElementById('chartCampaignTrend')?.getContext('2d');
  
  renderChart('chartCampaignTrend', 'line', {
    labels: MockDB.timeSeries.labels,
    datasets: [
      { label: 'Cliques', data: [2000, 2500, 2800, 3100, 2900, 2400, 2100], borderColor: '#3b82f6', backgroundColor: ctxTrend ? createGradient(ctxTrend, 'rgba(59, 130, 246, 0.2)', 'transparent') : 'transparent', fill: true },
      { label: 'Candidaturas', data: [500, 650, 700, 850, 800, 600, 520], borderColor: '#8b5cf6', backgroundColor: 'transparent' }
    ]
  }, { plugins: { legend: { display: true, position: 'top' } } });

  renderChart('chartCampaignFunnel', 'bar', {
    labels: ['Visita', 'Candidatura', 'Seleção', 'Contratação'],
    datasets: [{
      label: 'Candidatos',
      data: [camp.cliques, camp.candidaturas, Math.floor(camp.candidaturas*0.4), camp.contratacoes],
      backgroundColor: '#8b5cf6'
    }]
  }, { indexAxis: 'y' });
  
  renderChart('chartCampaignMacro', 'doughnut', {
    labels: ['Seleção', 'Documentação', 'Admissão'],
    datasets: [{
      data: [Math.floor(camp.candidaturas*0.6), Math.floor(camp.candidaturas*0.25), Math.floor(camp.candidaturas*0.15)],
      backgroundColor: ['#3b82f6', '#f59e0b', '#10b981'],
      borderWidth: 0
    }]
  }, { cutout: '75%' });
  
  const utms = MockDB.utms.filter(u => u.campaignId === camp.id);
  renderChart('chartCampaignUtmConv', 'bar', {
    labels: utms.map(u => u.utm_source),
    datasets: [{
      label: 'Conv V->C (%)',
      data: utms.map(u => parseFloat(u.conversaoVisitaCandidatura)),
      backgroundColor: '#10b981'
    }]
  }, { indexAxis: 'x' });
}

function renderUtmDetailCharts(utm) {
  const ctxTrend = document.getElementById('chartUtmTrend')?.getContext('2d');
  
  renderChart('chartUtmTrend', 'line', {
    labels: MockDB.timeSeries.labels,
    datasets: [{ label: 'Cliques', data: [500, 600, 750, 900, 800, 700, 650], borderColor: '#3b82f6', backgroundColor: ctxTrend ? createGradient(ctxTrend, 'rgba(59,130,246,0.2)', 'transparent') : 'transparent', fill: true }]
  }, { plugins: { legend: { display: false } } });
  
  renderChart('chartUtmFunnel', 'bar', {
    labels: ['Visita', 'Candidatura', 'Contratação'],
    datasets: [{ label: 'Candidatos', data: [utm.cliques, utm.candidaturas, utm.contratacoes], backgroundColor: '#8b5cf6' }]
  }, { indexAxis: 'y' });
  
  renderChart('chartUtmMacro', 'doughnut', {
    labels: ['Seleção', 'Documentação', 'Admissão'],
    datasets: [{ data: [60, 25, 15], backgroundColor: ['#3b82f6', '#f59e0b', '#10b981'], borderWidth: 0 }]
  }, { cutout: '75%' });
  
  renderChart('chartUtmStatus', 'doughnut', {
    labels: ['Aprovado', 'Reprovado', 'Em andamento'],
    datasets: [{ data: [40, 30, 30], backgroundColor: ['#10b981', '#ef4444', '#f59e0b'], borderWidth: 0 }]
  }, { cutout: '75%' });
}

// ==========================================
// Routing and Core Logic
// ==========================================
let currentContext = { level: 'overview', campaignId: null, utmId: null, macroetapa: null, microetapa: null, candidateId: null };
let navigationHistory = [];
let currentFilters = { periodo: null, fonte: null, meio: null, campanha: null, macroetapa: null, status: null };

function refreshDashboard() {
  const currentView = document.querySelector('.metrics-view[style="display: block;"]') || document.querySelector('.metrics-view.active');
  if (currentView) {
    const viewId = currentView.id.replace('view-', '');
    if (viewId === 'visao-geral') { initCharts(); initRanking(); initFunnel(); }
    else if (viewId === 'aquisicao') { initAcquisitionView(); }
    else if (viewId === 'funil-people') { initFunnelPeopleView(); }
    else if (viewId === 'conversoes') { initConversionsView(); }
    else if (viewId === 'ranking') { initRanking(); }
    else if (viewId === 'usuarios') { renderUserList('Filtros Aplicados'); }
    else if (viewId === 'campanha-detalhe' && currentContext.campaignId) { openCampaignDetail(currentContext.campaignId); }
    else if (viewId === 'utm-detalhe' && currentContext.utmId) { openUtmDetail(currentContext.utmId); }
  }
}

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.style.fontWeight = '500';
        b.style.color = 'var(--text-muted)';
        b.style.borderBottomColor = 'transparent';
      });
      tabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      btn.style.fontWeight = '600';
      btn.style.color = 'var(--primary-purple)';
      btn.style.borderBottomColor = 'var(--primary-purple)';
      
      const targetId = btn.getAttribute('data-tab');
      const activeContent = document.getElementById(targetId);
      if (activeContent) activeContent.style.display = 'block';

      if(targetId === 'tab-metricas') {
         navigateMacro('visao-geral', false);
      }
    });
  });
}

function initSidebarRouting() {
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get('view') || 'visao-geral';
  if (viewParam.includes('detalhe') || viewParam === 'usuarios' || viewParam === 'jornada') {
    navigateDrilldown(viewParam, 'Acesso Direto');
  } else {
    navigateMacro(viewParam, false);
  }
}

function navigateMacro(viewId, pushState = true) {
  navigationHistory = [];
  
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.metrics-view').forEach(v => {
    v.style.display = 'none';
    v.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`.sidebar-link[data-view="${viewId}"]`);
  const activeView = document.getElementById(`view-${viewId}`);
  
  if (activeLink) activeLink.classList.add('active');
  if (activeView) {
    activeView.style.display = 'block';
    activeView.classList.add('active');
  }

  const drillBar = document.getElementById('drilldown-bar');
  if (drillBar) drillBar.style.display = 'none';

  if (pushState) {
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('tab', 'metricas');
    newUrl.searchParams.set('view', viewId);
    window.history.pushState({}, '', newUrl);
  }

  // Allow DOM to paint so canvas dimensions are computed correctly before rendering charts
  setTimeout(() => {
    if (viewId === 'visao-geral') { initCharts(); initRanking(); initFunnel(); }
    else if (viewId === 'aquisicao') { initAcquisitionView(); }
    else if (viewId === 'funil-people') { initFunnelPeopleView(); }
    else if (viewId === 'conversoes') { initConversionsView(); }
    else if (viewId === 'ranking') { initRanking(); }
    else if (viewId === 'usuarios') { renderUserList('Todos os Usuários', {}); }
  }, 10);
}

function navigateDrilldown(viewId, contextName, contextData) {
  const currentView = document.querySelector('.metrics-view[style="display: block;"]') || document.querySelector('.metrics-view.active');
  if (currentView) {
    const currentViewId = currentView.id.replace('view-', '');
    if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1].viewId !== currentViewId) {
      navigationHistory.push({
        viewId: currentViewId,
        title: document.querySelector('.drilldown-context .current')?.innerText || 'Métricas',
        data: currentContext
      });
    }
  }

  document.querySelectorAll('.metrics-view').forEach(v => {
    v.style.display = 'none';
    v.classList.remove('active');
  });
  
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.style.display = 'block';
    targetView.classList.add('active');
  }

  const drillBar = document.getElementById('drilldown-bar');
  const drillPath = document.getElementById('drilldown-path');
  
  if (drillBar && drillPath) {
    drillBar.style.display = 'flex';
    let pathHtml = `<a href="#" onclick="navigateMacro('visao-geral')">Visão Geral</a>`;
    navigationHistory.slice(1).forEach((hist, idx) => {
       pathHtml += ` <span class="separator">/</span> <a href="#" onclick="navigateBackTo(${idx + 1})">${hist.title}</a>`;
    });
    pathHtml += ` <span class="separator">/</span> <span class="current">${contextName}</span>`;
    drillPath.innerHTML = pathHtml;
  }

  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

  setTimeout(() => {
    if (viewId === 'campanha-detalhe' && contextData?.campaignId) { openCampaignDetail(contextData.campaignId); }
    else if (viewId === 'utm-detalhe' && contextData?.utmId) { openUtmDetail(contextData.utmId); }
    else if (viewId === 'macroetapa-detalhe' && contextData?.macroetapa) { openMacroDetail(contextData.macroetapa, contextData.campaignId, contextData.utmId); }
    else if (viewId === 'usuarios') { renderUserList(contextName, contextData); }
    else if (viewId === 'jornada' && contextData?.candidateId) { openCandidateJourney(contextData.candidateId); }
  }, 10);
}

function navigateBack() {
  if (navigationHistory.length > 0) {
    const prev = navigationHistory.pop();
    if (navigationHistory.length === 0) {
       navigateMacro(prev.viewId);
    } else {
       const target = prev.viewId;
       const context = prev.title;
       const data = prev.data;
       navigationHistory.pop();
       navigateDrilldown(target, context, data);
    }
  } else {
    navigateMacro('visao-geral');
  }
}

function navigateBackTo(index) {
  while (navigationHistory.length > index) { navigationHistory.pop(); }
  navigateBack();
}

// ==========================================
// Drill-down Populators
// ==========================================
function openCampaignDetail(campaignId) {
  const camp = MockDB.campaigns.find(c => c.id === campaignId || c.name === campaignId);
  if (!camp) return;
  currentContext = { ...currentContext, level: 'campaign', campaignId: camp.id };
  
  const elTitle = document.getElementById('cd-title');
  if (elTitle) elTitle.innerText = camp.name;
  
  const elKpis = document.getElementById('cd-kpis');
  if (elKpis) {
    elKpis.innerHTML = `
      <div class="kpi-card card"><div class="metric-label">Cliques</div><div class="metric-value">${camp.cliques.toLocaleString('pt-BR')}</div></div>
      <div class="kpi-card card"><div class="metric-label">Candidaturas</div><div class="metric-value">${camp.candidaturas.toLocaleString('pt-BR')}</div></div>
      <div class="kpi-card card"><div class="metric-label">Contratações</div><div class="metric-value">${camp.contratacoes.toLocaleString('pt-BR')}</div></div>
      <div class="kpi-card card"><div class="metric-label">Conv V->C</div><div class="metric-value" style="color:#3b82f6;">${camp.conversaoVisitaCandidatura}%</div></div>
      <div class="kpi-card card"><div class="metric-label">Conv C->C</div><div class="metric-value" style="color:#10b981;">${camp.conversaoCandidaturaContratacao}%</div></div>
      <div class="kpi-card card"><div class="metric-label">Campaign Score</div><div class="metric-value" style="color:var(--primary-purple);">${camp.score}</div></div>
    `;
  }

  renderCampaignDetailCharts(camp);

  const utms = MockDB.utms.filter(u => u.campaignId === camp.id);
  const tbodyUtms = document.getElementById('cd-utms-tbody');
  if (tbodyUtms) {
    tbodyUtms.innerHTML = '';
    utms.forEach(u => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${u.utm_source}</td>
        <td>${u.utm_medium}</td>
        <td>${u.utm_campaign}</td>
        <td>${u.utm_content}</td>
        <td>${u.cliques.toLocaleString('pt-BR')}</td>
        <td>${u.candidaturas.toLocaleString('pt-BR')}</td>
        <td>${u.contratacoes.toLocaleString('pt-BR')}</td>
        <td><span style="color:#3b82f6; font-weight:600;">${u.conversaoVisitaCandidatura}%</span></td>
        <td><span style="color:#10b981; font-weight:600;">${u.conversaoCandidaturaContratacao}%</span></td>
        <td><button class="btn btn-secondary btn-sm" onclick="navigateDrilldown('utm-detalhe', 'UTM: ${u.utm_source}', {utmId: '${u.id}'})">Analisar UTM</button></td>
      `;
      tbodyUtms.appendChild(tr);
    });
  }
  
  const tbodyStages = document.getElementById('cd-stages-tbody');
  if (tbodyStages) {
    tbodyStages.innerHTML = '';
    Object.keys(MockDB.peopleStages).forEach(macro => {
      const rowMacro = document.createElement('tr');
      rowMacro.innerHTML = `
        <td style="font-weight:600;">${macro}</td>
        <td>-</td>
        <td style="font-weight:600;">${Math.floor(camp.candidaturas * 0.3)}</td>
        <td>-</td>
        <td>-</td>
        <td><button class="btn btn-secondary btn-sm" onclick="navigateDrilldown('macroetapa-detalhe', '${macro}', {macroetapa: '${macro}', campaignId: '${camp.id}'})">Ver Microetapas</button></td>
      `;
      tbodyStages.appendChild(rowMacro);
    });
  }
}

function openUtmDetail(utmId) {
  const elTitle = document.getElementById('ud-title');
  const elSubtitle = document.getElementById('ud-subtitle');
  const elKpis = document.getElementById('ud-kpis');
  const viewContainer = document.getElementById('view-utm-detalhe');
  
  const utm = MockDB.utms.find(u => u.id === utmId);
  
  if (!utm) {
    if (elTitle) elTitle.innerText = `UTM não encontrada`;
    if (elSubtitle) elSubtitle.innerText = `Não encontramos dados para a UTM selecionada.`;
    if (elKpis) elKpis.innerHTML = '';
    // Hide charts and tables
    const grids = viewContainer.querySelectorAll('.grid-12, .card.overflow-x');
    grids.forEach(g => g.style.display = 'none');
    return;
  }
  
  // Restore charts and tables if they were hidden
  const grids = viewContainer.querySelectorAll('.grid-12, .card.overflow-x');
  grids.forEach(g => g.style.display = '');

  currentContext = { ...currentContext, level: 'utm', utmId: utm.id };
  const campaign = MockDB.campaigns.find(c => c.id === utm.campaignId);
  const campName = campaign ? campaign.name : 'Desconhecida';
  
  if (elTitle) elTitle.innerText = `UTM: ${utm.utm_source} / ${utm.utm_medium}`;
  if (elSubtitle) {
    elSubtitle.innerHTML = `
      <strong>Campanha:</strong> ${campName} &bull; 
      <strong>Source:</strong> ${utm.utm_source} &bull; 
      <strong>Medium:</strong> ${utm.utm_medium} &bull; 
      <strong>Campaign:</strong> ${utm.utm_campaign} &bull; 
      <strong>Content:</strong> ${utm.utm_content || '-'} &bull; 
      <strong>Term:</strong> ${utm.utm_term || '-'} <br>
      <a href="${utm.url}" target="_blank" style="color: var(--primary-purple); font-size: 13px;">${utm.url}</a>
    `;
  }
  
  if (elKpis) {
    elKpis.innerHTML = `
      <div class="kpi-card card"><div class="metric-label">Cliques</div><div class="metric-value">${utm.cliques.toLocaleString('pt-BR')}</div></div>
      <div class="kpi-card card"><div class="metric-label">Candidaturas</div><div class="metric-value">${utm.candidaturas.toLocaleString('pt-BR')}</div></div>
      <div class="kpi-card card"><div class="metric-label">Contratações</div><div class="metric-value">${utm.contratacoes.toLocaleString('pt-BR')}</div></div>
      <div class="kpi-card card"><div class="metric-label">Conv V->C</div><div class="metric-value" style="color:#3b82f6;">${utm.conversaoVisitaCandidatura}%</div></div>
      <div class="kpi-card card"><div class="metric-label">Conv C->C</div><div class="metric-value" style="color:#10b981;">${utm.conversaoCandidaturaContratacao}%</div></div>
    `;
  }
  
  renderUtmDetailCharts(utm);
  
  const cands = MockDB.candidates.filter(c => c.utmId === utm.id);
  const tbody = document.getElementById('ud-candidates-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    cands.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><div style="font-weight:600;">${c.name}</div></td>
        <td>${c.id}</td>
        <td>${c.applicationId}</td>
        <td>${c.vaga}</td>
        <td><span class="badge" style="background:#f1f5f9; color:#475569;">${c.macroetapa}</span></td>
        <td>${c.microetapa}</td>
        <td>${c.status}</td>
        <td>${c.dataCandidatura}</td>
        <td>${c.dataContratacao || '-'}</td>
        <td><button class="btn btn-secondary btn-sm" onclick="navigateDrilldown('jornada', 'Jornada: ${c.name}', {candidateId: '${c.id}'})">Ver Jornada</button></td>
      `;
      tbody.appendChild(tr);
    });
    if (cands.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" class="empty-state">Nenhum candidato simulado retornado para esta UTM.</td></tr>`;
    }
  }
}

function openMacroDetail(macro, campaignId, utmId) {
  const elTitle = document.getElementById('md-title');
  if (elTitle) elTitle.innerText = `Macroetapa: ${macro}`;
  
  const microetapas = MockDB.peopleStages[macro] || [];
  const tbody = document.getElementById('md-micro-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    microetapas.forEach(m => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:600;">${m.label}</td>
        <td>${m.cands.toLocaleString('pt-BR')}</td>
        <td>${m.tempo}</td>
        <td><button class="btn btn-secondary btn-sm" onclick="navigateDrilldown('usuarios', 'Candidatos: ${m.label}', {macroetapa: '${macro}', microetapa: '${m.label}'})">Ver Candidatos</button></td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function openCandidateList(contextName, filterObj) {
  renderUserList(contextName, filterObj);
}

function openCandidateJourney(candidateId) {
  const cand = MockDB.candidates.find(c => c.id === candidateId);
  if (!cand) return;
  
  const title = document.getElementById('journey-title');
  if (title) title.innerText = `Jornada: ${cand.name}`;
  
  const originUl = document.getElementById('journey-origin');
  if (originUl) {
    originUl.innerHTML = `
      <li><strong>Campanha:</strong> ${MockDB.campaigns.find(c=>c.id === cand.campaignId)?.name || '-'}</li>
      <li><strong>Fonte/Meio:</strong> ${cand.source} / ${cand.medium}</li>
      <li><strong>UTM Campaign:</strong> ${cand.utm_campaign}</li>
      <li><strong>UTM Content:</strong> ${cand.utm_content}</li>
      <li><strong>Dispositivo:</strong> ${cand.device}</li>
    `;
  }
  
  const peopleUl = document.getElementById('journey-people');
  if (peopleUl) {
    peopleUl.innerHTML = `
      <li><strong>Candidato:</strong> ${cand.name} (${cand.id})</li>
      <li><strong>Email:</strong> ${cand.emailMasked}</li>
      <li><strong>Telefone:</strong> ${cand.phoneMasked}</li>
      <li><strong>Vaga:</strong> ${cand.vaga}</li>
      <li><strong>Status:</strong> ${cand.status}</li>
      <li><strong>Local:</strong> ${cand.cidade} - ${cand.estado}</li>
    `;
  }
  
  const timeline = document.getElementById('journey-timeline-container');
  if (timeline) {
    timeline.innerHTML = '';
    const events = MockDB.journeyEvents[cand.id] || [];
    events.forEach(ev => {
      const eventClass = ev.status === 'completed' ? 'completed' : ev.status === 'pending' ? 'pending' : '';
      const div = document.createElement('div');
      div.className = `timeline-event ${eventClass}`;
      div.innerHTML = `
        <div class="timeline-time">${ev.date}</div>
        <div class="timeline-title">${ev.title}</div>
        <div class="timeline-details">${ev.description} <br> <span style="color:var(--primary-purple); font-weight:600;">[${ev.macroetapa} > ${ev.microetapa}]</span></div>
      `;
      timeline.appendChild(div);
    });
  }
}

function renderUserList(contextName, filterObj) {
  const title = document.getElementById('ul-title');
  if (title) title.innerText = contextName ? `Usuários / Candidatos (${contextName})` : 'Usuários / Candidatos';
  
  let users = MockDB.candidates;
  if (filterObj) {
    if (filterObj.campaignId) users = users.filter(u => u.campaignId === filterObj.campaignId);
    if (filterObj.utmId) users = users.filter(u => u.utmId === filterObj.utmId);
    if (filterObj.macroetapa) users = users.filter(u => u.macroetapa === filterObj.macroetapa);
    if (filterObj.microetapa) users = users.filter(u => u.microetapa === filterObj.microetapa);
  }
  
  const tbody = document.getElementById('users-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    if (users.length === 0) {
      tbody.innerHTML = `<tr><td colspan="12" class="empty-state">Nenhum candidato encontrado.</td></tr>`;
      return;
    }
    users.forEach(u => {
      const campName = MockDB.campaigns.find(c => c.id === u.campaignId)?.name || '-';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><div style="font-weight:600;">${u.name}</div><div class="data-mask">${u.emailMasked}</div></td>
        <td>${u.id}</td>
        <td>${u.applicationId}</td>
        <td>${campName}</td>
        <td>${u.source}/${u.medium}</td>
        <td>${u.vaga}</td>
        <td><span class="badge" style="background:#f1f5f9; color:#475569;">${u.macroetapa}</span></td>
        <td>${u.microetapa}</td>
        <td>${u.status}</td>
        <td>${u.dataCandidatura}</td>
        <td>${u.dataContratacao || '-'}</td>
        <td><button class="btn btn-secondary btn-sm" onclick="navigateDrilldown('jornada', 'Jornada: ${u.name}', {candidateId: '${u.id}'})">Ver Jornada</button></td>
      `;
      tbody.appendChild(tr);
    });
  }
}

// ==========================================
// Funnel & Ranking Logic
// ==========================================
function initFunnelPeopleView() {
  initFunnel();
  const tbody = document.getElementById('funil-micro-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    Object.keys(MockDB.peopleStages).forEach(macro => {
      MockDB.peopleStages[macro].forEach(micro => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><span class="badge" style="background:#f1f5f9; color:#475569;">${macro}</span></td>
          <td style="font-weight:600;">${micro.label}</td>
          <td>${micro.cands.toLocaleString('pt-BR')}</td>
          <td>${micro.tempo}</td>
          <td><button class="btn btn-secondary btn-sm" onclick="navigateDrilldown('usuarios', 'Candidatos: ${micro.label}', {macroetapa: '${macro}', microetapa: '${micro.label}'})">Ver Candidatos</button></td>
        `;
        tbody.appendChild(tr);
      });
    });
  }
}

function initFunnel() {
  const container1 = document.getElementById('funnel-container');
  const container2 = document.getElementById('funnel-people-container');
  const funnelData = MockDB.funnelStages;

  const renderFunnel = (container) => {
    if (!container) return;
    container.innerHTML = '';
    funnelData.forEach(item => {
      const el = document.createElement('div');
      el.className = 'funnel-step';
      const bar = document.createElement('div');
      bar.className = 'funnel-bar';
      bar.style.width = `${item.percent}%`;
      const content = document.createElement('div');
      content.className = 'funnel-content';
      const left = document.createElement('div');
      const title = document.createElement('div');
      title.className = 'funnel-title';
      title.innerText = item.label;
      left.appendChild(title);
      if (item.percent < 100) {
        const stats = document.createElement('div');
        stats.className = 'funnel-stats';
        stats.innerText = `Retenção acumulada: ${item.percent}%`;
        left.appendChild(stats);
      }
      const right = document.createElement('div');
      right.className = 'funnel-value';
      right.innerText = item.value.toLocaleString('pt-BR');
      content.appendChild(left);
      content.appendChild(right);
      el.appendChild(bar);
      el.appendChild(content);
      el.style.cursor = 'pointer';
      if (['Seleção', 'Documentação', 'Admissão', 'Contratação'].includes(item.label)) {
        el.onclick = () => navigateDrilldown('macroetapa-detalhe', item.label, {macroetapa: item.label});
      } else {
        el.onclick = () => navigateDrilldown('usuarios', item.label, {});
      }
      container.appendChild(el);
    });
  };

  renderFunnel(container1);
  renderFunnel(container2);
}

function initRanking() {
  const tbody = document.getElementById('ranking-tbody');
  const fullTbody = document.getElementById('ranking-full-tbody');
  
  const rankingData = [...MockDB.campaigns].sort((a, b) => {
    if (a.score === 'N/D') return 1;
    if (b.score === 'N/D') return -1;
    return b.score - a.score;
  });

  const renderRanking = (target) => {
    if (!target) return;
    target.innerHTML = '';
    rankingData.forEach((item, index) => {
      const tr = document.createElement('tr');
      let scoreBadge = '';
      if (item.score !== 'N/D') {
        let scoreColor = '#10b981';
        if(item.score < 80) scoreColor = '#f59e0b';
        if(item.score < 60) scoreColor = '#ef4444';
        scoreBadge = `<span class="badge" style="background: ${scoreColor}20; color: ${scoreColor}; font-size: 13px;">${item.score} / 100</span>`;
      } else {
        scoreBadge = `<span class="badge" style="background: #f1f5f9; color: #94a3b8; font-size: 13px;">N/D</span>`;
      }
      
      tr.innerHTML = `
        <td style="font-weight: 700; color: var(--text-muted);">${index + 1}º</td>
        <td style="font-weight: 600; color: var(--primary-purple); cursor: pointer;" onclick="navigateDrilldown('campanha-detalhe', '${item.name}', {campaignId: '${item.id}'})">${item.name}</td>
        <td>${item.fontePrincipal} / ${item.meioPrincipal}</td>
        <td>${item.cliques.toLocaleString('pt-BR')}</td>
        <td>${item.candidaturas.toLocaleString('pt-BR')}</td>
        <td style="font-weight: 600;">${item.contratacoes.toLocaleString('pt-BR')}</td>
        <td><span style="color:#3b82f6; font-weight:600;">${item.conversaoVisitaCandidatura}%</span></td>
        <td><span style="color:#10b981; font-weight:600;">${item.conversaoCandidaturaContratacao}%</span></td>
        <td>${scoreBadge}</td>
      `;
      target.appendChild(tr);
    });
  };

  renderRanking(tbody);
  renderRanking(fullTbody);
}

function applyFilters() {
  const btn = event.target;
  const originalText = btn.innerText;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Filtrando...';
  setTimeout(() => {
    btn.innerText = originalText;
    refreshDashboard();
  }, 400);
}

function clearFilters() {
  const selects = document.querySelectorAll('.form-control');
  selects.forEach(s => s.selectedIndex = 0);
  navigateMacro('visao-geral');
}

// ==========================================
// Initialization
// ==========================================
(fn=>document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn):fn())( () => {
  initTabs();
  initSidebarRouting();
  
  // URL Routing
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  if (tab === 'metricas') {
     const metricasBtn = document.querySelector('[data-tab="tab-metricas"]');
     if(metricasBtn) {
        // Switch tab
        document.querySelectorAll('.tab-btn').forEach(b => {
           b.classList.remove('active');
           b.style.fontWeight = '500';
           b.style.color = 'var(--text-muted)';
           b.style.borderBottomColor = 'transparent';
        });
        document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
        metricasBtn.classList.add('active');
        metricasBtn.style.fontWeight = '600';
        metricasBtn.style.color = 'var(--primary-purple)';
        metricasBtn.style.borderBottomColor = 'var(--primary-purple)';
        document.getElementById('tab-metricas').style.display = 'block';
     }
     
     const view = params.get('view');
     if (view === 'utm-detalhe') {
        const utmId = params.get('utmId');
        const campId = params.get('campaignId');
        
        setTimeout(() => {
           // Simulate breadcrumb behavior and routing
           currentContext.campaignId = campId;
           
           const campaign = MockDB.campaigns.find(c => c.id === campId);
           const campName = campaign ? campaign.name : 'Campanha';
           const utm = MockDB.utms.find(u => u.id === utmId);
           const utmName = utm ? `${utm.utm_source} / ${utm.utm_medium}` : 'UTM';
           
           // Clear history to start fresh
           navigationHistory = [];
           // Push visao-geral
           navigationHistory.push({ viewId: 'visao-geral', name: 'Visão Geral', context: currentContext });
           // Push campanha
           if(campaign) {
              navigationHistory.push({ viewId: 'campanha-detalhe', name: campName, context: currentContext });
           }
           
           // Update breadcrumb
           const drilldownBar = document.getElementById('drilldown-bar');
           const drilldownPath = document.getElementById('drilldown-path');
           
           let pathHtml = `<a href="#" onclick="navigateMacro('visao-geral')">Visão Geral</a> <span class="separator">/</span> `;
           if(campaign) {
              pathHtml += `<a href="#" onclick="navigateBackTo(1)">${campName}</a> <span class="separator">/</span> `;
           }
           pathHtml += `<span class="current">${utmName}</span>`;
           
           if(drilldownPath) drilldownPath.innerHTML = pathHtml;
           if(drilldownBar) drilldownBar.style.display = 'flex';
           
           // Hide sidebar views and open utm
           document.querySelectorAll('.metrics-view').forEach(v => {
              v.classList.remove('active');
              v.style.display = 'none';
           });
           const viewEl = document.getElementById('view-utm-detalhe');
           if (viewEl) {
              viewEl.classList.add('active');
              viewEl.style.display = 'block';
           }
           
           openUtmDetail(utmId);
        }, 50);
     } else {
        navigateMacro('visao-geral', false);
     }
  }
  
  const toggleBtn = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('metrics-sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      // When collapsing sidebar, resize charts smoothly
      setTimeout(() => {
         Object.values(chartInstances).forEach(chart => {
            if (chart && chart.canvas && chart.canvas.offsetParent !== null) chart.resize();
         });
      }, 300);
    });
  }
});

function toggleDatePicker() {
  const popover = document.getElementById('custom-date-popover');
  if (popover) {
    popover.style.display = popover.style.display === 'none' ? 'block' : 'none';
  }
}

function closeDatePicker() {
  const popover = document.getElementById('custom-date-popover');
  if (popover) popover.style.display = 'none';
}

function applyDatePicker() {
  closeDatePicker();
  const btn = document.getElementById('period-display');
  if(btn) btn.innerHTML = 'Período personalizado <i class="fa-solid fa-calendar-days" style="margin-left: 8px;"></i>';
  applyFilters();
}

function toggleAdvancedFilters(e) {
  e.preventDefault();
  const area = document.getElementById('advanced-filters-area');
  const btn = document.getElementById('btn-adv-filters');
  if(area && btn) {
    if(area.style.display === 'none') {
       area.style.display = 'block';
       btn.innerHTML = 'Filtros avançados <i class="fa-solid fa-chevron-up"></i>';
    } else {
       area.style.display = 'none';
       btn.innerHTML = 'Filtros avançados <i class="fa-solid fa-chevron-down"></i>';
    }
  }
}

function openPesosModal() {
  const modal = document.getElementById('modal-pesos');
  if(modal) modal.style.display = 'flex';
}

function closePesosModal() {
  const modal = document.getElementById('modal-pesos');
  if(modal) modal.style.display = 'none';
}
