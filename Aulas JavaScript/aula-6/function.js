/*
// O parametro ( valor) é definido depois --------------;

// FUNÇÃO VOID (faz uma acão)--------------; ok
function saudacao (nome){
    console.log (`Ola ${nome} !`)
}
const nomeUsuario = "Edna"
saudacao (nomeUsuario) 


// FUNÇÃO VOID COM PARAMETROS --------------; ok
function calcularDesconto ( preco, desconto){
   let calcDesconto = preco * (desconto / 100);
   let precoFinal = preco - calcDesconto
   console.log(`O valor com desnconto de ${calcDesconto} % ${precoFinal}`) ;
}
let preco = parseFloat(prompt("Digite o preço do produto"));
let desconto = parseFloat(prompt("Digite o desconto em %")); 
calcularDesconto ( preco, desconto);


//  soma parametros indefinido ...--------------; ok
function calcularSoma ( ...numeros){
    let soma = 0;
    for( const numero of numeros)
        soma += numero;
    console.log ( `A soma dos numeros é: ${soma} `)
}
calcularSoma ( 50, 20, 30, 200) //calcula os numeros 

/*
// FUNÇÃO RETURN  (retorna algum valor)--------------; ok
function somar ( a, b){
    return a + b;
}
let resultado = somar ( 30, 50);
console.log(resultado);

// ARROW FUNCTION -----------------------; ok
// filtrar numeros pares
const filtroPares = (arrayNumeros) => {
    const arrayPares = []; // Inicialize o arrayPares fora do loop
    for (const numero of arrayNumeros) {
        if (numero % 2 === 0) {
            arrayPares.push(numero);
        }
    }
    return arrayPares; // Retorne após o loop completo
}
console.log(filtroPares([1, 2, 3, 5, 6, 9, 8])); // Saída esperada: [2, 6, 8]

// FUNÇÃO CALLBACK 
function executarCallback (callback){
    console.log("iniciar chamada");
    callback();
    console.log("  finalizar chamada");
}

// FUNÇÃO ANONIMA 
let saudacao = function (nome){
    return "ola," + nome " ! " ;
}
console.log (saudacao("Ana"))
*/


let tarefasAdicionadas = [];
let tarefasConcluidas = [];
let opcao;

// 🔹 Função genérica que recebe uma callback
const executarAcaoTarefa = (acaoCallback) => {
    if (tarefasAdicionadas.length === 0) {
        console.log("Nenhuma tarefa disponível.");
        return;
    }

    listarTarefas();
    const indice = parseInt(prompt("Digite o número da tarefa:")) - 1;

    if (indice >= 0 && indice < tarefasAdicionadas.length) {
        // Executa a callback passando o índice
        acaoCallback(indice);
    } else {
        console.log("Número inválido.");
    }
};

// 🔹 Callback: remover tarefa
const removerTarefa = (indice) => {
    const excluida = tarefasAdicionadas.splice(indice, 1);
    console.log(`🗑️ Tarefa removida: ${excluida}`);
};

// 🔹 Callback: concluir tarefa
const concluirTarefa = (indice) => {
    const concluida = tarefasAdicionadas.splice(indice, 1)[0];
    tarefasConcluidas.push(concluida);
    console.log(`✅ Tarefa concluída: ${concluida}`);
};

// 🔹 Adicionar tarefa
const adicionarTarefa = () => {
    const novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa) {
        tarefasAdicionadas.push(novaTarefa);
        console.log(`📌 Nova tarefa adicionada: ${novaTarefa}`);
    } else {
        console.log("⚠️ Nenhuma tarefa foi adicionada.");
    }
};

// 🔹 Listar tarefas
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

// 🔹 Loop principal
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
            executarAcaoTarefa(removerTarefa); // callback
            break;
        case 4:
            executarAcaoTarefa(concluirTarefa); // callback
            break;
        case 5:
            console.log("👋 Saindo...");
            break;
        default:
            console.log("⚠️ Opção inválida! Tente novamente.");
    }
}
