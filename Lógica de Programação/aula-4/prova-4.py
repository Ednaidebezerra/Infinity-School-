
## soma de numeros pares no intervalo de numeros digitados pelo usuario.

inicio = int(input("Digite o número inicial do intervalo: "))
fim = int(input("Digite o número final do intervalo: "))

soma = 0
for i in range(inicio, fim + 1):
    if i % 2 == 0:
        soma += i

if soma == 0:
    print("Não há números pares no intervalo.")
else:
    print("A soma dos números pares no intervalo é:", soma)