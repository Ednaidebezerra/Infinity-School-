// ---------------------------------------
// CARREGAR LISTA AO INICIAR
// ---------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    try {
        const lista = document.getElementById("lista");
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        usuarios.forEach(user => {
            adicionarItemNaLista(user);
        });

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
});


// ---------------------------------------
// ENVIO DO FORMULÁRIO
// ---------------------------------------
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem");

    try {
        // --------------------------
        // VALIDAÇÃO CAMPOS VAZIOS
        // --------------------------
        if (!nome || !usuario || !senha || !telefone || !nascimento || !email) {
            mensagem.textContent = "Preencha todos os campos antes de cadastrar.";
            mensagem.style.color = "red";
            return;
        }

        // --------------------------
        // CALCULAR IDADE
        // --------------------------
        const hoje = new Date();
        const dataNasc = new Date(nascimento);

        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const mes = hoje.getMonth() - dataNasc.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }

        // --------------------------
        // VALIDAR IDADE ≥ 18
        // --------------------------
        if (idade < 18) {
            mensagem.textContent = "Cadastro não permitido: usuário deve ter 18 anos ou mais.";
            mensagem.style.color = "red";
            return;
        }

        let novoUsuario = { nome, usuario, senha, telefone, nascimento, email, idade };

        adicionarItemNaLista(novoUsuario);
        salvarNoLocalStorage(novoUsuario);

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        document.getElementById("formulario").reset();

    } catch (erro) {
        mensagem.textContent = "Erro ao cadastrar usuário.";
        mensagem.style.color = "red";
        console.error(erro);
    }
});


// ---------------------------------------
// ADICIONAR ITEM NA LISTA
// ---------------------------------------
function adicionarItemNaLista(user) {
    const lista = document.getElementById("lista");

    const item = document.createElement("li");
    item.innerHTML = `
        <strong>Nome:</strong> ${user.nome} <br>
        Usuário: ${user.usuario} <br>
        Idade: ${user.idade} anos <br>
        Email: ${user.email} <br>
        Telefone: ${user.telefone} <br>
        Nascimento: ${user.nascimento}
    `;

    lista.appendChild(item);
}


// ---------------------------------------
// SALVAR NO LOCALSTORAGE
// ---------------------------------------
function salvarNoLocalStorage(usuarioObj) {
    try {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuarioObj);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } catch (erro) {
        console.error("Erro ao salvar no localStorage:", erro);
    }
}


// ---------------------------------------
// BOTÃO RESET — LIMPA TUDO
// ---------------------------------------
document.getElementById("resetar").addEventListener("click", () => {
    const lista = document.getElementById("lista");
    const mensagem = document.getElementById("mensagem");

    try {
        lista.innerHTML = "";
        localStorage.removeItem("usuarios");

        mensagem.textContent = "Lista apagada e localStorage limpo.";
        mensagem.style.color = "red";

    } catch (erro) {
        mensagem.textContent = "Erro ao apagar os dados.";
        mensagem.style.color = "red";
        console.error(erro);
    }
});
