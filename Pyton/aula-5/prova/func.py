
# Função para encontrar o maior número entre três números
def maior_numero ( num1, num2, num3):
    if num1 > num2 and num1 > num3:
        return num1
    elif num2 > num1 and num2 > num3:
        return num2
    else:
        return num3
    
# Chamada da função com os três números
maior = maior_numero(10, 5, 8)
print(f"O maior número é: {maior}")