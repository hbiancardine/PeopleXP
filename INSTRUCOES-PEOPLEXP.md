# People XP — Instruções, referência e entendimento do protótipo

Este documento descreve o protótipo **People XP (People Experience)** para servir de base a um assistente que organiza e redige pedidos de mudança de design. Os pedidos são executados depois em outra ferramenta, que edita os arquivos HTML/CSS/JS.

---

## 1. O que é o projeto

- Protótipo navegável de uma plataforma de recrutamento e seleção (R&S) usada internamente pela TP.
- Cobre gestão de vagas, avaliações (entrevistas, dinâmicas, testes, exames médicos), campanhas e controle de convocação de candidatos.
- Os dados são **fictícios** e ficam salvos no navegador (localStorage). Não há backend.
- Idioma da interface: **português do Brasil**.

**Publicação**
- Repositório: `github.com/hbiancardine/PeopleXP` (branch `main`)
- Site: `https://hbiancardine.github.io/PeopleXP/`
- Fluxo: alteração feita → arquivos baixados → copiados para a pasta local clonada → GitHub Desktop (Commit → Push) → o site atualiza em 1–2 minutos.

---

## 2. Estrutura de arquivos (tudo na raiz)

| Arquivo | Função |
|---|---|
| `index.html` | Home / Visão Geral (ponto de entrada) |
| `style.css` | Estilos compartilhados por todas as páginas |
| `script.js` | Funções comuns: menu, toast, modal, drawer, seleção em massa de tabelas |
| `vagas-data.js` | Dados e persistência de Vagas, Benefícios e Bem Estar (`window.TPVagas`) |
| `dashboard.js` | Gráficos e navegação do painel de Campanhas (usa Chart.js) |
| `tptopo.png` | Logo do cabeçalho |
| `fontawesome/` | Ícones (Font Awesome 6, classes `fa-solid fa-...`) |
| `fonts/` | Fonte Inter (local) |

### Páginas (20)

| Arquivo | Título | Breadcrumb |
|---|---|---|
| `index.html` | Home | Home > Visão Geral |
| `cadastro-vagas.html` | Cadastro de Vagas | Home > Vagas > Cadastro de Vagas |
| `vaga-form.html` | Nova / Editar Vaga | Home > Vagas > Cadastro de Vagas > Nova Vaga |
| `beneficios-tipo-vaga.html` | Benefícios por Tipo de Vaga | Home > Vagas > Benefícios por Tipo de Vaga |
| `bem-estar-tp.html` | Texto Bem Estar TP | Home > Vagas > Texto Bem Estar TP |
| `minhas-vagas.html` | Minhas Vagas | Home > Minhas Vagas |
| `acompanhamento-vaga.html` | Acompanhamento de Vaga | Home > Minhas Vagas > Acompanhamento de Vaga |
| `cadastro-avaliacoes.html` | Cadastro de Avaliações | Home > Avaliações > Cadastro de Avaliações |
| `entrevistas-hallo.html` | Entrevistas Hallo | Home > Avaliações > Entrevistas Hallo |
| `finalistas.html` | Finalistas | Home > Avaliações > Finalistas |
| `realizar-dinamica.html` | Realização da Dinâmica | Home > Avaliações > Realizar Dinâmica |
| `reagendar-dinamica.html` | Reagendar Dinâmica | Home > Avaliações > Reagendar Dinâmica |
| `tipo-sala-dinamica.html` | Cadastro de Tipos de Sala Dinâmica | Home > Tipo Sala Dinâmica |
| `parametrizacao-teste-multitelas.html` | Parametrização Teste Multitelas | Home > Avaliações > Parametrização Teste Multitelas |
| `banco-provas-teste-multitelas.html` | Banco de Provas Teste Multitelas | Home > Avaliações > Banco de Provas Teste Multitelas |
| `agendamento-exame-medico.html` | Agendamento Exame Médico | Home > Avaliações > Agendamento Exame Médico |
| `resultado-exame-medico.html` | Resultado Exame Médico | Home > Avaliações > Resultado Exame Médico |
| `campanhas.html` | Campanhas (dashboard com gráficos) | Home > Cadastros > Campanhas |
| `detalhe-campanha.html` | Detalhe da Campanha | Home > Cadastros > Cadastro de Campanha > [nome] |
| `convocacao-candidato.html` | Convocação de Candidato | Home > Controle > Convocação de Candidato |

