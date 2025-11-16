
//função assincrona com tratamento de erro
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