# Função com PARÂMETRO 
def somar(a, b):
    resultado = a + b      # cálculo
    return resultado       # RETORNO da função


# Chamando a função com ARGUMENTOS
total = somar(5, 3)

print("O resultado é:", total)

#-----------------------
def nome_completo(nome, sobrenome):
    return f"{nome} {sobrenome}"
idade = 20
                            #funçao       argumentos              variavel de retorno
nome_idade = f"meu nome é {nome_completo("Ana", "Silva")} e tenho {idade} anos."
print(nome_idade)