---

## 3. Anatomia padrão de uma página

Toda página segue esta ordem:

1. **Header** (`.header`): faixa com gradiente roxo→rosa, 60px de altura. Logo à esquerda (link para `index.html`) e avatar "AT" à direita.
2. **Menu** (`.main-nav` > `.nav-list`): itens centralizados, em caixa alta, com ícone. Item ativo em roxo com barra inferior de 3px.
3. **Breadcrumb** (`.breadcrumb`): `Home > Seção > Página`, links em roxo, alinhado ao conteúdo (largura máx. 1440px).
4. **Container** (`.container`): conteúdo, largura máx. 1440px, padding lateral 24px.
   - **Page header** (`.page-header`): título (`.page-title`, 24px, semibold) à esquerda e ações à direita.
   - **Cards** (`.card`): blocos brancos, raio 8px, sombra leve, padding 24px.
5. Scripts no final do `<body>`: `script.js` (sempre), `vagas-data.js` (páginas de Vagas), `dashboard.js` + Chart.js (Campanhas).

### Menu (igual em todas as páginas)

- Usuários · Contratos · FPW · Não Recomendações · Survey · Capacity (sem submenu)
- **Vagas**: Cadastro de Vagas, Cadastro de Departamentos*, Cadastro de Job Descriptions*, Validação de Documentos*, Código Vagas Indisponíveis*, Benefícios por Tipo de Vaga, Texto Bem Estar TP
- **Avaliações** (com subgrupos de título):
  - Minhas Vagas, Acompanhamento de Vaga, Avaliações, Entrevistas Hallo, Finalistas
  - Dinâmica: Realizar Dinâmica, Reagendar Dinâmica, Tipo Sala Dinâmica
  - Cadastros: Cadastro de Avaliações, Parametrização Teste Multitelas, Banco de Provas Teste Multitelas, Agendamento Exame Médico, Resultado Exame Médico
- **Cadastros**: FIA*, Cadastro de Case*, Carta Proposta*, FRP*, Painel Portal de Treinamento*, CheckList*, Parceiro*, Candidato*, Termo de Responsabilidade*, Cadastro de Campanha, FAQ*, Tipos de Etapas*, Dúvidas*, Treinamento Staff*, Fonte Vaga*, Formulários*, Termo Aceite - Seu Amigo Na TP*
- **Controle**: Convocação de Candidato

\* item sem página (link `#`).

**Regra:** o menu é copiado em cada HTML. Qualquer mudança no menu precisa ser aplicada **nas 20 páginas**.

---

## 4. Linguagem visual (design system em uso)

### Cores (variáveis em `style.css`)

| Variável | Valor | Uso |
|---|---|---|
| `--primary-purple` | `#7b1fa2` | Cor principal: botões, links, ativos, números de destaque |
| `--primary-pink` | `#d81b60` | Acento (fim do gradiente) |
| `--tp-gradient` | `#51007a → #d81b60` | Somente o header |
| `--bg-color` | `#f5f6f8` | Fundo da página |
| `--card-bg` / `--white` | `#ffffff` | Cards, modais, menu |
| `--text-main` | `#333333` | Texto principal |
| `--text-muted` | `#666666` | Rótulos, textos secundários |
| `--border-color` | `#e0e0e0` | Bordas e divisores |
| `--hover-bg` | `#f0f0f0` | Hover de itens |
| `--success` | `#2e7d32` | Sucesso / ativo |
| `--error` | `#c62828` | Erro / inativo / excluir |

