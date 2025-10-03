const slogan = document.getElementById("slogan");
const contador = document.getElementById("contador-tarefas");
const semTarefas = document.getElementById("sem-tarefas");
const botaoAdd = document.getElementById("botao-form");
const inputTarefas = document.getElementById("input-tarefa")
const listaTarefas = document.getElementById("lista-tarefas")
const tarefaConcluida = document.getElementById ("tarefa-texto")

// "e" de event
function adicionarTarefa(e) {
    console.dir(e)
    e.preventDefault();
    const novaLinha = document.createElement("li");
    novaLinha.innerHTML = ` <input type = " checkbox"  />
    <p class = "tarefa-texto"> ${e.target.previusElementSimbling.value}</p>
    <button class = " btn-excluir" onclick> excluir </button>
    `
    novaLinha.className = "tarefa"
    listaTarefas.appendChild(novaLinha)
    inputTarefas.value = ""
    inputTarefas.focus();
    atualizarContador();

}

botaoAdd.addEventListener('click', adicionarTarefa)

function atualizarContador() {
    const qtdeTarefas = listaTarefas.children.length
    if (qtdeTarefas > 1) {
        semTarefas.style.display = "none"
    }
}

function tarefaConcluida (e){
    e.target.nextElementSimbling.className +=

}
contador.innerText = `Total de Tarefas: ${qtdeTarefas - 1}`


// * Modifique o slogan a partir do nome que o usuário digitar
// const nomeUsuario = prompt("Digite o seu nome")
// if (nomeUsuario) {
//     slogan.textContent += `, ${nomeUsuario}!`
//     listaTarefas.style.backgroundColor = "blue"
// } else {
//     slogan.textContent += `, Visitante!`
// }


// * mostra a lista no console ( arvore DOM)
// console.dir(contador) 

botaoAdd.addEventListener('click', adicionarTarefa)

function atualizarContador() {
    const qtdeTarefas = listaTarefas.children.length
    if (qtdeTarefas > 1) {
        semTarefas.style.display = "none"
    }
    contador.innerText = `Total de Tarefas: ${qtdeTarefas - 1}`
}

let nomeUsuario
if (!localStorage.getItem('nome')){


}

if (!localStorage.getItem('nome')) {
     nomeUsuario = prompt("")
    if( nomeUsuario){
        localStorage.setItem ('nome', nomeUsuario)
        slogan.textContent += `, ${nomeUsuario}!`
    } else{
        slogan.textContent += `, visitante!`
    }
}