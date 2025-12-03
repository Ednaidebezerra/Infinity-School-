
def media (n1, n2, n3):
    """
    Calcula a média aritmética de três números.

    Parâmetros:
    n1 (float): O primeiro número.
    n2 (float): O segundo número.
    n3 (float): O terceiro número.

    Retorna:
    float: A média aritmética dos três números.
    """
    return (n1 + n2 + n3) / 3   
# Solicita ao usuário que insira três números

entradas = input("Digite três números separados por espaço: ")
valores = entradas.split()
n1, n2, n3 = map(float, valores)
print(f"A sua media é {media(n1, n2, n3):.2f}")