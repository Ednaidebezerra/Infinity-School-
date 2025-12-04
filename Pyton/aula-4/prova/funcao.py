# Define a função que calcula a média de três números
def media (m1, m2, m3):
    return (m1 + m2 + m3) / 3 
  
# Solicita ao usuário que insira três números
entradas = input("Digite três números separados por espaço: ")
valores = entradas.split()
m1, m2, m3 = map(float, valores)
soma = m1 + m2 + m3
print(f"A soma das notas é {soma}")
print(f"A sua media é {media(m1, m2, m3):.2f}")