import os
import re

files_to_check = [
    'minhas-vagas.html',
    'acompanhamento-vaga.html',
    'finalistas.html',
    'realizar-dinamica.html',
    'reagendar-dinamica.html',
    'tipo-sala-dinamica.html',
    'cadastro-avaliacoes.html',
    'parametrizacao-teste-multitelas.html',
    'banco-provas-teste-multitelas.html',
    'agendamento-exame-medico.html',
    'resultado-exame-medico.html'
]

for filename in files_to_check:
    if not os.path.exists(filename):
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Ensure table has interviews-table class
    # Replace <table class="data-table"> with <table class="data-table interviews-table">
    content = re.sub(r'<table class="([^"]*)data-table([^"]*)"', lambda m: '<table class="' + m.group(1) + 'data-table' + m.group(2) + '"' if 'interviews-table' in m.group(0) else '<table class="' + m.group(1) + 'data-table interviews-table' + m.group(2) + '"', content)
    # Also if it's just <table> replace it with <table class="data-table interviews-table">
    content = re.sub(r'<table>', '<table class="data-table interviews-table">', content)
    
    # 2. Replace <td class="actions"> ... </td> with the wrapper
    # We will find <td class="actions"> and its closing </td>
    # This requires a non-greedy match across newlines
    
    def replacer(match):
        inner = match.group(1)
        # add btn-action to buttons
        inner = re.sub(r'class="btn([^"]*)"', r'class="btn\1 btn-action"', inner)
        
        # Check if there is already a status-actions-wrapper inside
        if 'status-actions-wrapper' in inner:
            return f'<td class="status-actions-cell">{inner}</td>'
        
        # Wrap the inner content
        return f'''<td class="status-actions-cell">
                <div class="status-actions-wrapper">
                  <div class="action-buttons">
{inner}                  </div>
                </div>
              </td>'''

    content = re.sub(r'<td class="actions">\s*(.*?)\s*</td>', replacer, content, flags=re.DOTALL)
    
    # 3. For minhas-vagas.html, the actions cell is just <td><a class="btn...
    if filename == 'minhas-vagas.html':
        def replace_minhas(match):
            inner = match.group(1)
            # Remove inline styles from button
            inner = re.sub(r'style="[^"]*"', '', inner)
            # add btn-action to buttons
            inner = re.sub(r'class="btn([^"]*)"', r'class="btn\1 btn-action"', inner)
            return f'''<td class="status-actions-cell">
                <div class="status-actions-wrapper">
                  <div class="action-buttons">
                    {inner}
                  </div>
                </div>
              </td>'''
        content = re.sub(r'<td>\s*(<a [^>]*class="btn[^>]*>.*?</a>)\s*</td>', replace_minhas, content, flags=re.DOTALL)
        
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Tables fixed.")
