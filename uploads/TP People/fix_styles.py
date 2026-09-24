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
        
    # Find all buttons with class "btn-action" and remove style="..."
    content = re.sub(r'(<(?:button|a)[^>]*class="[^"]*btn-action[^"]*"[^>]*)style="[^"]*"([^>]*>)', r'\1\2', content)
    # Run again in case there are multiple style attributes, though unlikely
    content = re.sub(r'(<(?:button|a)[^>]*class="[^"]*btn-action[^"]*"[^>]*)style="[^"]*"([^>]*>)', r'\1\2', content)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
print("Styles stripped.")
