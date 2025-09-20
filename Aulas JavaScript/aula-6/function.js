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
   console.log(`O valor com desnconto de ${calcDesconto} ${precoFinal}`) ;
}
let preco = parseFloat(prompt("Digite o preço do produto"));
let desconto = parseFloat(prompt("Digite o desconto em %")); 
calcularDesconto ( preco, desconto);


//  somado os numeros--------------; ok
function calcularSoma ( ...numeros){
    let soma = 0;
    for( const numero of numeros)
        soma += numero;
    console.log ( `A soma dos numeros é: ${soma} `)
}
calcularSoma ( 50, 20, 30, 200) //calcula os numeros 


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
*/
// FUNÇÃO ANONIMA 
let saudacao = function (nome){
    return "ola," + nome " ! " ;
}
console.log (saudacao("Ana"))

