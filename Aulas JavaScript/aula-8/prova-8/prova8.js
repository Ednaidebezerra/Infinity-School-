

let aluno = {

    nome: "Edna",

    notas: [9.0, 8.0, 6.0],

    calcularMedia: function () {
        const somaNotas = this.notas.reduce((s, i) => {
            return s + i;
        });
        const media = somaNotas / this.notas.length;
        return media;
    },
   

};

let { nome} = aluno;

console.log(nome);

console.log(aluno.notas);

aluno.notas = [...aluno.notas, 4]

console.log(aluno.notas);

console.log(aluno.calcularMedia());