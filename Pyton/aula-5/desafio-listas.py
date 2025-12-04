
# Define a função que calcula a média de três números
def media (m1, m2, m3):
    return (m1 + m2 + m3) / 3 
  
# Solicita ao usuário que insira três números
entradas = input("Digite as notas: ")
valores = entradas.split()
m1, m2, m3 = map(float, valores)

print(f"A sua media é {media(m1, m2, m3):.2f}")

# form in range ()
lista = [80, 65, 20, 45, 58]
contador = 0
for i in range(5):
    contador = i + contador
print(f"A media {contador}")
   