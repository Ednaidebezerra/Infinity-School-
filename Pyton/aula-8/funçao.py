
## **Kwargs: função que recebe argumentos (chave = valor) nomeados arbitrários
# def mostrar_dados( **dados ):
#     for chave, valor in dados.items():
#         print(f"{chave}: {valor}")

# mostrar_dados(nome='Edna', idade=39, cidade='Recife')

# #--------------------------------------------------------

## *args - argumentos não nomeados
# def soma_numeros( *numeros ):
#     total = 0
#     for i in numeros:
#         total += i
#     return total

# print(soma_numeros(1, 2, 3, 4, 5)) # 15

# #--------------------------------------------------------

##calcular a média de uma lista de números usando *args

# def media_numeros( *numeros ):
#     total = 0
#     for i in numeros:
#         total += i
#     return total / len(numeros)

# print(media_numeros(1, 2, 3, 4, 5)) # 3.0

# #--------------------------------------------------------

## calcular a media de dois numeros com return e print
def media_dois_numeros( num1, num2 ):
    return (num1 + num2) / 2

resultado = media_dois_numeros(10, 20)
print(resultado) # 15.0


