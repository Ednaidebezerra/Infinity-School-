# Programa para gerenciar uma lista de compras usando dicionário

# Dicionário vazio
lista_compras = {}

# Coletar dados do usuário
for i in range(5):
    nome = input(f"Digite o nome do produto {i+1}: ")
    preco = float(input(f"Digite o preço do produto {i+1}: R$ "))
    lista_compras[nome] = preco  # chave = nome, valor = preço

# Calcular valor total
total = sum(lista_compras.values())

# Exibir resultado
print("\n----- LISTA DE COMPRAS -----")
for produto, preco in lista_compras.items():
    print(f"{produto} - R$ {preco:.2f}")

print(f"\nValor total: R$ {total:.2f}")
