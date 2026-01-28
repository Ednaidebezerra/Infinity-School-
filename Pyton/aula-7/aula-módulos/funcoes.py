
def soma (a, b):
    """Retorna a soma de dois números."""
    return a + b

def subtracao (a, b):
    """Retorna a subtração de dois números."""
    return a - b    
def multiplicacao (a, b):
    """Retorna a multiplicação de dois números."""
    return a * b
def divisao (a, b):
    if b == 0:
        raise ValueError("Não é possível dividir por zero.")
    return a / b
    """Retorna a divisão de dois números."""
    return a / b