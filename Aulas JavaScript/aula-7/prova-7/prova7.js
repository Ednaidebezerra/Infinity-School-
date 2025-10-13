


let listaClientes = [];
let opcao;

while (opcao !== 6) {
    opcao = parseInt(prompt(
        `Escolha uma opção:
        1 - Adicionar cliente 
        2 - Filtrar clientes 
        3 - Transformar lista 
        4 - Verificar clientes 
        5 - Buscar cliente 
        6 - Sair
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
            transformarLista();
            break;
        case 4:
            verificarClientes();
            break;
        case 5:
            buscarCliente();
            break;
        case 6:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("⚠️ Opção inválida! Tente novamente.");
    }
}

//  1. Adicionar cliente (.push)
function adicionarCliente() {
    let novoCliente = prompt("Digite o nome do novo cliente:");
    if (novoCliente && novoCliente.trim() !== "") {
        listaClientes.push(novoCliente.trim());
        console.log(`Cliente "${novoCliente}" adicionado com sucesso!`);
    } else {
        console.log("Nome inválido. Nenhum cliente adicionado.");
    }
}

//  2. Filtrar clientes (.filter)
function filtrarClientes() {
    if (listaClientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    let letra = prompt("Digite a primeira letra para filtrar clientes:");
    if (!letra || letra.trim() === "") {
        console.log("Filtro vazio. Mostrando todos os clientes:");
        listarClientes();
        return;
    }

    let filtrados = listaClientes.filter(cliente =>
        cliente.toLowerCase().startsWith(letra.toLowerCase())
    );

    if (filtrados.length > 0) {
        console.log("Clientes encontrados:");
        filtrados.forEach((cliente, i) => console.log(`${i + 1} - ${cliente}`));
    } else {
        console.log("Nenhum cliente corresponde ao filtro informado.");
    }
}

//  3. Transformar lista (.map)
function transformarLista() {
    if (listaClientes.length === 0) {
        console.log("Nenhum cliente para transformar.");
        return;
    }

    let opcaoTransformar = parseInt(prompt(
        `Escolha o tipo de transformação:
        1 - Todos em MAIÚSCULAS
        2 - Todos em minúsculas
        3 - Adicionar "Cliente: " antes do nome
        `
    ));

    let novaLista;

    switch (opcaoTransformar) {
        case 1:
            novaLista = listaClientes.map(cliente => cliente.toUpperCase());
            break;
        case 2:
            novaLista = listaClientes.map(cliente => cliente.toLowerCase());
            break;
        case 3:
            novaLista = listaClientes.map(cliente => "Cliente: " + cliente);
            break;
        default:
            console.log("Opção inválida de transformação.");
            return;
    }

    console.log("Lista transformada:");
    novaLista.forEach((cliente, i) => console.log(`${i + 1} - ${cliente}`));
}

//  4. Verificar clientes (.every)
function verificarClientes() {
    if (listaClientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    let todosValidos = listaClientes.every(cliente => cliente.length > 3);

    if (todosValidos) {
        console.log(" Todos os clientes têm mais de 3 letras no nome.");
    } else {
        console.log(" Nem todos os clientes têm mais de 3 letras.");
    }
}

//  5. Buscar cliente (.find)
function buscarCliente() {
    if (listaClientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    let nomeBusca = prompt("Digite o nome do cliente que deseja buscar:");
    if (nomeBusca && nomeBusca.trim() !== "") {
        let clienteEncontrado = listaClientes.find(
            cliente => cliente.toLowerCase() === nomeBusca.toLowerCase()
        );

        if (clienteEncontrado) {
            console.log(` Cliente encontrado: ${clienteEncontrado}`);
        } else {
            console.log(` Cliente "${nomeBusca}" não foi encontrado.`);
        }
    } else {
        console.log("Nome inválido.");
    }
}

//  Função auxiliar para listar todos os clientes
function listarClientes() {
    console.log("Lista de clientes:");
    listaClientes.forEach((cliente, i) => console.log(`${i + 1} - ${cliente}`));
}
