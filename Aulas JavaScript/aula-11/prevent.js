// ------------------------------
// CARREGAR LISTA AO INICIAR
// ------------------------------
document.addEventListener("DOMContentLoaded", function() {

    const lista = document.getElementById("lista");

    // Recupera dados salvos
    let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Adiciona cada usuário salvo à lista
    usuariosSalvos.forEach(function(user) {
        adicionarItemNaLista(user.usuario, user.email, user.telefone);
    });
});


// ------------------------------
// LIDAR COM O ENVIO DO FORMULÁRIO
// ------------------------------
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o reload

    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const mensagem = document.getElementById("mensagem");

    // Mostra mensagem
    mensagem.style.color = "green";
    mensagem.innerText = "Dados adicionados e salvos!";

    // Adiciona visualmente na lista
    adicionarItemNaLista(usuario, email, telefone);

    // Salva no localStorage
    salvarNoLocalStorage(usuario, email, telefone);

    // Limpa o formulário
    document.getElementById("formulario").reset();
});


// ------------------------------
// FUNÇÃO PARA CRIAR <li> NA LISTA
// ------------------------------
function adicionarItemNaLista(usuario, email, telefone) {
    const lista = document.getElementById("lista");

    const item = document.createElement("li");
    item.innerHTML = `Usuário: ${usuario} <br> Email: ${email} <br> Telefone: ${telefone}`;

    lista.appendChild(item);
}


// ------------------------------
// SALVAR NO LOCALSTORAGE
// ------------------------------
function salvarNoLocalStorage(usuario, email, telefone) {

    // Recupera dados existentes ou cria array vazio
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Adiciona novo usuário
    usuarios.push({
        usuario: usuario,
        email: email,
        telefone: telefone
    });

    // Salva novamente no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


// ------------------------------
// BOTÃO RESET — LIMPA TUDO
// ------------------------------
document.getElementById("resetar").addEventListener("click", function() {
    const lista = document.getElementById("lista");
    const mensagem = document.getElementById("mensagem");

    // Limpa a lista visualmente
    lista.innerHTML = "";

    // Remove do localStorage
    localStorage.removeItem("usuarios");

    mensagem.textContent = "Lista apagada e localStorage limpo.";
    mensagem.style.color = "red";
});
