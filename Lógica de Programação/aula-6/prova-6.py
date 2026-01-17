
# Programa de autenticação de usuário.

login_correto = "usuario"
senha_correta = "123"

for i in range(3):
    login = input("Digite seu login: ")
    senha = input("Digite sua senha: ")
    if login == login_correto and senha == senha_correta:
        print("Bem-vindo!")
        break
    else:
        print("Login ou senha incorretos. Tente novamente.")
else:
    for i in range(3):
        print("Acesso bloqueado. Tente mais tarde.")