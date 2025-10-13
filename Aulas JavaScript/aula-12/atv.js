
const idade = document.getElementById ('idade');
const bnt = document.getElementById ('bnt');

bnt.addEventListener('click', (e)=>{
  e.preventDefault()
  validarDados(idade.value)
});

//let nome = prompt("Qual seu nome?");
//let idade = parseInt(prompt("Qual sua idade?"));

function validarDados({ nome, idade }) {
    let dadosValidos = false;
   
    try {
        if (nome.length < 3) {
            throw new Error("Nome inválido!");
        }

        if (idade < 18) {
            throw new Error("Idade inválida!");
        }

        dadosValidos = true;

    } catch (err) {
        console.log(`Erro: ${err.message}`);
    } finally {
        const status = dadosValidos ? "válidos" : "inválidos";
        console.log(`Os dados são ${status}.`);
    }
}

validarDados({ nome, idade });


// function mult ( numA, numB){
//     return numA * numB 
// }
// function soma ( numA, numB){
//     return numA + numB 
// }

// function sub ( numA, numB){
//     return numA - numB 
// }

// function div (numA, numB) {
//     try {
//         if (numB === 0) {
//             throw new Error("Erro! Divisao por zero")
//         }
//         return numA / numB

//   } catch (err) {
//         console.log(`Erro: ${err.message}`);
//     } finally {
//         
//     }
// }