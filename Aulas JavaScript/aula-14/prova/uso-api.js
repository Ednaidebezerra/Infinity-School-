document.getElementById("btnBuscar").addEventListener("click", buscarUsuario);

async function buscarUsuario() {
    const resultado = document.getElementById("resultado");
    const erroMsg = document.getElementById("erro");

    resultado.innerHTML = "";  // limpa antes
    erroMsg.textContent = "";  // limpa erros

    try {
        const resposta = await fetch("https://randomuser.me/api/");

        if (!resposta.ok) {
            throw new Error("Erro na resposta da API");
        }

        const dados = await resposta.json();
        const usuario = dados.results[0];

        // Criando elementos dinamicamente
        const container = document.createElement("div");

        const nome = document.createElement("p");
        nome.textContent = `Nome: ${usuario.name.first} ${usuario.name.last}`;

        const email = document.createElement("p");
        email.textContent = `Email: ${usuario.email}`;

        const imagem = document.createElement("img");
        imagem.src = usuario.picture.large;
        imagem.alt = "Foto do usuário";

        container.appendChild(imagem);
        container.appendChild(nome);
        container.appendChild(email);

        resultado.appendChild(container);

    } catch (erro) {
        erroMsg.textContent = "Erro ao buscar os dados. Tente novamente.";
        console.error("Erro: ", erro);
    }
}
