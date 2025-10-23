/*
// OBJETOS LITERAIS

// CRIAR
let pessoa = {
    nome: " Edna",
    idade: 38,
    profissão: "Programadora"
};

// Manipulação dos objetos

// ACESSAR PROPRIEDADES DO OBJETO
console.log(pessoa.nome); // Edna

// ADICIONAR 
pessoa.profissão = "Desenvolvedora";
let pessoa = {
    nome: " Edna",
    idade: 38,
    profissão: "Programadora"
};

// APAGAR
delete pessoa.idade;
let pessoa = {
    nome: " Edna",
    profissão: "Programadora"
};

// ALTERAR
pessoa.idade = 35;
pessoa ["nome"] = "Edna";
let pessoa = {
    nome: " Edna",
    idade: 35,
    profissão: "Programadora"
};


// ARRAY DE OBEJETOS LITERAIS --------------; ok

// criando array de objetos a partir de entradas

let clientes = [];

 for (let i = 0; i < 2; i++) {
      const novoCliente = {
         nome: prompt("Qual seu nome?"),
         idade: parseInt(prompt("Qual sua idade?")),
        profissão: prompt("Qual sua profissao?"),
      };
    clientes.push(novoCliente)
    
 }
 console.log (clientes);


// FUNÇÃO CADASTRAR -------------; ok

const Cadastros = [];  // Inicialize o array antes do loop
//função   / variavel     /    parametros
function cadastrarPessoa(nome, idade, profissao) {
  const novoCadastro = {
    nome: nome,
    idade: idade,
    profissao: profissao,
  };
  Cadastros.push(novoCadastro);  // Adiciona o cadastro ao array
}

for (let i = 0; i < 2; i++) {
  const nome = prompt("Qual seu nome?");
  const idade = parseInt(prompt("Qual sua idade?"));
  const profissao = prompt("Qual sua profissão?");
  
  cadastrarPessoa(nome, idade, profissao);  // Chama a função para cadastrar
}

console.log(Cadastros);  // Exibe todos os cadastros


// Arrow function => e desestruturação
const extrairPropriedades = ( titulo, autor, ano, editora) => {
    const novoLivro = {
    "titulo": titulo,
    "autor": autor,
    "ano": ano,
    "editora": editora
    }
    const { titulo, autor} = livro
}
  const livro = {
    "titulo": prompt("Qual ?")
    "autor": prompt("Qual ?")
    "ano": prompt("Qual?")
    "editora": prompt("Qual ?")
  }

  let { titulo, autor} = livro;

  */

  // REST  OPERATOR (...)

  const exibirDetalhes = ( { material, cor, ...detalhes }) => {
    console.log( `Material: ${material}`);
    console.log( `Cor: ${cor}`);
    console.log( "Detalhes:", detalhes);
  };

  const estante = {
    material: "MDF naval",
    cor: " Amadeirado",
    tam: "180 cm x 63 cm x 30 cm",
    preco: 800.0
  };
  exibirDetalhes (estante);