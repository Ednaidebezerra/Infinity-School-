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
//const num2 = '15'

//console.log( num1 === num2) // true
//console.log( num1 !== num2) // 


// compara nonmal independente se é string ou number ==
//const num3 = 10 
//const num4 = 15

//console.log( num1 == num2) // false

const idade = parseInt(prompt ("Qual sua idade?"));

if ( idade >= 18 ) {
    console.log("Voce é maior de idade")
} else if (idade <= 0 ){
    console.log("nao")
}else {
    console.log("vc é menor de idade");
}

const tipoNumero = parseInt(prompt ("Digite um numero"));

if ( tipoNumero > 0  ) {
    
    console.log("Numero positivo")
} else if (tipoNumero < 0 ){
    console.log("numero negativo")
}else {
    console.log(" Número zero")
}