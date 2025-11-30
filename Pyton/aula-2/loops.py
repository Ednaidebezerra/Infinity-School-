
lista_compras = []

while True:
    produto = input("Digite o nome do produto (ou digite 'concluir' para finalizar): ").strip()

    if produto.lower() == "concluir":
        break  # finaliza a compra

    preco = float(input("Digite o preço: "))

    dados_cliente = {
        "produto": produto,
        "preco": preco
    }

    lista_compras.append(dados_cliente)

# Cálculo do total da compra
total = 0
for item in lista_compras:
    total += item["preco"]

# Exibição final
print("\n----- LISTA DE COMPRAS -----")
for i, item in enumerate(lista_compras, start=1):
    print(f"{i}. {item['produto']} - R$ {item['preco']:.2f}")

print("\nTOTAL DA COMPRA: R$ {:.2f}".format(total))
