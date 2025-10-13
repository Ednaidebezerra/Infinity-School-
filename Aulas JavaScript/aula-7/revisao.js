/*
// CONDICIONAIS  ----------------------; OK
const idade = parseInt(prompt("qual sua idade?"));

if (idade >= 18) {
    const inscrito = prompt("Você está inscrito ? S/N ");

    if (inscrito == "S") {
        alert("Registrado");

    } else if (inscrito == "N") {
        alert("Não registrado");
    } else {
        alert("Estatus desconhecido");
    }
} else {
    alert("Vc é menor de idade");
}

// 1 FOREACH () ----------------------; OK
 const numbers =[ 1, 2 ,4 ,5 ,6 ,7 ];

 numbers.forEach((numero, index) => {
    console.log(" O elemento no indice" + index + "é" + numero) // so leitura e mostra
 });

 // 2 MAP() ----------------------; OK
 const meusNumeros =[ 1, 2 ,4 ,5 ,6 ,7 ];
const squares = meusNumeros.map((numero) => {
    return numero * numero;
})
 console.log(squares);//[ percorre de devolve novo array 1,4,16,25, por ele msm]


 // 3 FILTER() ----------------------; OK
 const Numeros =[ 1, 2 ,4 ,5 ,6 ,7 ];
const everyNum = Numeros.filter((numero) => {
    return numero % 2 === 0 ;
})
 console.log(everyNum);//[ filtra pares ]

 // 4 REDUCE() ----------------------; OK
 const meusNumeros =[ 1, 2 ,4 ,5 ,6 ,7 ];
const sun = meusNumeros.reduce((acumulador, valorCorrente) => {
    return acumulador + valoCorrente;
})
 console.log(sun);//[ 15 soma numaro por numero]

 // 5 SOME() ----------------------; OK
 const meusNumeros =[ 1, 2 ,4 ,5 ,6 ,7 ];
const algum = meusNumeros.some((numero) => {
    return numero % 2 === 0;
})
 console.log(algum);//[true or false] 

 // 6 FIND() ----------------------; OK
 const meusNumeros =[ 1, 2 ,4 ,5 ,6 ,7 ];
const encontre = meusNumeros.find((numero) => {
    return numero % 2 === 0;
})
 console.log(encontre);//[ retorna o primeiro que encontra]
*/

// 7 EVERY() ----------------------; OK
const meusNumeros = [1, 2, 4, 5, 6, 7];
const todos = meusNumeros.every((numero) => {
    return numero % 2 === 0; // false
});
console.log(todos);  //[ verifica se todos atende a condição ] treu or false


