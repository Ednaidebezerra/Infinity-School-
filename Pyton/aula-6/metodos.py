


## Compreensão de listas
# numeros = [10, 20, 30, 40, 50]
# quadrados = [num ** 2 for num in numeros]
# print(quadrados)   

## Dicionario
# paises = {
#     'brasil': 50000000,
#     'argentina': 45000000,
#     'espanha': 30000000,
#     'portugal': 20000000
# }

# valores = paises.values()
# print(sum(valores))
# media = sum(valores) / len(paises)
# print(f"A média da população dos países é: {media}")

## interação de listas
## zip e reversed
# lista1 = [10, 20, 30, 40]
# lista2 = [100, 200, 300, 400]

# for a, b in zip(lista1, reversed(lista2)):
#     print(a, b)

## Funções lambda
# soma = lambda x, y: x + y
# print(soma(10, 20))

# lista1 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# lista1[2][2].append(7000)
# print(lista1)

## Métodos de listas que modificam a lista; Encontra e substitui o valor 20 por 200
# lista2 = [5, 10, 15, 20, 25, 50, 20]

# if 20 in lista2:
#    indice = lista2.index(20)
#    lista2[indice] = 200

# print(lista2)


## Métodos de listas que modificam dicionarios; .pop, .del, .remove, .clear. passando a ('chave', 'msg de retorno') como parametro.
dicionario = {
    'nome': 'Maria',   
    'idade': 28, 'altura': 1.65
}

# # Removendo um item com pop
# idade = dicionario.pop('idade', 'Chave não encontrada')
# print(dicionario)
# print(idade)

# # Removendo um item com del
# del dicionario['altura']
# print(dicionario)

# # Removendo um item com remove
# dicionario.popitem()
# print(dicionario)

# # Limpando o dicionario com clear
# dicionario.clear()

sample_direct = {
    'phisics': 80,
    'math': 90,
    'english': 70
}

# imprime a chave de menor valor  'chave': valor
# menor = min(sample_direct, key=sample_direct.get)
# print(menor)

## usando for para encontrar a chave de menor valor
menor_valor = float('inf')
for chave, valor in sample_direct.items():
    if valor < menor_valor:
        menor_valor = valor
        menor_chave = chave
print(menor_chave)