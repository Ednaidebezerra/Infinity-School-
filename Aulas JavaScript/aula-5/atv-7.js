

 
 // Array de objetos (variaveis simples) ------------------; 
const numeros = [83, 17, 45, 92, 3, 64, 29, 78, 51, 12, 68, 34, 99, 7, 56, 23, 88, 40, 61, 5];
console.log(numeros.length);

const pares = []
for (const valor of numeros) {
     if (valor % 2 === 0) {
          pares.push(valor)
     }
      console.log(pares)
}

/*
// .length percorre o tamanho do array
for (let i = 0; i < pares.length; i++) {
     pares[i] *= pares[i]
}
console.log(`Numeros pares elevado ao quadrado:`, pares);

// for... of  (para cada)
let soma = 0;
for (const valores of pares) {
     soma += valores;
}
console.log(`A soma dos numeros pares:`, soma);

// Array de objetos (variaveis compostas) ------------------;
const moveis = [
     {nome: "mesa", tam: "100cm", preço: 300.0, estoque: true },
     {nome: "armario", tam: "180cm", preço: 800.0, estoque: true },
     {nome: "balçao", tam: "100cm", preço: 700.0, estoque: false },
     {nome: "estante", tam: "170cm", preço: 600.0, estoque: true }
]

//find  (exibe so primeiro que encontrar na lista ) ------------------;
const produtos = moveis.find((produtos) => {
     return produtos.preço >= 700
})
console.log(produtos);

//filter  (exibe todos que encontrar na lista ) ------------------;
const produtos = moveis.filter((produtos) => {
     return produtos.preço >= 700
})
console.log(produtos);

//findIndex.()  (exibe a posição do objeto )------------------;
const indexProdutos = moveis.findIndex((produtos) => {
     return produtos.name === "armario"
})
console.log(indexProdutos);
console.log(moveis[indexProdutos].estoque= false)
console.log(moveis)

//map  ( mapear para mudar ) ------------------;
const produtosMoveis = moveis.map((produtos, index) => {
return "Produtos:" + produtos.nome
})
console.log(produtosMoveis);

//map exp 2  mudar uma propriedade ------------------;
const desconto = moveis.map((produtos, index) => {
     if ( produtos.preço >= 500.0 ){
          produtos.preço -= 20.0 ;
     }
     return  { 
          name: produtos.nome,
          preço: produtos.preço
     }
})
console.log(desconto);

// .reverse()  ( inverte lista )------------------;
console.log (moveis.reverse());

// .some() ( se pelo menos 1 retorna true ou false)
const produtoFalta = moveis.some((produto) => {
     return produto.estoque === false;
})
console.log(produtoFalta);

// .every() ( verifica se todos são true ou td é false )------------------;
const produtosFalta = moveis.every((produtos) => {
     return produtos.estoque === true;
})
console.log(produtosFalta);


// .reduce()  (simplifica reduz o array )------------------;
const valorEstoque = moveis.reduce((total, produtos) => {
     return total += produtos.preço
},0 )
console.log(valorEstoque);

// .push() ( adiciona elememnto no final)

//.pop () (remove o ultimo elemento)

// .shift () (remove o primeiro)

// .unshift () (adiciona um ou elemento e retorna novo comprimento)

// .splice () (altera o conteudo, adicionando, removendo ou substituindo)

// .slice () (retona uma copia de uma parte (intervalo) do array)

// .concat () (junta arrays)

// .reverse

// .join () ( junta os elementos do array e retorna uma string)

// .sort ()  (ordenação em ordem padrao (alf e num))

// .includes ( verificação do array seu valor)
*/