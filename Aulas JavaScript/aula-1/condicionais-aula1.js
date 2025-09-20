/*
console.log("Heloow Wolrd")

let nome = prompt ("Qual o seu nome ?")
let idade = prompt ("Qual sua idade?")
console.log("Nome do usuario:" , nome + "A idade do usuaario:", idade )
//------
let soma = primeiroNum + segundoNum;
let subtracao = primeiroNum - segundoNum;
let sobra = primeiroNum % segundoNum;
let multiplicacao = primeiroNum * segundoNum;
let divisao = primeiroNum / segundoNum;
console.log(`Soma:, ${entradas} + subtração:, ${saidas} + resto:, ${sobra} + mult:, ${mult} + div:,${quociente} + potencia:, ${potencia}`)

*/


 //Calculadora

let operacao = prompt("soma: subtracao, sobra, multiplicacao, divisao: Escolha o tipo de operaçao:");
let primeiroNum = parseInt(prompt("Digite o primeiro numero:"));
let segundoNum = parseInt(prompt("Digite o segundo numero:"));

function calculo() {
    if (operacao == "soma") {
        return primeiroNum + segundoNum;
    } else if (operacao == "subtracao") {
        return primeiroNum - segundoNum;
    } else if (operacao == "sobra") {
        return primeiroNum % segundoNum;
    } else if (operacao == "multiplicacao") {
        return primeiroNum * segundoNum;
    } else if (operacao == "divisao") {
        return primeiroNum % segundoNum;
    } else {
        return "Numero invalido"
    }
}

let resultado = calculo();
alert(`O resultado é : ${resultado}`);




//operadores de atribuição

// let x = 10
// x += 5      // x = 15 





