
## Jogo de adivinhação.

numero_secreto = 3
tentativas = 0

while tentativas < 3:
    palpite = int(input("Adivinhe o número secreto entre 1 e 10: "))
    tentativas += 1

    if palpite == numero_secreto:
        print("Parabéns! Você acertou o número secreto!")
        break
    else:
        print("Você chegou perto, mas errou. Tente novamente.")
        if tentativas == 3:
            print("Suas tentativas acabaram. O número secreto era:", numero_secreto)
        
print("Fim do jogo.")

