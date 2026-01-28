
import funcoes
# menu de opções para escolher a operação disponíveis

def menu():
    print("Escolha uma operação:")
    print("1. Soma")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")
    print("5. Sair")

# função para ler a opção do usuário   
def ler_opcao():
    opcao = input("Digite o número da operação desejada (1-5): ")
    return opcao
# função para ler os dois números do usuário
def ler_numeros():
    a = float(input("Digite o primeiro número: "))
    b = float(input("Digite o segundo número: "))
    return a, b

# função para exibir o resultado da operação
def exibir_resultado(resultado):
    print(f"O resultado é: {resultado}")

# programa principal
while True:
    menu()
    opcao = ler_opcao()
    if opcao == "5":
        break
    
    if opcao in ['1', '2', '3', '4']:
        a, b = ler_numeros()
        
        if opcao == "1":
            exibir_resultado(funcoes.soma(a, b))
        elif opcao == "2":
            exibir_resultado(funcoes.subtracao(a, b))
        elif opcao == "3":
            exibir_resultado(funcoes.multiplicacao(a, b))
        elif opcao == "4":
            try:
                exibir_resultado(funcoes.divisao(a, b))
            except ValueError as e:
                print(f"Erro: {e}")
    else:
        print("Opção inválida!")