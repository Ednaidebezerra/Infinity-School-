
# a = int(input ("Digite um número: "))
# b = int(input ("Digite um número: "))
# soma = a + b
# print(f" A soma de {a} + {b} é igual a {soma}")

# numero = int(input ("Digite a altura: "))
# antecessor = numero - 1 
# sucessor = numero + 1
# print(f" Antecessor de {numero} é {antecessor} e o sucessor é {sucessor}")


# altura = int(input ("Digite a altura: "))
# largura = int(input ("Digite a largura : "))
# area = altura * largura
# print(f"A area do retangulo é : {area} m2")

letras = ['A', 'B', 'C', 'D', 'E']
print(letras[-1])  # E

#metodos de listas
#append - adiciona um item no final da lista
#insert - adiciona um item em uma posição específica da lista
#remove - remove um item da lista
#pop - remove um item da lista por posição
#clear - limpa a lista
#copy - copia a lista
#count - conta a quantidade de itens em uma lista
#sort - ordena a lista
#reverse - inverte a lista

numeros = [10, 20, 30, 40, 50]

media = sum(numeros) / len(numeros)

print("Média:", media)
#----------------
numeros = [5, 1, 4, 3, 2]
numeros.sort()
print("Crescente:", numeros)
numeros.sort(reverse=True)
#----------------
numeros = [5, 1, 4, 3, 2]
numeros.sort(reverse=True)
print("Decrescente:", numeros)
#----------------
numeros = [5, 1, 4, 3, 2]

ordenada = sorted(numeros)          # crescente
ordenada_desc = sorted(numeros, reverse=True)

print(ordenada)
print(ordenada_desc)
#----------------
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

pares = [n for n in numeros if n % 2 == 0]

print("Pares:", pares)
#----------------
numeros = [1, 2, 2, 3, 4, 4, 5]

sem_duplicatas = list(set(numeros))

print(sem_duplicatas)
#----------------
numeros = [1, 2, 2, 3, 4, 4, 5]

sem_duplicatas = []
for n in numeros:
    if n not in sem_duplicatas:
        sem_duplicatas.append(n)

print(sem_duplicatas)
#----------------