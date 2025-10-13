

let listaClientes = [];
let tarefasConcluidas = [];
let opcao;

while (opcao !== 5) {
    opcao = parseInt(prompt(
        ` Escolha uma opção:
        1 - Adicionar tarefa
        2 - Listar tarefas
        3 - Excluir tarefa
        4 - Marcar como concluída
        5 - Sair
        `
    ));

    switch (opcao) {
        case 1:
            adicionarCliente();
            break;
        case 2:
            filtrarClientes();
            break;
        case 3:
            trasformarLista();
            break;
        case 4: verificarCliente();
             break;

        case 5:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

function adicionarCliente() {
    let novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa) {
        listaClientes.push(novaTarefa);
        console.log(`Nova tarefa adicionada: ${novaTarefa}`);
    } else {
        console.log("Nenhuma tarefa foi adicionada.");
    }
}

function filtrarClientes() {
    if (listaClientes.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
    } else {
        console.log("Suas tarefas:");
        listaClientes.forEach((tarefa, i) => {
            console.log(`${i + 1} - ${tarefa}`);
        });
    }
}

function trasformarLista() {
    if (listaClientes.length === 0) {
        console.log("Nenhuma tarefa para remover.");
        return;
    }
    filtrarClientes();

    let indice = parseInt(prompt("Digite o número da tarefa que deseja remover:")) - 1;

    if (indice >= 0 && indice < listaClientes.length) {
        let excluida = listaClientes.splice(indice, 1);
        console.log(`Tarefa excluida: ${excluida}`);
    } else {
        console.log("Número inválido.");
    }
}


function verificarCliente (){
if (listaClientes.length === 0) {
        console.log("Nenhuma tarefa para concluir.");
        return;
    }
    filtrarClientes();

    let indice = parseInt(prompt("Digite o número da tarefa que deseja concluir:")) - 1;

    if (indice >= 0 && indice < listaClientes.length) {
        let concluida = listaClientes.splice(indice, 1) [0];
        console.log(`Tarefa concluida: ${concluida}`);
        tarefasConcluidas.push(concluida);
    } else {
        console.log("Número inválido.");
    }
}
