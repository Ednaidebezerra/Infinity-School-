
const idade = parseInt(prompt("Qual a sua idade?"));
if (idade >= 18) {
    const inscrito = prompt("Você está inscrito ? S/N ");
    switch (inscrito) {
        case "S": alert("Registrado.")
            break;
        case "N": alert("Não registrado.");
            break;
        default: alert("Estatus desconhecido");
    }

} else {
    alert("Acesso limitado");
}



