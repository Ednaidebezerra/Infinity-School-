

let tarefasAdicionadas = [];
let opcao;

while (opcao !== 4) {
    opcao = parseInt(prompt(
        ` Escolha uma opção:
        1 - Adicionar tarefa
        2 - Listar tarefas
        3 - Excluir tarefa
        4 - Sair
        `
    ));

    switch (opcao) {
        case 1:
            adicionarTarefa();
            break;
        case 2:
            listarTarefas();
            break;
        case 3:
            removerTarefa();
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

function adicionarTarefa() {
    let novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa) {
        tarefasAdicionadas.push(novaTarefa);
        console.log(`Nova tarefa adicionada: ${novaTarefa}`);
    } else {
        console.log("Nenhuma tarefa foi adicionada.");
    }
}

function listarTarefas() {
    if (tarefasAdicionadas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
    } else {
        console.log("Suas tarefas:");
        tarefasAdicionadas.forEach((tarefa, i) => {
            console.log(`${i + 1} - ${tarefa}`);
        });
    }
}

function removerTarefa() {
    if (tarefasAdicionadas.length === 0) {
        console.log("Nenhuma tarefa para remover.");
        return;
    }
    listarTarefas();

    let indice = parseInt(prompt("Digite o número da tarefa que deseja remover:")) - 1;

    if (indice >= 0 && indice < tarefasAdicionadas.length) {
        let excluida = tarefasAdicionadas.splice(indice, 1);
        console.log(`Tarefa excluida: ${excluida}`);
    } else {
        console.log("Número inválido.");
    }
}
