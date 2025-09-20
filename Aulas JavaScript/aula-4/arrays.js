

//let moveis = ["armario", "Mesa", "prateleira"];
 //console.log(moveis[2]);

//.Push () adiciona no final da lista
//let moveis = ["armario", "Mesa", "prateleira"];
//moveis.push("cadeira")
//console.log(moveis[2]);

//.pop() elimina da lista na posição informada
//const moveis = ["armario", "Mesa", "prateleira"];
//moveis.pop();
 //console.log(moveis[1]); // indice 1 posição 2

 // .shift() (remove o elemento na primeira posição) indice ou posição 1 =0
 // .unshift() (adiciona o elemento na primeira posição)

 //.splice (inserir a apartir de)
//const moveis = ["armario", "Mesa", "prateleira"];//
// moveis.splice( 1, 0); // o primeiro é a qntdd e o segundo é o indice
//console.log(moveis[1]);

 // slice ( primeiro numero é inclusivo  e o ultimo é exclusivo )
 //.concat ()( junta as duas listas)
 //.reverse () (coloca a lista em ordem reversa)
 //.join() (junta e transforma a lista em uma string gigante)
 //.sort () ( ordena em ordem alfabetica) usando a função ((a,b) => a-b)
 //.includes () ( procura elemento na posição indicada e retorna true ou false)
 

let animais = ["jacare", "ovelha", "onça", "vaca", "girafa"];
animais.push("tartaruga")
animais.shift();
animais.push ("coelho");
animais.splice (2,1, "hamster")
console.log(animais.length);
console.log(animais [1]);
console.log(animais);

let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
for ( let i = 0; i< numeros.length; i++) {
    if (numeros[i] % 2 ===0){
        console.log (`O numero ${numeros[i]}é par!`)

    }else{
            console.log(`O numero ${numeros[i]} é impar!`)
        }
         console.log (numeros[1]);
    }
   
    

