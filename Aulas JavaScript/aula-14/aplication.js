// Cria o objeto pessoa
const pessoa = {
  nome: "Ana Souza",
  idade: 28,
  cidade: "Recife"
};

// Converte o objeto em uma string JSON
const pessoaJSON = JSON.stringify(pessoa);

// Exibe o resultado no console
console.log(pessoaJSON); // chave e valor saida{"nome":"Ana Souza","idade":28,"cidade":"Recife"}

// --------------------

// Exemplo de envio de dados JSON via XMLHttpRequest
xhr.open('POST', 'https://api.exemplo.com/usuario');
// Configura o cabeçalho para indicar que o corpo da requisição é JSON
xhr.setRequestHeader('Content-Type', 'application/json');
// Envia a string JSON no corpo da requisição
xhr.send(JSON.stringify({ nome: 'João', idade: 30 }));