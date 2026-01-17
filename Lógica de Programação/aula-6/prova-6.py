
# esta aplicação solicita login e senha do usuário com 3 tentativas e valida se estão corretos, se nao tiver corretos, exibe mensagem de erro
# se estiverem corretos, exibe uma mensagem de boas-vindas
login_correto = "usuario123"
senha_correta = "12345"

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