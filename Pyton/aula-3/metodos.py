# .append > adiciona elemento na lista
frutas = ["maçã", "banana"]
frutas.append("uva")

print(frutas) # Resultado: ['maçã', 'banana', 'uva']

# -----------------------
# .remove > remove elemento da lista
frutas = ["maçã", "banana", "uva"]
frutas.remove("uva")

print(frutas) # Resultado: ['maçã', 'banana']

# -----------------------
# .insert > insere elemento na lista em uma posição específica
frutas = ["maçã", "banana", "uva"]
frutas.insert(1, "morango")  # insere na posição 1

print(frutas) # Resultado: ['maçã', 'morango', 'banana', 'uva']

# -----------------------
 # .sort > ordena a lista
numeros = [5, 2, 9, 1]
numeros.sort()
print(numeros) # Resultado: [1, 2, 5, 9]

# -----------------------
# .pop > remove e retorna o último elemento da lista
frutas = ["maçã", "banana", "uva"]
removido = frutas.pop()

print(frutas)     # ['maçã', 'banana']
print(removido)   # 'uva'

# -----------------------
frutas = ["maçã", "banana", "uva"]
removido = frutas.pop(1)

print(frutas)     # ['maçã', 'uva']
print(removido)   # 'banana'
# -----------------------
# .clear > remove todos os elementos da lista
frutas = ["maçã", "banana", "uva"]
frutas.clear()

print(frutas) # []

# -----------------------
# .index > retorna o índice do elemento na lista
frutas = ["maçã", "banana", "uva"]
indice = frutas.index("banana")     # retorna o índice do elemento
print(indice) # Resultado: 1
# -----------------------
# .count > conta quantas vezes um elemento aparece na lista
frutas = ["maçã", "banana", "uva", "banana"]
contagem = frutas.count("banana")
print(contagem) # Resultado: 2
# -----------------------
# .extend > adiciona elementos de outra lista
frutas = ["maçã", "banana"]
outras_frutas = ["uva", "morango"]  # adiciona os elementos da lista 'outras_frutas' na lista 'frutas'
frutas.extend(outras_frutas)
print(frutas) # Resultado: ['maçã', 'banana', 'uva', 'morango']
# -----------------------
# .copy > cria uma cópia da lista
frutas = ["maçã", "banana", "uva"]
copia_frutas = frutas.copy()    # cria uma cópia da lista 'frutas'
print(copia_frutas) # Resultado: ['maçã', 'banana', 'uva
# -----------------------
