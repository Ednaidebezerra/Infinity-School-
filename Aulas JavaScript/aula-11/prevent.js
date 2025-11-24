document.getElementById("formulario").addEventListener("submit", function(event) {

    // Impede o envio tradicional do formulário (recarregar a página)
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const email = document.getElementById("email").value.trim();

    let mensagem = document.getElementById("mensagem");

    // Validações simples
    if (usuario.length < 3) {
        mensagem.innerText = "O usuário deve ter pelo menos 3 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.innerText = "A senha deve ter pelo menos 6 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    if (!telefone.match(/^\(\d{2}\)\d{5}-\d{4}$/)) {
        mensagem.innerText = "Telefone deve estar no formato (xx) xxxxx-xxxx.";
        mensagem.style.color = "red";
        return;
    }

    if (email.indexOf("@") === -1) {
        mensagem.innerText = "E-mail inválido!";
        mensagem.style.color = "red";
        return;
    }

    // Se tudo estiver válido
    mensagem.innerText = "Formulário enviado com sucesso! (sem recarregar a página)";
    mensagem.style.color = "green";

    // Aqui você poderia enviar os dados para um servidor
    // usando fetch(), AJAX ou armazenar no localStorage.
    localStorage.setItem("usuario", JSON.stringify({
        usuario: usuario,
        senha: senha, 
        telefone: telefone,
        nascimento: nascimento,
        email: email
    }));
});