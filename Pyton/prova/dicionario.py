nome = input("Digite seu nome: ")
telefone = input("Digite seu telefone: ")
email = input("Digite seu email: ")

dados_cliente = {
    "nome": nome,
    "telefone": telefone,
    "email": email
}

print("Dados dos clientes:")
for chave, valor in dados_cliente.items():
    print(f"{chave.capitalize()}: {valor}")