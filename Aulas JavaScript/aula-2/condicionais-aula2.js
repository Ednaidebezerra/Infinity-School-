//ENTRADA
//const numeroUm = parseFloat ( prompt("digite um numero:")) ; // DECLARAÇÃO, TIPO, ENTRADA 
//const numeroDois = parseFloat ( prompt("digite um numero:")) ;
/// PROCESSAMENTO
//const ambosPositivos = numeroUm > 0 && numeroDois > 0 ;
//const peloMenosUmPositivo = numeroUm > 0 || numeroDois > 0 ;
//const nenhumPositivo = numeroUm < 0 && numeroDois < 0 ;

//SAIDA
//console.log ("ambos são positivo?", ambosPositivos);
//console.log ("Pelo menos um é positivo?", peloMenosUmPositivo);
//console.log ("nenhum é positivo?", nenhumPositivo);

// comparação nonmal separando tipo ===
//const num1 = 10 
//const num2 = '10'

//console.log( num1 === num2) // true
//console.log( num1 !== num2) // 


// compara nonmal independente se é string ou number ==
//const num3 = 10 
//const num4 = 15

//console.log( num1 == num2) // false


const idade = parseInt(prompt("Qual sua idade?"));

if ( idade >= 18 ){
    alert("Voce é maior de idade");
} else if (idade <= 0) {
    alert("invalido");
} else {
    alert("vc é menor de idade");
}
/*
const tipoNumero = parseInt(prompt("Digite um numero"));

if (tipoNumero > 0) {
   console.log("Numero positivo");
} else if (tipoNumero < 0) {
    console.log("numero negativo");
} else {
    console.log(" Número zero");
}

//ternarios condicionais 
let idades = 18;
let status = (idades >= 18) ? `maior de idade ` : `menor de idade`;

// explo: 2
var firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Access denied"
    : secondCheck
      ? "Access denied"
      : "Access granted";

console.log(access); // logs "Access granted"


// Switch case
let casosGerais= 2;
let situacao;

switch (casosGerais) {
    case 1:
        situacao = `Cadatrado`;
        console.log ("Cadatrado")
        break;

    case 2:
        situacao = `Novo cliente`;
        console.log ("Novo cliente")
        break;

    case 3:
        situacao = `compra finalizada`;
        console.log ("compra finalizada")
        break;

    default :
        console.log ("Desconhecido")
        break;
}
console.log(casosGerais); // novo cliente
*/