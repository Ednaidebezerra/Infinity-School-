
## solicitar entrada de dados para cadastrar o pacientes
from unittest import case


lista_pacientes = []

## menu de opções
case = int(input("Digite a opção desejada: \n 1 - Cadastrar paciente \n 2 - Listar pacientes \n 3 - Sair \n"))

while True:
    pergunta = {
        "nome": input("Digite o nome do paciente:"),
        "idade": int(input("Digite a idade do paciente: ")),
        "cpf": input("Digite o CPF do paciente: "),
        "gravidade": int(input("Digite a gravidade do paciente (azul 1, verde 3, amarelo 7, vermelho 10): "))
    }

    paciente = {
        "nome": pergunta["nome"],
        "idade": pergunta["idade"],
        "cpf": pergunta["cpf"],
        "gravidade": pergunta["gravidade"]
    }
    lista_pacientes.append(paciente)

    continuar = input("Deseja cadastrar outro paciente? (s/n): ")
    if continuar.lower() != 's':
        break

## ordenar a lista de pacientes por ordem de gravidade
lista_pacientes.sort(key=lambda x: x["gravidade"], reverse=True)

## exibir a lista de pacientes ordenada
print("Lista de pacientes ordenada por ordem de gravidade:")
for paciente in lista_pacientes:
    print(f"Nome: {paciente['nome']}, CPF: {paciente['cpf']}, Gravidade: {paciente['gravidade']}")