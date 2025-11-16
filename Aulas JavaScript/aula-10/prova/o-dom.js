// ======== SELETORES ==========
const slogan = document.getElementById("slogan");
const contador = document.getElementById("contador-tarefas");
const semTarefas = document.getElementById("sem-tarefas");
const botaoAdd = document.getElementById("botao-form");
const listaTarefas = document.getElementById("lista-tarefas");
const inputTarefa = document.getElementById("input-tarefa");
const botaoLimpar = document.getElementById("limpar-bnt");

// ======== USUÁRIO ============
let nomeUsuario;
if (localStorage.getItem('nome') && localStorage.getItem('nome') !== "null") {
    nomeUsuario = localStorage.getItem('nome');
} else {
    nomeUsuario = prompt("Digite o seu nome");
    localStorage.setItem('nome', nomeUsuario);
}

slogan.textContent += nomeUsuario ? `, ${nomeUsuario}!` : ", Visitante!";

botaoLimpar.addEventListener('click', () => {
    localStorage.removeItem('nome');
    slogan.textContent = "Organize seus estudos";
    alert("Dados apagados com sucesso!");
});

// ======== LISTA DE TAREFAS ============
let listaDeTarefas = [];

// Renderizar uma tarefa na tela
function renderizarTarefa(tarefa) {
    const li = document.createElement("li");
    li.className = "tarefa";

    li.innerHTML = `
        <input type="checkbox" class="chk" ${tarefa.status ? "checked" : ""}>
        <p class="tarefa-texto ${tarefa.status ? "tarefa-concluida" : ""}">
            ${tarefa.nome}
        </p>
        <button class="btn-excluir">Excluir</button>
    `;

    // Evento de marcar
    li.querySelector(".chk").addEventListener("change", () => {
        alternarStatus(tarefa.id);
    });

    // Evento de remover
    li.querySelector(".btn-excluir").addEventListener("click", () => {
        removerTarefa(tarefa.id);
    });

    listaTarefas.appendChild(li);
}

// Adicionar tarefa
function adicionarTarefa(e) {
    e.preventDefault();

    const texto = inputTarefa.value.trim();
    if (texto === "") return;

    const novaTarefa = {
        id: Date.now(),
        nome: texto,
        status: false
    };

    listaDeTarefas.push(novaTarefa);
    salvarNoLocalStorage();
    renderizarTarefa(novaTarefa);

    inputTarefa.value = "";
    inputTarefa.focus();
    atualizarContador();
}

botaoAdd.addEventListener("click", adicionarTarefa);

// Alternar status (concluída ou não)
function alternarStatus(id) {
    listaDeTarefas = listaDeTarefas.map(tarefa => {
        if (tarefa.id === id) tarefa.status = !tarefa.status;
        return tarefa;
    });

    salvarNoLocalStorage();
    recarregarLista();
}

// Remover tarefa
function removerTarefa(id) {
    listaDeTarefas = listaDeTarefas.filter(t => t.id !== id);
    salvarNoLocalStorage();
    recarregarLista();
}

// Atualizar contador e mensagem "sem tarefas"
function atualizarContador() {
    const quantidade = listaDeTarefas.length;

    if (quantidade > 0) {
        semTarefas.style.display = "none";
    } else {
        semTarefas.style.display = "block";
    }

    contador.textContent = `Total de Tarefas: ${quantidade}`;
}

// Salvar no LocalStorage
function salvarNoLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas));
}

// Recarregar interface
function recarregarLista() {
    listaTarefas.innerHTML = "";
    listaDeTarefas.forEach(tarefa => renderizarTarefa(tarefa));
    atualizarContador();
}

// Carregar localStorage ao abrir a página
function carregarDoLocalStorage() {
    const dados = localStorage.getItem("tarefas");
    if (dados) {
        listaDeTarefas = JSON.parse(dados);
        recarregarLista();
    }
}

carregarDoLocalStorage();
atualizarContador();