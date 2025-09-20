
 const todosOsAlunos = []

function cadastrarNotas() {
    const notas = []
    for (let limite = 1; limite <= 5; limite++) {
        const novaNota = parseFloat(prompt(`Digite a ${limite}ª nota`))
        notas.push(novaNota)
    }
    return notas
}

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0)
    return soma / notas.length
}

while (true) {
    const op = parseInt(prompt(`
        Escolha uma opção:
        1 - Cadastrar aluno
        2 - Mostrar aluno com maior média
        3 - Sair
    `))

    if (op === 1) {
        const novoAluno = {
            "nome": prompt("Digite o nome do aluno"),
            "idade": parseInt(prompt("Digite a idade do aluno")),
            "matrícula": prompt("Digite a matrícula"),
            "notas": cadastrarNotas()
        }
        todosOsAlunos.push(novoAluno)
        alert("Aluno cadastrado com sucesso!")

    } else if (op === 2) {
        if (todosOsAlunos.length === 0) {
            alert("Nenhum aluno cadastrado!")
            continue
        }

        let alunoComMaiorMedia = todosOsAlunos[0]
        let maiorMedia = calcularMedia(alunoComMaiorMedia.notas)

        for (const aluno of todosOsAlunos) {
            const mediaAtual = calcularMedia(aluno.notas)
            if (mediaAtual > maiorMedia) {
                maiorMedia = mediaAtual
                alunoComMaiorMedia = aluno
            }
        }

        alert(`Aluno com a maior média: ${alunoComMaiorMedia.nome}\nMédia: ${maiorMedia.toFixed(2)}`)
        
    } else if (op === 3) {
        alert("Saindo do programa")
        break
    } else {
        alert("Opção inválida! Tente novamente.")
    }
}




