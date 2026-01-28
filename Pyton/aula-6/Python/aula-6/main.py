
## Aplicação de Lista de Tarefas:

def adicionar_tarefa(tarefas, nome, descricao, prioridade, categoria):
    tarefas.append({
        "nome": nome,
        "descricao": descricao,
        "prioridade": prioridade,
        "categoria": categoria,
        "concluida": False
    })

def marcar_concluida(tarefas, indice):
    if 0 <= indice < len(tarefas):
        tarefas[indice]["concluida"] = True

def exibir_tarefas(tarefas):
    prioridade_map = {"alta": 1, "media": 2, "baixa": 3}
    tarefas.sort(key=lambda t: prioridade_map.get(t["prioridade"].lower(), 4))
    for i, tarefa in enumerate(tarefas):
        status = "✓" if tarefa["concluida"] else "○"
        print(f"{i + 1}. [{status}] Nome: {tarefa['nome']} | Descrição: {tarefa['descricao']} | Prioridade: {tarefa['prioridade']} | Categoria: {tarefa['categoria']}")

def remover_tarefa(tarefas, indice):
    if 0 <= indice < len(tarefas):
        del tarefas[indice] 

## Menu de interação com o usuário:

def menu():
    tarefas = []
    categorias = ["Estudos", "Provas", "Atividades"]
    while True:
        print("\nMenu:")
        print("1. Adicionar tarefa")
        print("2. Marcar tarefa como concluída")
        print("3. Exibir tarefas")
        print("4. Remover tarefa")
        print("5. Adicionar categoria")
        print("6. Sair")

        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            nome = input("Digite o nome da tarefa: ")
            descricao = input("Digite a descrição da tarefa: ")
            
            print("Selecione a prioridade:\n1. Alta\n2. Media\n3. Baixa")
            escolha_prioridade = input("Digite o número da prioridade: ")
            
            if escolha_prioridade == "1":
                prioridade = "alta"
            elif escolha_prioridade == "2":
                prioridade = "media"
            else:
                prioridade = "baixa"
            
            print("Selecione a categoria:")
            for i, cat in enumerate(categorias):
                print(f"{i + 1}. {cat}")
            
            escolha_cat = int(input("Digite o número da categoria: "))
            categoria = categorias[escolha_cat - 1] if 1 <= escolha_cat <= len(categorias) else "Geral"
            adicionar_tarefa(tarefas, nome, descricao, prioridade, categoria)
        elif opcao == "2":
            indice = int(input("Digite o número da tarefa a ser marcada como concluída: ")) - 1
            marcar_concluida(tarefas, indice)
        elif opcao == "3":
            exibir_tarefas(tarefas)
        elif opcao == "4":
            exibir_tarefas(tarefas)
            indice = int(input("Digite o número da tarefa a ser removida: ")) - 1
            remover_tarefa(tarefas, indice)
        elif opcao == "5":
            nova_categoria = input("Digite o nome da nova categoria: ")
            categorias.append(nova_categoria)
            print(f"Categoria '{nova_categoria}' adicionada com sucesso!")
        elif opcao == "6":
            print("Saindo do programa.")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    menu()