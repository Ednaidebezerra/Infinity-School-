let aluno = {

    nome: "Edna",
    idade: 35,
    notas: [9.0, 8.0, 6.0],

    calcularMedia: function () {
        const somaNotas = this.notas.reduce((s, i) => {
            return s + i;
        });
        const media = somaNotas / this.notas.length;
        return media;
    },
    verificarSituacao: function (media) {
        if (media >= 7.0) {
            console.log(`A media do aluno ${this.nome} é ${media}, aluno aprovado.`)
        }
        else if (media < 7.0 && media > 0) {
            console.log(`A media é ${media}, aluno reprovado.`)
        } else {
            console.log("Verificar informações")
        }
    },

    exibirNotas: function () {
        for (nota of this.notas) {
            console.log(nota);
        }

    },

};


let { nome, idade } = aluno;

console.log(nome, idade);

//console.log(aluno.notas);

aluno.notas = [...aluno.notas, 8]

console.log(aluno.notas);

console.log(aluno.calcularMedia());

var mediaCalculada = aluno.calcularMedia();

aluno.verificarSituacao(mediaCalculada.toFixed(2));

//aluno.exibirNotas();