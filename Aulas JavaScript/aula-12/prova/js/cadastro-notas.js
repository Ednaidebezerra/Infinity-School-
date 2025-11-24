// Estrutura principal no localStorage:
let dados = {
    "Primeiro bimestre": [],
    "Segundo bimestre": [],
    "Terceiro bimestre": [],
    "Quarto bimestre": []
};

// Carregar dados salvos
if (localStorage.getItem("notas")) {
    dados = JSON.parse(localStorage.getItem("notas"));
}

const selectTitulo = document.getElementById("titulo");
const inputNota = document.getElementById("nota");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

// Salvar no localStorage
function salvar() {
    localStorage.setItem("notas", JSON.stringify(dados));
}

// Renderizar tudo
function render() {
    lista.innerHTML = "";

    for (let titulo in dados) {
        const bloco = document.createElement("div");
        bloco.className = "bimestre";

        let notas = dados[titulo];
        let media = notas.length > 0 
            ? (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2)
            : "—";

        bloco.innerHTML = `
            <h3>${titulo}</h3>
            <div class="mediaBox">Média: <strong>${media}</strong></div>
        `;

        notas.forEach((valor, index) => {
            const item = document.createElement("div");
            item.className = "notaItem";

            item.innerHTML = `
                <span>Nota: ${valor}</span>
                <div class="buttons">
                    <button class="btnEdit" onclick="editarNota('${titulo}', ${index})">Editar</button>
                    <button class="btnDelete" onclick="excluirNota('${titulo}', ${index})">Excluir</button>
                </div>
            `;
            bloco.appendChild(item);
        });

        lista.appendChild(bloco);
    }
}

btnAdicionar.addEventListener("click", () => {
    const titulo = selectTitulo.value;
    const nota = parseFloat(inputNota.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Digite uma nota válida entre 0 e 10.");
        return;
    }

    if (dados[titulo].length >= 5) {
        alert("Esse bimestre já possui 5 notas.");
        return;
    }

    dados[titulo].push(nota);
    salvar();
    render();

    inputNota.value = "";
});

// Editar nota
function editarNota(titulo, index) {
    const novaNota = parseFloat(prompt("Digite a nova nota:", dados[titulo][index]));

    if (isNaN(novaNota) || novaNota < 0 || novaNota > 10) {
        alert("Nota inválida!");
        return;
    }

    dados[titulo][index] = novaNota;
    salvar();
    render();
}

// Excluir nota
function excluirNota(titulo, index) {
    if (confirm("Deseja excluir esta nota?")) {
        dados[titulo].splice(index, 1);
        salvar();
        render();
    }
}

// Inicializar interface
render();
