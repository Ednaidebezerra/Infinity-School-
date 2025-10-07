

let tarefasAdicionadas = [];
let tarefasConcluidas = [];
let opcao;


const executarAcaoTarefa = (acaoCallback) => {
    if (tarefasAdicionadas.length === 0) {
        console.log("Nenhuma tarefa disponível.");
        return;
    }
    listarTarefas();

    const indice = parseInt(prompt("Digite o número da tarefa:")) - 1;

    if (indice >= 0 && indice < tarefasAdicionadas.length) {
        acaoCallback(indice);
    } else {
        console.log("Número inválido.");
    }
};

const removerTarefa = (indice) => {
    const excluida = tarefasAdicionadas.splice(indice, 1);
    console.log(` Tarefa removida: ${excluida}`);
};


const concluirTarefa = (indice) => {
    const concluida = tarefasAdicionadas.splice(indice, 1)[0];
    tarefasConcluidas.push(concluida);
    console.log(` Tarefa concluída: ${concluida}`);
}

const adicionarTarefa = () => {
    const novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa) {
        tarefasAdicionadas.push(novaTarefa);
        console.log(` Nova tarefa adicionada: ${novaTarefa}`);
    } else {
        console.log(" Nenhuma tarefa foi adicionada.");
    }
};

const listarTarefas = () => {
    console.log("=== Tarefas Pendentes ===");
    if (tarefasAdicionadas.length === 0) {
        console.log("Nenhuma tarefa pendente.");
    } else {
        tarefasAdicionadas.forEach((tarefa, i) => {
            console.log(`${i + 1}. ${tarefa}`);
        });
    }

    console.log("\n=== Tarefas Concluídas ===");
    if (tarefasConcluidas.length === 0) {
        console.log("Nenhuma tarefa concluída.");
    } else {
        tarefasConcluidas.forEach((tarefa, i) => {
            console.log(`${i + 1}. ${tarefa}`);
        });
    }
};

while (opcao !== 5) {
    opcao = parseInt(prompt(
        `Escolha uma opção:
        1 - Adicionar tarefa
        2 - Listar tarefas
        3 - Excluir tarefa
        4 - Marcar como concluída
        5 - Sair
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
            executarAcaoTarefa(removerTarefa); 
            break;
        case 4:
            executarAcaoTarefa(concluirTarefa); 
            break;
        case 5:
            console.log(" Saindo...");
            break;
        default:
            console.log(" Opção inválida! Tente novamente.");
    }
}
