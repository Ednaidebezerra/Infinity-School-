## for in
# for i in range(5):
#     for j in range(2):
#         print (i, j)   # i,j > 0,0 0,1 1,0 1,1 2,0 2,1 3,0 3,1 4,0 4,1

##calc
# expoente = int(input(" Digite um número: "))
# numero = int(input(" Digite outro número: "))
# resp = expoente ** numero
# print (resp)

## for in
# pares = []

# impares = []

# for i in range(10):
#     entrada = input("Digite dois números separados por espaço: ")
#     numeros = list(map(int, entrada.split()))

#     for numero in numeros:
#         if numero % 2 == 0:
#             pares.append(numero)
#         else:
#             impares.append(numero)

# print(f"Números pares: {pares}")
# print(f"Quantidade de números pares: {len(pares)}")
# print(f"Números ímpares: {impares}")
# print(f"Quantidade de números ímpares: {len(impares)}")

# piramide
for i in range(5, 0, -1):
    for j in range(i, 0, -1):
        print(j, end=' ')  # end=' ' > para não pular linha
    print()