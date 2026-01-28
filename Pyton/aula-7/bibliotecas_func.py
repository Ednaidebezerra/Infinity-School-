import math

import random
# funções que utilizam bibliotecas padrão do Python

# função que cacula o diametro de um círculo dado o raio
def calcular_diametro(raio):
    diametro = 2 * raio
    return diametro
# função que calcula a raiz quadrada de um número
def calcular_raiz_quadrada(numero):
    raiz = math.sqrt(numero)
    return raiz 
# função que cacula a area de um triângulo
def calcular_area_triangulo(base, altura):
    area = (base * altura) / 2
    return area
# função que calcula a area de um retangulo
def calcular_area_retangulo(largura, altura):
    area = largura * altura
    return area
# função que calcula a area de um quadrado
def calcular_area_quadrado(lado):
    area = lado ** 2
    return area