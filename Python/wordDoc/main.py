from docxtpl import Document

template = Document()

context = {
    'titulo': 'Título do trabalho',
    'autor': 'Nome do autor',
    'data': 'Data da entrega',
    'resumo': 'Resumo do trabalho',
    'palavras_chave': 'Palavras-chave',
    'introducao': 'Introdução',
    'desenvolvimento': 'Desenvolvimento',
    'conclusao': 'Conclusão',
    'referencias': 'Referências',
}

template.render(context)
