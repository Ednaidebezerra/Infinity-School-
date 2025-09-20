
const slogan = document.getElementById("slogan");

const listaTarefas = document.getElementsByClassName("lista-tarefas");

console.dir(listaTarefas);

const novaLinha = document.createElement ("li")
novaLinha.textContent = "Estudar JS";
novaLinha.className = "tarefa"  // nova tareva nova li
listaTarefas.appendChild(novaLinha);



// const nomeUsuario = prompt ("Digite seu nome:");
// if (nomeUsuario){
//     slogan.textContent += `, ${nomeUsuario} ! `;
// } else {
//     slogan.textContent += `, visitante ! `;
// }