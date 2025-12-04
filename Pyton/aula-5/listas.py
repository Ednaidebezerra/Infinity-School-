#desenpacotamento de listas
unpakage = [1, 2, 3]
a, b, c = unpakage
print(a, b, c)

unpakage = [1, 2, 3, 4 ,5]
a, b, *d = unpakage
print(a, b, *d) #imprime 1 2 [3, 4, 5]


#listas
lista = [1, 2, 3, 4, 5]
print(lista) #imprime a lista inteira

# acessando elementos da lista
alunos = ['Ana', 15,["maiorIdade", False], 
        'Bia', 21 ["maiorIdade", True],
        'Carlos', 40 ["maiorIdade", True],
        'Daniel', 24 ["maiorIdade", True] ]
print(alunos[0][2]) #imprime o terceiro elemento [2] da lista de dentro da lista e o primeiro elemento [0] da lista alunos

# metodos de listas
alunos.append('Eduardo') #adiciona no final da lista
alunos.insert(0, 'Eduardo',28 ["maiorIdade", True],) #adiciona no começo da lista
alunos.pop(2) #remove o elemento da posição 2
alunos.remove('Bia') #remove o elemento Bia da lista
#alunos.clear() #limpa a lista
alunos.sort() #ordena a lista
alunos.reverse() #inverte a lista
alunos.copy() #copia a lista
alunos.count('Ana') #conta quantas vezes Ana aparece na lista
alunos.index('Carlos') #retorna a posição de Carlos na lista

# percorrendo listas
for aluno in alunos:
    print(aluno)

# compressão de listas
