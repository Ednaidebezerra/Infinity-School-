document.getElementById("btnCarregar").addEventListener("click", carregarUsuarios);

async function carregarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    const erroMsg = document.getElementById("erro");

    // Limpa lista e mensagens anteriores
    lista.innerHTML = "";
    erroMsg.textContent = "";

    try {
        const resposta = await fetch("https://randomuser.me/api/?results=5");

        // Verifica status HTTP
        if (!resposta.ok) {
            throw new Error("Erro na resposta da API");
        }

        const dados = await resposta.json();

        const usuarios = dados.results;

        // Criar lista de usuários
        usuarios.forEach(usuario => {
            const item = document.createElement("li");

            const nome = `${usuario.name.first} ${usuario.name.last}`;
            const email = usuario.email;

            item.textContent = `${nome} - ${email}`;

            lista.appendChild(item);
        });

    } catch (erro) {
        erroMsg.textContent = "Erro ao carregar os usuários, tente novamente mais tarde.";
        console.error("Erro:", erro);
    }
}
