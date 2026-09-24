let utmsHistory = [
  {
    id: '1',
    date: '20/05/2026 14:30',
    createdBy: 'Admin TP',
    source: 'whatsapp',
    medium: 'messaging',
    content: 'grupo_pcd',
    term: 'pcd',
    campaign: 'vagas_bco_talentos_pcd',
    longUrl: 'https://peoplexp.teleperformance.com.br/vagas?utm_source=whatsapp&utm_medium=messaging&utm_campaign=vagas_bco_talentos_pcd&utm_content=grupo_pcd&utm_term=pcd',
    shortUrl: 'https://bit.ly/4exemplo',
    bitlyStatus: 'success'
  },
  {
    id: '2',
    date: '18/05/2026 09:15',
    createdBy: 'Admin TP',
    source: 'linkedin',
    medium: 'social',
    content: 'post_feed',
    term: '-',
    campaign: 'vagas_bco_talentos_pcd',
    longUrl: 'https://peoplexp.teleperformance.com.br/vagas?utm_source=linkedin&utm_medium=social&utm_campaign=vagas_bco_talentos_pcd&utm_content=post_feed',
    shortUrl: '',
    bitlyStatus: 'error'
  }
];

let currentGeneratedId = null;
let currentModalId = null;

document.addEventListener('DOMContentLoaded', () => {
  // Tabs logic
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      if (document.getElementById(targetId)) {
        document.getElementById(targetId).classList.add('active');
      }
    });
  });

  // Dropdown click logic
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;
      dropdown.classList.toggle('show');
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  });

  // UTM Generator Logic
  const btnGerar = document.getElementById('btn-gerar');
  const btnLimpar = document.getElementById('btn-limpar');

  if(btnGerar) {
    btnGerar.addEventListener('click', () => {
      const baseUrl = document.getElementById('url_base').value.trim();
      const source = document.getElementById('utm_source').value;
      const medium = document.getElementById('utm_medium').value;
      const campaign = document.getElementById('utm_campaign').value;
      
      let content = document.getElementById('utm_content').value.trim();
      let term = document.getElementById('utm_term').value.trim();

      const normalize = (str) => {
        return str.toLowerCase()
                  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                  .replace(/ /g, '_')
                  .replace(/[^a-z0-9_]/g, '');
      };

      let hasError = false;

      if(!baseUrl) {
        showToast('URL Base é obrigatória.', 'error');
        document.getElementById('url_base').style.borderColor = 'var(--error)';
        hasError = true;
      } else {
        try {
          new URL(baseUrl);
          document.getElementById('url_base').style.borderColor = 'var(--border-color)';
        } catch(e) {
          showToast('Informe uma URL válida.', 'error');
          document.getElementById('url_base').style.borderColor = 'var(--error)';
          hasError = true;
        }
      }

      if(!source) {
        document.getElementById('utm_source').style.borderColor = 'var(--error)';
        hasError = true;
      } else {
        document.getElementById('utm_source').style.borderColor = 'var(--border-color)';
      }

      if(!medium) {
        document.getElementById('utm_medium').style.borderColor = 'var(--error)';
        hasError = true;
      } else {
        document.getElementById('utm_medium').style.borderColor = 'var(--border-color)';
      }

      if (hasError) {
        if (source || medium) {
            showToast('Preencha todos os campos obrigatórios (*)', 'error');
        }
        return;
      }

      content = content ? normalize(content) : '';
      term = term ? normalize(term) : '';

      let finalUrl = `${baseUrl}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
      if(content) finalUrl += `&utm_content=${content}`;
      if(term) finalUrl += `&utm_term=${term}`;

      // Change UI state
      document.getElementById('initial-state-box').style.display = 'none';
      document.getElementById('generated-links-area').style.display = 'flex';
      
      document.getElementById('long-url-preview').innerText = finalUrl;
      
      // Auto-save
      const novoId = adicionarNoHistorico(source, medium, content, term, campaign, finalUrl);
      currentGeneratedId = novoId;
      
      showToast('UTM gerada e salva automaticamente no histórico da campanha.', 'success');
      
      processBitly(novoId);
    });

    btnLimpar.addEventListener('click', limparCampos);
  }

  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--border-color)';
    });
  });
});

function processBitly(id) {
  const record = utmsHistory.find(u => u.id === id);
  if(!record) return;

  // Mock API Call - Instantaneous for Mockup
  record.bitlyStatus = 'success';
  record.shortUrl = 'https://bit.ly/people-vagas-pcd';
  atualizarStatusTabela(id, 'success');
  
  if(currentGeneratedId === id) {
    document.getElementById('short-url-preview').innerText = record.shortUrl;
  }
  if(currentModalId === id) {
    openModal(id); // refresh modal
  }
}

function copyShortUrl() {
  const shortUrl = document.getElementById('short-url-preview').innerText;
  copyText(shortUrl, 'Link encurtado copiado com sucesso.');
}

function copyLongUrl() {
  const longUrl = document.getElementById('long-url-preview').innerText;
  copyText(longUrl, 'Link completo copiado com sucesso.');
}

function copyText(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg, 'success');
  }).catch(() => {
    showToast('Erro ao copiar', 'error');
  });
}

function limparCampos() {
  document.getElementById('url_base').value = 'https://peoplexp.teleperformance.com.br/vagas';
  document.getElementById('url_base').style.borderColor = 'var(--border-color)';
  
  document.getElementById('utm_source').value = '';
  document.getElementById('utm_source').style.borderColor = 'var(--border-color)';
  
  document.getElementById('utm_medium').value = '';
  document.getElementById('utm_medium').style.borderColor = 'var(--border-color)';
  
  document.getElementById('utm_content').value = '';
  document.getElementById('utm_term').value = '';
  
  document.getElementById('initial-state-box').style.display = 'flex';
  document.getElementById('generated-links-area').style.display = 'none';
  currentGeneratedId = null;
}

function adicionarNoHistorico(source, medium, content, term, campaign, longUrl) {
  const now = new Date();
  const id = Date.now().toString();
  
  const record = {
    id: id,
    date: `${now.toLocaleDateString('pt-BR')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`,
    createdBy: 'Admin TP',
    source: source,
    medium: medium,
    content: content || '-',
    term: term || '-',
    campaign: campaign,
    longUrl: longUrl,
    shortUrl: '',
    bitlyStatus: 'loading'
  };
  
  utmsHistory.unshift(record);

  const tbody = document.querySelector('#tabela-historico tbody');
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', id);
  tr.style.animation = 'flash 2s';
  
  tr.innerHTML = `
    <td>${record.date}</td>
    <td>${record.createdBy}</td>
    <td><span style="font-weight: 500;">${record.source}</span></td>
    <td>${record.medium}</td>
    <td>${record.content}</td>
    <td>${record.term}</td>
    <td class="status-cell">
      <span class="badge" style="background:#fff3e0; color:#e65100;">Em processamento</span>
    </td>
    <td class="actions">
      <button class="btn-icon" title="Visualizar Métricas" onclick="window.location.href='campanhas.html?tab=metricas&view=utm-detalhe&campaignId=c1&utmId=${id}'"><i class="fa-solid fa-chart-line"></i></button>
      <button class="btn-icon" title="Duplicar UTM" onclick="duplicarUTM('${source}', '${medium}', '${content === '-' ? '' : content}', '${term === '-' ? '' : term}')"><i class="fa-regular fa-clone"></i></button>
      <button class="btn-icon" title="Inativar" style="color: var(--error);"><i class="fa-solid fa-ban"></i></button>
    </td>
  `;
  
  if (!document.getElementById('flash-style')) {
    const style = document.createElement('style');
    style.id = 'flash-style';
    style.innerHTML = `
      @keyframes flash {
        0% { background-color: #e8f5e9; }
        100% { background-color: transparent; }
      }
    `;
    document.head.appendChild(style);
  }
  
  tbody.prepend(tr);
  return id;
}

function atualizarStatusTabela(id, status) {
  const tr = document.querySelector(`tr[data-id="${id}"]`);
  if(!tr) return;
  const statusCell = tr.querySelector('.status-cell');
  
  if(status === 'loading') {
    statusCell.innerHTML = `<span class="badge" style="background:#fff3e0; color:#e65100;"><i class="fa-solid fa-spinner fa-spin" style="margin-right:4px;"></i>Em processamento</span>`;
  } else if(status === 'success') {
    statusCell.innerHTML = `<span class="badge" style="background:#eef2ff; color:#4338ca;">Gerado</span>`;
  } else if(status === 'error') {
    statusCell.innerHTML = `<span class="badge" style="background:#fee2e2; color:#b91c1c;">Erro ao gerar</span>`;
  }
}

function duplicarUTM(source, medium, content, term) {
  document.querySelector('[data-target="tab-gerador"]').click();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  document.getElementById('utm_source').value = source;
  document.getElementById('utm_medium').value = medium;
  document.getElementById('utm_content').value = content;
  document.getElementById('utm_term').value = term;
  
  showToast('Dados copiados para o formulário.', 'success');
}



function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.className = `toast toast-${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Modal Logic
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Drawer Logic
function openDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  if (drawer) {
    drawer.classList.add('active');
  }
}

function closeDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  if (drawer) {
    drawer.classList.remove('active');
  }
}

// Select All Checkbox Logic (for mass actions)
function setupTableSelection(tableId, selectAllId) {
  const selectAll = document.getElementById(selectAllId);
  if (!selectAll) return;
  const table = document.getElementById(tableId);
  if (!table) return;
  const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
  
  selectAll.addEventListener('change', (e) => {
    checkboxes.forEach(cb => cb.checked = e.target.checked);
  });
}

function setupMassAction(tableId, selectAllId, btnId, countId) {
  const selectAll = document.getElementById(selectAllId);
  const table = document.getElementById(tableId);
  const btn = document.getElementById(btnId);
  const countSpan = document.getElementById(countId);
  if (!table || !btn) return;
  
  const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
  
  function updateState() {
    const checkedCount = table.querySelectorAll('tbody input[type="checkbox"]:checked').length;
    if(countSpan) countSpan.textContent = checkedCount;
    if (checkedCount > 0) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', 'true');
    }
  }

  if (selectAll) {
    selectAll.addEventListener('change', (e) => {
      checkboxes.forEach(cb => cb.checked = e.target.checked);
      updateState();
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateState);
  });
}

function setupMassActionMultipleEntrevista(tableId, selectAllId) {
  const selectAll = document.getElementById(selectAllId);
  const table = document.getElementById(tableId);
  const btnAprovar = document.getElementById('btn-mass-aprovar-ent');
  const btnFinalista = document.getElementById('btn-mass-finalista-ent');
  const btnReprovar = document.getElementById('btn-mass-reprove-ent');
  const cntAprovar = document.getElementById('mass-aprovar-count-ent');
  const cntFinalista = document.getElementById('mass-finalista-count-ent');
  const cntReprovar = document.getElementById('mass-reprove-count-ent');

  if (!table || !btnAprovar || !btnFinalista || !btnReprovar) return;
  
  const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
  
  function updateState() {
    let checkedCount = 0;
    let allConcluded = true;
    
    table.querySelectorAll('tbody input[type="checkbox"]:checked').forEach(cb => {
      checkedCount++;
      if (cb.dataset.concluded !== "true") {
        allConcluded = false;
      }
    });

    if(cntAprovar) cntAprovar.textContent = checkedCount;
    if(cntFinalista) cntFinalista.textContent = checkedCount;
    if(cntReprovar) cntReprovar.textContent = checkedCount;

    if (checkedCount > 0) {
      if (allConcluded) btnAprovar.removeAttribute('disabled');
      else btnAprovar.setAttribute('disabled', 'true');
      
      btnFinalista.removeAttribute('disabled');
      btnReprovar.removeAttribute('disabled');
    } else {
      btnAprovar.setAttribute('disabled', 'true');
      btnFinalista.setAttribute('disabled', 'true');
      btnReprovar.setAttribute('disabled', 'true');
    }
  }

  if (selectAll) {
    selectAll.addEventListener('change', (e) => {
      checkboxes.forEach(cb => cb.checked = e.target.checked);
      updateState();
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateState);
  });
}

function setupMassActionMultipleFinalista(tableId, selectAllId) {
  const selectAll = document.getElementById(selectAllId);
  const table = document.getElementById(tableId);
  const btnAprovar = document.getElementById('btn-mass-aprovar-fin');
  const btnDinamica = document.getElementById('btn-mass-dinamica-fin');
  const btnReprovar = document.getElementById('btn-mass-reprove-fin');
  const cntAprovar = document.getElementById('mass-aprovar-count-fin');
  const cntDinamica = document.getElementById('mass-dinamica-count-fin');
  const cntReprovar = document.getElementById('mass-reprove-count-fin');

  if (!table || !btnAprovar || !btnDinamica || !btnReprovar) return;
  
  const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
  
  function updateState() {
    const checkedCount = table.querySelectorAll('tbody input[type="checkbox"]:checked').length;
    
    if(cntAprovar) cntAprovar.textContent = checkedCount;
    if(cntDinamica) cntDinamica.textContent = checkedCount;
    if(cntReprovar) cntReprovar.textContent = checkedCount;

    if (checkedCount > 0) {
      btnAprovar.removeAttribute('disabled');
      btnDinamica.removeAttribute('disabled');
      btnReprovar.removeAttribute('disabled');
    } else {
      btnAprovar.setAttribute('disabled', 'true');
      btnDinamica.setAttribute('disabled', 'true');
      btnReprovar.setAttribute('disabled', 'true');
    }
  }

  if (selectAll) {
    selectAll.addEventListener('change', (e) => {
      checkboxes.forEach(cb => cb.checked = e.target.checked);
      updateState();
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateState);
  });
}

// Hallo Data Mocks
const halloMocks = {
  '111.222.333-44': {
    nome: 'Amanda Silva', cpf: '111.222.333-44', vaga: 'ATENDENTE DE SUPORTE', idVaga: '4001',
    cidade: 'Recife/PE', dataCandidatura: '01/05/2026',
    status: 'Aguardando Candidato', resultado: 'Não iniciada', badgeClass: 'badge-hallo-nao-iniciada', icon: 'fa-minus', data: '-',
    pontuacoes: ['-', '-', '-', '-', '-', '-'],
    resumo: 'O candidato ainda não iniciou a entrevista Hallo.',
    acoes: 'lembrete'
  },
  '123.456.789-00': {
    nome: 'Juliana Ferreira', cpf: '123.456.789-00', vaga: 'BASE - SP - EXPERT EM INTERAÇÃO', idVaga: '3069',
    cidade: 'Goiânia/GO', dataCandidatura: '02/05/2026',
    status: 'Em andamento', resultado: 'Pendente', badgeClass: 'badge-hallo-pendente', icon: 'fa-clock', data: '-',
    pontuacoes: ['-', '-', '-', '-', '-', '-'],
    resumo: 'O teste Hallo ainda não foi concluído.',
    acoes: 'lembrete'
  },
  '333.444.555-66': {
    nome: 'Carlos Mendes', cpf: '333.444.555-66', vaga: 'ANALISTA DE WFM JUNIOR', idVaga: '2248',
    cidade: 'Belo Horizonte/MG', dataCandidatura: '03/05/2026',
    status: 'Aguardando Avaliação', resultado: 'Alta Aderência', badgeClass: 'badge-hallo-alta', icon: 'fa-circle-check', data: '12/06/2026',
    pontuacoes: [80, 75, 90, 85, 70, 88],
    resumo: 'Candidato apresenta forte aderência ao perfil esperado para a vaga.',
    acoes: 'decisao'
  },
  '444.555.666-77': {
    nome: 'Roberto Alves', cpf: '444.555.666-77', vaga: 'SUPERVISOR DE OPERAÇÕES', idVaga: '5012',
    cidade: 'Manaus/AM', dataCandidatura: '04/05/2026',
    status: 'Aguardando Avaliação', resultado: 'Média Aderência', badgeClass: 'badge-hallo-media', icon: 'fa-circle-exclamation', data: '15/06/2026',
    pontuacoes: [60, 65, 70, 55, 60, 68],
    resumo: 'Candidato apresenta aderência parcial, recomendando análise complementar do recrutador.',
    acoes: 'decisao'
  },
  '555.666.777-88': {
    nome: 'Fernanda Costa', cpf: '555.666.777-88', vaga: 'ANALISTA DE SUPORTE PLENO', idVaga: '6103',
    cidade: 'Florianópolis/SC', dataCandidatura: '05/05/2026',
    status: 'Aguardando Avaliação', resultado: 'Baixa Aderência', badgeClass: 'badge-hallo-baixa', icon: 'fa-circle-xmark', data: '16/06/2026',
    pontuacoes: [40, 45, 30, 50, 40, 35],
    resumo: 'Candidato apresenta baixa aderência ao perfil esperado, exigindo cautela na decisão.',
    acoes: 'decisao'
  },
  '777.888.999-00': {
    nome: 'Thiago Gomes', cpf: '777.888.999-00', vaga: 'DESENVOLVEDOR FRONT-END', idVaga: '7214',
    cidade: 'São Paulo/SP', dataCandidatura: '06/05/2026',
    status: 'Finalizado', resultado: 'Aprovado', badgeClass: 'badge-hallo-aprovado', icon: 'fa-check', data: '10/06/2026', dataFeedback: '11/06/2026',
    pontuacoes: [95, 90, 85, 95, 90, 88],
    resumo: 'Candidato apresenta forte aderência ao perfil esperado para a vaga.',
    acoes: 'nenhuma'
  },
  '888.999.000-11': {
    nome: 'Mariana Souza', cpf: '888.999.000-11', vaga: 'COORDENADOR DE RH', idVaga: '8325',
    cidade: 'Campinas/SP', dataCandidatura: '07/05/2026',
    status: 'Finalizado', resultado: 'Reprovado', badgeClass: 'badge-hallo-reprovado', icon: 'fa-times', data: '11/06/2026', dataFeedback: '12/06/2026',
    pontuacoes: [30, 25, 40, 35, 20, 30],
    resumo: 'Candidato apresenta baixa aderência ao perfil esperado, exigindo cautela na decisão.',
    acoes: 'nenhuma'
  },
  '999.000.111-22': {
    nome: 'Ricardo Almeida', cpf: '999.000.111-22', vaga: 'ANALISTA DE MARKETING', idVaga: '9140',
    cidade: 'Belo Horizonte/MG', dataCandidatura: '12/05/2026',
    status: 'Finalizado', resultado: 'Finalista', badgeClass: 'badge-hallo-finalista', icon: 'fa-star', data: '12/06/2026', dataFeedback: '13/06/2026',
    pontuacoes: [85, 80, 85, 90, 85, 80],
    resumo: 'Candidato apresentou bom desempenho geral, selecionado para a próxima etapa como finalista.',
    acoes: 'nenhuma'
  },
  '111.000.222-33': {
    nome: 'Tiago Gomes', cpf: '111.000.222-33', vaga: 'ANALISTA DE MARKETING', idVaga: '9140',
    cidade: 'Natal/RN', dataCandidatura: '01/05/2026',
    status: 'Finalista', resultado: 'Alta Aderência', badgeClass: 'badge-hallo-alta', icon: 'fa-circle-check', data: '05/05/2026',
    pontuacoes: [90, 85, 95, 80, 88, 92],
    resumo: 'Candidato apresenta forte aderência ao perfil esperado, perfil ideal para avanço e aprovação.',
    acoes: 'nenhuma'
  },
  '222.111.333-44': {
    nome: 'Leonardo Silva', cpf: '222.111.333-44', vaga: 'ANALISTA DE MARKETING', idVaga: '9140',
    cidade: 'São Paulo/SP', dataCandidatura: '02/05/2026',
    status: 'Finalista', resultado: 'Média Aderência', badgeClass: 'badge-hallo-media', icon: 'fa-circle-exclamation', data: '06/05/2026',
    pontuacoes: [65, 70, 60, 75, 68, 62],
    resumo: 'Aderência razoável para a vaga, o recrutador considerou perfil válido para a fase finalista.',
    acoes: 'nenhuma'
  },
  '333.222.444-55': {
    nome: 'Camila Santos', cpf: '333.222.444-55', vaga: 'ANALISTA DE MARKETING', idVaga: '9140',
    cidade: 'Rio de Janeiro/RJ', dataCandidatura: '03/05/2026',
    status: 'Finalista', resultado: 'Baixa Aderência', badgeClass: 'badge-hallo-baixa', icon: 'fa-circle-xmark', data: '07/05/2026',
    pontuacoes: [40, 45, 50, 35, 42, 48],
    resumo: 'Score baixo na entrevista virtual, porém aprovado por indicação direta ou análise de portfólio para finalista.',
    acoes: 'nenhuma'
  },
  '555.444.666-77': {
    nome: 'Rafael Costa', cpf: '555.444.666-77', vaga: 'ANALISTA DE MARKETING', idVaga: '9140',
    cidade: 'Porto Alegre/RS', dataCandidatura: '05/05/2026',
    status: 'Finalista', resultado: 'Alta Aderência', badgeClass: 'badge-hallo-alta', icon: 'fa-circle-check', data: '09/05/2026',
    pontuacoes: [85, 90, 88, 92, 84, 89],
    resumo: 'Perfil perfeitamente condizente com a senioridade requisitada e alinhado aos valores da companhia.',
    acoes: 'nenhuma'
  },
  '666.555.777-88': {
    nome: 'Lucas Alves', cpf: '666.555.777-88', vaga: 'ANALISTA DE MARKETING', idVaga: '9140',
    cidade: 'Fortaleza/CE', dataCandidatura: '06/05/2026',
    status: 'Finalista', resultado: 'Média Aderência', badgeClass: 'badge-hallo-media', icon: 'fa-circle-exclamation', data: '10/05/2026',
    pontuacoes: [62, 68, 71, 65, 60, 66],
    resumo: 'Atende em grande parte aos requisitos, precisará de ramp-up estruturado caso seja o escolhido final.',
    acoes: 'nenhuma'
  }
};

function openHalloDrawer(cpf) {
  const data = halloMocks[cpf];
  if(!data) return;

  // Popula Cabeçalho
  document.getElementById('dh-nome').innerText = data.nome;
  let cpfData = `CPF: ${data.cpf}`;
  if(data.cidade) cpfData += ` | Cidade: ${data.cidade}`;
  if(data.dataCandidatura) cpfData += ` | Candidatou-se em: ${data.dataCandidatura}`;
  cpfData += `<br>Vaga: ${data.idVaga} - ${data.vaga}`;
  document.getElementById('dh-cpf-data').innerHTML = cpfData;
  document.getElementById('dh-status').innerText = data.status;

  // Popula Badge Principal
  const badgeContainer = document.getElementById('dh-badge');
  badgeContainer.className = `badge-hallo ${data.badgeClass}`;
  badgeContainer.innerHTML = `<i class="fa-solid ${data.icon}"></i> ${data.resultado}`;

  // Popula Pontuações
  for(let i=0; i<6; i++) {
    document.getElementById(`dh-p${i+1}`).innerText = data.pontuacoes[i];
  }

  // Popula Resumo e Data Adicional
  document.getElementById('dh-resumo').innerText = data.resumo;
  
  let desfechoHtml = data.data !== '-' ? `Concluído em: ${data.data}` : 'Ainda não concluído.';
  if(data.dataFeedback) {
    desfechoHtml += `<br>Feedback do recrutador: ${data.dataFeedback}`;
  }
  document.getElementById('dh-desfecho').innerHTML = desfechoHtml;

  // Renderiza botões de ação
  const actionsContainer = document.getElementById('dh-acoes');
  let acoesHtml = `<button class="btn btn-secondary" onclick="closeDrawer('drawer-hallo')">Fechar</button>`;

  if(data.acoes === 'decisao') {
    acoesHtml = `
      <button class="btn btn-primary" onclick="closeDrawer('drawer-hallo'); openModal('modal-aprovar')">Aprovar</button>
      <button class="btn btn-secondary" onclick="closeDrawer('drawer-hallo'); openModal('modal-finalista')">Finalista</button>
      <button class="btn btn-danger" onclick="closeDrawer('drawer-hallo'); openModal('modal-reprovar')">Reprovar</button>
    `;
  } else if(data.acoes === 'lembrete') {
    acoesHtml = `
      <button class="btn btn-secondary" onclick="closeDrawer('drawer-hallo')">Fechar</button>
      <button class="btn btn-primary" onclick="showToast('Lembrete enviado com sucesso', 'success')"><i class="fa-solid fa-bell"></i> Enviar Lembrete</button>
    `;
  } else if(data.acoes === 'nenhuma') {
    acoesHtml = `<button class="btn btn-secondary" onclick="closeDrawer('drawer-hallo')">Fechar</button>`;
  }

  actionsContainer.innerHTML = acoesHtml;
  actionsContainer.className = 'hallo-drawer-actions';

  openDrawer('drawer-hallo');
}
