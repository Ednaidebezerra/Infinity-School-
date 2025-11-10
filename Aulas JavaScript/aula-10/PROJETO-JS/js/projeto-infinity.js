
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
    localStorage.clear();
    exibir();
    slogan.textContent = "Organize seus estudos"
    alert("Dados apagados com sucesso!")
})

function marcarComoConcluido(id) {
    let armazenadoLS = localStorage.getItem("tarefas");
    if (armazenadoLS) {
        let todasAsTarefas = JSON.parse(armazenadoLS);

        for (let index = 0; index < todasAsTarefas.length; index++) {
            const tarefa = todasAsTarefas[index];
            if (tarefa.id == id) {
                tarefa.situacao = "C";
                let tarefasString = JSON.stringify(todasAsTarefas);
                localStorage.setItem("tarefas", tarefasString);
            };
        }
    }

    exibir();
}

function removerTarefa(id) {
    let armazenadoLS = localStorage.getItem("tarefas");
    if (armazenadoLS) {
        let todasAsTarefas = JSON.parse(armazenadoLS);
        let novoArray = [];
        for (let index = 0; index < todasAsTarefas.length; index++) {
            const tarefa = todasAsTarefas[index];
            if (tarefa.id != id) {
                novoArray.push(tarefa);
            }
        }
        let tarefasString = JSON.stringify(novoArray);
        localStorage.setItem("tarefas", tarefasString);
    }

    exibir();
}

function adicionarTarefa(e) {
    e.preventDefault()
    const nome = e.target.previousElementSibling.value;

    let id = localStorage.getItem("id");
    if (!id) {
        id = 1;
    }

    const tarefa = {
        id: id,
        nome,
        situacao: "P"
    };

    localStorage.setItem("id", parseInt(id)+1);

    let armazenadoLS = localStorage.getItem("tarefas");
    if (!armazenadoLS) {
        let todasAsTarefas = [];
        todasAsTarefas.push(tarefa);
        let tarefasString = JSON.stringify(todasAsTarefas);
        localStorage.setItem("tarefas", tarefasString);
    } else {
        let todasAsTarefas = JSON.parse(armazenadoLS);
        todasAsTarefas.push(tarefa);
        let tarefasString = JSON.stringify(todasAsTarefas);
        localStorage.setItem("tarefas", tarefasString);
    }

    inputTarefa.value = ""
    inputTarefa.focus()
    exibir();
}

function exibir() {
    listaTarefas.innerHTML = "";
    let armazenadoLS = localStorage.getItem("tarefas");
    if (armazenadoLS) {
        let todasAsTarefas = JSON.parse(armazenadoLS);

        for (let index = 0; index < todasAsTarefas.length; index++) {
            const tarefa = todasAsTarefas[index];
            let situacaoTarefa = null;
            if (tarefa.situacao == "C") {
                situacaoTarefa = "tarefa-texto tarefa-concluida";
            } else {
                situacaoTarefa = "tarefa-texto";
            };

            const novaLinha = document.createElement("li")
            novaLinha.innerHTML = `<input type="checkbox" onchange="marcarComoConcluido(${tarefa.id})" >
    <p class="${situacaoTarefa}">${tarefa.nome}</p>
    <button class="btn-excluir" onclick="removerTarefa(${tarefa.id})">Excluir</button>
    `
            novaLinha.className = "tarefa"
            listaTarefas.appendChild(novaLinha)
        }
    }
    atualizarContador();
}

botaoAdd.addEventListener('click', adicionarTarefa)

function atualizarContador() {
    const qtdeTarefas = listaTarefas.children.length
    if (qtdeTarefas > 1) {
        semTarefas.style.display = "none"
    } else {
        semTarefas.style.display = "block"
    }
    contador.innerText = `Total de Tarefas: ${qtdeTarefas}`
}

// Fazer a lógica responsável por salvar as tarefas cadastradas no localStorage
// 1º passo: construir a estrutura de cada tarefa (ID, Nome, Status)
// 2º passo: armazenar uma tarefa criada em um array
// 3º passo: estudar como 'traduzir' o array em string
// 4º passo: armazenar no localStorage
// 5º passo: carregar informações do localStorage sempre que entrar na página


exibir();