Hover do botão primário: `#6a1b9a`.

### Tipografia

- Fonte única: **Inter**.
- Base 14px. Título de página 24px/600. Título de card/gráfico 16px/600. Título de modal/drawer 18px/600.
- Cabeçalho de tabela e rótulos de filtro: 11–12px, caixa alta, cinza, 600.
- Rótulos de formulário: 13px/600.

### Forma e espaçamento

- Raios: botões e inputs 4px · cards e modais 8px · popovers 12px · badges e chips 12–16px (pílula).
- Sombra de card: `0 2px 8px rgba(0,0,0,0.05)`.
- Espaçamentos mais usados: 8 / 12 / 16 / 24px.

### Componentes (classes prontas)

- **Botões**: `.btn` + `.btn-primary` (roxo), `.btn-secondary` (branco com borda), `.btn-danger` (fundo rosa claro, texto vermelho), `.btn-icon` (só ícone).
- **Tabela**: `table` dentro de `.table-responsive`; linha com hover cinza-claro; coluna de ações `.actions`.
- **Badges**: `.badge-active` (verde), `.badge-inactive` (vermelho); família `.badge-hallo-*` (alta, media, baixa, pendente, nao-iniciada, aprovado, reprovado, finalista).
- **Filtros**: `.filter-row` > `.filter-group` (rótulo + campo) + `.filter-actions`; chips de filtros ativos em `.active-filters` > `.chip`; link "Filtros avançados" (`.advanced-filters-toggle`).
- **Formulário**: `.form-grid` (2 colunas; 1 no mobile), `.form-group`, `.form-label`, `.form-control`, `.form-hint`.
- **Abas**: `.tabs` > `.tab` (ativa com sublinhado roxo) e `.tab-content`.
- **Modal**: `.modal-overlay` > `.modal-content` (header / body / footer, largura máx. 600px). Abrir e fechar com `openModal(id)` e `closeModal(id)`.
- **Drawer lateral**: `.drawer-overlay` > `.drawer-content` (400px, entra pela direita). Abrir e fechar com `openDrawer(id)` e `closeDrawer(id)`.
- **Toast**: `showToast(mensagem, tipo)`, no canto inferior direito, verde (sucesso) ou vermelho (erro).
- **Indicadores**: `.metric-card` (número roxo + rótulo em caixa alta), `.kpi-card`, `.vaga-resumo`.
- **Estado vazio**: `.empty-state` (caixa tracejada, texto centralizado).
- **Ícones**: Font Awesome (`<i class="fa-solid fa-...">`).

### Princípios

- Visual corporativo, limpo e denso em informação: fundo cinza-claro, conteúdo em cards brancos.
- Roxo é a única cor de destaque. Verde, vermelho e amarelo aparecem só como status.
- Não usar outras fontes, gradientes fora do header, emojis ou novas cores sem pedido explícito.
- Textos e rótulos não devem ser cortados com "…": devem quebrar linha.

---

## 5. Dados e comportamento

