
const numeros = [83, 17, 45, 92, 3, 64, 29, 78, 51, 12, 68, 34, 99, 7, 56, 23, 88, 40, 61, 5];

const pares = []

for (const valor of numeros) {
     if (valor % 2 === 0) {
          pares.push(valor)
     }
}
console.log(pares)

for (let i = 0; i < pares.length; i++) {
     pares[i] *= pares[i]
}
console.log(`Numeros pares elevado ao quadrado:`, pares);

let soma = 0;

for (const valores of pares) {
     soma += valores;
}
console.log(`A soma dos numeros pares:`, soma);


