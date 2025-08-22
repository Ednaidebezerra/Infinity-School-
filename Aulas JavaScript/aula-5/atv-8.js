
const produtos = [ "armario","mesa","estante", "prateleira", "balcão" ]

const preço = [1000.0, 500.0, 800.0, 120.0, 850.0 ]

const estoque = [5, 8, 3, 10, 7 ]

const carrinhoDeCompras = []
let totalCompras = 0;

const produtoAdicionado = prompt ( `Produtos disponiveis: /n ${produtos}/n/n Qual produto deseja adicionar no carrinho?`)
for ( const produto of produtos){
    if (produtoAdicionado ===  produto){
        carrinhoDeCompras.push(produtoAdicionado)
        const qtdeProduto = parseInt (prompt(`Valor unitario de ${produto}: ${valorUnitario}`))
        const indice = produtos.indexOf(produto)
        const valorUnitario = preço [indice]
        totalCompras += (valorUnitario * qtdeProduto)
    }
}
alert (totalCompras)




