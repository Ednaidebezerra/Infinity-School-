
## Identifica se o numero é positivo, negativo ou 0, usando F-strings; 

numero = int(input("Digite um número: "))
if numero > 0:
    print(f"O número {numero} é positivo.")
elif numero < 0:
    print(f"O número {numero} é negativo.")
else:
    print(f"O número {numero} é zero.")