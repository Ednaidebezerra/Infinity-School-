
import random

import math

import datetime

import bibliotecas_func


# exemplo de uso das funções importadas do módulo bibliotecas_func.py
# print(bibliotecas_func.calcular_diametro(5))
# print(bibliotecas_func.calcular_raiz_quadrada(25))
# print(bibliotecas_func.calcular_area_triangulo(5, 10))
# print(bibliotecas_func.calcular_area_retangulo(5, 10))
# print(bibliotecas_func.calcular_area_quadrado(5))


# menus para o usuário escolher qual cálculo deseja fazer
# exibir o menu while True: enquanto o usuário não digitar uma opção válida ou o poção sair.
while True:
    print("\nEscolha uma opção de cálculo:")
    print("1. Calcular diâmetro de um círculo")
    print("2. Calcular raiz quadrada de um número")
    print("3. Calcular área de um triângulo")
    print("4. Calcular área de um retângulo")
    print("5. Calcular área de um quadrado")
    print("6. Sair")

    opcao = input("Digite o número da opção desejada (1-6): ")

    if opcao == "1":
        raio = float(input("Digite o raio do círculo: "))
        print(f"O diâmetro do círculo é: {bibliotecas_func.calcular_diametro(raio)}")
    elif opcao == "2":
        numero = float(input("Digite um número para calcular a raiz quadrada: "))
        print(f"A raiz quadrada de {numero} é: {bibliotecas_func.calcular_raiz_quadrada(numero)}")
    elif opcao == "3":
        base = float(input("Digite a base do triângulo: "))
        altura = float(input("Digite a altura do triângulo: "))
        print(f"A área do triângulo é: {bibliotecas_func.calcular_area_triangulo(base, altura)}")
    elif opcao == "4":
        largura = float(input("Digite a largura do retângulo: "))
        altura = float(input("Digite a altura do retângulo: "))
        print(f"A área do retângulo é: {bibliotecas_func.calcular_area_retangulo(largura, altura)}")
    elif opcao == "5":
        lado = float(input("Digite o lado do quadrado: "))
        print(f"A área do quadrado é: {bibliotecas_func.calcular_area_quadrado(lado)}")
    elif opcao == "6":
        print("Saindo do programa...")
        break
    else:
        print("Opção inválida! Tente novamente.")

    
