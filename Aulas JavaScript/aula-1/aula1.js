/*
console.log("Heloow Wolrd")

let nome = prompt ("Qual o seu nome ?")
let idade = prompt ("Qual sua idade?")

console.log("Nome do usuario:" , nome + "A idade do usuaario:", idade )
*/


//onsole.log( "Soma:",  entradas +  "subtração:",  saidas + "resto:",  sobra + "mult:",  mult + "div", quociente + "potencia:",  potencia);



let operacao = prompt("Escolha o tipo de operaçao");
let primeiroNum = parseInt(prompt("Digite o primeiro numero"));
let segundoNum = parseInt(prompt("Digite o segundo numero"));

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








