

let clientes = [];

while (true) {
    let entrada = prompt("Digite um nome (ou 'sair' para encerrar):");

    if (entrada.toLowerCase() === "sair") {
        break;
    }

    clientes.push(entrada);
}

console.log(" Lista de clientes:");
for (let i = 0; i < clientes.length; i++) {
    console.log(`${i + 1}: ${clientes[i]}`);
}

for (let nome of clientes) {
    console.log(`Bem-vindo(a), ${nome}!`);
}