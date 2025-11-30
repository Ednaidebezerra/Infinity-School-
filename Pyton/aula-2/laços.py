
#for in
frutas = ["maçã", "banana", "uva", "manga"]
for fruta in frutas:
    print(fruta)

#-----------------------
#range
for i in range(1, 6):
    print("Número:", i)
#-----------------------
for n in range(1, 11):
    if n % 2 == 0:
        print(n, "é par")

#-----------------------
#enumerate
frutas = ["maçã", "banana", "uva"]

for indice, fruta in enumerate(frutas):
    print(indice, fruta)

#-----------------------
#while
contador = 1

while contador <= 5:
    print("Contador:", contador)
    contador += 1
 #-----------------------
while True:
    resposta = input("Digite 'sair' para encerrar: ")
    if resposta == "sair":
        break

print("Programa encerrado.")

#-----------------------
#piramide
for i in range(5, 0, -1):
    for j in range(i, 0, -1):
        print(j, end=' ')  # end=' ' > para não pular linha
    print()

#-----------------------
nota = int(input("Digite uma nota entre 0 e 10: "))

while nota < 0 or nota > 10:
    print("Valor inválido!")
    nota = int(input("Digite novamente: "))

print("Nota válida:", nota)
#-----------------------