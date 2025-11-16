async function obterProdutos() {
    const resposta = await fetch('https://fakestoreapi.com/products')
    const produtos = await resposta.json()    
    aplicarDesconto(produtos)
}

function aplicarDesconto(produtos) {
    const produtosFiltrados = produtos.filter(produto => produto.rating.rate < 3)
    const descontoAplicado = produtosFiltrados.map(produto => {
        produto.price -= (produto.price * 0.15).toFixed(2)
        return produto
    })
    console.log(descontoAplicado.length)
    //console.log(produtos)
    gerarCard(descontoAplicado)
}

function gerarCard(produtosComDesconto) {
    const container = document.getElementById("container")
    produtosComDesconto.forEach(produto => {
        const divCard = document.createElement("div")
        divCard.className = "card"
        const imagem = document.createElement("img")
        imagem.setAttribute("src", produto.image)
        divCard.appendChild(imagem)
        const titulo = document.createElement("h4")
        titulo.textContent = produto.title
        divCard.appendChild(titulo)
        const preco = document.createElement("p")
        preco.textContent = produto.price
        divCard.appendChild(preco)
        container.appendChild(divCard)
    })
}


obterProdutos();