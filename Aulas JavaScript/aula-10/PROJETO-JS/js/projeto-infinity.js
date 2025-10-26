
const slogan = document.getElementById("slogan")
const contador = document.getElementById("contador-tarefas")
const semTarefas = document.getElementById("sem-tarefas")
const botaoAdd = document.getElementById('botao-form')
const listaTarefas = document.getElementById("lista-tarefas")
const inputTarefa = document.getElementById("input-tarefa")
const botaoLimpar = document.getElementById("limpar-btn")


let nomeUsuario
if (localStorage.getItem('nome') && localStorage.getItem('nome') !== "null") {
    nomeUsuario = localStorage.getItem('nome')
} else {
    nomeUsuario = prompt("Digite o seu nome")
    localStorage.setItem('nome', nomeUsuario)
}

if (nomeUsuario) {
    slogan.textContent += `, ${nomeUsuario}!`
} else {
    slogan.textContent += `, Visitante!`
}

botaoLimpar.addEventListener('click', () => {
    localStorage.removeItem('nome')
    slogan.textContent = "Organize seus estudos"
    alert("Dados apagados com sucesso!")
})

function marcarComoConcluido(e) {
    if (e.target.nextElementSibling.className.includes('tarefa-concluida')) {
        e.target.nextElementSibling.className = "tarefa-texto"
    } else {
        e.target.nextElementSibling.className += ' tarefa-concluida'
    }
}

function removerTarefa(e) {
    const tarefaASerRemovida = e.target.parentElement
    listaTarefas.removeChild(tarefaASerRemovida)
    atualizarContador()
}

function adicionarTarefa(e) {
    e.preventDefault()
    const novaLinha = document.createElement("li")
    novaLinha.innerHTML = `<input type="checkbox" onchange="marcarComoConcluido(event)" >
    <p class="tarefa-texto">${e.target.previousElementSibling.value}</p>
    <button class="btn-excluir" onclick="removerTarefa(event)">Excluir</button>
    `
    novaLinha.className = "tarefa"
    listaTarefas.appendChild(novaLinha)
    inputTarefa.value = ""
    inputTarefa.focus()
    atualizarContador()
}

botaoAdd.addEventListener('click', adicionarTarefa)

function atualizarContador() {
    const qtdeTarefas = listaTarefas.children.length
    if (qtdeTarefas > 1) {
        semTarefas.style.display = "none"
    } else {
        semTarefas.style.display = "block"
    }
    contador.innerText = `Total de Tarefas: ${qtdeTarefas - 1}`
}

// Fazer a lógica responsável por salvar as tarefas cadastradas no localStorage
// 1º passo: construir a estrutura de cada tarefa (ID, Nome, Status)
// 2º passo: armazenar uma tarefa criada em um array
// 3º passo: estudar como 'traduzir' o array em string 
// 4º passo: armazenar no localStorage
// 5º passo: carregar informações do localStorage sempre que entrar na página
