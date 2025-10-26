

// transmando objeto em JSON

// const pessoa = {
//     nome: "Edna",
//     idade: 35,
//     cidade: "Recife"
// } 

//  JSON.stringify(pessoa)
//  console.log(pessoa)


async function buscarUsuarios() {
    try {
        const resposta = await fetch("https://thesimpsonsapi.com/api/characters")
        const dados = await resposta.json();
        console.log(dados)
    } catch (err){
      console.error('Erro', err)
    }
} 

buscarUsuarios()