- **Vagas** (`vagas-data.js` → `window.TPVagas`): lista inicial (seed) + salvamento em `localStorage` na chave `tp-vagas-v1`. Funções: `load`, `save`, `get`, `upsert`, `defaults`, `setFlash`/`takeFlash` (mensagem após salvar), `OPTIONS` (listas de selects).
- **Benefícios por Tipo de Vaga**: chave `tp-beneficios-v1`. **Bem Estar TP**: chave `tp-bemestar-v1`.
- Fluxo de vagas: listar → criar/editar/copiar/excluir em `vaga-form.html` → salvar → volta para a lista atualizada com toast.
- **Convocação de Candidato** (`convocacao-candidato.html`, BRF 29059): dados fictícios internos da página (36 candidatos, 8 Capacities, 13 salas de treinamento) + vagas de `vagas-data.js` (`TPVagas.all()` / `TPVagas.find()`).
  - **Filtros** (rascunho → “Aplicar filtros”; “Limpar filtros” restaura tudo): Mês Capacity (multi, ex.: out/26), Versão Capacity (multi: D42, D55, EXTRA, SAV), Cliente (multi), Célula (multi, lista depende dos clientes escolhidos; sem cliente → todas), Status Convocação, Candidato ou CPF (com/sem máscara), ID Capacity e ID Sala de Treinamento (chips, vários IDs). Adicionais: Status Exame Médico (multi), Status Documentação (multi: Documento Entregue / Reprovado / Pendente / Promessa), Possui indicação, Período de validação, Exibir reprovados, Histórico completo. Versão × Mês = interseção. Chips resumem múltiplos valores (“Cliente: Airbnb, Amazon +2”).
  - **Componente multi-select** padrão (`makeMS`): busca, Selecionar tudo, Limpar, contagem, estados vazio/sem resultado.
  - **Indicadores**: Demanda (Candidatos Validados, PCD, Solicitado, Solicitado + Buffer — os dois últimos são estáticos), Documentação, Exames, Convocação, Treinamento/Admissão. Clique filtra; segundo clique remove.
  - **Grid**: até 20 colunas, rolagem horizontal, Candidato e checkbox fixos (sticky). Colunas novas: Vaga, ID BMS (substitui FPW), Data de Nascimento, PCD, Matrícula, Data Confirmação Treinamento, Sala de Treinamento, Configuração PC (link abre modal com os dados do PC).
  - **Visões de colunas** (modal “Personalizar colunas” pelo botão Colunas): colunas disponíveis × selecionadas em ordem (setas), “N de 20”, limite bloqueia novas seleções. Salvar visão (nome), Salvar alterações, Salvar como nova visão, Excluir (modal de confirmação), Restaurar padrão (não apaga visões). Visões salvas aparecem como **badges** ao lado da contagem de candidatos; clique aplica; o ⋮ abre Tornar principal / Editar / Excluir. A visão **principal** (★) é carregada ao abrir a tela. Persistência por usuário em `localStorage` (`peoplexp.convocacao.colunas.admin-tp`: formats, activeId, principalId, cols).
  - **Detalhe (drawer)**: Candidato (+ Data de Nascimento, ID BMS, PCD), Vaga (ID + nome, Capacity, Operação, Célula…), Validação (+ Configuração do PC), Documentação, Exame médico (links para agendamento e resultado), Convocação (alteração de status com motivo), Treinamento (+ Data confirmação, Sala), Admissão (+ Matrícula). Rodapé: Editar dados, Follow Up, Troca de Sala, Troca de Capacity, Trocar de vaga.
  - **Trocar de vaga** (modal): 1) pesquisa por ID, Código, Tipo, Nome e Gestão (só vagas Publicadas); 2) resumo da análise (match, não match, total, novas etapas); 3) detalhamento por candidato com checkbox (match já marcados; não match bloqueado). Match simulado por idioma, experiência, município, vaga PcD; etapas Avaliação → Multitelas → Syscheck → Entrevista reaproveitadas só se concluídas e com testes iguais (comparação teste a teste). “Confirmar troca de vaga” transfere apenas Match selecionados; sucesso total/parcial. **Bloqueio**: contratado com treinamento confirmado não troca de vaga (barra, menu ⋮ e drawer).
  - **Troca de Capacity** (modal Alocação de Candidato): individual (Salvar) ou em massa (mesma Capacity para todos / individual → revisar → confirmar, sucesso total/parcial). Ao trocar, o candidato sai da sala de treinamento e volta a “Pendente TP”.
  - **Troca de Sala de Treinamento**: só com candidatos do mesmo ID Capacity (senão botão desabilitado com dica). Lista salas da Capacity (ID, nome, datas/horas). Contratado (com matrícula) só para sala com a mesma data de início; sem matrícula, qualquer sala. Inconsistência → mensagem e nada é movido.
  - Outras ações: Follow Up (modal de integração), Resgatar (Reprovado/Desistente), Exportar CSV (todas as colunas) e Exportar selecionados. Menu ⋮ da linha: Ver candidato, Editar dados, Follow Up, Trocar de vaga, Troca de Capacity, Troca de Sala, Resgatar.
  - Botão “Estados” (canto inferior esquerdo): 26 cenários demonstráveis (filtros, colunas/visões, trocar de vaga, troca de Capacity, troca de sala).
