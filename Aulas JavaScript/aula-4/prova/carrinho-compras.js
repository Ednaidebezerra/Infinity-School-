
let carrinhoCompras = [];

let opcao = parseInt(prompt ("Escolha uma opção: 1- adicionar; 02- remover; 03- listar; 04-atualizar; ou sair"));

while ( opcao > 0 ) {
    switch (opcao) {
        case 1 : {adicionar (); break;}
        case 2 : {remover (); break;}
        case 3 : {exibir (); break;} 
        case 4 : {atualizar (); break;}
    }
 opcao = parseInt(prompt ("Escolha uma opção: 1- adicionar; 02- remover; 03- listar; 04-atualizar; ou -1 para sair")); 
}

function adicionar (){
let novaCompra = prompt (" Digite o nome do produto:");
carrinhoCompras.push(novaCompra);
}

function remover (){
    let indice = parseInt (prompt("Qual item deseja remover? "));
    carrinhoCompras = carrinhoCompras.splice ( indice - 1);
}

function exibir (){
    for ( let compra of carrinhoCompras ){
        alert(compra);
    }
}

function atualizar (){
     let indice = parseInt (prompt("Qual item deseja atualizar? "));
     let novaCompra = prompt (" Digite o nome do produto:");
     carrinhoCompras [indice- 1] = novaCompra;
}