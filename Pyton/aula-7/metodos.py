
## enumerate imprime o indice e o valor

# lista = ['maçã', 'banana', 'cereja']
# def exemplo_enumerate(lista):
#     for indice, valor in enumerate(lista):
#         print(indice, valor)
# exemplo_enumerate(lista)

#--------------------------------------------------------


## Concatenação de listas usando append: resultado esperado [ 'My', 'name', 'is', 'Kelly' ]
# lista1 = ["M", "na", "i", "Ke"]
# lista2 = ["y", "me", "s", "lly"]
# def concatenar_listas(lista1, lista2):
#     nova_lista = []
#     for i in range(len(lista1)):
#         nova_lista.append(lista1[i] + lista2[i])
#     return nova_lista
# print(concatenar_listas(lista1, lista2))

#--------------------------------------------------------

## Concatenação de listas usando zip
# lista1 = ["M", "na", "i", "Ke"]
# lista2 = ["y", "me", "s", "lly"]
# def concatenar_listas_zip(lista1, lista2):
#     nova_lista = []
#     for item1, item2 in zip(lista1, lista2):
#         nova_lista.append(item1 + item2)
#     return nova_lista
# print(concatenar_listas_zip(lista1, lista2))

#--------------------------------------------------------

## dicionario #get, #pull, #post, #delete
# dicionario = {
#     'nome': 'Maria',   
#     'idade': 28, 
#     'altura': 1.65
# }
# # # Usando get para acessar um valor
# nome = dicionario.get('nome', 'Chave não encontrada')
# print(nome) # Maria

# # # Usando pull para acessar um valor
# idade = dicionario.pop('idade', 'Chave não encontrada')
# print(idade) # 28

# # # Usando post para adicionar um valor
# dicionario['peso'] = 65
# print(dicionario) # {'nome': 'Maria', 'altura': 1.65, 'peso': 65}

# # # Usando delete para remover um valor
# del dicionario['altura']
# print(dicionario) # {'nome': 'Maria', 'peso': 65}

# # # Usando remove para remover um valor
# dicionario.popitem()
# print(dicionario)

# # # Usando clear para limpar o dicionario
# dicionario.clear()
# print(dicionario)

# ## metodo keys, values, items
# dicionario = {
#     'nome': 'Maria',   
#     'idade': 28, 'altura': 1.65
# }
# # # Usando keys para acessar as chaves
# chaves = dicionario.keys()
# print(chaves)

# # # Usando values para acessar os valores
# valores = dicionario.values()
# print(valores) #dict_values(['Maria', 28, 1.65])

## mudar chave de dicionario
dicionario = {
    'nome': 'Maria',   
    'age': 28, 
    'salary': 8000,
    'city' : "New York"
}

dicionario['location'] = dicionario.pop('city')
print(dicionario) # {'nome': 'Maria', 'age': 28, 'salary': 8000, 'location': 'New York'}