- Para voltar aos dados iniciais, limpe o armazenamento do site no navegador.

### Pendências de negócio

- Substituir listas de exemplo por dados reais: status de convocação, versões/meses de Capacity, clientes e células, Tipos de Vaga e Gestões, salas de treinamento.
- Confirmar os critérios reais de match da troca de vaga (hoje: idioma, experiência, município, vaga PcD).
- Definir a lógica do filtro de histórico e os critérios para “resgatar candidato”.
- Follow Up, Configuração do PC e exame médico estão como pontos de integração (sem regras novas).

---

## 6. Como escrever um pedido de mudança

Um bom pedido deve permitir a execução sem perguntas. Use este modelo:

```
PÁGINA: convocacao-candidato.html (Controle > Convocação de Candidato)
ÁREA: bloco de indicadores, grupo "Documentação"
TIPO: ajuste visual | novo componente | novo fluxo | texto | regra de negócio | nova página
SITUAÇÃO ATUAL: o que existe hoje (e o problema)
MUDANÇA DESEJADA: o que deve acontecer, passo a passo
TEXTOS EXATOS: rótulos, títulos e mensagens entre aspas (serão usados literalmente)
REGRAS/DADOS: condições, validações, exemplos de valores
ESTADOS: vazio, carregando, erro, sucesso (se aplicável)
ESCOPO: só esta página | todas as páginas (ex.: menu, header, style.css)
NÃO ALTERAR: o que deve permanecer igual
```

### Boas práticas

- Um pedido por assunto. Separe mudanças independentes em itens numerados.
- Cite o nome do arquivo e a seção exata (título do card, nome da coluna, texto do botão).
- Para componentes, cite o padrão existente a seguir: "usar o mesmo modal da troca de vaga", "badge igual à coluna Status de Entrevistas Hallo".
- Para nova página, informe: nome do arquivo, item e grupo do menu, breadcrumb, título, filtros, colunas da tabela, ações por linha e ações em massa.
- Mudanças de menu, header, breadcrumb ou `style.css` afetam todas as páginas. Deixe isso explícito.
- Textos fornecidos entre aspas são usados sem reescrita.
- Diga se quer **variações** para comparar ou uma **alteração direta**.
- Ao final, liste os arquivos que precisarão ser baixados e publicados.

### Exemplo

```
1. PÁGINA: convocacao-candidato.html
   ÁREA: tabela de candidatos, coluna "Status"
   TIPO: ajuste visual
   SITUAÇÃO ATUAL: status aparece como texto simples.
   MUDANÇA DESEJADA: exibir como badge colorido.
     "Convocado" → verde · "Pendente" → amarelo · "Desistente" → vermelho
   ESCOPO: só esta página
   NÃO ALTERAR: ordem das colunas e filtros
```

---

## 7. Publicação após cada mudança

1. Baixar os arquivos alterados (ou o projeto inteiro em ZIP).
2. Copiar para a raiz da pasta local do repositório `PeopleXP`, substituindo os anteriores. Não usar subpasta.
3. GitHub Desktop: escrever um resumo → **Commit to main** → **Push origin**.
4. Conferir em `https://hbiancardine.github.io/PeopleXP/` após 1–2 minutos. Se não mudar, atualizar com Ctrl+F5.
