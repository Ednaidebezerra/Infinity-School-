

alunos = []

while True:
    print("\nMenu:")
    print("1 - Cadastrar notas")
    print("2 - Exibir média da turma")
    print("3 - Sair")
    print ("------------------------------------")

    opcao = input("Escolha a opção desejada: ")

    if opcao == '1':
        nome = input("Digite o nome do aluno: ")
        notas = []
        for i in range(3):
            while True:
                try:
                    nota = float(input(f"Digite a nota {i+1}: "))
                    if nota < 0 or nota > 10:
                        print("Erro: Nota inválida. Por favor, digite uma nota entre 0 e 10.")
                        continue
                    notas.append(nota)
                    break
                except ValueError:
                    print("Erro: Entrada inválida. Por favor, digite um número.")
        media = sum(notas) / len(notas)
        status = "aprovado" if media >= 7.0 else "reprovado"

        aluno = {
            "nome": nome,
            "notas": notas,
            "media": media,
            "status": status
        }
        alunos.append(aluno)

        print ("------------------------------------")
        print(f"Aluno: {aluno['nome']}")
        print(f"Notas: {aluno['notas']}")
        print(f"Média: {aluno['media']:.2f}")
        print(f"Status: {aluno['status']}")
        
    elif opcao == '2':
        if alunos:
            soma_medias = sum(aluno['media'] for aluno in alunos)
            media_turma = soma_medias / len(alunos)
            print(f"Média da turma: {media_turma:.2f}")
        else:
            print("Nenhum aluno cadastrado.")

    elif opcao == '3':
        print("Saindo...")
        break
    
    else:
        print("Opção inválida. Tente novamente.")