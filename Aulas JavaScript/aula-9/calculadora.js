
//ENTRADA PARA CADA LOGICA
let ul = document.querySelector("#tabuada");
let numero = window.prompt ('Digite um numero:');

// com > while -------------------;
// let i = 1;
// while (i<=10){
//     let resultado = numero * i;
//     //console.log(resultado);
//     ExibirNoHTML(numero, i, resultado);
//     i++;
// }

// com > do... while -------------------;
// let i = 1;
// do{
//     let resultado = numero * i;
//     console.log(resultado);
//     ExibirNoHTML(numero, i, resultado);
//     i++;
// }while (i<=10);

// // com > for -------------------;
// let numerosTabuada = []; 
//   for ( let i = 1; i <= 10; i++){
//     let resultado = numero * i;
//     console.log(resultado);
//     ExibirNoHTML(numero, i, resultado);
//   }

// com forEach -------------------;
let numerosTabuada = []; 
for ( let i = 1; i <= 10; i++){
  numerosTabuada.push(i);
}

numerosTabuada.forEach(function(n){
   let resultado = numero * n;
     console.log(resultado);
    ExibirNoHTML(numero, n, resultado);
})

function ExibirNoHTML (numero, i, resultado){
    let li = document.createElement('li');
    li.innerText = `${numero} * ${i} = ${resultado}`;
    ul.appendChild(li);
}
